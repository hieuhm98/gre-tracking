# Giao thức mạng

## 1. Giao thức là gì?

**Giao thức (protocol)** là tập hợp các quy tắc và quy ước mà các thiết bị phải tuân theo để giao tiếp với nhau. Giống như ngôn ngữ chung — hai người phải nói cùng ngôn ngữ thì mới hiểu nhau.

---

## 2. Mô hình TCP/IP

TCP/IP là bộ giao thức nền tảng của Internet, gồm 4 tầng:

| Tầng | Chức năng | Ví dụ giao thức |
|------|-----------|-----------------|
| Ứng dụng (Application) | Giao tiếp với phần mềm người dùng | HTTP, HTTPS, FTP, SMTP, DNS |
| Vận chuyển (Transport) | Truyền dữ liệu end-to-end, kiểm soát lỗi | TCP, UDP |
| Mạng (Internet) | Định địa chỉ và định tuyến | IP |
| Liên kết (Link) | Truyền dữ liệu qua vật lý | Ethernet, WiFi |

---

## 3. TCP vs UDP

### TCP (Transmission Control Protocol)
TCP đảm bảo dữ liệu **đến đủ, đúng thứ tự**:
- Thiết lập kết nối trước (3-way handshake).
- Kiểm tra lỗi, gửi lại nếu mất gói.
- Chậm hơn UDP nhưng **đáng tin cậy**.
- Dùng cho: web (HTTP), email, tải file.

**3-Way Handshake:**
```
Client → Server: SYN (xin kết nối)
Server → Client: SYN-ACK (đồng ý)
Client → Server: ACK (xác nhận)
→ Kết nối được thiết lập
```

### UDP (User Datagram Protocol)
UDP gửi dữ liệu **không cần xác nhận**:
- Không thiết lập kết nối trước.
- Nhanh hơn, nhưng có thể mất gói.
- Dùng cho: video streaming, game online, DNS, VoIP (cuộc gọi).

---

## 4. HTTP và HTTPS

### HTTP (HyperText Transfer Protocol)
Giao thức truyền tải trang web. Hoạt động theo mô hình **Request – Response**:

```
Browser gửi: GET /index.html HTTP/1.1
Server trả:  HTTP/1.1 200 OK + nội dung trang web
```

**HTTP Methods phổ biến:**
- `GET`: lấy dữ liệu.
- `POST`: gửi dữ liệu lên server.
- `PUT/PATCH`: cập nhật dữ liệu.
- `DELETE`: xóa dữ liệu.

**HTTP Status Codes:**
- `200 OK`: thành công.
- `404 Not Found`: không tìm thấy.
- `500 Internal Server Error`: lỗi server.
- `401 Unauthorized`: chưa xác thực.
- `403 Forbidden`: không có quyền.

### HTTPS (HTTP Secure)
HTTPS = HTTP + **mã hóa TLS/SSL**. Dữ liệu được mã hóa trước khi truyền, bảo vệ khỏi nghe lén.

- Nhận biết qua icon ổ khóa 🔒 trên trình duyệt.
- Bắt buộc cho mọi website xử lý thông tin nhạy cảm.

---

## 5. DNS (Domain Name System)

DNS là hệ thống chuyển đổi tên miền dễ nhớ thành địa chỉ IP:

```
google.com → 142.250.186.46
```

**Quá trình DNS Resolution:**
1. Bạn gõ `google.com`.
2. Browser kiểm tra cache DNS nội bộ.
3. Nếu không có → hỏi DNS server của ISP.
4. DNS server tìm và trả về IP: `142.250.186.46`.
5. Browser kết nối đến IP đó.

---

## 6. FTP, SMTP, SSH

| Giao thức | Chức năng | Cổng mặc định |
|-----------|-----------|---------------|
| FTP | Truyền file | 21 |
| SMTP | Gửi email | 25, 587 |
| IMAP/POP3 | Nhận email | 143, 110 |
| SSH | Điều khiển server từ xa, bảo mật | 22 |

---

## 7. Tóm tắt

- **Giao thức** = quy tắc giao tiếp chung giữa các thiết bị.
- **TCP**: tin cậy, đảm bảo thứ tự → dùng cho web, email.
- **UDP**: nhanh, không đảm bảo → dùng cho video, game.
- **HTTP/HTTPS**: giao thức của web. HTTPS mã hóa dữ liệu.
- **DNS**: chuyển tên miền thành IP.
