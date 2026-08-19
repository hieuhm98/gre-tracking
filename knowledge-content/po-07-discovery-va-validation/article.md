# Product discovery & validation

## 1. Vấn đề lớn nhất của phát triển sản phẩm

> **Phần lớn tính năng được xây dựng không tạo ra giá trị nào cả.** Các nghiên cứu trong ngành đưa ra con số dao động, nhưng thông điệp thì nhất quán: **một tỷ lệ lớn công sức phát triển bị lãng phí vì xây đúng cách một thứ sai.**

**Nguyên nhân không phải là lập trình viên làm dở.** Nguyên nhân là **chúng ta đoán sai về điều người dùng cần**, rồi biến phỏng đoán đó thành yêu cầu, rồi biến yêu cầu thành code — mà không kiểm chứng ở bất kỳ bước nào.

**Hai loại công việc của một đội sản phẩm:**

| | Discovery | Delivery |
|---|-----------|----------|
| **Câu hỏi** | *"Chúng ta nên xây gì?"* | *"Xây nó cho đúng và chắc"* |
| **Đầu ra** | Kiến thức và quyết định | Phần mềm chạy được |
| **Đơn vị thành công** | Học được nhanh, sai rẻ | Giao hàng đều, chất lượng ổn |
| **Rủi ro chính** | Xây thứ không ai cần | Xây chậm hoặc lỗi |

> **Hai loại này chạy SONG SONG, không nối tiếp.** Trong khi đội đang delivery cho sprint hiện tại, PO và BA đang discovery cho những sprint tiếp theo.

---

## 2. Bốn loại rủi ro cần kiểm chứng

**Trước khi cam kết xây một thứ gì đáng kể, hãy hỏi bốn câu:**

**1. Rủi ro giá trị — *người dùng có muốn nó không?***

Đây là rủi ro bị bỏ qua nhiều nhất và cũng tốn kém nhất. **Không ai đọc bản mô tả tính năng của bạn và nói "cái này vô dụng" — họ chỉ đơn giản không dùng nó sau khi bạn phát hành.**

**2. Rủi ro khả dụng — *họ có hiểu cách dùng nó không?***

Một tính năng đúng nhưng khó hiểu thì cũng bằng không.

**3. Rủi ro khả thi — *chúng ta có xây được trong ràng buộc hiện tại không?***

Do đội phát triển trả lời, thường bằng một spike kỹ thuật.

**4. Rủi ro kinh doanh — *nó có phù hợp với phần còn lại của tổ chức không?***

Pháp lý, bán hàng, vận hành, thương hiệu, chi phí hạ tầng.

> **Sai lầm phổ biến: chỉ kiểm chứng rủi ro khả thi vì đó là loại dễ hỏi nhất.** Đội trả lời được ngay *"làm được, mất ba tuần"*, còn câu *"có ai cần không"* thì không ai trong phòng trả lời được — nên nó bị lờ đi.

---

## 3. Phỏng vấn khách hàng cho đúng

**Mục tiêu của phỏng vấn discovery KHÔNG phải là hỏi người dùng muốn tính năng gì.** Mục tiêu là **hiểu vấn đề, ngữ cảnh và hành vi hiện tại của họ.**

**Bốn nguyên tắc:**

**1. Hỏi về quá khứ, không hỏi về tương lai.**

- ❌ *"Anh có dùng tính năng này không nếu chúng tôi làm?"* — mọi người nói có vì lịch sự.
- ✅ *"Lần gần nhất anh gặp tình huống này là khi nào? Lúc đó anh làm gì?"*

**2. Đào vào hành vi thật, không dừng ở ý kiến.**

Ý kiến rẻ; hành vi đắt. *"Anh đã bỏ tiền hoặc bỏ thời gian ra để giải quyết việc này chưa?"* là câu hỏi phân biệt vấn đề thật với vấn đề nói cho vui.

**3. Hỏi năm lần vì sao.**

