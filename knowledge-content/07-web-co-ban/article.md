# Web hoạt động thế nào?

## 1. Tổng quan

Khi bạn gõ một địa chỉ web vào browser và nhấn Enter, hàng loạt bước xảy ra trong vài trăm millisecond để trang web hiện ra. Hiểu được luồng này giúp bạn giao tiếp tốt hơn với team kỹ thuật.

---

## 2. Cấu trúc URL

URL (Uniform Resource Locator) là địa chỉ đầy đủ của một tài nguyên trên web:

```
https://shop.example.com:443/products/detail?id=123&lang=vi#reviews
│       │                │   │               │               │
│       │                │   │               query string    fragment
│       │                │   path
│       │                port (ẩn nếu dùng cổng mặc định)
│       subdomain.domain
scheme (giao thức)
```

- **Scheme**: `http` hoặc `https` — giao thức dùng.
- **Host**: `shop.example.com` — máy chủ đích.
- **Path**: `/products/detail` — đường dẫn tài nguyên.
- **Query String**: `?id=123&lang=vi` — tham số lọc/tìm kiếm.
- **Fragment**: `#reviews` — vị trí trong trang (xử lý ở browser).

---

## 3. Luồng khi truy cập website

```
1. Bạn gõ URL và nhấn Enter
2. Browser phân giải DNS: domain → IP
3. Browser thiết lập kết nối TCP (3-way handshake)
4. Nếu HTTPS: thêm bước TLS handshake (mã hóa)
5. Browser gửi HTTP GET request đến server
6. Server nhận request, xử lý, trả HTTP response
7. Browser nhận HTML
8. Browser parse HTML → tải thêm CSS, JS, ảnh
9. Browser render trang (vẽ ra màn hình)
```

---

## 4. Frontend vs Backend

| | Frontend | Backend |
|--|----------|---------|
| **Chạy ở đâu** | Trình duyệt của user | Server |
| **Ngôn ngữ** | HTML, CSS, JavaScript | Python, Node.js, Java, PHP... |
| **Làm gì** | Hiển thị giao diện, tương tác người dùng | Logic nghiệp vụ, database, bảo mật |
| **Thấy được không** | Có (source code) | Không (ở server) |

**Full-stack developer**: biết cả frontend lẫn backend.

---

## 5. Static vs Dynamic Website

### Static (Tĩnh)
HTML được tạo sẵn, gửi thẳng cho browser. Nhanh, đơn giản, không cần database.
- Ví dụ: trang giới thiệu công ty, blog đơn giản.

### Dynamic (Động)
HTML được tạo ra **khi có request** — server chạy code, query database, tạo HTML phù hợp với từng user.
- Ví dụ: trang Facebook (mỗi user thấy newsfeed khác nhau).

---

## 6. CDN (Content Delivery Network)

CDN là mạng lưới server phân tán khắp thế giới, lưu bản sao của nội dung tĩnh (ảnh, CSS, JS) ở **server gần người dùng nhất**.

```
User ở Hà Nội → CDN server ở Hà Nội (nhanh)
Thay vì:
User ở Hà Nội → server ở California (chậm)
```

**Lợi ích**: giảm độ trễ, tăng tốc độ tải, giảm tải cho server gốc.

---

## 7. Browser Dev Tools

Trong Chrome/Firefox, nhấn `F12` để mở Dev Tools:
- **Network tab**: xem tất cả request/response.
- **Console**: xem lỗi JavaScript.
- **Elements**: inspect HTML/CSS.

Đây là công cụ cơ bản để hiểu website đang làm gì.

---

## 8. HTTP Response có gì?

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1256

<!DOCTYPE html>
<html>...nội dung trang web...</html>
```

- **Status line**: mã trạng thái.
- **Headers**: metadata (loại nội dung, kích thước...).
- **Body**: nội dung thực sự (HTML, JSON, ảnh...).

---

## 9. Tóm tắt

- **URL** = địa chỉ đầy đủ gồm scheme, host, path, query.
- **Frontend**: chạy trong browser (HTML/CSS/JS).
- **Backend**: chạy trên server (logic + database).
- **CDN**: mạng server phân tán để tăng tốc độ.
- **Dev Tools (F12)**: công cụ debug và khám phá website.
