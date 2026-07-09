# API là gì?

## 1. API là gì?

**API** (Application Programming Interface) là **giao diện** cho phép các hệ thống phần mềm giao tiếp với nhau.

**Ví dụ thực tế**: Khi bạn đặt xe Grab, app Grab gọi API của Google Maps để lấy bản đồ và tính đường đi. Grab không tự xây dựng bản đồ — họ gọi API của người khác.

Trong mỗi cuộc giao tiếp có hai vai:
- **Client** (bên gọi): app/website gửi yêu cầu, ví dụ app Grab.
- **Server** (bên cung cấp): hệ thống chạy API và trả dữ liệu về, ví dụ Google Maps.

Quy tắc quan trọng: **client luôn là bên chủ động gửi request**, server chỉ phản hồi.

---

## 2. REST API

**REST** (Representational State Transfer) là kiến trúc API phổ biến nhất hiện nay, hoạt động qua HTTP.

### Nguyên tắc cơ bản
- Mỗi tài nguyên có một **URL riêng** (endpoint).
- Dùng **HTTP Methods** để biểu đạt hành động.
- Stateless: mỗi request độc lập, không nhớ state trước.

### Ví dụ: API quản lý sản phẩm

| HTTP Method | Endpoint | Hành động |
|-------------|----------|-----------|
| GET | `/api/products` | Lấy danh sách sản phẩm |
| GET | `/api/products/5` | Lấy sản phẩm id=5 |
| POST | `/api/products` | Tạo sản phẩm mới |
| PUT | `/api/products/5` | Cập nhật toàn bộ sản phẩm id=5 |
| PATCH | `/api/products/5` | Cập nhật một phần sản phẩm id=5 |
| DELETE | `/api/products/5` | Xóa sản phẩm id=5 |

---

## 3. Cấu trúc một Request (4 phần)

Một HTTP request đầy đủ luôn gồm 4 phần:

| Phần | Vai trò | Ví dụ |
|------|---------|-------|
| **URL** | Địa chỉ tài nguyên muốn tác động | `https://api.shop.com/orders` |
| **Method** | Hành động muốn làm | `POST` |
| **Headers** | Thông tin đi kèm (định dạng, xác thực…) | `Content-Type: application/json` |
| **Body** | Dữ liệu gửi lên (chỉ với POST/PUT/PATCH) | `{ "productId": 5 }` |

**Response** trả về cũng có cấu trúc tương tự nhưng thay Method + URL bằng một **Status Code** (mục 6).

---

## 4. JSON – Định dạng dữ liệu

**JSON** (JavaScript Object Notation) là định dạng văn bản phổ biến nhất để trao đổi dữ liệu qua API.

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "price": 25000000,
  "inStock": true,
  "tags": ["laptop", "dell", "premium"]
}
```

- `{}` = object (cặp key-value), `[]` = array (danh sách).
- Giá trị: string, number, boolean, null, object, array.

> 📖 JSON có bài riêng — xem **"JSON là gì?"** để hiểu object lồng nhau, mảng các object và cách đọc dữ liệu theo đường dẫn.

---

## 5. Request và Response

### HTTP Request
```
POST /api/orders HTTP/1.1
Host: api.shop.com
Content-Type: application/json
Authorization: Bearer eyJhbGci...