Người dùng thường nói giải pháp chứ không nói vấn đề. *"Tôi cần nút xuất Excel"* — vì sao? — *"để gửi cho sếp"* — vì sao không gửi link? — *"vì sếp xem trên máy bay"*. **Vấn đề thật là xem offline, và nút Excel chỉ là một cách giải.**

**4. Đừng bán trong lúc phỏng vấn.**

Ngay khi bạn bắt đầu thuyết phục, người đối diện chuyển sang chế độ lịch sự và bạn mất hết dữ liệu.

> **Số lượng: khoảng năm tới tám cuộc phỏng vấn cho một nhóm người dùng thường đủ để các mẫu hình lặp lại xuất hiện.** Sau đó giá trị biên giảm nhanh.

---

## 4. Giả định và cách thử nghiệm rẻ

**Mọi ý tưởng sản phẩm đều là một chồng giả định.** Việc của discovery là **tìm giả định nguy hiểm nhất và thử nó bằng cách rẻ nhất.**

**Cách xác định giả định nguy hiểm nhất — hai câu hỏi:**

- **Nếu giả định này sai, toàn bộ ý tưởng có sụp không?**
- **Chúng ta có bằng chứng nào cho nó chưa?**

**Giả định vừa quan trọng vừa chưa có bằng chứng chính là thứ phải thử trước.**

**Thang thử nghiệm từ rẻ tới đắt:**

| Cách thử | Chi phí | Trả lời được rủi ro nào |
|----------|---------|------------------------|
| **Hỏi dữ liệu sẵn có** | Gần như bằng không | Giá trị, kinh doanh |
| **Phỏng vấn khách hàng** | Vài giờ | Giá trị |
| **Prototype giấy hoặc Figma** | Một tới hai ngày | Khả dụng |
| **Landing page giả** | Vài ngày | Giá trị (đo tỷ lệ đăng ký) |
| **Concierge / Wizard of Oz** | Một tới hai tuần, làm tay | Giá trị, khả dụng |
| **Spike kỹ thuật** | Vài ngày | Khả thi |
| **MVP thật** | Nhiều tuần | Tất cả, nhưng đắt nhất |

> **Nguyên tắc: luôn chọn thử nghiệm rẻ nhất có thể bác bỏ giả định.** Bạn không cần bằng chứng hoàn hảo, bạn cần **đủ bằng chứng để dám bước tiếp**.

---

## 5. MVP bị hiểu sai như thế nào

**MVP là phiên bản nhỏ nhất cho phép bạn HỌC được điều quan trọng nhất từ người dùng thật.**

**Ba cách hiểu sai phổ biến:**

| Hiểu sai | Vì sao sai |
|----------|-----------|
| *"MVP là bản rẻ tiền, chất lượng thấp"* | MVP nhỏ về PHẠM VI, không thấp về chất lượng — một MVP đầy lỗi chỉ dạy bạn rằng người dùng ghét lỗi |
| *"MVP là giai đoạn một của kế hoạch ba giai đoạn"* | Nếu đã quyết trước sẽ làm cả ba giai đoạn thì đó không phải MVP, đó là bản giao từng phần |
| *"MVP là để tiết kiệm ngân sách"* | MVP là để giảm rủi ro học sai, tiết kiệm chỉ là hệ quả |

> **Câu hỏi kiểm tra một MVP có đúng nghĩa không: *"Kết quả nào của MVP này sẽ khiến chúng ta DỪNG lại?"*** Nếu không có câu trả lời, bạn không đang làm MVP — bạn đang giao hàng từng phần và gọi tên cho sang.

**Đừng quên chi phí ẩn của MVP:** một MVP tồi tung ra cho khách hàng thật có thể **làm hỏng lòng tin và bạn mất luôn cơ hội thử lần hai** với chính nhóm người đó.

---

## 6. Đọc phản hồi một cách trung thực

**Bốn cái bẫy khi diễn giải kết quả:**

**1. Thiên kiến xác nhận.** Bạn nhớ ba người khen và quên bảy người thờ ơ. **Cách chống: viết ra tiêu chí thành công TRƯỚC khi chạy thử nghiệm.** *"Nếu dưới 20 phần trăm người dùng thử đến bước hai, chúng ta bỏ hướng này."*

