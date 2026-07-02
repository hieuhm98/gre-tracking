# ELB & Auto Scaling – Tính sẵn sàng cao & Khả năng mở rộng

## 1. Tổng quan

Một ứng dụng thực tế phải chịu được **tải thay đổi** (lúc ít, lúc nhiều người dùng) và **sự cố hạ tầng** (một server hoặc một AZ chết). Hai dịch vụ cốt lõi của AWS giải quyết vấn đề này là:

- **ELB (Elastic Load Balancer)**: phân phối traffic đến nhiều target (EC2, container, IP) trên nhiều AZ → tăng khả năng chịu lỗi và mở rộng ngang.
- **Auto Scaling Group (ASG)**: tự động thêm/bớt số lượng instance theo tải → co giãn (elasticity) và duy trì tính sẵn sàng.

Đây là một trong những chủ đề **được hỏi nhiều nhất trong SAA-C03**. Câu hỏi thường ở dạng tình huống: "chọn loại load balancer nào", "làm sao tự động scale", "làm sao đạt HA giữa các AZ". Ghi nhớ nhanh: **ALB = HTTP layer 7**, **NLB = TCP layer 4 + IP tĩnh**, **ASG = co giãn**.

---

## 2. Scaling dọc vs ngang & Tính sẵn sàng cao (HA)

- **Vertical scaling (dọc)**: tăng sức mạnh của một instance (ví dụ `t2.micro` → `m5.large`). Có giới hạn phần cứng, và thường phải restart. Phù hợp với database không phân tán (RDS, ElastiCache).
- **Horizontal scaling (ngang / elasticity)**: tăng **số lượng** instance. Không giới hạn lý thuyết, phù hợp với hệ thống phân tán / web tier. Đây là mô hình mà ELB + ASG hướng tới.
- **High Availability (HA)**: chạy trên **nhiều Availability Zone (AZ)** để một AZ chết vẫn còn AZ khác phục vụ. HA có thể ở dạng active-active hoặc active-passive.

Điểm mấu chốt: **scaling ngang là để chịu tải; multi-AZ là để chịu lỗi**. ELB + ASG kết hợp cả hai.

---

## 3. ELB tổng quan

**ELB** là dịch vụ **managed** (AWS lo scaling, vá lỗi, HA của chính load balancer). Chức năng chính:

- Phân phối traffic đến nhiều instance ở nhiều AZ.
- Thực hiện **health check** và chỉ gửi traffic tới target khỏe mạnh.
- Cung cấp một **endpoint (DNS name) duy nhất** cho ứng dụng.
- Xử lý **SSL/TLS termination**, tách biệt public và private traffic.

AWS có 4 loại: **ALB, NLB, GWLB** (thế hệ mới) và **CLB** (legacy, không khuyến nghị cho hệ thống mới). ELB có thể là **internet-facing** (public) hoặc **internal** (private, chỉ trong VPC).

---

## 4. Application Load Balancer (ALB)

- Hoạt động ở **layer 7 (application)** → hiểu **HTTP/HTTPS/gRPC/WebSocket**.
- Định tuyến thông minh:
  - **Path-based routing**: `/api` → target group A, `/images` → target group B.
  - **Host-based routing**: `api.example.com` vs `www.example.com`.
  - Routing theo **HTTP header, query string, HTTP method, source IP**.
- Traffic được gửi tới **target group** — nhóm có thể chứa **EC2, ECS task, Lambda, hoặc private IP**.
- Hỗ trợ **redirect** (HTTP → HTTPS) và **fixed response**.
- Chuyển thông tin client qua header **`X-Forwarded-For`** (vì ALB làm proxy nên IP nguồn nhìn thấy là của ALB).

**Dùng khi**: web app / microservices HTTP cần định tuyến theo nội dung, dùng container hoặc Lambda backend.

---

## 5. Network Load Balancer (NLB)

- Hoạt động ở **layer 4 (transport)** → xử lý **TCP, UDP, TLS**.
- **Hiệu năng cực cao, độ trễ cực thấp** — hàng triệu request/giây.
- Có **IP tĩnh cho mỗi AZ**, và hỗ trợ gán **Elastic IP** → lý tưởng khi cần **whitelist IP** hoặc yêu cầu IP cố định.
- Target group của NLB trỏ tới **EC2, private IP, hoặc ALB** (có thể đặt ALB sau NLB).
- **Bảo toàn IP nguồn (source IP)** của client mặc định.

