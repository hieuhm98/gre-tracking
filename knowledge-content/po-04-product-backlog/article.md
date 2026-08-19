# Product Backlog & refinement

## 1. Backlog là gì và không phải là gì

> **Product backlog là danh sách được SẮP XẾP của mọi thứ đội CÓ THỂ làm cho sản phẩm.**

**Hai từ khoá quan trọng:**

- **Sắp xếp** — không phải danh sách phẳng. Mục ở trên cùng là mục sẽ được làm tiếp theo.
- **Có thể** — không phải *"sẽ"*. **Nhiều mục sẽ không bao giờ được làm, và đó là kết quả ĐÚNG ĐẮN** vì chúng có giá trị thấp hơn những gì đã được làm.

**Backlog KHÔNG phải:**

| Hiểu lầm | Thực tế |
|----------|---------|
| *"Danh sách việc cần làm hết"* | Danh sách việc **có thể** làm, sắp theo giá trị |
| *"Chỉ chứa user story"* | Chứa cả lỗi cần sửa, công việc kỹ thuật, spike nghiên cứu, nợ kỹ thuật cần trả |
| *"Kho lưu mọi ý tưởng từng nghĩ ra"* | Backlog phình ra không giới hạn sẽ trở nên vô dụng — cần dọn dẹp định kỳ |
| *"Do PO viết một mình"* | PO chịu trách nhiệm, nhưng BA, đội và stakeholder đều đóng góp |

---

## 2. Bốn đặc tính của một backlog khoẻ mạnh

**1. Được sắp xếp.** Đây là thuộc tính quan trọng nhất. Một backlog không có thứ tự không giúp được ai.

**2. Tiến hoá liên tục.** Mục được thêm, xoá, chia nhỏ, gộp lại, sắp xếp lại suốt dự án. **Backlog không bao giờ "hoàn thành".**

**3. Độ chi tiết KHÔNG ĐỀU.** Đây là đặc tính bị hiểu nhầm nhiều nhất:

> - **Mục ở ĐẦU:** chi tiết, nhỏ, đã ước tính, sẵn sàng hiện thực.
> - **Mục ở GIỮA:** vừa phải, có thể vẫn hơi lớn.
> - **Mục ở CUỐI:** thô, lớn, có khi chỉ một dòng mô tả ý tưởng.
>
> **Đây KHÔNG phải sự cẩu thả — đây là hiệu quả.** Chi tiết hoá một mục sẽ thay đổi hoặc bị loại bỏ trước khi đến lượt là **lãng phí thuần tuý**.

**4. Minh bạch.** Mọi người liên quan đều xem được, và hiểu được vì sao thứ tự lại như vậy.

---

## 3. Backlog refinement (grooming)

**Refinement là hoạt động LIÊN TỤC chuẩn bị các mục ở đầu backlog để chúng sẵn sàng cho sprint tiếp theo.**

**Các hoạt động trong một buổi refinement:**

- **Chia nhỏ** những mục quá lớn để vừa một sprint.
- **Làm rõ** mục mơ hồ bằng cách hỏi PO và người dùng.
- **Bổ sung acceptance criteria.**
- **Ước tính** những mục chưa có ước tính.
- **Sắp xếp lại** khi ưu tiên thay đổi.
- **Loại bỏ** những mục không còn ý nghĩa.

**Ai tham gia:** Product Owner, BA, và **ít nhất một vài thành viên của đội phát triển** — vì chính họ sẽ đặt những câu hỏi làm lộ ra công việc ẩn.

> **Quy tắc thực dụng: giữ khoảng HAI tới BA sprint tiếp theo ở trạng thái sẵn sàng.**
>
> Ít hơn thì đội có nguy cơ bị chặn ở đầu sprint. Nhiều hơn thì bạn đang lãng phí công sức vào những thứ sẽ thay đổi trước khi đến lượt.

**Tần suất:** thường một tới hai buổi mỗi sprint, mỗi buổi không quá một giờ. **Refinement kéo dài quá lâu là dấu hiệu bạn đang chi tiết hoá những thứ ở quá xa.**

---

## 4. Definition of Ready

**Definition of Ready là tập tiêu chí mà một mục phải thoả mãn trước khi được đưa vào sprint.**

**Một bộ tiêu chí điển hình:**

- Đủ **nhỏ** để hoàn thành trong một sprint.
- Có **acceptance criteria rõ ràng**, phủ cả trường hợp lỗi.
- Đã được **ước tính**.
- Không có **phụ thuộc chặn** chưa được giải quyết.
- **Đội hiểu nó nghĩa là gì** — không phải chỉ PO hiểu.
- Có **thiết kế hoặc wireframe** nếu cần.
- Đã xác định **dữ liệu kiểm thử** cần thiết nếu phức tạp.

> **Definition of Ready là công cụ bảo vệ đội mạnh mẽ.** Nó cho phép đội nói *"story này chưa sẵn sàng"* một cách **khách quan**, thay vì nhận vào một story mơ hồ rồi mắc kẹt giữa sprint.
>
> **Nhưng cẩn thận với việc lạm dụng:** nếu Definition of Ready quá nghiêm ngặt, nó biến thành một cổng kiểm soát làm chậm mọi thứ và tái tạo lại mô hình chuyển giao tài liệu của Waterfall. **Hãy giữ nó ngắn và tập trung vào những gì thực sự chặn đội.**

---

## 5. Quản lý kích thước backlog

**Backlog phình ra không giới hạn là vấn đề thật.**

Khi backlog có 800 mục, không ai đọc hết, việc tìm kiếm trở nên vô vọng, và các mục cũ ở cuối chỉ tạo ra ảo giác rằng chúng sẽ được làm.

