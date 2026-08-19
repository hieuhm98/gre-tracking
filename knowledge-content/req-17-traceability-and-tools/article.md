# Truy vết yêu cầu & công cụ

## 1. Truy vết yêu cầu là gì & vì sao cần nó

**Truy vết yêu cầu (requirements traceability)** là việc ghi lại và duy trì **các liên kết giữa một yêu cầu với những thứ liên quan tới nó** — nguồn gốc của nó, các yêu cầu khác, thiết kế, mã, và test.

### Traceable khác Traced

> **Đây là phân biệt mà nhiều người bỏ lỡ.**
>
> **Traceable (truy vết được)** là một **tính chất** của yêu cầu: nó có nhãn duy nhất bền vững, được viết hạt mịn, không bị gộp với yêu cầu khác. **Đây là điều kiện tiên quyết.**
>
> **Traced (đã truy vết)** nghĩa là bạn **thực sự đã tạo ra các liên kết**.
>
> **Bạn không cần phải TRACE mọi thứ, nhưng yêu cầu của bạn nên luôn TRACEABLE.** Viết yêu cầu hạt mịn với nhãn bền vững gần như không tốn thêm chi phí; tạo và duy trì liên kết thì có.

### Năm lợi ích cụ thể

**1. Phân tích tác động của thay đổi.**

> **Đây là lợi ích lớn nhất và cụ thể nhất.** Khi có đề xuất thay đổi, bạn **truy vấn** được: yêu cầu này liên kết với thiết kế nào, mã nào, test nào, và yêu cầu nào khác? **Câu trả lời trong vài phút và đầy đủ, thay vì vài ngày và dựa trên trí nhớ.**

**2. Xác minh độ phủ.** Ma trận yêu cầu-tới-test cho thấy ngay **yêu cầu nào chưa có test** (khoảng trống kiểm thử) và **test nào không truy vết về yêu cầu nào** (test thừa hoặc yêu cầu chưa được ghi lại).

**3. Phát hiện chức năng thiếu và thừa.**

- **Yêu cầu không liên kết tới bất kỳ đoạn mã nào** → chức năng bị bỏ sót.
- **Mã không liên kết tới bất kỳ yêu cầu nào** → có thể là **gold plating**, hoặc là yêu cầu ngầm chưa được ghi.

**4. Bảo trì và tái kỹ nghệ.** Nhiều năm sau, người bảo trì cần biết **đoạn mã kỳ lạ này phục vụ yêu cầu nào** trước khi dám sửa nó.

**5. Tuân thủ và chứng nhận.** Với hệ thống safety-critical hoặc trong lĩnh vực được quản lý chặt, **truy vết là bắt buộc về mặt pháp lý**. Bạn phải chứng minh với cơ quan chứng nhận rằng **mỗi yêu cầu an toàn đã được hiện thực và kiểm chứng**.

### Vì sao truy vết thường thất bại trong thực tế

> **Truy vết là một trong những thực hành được ca ngợi nhiều nhất và thực hiện tệ nhất trong kỹ nghệ yêu cầu.**

**Ba nguyên nhân:**

- **Nó được làm ở CUỐI dự án như một bài tập tuân thủ**, chứ không được xây dựng dần khi công việc diễn ra. **Cố tái tạo liên kết truy vết sau khi mọi thứ đã xong là cực kỳ tốn kém và thường cho kết quả sai.**
- **Nó được làm bằng tay trong bảng tính** và nhanh chóng lỗi thời. **Một ma trận truy vết lỗi thời tệ hơn không có gì** — nó tạo ra sự tự tin sai lầm.
- **Nó được làm quá chi tiết**, tạo ra chi phí bảo trì mà không ai chịu nổi.

---

## 2. Bốn loại liên kết truy vết

**Truy vết đi theo hai hướng từ mỗi yêu cầu, ở hai mức.**

### Hướng NGƯỢC (backward)

**1. Yêu cầu ← Nguồn gốc.** Yêu cầu này đến từ đâu?

- Từ một **yêu cầu nghiệp vụ** hoặc mục tiêu kinh doanh nào?
- Từ **stakeholder** nào, **use case** nào, **business rule** nào?
- Từ **quy định pháp luật hoặc tiêu chuẩn** nào?

