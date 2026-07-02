# Kiến trúc giải pháp nâng cao & Các dịch vụ khác

## 1. Tổng quan

Phần này gom lại các **mẫu kiến trúc (solution patterns)** thường gặp trong đề thi SAA-C03 và một loạt **dịch vụ AWS khác** mà bạn chỉ cần nhớ "một câu mô tả mục đích" là đủ để chọn đáp án.

Đề thi hiếm khi hỏi cấu hình chi tiết. Thay vào đó, đề mô tả một tình huống (scenario) và bạn phải chọn dịch vụ/mẫu kiến trúc **phù hợp nhất**. Vì vậy chiến lược ôn tập là:

- Nắm các **mẫu kiến trúc**: event-driven, caching, decoupling, chặn IP, HPC, metadata.
- Nhớ **một câu mô tả** cho mỗi dịch vụ còn lại.
- Ghi nhớ vài **bẫy thi kinh điển**: `NACL` mới chặn được IP (Security Group không deny được), `Session Manager` cho shell không cần SSH, `CloudFormation` = IaC...

---

## 2. Kiến trúc hướng sự kiện (Event-driven architecture)

Kiến trúc event-driven giúp các thành phần **giao tiếp bất đồng bộ**, không phụ thuộc trực tiếp vào nhau (loose coupling).

| Dịch vụ | Vai trò trong event-driven |
|---------|----------------------------|
| `SNS` | Pub/Sub — một message gửi tới nhiều subscriber (fan-out) |
| `SQS` | Hàng đợi — buffer message, xử lý bất đồng bộ, decouple producer/consumer |
| `EventBridge` | Event bus — định tuyến sự kiện theo rule, tích hợp SaaS & AWS services, có schedule |
| `Lambda` | Xử lý sự kiện không cần server, được trigger bởi SNS/SQS/EventBridge |

**Mẫu fan-out kinh điển:** `SNS` → nhiều `SQS` queue → mỗi queue có consumer riêng. Một sự kiện được xử lý song song bởi nhiều hệ thống mà producer không cần biết.

**Khi nào chọn cái nào?**
- Cần **định tuyến theo nội dung/rule**, tích hợp nhiều nguồn → `EventBridge`.
- Cần **fan-out** một message tới nhiều đích → `SNS`.
- Cần **buffer, retry, chống mất message** → `SQS`.

---

## 3. Chiến lược caching

Cache giúp giảm độ trễ (latency) và giảm tải cho backend/database. AWS cung cấp cache ở nhiều tầng:

| Dịch vụ | Cache cho cái gì |
|---------|------------------|
| `CloudFront` | Cache nội dung tĩnh/động ở edge location (CDN), gần người dùng cuối |
| `ElastiCache` (Redis/Memcached) | Cache dữ liệu ứng dụng, session, kết quả query DB |
| `DynamoDB Accelerator (DAX)` | Cache in-memory chuyên cho `DynamoDB`, giảm read xuống micro-giây |
| `API Gateway cache` | Cache response của endpoint API để giảm gọi backend |

**Nguyên tắc thi:** đề nói "giảm tải database quan hệ / lưu session" → `ElastiCache`; "tăng tốc đọc DynamoDB" → `DAX`; "phân phối nội dung toàn cầu, giảm latency cho user" → `CloudFront`.

---

## 4. Tách rời hệ thống (Decoupling)

Decoupling giúp hệ thống **chịu lỗi tốt hơn** và **scale độc lập**.

- `SQS`: hàng đợi trung gian. Nếu consumer chết, message vẫn nằm trong queue → không mất dữ liệu. Producer và consumer scale độc lập.
- `SNS`: tách producer khỏi nhiều consumer qua pub/sub.
- Kết hợp `SNS + SQS` (fan-out) là mẫu decoupling phổ biến nhất trong đề thi.

**Bẫy thi:** nếu đề nói "xử lý tăng đột biến (spike), tránh mất request khi backend quá tải" → dùng `SQS` làm buffer trước backend/Auto Scaling.

---