**Ba thực hành giữ backlog ở kích thước dùng được:**

**1. Dọn dẹp định kỳ.** Mỗi quý, rà soát phần cuối backlog và **đóng những mục đã nằm đó hơn một năm mà chưa bao giờ được ưu tiên**. Nếu chúng thực sự quan trọng, chúng sẽ quay lại.

**2. Đóng thay vì xoá, kèm lý do.** Ý tưởng bị từ chối có xu hướng quay lại. Giữ lại quyết định và lý do giúp lần sau bạn có ngay câu trả lời.

**3. Không chi tiết hoá phần cuối.** Mục ở cuối chỉ cần một dòng. Chi tiết hoá chúng là lãng phí thuần tuý.

> **Cách nói với stakeholder khi đóng một mục: *"Chúng tôi chưa thấy đủ giá trị để ưu tiên việc này trong 12 tháng qua. Nếu tình hình đã thay đổi, hãy cho tôi biết điều gì mới để chúng ta xem lại."*** Điều này trung thực hơn nhiều so với việc để nó nằm mãi ở cuối danh sách và tạo hy vọng giả.

---

## 6. Chia nhỏ epic thành story

**Epic là mục quá lớn để hoàn thành trong một sprint.** Chia nhỏ nó đúng cách là một trong những kỹ năng có giá trị cao nhất.

**Cách chia SAI: theo tầng kỹ thuật.**

- ❌ *"Xây giao diện"*, *"Xây API"*, *"Xây cơ sở dữ liệu"*
- **Vì sao sai:** không cái nào mang giá trị riêng lẻ và không cái nào trình diễn được ở sprint review.

**Năm cách chia ĐÚNG:**

| Cách chia | Ví dụ với epic "Quản lý đơn hàng" |
|-----------|-----------------------------------|
| **Theo bước quy trình** | Tạo đơn → Duyệt đơn → Theo dõi trạng thái → Huỷ đơn |
| **Theo loại dữ liệu** | Hỗ trợ đơn nội địa trước, đơn quốc tế sau |
| **Theo user class** | Nhân viên bán hàng trước, quản lý sau |
| **Theo quy tắc nghiệp vụ** | Trường hợp đơn giản trước, các ngoại lệ sau |
| **Theo mức độ hoàn thiện** | Danh sách cơ bản trước, lọc và sắp xếp sau |

> **Nguyên tắc bao trùm: mỗi story sau khi chia phải là một LÁT CẮT DỌC mỏng — đi xuyên qua mọi tầng kỹ thuật cho một chức năng thật.** Điều này bảo đảm mỗi story đều trình diễn được và mang lại phản hồi thật.

---

## 7. Điểm cốt lõi

- **Backlog là danh sách được sắp xếp của mọi thứ đội CÓ THỂ làm** — không phải danh sách phải làm hết.
- **Nhiều mục sẽ không bao giờ được làm, và đó là kết quả đúng đắn** vì chúng có giá trị thấp hơn.
- Backlog chứa cả **lỗi, công việc kỹ thuật, spike nghiên cứu và nợ kỹ thuật**, không chỉ user story.
- Bốn đặc tính: **được sắp xếp, tiến hoá liên tục, độ chi tiết không đều, minh bạch**.
- **Độ chi tiết không đều là hiệu quả chứ không phải cẩu thả** — chi tiết hoá thứ sẽ thay đổi là lãng phí thuần tuý.
- Refinement gồm: **chia nhỏ, làm rõ, bổ sung AC, ước tính, sắp xếp lại, loại bỏ**.
- **Ít nhất một vài thành viên đội phải dự refinement** — chính họ đặt câu hỏi làm lộ ra công việc ẩn.
- **Giữ hai tới ba sprint tiếp theo ở trạng thái sẵn sàng** — ít hơn thì đội bị chặn, nhiều hơn thì lãng phí.
- **Refinement kéo dài quá lâu là dấu hiệu bạn đang chi tiết hoá những thứ ở quá xa.**
- **Definition of Ready cho phép đội từ chối một story chưa sẵn sàng một cách khách quan.**
- **Definition of Ready quá nghiêm ngặt biến thành cổng kiểm soát** và tái tạo mô hình chuyển giao tài liệu của Waterfall.
- **Backlog 800 mục là vấn đề thật** — không ai đọc hết và các mục cũ chỉ tạo ảo giác.
- **Đóng những mục nằm hơn một năm mà chưa bao giờ được ưu tiên** — nếu quan trọng thật, chúng sẽ quay lại.
- **Đóng thay vì xoá, kèm lý do**, vì ý tưởng bị từ chối có xu hướng quay lại.
- **Chia epic theo tầng kỹ thuật là sai** — không story nào mang giá trị riêng lẻ hay trình diễn được.
- Năm cách chia đúng: **theo bước quy trình, loại dữ liệu, user class, quy tắc nghiệp vụ, mức độ hoàn thiện**.
- **Mỗi story phải là một lát cắt dọc mỏng đi xuyên mọi tầng** cho một chức năng thật.

## 8. Tóm tắt

- **Thứ tự là thuộc tính quan trọng nhất của backlog**, và độ chi tiết giảm dần từ đầu xuống cuối là thiết kế có chủ đích.
- **Refinement là hoạt động liên tục**, không phải một sự kiện — mục tiêu là luôn có hai tới ba sprint sẵn sàng.
- **Definition of Ready bảo vệ đội**, nhưng phải giữ ngắn để không trở thành một cổng kiểm soát.
- **Chia epic thành các lát cắt dọc mỏng** là cách duy nhất bảo đảm mỗi story đều trình diễn được và mang lại phản hồi thật.