> **Giá trị: nó trả lời câu hỏi *"vì sao chúng ta có yêu cầu này?"*.** Yêu cầu không truy vết ngược được về một nguồn có thẩm quyền là **ứng viên hàng đầu để bị loại bỏ**.

**2. Yêu cầu ← Yêu cầu cấp cao hơn.** Yêu cầu chức năng chi tiết truy vết ngược về **yêu cầu người dùng** hoặc **feature** đã sinh ra nó.

> **Kiểm tra tính đúng đắn: một yêu cầu con mâu thuẫn với yêu cầu cha của nó là KHÔNG ĐÚNG.** Truy vết làm cho việc kiểm tra này khả thi.

### Hướng XUÔI (forward)

**3. Yêu cầu → Sản phẩm công việc phía sau.** Yêu cầu này được hiện thực ở đâu?

- **Thành phần thiết kế** nào?
- **Module mã** nào?
- **Test case** nào xác minh nó?
- **Tài liệu người dùng** nào mô tả nó?

**4. Yêu cầu → Yêu cầu chi tiết hơn.** Yêu cầu người dùng truy vết xuôi tới các **yêu cầu chức năng** hiện thực nó.

### Bảng tổng hợp

| Loại liên kết | Trả lời câu hỏi | Dùng để |
|--------------|-----------------|---------|
| **Yêu cầu ← nguồn gốc** | *"Vì sao chúng ta có yêu cầu này?"* | Loại bỏ yêu cầu không cần thiết; biết hỏi ai khi cần làm rõ |
| **Yêu cầu ← yêu cầu cha** | *"Yêu cầu này thuộc về đâu?"* | Kiểm tra tính nhất quán và tính đúng đắn |
| **Yêu cầu → thiết kế, mã, test** | *"Nó được hiện thực và kiểm chứng ở đâu?"* | Phân tích tác động; đo độ phủ; chứng minh tuân thủ |
| **Yêu cầu → yêu cầu con** | *"Nó được phân rã thành gì?"* | Kiểm tra tính đầy đủ của phân rã |

> **Quan hệ giữa các liên kết KHÔNG phải luôn một-một.** Một yêu cầu có thể được hiện thực bởi nhiều module mã, và một module mã có thể phục vụ nhiều yêu cầu. **Đây là lý do quản lý liên kết bằng bảng tính nhanh chóng trở nên bất khả thi.**

---

## 3. Ma trận truy vết & cách xây dựng

### Cấu trúc

**Ma trận truy vết** liệt kê các mục ở hàng và cột, với ô đánh dấu nơi có liên kết.

**Ví dụ: ma trận yêu cầu chức năng × test case.** Hàng là yêu cầu, cột là test case, ô có dấu X nghĩa là test đó xác minh yêu cầu đó.

**Cách đọc ma trận để tìm vấn đề:**

- **Hàng không có dấu X nào** → yêu cầu này **chưa được kiểm thử**.
- **Cột không có dấu X nào** → test này **không xác minh yêu cầu nào** — hoặc là test thừa, hoặc là yêu cầu chưa được ghi lại.
- **Hàng có rất nhiều dấu X** → yêu cầu này có thể **quá lớn** và nên được chia nhỏ.

> **Sức mạnh của biểu diễn dạng ma trận: khoảng trống trở nên NHÌN THẤY ĐƯỢC.** Một hàng trống nổi bật ngay lập tức, trong khi cùng thông tin đó nằm rải rác trong văn bản thì không ai phát hiện.

### Xây dựng khi nào

> **Nguyên tắc quan trọng nhất: tạo liên kết KHI CÔNG VIỆC DIỄN RA, không phải ở cuối dự án.**

**Cách làm đúng:**

- Khi lập trình viên **viết mã cho một yêu cầu**, họ ghi lại liên kết ngay lúc đó — trong khi họ vẫn còn nhớ.
- Khi tester **viết một test case**, họ ghi ngay yêu cầu nào nó xác minh.
- Khi BA **phân rã một yêu cầu**, liên kết cha-con được tạo tại thời điểm phân rã.

