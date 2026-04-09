# Non-Functional Requirements (NFR)

## 1. NFR là gì và tại sao BA hay bỏ sót?

**Functional Requirements** mô tả hệ thống *làm gì*:
> "User có thể tìm kiếm sản phẩm theo tên."

**Non-Functional Requirements** mô tả hệ thống *tốt đến mức nào*:
> "Kết quả tìm kiếm phải trả về trong vòng 1 giây với 10,000 sản phẩm."

BA hay bỏ sót NFR vì:
- Chúng không hiện ra trực tiếp trên UI
- Stakeholder không nói ra (nhưng expect)
- Chỉ lộ ra khi hệ thống bị lỗi dưới tải thật

Hậu quả: Dev build đúng tính năng, nhưng hệ thống chậm, hay crash, hoặc không bảo mật — và không ai biết đây là lỗi thiếu requirement.

---

## 2. Các nhóm NFR quan trọng nhất

### Performance — Tốc độ

*"Hệ thống phản hồi nhanh như thế nào?"*

```
Các chỉ số:
- Response time: thời gian từ request đến response
- Throughput: số request xử lý được mỗi giây
- Latency: độ trễ

Ví dụ NFR cụ thể:
✅ "Trang danh sách sản phẩm load trong < 2 giây ở kết nối 4G"
✅ "API search trả kết quả trong < 500ms với 1 triệu records"
✅ "Dashboard báo cáo load trong < 5 giây với dữ liệu 12 tháng"

❌ Quá mơ hồ:
"Hệ thống phải nhanh"
"Trang phải load trong thời gian hợp lý"
```

**Câu hỏi BA cần hỏi:**
- Bao nhiêu records sẽ có sau 1 năm? 5 năm?
- User chấp nhận chờ tối đa bao lâu cho màn hình này?
- Tính năng nào là "critical path" — user abandon nếu chậm?

---

### Scalability — Khả năng mở rộng

*"Hệ thống xử lý được bao nhiêu user cùng lúc?"*

```
Hai loại scale:
- Vertical scaling: nâng cấp server mạnh hơn (giới hạn và đắt)
- Horizontal scaling: thêm nhiều server (linh hoạt hơn)

Ví dụ NFR:
✅ "Hệ thống phải xử lý được 500 concurrent users trong giai đoạn launch"
✅ "Phải scale lên 5,000 concurrent users trong 6 tháng không cần rewrite"
✅ "Database query không được chậm hơn khi data tăng từ 10k lên 1M records"
```

**Câu hỏi BA cần hỏi:**
- Bao nhiêu user sẽ dùng cùng lúc vào peak time?
- Peak time là khi nào? (9h sáng? Cuối tháng? Black Friday?)
- Dự kiến tăng trưởng user trong 1 năm là bao nhiêu?

---

### Availability — Tính sẵn sàng

*"Hệ thống có mặt bao nhiêu % thời gian?"*

```
Uptime SLA:
99%    = 87.6 giờ downtime/năm  (không chấp nhận cho production)
99.9%  = 8.76 giờ downtime/năm  (acceptable cho nhiều hệ thống)
99.95% = 4.38 giờ downtime/năm
99.99% = 52.6 phút downtime/năm (high-availability)
99.999%= 5.26 phút downtime/năm (mission-critical: banking, healthcare)

Ví dụ NFR:
✅ "Hệ thống phải đạt 99.9% uptime hàng tháng (SLA cam kết)"
✅ "Planned maintenance không được quá 2 giờ/tháng, ngoài giờ hành chính"
✅ "Hệ thống thanh toán phải đạt 99.99% uptime"
```

**Câu hỏi BA cần hỏi:**
- Nếu hệ thống down 1 tiếng, thiệt hại kinh doanh là bao nhiêu?
- Có khung giờ nào không được down tuyệt đối? (ví dụ: giờ giao dịch)
- Maintenance window có được không? Vào lúc nào?

---

### Reliability — Độ tin cậy

*"Hệ thống có xử lý đúng không, kể cả khi có lỗi?"*

