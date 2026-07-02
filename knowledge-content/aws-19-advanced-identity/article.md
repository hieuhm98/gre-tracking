# AWS Advanced Identity – Organizations, SCP, STS, IAM Identity Center

## 1. Tổng quan

Khi hệ thống lớn lên, một tài khoản AWS duy nhất không còn đủ. Các doanh nghiệp thường vận hành **nhiều tài khoản** (multi-account) để tách biệt môi trường (prod / dev / test), tách biệt team, giới hạn "bán kính vụ nổ" (blast radius) khi có sự cố, và quản lý chi phí rõ ràng hơn. Nhóm dịch vụ **advanced identity** giúp quản trị nhiều tài khoản một cách tập trung và cấp quyền truy cập an toàn.

Các thành phần chính:

- `AWS Organizations` – quản lý tập trung nhiều tài khoản, gộp hóa đơn (consolidated billing).
- `Service Control Policies (SCP)` – rào chắn (guardrail) giới hạn quyền tối đa của tài khoản/OU.
- `AWS Control Tower` – tự động dựng "landing zone" multi-account có sẵn guardrail.
- `AWS STS` – cấp **thông tin đăng nhập tạm thời** (temporary credentials), nền tảng của truy cập cross-account.
- `IAM Identity Center` (trước là AWS SSO) – đăng nhập một lần (SSO) vào nhiều tài khoản và ứng dụng.
- `Amazon Cognito` – nhận dạng cho **người dùng cuối** của ứng dụng.
- `AWS Directory Service` – tích hợp Microsoft Active Directory.
- `AWS RAM` – chia sẻ tài nguyên giữa các tài khoản.

**Vì sao quan trọng với kỳ thi SAA-C03:** đề thi thường đưa tình huống multi-account rồi hỏi cách quản trị tập trung, giới hạn quyền, hoặc cấp quyền truy cập tạm thời giữa các tài khoản. Phân biệt đúng vai trò của từng dịch vụ là chìa khóa.

## 2. AWS Organizations

`AWS Organizations` cho phép quản lý nhiều tài khoản AWS dưới một cấu trúc phân cấp duy nhất.

**Thành phần chính:**

- **Management account** (tài khoản quản lý, trước gọi là master/root account): tài khoản trả tiền, có toàn quyền, tạo/mời tài khoản thành viên. Chỉ nên có ít tài nguyên trong tài khoản này.
- **Member accounts** (tài khoản thành viên): mỗi tài khoản thuộc về đúng **một** organization.
- **Organizational Units (OUs)**: nhóm các tài khoản theo phân cấp (ví dụ OU Prod, OU Dev, OU theo phòng ban). SCP có thể gắn ở cấp OU để áp cho mọi tài khoản bên trong.
- **API tạo tài khoản**: có thể tạo tài khoản thành viên mới **bằng lập trình** (API/CLI), thuận tiện tự động hóa.

**Lợi ích nổi bật:**

- **Consolidated Billing (gộp hóa đơn)**: một hóa đơn duy nhất cho cả tổ chức. Quan trọng cho thi:
  - **Giảm giá theo khối lượng (volume discounts)**: mức sử dụng của tất cả tài khoản được **gộp lại** để tính bậc giá — ví dụ tổng dung lượng `S3` hay lưu lượng dữ liệu được cộng dồn, đạt mức giảm giá nhanh hơn.
  - **Chia sẻ Reserved Instances (RI) và Savings Plans**: RI/Savings Plan mua ở một tài khoản có thể áp cho tài khoản khác trong tổ chức, tối ưu chi phí.
- **Tag policies**: chuẩn hóa việc gắn tag (định dạng, key/value) trên toàn tổ chức để quản trị và phân bổ chi phí nhất quán.
- **Quản trị tập trung**: bật các dịch vụ đáng tin cậy (trusted services) như CloudTrail toàn tổ chức, và áp SCP.

## 3. Service Control Policies (SCP)

