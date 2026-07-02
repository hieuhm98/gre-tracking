# Cloud & Hạ tầng toàn cầu của AWS

## 1. Tổng quan

**Cloud computing (điện toán đám mây)** là việc cung cấp tài nguyên IT (server, lưu trữ, database, mạng, phần mềm) qua Internet theo nhu cầu, trả tiền theo mức sử dụng (**pay-as-you-go**).

Thay vì mua và tự vận hành data center, bạn "thuê" tài nguyên của `AWS` và mở rộng/thu hẹp trong vài phút.

**Vì sao quan trọng với kỳ thi SAA-C03?** Đây là nền tảng của mọi domain khác. Bạn phải nắm chắc **Region**, **Availability Zone (AZ)**, **Edge Location** và cách chọn Region — vì các câu hỏi về tính sẵn sàng (availability), độ trễ (latency) và tuân thủ (compliance) đều xoay quanh chúng.

---

## 2. Mô hình dịch vụ: IaaS / PaaS / SaaS

Ba mô hình khác nhau ở mức độ bạn tự quản lý so với nhà cung cấp quản lý:

| Mô hình | Bạn quản lý | Nhà cung cấp quản lý | Ví dụ AWS |
|---------|-------------|----------------------|-----------|
| **IaaS** (Infrastructure as a Service) | OS, runtime, ứng dụng, dữ liệu | Ảo hóa, server vật lý, mạng, lưu trữ | `EC2`, `VPC`, `EBS` |
| **PaaS** (Platform as a Service) | Ứng dụng, dữ liệu | OS, runtime, hạ tầng | `Elastic Beanstalk`, `RDS` |
| **SaaS** (Software as a Service) | Chỉ cấu hình/dữ liệu người dùng | Toàn bộ phần còn lại | `Amazon WorkMail`, Gmail |

Quy tắc nhớ nhanh: đi từ **IaaS → PaaS → SaaS** thì bạn quản lý **ngày càng ít**, nhà cung cấp lo **ngày càng nhiều**.

Ngoài ra còn có mô hình triển khai: **Cloud** (toàn bộ trên cloud), **On-premises** (tự vận hành), **Hybrid** (kết hợp cả hai).

---

## 3. Sáu lợi ích của cloud

AWS nhấn mạnh 6 lợi ích chính (thường xuất hiện trong đề thi):

1. **Đổi chi phí cố định (CapEx) thành chi phí biến đổi (OpEx)** — không mua server trả trước, chỉ trả cho phần dùng.
2. **Hưởng lợi thế kinh tế quy mô lớn** — hàng triệu khách hàng dùng chung → giá đầu vào của AWS thấp hơn → giá bán rẻ hơn.
3. **Không phải đoán dung lượng (capacity)** — scale lên/xuống theo nhu cầu thực, không thừa cũng không thiếu.
4. **Tăng tốc độ và sự linh hoạt** — tạo tài nguyên trong vài phút thay vì hàng tuần.
5. **Không tốn tiền vận hành data center** — AWS lo phần cứng, điện, làm mát, bảo mật vật lý.
6. **Vươn ra toàn cầu trong vài phút** — triển khai ứng dụng ở nhiều Region để phục vụ người dùng gần hơn.

---

## 4. Region (Vùng)

**Region** là một khu vực địa lý riêng biệt trên thế giới (ví dụ `us-east-1` — N. Virginia, `ap-southeast-1` — Singapore).

- Mỗi Region gồm **nhiều Availability Zone** (thường **3**, tối thiểu **3** với hầu hết Region mới).
- Các Region **độc lập** với nhau: dữ liệu **không** tự động sao chép giữa các Region (trừ khi bạn cấu hình).
- Mỗi Region có một mã (`us-east-1`, `eu-west-1`, `ap-northeast-1`...).

Region là ranh giới cho **tuân thủ dữ liệu** (data residency) và **cách ly lỗi** cấp cao nhất.

---

## 5. Availability Zone (AZ)

