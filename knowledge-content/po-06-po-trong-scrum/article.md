# Product Owner trong Scrum

## 1. Vì sao Scrum đặt PO vào một vai trò riêng

> **Scrum tách bạch ba trách nhiệm: LÀM GÌ (Product Owner), LÀM THẾ NÀO (đội phát triển), và QUY TRÌNH (Scrum Master).**

**Lý do của sự tách bạch này:** khi một người vừa quyết định làm gì vừa quyết định làm thế nào, **áp lực tiến độ luôn thắng chất lượng**. Người đó sẽ tự cho phép mình cắt góc kỹ thuật để kịp cam kết mà chính mình đưa ra.

**Ba ranh giới cần thuộc lòng:**

| Câu hỏi | Ai quyết định |
|---------|---------------|
| **Làm gì và theo thứ tự nào** | **Product Owner** — không ai được ghi đè thứ tự backlog |
| **Làm bao nhiêu trong một sprint** | **Đội phát triển** — PO không được ép thêm hạng mục |
| **Làm bằng cách nào** | **Đội phát triển** — thiết kế, kiến trúc, kỹ thuật |
| **Quy trình vận hành ra sao** | **Scrum Master** — nhưng chỉ hỗ trợ, không chỉ huy |

> **Sai lầm phổ biến nhất: PO nói *"sprint này phải xong cả bảy story"*.** Đó là xâm phạm quyền của đội. **PO được nói cái gì quan trọng hơn cái gì; đội nói bao nhiêu là khả thi.**

---

## 2. PO ở từng sự kiện Scrum

### Sprint Planning

- **PO trình bày mục tiêu sprint** và giải thích vì sao các hạng mục đầu backlog lại quan trọng.
- **PO có mặt suốt buổi** để trả lời câu hỏi khi đội bóc tách công việc.
- **PO KHÔNG** quyết định đội nhận bao nhiêu, và **KHÔNG** phân công ai làm gì.

> **Dấu hiệu PO chuẩn bị kém: buổi planning kéo dài vì đội liên tục hỏi những câu lẽ ra đã được giải đáp trong refinement.**

### Daily Scrum

- **PO không bắt buộc tham dự.** Đây là buổi của đội phát triển.
- **Nếu có mặt, PO chỉ nghe** để nắm trở ngại, không biến buổi này thành cuộc họp báo cáo tiến độ cho mình.
- **Giá trị lớn nhất của việc có mặt: nghe được vấn đề trong ngày và trả lời ngay khi đội cần quyết định nghiệp vụ.**

### Sprint Review

- **PO là người quyết định hạng mục nào được chấp nhận.**
- **PO mời stakeholder thật** — buổi review không có người dùng thật thì chỉ là buổi trình diễn nội bộ.
- **PO cập nhật lại backlog dựa trên phản hồi** ngay sau buổi.

### Sprint Retrospective

- **PO nên tham dự** vì PO là một phần của hệ thống làm việc.
- **Nhưng PO phải cẩn thận:** nếu đội không dám nói thẳng khi có PO, hãy hỏi Scrum Master và chấp nhận vắng mặt ở một số buổi.

### Backlog Refinement

- **Đây là sự kiện PO đầu tư nhiều thời gian nhất**, dù Scrum Guide không liệt kê nó là sự kiện chính thức.
- Xem chi tiết ở bài về product backlog.

---

## 3. Chấp nhận hay từ chối công việc

**Ở sprint review, PO là người duy nhất có quyền nói một hạng mục đã "xong".**

**Cơ sở để chấp nhận gồm hai lớp:**

**1. Definition of Done — chung cho mọi hạng mục.** Đã code, đã review, đã test, đã tích hợp, đã cập nhật tài liệu. **Do đội và PO thống nhất từ trước.**

**2. Acceptance criteria — riêng cho từng hạng mục.** Các điều kiện cụ thể mô tả hành vi mong đợi.

> **Nguyên tắc vàng: không có "xong 90 phần trăm".** Một hạng mục hoặc đạt hoặc không. **Chấp nhận công việc dở dang là cách nhanh nhất phá huỷ ý nghĩa của velocity và mọi dự báo dựa trên nó.**

**Khi phải từ chối, hãy làm đúng cách:**

- **Từ chối hạng mục, không phải con người.** Nói *"story này chưa đáp ứng AC số 3"*, không nói *"em làm chưa tới"*.
- **Từ chối tại chỗ và ghi rõ lý do**, đừng để mơ hồ rồi tranh cãi ở sprint sau.
- **Hỏi vì sao nó lọt tới đây.** AC không rõ? Đội hiểu sai? PO không sẵn sàng trả lời trong sprint? **Nguyên nhân thường nằm ở phía trước chứ không phải ở lập trình viên.**

> **Nếu bạn phải từ chối nhiều hạng mục mỗi sprint, vấn đề nằm ở refinement chứ không ở đội.**

---

## 4. PO không được làm gì

**Bốn hành vi phá vỡ Scrum mà PO hay mắc:**

**1. Thêm việc giữa sprint.** Sprint backlog thuộc về đội. Nếu có việc thật sự khẩn cấp, **cách đúng là thương lượng bỏ một hạng mục tương đương ra**, hoặc trong trường hợp cực đoan là huỷ sprint.

**2. Ép cam kết.** *"Sprint trước làm được 30 điểm, sprint này phải 35."* **Velocity là công cụ dự báo, không phải chỉ tiêu năng suất.** Biến nó thành chỉ tiêu thì đội sẽ thổi phồng ước tính, và bạn mất luôn công cụ dự báo.