**Cách làm sai:** ba tháng trước khi giao hàng, một người được giao nhiệm vụ *"xây ma trận truy vết"*. Người đó phải đọc hàng nghìn dòng mã và phỏng đoán chúng phục vụ yêu cầu nào. **Kết quả tốn kém, không chính xác, và không ai tin.**

### Ai tạo liên kết

**Người tạo ra sản phẩm công việc là người tạo ra liên kết**, vì họ là người duy nhất thực sự biết.

> **Đây là điểm quan trọng: truy vết KHÔNG phải trách nhiệm riêng của BA.** Nếu bạn giao toàn bộ việc tạo liên kết cho một người, người đó sẽ phải đoán, và ma trận sẽ sai. **Truy vết là trách nhiệm phân tán, được BA điều phối và kiểm tra.**

---

## 4. Truy vết trong thực tế: chi phí, mức độ và thời điểm

### Chi phí là có thật

**Truy vết không miễn phí.** Chi phí gồm:

- **Chi phí tạo liên kết ban đầu** — thường không lớn nếu làm khi công việc diễn ra.
- **Chi phí BẢO TRÌ** — **đây mới là phần lớn**. Mỗi lần mã được tái cấu trúc, test được viết lại, yêu cầu được sửa, các liên kết phải được cập nhật.
- **Chi phí công cụ và đào tạo.**

> **Chi phí bảo trì tăng theo số lượng liên kết, không theo số lượng yêu cầu.** Đây là lý do truy vết quá chi tiết trở nên không bền vững rất nhanh.

### Quyết định mức độ truy vết

> **Câu hỏi đúng không phải *"chúng ta có nên truy vết không?"* mà là *"chúng ta nên truy vết ĐẾN MỨC NÀO?"***

**Các yếu tố quyết định:**

| Truy vết SÂU khi | Truy vết NÔNG khi |
|-----------------|-------------------|
| Hệ thống **safety-critical** hoặc **mission-critical** | Ứng dụng nội bộ, hậu quả lỗi thấp |
| **Bắt buộc bởi quy định hoặc chứng nhận** | Không có yêu cầu tuân thủ |
| Sản phẩm sẽ **tồn tại và được bảo trì nhiều năm** | Sản phẩm ngắn hạn hoặc thử nghiệm |
| Đội **lớn và phân tán** | Đội nhỏ ngồi cùng chỗ với trí nhớ chung tốt |
| **Thay đổi thường xuyên** với tác động rộng | Hệ thống ổn định |

**Cách tiếp cận thực dụng:**

- **Truy vết đầy đủ cho các phần quan trọng nhất** — thành phần safety-critical, chức năng cốt lõi, khu vực thay đổi nhiều.
- **Truy vết nông hoặc không truy vết cho phần còn lại.**
- **Truy vết ở mức GRANULARITY phù hợp** — liên kết tới module thay vì tới từng hàm; liên kết tới bộ test thay vì từng test case, nếu điều đó đủ dùng.

> **Bài kiểm tra thực dụng: với mỗi loại liên kết bạn định duy trì, hãy hỏi *"chúng ta sẽ dùng liên kết này để trả lời câu hỏi nào?"*** Nếu không có câu hỏi cụ thể, đừng duy trì loại liên kết đó.

### Bẫy phổ biến nhất

> **Bẫy: truy vết được coi là bài tập tuân thủ chứ không phải công cụ làm việc.**
>
> Dấu hiệu nhận biết: **ma trận truy vết được cập nhật chỉ khi có kiểm toán sắp diễn ra**. Điều đó nghĩa là **không ai dùng nó để làm việc** — nên nó không được duy trì, nên nó không chính xác, nên không ai tin nó, nên không ai dùng nó.
>
> **Vòng luẩn quẩn này chỉ bị phá vỡ khi truy vết mang lại giá trị NGAY LẬP TỨC cho người tạo ra nó** — chủ yếu là qua phân tích tác động nhanh và chính xác.

---

## 5. Truy vết trong agile & hệ thống được quản lý chặt

### Trong agile

