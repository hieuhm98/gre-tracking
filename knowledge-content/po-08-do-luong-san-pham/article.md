# Đo lường sản phẩm & metrics

## 1. Vì sao đo lường là việc của Product Owner

> **Nếu bạn không đo, bạn không biết mình đang tạo ra giá trị hay chỉ đang bận rộn.**

**Một đội có thể giao hàng đều đặn mỗi sprint trong sáu tháng mà sản phẩm không tốt lên chút nào.** Velocity cao, backlog vơi đi, mọi người đều bận — nhưng không có bằng chứng nào cho thấy người dùng sống tốt hơn hay doanh nghiệp kiếm được nhiều hơn.

**Đo lường phục vụ ba mục đích khác nhau, và trộn lẫn chúng là nguồn gốc của nhiều tranh cãi:**

| Mục đích | Câu hỏi | Ví dụ |
|----------|---------|-------|
| **Học hỏi** | *"Giả định của ta có đúng không?"* | Tỷ lệ hoàn tất luồng đăng ký mới |
| **Điều hướng** | *"Ta nên làm gì tiếp theo?"* | Bước nào trong luồng bị rơi nhiều nhất |
| **Trách nhiệm giải trình** | *"Ta có đạt cam kết không?"* | Doanh thu quý so với mục tiêu |

> **Chỉ số dùng để học hỏi phải được đối xử khác với chỉ số dùng để đánh giá con người.** Khi một chỉ số trở thành thước đo thành tích cá nhân, nó lập tức mất giá trị làm công cụ học hỏi — vì người ta bắt đầu tối ưu con số thay vì kết quả.

---

## 2. Vanity metric và cách nhận diện

**Vanity metric là chỉ số trông đẹp trong báo cáo nhưng không dẫn tới hành động nào.**

**Ba câu hỏi để nhận diện:**

**1. Nếu con số này tăng gấp đôi, tôi sẽ làm gì khác đi?** Không trả lời được nghĩa là nó vô dụng cho quyết định.

**2. Con số này có thể giảm không?** Các chỉ số cộng dồn như *tổng số người dùng đã đăng ký từ trước tới nay* **chỉ có thể tăng**, nên chúng luôn đẹp kể cả khi sản phẩm đang chết.

**3. Nó có gắn với một hành vi có giá trị không?** Lượt xem trang không phải giá trị; hoàn tất một giao dịch mới là giá trị.

**Cặp thay thế thường dùng:**

| Vanity metric | Chỉ số hành động được |
|---------------|----------------------|
| Tổng lượt tải app | Người dùng hoạt động hàng tuần |
| Tổng số tài khoản đăng ký | Tỷ lệ quay lại sau 7 ngày |
| Lượt xem trang | Tỷ lệ hoàn tất luồng chính |
| Số tính năng phát hành | Tỷ lệ tính năng được dùng sau 30 ngày |

> **Một chỉ số hữu ích phải là TỶ LỆ hoặc chỉ số theo nhóm cohort, chứ hiếm khi là một con số tuyệt đối cộng dồn.**

---

## 3. Chỉ số dẫn dắt và chỉ số theo sau

**Chỉ số theo sau (lagging) đo KẾT QUẢ đã xảy ra:** doanh thu, tỷ lệ rời bỏ, lợi nhuận.

- **Ưu điểm:** chúng là thứ doanh nghiệp thật sự quan tâm.
- **Nhược điểm:** khi bạn nhìn thấy chúng xấu đi thì đã quá muộn để can thiệp.

**Chỉ số dẫn dắt (leading) đo HÀNH VI dự báo kết quả đó:** số lần người dùng thực hiện hành động cốt lõi trong tuần đầu, thời gian tới lần dùng thứ hai.

- **Ưu điểm:** thay đổi sớm, cho bạn thời gian phản ứng.
- **Nhược điểm:** chỉ là giả thuyết — mối liên hệ với kết quả cần được kiểm chứng.

> **Một đội trưởng thành theo dõi CẢ HAI: chỉ số theo sau để biết mình đang ở đâu, chỉ số dẫn dắt để biết mình sắp đi đâu.**

**Cách tìm chỉ số dẫn dắt tốt:** nhìn vào những người dùng đã ở lại lâu, tìm **hành vi mà họ làm trong tuần đầu còn người rời bỏ thì không**. Đó là ứng viên cho chỉ số dẫn dắt.