```
Reliability ≠ Availability:
- Availability: hệ thống có mặt
- Reliability: hệ thống xử lý đúng khi có mặt

Ví dụ:
- Hệ thống chạy 100% uptime nhưng tính tiền sai = available nhưng not reliable
- Hệ thống đôi khi down nhưng khi chạy thì luôn đúng = unreliable nhưng reliable

Ví dụ NFR:
✅ "Không được mất dữ liệu đơn hàng kể cả khi server crash giữa chừng"
✅ "Thanh toán phải idempotent — gọi API 2 lần không được charge 2 lần"
✅ "Dữ liệu báo cáo phải đồng nhất — cùng filter, cùng kết quả"
```

---

### Security — Bảo mật

*"Hệ thống bảo vệ dữ liệu và quyền truy cập như thế nào?"*

```
Ví dụ NFR:
✅ "Password phải được hash bằng bcrypt, không lưu plaintext"
✅ "API phải authenticate bằng JWT, token expire sau 24h"
✅ "Data truyền qua HTTPS, không cho phép HTTP"
✅ "Dữ liệu CCCD/CMND phải được encrypt ở database"
✅ "Failed login 5 lần → block IP 15 phút"
```

*(Chi tiết hơn ở topic 30 — Security & Privacy Thinking)*

---

### Maintainability — Khả năng bảo trì

*"Bao lâu để fix một bug? Bao khó để onboard dev mới?"*

```
Ví dụ NFR:
✅ "Code coverage của unit test phải đạt tối thiểu 70%"
✅ "Mọi API đều phải có documentation (Swagger)"
✅ "Log phải đủ để debug production issue trong < 30 phút"
✅ "Deploy mới phải dưới 15 phút và có rollback tự động"
```

---

### Usability — Khả năng sử dụng

*"User có thể học dùng nhanh không?"*

```
Ví dụ NFR:
✅ "User mới phải hoàn thành task cơ bản trong < 5 phút không cần training"
✅ "Hệ thống phải tuân thủ WCAG 2.1 AA (accessibility)"
✅ "Trên mobile, touch target tối thiểu 44x44px"
✅ "Error message phải gợi ý cách sửa, không chỉ báo lỗi"
```

---

## 3. NFR ảnh hưởng đến kiến trúc như thế nào

Đây là lý do NFR cần xác định sớm — thay đổi kiến trúc về sau rất tốn kém.

```
NFR: "Hệ thống phải xử lý 10,000 đơn hàng/phút vào Black Friday"

→ Không thể chỉ "viết code tốt hơn"
→ Cần:
   - Message queue (RabbitMQ, Kafka) để buffer requests
   - Async processing (đặt hàng xong → email gửi sau)
   - Database sharding hoặc read replicas
   - CDN cho static assets
   - Auto-scaling infrastructure

Nếu BA không specify NFR này → dev build synchronous, single server
→ Black Friday: hệ thống sập
→ Fix: phải rewrite kiến trúc, tốn vài tháng
```

---

## 4. Câu hỏi NFR BA cần hỏi cho từng màn hình

Mỗi màn hình / tính năng quan trọng, BA nên đặt:

### Câu hỏi về Scale:
- *"Tính năng này phục vụ tối đa bao nhiêu user cùng lúc?"*
- *"Data sẽ tăng như thế nào theo thời gian?"*
- *"Có peak time cụ thể không? (Flash sale, deadline, cuối tháng)"*

### Câu hỏi về Performance:
- *"User chờ tối đa bao lâu trước khi abandon?"*
- *"Tính năng nào là critical path, bắt buộc phải nhanh?"*

### Câu hỏi về Reliability:
- *"Nếu tính năng này sai 1%, hậu quả là gì?"*
- *"Có transaction nào không được phép fail nửa chừng không?"* (thanh toán, đặt chỗ)

### Câu hỏi về Availability:
- *"Nếu hệ thống down 1 tiếng lúc 3 giờ sáng, có vấn đề không?"*
- *"Business chấp nhận bao nhiêu downtime mỗi tháng?"*

---

## 5. NFR và Database — Những quyết định quan trọng

NFR trực tiếp ảnh hưởng đến thiết kế database:

### Khi nào cần Index?
```
Không có index:
  SELECT * FROM orders WHERE customer_id = 123
  → Scan toàn bộ bảng: 1 triệu rows = chậm

Có index trên customer_id:
  → Lookup trực tiếp: milliseconds

NFR BA cần specify:
"Danh sách đơn hàng của một khách hàng phải load trong < 1s
với customer có 10,000 đơn hàng"
→ Dev biết cần index
```

