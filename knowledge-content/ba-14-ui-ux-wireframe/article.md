# UI/UX, Wireframe & Mockup

## 1. UI và UX khác nhau thế nào

> **UX là toàn bộ trải nghiệm của người dùng khi cố gắng đạt được mục tiêu của họ. UI là lớp giao diện mà họ nhìn thấy và thao tác.**

**UI là một phần của UX, không phải toàn bộ.**

Một ví dụ làm rõ khác biệt:

> Một ứng dụng đặt vé có giao diện rất đẹp — màu sắc hài hoà, hoạt ảnh mượt, phông chữ tinh tế. **UI tốt.**
>
> Nhưng để đặt một vé, người dùng phải đi qua bảy màn hình, nhập lại thông tin đã nhập ở bước ba, và không thể quay lại sửa mà không mất hết dữ liệu. **UX tệ.**

| | **UI** | **UX** |
|---|-------|--------|
| **Bao gồm** | Bố cục, màu sắc, phông chữ, nút, biểu tượng | Luồng tác vụ, kiến trúc thông tin, thời gian phản hồi, xử lý lỗi, tài liệu hướng dẫn |
| **Câu hỏi** | *"Nó trông thế nào?"* | *"Người dùng có đạt được mục tiêu dễ dàng không?"* |
| **Đo bằng** | Đánh giá thẩm mỹ, tuân thủ hướng dẫn thương hiệu | Tỷ lệ hoàn thành tác vụ, thời gian hoàn thành, tỷ lệ lỗi, mức hài lòng |

> **Vai trò của BA không phải là thiết kế UI — đó là việc của designer.** Vai trò của BA là **bảo đảm luồng tác vụ đúng và đầy đủ**, để designer có nền tảng đúng mà thiết kế.

---

## 2. Vai trò của BA trong việc bảo đảm UX tốt

**BA đóng góp vào UX qua bốn việc cụ thể:**

**1. Hiểu đúng người dùng và mục tiêu của họ.** Designer không thể thiết kế cho một *"người dùng"* chung chung. Họ cần biết: ai, làm gì, bao lâu một lần, trong hoàn cảnh nào, với mức thành thạo nào.

**2. Xác định luồng tác vụ đầy đủ**, gồm cả các nhánh và trường hợp lỗi. **Rất nhiều vấn đề UX thực chất là vấn đề luồng bị bỏ sót**, không phải vấn đề thẩm mỹ.

**3. Đưa ra các ràng buộc và quy tắc** — dữ liệu bắt buộc, giới hạn giá trị, phân quyền, thông báo lỗi cần nói gì.

**4. Đặc tả yêu cầu về khả năng sử dụng ở dạng đo lường được**, thay vì nói *"phải thân thiện"*.

### Câu hỏi UX mà BA nên hỏi cho mỗi màn hình

- **Người dùng đến màn hình này từ đâu, và đi đâu tiếp?**
- **Trạng thái rỗng hiển thị gì?** (Chưa có dữ liệu, chưa có kết quả tìm kiếm.)
- **Trạng thái tải và trạng thái lỗi hiển thị gì?**
- **Người dùng có thể huỷ giữa chừng không, và dữ liệu dở dang xử lý thế nào?**
- **Người dùng không đủ quyền thấy gì?** Ẩn hẳn, hay hiện nhưng vô hiệu hoá kèm giải thích?
- **Có bao nhiêu dữ liệu ở đây trong thực tế?** Mười dòng khác một nghìn dòng hoàn toàn.
- **Thao tác nào không thể hoàn tác, và có cần xác nhận không?**

> **Trạng thái rỗng, trạng thái lỗi và trạng thái không đủ quyền là ba thứ bị bỏ sót nhiều nhất trong đặc tả màn hình** — và cũng là ba thứ mà người dùng thật gặp thường xuyên hơn ta tưởng.

---

## 3. Wireframe, mockup và prototype

