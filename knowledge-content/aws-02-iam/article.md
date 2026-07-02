# AWS IAM – Quản lý định danh & truy cập

## 1. Tổng quan

**IAM** (Identity and Access Management) là dịch vụ quản lý **ai được phép làm gì** trong tài khoản AWS. Đây là nền tảng bảo mật của mọi hệ thống trên AWS: mọi request đến API AWS đều được IAM kiểm tra quyền trước khi thực thi.

Điểm cực kỳ quan trọng cho kỳ thi: **IAM là dịch vụ GLOBAL** — không gắn với một region cụ thể. User, group, role và policy bạn tạo ra dùng chung cho toàn bộ tài khoản ở mọi region.

Vì sao cần IAM:

- Cấp quyền chi tiết (granular) thay vì dùng chung một tài khoản quyền cao.
- Áp dụng nguyên tắc **least privilege** (đặc quyền tối thiểu).
- Kiểm toán được ai đã truy cập tài nguyên nào (audit).

IAM xuất hiện gần như trong mọi domain của bài thi SAA-C03, đặc biệt là câu hỏi "cách bảo mật nhất để service X truy cập service Y".

---

## 2. Users & Groups

**IAM User** đại diện cho một người hoặc một ứng dụng cần truy cập AWS lâu dài. Mỗi user có định danh riêng và bộ credentials riêng.

**IAM Group** là tập hợp các user. Bạn gắn policy vào group, và mọi user trong group tự động thừa hưởng quyền đó.

| Đặc điểm | IAM User | IAM Group |
|----------|----------|-----------|
| Đại diện cho | Một người / ứng dụng | Một tập hợp user |
| Có credentials | Có (password, access key) | Không |
| Mục đích | Định danh cá nhân | Gán quyền theo nhóm |
| Chứa được | (không) | Chỉ chứa user, không chứa group khác |

Lưu ý:

- Một user có thể thuộc **nhiều group**.
- Group **không thể chứa** group khác (không lồng nhau).
- Group chỉ để gán quyền — group **không** phải là một định danh có thể đăng nhập.

---

## 3. Policies & cấu trúc JSON

**Policy** là tài liệu JSON mô tả các quyền (permissions). Bạn gắn policy vào user, group, hoặc role. Có **AWS managed policy** (do AWS tạo sẵn) và **customer managed policy** (do bạn tự viết).

Các phần tử chính của một policy JSON:

| Phần tử | Ý nghĩa |
|---------|---------|
| `Version` | Phiên bản ngôn ngữ policy, luôn là `"2012-10-17"` |
| `Statement` | Danh sách các câu lệnh quyền |
| `Effect` | `Allow` hoặc `Deny` |
| `Action` | Hành động API được phép/từ chối, ví dụ `s3:GetObject` |
| `Resource` | Tài nguyên áp dụng, viết dưới dạng ARN |
| `Principal` | Ai được phép (dùng trong resource-based policy / trust policy) |
| `Condition` | Điều kiện áp dụng (ví dụ giới hạn IP, bắt buộc MFA) |

