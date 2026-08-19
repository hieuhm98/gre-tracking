# Làm việc với Dev & QC

## 1. Ba vai trò, ba mục tiêu khác nhau

Đội phát triển không phải một khối đồng nhất. **BA, Dev và QC nhìn cùng một tính năng qua ba lăng kính khác nhau** — và hiểu điều đó là bước đầu tiên để cộng tác tốt.

| Vai trò | Câu hỏi họ tự đặt | Điều họ sợ nhất |
|---------|-------------------|-----------------|
| **BA** | *"Nhu cầu nghiệp vụ thật là gì?"* | Xây xong mới biết là sai thứ |
| **Developer** | *"Tôi phải xây chính xác cái gì và trong bao lâu?"* | Yêu cầu đổi liên tục sau khi đã viết mã |
| **QC / Tester** | *"Làm sao biết nó đúng, và nó sai ở đâu?"* | Không có tiêu chí rõ ràng để phán định đúng sai |

> **Phần lớn xung đột trong đội không phải do ai đó cố ý gây khó, mà do ba mục tiêu này va vào nhau.** Dev muốn yêu cầu ổn định; nghiệp vụ muốn linh hoạt. QC muốn tiêu chí rõ ràng; BA đôi khi chưa có đủ thông tin để cung cấp.

---

## 2. Làm việc với Developer

### Điều lập trình viên thực sự cần từ BA

**1. Sự rõ ràng về trường hợp ngoại lệ.** Đường đi thuận lợi thường dễ. Cái tốn thời gian là: *dữ liệu rỗng thì hiện gì, API lỗi thì làm sao, người dùng không đủ quyền thì thấy gì, hai người sửa cùng lúc thì ai thắng?*

**2. Lý do đằng sau yêu cầu.** Khi lập trình viên hiểu **vì sao**, họ thường đề xuất được cách làm rẻ hơn mà vẫn đạt mục tiêu. Khi chỉ nhận được **cái gì**, họ chỉ có thể làm đúng chữ.

**3. Câu trả lời kịp thời.** Một câu hỏi không được trả lời trong ngày sẽ khiến họ hoặc bị chặn, hoặc tự đoán. **Tự đoán là chế độ thất bại tệ hơn.**

**4. Sự ổn định trong sprint.** Thay đổi giữa sprint tốn nhiều hơn cùng thay đổi đó ở sprint sau, vì chi phí gián đoạn và mất đà.

### Khi lập trình viên nói cái này phức tạp

**Đừng phản ứng bằng cách nghi ngờ.** Hãy hỏi tiếp:

- *"Điều gì cụ thể làm nó phức tạp?"*
- *"Nếu bỏ phần X đi thì có đơn giản hơn nhiều không?"*
- *"Có cách nào rẻ hơn đáp ứng được cùng nhu cầu nghiệp vụ không?"*

> **Thường có nhiều cách đáp ứng cùng một nhu cầu với chi phí rất khác nhau. Cuộc trò chuyện đó chính là nơi BA tạo ra giá trị lớn nhất — nhiều hơn cả việc viết tài liệu.**

### Điều BA KHÔNG nên làm với Dev

- **Đừng đặc tả giải pháp kỹ thuật.** Nói *"hệ thống cần lưu lịch sử thay đổi"* chứ đừng nói *"tạo bảng history với các cột…"*
- **Đừng hứa thay họ.** Khi khách hàng hỏi bao giờ xong, đừng trả lời trước khi hỏi đội.
- **Đừng chuyển tiếp yêu cầu nguyên vẹn.** Nếu bạn không hiểu yêu cầu đó, lập trình viên cũng sẽ không hiểu.

---

## 3. Làm việc với QC / Tester

### Vì sao tester là đồng minh tốt nhất của BA

**Tester là nhóm người bị bỏ sót nhiều nhất trong review yêu cầu, nhưng lại là nhóm có giá trị nhất.**

Lý do: **tư duy kiểm thử là một bộ lọc lỗi cực kỳ hiệu quả áp dụng lên yêu cầu.** Khi tester đọc một câu yêu cầu, họ tự động hỏi:

- *Làm sao tôi chứng minh được điều này đúng?* → phát hiện yêu cầu **không kiểm chứng được**.
- *Kết quả mong đợi là gì?* → phát hiện yêu cầu **thiếu thông tin**.
- *Còn trường hợp nào khác không?* → phát hiện **ngoại lệ bị bỏ sót**.

> **Nguyên tắc thực dụng: nếu tester không viết được test case từ câu yêu cầu của bạn, thì lập trình viên cũng không xây đúng được.**

### Cộng tác cụ thể

**Viết acceptance criteria cùng nhau.** BA mang hiểu biết nghiệp vụ, tester mang tư duy tìm ngoại lệ. Kết quả tốt hơn nhiều so với BA viết một mình rồi tester đọc lại.

