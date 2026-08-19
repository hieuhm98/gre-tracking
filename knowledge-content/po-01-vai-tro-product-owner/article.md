# Product Owner là ai?

## 1. Định nghĩa và thẩm quyền

> **Product Owner là người có thẩm quyền quyết định NỘI DUNG và THỨ TỰ của product backlog, và chịu trách nhiệm tối đa hoá giá trị mà đội tạo ra.**

**Ba từ khoá trong định nghĩa này đều quan trọng:**

- **Thẩm quyền** — PO phải **quyết định được**, không phải chuyển tiếp ý kiến của người khác.
- **Thứ tự** — PO quyết định cái gì làm trước, cái gì làm sau. Đội quyết định làm thế nào và mất bao lâu.
- **Giá trị** — mục tiêu không phải giao được nhiều tính năng nhất, mà là tạo ra nhiều giá trị nhất.

**PO là MỘT người, không phải một uỷ ban.** Đây là điểm mà rất nhiều tổ chức làm sai, và hậu quả là đội nhận được chỉ đạo mâu thuẫn từ nhiều hướng mà không ai chịu trách nhiệm cuối cùng.

---

## 2. Sáu trách nhiệm cốt lõi

**1. Sở hữu và truyền đạt tầm nhìn sản phẩm.** Đội phải biết **vì sao** sản phẩm tồn tại và **cho ai**. Không có tầm nhìn, mọi quyết định ưu tiên đều trở nên tuỳ tiện.

**2. Quản lý product backlog.** Backlog phải **được sắp thứ tự**, **minh bạch** với mọi người, và **liên tục được làm mịn**.

**3. Quyết định thứ tự ưu tiên.** Đây là trách nhiệm không thể uỷ quyền. Đội cung cấp ước tính công sức; PO quyết định thứ tự dựa trên giá trị.

**4. Trả lời câu hỏi kịp thời.** Trong sprint, đội liên tục gặp những chi tiết chưa rõ. **Một PO không sẵn sàng buộc đội phải tự đoán.**

**5. Chấp nhận hoặc từ chối công việc đã hoàn thành**, dựa trên acceptance criteria đã thoả thuận.

**6. Đại diện cho tiếng nói của mọi stakeholder** — khách hàng, người dùng, kinh doanh, vận hành, tuân thủ.

> **Trách nhiệm bị đánh giá thấp nhất là số 4.** Rất nhiều PO coi công việc của mình là viết backlog rồi biến mất. Nhưng phần lớn giá trị PO tạo ra trong sprint đến từ việc **trả lời đúng và nhanh**.

---

## 3. Ba chế độ thất bại phổ biến

### 1. Product Owner vắng mặt

**Đây là nguyên nhân thất bại số một của các đội Scrum.**

Đội gặp một chi tiết chưa rõ, gửi câu hỏi, và không nhận được trả lời trong ngày. Họ có hai lựa chọn: **bị chặn** hoặc **tự đoán**.

> **Tự đoán là chế độ thất bại tệ hơn**, vì nó không nhìn thấy được. Bị chặn thì lộ ra ngay trong daily standup; đoán sai thì chỉ lộ ra ở giai đoạn kiểm thử hoặc sau khi giao hàng — khi việc sửa đã tốn kém hơn nhiều lần.

**Dấu hiệu nhận biết:** câu hỏi trên Jira không được trả lời quá 24 giờ; đội bắt đầu tự quyết định hành vi nghiệp vụ; sprint review liên tục có bất ngờ.

### 2. Product Owner không có thẩm quyền

Họ phải đi hỏi cấp trên mọi quyết định. **Một PO không quyết định được thì không phải PO — họ là người đưa tin.**

**Hậu quả:** mỗi quyết định mất vài ngày; đội mất niềm tin và bắt đầu đi đường vòng; quyết định bị đảo ngược muộn khi cấp trên thực sự xem lại.

### 3. Uỷ ban Product Owner

Nhiều người cùng chỉ đạo backlog, mỗi người theo hướng khác nhau.

> **Hậu quả nghiêm trọng nhất: không ai chịu trách nhiệm cuối cùng.** Khi sản phẩm không đạt mục tiêu, mỗi người đều có thể chỉ ra rằng phần của mình đã làm đúng.