**Dùng khi**: cần thông lượng/độ trễ cực cao, protocol không phải HTTP (gaming, IoT, TCP thuần), hoặc cần **IP tĩnh/Elastic IP**.

---

## 6. Gateway Load Balancer (GWLB) & Classic Load Balancer (CLB)

**Gateway Load Balancer (GWLB)**:
- Hoạt động ở **layer 3 (network)**, dùng giao thức **GENEVE** trên cổng 6081.
- Dùng để triển khai và mở rộng **thiết bị ảo (virtual appliances)** của bên thứ ba: firewall, IDS/IPS, deep packet inspection.
- Vừa là **transparent bridge** (traffic đi xuyên qua) vừa là load balancer cho fleet appliance.

**Classic Load Balancer (CLB)** — *legacy*:
- Thế hệ cũ, hoạt động ở cả layer 4 và layer 7 nhưng thiếu tính năng (không path/host routing, một CLB chỉ phục vụ một app).
- AWS khuyến nghị **không dùng cho thiết kế mới**; đề thi thường coi CLB là "câu trả lời sai" khi có ALB/NLB phù hợp hơn.

---

## 7. Health check, Cross-zone LB & Stickiness

**Health check**:
- ELB định kỳ kiểm tra target; chỉ định tuyến tới target **healthy**. Nếu target fail → ngừng gửi traffic tới nó.
- Cấu hình bằng protocol + port + path (với HTTP), ngưỡng healthy/unhealthy, interval, timeout.

**Cross-zone load balancing** (phân phối đều target trên mọi AZ, không chỉ trong AZ của node):

| Loại | Cross-zone mặc định | Phí truyền dữ liệu giữa AZ |
|------|---------------------|---------------------------|
| ALB  | **Luôn bật, miễn phí** (không tắt được ở cấp LB) | Không tính phí |
| NLB  | **Tắt** mặc định (bật được) | **Tính phí** khi bật |
| CLB  | **Tắt** mặc định (bật được, miễn phí) | Không tính phí |

**Stickiness (session affinity)**: buộc một client luôn vào cùng một target bằng **cookie**. ALB/CLB hỗ trợ (application-based hoặc duration-based cookie); hữu ích khi session lưu cục bộ trên instance. NLB cũng có stickiness dựa trên source IP.

---

## 8. SSL/TLS, SNI & Connection draining

- **SSL/TLS termination**: LB giải mã HTTPS, giảm tải CPU cho backend. Certificate quản lý qua **ACM (AWS Certificate Manager)**.
- **SNI (Server Name Indication)**: cho phép **gắn nhiều certificate cho nhiều domain** trên cùng một listener. **ALB và NLB hỗ trợ SNI; CLB không hỗ trợ** (CLB chỉ 1 cert/LB).
- **Connection draining / Deregistration delay**: khi một instance bị gỡ hoặc unhealthy, LB **ngừng gửi request mới** nhưng **cho phép các request đang chạy hoàn tất** trong một khoảng thời gian (mặc định 300 giây). Tên gọi: **Connection Draining** (CLB) và **Deregistration Delay** (ALB/NLB).

---

## 9. Auto Scaling Group (ASG)

**ASG** đảm bảo luôn có đúng số lượng instance mong muốn, tự thay thế instance chết và scale theo tải.

- **Launch Template** (được ưu tiên; **launch configuration đã deprecated**) định nghĩa: AMI, instance type, key pair, security group, user data, versioning, hỗ trợ mix instance type / spot.
- Ba tham số dung lượng:
  - **Minimum**: số instance tối thiểu luôn duy trì.
  - **Desired**: số instance mong muốn hiện tại (ASG cố giữ con số này).
  - **Maximum**: trần khi scale-out.