**3. Vắng mặt.** **PO không sẵn sàng là rủi ro số một của một đội Scrum.** Đội bị chặn sẽ tự đoán ý, và đoán sai thì phải làm lại.

**4. Ôm luôn việc thiết kế giải pháp.** PO mô tả vấn đề và giá trị; **đội thiết kế cách giải quyết**. PO áp đặt giải pháp kỹ thuật sẽ vừa mất quyền của đội vừa mất luôn ý tưởng tốt hơn.

---

## 5. Ranh giới với Scrum Master và BA

**PO và Scrum Master:**

| | Product Owner | Scrum Master |
|---|---------------|--------------|
| **Tối ưu cho** | Giá trị sản phẩm | Hiệu quả của quy trình và đội |
| **Quyền hạn** | Quyết định nội dung và thứ tự | Không có quyền chỉ huy, chỉ hỗ trợ |
| **Xung đột lành mạnh** | Muốn giao nhiều hơn | Bảo vệ tính bền vững của nhịp làm việc |

> **Hai vai trò này CĂNG NHAU một cách có chủ ý.** Gộp làm một người là mất cơ chế kiểm soát: PO kiêm SM sẽ luôn ưu tiên tiến độ hơn sức khoẻ của đội.

**PO và Business Analyst:** ở nhiều tổ chức Việt Nam, BA làm phần lớn công việc phân tích và viết user story, còn PO chịu trách nhiệm về thứ tự và về giá trị. **Điều bắt buộc là quyền quyết định thứ tự chỉ thuộc về một người.** Hai người cùng sắp xếp backlog là công thức của hỗn loạn.

---

## 6. Làm PO trong đội phân tán và nhiều đội

**Khi đội ngồi khác múi giờ:**

- **Tăng độ chi tiết của acceptance criteria** để bù cho việc không thể hỏi ngay.
- **Ghi lại quyết định bằng văn bản** trong Jira hoặc Confluence, không để trong đầu.
- **Đảm bảo có một khung giờ trùng nhau** mỗi ngày để giải quyết câu hỏi chặn.

**Khi một sản phẩm có nhiều đội:**

- **Một product backlog duy nhất** cho cả sản phẩm — nhiều backlog song song sẽ tạo ưu tiên mâu thuẫn.
- **Một PO chịu trách nhiệm cuối cùng**, có thể có các PO khu vực hỗ trợ từng đội.
- **Phụ thuộc giữa các đội phải được nhìn thấy sớm**, thường qua một buổi refinement chung.

> **Một PO phục vụ tối đa khoảng hai đội là giới hạn thực tế.** Vượt quá đó, PO trở thành nút cổ chai và đội bắt đầu tự đoán ý.

---

## 7. Điểm cốt lõi

- Scrum tách **LÀM GÌ (PO), LÀM THẾ NÀO (đội), QUY TRÌNH (SM)** để áp lực tiến độ không tự động thắng chất lượng.
- **PO quyết định thứ tự; đội quyết định khối lượng và cách làm.**
- Ở planning, **PO trình bày mục tiêu và có mặt trả lời**, nhưng không quyết định đội nhận bao nhiêu.
- **Daily Scrum là của đội** — PO nếu dự thì chỉ nghe, không biến nó thành báo cáo tiến độ.
- **Sprint review không có stakeholder thật thì chỉ là trình diễn nội bộ.**
- PO nên dự retrospective, **nhưng phải vắng nếu sự có mặt làm đội không dám nói thẳng**.
- Chấp nhận công việc dựa trên **Definition of Done chung và acceptance criteria riêng**.
- **Không có "xong 90 phần trăm"** — chấp nhận việc dở dang phá huỷ ý nghĩa của velocity.
- **Từ chối hạng mục chứ không phải con người**, và hỏi vì sao nó lọt tới sprint review.
- **Phải từ chối nhiều hạng mục mỗi sprint nghĩa là refinement có vấn đề**, không phải đội.
- **Thêm việc giữa sprint là sai** — cách đúng là đổi ra một hạng mục tương đương.
- **Velocity là công cụ dự báo, không phải chỉ tiêu năng suất.**
- **PO vắng mặt là rủi ro số một** của một đội Scrum.
- **PO mô tả vấn đề, đội thiết kế giải pháp.**
- **PO và SM căng nhau có chủ ý**; gộp hai vai trò là mất cơ chế kiểm soát.
- **Quyền sắp xếp backlog chỉ thuộc về một người**, kể cả khi BA viết phần lớn story.
- Đội phân tán cần **AC chi tiết hơn và quyết định được ghi lại bằng văn bản**.
- Nhiều đội thì **một backlog, một PO chịu trách nhiệm cuối cùng**.
- **Một PO phục vụ quá hai đội sẽ thành nút cổ chai.**

## 8. Tóm tắt

- Sức mạnh của Scrum nằm ở **ranh giới rõ ràng giữa ba vai trò**, và phần lớn vấn đề của PO đến từ việc lấn sang phần của đội.
- **Ở mỗi sự kiện, PO có một nhiệm vụ cụ thể** — chuẩn bị tốt cho refinement là cách rẻ nhất để mọi sự kiện khác diễn ra trơn tru.
- **Chấp nhận hay từ chối phải dứt khoát và dựa trên tiêu chí đã thống nhất trước**, nếu không mọi dự báo đều mất ý nghĩa.
- **Quy mô là giới hạn thật:** một PO không thể phục vụ vô hạn số đội mà vẫn giữ được chất lượng quyết định.