**Cách khắc phục:** vẫn có thể có nhiều stakeholder đóng góp, nhưng phải có **một người duy nhất chốt thứ tự** và **một quy trình rõ ràng** để giải quyết khi họ bất đồng.

---

## 4. PO không phải là gì

| Hiểu lầm | Thực tế |
|----------|---------|
| *"PO là quản lý của đội phát triển"* | PO không quản lý con người. Họ quyết định **cái gì**, đội quyết định **thế nào** |
| *"PO là người viết mọi user story"* | PO chịu trách nhiệm về backlog, nhưng BA hoặc chính đội có thể viết chi tiết |
| *"PO là người đại diện cho phòng kinh doanh"* | PO đại diện cho **tất cả** stakeholder, gồm cả vận hành, hỗ trợ và tuân thủ |
| *"PO quyết định ước tính"* | Ước tính công sức thuộc về đội phát triển, không thuộc PO |
| *"PO phải chấp nhận mọi yêu cầu từ lãnh đạo"* | PO phải bảo vệ tính toàn vẹn của backlog; nhận hết nghĩa là không ưu tiên hoá gì cả |

> **Ranh giới quan trọng nhất cần nhớ: PO quyết định THỨ TỰ và GIÁ TRỊ; đội quyết định CÁCH LÀM và ƯỚC TÍNH.** Vượt qua ranh giới này theo cả hai chiều đều gây hại.

---

## 5. Một ngày làm việc của Product Owner

**Buổi sáng**

- Tham gia **daily standup** — nghe xem có ai bị chặn vì thiếu quyết định hoặc thiếu thông tin.
- Trả lời các câu hỏi tồn đọng trên backlog. **Ưu tiên việc này trước mọi việc khác**, vì mỗi câu hỏi chưa trả lời là một người đang bị chặn hoặc sắp đoán bừa.
- Xem lại kết quả từ hôm trước và chấp nhận hoặc từ chối công việc đã hoàn thành.

**Buổi chiều**

- **Nói chuyện với người dùng hoặc khách hàng** — đây là hoạt động dễ bị cắt bỏ nhất khi bận, và cũng là hoạt động quan trọng nhất về dài hạn.
- **Grooming backlog** cùng BA và đội: chia nhỏ epic, làm rõ story, bổ sung acceptance criteria.
- **Xem dữ liệu sử dụng** để biết những gì đã phát hành có thực sự được dùng không.
- Trao đổi với stakeholder về thứ tự ưu tiên và những gì sắp tới.

> **Chỉ báo sức khoẻ: nếu tuần nào bạn cũng không dành được thời gian nói chuyện với người dùng thật, bạn đang trở thành người quản lý backlog thay vì người sở hữu sản phẩm.**

---

## 6. Kỹ năng quyết định thành bại của một PO

**1. Khả năng nói không.** PO nhận được nhiều yêu cầu hơn khả năng giao gấp nhiều lần. **Nếu bạn nhận hết, bạn không ưu tiên hoá gì cả.**

- Cách nói không xây dựng: *"Được, nếu thêm cái này thì cái kia lùi sang bản sau — anh chị chọn cái nào?"*

**2. Tư duy giá trị.** Khả năng đánh giá một hạng mục theo **giá trị nghiệp vụ thật**, không theo ai yêu cầu hay ai nói to nhất.

**3. Chịu được sự không chắc chắn.** Bạn phải quyết định với thông tin không đầy đủ, và một số quyết định sẽ sai. **Điều quan trọng là quyết định nhanh và sẵn sàng sửa khi có bằng chứng mới.**

**4. Giao tiếp hai chiều.** Truyền đạt tầm nhìn xuống đội, và truyền đạt thực tế kỹ thuật lên stakeholder.

**5. Kiến thức domain đủ sâu** để phân biệt được điều gì thực sự quan trọng với người dùng.

> **Kỹ năng bị đánh giá thấp nhất: sẵn sàng thừa nhận một quyết định trước đó là sai.** Một PO bảo vệ quyết định cũ chỉ vì đã lỡ quyết định sẽ dẫn sản phẩm đi sai hướng lâu hơn cần thiết.

