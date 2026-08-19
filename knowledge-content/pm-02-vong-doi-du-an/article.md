# Vòng đời dự án

## 1. Vì sao cần chia dự án thành giai đoạn

> **Một dự án không được chia giai đoạn là một khối công việc mà bạn chỉ biết nó thành hay thất bại ở phút cuối.**

**Chia giai đoạn phục vụ ba mục đích:**

**1. Tạo điểm dừng để quyết định.** Cuối mỗi giai đoạn là một **cổng quyết định**: tiếp tục, điều chỉnh, hoặc dừng. **Quyền dừng dự án là quyền quan trọng nhất và bị dùng ít nhất.**

**2. Giới hạn thiệt hại.** Nếu dự án sai hướng, bạn mất một giai đoạn chứ không mất cả ngân sách.

**3. Làm rõ ai chịu trách nhiệm gì khi nào.** Mỗi giai đoạn có sản phẩm bàn giao riêng, nên không có khoảng trống trách nhiệm.

**Năm giai đoạn theo cách phân chia của PMI:**

| Giai đoạn | Câu hỏi trung tâm | Sản phẩm bàn giao chính |
|-----------|-------------------|------------------------|
| **Khởi tạo** | *"Dự án này có nên tồn tại?"* | Project charter, phân tích stakeholder |
| **Lập kế hoạch** | *"Chúng ta sẽ làm thế nào?"* | Kế hoạch dự án, WBS, sổ rủi ro, ngân sách |
| **Thực thi** | *"Làm và giao"* | Sản phẩm thực tế |
| **Theo dõi & kiểm soát** | *"Ta có đang đi đúng hướng?"* | Báo cáo trạng thái, yêu cầu thay đổi |
| **Đóng dự án** | *"Kết thúc cho gọn và học được gì?"* | Biên bản bàn giao, bài học kinh nghiệm |

> **Lưu ý quan trọng: theo dõi và kiểm soát KHÔNG phải giai đoạn thứ tư đứng sau thực thi.** Nó chạy **song song** với thực thi từ đầu tới cuối. Vẽ nó thành một hộp nối tiếp là cách hiểu sai phổ biến nhất về mô hình này.

---

## 2. Khởi tạo: quyết định dự án có nên tồn tại

**Mục đích của giai đoạn khởi tạo không phải là bắt đầu làm việc, mà là quyết định CÓ NÊN làm hay không.**

**Bốn thứ phải rõ trước khi bước tiếp:**

**1. Vấn đề nghiệp vụ hoặc cơ hội.** Không phải giải pháp. *"Chúng ta cần một app mobile"* không phải vấn đề; *"70 phần trăm khách hàng bỏ giỏ hàng vì không thanh toán được trên điện thoại"* mới là vấn đề.

**2. Tiêu chí thành công đo được.** **Nếu không ai viết ra được thế nào là thành công, dự án sẽ thành công hoặc thất bại tuỳ theo tâm trạng của người đánh giá.**

**3. Nhà tài trợ có thẩm quyền thật.** Người có thể phê duyệt ngân sách và **giải quyết xung đột giữa các bộ phận**. Dự án không có nhà tài trợ thật sẽ chết ngay khi gặp cản trở đầu tiên.

**4. Ràng buộc và giả định đã ghi lại.** Ngân sách trần, hạn chót không đổi được, công nghệ bắt buộc, người sẽ nghỉ thai sản vào tháng Sáu.

**Project charter** là tài liệu tóm gọn tất cả những điều trên, thường chỉ **hai tới ba trang**. Vai trò của nó là **cho PM quyền hành động** và **cho mọi người một điểm tham chiếu chung khi tranh cãi về phạm vi sau này.**

> **Sai lầm tốn kém nhất ở giai đoạn này: nhảy vào lập kế hoạch chi tiết trước khi biết vấn đề thật.** Bạn sẽ có một kế hoạch rất đẹp cho việc giải quyết sai vấn đề.

---

## 3. Lập kế hoạch: chi tiết tới đâu là đủ

**Đầu ra của giai đoạn lập kế hoạch không chỉ là một lịch trình.** Nó gồm:

- **Phạm vi** và **mục loại trừ** đã viết rõ.
- **WBS** — phân rã công việc tới mức có thể ước tính và gán người.
- **Lịch trình** với phụ thuộc và đường găng.
- **Ngân sách** kèm khoản dự phòng.
- **Sổ rủi ro** ban đầu.
- **Kế hoạch giao tiếp** — ai nhận gì, tần suất nào.
- **Tiêu chí chấp nhận** cho từng sản phẩm bàn giao.

