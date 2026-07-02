# IT Thinking — From Requirements to Systems

## 1. What is IT thinking and why do you need it?

When a user says: *"I want to manage orders"*, a BA without IT thinking will write down exactly that sentence and hand it to the dev. A BA with IT thinking, on the other hand, will immediately picture in their head:

- **Screens**: order list, order detail, create-new form
- **Data**: what does an order contain? customer, product, quantity, price, status
- **Flow**: create → confirm → ship → complete / cancel
- **Questions**: who creates the order? who approves it? how does the status change?

IT thinking is not about knowing how to code — it's about **knowing how to ask the right questions** and **being able to picture the system** from business language.

---

## 2. The NOUN-VERB-STATE framework — A basic thinking tool

Whenever you hear any requirement, analyze it along 3 dimensions:

### NOUN — Nouns = Data to store

Every important noun in a requirement is an **entity** in the database.

```
Requirement: "Khách hàng đặt đơn hàng gồm nhiều sản phẩm,
              mỗi sản phẩm thuộc một danh mục."

Danh từ → Entity:
- Khách hàng (Customer)
- Đơn hàng (Order)
- Sản phẩm (Product)
- Danh mục (Category)
```

### VERB — Verbs = Features / APIs to build

Every verb in a requirement is an **action** the system performs.

```
- "đặt" → tạo đơn hàng (POST /orders)
- "xem" → hiển thị danh sách / chi tiết (GET /orders)
- "hủy" → cập nhật trạng thái đơn (PUT /orders/:id)
- "thanh toán" → tích hợp payment
- "thông báo" → gửi email/notification
```

### STATE — State = The entity's lifecycle

Every important entity has a lifecycle with a set of states:

```
Đơn hàng:
[Mới tạo] → [Đã xác nhận] → [Đang giao] → [Hoàn thành]
                   ↓                              ↑
              [Đã hủy]                    [Giao thất bại]
```

> **Exercise**: When you hear a requirement, try underlining every noun and every verb. Nouns = database tables. Verbs = APIs / features.

---

## 3. How to picture the UI from a requirement

### Step 1: Find "who does what" → screens

Every "who does what" is a screen or a feature:

```
Requirement: "Admin quản lý sản phẩm. Khách hàng xem và mua sản phẩm."

→ 2 loại user = 2 góc nhìn khác nhau:

Admin:                          Khách hàng:
- Trang quản lý sản phẩm        - Trang danh sách sản phẩm
- Form thêm/sửa sản phẩm        - Trang chi tiết sản phẩm
- Trang quản lý đơn hàng        - Giỏ hàng
                                - Checkout
```

### Step 2: Ask "What does the user want to do here?"

For each screen, ask:
- **View what?** → this is the data that needs to be displayed
- **Do what?** → this is the action (button, form, link)
- **Go where?** → this is the navigation

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

### Step 3: Draw a screen flow diagram (it doesn't need to be pretty)

Just draw boxes and arrows:

```
[Landing] → [Đăng nhập] → [Dashboard]
                               ↓
                    [Danh sách SP] → [Chi tiết SP] → [Thêm giỏ]
                                                          ↓
                                                    [Giỏ hàng] → [Checkout] → [Xác nhận]
```

This flow helps you:
- Spot missing screens
- Identify the entry point and exit point
- Know which screens need authentication

---

## 4. How to picture the Database from a requirement

### Rule 1: Every important "thing" = one table

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

### Rule 2: What fields does each table need?

For each entity, ask: **"What do I need to know about it?"**

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

### Rule 3: Relationships between tables

3 common relationship types:

**1-N (One - Many):** the most common

```
Một Project có nhiều Tasks
→ Bảng tasks có cột project_id

Một User có nhiều Tasks được giao
→ Bảng tasks có cột assigned_to (= user_id)
```

**N-N (Many - Many):** needs a junction table

```
Một Task có nhiều Tags
Một Tag được gán cho nhiều Tasks
→ Cần bảng trung gian: task_tags (task_id, tag_id)

Một User tham gia nhiều Projects
Một Project có nhiều Users
→ Cần bảng: project_members (project_id, user_id, role)
```

**1-1 (One - One):** less common

```
Một User có một Profile chi tiết
→ Bảng user_profiles có cột user_id (unique)
```

### A real example: From requirement → Data model

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

## 5. How to picture the processing flow (Business Flow)

### The tool: "When... then..." (Event → Action)

For each important action, ask:

> **"When X happens, what does the system need to do?"**

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

### State Machine — A tool for thinking about state

Every important entity has a lifecycle. Draw it:

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

For each state transition, ask:
- **Who** has the right to trigger it?
- **What conditions** must be met to transition?
- **What does the system do** when it transitions?

---

## 6. Applying the 5W1H questions to IT

Instead of asking vague questions, apply 5W1H to fully draw out a requirement:

### WHO — Who?
- Who uses this feature? (user role)
- Who has permission to view / edit / delete?
- Who gets notified when an event occurs?

### WHAT — What?
- What data needs to be displayed?
- What data needs to be stored?
- Which fields are required, which are not?

### WHEN — When?
- When is this feature used?
- What is the trigger (manual / automatic / scheduled)?
- After how long does the data expire?

### WHERE — Where?
- Which screen displays it?
- Mobile, desktop, or both?
- Where is the data stored (local / cloud / both)?

### WHY — Why?
- What is the business goal?
- If this feature didn't exist, what would happen?
- Is this a must-have or a nice-to-have?