- **Trải trên nhiều AZ** → nếu một AZ chết, ASG khởi tạo instance ở AZ còn lại (cần subnet ở nhiều AZ).
- **Health check**: kiểu **EC2** (dựa trạng thái instance) và **ELB** (dựa health check của load balancer — nên bật để phát hiện app lỗi dù OS vẫn sống).
- **Cooldown period**: sau một hành động scaling, ASG **tạm dừng** các hành động tiếp theo (mặc định 300s) để metric ổn định, tránh scale liên tục.
- **Termination policy**: mặc định ưu tiên cân bằng AZ, rồi tới instance dùng launch template/config cũ nhất, rồi gần chu kỳ tính giờ tiếp theo nhất; có thể tùy chỉnh.
- Tích hợp ELB: instance mới **tự đăng ký vào target group**.

---

## 10. Scaling policies (chính sách mở rộng)

| Loại policy | Cách hoạt động | Ví dụ |
|-------------|----------------|-------|
| **Target Tracking** | Giữ một metric ở giá trị mục tiêu, AWS tự tính toán | Giữ CPU trung bình ~50% |
| **Simple / Step Scaling** | Kích theo CloudWatch alarm; step scaling cộng/trừ theo mức độ vượt ngưỡng | CPU > 70% → +2 instance |
| **Scheduled** | Scale theo lịch định trước (tải có quy luật thời gian) | 9h sáng thứ Hai tăng desired lên 10 |
| **Predictive** | ML dự đoán tải tương lai dựa lịch sử và scale trước | Chuẩn bị công suất trước giờ cao điểm |

- **Target Tracking** là dễ cấu hình và phổ biến nhất.
- **Scheduled** phù hợp khi biết trước thời điểm tải cao (ví dụ giờ hành chính).
- **Predictive** phù hợp khi tải có tính chu kỳ nhưng biến động, giúp scale **chủ động** thay vì phản ứng.
- Có thể kết hợp nhiều policy; ASG sẽ scale theo policy đòi hỏi nhiều capacity nhất tại thời điểm đó.

---

## Điểm thi quan trọng

- **ALB = layer 7 (HTTP/HTTPS)** với **path-based & host-based routing** và target group (EC2/ECS/Lambda/IP).
- **NLB = layer 4 (TCP/UDP)**, độ trễ cực thấp, **IP tĩnh / Elastic IP** → chọn khi cần IP cố định hoặc throughput cực cao.
- **GWLB = layer 3, GENEVE**, dành cho **virtual appliances** (firewall/IDS/IPS). **CLB = legacy**, tránh dùng cho thiết kế mới.
- **Cross-zone**: ALB **luôn bật & miễn phí**; NLB **tắt mặc định** và **tính phí data giữa AZ** khi bật.
- **SNI** (nhiều cert/nhiều domain) chỉ trên **ALB và NLB**, không có ở CLB.
- **Connection Draining (CLB) / Deregistration Delay (ALB/NLB)**: cho request đang chạy hoàn tất trước khi gỡ instance.
- **Launch Template được ưu tiên**, **launch configuration deprecated**.
- ASG: nhớ **min / desired / max**, **health check ELB** để phát hiện app lỗi, và **cooldown** để tránh scale dồn dập.
- **Target Tracking** = đơn giản nhất; **Predictive** = scale chủ động bằng ML; **Scheduled** = tải có quy luật thời gian.
- ASG **trải nhiều AZ** để đạt HA; nó **thay thế** instance unhealthy tự động.

---

## Tóm tắt

- **ELB** phân phối traffic + health check + một endpoint duy nhất; **ASG** co giãn số lượng instance và duy trì HA — hai dịch vụ này thường đi cùng nhau.
- Chọn LB theo layer: **ALB (HTTP/L7, định tuyến nội dung)**, **NLB (TCP/L4, IP tĩnh, hiệu năng cao)**, **GWLB (appliance bảo mật)**, **CLB (chỉ khi legacy)**.
- **Cross-zone** khác nhau theo loại LB (ALB luôn bật/miễn phí; NLB tắt mặc định và tính phí); **SNI** cho nhiều domain trên ALB/NLB.
- **ASG** dùng **launch template**, cấu hình **min/desired/max**, **health check EC2/ELB**, và **cooldown**.
- **Scaling policy**: Target Tracking (dễ nhất), Simple/Step (theo alarm), Scheduled (theo lịch), Predictive (dự đoán ML).
- Nguyên tắc HA: **scale ngang để chịu tải + multi-AZ để chịu lỗi**.