> **Hiểu lầm phổ biến: agile không cần truy vết.**

**Thực tế: đội agile có truy vết, chỉ là ở dạng nhẹ hơn và thường tự động hơn.**

**Các cơ chế truy vết tự nhiên trong agile:**

- **Commit message tham chiếu ID của story** → liên kết yêu cầu tới mã **được tạo tự động** như một tác dụng phụ của quy trình bình thường.
- **Test tự động được đặt tên hoặc gắn thẻ theo story** → liên kết yêu cầu tới test.
- **Công cụ backlog liên kết story với epic và feature** → liên kết yêu cầu cha-con.
- **Acceptance test gắn với story** → liên kết yêu cầu tới xác minh.

> **Cái nhìn quan trọng: truy vết tốt nhất là truy vết được tạo ra như TÁC DỤNG PHỤ của công việc bình thường, không phải như một hoạt động riêng biệt.**
>
> Nếu lập trình viên phải nhớ cập nhật một bảng tính riêng, họ sẽ quên. Nếu ID story nằm trong commit message vì công cụ yêu cầu vậy, **liên kết luôn chính xác và không tốn thêm công sức**.

**Nhưng agile cũng có điểm yếu về truy vết:**

- Nếu đội **vứt bỏ user story sau khi hiện thực**, liên kết ngược về lý do nghiệp vụ biến mất.
- **Liên kết tới yêu cầu cấp cao** (mục tiêu kinh doanh) thường yếu, vì backlog phẳng không thể hiện tốt cấu trúc đó.

### Trong hệ thống được quản lý chặt

**Với thiết bị y tế, hàng không, ô tô, hạt nhân — truy vết không phải lựa chọn.**

**Yêu cầu điển hình của cơ quan chứng nhận:**

- **Mỗi yêu cầu an toàn phải truy vết được** tới thiết kế, mã và test chứng minh nó được hiện thực và kiểm chứng.
- **Mỗi đoạn mã phải truy vết ngược** về một yêu cầu — mã không có yêu cầu là **phát hiện kiểm toán nghiêm trọng**.
- **Bằng chứng phải được tạo ra TRONG SUỐT dự án**, với dấu vết thời gian, không lắp ghép ở cuối.

> **Đây là lý do trong lĩnh vực được quản lý chặt, công cụ quản lý yêu cầu không phải xa xỉ mà là điều kiện tiên quyết.** Duy trì truy vết đầy đủ cho một hệ thống hàng nghìn yêu cầu bằng bảng tính là **bất khả thi trong thực tế**.

---

## 6. Vì sao cần công cụ quản lý yêu cầu

### Giới hạn của tài liệu và bảng tính

**Với dự án nhỏ, tài liệu Word và bảng tính hoạt động tốt.** Vấn đề xuất hiện khi quy mô tăng:

| Nhu cầu | Vì sao tài liệu thất bại |
|---------|-------------------------|
| **Lưu thuộc tính cho từng yêu cầu** | Không có chỗ tự nhiên để đặt 8 thuộc tính cho mỗi yêu cầu mà không làm tài liệu không đọc nổi |
| **Theo dõi trạng thái** | Không thể lọc ra "mọi yêu cầu ở trạng thái implemented nhưng chưa verified" |
| **Quản lý liên kết truy vết** | Quan hệ nhiều-nhiều không biểu diễn được trong tài liệu tuyến tính |
| **Lịch sử thay đổi cho từng yêu cầu** | Lịch sử tài liệu ở mức tệp, không ở mức từng yêu cầu |
| **Nhiều người làm việc đồng thời** | Xung đột phiên bản liên tục |
| **Tạo tập con** | Không thể tự động rút ra "mọi yêu cầu cho release 2" |
| **Tái sử dụng giữa dự án** | Sao chép và dán, dẫn tới nhiều bản không đồng bộ |
| **Không trùng lặp** | Yêu cầu logic thuộc nhiều mục phải được lặp lại |

> **Nguyên tắc nền tảng: yêu cầu về bản chất là DỮ LIỆU CÓ CẤU TRÚC CÓ QUAN HỆ, không phải văn xuôi.** Tài liệu là một cách trình bày dữ liệu đó; nó không phải cách lưu trữ tốt.

