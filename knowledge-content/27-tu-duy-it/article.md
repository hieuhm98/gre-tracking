# Tư Duy IT — Từ Yêu Cầu Đến Hệ Thống

## 1. Tư duy IT là gì và tại sao cần?

Khi một người dùng nói: *"Tôi muốn quản lý đơn hàng"*, một BA không có tư duy IT sẽ ghi xuống đúng câu đó và chuyển cho dev. Còn một BA có tư duy IT sẽ ngay lập tức hình dung trong đầu:

- **Màn hình**: danh sách đơn hàng, chi tiết đơn hàng, form tạo mới
- **Dữ liệu**: đơn hàng có gì? khách hàng, sản phẩm, số lượng, giá, trạng thái
- **Luồng**: tạo → xác nhận → giao hàng → hoàn thành / hủy
- **Câu hỏi**: ai tạo đơn? ai duyệt? thay đổi trạng thái như thế nào?

Tư duy IT không phải là biết code — mà là **biết đặt câu hỏi đúng** và **hình dung được hệ thống** từ ngôn ngữ nghiệp vụ.

---

## 2. Framework NOUN-VERB-STATE — Công cụ tư duy cơ bản

Khi nghe bất kỳ requirement nào, hãy phân tích theo 3 chiều:

### NOUN — Danh từ = Dữ liệu cần lưu

Mọi danh từ quan trọng trong requirement đều là một **entity** trong database.

```
Requirement: "Khách hàng đặt đơn hàng gồm nhiều sản phẩm,
              mỗi sản phẩm thuộc một danh mục."

Danh từ → Entity:
- Khách hàng (Customer)
- Đơn hàng (Order)
- Sản phẩm (Product)
- Danh mục (Category)
```

### VERB — Động từ = Tính năng / API cần xây dựng

Mọi động từ trong requirement là một **hành động** của hệ thống.

```
- "đặt" → tạo đơn hàng (POST /orders)
- "xem" → hiển thị danh sách / chi tiết (GET /orders)
- "hủy" → cập nhật trạng thái đơn (PUT /orders/:id)
- "thanh toán" → tích hợp payment
- "thông báo" → gửi email/notification
```

### STATE — Trạng thái = Lifecycle của entity

Mọi entity quan trọng đều có vòng đời (lifecycle) với các trạng thái:

```
Đơn hàng:
[Mới tạo] → [Đã xác nhận] → [Đang giao] → [Hoàn thành]
                   ↓                              ↑
              [Đã hủy]                    [Giao thất bại]
```

> **Bài tập**: Khi nghe requirement, thử gạch chân tất cả danh từ và động từ. Danh từ = bảng database. Động từ = API / tính năng.

---

## 3. Cách hình dung UI từ requirement

### Bước 1: Tìm "ai làm gì" → màn hình

Mỗi "ai làm gì" là một màn hình hoặc tính năng:

```
Requirement: "Admin quản lý sản phẩm. Khách hàng xem và mua sản phẩm."

→ 2 loại user = 2 góc nhìn khác nhau:

Admin:                          Khách hàng:
- Trang quản lý sản phẩm        - Trang danh sách sản phẩm
- Form thêm/sửa sản phẩm        - Trang chi tiết sản phẩm
- Trang quản lý đơn hàng        - Giỏ hàng
                                - Checkout
```

### Bước 2: Đặt câu hỏi "User muốn làm gì ở đây?"

Với mỗi màn hình, hỏi:
- **Xem gì?** → đây là dữ liệu cần hiển thị
- **Làm gì?** → đây là action (nút, form, link)
- **Đến đâu?** → đây là navigation

```
Màn hình: Danh sách sản phẩm

Xem gì?
→ Tên sản phẩm, ảnh, giá, trạng thái còn hàng

Làm gì?
→ Tìm kiếm, lọc theo danh mục, thêm vào giỏ, xem chi tiết

Đến đâu?
→ Click vào → trang chi tiết
→ Click giỏ hàng → trang giỏ hàng
```

### Bước 3: Vẽ sơ đồ luồng màn hình (không cần đẹp)

Chỉ cần vẽ hộp và mũi tên:

```
[Landing] → [Đăng nhập] → [Dashboard]
                               ↓
                    [Danh sách SP] → [Chi tiết SP] → [Thêm giỏ]
                                                          ↓
                                                    [Giỏ hàng] → [Checkout] → [Xác nhận]
```

Luồng này giúp bạn:
- Phát hiện màn hình bị thiếu
- Xác định entry point và exit point
- Biết màn hình nào cần authentication

---

## 4. Cách hình dung Database từ requirement

### Quy tắc 1: Mỗi "thứ" quan trọng = một bảng

```
Requirement: "Quản lý công việc trong dự án.
              Mỗi công việc được giao cho một nhân viên.
              Công việc có thể có nhiều comment."

Bảng:
- projects (dự án)
- tasks (công việc)
- users (nhân viên)
- comments (bình luận)
```

### Quy tắc 2: Mỗi bảng cần những trường gì?

Với mỗi entity, hỏi: **"Mình cần biết gì về nó?"**

```
TASK (công việc):
- id           → định danh duy nhất (bắt buộc)
- title        → tên công việc
- description  → mô tả chi tiết
- status       → trạng thái (todo / in_progress / done)
- priority     → ưu tiên (low / medium / high)
- due_date     → deadline
- assigned_to  → id của user được giao
- project_id   → thuộc dự án nào
- created_by   → ai tạo
- created_at   → ngày tạo
- updated_at   → ngày cập nhật cuối
```

### Quy tắc 3: Mối quan hệ giữa các bảng

3 kiểu quan hệ phổ biến:

**1-N (Một - Nhiều):** phổ biến nhất

```
Một Project có nhiều Tasks
→ Bảng tasks có cột project_id

Một User có nhiều Tasks được giao
→ Bảng tasks có cột assigned_to (= user_id)
```

**N-N (Nhiều - Nhiều):** cần bảng trung gian

```
Một Task có nhiều Tags
Một Tag được gán cho nhiều Tasks
→ Cần bảng trung gian: task_tags (task_id, tag_id)

Một User tham gia nhiều Projects
Một Project có nhiều Users
→ Cần bảng: project_members (project_id, user_id, role)
```

**1-1 (Một - Một):** ít gặp hơn

```
Một User có một Profile chi tiết
→ Bảng user_profiles có cột user_id (unique)
```

### Ví dụ thực tế: Từ requirement → Data model

```
Requirement: "Hệ thống booking phòng họp.
              Nhân viên đặt phòng theo slot giờ.
              Mỗi phòng có thể có equipment.
              Đặt phòng cần được duyệt bởi admin."

Data model:
┌─────────────┐     ┌──────────────────┐     ┌──────────────┐
│   users     │     │    bookings      │     │    rooms     │
├─────────────┤     ├──────────────────┤     ├──────────────┤
│ id          │──┐  │ id               │  ┌──│ id           │
│ name        │  └─>│ user_id          │  │  │ name         │
│ email       │     │ room_id          │──┘  │ capacity     │
│ department  │     │ start_time       │     │ floor        │
└─────────────┘     │ end_time         │     └──────────────┘
                    │ title            │            │
                    │ status           │            │ N-N
                    │ approved_by      │     ┌──────────────┐
                    └──────────────────┘     │ room_equip.  │
                                             ├──────────────┤
                                             │ room_id      │
                                             │ equipment_id │
                                             └──────────────┘
                                                    │
                                             ┌──────────────┐
                                             │  equipment   │
                                             ├──────────────┤
                                             │ id           │
                                             │ name         │
                                             └──────────────┘
```

---

## 5. Cách hình dung luồng xử lý (Business Flow)

### Công cụ: "Khi... thì..." (Event → Action)

Với mỗi hành động quan trọng, hỏi:

> **"Khi X xảy ra, hệ thống cần làm gì?"**

```
Khi user đặt đơn hàng thành công:
→ Tạo record đơn hàng trong database
→ Trừ tồn kho sản phẩm
→ Gửi email xác nhận cho khách
→ Gửi thông báo cho admin
→ Tạo transaction thanh toán (nếu online payment)

Khi thanh toán thất bại:
→ KHÔNG tạo đơn hàng
→ KHÔNG trừ tồn kho
→ Thông báo lỗi cho user
→ Log lỗi để debug
```

### State Machine — Công cụ tư duy trạng thái

Mọi entity quan trọng đều có lifecycle. Hãy vẽ:

```
ĐƠN HÀNG:

                   [Hủy bởi user]
          ┌─────────────────────────────────┐
          │                                 ↓
[pending] → [confirmed] → [shipping] → [delivered]
               │                          │
               │ [admin từ chối]          │ [giao thất bại]
               ↓                          ↓
           [cancelled]              [returned]
```

Với mỗi chuyển trạng thái, hỏi:
- **Ai** có quyền trigger?
- **Điều kiện** để chuyển?
- **Hệ thống làm gì** khi chuyển?

---

## 6. Câu hỏi 5W1H áp dụng vào IT

Thay vì hỏi chung chung, áp dụng 5W1H để khai thác requirement đầy đủ:

### WHO — Ai?
- Ai sử dụng tính năng này? (user role)
- Ai có quyền xem / sửa / xóa?
- Ai được thông báo khi có sự kiện?

### WHAT — Cái gì?
- Dữ liệu nào cần hiển thị?
- Dữ liệu nào cần lưu?
- Trường nào bắt buộc, trường nào không?

### WHEN — Khi nào?
- Tính năng này được dùng khi nào?
- Trigger là gì (manual / tự động / theo lịch)?
- Dữ liệu hết hạn sau bao lâu?

### WHERE — Ở đâu?
- Màn hình nào hiển thị?
- Mobile hay desktop hay cả hai?
- Dữ liệu lưu ở đâu (local / cloud / cả hai)?

### WHY — Tại sao?
- Mục tiêu nghiệp vụ là gì?
- Nếu không có tính năng này, điều gì xảy ra?
- Đây là must-have hay nice-to-have?

### HOW — Như thế nào?
- Làm thế nào user thực hiện hành động?
- Hệ thống xử lý như thế nào khi có lỗi?
- Performance cần đạt mức nào?

---

## 7. Thực hành: Đọc requirement → Tư duy hệ thống

### Ví dụ 1: "Ứng dụng quản lý chi tiêu cá nhân"

**Bước 1 — NOUN → Entities:**
```
- Người dùng (User)
- Giao dịch (Transaction)
- Danh mục chi tiêu (Category): ăn uống, di chuyển, giải trí...
- Ngân sách (Budget): giới hạn chi tiêu mỗi tháng theo danh mục
```

**Bước 2 — VERB → Tính năng:**
```
- Ghi lại → thêm transaction mới
- Xem → danh sách / báo cáo / biểu đồ
- Đặt → thiết lập ngân sách
- Cảnh báo → thông báo khi gần hết budget
- Xuất → export báo cáo PDF/CSV
```

**Bước 3 — STATE → Không có lifecycle phức tạp (transaction không có trạng thái)**

**Bước 4 — Màn hình:**
```
1. Dashboard: tổng quan tháng này (chi bao nhiêu, còn bao nhiêu)
2. Thêm giao dịch: form nhanh (số tiền, danh mục, ghi chú, ngày)
3. Lịch sử: danh sách giao dịch, filter theo tháng/danh mục
4. Ngân sách: thiết lập giới hạn cho từng danh mục
5. Báo cáo: biểu đồ tròn chi theo danh mục, biểu đồ cột theo tháng
```

**Bước 5 — Câu hỏi cần hỏi stakeholder:**
```
- Thu nhập có cần ghi lại không, hay chỉ chi tiêu?
- Nhiều tài khoản (tiền mặt + bank) hay gộp hết?
- Ngân sách đặt theo tuần, tháng hay tùy chọn?
- Chia sẻ với partner/gia đình không (multi-user)?
- Cần reminder định kỳ không?
```

---

### Ví dụ 2: "Hệ thống đăng ký khóa học online"

**Phân tích nhanh:**

| NOUN → Entity | VERB → Tính năng | STATE → Trạng thái |
|---------------|-----------------|-------------------|
| User (học viên, giảng viên) | Đăng ký khóa học | Đăng ký: pending → confirmed → completed |
| Course (khóa học) | Tạo/sửa khóa học | Khóa học: draft → published → archived |
| Lesson (bài học) | Xem bài giảng | Bài học: locked → available → completed |
| Enrollment (đăng ký) | Thanh toán | Payment: pending → paid → refunded |
| Certificate | Cấp chứng chỉ | — |