## 5. Chặn IP: `Security Group` vs `NACL` vs `WAF` vs `Shield`

Đây là chủ đề **rất hay bị bẫy**. Mỗi công cụ hoạt động ở tầng khác nhau:

| Công cụ | Tầng | Chặn IP cụ thể? | Đặc điểm |
|---------|------|-----------------|----------|
| `Security Group` | Instance (ENI) | KHÔNG deny được | **Chỉ có rule ALLOW**, stateful, không có "deny" |
| `Network ACL (NACL)` | Subnet | CÓ | **Có cả allow & DENY**, stateless, đánh số thứ tự rule |
| `AWS WAF` | Layer 7 (HTTP) | CÓ | Rule theo IP, rate-limiting, chặn SQLi/XSS, gắn vào ALB/CloudFront/API GW |
| `AWS Shield` | Chống DDoS (L3/L4, L7 với Advanced) | Tự động | Bảo vệ DDoS; Standard miễn phí, Advanced trả phí |

**Bẫy kinh điển:** "Chặn một địa chỉ IP độc hại cụ thể ở tầng subnet" → **`NACL`** (vì Security Group không có rule deny). "Chặn IP theo tốc độ request / tấn công web layer-7" → **`WAF`**. "Chống tấn công DDoS quy mô lớn" → **`Shield`** (Advanced).

---

## 6. Tính toán hiệu năng cao (HPC – High Performance Computing)

HPC cần **mạng độ trễ thấp, băng thông cao** giữa các node. AWS kết hợp nhiều dịch vụ:

- `Placement Group` kiểu **Cluster**: đặt các EC2 gần nhau trong cùng AZ để có network latency thấp, băng thông cao nhất.
- `EFA (Elastic Fabric Adapter)`: network adapter đặc biệt cho giao tiếp giữa các node HPC (MPI), bỏ qua kernel để giảm latency.
- `FSx for Lustre`: file system song song hiệu năng cao cho khối lượng dữ liệu lớn (HPC, ML).
- `Enhanced Networking` (ENA): tăng băng thông và giảm latency mạng cho instance.

**Mẫu thi:** "workload HPC cần giao tiếp node-to-node nhanh nhất" → **`Cluster Placement Group` + `EFA`**; "storage song song hiệu năng cao cho HPC" → **`FSx for Lustre`**.

---

## 7. EC2 Instance Metadata Service (IMDS)

`IMDS` cho phép một EC2 instance **tự truy vấn thông tin về chính nó** (metadata) từ URL nội bộ đặc biệt:

```
http://169.254.169.254/latest/meta-data/
```

- Lấy được: instance-id, IP, AZ, IAM role credentials tạm thời, user-data...
- **IMDSv1**: truy vấn trực tiếp (kém an toàn — dễ bị khai thác qua SSRF).
- **IMDSv2** (khuyến nghị): yêu cầu token theo phiên (session token), chống tấn công SSRF. AWS khuyến nghị **bắt buộc dùng IMDSv2**.

**Bẫy thi:** "cách an toàn hơn để truy cập metadata / chống SSRF" → **IMDSv2**.

---

## 8. Các dịch vụ AWS khác (nhớ một câu mô tả)