### Lợi ích cốt lõi của công cụ

**1. Mỗi yêu cầu được lưu MỘT LẦN DUY NHẤT**, rồi được hiển thị ở bất kỳ đâu nó liên quan. **Điều này loại bỏ hoàn toàn vấn đề trùng lặp và không đồng bộ.**

**2. Truy vấn và lọc.** *"Cho tôi mọi yêu cầu ưu tiên cao, chưa được xác minh, thuộc release 2, do phòng Tài chính đề xuất."* **Trong tài liệu, câu hỏi này không trả lời được.**

**3. Liên kết truy vết được quản lý như dữ liệu**, cho phép truy vấn tác động ngay lập tức.

**4. Lịch sử ở mức từng yêu cầu**, kèm ai, khi nào và vì sao.

**5. Báo cáo tự động** — SRS cho một release chỉ là một **báo cáo được sinh ra từ cơ sở dữ liệu** theo tiêu chí truy vấn.

**6. Kiểm soát truy cập** — ai được xem gì, ai được sửa gì.

**7. Tái sử dụng giữa các dự án** — cùng một yêu cầu có thể được tham chiếu từ nhiều dự án.

---

## 7. Khả năng của công cụ quản lý yêu cầu

### Tập khả năng cốt lõi

**1. Lưu trữ và tổ chức yêu cầu** với phân cấp, thuộc tính tuỳ chỉnh, và định danh bền vững.

**2. Kiểm soát phiên bản ở mức từng yêu cầu**, với lịch sử đầy đủ.

**3. Quản lý baseline** — chụp lại trạng thái một tập yêu cầu tại một thời điểm.

**4. Quản lý liên kết truy vết**, bao gồm phát hiện **liên kết bị nghi ngờ (suspect link)**.

> **Suspect link là một tính năng cực kỳ giá trị:** khi yêu cầu A thay đổi, mọi liên kết từ A tới thiết kế, mã và test **tự động được đánh dấu là đáng ngờ**, buộc ai đó phải xem lại xem những thứ đó có cần cập nhật không. **Đây chính là cơ chế biến truy vết từ tài liệu tĩnh thành công cụ làm việc sống.**

**5. Quản lý thay đổi** — đề xuất, luồng phê duyệt, thông báo.

**6. Cộng tác** — bình luận, thảo luận, thông báo cho người quan tâm.

**7. Báo cáo và dashboard** — phân bố trạng thái, độ phủ truy vết, xu hướng thay đổi.

**8. Tích hợp** với công cụ khác — quản lý test, theo dõi lỗi, kiểm soát mã nguồn, công cụ agile.

> **Khả năng tích hợp thường quan trọng hơn tính năng độc lập.** Một công cụ yêu cầu không nói chuyện với công cụ test và công cụ mã nguồn sẽ **tạo ra một ốc đảo dữ liệu** mà không ai cập nhật.

### Điều công cụ KHÔNG làm được

> **Cảnh báo quan trọng nhất về công cụ: công cụ KHÔNG cho bạn yêu cầu tốt.**
>
> Nó giúp bạn **tổ chức, tìm kiếm, liên kết và theo dõi** yêu cầu. Nhưng nó **không** khai thác chúng, **không** làm chúng rõ ràng, **không** phát hiện yêu cầu thiếu, và **không** giải quyết mâu thuẫn giữa stakeholder.
>
> **Một tổ chức có kỹ năng phân tích yêu cầu kém sẽ chỉ có được yêu cầu tệ được tổ chức đẹp hơn.** Đầu tư vào kỹ năng trước, vào công cụ sau.

---

## 8. Chọn và triển khai công cụ

### Tiêu chí chọn

**Ngoài tính năng, hãy đánh giá:**