### Khi nào cần Caching?
```
Không cache:
  Dashboard gọi DB mỗi lần load → chậm khi nhiều user

Có cache (Redis):
  Lần đầu: query DB → lưu vào cache 5 phút
  Lần 2-n: đọc từ cache → nhanh hơn 100x

NFR BA cần specify:
"Dashboard báo cáo tổng quan có thể trễ tối đa 5 phút so với data thật"
→ Dev biết có thể cache 5 phút
"Số dư tài khoản phải real-time, không được cache"
→ Dev biết không được cache
```

### Khi nào cần Soft Delete?
```
Hard delete: xóa khỏi database vĩnh viễn
Soft delete: đánh dấu deleted_at, vẫn còn trong DB

NFR liên quan:
✅ "Dữ liệu đơn hàng phải lưu tối thiểu 5 năm cho mục đích kế toán"
✅ "User có thể khôi phục dữ liệu đã xóa trong vòng 30 ngày"
✅ "Tuân thủ nghị định X về lưu trữ dữ liệu giao dịch"
→ Tất cả cần soft delete
```

---

## 6. NFR trong Acceptance Criteria

NFR không phải chỉ là tài liệu riêng — nên đưa vào AC của từng story khi liên quan:

```
Story: User có thể tìm kiếm sản phẩm

AC (Functional):
□ Search theo tên sản phẩm
□ Kết quả hiển thị tên, ảnh, giá
□ Empty state khi không có kết quả

AC (Non-Functional):
□ Kết quả trả về trong < 500ms với catalog 100,000 sản phẩm
□ Search vẫn hoạt động khi 200 user cùng search đồng thời
□ Typo tolerance: "aplle" vẫn tìm thấy "apple"
□ Kết quả không được cache quá 1 phút (để reflect update giá)
```

---

## 7. Ví dụ thực tế: NFR cho hệ thống khác nhau

### Hệ thống nội bộ (50 user, 8h-17h):
```
Performance:  Response < 3s là chấp nhận được
Availability: 99% (có thể maintenance ban đêm/cuối tuần)
Scalability:  Không cần lo, user count cố định
Security:     Cơ bản — auth, HTTPS, role-based access
```

### E-commerce (10,000 user, 24/7):
```
Performance:  Product page < 2s, checkout < 1s
Availability: 99.9% (< 9 giờ downtime/năm)
Scalability:  Handle 5x spike vào Flash Sale
Security:     PCI DSS nếu có thanh toán card
```

### Banking/Fintech (bất kỳ user, giao dịch thật):
```
Performance:  Transaction < 3s
Availability: 99.99% (< 1 giờ downtime/năm)
Scalability:  Audit log cho mọi giao dịch
Security:     Encryption at rest và in transit, 2FA bắt buộc, audit trail
Reliability:  Zero data loss, idempotent transactions
```

---

## 8. NFR Checklist cho BA

Dùng checklist này khi bắt đầu một project hoặc feature lớn:

```
PERFORMANCE:
☐ Response time SLA cho các màn hình critical
☐ Kích thước data tối đa cần handle (records, file size)
☐ Có cần offline mode không?

SCALABILITY:
☐ Concurrent users tối đa (average và peak)
☐ Tốc độ tăng trưởng data dự kiến
☐ Peak time pattern (giờ, ngày, mùa)

AVAILABILITY:
☐ Uptime SLA (99%? 99.9%? 99.99%?)
☐ Maintenance window được phép không? Khi nào?
☐ Disaster recovery: nếu server chính fail, recovery time là bao lâu?

RELIABILITY:
☐ Có transaction nào không được fail nửa chừng?
☐ Data loss chấp nhận được bao nhiêu? (RPO)
☐ Thời gian recover sau incident tối đa? (RTO)

SECURITY:
☐ Data nào là sensitive, cần encrypt?
☐ Compliance requirements (GDPR, PCI DSS, nghị định Việt Nam)?
☐ Audit trail cần không?

MAINTAINABILITY:
☐ Log và monitoring requirements
☐ Documentation requirements
☐ Deploy và rollback requirements
```
