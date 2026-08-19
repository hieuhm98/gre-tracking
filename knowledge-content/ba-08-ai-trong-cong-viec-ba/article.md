# AI trong công việc của BA

## 1. AI đổi gì và KHÔNG đổi gì

> **AI thay đổi mạnh cách BA TẠO RA sản phẩm công việc. Nó gần như không thay đổi phần cốt lõi: hiểu vấn đề nghiệp vụ và xây dựng hiểu biết chung giữa những người liên quan.**

**Những việc AI làm rất tốt:**

- **Soạn bản nháp đầu tiên** — user story, acceptance criteria, mô tả quy trình, biên bản họp.
- **Chuyển đổi định dạng** — biến ghi chú lộn xộn thành cấu trúc, biến bảng thành văn xuôi và ngược lại.
- **Sinh trường hợp kiểm thử** từ một câu yêu cầu, gồm cả các trường hợp ngoại lệ bạn có thể bỏ sót.
- **Tổng hợp và tóm tắt** tài liệu dài, nhật ký hỗ trợ, phản hồi khách hàng.
- **Đặt câu hỏi phản biện** — *"còn trường hợp nào tôi chưa nghĩ tới?"*
- **Dịch thuật và trau chuốt ngôn ngữ**, đặc biệt hữu ích khi làm việc với khách hàng nước ngoài.

**Những việc AI KHÔNG làm được:**

- **Biết bối cảnh tổ chức của bạn** — ai có thẩm quyền, phòng nào đang xung đột với phòng nào, quy định nội bộ nào đang áp dụng.
- **Quan sát người dùng làm việc thật** và nhận ra khoảng cách giữa quy trình trên giấy và quy trình thực tế.
- **Xây dựng lòng tin** với stakeholder để họ nói ra điều họ thực sự lo ngại.
- **Chịu trách nhiệm** về một quyết định.
- **Biết điều gì đang bị giấu đi** — thứ mà chỉ kinh nghiệm và quan hệ mới phát hiện được.

> **Kết luận thực dụng: AI làm phần soạn thảo nhanh hơn rất nhiều, nhưng phần khó nhất của nghề BA — biết phải hỏi gì và hỏi ai — vẫn thuộc về con người.**

---

## 2. Dùng AI trong từng công việc của BA

**Khai thác yêu cầu.** Trước buổi phỏng vấn, hãy nhờ AI liệt kê các câu hỏi cần hỏi cho một loại tính năng. **Đừng dùng nguyên danh sách đó** — hãy lọc theo bối cảnh và bổ sung câu hỏi mà chỉ bạn mới biết cần hỏi.

**Phân tích.** Đưa mô tả quy trình cho AI và hỏi: *"Có bước nào thiếu nhánh xử lý ngoại lệ không?"*, *"Tổ hợp điều kiện nào chưa được đề cập?"* AI khá tốt trong việc **phát hiện khoảng trống logic**.

**Đặc tả.** Nhờ AI soạn bản nháp user story và acceptance criteria từ ghi chú của bạn, rồi **bạn sửa lại theo bối cảnh thật**. Tốc độ tăng đáng kể, nhưng chất lượng cuối vẫn phụ thuộc vào bạn.

**Kiểm thử.** Đưa một acceptance criteria và nhờ AI sinh danh sách test case, đặc biệt là các trường hợp biên và ngoại lệ. **Đây là một trong những ứng dụng có tỷ lệ hữu ích cao nhất.**

**Tài liệu và giao tiếp.** Tóm tắt biên bản họp, viết lại một đoạn cho rõ hơn, dịch tài liệu, điều chỉnh giọng văn cho phù hợp với người đọc.

> **Nguyên tắc chung: dùng AI để tạo BẢN NHÁP và để PHẢN BIỆN, không dùng để tạo bản cuối.** Bản nháp giúp bạn vượt qua trang giấy trắng; phản biện giúp bạn phát hiện điều mình bỏ sót.

---

## 3. Ba mô hình phát triển phần mềm thời AI

Cách các đội xây phần mềm đang thay đổi, và BA cần hiểu ba mô hình đang xuất hiện.

### Vibe coding

**Lập trình viên mô tả điều họ muốn bằng ngôn ngữ tự nhiên và để AI sinh mã**, rồi thử, sửa và lặp lại nhanh chóng.

- **Mạnh ở:** dựng prototype rất nhanh, thử nghiệm ý tưởng, những phần không quan trọng.
- **Rủi ro:** mã sinh ra có thể không nhất quán, khó bảo trì, và **không ai thực sự hiểu nó làm gì** — một dạng nợ kỹ thuật mới.
- **Với BA:** rất hữu ích để **thử ý tưởng với người dùng trong vài giờ thay vì vài tuần**. Nhưng đừng để prototype đó bị đẩy vào sản xuất — đây chính là cái bẫy cũ của throwaway prototype ở quy mô lớn hơn.