- **Khả năng sử dụng.** Nếu công cụ khó dùng, mọi người sẽ **quay lại dùng Word và email**. Đây là yếu tố quyết định thành bại lớn hơn nhiều so với danh sách tính năng.
- **Tích hợp** với công cụ đội đã dùng.
- **Khả năng tuỳ chỉnh** thuộc tính, luồng công việc và loại liên kết theo cách làm việc của bạn.
- **Khả năng báo cáo** và xuất dữ liệu.
- **Mô hình cấp phép và tổng chi phí sở hữu**, gồm cả phí duy trì và chi phí triển khai.
- **Khả năng lấy dữ liệu ra** nếu sau này bạn muốn chuyển công cụ.
- **Sức khoẻ nhà cung cấp và lộ trình sản phẩm.**

> **Áp dụng chính bài học từ chương về giải pháp đóng gói: đừng để nhà cung cấp trình diễn theo kịch bản của họ.** Đưa cho họ **yêu cầu thật từ dự án của bạn** và yêu cầu họ thực hiện các tác vụ bạn thực sự làm hằng ngày.

### Triển khai thành công

**Sáu nguyên tắc:**

**1. Bắt đầu nhỏ.** Chọn **một dự án thí điểm** với đội sẵn sàng, thay vì triển khai toàn tổ chức cùng lúc.

**2. Đừng cố di trú mọi thứ.** Yêu cầu của dự án cũ có thể ở lại nơi cũ. **Bắt đầu với dự án mới.**

**3. Định nghĩa quy trình TRƯỚC khi cấu hình công cụ.**

> **Bẫy phổ biến: mua công cụ rồi hy vọng nó sẽ dạy bạn cách làm việc.** Điều đó không xảy ra. **Công cụ khuếch đại quy trình bạn có — tốt hoặc xấu.** Nếu quy trình của bạn lộn xộn, công cụ sẽ làm nó lộn xộn nhanh hơn và ở quy mô lớn hơn.

**4. Giữ cấu hình đơn giản lúc đầu.** Bắt đầu với **ít thuộc tính, ít loại liên kết, luồng công việc đơn giản**. Bạn luôn có thể thêm sau; gỡ bỏ thì khó hơn nhiều.

**5. Đầu tư vào đào tạo và hỗ trợ.** Không phải chỉ về cách bấm nút, mà về **vì sao chúng ta làm thế này**.

**6. Có người sở hữu công cụ.** Ai đó phải chịu trách nhiệm về cấu hình, hỗ trợ người dùng, và cải tiến theo thời gian. **Không có người sở hữu, công cụ sẽ dần trôi vào tình trạng bỏ hoang.**

---

## 9. Bẫy khi dùng công cụ

**1. Công cụ trở thành mục đích thay vì phương tiện.**

> Đội dành nhiều thời gian **duy trì công cụ** hơn là **hiểu vấn đề nghiệp vụ**. Nếu bạn thấy mọi người tranh luận về cấu hình trường tuỳ chỉnh trong khi không ai đã nói chuyện với người dùng thực trong ba tuần, **bạn đã lạc lối**.

**2. Cấu hình quá phức tạp.** Hai mươi thuộc tính bắt buộc cho mỗi yêu cầu. **Kết quả: mọi người điền bừa để vượt qua form**, và dữ liệu trở nên vô giá trị.

**3. Dữ liệu không được duy trì.**

> **Đây là chế độ thất bại nghiêm trọng nhất.** Một công cụ chứa dữ liệu lỗi thời **tệ hơn không có công cụ**, vì người ta ra quyết định dựa trên thông tin sai mà không biết.

**4. Sử dụng một phần.** Nửa đội dùng công cụ, nửa kia dùng bảng tính. **Bây giờ bạn có hai nguồn sự thật, cả hai đều không đầy đủ.**

**5. Chỉ dùng như kho lưu trữ.** Yêu cầu được nhập vào và không bao giờ được truy vấn, lọc hay báo cáo. **Bạn đã trả tiền cho một cơ sở dữ liệu và dùng nó như một ngăn tủ.**

**6. Không tích hợp.** Yêu cầu ở công cụ A, test ở công cụ B, lỗi ở công cụ C, mã ở công cụ D — **không cái nào nói chuyện với cái nào**. Truy vết trở thành công việc thủ công và nhanh chóng bị bỏ.