| Dịch vụ | Mục đích (một câu) |
|---------|--------------------|
| `CloudFormation` | IaC: template khai báo (declarative) tạo hạ tầng dạng stack; có drift detection, change sets, StackSets (nhiều account/region) |
| `AWS CDK` | Định nghĩa hạ tầng bằng ngôn ngữ lập trình (TypeScript, Python...), tổng hợp (synthesize) ra CloudFormation |
| `Elastic Beanstalk` | PaaS: deploy ứng dụng nhanh, AWS quản lý platform bên dưới; hướng developer |
| `Amazon SES` | Gửi email (transactional & marketing) quy mô lớn |
| `Amazon Pinpoint` | Tương tác khách hàng: chiến dịch SMS/email/push, phân khúc & analytics |
| `AWS Amplify` | Hosting web/mobile fullstack + backend (auth, API, storage) |
| `AWS Batch` | Chạy batch computing quy mô lớn trên ECS/EC2/Fargate/Spot |
| `AWS AppSync` | GraphQL API được quản lý (managed) |
| `Amazon SWF` | Workflow orchestration cũ (legacy) — ưu tiên `Step Functions` cho dự án mới |
| `AWS Systems Manager (SSM)` | Quản lý fleet: Session Manager, Patch Manager, Parameter Store, Run Command — không cần SSH |
| `CodeCommit` | Git repository được quản lý |
| `CodeBuild` | Build & test source code |
| `CodeDeploy` | Deploy lên EC2 / Lambda / ECS |
| `CodePipeline` | Điều phối (orchestrate) toàn bộ pipeline CI/CD |
| `CodeArtifact` | Quản lý package/artifact (npm, Maven, PyPI...) |
| `CodeGuru` | Review code & profiling hiệu năng bằng ML |
| `AWS SAM` | IaC chuyên cho serverless (mở rộng của CloudFormation) |
| `Amazon WorkSpaces` | Desktop ảo (VDI) được quản lý trên cloud |
| `AppStream 2.0` | Stream ứng dụng desktop qua trình duyệt |

**Chi tiết vài dịch vụ hay hỏi:**

- `SSM Session Manager`: mở shell vào EC2 **không cần mở port SSH, không cần bastion host, không cần key pair** — mọi phiên được log lại. Đây là câu trả lời cho "truy cập instance an toàn không dùng SSH".
- `CloudFormation` vs `Elastic Beanstalk`: CloudFormation = **hạ tầng dạng code (IaC)** tổng quát; Beanstalk = **deploy ứng dụng dễ dàng** với platform được quản lý.
- Nhóm **Code\***: CodeCommit (chứa code) → CodeBuild (build/test) → CodeDeploy (deploy) → CodePipeline (nối tất cả lại thành CI/CD tự động).

---

## Điểm thi quan trọng

- `NACL` là công cụ duy nhất **chặn (deny) một IP cụ thể** ở tầng subnet; `Security Group` **chỉ có allow**, không deny được.
- `CloudFormation` = IaC declarative (stack, drift, change sets, StackSets); `CDK` viết bằng ngôn ngữ lập trình rồi synthesize ra CloudFormation.
- `Elastic Beanstalk` = deploy app nhanh, AWS quản lý platform (PaaS hướng developer).
- `SSM Session Manager` = shell vào EC2 **không cần SSH / bastion / key pair**, có log.
- HPC: **`Cluster Placement Group` + `EFA`** cho node-to-node nhanh; **`FSx for Lustre`** cho storage hiệu năng cao.
- **IMDSv2** an toàn hơn IMDSv1 (chống SSRF); metadata tại `169.254.169.254`.
- Caching: `CloudFront` (CDN edge), `ElastiCache` (session/DB cache), `DAX` (DynamoDB), `API Gateway cache`.
- Event-driven & decoupling: `SNS` (fan-out), `SQS` (buffer/retry), `EventBridge` (định tuyến theo rule).
- `WAF` = rule IP/rate ở layer-7; `Shield` = chống DDoS.

## Tóm tắt

- Đề SAA-C03 phần này thiên về **chọn dịch vụ đúng theo tình huống** hơn là cấu hình chi tiết.
- Học thuộc **một câu mô tả** cho mỗi dịch vụ trong bảng "dịch vụ khác" là đủ để loại đáp án sai.
- Ba bẫy hay gặp nhất: **`NACL` để chặn IP**, **`Session Manager` thay SSH**, **`CloudFormation` là IaC**.
- Với HPC luôn nghĩ tới **Cluster Placement Group + EFA + FSx for Lustre**.
- Nhóm **Code\*** ghép thành pipeline CI/CD; `CodePipeline` là "nhạc trưởng" điều phối.
- Ưu tiên **IMDSv2** và **loose coupling** (SNS/SQS/EventBridge) khi đề nói về bảo mật và độ bền hệ thống.