### Spec-driven development

**Đặc tả trở thành đầu vào chính để sinh mã.** Bạn viết một đặc tả đủ chính xác, AI sinh mã và test từ đó, và đặc tả được duy trì như nguồn sự thật.

- **Với BA, đây là mô hình có ý nghĩa nhất:** **chất lượng đặc tả trực tiếp quyết định chất lượng sản phẩm**, rõ ràng hơn bao giờ hết.
- Nó đưa các kỹ năng cổ điển của BA — viết chính xác, phủ hết ngoại lệ, tránh nhập nhằng — thành **yếu tố quyết định** thay vì thứ tốt-nếu-có.

### AI-DLC (AI-driven development life cycle)

**AI tham gia vào mọi giai đoạn của vòng đời phát triển**: gợi ý yêu cầu từ dữ liệu sử dụng, sinh mã, sinh test, review mã, giám sát vận hành và đề xuất cải tiến.

- **Với BA:** vai trò dịch chuyển từ *người viết đặc tả* sang **người xác thực và ra quyết định** — kiểm tra xem thứ AI đề xuất có đúng với nhu cầu nghiệp vụ thật không.

> **Điểm chung của cả ba mô hình: chúng đều làm cho việc TẠO RA phần mềm rẻ hơn, nên phần đắt còn lại chính là biết nên tạo ra CÁI GÌ. Đó là công việc của BA.**

---

## 4. Rủi ro khi dùng AI trong công việc BA

**1. Ảo giác (hallucination).** AI có thể tạo ra thông tin nghe rất hợp lý nhưng sai hoàn toàn — một quy định không tồn tại, một con số bịa, một thực hành ngành không có thật.

- **Cách phòng:** **không bao giờ đưa thông tin từ AI vào tài liệu mà chưa kiểm chứng**, đặc biệt là số liệu, quy định pháp luật và tên gọi kỹ thuật.

**2. Rò rỉ dữ liệu.** Dán tài liệu yêu cầu, dữ liệu khách hàng hoặc thông tin nội bộ vào công cụ AI công cộng có thể **vi phạm hợp đồng bảo mật và quy định về dữ liệu**.

- **Cách phòng:** biết rõ chính sách của công ty; che hoặc bỏ dữ liệu nhạy cảm trước khi dán; ưu tiên công cụ được doanh nghiệp phê duyệt.

**3. Mất chiều sâu tư duy.** Nếu AI luôn viết bản nháp và bạn chỉ sửa, bạn **có thể ngừng tự đặt câu hỏi khó**. Kỹ năng phân tích teo dần vì không được dùng.

- **Cách phòng:** với những phần quan trọng nhất, hãy **tự nghĩ trước, rồi mới hỏi AI để đối chiếu**. Thứ tự này giữ cho tư duy của bạn sắc.

**4. Đồng nhất hoá.** AI có xu hướng tạo ra nội dung trung bình và chung chung. Đặc tả do AI viết có thể **thiếu chính những chi tiết riêng biệt** làm nên giá trị của hệ thống bạn đang xây.

**5. Tin tưởng sai chỗ.** Vì AI viết rất trôi chảy, người đọc dễ cho rằng nội dung đã được kiểm chứng. **Sự trôi chảy không phải bằng chứng của tính đúng đắn.**

> **Nguyên tắc trách nhiệm: bạn ký tên vào tài liệu, nên bạn chịu trách nhiệm cho từng câu trong đó — kể cả câu do AI viết.**

---

## 5. Cách viết prompt hiệu quả cho công việc BA

Chất lượng đầu ra phụ thuộc rất nhiều vào cách bạn hỏi. **Bốn thành phần của một prompt tốt:**

**1. Vai trò và bối cảnh.** *"Bạn là BA cho một hệ thống quản lý kho của doanh nghiệp bán lẻ tại Việt Nam."*

**2. Đầu vào cụ thể.** Dán ghi chú, mô tả quy trình hoặc câu yêu cầu thật thay vì mô tả chung chung.

**3. Định dạng đầu ra mong muốn.** *"Trả về dạng bảng với các cột: mã yêu cầu, mô tả, acceptance criteria, trường hợp ngoại lệ."*

**4. Ràng buộc và tiêu chí chất lượng.** *"Mỗi acceptance criteria phải kiểm chứng được và phải phủ ít nhất một trường hợp lỗi."*

**Ba prompt hữu ích nhất cho BA:**

- **Phản biện:** *"Đọc yêu cầu này và liệt kê mọi cách hiểu khác nhau mà một lập trình viên có thể có."*
- **Tìm khoảng trống:** *"Với quy trình này, những tình huống ngoại lệ nào chưa được đề cập?"*
- **Sinh test:** *"Từ acceptance criteria này, liệt kê các test case gồm cả trường hợp biên và trường hợp lỗi."*