**Availability Zone (AZ)** là **một hoặc nhiều data center riêng biệt** với nguồn điện, làm mát và mạng độc lập, nằm trong một Region.

- Một AZ = **1+ data center vật lý** (điểm hay bị hỏi trong đề!).
- Các AZ trong cùng Region cách nhau đủ xa để tránh cùng bị ảnh hưởng bởi thảm họa, nhưng đủ gần để kết nối **độ trễ thấp** (single-digit millisecond).
- Mã AZ có dạng `us-east-1a`, `us-east-1b`, `us-east-1c`...

**Thiết kế đa AZ (Multi-AZ)** là cách chuẩn để đạt **tính sẵn sàng cao (high availability)**: nếu một AZ hỏng, ứng dụng ở AZ khác vẫn chạy.

---

## 6. Edge Location & Point of Presence (PoP)

**Edge Location** là các điểm phân phối nội dung nằm rải rác ở **nhiều thành phố** hơn số Region — dùng để đưa nội dung tới gần người dùng cuối.

- Là nền tảng cho `CloudFront` (CDN) — cache nội dung tĩnh, giảm độ trễ.
- Cũng phục vụ `Route 53` (DNS), `AWS Global Accelerator`, `AWS WAF`.
- **Point of Presence (PoP)** = tập hợp gồm Edge Location + Regional Edge Cache.

Số lượng Edge Location **lớn hơn nhiều** so với số Region và AZ — vì mục tiêu là "phủ" gần người dùng khắp nơi.

---

## 7. Cách chọn Region

Bốn yếu tố chính khi chọn Region (nhớ theo **4 tiêu chí**):

1. **Compliance / pháp lý** — dữ liệu phải nằm trong quốc gia/khu vực nào (GDPR ở EU, luật nội địa...). Đây thường là yếu tố **bắt buộc** đầu tiên.
2. **Latency (độ trễ)** — chọn Region gần người dùng cuối nhất để phản hồi nhanh.
3. **Giá (price)** — chi phí khác nhau giữa các Region; `us-east-1` thường rẻ nhất.
4. **Service availability (dịch vụ có sẵn)** — không phải Region nào cũng có đủ dịch vụ; dịch vụ mới thường ra ở `us-east-1` trước.

Mẹo thi: nếu đề nói "dữ liệu phải ở lại trong nước" → chọn theo **compliance**; nếu nói "giảm độ trễ cho người dùng" → chọn theo **latency**.

---

## 8. Global vs Region-scoped services

Một số dịch vụ AWS mang tính **toàn cầu (global)**, số khác **gắn với một Region**:

| Global (không gắn Region) | Region-scoped (gắn Region) |
|---------------------------|----------------------------|
| `IAM` (users, roles, policies) | `EC2`, `EBS` |
| `Route 53` (DNS) | `S3` (tên bucket toàn cầu nhưng dữ liệu ở 1 Region) |
| `CloudFront` (CDN) | `VPC`, subnet |
| `AWS WAF` (với CloudFront) | `RDS`, `DynamoDB` (theo Region) |
| `AWS Organizations` | `Lambda`, `SQS`, `SNS` |

Lưu ý: `S3` bucket được tạo **trong một Region** (dữ liệu lưu ở đó), nhưng **tên bucket là duy nhất toàn cầu**.

---

## 9. Mô hình trách nhiệm chung (Shared Responsibility Model)

AWS chia trách nhiệm bảo mật thành hai phần:

- **AWS chịu trách nhiệm về bảo mật *của* đám mây (security *of* the cloud)** — hạ tầng vật lý, phần cứng, mạng nền tảng, ảo hóa, cơ sở vật chất của Region/AZ.
- **Khách hàng chịu trách nhiệm về bảo mật *trên* đám mây (security *in* the cloud)** — dữ liệu, cấu hình OS, patch, quản lý `IAM`, mã hóa, cấu hình security group, firewall.

