# AWS Security & Encryption – KMS, Secrets Manager, Shield, WAF, GuardDuty

## 1. Tổng quan

**Mã hóa (encryption)** là quá trình biến dữ liệu đọc được (plaintext) thành dạng không đọc được (ciphertext) bằng một **khóa (key)**. Trong AWS có hai bối cảnh mã hóa cần phân biệt rõ cho kỳ thi:

- **Encryption at rest (mã hóa khi lưu trữ):** bảo vệ dữ liệu đang nằm trên đĩa, database, backup, snapshot. Ví dụ: mã hóa `EBS` volume, object trong `S3`, database `RDS`. Khóa thường do `KMS` quản lý.
- **Encryption in transit (mã hóa khi truyền):** bảo vệ dữ liệu di chuyển qua mạng bằng **TLS/SSL** (HTTPS). Ngăn nghe lén (eavesdropping) và tấn công man-in-the-middle. Chứng chỉ do `ACM` cấp.

Hai kiểu thuật toán mã hóa:

| Loại | Khóa | Đặc điểm | Ví dụ dùng |
|---|---|---|---|
| **Đối xứng (symmetric)** | Một khóa duy nhất mã hóa & giải mã | Nhanh, dùng cho lượng dữ liệu lớn | Mã hóa dữ liệu at rest (AES-256) |
| **Bất đối xứng (asymmetric)** | Cặp khóa public/private | Chậm hơn, không cần chia sẻ private key | TLS handshake, chữ ký số, ký/xác thực |

**Vì sao quan trọng với kỳ thi SAA-C03:** bảo mật là "Job Zero" của AWS. Đề thi liên tục hỏi dịch vụ nào phù hợp cho mã hóa khóa, xoay vòng secret, chống DDoS, lọc tầng ứng dụng, phát hiện mối đe dọa hay quét lỗ hổng. Nắm đúng "mỗi dịch vụ làm gì" là chìa khóa ăn điểm.

## 2. AWS KMS (Key Management Service)

`KMS` là dịch vụ **quản lý khóa mã hóa** tập trung, tích hợp sâu với hầu hết dịch vụ AWS. Khóa được gọi là **KMS Key** (trước đây là CMK – Customer Master Key).

**Các loại khóa:**

| Loại khóa | Ai tạo/quản lý | Xoay vòng | Xem/kiểm soát policy |
|---|---|---|---|
| **AWS-owned** | AWS sở hữu, dùng chung nhiều tài khoản | AWS tự lo | Không thấy, không kiểm soát |
| **AWS-managed** (`aws/service`) | AWS tạo cho một dịch vụ | Tự động, bắt buộc | Xem được, không sửa policy |
| **Customer-managed (CMK)** | Bạn tạo & quản lý | **Bật/tắt được, tự động mỗi năm** | Toàn quyền key policy |

- **Đối xứng vs bất đối xứng:** `KMS` hỗ trợ cả **symmetric** (mặc định, dùng để mã hóa dữ liệu) và **asymmetric** (cặp public/private cho ký số hoặc mã hóa ngoài AWS nơi không gọi được API KMS).
- **Kiểm soát truy cập:** kết hợp **key policy** (bắt buộc, gắn trực tiếp vào khóa) + **IAM policy** + **grants** (ủy quyền tạm thời). Nếu key policy không cho phép, IAM cũng không cứu được.
- **Xoay vòng khóa (key rotation):** với **customer-managed key**, có thể bật **automatic rotation** – KMS tự tạo material mới **mỗi năm một lần** (yearly), trong suốt với ứng dụng.
- **Per-region:** khóa `KMS` bị **giới hạn theo region** – không dùng khóa của region này ở region khác. **Multi-Region Keys** là bản sao khóa (cùng key ID) nhân bản qua nhiều region, dùng cho DR / global tables / sao chép dữ liệu xuyên vùng.
- **Giới hạn 4KB:** API `Encrypt`/`Decrypt` trực tiếp chỉ mã hóa được dữ liệu **tối đa 4KB**.

**Envelope Encryption (mã hóa phong bì) – dữ liệu > 4KB:**

Vì giới hạn 4KB, để mã hóa dữ liệu lớn ta dùng **envelope encryption** qua API **`GenerateDataKey`**:

1. Gọi `GenerateDataKey` → KMS trả về một **data key** dạng plaintext + bản đã mã hóa (encrypted data key).
2. Dùng **plaintext data key** mã hóa dữ liệu lớn ở phía client (local), rồi **xóa** plaintext data key khỏi bộ nhớ.
3. Lưu **encrypted data key** kèm dữ liệu đã mã hóa.
4. Khi giải mã: gọi `Decrypt` để KMS mở lại data key, rồi giải mã dữ liệu cục bộ.

Nhờ vậy dữ liệu lớn không phải đi qua KMS, chỉ có data key nhỏ đi qua – vừa nhanh vừa vượt giới hạn 4KB.

**Tích hợp:** `KMS` được `EBS`, `S3` (SSE-KMS), `RDS`, `EFS`, `Secrets Manager`, `DynamoDB`... dùng để mã hóa at rest.

