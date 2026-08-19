# Kỹ năng thiết yếu của BA

## 1. Bản đồ kỹ năng: ba tầng

Danh sách kỹ năng BA thường dài tới mức làm người mới hoảng. Hãy sắp xếp lại thành ba tầng theo mức độ nền tảng:

**Tầng 1 — Kỹ năng lõi (không thể thiếu).** Giao tiếp, đặt câu hỏi, tư duy phân tích, viết rõ ràng. **Đây là những kỹ năng quyết định bạn có làm được nghề hay không.**

**Tầng 2 — Kỹ năng chuyên môn (học được).** Kỹ thuật khơi gợi yêu cầu, mô hình hoá, viết user story và acceptance criteria, SQL, đọc API. **Học trong vài tháng nếu bạn có tầng 1.**

**Tầng 3 — Kỹ năng bối cảnh (tích luỹ theo thời gian).** Domain knowledge, hiểu tổ chức, đàm phán, xây dựng quan hệ. **Không có đường tắt.**

> **Người mới thường đầu tư ngược: học công cụ và mẫu tài liệu (tầng 2) trước, bỏ qua tầng 1.** Kết quả là viết được tài liệu đúng định dạng nhưng nội dung rỗng, vì họ chưa bao giờ đặt đúng câu hỏi.

---

## 2. Đặt câu hỏi — kỹ năng quan trọng nhất

Nếu chỉ được chọn một kỹ năng, hãy chọn kỹ năng này. **Chất lượng của yêu cầu bạn viết ra bị giới hạn bởi chất lượng câu hỏi bạn đã hỏi.**

### Câu hỏi mở và câu hỏi đóng

- **Câu hỏi mở** dùng để khám phá: *"Anh mô tả giúp em quy trình duyệt đơn hiện tại đang chạy thế nào?"*
- **Câu hỏi đóng** dùng để xác nhận: *"Vậy đơn trên 50 triệu thì bắt buộc phải có chữ ký của giám đốc, đúng không ạ?"*

**Lỗi phổ biến của người mới: hỏi câu đóng quá sớm.** Bạn hỏi *"Anh có cần chức năng xuất Excel không?"* và nhận được *"Có"* — nhưng bạn vừa gieo ý tưởng đó vào đầu họ thay vì tìm ra nhu cầu thật.

### Kỹ thuật đào tới gốc

**Hỏi vì sao nhiều lần**, mỗi lần đi sâu thêm một tầng:

> *"Tôi cần một nút xuất Excel ở màn hình đơn hàng."*
> — *Anh sẽ làm gì với tệp Excel đó?*
> *"Tôi lọc ra các đơn quá hạn rồi gửi cho đội chăm sóc khách hàng."*
> — *Anh làm việc đó bao lâu một lần?*
> *"Mỗi sáng."*
> — *Nếu hệ thống tự gửi danh sách đơn quá hạn cho đội chăm sóc mỗi sáng thì có giải quyết được không?*
> *"Ồ, thế thì tốt hơn nhiều."*

**Nhu cầu thật không phải nút Excel mà là một quy trình đang được làm thủ công mỗi ngày.**

### Câu hỏi bộc lộ điều bị bỏ sót

Ba câu hỏi này bắt được phần lớn yêu cầu thiếu:

- **"Điều gì xảy ra nếu...?"** — bắt các trường hợp ngoại lệ.
- **"Ai còn liên quan tới việc này nữa?"** — bắt các stakeholder bị bỏ sót.
- **"Hiện tại anh chị làm thế nào khi hệ thống không hỗ trợ?"** — bắt các cách làm vòng vo, mỗi cách là một yêu cầu chưa được đáp ứng.

---

## 3. Lắng nghe chủ động

Nghe không phải là im lặng chờ tới lượt nói. **Lắng nghe chủ động là nghe để hiểu, và chứng minh rằng bạn đã hiểu.**

**Ba kỹ thuật cụ thể:**

**1. Diễn giải lại (paraphrase).** *"Em hiểu là khi khách huỷ đơn sau khi đã thanh toán thì hệ thống phải hoàn tiền tự động trong 3 ngày. Em hiểu đúng chưa ạ?"*

> **Đây là kỹ thuật quyền lực nhất trong toàn bộ nghề BA.** Khi bạn diễn giải lại và người kia nói *"không hẳn thế"*, bạn vừa phát hiện một nhập nhằng trước khi nó trở thành mã sai.

**2. Ghi chú có cấu trúc.** Đừng ghi liền mạch. Hãy tách riêng: **sự thật đã xác nhận / giả định cần kiểm chứng / câu hỏi còn mở / quyết định đã chốt**. Cấu trúc này biến ghi chú thành đầu vào trực tiếp cho tài liệu.

**3. Chú ý tới điều KHÔNG được nói.** Nếu ai đó mô tả rất kỹ trường hợp thuận lợi mà im lặng về trường hợp lỗi, đó là dấu hiệu họ chưa nghĩ tới — và bạn nên hỏi.

---

## 4. Tư duy phân tích

