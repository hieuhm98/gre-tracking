# Acceptance Criteria & Business Rule

## 1. Acceptance Criteria là gì

> **Acceptance criteria (AC) là các điều kiện cụ thể phải đúng để một hạng mục được coi là hoàn thành đúng.**

AC trả lời câu hỏi mà mọi người trong đội đều cần: ***"Làm sao chúng ta biết cái này đã xong đúng?"***

**Bốn đặc điểm của AC tốt:**

**1. Cụ thể và kiểm chứng được.** Không phải *"tìm kiếm phải nhanh"* mà *"kết quả tìm kiếm hiển thị trong vòng 2 giây với tối đa 1.000 bản ghi"*.

**2. Viết bằng ngôn ngữ nghiệp vụ**, không dùng thuật ngữ kỹ thuật. Người dùng phải đọc và xác nhận được.

**3. Phủ cả điều kiện ngoại lệ**, không chỉ đường đi thuận lợi. **Đây là phần bị bỏ sót nhiều nhất.**

**4. Được thoả thuận TRƯỚC khi bắt đầu hiện thực**, không phải sau.

> **AC không mô tả CÁCH làm.** *"Dùng bộ nhớ đệm để tăng tốc tìm kiếm"* là quyết định thiết kế, không phải AC. AC chỉ nêu **điều kiện phải thoả mãn**.

---

## 2. Định dạng Given-When-Then

Đây là cách viết AC được dùng rộng rãi nhất, vì nó buộc bạn nêu rõ **ba thứ mà một yêu cầu thiếu thông tin thường bỏ sót**.

> **Given** *(trạng thái ban đầu)*
> **When** *(hành động xảy ra)*
> **Then** *(kết quả mong đợi)*

**Ví dụ đầy đủ cho một story đặt hàng:**

> **AC1 — Đặt hàng thành công**
> **Given** giỏ hàng có ít nhất một sản phẩm còn tồn kho
> **When** người dùng xác nhận đặt hàng với thông tin giao hàng hợp lệ
> **Then** hệ thống tạo đơn hàng ở trạng thái Chờ xác nhận, trừ tồn kho và gửi email xác nhận trong vòng 1 phút
>
> **AC2 — Sản phẩm hết hàng giữa chừng**
> **Given** một sản phẩm trong giỏ đã hết tồn kho kể từ lúc người dùng thêm vào
> **When** người dùng xác nhận đặt hàng
> **Then** hệ thống hiển thị thông báo nêu rõ sản phẩm nào hết hàng, giữ nguyên giỏ hàng và KHÔNG tạo đơn
>
> **AC3 — Mất kết nối khi đang xử lý**
> **Given** người dùng đã bấm xác nhận
> **When** kết nối tới cổng thanh toán thất bại
> **Then** hệ thống giữ đơn ở trạng thái Chờ thanh toán, hiển thị hướng dẫn thử lại và KHÔNG trừ tồn kho lần thứ hai

> **Chú ý AC2 và AC3: đó chính là phần mà đội thường bỏ sót.** Một story chỉ thực sự xong khi hệ thống xử lý đúng cả những gì có thể sai.

---

## 3. Bao nhiêu AC là đủ

Không có con số cố định, nhưng có vài chỉ báo hữu ích:

- **Quá ít (1–2 AC cho một story vừa)** → nhiều khả năng bạn chỉ mô tả đường đi thuận lợi.
- **Quá nhiều (trên 10 AC)** → story có lẽ quá lớn và nên được chia nhỏ.
- **Không có AC nào phủ trường hợp lỗi** → chắc chắn còn thiếu.

**Danh sách kiểm nhanh cho mỗi story:**

- Đường đi thuận lợi có AC chưa?
- Dữ liệu **rỗng** thì hiển thị gì?
- Dữ liệu **quá nhiều** (một nghìn dòng) thì sao?
- Người dùng **không đủ quyền** thì thấy gì?
- **Hệ thống bên ngoài lỗi** thì xử lý ra sao?
- Người dùng **thao tác hai lần liên tiếp rất nhanh** thì sao?
- Có **giới hạn giá trị** nào cần nêu không (độ dài, khoảng số, định dạng)?

> **Nguyên tắc thực dụng: nếu tester không viết được test case từ AC của bạn, AC đó chưa đủ.**

---

## 4. Business Rule là gì

> **Business rule là một quy tắc hoặc chính sách của tổ chức, tồn tại độc lập với phần mềm và thường sống lâu hơn mọi hệ thống.**

**Ví dụ:**