## 3. AWS Certificate Manager (ACM)

`ACM` cung cấp và quản lý **chứng chỉ SSL/TLS** để bật HTTPS (encryption in transit).

- **Chứng chỉ public MIỄN PHÍ** và **tự động gia hạn (auto-renew)** khi do ACM cấp.
- Tích hợp trực tiếp với **`ELB` (ALB/NLB), `CloudFront`, `API Gateway`** – không cần cài chứng chỉ thủ công.
- **KHÔNG gắn trực tiếp vào `EC2`:** ACM không đẩy được private key ra EC2. Muốn HTTPS ở EC2, thường đặt ELB/CloudFront phía trước hoặc dùng chứng chỉ tự cài.
- **Imported certificates** (chứng chỉ tự mua rồi import): ACM lưu giúp nhưng **KHÔNG tự gia hạn** – bạn phải tự import lại trước khi hết hạn.

## 4. SSM Parameter Store vs AWS Secrets Manager

Cả hai đều lưu cấu hình/bí mật, nhưng khác biệt lớn nhất là **rotation** và **giá**.

| Tiêu chí | SSM Parameter Store | AWS Secrets Manager |
|---|---|---|
| Mục đích | Cấu hình (config) + secret | Chuyên cho secret nhạy cảm |
| Mã hóa | `SecureString` mã hóa qua `KMS` | Luôn mã hóa qua `KMS` |
| **Xoay vòng tự động** | **Không có sẵn** (phải tự làm) | **Có – tự động qua Lambda** |
| Tích hợp DB | Không native | **Native `RDS`, `Redshift`, `DocumentDB`** |
| Giá | **Rẻ hơn** (tier standard miễn phí) | **Đắt hơn** (tính theo secret + API call) |
| Phù hợp | Config app, tham số môi trường | Mật khẩu DB cần xoay vòng định kỳ |

**Quy tắc chọn cho thi:** cần **tự động xoay vòng mật khẩu database** (đặc biệt RDS) → chọn **`Secrets Manager`**. Chỉ cần lưu config rẻ, không cần rotation → **`Parameter Store`**.

## 5. AWS CloudHSM

`CloudHSM` cung cấp **Hardware Security Module (HSM) chuyên dụng, single-tenant** (riêng cho bạn) trên phần cứng vật lý.

| Tiêu chí | AWS KMS | AWS CloudHSM |
|---|---|---|
| Kiểu | Multi-tenant, được quản lý | **Single-tenant, phần cứng riêng** |
| Ai giữ khóa | AWS quản lý (bạn cấu hình) | **Bạn hoàn toàn kiểm soát khóa** |
| Chuẩn tuân thủ | FIPS 140-2 Level 2 (Level 3 cho một số) | **FIPS 140-2 Level 3** |
| Dùng khi | Nhu cầu mã hóa thông thường | Yêu cầu tuân thủ nghiêm ngặt, tự quản khóa |

Chọn `CloudHSM` khi có yêu cầu tuân thủ bắt buộc HSM chuyên dụng hoặc bạn phải là người duy nhất kiểm soát khóa.

## 6. AWS Shield – Chống DDoS

`Shield` bảo vệ chống tấn công **DDoS** (từ chối dịch vụ phân tán).

| Phiên bản | Giá | Bảo vệ | Đặc điểm |
|---|---|---|---|
| **Shield Standard** | **Miễn phí, tự động** | Tầng **L3/L4** (SYN flood, UDP reflection) | Bật sẵn cho mọi tài khoản |
| **Shield Advanced** | **Trả phí** (~$3000/tháng) | Thêm tầng **L7** | 24/7 **DRT team**, **cost protection** (hoàn phí scale do DDoS), báo cáo nâng cao |

## 7. AWS WAF – Web Application Firewall (Layer 7)

`WAF` lọc lưu lượng ở **tầng ứng dụng (Layer 7 / HTTP)**. Bạn tạo **Web ACL** chứa các **rules**.

**Các loại rule thường gặp:**

- **SQL injection** và **Cross-Site Scripting (XSS)** – chặn tấn công web phổ biến.
- **Geo-match** – chặn/cho phép theo quốc gia.
- **Rate-based rules** – giới hạn số request/IP trong khoảng thời gian (chống brute-force, flood tầng 7).
- **IP sets** – whitelist/blacklist theo địa chỉ IP.

**Gắn được vào:** `ALB`, `API Gateway`, `CloudFront`, `AppSync`.

**Lưu ý thi:** `WAF` **KHÔNG** dùng cho L3/L4 (đó là việc của `Shield`). WAF chỉ lọc HTTP/HTTPS. WAF **không** gắn trực tiếp vào NLB (L4).

## 8. AWS Firewall Manager

`Firewall Manager` **quản lý tập trung** các quy tắc bảo mật trên **nhiều tài khoản** trong **AWS Organizations**:

- Áp `WAF` rules, `Shield Advanced`, **Security Groups**, AWS Network Firewall, Route 53 Resolver DNS Firewall một cách nhất quán.
- Tự động áp policy cho tài nguyên mới tạo. Dùng khi cần chuẩn hóa bảo mật toàn tổ chức.

