# Công cụ của BA: Jira, Confluence, Figma

## 1. Nguyên tắc chọn công cụ trước khi bàn tên công cụ

Danh sách công cụ thay đổi liên tục, nhưng **nguyên tắc chọn thì không**.

**Bốn nguyên tắc:**

**1. Ưu tiên công cụ đội sẽ THỰC SỰ dùng.** Một công cụ đơn giản được dùng nhất quán vượt xa một công cụ mạnh mẽ bị né tránh.

**2. Ưu tiên tích hợp hơn tính năng đơn lẻ.** Một bộ công cụ nói chuyện được với nhau tốt hơn nhiều so với các công cụ tốt nhất trong từng hạng mục nhưng không kết nối.

**3. Giảm thiểu số nơi cùng một thông tin tồn tại.** Mỗi bản sao là một cơ hội để không đồng bộ.

**4. Đừng để công cụ quyết định quy trình.** Nếu bạn thấy mình thay đổi cách làm việc chỉ vì công cụ không hỗ trợ, hãy hỏi liệu bạn có chọn sai công cụ không.

> **Cảnh báo quan trọng nhất: công cụ KHÔNG cho bạn yêu cầu tốt.** Nó giúp bạn tổ chức, tìm kiếm, liên kết và theo dõi. Nhưng nó không khai thác, không làm rõ, không phát hiện yêu cầu thiếu và không giải quyết mâu thuẫn giữa stakeholder. **Một tổ chức có kỹ năng phân tích kém sẽ chỉ có được yêu cầu tệ được tổ chức đẹp hơn.**

---

## 2. Jira — quản lý công việc và backlog

**Jira là công cụ theo dõi công việc được dùng phổ biến nhất trong các đội phần mềm.**

**Các khái niệm BA cần nắm:**

| Khái niệm | Ý nghĩa |
|-----------|---------|
| **Issue** | Đơn vị công việc: story, task, bug, epic |
| **Issue type** | Phân loại: Epic (lớn), Story (một iteration), Task (kỹ thuật), Bug (lỗi), Sub-task |
| **Backlog** | Danh sách công việc chưa đưa vào sprint, được sắp thứ tự |
| **Sprint / Board** | Công việc đang làm trong iteration hiện tại |
| **Workflow** | Chuỗi trạng thái mà một issue đi qua |
| **Epic link** | Liên kết story với epic cha, cho phép nhìn tiến độ theo mảng lớn |
| **Label / Component** | Phân loại ngang để lọc và báo cáo |

**BA dùng Jira để làm gì:**

- **Viết và duy trì story cùng acceptance criteria** ở nơi đội thực sự làm việc.
- **Liên kết story với epic** để nhìn được bức tranh lớn.
- **Trả lời câu hỏi ngay trên issue** — mỗi câu hỏi được trả lời trong bình luận là một mẩu bối cảnh được lưu lại vĩnh viễn.
- **Theo dõi trạng thái** để báo cáo tiến độ chính xác theo môi trường.
- **Liên kết bug với story gốc** để biết lỗi thuộc phần nào.

> **Thực hành có giá trị cao mà ít đội làm: khi commit mã tham chiếu ID của issue, liên kết yêu cầu tới mã được tạo TỰ ĐỘNG như một tác dụng phụ của công việc bình thường.** Đây là cách truy vết bền vững nhất — vì nó không đòi hỏi ai phải nhớ cập nhật một bảng riêng.

**Ba bẫy khi dùng Jira:**

- **Cấu hình quá phức tạp** với hai mươi trường bắt buộc — mọi người sẽ điền bừa để vượt qua form và dữ liệu trở nên vô giá trị.
- **Viết story quá ngắn** vì nghĩ chi tiết sẽ đến từ cuộc trò chuyện — đúng với đội ngồi cùng phòng, sai với đội phân tán.
- **Dùng Jira như kho lưu trữ** mà không bao giờ truy vấn, lọc hay báo cáo.

---

## 3. Confluence — tài liệu và tri thức

**Confluence là nơi lưu những gì cần sống lâu hơn một sprint.**

**Phân chia hợp lý giữa Jira và Confluence:**

| Nội dung | Nên nằm ở |
|----------|-----------|
| Story, acceptance criteria, bug | **Jira** — gắn với công việc đang chạy |
| Tầm nhìn và phạm vi sản phẩm | **Confluence** |
| Business rules catalog | **Confluence** |
| Data dictionary và glossary | **Confluence** |
| Sơ đồ quy trình, mô hình phân tích | **Confluence** (hoặc công cụ vẽ, nhúng vào) |
| Biên bản họp và quyết định | **Confluence** |
| Quyết định kiến trúc kèm lý do | **Confluence** |

> **Nguyên tắc phân chia: Jira cho thứ có vòng đời ngắn và gắn với công việc; Confluence cho thứ sống lâu hơn dự án.**

