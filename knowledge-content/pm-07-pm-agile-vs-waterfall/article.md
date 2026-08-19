# PM trong Agile vs Waterfall

## 1. Hai mô hình giải quyết hai bài toán khác nhau

> **Waterfall và Agile không phải một cái đúng một cái sai. Chúng là hai câu trả lời cho hai câu hỏi khác nhau về mức độ bất định.**

**Waterfall giả định: chúng ta có thể biết trước phải làm gì.** Nếu giả định này đúng, làm tuần tự là hiệu quả nhất — không lãng phí vào việc lập kế hoạch lại, không tốn chi phí cho việc quay vòng.

**Agile giả định: chúng ta sẽ học được điều quan trọng chỉ sau khi có người dùng thật chạm vào sản phẩm.** Nếu giả định này đúng, làm tuần tự là thảm hoạ — bạn sẽ hoàn thiện một thứ sai với độ chính xác rất cao.

**Cả hai giả định đều đúng trong những bối cảnh khác nhau:**

| Bối cảnh | Giả định nào đúng hơn |
|----------|----------------------|
| Xây một hệ thống kế toán theo chuẩn đã ban hành | **Waterfall** — yêu cầu do quy định quyết định, không do người dùng |
| Làm một sản phẩm mới cho một thị trường chưa ai làm | **Agile** — mọi thứ đều là giả định |
| Di trú dữ liệu từ hệ thống cũ sang hệ thống mới | **Waterfall** — công việc rõ, không có gì để học từ người dùng |
| Cải thiện tỷ lệ chuyển đổi của một luồng thanh toán | **Agile** — chỉ dữ liệu thật nói được cách nào hiệu quả |

> **Sai lầm tốn kém nhất không phải chọn sai mô hình, mà là chọn một mô hình rồi áp dụng nửa vời.** Waterfall không có kiểm soát thay đổi và Agile không có phản hồi thật đều tệ hơn cả hai mô hình gốc.

---

## 2. Vai trò PM thay đổi thế nào

**Bốn chuyển dịch cốt lõi:**

| | PM trong Waterfall | PM trong Agile |
|---|--------------------|----------------|
| **Kế hoạch** | Lập chi tiết một lần, bảo vệ nó | **Lập liên tục**, mỗi sprint một vòng nhỏ |
| **Kiểm soát** | Đo độ lệch so với baseline | **Đo tốc độ giao hàng thật** và tổng còn lại |
| **Phạm vi** | Cố định, thay đổi qua phê duyệt | **Biến số**, quản lý bằng thứ tự backlog |
| **Cách làm việc với đội** | Phân công và theo dõi | **Tháo gỡ trở ngại và bảo vệ nhịp làm việc** |

**Điều KHÔNG đổi — và đây là phần quan trọng nhất:**

- **Ai đó vẫn phải trả lời cho ngân sách và cho cam kết với bên ngoài.**
- **Ai đó vẫn phải quản lý phụ thuộc giữa các đội và với bên thứ ba.**
- **Ai đó vẫn phải theo dõi rủi ro không thuộc phạm vi một sprint** — hợp đồng, pháp lý, nhân sự, kiến trúc dài hạn.
- **Ai đó vẫn phải giao tiếp với cấp trên bằng ngôn ngữ của họ**, chứ không phải bằng burndown chart.

> **Nhận định phổ biến rằng *"Agile không cần PM"* chỉ đúng với một đội duy nhất, một sản phẩm, không phụ thuộc bên ngoài, và không có cam kết ngày tháng với ai.** Trong bối cảnh đó, PO và Scrum Master chia nhau đủ trách nhiệm. **Ngay khi có nhiều đội, nhiều phụ thuộc, hoặc một hợp đồng — công việc PM xuất hiện lại, dù chức danh có thể khác.**

---

## 3. PM làm gì trong một tổ chức Agile

**Sáu vùng công việc rõ ràng thuộc PM chứ không thuộc PO hay Scrum Master:**

**1. Phối hợp liên đội.** Khi ba đội cùng làm một sản phẩm, phụ thuộc giữa họ không tự biến mất. **PM là người nhìn thấy phụ thuộc trước khi nó thành trở ngại.**

**2. Quản lý bên thứ ba.** Đối tác, nhà cung cấp, đơn vị kiểm định. **Không đội Scrum nào tự đàm phán được việc đối tác chậm mở API hai tháng.**

**3. Ngân sách và báo cáo lên trên.** Ban lãnh đạo không đọc backlog. Họ cần biết: **tiêu bao nhiêu, được gì, rủi ro nào, quyết định gì cần từ họ.**

**4. Rủi ro dài hạn.** Rủi ro về nhân sự, hợp đồng, tuân thủ, kiến trúc — những thứ nằm ngoài tầm nhìn của một sprint.

**5. Cam kết ngày tháng ra bên ngoài.** Có những ngày không đàm phán được: chiến dịch marketing, quy định pháp luật có hiệu lực, hội chợ ngành. **PM là người biến những ngày đó thành ràng buộc mà đội hiểu được, và biến năng lực của đội thành dự báo mà bên ngoài hiểu được.**