`SCP` là chính sách gắn ở cấp **OU hoặc tài khoản** để xác định **quyền tối đa** (maximum permissions / guardrail) mà các principal (user, role) trong tài khoản đó được phép có.

**Nguyên tắc CỰC KỲ quan trọng cho thi:**

- **SCP KHÔNG cấp quyền.** Nó chỉ đặt trần (rào chắn). Muốn thực sự có quyền, principal vẫn cần **IAM policy** cấp quyền tương ứng.
- **Quyền hiệu dụng = giao (intersection) của SCP và IAM policy.** Một hành động chỉ được phép khi **cả** SCP **và** IAM đều cho phép.
- **Explicit deny luôn thắng.** Nếu SCP (hoặc IAM) có deny tường minh, hành động bị chặn dù nơi khác allow.
- **SCP không áp dụng cho management account** (kể cả root của management account) — vì vậy không nên đặt tài nguyên quan trọng ở đó.
- SCP không ảnh hưởng service-linked roles.

**Kiểu chính sách:** dạng **allow list** (mặc định chặn hết, chỉ mở những gì liệt kê) hoặc **deny list** (mặc định cho phép, chỉ chặn những gì liệt kê — phổ biến hơn, ví dụ "cấm mọi region trừ ap-southeast-1").

### So sánh SCP vs IAM policy

| Tiêu chí | `SCP` | `IAM policy` |
| --- | --- | --- |
| Cấp quyền? | **Không** (chỉ giới hạn trần) | **Có** (cấp quyền thực sự) |
| Gắn ở đâu | OU / account (qua Organizations) | User / group / role |
| Tác dụng | Guardrail tối đa cho cả tài khoản | Quyền cụ thể cho principal |
| Management account | **Không áp dụng** | Áp dụng bình thường |
| Kết quả cuối | Quyền hiệu dụng = SCP ∩ IAM | (một nửa của phép giao) |

## 4. AWS Control Tower

`AWS Control Tower` **tự động thiết lập một landing zone** multi-account tuân thủ best practice, xây dựng **trên nền `AWS Organizations`**.

- Tạo môi trường multi-account an toàn chỉ với vài cú click.
- Áp **guardrails** (rào chắn) tự động: **preventive** (dùng SCP để chặn hành động không mong muốn) và **detective** (dùng `AWS Config` để phát hiện sai lệch).
- Có **Account Factory** để cấp phát tài khoản mới đã chuẩn hóa.
- Dashboard giám sát tuân thủ tập trung.

Nói ngắn gọn: nếu đề hỏi "cách nhanh nhất để dựng môi trường multi-account có guardrail sẵn", câu trả lời là `Control Tower`.

## 5. AWS STS (Security Token Service)

`AWS STS` cấp **thông tin đăng nhập tạm thời** (temporary security credentials) có thời hạn ngắn (thường 15 phút–12 giờ). Đây là nền tảng của việc **assume role** và truy cập cross-account.

**Các API chính:**

- **`AssumeRole`**: đảm nhận (assume) một IAM role — dùng cho **chuyển vai trò trong cùng tài khoản** và **truy cập cross-account**. Trả về access key id, secret key, và **session token** tạm thời.
- **`AssumeRoleWithSAML`**: cấp credentials tạm thời cho người dùng đã xác thực qua **SAML 2.0** (liên kết với IdP doanh nghiệp).
- **`AssumeRoleWithWebIdentity`**: cấp credentials cho người dùng xác thực qua OpenID Connect (Google, Facebook...). **Nay AWS khuyến nghị dùng `Amazon Cognito`** thay cho lời gọi trực tiếp này với ứng dụng public.
- **`GetSessionToken`**: dùng cho **MFA** — lấy credentials tạm thời cho user/root đã xác thực MFA.
- **`GetFederationToken`**: credentials tạm thời cho federated user (custom identity broker).

**Truy cập cross-account bằng AssumeRole (mẫu kinh điển trong đề thi):**