**Bốn thực hành làm Confluence hữu ích thay vì thành bãi rác:**

**1. Có cấu trúc thư mục rõ ràng** và **một trang mục lục** cho mỗi khu vực.

**2. Ghi ngày cập nhật cuối và người sở hữu** trên mỗi trang quan trọng. Trang không có người sở hữu sẽ lỗi thời và không ai sửa.

**3. Xoá hoặc đánh dấu lỗi thời** những trang không còn đúng. **Một trang sai gây hại hơn không có trang nào.**

**4. Liên kết hai chiều với Jira** — trang Confluence tham chiếu epic liên quan, và ngược lại.

---

## 4. Công cụ vẽ sơ đồ

**Ba nhóm công cụ với ba mục đích khác nhau:**

| Nhóm | Ví dụ | Mạnh ở |
|------|-------|--------|
| **Vẽ tổng quát** | Draw.io / diagrams.net, Lucidchart | Flowchart, sơ đồ kiến trúc, sơ đồ tổ chức; miễn phí hoặc rẻ; dễ dùng |
| **Mô hình hoá chuyên dụng** | Enterprise Architect, Visual Paradigm, công cụ BPMN chuyên biệt | Thực thi quy tắc ký hiệu, liên kết nhiều mô hình, truy vết tới yêu cầu |
| **Bảng trắng cộng tác** | Miro, FigJam | Workshop từ xa, story mapping, brainstorming, phác nhanh cùng nhau |

**Vì sao công cụ mô hình hoá chuyên dụng đáng cân nhắc cho dự án lớn:**

- Chúng **thực thi quy tắc của từng phương pháp**, bắt lỗi cú pháp và thiếu nhất quán mà người review có thể không thấy.
- Chúng **liên kết nhiều sơ đồ với nhau** và với yêu cầu tương ứng.
- Chúng làm việc **lặp lại và làm mịn sơ đồ dễ dàng** — và bạn gần như không bao giờ vẽ đúng ngay lần đầu.

> **Nhưng với đa số dự án, một công cụ vẽ tổng quát là đủ.** Đừng mua công cụ mô hình hoá đắt tiền khi vấn đề thật của bạn là không ai đọc sơ đồ bạn vẽ.

**Lời khuyên thực tế: quan trọng hơn công cụ là việc cả dự án — lý tưởng là cả tổ chức — theo cùng MỘT quy ước ký hiệu, và mọi người phải review hoặc dùng mô hình đều biết cách diễn giải chúng.**

---

## 5. Công cụ wireframe và thiết kế

| Công cụ | Đặc điểm | Phù hợp với BA khi |
|---------|----------|-------------------|
| **Balsamiq** | Cố ý trông như vẽ tay, độ trung thực thấp | **Lựa chọn tốt nhất cho BA** — chính sự thô sơ khiến người xem góp ý về cấu trúc thay vì màu sắc |
| **Figma** | Thiết kế đầy đủ, cộng tác thời gian thực, prototype tương tác | Khi BA cần xem và bình luận trên thiết kế của designer |
| **Bảng trắng hoặc giấy** | Nhanh nhất, rẻ nhất | Trong workshop và cuộc họp trực tiếp |

> **Với BA, Figma hữu ích nhất không phải để VẼ mà để ĐỌC và BÌNH LUẬN.** Designer làm thiết kế trong Figma; BA vào xem, đối chiếu với yêu cầu, và để lại bình luận ngay tại vị trí có vấn đề — *"trạng thái rỗng của danh sách này hiển thị gì?"*, *"người dùng không đủ quyền thấy gì ở đây?"*

**Nhắc lại nguyên tắc quan trọng: khi đưa wireframe ra thảo luận, luôn nói rõ đây là bản phác về cấu trúc và luồng, không phải thiết kế cuối cùng.**

---

## 6. Công cụ AI trong công việc BA

**AI đã trở thành một phần của bộ công cụ BA, nhưng cách dùng quyết định giá trị.**

**Ba cách dùng có tỷ lệ hữu ích cao nhất:**

**1. Sinh test case từ acceptance criteria**, đặc biệt các trường hợp biên và ngoại lệ.

**2. Phản biện tài liệu của bạn** — *"đọc yêu cầu này và liệt kê mọi cách hiểu khác nhau mà một lập trình viên có thể có"*.

**3. Tìm khoảng trống trong mô tả quy trình** — *"những tình huống ngoại lệ nào chưa được đề cập?"*

**Ba rủi ro phải quản lý:**

- **Ảo giác** — không bao giờ đưa thông tin từ AI vào tài liệu mà chưa kiểm chứng, đặc biệt số liệu và quy định pháp luật.
- **Rò rỉ dữ liệu** — dán tài liệu yêu cầu hoặc dữ liệu khách hàng vào công cụ công cộng có thể vi phạm hợp đồng bảo mật. **Biết rõ chính sách công ty trước khi dùng.**
- **Mất chiều sâu tư duy** — với phần quan trọng nhất, hãy tự nghĩ trước rồi mới hỏi AI để đối chiếu.