{
  "productId": 5,
  "quantity": 2,
  "address": "123 Lê Lợi, HCM"
}
```

### HTTP Response
```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "orderId": "ORD-20240408-001",
  "status": "confirmed",
  "total": 50000000
}
```

---

## 6. HTTP Status Codes

Mỗi response mang một **mã trạng thái** 3 chữ số cho biết request thành công hay lỗi. Đây là thứ BA thường thấy khi đọc log hoặc trao đổi với dev.

| Nhóm | Ý nghĩa chung | Mã thường gặp |
|------|---------------|---------------|
| **2xx** | Thành công | `200 OK`, `201 Created`, `204 No Content` |
| **3xx** | Chuyển hướng | `301 Moved`, `304 Not Modified` |
| **4xx** | Lỗi phía **client** (người gọi) | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `429 Too Many Requests` |
| **5xx** | Lỗi phía **server** | `500 Internal Server Error`, `503 Service Unavailable` |

**Mẹo nhớ:** `4xx` = "lỗi do bạn gửi sai", `5xx` = "lỗi do server hỏng".

Phân biệt hai mã hay nhầm:
- **401 Unauthorized**: chưa đăng nhập / thiếu hoặc sai token.
- **403 Forbidden**: đã đăng nhập nhưng **không có quyền** truy cập.

---

## 7. Phân trang & Lọc dữ liệu (Query String)

Khi dữ liệu lớn (hàng triệu bản ghi), API không trả hết một lần. Client dùng **query string** — phần sau dấu `?` trên URL — để lọc và phân trang.

```
GET /api/products?category=laptop&inStock=true&sort=price&page=2&size=20
```

| Tham số | Ý nghĩa |
|---------|---------|
| `category=laptop` | **Lọc**: chỉ lấy sản phẩm loại laptop |
| `inStock=true` | Lọc thêm điều kiện còn hàng |
| `sort=price` | **Sắp xếp** theo giá |
| `page=2&size=20` | **Phân trang**: trang 2, mỗi trang 20 kết quả (bản ghi 21–40) |

Nhiều tham số nối nhau bằng dấu `&`. BA cần điều này khi mô tả màn hình danh sách: bộ lọc nào, sắp xếp ra sao, "tải thêm"/phân trang thế nào.

---

## 8. Webhook vs Polling – Cập nhật real-time

Vì **client mới là bên chủ động gọi**, làm sao client biết khi dữ liệu **đổi ở phía server** (ví dụ đơn hàng chuyển sang "đang giao")? Có hai cách:

- **Polling**: client hỏi lặp đi lặp lại "xong chưa? xong chưa?" mỗi vài giây/phút. Đơn giản nhưng tốn tài nguyên và có độ trễ.
- **Webhook**: client cung cấp một **Callback URL**; khi có sự kiện, **server chủ động gọi ngược** về URL đó. Real-time và hiệu quả (chỉ 1 request mỗi khi có thay đổi).

| Tiêu chí | Polling | Webhook |
|----------|---------|---------|
| Ai gọi | Client hỏi liên tục | Server gọi khi có sự kiện |
| Độ trễ | Có (theo chu kỳ hỏi) | Gần như tức thì |
| Hiệu quả | Tốn request thừa | Rất hiệu quả |
| Ví dụ | App liên tục refresh trạng thái | VNPAY gọi webhook báo "đã thanh toán" |

Khi viết yêu cầu tích hợp, BA nên hỏi: *"Hệ thống này có hỗ trợ webhook không, hay phải polling?"*

---

## 9. API Key và Authentication

Hầu hết API thương mại yêu cầu xác thực:

- **API Key**: chuỗi bí mật gửi kèm mỗi request (header hoặc query param).
- **Bearer Token (JWT)**: token ngắn hạn sau khi đăng nhập.
- **OAuth**: cho phép đăng nhập qua Google/Facebook mà không chia sẻ mật khẩu.

Nếu xác thực sai/thiếu, server trả về **401** (chưa xác thực) hoặc **403** (không có quyền).

---

## 10. API Documentation

Mỗi API có tài liệu mô tả:
- Endpoint nào tồn tại.
- Cần gửi dữ liệu gì (request body, parameters).
- Nhận về dữ liệu gì (response format).
- Lỗi có thể xảy ra.

**Swagger/OpenAPI** là chuẩn phổ biến để viết API docs. BA thường đọc tài liệu này để hiểu hệ thống trả về gì và viết yêu cầu/kiểm thử.

---

## 11. Ví dụ thực tế: Shopee & Grab

| Tình huống | API được dùng |
|-----------|--------------|
| Shopee hiển thị bản đồ địa chỉ giao hàng | Google Maps API |
| App Grab tính giá cước | Internal pricing API |
| Website cho đăng nhập bằng Google | Google OAuth API |
| Thanh toán bằng VNPAY | VNPAY Payment API |
| VNPAY báo kết quả thanh toán về shop | Webhook (Callback URL) |
| Gửi SMS OTP | Twilio/VIETGUYS SMS API |

---

## 12. Tóm tắt

- **API** = giao diện để các hệ thống giao tiếp; **client** gọi, **server** trả lời.
- **REST API** dùng HTTP Methods + URL endpoint.
- Một **request** gồm 4 phần: URL, Method, Headers, Body.
- **Status code**: 2xx thành công, 4xx lỗi client, 5xx lỗi server (401 ≠ 403).
- **Query string** (`?key=value`) dùng để **lọc, sắp xếp, phân trang**.
- **Webhook** giúp server đẩy cập nhật real-time thay vì client phải **polling**.
- **JSON** = định dạng dữ liệu phổ biến nhất (xem bài JSON riêng).
- **Authentication** = API Key, Bearer Token, OAuth; **API Docs** (Swagger) mô tả cách dùng.