1. Trong **tài khoản B** (chứa tài nguyên), tạo một IAM role với **trust policy** cho phép **tài khoản A** (principal) được assume.
2. Gắn IAM policy vào role đó để cấp quyền trên tài nguyên của B.
3. Principal ở tài khoản A gọi **`sts:AssumeRole`** trỏ tới role của B → nhận credentials tạm thời → thao tác trên tài nguyên của B.

**Khái niệm bổ sung:**

- **External ID**: chuỗi bí mật thêm vào trust policy khi cấp quyền cho **bên thứ ba** (ví dụ nhà cung cấp SaaS), chống tấn công "confused deputy".
- **Role chaining**: assume role A rồi từ đó assume tiếp role B; lưu ý session tối đa còn 1 giờ khi chaining.

## 6. IAM Identity Center (trước là AWS SSO)

`IAM Identity Center` cung cấp **đăng nhập một lần (SSO)** cho **workforce** (nhân viên) vào **nhiều tài khoản AWS trong Organizations** và các **ứng dụng doanh nghiệp** (SAML 2.0) — chỉ với một bộ thông tin đăng nhập.

**Điểm chính:**

- **Permission sets**: tập hợp IAM policy định nghĩa "vai trò công việc" (ví dụ Admin, ReadOnly); gán cho user/group ứng với từng tài khoản.
- **Identity source (nguồn danh tính)**: chọn một trong: **directory tích hợp sẵn** của Identity Center, **Active Directory** (qua Directory Service), hoặc **external IdP** (Okta, Azure AD/Entra ID...) qua SAML 2.0.
- Tích hợp một cửa (login portal) để truy cập mọi tài khoản/ứng dụng.

Nếu đề nói "SSO tập trung cho nhân viên vào nhiều tài khoản AWS", đáp án là `IAM Identity Center`.

## 7. IAM Identity Providers & Federation

`IAM Identity Providers` cho phép **liên kết (federation)** danh tính từ bên ngoài thay vì tạo IAM user cho mỗi người:

- **SAML 2.0 federation**: liên kết với IdP doanh nghiệp (ADFS, Okta) để nhân viên đăng nhập AWS bằng tài khoản công ty.
- **OIDC / Web Identity federation**: liên kết với các provider OpenID Connect.
- **Custom identity broker**: khi IdP không hỗ trợ SAML, tự viết broker gọi STS để phát credentials tạm thời.

Federation nghĩa là **không lưu long-term credentials** trong AWS cho từng người — người dùng nhận credentials tạm thời sau khi IdP xác thực.

## 8. Amazon Cognito

`Amazon Cognito` phục vụ **người dùng cuối của ứng dụng** (web/mobile), khác với SSO cho nhân viên nội bộ.

- **User Pools**: thư mục người dùng để **đăng nhập/đăng ký** (sign-in/sign-up) cho ứng dụng. Xử lý mật khẩu, MFA, xác minh email/SĐT, và trả về **token (JWT)**. Có thể liên kết social/SAML. Thường dùng làm authorizer cho `API Gateway`.
- **Identity Pools (Federated Identities)**: đổi danh tính (từ User Pool, social login, SAML...) lấy **AWS credentials tạm thời** để truy cập trực tiếp dịch vụ AWS (ví dụ upload thẳng lên `S3`, đọc `DynamoDB`).

### Cognito User Pool vs Identity Pool

| Tiêu chí | User Pool | Identity Pool |
| --- | --- | --- |
| Mục đích | Xác thực (authentication), sign-in/sign-up | Cấp quyền (authorization) vào AWS |
| Trả về | JWT token (id/access token) | **AWS credentials tạm thời** (qua STS) |
| Dùng khi | Cần đăng nhập người dùng, làm authorizer API Gateway | Cần cho phép app truy cập trực tiếp `S3`/`DynamoDB`... |

**Đối chiếu với workforce SSO:** `Cognito` = người dùng ngoài của **ứng dụng**; `IAM Identity Center` = **nhân viên** truy cập tài khoản AWS.

## 9. AWS Directory Service

`AWS Directory Service` tích hợp **Microsoft Active Directory (AD)** với AWS.

### So sánh các loại Directory Service