> **Cách dùng hiệu quả nhất: coi AI như một người review luôn sẵn sàng, không phải người viết thay.** Prompt mạnh nhất thường là yêu cầu AI **tìm lỗi** trong thứ bạn đã viết.

---

## 7. Bộ công cụ tối thiểu cho một BA

Nếu bạn mới bắt đầu và không biết học cái gì trước, đây là thứ tự hợp lý:

**Bắt buộc:**

1. **Một công cụ quản lý công việc** — Jira hoặc tương đương. Đây là nơi đội thực sự làm việc.
2. **Một công cụ tài liệu** — Confluence, wiki, hoặc thậm chí một thư mục có cấu trúc rõ ràng.
3. **Một công cụ vẽ sơ đồ** — Draw.io là đủ và miễn phí.
4. **Bảng tính** — vẫn là công cụ mạnh nhất cho phân tích dữ liệu nhanh, ma trận truy vết đơn giản và danh sách kiểm.
5. **SQL** — để tự truy vấn dữ liệu và kiểm chứng giả định mà không phải chờ ai.

**Nên có:**

6. Công cụ wireframe độ trung thực thấp.
7. Công cụ bảng trắng cộng tác cho workshop từ xa.
8. Một trợ lý AI, dùng đúng cách.

> **Thứ quan trọng hơn mọi công cụ trong danh sách này: khả năng đặt câu hỏi đúng.** Công cụ khuếch đại năng lực sẵn có — nó không tạo ra năng lực mới.

---

## 8. Điểm cốt lõi

- **Ưu tiên công cụ đội sẽ thực sự dùng** — công cụ đơn giản dùng nhất quán vượt xa công cụ mạnh bị né tránh.
- **Ưu tiên tích hợp hơn tính năng đơn lẻ**, và giảm thiểu số nơi cùng một thông tin tồn tại.
- **Đừng để công cụ quyết định quy trình** — nếu phải đổi cách làm vì công cụ, có lẽ bạn chọn sai công cụ.
- **Công cụ KHÔNG cho bạn yêu cầu tốt** — kỹ năng phân tích kém chỉ cho ra yêu cầu tệ được tổ chức đẹp hơn.
- **Jira cho thứ gắn với công việc đang chạy; Confluence cho thứ sống lâu hơn dự án.**
- **Commit mã tham chiếu ID issue tạo ra truy vết tự động** như tác dụng phụ của công việc bình thường.
- **Hai mươi trường bắt buộc khiến mọi người điền bừa** và dữ liệu trở nên vô giá trị.
- **Story quá ngắn phù hợp với đội ngồi cùng phòng nhưng sai với đội phân tán.**
- Trang Confluence cần **người sở hữu và ngày cập nhật cuối**; trang không có người sở hữu sẽ lỗi thời.
- **Một trang tài liệu sai gây hại hơn không có trang nào.**
- **Công cụ mô hình hoá chuyên dụng thực thi quy tắc ký hiệu** và liên kết nhiều mô hình, nhưng đa số dự án chỉ cần công cụ vẽ tổng quát.
- **Quan trọng hơn công cụ là cả dự án theo cùng một quy ước ký hiệu.**
- **Balsamiq là lựa chọn tốt nhất cho BA** vì sự thô sơ khiến người xem góp ý về cấu trúc thay vì màu sắc.
- **Với BA, Figma hữu ích nhất để ĐỌC và BÌNH LUẬN**, không phải để vẽ.
- Ba cách dùng AI hữu ích nhất: **sinh test case, phản biện tài liệu, tìm khoảng trống trong quy trình**.
- **Không bao giờ đưa thông tin từ AI vào tài liệu mà chưa kiểm chứng.**
- **Dán dữ liệu khách hàng vào công cụ AI công cộng có thể vi phạm hợp đồng bảo mật.**
- Bộ tối thiểu: **quản lý công việc, tài liệu, vẽ sơ đồ, bảng tính, SQL**.
- **Bảng tính vẫn là công cụ mạnh nhất cho phân tích dữ liệu nhanh và danh sách kiểm.**
- **Khả năng đặt câu hỏi đúng quan trọng hơn mọi công cụ** — công cụ khuếch đại chứ không tạo ra năng lực.

## 9. Tóm tắt

- Chọn công cụ theo **mức độ được dùng thật và khả năng tích hợp**, không theo danh sách tính năng.
- **Jira và Confluence phân chia theo vòng đời thông tin**: ngắn hạn gắn với công việc, dài hạn gắn với tổ chức.
- **Sơ đồ và wireframe nên giữ độ trung thực thấp** ở giai đoạn đầu để nhận được phản hồi về cấu trúc.
- **AI là người review luôn sẵn sàng, không phải người viết thay** — và mọi thứ nó sinh ra đều cần bạn kiểm chứng.