**7. Kỳ vọng công cụ sẽ sửa vấn đề con người.** Nếu stakeholder không tham gia, nếu không ai có thẩm quyền quyết định, nếu tổ chức không thể thống nhất về ưu tiên — **không công cụ nào sửa được những điều đó**.

> **Bài kiểm tra sức khoẻ đơn giản: hỏi một thành viên đội bất kỳ *"lần cuối bạn dùng công cụ yêu cầu để TRẢ LỜI một câu hỏi là khi nào?"***
>
> Nếu câu trả lời là *"tôi chỉ nhập dữ liệu vào đó"*, công cụ đang là gánh nặng chứ không phải tài sản.

---

## 10. Công cụ khác trong hệ sinh thái yêu cầu

**Công cụ quản lý yêu cầu chỉ là một phần.** Công việc yêu cầu được hỗ trợ bởi cả một hệ sinh thái.

| Loại công cụ | Vai trò trong công việc yêu cầu |
|-------------|--------------------------------|
| **Công cụ mô hình hoá** | Vẽ DFD, ERD, state diagram, swimlane; thực thi quy tắc ký hiệu và bắt lỗi cú pháp |
| **Công cụ prototyping / wireframe** | Dựng mock-up giao diện nhanh để lấy phản hồi |
| **Công cụ cộng tác và bảng trắng ảo** | Workshop từ xa, story mapping, brainstorming |
| **Công cụ quản lý test** | Lưu test case và liên kết chúng với yêu cầu |
| **Công cụ theo dõi lỗi** | Ghi nhận vấn đề; nguồn thông tin về yêu cầu bị thiếu |
| **Công cụ quản lý backlog agile** | Backlog, story, sprint, và truy vết nhẹ |
| **Công cụ kiểm soát mã nguồn** | Liên kết commit tới story qua ID trong commit message |
| **Công cụ khảo sát** | Thu thập đầu vào từ số lượng lớn người dùng |
| **Wiki và cơ sở tri thức** | Glossary, business rule, quyết định kiến trúc và lý do |

### Nguyên tắc chọn công cụ tổng thể

**1. Ưu tiên tích hợp hơn tính năng đơn lẻ.** Một bộ công cụ nói chuyện với nhau tốt hơn nhiều so với các công cụ tốt nhất không kết nối.

**2. Giảm thiểu số nơi cùng một thông tin tồn tại.** Mỗi bản sao là một cơ hội để không đồng bộ.

**3. Ưu tiên công cụ đội sẽ THỰC SỰ dùng.** Một công cụ đơn giản được dùng nhất quán vượt xa một công cụ mạnh mẽ bị né tránh.

**4. Đừng để công cụ quyết định quy trình.** Nếu bạn thấy mình thay đổi cách làm việc chỉ vì công cụ không hỗ trợ nó, **hãy hỏi liệu bạn có chọn sai công cụ không**.

### Thông điệp cuối

> **Truy vết và công cụ đều phục vụ CÙNG MỘT mục đích: giúp bạn TRẢ LỜI CÂU HỎI về yêu cầu một cách nhanh chóng và chính xác.**
>
> *Yêu cầu này đến từ đâu? Thay đổi nó sẽ ảnh hưởng tới cái gì? Cái gì chưa được kiểm thử? Chúng ta đã đồng ý xây gì? Điều gì đã thay đổi kể từ tháng trước?*
>
> **Nếu truy vết và công cụ của bạn giúp bạn trả lời những câu hỏi này nhanh hơn, chúng đang phát huy tác dụng. Nếu chúng chỉ tạo ra công việc mà không ai truy vấn kết quả, hãy cắt giảm chúng lại.**

---

## Điểm cốt lõi

