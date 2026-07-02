# User Story & Acceptance Criteria

## 1. What is a User Story?

A **User Story** is a way of describing a software requirement from the end user's point of view, written in natural language, kept short, and focused on **value** rather than a technical solution.

**Standard format (Connextra):**

```
As a [loại người dùng],
I want [hành động/tính năng],
So that [lợi ích/giá trị nhận được].
```

**Real-world examples:**

```
As a registered customer,
I want to save items to a wishlist,
So that I can purchase them later when they are on sale.
```

```
As a store admin,
I want to export order data to CSV,
So that I can analyze sales performance in Excel.
```

---

## 2. INVEST — Criteria for a good User Story

| Letter | Meaning | Check question |
|---------|-------|-----------------|
| **I** — Independent | Independent, not dependent on other stories | Can this story be developed/tested on its own? |
| **N** — Negotiable | Negotiable, not a rigid contract | Can the details change when needed? |
| **V** — Valuable | Delivers value to the user or business | If this feature didn't exist, would the user be affected? |
| **E** — Estimable | Can be estimated | Does the dev have enough information to estimate it? |
| **S** — Small | Small enough to complete in 1 sprint | Can the story be done in 1–5 days? |
| **T** — Testable | Can be tested | Do we know when the story is considered "done"? |

---

## 3. Acceptance Criteria (AC)

**Acceptance Criteria** are the specific conditions for a User Story to be considered complete. Every story MUST have clear AC before the dev starts.

### Given-When-Then format (BDD)

```
Given [điều kiện ban đầu / ngữ cảnh],
When [hành động của user],
Then [kết quả mong đợi].
```

**Example — Story: Login:**

```
Given user đang ở trang Login và chưa đăng nhập,
When user nhập email/password đúng và click "Đăng nhập",
Then hệ thống redirect về trang Dashboard
  And hiển thị thông báo "Đăng nhập thành công"
  And session token được lưu trong cookie.

Given user đang ở trang Login,
When user nhập password sai 3 lần liên tiếp,
Then tài khoản bị khóa tạm thời 15 phút
  And hiển thị thông báo "Tài khoản bị tạm khóa, thử lại sau 15 phút".

Given user đang ở trang Login,
When user nhập email không tồn tại,
Then hiển thị thông báo "Email hoặc mật khẩu không chính xác"
  And KHÔNG tiết lộ email có tồn tại hay không (bảo mật).
```

### Checklist format (simpler)

```
Story: User có thể thay đổi ảnh đại diện

AC:
□ User có thể upload ảnh từ thiết bị (định dạng: JPG, PNG, WEBP)
□ File tối đa 5MB; nếu vượt, hiển thị lỗi "Ảnh không được vượt quá 5MB"
□ Ảnh được crop về tỷ lệ 1:1 trước khi lưu
□ Hiển thị preview trước khi xác nhận
□ Sau khi lưu, ảnh mới hiển thị ngay lập tức trên avatar
□ Trên mobile, có thể chụp ảnh trực tiếp bằng camera
```

---

## 4. Common mistakes when writing User Stories

### Mistake 1: The story describes a solution instead of a need

```
❌ As a user, I want a dropdown menu for date selection.
✅ As a user, I want to filter orders by date range so that I can find specific orders quickly.
```

### Mistake 2: The story is too big (an Epic)

```
❌ As a user, I want to manage my account.
✅ As a user, I want to change my password.
✅ As a user, I want to update my profile picture.
✅ As a user, I want to enable two-factor authentication.
```

### Mistake 3: The AC misses edge cases

```
Story: User thêm sản phẩm vào giỏ hàng

❌ AC thiếu:
□ User click "Thêm vào giỏ" → sản phẩm xuất hiện trong giỏ.

✅ AC đầy đủ:
□ User click "Thêm vào giỏ" → số lượng trong giỏ tăng lên 1
□ Nếu sản phẩm đã có trong giỏ, số lượng tăng thêm 1 (không tạo item mới)
□ Nếu sản phẩm hết hàng, nút bị disable và hiển thị "Hết hàng"
□ Nếu số lượng thêm vượt tồn kho, hiển thị "Chỉ còn X sản phẩm"
□ Giỏ hàng được lưu khi user logout và restore khi login lại
```

### Mistake 4: The AC is vague

```
❌ Hệ thống phải load nhanh.
✅ Trang danh sách sản phẩm phải load xong trong vòng 3 giây ở kết nối 4G (20 Mbps).

❌ Hiển thị thông báo lỗi phù hợp.
✅ Khi API trả về lỗi 500, hiển thị: "Có lỗi xảy ra, vui lòng thử lại. Nếu vấn đề tiếp tục, liên hệ support@example.com"
```

### Mistake 5: Missing UI states

```
❌ Chỉ mô tả happy path.

✅ Phải có đầy đủ 4 trạng thái:
Loading state:  Hiển thị skeleton loader khi đang gọi API
Success state:  Hiển thị danh sách sản phẩm
Error state:    Hiển thị "Không thể tải dữ liệu" + nút "Thử lại"
Empty state:    Hiển thị "Chưa có sản phẩm nào" + link "Tạo sản phẩm đầu tiên"
```

---