Ví dụ một policy cho phép đọc một bucket S3:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket",
        "arn:aws:s3:::my-bucket/*"
      ]
    }
  ]
}
```

`Principal` và `Condition` là tuỳ chọn. `Principal` chỉ xuất hiện trong **resource-based policy** (như bucket policy) và **trust policy** của role — không xuất hiện trong identity-based policy gắn vào user.

---

## 4. Roles (dành cho AWS service như EC2)

**IAM Role** là một định danh có quyền giống user, nhưng **không thuộc về một người** và **không có credentials cố định**. Thay vào đó, role được **assume (đảm nhận) tạm thời** và cấp credentials tạm thời qua dịch vụ **STS** (Security Token Service) với API `sts:AssumeRole`.

Role được dùng khi một **AWS service** (như EC2, Lambda) cần gọi các service AWS khác thay cho bạn.

| Đặc điểm | IAM User | IAM Role |
|----------|----------|----------|
| Gắn với | Một người / ứng dụng cố định | Được assume tạm thời |
| Credentials | Lâu dài (access key, password) | Tạm thời (do STS cấp, tự hết hạn) |
| Dùng cho | Con người, ứng dụng ngoài AWS | AWS service (EC2, Lambda), cross-account |
| Bảo mật | Phải xoay vòng key thủ công | An toàn hơn, key tự luân chuyển |

Mỗi role có **trust policy** (ai được phép assume role này) và **permission policy** (role này làm được gì).

---

## 5. Logic đánh giá policy / explicit deny

Khi một request đến, IAM đánh giá tất cả policy áp dụng theo quy tắc:

1. **Mặc định là từ chối ngầm (implicit deny)** — nếu không có gì cho phép, request bị từ chối.
2. Nếu có một statement `Allow` phù hợp → được phép.
3. **Explicit `Deny` luôn thắng** — nếu bất kỳ policy nào có `Deny` phù hợp, request bị từ chối, kể cả khi có `Allow` khác.

Thứ tự ưu tiên: **Explicit Deny > Allow > Implicit Deny (mặc định)**.

Ví dụ: user có `Allow s3:*` nhưng cũng bị một policy khác `Deny s3:DeleteObject` → user làm được mọi thứ với S3 **trừ** xoá object. Đây là câu hỏi kinh điển trong đề thi.

---

## 6. Least privilege (đặc quyền tối thiểu)

**Least privilege** nghĩa là chỉ cấp đúng những quyền cần thiết để hoàn thành công việc — không hơn.

- Đừng cấp `AdministratorAccess` cho mọi user.
- Bắt đầu với quyền tối thiểu, mở rộng dần khi cần.
- Dùng công cụ **Access Advisor** (xem phần 9) để phát hiện và thu hồi quyền không dùng đến.

Least privilege giảm rủi ro: nếu credentials bị lộ, kẻ tấn công cũng chỉ làm được rất ít.

---

## 7. MFA & password policy

**MFA** (Multi-Factor Authentication) yêu cầu thêm một yếu tố thứ hai ngoài mật khẩu (mã từ ứng dụng như Google Authenticator, khóa phần cứng, hoặc thiết bị MFA ảo). Ngay cả khi mật khẩu bị lộ, kẻ tấn công vẫn không đăng nhập được.

**Password policy** cho phép admin ép các quy tắc mật khẩu cho toàn tài khoản:

- Độ dài tối thiểu.
- Bắt buộc chữ hoa, chữ thường, số, ký tự đặc biệt.
- Cho phép/không cho phép user tự đổi mật khẩu.
- Bắt buộc đổi mật khẩu định kỳ (password expiration).
- Ngăn tái sử dụng mật khẩu cũ.

Best practice: **bật MFA cho tài khoản root và mọi IAM user quan trọng**.

---

## 8. Access keys vs Console / CLI / SDK

Có hai cách truy cập AWS:

| Cách truy cập | Dùng gì | Dành cho |
|---------------|---------|----------|
| **AWS Management Console** | Username + Password (+ MFA) | Con người, thao tác qua giao diện web |
| **AWS CLI / SDK** | Access Key ID + Secret Access Key | Chương trình, script, tự động hoá |

- **Access key** gồm `Access Key ID` (như username) và `Secret Access Key` (như password) — **không bao giờ chia sẻ**.
- **AWS CLI** là công cụ dòng lệnh (`aws iam ...`, `aws s3 ...`) để điều khiển AWS từ terminal.
- **AWS SDK** là thư viện lập trình (Python/boto3, JavaScript, Java...) để gọi AWS từ code ứng dụng.
- Access key dùng cho program access; console dùng cho con người. Không dùng access key của root.

---

## 9. IAM Roles cho EC2 (instance profile)

Khi một ứng dụng chạy trên **EC2** cần truy cập service khác (ví dụ đọc từ **S3**), **KHÔNG** được nhúng access key vào code hay file cấu hình trên máy — đó là cách kém an toàn nhất.

Cách đúng: tạo một **IAM Role** với quyền cần thiết rồi **gắn role vào EC2 instance** (qua một **instance profile**). EC2 sẽ tự động nhận credentials tạm thời từ STS, tự động luân chuyển (rotate) và tự hết hạn — không có secret nào nằm cố định trên máy.

Đây là câu trả lời "MOST secure" cho mọi câu hỏi kiểu "EC2 cần truy cập S3 / DynamoDB — cách nào an toàn nhất?": **dùng IAM Role gắn vào instance**, không dùng access key.

---

## 10. Công cụ bảo mật IAM: Credentials Report & Access Advisor

IAM cung cấp hai công cụ audit quan trọng:

| Công cụ | Phạm vi | Cho biết |
|---------|---------|----------|
| **Credentials Report** | Toàn tài khoản (account-level) | Danh sách tất cả user và trạng thái credentials của họ: bật MFA chưa, access key dùng lần cuối khi nào, mật khẩu... |
| **Access Advisor** (Last Accessed) | Từng user/role (user-level) | Các service mà user/role được cấp quyền và **lần cuối truy cập** từng service |

- **Credentials Report** giúp rà soát toàn bộ tài khoản: ai chưa bật MFA, key nào cũ cần xoay vòng.
- **Access Advisor** giúp thực thi least privilege: nếu một quyền chưa bao giờ được dùng → thu hồi.

---

## 11. Bảo vệ tài khoản root

**Root account** (tài khoản gốc — tạo bằng email khi đăng ký AWS) có **toàn quyền tuyệt đối** và không thể bị giới hạn. Nếu bị chiếm, kẻ tấn công kiểm soát toàn bộ tài khoản.

Quy tắc bảo vệ root:

- **Bật MFA cho root** ngay lập tức.
- **Không dùng root cho công việc hằng ngày** — tạo IAM user riêng cho admin và dùng nó.
- **Không tạo access key cho root**; nếu đã có, **khoá lại (xóa) access key của root**.
- Chỉ dùng root cho vài tác vụ bắt buộc (đổi thông tin thanh toán, đóng tài khoản...).

---

## 12. IAM best practices

- Không dùng root cho việc hằng ngày; bật MFA cho root.
- Mỗi người một IAM user riêng — **không chia sẻ user**.
- Gán quyền qua **group**, không gán trực tiếp từng user.
- Áp dụng **least privilege**.
- Bật **MFA** và một **password policy** mạnh.
- Dùng **IAM Role** cho AWS service (như EC2), không nhúng access key.
- Xoay vòng (rotate) access key định kỳ; xoá key không dùng.
- Kiểm toán bằng **Credentials Report** và **Access Advisor**.

---

## Điểm thi quan trọng

- **IAM là dịch vụ GLOBAL**, không gắn với region.
- **Explicit Deny luôn thắng** mọi `Allow`; mặc định là **implicit deny**.
- Thứ tự đánh giá: **Explicit Deny > Allow > Implicit Deny**.
- Với **EC2 cần truy cập S3/DynamoDB → dùng IAM Role gắn vào instance**, KHÔNG nhúng access key (đây là đáp án "most secure").
- **Dùng Role cho AWS service, không dùng IAM user** cho service.
- **Không dùng root cho công việc hằng ngày**; bật MFA cho root và khoá access key của root.
- Một policy JSON cần `Effect`, `Action`, `Resource`; `Principal`/`Condition` là tuỳ chọn.
- Role cấp **credentials tạm thời** qua **STS** (`sts:AssumeRole`).
- **Credentials Report** = account-level; **Access Advisor** = xem quyền lần cuối dùng để thực thi least privilege.
- Gán quyền qua **group**; áp dụng **least privilege**.

## Tóm tắt

- **IAM** quản lý ai làm được gì trên AWS và là dịch vụ **global**.
- **User** = một người/app; **Group** = tập hợp user để gán quyền; **Role** = định danh tạm thời cho AWS service.
- **Policy** là JSON với `Effect` / `Action` / `Resource`; **explicit Deny** luôn thắng.
- Cách bảo mật nhất để EC2 truy cập AWS service khác là **IAM Role gắn vào instance**, không dùng access key.
- Bật **MFA**, dùng **least privilege**, và **bảo vệ tài khoản root** (không dùng hằng ngày, khoá access key).
- Kiểm toán bằng **Credentials Report** và **Access Advisor**.
