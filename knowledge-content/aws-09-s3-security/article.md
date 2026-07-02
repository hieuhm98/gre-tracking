# Amazon S3 – Bảo mật & Mã hóa

## 1. Tổng quan

Amazon S3 là dịch vụ lưu trữ đối tượng (object storage) trọng tâm của AWS, và bảo mật dữ liệu trên S3 là một trong những chủ đề xuất hiện dày đặc nhất trong kỳ thi SAA-C03. Bảo mật S3 xoay quanh hai trục chính: **mã hóa dữ liệu** (khi lưu trữ và khi truyền) và **kiểm soát truy cập** (ai được phép làm gì với bucket/object).

Vì sao quan trọng: rò rỉ dữ liệu S3 (bucket public vô tình) là nguyên nhân hàng đầu gây sự cố bảo mật trên đám mây. AWS đã thay đổi nhiều mặc định để "an toàn theo mặc định": **Block Public Access bật sẵn**, **mã hóa `SSE-S3` mặc định từ tháng 1/2023**, và **ACL bị vô hiệu hóa mặc định**.

Trong đề thi, bạn sẽ gặp các câu dạng "cách MOST cost-effective để…", "MOST secure…", "LEAST operational overhead…" liên quan đến chọn loại mã hóa, ép HTTPS, chia sẻ cross-account, hoặc chống xóa dữ liệu.

## 2. Các loại mã hóa dữ liệu at rest

S3 hỗ trợ mã hóa phía server (SSE) và phía client. Với SSE, dữ liệu được mã hóa **sau khi** S3 nhận và trước khi ghi xuống đĩa.

| Loại | Quản lý khóa | Xoay khóa (rotation) | Audit | Use case chính |
|------|-------------|----------------------|-------|----------------|
| `SSE-S3` | AWS quản lý hoàn toàn (AES-256) | Tự động, minh bạch | Không audit riêng | Mặc định, đơn giản, không cần kiểm soát khóa |
| `SSE-KMS` | AWS KMS (khóa CMK) | Có, tự động/thủ công | Có – qua `CloudTrail` | Cần audit ai giải mã, kiểm soát quyền khóa |
| `DSSE-KMS` | KMS, mã hóa 2 lớp | Có | Có | Yêu cầu tuân thủ nghiêm ngặt (2 lớp mã hóa) |
| `SSE-C` | Khách hàng cung cấp khóa | Khách tự quản | Không (S3 không lưu khóa) | Khách muốn tự giữ khóa, không dùng KMS |
| Client-side | Khách mã hóa trước khi upload | Khách tự quản | Không | Mã hóa end-to-end, S3 chỉ thấy ciphertext |

Điểm mấu chốt:
- `SSE-S3`: dùng header `x-amz-server-side-encryption: AES256`. AWS quản lý mọi thứ, không thấy được thao tác giải mã.
- `SSE-KMS`: dùng header `aws:kms`. Cho phép **audit qua `CloudTrail`** và **kiểm soát quyền** giải mã bằng key policy. Nhược điểm: mỗi thao tác gọi API KMS (`GenerateDataKey`, `Decrypt`) → chịu **giới hạn/throttling của KMS** và tốn chi phí.
- `DSSE-KMS`: mã hóa hai lớp bằng KMS, phục vụ nhu cầu tuân thủ đặc biệt (ví dụ tiêu chuẩn chính phủ).
- `SSE-C`: khách gửi khóa trong mỗi request qua HTTPS; S3 dùng để mã/giải mã rồi **xóa khóa khỏi bộ nhớ**, không lưu. Bắt buộc dùng HTTPS.
- Client-side: mã hóa hoàn toàn phía ứng dụng trước khi gửi; AWS không bao giờ thấy plaintext.

## 3. Mã hóa in transit, Default encryption & S3 Bucket Keys

**Mã hóa in transit**: S3 hỗ trợ cả HTTP và HTTPS, nhưng để bắt buộc HTTPS bạn thêm điều kiện `aws:SecureTransport` vào bucket policy (Deny khi `aws:SecureTransport = false`). Đây là cách ép mã hóa đường truyền (TLS).

**Default encryption**: từ tháng 1/2023, mọi object mới được **tự động mã hóa `SSE-S3`** ngay cả khi client không yêu cầu. Bạn có thể nâng mặc định lên `SSE-KMS`/`DSSE-KMS` ở cấp bucket.