**6. Loại bỏ trở ngại cấp tổ chức.** Không có môi trường thử nghiệm, quy trình phê duyệt ba tuần, thiếu quyền truy cập. **Đội không tự sửa được những thứ này.**

**Ranh giới cần giữ rất rõ:** **PM trong Agile KHÔNG phân công công việc cho từng người, KHÔNG quyết định thứ tự backlog, và KHÔNG ép cam kết sprint.** PM lấn vào ba việc đó sẽ phá vỡ chính cơ chế làm Agile hoạt động.

---

## 4. Mô hình lai và cách làm cho nó không tệ

**Phần lớn dự án thực tế là lai, và điều đó không phải sự thất bại của lý thuyết — đó là phản ứng hợp lý với thực tế có cả phần rõ và phần bất định.**

**Ba dạng lai hay gặp:**

**1. Lai theo giai đoạn.** Khởi tạo và lập kế hoạch tổng thể làm theo cách truyền thống; phần xây dựng làm theo sprint. **Phù hợp khi cần phê duyệt ngân sách một lần cho cả dự án nhưng nội dung còn linh hoạt.**

**2. Lai theo phần công việc.** Phần tích hợp và di trú dữ liệu chạy theo kế hoạch tuần tự; phần giao diện và trải nghiệm chạy theo sprint có phản hồi. **Đây là dạng thực dụng nhất, vì nó đặt mỗi loại công việc vào mô hình phù hợp với nó.**

**3. Lai theo tầng báo cáo.** Đội làm việc theo Scrum thật; báo cáo lên trên được dịch thành mốc và phần trăm. **Hợp lệ nếu việc dịch là trung thực; trở thành nguy hiểm nếu đội phải làm hai hệ thống kế hoạch song song.**

**Ba dấu hiệu một mô hình lai đã thành cái tệ nhất của cả hai:**

| Dấu hiệu | Vì sao nó tệ |
|----------|-------------|
| **Sprint đều đặn nhưng phạm vi và ngày đều cố định từ đầu** | Đội mang mọi chi phí của Agile mà không có lợi ích nào — không có gì được điều chỉnh theo học hỏi |
| **Có backlog nhưng thứ tự do người ngoài quyết theo từng tuần** | Không ai chịu trách nhiệm về giá trị, và đội không thể lập kế hoạch |
| **Sprint review không có người dùng thật, chỉ có báo cáo phần trăm** | Vòng phản hồi bị cắt, nên bạn chỉ còn nghi lễ |

> **Nguyên tắc để mô hình lai hoạt động: mỗi biến số phải có một chỗ để nhường.** Nếu ngày cố định và phạm vi cố định và chất lượng không được giảm, mô hình lai chỉ là waterfall có họp hàng ngày.

---

## 5. Chọn cách tiếp cận cho một dự án cụ thể

**Sáu câu hỏi, trả lời trung thực, cho bạn câu trả lời tốt hơn mọi tranh luận lý thuyết:**

**1. Yêu cầu có thể biết trước tới mức nào?** Nếu chúng do quy định hoặc do một hệ thống hiện có quyết định, phần bất định thấp và làm tuần tự rẻ hơn.

**2. Chi phí của việc sai là bao nhiêu, và bao lâu mới biết mình sai?** **Đây là câu hỏi quan trọng nhất.** Nếu phải sáu tháng mới biết, bạn cần vòng phản hồi ngắn dù hợp đồng nói gì.

**3. Người dùng có sẵn để cho phản hồi không?** Agile không hoạt động nếu không ai trả lời trong hai tuần. **Không có người dùng tham gia thì bạn đang làm waterfall chia nhỏ, không phải Agile.**

**4. Hợp đồng và ngân sách hoạt động thế nào?** Giá cố định không loại trừ Agile, nhưng đòi hỏi cố định tổng khối lượng và cho phép đổi nội dung.

**5. Yêu cầu tuân thủ nặng tới đâu?** Ngành y tế, tài chính, hàng không cần dấu vết tài liệu nhiều hơn. **Điều đó không loại bỏ sprint, nhưng thêm chi phí cho mỗi vòng.**

**6. Đội đã đủ trưởng thành chưa?** Agile chuyển nhiều quyết định xuống đội. **Một đội chưa từng tự quyết định gì sẽ cần thời gian và hỗ trợ, và việc áp Agile trong một tuần thường thất bại.**

**Một cách nhìn thực dụng: chọn theo mức bất định của từng phần, không theo triết lý của cả dự án.** Cùng một dự án có thể có một phần chạy tuần tự và một phần chạy sprint, miễn là ranh giới và phụ thuộc giữa hai phần được quản lý rõ.

---

## 6. Kỹ năng PM cần bổ sung khi chuyển sang Agile

**Bốn thay đổi lớn nhất về mặt cá nhân:**

