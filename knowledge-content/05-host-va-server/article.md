# Host & Server

## 1. Host là gì?

**Host** là bất kỳ thiết bị nào kết nối vào mạng và có địa chỉ IP — máy tính, điện thoại, máy chủ, router... Thuật ngữ "host" đơn giản chỉ một thiết bị tham gia mạng.

---

## 2. Mô hình Client – Server

Hầu hết các ứng dụng Internet hoạt động theo mô hình **Client – Server**:

```
Client (Người dùng)         Server (Máy chủ)
─────────────────           ─────────────────
Browser, App          ───►  Nhận request
                      ◄───  Xử lý & trả về response
```

- **Client**: thiết bị của người dùng, gửi yêu cầu (request).
- **Server**: máy tính chuyên dụng, nhận và xử lý yêu cầu, trả về dữ liệu (response).

**Ví dụ:**
- Bạn gõ `facebook.com` → browser (client) gửi request đến server Facebook → server trả về HTML trang web.
- Bạn đặt hàng trên Shopee → app (client) gửi request đến server Shopee → server xử lý đơn hàng.

---

## 3. Các loại Server

| Loại | Chức năng | Ví dụ |
|------|-----------|-------|
| **Web Server** | Phục vụ trang web (HTML, CSS, JS) | Nginx, Apache |
| **Application Server** | Xử lý logic nghiệp vụ | Node.js, Django, Spring |
| **Database Server** | Lưu trữ và truy vấn dữ liệu | MySQL, PostgreSQL, MongoDB |
| **File Server** | Lưu trữ và chia sẻ file | Samba, FTP server |
| **Mail Server** | Gửi/nhận email | Postfix, Gmail SMTP |
| **DNS Server** | Phân giải tên miền | Cloudflare DNS, Google DNS |

Thực tế, một máy chủ vật lý có thể chạy nhiều loại server software cùng lúc.

---

## 4. Localhost

**Localhost** là tên đặc biệt trỏ về chính máy tính bạn đang dùng, tương đương địa chỉ IP `127.0.0.1`.

Khi lập trình viên phát triển web, họ chạy server ngay trên máy tính cá nhân và truy cập qua:
```
http://localhost:3000
http://127.0.0.1:3000
```

Điều này cho phép test ứng dụng mà không cần deploy lên Internet.

---

## 5. Địa chỉ IP

Mỗi host trong mạng có địa chỉ IP duy nhất:

### IPv4
- Dạng: `192.168.1.100` — 4 nhóm số, mỗi nhóm 0-255.
- Tổng số: ~4.3 tỷ địa chỉ (đã gần cạn kiệt).

### IPv6
- Dạng: `2001:0db8:85a3:0000:0000:8a2e:0370:7334` — 8 nhóm hex.
- Tổng số: 340 undecillion địa chỉ (thực tế là vô hạn với hiện tại).

### Private vs Public IP
- **Private**: chỉ dùng trong mạng nội bộ. Dải: `192.168.x.x`, `10.x.x.x`, `172.16-31.x.x`.
- **Public**: địa chỉ trên Internet, duy nhất toàn cầu.

---

## 6. Web Hosting

**Hosting** là dịch vụ cho thuê không gian trên server để lưu website.

| Loại | Mô tả | Phù hợp |
|------|-------|---------|
| **Shared Hosting** | Nhiều website dùng chung 1 server | Blog, web nhỏ, rẻ |
| **VPS (Virtual Private Server)** | Server ảo riêng trên phần cứng chung | Web trung bình, linh hoạt hơn |
| **Dedicated Server** | Thuê nguyên 1 máy chủ vật lý | Website lớn, hiệu năng cao |
| **Cloud Hosting** | Tài nguyên từ nhiều server (AWS, GCP, Azure) | Scale linh hoạt |
| **Serverless** | Không quản lý server, trả theo lần dùng | Microservices, API nhỏ |

---

## 7. IP Tĩnh vs IP Động

- **IP tĩnh (Static IP)**: không thay đổi — dùng cho server, cần domain trỏ vào.
- **IP động (Dynamic IP)**: thay đổi mỗi lần kết nối — dùng cho thiết bị người dùng thông thường.

---

## 8. Tóm tắt

- **Host**: bất kỳ thiết bị nào có IP trong mạng.
- **Client**: gửi request; **Server**: xử lý và trả response.
- **Localhost / 127.0.0.1**: địa chỉ của chính máy bạn.
- **Web Hosting**: dịch vụ lưu website trên server.
- **VPS**: server ảo riêng — cân bằng giữa giá và linh hoạt.
