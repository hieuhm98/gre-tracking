# Phân Chia Task cho FE & BE

## 1. Tại sao BA cần biết phân chia task?

Một trong những kỹ năng quan trọng nhất của BA là **translate yêu cầu nghiệp vụ thành task kỹ thuật** đủ rõ để dev estimate và thực hiện. Không cần biết code, nhưng cần hiểu:

- Phần nào FE làm, phần nào BE làm
- Cần tạo API mới hay tái sử dụng API có sẵn
- Task nào phụ thuộc task nào (dependency)
- Cái gì cần thống nhất trước (API contract)

Nếu BA không có tư duy này, task sẽ mơ hồ, dev estimate sai, sprint bị trễ.

---

## 2. Nguyên tắc chia FE / BE

### Frontend chịu trách nhiệm:
- **UI Components**: hiển thị giao diện, layout, responsive
- **UX Logic**: loading state, error state, empty state, transitions
- **Form handling**: validate input phía client, submit form
- **Routing**: điều hướng giữa các màn hình
- **Client-side state**: dữ liệu tạm thời trên màn hình
- **API calls**: gọi API BE để lấy/gửi dữ liệu
- **Local storage**: lưu tạm token, preference của user

### Backend chịu trách nhiệm:
- **Business logic**: tính toán, quy tắc nghiệp vụ
- **Authentication & Authorization**: xác thực, phân quyền
- **Database**: CRUD, query, migration
- **API endpoints**: tạo và bảo trì REST/GraphQL API
- **Validation**: validate lại mọi dữ liệu đầu vào (không tin FE)
- **External services**: email, SMS, payment, storage
- **Cron jobs**: tác vụ nền chạy theo lịch
- **File processing**: xử lý upload, convert

### Cả hai cùng làm:
- **API Contract**: thống nhất format request/response trước khi code
- **Error handling**: FE hiển thị lỗi, BE trả về error code đúng

---

## 3. Quy trình phân chia task cho một feature

### Bước 1: Xác định màn hình (FE)

Từ user story, liệt kê tất cả màn hình và component:

```
Feature: Quản lý sản phẩm

Màn hình:
1. Danh sách sản phẩm (ProductListPage)
   - Header + nút "Thêm sản phẩm"
   - Bộ lọc (filter by category, status)
   - Search bar
   - Table/Grid sản phẩm
   - Pagination

2. Form tạo/sửa sản phẩm (ProductFormPage)
   - Input: tên, mô tả, giá, danh mục
   - Upload ảnh
   - Toggle: active/inactive
   - Nút Save / Cancel

3. Modal xác nhận xóa
```

### Bước 2: Xác định API cần thiết (BE)

Mỗi action của FE cần một API endpoint:

```
API cần thiết:
1. GET  /api/products          → lấy danh sách (filter, search, pagination)
2. GET  /api/products/:id      → lấy chi tiết 1 sản phẩm
3. POST /api/products          → tạo mới
4. PUT  /api/products/:id      → cập nhật
5. DELETE /api/products/:id    → xóa (soft delete)
6. POST /api/products/upload   → upload ảnh

7. GET  /api/categories        → lấy danh mục cho dropdown (có thể API riêng)
```

### Bước 3: Xác định API Contract

Thống nhất format trước khi code:

```json
// Request: POST /api/products
{
  "name": "Áo thun unisex",
  "description": "Mô tả sản phẩm...",
  "price": 299000,
  "category_id": "abc123",
  "status": "active",
  "images": ["url1", "url2"]
}

// Response: 201 Created
{
  "success": true,
  "data": {
    "id": "xyz789",
    "name": "Áo thun unisex",
    "price": 299000,
    "created_at": "2025-04-09T10:00:00Z"
  }
}

// Response: 422 Validation Error
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dữ liệu không hợp lệ",
    "fields": {
      "name": "Tên sản phẩm không được để trống",
      "price": "Giá phải lớn hơn 0"
    }
  }
}
```

### Bước 4: Breakdown thành task cụ thể