**1. Từ kiểm soát sang tạo điều kiện.** Nguồn giá trị của bạn không còn là biết mọi chi tiết, mà là **loại bỏ những thứ chặn đội**. Đây là chuyển dịch khó nhất, đặc biệt với PM giỏi kiểm soát.

**2. Từ báo cáo phần trăm sang chứng minh bằng sản phẩm chạy được.** Câu *"module này xong 70 phần trăm"* được thay bằng *"đây là phần đang chạy, mời anh chị dùng thử"*. **Điều này trung thực hơn nhưng cũng khiến bạn không còn chỗ ẩn.**

**3. Từ dự báo bằng kế hoạch sang dự báo bằng dữ liệu thật.** Dùng tốc độ giao hàng thật của đội để dự báo, thay vì dùng kế hoạch viết từ đầu. **Dự báo dựa trên dữ liệu ba sprint gần nhất đáng tin hơn dự báo dựa trên ước tính sáu tháng trước.**

**4. Từ bảo vệ kế hoạch sang bảo vệ nhịp làm việc.** Điều bạn cần bảo vệ không còn là những con số đã cam kết, mà là **khả năng đội giao hàng đều đặn và bền vững** — vì đó chính là thứ tạo ra khả năng dự báo.

> **Điểm mấu chốt của cả bài: cả hai mô hình đều đòi hỏi những trách nhiệm giống nhau — biết vì sao dự án tồn tại, biết mình đang ở đâu, biết rủi ro gì đang treo, và nói thật với mọi người về tất cả những điều đó.** **Chỉ có công cụ và nhịp là khác.**

---

## 7. Điểm cốt lõi

- **Waterfall giả định biết trước được phải làm gì; Agile giả định sẽ học sau khi người dùng chạm vào sản phẩm.**
- **Cả hai giả định đều đúng trong bối cảnh khác nhau** — di trú dữ liệu khác với làm sản phẩm mới.
- **Sai lầm tốn kém nhất là áp dụng nửa vời**, không phải chọn sai mô hình.
- PM chuyển từ **lập kế hoạch một lần sang lập liên tục**, và từ **đo độ lệch sang đo tốc độ giao hàng thật**.
- Điều không đổi: **ngân sách, phụ thuộc liên đội, rủi ro ngoài sprint, và giao tiếp với cấp trên**.
- ***"Agile không cần PM"* chỉ đúng với một đội, một sản phẩm, không phụ thuộc, không cam kết ngày.**
- Sáu vùng của PM trong Agile: **phối hợp liên đội, bên thứ ba, ngân sách và báo cáo, rủi ro dài hạn, cam kết ngày ra ngoài, trở ngại cấp tổ chức**.
- **Ban lãnh đạo không đọc backlog** — họ cần tiêu bao nhiêu, được gì, rủi ro nào, quyết định gì.
- **PM trong Agile không phân công cá nhân, không quyết thứ tự backlog, không ép cam kết sprint.**
- **Mô hình lai là phản ứng hợp lý với thực tế**, không phải thất bại của lý thuyết.
- **Lai theo phần công việc là dạng thực dụng nhất** — mỗi loại việc vào mô hình phù hợp với nó.
- **Sprint đều đặn nhưng phạm vi và ngày cố định từ đầu là cái tệ nhất của cả hai mô hình.**
- **Mỗi biến số phải có một chỗ để nhường**, nếu không thì đó là waterfall có họp hàng ngày.
- Câu hỏi chọn mô hình quan trọng nhất: **chi phí của việc sai là bao nhiêu và bao lâu mới biết mình sai**.
- **Không có người dùng tham gia thì bạn đang làm waterfall chia nhỏ, không phải Agile.**
- **Giá cố định không loại trừ Agile** nhưng đòi hỏi cố định tổng khối lượng.
- **Tuân thủ nặng không loại bỏ sprint**, nhưng thêm chi phí cho mỗi vòng.
- **Chọn theo mức bất định của từng phần, không theo triết lý của cả dự án.**
- PM cần chuyển **từ kiểm soát sang tạo điều kiện** — chuyển dịch khó nhất.
- **Sản phẩm chạy được trung thực hơn phần trăm hoàn thành, và không còn chỗ ẩn.**
- **Dự báo từ dữ liệu ba sprint gần nhất đáng tin hơn ước tính sáu tháng trước.**
- **Điều cần bảo vệ không còn là con số cam kết mà là nhịp giao hàng bền vững.**

## 8. Tóm tắt

- Hai mô hình **trả lời hai câu hỏi khác nhau về mức độ bất định**, nên việc chọn phải dựa trên bối cảnh chứ không dựa trên niềm tin.
- **Vai trò PM không mất đi trong Agile** — nó chuyển sang phối hợp, phụ thuộc, ngân sách và rủi ro dài hạn.
- **Mô hình lai hoạt động khi mỗi biến số có chỗ để nhường**, và thất bại khi nó chỉ mang chi phí của cả hai.
- **Cả hai mô hình đòi hỏi cùng những trách nhiệm cốt lõi**; chỉ có công cụ và nhịp là khác.