**Tư duy phân tích là khả năng tách một vấn đề lớn mơ hồ thành các phần nhỏ có thể xử lý được, và nhìn ra mối liên hệ giữa chúng.**

**Bốn thói quen tư duy cụ thể:**

**1. Phân biệt vấn đề với triệu chứng.** *"Nhân viên nhập sai dữ liệu"* là triệu chứng. Nguyên nhân có thể là biểu mẫu khó hiểu, thiếu kiểm tra tính hợp lệ, hoặc quy trình buộc họ nhập vội.

**2. Tìm mẫu và ngoại lệ.** Khi nghe mô tả một quy trình, hãy hỏi: *cái này luôn đúng, hay có trường hợp nào khác đi?* Ngoại lệ chính là nơi độ phức tạp thật nằm.

**3. Suy nghĩ theo dữ liệu, quy trình và trạng thái.** Với mỗi yêu cầu, hỏi ba câu: *dữ liệu nào liên quan, ai làm gì theo thứ tự nào, và đối tượng này có những trạng thái nào?*

**4. Kiểm chứng thay vì giả định.** Khi ai đó nói *"khách hàng luôn nhập số điện thoại"*, hãy chạy một truy vấn xem thực tế bao nhiêu phần trăm bản ghi có số điện thoại.

> **Bài kiểm tra tư duy phân tích rất đơn giản: cho bạn một câu yêu cầu, bạn có nghĩ ra được ít nhất năm câu hỏi làm rõ không?** Nếu không, bạn đang chấp nhận thông tin ở bề mặt.

---

## 5. Viết rõ ràng

Rất nhiều vấn đề trong dự án phần mềm thực chất là **vấn đề ngôn ngữ**. Một câu mơ hồ có thể tốn hàng tuần làm lại.

**Bốn nguyên tắc viết cho BA:**

**1. Viết ở thể chủ động, nêu rõ ai làm gì.** *"Số sê-ri sẽ được cập nhật"* không cho biết ai cập nhật. *"Hệ thống cập nhật số sê-ri khi bộ phận giao hàng xác nhận"* thì rõ.

**2. Tránh từ mơ hồ.** *Nhanh, dễ dùng, phù hợp, thân thiện, ổn định* — mỗi từ này cần được dịch thành đặc tính đo lường được.

**3. Một câu, một yêu cầu.** Các từ *và, trừ khi, ngoại trừ, nhưng* thường báo hiệu bạn đang gộp hai yêu cầu vào một câu.

**4. Đưa ví dụ cụ thể.** Một payload mẫu hoặc một bảng dữ liệu ví dụ loại bỏ nhập nhằng nhanh hơn mọi đoạn văn mô tả.

> **Bài kiểm tra tự soát: đọc lại câu yêu cầu và nghĩ ra một cách hiểu lố bịch nhưng vẫn đúng câu chữ.** Nếu cách hiểu đó không ổn với người dùng, câu yêu cầu cần được viết lại.

---

## 6. Giao tiếp và đàm phán

BA nói chuyện với rất nhiều nhóm người khác nhau, và **mỗi nhóm cần một ngôn ngữ khác nhau**.

| Người nghe | Họ quan tâm | Cách nói |
|-----------|-------------|----------|
| Lãnh đạo | Giá trị, chi phí, rủi ro | Ngắn, dẫn bằng kết luận, có số liệu |
| Người dùng nghiệp vụ | Công việc hằng ngày của họ | Ngôn ngữ nghiệp vụ, ví dụ cụ thể, tránh thuật ngữ IT |
| Lập trình viên | Chi tiết, ngoại lệ, ràng buộc | Chính xác, có cấu trúc, kèm ví dụ dữ liệu |
| Tester | Tiêu chí kiểm chứng | Acceptance criteria rõ ràng, đủ trường hợp lỗi |

**Đàm phán trong công việc BA thường không phải về tiền, mà về phạm vi và thứ tự ưu tiên.**

Ba nguyên tắc:

- **Không nói không trần trụi.** Hãy nói: *"Được, nếu thêm cái này thì cái kia phải lùi sang bản sau — anh chị chọn cái nào?"*
- **Đưa dữ liệu chứ đừng đưa ý kiến.** *"Ba dự án gần nhất mất trung bình bảy tuần làm lại vì bỏ sót yêu cầu"* mạnh hơn *"em nghĩ chúng ta cần thêm thời gian phân tích"*.
- **Tách con người khỏi vấn đề.** Đánh giá yêu cầu, không đánh giá người nêu yêu cầu.

---

## 7. Kiến thức kỹ thuật vừa đủ

BA không cần viết mã sản phẩm, nhưng **cần hiểu đủ để đặt câu hỏi sắc và nhận ra công việc ẩn**.

**Mức hiểu cần thiết:**