```
BACKEND TASKS:
□ [BE-1] Tạo database schema: bảng products, categories
□ [BE-2] API: GET /api/products (filter, search, pagination)
□ [BE-3] API: GET /api/products/:id
□ [BE-4] API: POST /api/products (validation, business rules)
□ [BE-5] API: PUT /api/products/:id
□ [BE-6] API: DELETE /api/products/:id (soft delete)
□ [BE-7] API: POST /api/products/upload (validate file type/size, lưu S3)
□ [BE-8] API: GET /api/categories

FRONTEND TASKS:
□ [FE-1] ProductListPage: layout + table component
□ [FE-2] ProductListPage: filter và search (gọi API BE-2)
□ [FE-3] ProductListPage: pagination
□ [FE-4] ProductFormPage: form tạo mới (gọi API BE-4)
□ [FE-5] ProductFormPage: form chỉnh sửa (gọi API BE-3 + BE-5)
□ [FE-6] ProductFormPage: upload ảnh (gọi API BE-7)
□ [FE-7] Modal xác nhận xóa (gọi API BE-6)
□ [FE-8] Loading/error/empty states cho tất cả màn hình

DEPENDENCY:
- FE-1 đến FE-8 phụ thuộc BE API (cần BE mock hoặc BE hoàn thiện trước)
- FE-4 cần BE-8 (dropdown danh mục)
- Tất cả FE cần API contract thống nhất (BE-1 hoàn thiện trước)
```

---

## 4. Ví dụ thực tế: Feature "Đặt lịch hẹn"

### User Story
```
As a patient,
I want to book an appointment with a doctor online,
So that I don't have to call the clinic.
```

### Phân tích màn hình FE

```
1. Chọn chuyên khoa → 2. Chọn bác sĩ → 3. Chọn ngày/giờ → 4. Xác nhận thông tin → 5. Thanh toán → 6. Xác nhận đặt lịch
```

### API cần thiết

```
GET  /api/specialties                    → danh sách chuyên khoa
GET  /api/doctors?specialty_id=X        → bác sĩ theo chuyên khoa
GET  /api/doctors/:id/availability      → lịch rảnh của bác sĩ
GET  /api/doctors/:id/availability?date=2025-04-09  → lịch theo ngày
POST /api/appointments                  → tạo lịch hẹn
GET  /api/appointments/:id             → chi tiết lịch hẹn
POST /api/payments/create-session       → khởi tạo thanh toán
POST /api/payments/webhook              → nhận kết quả từ payment gateway
```

### Task breakdown

```
BACKEND:
□ [BE-1] Schema: bảng appointments, doctor_schedules, specialties
□ [BE-2] API lấy danh sách chuyên khoa
□ [BE-3] API lấy bác sĩ theo chuyên khoa (filter, paginate)
□ [BE-4] API lấy lịch trống của bác sĩ (logic kiểm tra overlap lịch)
□ [BE-5] API tạo lịch hẹn (validate: không double booking, check payment)
□ [BE-6] Tích hợp payment gateway (Stripe/VNPay)
□ [BE-7] Webhook xử lý kết quả thanh toán
□ [BE-8] Gửi email xác nhận sau đặt lịch thành công
□ [BE-9] Cron job: nhắc nhở lịch hẹn 24h trước

FRONTEND:
□ [FE-1] Stepper component (multi-step flow)
□ [FE-2] Màn hình chọn chuyên khoa
□ [FE-3] Màn hình chọn bác sĩ + filter
□ [FE-4] Calendar chọn ngày + time slot picker
□ [FE-5] Form xác nhận thông tin bệnh nhân
□ [FE-6] Tích hợp payment UI (redirect/iframe)
□ [FE-7] Màn hình xác nhận thành công / thất bại
□ [FE-8] Loading/error states mỗi bước

DEPENDENCY CHAIN:
BE-1 → BE-2, BE-3, BE-4, BE-5 (schema cần xong trước)
BE-6 → BE-7 (payment cần trước webhook)
FE-4 phụ thuộc BE-4 (cần biết format lịch trống)
FE-6 phụ thuộc BE-6 (cần payment session URL)
```

---

## 5. API Contract — Thứ cần thống nhất trước tiên

**API Contract** là thỏa thuận giữa FE và BE về:
- Endpoint URL
- HTTP method
- Request body / query params / path params
- Response format khi thành công
- Response format khi lỗi
- HTTP status codes

**Tại sao quan trọng:** FE và BE có thể làm song song nếu contract rõ. FE dùng mock data, BE build API thật. Khi xong thì ghép lại.

**Template API Contract:**

```
Endpoint: POST /api/auth/login

Request:
  Method: POST
  Headers: Content-Type: application/json
  Body:
    {
      "email": string (required, valid email format),
      "password": string (required, min 8 chars)
    }

Response:
  200 OK — đăng nhập thành công:
    {
      "token": "eyJhbGci...",
      "expires_in": 86400,
      "user": {
        "id": "uuid",
        "name": "Nguyễn An",
        "email": "an@example.com",
        "role": "admin" | "member"
      }
    }

  401 Unauthorized — sai credentials:
    { "code": "INVALID_CREDENTIALS", "message": "Email hoặc mật khẩu không đúng" }

  422 Unprocessable Entity — validation error:
    { "code": "VALIDATION_ERROR", "fields": { "email": "Email không hợp lệ" } }

  429 Too Many Requests — quá nhiều lần thử:
    { "code": "RATE_LIMITED", "message": "Thử lại sau 15 phút", "retry_after": 900 }
```