## 5. Story Splitting — Breaking down a User Story

When a story is too big, it needs to be split. Here are the common techniques:

### By workflow steps

```
Epic: User có thể mua hàng online

→ Story 1: User có thể thêm sản phẩm vào giỏ hàng
→ Story 2: User có thể xem và chỉnh sửa giỏ hàng
→ Story 3: User có thể nhập thông tin giao hàng
→ Story 4: User có thể chọn phương thức thanh toán
→ Story 5: User có thể xác nhận và đặt hàng
→ Story 6: User nhận email xác nhận đơn hàng
```

### By business rules

```
Epic: User có thể đặt hàng

→ Story 1: User có thể đặt hàng (thanh toán khi nhận — COD)
→ Story 2: User có thể đặt hàng bằng thẻ tín dụng/ghi nợ
→ Story 3: User có thể đặt hàng bằng ví điện tử (Momo, ZaloPay)
```

### By happy path first

```
Story 1 (MVP): User có thể đăng ký tài khoản bằng email/password
Story 2: User có thể đăng ký bằng Google
Story 3: User có thể đăng ký bằng Facebook
```

### By data variations

```
Story 1: Admin có thể xem báo cáo doanh thu theo ngày
Story 2: Admin có thể xem báo cáo doanh thu theo tuần/tháng/năm
Story 3: Admin có thể export báo cáo ra Excel/PDF
```

---

## 6. Definition of Done (DoD)

The **DoD** is a list of conditions that apply to **every** story, without needing to be written into each one:

```
Definition of Done — áp dụng toàn team:
□ Code đã được code review (ít nhất 1 reviewer approve)
□ Unit test được viết và pass
□ Không có critical bug mới
□ Deploy thành công lên môi trường Staging
□ BA/QA đã verify trên Staging
□ Documentation được cập nhật (nếu cần)
□ Không có security vulnerability mới
```

**AC** (Acceptance Criteria) vs **DoD:**
- **AC**: conditions specific to each story — "when is this feature done?"
- **DoD**: the team's shared conditions — "when is a story considered shipped?"

---

## 7. Story Points and Estimation

**Story Points** measure the complexity (not the time) of a story:

| Points | Meaning | Example |
|--------|---------|-------|
| 1 | Very simple | Change a button color |
| 2 | Simple | Add validation to a form |
| 3 | Medium | Basic CRUD |
| 5 | Complex | Integrate a payment gateway |
| 8 | Very complex | Requires research |
| 13 | Too big | Needs splitting |

**Planning Poker:**
- The team estimates simultaneously (without being influenced by others)
- If there is a large discrepancy → discuss to understand the story better

**Notes for the BA:**
- The BA does NOT estimate story points — that is the dev/QA's job
- The BA needs to provide enough information for the team to estimate accurately
- A large story point count often means = unclear AC → needs refinement

---

## 8. User Story Mapping

A **Story Map** helps you see the whole user journey and prioritize the MVP:

```
USER JOURNEY:      [Tìm SP] → [Xem chi tiết] → [Thêm giỏ] → [Checkout] → [Theo dõi]

BACKBONE (Epic):   [Browse]   [Product Detail]  [Cart]       [Order]      [Tracking]

WALKING SKELETON:  Danh sách  Xem ảnh + giá     Thêm vào     COD only     Email confirm
(MVP Sprint 1)     sản phẩm   sản phẩm          giỏ hàng

Sprint 2:          Filter     Mô tả đầy đủ      Edit số lượng Thẻ TN/TD   SMS notif
                   theo danh  + Reviews         + Xóa khỏi   + MoMo       + Track status
                   mục                          giỏ
```

---

## 9. A complete example — User Story for a BA

### Context
An internal project management system. Feature: deadline notifications.

### User Story

```
Title: US-042 — Nhắc nhở task gần deadline

As a project member,
I want to receive notifications when my assigned tasks are approaching their deadline,
So that I can prioritize my work and avoid missing deadlines.
```

### Acceptance Criteria

```
Scenario 1: Nhắc nhở 3 ngày trước deadline
Given user có task được assign với deadline trong 3 ngày,
When mỗi ngày vào lúc 8:00 sáng (giờ Việt Nam),
Then user nhận in-app notification: "Task [Tên task] sẽ đến hạn vào [Ngày]. Còn [X] ngày."
  And nếu user bật email notification, gửi thêm email cùng nội dung.

Scenario 2: Nhắc nhở ngày deadline
Given task chưa được đánh dấu Done và đến ngày deadline,
When lúc 8:00 sáng ngày deadline,
Then user nhận notification: "Hôm nay là deadline của task [Tên task]."
  And task được highlight màu đỏ trong task list.

Scenario 3: Task đã Done
Given task đã được đánh dấu Done trước deadline,
When đến thời điểm gửi nhắc nhở,
Then KHÔNG gửi notification.

Scenario 4: Tắt notification
Given user đã tắt "Deadline reminder" trong Settings,
When task đến deadline,
Then KHÔNG gửi bất kỳ notification nào.
```

### Out of Scope (important)
- Does not include reminders for other people's tasks (that is in scope for the manager view)
- No SMS notifications in this sprint
- No timezone changes (default UTC+7)