Ba từ này hay bị dùng lẫn lộn. **Chúng khác nhau ở độ trung thực và mục đích.**

| | **Wireframe** | **Mockup** | **Prototype** |
|---|--------------|-----------|---------------|
| **Độ trung thực** | Thấp — hộp và đường | Cao — màu sắc, phông chữ, hình ảnh thật | Có thể thấp hoặc cao, nhưng **tương tác được** |
| **Trả lời câu hỏi** | *"Cấu trúc và bố cục có hợp lý không?"* | *"Nó trông có đúng không?"* | *"Dùng nó có thuận không?"* |
| **Ai làm** | BA hoặc designer | Designer | Designer, đôi khi BA |
| **Thời điểm** | Sớm, khi khám phá | Sau khi cấu trúc đã ổn | Trước khi phát triển, để kiểm thử |

**Wireframe là công cụ của BA.** Bạn không cần kỹ năng thiết kế để vẽ hộp và ghi nhãn — và chính sự thô sơ đó là ưu điểm.

> **Nghịch lý mạnh mẽ: prototype càng thô sơ, phản hồi bạn nhận được càng có giá trị ở giai đoạn đầu.**
>
> Khi bạn cho xem một thiết kế bóng bẩy, người ta bình luận về màu nút bấm. Khi bạn cho xem một bản vẽ tay, người ta nói về việc **quy trình có đúng không**. Người dùng cũng ngần ngại chỉ trích thứ trông đã hoàn thiện, nhưng không ngại chút nào khi phê bình một bản phác.

---

## 4. Cách BA dùng wireframe hiệu quả

**Wireframe phục vụ ba mục đích:**

**1. Làm rõ yêu cầu với chính mình.** Khi vẽ, bạn buộc phải trả lời những câu hỏi mà văn bản cho phép né tránh: trường này đặt ở đâu, danh sách này sắp xếp theo gì, người dùng bấm gì để quay lại.

**2. Xác nhận hiểu biết với người dùng.** Một bản vẽ khiến cuộc trò chuyện cụ thể hơn nhiều so với một đoạn mô tả.

**3. Truyền đạt ngữ cảnh cho designer và lập trình viên** — không phải để họ làm theo y hệt, mà để họ hiểu ý định.

**Nguyên tắc vẽ wireframe cho BA:**

- **Giữ ở mức thấp trung thực.** Hộp xám, chữ đen, không màu sắc. Nếu bạn tô màu, mọi người sẽ tưởng đó là thiết kế cuối.
- **Ghi chú bên cạnh** về hành vi: *"Nút này chỉ hiện với vai trò Quản lý"*, *"Danh sách phân trang 20 dòng"*.
- **Vẽ cả trạng thái rỗng và trạng thái lỗi**, không chỉ trạng thái đầy đủ dữ liệu.
- **Dùng dữ liệu hợp lý**, không dùng *"Lorem ipsum"* hay *"abc xyz"*. Dữ liệu thật làm lộ ra vấn đề về độ dài và định dạng.

> **Điều quan trọng phải nói rõ mỗi lần đưa wireframe: đây là bản phác về CẤU TRÚC và LUỒNG, không phải thiết kế cuối cùng.** Nếu không nói rõ, bạn sẽ nhận về phản hồi sai loại và designer sẽ cảm thấy bị lấn sân.

---

## 5. Ranh giới giữa BA và Designer

Đây là ranh giới hay gây căng thẳng nhất, và nó đáng được nói rõ.

| Quyết định | Thuộc về |
|-----------|----------|
| Người dùng cần làm được những gì | BA, với đầu vào từ nghiệp vụ |
| Luồng tác vụ gồm những bước nào | BA, cùng designer |
| Quy tắc nghiệp vụ và ràng buộc dữ liệu | BA |
| Thông tin nào hiển thị trên màn hình nào | BA và designer cùng quyết định |
| Bố cục, thứ bậc thị giác, màu sắc, phông chữ | Designer |
| Kiểu tương tác cụ thể (dropdown hay radio, modal hay trang riêng) | Designer |

