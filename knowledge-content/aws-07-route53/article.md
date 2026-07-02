# Amazon Route 53 – Dịch vụ DNS

## 1. Tổng quan (DNS + Route 53)

**DNS** (Domain Name System) là "danh bạ" của Internet: nó phân giải tên miền dễ nhớ (`example.com`) thành địa chỉ IP mà máy tính cần để kết nối (`93.184.216.34`). Không có DNS, ta sẽ phải nhớ IP thay vì tên.

**Amazon Route 53** là dịch vụ DNS được quản lý (managed) của AWS. Con số "53" chính là cổng của giao thức DNS. Route 53 vừa là:

- **Authoritative DNS** — bạn toàn quyền cấu hình bản ghi, và Route 53 là nguồn chính thức trả lời truy vấn cho domain của bạn.
- **Domain Registrar** — bạn có thể mua/đăng ký tên miền trực tiếp trên Route 53.
- Cung cấp cả **health check** để giám sát endpoint.

Điểm nổi bật thi hay hỏi: Route 53 là dịch vụ AWS **duy nhất cam kết SLA 100%** availability.

---

## 2. Cơ bản về DNS & các loại bản ghi

Một truy vấn DNS đi qua nhiều tầng: máy client hỏi **DNS Resolver** (thường của ISP), resolver hỏi **Root server** → **TLD server** (`.com`, `.vn`...) → **Authoritative server** (Route 53) để lấy IP cuối cùng, rồi cache lại theo TTL.

Các loại bản ghi (record type) quan trọng cho SAA-C03:

| Bản ghi | Ý nghĩa | Ví dụ |
|---------|---------|-------|
| `A` | Ánh xạ hostname → địa chỉ `IPv4` | `example.com → 93.184.216.34` |
| `AAAA` | Ánh xạ hostname → địa chỉ `IPv6` | `example.com → 2606:2800::...` |
| `CNAME` | Ánh xạ hostname → một hostname khác | `www.example.com → example.com` |
| `NS` | Nameserver của hosted zone (server nào trả lời cho domain) | `ns-123.awsdns-45.com` |

Ngoài ra còn có `MX` (mail server), `TXT` (xác minh domain, `SPF`, `DKIM`)... nhưng bốn loại trên là trọng tâm.

---

## 3. Route 53 & Hosted Zones (public vs private)

**Hosted zone** là một "container" chứa các bản ghi mô tả cách định tuyến traffic cho một domain và các subdomain của nó.

- **Public Hosted Zone** — trả lời truy vấn đến từ **Internet công cộng**. Dùng khi bạn muốn người dùng ngoài Internet truy cập `app.example.com`.
- **Private Hosted Zone** — chỉ trả lời truy vấn **bên trong một hoặc nhiều VPC** mà bạn liên kết. Dùng cho tên miền nội bộ như `db.internal.company` mà không lộ ra ngoài Internet.

Khi tạo một public hosted zone, Route 53 cấp cho bạn một tập **bản ghi `NS`**; bạn khai báo các nameserver này tại registrar để "trỏ" domain về Route 53.

Chi phí: mỗi hosted zone tính phí hàng tháng, cộng phí theo số truy vấn.

---

## 4. TTL (Time To Live)

**TTL** là số giây mà một bản ghi DNS được **cache** ở phía client/resolver trước khi phải hỏi lại Route 53.

- **TTL cao** (vd 24 giờ): ít truy vấn đến Route 53 → rẻ hơn, nhưng khi đổi bản ghi thì thay đổi lan truyền chậm (client vẫn dùng giá trị cũ trong cache đến khi hết TTL).
- **TTL thấp** (vd 60 giây): traffic đến Route 53 nhiều hơn (tốn phí hơn) nhưng thay đổi áp dụng nhanh — hữu ích khi sắp migration.

Mẹo thực tế: **hạ TTL xuống thấp trước khi thay đổi lớn**, đổi xong ổn định rồi mới nâng TTL lên.

Lưu ý quan trọng: với **Alias record**, bạn **không đặt được TTL** — Route 53 tự quản lý TTL cho bạn.

---

## 5. CNAME vs Alias

Đây là chủ đề gần như chắc chắn xuất hiện trong đề thi.

