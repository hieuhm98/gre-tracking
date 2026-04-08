# API là gì?

## 1. API là gì?

**API** (Application Programming Interface) là **giao diện** cho phép các hệ thống phần mềm giao tiếp với nhau.

**Ví dụ thực tế**: Khi bạn đặt xe Grab, app Grab gọi API của Google Maps để lấy bản đồ và tính đường đi. Grab không tự xây dựng bản đồ — họ gọi API của người khác.

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

## 3. JSON – Định dạng dữ liệu

**JSON** (JavaScript Object Notation) là định dạng văn bản phổ biến nhất để trao đổi dữ liệu qua API.

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "price": 25000000,
  "inStock": true,
  "tags": ["laptop", "dell", "premium"],
  "specs": {
    "cpu": "Intel i7",
    "ram": "16GB"
  }
}
```

**Cấu trúc JSON:**
- `{}` = object (cặp key-value)
- `[]` = array (danh sách)
- Giá trị: string, number, boolean, null, object, array

---

## 4. Request và Response

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

## 5. API Key và Authentication

Hầu hết API thương mại yêu cầu xác thực:

- **API Key**: chuỗi bí mật gửi kèm mỗi request (header hoặc query param).
- **Bearer Token (JWT)**: token ngắn hạn sau khi đăng nhập.
- **OAuth**: cho phép đăng nhập qua Google/Facebook mà không chia sẻ mật khẩu.

---

## 6. API Documentation

Mỗi API có tài liệu mô tả:
- Endpoint nào tồn tại.
- Cần gửi dữ liệu gì (request body, parameters).
- Nhận về dữ liệu gì (response format).
- Lỗi có thể xảy ra.

**Swagger/OpenAPI** là chuẩn phổ biến để viết API docs.

---

## 7. Ví dụ thực tế: Shopee & Grab

| Tình huống | API được dùng |
|-----------|--------------|
| Shopee hiển thị bản đồ địa chỉ giao hàng | Google Maps API |
| App Grab tính giá cước | Internal pricing API |
| Website cho đăng nhập bằng Google | Google OAuth API |
| Thanh toán bằng VNPAY | VNPAY Payment API |
| Gửi SMS OTP | Twilio/VIETGUYS SMS API |

---

## 8. Tóm tắt

- **API** = giao diện để các hệ thống giao tiếp.
- **REST API** dùng HTTP Methods + URL endpoint.
- **JSON** = định dạng dữ liệu phổ biến nhất.
- **Endpoint** = URL cụ thể của một tài nguyên.
- **Authentication** = API Key, Bearer Token, OAuth.
- **API Docs** = tài liệu mô tả cách dùng API.
