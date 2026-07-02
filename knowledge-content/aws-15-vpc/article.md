# Amazon VPC – Mạng ảo riêng trên AWS

## 1. Tổng quan

`Amazon VPC` (Virtual Private Cloud) là **mạng ảo riêng** do bạn tự định nghĩa và kiểm soát bên trong một AWS Region. Nó cho phép bạn khởi chạy tài nguyên (EC2, RDS, Lambda...) trong một không gian mạng cô lập, với toàn quyền kiểm soát dải IP, subnet, bảng định tuyến (route table), gateway và các lớp bảo mật.

VPC là chủ đề **cực kỳ quan trọng trong kỳ thi SAA-C03**. Rất nhiều câu hỏi tình huống xoay quanh: subnet public vs private, cho instance private ra Internet, khác biệt `Security Group` (stateful) vs `NACL` (stateless), chọn `VPC Endpoint` để truy cập S3 mà không qua Internet, và các phương án kết nối hybrid (VPN vs Direct Connect vs Transit Gateway).

Điểm cốt lõi cần nhớ:
- `VPC` gắn với **1 Region**; `subnet` gắn với **1 Availability Zone (AZ)**.
- `Security Group` là **stateful**, `NACL` là **stateless**.
- `NAT Gateway` cho instance ở subnet private ra Internet mà không nhận kết nối vào.
- `Gateway Endpoint` (S3/DynamoDB) là **miễn phí**; `Interface Endpoint` (PrivateLink) tính phí.
- `VPC Peering` **không mang tính bắc cầu (non-transitive)**.

---

## 2. VPC, CIDR & Subnets

