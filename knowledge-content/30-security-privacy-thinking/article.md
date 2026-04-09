# Tư Duy Security & Privacy

## 1. Tại sao BA cần tư duy bảo mật?

BA không cần biết cách hack hay viết code bảo mật. Nhưng BA cần biết **đặt câu hỏi đúng** — vì hầu hết lỗ hổng bảo mật không đến từ dev viết code sai, mà đến từ **requirement không đề cập đến security** ngay từ đầu.

> *"Requirement nói hiển thị thông tin đơn hàng cho user. Ai cũng nghĩ chỉ hiện của mình, nhưng không ai viết xuống. Dev build xong, tất cả user thấy đơn hàng của nhau."*

Đây là IDOR (Insecure Direct Object Reference) — một trong những lỗi phổ biến nhất, và nó đến từ thiếu requirement về authorization, không phải từ dev kém.

---

## 2. Threat Thinking — Hỏi "Nếu bị lạm dụng thì sao?"

Với mỗi tính năng, BA nên hỏi thêm một câu:

> **"Nếu user xấu có tính năng này, họ có thể làm hại gì?"**

```
Tính năng: Upload ảnh đại diện

Câu hỏi threat:
→ Nếu upload file .exe thay vì ảnh?
→ Nếu upload ảnh 10GB để crash server?
→ Nếu upload ảnh chứa script độc hại?

→ Requirement cần thêm:
  ✅ Chỉ chấp nhận JPG, PNG, WEBP
  ✅ Kích thước tối đa 5MB
  ✅ File phải được scan và validate server-side
  ✅ Lưu file với tên ngẫu nhiên, không dùng tên gốc
```

```
Tính năng: Coupon code

Câu hỏi threat:
→ User brute-force thử hàng nghìn code?
→ Dùng 1 code nhiều lần?
→ Dùng code đã hết hạn?
→ Dùng code của người khác?

→ Requirement cần thêm:
  ✅ Rate limit: tối đa 5 lần thử / phút / user
  ✅ Mỗi code chỉ dùng được 1 lần
  ✅ Kiểm tra expiry date ở BE
  ✅ Coupon gắn với email, không dùng được bởi account khác
```

---

## 3. Phân loại dữ liệu nhạy cảm

Không phải data nào cũng cần protect như nhau. BA cần phân loại:

### Level 1 — Public (Công khai)
Không có rủi ro nếu lộ:
- Tên sản phẩm, giá, mô tả
- Bài viết blog công khai
- Thông tin liên hệ công ty

### Level 2 — Internal (Nội bộ)
Không nên lộ ra ngoài, nhưng không thảm họa:
- Dữ liệu analytics nội bộ
- Thông tin nhân viên (không nhạy cảm)
- Kế hoạch kinh doanh

### Level 3 — Confidential (Bảo mật)
Lộ ra gây thiệt hại nghiêm trọng:
- **PII** (Personally Identifiable Information): họ tên, ngày sinh, địa chỉ, email
- Số điện thoại, CCCD/Passport
- Thông tin tài chính: số tài khoản, lịch sử giao dịch
- Dữ liệu y tế, sức khỏe

### Level 4 — Restricted (Tuyệt mật)
Lộ ra là thảm họa:
- Mật khẩu (kể cả hash)
- Token, secret key, API key
- Số thẻ tín dụng đầy đủ, CVV
- Dữ liệu sinh trắc học

```
Nguyên tắc:
✅ Thu thập ít data nhất có thể (data minimization)
✅ Level 3-4 phải encrypt khi lưu (at rest) và truyền (in transit)
✅ Level 4 không được log, không được hiển thị dù cho admin
✅ Tự hỏi: "Mình có thật sự cần trường dữ liệu này không?"
```

---

## 4. Authentication vs Authorization — Hai lớp bảo vệ

### Authentication (AuthN) — "Bạn là ai?"

```
Các hình thức:
- Username + Password (cơ bản nhất)
- Multi-Factor Authentication: password + OTP/app
- Single Sign-On (SSO): đăng nhập một lần dùng nhiều hệ thống
- Social login: Google, Facebook

BA cần specify:
✅ Password minimum length (8+ chars)
✅ Password complexity (uppercase, number, special char)
✅ Account lockout sau N lần sai (5 lần → lock 15 phút)
✅ Session timeout (idle 30 phút → logout)
✅ Có cần 2FA không? Bắt buộc hay optional?
✅ Forgot password flow (OTP email hay link?)
```

### Authorization (AuthZ) — "Bạn được làm gì?"

```
Câu hỏi BA phải trả lời cho MỌI tính năng:

1. Ai được xem? (read permission)
2. Ai được tạo mới? (create permission)
3. Ai được sửa? Sửa của ai? (update permission)
4. Ai được xóa? (delete permission)
5. Có trường hợp "chỉ xem của mình" không?

Ví dụ — Hệ thống HR:
- Nhân viên: xem hồ sơ của mình, không xem của người khác
- Manager: xem hồ sơ team mình, không xem team khác
- HR: xem tất cả
- CEO: xem tất cả + xem lương
- IT Admin: không xem dữ liệu nhân sự
```