### HOW — How?
- How does the user perform the action?
- How does the system handle errors?
- What performance level does it need to reach?

---

## 7. Practice: Read a requirement → Think in systems

### Example 1: "A personal expense management app"

**Step 1 — NOUN → Entities:**
```
- Người dùng (User)
- Giao dịch (Transaction)
- Danh mục chi tiêu (Category): ăn uống, di chuyển, giải trí...
- Ngân sách (Budget): giới hạn chi tiêu mỗi tháng theo danh mục
```

**Step 2 — VERB → Features:**
```
- Ghi lại → thêm transaction mới
- Xem → danh sách / báo cáo / biểu đồ
- Đặt → thiết lập ngân sách
- Cảnh báo → thông báo khi gần hết budget
- Xuất → export báo cáo PDF/CSV
```

**Step 3 — STATE → No complex lifecycle (a transaction has no status)**

**Step 4 — Screens:**
```
1. Dashboard: tổng quan tháng này (chi bao nhiêu, còn bao nhiêu)
2. Thêm giao dịch: form nhanh (số tiền, danh mục, ghi chú, ngày)
3. Lịch sử: danh sách giao dịch, filter theo tháng/danh mục
4. Ngân sách: thiết lập giới hạn cho từng danh mục
5. Báo cáo: biểu đồ tròn chi theo danh mục, biểu đồ cột theo tháng
```

**Step 5 — Questions to ask the stakeholder:**
```
- Thu nhập có cần ghi lại không, hay chỉ chi tiêu?
- Nhiều tài khoản (tiền mặt + bank) hay gộp hết?
- Ngân sách đặt theo tuần, tháng hay tùy chọn?
- Chia sẻ với partner/gia đình không (multi-user)?
- Cần reminder định kỳ không?
```

---

### Example 2: "An online course registration system"

**Quick analysis:**

| NOUN → Entity | VERB → Feature | STATE → State |
|---------------|-----------------|-------------------|
| User (học viên, giảng viên) | Đăng ký khóa học | Đăng ký: pending → confirmed → completed |
| Course (khóa học) | Tạo/sửa khóa học | Khóa học: draft → published → archived |
| Lesson (bài học) | Xem bài giảng | Bài học: locked → available → completed |
| Enrollment (đăng ký) | Thanh toán | Payment: pending → paid → refunded |
| Certificate | Cấp chứng chỉ | — |

**Questions to ask:**
```
- Học viên tự đăng ký hay cần admin duyệt?
- Khóa học có phí hay miễn phí?
- Video hay text hay cả hai?
- Có bài kiểm tra / quiz không?
- Chứng chỉ cấp tự động hay thủ công?
- Học viên có thể học lại sau khi hoàn thành?
```

---

## 8. Common thinking traps and how to avoid them

### Trap 1: Thinking in terms of UI first, forgetting the data

```
❌ Sai: "Tôi cần 1 bảng hiển thị đơn hàng với cột tên, email, tổng tiền"

✅ Đúng: "Đơn hàng cần lưu: order_id, customer_id, total, created_at...
          → Tên và email lấy từ bảng customers qua customer_id
          → UI bảng chỉ là cách hiển thị data đó"
```

### Trap 2: Forgetting edge cases

Always ask these 3 extra questions after every happy path:
- "What if there's no data?" → empty state
- "What if there's an error?" → error state
- "What if the user does something wrong?" → validation + error message

### Trap 3: Forgetting authorization

For every feature, ask: "Who is allowed to do this?"

```
Xóa đơn hàng:
- User thường: không được xóa (chỉ hủy)
- Admin: được xóa nhưng cần log lại
- Super admin: được xóa vĩnh viễn
```

### Trap 4: Not thinking about history / audit trail

```
Requirement: "Admin có thể thay đổi giá sản phẩm"

Câu hỏi cần thêm:
- Lưu lại lịch sử thay đổi giá không?
- Đơn hàng cũ dùng giá cũ hay giá mới?
- Ai thay đổi, lúc nào?
```

### Trap 5: Thinking linearly, forgetting concurrent operations

```
Scenario: 2 user cùng lúc mua sản phẩm chỉ còn 1 cái

❌ Không nghĩ đến: cả hai đặt thành công → tồn kho âm

✅ Cần hỏi: hệ thống xử lý concurrency như thế nào?
→ BE cần lock tồn kho khi đặt hàng
```

---

## 9. Practicing IT thinking every day

You don't need complex exercises. Every time you use any app, ask yourself:

**When opening the Grab ride-hailing app:**
- What data gets stored? (location, driver, customer, trip, payment)
- What are the screens? (home, confirm booking, tracking, rating)
- What are the states of the trip? (searching → found → picking up → in trip → completed)
- When the driver cancels mid-way → what does the system do?

**When using Jira:**
- Why does a ticket have status, priority, assignee, sprint?
- Relationship: Project → Epic → Story → Task is a nested 1-N
- Where are comments and attachments stored? (not inside the main ticket)

**When reading a business report:**
- Which table does this figure come from?
- Filter "by month" → what does the database query look like?
- Export to Excel → does the BE query and generate the file, or does the FE do it?

> **The most important habit**: When you hear a requirement, don't rush to write it down. Pause for 30 seconds and ask yourself: *"What's the noun? What's the verb? What's the state? Who uses it? What are the edge cases?"*

---

## 10. A thinking checklist for receiving requirements

Use this checklist every time you receive a new feature:

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
