# Ưu tiên hoá sản phẩm

## 1. Vì sao ưu tiên hoá là trách nhiệm không thể uỷ quyền

> **Không đội nào có đủ thời gian để làm mọi thứ mọi người muốn. Câu hỏi không phải *"chúng ta có phải cắt bớt không"* mà là *"cắt cái gì, và ai quyết định"*.**

**Nếu Product Owner không quyết định thứ tự, ai đó khác sẽ quyết định — và thường là người tệ nhất để làm việc đó:**

- **Lập trình viên**, khi hết thời gian và phải chọn làm gì trước, dựa trên cái gì dễ hoặc thú vị nhất.
- **Người nói to nhất**, khi mọi quyết định đều được đưa ra trong phòng họp bởi người kiên trì nhất.
- **Sự ngẫu nhiên**, khi mọi thứ được làm theo thứ tự nó được yêu cầu.

**Hệ quả của việc không có ưu tiên rõ ràng:** khi lịch trình bị trễ, một thành viên chủ chốt rời đi, hoặc một yêu cầu gấp xuất hiện, **quản lý không biết phản ứng thế nào** — và mọi quyết định cắt giảm trở thành khủng hoảng chính trị.

---

## 2. Bốn trở ngại khi ưu tiên hoá

**1. *"Mọi thứ đều là ưu tiên cao."***

Đây là phản ứng phổ biến nhất từ stakeholder. Nó thực ra nghĩa là **"tôi không muốn phải chọn"** hoặc **"tôi sợ nếu nói ưu tiên thấp thì nó sẽ không bao giờ được làm."**

- **Cách xử lý — đảo ngược câu hỏi.** Đừng hỏi *"cái nào quan trọng?"* Hãy hỏi ***"nếu chúng ta chỉ giao được một nửa danh sách này vào tháng Sáu, anh chị muốn nửa nào?"*** **Buộc phải chọn giữa các phương án cụ thể sẽ tạo ra câu trả lời thật.**

**2. Sợ mất cái mình muốn.**

- **Cách xử lý:** làm rõ rằng ưu tiên thấp nghĩa là **làm sau**, không phải **không bao giờ làm** — và **giữ đúng lời hứa đó**. Nếu bạn nói *"sẽ xem lại vào quý sau"* thì phải thực sự xem lại.

**3. Xung đột giữa các stakeholder.**

- **Cách xử lý:** cần **một người ra quyết định có thẩm quyền** và **một khung quyết định minh bạch** dựa trên giá trị nghiệp vụ, không dựa trên ai nói to hơn.

**4. Thiếu thông tin để quyết định.**

- **Cách xử lý:** ưu tiên hoá là **hoạt động cộng tác** — khách hàng cung cấp giá trị, đội cung cấp chi phí và rủi ro kỹ thuật.

> **Nguyên tắc quan trọng: ưu tiên KHÔNG cố định.** Chúng thay đổi khi thị trường dịch chuyển, khi bạn học được điều mới, khi đối thủ tung sản phẩm. **Hãy xem lại định kỳ, đặc biệt ở đầu mỗi sprint.**

---

## 3. Các kỹ thuật ưu tiên hoá nhanh

### MoSCoW

Bốn mức được dùng rộng rãi, đặc biệt trong agile:

| Ký tự | Nghĩa | Giải thích |
|-------|-------|-----------|
| **M** | **Must** | Bắt buộc; **không có nó thì bản phát hành thất bại** |
| **S** | **Should** | Quan trọng, nên có, nhưng **có giải pháp thay thế tạm thời** |
| **C** | **Could** | Mong muốn; làm **nếu thời gian và nguồn lực cho phép** |
| **W** | **Won't** | **Sẽ không làm lần này** — nhưng có thể xem xét ở bản sau |

> **Chữ W là phần bị đánh giá thấp nhất và cũng hữu ích nhất.** *"Won't this time"* khác hoàn toàn với *"never"*. **Nó cho stakeholder sự an tâm rằng ý tưởng của họ không bị vứt bỏ, chỉ là chưa đến lượt** — và điều đó làm giảm mạnh xu hướng gán mọi thứ vào Must.

**Hướng dẫn thực tế:** nhiều đội đặt quy tắc **Must không vượt quá khoảng 60% tổng công sức**, để lại chỗ cho bất định.

### Kỹ thuật 100 đô la

**Mỗi stakeholder được cấp 100 điểm giả định và phân bổ chúng cho các hạng mục theo mức độ quan trọng với họ.**

- **Ưu điểm:** buộc phải **đánh đổi thật** — cho cái này nhiều hơn nghĩa là cho cái kia ít hơn. Đây chính là điều mà ưu tiên ba mức không làm được.
- **Nhược điểm và cách khắc phục:** ai đó có thể dồn hết 100 điểm vào một hạng mục để đẩy nó lên đầu → **đặt trần**, không hạng mục nào nhận quá 20 điểm từ một người. Kỹ thuật này cũng **không hoạt động tốt với danh sách rất dài** — hãy dùng cho 20 tới 40 mục.