**Lỗi phổ biến nhất: IDOR (Insecure Direct Object Reference)**

```
URL: /api/orders/12345

❌ Thiếu requirement:
  "Trả về chi tiết đơn hàng 12345"
  → User A thay 12345 thành 12346 → thấy đơn hàng của User B

✅ Requirement đúng:
  "Trả về chi tiết đơn hàng 12345 NẾU đơn đó thuộc về user đang đăng nhập.
  Nếu không: trả về 403 Forbidden"
```

---

## 5. Những thứ KHÔNG ĐƯỢC làm — Red Lines

Đây là những thứ không bao giờ được phép, kể cả "tạm thời":

### ❌ Lưu password plaintext
```
Đúng: hash password bằng bcrypt/argon2 trước khi lưu
Sai: lưu "password123" thẳng vào database
Hậu quả: database bị hack → tất cả password bị lộ
```

### ❌ Log sensitive data
```
Đúng: log request/response nhưng mask dữ liệu nhạy cảm
Sai: log toàn bộ request body chứa password, số thẻ
Hậu quả: ai có access log là có tất cả

BA cần specify:
✅ "Không log password, OTP, số thẻ trong application log"
✅ "Mask email trong log: an***@example.com"
```

### ❌ Truyền dữ liệu nhạy cảm qua URL
```
Đúng: POST với body { "password": "..." }
Sai: GET /reset-password?token=abc&email=user@example.com
Hậu quả: URL lưu trong browser history, server log, proxy
```

### ❌ Tin tưởng input từ client
```
Mọi dữ liệu từ user phải được validate ở BE:
- Frontend validate: UX tốt
- Backend validate: bắt buộc
Hậu quả nếu thiếu: SQL injection, XSS, business logic bypass
```

### ❌ Expose thông tin hệ thống trong error message
```
Đúng: "Có lỗi xảy ra, vui lòng thử lại"
Sai: "Error: MySQL syntax error near 'ORDER' at line 1"
Hậu quả: hacker biết database type, có thể tấn công targeted
```

---

## 6. Privacy by Design — Thu thập ít, bảo vệ nhiều

**Privacy by Design** là nguyên tắc: xây dựng privacy vào system từ đầu, không phải thêm vào sau.

### 7 nguyên tắc cốt lõi:

**1. Proactive, not reactive:**
> Nghĩ đến privacy trước khi xảy ra vấn đề, không phải sau

**2. Privacy as default:**
> Mặc định: thu thập ít nhất, share ít nhất, lưu ngắn nhất

**3. Privacy embedded into design:**
> Privacy không phải addon — là một phần của architecture

**4. Full functionality:**
> Privacy không phải đánh đổi với tính năng — có thể có cả hai

**5. End-to-end security:**
> Bảo vệ data từ lúc thu thập đến lúc xóa

**6. Visibility and transparency:**
> User biết data của mình được dùng để làm gì

**7. Respect for user privacy:**
> User có quyền kiểm soát data của mình

### Ứng dụng thực tế cho BA:

```
Khi thêm trường dữ liệu vào form, hỏi:
□ Mình có thật sự cần trường này không?
□ Nếu có: dùng để làm gì, cụ thể?
□ Có thể dùng alternative ít nhạy cảm hơn không?
   (Thay vì ngày sinh → hỏi tuổi; thay vì địa chỉ đầy đủ → hỏi thành phố)
□ Lưu bao lâu? Khi nào xóa?
□ Ai trong công ty có thể xem dữ liệu này?
```

---

## 7. Các câu hỏi security BA nên hỏi theo loại tính năng

### Khi có form nhập liệu:
- Input validation rule là gì? (length, format, allowed characters)
- Trường nào là PII? Cần encrypt không?
- Có rate limiting không? (chống brute force, spam)

### Khi có file upload:
- Loại file nào được phép? (whitelist, không blacklist)
- Kích thước tối đa?
- File được lưu ở đâu? (không lưu trong webroot)
- Có scan virus/malware không?

### Khi có API endpoint:
- Endpoint này cần authentication không?
- Permission check: ai được gọi?
- Rate limiting: tối đa bao nhiêu request/phút?
- Có trả về data của người khác không? (IDOR risk)

### Khi có payment/transaction:
- Có idempotency không? (gọi 2 lần không charge 2 lần)
- Audit log: lưu ai làm gì, lúc nào, từ IP nào
- Có cần PCI DSS compliance không?
- Refund flow có cần double-confirmation không?

### Khi có notification/email:
- Email có chứa link không? Link phải expire sau bao lâu?
- Token trong link có thể reuse không?
- Unsubscribe flow có bypass authentication không?

---

## 8. Audit Trail — Ai làm gì, lúc nào

Audit trail là log lại mọi hành động quan trọng. BA cần xác định hành động nào cần track:

```
Hành động LUÔN cần audit:
✅ Đăng nhập (thành công và thất bại)
✅ Thay đổi password / quyền
✅ Xem / export dữ liệu nhạy cảm
✅ Tạo / sửa / xóa dữ liệu quan trọng (đơn hàng, thanh toán)
✅ Thay đổi cấu hình hệ thống
✅ Admin action trên dữ liệu user

Thông tin cần lưu trong audit log:
- WHO: user_id, role
- WHAT: action, resource type, resource id
- WHEN: timestamp (UTC)
- WHERE: IP address, device
- RESULT: success / failure
- BEFORE/AFTER: giá trị trước và sau khi thay đổi

Ví dụ:
{
  "user_id": "uuid-123",
  "action": "UPDATE_PRICE",
  "resource": "product:456",
  "before": { "price": 299000 },
  "after": { "price": 199000 },
  "ip": "192.168.1.1",
  "timestamp": "2025-04-09T10:30:00Z"
}
```

---

## 9. GDPR và Privacy Law — Những gì BA cần biết

**GDPR** (General Data Protection Regulation) của EU ảnh hưởng đến bất kỳ sản phẩm nào có user từ EU. Việt Nam cũng đang có **Nghị định 13/2023** về bảo vệ dữ liệu cá nhân.

### Quyền của người dùng BA cần implement:

```
Right to Access (Quyền truy cập):
→ User có thể yêu cầu xem toàn bộ data của mình
→ Tính năng: "Download my data" — xuất tất cả data ra file

Right to Erasure (Quyền xóa — "Right to be forgotten"):
→ User có thể yêu cầu xóa tất cả data
→ Không chỉ deactivate account, phải xóa thật
→ Ngoại lệ: data liên quan đến giao dịch tài chính (giữ theo luật)

Right to Rectification (Quyền sửa):
→ User có thể sửa dữ liệu sai về mình

Right to Portability (Quyền chuyển data):
→ User có thể export data ra format chuẩn (JSON, CSV)
   để chuyển sang service khác

Right to Object (Quyền từ chối):
→ User có thể opt-out khỏi marketing email, analytics tracking
```

### Consent (Đồng ý):

```
BA cần xác định:
□ Thu thập data gì? Cho mục đích gì?
□ Có cần xin consent rõ ràng không? (dữ liệu nhạy cảm: có)
□ Consent lưu ở đâu? (có thể prove user đã đồng ý)
□ User có thể withdraw consent không? Flow là gì?
□ Cookie: có phân loại "necessary" vs "analytics" vs "marketing" không?
```

---

## 10. Security Checklist cho BA

Dùng khi review requirement hoặc trước khi viết AC:

```
AUTHENTICATION:
☐ Password policy được define rõ ràng?
☐ Account lockout rule?
☐ Session timeout?
☐ Có cần 2FA không?
☐ Forgot password flow an toàn? (link expire sau bao lâu?)

AUTHORIZATION:
☐ Với mọi API: ai được gọi?
☐ User có thể xem/sửa data của người khác không? (IDOR check)
☐ Role hierarchy được define rõ?

DATA PROTECTION:
☐ Trường nào là PII/sensitive?
☐ Encrypt at rest và in transit?
☐ Không log sensitive data?
☐ Data retention: lưu bao lâu, xóa khi nào?

INPUT & OUTPUT:
☐ Validation rule cho mọi input?
☐ Rate limiting cho API public và form submit?
☐ Upload: whitelist file type, kích thước tối đa?
☐ Error message không expose system info?

AUDIT:
☐ Action nào cần audit trail?
☐ Log format có đủ WHO/WHAT/WHEN/WHERE không?

PRIVACY:
☐ Thu thập đúng data cần thiết, không dư?
☐ User có thể xem/sửa/xóa data của mình không?
☐ Consent được xin đúng chỗ?
```

---

## 11. Mindset cuối cùng: Assume Breach

Tư duy bảo mật tốt nhất là **"Assume breach"** — giả sử hệ thống sẽ bị tấn công, và thiết kế để minimize damage khi đó xảy ra.

**Câu hỏi BA nên hỏi:**
> *"Nếu database bị lộ, thiệt hại tệ nhất là gì?"*

- Password hash (bcrypt) bị lộ → không đọc được → OK
- Password plaintext bị lộ → hacker có tất cả → thảm họa
- Số thẻ tín dụng bị lộ → PCI violation, kiện tụng → thảm họa
- Email và tên bị lộ → spam, phishing → bad nhưng manageable

> *"Nếu một account bị compromise, kẻ tấn công làm được gì?"*

- Chỉ thấy data của mình → OK
- Thấy data của tất cả user → thảm họa (IDOR bug)
- Có thể escalate lên admin → thảm họa (privilege escalation)

Thiết kế với mindset này giúp BA đặt đúng câu hỏi bảo mật ngay từ requirement, thay vì phát hiện lỗ hổng sau khi đã launch.