| Loại | Mô tả | Dùng khi |
| --- | --- | --- |
| **AWS Managed Microsoft AD** | AD thật do AWS quản lý, chạy trên cloud; hỗ trợ **trust** hai chiều với AD on-prem | Cần AD đầy đủ tính năng trên AWS, có thể liên kết với on-prem |
| **AD Connector** | **Proxy/gateway** chuyển tiếp yêu cầu xác thực về **AD on-prem** (không lưu dữ liệu trên AWS) | Muốn dùng lại AD on-prem hiện có, không muốn nhân bản người dùng lên cloud |
| **Simple AD** | AD **độc lập, rẻ**, tương thích Samba, tính năng giới hạn | Nhu cầu cơ bản, số user nhỏ, không cần trust với on-prem |

Điểm mấu chốt: **AD Connector = proxy tới on-prem AD**; **Managed Microsoft AD = AD thật trên AWS**; **Simple AD = rẻ, standalone**.

## 10. AWS Resource Access Manager (RAM)

`AWS RAM` cho phép **chia sẻ tài nguyên AWS giữa các tài khoản** (trong hoặc ngoài Organizations) mà **không cần nhân bản** tài nguyên.

- Chia sẻ được: **VPC subnets** (nhiều tài khoản cùng dùng chung một VPC), **Transit Gateway**, **Route 53 Resolver rules**, **License Manager**, **Aurora**, v.v.
- Ví dụ điển hình: một tài khoản mạng trung tâm tạo VPC và **chia sẻ subnet** qua RAM để các tài khoản ứng dụng khởi tạo tài nguyên trong cùng VPC → giảm chi phí, quản trị mạng tập trung.

Nếu đề hỏi "chia sẻ subnet / Transit Gateway giữa các tài khoản mà không tạo lại", đáp án là `AWS RAM`.

## Điểm thi quan trọng

- **`SCP` không cấp quyền** — chỉ đặt trần (guardrail). Quyền hiệu dụng = **SCP ∩ IAM**; **explicit deny luôn thắng**; SCP **không áp dụng cho management account**.
- **Consolidated billing** mang lại **giảm giá theo khối lượng** và **chia sẻ RI/Savings Plans** trên toàn tổ chức.
- Truy cập **cross-account** dùng **`STS AssumeRole`** + **trust policy** trên role ở tài khoản đích; nhận **credentials tạm thời**.
- **`IAM Identity Center`** cho **SSO của nhân viên** vào nhiều tài khoản AWS và app; định nghĩa quyền bằng **permission sets**.
- **Cognito User Pool** = xác thực/đăng nhập (trả JWT); **Identity Pool** = đổi lấy **AWS credentials tạm thời**. Đừng nhầm hai cái.
- **AD Connector = proxy tới AD on-prem**; **Managed Microsoft AD = AD thật trên AWS**; **Simple AD = rẻ, standalone**.
- **`AWS RAM`** để **chia sẻ tài nguyên** (subnet, Transit Gateway...) giữa các tài khoản, không nhân bản.
- **`Control Tower`** để **tự động dựng landing zone** multi-account có guardrail (dựa trên Organizations).

## Tóm tắt

- `AWS Organizations` quản trị multi-account tập trung: OUs, gộp hóa đơn (volume discounts + chia sẻ RI/Savings Plans), tag policies, API tạo tài khoản.
- `SCP` là rào chắn đặt **quyền tối đa** cho OU/tài khoản — không bao giờ cấp quyền; quyền thật là giao của SCP và IAM.
- `STS AssumeRole` + trust policy là cơ chế chuẩn cho truy cập tạm thời và cross-account; `Control Tower` tự động dựng landing zone.
- `IAM Identity Center` cho SSO nhân viên; `Cognito` cho người dùng cuối (User Pool xác thực, Identity Pool cấp AWS credentials).
- `Directory Service` (Managed Microsoft AD / AD Connector / Simple AD) tích hợp AD; `AWS RAM` chia sẻ tài nguyên giữa các tài khoản.
