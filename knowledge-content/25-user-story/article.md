# User Story & Acceptance Criteria

## 1. User Story là gì?

**User Story** là cách mô tả yêu cầu phần mềm từ góc nhìn người dùng cuối, viết bằng ngôn ngữ tự nhiên, ngắn gọn và tập trung vào **giá trị** thay vì giải pháp kỹ thuật.

**Format chuẩn (Connextra):**

```
As a [loại người dùng],
I want [hành động/tính năng],
So that [lợi ích/giá trị nhận được].
```

**Ví dụ thực tế:**

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

## 2. INVEST — Tiêu chí của User Story tốt

| Chữ cái | Nghĩa | Câu hỏi kiểm tra |
|---------|-------|-----------------|
| **I** — Independent | Độc lập, không phụ thuộc story khác | Story này có thể dev/test riêng không? |
| **N** — Negotiable | Có thể thương lượng, không phải hợp đồng cứng | Detail có thể thay đổi khi cần? |
| **V** — Valuable | Mang lại giá trị cho user hoặc business | Nếu không có tính năng này, user có bị ảnh hưởng không? |
| **E** — Estimable | Ước lượng được | Dev có đủ thông tin để estimate không? |
| **S** — Small | Đủ nhỏ để hoàn thành trong 1 sprint | Story có thể done trong 1-5 ngày không? |
| **T** — Testable | Có thể kiểm thử được | Biết khi nào story được coi là "done" chưa? |

---

## 3. Acceptance Criteria (AC)

**Acceptance Criteria** là điều kiện cụ thể để một User Story được coi là hoàn thành. Mỗi story PHẢI có AC rõ ràng trước khi dev bắt đầu.

### Format Given-When-Then (BDD)

```
Given [điều kiện ban đầu / ngữ cảnh],
When [hành động của user],
Then [kết quả mong đợi].
```

**Ví dụ — Story: Đăng nhập:**

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

### Format Checklist (đơn giản hơn)

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

## 4. Các lỗi thường gặp khi viết User Story

### Lỗi 1: Story mô tả giải pháp thay vì nhu cầu

```
❌ As a user, I want a dropdown menu for date selection.
✅ As a user, I want to filter orders by date range so that I can find specific orders quickly.
```

### Lỗi 2: Story quá lớn (Epic)

```
❌ As a user, I want to manage my account.
✅ As a user, I want to change my password.
✅ As a user, I want to update my profile picture.
✅ As a user, I want to enable two-factor authentication.
```

### Lỗi 3: AC thiếu edge case

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

### Lỗi 4: AC mơ hồ

```
❌ Hệ thống phải load nhanh.
✅ Trang danh sách sản phẩm phải load xong trong vòng 3 giây ở kết nối 4G (20 Mbps).

❌ Hiển thị thông báo lỗi phù hợp.
✅ Khi API trả về lỗi 500, hiển thị: "Có lỗi xảy ra, vui lòng thử lại. Nếu vấn đề tiếp tục, liên hệ support@example.com"
```

### Lỗi 5: Thiếu trạng thái UI

```
❌ Chỉ mô tả happy path.

✅ Phải có đầy đủ 4 trạng thái:
Loading state:  Hiển thị skeleton loader khi đang gọi API
Success state:  Hiển thị danh sách sản phẩm
Error state:    Hiển thị "Không thể tải dữ liệu" + nút "Thử lại"
Empty state:    Hiển thị "Chưa có sản phẩm nào" + link "Tạo sản phẩm đầu tiên"
```

---

## 5. Story Splitting — Chia nhỏ User Story

Khi story quá lớn, cần split. Đây là các kỹ thuật phổ biến:

### Theo workflow steps

```
Epic: User có thể mua hàng online

→ Story 1: User có thể thêm sản phẩm vào giỏ hàng
→ Story 2: User có thể xem và chỉnh sửa giỏ hàng
→ Story 3: User có thể nhập thông tin giao hàng
→ Story 4: User có thể chọn phương thức thanh toán
→ Story 5: User có thể xác nhận và đặt hàng
→ Story 6: User nhận email xác nhận đơn hàng
```

### Theo business rules

```
Epic: User có thể đặt hàng

→ Story 1: User có thể đặt hàng (thanh toán khi nhận — COD)
→ Story 2: User có thể đặt hàng bằng thẻ tín dụng/ghi nợ
→ Story 3: User có thể đặt hàng bằng ví điện tử (Momo, ZaloPay)
```

### Theo happy path trước

```
Story 1 (MVP): User có thể đăng ký tài khoản bằng email/password
Story 2: User có thể đăng ký bằng Google
Story 3: User có thể đăng ký bằng Facebook
```

### Theo data variations

```
Story 1: Admin có thể xem báo cáo doanh thu theo ngày
Story 2: Admin có thể xem báo cáo doanh thu theo tuần/tháng/năm
Story 3: Admin có thể export báo cáo ra Excel/PDF
```

---

## 6. Definition of Done (DoD)

**DoD** là danh sách điều kiện áp dụng cho **mọi** story, không cần ghi vào từng story:

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
- **AC**: điều kiện riêng của từng story — "khi nào tính năng này xong?"
- **DoD**: điều kiện chung của team — "khi nào story được coi là shipped?"

---

## 7. Story Points và Estimation

**Story Points** đo độ phức tạp (không phải thời gian) của một story:

| Points | Ý nghĩa | Ví dụ |
|--------|---------|-------|
| 1 | Rất đơn giản | Thay đổi màu nút |
| 2 | Đơn giản | Thêm validation cho form |
| 3 | Trung bình | CRUD cơ bản |
| 5 | Phức tạp | Tích hợp payment gateway |
| 8 | Rất phức tạp | Cần research |
| 13 | Quá lớn | Cần split |

**Planning Poker:**
- Team tự estimate đồng thời (không bị ảnh hưởng bởi người khác)
- Nếu chênh lệch lớn → thảo luận để hiểu rõ story hơn

**Lưu ý cho BA:**
- BA KHÔNG estimate story points — đó là việc của dev/QA
- BA cần cung cấp đủ thông tin để team có thể estimate chính xác
- Story point lớn thường = AC chưa rõ → cần refinement

---

## 8. User Story Mapping

**Story Map** giúp nhìn toàn cảnh journey của user và ưu tiên MVP:

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

## 9. Ví dụ đầy đủ — User Story cho BA

### Context
Hệ thống quản lý dự án nội bộ. Feature: thông báo deadline.

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

### Out of Scope (quan trọng)
- Không bao gồm nhắc nhở cho task của người khác (scope của manager view)
- Không có notification qua SMS trong sprint này
- Không thay đổi timezone (mặc định UTC+7)