- *"Đơn hàng trên 50 triệu phải được trưởng phòng phê duyệt."*
- *"Khách hàng hạng Vàng được giảm 10% cho mọi đơn."*
- *"Hồ sơ bệnh án phải được lưu giữ tối thiểu 15 năm."*
- *"Chỉ nhân viên đã qua đào tạo an toàn mới được nhận hoá chất nguy hiểm."*

**Điểm quan trọng: business rule tồn tại ngay cả khi không có phần mềm nào.** Trước khi có hệ thống, quy tắc đó vẫn được thực thi bằng giấy tờ và con người.

### Phân biệt business rule với yêu cầu

| | **Business rule** | **Functional requirement** |
|---|------------------|---------------------------|
| **Bản chất** | Chính sách của tổ chức | Hành vi của hệ thống |
| **Tồn tại độc lập với phần mềm** | Có | Không |
| **Ví dụ** | *"Đơn trên 50 triệu cần phê duyệt"* | *"Hệ thống hiển thị nút Gửi phê duyệt khi tổng đơn vượt ngưỡng"* |
| **Ai sở hữu** | Bộ phận nghiệp vụ | Đội sản phẩm |
| **Tần suất thay đổi** | Theo chính sách công ty | Theo bản phát hành |

> **Một business rule có thể sinh ra nhiều yêu cầu chức năng** ở các phần khác nhau của hệ thống: một ở màn hình tạo đơn, một ở màn hình duyệt, một ở báo cáo, một ở API.

---

## 5. Vì sao phải tách business rule ra riêng

**Đây là một trong những thực hành có giá trị cao nhất mà ít đội áp dụng.**

**Bốn lý do:**

**1. Business rule thay đổi thường xuyên hơn quy trình, và quy trình thay đổi thường xuyên hơn kiến trúc.** Ngưỡng phê duyệt có thể đổi từ 50 triệu sang 100 triệu mà không cần đổi gì khác.

**2. Một quy tắc áp dụng ở nhiều nơi.** Nếu bạn viết nó vào ba story khác nhau, khi quy tắc đổi bạn phải nhớ sửa cả ba — và bạn sẽ quên một chỗ.

**3. Business rule sống lâu hơn dự án.** Hệ thống bị thay thế, nhưng quy tắc *"đơn trên 50 triệu cần phê duyệt"* vẫn còn đó.

**4. Nó thuộc về bộ phận nghiệp vụ, không thuộc đội sản phẩm.** Tách riêng làm rõ ai có quyền thay đổi nó.

**Cách ghi lại một business rule tốt:**

| Trường | Ví dụ |
|--------|-------|
| **Mã** | BR-012 |
| **Phát biểu** | Đơn hàng có tổng giá trị trên 50.000.000 VND phải được trưởng phòng kinh doanh phê duyệt trước khi xử lý |
| **Nguồn gốc** | Quy định tài chính nội bộ số 07/2024 |
| **Người sở hữu** | Giám đốc tài chính |
| **Mức độ ổn định** | Xem lại hằng năm |
| **Ngoại lệ** | Không áp dụng cho đơn của khách hàng hạng Kim cương |

> **Trường quan trọng nhất là NGUỒN GỐC.** Nó cho bạn biết quy tắc có thể thương lượng hay không, và ai phải được hỏi khi cần thay đổi.

---

## 6. Bốn loại business rule

Phân loại giúp bạn biết mình đang bỏ sót loại nào.

**1. Ràng buộc (constraint).** Điều gì bắt buộc hoặc bị cấm.

- *"Không được xoá hoá đơn đã phát hành."*

**2. Điều kiện kích hoạt (action enabler).** Khi điều kiện đúng, một hành động phải xảy ra.

- *"Khi tồn kho xuống dưới mức tối thiểu, hệ thống phải tạo yêu cầu nhập hàng."*

**3. Suy luận (inference).** Từ sự thật này suy ra sự thật khác.

- *"Khách hàng có tổng chi tiêu năm trên 500 triệu được xếp hạng Vàng."*

**4. Tính toán (computation).** Công thức tính một giá trị.

- *"Phí giao hàng bằng 2% giá trị đơn, tối thiểu 20.000 và tối đa 100.000 VND."*

> **Loại bị bỏ sót nhiều nhất là suy luận.** Nó thường ngầm định trong đầu người làm nghiệp vụ và không ai nghĩ tới việc nói ra — cho tới khi hệ thống xếp hạng sai một khách hàng quan trọng.

---

## 7. Business rule trong AC và trong hệ thống

**Cách liên kết đúng: AC tham chiếu tới business rule, không lặp lại nội dung của nó.**