---

## 6. Nhận biết task thuộc FE hay BE

Dùng bảng này để phân loại nhanh:

| Yêu cầu | FE | BE |
|---------|----|----|
| Hiển thị danh sách X | ✓ | API GET /X |
| Tìm kiếm, filter | ✓ (UI) | ✓ (query logic) |
| Form nhập liệu | ✓ | API POST/PUT |
| Validate format (email, phone) | ✓ | ✓ (bắt buộc) |
| Validate business rule ("đủ 18 tuổi") | ✗ | ✓ |
| Upload file | ✓ (UI picker) | ✓ (lưu file, validate size/type) |
| Gửi email/SMS | ✗ | ✓ |
| Tính toán giá, thuế, discount | ✗ | ✓ |
| Phân quyền hiển thị nút | ✓ (hide UI) | ✓ (block API) |
| Export CSV/PDF | ✗ | ✓ |
| Animation, transition | ✓ | ✗ |
| Loading/skeleton UI | ✓ | ✗ |
| Responsive design | ✓ | ✗ |
| Lên lịch gửi email | ✗ | ✓ (cron job) |
| Real-time notification | ✓ (WebSocket client) | ✓ (WebSocket server) |

---

## 7. Các câu hỏi BA nên hỏi khi grooming

### Trước khi viết task:
- "API này đã có chưa hay cần tạo mới?" → ảnh hưởng estimate
- "Có màn hình nào tương tự đã làm rồi không?" → có thể reuse
- "FE và BE cần làm cùng lúc hay có thể song song?" → ảnh hưởng sprint plan

### Khi không chắc thuộc FE hay BE:
- "Validation rule này có cần check ở cả FE và BE không?"
- "Logic này có thể sai nếu chỉ làm ở FE không?" → nếu có, cần BE

### Khi estimate có vẻ cao:
- "Có dependency gì làm tốn thêm thời gian không?"
- "Có cần tích hợp bên thứ 3 không?" (payment, SMS, AI...)
- "Có breaking change nào ảnh hưởng features khác không?"

---

## 8. Dependency và Sprint Planning

**Dependency chain** quyết định thứ tự làm:

```
Ví dụ: Feature Thanh toán

KHÔNG thể làm song song:
  1. BE: Schema database
  2. BE: API tạo đơn hàng        (cần schema)
  3. BE: Tích hợp payment        (cần API đơn hàng)
  4. BE: Webhook xác nhận        (cần payment)
  5. FE: Checkout flow           (cần API payment session)

CÓ thể làm song song (sau khi contract xong):
  - BE: API lấy danh sách sản phẩm
  - FE: UI màn hình checkout (dùng mock data)
```

**Cho Sprint Planning:**
- Task có dependency → đặt vào cuối sprint hoặc sprint sau
- Task không dependency → có thể làm sớm, song song
- Task FE/BE cần ghép lại → cần buffer thời gian integration

---

## 9. Template Ticket Kỹ thuật

Khi BA tạo ticket kỹ thuật, format này giúp dev hiểu rõ:

```markdown
## [FE] Màn hình danh sách người dùng

**User Story:** US-012
**Sprint:** Sprint 5

### Mô tả
Xây dựng trang quản lý người dùng cho admin, hiển thị danh sách
và cho phép search/filter.

### API cần dùng
- GET /api/admin/users?search=&role=&page=&limit=
  (xem API contract tại: [link Confluence])

### Yêu cầu UI
- Layout theo Figma: [link Figma frame]
- Responsive: desktop (≥1024px) và tablet (768px-1023px)
- Không cần mobile

### Acceptance Criteria
- [ ] Hiển thị danh sách user với: avatar, tên, email, role, trạng thái
- [ ] Search theo tên hoặc email (debounce 300ms)
- [ ] Filter theo role: All / Admin / Member
- [ ] Pagination: 20 items/trang
- [ ] Loading skeleton khi đang gọi API
- [ ] Empty state khi không có kết quả
- [ ] Error state khi API thất bại

### Out of Scope
- Tạo/sửa/xóa user (ticket riêng)
- Export CSV (sprint sau)

### Dependencies
- [BE-045] API GET /api/admin/users phải done trước
```