## 9. Amazon GuardDuty – Phát hiện mối đe dọa

`GuardDuty` là dịch vụ **phát hiện mối đe dọa (threat detection)** thông minh, dùng **Machine Learning** + threat intelligence.

- Phân tích **VPC Flow Logs, DNS logs, CloudTrail events** (và EKS/S3 tùy chọn).
- **Không cần cài agent**, bật một click.
- Sinh ra **findings** (ví dụ: giao tiếp tới IP độc hại, đào coin, truy cập bất thường), có thể kích hoạt `EventBridge` → Lambda để phản ứng tự động.

## 10. Amazon Inspector – Quét lỗ hổng

`Inspector` **quét lỗ hổng (vulnerability scanning) tự động**:

- Đối tượng: **`EC2` instances, container images trong `ECR`, `Lambda` functions**.
- Tìm **CVE** (lỗ hổng phần mềm đã biết) và **network exposure** (cổng mở ra Internet ngoài ý muốn).
- Chấm điểm rủi ro để ưu tiên vá lỗi. Khác GuardDuty ở chỗ: Inspector tìm **lỗ hổng**, GuardDuty phát hiện **hành vi tấn công đang diễn ra**.

## 11. Amazon Macie – Bảo vệ dữ liệu nhạy cảm

`Macie` dùng **Machine Learning** để **phát hiện và phân loại dữ liệu nhạy cảm / PII** (thông tin cá nhân) trong **`S3`**.

- Tự nhận diện số thẻ tín dụng, số CMND/hộ chiếu, thông tin cá nhân... và cảnh báo.
- Giúp tuân thủ GDPR/HIPAA và tránh lộ dữ liệu nhạy cảm.

## 12. Bảng tổng hợp "dịch vụ nào làm gì"

| Dịch vụ | Chức năng chính | Nhớ nhanh |
|---|---|---|
| **`Shield`** | Chống **DDoS** (L3/L4, +L7 Advanced) | Standard miễn phí |
| **`WAF`** | Lọc **Layer 7** (SQLi, XSS, rate, geo) | Web ACL trên ALB/CF/API GW |
| **`GuardDuty`** | **Phát hiện mối đe dọa** (ML trên logs) | Không cần agent, sinh findings |
| **`Inspector`** | **Quét lỗ hổng** EC2/ECR/Lambda | Tìm CVE + network exposure |
| **`Macie`** | Phát hiện **PII/dữ liệu nhạy cảm** trong `S3` | ML phân loại dữ liệu |

## Điểm thi quan trọng

- **`KMS`** dùng để quản lý khóa; API trực tiếp chỉ mã hóa tối đa **4KB** → dữ liệu lớn phải dùng **envelope encryption** qua **`GenerateDataKey`**.
- **Customer-managed key** hỗ trợ **automatic rotation mỗi năm**; khóa `KMS` là **per-region**, dùng **Multi-Region Keys** khi cần xuyên vùng.
- Cần **tự động xoay vòng mật khẩu DB** (nhất là RDS) → **`Secrets Manager`**. Chỉ cần lưu config rẻ, không rotation → **`Parameter Store`** (SecureString).
- **`ACM`** cấp chứng chỉ **miễn phí + tự gia hạn** cho **`ELB`/`CloudFront`/`API Gateway`**, **không gắn trực tiếp EC2**; chứng chỉ import **không** tự gia hạn.
- **`Shield`** = DDoS (Standard miễn phí, L3/L4); **`WAF`** = lọc L7 (SQLi/XSS/rate-based/geo). Đừng nhầm hai dịch vụ này.
- **`GuardDuty`** = phát hiện mối đe dọa; **`Inspector`** = quét lỗ hổng (CVE); **`Macie`** = tìm PII trong `S3`.
- **`CloudHSM`** = HSM **single-tenant** chuyên dụng, FIPS 140-2 **Level 3**, bạn tự kiểm soát khóa (khác `KMS` multi-tenant).

## Tóm tắt

- `KMS` là trung tâm quản lý khóa; **envelope encryption** (`GenerateDataKey`) là cách mã hóa dữ liệu lớn hơn 4KB.
- Chọn **`Secrets Manager`** khi cần **xoay vòng tự động** (native RDS); chọn **`Parameter Store`** khi chỉ cần lưu config/secret rẻ.
- **In transit**: `ACM` cấp chứng chỉ TLS miễn phí, tự gia hạn cho ELB/CloudFront/API Gateway (không cho EC2 trực tiếp).
- Chống tấn công: **`Shield`** cho DDoS (L3/L4), **`WAF`** lọc Layer 7 (SQLi, XSS, rate, geo), **`Firewall Manager`** quản lý tập trung nhiều tài khoản.
- Giám sát bảo mật: **`GuardDuty`** phát hiện mối đe dọa, **`Inspector`** quét lỗ hổng, **`Macie`** phát hiện PII trong S3.
- **`CloudHSM`** dành cho yêu cầu HSM chuyên dụng, single-tenant, tự kiểm soát khóa hoàn toàn.