---

## 7. PO và BA phối hợp thế nào

Ở sản phẩm phức tạp, **PO và BA là hai vai trò bổ sung nhau**, không phải cạnh tranh.

| Việc | PO | BA |
|------|-----|-----|
| Quyết định thứ tự backlog | ✔ | Cung cấp thông tin đầu vào |
| Quyết định giá trị nghiệp vụ | ✔ | Phân tích để làm rõ giá trị |
| Chấp nhận công việc hoàn thành | ✔ | Chuẩn bị tiêu chí để đánh giá |
| Khai thác chi tiết từ người dùng | Tham gia | ✔ |
| Mô hình hoá quy trình, phân tích dữ liệu | | ✔ |
| Viết acceptance criteria chi tiết | Xác nhận | ✔ cùng tester |
| Trả lời câu hỏi chi tiết trong sprint | Câu hỏi về giá trị | ✔ câu hỏi về chi tiết |

> **Mô hình hiệu quả nhất cho sản phẩm phức tạp: PO lo GIÁ TRỊ và THỨ TỰ, BA lo CHI TIẾT và MÔ HÌNH HOÁ.** Điều này giải phóng PO khỏi việc chìm trong chi tiết, để họ có thời gian cho việc quan trọng nhất là nói chuyện với người dùng và định hướng sản phẩm.

---

## 8. Điểm cốt lõi

- **PO có thẩm quyền quyết định nội dung và thứ tự của backlog** và chịu trách nhiệm tối đa hoá giá trị.
- **PO là MỘT người, không phải một uỷ ban.**
- Sáu trách nhiệm: **tầm nhìn, quản lý backlog, ưu tiên hoá, trả lời kịp thời, chấp nhận công việc, đại diện stakeholder**.
- **Trách nhiệm bị đánh giá thấp nhất là trả lời câu hỏi kịp thời** — phần lớn giá trị PO tạo ra trong sprint đến từ đó.
- **PO vắng mặt là nguyên nhân thất bại số một của các đội Scrum.**
- **Tự đoán là chế độ thất bại tệ hơn bị chặn**, vì nó không nhìn thấy được cho tới giai đoạn muộn.
- **Một PO không quyết định được thì không phải PO — họ là người đưa tin.**
- Uỷ ban PO gây hậu quả nghiêm trọng nhất là **không ai chịu trách nhiệm cuối cùng**.
- **PO quyết định thứ tự và giá trị; đội quyết định cách làm và ước tính** — vượt ranh giới theo cả hai chiều đều gây hại.
- **PO đại diện cho tất cả stakeholder**, không chỉ phòng kinh doanh.
- **Nhận hết mọi yêu cầu nghĩa là không ưu tiên hoá gì cả.**
- **Nói chuyện với người dùng là hoạt động dễ bị cắt bỏ nhất khi bận và quan trọng nhất về dài hạn.**
- Chỉ báo sức khoẻ: **không dành được thời gian cho người dùng thật nghĩa là bạn đang quản lý backlog thay vì sở hữu sản phẩm**.
- **Quyết định nhanh và sẵn sàng sửa khi có bằng chứng mới** quan trọng hơn quyết định hoàn hảo.
- **Kỹ năng bị đánh giá thấp nhất là sẵn sàng thừa nhận quyết định trước đó là sai.**
- Với sản phẩm phức tạp: **PO lo giá trị và thứ tự, BA lo chi tiết và mô hình hoá**.

## 9. Tóm tắt

- Vai trò PO xoay quanh **một câu hỏi duy nhất: chúng ta nên xây gì tiếp theo, và vì sao?**
- **Thẩm quyền và sự sẵn sàng** là hai điều kiện tiên quyết — thiếu một trong hai thì vai trò không hoạt động.
- Ba chế độ thất bại — **vắng mặt, không thẩm quyền, uỷ ban** — chiếm phần lớn các trường hợp Scrum không hiệu quả.
- **PO và BA bổ sung nhau**, và phân chia đúng giải phóng PO cho việc quan trọng nhất là hiểu người dùng.