**Câu hỏi cần hỏi:**
```
- Học viên tự đăng ký hay cần admin duyệt?
- Khóa học có phí hay miễn phí?
- Video hay text hay cả hai?
- Có bài kiểm tra / quiz không?
- Chứng chỉ cấp tự động hay thủ công?
- Học viên có thể học lại sau khi hoàn thành?
```

---

## 8. Bẫy tư duy thường gặp và cách tránh

### Bẫy 1: Nghĩ theo UI trước, quên data

```
❌ Sai: "Tôi cần 1 bảng hiển thị đơn hàng với cột tên, email, tổng tiền"

✅ Đúng: "Đơn hàng cần lưu: order_id, customer_id, total, created_at...
          → Tên và email lấy từ bảng customers qua customer_id
          → UI bảng chỉ là cách hiển thị data đó"
```

### Bẫy 2: Quên edge case

Luôn hỏi thêm 3 câu sau mỗi happy path:
- "Nếu không có dữ liệu thì sao?" → empty state
- "Nếu có lỗi thì sao?" → error state
- "Nếu user làm sai thì sao?" → validation + error message

### Bẫy 3: Quên phân quyền

Với mọi tính năng, hỏi: "Ai được làm điều này?"

```
Xóa đơn hàng:
- User thường: không được xóa (chỉ hủy)
- Admin: được xóa nhưng cần log lại
- Super admin: được xóa vĩnh viễn
```

### Bẫy 4: Không nghĩ đến lịch sử / audit trail

```
Requirement: "Admin có thể thay đổi giá sản phẩm"

Câu hỏi cần thêm:
- Lưu lại lịch sử thay đổi giá không?
- Đơn hàng cũ dùng giá cũ hay giá mới?
- Ai thay đổi, lúc nào?
```

### Bẫy 5: Nghĩ tuyến tính, quên nghiệp vụ đồng thời

```
Scenario: 2 user cùng lúc mua sản phẩm chỉ còn 1 cái

❌ Không nghĩ đến: cả hai đặt thành công → tồn kho âm

✅ Cần hỏi: hệ thống xử lý concurrency như thế nào?
→ BE cần lock tồn kho khi đặt hàng
```

---

## 9. Luyện tập tư duy IT mỗi ngày

Không cần làm bài tập phức tạp. Mỗi lần dùng một app bất kỳ, hãy tự hỏi:

**Khi mở app Grab đặt xe:**
- Dữ liệu gì được lưu? (location, driver, customer, trip, payment)
- Các màn hình là gì? (home, confirm booking, tracking, rating)
- Trạng thái chuyến đi? (searching → found → picking up → in trip → completed)
- Khi driver hủy giữa chừng → hệ thống làm gì?

**Khi dùng Jira:**
- Tại sao ticket có status, priority, assignee, sprint?
- Quan hệ: Project → Epic → Story → Task là 1-N lồng nhau
- Comment và attachment lưu ở đâu? (không phải trong ticket chính)

**Khi đọc báo cáo kinh doanh:**
- Số liệu này lấy từ bảng nào?
- Filter "theo tháng" → database query như thế nào?
- Export Excel → BE query và generate file hay FE làm?

> **Thói quen quan trọng nhất**: Khi nghe một requirement, đừng vội viết xuống ngay. Hãy dừng lại 30 giây và tự hỏi: *"Noun là gì? Verb là gì? State là gì? Ai dùng? Edge case là gì?"*

---

## 10. Checklist tư duy khi nhận requirement

Dùng checklist này mỗi khi nhận một feature mới:

```
☐ ENTITIES: Liệt kê tất cả "thứ" cần lưu trong database
☐ ACTIONS: Liệt kê tất cả hành động (CRUD + business actions)
☐ STATES: Vẽ lifecycle của entity chính
☐ SCREENS: Liệt kê màn hình cần build
☐ ROLES: Ai được làm gì (phân quyền)
☐ FLOWS: Vẽ luồng chính từ màn hình đến màn hình
☐ EDGE CASES: Empty / Error / Loading / Concurrent
☐ NOTIFICATIONS: Ai được thông báo khi có sự kiện gì
☐ HISTORY: Có cần audit trail không
☐ OPEN QUESTIONS: Những gì chưa rõ cần hỏi stakeholder
```
