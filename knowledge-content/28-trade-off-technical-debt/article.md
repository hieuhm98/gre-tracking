# Tư Duy Trade-off & Technical Debt

## 1. Tại sao dev hay nói "không đơn giản vậy"?

Đây là câu mà BA nghe nhiều nhất — và thường không hiểu tại sao.

Bạn nói: *"Thêm cái filter này thôi mà, nhanh thôi."*
Dev nói: *"Không đơn giản vậy."*

Thực ra dev không phải đang lười hay phóng đại. Họ đang nhìn thấy những thứ mà BA chưa thấy:

- Code hiện tại được viết theo một cách, thêm feature mới có thể phá vỡ cấu trúc đó
- Feature "nhỏ" này cần thay đổi 5 chỗ khác nhau vì code bị coupled
- Có một shortcut trước đó đã được làm, và bây giờ mọi thứ mới đều phải đi vòng quanh nó
- Nếu làm đúng cách thì mất 3 ngày, nếu làm tắt thì mất 2 giờ nhưng sẽ nợ lại

Tất cả những thứ đó gọi là **Technical Debt** — và hiểu nó là một trong những kỹ năng quan trọng nhất của BA.

---

## 2. Technical Debt là gì?

**Technical Debt** (nợ kỹ thuật) là phép ẩn dụ về nợ tài chính: khi bạn vay tiền để làm điều gì đó nhanh hơn, bạn sẽ phải trả lãi sau này.

Trong phần mềm:
- **Vay**: làm tắt, bỏ qua best practice, hardcode, không viết test, skip refactor
- **Lãi**: mỗi lần sau đó muốn thay đổi code đó, mất nhiều thời gian hơn
- **Vỡ nợ**: hệ thống trở nên quá khó maintain, bug nhiều, dev không dám sửa gì

```
Ví dụ thực tế:

Sprint 1: Hardcode danh sách tỉnh thành trong code (thay vì lưu DB)
  → Tiết kiệm 2 ngày

Sprint 4: Cần thêm quận/huyện, cần filter theo vùng miền
  → Phải refactor lại toàn bộ, mất 5 ngày
  → Lãi: 3 ngày extra, cộng thêm risk break tính năng cũ
```

**Technical debt không phải lúc nào cũng xấu.** Đôi khi vay có chủ ý là đúng. Vấn đề là khi vay mà không biết mình đang vay.

---

## 3. Các loại Trade-off phổ biến

### Trade-off 1: Tốc độ vs Chất lượng

```
Scenario: Sprint chỉ còn 2 ngày, feature search cần thêm

Option A — Làm đúng (5 ngày):
  + Full-text search, có index, support nhiều filter
  + Scalable khi user tăng
  - Không kịp sprint

Option B — Làm tạm (2 ngày):
  + Kịp demo cho stakeholder
  + Validate được requirement trước khi đầu tư nhiều
  - Search chậm khi data lớn
  - Cần refactor sau khi confirm business value
```

**Khi nào Option B đúng:**
- Đây là MVP, chưa biết feature có được dùng không
- User base còn nhỏ (<1000 người), performance chưa là vấn đề
- Stakeholder cần thấy để confirm direction

**Khi nào Option B sai:**
- Đây là core feature, chắc chắn cần
- Data đã lớn, performance sẽ là vấn đề ngay
- Team đã có nhiều debt, thêm debt nữa là nguy hiểm

---

### Trade-off 2: Generalization vs Simplicity

```
Scenario: Cần build form đăng ký sự kiện

Option A — Generic (mọi loại sự kiện):
  + Dùng lại được cho nhiều loại sự kiện tương lai
  + Admin tự cấu hình form
  - Phức tạp hơn nhiều, mất 3 tuần
  - Nhiều edge case cần handle

Option B — Specific (chỉ cho loại sự kiện hiện tại):
  + Đơn giản, mất 3 ngày
  + Dễ test, ít bug
  - Nếu cần thêm loại sự kiện mới, phải làm lại
```