**2. Nhầm lịch sự với nhu cầu.** *"Ý tưởng hay đấy"* không phải dữ liệu. **Dữ liệu là hành vi**: họ có đăng ký không, có quay lại không, có trả tiền không.

**3. Mẫu sai.** Phỏng vấn năm người đều là nhân viên trong công ty bạn thì không nói lên gì về thị trường.

**4. Không phân biệt tín hiệu và nhiễu.** Một người dùng gào rất to không đại diện cho một nghìn người im lặng. **Nhưng ngược lại, một phản hồi lặp lại ở người thứ ba và thứ tư thì đã là mẫu hình.**

> **Kết quả có giá trị nhất của discovery là một quyết định KHÔNG XÂY.** Mỗi lần bạn dừng một ý tưởng sau hai ngày thử nghiệm thay vì hai tháng lập trình, discovery đã trả đủ tiền cho chính nó.

**Ba kết luận hợp lệ sau một thử nghiệm:** *tiếp tục*, *xoay hướng*, *dừng lại*. **Nếu đội bạn chưa bao giờ chọn phương án thứ ba, discovery của bạn chỉ là nghi lễ.**

---

## 7. Điểm cốt lõi

- **Một tỷ lệ lớn tính năng được xây không tạo ra giá trị nào** — vì ta xây đúng cách một thứ sai.
- **Discovery và delivery chạy song song**, không nối tiếp.
- Bốn rủi ro cần kiểm chứng: **giá trị, khả dụng, khả thi, kinh doanh**.
- **Đội hay chỉ kiểm chứng rủi ro khả thi** vì đó là câu hỏi duy nhất có người trong phòng trả lời được.
- Mục tiêu phỏng vấn là **hiểu vấn đề và hành vi**, không phải hỏi muốn tính năng gì.
- **Hỏi về quá khứ, không hỏi về tương lai** — mọi người nói có vì lịch sự.
- ***"Anh đã bỏ tiền hay thời gian ra chưa"*** phân biệt vấn đề thật với vấn đề nói cho vui.
- **Hỏi năm lần vì sao** vì người dùng thường nói giải pháp chứ không nói vấn đề.
- **Năm tới tám cuộc phỏng vấn** cho một nhóm người dùng thường đủ để mẫu hình xuất hiện.
- Giả định nguy hiểm nhất là thứ **vừa quan trọng vừa chưa có bằng chứng**.
- **Luôn chọn thử nghiệm rẻ nhất có thể bác bỏ giả định.**
- **MVP nhỏ về phạm vi chứ không thấp về chất lượng.**
- **Nếu không có kết quả nào khiến bạn dừng lại, đó không phải MVP.**
- **Một MVP tồi có thể làm hỏng lòng tin và mất luôn cơ hội thử lần hai.**
- Chống thiên kiến xác nhận bằng cách **viết tiêu chí thành công trước khi chạy thử nghiệm**.
- ***"Ý tưởng hay đấy"* không phải dữ liệu** — dữ liệu là hành vi.
- **Một người gào to không đại diện cho một nghìn người im lặng**, nhưng lặp lại tới người thứ ba đã là mẫu hình.
- **Kết quả giá trị nhất của discovery là một quyết định không xây.**
- **Đội chưa bao giờ chọn dừng lại thì discovery chỉ là nghi lễ.**

## 8. Tóm tắt

- Discovery tồn tại để **giảm rủi ro xây nhầm thứ**, và nó phải chạy liên tục song song với delivery.
- **Bốn loại rủi ro cần được kiểm chứng có ý thức**, nhất là rủi ro giá trị vì nó dễ bị bỏ qua nhất.
- **Phỏng vấn tốt hỏi về hành vi quá khứ**, và thang thử nghiệm nên đi từ rẻ tới đắt.
- **MVP là công cụ học chứ không phải bản rút gọn**, và tiêu chí dừng phải được viết ra trước.
