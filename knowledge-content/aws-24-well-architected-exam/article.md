# AWS Well-Architected Framework & Chiến lược thi SAA-C03

## 1. Tổng quan

**AWS Well-Architected Framework** là bộ khung tư duy giúp bạn xây dựng và vận hành các hệ thống trên AWS một cách an toàn, ổn định, hiệu quả và tối ưu chi phí. Đây không phải là một dịch vụ, mà là tập hợp các **nguyên tắc thiết kế**, **câu hỏi đánh giá** và **thực hành tốt nhất** (best practices).

Trong kỳ thi **SAA-C03**, bạn sẽ không bị hỏi trực tiếp "định nghĩa trụ cột X là gì", nhưng gần như **mọi câu hỏi tình huống** đều xoay quanh việc chọn giải pháp tối ưu theo một trong các trụ cột. Vì vậy, hiểu rõ 6 trụ cột và biết ánh xạ **từ khóa trong câu hỏi → trụ cột → dịch vụ** là kỹ năng quyết định điểm số.

Khung này gồm **6 trụ cột (pillars)**. Ban đầu có 5 trụ cột; năm 2021 AWS bổ sung trụ cột thứ 6 là **Sustainability** (Tính bền vững).

---

## 2. Sáu trụ cột của Well-Architected Framework

| # | Trụ cột (Pillar) | Trọng tâm | Dịch vụ / thực hành tiêu biểu |
|---|------------------|-----------|-------------------------------|
| 1 | **Operational Excellence** (Vận hành xuất sắc) | Chạy và giám sát hệ thống, hạ tầng dạng code, thay đổi nhỏ và có thể đảo ngược, học từ sự cố | `CloudFormation`, `CloudWatch`, `CloudTrail`, CI/CD, `Systems Manager` |
| 2 | **Security** (Bảo mật) | Bảo vệ dữ liệu và hệ thống, đặc quyền tối thiểu, nền tảng danh tính vững chắc, mã hóa, truy vết | `IAM`, `KMS`, `CloudTrail`, `GuardDuty`, `WAF`, `Shield`, `Macie` |
| 3 | **Reliability** (Độ tin cậy) | Phục hồi sau sự cố, mở rộng theo chiều ngang, tự phục hồi, kiểm thử khả năng phục hồi, đa vùng khả dụng | `Auto Scaling`, `ELB`, Multi-AZ, `Route 53`, backup, `CloudWatch` alarms |
| 4 | **Performance Efficiency** (Hiệu năng tối ưu) | Dùng tài nguyên hiệu quả, chọn đúng loại instance/dịch vụ, serverless, caching, mở rộng toàn cầu | Right-sizing, `CloudFront`, `ElastiCache`, `Auto Scaling`, `Lambda` |
| 5 | **Cost Optimization** (Tối ưu chi phí) | Tránh chi phí không cần thiết, chọn đúng mô hình giá, dùng dịch vụ được quản lý, co giãn theo nhu cầu | Spot / Reserved / Savings Plans, S3 storage classes, `Cost Explorer`, `Budgets` |
| 6 | **Sustainability** (Bền vững) | Giảm tác động môi trường, tối đa hóa mức tận dụng tài nguyên, dùng dịch vụ managed, chọn Region hiệu quả | Right-sizing, `Graviton`, serverless, S3 lifecycle, chọn Region phù hợp |

**Mẹo nhớ nhanh:** *Ops – Security – Reliability – Performance – Cost – Sustainability*. Mỗi câu hỏi tình huống thường "nghiêng" về đúng **một** trụ cột — hãy tìm trụ cột đó trước khi so sánh đáp án.

---

## 3. Các nguyên tắc thiết kế chung (Design Principles)

Well-Architected khuyến nghị các nguyên tắc chung cho mọi hệ thống trên cloud:

- **Ngừng đoán dung lượng (stop guessing capacity):** dùng `Auto Scaling` để cấp phát theo nhu cầu thực tế thay vì mua dư.
- **Kiểm thử ở quy mô sản xuất (test at production scale):** tạo môi trường test giống thật rồi hủy khi xong — trên cloud việc này rẻ và nhanh.
- **Tự động hóa (automate):** dùng hạ tầng dạng code (`CloudFormation`) để dễ tái tạo, kiểm soát và đảo ngược thay đổi.
- **Cho phép kiến trúc tiến hóa (evolutionary architectures):** thiết kế để có thể thay đổi liên tục theo thời gian.
- **Ra quyết định dựa trên dữ liệu (drive with data):** dùng số liệu từ `CloudWatch`, `Cost Explorer` để quyết định thay vì cảm tính.
- **Diễn tập sự cố (game days):** chủ động mô phỏng lỗi để kiểm tra khả năng phục hồi (tinh thần chaos engineering).