> **AC — Phê duyệt đơn giá trị lớn**
> **Given** người dùng tạo đơn có tổng giá trị vượt ngưỡng quy định tại **BR-012**
> **When** người dùng bấm Gửi
> **Then** hệ thống chuyển đơn sang trạng thái Chờ phê duyệt và thông báo cho trưởng phòng kinh doanh

**Lợi ích:** khi ngưỡng đổi từ 50 triệu sang 100 triệu, bạn chỉ sửa **BR-012** ở một chỗ. Mọi AC tham chiếu tới nó tự động vẫn đúng.

**Về mặt hệ thống, nguyên tắc tương tự:** business rule thay đổi thường xuyên nên **nên nằm ở nơi thay đổi được mà không cần lập trình lại** — bảng cấu hình, rule engine, hoặc ít nhất một module tập trung.

**Câu hỏi BA nên hỏi cho mỗi business rule:**

- Quy tắc này thay đổi bao lâu một lần?
- Ai có thẩm quyền thay đổi nó?
- Khi nó đổi, có cần áp dụng ngược cho dữ liệu cũ không?
- Có ngoại lệ nào không, và ai được phép ghi đè?
- Việc ghi đè có được ghi nhật ký không?

> **Câu hỏi về áp dụng ngược cho dữ liệu cũ là câu hỏi hay bị bỏ sót nhất, và cũng gây ra nhiều sự cố nghiệp vụ nghiêm trọng nhất.** Nếu ngưỡng phê duyệt đổi, các đơn đang chờ duyệt xử lý theo quy tắc cũ hay mới?

---

## 8. Điểm cốt lõi

- **AC trả lời câu hỏi làm sao chúng ta biết cái này đã xong đúng.**
- AC tốt phải **cụ thể, kiểm chứng được, viết bằng ngôn ngữ nghiệp vụ, phủ cả ngoại lệ và được thoả thuận trước khi hiện thực**.
- **AC không mô tả cách làm** — cách làm là quyết định thiết kế thuộc về đội phát triển.
- **Given-When-Then buộc bạn nêu rõ trạng thái ban đầu, hành động và kết quả mong đợi** — ba thứ hay bị bỏ sót.
- **Phần bị bỏ sót nhiều nhất trong AC là điều kiện ngoại lệ**, không phải đường đi thuận lợi.
- **Chỉ 1–2 AC cho một story vừa** là dấu hiệu bạn chỉ mô tả đường đi thuận lợi.
- **Trên 10 AC** là dấu hiệu story quá lớn và nên chia nhỏ.
- Danh sách kiểm: **dữ liệu rỗng, dữ liệu quá nhiều, không đủ quyền, hệ thống ngoài lỗi, thao tác hai lần, giới hạn giá trị**.
- **Nếu tester không viết được test case từ AC, AC đó chưa đủ.**
- **Business rule tồn tại độc lập với phần mềm** và thường sống lâu hơn mọi hệ thống.
- **Một business rule có thể sinh ra nhiều yêu cầu chức năng** ở các phần khác nhau của hệ thống.
- Tách riêng business rule vì **nó thay đổi thường xuyên hơn, áp dụng ở nhiều nơi, sống lâu hơn dự án và thuộc về bộ phận nghiệp vụ**.
- **Trường quan trọng nhất khi ghi business rule là nguồn gốc** — nó cho biết quy tắc có thương lượng được không.
- Bốn loại: **ràng buộc, điều kiện kích hoạt, suy luận, tính toán**.
- **Loại suy luận bị bỏ sót nhiều nhất** vì nó ngầm định trong đầu người làm nghiệp vụ.
- **AC nên tham chiếu tới business rule chứ không lặp lại nội dung**, để khi quy tắc đổi chỉ phải sửa một chỗ.
- Business rule nên nằm ở nơi **thay đổi được mà không cần lập trình lại**.
- **Câu hỏi về áp dụng ngược cho dữ liệu cũ hay bị bỏ sót nhất** và gây nhiều sự cố nghiêm trọng nhất.

## 9. Tóm tắt

- **AC là hợp đồng chung giữa BA, Dev và QC** về việc thế nào là hoàn thành đúng, nên phải viết cùng nhau và thoả thuận trước.
- **Given-When-Then là công cụ chống bỏ sót**, đặc biệt hiệu quả với các trường hợp lỗi và ngoại lệ.
- **Business rule là tài sản của tổ chức, không phải của dự án** — hãy tách riêng, đánh mã và ghi rõ nguồn gốc.
- Khi AC tham chiếu tới business rule thay vì lặp lại nó, **một thay đổi chính sách chỉ cần sửa ở một nơi duy nhất**.
