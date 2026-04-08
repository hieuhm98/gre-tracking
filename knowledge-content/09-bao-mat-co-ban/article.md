# Bảo mật cơ bản

## 1. Tại sao bảo mật quan trọng?

Một lỗ hổng bảo mật có thể dẫn đến: lộ dữ liệu người dùng, mất tiền, mất uy tín, vi phạm pháp luật. BA/PM cần hiểu cơ bản để đặt yêu cầu bảo mật đúng và đánh giá rủi ro.

---

## 2. Authentication vs Authorization

Đây là hai khái niệm hay bị nhầm lẫn:

| | Authentication (Xác thực) | Authorization (Phân quyền) |
|--|--------------------------|---------------------------|
| **Câu hỏi** | Bạn là ai? | Bạn được làm gì? |
| **Ví dụ** | Đăng nhập bằng mật khẩu | Admin thấy mọi thứ, user chỉ thấy dữ liệu của mình |
| **Khi nào** | Trước tiên | Sau authentication |

**Ví dụ thực tế**: Bạn đăng nhập Shopee (authentication) → bạn chỉ xem được đơn hàng của mình, không xem của người khác (authorization).

---

## 3. Các mối đe dọa phổ biến

### SQL Injection
Kẻ tấn công nhập code SQL vào form để can thiệp vào database:

```sql
-- Form đăng nhập nhập: ' OR '1'='1
SELECT * FROM users WHERE username='' OR '1'='1' AND password=''
-- Kết quả: trả về TẤT CẢ users → bỏ qua mật khẩu!
```

**Phòng chống**: dùng Prepared Statements, không ghép string trực tiếp vào SQL.

### XSS (Cross-Site Scripting)
Kẻ tấn công nhúng JavaScript độc hại vào trang web, chạy trong browser của nạn nhân để ăn cắp cookie/session.

**Phòng chống**: escape output, Content Security Policy (CSP).

### CSRF (Cross-Site Request Forgery)
Trick người dùng thực hiện hành động không mong muốn trên website họ đang đăng nhập.

**Phòng chống**: CSRF token, SameSite cookie.

### Phishing
Giả mạo email/website hợp lệ để lừa người dùng nhập thông tin.

**Phòng chống**: kiểm tra URL, không click link lạ, 2FA.

---

## 4. HTTPS và mã hóa

- **HTTPS** mã hóa dữ liệu truyền tải — kẻ nghe lén không đọc được.
- **TLS certificate** xác nhận website là đúng (không phải fake).
- Tất cả website xử lý dữ liệu nhạy cảm **bắt buộc phải dùng HTTPS**.

---

## 5. Password Security

**Không lưu mật khẩu plain text** — phải hash:

```
Mật khẩu: "mypassword123"
Sau khi hash bcrypt: "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/L..."
```

**Best practices cho người dùng:**
- Mật khẩu dài (≥12 ký tự), phức tạp.
- Không dùng chung mật khẩu cho nhiều tài khoản.
- Dùng Password Manager (1Password, Bitwarden).
- Bật **2FA (Two-Factor Authentication)**.

---

## 6. 2FA (Two-Factor Authentication)

2FA yêu cầu **hai bằng chứng** để đăng nhập:
1. Thứ bạn **biết**: mật khẩu.
2. Thứ bạn **có**: OTP từ app (Google Authenticator) hoặc SMS.

Ngay cả khi mật khẩu bị lộ, không có OTP → không đăng nhập được.

---

## 7. Nguyên tắc Least Privilege

Chỉ cấp quyền **tối thiểu cần thiết** để thực hiện công việc:
- Developer không cần quyền truy cập database production.
- User thường không cần quyền xóa dữ liệu người khác.
- Service A không cần quyền đọc toàn bộ database.

---

## 8. Bảo mật trong dự án — góc nhìn BA/PM

Khi viết yêu cầu, cần xét:
- Dữ liệu nào là nhạy cảm? (PII: tên, email, CCCD, số điện thoại)
- Ai được xem/sửa/xóa dữ liệu nào? → yêu cầu authorization rõ ràng.
- Cần audit log không? (ai làm gì, lúc mấy giờ)
- Cần mã hóa data at rest không? (dữ liệu lưu trong database)

---

## 9. Tóm tắt

- **Authentication** = xác thực danh tính ("Bạn là ai?").
- **Authorization** = phân quyền ("Bạn được làm gì?").
- **SQL Injection/XSS/CSRF**: lỗ hổng phổ biến nhất.
- **HTTPS**: bắt buộc cho mọi website.
- **2FA**: tăng bảo mật tài khoản đáng kể.
- **Least Privilege**: chỉ cấp quyền tối thiểu cần thiết.
