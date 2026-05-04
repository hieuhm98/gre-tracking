# Domain, URL & DNS

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

## 3. URI vs URL vs URN

Ba khái niệm này hay bị nhầm lẫn — nhưng có quan hệ **bao hàm**:

```
            URI (định danh tài nguyên)
           /                          \
        URL                          URN
   (vị trí + cách lấy)         (chỉ định danh)
```

- **URI** (Uniform Resource Identifier) — chuỗi định danh **bất kỳ** tài nguyên nào. Là khái niệm rộng nhất.
- **URL** (Uniform Resource Locator) — một loại URI **cho biết tài nguyên ở đâu** và **truy cập bằng cách nào** (giao thức). Đây là loại bạn gặp hằng ngày.
- **URN** (Uniform Resource Name) — một loại URI **chỉ đặt tên** cho tài nguyên, không nói nó ở đâu. Ví dụ: `urn:isbn:0451450523` (mã sách).

| Loại | Ví dụ | Cho biết "ở đâu"? |
|------|-------|---|
| URL | `https://example.com/blog/post-1` | Có (https + host + path) |
| URN | `urn:isbn:0451450523` | Không — chỉ là tên |
| URI | Cả hai ví dụ trên đều là URI | Tùy loại |

**Quy tắc nhớ**: Mọi URL đều là URI, nhưng không phải URI nào cũng là URL.

---

## 4. Cấu trúc đầy đủ của URL

```
https://shop.example.com:443/products/detail?id=123&lang=vi#reviews
│        │                │   │               │              │
│        │                │   │               │              fragment
│        │                │   │               query string
│        │                │   path
│        │                port (443 = mặc định HTTPS, có thể ẩn)
│        host = subdomain + domain + TLD
scheme (giao thức)
```

| Thành phần | Vai trò |
|-----------|---------|
| **Scheme** | Giao thức truy cập: `http`, `https`, `ftp`, `mailto`, `file` |
| **Host** | Địa chỉ máy chủ (domain hoặc IP) |
| **Port** | Cổng dịch vụ — `80` cho http, `443` cho https; nếu mặc định thì có thể bỏ |
| **Path** | Đường dẫn đến tài nguyên trên server |
| **Query** | Tham số `?key=value&key2=value2` — lọc, tìm kiếm, phân trang |
| **Fragment** | Mỏ neo `#section` — chỉ vị trí trong trang, **không gửi lên server** |

---

## 5. Path — đường dẫn của một URL

**Path** là phần sau host, bắt đầu bằng `/`. Nó mô tả tài nguyên cụ thể bạn muốn truy cập.

### Path là cây phân cấp

Path mô phỏng **hệ thống thư mục**:

```
example.com/                 ← root
example.com/blog             ← danh sách bài viết
example.com/blog/seo         ← danh mục SEO
example.com/blog/seo/sitemap-la-gi  ← một bài cụ thể
example.com/products
example.com/products/laptop
example.com/products/laptop/macbook-pro
```

Quan hệ "cha — con" trong path tạo nên **kiến trúc thông tin** (information architecture) của website.

### Phân biệt với query

| | Path | Query |
|--|------|-------|
| Vai trò | Định vị **tài nguyên duy nhất** | Tham số bổ sung, lọc, sắp xếp |
| Đổi thì sao | Tài nguyên khác hoàn toàn | Cùng tài nguyên, view khác |
| SEO | Quan trọng — Google index theo path | Thường bị bỏ qua hoặc canonical hóa |
| Ví dụ | `/products/laptop` | `?sort=price&page=2` |

### Các kiểu path phổ biến

- **Tĩnh**: `/about`, `/contact` — luôn cố định.
- **Động (slug)**: `/blog/cach-toi-uu-seo` — phần slug đại diện cho 1 bài viết.
- **Dynamic param**: `/users/123` — `123` là id user, server sẽ trả về dữ liệu khác nhau.
- **Lồng (nested)**: `/shop/category/laptop/asus` — phản ánh phân cấp danh mục.

### Trailing slash
`/blog/` và `/blog` về kỹ thuật **có thể là 2 URL khác nhau**. Hầu hết website chọn 1 chuẩn rồi redirect 301 cái còn lại để tránh trùng lặp nội dung.

