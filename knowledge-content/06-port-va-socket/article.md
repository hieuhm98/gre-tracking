# Port & Socket

## 1. Port (Cổng) là gì?

Địa chỉ IP xác định **máy tính** nào. Nhưng một máy tính có thể chạy nhiều ứng dụng mạng cùng lúc (web browser, email, game...). **Port** (cổng) giúp phân biệt ứng dụng nào nhận dữ liệu nào.

**Ví dụ trực quan:**
- IP = địa chỉ tòa nhà.
- Port = số phòng trong tòa nhà.
- Bạn đến tòa nhà → vào đúng phòng mới gặp đúng người.

```
Địa chỉ đầy đủ: 192.168.1.100:3000
                 IP address    Port
```

Port là một số nguyên từ **0 đến 65535**.

---

## 2. Các nhóm Port

| Nhóm | Dải | Ý nghĩa |
|------|-----|---------|
| Well-known Ports | 0 – 1023 | Dành riêng cho dịch vụ chuẩn |
| Registered Ports | 1024 – 49151 | Đăng ký bởi ứng dụng cụ thể |
| Dynamic/Private Ports | 49152 – 65535 | Client dùng tạm thời |

---

## 3. Các Port phổ biến cần biết

| Port | Giao thức | Dịch vụ |
|------|-----------|---------|
| 21 | FTP | Truyền file |
| 22 | SSH | Điều khiển server từ xa |
| 25 | SMTP | Gửi email |
| 53 | DNS | Phân giải tên miền |
| 80 | HTTP | Web không mã hóa |
| 443 | HTTPS | Web có mã hóa |
| 3306 | MySQL | Database MySQL |
| 5432 | PostgreSQL | Database PostgreSQL |
| 6379 | Redis | Cache/Message queue |
| 27017 | MongoDB | Database MongoDB |
| 3000 | Dev servers | Convention cho Node.js dev |
| 8080 | HTTP alternative | Thay thế port 80 khi dev |

---

## 4. Firewall và Port

**Firewall** (tường lửa) kiểm soát traffic mạng bằng cách **mở hoặc chặn port**:

- Chặn port 22 → không ai SSH vào server được.
- Chỉ mở port 80 và 443 → server chỉ phục vụ web.

Khi deploy ứng dụng trên cloud (AWS, GCP...), bạn phải cấu hình **Security Group / Firewall rules** để mở đúng port.

---

## 5. Socket là gì?

**Socket** là điểm cuối (endpoint) của một kết nối mạng — tổ hợp của:
```
Socket = IP Address + Port + Protocol
Ví dụ: (192.168.1.1, 80, TCP)
```

Khi bạn kết nối đến một server, HĐH tạo ra một cặp socket:
- **Server socket**: `server_IP:80` (lắng nghe)
- **Client socket**: `client_IP:54321` (port ngẫu nhiên)

---

## 6. WebSocket

**WebSocket** là giao thức cho phép **kết nối hai chiều, liên tục** (persistent) giữa client và server — khác với HTTP chỉ giao tiếp theo kiểu request-response một chiều.

```
HTTP:      Client ──request──► Server ──response──► (kết thúc)
WebSocket: Client ◄────────────────────────────►  Server
           (giao tiếp real-time, không cắt kết nối)
```

**Dùng cho**: chat app, thông báo real-time, game online, live dashboard.

---

## 7. Port trong URL

Khi không gõ port trong URL, browser dùng port mặc định:
- `http://example.com` = `http://example.com:80`
- `https://example.com` = `https://example.com:443`

Khi dev local: `http://localhost:3000` — phải gõ rõ port vì không có mặc định.

---

## 8. Tóm tắt

- **Port** = số phòng trong tòa nhà (IP).
- **Port 80/443**: HTTP/HTTPS (web).
- **Port 22**: SSH (quản lý server).
- **Port 3306/5432**: MySQL/PostgreSQL (database).
- **Firewall**: kiểm soát port nào được mở.
- **Socket**: tổ hợp IP + Port + Protocol tạo thành điểm kết nối.
- **WebSocket**: kết nối hai chiều liên tục cho real-time app.