**Đưa tester vào grooming.** Họ sẽ hỏi những câu mà BA và Dev bỏ qua, ngay lúc còn rẻ để sửa.

**Cùng phân loại bug.** Khi tester báo một vấn đề, câu hỏi đầu tiên là: **đây là lỗi mã, hay là yêu cầu chưa nói tới trường hợp này?**

- Nếu là **lỗi mã** → Dev sửa.
- Nếu là **yêu cầu thiếu** → đây là một mục backlog mới, cần được ưu tiên hoá, không phải sửa lén trong sprint.

> **Nhầm lẫn hai loại này gây ra hai hậu quả: hoặc đội bị đổ lỗi oan cho việc thiếu yêu cầu, hoặc phạm vi bị mở rộng âm thầm dưới danh nghĩa sửa bug.**

---

## 4. Xử lý bất đồng: đổi yêu cầu

**Tình huống:** yêu cầu đã được chốt, đội đã bắt đầu làm, nhưng khách hàng muốn đổi.

**Quy trình xử lý đúng:**

**1. Làm rõ thay đổi thực sự là gì.** Rất nhiều yêu cầu đổi hoá ra chỉ là **làm rõ** một điều đã ngầm định — và làm rõ thì không tính là thay đổi phạm vi.

**2. Phân tích tác động cùng đội.** Không chỉ công sức viết mã mà cả: kiểm thử hồi quy, cập nhật tài liệu, ảnh hưởng tới các phần đã xây.

**3. Trình bày đánh đổi, không trình bày lời từ chối.** *"Được, thay đổi này mất khoảng ba ngày. Nếu đưa vào sprint này thì story X phải lùi sang sprint sau. Anh chị chọn phương án nào?"*

**4. Ghi lại quyết định kèm lý do.** Sáu tháng sau sẽ có người hỏi vì sao lại làm thế này.

> **Ranh giới giữa làm rõ và thay đổi phạm vi là nguồn tranh chấp lớn nhất, đặc biệt trong dự án outsourcing.** Hãy định nghĩa nó **trước**, không phải khi tranh chấp đã nổ ra.

---

## 5. Xử lý bất đồng: tranh cãi về bug

**Tình huống kinh điển:** tester báo bug, Dev nói *"đây không phải bug, yêu cầu không nói tới trường hợp này"*, tester nói *"nhưng hành vi này rõ ràng là sai"*.

**Cả hai đều đúng — và đó chính là vấn đề.**

**Cách xử lý:**

**Bước 1 — Xác định: yêu cầu có nói tới trường hợp này không?**

- **Có, và hệ thống làm sai** → đúng là bug, Dev sửa.
- **Không nói tới** → không phải bug theo nghĩa hợp đồng, nhưng vẫn là một khoảng trống cần xử lý.

**Bước 2 — Với khoảng trống, hỏi: hành vi hiện tại có chấp nhận được không?**

- **Chấp nhận được** → ghi lại làm quyết định, đóng vấn đề.
- **Không chấp nhận được** → tạo mục backlog mới và ưu tiên hoá bình thường.

**Bước 3 — Rút bài học.** Nếu nhiều bug thuộc loại *"yêu cầu không nói tới"*, đó là **tín hiệu quy trình**: BA cần phủ tốt hơn các trường hợp ngoại lệ trong grooming.

> **Điều quan trọng nhất: đừng để cuộc tranh luận biến thành việc tìm người có lỗi.** Câu hỏi đúng không phải *"ai sai"* mà là *"làm sao lần sau chúng ta bắt được điều này sớm hơn"*.

---

## 6. Ranh giới vai trò — ai quyết định gì

Nhiều xung đột thực chất là **xung đột về ranh giới**, không phải về nội dung.

| Quyết định | Thuộc về |
|-----------|----------|
| Sản phẩm cần làm gì | Product Owner / khách hàng, với đầu vào từ BA |
| Yêu cầu này nghĩa là gì chính xác | BA, sau khi làm rõ với người có thẩm quyền |
| Xây bằng cách nào, kiến trúc ra sao | Đội phát triển |
| Ước tính công sức | Đội phát triển, không phải BA hay PM |
| Chiến lược kiểm thử, phạm vi kiểm thử | QC lead |
| Thứ tự làm và cái gì bị cắt | Product Owner |
| Chất lượng đủ để phát hành chưa | Cả đội, theo definition of done |

> **Hai vi phạm ranh giới phổ biến nhất:**
>
> **1. BA ước tính thay đội.** Khi khách hàng hỏi *"cái này mất bao lâu?"* và BA trả lời ngay, bạn vừa cam kết thay người sẽ phải làm việc đó.
>
> **2. Dev quyết định hành vi nghiệp vụ.** Khi yêu cầu mơ hồ và lập trình viên tự chọn cách xử lý, quyết định nghiệp vụ đang được đưa ra bởi người không có bối cảnh nghiệp vụ.