---

## 6. Sitemap — bản đồ URL của website

**Sitemap** là danh sách tất cả URL quan trọng của một website, giúp **search engine** (Google, Bing) khám phá và index nội dung nhanh hơn.

### Vì sao cần sitemap?

- Website lớn có hàng nghìn URL — bot không thể tự crawl hết.
- Trang mới hoặc trang ít liên kết nội bộ → bot khó tìm thấy.
- Sitemap nói rõ với bot: "Đây là toàn bộ trang tôi muốn được index, ưu tiên thế nào, sửa lần cuối khi nào."

### Cấu trúc sitemap.xml

Sitemap thường đặt tại `https://example.com/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-05-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/blog/sitemap-la-gi</loc>
    <lastmod>2026-04-20</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

| Thẻ | Ý nghĩa |
|-----|---------|
| `<loc>` | URL đầy đủ (bắt buộc) |
| `<lastmod>` | Ngày sửa lần cuối |
| `<changefreq>` | Tần suất thay đổi: `daily`, `weekly`, `monthly`... |
| `<priority>` | Mức ưu tiên 0.0 — 1.0 (tương đối trong cùng site) |

### Sitemap index — khi site quá lớn

Một file sitemap chỉ chứa tối đa **50.000 URL** hoặc **50MB**. Site lớn chia thành nhiều sitemap nhỏ rồi gom vào **sitemap index**:

```xml
<sitemapindex>
  <sitemap><loc>https://example.com/sitemap-posts.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-products.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-pages.xml</loc></sitemap>
</sitemapindex>
```

### Quan hệ sitemap ↔ path

Sitemap chính là **danh sách các URL hợp lệ**, mà mỗi URL = `scheme + host + path`. Vì vậy:

- Path **rõ ràng, có cấu trúc cây** → sitemap tự nhiên dễ hiểu.
- Path lộn xộn, dài, nhiều tham số → sitemap khó duy trì, SEO yếu.
- Một path tốt = vừa thân thiện với người (đọc được, đoán được) vừa thân thiện với bot.

### robots.txt nói gì với sitemap?

File `robots.txt` ở root site thường khai báo vị trí sitemap:

```
User-agent: *
Disallow: /admin/
Sitemap: https://example.com/sitemap.xml
```

Nó là cách **chính thức** để báo cho bot biết sitemap ở đâu.

---

## 7. DNS hoạt động như thế nào?

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

## 8. TTL (Time To Live)

Mỗi DNS record có **TTL** — thời gian (giây) mà kết quả được cache.

- TTL 3600 = cache 1 giờ.
- TTL thấp: thay đổi DNS áp dụng nhanh (vài phút) nhưng tốn tài nguyên server.
- TTL cao: tiết kiệm tài nguyên nhưng thay đổi mất nhiều thời gian lan truyền.

**Lưu ý thực tế**: Khi chuyển hosting, thay đổi DNS có thể mất 24–48 giờ để "propagate" (lan truyền) toàn cầu do TTL cũ.

---

## 9. Đăng ký domain

Bạn đăng ký domain qua **Registrar** (nhà đăng ký):
- Quốc tế: GoDaddy, Namecheap, Google Domains, Cloudflare.
- Việt Nam: VNPT, Inet, Mắt Bão.

Sau khi đăng ký, bạn chỉnh DNS records tại **Nameserver** (thường cùng với registrar hoặc dịch vụ DNS riêng như Cloudflare).

---

## 10. Tóm tắt

- **Domain** = tên dễ nhớ thay cho IP; gồm subdomain + second-level + TLD.
- **URI** là khái niệm tổng; **URL** = URI có vị trí; **URN** = URI chỉ là tên.
- **URL** = scheme + host + port + **path** + query + fragment.
- **Path** mô tả tài nguyên theo cấu trúc cây — quan trọng cho SEO và UX.
- **Sitemap.xml** = danh sách URL của site, giúp Google index; khai báo trong `robots.txt`.
- **DNS** phân giải domain → IP; **Record A** quan trọng nhất; **TTL** quyết định tốc độ cập nhật DNS.