> **Sai lầm phổ biến của BA: đặc tả quá chi tiết về giao diện.** *"Nút Lưu màu xanh ở góc trên bên phải"* thường không phải yêu cầu mà là **quyết định thiết kế được nguỵ trang**.
>
> **Bài kiểm tra: hỏi vì sao.** Nếu câu trả lời là **lý do nghiệp vụ thật** — tính nhất quán với ứng dụng hiện có, tuân thủ tiêu chuẩn khả năng tiếp cận, kỳ vọng đã hình thành của người dùng — thì đó là **ràng buộc thiết kế hợp lệ, hãy ghi lại kèm lý do**. Nếu câu trả lời là *"vì tôi thấy vậy đẹp hơn"*, hãy để designer quyết định.

**Ràng buộc thiết kế áp đặt không cần thiết, quá sớm, hoặc vì lý do sai sẽ làm bực bội cả designer lẫn lập trình viên, và có thể dẫn tới sản phẩm dưới mức tối ưu.**

---

## 6. Đặc tả khả năng sử dụng ở dạng đo lường được

*"Giao diện phải thân thiện với người dùng"* **không phải yêu cầu — đó là một mong ước.**

**Cách dịch nó thành đặc tính đo lường được:**

| Chiều | Cách viết đo lường được |
|-------|------------------------|
| **Dễ học** | *"Người dùng mới chưa qua đào tạo phải hoàn thành việc tạo một đơn hàng trong vòng 10 phút kể từ lần đầu mở ứng dụng."* |
| **Hiệu quả khi thành thạo** | *"Người dùng có kinh nghiệm hoàn tất một đơn chuẩn trong không quá 6 lần nhấp và 60 giây."* |
| **Chống lỗi** | *"Mọi thao tác xoá dữ liệu phải có xác nhận và phải hoàn tác được trong phiên làm việc."* |
| **Nhớ lại** | *"Người dùng không dùng hệ thống trong 3 tháng vẫn thực hiện được tác vụ chính mà không cần tài liệu."* |
| **Khả năng tiếp cận** | *"Ứng dụng phải tuân thủ WCAG 2.1 mức AA."* |
| **Hài lòng** | *"Điểm SUS trung bình đạt tối thiểu 70 trong đợt khảo sát sau 3 tháng vận hành."* |

> **Lưu ý quan trọng: dễ học và hiệu quả khi thành thạo là hai mục tiêu KHÁC NHAU và thường mâu thuẫn.** Giao diện nhiều wizard dẫn dắt rất dễ học nhưng làm chậm người thành thạo. Giao diện nhiều phím tắt rất hiệu quả nhưng khó học.
>
> **BA phải biết user class nào quan trọng hơn**, và đó là câu hỏi cần đưa ra thảo luận với stakeholder chứ không để designer tự đoán.

---

## 7. Kiểm thử khả năng sử dụng

**Bạn không cần phòng lab chuyên nghiệp.** Một buổi kiểm thử đơn giản với năm người dùng thật đã phát hiện được phần lớn vấn đề nghiêm trọng.

**Cách làm:**

**1. Giao TÁC VỤ, không giao tour du lịch.** Đừng dẫn họ đi qua từng màn hình. Hãy nói: *"Hãy đặt một đơn hàng cho 10 hộp giấy A4, giao tới văn phòng chi nhánh"* — rồi **im lặng quan sát**.

**2. Chỗ họ dừng lại, lưỡng lự hoặc làm sai chính là chỗ thiết kế có vấn đề.**

**3. Đừng giải thích khi họ mắc kẹt.** Nếu bạn phải giải thích, thì sản phẩm thật cũng sẽ cần bạn ngồi cạnh mỗi người dùng.