---

## 4. Phân tích giá trị, chi phí và rủi ro

Khi mức đầu tư lớn và quyết định khó, bạn cần một cách tiếp cận **bán định lượng**.

> **Nguyên lý cốt lõi: ưu tiên cao nhất thuộc về những hạng mục có TỶ LỆ GIÁ TRỊ TRÊN CHI PHÍ cao nhất, sau khi điều chỉnh theo rủi ro.**

Điều này giải quyết vấn đề lớn nhất của ưu tiên hoá thuần cảm tính: **một hạng mục có giá trị vừa phải nhưng cực rẻ thường đáng làm trước một hạng mục giá trị cao nhưng cực đắt.**

**Bốn yếu tố cần ước tính trên thang tương đối (ví dụ 1–9):**

**1. Lợi ích tương đối** — giá trị nếu có nó. Do **khách hàng** đánh giá.

**2. Tổn thất tương đối** — thiệt hại nếu **không** có nó. Cũng do khách hàng đánh giá.

> **Vì sao cần cả hai?** Vì chúng khác nhau. **Một tính năng tuân thủ pháp luật có thể mang lại lợi ích thấp** — không ai vui hơn vì nó — **nhưng tổn thất cực cao** vì bị phạt hoặc bị cấm bán. **Nếu chỉ hỏi về lợi ích, bạn sẽ xếp sai nó xuống đáy danh sách.**

**3. Chi phí tương đối** — công sức hiện thực. Do **đội** ước tính.

**4. Rủi ro kỹ thuật tương đối** — mức bất định. Cũng do đội ước tính.

**Công thức:** **Ưu tiên = (lợi ích + tổn thất) ÷ (chi phí + rủi ro)**

> **Giá trị thật của kỹ thuật này không nằm ở con số.** Nó nằm ở chỗ:
>
> - Nó **buộc phải có cuộc trò chuyện có cấu trúc** giữa khách hàng và đội, mỗi bên đóng góp thông tin bên kia không có.
> - **Nó làm lộ ra sự bất đồng.** Khi hai stakeholder chấm cùng một hạng mục là 9 và 2, **đó là cuộc thảo luận đáng giá nhất trong cả buổi**.
> - Nó **tách bạch giá trị khỏi chi phí** — rất nhiều tranh cãi thực chất là hai bên đang nói về hai chiều khác nhau mà không nhận ra.

---

## 5. Mô hình Kano

**Kano phân loại tính năng theo cách chúng ảnh hưởng tới SỰ HÀI LÒNG của khách hàng** — một chiều mà phân tích giá trị-chi phí bỏ sót.

**Ba loại chính:**

**1. Must-be (thuộc tính bắt buộc).** Khách hàng **coi là hiển nhiên**. Có chúng không làm ai vui; **thiếu chúng làm mọi người tức giận**.

- Ví dụ: ứng dụng ngân hàng hiển thị đúng số dư; email gửi đi thực sự đến nơi.
- **Chiến lược: phải đạt mức ĐỦ, không cần xuất sắc.** Đầu tư thêm không tăng sự hài lòng.

**2. Performance (một chiều).** **Càng nhiều càng tốt** — hài lòng tăng tỷ lệ thuận.

- Ví dụ: tốc độ tải trang, dung lượng lưu trữ, thời lượng pin.
- **Đây là nơi khách hàng so sánh bạn với đối thủ.**
- **Chiến lược: đầu tư có cân nhắc theo vị thế cạnh tranh mong muốn.**

**3. Delighter (thuộc tính hấp dẫn).** Khách hàng **không mong đợi và không yêu cầu**. Thiếu chúng không ai phàn nàn; **có chúng tạo ra sự yêu thích**.

- **Chiến lược: một vài delighter được chọn kỹ tạo khác biệt lớn — nhưng đừng đầu tư trước khi các must-be đã vững.**

> **Cái nhìn quan trọng nhất của Kano: các loại này DI CHUYỂN theo thời gian.** Điều từng là delighter trở thành performance, rồi trở thành must-be. **Đây là lý do sản phẩm phải liên tục đổi mới chỉ để giữ nguyên vị trí.**

**Cách dùng Kano:**

- **Bảo đảm mọi must-be nằm trong bản phát hành đầu tiên** — chúng là điều kiện tiên quyết, không phải lựa chọn.
- **Phần lớn công sức còn lại cho performance** ở những chiều khách hàng thực sự quan tâm.
- **Một phần nhỏ cho một hai delighter** để tạo khác biệt.
- **Đừng bao giờ đánh đổi must-be lấy delighter.** Sản phẩm có tính năng gây thích thú nhưng thiếu điều cơ bản sẽ bị từ chối.