- **Traceable là tính chất; traced là việc bạn đã thực sự tạo liên kết** — hãy luôn traceable, nhưng chỉ trace những gì cần.
- **Lợi ích lớn nhất và cụ thể nhất của truy vết là phân tích tác động của thay đổi.**
- **Yêu cầu không truy vết ngược được về nguồn có thẩm quyền là ứng viên hàng đầu để bị loại bỏ.**
- **Mã không truy vết ngược về yêu cầu nào có thể là gold plating** hoặc yêu cầu ngầm chưa ghi lại.
- **Một ma trận truy vết lỗi thời tệ hơn không có gì** — nó tạo ra sự tự tin sai lầm.
- **Cố tái tạo liên kết truy vết ở cuối dự án là cực kỳ tốn kém và thường cho kết quả sai.**
- **Người tạo ra sản phẩm công việc là người tạo ra liên kết** — truy vết không phải trách nhiệm riêng của BA.
- **Chi phí bảo trì truy vết tăng theo số LIÊN KẾT, không theo số yêu cầu.**
- Câu hỏi đúng không phải *"có nên truy vết không"* mà là ***"nên truy vết đến mức nào"***.
- Với mỗi loại liên kết, hãy hỏi ***"chúng ta sẽ dùng nó để trả lời câu hỏi nào?"***
- **Nếu ma trận chỉ được cập nhật khi sắp có kiểm toán, không ai đang dùng nó để làm việc.**
- **Truy vết tốt nhất được tạo ra như TÁC DỤNG PHỤ của công việc bình thường** — ID story trong commit message.
- **Agile CÓ truy vết**, chỉ ở dạng nhẹ hơn và tự động hơn.
- Trong lĩnh vực được quản lý chặt, **truy vết là bắt buộc pháp lý** và công cụ là điều kiện tiên quyết.
- **Yêu cầu về bản chất là dữ liệu có cấu trúc có quan hệ, không phải văn xuôi.**
- Công cụ cho phép **lưu mỗi yêu cầu một lần duy nhất** và **truy vấn** — hai điều tài liệu không làm được.
- **SRS cho một release chỉ là một báo cáo được sinh ra từ cơ sở dữ liệu.**
- **Suspect link tự động đánh dấu thứ cần xem lại khi yêu cầu thay đổi** — biến truy vết thành công cụ sống.
- **Công cụ KHÔNG cho bạn yêu cầu tốt** — kỹ năng phân tích kém chỉ cho bạn yêu cầu tệ được tổ chức đẹp hơn.
- **Khả năng sử dụng quyết định thành bại lớn hơn danh sách tính năng** — công cụ khó dùng sẽ bị bỏ.
- **Định nghĩa quy trình TRƯỚC khi cấu hình công cụ** — công cụ khuếch đại quy trình bạn có, tốt hoặc xấu.
- **Bắt đầu với cấu hình đơn giản** — thêm sau dễ hơn gỡ bỏ nhiều.
- **Hai mươi thuộc tính bắt buộc dẫn tới việc mọi người điền bừa** và dữ liệu trở nên vô giá trị.
- **Sử dụng một phần tạo ra hai nguồn sự thật, cả hai đều không đầy đủ.**
- **Không công cụ nào sửa được vấn đề con người** — stakeholder không tham gia, không ai có thẩm quyền.
- Bài kiểm tra: ***"lần cuối bạn dùng công cụ để TRẢ LỜI một câu hỏi là khi nào?"***
- **Ưu tiên tích hợp hơn tính năng đơn lẻ**, và ưu tiên công cụ đội sẽ thực sự dùng.

## Tóm tắt

- **Truy vết ghi lại liên kết giữa yêu cầu với nguồn gốc, yêu cầu khác, thiết kế, mã và test** — theo bốn hướng ngược và xuôi.
- **Giá trị chính là phân tích tác động, đo độ phủ, phát hiện chức năng thiếu và thừa, hỗ trợ bảo trì, và chứng minh tuân thủ.**
- **Tạo liên kết khi công việc diễn ra**, bởi người làm ra công việc, và ở mức độ tương xứng với rủi ro.
- **Công cụ quản lý yêu cầu tồn tại vì yêu cầu là dữ liệu có quan hệ**, và tài liệu không thể lưu trữ chúng tốt ở quy mô lớn.
- **Chọn công cụ theo khả năng sử dụng và khả năng tích hợp**, triển khai từ nhỏ, và định nghĩa quy trình trước.
- **Cả truy vết lẫn công cụ đều chỉ có giá trị khi chúng giúp bạn trả lời câu hỏi thật nhanh hơn** — nếu không, hãy cắt giảm chúng.
