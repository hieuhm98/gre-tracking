# UML cơ bản

## 1. UML là gì?

**UML** (Unified Modeling Language) là ngôn ngữ mô hình hóa chuẩn để mô tả thiết kế hệ thống phần mềm bằng sơ đồ trực quan.

UML có 14 loại diagram, nhưng BA/PM cần biết chủ yếu 3 loại sau.

---

## 2. Use Case Diagram

**Mục đích**: mô tả hệ thống làm gì (chức năng) và ai sử dụng nó.

### Ký hiệu

| Ký hiệu | Mô tả |
|---------|-------|
| Hình người que (stick figure) | **Actor** — người dùng hoặc hệ thống bên ngoài |
| Hình oval | **Use Case** — chức năng của hệ thống |
| Hình chữ nhật | **System boundary** — ranh giới hệ thống |
| Mũi tên liền | **Association** — actor sử dụng use case |
| `<<include>>` | Use case này bao gồm use case khác (bắt buộc) |
| `<<extend>>` | Use case này mở rộng use case khác (tùy chọn) |

### Ví dụ: Hệ thống mua hàng online

```
┌─────────────────── Hệ thống mua hàng ───────────────────┐
│                                                          │
│  (Tìm kiếm sản phẩm)    (Xem giỏ hàng)                │
│  (Đặt hàng)             (Theo dõi đơn hàng)            │
│  (Thanh toán)           (Quản lý sản phẩm)             │
│                                                          │
└──────────────────────────────────────────────────────────┘

👤 Khách hàng → Tìm kiếm, Xem giỏ, Đặt hàng, Thanh toán
👤 Admin → Quản lý sản phẩm
👤 Hệ thống thanh toán → <<extends>> Thanh toán
```

---

## 3. Activity Diagram

**Mục đích**: mô tả luồng hoạt động, quy trình từng bước — tương tự flowchart nhưng trong ngữ cảnh UML.

### Ký hiệu

| Ký hiệu | Mô tả |
|---------|-------|
| Hình tròn đặc | Initial node (bắt đầu) |
| Hình tròn đặc + vòng ngoài | Final node (kết thúc) |
| Hình chữ nhật bo góc | Activity (hành động) |
| Hình thoi | Decision/Merge node |
| Thanh đen ngang | Fork/Join (song song) |
| Swimlane | Phân chia theo vai trò |

### Điểm khác biệt với Flowchart
- Activity Diagram có **Fork/Join** để mô tả hoạt động song song.
- Tích hợp tốt hơn với các diagram UML khác.
- Dùng **swimlane** gọi là **partition** trong UML.

---

## 4. Sequence Diagram

**Mục đích**: mô tả **thứ tự** các tương tác giữa các đối tượng theo thời gian.

### Ký hiệu

| Ký hiệu | Mô tả |
|---------|-------|
| Hình chữ nhật trên đỉnh | **Lifeline** — đối tượng/actor tham gia |
| Đường đứt ngang | **Lifeline** — tồn tại theo thời gian |
| Hình chữ nhật hẹp | **Activation box** — đang xử lý |
| Mũi tên liền | **Synchronous message** (gọi và chờ) |
| Mũi tên đứt | **Return message** (trả về) |
| Mũi tên mở | **Asynchronous message** (gọi không chờ) |

### Ví dụ: Đăng nhập hệ thống

```
Browser        Server        Database
  │               │               │
  │──POST /login─►│               │
  │               │──SELECT user──►│
  │               │◄──user data───│
  │               │ (verify pass) │
  │◄──200 + token─│               │
  │               │               │
```

---

## 5. Khi nào dùng loại diagram nào?

| Tình huống | Dùng diagram |
|-----------|--------------|
| Xác định chức năng hệ thống, ai dùng gì | Use Case Diagram |
| Mô tả quy trình nghiệp vụ step-by-step | Activity Diagram |
| Mô tả cách các component giao tiếp theo thời gian | Sequence Diagram |
| Thiết kế cấu trúc class/object | Class Diagram |
| Mô tả trạng thái của đối tượng | State Diagram |

---

## 6. Lưu ý thực tế cho BA/PM

- Dùng Use Case Diagram khi **kick-off dự án** — scope hệ thống.
- Dùng Activity Diagram khi **mô tả nghiệp vụ** — tương tự flowchart.
- Dùng Sequence Diagram khi **làm việc với developer** về API/integration.
- Không cần biết hết 14 loại — ba loại trên đủ cho 80% công việc BA.

---

## 7. Tóm tắt

- **Use Case**: hệ thống làm gì, ai dùng.
- **Activity**: quy trình step-by-step, hỗ trợ song song.
- **Sequence**: thứ tự tương tác theo thời gian.
- Actor = người dùng hoặc hệ thống bên ngoài.
- `<<include>>` = bắt buộc; `<<extend>>` = tùy chọn.