- **Web và API** — biết request/response, mã trạng thái, JSON. Đủ để đọc tab Network và tự khoanh vùng lỗi ở giao diện hay ở dữ liệu.
- **Cơ sở dữ liệu và SQL** — hiểu bảng, quan hệ, khoá; viết được truy vấn lọc và tổng hợp cơ bản.
- **Kiến trúc phân tầng** — biết một thay đổi chạm tới giao diện, tầng nghiệp vụ hay tầng dữ liệu, vì mức lan toả rất khác nhau.
- **Quy trình phát triển** — hiểu môi trường Dev/Test/Staging/Production và vòng đời một thay đổi.

> **Dấu hiệu bạn đã đủ kỹ thuật: khi lập trình viên nói *"cái này phức tạp vì phải đổi cấu trúc dữ liệu"*, bạn hiểu vì sao điều đó tốn kém hơn một thay đổi giao diện — và hỏi được câu tiếp theo cho đúng.**

---

## 8. Cách rèn luyện từng kỹ năng

Kỹ năng mềm nghe trừu tượng, nhưng đều luyện được bằng bài tập cụ thể:

| Kỹ năng | Bài tập luyện hằng ngày |
|---------|------------------------|
| **Đặt câu hỏi** | Chọn một tính năng bất kỳ trong app bạn dùng, viết 10 câu hỏi làm rõ |
| **Lắng nghe** | Sau mỗi cuộc họp, viết lại bằng lời của mình rồi gửi cho người nói xác nhận |
| **Tư duy phân tích** | Lấy một quy trình đời thường (đặt đồ ăn, gửi xe) và vẽ flowchart đầy đủ cả nhánh lỗi |
| **Viết rõ ràng** | Viết một câu yêu cầu rồi tự tìm ba cách hiểu khác nhau của nó |
| **Kỹ thuật** | Mở Dev Tools trên một website và đọc các request khi bạn thao tác |
| **Domain** | Đọc tin ngành mỗi tuần và ghi lại các thuật ngữ chưa hiểu |

> **Kỹ năng BA không học được từ việc đọc — chỉ học được từ việc làm và nhận phản hồi.** Cách nhanh nhất để tiến bộ là đưa tài liệu của mình cho người khác review và thật sự lắng nghe những chỗ họ không hiểu.

---

## 9. Điểm cốt lõi

- Kỹ năng BA chia ba tầng: **lõi (không thể thiếu), chuyên môn (học được), bối cảnh (tích luỹ)**.
- Người mới thường **đầu tư ngược**: học công cụ và mẫu tài liệu trước, bỏ qua kỹ năng lõi.
- **Chất lượng yêu cầu bị giới hạn bởi chất lượng câu hỏi bạn đã hỏi.**
- **Hỏi câu đóng quá sớm sẽ gieo ý tưởng vào đầu người dùng** thay vì tìm ra nhu cầu thật.
- Ba câu hỏi bắt được phần lớn yêu cầu thiếu: **điều gì xảy ra nếu, ai còn liên quan, hiện tại làm thế nào khi hệ thống không hỗ trợ**.
- **Diễn giải lại là kỹ thuật quyền lực nhất** — khi người kia nói *"không hẳn thế"*, bạn vừa bắt được một nhập nhằng.
- Ghi chú nên tách riêng **sự thật, giả định, câu hỏi mở, quyết định**.
- **Chú ý tới điều KHÔNG được nói** — im lặng về trường hợp lỗi nghĩa là chưa ai nghĩ tới.
- Phân biệt **vấn đề với triệu chứng**; ngoại lệ là nơi độ phức tạp thật nằm.
- **Kiểm chứng bằng dữ liệu thay vì chấp nhận giả định** — chạy một truy vấn thay vì tin lời kể.
- Viết: **thể chủ động, tránh từ mơ hồ, một câu một yêu cầu, có ví dụ cụ thể**.
- **Nghĩ ra một cách hiểu lố bịch nhưng đúng câu chữ** là bài tự soát hiệu quả nhất.
- Mỗi nhóm người nghe cần **một ngôn ngữ khác nhau**; lãnh đạo cần kết luận trước, lập trình viên cần chi tiết.
- Đàm phán: **không nói không trần trụi, đưa dữ liệu chứ đừng đưa ý kiến, tách con người khỏi vấn đề**.
- Kỹ thuật vừa đủ nghĩa là **hiểu vì sao đổi cấu trúc dữ liệu tốn kém hơn đổi giao diện**.
- **Kỹ năng BA chỉ học được từ việc làm và nhận phản hồi**, không học được từ việc đọc.

## 10. Tóm tắt

- Bốn kỹ năng lõi — **đặt câu hỏi, lắng nghe, tư duy phân tích, viết rõ ràng** — quyết định bạn có làm được nghề hay không.
- Kỹ thuật chuyên môn và công cụ **học được trong vài tháng**; domain knowledge và quan hệ thì cần thời gian.
- **Kiến thức kỹ thuật vừa đủ** giúp bạn đặt câu hỏi sắc và nhìn ra công việc ẩn, chứ không nhằm để bạn tự viết mã.
- Mọi kỹ năng đều có **bài tập luyện cụ thể hằng ngày**, và cách tiến bộ nhanh nhất là đưa sản phẩm của mình cho người khác review.
