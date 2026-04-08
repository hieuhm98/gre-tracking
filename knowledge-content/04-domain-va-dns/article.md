# Domain & DNS

## 1. Domain (Tên miền) là gì?

**Domain** là tên dễ nhớ đại diện cho một địa chỉ IP trên Internet. Thay vì phải nhớ `142.250.186.46`, bạn chỉ cần gõ `google.com`.

Domain là tài sản số — bạn phải **đăng ký** và **trả phí hàng năm** để sở hữu.

---

## 2. Cấu trúc của một domain

```
blog.example.com.vn
 │      │      │  └─ ccTLD (country code TLD)
 │      │      └──── TLD (Top Level Domain)
 │      └─────────── Second Level Domain
 └────────────────── Subdomain
```

### TLD (Top Level Domain)
Phần cuối cùng của domain:
- **gTLD** (generic): `.com`, `.org`, `.net`, `.edu`, `.gov`
- **ccTLD** (country code): `.vn` (Việt Nam), `.jp` (Nhật), `.uk` (Anh)
- **Mới**: `.io`, `.app`, `.dev`, `.tech`

### Second Level Domain
Tên chính bạn đăng ký: `google` trong `google.com`, `facebook` trong `facebook.com`.

### Subdomain
Tiền tố tự tạo để phân chia dịch vụ:
- `www.example.com` — trang web chính.
- `mail.example.com` — email server.
- `api.example.com` — API server.
- `docs.example.com` — tài liệu.
- `dev.example.com` — môi trường phát triển.

---

## 3. DNS hoạt động như thế nào?

DNS (Domain Name System) là hệ thống phân cấp toàn cầu để phân giải domain thành IP.

### Quá trình phân giải DNS đầy đủ:

```
1. Bạn gõ: www.example.com
2. Browser → kiểm tra cache nội bộ
3. Nếu miss → hỏi Recursive Resolver (DNS của ISP)
4. Resolver → hỏi Root DNS Server (.) 
5. Root → "Hỏi TLD server .com"
6. Resolver → hỏi TLD server .com
7. TLD → "Hỏi Authoritative server của example.com"
8. Resolver → hỏi Authoritative DNS của example.com
9. Authoritative → trả về IP: 93.184.216.34
10. Resolver cache kết quả, trả về cho Browser
11. Browser kết nối đến 93.184.216.34
```

### DNS Record Types

| Loại | Ý nghĩa | Ví dụ |
|------|---------|-------|
| **A** | Domain → IPv4 | `example.com → 93.184.216.34` |
| **AAAA** | Domain → IPv6 | `example.com → 2606:2800::68c6...` |
| **CNAME** | Domain → Domain khác (alias) | `www → example.com` |
| **MX** | Email server | `mail → smtp.google.com` |
| **TXT** | Thông tin văn bản | Xác minh domain, SPF email... |
| **NS** | Nameserver của domain | `ns1.cloudflare.com` |

---

## 4. TTL (Time To Live)

Mỗi DNS record có **TTL** — thời gian (giây) mà kết quả được cache.

- TTL 3600 = cache 1 giờ.
- TTL thấp: thay đổi DNS áp dụng nhanh (vài phút) nhưng tốn tài nguyên server.
- TTL cao: tiết kiệm tài nguyên nhưng thay đổi mất nhiều thời gian lan truyền.

**Lưu ý thực tế**: Khi chuyển hosting, thay đổi DNS có thể mất 24–48 giờ để "propagate" (lan truyền) toàn cầu do TTL cũ.

---

## 5. Đăng ký domain

Bạn đăng ký domain qua **Registrar** (nhà đăng ký):
- Quốc tế: GoDaddy, Namecheap, Google Domains, Cloudflare.
- Việt Nam: VNPT, Inet, Mắt Bão.

Sau khi đăng ký, bạn chỉnh DNS records tại **Nameserver** (thường cùng với registrar hoặc dịch vụ DNS riêng như Cloudflare).

---

## 6. Domain vs URL vs IP

| | Ví dụ | Dùng cho |
|--|-------|---------|
| IP Address | `93.184.216.34` | Địa chỉ máy tính thực sự |
| Domain | `example.com` | Tên thân thiện với người dùng |
| URL | `https://example.com/about?lang=vi` | Địa chỉ đầy đủ gồm giao thức, domain, đường dẫn, query |

---

## 7. Tóm tắt

- **Domain** = tên dễ nhớ thay cho IP.
- **TLD** = phần đuôi (.com, .vn...).
- **Subdomain** = tiền tố để phân dịch vụ (mail., api., www.).
- **DNS** = hệ thống phân giải domain → IP.
- **DNS Record A** = quan trọng nhất, ánh xạ domain → IPv4.
- **TTL** = thời gian cache DNS.