**S3 Bucket Keys**: khi dùng `SSE-KMS` quy mô lớn, mỗi object gọi KMS gây tốn kém và throttling. **S3 Bucket Keys** tạo một khóa cấp bucket, giảm mạnh số lời gọi tới KMS (giảm tới ~99% chi phí KMS). Đây là câu trả lời "MOST cost-effective" khi đề nói dùng `SSE-KMS` mà lo chi phí/giới hạn KMS.

```text
Bucket policy Deny khi không dùng TLS:
"Condition": { "Bool": { "aws:SecureTransport": "false" } }
```

## 4. Bucket Policy vs IAM Policy vs ACL

Ba cơ chế kiểm soát truy cập, khác nhau ở "gắn vào đâu".

| Cơ chế | Loại | Gắn vào | Dùng khi |
|--------|------|---------|----------|
| IAM Policy | Identity-based | User/Group/Role | Kiểm soát quyền của một identity trong cùng account |
| Bucket Policy | Resource-based (JSON) | Bucket | Cấp quyền cross-account, ép HTTPS, public/anonymous |
| ACL | Legacy | Bucket/Object | Hầu như không nên dùng, mặc định đã tắt |

- **IAM policy**: trả lời "identity này được làm gì trên các tài nguyên nào".
- **Bucket policy**: resource-based, JSON gắn trực tiếp vào bucket. Là cách chuẩn để **chia sẻ cross-account** (`Principal` là account/role bên ngoài) và để ép các điều kiện như `aws:SecureTransport`, hạn chế theo IP, VPC endpoint.
- **ACL**: cơ chế cũ; với **Object Ownership = Bucket owner enforced** (mặc định mới), ACL **bị vô hiệu hóa** và mọi quyền quản lý qua policy. AWS khuyến nghị tắt ACL.

## 5. Block Public Access (BPA)

**Block Public Access bật mặc định (ON)** ở cả cấp **account** và **bucket**. Nó gồm 4 thiết lập chặn: chặn ACL public mới, bỏ qua ACL public hiện có, chặn policy public mới, và hạn chế truy cập public qua policy hiện có.

Ngay cả khi một bucket policy hoặc ACL cấp quyền public, BPA sẽ **ghi đè và chặn** truy cập public. Muốn hosting website tĩnh public thì phải chủ động tắt BPA phù hợp. Trong đề thi: nếu hỏi "làm sao ngăn dữ liệu bị public do cấu hình sai", đáp án thường là **bật BPA ở cấp account**.

## 6. Pre-signed URLs

**Pre-signed URL** là URL có chữ ký, cho phép truy cập tạm thời (giới hạn thời gian) tới một object mà không cần credential AWS. Người tạo URL "cho mượn" quyền của mình.

Điểm thi quan trọng: pre-signed URL **kế thừa quyền của người/role tạo ra nó** – nếu người tạo có quyền `s3:GetObject`, người nhận URL cũng tải được object đó cho tới khi hết hạn. Dùng cho tình huống: cho phép người dùng ẩn danh tải/upload file riêng tư trong thời gian ngắn (ví dụ nút "Download" tạm thời), không cần bucket public.

## 7. S3 Access Points & S3 Object Lambda

**S3 Access Points**: mỗi access point có tên riêng (hostname riêng) và **policy riêng**, giúp quản lý truy cập cho nhiều ứng dụng/nhóm mà không phình to một bucket policy khổng lồ. Có thể ràng buộc access point chỉ dùng trong một VPC.

**S3 Object Lambda**: cho phép chạy một hàm `Lambda` để **biến đổi dữ liệu ngay khi object được lấy ra** (GET) – ví dụ che (redact) thông tin nhạy cảm, resize ảnh, đổi định dạng – mà không cần lưu nhiều bản sao. Dữ liệu gốc giữ nguyên, chỉ view trả về được xử lý.

## 8. CORS (Cross-Origin Resource Sharing)

**CORS** kiểm soát việc trình duyệt ở một domain (origin) truy cập tài nguyên S3 ở domain khác. Bạn cấu hình CORS trên bucket (JSON/XML) khai báo các `AllowedOrigins`, `AllowedMethods`, `AllowedHeaders`. Thường gặp khi một web frontend gọi trực tiếp tới S3 để tải/hiển thị tài nguyên; thiếu cấu hình CORS đúng thì request bị chặn bởi trình duyệt.

## 9. MFA Delete

**MFA Delete** yêu cầu xác thực đa yếu tố (MFA) cho các thao tác nhạy cảm: **xóa vĩnh viễn một version** hoặc **tắt versioning** của bucket. Chỉ **bật được bởi root account** và bucket phải bật versioning. Đây là lớp bảo vệ chống xóa nhầm/độc hại.

## 10. S3 Object Lock (WORM) & Glacier Vault Lock