> **Câu hỏi khó: lập kế hoạch chi tiết tới đâu?**
>
> **Nguyên tắc lập kế hoạch theo lớp sóng (rolling wave): chi tiết cho hai tới ba tháng tới, thô hơn cho phần còn lại.** Lập kế hoạch chi tiết cho tháng thứ mười một là lãng phí, vì tới lúc đó mọi giả định đã đổi.

**Ba sai lầm hay gặp khi lập kế hoạch:**

| Sai lầm | Hệ quả |
|---------|--------|
| **Kế hoạch không có khoản dự phòng** | Rủi ro đầu tiên xảy ra là trễ ngay |
| **Kế hoạch giả định mọi người làm 100% thời gian cho dự án** | Thực tế 60–70% là con số hợp lý sau khi trừ họp, hỗ trợ, nghỉ phép |
| **Kế hoạch do PM viết một mình** | Người thực hiện không cam kết với ước tính họ không đưa ra |

**Về ràng buộc con người: thêm người vào dự án đang trễ thường làm nó trễ hơn**, vì người mới cần được đào tạo bởi chính những người đang là nút cổ chai, và số kênh giao tiếp tăng theo bình phương số người.

---

## 4. Thực thi và kiểm soát song song

**Giai đoạn thực thi là nơi phần lớn ngân sách được chi.** Việc của PM ở đây **không phải là làm nhiều hơn mà là giữ cho dòng công việc chảy.**

**Bốn việc chính của PM khi thực thi:**

- **Tháo gỡ trở ngại** trước khi chúng thành chậm trễ.
- **Bảo vệ đội khỏi nhiễu** — yêu cầu đột xuất, họp không cần thiết, thay đổi chưa qua kiểm soát.
- **Giữ chất lượng không bị hy sinh âm thầm** khi áp lực tăng.
- **Cập nhật dự báo liên tục**, không chờ tới mốc báo cáo.

**Kiểm soát dựa trên ba câu hỏi, hỏi đủ đều:**

| Câu hỏi | Cách trả lời trung thực |
|---------|------------------------|
| **Ta đang ở đâu so với kế hoạch?** | So sánh công việc **đã hoàn thành và được chấp nhận**, không đếm việc đang làm |
| **Xu hướng đang đi về đâu?** | Ba tuần liền chậm 10% thì tuần thứ tư sẽ không tự nhanh lên |
| **Ta cần quyết định gì bây giờ?** | Mỗi báo cáo nên kết thúc bằng một đề nghị cụ thể |

> **Bẫy phần trăm hoàn thành: một công việc được báo cáo 90 phần trăm hoàn thành trong ba tuần liên tiếp thì thực chất chưa xong 90 phần trăm.** Cách chống: **chỉ tính 0 hoặc 100** cho từng đơn vị công việc nhỏ, thay vì chấp nhận các con số ở giữa.

**Về đường găng (critical path):** đó là chuỗi công việc dài nhất quyết định ngày kết thúc. **Chậm một ngày trên đường găng là chậm một ngày cả dự án; chậm một ngày ngoài đường găng có thể không ảnh hưởng gì.** PM không biết đường găng của mình đang quản lý bằng cảm giác.

---

## 5. Đóng dự án: giai đoạn bị bỏ qua nhiều nhất

**Đóng dự án không phải là gửi email *"chúng ta xong rồi"*.**

**Sáu việc phải làm:**

**1. Nghiệm thu chính thức.** Khách hàng xác nhận bằng văn bản rằng sản phẩm bàn giao đạt tiêu chí đã thoả thuận.

**2. Chuyển giao cho vận hành.** Tài liệu, quyền truy cập, đào tạo, và **ai chịu trách nhiệm khi có sự cố sau khi đội dự án giải tán**.

**3. Đóng hợp đồng và ngân sách.** Thanh toán nốt, đóng các đơn hàng mở.

**4. Giải phóng đội.** Nói rõ ngày cuối và điểm đến tiếp theo của từng người. **Để đội tan rã mà không ai biết mình đi đâu là cách chắc chắn để mất người giỏi.**

**5. Bài học kinh nghiệm.** Không phải danh sách lời khen. **Một buổi bài học hữu ích trả lời ba câu: điều gì đã hiệu quả và nên lặp lại, điều gì đã hại và cần đổi, và ta sẽ làm gì KHÁC ĐI ở dự án tới.**

**6. Ghi nhận công sức.** Nghe như hình thức, nhưng nó quyết định việc lần sau ai muốn tham gia dự án của bạn.

> **Vì sao đóng dự án bị bỏ qua: khi sản phẩm đã chạy, mọi người đã bị kéo sang dự án mới.** Kết quả là **bài học không được ghi lại và tổ chức lặp lại đúng một sai lầm ở năm dự án liên tiếp.**

**Cũng phải nói về việc đóng dự án THẤT BẠI:** một dự án bị dừng giữa đường vẫn cần được đóng đúng cách. **Dự án bị dừng và được ghi nhận bài học có giá trị hơn dự án bị dừng và bị im lặng chôn đi.**