- **CNAME**: trỏ một hostname đến **một hostname khác** (bất kỳ, kể cả ngoài AWS). Hạn chế lớn: **KHÔNG dùng được ở zone apex / root domain** (tức `example.com` "trần", không có subdomain). Chỉ dùng cho subdomain như `www.example.com`.
- **Alias**: là phần mở rộng riêng của Route 53. Nó ánh xạ hostname đến một **tài nguyên AWS** (ELB, CloudFront, S3 static website, API Gateway, thậm chí một bản ghi khác trong cùng zone). Alias **MIỄN PHÍ**, **dùng được ở zone apex**, luôn có kiểu `A`/`AAAA`, và **không đặt TTL** (Route 53 tự lo).

| Tiêu chí | `CNAME` | `Alias` |
|----------|---------|---------|
| Trỏ tới | Bất kỳ hostname nào (AWS hay không) | Chỉ tài nguyên **AWS** (ELB, CloudFront, S3, API GW...) |
| Zone apex (root domain) | **KHÔNG** dùng được | **CÓ** — dùng tốt ở apex |
| Kiểu bản ghi | `CNAME` | `A` hoặc `AAAA` |
| TTL | Bạn tự đặt | AWS quản lý (không đặt được) |
| Chi phí truy vấn | Có tính phí | **Miễn phí** |

Quy tắc nhớ: **cần trỏ root domain (`example.com`) đến một ELB/CloudFront/S3 → phải dùng Alias, không dùng được CNAME.**

---

## 6. Routing Policies — tổng quan

Routing policy quyết định Route 53 trả lời truy vấn như thế nào. Lưu ý: routing policy ở đây **không** định tuyến traffic mạng thật sự như một load balancer — nó chỉ quyết định **trả về giá trị (IP/hostname) nào** cho truy vấn DNS.

### Simple

Trả về một bản ghi. Có thể chứa **nhiều giá trị** trong cùng một bản ghi — khi đó Route 53 trả về tất cả và **client tự chọn ngẫu nhiên**. Simple routing **không hỗ trợ health check**.

### Weighted (theo trọng số)

Chia traffic theo **trọng số (weight)** giữa nhiều tài nguyên. Ví dụ 90/10 để làm **canary** hoặc thử nghiệm phiên bản mới. Đặt weight = 0 để tạm ngừng gửi traffic tới một tài nguyên. Có hỗ trợ health check.

### Latency-based (theo độ trễ)

Định tuyến tới **Region có độ trễ (latency) thấp nhất** đối với người dùng. Chú ý: là **latency thấp nhất**, KHÔNG nhất thiết là Region gần nhất về mặt địa lý.

### Failover (active-passive)

Có một tài nguyên **primary** và một **secondary (dự phòng)**. Route 53 **BẮT BUỘC** phải có **health check gắn trên primary**; khi primary unhealthy, Route 53 tự chuyển traffic sang secondary.

### Geolocation (theo vị trí địa lý)

Định tuyến dựa trên **vị trí thực tế của người dùng** (theo lục địa, quốc gia, hoặc bang ở Mỹ). Dùng cho bản địa hóa nội dung/ngôn ngữ hay tuân thủ quy định. Nên cấu hình một **bản ghi mặc định (default)** cho các vị trí không khớp.

### Geoproximity (theo khoảng cách + bias)

Định tuyến dựa trên vị trí địa lý của **người dùng và tài nguyên**, nhưng cho phép đặt **bias** để **mở rộng/thu hẹp** vùng phục vụ của một tài nguyên, dịch chuyển traffic có chủ đích. Cần bật **Route 53 Traffic Flow** để dùng.

### Multi-Value Answer

Trả về **tối đa 8 bản ghi healthy** cho mỗi truy vấn; client tự chọn. Có gắn health check nên chỉ trả về bản ghi khỏe mạnh. Đây là dạng cân bằng tải phía client cơ bản — **KHÔNG thay thế cho một load balancer (ELB)** thực thụ.

### Bảng so sánh routing policies