---

## 6. Đừng quên phụ thuộc

**Ưu tiên theo giá trị là đầu vào cho kế hoạch, không phải bản thân kế hoạch.**

**Một số hạng mục ưu tiên thấp vẫn phải làm sớm vì hạng mục ưu tiên cao phụ thuộc vào chúng.** Cơ chế xác thực người dùng có thể không mang giá trị trực tiếp nào, nhưng mọi thứ khác đều cần nó.

**Bốn loại phụ thuộc cần tính tới:**

| Loại | Ví dụ |
|------|-------|
| **Kỹ thuật** | Không thể xây báo cáo trước khi có dữ liệu được ghi lại |
| **Kiến trúc** | Yêu cầu về khả năng mở rộng phải được xử lý sớm, không thể trang bị thêm rẻ |
| **Bên ngoài** | Chờ đối tác mở API; chờ giấy phép của cơ quan quản lý |
| **Học hỏi** | Cần kết quả từ một thử nghiệm trước khi quyết định hướng tiếp theo |

> **Cách xử lý: xếp hạng theo giá trị trước, rồi điều chỉnh theo thứ tự kỹ thuật bắt buộc — và ghi lại lý do khi bạn phá vỡ thứ tự giá trị.** Nếu không ghi lại, sáu tháng sau sẽ có người hỏi vì sao một hạng mục giá trị thấp lại được làm trước.

---

## 7. Điểm cốt lõi

- Câu hỏi không phải *"có phải cắt bớt không"* mà là ***"cắt cái gì, và ai quyết định"***.
- Nếu PO không quyết định thứ tự, **lập trình viên, người nói to nhất hoặc sự ngẫu nhiên sẽ quyết định thay**.
- Không có ưu tiên rõ ràng, **mọi quyết định cắt giảm trở thành khủng hoảng chính trị**.
- ***"Mọi thứ đều ưu tiên cao"* thực ra nghĩa là *"tôi không muốn phải chọn"*.**
- Cách xử lý: **đảo ngược câu hỏi** thành *"nếu chỉ giao được một nửa, anh chị muốn nửa nào?"*
- **Ưu tiên thấp nghĩa là làm sau, không phải không bao giờ làm** — và phải giữ đúng lời hứa đó.
- **Ưu tiên hoá là hoạt động cộng tác**: khách hàng cung cấp giá trị, đội cung cấp chi phí và rủi ro.
- **Ưu tiên không cố định** — hãy xem lại định kỳ, đặc biệt ở đầu mỗi sprint.
- **Chữ W trong MoSCoW là phần hữu ích nhất**: *"won't this time"* khác hoàn toàn với *"never"*.
- Nhiều đội đặt quy tắc **Must không vượt quá khoảng 60% tổng công sức**.
- **Kỹ thuật 100 đô la buộc phải đánh đổi thật**, nhưng cần đặt trần để chống thao túng.
- **Hạng mục giá trị vừa phải nhưng cực rẻ thường đáng làm trước hạng mục giá trị cao nhưng cực đắt.**
- **Phải hỏi CẢ lợi ích khi có VÀ tổn thất khi không có** — tính năng tuân thủ có lợi ích thấp nhưng tổn thất cực cao.
- **Giá trị thật của phân tích bán định lượng là làm lộ ra sự bất đồng**, không phải con số cuối.
- Kano: **must-be chỉ cần đủ, performance đầu tư có cân nhắc, delighter chọn lọc**.
- **Các loại Kano di chuyển theo thời gian** — delighter thành performance thành must-be.
- **Đừng bao giờ đánh đổi must-be lấy delighter** — sản phẩm thiếu điều cơ bản sẽ bị từ chối.
- **Một số hạng mục ưu tiên thấp phải làm sớm** vì hạng mục ưu tiên cao phụ thuộc vào chúng.
- **Ghi lại lý do khi bạn phá vỡ thứ tự giá trị** vì lý do kỹ thuật.

## 8. Tóm tắt

- Ưu tiên hoá là **trách nhiệm không thể uỷ quyền của Product Owner**, và nó phải được làm liên tục chứ không một lần.
- Chọn kỹ thuật theo hoàn cảnh: **MoSCoW cho tốc độ, 100 đô la cho đánh đổi thật, phân tích giá trị-chi phí-rủi ro cho quyết định lớn**.
- **Kano bổ sung chiều hài lòng** mà phân tích giá trị-chi phí bỏ sót, và nhắc rằng kỳ vọng khách hàng dịch chuyển theo thời gian.
- **Ưu tiên theo giá trị là đầu vào cho kế hoạch**, và kế hoạch cuối cùng phải tính tới thứ tự kỹ thuật bắt buộc.