---

## 6. Vòng đời truyền thống so với agile

**Năm giai đoạn không mâu thuẫn với agile — chúng chỉ được thực hiện với nhịp khác.**

| | Truyền thống | Agile |
|---|--------------|-------|
| **Khởi tạo** | Một lần, đầu dự án | Một lần cho sản phẩm, nhẹ hơn |
| **Lập kế hoạch** | Một lần, chi tiết toàn bộ | **Liên tục** — mỗi sprint là một vòng lập kế hoạch nhỏ |
| **Thực thi** | Một khối dài | Nhiều vòng ngắn có thể giao được |
| **Kiểm soát** | Báo cáo theo mốc | Nhìn thấy hàng ngày qua sản phẩm chạy được |
| **Đóng** | Một lần, cuối cùng | Mỗi phát hành là một lần đóng nhỏ |

> **Điều không đổi giữa hai mô hình: bạn vẫn cần biết vì sao dự án tồn tại, ai chịu trách nhiệm, rủi ro gì đang treo, và làm sao biết mình đã xong.** Agile thay đổi *nhịp* trả lời những câu hỏi đó, không loại bỏ chúng.

**Cách chọn:** phạm vi rõ và ít thay đổi, yêu cầu tuân thủ nặng, hợp đồng giá cố định → **nghiêng về truyền thống**. Yêu cầu còn bất định, cần phản hồi sớm từ người dùng → **nghiêng về agile**. **Phần lớn dự án thực tế nằm ở giữa và dùng mô hình lai.**

---

## 7. Điểm cốt lõi

- **Dự án không chia giai đoạn là khối công việc chỉ biết thành hay thất bại ở phút cuối.**
- Chia giai đoạn để **tạo điểm quyết định, giới hạn thiệt hại, và làm rõ trách nhiệm**.
- **Quyền dừng dự án là quyền quan trọng nhất và bị dùng ít nhất.**
- **Theo dõi và kiểm soát chạy song song với thực thi**, không phải giai đoạn nối tiếp.
- Khởi tạo cần **vấn đề nghiệp vụ, tiêu chí thành công đo được, nhà tài trợ có thẩm quyền, ràng buộc đã ghi lại**.
- ***"Chúng ta cần một app mobile"* không phải vấn đề** — đó là giải pháp.
- **Không có tiêu chí thành công viết ra thì dự án thành hay bại tuỳ tâm trạng người đánh giá.**
- **Project charter chỉ hai tới ba trang**, cho PM quyền hành động và cho mọi người điểm tham chiếu.
- **Lập kế hoạch theo lớp sóng:** chi tiết hai tới ba tháng tới, thô hơn cho phần còn lại.
- **Giả định mọi người làm 100% thời gian cho dự án là sai** — 60 tới 70 phần trăm là hợp lý.
- **Người thực hiện không cam kết với ước tính họ không đưa ra.**
- **Thêm người vào dự án đang trễ thường làm nó trễ hơn.**
- Khi thực thi, PM **tháo gỡ trở ngại, chắn nhiễu, giữ chất lượng, cập nhật dự báo**.
- **Chỉ đếm công việc đã hoàn thành và được chấp nhận**, không đếm việc đang làm.
- **Bẫy 90 phần trăm:** chỉ tính 0 hoặc 100 cho từng đơn vị công việc nhỏ.
- **Chậm một ngày trên đường găng là chậm cả dự án** — không biết đường găng là quản lý bằng cảm giác.
- Đóng dự án gồm **nghiệm thu, chuyển giao vận hành, đóng hợp đồng, giải phóng đội, bài học, ghi nhận**.
- **Để đội tan rã mà không ai biết mình đi đâu là cách chắc chắn để mất người giỏi.**
- **Bài học phải trả lời ta sẽ làm gì KHÁC ĐI**, không phải danh sách lời khen.
- **Dự án bị dừng vẫn cần được đóng đúng cách** để bài học không bị chôn theo.
- Agile **thay đổi nhịp trả lời các câu hỏi của vòng đời, không loại bỏ chúng**.

## 8. Tóm tắt

- Năm giai đoạn tồn tại để **tạo ra các điểm dừng quyết định**, và cổng quan trọng nhất là quyền dừng dự án.
- **Khởi tạo quyết định dự án có nên tồn tại**, và nhảy vào kế hoạch chi tiết quá sớm là sai lầm tốn kém nhất.
- **Kiểm soát chạy song song với thực thi**, dựa trên công việc đã được chấp nhận chứ không dựa trên phần trăm tự báo.
- **Đóng dự án là giai đoạn bị bỏ qua nhiều nhất**, và đó chính là lý do tổ chức lặp lại cùng một sai lầm.