> **Prompt hiệu quả nhất thường không phải yêu cầu AI viết hộ, mà là yêu cầu AI TÌM LỖI trong thứ bạn đã viết.** Đây là cách dùng AI như một người review luôn sẵn sàng, thay vì như một người viết thay.

---

## 6. Vai trò BA thay đổi thế nào

**Những phần công việc bị thu hẹp:**

- Soạn thảo tài liệu từ đầu.
- Chuyển đổi định dạng thủ công.
- Viết biên bản họp.
- Tra cứu thông tin cơ bản.

**Những phần công việc trở nên quan trọng hơn:**

- **Biết phải hỏi gì và hỏi ai.** AI không biết ai trong tổ chức bạn nắm thông tin nào.
- **Xác thực và ra quyết định.** Khi việc tạo ra nội dung rẻ đi, việc phán định nội dung nào đúng trở nên đắt hơn tương đối.
- **Xây dựng quan hệ và lòng tin.** Người ta nói ra mối lo thật với con người, không nói với công cụ.
- **Hiểu bối cảnh tổ chức.** Chính trị nội bộ, lịch sử dự án, ràng buộc không được viết ra.
- **Chịu trách nhiệm.** Ai đó phải đứng ra bảo vệ một quyết định, và đó không thể là một công cụ.

> **Cách nhìn hữu ích: AI làm cho một BA giỏi hiệu quả hơn nhiều, nhưng nó không biến một người không biết hỏi gì thành BA.** Nó khuếch đại năng lực sẵn có chứ không tạo ra năng lực mới.

---

## 7. Điểm cốt lõi

- **AI đổi mạnh cách BA tạo ra sản phẩm công việc, nhưng gần như không đổi phần cốt lõi** là hiểu vấn đề và xây dựng hiểu biết chung.
- AI làm tốt: **soạn bản nháp, chuyển định dạng, sinh test case, tổng hợp, phản biện, dịch thuật**.
- AI không làm được: **biết bối cảnh tổ chức, quan sát người dùng thật, xây lòng tin, chịu trách nhiệm, biết điều gì đang bị giấu**.
- **Dùng AI để tạo BẢN NHÁP và để PHẢN BIỆN, không dùng để tạo bản cuối.**
- **Vibe coding** dựng prototype rất nhanh nhưng tạo mã khó bảo trì mà không ai thực sự hiểu.
- Prototype từ vibe coding **không được đẩy vào sản xuất** — đây là cái bẫy throwaway prototype ở quy mô lớn hơn.
- **Spec-driven development làm chất lượng đặc tả trực tiếp quyết định chất lượng sản phẩm** — kỹ năng cổ điển của BA thành yếu tố quyết định.
- Trong **AI-DLC**, vai trò BA dịch từ người viết đặc tả sang **người xác thực và ra quyết định**.
- Cả ba mô hình đều làm việc **tạo ra phần mềm rẻ hơn**, nên phần đắt còn lại là **biết nên tạo ra cái gì**.
- **Không bao giờ đưa thông tin từ AI vào tài liệu mà chưa kiểm chứng**, đặc biệt số liệu và quy định pháp luật.
- **Dán dữ liệu khách hàng vào công cụ AI công cộng có thể vi phạm hợp đồng bảo mật.**
- Nếu AI luôn viết bản nháp và bạn chỉ sửa, **kỹ năng phân tích teo dần vì không được dùng**.
- Với phần quan trọng nhất, hãy **tự nghĩ trước rồi mới hỏi AI để đối chiếu**.
- **Sự trôi chảy không phải bằng chứng của tính đúng đắn.**
- **Bạn ký tên vào tài liệu nên bạn chịu trách nhiệm cho từng câu**, kể cả câu do AI viết.
- Prompt tốt gồm bốn phần: **vai trò và bối cảnh, đầu vào cụ thể, định dạng đầu ra, ràng buộc chất lượng**.
- **Prompt hiệu quả nhất thường là yêu cầu AI TÌM LỖI trong thứ bạn đã viết**, không phải viết hộ.
- **AI khuếch đại năng lực sẵn có chứ không tạo ra năng lực mới** — nó không biến người không biết hỏi gì thành BA.

## 8. Tóm tắt

- AI làm **phần soạn thảo nhanh hơn rất nhiều**, nhưng phần khó nhất — biết phải hỏi gì và hỏi ai — vẫn thuộc về con người.
- Ba mô hình mới — **vibe coding, spec-driven, AI-DLC** — đều nâng giá trị của việc đặc tả chính xác và xác thực đúng.
- **Rủi ro chính là ảo giác, rò rỉ dữ liệu, mất chiều sâu tư duy và tin tưởng sai chỗ** — mỗi rủi ro đều có cách phòng cụ thể.
- Cách dùng AI hiệu quả nhất với BA là **coi nó như một người review luôn sẵn sàng**, chứ không phải người viết thay.