| Policy | Ý tưởng chính | Health check | Khi nào dùng |
|--------|---------------|--------------|--------------|
| **Simple** | 1 bản ghi (có thể nhiều giá trị), client chọn ngẫu nhiên | Không hỗ trợ | Trỏ đơn giản tới 1 tài nguyên |
| **Weighted** | Chia traffic theo trọng số | Có | Canary, A/B, chuyển dần |
| **Latency** | Region có latency thấp nhất | Có | Tối ưu tốc độ đa Region |
| **Failover** | Active-passive; primary + secondary | **Bắt buộc** trên primary | Dự phòng, disaster recovery |
| **Geolocation** | Theo vị trí thật của user | Có | Bản địa hóa, tuân thủ pháp lý |
| **Geoproximity** | Theo khoảng cách + bias dịch traffic | Có | Dịch chuyển traffic giữa Region |
| **Multi-Value** | Tối đa 8 bản ghi healthy, client chọn | Có | LB phía client đơn giản |

---

## 7. Health Checks

Health check giám sát "sức khỏe" của tài nguyên và cho phép Route 53 tự động loại bỏ endpoint hỏng khỏi kết quả trả về. Có 3 loại:

- **Endpoint health check** — giám sát một **public endpoint** (theo IP hoặc domain, qua `HTTP`/`HTTPS`/`TCP`). Khoảng **15 health checker toàn cầu** của AWS gửi request; endpoint được coi là healthy/unhealthy dựa trên **ngưỡng (threshold)**. Endpoint phải **truy cập được từ Internet công cộng**.
- **Calculated health check** — **kết hợp nhiều child health check** bằng logic AND/OR/NOT; healthy khi số lượng child healthy đạt ngưỡng. Dùng để đánh giá sức khỏe tổng hợp của cả hệ thống.
- **CloudWatch Alarm health check** — dựa trên trạng thái của một **CloudWatch Alarm**. Đây là cách để giám sát **tài nguyên riêng tư (private)** không lộ ra Internet: bạn tạo metric/alarm trong CloudWatch rồi để health check theo dõi alarm đó.

| Loại health check | Giám sát gì | Trường hợp dùng |
|-------------------|-------------|-----------------|
| **Endpoint** | Public endpoint qua HTTP/HTTPS/TCP, ~15 checker toàn cầu | App/endpoint công khai |
| **Calculated** | Kết hợp nhiều child health check (AND/OR/NOT) | Đánh giá sức khỏe tổng thể |
| **CloudWatch Alarm** | Trạng thái một CloudWatch Alarm | Tài nguyên **private** / theo metric |

---

## Điểm thi quan trọng

- **Trỏ zone apex / root domain (`example.com`) tới tài nguyên AWS như ELB, CloudFront, S3 website, API Gateway → phải dùng `Alias`, KHÔNG dùng được `CNAME`.**
- `Alias` **miễn phí**, chỉ trỏ tới **tài nguyên AWS**, luôn kiểu `A`/`AAAA`, và **không đặt được TTL**.
- `CNAME` trỏ tới hostname bất kỳ nhưng **không dùng được ở zone apex**.
- **Latency-based** = Region có **độ trễ thấp nhất** (không phải gần nhất về địa lý). **Geolocation** = theo **vị trí thật của người dùng** và nên có **bản ghi mặc định**.
- **Failover** routing **BẮT BUỘC** có **health check gắn trên primary**.
- **Multi-Value Answer** trả tối đa **8 bản ghi healthy**, hoạt động phía client, **không thay thế ELB**.
- Health check cho **tài nguyên private** → dùng **CloudWatch Alarm health check**.
- Route 53 cam kết **SLA 100%** availability.

## Tóm tắt

- **Route 53** = DNS được quản lý của AWS + registrar + health check, với **SLA 100%**.
- **Hosted zone** chứa bản ghi: **public** (Internet) hoặc **private** (trong VPC).
- **CNAME vs Alias**: dùng `Alias` (miễn phí, kiểu `A`/`AAAA`, không TTL) khi cần trỏ **root domain** tới **tài nguyên AWS**; `CNAME` chỉ dùng cho subdomain.
- **Routing policies**: Simple, Weighted (canary), Latency (Region nhanh nhất), Failover (cần health check), Geolocation (theo vị trí + default), Geoproximity (bias), Multi-Value (≤8 bản ghi healthy).
- **Health check**: Endpoint (public), Calculated (kết hợp), CloudWatch Alarm (cho tài nguyên private).