Nguyên tắc: **AWS lo phần "of the cloud", bạn lo phần "in the cloud".** Mức phân chia thay đổi theo dịch vụ (với `S3` hay `Lambda` AWS lo nhiều hơn so với `EC2`).

---

## 10. Console, CLI & SDK

Có ba cách chính để tương tác với AWS:

- **Management Console** — giao diện web, thao tác bằng chuột, phù hợp cho học và khám phá.
- **CLI (Command Line Interface)** — công cụ dòng lệnh; cấu hình bằng `aws configure` (nhập Access Key, Secret Key, Region, format). Ví dụ: `aws s3 ls`.
- **SDK (Software Development Kit)** — thư viện lập trình cho Python (`boto3`), JavaScript, Java, Go... để gọi API AWS từ trong ứng dụng.

Cả ba đều gọi tới cùng bộ **AWS API** phía sau. CLI và SDK dùng **Access Key** để xác thực (không dùng mật khẩu console).

---

## 11. AWS Free Tier

**Free Tier** cho phép dùng thử nhiều dịch vụ miễn phí ở mức giới hạn, chia làm 3 loại:

- **12 tháng miễn phí (12-month free)** — miễn phí trong 12 tháng đầu kể từ khi đăng ký (ví dụ `EC2` t2.micro 750 giờ/tháng, `S3` 5GB).
- **Always Free (miễn phí vĩnh viễn)** — luôn miễn phí trong giới hạn (ví dụ `Lambda` 1 triệu request/tháng, `DynamoDB` 25GB).
- **Trials (dùng thử)** — miễn phí trong thời gian ngắn kể từ lần kích hoạt đầu tiên.

Free Tier giúp học và thử nghiệm mà không tốn phí — nhưng phải **theo dõi mức dùng** để không bị tính tiền khi vượt hạn mức.

---

## Điểm thi quan trọng

- **AZ = 1 hoặc nhiều data center riêng biệt**; **Region có ≥ 3 AZ** (thường đúng 3). Đây là fact hay bị hỏi.
- Các AZ trong một Region kết nối **độ trễ thấp** (single-digit ms) nhưng **cách ly lỗi** vật lý → dùng **Multi-AZ** cho high availability.
- **Region độc lập**: dữ liệu không tự sao chép giữa Region → phải cấu hình cross-Region replication nếu cần.
- Chọn Region theo **compliance → latency → price → service availability**; compliance thường là yếu tố quyết định bắt buộc.
- **Edge Location** nhiều hơn Region/AZ; phục vụ `CloudFront`, `Route 53`, `Global Accelerator` để giảm độ trễ.
- Dịch vụ **global**: `IAM`, `Route 53`, `CloudFront`, `AWS Organizations`. Còn `EC2`, `VPC`, `RDS` là **Region-scoped**.
- Shared Responsibility: **AWS lo "of the cloud", khách hàng lo "in the cloud"** (dữ liệu, IAM, patch OS, cấu hình).
- `S3` bucket: **tên duy nhất toàn cầu** nhưng **dữ liệu nằm trong 1 Region**.

---

## Tóm tắt

- Cloud cung cấp tài nguyên IT theo nhu cầu, trả theo mức dùng; ba mô hình **IaaS / PaaS / SaaS** khác nhau ở mức tự quản lý.
- Hạ tầng AWS gồm **Region** (khu vực địa lý) → chứa **≥ 3 AZ** (mỗi AZ là 1+ data center) → và **Edge Location** phủ rộng để giảm độ trễ.
- **Multi-AZ** là chuẩn cho tính sẵn sàng cao; **Multi-Region** cho khôi phục thảm họa và phủ toàn cầu.
- Chọn Region dựa trên **compliance, latency, price, service availability**.
- **Shared Responsibility Model**: AWS bảo mật hạ tầng ("of the cloud"), khách hàng bảo mật dữ liệu và cấu hình ("in the cloud").
- Tương tác qua **Console / CLI (`aws configure`) / SDK**; **Free Tier** giúp học miễn phí trong giới hạn.