**Đừng quên chỉ số phản biện (counter metric):** khi bạn tối ưu một chỉ số, hãy theo dõi song song một chỉ số có thể xấu đi vì nó. Tối ưu thời gian ở lại app? **Theo dõi luôn tỷ lệ khiếu nại và tỷ lệ gỡ cài đặt.**

---

## 4. Các khung chỉ số hay dùng

### Phễu AARRR

Năm bước trong hành trình người dùng, mỗi bước là một chỗ có thể rơi:

| Bước | Câu hỏi | Chỉ số mẫu |
|------|---------|-----------|
| **Acquisition** | Họ tìm thấy ta thế nào? | Số người dùng mới theo kênh |
| **Activation** | Họ có đạt được giá trị lần đầu? | Tỷ lệ hoàn tất thiết lập ban đầu |
| **Retention** | Họ có quay lại? | Tỷ lệ hoạt động ngày 7 và ngày 30 |
| **Revenue** | Họ có trả tiền? | Tỷ lệ chuyển đổi trả phí |
| **Referral** | Họ có giới thiệu người khác? | Số lời mời được chấp nhận |

> **Sai lầm phổ biến: đội dồn hết nguồn lực vào Acquisition trong khi chỗ rò rỉ thật nằm ở Activation.** Đổ thêm người dùng vào một cái xô có lỗ chỉ làm tăng chi phí.

### Chỉ số bắc đẩu (North Star Metric)

**Một chỉ số duy nhất phản ánh giá trị cốt lõi mà sản phẩm mang lại cho người dùng.**

- **Ba tiêu chí:** nó phản ánh giá trị cho người dùng, nó dự báo doanh thu dài hạn, và đội có thể ảnh hưởng tới nó.
- **Ví dụ:** với một nền tảng học tập, *số bài học hoàn thành mỗi tuần* tốt hơn *số người đăng ký*.

> **Chỉ số bắc đẩu KHÔNG thay thế các chỉ số khác.** Nó là điểm hội tụ để cả tổ chức nói cùng một ngôn ngữ, còn bên dưới vẫn cần các chỉ số chi tiết cho từng đội.

### HEART cho chất lượng trải nghiệm

**Happiness, Engagement, Adoption, Retention, Task success** — hữu ích khi bạn cần đo trải nghiệm chứ không chỉ đo kinh doanh.

---

## 5. A/B testing và giới hạn của nó

**A/B testing chia người dùng thành hai nhóm ngẫu nhiên và so sánh một thay đổi duy nhất.**

**Bốn điều kiện để một A/B test có nghĩa:**

**1. Một giả thuyết viết trước.** *"Chuyển nút thanh toán lên đầu trang sẽ tăng tỷ lệ hoàn tất từ 12 lên 15 phần trăm."*

**2. Đủ lượng mẫu.** Với lưu lượng nhỏ, một thử nghiệm có thể cần nhiều tháng — và trong nhiều tháng đó thị trường đã thay đổi.

**3. Chỉ một biến thay đổi.** Đổi cả màu nút, chữ nút và vị trí thì bạn không biết cái nào có tác dụng.

**4. Thời gian đủ dài để bao trọn một chu kỳ hành vi.** Hành vi cuối tuần khác ngày thường; dừng test sau ba ngày là tự lừa mình.

**Ba giới hạn cần thừa nhận:**

- **A/B testing tối ưu cục bộ rất tốt nhưng không tìm ra ý tưởng mới.** Nó cho bạn cái nút tốt nhất, không cho bạn sản phẩm đúng.
- **Nó không đo được tác động dài hạn.** Một thay đổi tăng chuyển đổi 5 phần trăm nhưng làm giảm lòng tin sẽ chỉ hiện ra sau nhiều tháng.
- **Dừng test ngay khi thấy kết quả tốt là gian lận với chính mình.** Hãy quyết định thời điểm dừng trước khi bắt đầu.

---

## 6. Bốn cái bẫy khi đo lường

**1. Định luật Goodhart.** *"Khi một thước đo trở thành mục tiêu, nó ngừng là một thước đo tốt."* Đặt chỉ tiêu số ticket đóng mỗi tuần thì đội sẽ chia nhỏ ticket. **Cách chống: đo kết quả (outcome) chứ không đo sản lượng (output).**