**S3 Object Lock** áp dụng mô hình **WORM (Write Once Read Many)** – object không thể bị xóa/ghi đè trong thời gian giữ. Yêu cầu bucket bật versioning.

| Chế độ | Ai có thể ghi đè/xóa | Đặc điểm |
|--------|----------------------|----------|
| Governance mode | User có quyền đặc biệt (`s3:BypassGovernanceRetention`) | Bảo vệ nhưng admin có thể vượt qua |
| Compliance mode | **Không ai** – kể cả root | Không thể rút ngắn/xóa retention, không thể tắt |
| Legal Hold | Giữ vô thời hạn tới khi gỡ | Độc lập với retention period |

- **Compliance mode** không thể bị vô hiệu hóa hay rút ngắn kể cả bởi **root** – dùng cho yêu cầu tuân thủ pháp lý nghiêm ngặt.
- **Governance mode** cho phép người có quyền `s3:BypassGovernanceRetention` vượt qua.
- **Legal Hold** khóa object cho tới khi được gỡ thủ công, không gắn với thời hạn.

**Glacier Vault Lock**: áp dụng chính sách WORM tương tự cho kho Glacier (vault); một khi lock, policy trở nên **bất biến (immutable)**.

## 11. Access Logging & CloudTrail Data Events

- **S3 Server Access Logs**: ghi log chi tiết mọi request tới bucket (ghi vào một bucket đích khác), phục vụ phân tích truy cập, điều tra bảo mật.
- **CloudTrail data events**: ghi lại các thao tác cấp object (`GetObject`, `PutObject`, `DeleteObject`) – phải bật riêng vì mặc định CloudTrail chỉ log management events. Với `SSE-KMS`, CloudTrail còn log các lời gọi KMS phục vụ audit ai giải mã.

## 12. VPC Gateway Endpoint cho S3

**VPC Gateway Endpoint** cho phép tài nguyên trong VPC (ví dụ EC2 trong subnet private) truy cập S3 **qua mạng riêng của AWS**, không đi qua internet, **không cần NAT Gateway/Internet Gateway**. Đặc điểm quan trọng: **miễn phí** (Gateway Endpoint không tính phí, khác với Interface Endpoint dùng PrivateLink có phí). Đáp án điển hình cho câu "truy cập S3 riêng tư, MOST cost-effective" từ subnet private.

## Điểm thi quan trọng

- `SSE-KMS` là lựa chọn khi cần **audit (CloudTrail)** và **kiểm soát/rotation khóa**; nhưng chú ý **giới hạn/throttling API KMS** → dùng **S3 Bucket Keys** để giảm số lời gọi KMS và chi phí (MOST cost-effective).
- **Default encryption `SSE-S3` bật sẵn từ 1/2023**; **Block Public Access bật mặc định** ở cấp account và bucket.
- Ép HTTPS bằng bucket policy Deny với điều kiện `aws:SecureTransport = false`.
- **Pre-signed URL kế thừa quyền của người tạo** và có thời hạn.
- **Cross-account access** dùng **bucket policy** (resource-based) với `Principal` là account bên ngoài.
- **Object Lock Compliance mode không thể bị tắt/rút ngắn kể cả bởi root**; Governance mode có thể bypass với quyền đặc biệt.
- **MFA Delete** chỉ bật được bởi root, cần versioning.
- **VPC Gateway Endpoint cho S3 miễn phí**, cho truy cập riêng tư từ VPC không cần internet.
- `SSE-C`: khách tự giữ khóa, bắt buộc HTTPS, S3 không lưu khóa.

## Tóm tắt

- S3 có 5 cách mã hóa: `SSE-S3` (mặc định), `SSE-KMS` (audit + rotation), `DSSE-KMS` (2 lớp), `SSE-C` (khóa của khách), và client-side (mã hóa trước khi upload).
- Kiểm soát truy cập gồm IAM policy (identity), bucket policy (resource, dùng cho cross-account & ép HTTPS) và ACL (legacy, đã tắt mặc định).
- AWS an toàn theo mặc định: Block Public Access ON, mã hóa `SSE-S3` mặc định, ACL disabled.
- Bảo vệ dữ liệu khỏi xóa: Object Lock (WORM, governance/compliance/legal hold), MFA Delete, Glacier Vault Lock.
- Truy cập riêng tư & chia sẻ tạm: VPC Gateway Endpoint (miễn phí), Pre-signed URLs (tạm thời, kế thừa quyền người tạo), Access Points & Object Lambda.
- Giám sát: S3 Server Access Logs và CloudTrail data events để audit truy cập object.