Khi tạo VPC, bạn chọn một dải địa chỉ IP riêng bằng **CIDR block**, ví dụ `10.0.0.0/16` (65.536 IP). Nên dùng dải IP private (RFC 1918): `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.

**Subnet** chia nhỏ VPC thành các phân đoạn mạng, mỗi subnet có CIDR con (ví dụ `10.0.1.0/24` = 256 IP). Mỗi subnet nằm trong **đúng 1 AZ** — đây là lý do ta tạo nhiều subnet ở nhiều AZ để đạt tính sẵn sàng cao (high availability).

> Lưu ý: AWS **giữ lại 5 IP** trong mỗi subnet (2 đầu và 3 địa chỉ đặc biệt), nên một `/24` chỉ dùng được 251 IP.

**Public subnet vs Private subnet** — khác biệt nằm ở **route table**, không phải ở bản thân subnet:
- **Public subnet**: route table có tuyến `0.0.0.0/0` trỏ tới `Internet Gateway (IGW)`. Instance có Public IP có thể ra/vào Internet trực tiếp.
- **Private subnet**: **không** có tuyến trực tiếp tới IGW. Muốn ra Internet phải đi qua `NAT Gateway`.

Đặt web server / load balancer ở public subnet; đặt database, application server ở private subnet để bảo vệ.

---

## 3. Internet Gateway & Route Tables

`Internet Gateway (IGW)` là thành phần **được AWS quản lý, dự phòng ngang (redundant), scale ngang** cho phép giao tiếp giữa VPC và Internet. Mỗi VPC gắn **tối đa 1 IGW**.

Để một subnet trở thành public cần **3 điều kiện**:
1. VPC đã gắn IGW.
2. Route table của subnet có tuyến `0.0.0.0/0 → igw-xxxx`.
3. Instance có **Public IP** hoặc **Elastic IP**.

`Route Table` chứa các quy tắc (route) quyết định lưu lượng đi đâu. Mỗi subnet liên kết với đúng một route table (nếu không gán rõ, dùng **main route table** của VPC). Tuyến `local` (bao trùm CIDR của VPC) luôn tồn tại và không thể xóa — cho phép mọi subnet trong VPC nói chuyện với nhau.

---

## 4. NAT Gateway vs NAT Instance

Instance ở private subnet đôi khi cần **ra Internet** để tải bản cập nhật, patch, gọi API bên ngoài — nhưng **không được nhận kết nối chủ động từ Internet**. Đây là vai trò của NAT (Network Address Translation).

- `NAT Gateway`: dịch vụ **được AWS quản lý hoàn toàn**, đặt trong **public subnet**, gắn Elastic IP, tự scale băng thông, độ sẵn sàng cao trong 1 AZ. Muốn chịu lỗi (fault-tolerant) cần triển khai **NAT Gateway ở mỗi AZ**.
- `NAT Instance`: một EC2 do **bạn tự quản lý** chạy phần mềm NAT — rẻ hơn nhưng phải tự vá lỗi, tự scale, tự lo HA; là phương án **cũ (legacy)**.

| Tiêu chí | NAT Gateway | NAT Instance |
|----------|-------------|--------------|
| Quản lý | AWS quản lý hoàn toàn | Bạn tự quản lý (EC2) |
| Băng thông | Tự scale tới ~100 Gbps | Giới hạn theo loại instance |
| Tính sẵn sàng | Cao trong 1 AZ (cần mỗi AZ 1 cái) | Phải tự cấu hình HA |
| Security Group | Không áp dụng được | Có thể gắn SG |
| Bastion / port forwarding | Không | Có thể dùng |
| Khuyến nghị | **Mặc định nên chọn** | Chỉ khi cần tùy biến đặc biệt |

> Ghi nhớ thi: cần cho instance private **ra Internet để update** → chọn `NAT Gateway`.

---

## 5. Security Groups vs NACL (Stateful vs Stateless)

Đây là **so sánh xuất hiện nhiều nhất** trong đề thi.

`Security Group (SG)` hoạt động ở cấp **ENI/instance**, là **stateful**: nếu bạn cho phép lưu lượng **vào**, thì lưu lượng **phản hồi ra** được tự động cho phép (và ngược lại). SG **chỉ có luật Allow** (không có Deny).

`Network ACL (NACL)` hoạt động ở cấp **subnet**, là **stateless**: chiều vào và chiều ra được đánh giá **độc lập** — bạn phải mở tường minh **cả inbound lẫn outbound** (bao gồm dải cổng ephemeral cho lưu lượng phản hồi). NACL có **cả luật Allow và Deny**, xử lý theo **thứ tự số quy tắc (rule number)** từ nhỏ đến lớn.

| Tiêu chí | Security Group | NACL |
|----------|----------------|------|
| Phạm vi áp dụng | Instance / ENI | Toàn bộ Subnet |
| Trạng thái | **Stateful** (nhớ kết nối) | **Stateless** (không nhớ) |
| Luật | Chỉ Allow | Allow **và** Deny |
| Đánh giá luật | Xét tất cả luật | Theo thứ tự rule number, dừng ở luật khớp đầu tiên |
| Chiều phản hồi | Tự động cho phép | Phải mở cổng ephemeral tường minh |
| Dùng để | Bảo mật lớp instance | Chặn/lọc lớp subnet (vd chặn 1 IP) |

> Mẹo thi: muốn **chặn một địa chỉ IP cụ thể** → dùng `NACL` (vì SG không có luật Deny). Bảo mật thông thường cho instance → dùng `Security Group`.

---

## 6. VPC Peering (Không bắc cầu)

`VPC Peering` tạo kết nối mạng **riêng tư 1-1** giữa hai VPC (cùng hoặc khác Region, cùng hoặc khác tài khoản), cho phép chúng giao tiếp bằng IP private như trong cùng một mạng. Bạn phải cập nhật **route table** ở cả hai bên và các CIDR **không được chồng lấn (overlap)**.

Đặc điểm quan trọng nhất cho kỳ thi: **peering KHÔNG mang tính bắc cầu (non-transitive)**. Nếu A peer B và B peer C, thì A **không** tự động nói chuyện được với C — phải tạo peering A–C riêng. Khi số lượng VPC lớn, mô hình full-mesh trở nên phức tạp → dùng `Transit Gateway` thay thế.

---

## 7. VPC Endpoints (Gateway vs Interface / PrivateLink)

`VPC Endpoint` cho phép tài nguyên trong VPC truy cập **dịch vụ AWS** một cách **riêng tư**, không cần đi qua Internet, IGW hay NAT — lưu lượng ở lại trong mạng AWS (an toàn hơn, thường rẻ hơn). Có **2 loại**:

- **Gateway Endpoint**: chỉ dành cho **`S3` và `DynamoDB`**. Hoạt động bằng cách thêm một tuyến vào **route table**. **Miễn phí**.
- **Interface Endpoint** (dựa trên **`AWS PrivateLink`**): tạo một **ENI có IP private** trong subnet, dùng cho **hầu hết các dịch vụ AWS khác** (SQS, SNS, Kinesis, API Gateway, Systems Manager...) và cả dịch vụ của bên thứ ba. **Tính phí theo giờ + lưu lượng**.

| Tiêu chí | Gateway Endpoint | Interface Endpoint (PrivateLink) |
|----------|------------------|----------------------------------|
| Dịch vụ hỗ trợ | Chỉ `S3` & `DynamoDB` | Hầu hết dịch vụ AWS + của bên thứ ba |
| Cơ chế | Thêm route vào route table | ENI + IP private trong subnet |
| Chi phí | **Miễn phí** | Tính phí theo giờ + dữ liệu |
| Security Group | Không áp dụng | Có (kiểm soát bằng SG) |
| DNS | Dùng DNS công khai của dịch vụ | Có private DNS name |

> Ghi nhớ thi: instance private cần truy cập `S3` **không qua Internet** và **không tốn phí endpoint** → dùng `Gateway Endpoint`.

---

## 8. Kết nối Hybrid (VPN, Direct Connect, Transit Gateway)

Khi cần nối **on-premises (trung tâm dữ liệu riêng)** với AWS:

- `Site-to-Site VPN`: đường hầm **IPsec mã hóa qua Internet công cộng**. Thiết lập **nhanh, rẻ**, nhưng băng thông và độ trễ phụ thuộc Internet.
- `Direct Connect (DX)`: **kết nối vật lý riêng (private, dedicated)** từ on-premises tới AWS. Băng thông ổn định, độ trễ thấp, **không đi qua Internet công cộng** — nhưng **mất nhiều tuần để lắp đặt** và chi phí cao hơn.

| Tiêu chí | Site-to-Site VPN | Direct Connect (DX) |
|----------|------------------|---------------------|
| Đường truyền | Qua Internet công cộng | Đường riêng vật lý |
| Mã hóa | Có (IPsec sẵn) | Không mặc định (cần thêm VPN over DX) |
| Băng thông/độ trễ | Biến động theo Internet | Ổn định, độ trễ thấp, nhất quán |
| Thời gian thiết lập | Vài phút–giờ | Vài tuần |
| Chi phí | Thấp | Cao hơn |

`Transit Gateway (TGW)` là **hub trung tâm** kết nối **nhiều VPC và mạng on-premises** theo mô hình hub-and-spoke, hỗ trợ **định tuyến bắc cầu (transitive routing)** — giải quyết đúng hạn chế non-transitive của VPC Peering. Dùng khi phải kết nối hàng chục/hàng trăm VPC.

> Mẹo thi: cần **băng thông cao, ổn định, riêng tư** → `Direct Connect`. Cần **nhanh & rẻ** → `Site-to-Site VPN`. Cần **kết nối nhiều VPC ở quy mô lớn** → `Transit Gateway`.

---

## 9. VPC Flow Logs & Bastion Host

`VPC Flow Logs` ghi lại **metadata của lưu lượng IP** (IP nguồn/đích, cổng, giao thức, ACCEPT/REJECT) đi qua VPC. Có thể bật ở cấp **VPC, subnet, hoặc ENI**, và xuất tới `CloudWatch Logs` hoặc `S3`. Dùng để **giám sát, gỡ lỗi kết nối (vì sao bị chặn), và điều tra bảo mật**. Lưu ý: Flow Logs **không ghi nội dung gói tin (payload)**, chỉ ghi metadata.

`Bastion Host` (còn gọi jump box) là một EC2 đặt ở **public subnet**, đóng vai trò **điểm trung gian** để quản trị viên SSH/RDP vào các instance ở **private subnet** một cách an toàn. Chỉ bastion mới lộ ra Internet (và nên giới hạn IP nguồn); các instance private không có Public IP.

> Thay thế hiện đại: `AWS Systems Manager Session Manager` cho phép truy cập instance private **không cần bastion, không cần mở cổng SSH** — đây thường là đáp án "an toàn nhất" trong đề thi mới.

---

## 10. Kiến trúc 3 tầng (3-tier) điển hình

Một kiến trúc web 3 tầng chuẩn trên VPC (trải trên nhiều AZ để HA):

- **Tầng Web (public subnet)**: `Application Load Balancer` và/hoặc web server nhận lưu lượng từ Internet qua IGW.
- **Tầng Ứng dụng (private subnet)**: application server / EC2 xử lý logic; ra Internet để update qua `NAT Gateway`.
- **Tầng Dữ liệu (private subnet)**: `RDS`/database, **không** truy cập Internet, chỉ nhận kết nối từ tầng ứng dụng.

Bảo mật phân lớp: SG của web chỉ mở 443 từ Internet; SG của app chỉ nhận từ SG của web; SG của DB chỉ nhận cổng database từ SG của app (tham chiếu SG lồng nhau). Truy cập `S3` từ private subnet qua `Gateway Endpoint`.

---

## Điểm thi quan trọng

- `VPC` = 1 Region; `Subnet` = 1 AZ. Nhiều AZ = high availability.
- **Public vs Private subnet** phân biệt bởi **route table có tuyến tới IGW hay không**, không phải bởi thuộc tính subnet.
- `Security Group` = **stateful**, chỉ Allow, cấp instance. `NACL` = **stateless**, có Allow+Deny, cấp subnet. Muốn **Deny một IP cụ thể → NACL**.
- Cho instance **private ra Internet để update** → `NAT Gateway` (đặt ở public subnet).
- Truy cập `S3`/`DynamoDB` riêng tư và **miễn phí** → `Gateway Endpoint`. Dịch vụ AWS khác riêng tư → `Interface Endpoint (PrivateLink)`.
- `VPC Peering` **không bắc cầu**; CIDR không được overlap. Nhiều VPC ở quy mô lớn → `Transit Gateway` (transitive).
- Kết nối on-prem: `VPN` (nhanh/rẻ, qua Internet, có mã hóa) vs `Direct Connect` (riêng, ổn định, băng thông cao, lắp lâu).
- `VPC Flow Logs` = metadata lưu lượng (không có payload) để debug/audit.
- Truy cập instance private an toàn: `Bastion Host` hoặc tốt hơn là `SSM Session Manager` (không cần mở SSH).

## Tóm tắt

- `VPC` là mạng ảo cô lập trong 1 Region; chia thành các `subnet` gắn từng AZ, định tuyến bởi route table và các gateway.
- Instance public ra Internet qua `IGW`; instance private ra Internet qua `NAT Gateway`.
- Bảo mật hai lớp: `Security Group` **stateful** ở instance, `NACL` **stateless** ở subnet (chỉ NACL có luật Deny).
- Truy cập dịch vụ AWS riêng tư bằng `VPC Endpoint`: Gateway (S3/DynamoDB, miễn phí) hoặc Interface/PrivateLink (dịch vụ khác, tính phí).
- Nối nhiều VPC bằng `Peering` (non-transitive) hoặc `Transit Gateway` (transitive, quy mô lớn); nối on-prem bằng `VPN` hoặc `Direct Connect`.
- `VPC Flow Logs` để giám sát; `Bastion Host`/`SSM` để truy cập instance private an toàn; kiến trúc 3 tầng đặt DB ở private subnet.