---

## 4. Công cụ hỗ trợ (Tools)

### AWS Well-Architected Tool
Công cụ **miễn phí** trong Console, cho phép bạn **review (đánh giá) workload** bằng cách trả lời bộ câu hỏi theo từng trụ cột. Kết quả là danh sách rủi ro (high/medium risk) kèm khuyến nghị cải thiện. Đây là công cụ để **tự kiểm tra kiến trúc**, không phải để giám sát vận hành.

### AWS Trusted Advisor
Đưa ra các khuyến nghị theo **5 nhóm kiểm tra (check categories)**:

1. **Cost Optimization** — phát hiện tài nguyên nhàn rỗi, đề xuất Reserved Instances.
2. **Security** — cảnh báo security group mở toàn bộ, MFA cho root, khóa truy cập lộ.
3. **Fault Tolerance** — kiểm tra Multi-AZ, backup, cấu hình dự phòng.
4. **Performance** — phát hiện tài nguyên cấu hình chưa tối ưu.
5. **Service Limits** — cảnh báo khi sắp chạm hạn ngạch (quota) dịch vụ.

> **Lưu ý thi:** Tài khoản Basic/Developer chỉ được xem **một phần** các check. Muốn dùng **đầy đủ tất cả check** phải có gói **Business hoặc Enterprise Support**.

### AWS Cost Explorer & AWS Budgets
- **`Cost Explorer`**: trực quan hóa và phân tích chi phí/quá trình sử dụng theo thời gian, dự báo chi phí tương lai.
- **`Budgets`**: đặt ngân sách và gửi **cảnh báo** khi chi phí (hoặc mức sử dụng) vượt/ dự kiến vượt ngưỡng.

### AWS Compute Optimizer
Dùng machine learning phân tích số liệu thực tế để **đề xuất right-sizing** cho `EC2`, `Auto Scaling groups`, khối lượng `EBS` và hàm `Lambda` — giúp giảm chi phí và cải thiện hiệu năng.

---

## 5. Chiến lược làm bài thi (Exam Strategy)

### Bước 1 — Đọc kỹ QUALIFIER (từ định tính) trong câu hỏi
AWS luôn nhét một từ khóa quyết định vào đề. Nó cho biết **trụ cột nào** đang được ưu tiên:

| Qualifier trong câu hỏi | Ưu tiên trụ cột | Hướng chọn đáp án |
|-------------------------|-----------------|-------------------|
| **MOST cost-effective** (tối ưu chi phí nhất) | Cost Optimization | Serverless, Spot, S3 tiering, managed service |
| **MOST highly available / resilient** | Reliability | Multi-AZ, ELB + ASG, Route 53 failover |
| **LEAST operational overhead / fully managed** | Operational Excellence | Chọn dịch vụ managed/serverless, tránh tự quản lý EC2 |
| **MOST secure** | Security | Least privilege IAM, KMS encryption, private subnet |
| **BEST performance / real-time** | Performance Efficiency | Caching, CloudFront, đúng loại instance |
| **real-time vs near-real-time** | Performance | `Kinesis Data Streams` (real-time) vs `Firehose` (near-real-time) |

### Bước 2 — Loại trừ đáp án sai và nhận diện "distractor"
Các mẫu bẫy thường gặp:

- **Over-engineered (làm quá phức tạp):** giải pháp nhiều thành phần khi câu hỏi cần "least overhead".
- **Sai công cụ (wrong tool):** ví dụ dùng `EC2` tự dựng cache trong khi có `ElastiCache`.
- **Công nghệ lỗi thời (deprecated):** Classic Load Balancer (CLB) thay vì ALB/NLB; tự quản EC2 khi serverless phù hợp hơn.
- **Đúng nhưng không tối ưu theo qualifier:** đáp án chạy được nhưng đắt hơn / kém HA hơn đáp án khác.

### Bước 3 — Bảng tra nhanh Từ khóa → Dịch vụ (Keyword → Service Cheat-Sheet)