**Nguyên tắc YAGNI** (You Aren't Gonna Need It):
> Đừng build cái bạn *nghĩ* sẽ cần. Build cái bạn *biết chắc* cần bây giờ.

BA hay mắc lỗi này: *"Sau này có thể cần nên làm generic từ đầu đi."*
→ Đây thường là over-engineering, làm tăng complexity mà không có giá trị ngay.

---

### Trade-off 3: Consistency vs Flexibility

```
Scenario: Hệ thống có 10 màn hình, mỗi màn hình filter khác nhau

Option A — Consistent (cùng 1 cách filter):
  + UX nhất quán, user học 1 lần dùng được hết
  + Code reuse, maintain dễ
  - Một số màn hình bị hạn chế về filter

Option B — Flexible (mỗi màn 1 kiểu):
  + Mỗi màn hình tối ưu theo nhu cầu riêng
  - UX không nhất quán
  - Code trùng lặp, 10 chỗ cần maintain
```

---

### Trade-off 4: Build vs Buy vs Integrate

```
Scenario: Cần tính năng gửi email

Option A — Build: tự viết email server
  Thời gian: 4 tuần
  Maintenance: cao (deliverability, bounce handling, spam filters...)
  → Gần như không bao giờ đúng

Option B — Buy/SaaS: dùng SendGrid, Mailchimp
  Thời gian: 2 ngày tích hợp
  Chi phí: $20-200/tháng
  → Đúng cho 95% trường hợp

Option C — Integrate: dùng email server của công ty
  Phụ thuộc vào IT/infra team
  Có thể có giới hạn volume
  → Đúng nếu compliance yêu cầu
```

**BA cần hỏi khi có tích hợp bên thứ ba:**
- Chi phí là bao nhiêu? Ai approve budget?
- Có SLA (uptime guarantee) không?
- Nếu service bên thứ ba down, hệ thống mình bị ảnh hưởng ra sao?
- Data có được gửi ra ngoài không? Có vấn đề gì về compliance?

---

## 4. MVP Mindset — Làm đủ để học, không làm đủ để hoàn hảo

**MVP** (Minimum Viable Product) không có nghĩa là làm xấu. Nghĩa là làm *đủ nhỏ* để:
1. Validate được assumption quan trọng nhất
2. Ship được cho user thật
3. Thu thập feedback trước khi đầu tư thêm

```
Bài toán: Build hệ thống booking lịch hẹn

MVP sai (quá ít):
  Chỉ là landing page thu email
  → Không validate được gì về product

MVP đúng:
  - Booking thủ công qua form đơn giản
  - Email xác nhận tự động
  - Admin xem lịch qua Google Calendar (không cần build calendar)
  → Validate: khách có đặt không? Loại lịch nào phổ biến?

Full product (sau khi validate):
  - Calendar tự build
  - Quản lý bác sĩ/nhân viên
  - Thanh toán online
  - App mobile
```

**Câu hỏi MVP BA nên hỏi stakeholder:**
> *"Assumption quan trọng nhất chúng ta cần validate là gì? Feature nào nhỏ nhất giúp chúng ta học được điều đó?"*

---

## 5. Khi nào shortcut hợp lý, khi nào không?

### Shortcut HỢP LÝ khi:

| Điều kiện | Ví dụ |
|-----------|-------|
| Validate trước khi đầu tư | Hardcode 5 tỉnh thành để test UX trước khi build API đầy đủ |
| User base còn nhỏ | 100 user: không cần cache, không cần queue |
| Feature có thể bị thay đổi hoặc xóa | Thử nghiệm A/B test feature |
| Deadline cứng, business impact cao | Demo cho investor, không có thời gian |
| Team biết mình đang vay và có kế hoạch trả | Ghi vào backlog, sprint sau refactor |

### Shortcut KHÔNG hợp LÝ khi:

| Điều kiện | Ví dụ |
|-----------|-------|
| Security liên quan | Lưu password dạng plaintext "tạm thời" |
| Data integrity | Bỏ qua validation vì "user mình tin tưởng" |
| Core feature, chắc chắn cần scale | Không index database cho tính năng search chính |
| Team đã có nhiều debt | Thêm debt lên đống debt cũ = compound interest |
| Không ai theo dõi và trả nợ | Shortcut "tạm thời" tồn tại 3 năm |

---

## 6. Cách BA nhận biết team đang có Technical Debt cao

Đây là những dấu hiệu:

**Dấu hiệu từ dev:**
- *"Phần này cũ lắm, không ai dám đụng vào"*
- *"Cần fix bug nhỏ này nhưng sợ break chỗ khác"*
- *"Estimate cao vì cần refactor trước khi làm feature mới"*
- *"Code này tôi không hiểu tại sao lại làm vậy"*

**Dấu hiệu từ data:**
- Bug fix mất nhiều hơn dev thời gian
- Velocity sprint giảm dần qua các sprint
- Regression bugs: fix xong chỗ này, break chỗ khác

**Dấu hiệu từ process:**
- Không có automated test → không ai dám refactor
- Deploy mất nhiều giờ, rủi ro cao
- *"Đừng deploy thứ Sáu"* là rule bất thành văn

**Khi BA nhận ra điều này:**
- Đừng push thêm feature pressure
- Đưa vào backlog sprint "tech debt cleanup"
- Đặt câu hỏi với PO/PM: *"Có thể dành 20% capacity sprint cho refactor không?"*

---

## 7. Tam giác Trade-off Kinh điển

Trong mọi dự án phần mềm, chỉ được chọn 2 trong 3:

```
          NHANH
            △
           /|\
          / | \
         /  |  \
        /   |   \
       ▽---------▽
     RẺ           TỐT
```

| Chọn | Bỏ | Ý nghĩa |
|------|-----|---------|
| Nhanh + Rẻ | Tốt | MVP, prototype — nhiều bug, không scalable |
| Nhanh + Tốt | Rẻ | Cần nhiều dev giỏi, chi phí cao |
| Tốt + Rẻ | Nhanh | Hệ thống chất lượng nhưng mất nhiều thời gian |

**BA cần làm rõ với stakeholder:** dự án này đang ưu tiên cái gì? Không thể có cả 3. Nếu không align điều này từ đầu → stakeholder expect cả 3 → team burnout.

---

## 8. Cách BA ra quyết định trade-off thông minh

### Framework RICE để ưu tiên:

| Tiêu chí | Câu hỏi |
|----------|---------|
| **R**each | Bao nhiêu user bị ảnh hưởng? |
| **I**mpact | Tác động đến từng user lớn ra sao? (0.25/0.5/1/2/3) |
| **C**onfidence | Chắc chắn bao nhiêu % về estimate? |
| **E**ffort | Mất bao nhiêu người-tuần? |

```
Score = (Reach × Impact × Confidence) / Effort

Feature A: 1000 users × 2 impact × 80% / 2 weeks = 800
Feature B: 500 users × 3 impact × 60% / 1 week = 900
→ Feature B ưu tiên hơn dù ít user hơn
```

### Câu hỏi BA nên hỏi trước khi push feature:

1. *"Feature này serve bao nhiêu % user base?"* → nếu < 5%, cân nhắc lại
2. *"Nếu không có feature này, user sẽ làm gì?"* → workaround có chấp nhận được không?
3. *"Cái gì là rủi ro lớn nhất nếu làm feature này ngay?"*
4. *"Dev nói 'phức tạp' — phức tạp ở đâu cụ thể?"* → hiểu để quyết định đúng
5. *"Nếu làm tắt sprint này và refactor sprint sau, plan refactor cụ thể là gì?"*

---

## 9. Ví dụ thực tế: BA đưa ra quyết định trade-off

### Tình huống:
Product launch sau 3 tuần. Stakeholder muốn thêm tính năng "đề xuất sản phẩm liên quan" (recommendation).

### Phân tích:

```
Option A — AI Recommendation (đúng cách):
  + Cá nhân hóa, tăng conversion
  - Cần 3-4 tuần (machine learning pipeline, data collection, training)
  - Không kịp launch

Option B — Rule-based (shortcut):
  + Kịp launch (3 ngày)
  + "Sản phẩm cùng danh mục" đơn giản nhưng có giá trị
  - Không cá nhân hóa
  - Cần refactor sau khi có đủ data

Option C — Bỏ feature này khỏi V1:
  + Team tập trung vào core feature
  + Không thêm risk trước launch
  - Stakeholder thất vọng
```

### Quyết định BA đưa ra:
> **Option B + plan rõ ràng:**
> "Sprint này: recommend theo cùng danh mục (3 ngày). Ghi vào backlog Sprint 5: implement collaborative filtering khi đã có đủ data từ 2 tháng đầu launch. Đây là conscious debt, không phải technical debt vô tình."

**Tại sao Option B đúng:**
- Business value có ngay (recommendation nào đó > không có gì)
- Không delay launch
- Team biết mình đang vay và có plan trả

---

## 10. Technical Debt Ledger — Công cụ BA nên dùng

Đừng để technical debt ở trong đầu dev. BA nên chủ động duy trì một "sổ nợ":

```markdown
## Technical Debt Log

| ID | Mô tả | Lý do vay | Impact nếu không trả | Sprint target |
|----|-------|-----------|---------------------|---------------|
| TD-01 | Hardcode tỉnh thành | MVP launch | Không thể thêm quận/huyện | Sprint 4 |
| TD-02 | Không có unit test cho payment flow | Deadline | Bug risk cao khi refactor | Sprint 6 |
| TD-03 | Search dùng LIKE thay vì full-text index | Quick fix | Chậm khi > 10k records | Sprint 5 |
```

**Lợi ích:**
- Stakeholder thấy trade-off đã được ghi nhận, không phải bị quên
- PO có cơ sở để allocate capacity cho refactor
- Dev không cảm thấy "build xấu mà không ai biết"

---

## 11. Điều BA KHÔNG nên làm

**❌ Push deadline mà không hiểu impact:**
> *"Cứ làm tạm đi, sau sửa"* — mà không track, không plan, không để ý đến debt tích lũy

**❌ Bỏ qua khi dev raise concern:**
> Dev nói: *"Phần này cần refactor trước khi thêm feature"*
> BA: *"Thôi sprint này cứ làm feature đi, refactor sau"*
> → Sprint sau: *"Cũng thôi refactor sau"* → mãi mãi

**❌ Treat mọi debt như nhau:**
> Không phải debt nào cũng nguy hiểm như nhau. Hardcode màu sắc ≠ không có security validation.
> BA cần học cách phân loại: debt nào high-risk, debt nào low-risk.

**✅ Điều BA nên làm:**
- Khi dev raise technical concern, hỏi: *"Impact cụ thể là gì nếu không fix? Khi nào nó trở thành vấn đề thật sự?"*
- Dành 10-20% capacity sprint cho tech debt
- Mỗi shortcut phải được ghi nhận với plan rõ ràng
- Align với PO/PM về tam giác Nhanh-Tốt-Rẻ từ đầu