**4. Ghi lại VẤN ĐỀ, không ghi lại giải pháp họ đề xuất.** Khi người dùng nói *"nên có nút ở đây"*, hãy ghi *"người dùng không tìm được cách quay lại bước trước"*. **Giải pháp là việc của designer; vấn đề mới là dữ liệu quý giá.**

> **Kết quả gây bất ngờ nhất trong kiểm thử khả năng sử dụng thường không phải là người dùng không thích thứ gì, mà là họ KHÔNG NHÌN THẤY thứ mà bạn cho là hiển nhiên.**

---

## 8. Điểm cốt lõi

- **UX là toàn bộ trải nghiệm khi người dùng cố đạt mục tiêu; UI là lớp giao diện họ nhìn thấy.** UI là một phần của UX.
- Một sản phẩm có thể có **UI đẹp nhưng UX tệ** nếu luồng tác vụ vòng vo và không thể sửa sai.
- **Vai trò của BA không phải thiết kế UI mà là bảo đảm luồng tác vụ đúng và đầy đủ.**
- **Rất nhiều vấn đề UX thực chất là vấn đề luồng bị bỏ sót**, không phải vấn đề thẩm mỹ.
- Ba thứ bị bỏ sót nhiều nhất trong đặc tả màn hình: **trạng thái rỗng, trạng thái lỗi, trạng thái không đủ quyền**.
- **Wireframe cho cấu trúc, mockup cho hình thức, prototype cho tương tác** — ba mục đích khác nhau.
- **Prototype càng thô sơ, phản hồi giai đoạn đầu càng giá trị** — người ta nói về quy trình thay vì màu nút.
- **Wireframe là công cụ của BA** và sự thô sơ chính là ưu điểm, không phải khiếm khuyết.
- Vẽ wireframe: **giữ độ trung thực thấp, ghi chú hành vi bên cạnh, vẽ cả trạng thái rỗng và lỗi, dùng dữ liệu hợp lý**.
- **Luôn nói rõ wireframe là bản phác về cấu trúc và luồng, không phải thiết kế cuối cùng.**
- **Bố cục, màu sắc, phông chữ và kiểu tương tác cụ thể thuộc về designer**, không thuộc BA.
- ***"Nút Lưu màu xanh ở góc trên bên phải"* thường là quyết định thiết kế được nguỵ trang thành yêu cầu.**
- Bài kiểm tra: **hỏi vì sao**; nếu là lý do nghiệp vụ thật thì ghi lại kèm lý do, nếu là *"tôi thấy đẹp hơn"* thì để designer quyết.
- ***"Thân thiện với người dùng"* không phải yêu cầu** — phải dịch thành đặc tính đo lường được.
- **Dễ học và hiệu quả khi thành thạo là hai mục tiêu mâu thuẫn** — BA phải biết user class nào quan trọng hơn.
- Trong kiểm thử khả năng sử dụng, **giao tác vụ chứ không giao tour**, rồi im lặng quan sát.
- **Đừng giải thích khi người dùng mắc kẹt** — nếu phải giải thích thì sản phẩm thật cũng cần bạn ngồi cạnh mỗi người.
- **Ghi lại vấn đề chứ không ghi lại giải pháp** người dùng đề xuất.
- Kết quả gây bất ngờ nhất thường là người dùng **không NHÌN THẤY** thứ bạn cho là hiển nhiên.

## 9. Tóm tắt

- BA đóng góp vào UX bằng cách **hiểu đúng người dùng, xác định luồng đầy đủ, đưa ra ràng buộc và đặc tả khả năng sử dụng đo lường được**.
- **Wireframe là công cụ suy nghĩ và giao tiếp của BA**, không phải sản phẩm thiết kế.
- **Tôn trọng ranh giới với designer** — đặc tả nhu cầu và luồng, để hình thức cho người có chuyên môn.
- **Kiểm thử với năm người dùng thật** phát hiện được phần lớn vấn đề nghiêm trọng, miễn là bạn giao tác vụ và im lặng quan sát.