| Từ khóa trong đề | Dịch vụ nên chọn |
|------------------|------------------|
| "decouple" / tách rời các thành phần | `SQS` |
| "fan-out" / gửi 1 thông điệp tới nhiều đích | `SNS` (kết hợp `SQS`) |
| "serverless SQL truy vấn trực tiếp trên S3" | `Athena` |
| "cache database / giảm tải đọc DB" | `ElastiCache` |
| "lift-and-shift DB sang engine khác" | `DMS` + `SCT` |
| "không SSH / truy cập không cần cổng 22" | `SSM Session Manager` |
| "chặn một IP cụ thể" | `NACL` (subnet) hoặc `WAF` (Layer 7) |
| "chống DDoS" | `Shield` (Advanced cho L3/L4/L7) |
| "phát hiện PII trong S3" | `Macie` |
| "phát hiện mối đe dọa / hành vi bất thường" | `GuardDuty` |
| "phân phối nội dung tĩnh toàn cầu, độ trễ thấp" | `CloudFront` |
| "hàng đợi công việc, xử lý bất đồng bộ" | `SQS` + `Lambda`/`ASG` |

---

## 6. Kịch bản tổng hợp (Scenario Recap)

**Đề bài:** Thiết kế một ứng dụng web 3 tầng (3-tier) **có tính sẵn sàng cao** và **tối ưu chi phí**, phục vụ người dùng toàn cầu.

**Kiến trúc gợi ý (khớp nhiều trụ cột cùng lúc):**

1. **`Route 53`** — DNS, định tuyến và failover theo sức khỏe (Reliability).
2. **`CloudFront`** — CDN cache nội dung tĩnh tại edge, giảm độ trễ toàn cầu và giảm tải origin (Performance + Cost).
3. **`ALB` (Application Load Balancer)** — phân phối tải HTTP/HTTPS tới tầng ứng dụng (Reliability).
4. **`Auto Scaling group` chạy `EC2` trải trên nhiều AZ** — co giãn theo tải, tự phục hồi khi một AZ hỏng (Reliability + Cost, dùng Spot cho phần co giãn).
5. **`RDS` Multi-AZ** — CSDL quan hệ có bản sao standby ở AZ khác, tự động failover (Reliability).
6. **`ElastiCache`** — cache truy vấn đọc để giảm tải RDS và tăng tốc độ (Performance).
7. **`S3`** — lưu tài sản tĩnh, ảnh, file upload với storage classes tiết kiệm (Cost + Sustainability).

Kịch bản này minh họa cách **nhiều dịch vụ ghép lại** để đồng thời đạt HA (Multi-AZ + ELB + ASG + Route 53) và tối ưu chi phí (CloudFront cache, Spot, S3 tiering).

---

## Điểm thi quan trọng

- **Thuộc lòng 6 trụ cột** và trọng tâm của từng trụ cột: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability.
- **Ánh xạ qualifier → trụ cột:** "cost-effective" → Cost, "highly available" → Reliability, "least operational overhead" → Operational Excellence/serverless, "most secure" → Security, "performance/real-time" → Performance.
- **Trusted Advisor có 5 nhóm check:** Cost Optimization, Security, Fault Tolerance, Performance, Service Limits — **đầy đủ** chỉ với gói Business/Enterprise Support.
- **Well-Architected Tool** dùng để **review workload** (miễn phí), không phải công cụ giám sát.
- **Compute Optimizer** đề xuất right-sizing cho `EC2`, `ASG`, `EBS`, `Lambda`.
- **Nhận diện distractor:** loại đáp án over-engineered, sai công cụ, hoặc dùng công nghệ lỗi thời (CLB, EC2 khi serverless phù hợp hơn).

## Tóm tắt

- Well-Architected Framework là bộ khung 6 trụ cột giúp thiết kế hệ thống an toàn, tin cậy, hiệu năng cao và tối ưu chi phí.
- Trong SAA-C03, chìa khóa là đọc **qualifier** để xác định trụ cột đang được hỏi, rồi ánh xạ sang dịch vụ phù hợp.
- Các nguyên tắc cốt lõi: ngừng đoán dung lượng, tự động hóa, kiểm thử ở quy mô thật, ra quyết định dựa trên dữ liệu, diễn tập sự cố.
- Công cụ cần nhớ: **Well-Architected Tool** (review), **Trusted Advisor** (5 nhóm check), **Cost Explorer/Budgets** (chi phí), **Compute Optimizer** (right-sizing).
- Dùng bảng **từ khóa → dịch vụ** (decouple→SQS, fan-out→SNS, cache→ElastiCache, PII→Macie, DDoS→Shield…) để chọn nhanh và loại trừ bẫy.
