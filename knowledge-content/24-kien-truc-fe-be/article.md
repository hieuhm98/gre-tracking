# Kiến Trúc Frontend & Backend

## 1. Tổng quan

Mọi ứng dụng web hiện đại đều chia thành hai phần chính:

```
Người dùng → [FRONTEND] ←→ [BACKEND] ←→ [DATABASE]
              Trình duyệt    Server        Dữ liệu
```

- **Frontend (FE)**: Những gì người dùng nhìn thấy và tương tác
- **Backend (BE)**: Logic xử lý, bảo mật, lưu trữ dữ liệu
- **Database**: Nơi lưu trữ dữ liệu lâu dài

---

## 2. Frontend làm gì?

Frontend là tầng giao diện — chạy **trong trình duyệt** của người dùng.

**Trách nhiệm của FE:**
- Hiển thị giao diện (HTML, CSS)
- Xử lý tương tác người dùng (click, nhập liệu, scroll)
- Validate form phía client
- Gọi API để lấy / gửi dữ liệu
- Quản lý trạng thái màn hình (loading, error, empty)
- Routing (chuyển trang không reload)
- Xử lý cache, optimize tốc độ tải

**Công nghệ FE điển hình:**
- HTML, CSS, JavaScript
- React / Vue / Angular
- Next.js, Nuxt.js
- Tailwind CSS, Bootstrap

**FE KHÔNG làm:**
- Xử lý logic nghiệp vụ quan trọng (dễ bị người dùng bypass)
- Lưu trữ dữ liệu nhạy cảm
- Xác thực quyền truy cập cuối cùng

---

## 3. Backend làm gì?

Backend chạy **trên server** — người dùng không nhìn thấy, không tương tác trực tiếp.

**Trách nhiệm của BE:**
- Xử lý logic nghiệp vụ (business logic)
- Xác thực và phân quyền (authentication & authorization)
- Kết nối và truy vấn database
- Gửi email, thông báo
- Tích hợp bên thứ ba (payment gateway, SMS, AI...)
- Xử lý file upload
- Caching ở tầng server
- Logging, monitoring

**Công nghệ BE điển hình:**
- Node.js, Python, Java, Go, .NET
- Express, FastAPI, Spring Boot, Laravel
- PostgreSQL, MySQL, MongoDB (database)
- Redis (cache)
- AWS, Google Cloud, Azure (cloud)

---

## 4. Giao tiếp FE ↔ BE qua API

FE và BE nói chuyện với nhau qua **API** (Application Programming Interface). Phổ biến nhất là **REST API**.

```
FE gửi HTTP Request:
GET  /api/products          → lấy danh sách sản phẩm
POST /api/orders            → tạo đơn hàng mới
PUT  /api/orders/123        → cập nhật đơn hàng 123
DELETE /api/orders/123      → xóa đơn hàng 123

BE trả về HTTP Response:
{
  "status": "success",
  "data": { "id": 123, "total": 500000 }
}
```

**Một request đầy đủ:**
1. Người dùng click "Đặt hàng"
2. FE validate form (email đúng format? số lượng > 0?)
3. FE gửi `POST /api/orders` kèm dữ liệu JSON
4. BE nhận request, kiểm tra token xác thực
5. BE validate lại dữ liệu (không tin FE)
6. BE kiểm tra tồn kho trong database
7. BE tạo order, trừ tồn kho, gửi email xác nhận
8. BE trả về `{ "orderId": 456, "status": "confirmed" }`
9. FE nhận response, hiển thị màn hình "Đặt hàng thành công"

---

## 5. Authentication & Authorization

| Khái niệm | Ý nghĩa | Ví dụ |
|---|---|---|
| **Authentication** | Xác thực *bạn là ai* | Đăng nhập bằng email/password |
| **Authorization** | Phân quyền *bạn được làm gì* | Admin mới xóa được user |

**Luồng đăng nhập:**
1. User nhập email + password → FE gửi lên BE
2. BE kiểm tra trong database → đúng → tạo **JWT token**
3. BE trả token về FE
4. FE lưu token (localStorage hoặc cookie)
5. Mọi request sau đó, FE kèm token vào header
6. BE verify token trước khi xử lý mỗi request

---

## 6. Các tầng kiến trúc phổ biến

### Monolith (Nguyên khối)
FE và BE trong cùng một project. Phổ biến với startup nhỏ.

```
[Browser] → [Monolith App: FE + BE + DB]
```

### Tách biệt FE/BE
FE là app riêng (React), BE là API riêng. Phổ biến nhất hiện nay.

```
[React App]  →  [REST API Server]  →  [Database]
```

### Microservices
BE chia thành nhiều service nhỏ. Phức tạp hơn, dành cho hệ thống lớn.

```
[FE] → [API Gateway] → [User Service]
                     → [Order Service]
                     → [Payment Service]
```

---

## 7. Môi trường phát triển

| Môi trường | Mục đích |
|---|---|
| **Local / Dev** | Developer viết code, test thoải mái |
| **Staging / UAT** | Kiểm thử nghiệm thu, QA và BA test |
| **Production** | Môi trường thật, người dùng sử dụng |

BA cần lưu ý:
- Không bao giờ test tính năng mới trực tiếp trên Production
- UAT (User Acceptance Testing) luôn diễn ra trên Staging
- Dữ liệu trên Staging thường là dữ liệu giả — không dùng dữ liệu thật của khách hàng

---

## 8. BA cần hiểu gì về FE/BE để làm việc hiệu quả?

### Khi viết User Story:
- **FE concern**: loading state, empty state, error message, responsive breakpoint, form validation message
- **BE concern**: business rule, permission, performance SLA, data retention

### Khi chia task:
- Task FE: UI component, form validation, routing, hiển thị dữ liệu
- Task BE: API endpoint, database schema, business logic, authentication
- Task chung: API contract (định nghĩa request/response format trước)

### Câu hỏi BA nên hỏi dev:
- "Phần này FE hay BE xử lý?" → hiểu ai chịu trách nhiệm
- "API này đã có chưa hay cần tạo mới?" → ảnh hưởng đến estimate
- "Có ảnh hưởng đến hệ thống khác không?" → dependency
- "Deploy mất bao lâu? Có downtime không?" → ảnh hưởng release plan
