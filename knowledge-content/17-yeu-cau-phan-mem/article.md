# Yêu cầu phần mềm

## 1. Yêu cầu phần mềm là gì?

**Yêu cầu phần mềm (Software Requirements)** là mô tả những gì hệ thống cần làm và các ràng buộc nó phải đáp ứng.

Thu thập yêu cầu tốt → build đúng thứ cần build.
Thu thập yêu cầu kém → tốn công sửa đi sửa lại.

---

## 2. Functional vs Non-functional Requirements

### Functional Requirements (FR) — Yêu cầu chức năng
Mô tả hệ thống **làm gì** — hành vi cụ thể, tính năng.

**Ví dụ:**
- Người dùng có thể đăng ký tài khoản bằng email.
- Hệ thống gửi email xác nhận sau khi đặt hàng.
- Admin có thể xem danh sách tất cả đơn hàng.

### Non-functional Requirements (NFR) — Yêu cầu phi chức năng
Mô tả hệ thống **hoạt động như thế nào** — chất lượng, ràng buộc.

| Loại NFR | Ví dụ |
|----------|-------|
| **Performance** | Trang load trong < 2 giây |
| **Security** | Mật khẩu phải hash bcrypt |
| **Availability** | Uptime 99.9% (downtime < 8.7h/năm) |
| **Scalability** | Hỗ trợ 10,000 concurrent users |
| **Usability** | Người dùng mới tự đặt hàng được mà không cần hướng dẫn |
| **Maintainability** | Code coverage test > 80% |
| **Compliance** | Tuân thủ GDPR, PCI DSS |

---

## 3. User Story

User Story là cách diễn đạt yêu cầu **từ góc nhìn người dùng**, theo format:

```
Là [ai] (role),
Tôi muốn [làm gì] (action),
Để [đạt được gì] (benefit/value).
```

**Ví dụ:**
> Là *khách hàng mua sắm online*,
> Tôi muốn *lọc sản phẩm theo giá và danh mục*,
> Để *tìm nhanh hơn sản phẩm phù hợp với nhu cầu*.

**Đặc điểm User Story tốt (INVEST):**
- **I**ndependent: độc lập với story khác.
- **N**egotiable: có thể thảo luận, điều chỉnh.
- **V**aluable: có giá trị với người dùng.
- **E**stimable: ước tính được.
- **S**mall: đủ nhỏ để complete trong 1 sprint.
- **T**estable: có thể kiểm tra được.

---

## 4. Acceptance Criteria

**Acceptance Criteria (AC)** là tiêu chí xác định khi nào user story được coi là **hoàn thành và đúng**. Đây là "hợp đồng" giữa PO và Dev Team.

**Format Given-When-Then:**
```
Given [ngữ cảnh ban đầu]
When [hành động xảy ra]
Then [kết quả mong đợi]
```

**Ví dụ** (cho story lọc sản phẩm):
```
Given người dùng đang ở trang danh sách sản phẩm
When chọn giá từ 100.000 - 500.000 VNĐ và danh mục "Điện tử"
Then chỉ hiển thị sản phẩm thuộc danh mục Điện tử có giá trong khoảng đó

Given không có sản phẩm nào thỏa điều kiện lọc
When áp dụng filter
Then hiển thị thông báo "Không tìm thấy sản phẩm phù hợp"
```

---

## 5. Kỹ thuật Thu thập Yêu cầu

| Kỹ thuật | Phù hợp |
|---------|---------|
| **Interview** | Hiểu sâu một stakeholder cụ thể |
| **Workshop** | Nhiều stakeholder, align cùng lúc |
| **Survey/Questionnaire** | Nhiều người, câu hỏi đơn giản |
| **Observation (Job shadowing)** | Hiểu quy trình thực tế người dùng |
| **Prototyping** | Validate idea sớm, nhận feedback visual |
| **Document analysis** | Hệ thống legacy, quy trình cũ |

---

## 6. Các loại yêu cầu khác

- **Business Requirements**: mục tiêu kinh doanh cấp cao.
- **User Requirements**: nhu cầu người dùng cuối.
- **System Requirements**: đặc tả kỹ thuật chi tiết.
- **Transition Requirements**: yêu cầu cho việc chuyển đổi từ hệ thống cũ.

---

## 7. Lỗi phổ biến khi viết yêu cầu

- ❌ **Mơ hồ**: "Hệ thống phải nhanh" → ✅ "Trang tải < 2 giây với 95th percentile".
- ❌ **Không thể kiểm tra**: "Dễ sử dụng" → ✅ "Người dùng mới đặt hàng thành công mà không cần trợ giúp".
- ❌ **Thiếu AC**: user story không có acceptance criteria → dev không biết "xong" là gì.
- ❌ **Thiếu edge case**: chỉ happy path, quên error case.

---

## 8. Tóm tắt

- **FR**: hệ thống làm gì.
- **NFR**: hệ thống chạy như thế nào (performance, security...).
- **User Story**: yêu cầu từ góc nhìn người dùng, format "As a... I want... So that...".
- **Acceptance Criteria**: tiêu chí "done", format Given-When-Then.
- Yêu cầu tốt = cụ thể, có thể kiểm tra, có AC rõ ràng.