---

## 7. Xây dựng quan hệ làm việc tốt

**Bốn thói quen tạo khác biệt lớn:**

**1. Có mặt và sẵn sàng.** Phần lớn giá trị BA tạo ra trong sprint đến từ việc **trả lời câu hỏi kịp thời**. Một BA giỏi mà không ai liên lạc được thì không giúp được gì.

**2. Thừa nhận khi không biết.** *"Em chưa rõ, để em hỏi lại và trả lời anh trong hôm nay"* tạo uy tín nhiều hơn là đoán bừa rồi sai.

**3. Bảo vệ đội khi cần.** Khi khách hàng ép thêm việc giữa sprint, BA nên là người giải thích tác động thay vì im lặng để đội tự xoay xở.

**4. Ghi nhận công khai.** Khi một lập trình viên phát hiện ra một khoảng trống trong yêu cầu, hãy nói ra điều đó trong buổi review. Nó khuyến khích cả đội cùng săn lỗi sớm.

> **Chỉ báo quan hệ tốt nhất: khi lập trình viên và tester chủ động tìm bạn để hỏi trước khi họ tự quyết định.** Điều đó nghĩa là họ tin bạn sẽ trả lời nhanh và trả lời đúng.

---

## 8. Điểm cốt lõi

- **BA, Dev và QC nhìn cùng một tính năng qua ba lăng kính khác nhau** với ba nỗi sợ khác nhau.
- Phần lớn xung đột **không do ai cố ý gây khó** mà do ba mục tiêu này va vào nhau.
- Điều Dev cần nhất: **rõ ràng về ngoại lệ, lý do đằng sau yêu cầu, câu trả lời kịp thời, ổn định trong sprint**.
- Khi Dev hiểu **vì sao**, họ thường đề xuất được cách rẻ hơn mà vẫn đạt mục tiêu.
- **Câu hỏi không được trả lời sẽ khiến Dev bị chặn hoặc tự đoán** — tự đoán là chế độ thất bại tệ hơn.
- Khi Dev nói *"cái này phức tạp"*, hãy hỏi **điều gì cụ thể làm nó phức tạp và có cách rẻ hơn không**.
- **BA đặc tả nhu cầu, không đặc tả giải pháp kỹ thuật.**
- **Nếu bạn không hiểu một yêu cầu, đừng chuyển tiếp nó nguyên vẹn** — Dev cũng sẽ không hiểu.
- **Tester là nhóm bị bỏ sót nhiều nhất trong review yêu cầu nhưng có giá trị nhất.**
- **Nếu tester không viết được test case từ yêu cầu của bạn, Dev cũng không xây đúng được.**
- Khi có bug, câu hỏi đầu tiên: **lỗi mã hay yêu cầu chưa nói tới trường hợp này?**
- Nhầm hai loại này gây ra **đổ lỗi oan hoặc mở rộng phạm vi âm thầm dưới danh nghĩa sửa bug**.
- Nhiều yêu cầu đổi hoá ra chỉ là **làm rõ điều đã ngầm định** — và làm rõ không tính là thay đổi phạm vi.
- **Trình bày đánh đổi, không trình bày lời từ chối**: nếu thêm cái này thì cái kia lùi lại.
- **Ranh giới làm rõ và thay đổi phạm vi phải được định nghĩa trước**, không phải khi tranh chấp nổ ra.
- Câu hỏi đúng khi tranh cãi bug không phải *"ai sai"* mà là ***"làm sao lần sau bắt được sớm hơn"***.
- Hai vi phạm ranh giới phổ biến: **BA ước tính thay đội** và **Dev quyết định hành vi nghiệp vụ**.
- **Ước tính công sức thuộc về đội phát triển**, không thuộc BA hay PM.
- **Có mặt và sẵn sàng** tạo ra phần lớn giá trị của BA trong sprint.
- Chỉ báo quan hệ tốt: **Dev và QC chủ động hỏi bạn trước khi tự quyết định**.

## 9. Tóm tắt

- Cộng tác tốt bắt đầu từ việc hiểu **mỗi vai trò sợ điều gì** và điều gì làm công việc của họ dễ hơn.
- Với Dev, giá trị lớn nhất của BA là **làm rõ ngoại lệ, giải thích lý do và trả lời nhanh**.
- Với QC, **acceptance criteria viết chung** và việc **phân loại bug đúng** là hai điểm cộng tác then chốt.
- Khi có bất đồng, hãy **tách vấn đề khỏi con người** và chuyển câu hỏi từ *ai sai* sang *làm sao bắt sớm hơn lần sau*.