**2. Nhầm tương quan với nhân quả.** Người dùng dùng tính năng X có tỷ lệ giữ lại cao hơn — **không có nghĩa là ép mọi người dùng X sẽ tăng tỷ lệ giữ lại**. Có thể chính người dùng gắn bó mới đi tìm tính năng X.

**3. Chỉ số trung bình che giấu sự thật.** Thời gian phản hồi trung bình 200 mili giây trông ổn, trong khi 5 phần trăm người dùng chờ 8 giây. **Hãy xem phân vị 95 và 99, không chỉ xem trung bình.**

**4. Đo cái dễ đo thay vì cái quan trọng.** Số lượt click dễ lấy; việc người dùng có giải quyết được vấn đề của họ hay không thì khó — nhưng đó mới là điều đáng biết.

> **Một quy tắc thực dụng: mỗi đội nên có khoảng ba tới năm chỉ số chính.** Ít hơn thì mù, nhiều hơn thì không ai thật sự theo dõi và mọi con số trở thành trang trí cho dashboard.

**Và quan trọng nhất: mỗi chỉ số phải có người sở hữu, một ngưỡng mong đợi, và một nhịp xem lại.** Chỉ số không có ba thứ đó sẽ bị lãng quên trong vòng một tháng.

---

## 7. Điểm cốt lõi

- **Không đo thì không biết mình đang tạo giá trị hay chỉ đang bận rộn.**
- Đội có thể giao hàng đều sáu tháng mà **sản phẩm không tốt lên chút nào**.
- Ba mục đích đo lường: **học hỏi, điều hướng, trách nhiệm giải trình** — trộn lẫn chúng gây tranh cãi.
- **Chỉ số thành thước đo thành tích cá nhân sẽ mất giá trị làm công cụ học hỏi.**
- Nhận diện vanity metric: **nếu tăng gấp đôi tôi có làm gì khác đi không**, và **nó có thể giảm không**.
- **Chỉ số cộng dồn luôn đẹp kể cả khi sản phẩm đang chết.**
- **Chỉ số hữu ích thường là tỷ lệ hoặc theo cohort**, hiếm khi là số tuyệt đối.
- **Chỉ số theo sau cho biết đang ở đâu; chỉ số dẫn dắt cho biết sắp đi đâu.**
- Tìm chỉ số dẫn dắt bằng cách **so hành vi tuần đầu của người ở lại với người rời bỏ**.
- **Luôn có chỉ số phản biện** — tối ưu thời gian ở lại thì theo dõi luôn tỷ lệ gỡ cài đặt.
- AARRR: **đội hay dồn vào Acquisition trong khi lỗ rò nằm ở Activation**.
- **Chỉ số bắc đẩu là điểm hội tụ, không thay thế chỉ số chi tiết.**
- A/B test cần **giả thuyết viết trước, đủ mẫu, một biến, và đủ thời gian bao một chu kỳ hành vi**.
- **A/B testing tối ưu cục bộ tốt nhưng không tìm ra ý tưởng mới.**
- **Dừng test ngay khi thấy kết quả tốt là gian lận với chính mình.**
- Định luật Goodhart: **thước đo thành mục tiêu thì ngừng là thước đo tốt** — hãy đo outcome chứ không đo output.
- **Tương quan không phải nhân quả** — có thể người gắn bó mới đi tìm tính năng đó.
- **Xem phân vị 95 và 99**, vì trung bình che giấu 5 phần trăm người dùng chờ 8 giây.
- **Ba tới năm chỉ số chính cho mỗi đội**, và mỗi chỉ số cần người sở hữu, ngưỡng, và nhịp xem lại.

## 8. Tóm tắt

- Đo lường là **cách duy nhất để phân biệt giá trị thật với sự bận rộn**, và nó thuộc trách nhiệm của Product Owner.
- **Vanity metric bị loại bằng ba câu hỏi**, và chỉ số tốt thường là tỷ lệ hoặc cohort.
- **Cần cả chỉ số dẫn dắt, chỉ số theo sau và chỉ số phản biện** để có bức tranh trung thực.
- **A/B testing mạnh nhưng có giới hạn rõ ràng**, và bốn cái bẫy đo lường phá huỷ giá trị của mọi dashboard nếu bị bỏ qua.
