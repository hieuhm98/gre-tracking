# Quản lý yêu cầu & quản lý thay đổi

## 1. Quản lý yêu cầu là gì & khác gì phát triển yêu cầu

**Kỹ nghệ yêu cầu gồm hai nửa:**

| | **Phát triển yêu cầu** | **Quản lý yêu cầu** |
|---|----------------------|---------------------|
| **Mục đích** | **Tạo ra** một tập yêu cầu đúng | **Duy trì** tập đó khi thời gian trôi và mọi thứ thay đổi |
| **Hoạt động** | Khai thác, phân tích, đặc tả, thẩm định | Baseline, kiểm soát phiên bản, theo dõi trạng thái, quản lý thay đổi, truy vết |
| **Diễn ra khi nào** | Chủ yếu ở giai đoạn đầu và ở đầu mỗi iteration | **Liên tục từ khi có baseline đầu tiên tới khi sản phẩm ngừng hoạt động** |
| **Câu hỏi chính** | *"Chúng ta cần xây gì?"* | *"Chúng ta đã đồng ý xây gì, ai đang làm gì, và điều gì đã thay đổi?"* |

> **Điểm mấu chốt: phát triển yêu cầu xuất sắc mà không có quản lý yêu cầu sẽ tan rã trong vài tuần.** Bạn có một tài liệu tuyệt vời, rồi mọi người bắt đầu thay đổi nó, không ai biết phiên bản nào là mới nhất, hai người làm việc trên hai phiên bản khác nhau, và đến tháng thứ ba không ai còn chắc chắn hệ thống được cho là phải làm gì.

### Bốn hoạt động cốt lõi

**1. Thiết lập và duy trì baseline** — đóng băng một tập yêu cầu đã được thoả thuận làm điểm tham chiếu.

**2. Kiểm soát phiên bản và thay đổi** — mọi thay đổi được ghi lại, đánh giá và phê duyệt một cách có ý thức.

**3. Theo dõi trạng thái** — mỗi yêu cầu đang ở đâu trong vòng đời của nó.

**4. Truy vết** — biết yêu cầu nào liên quan tới yêu cầu nào, tới thiết kế nào, tới mã nào, tới test nào.

### Điều này áp dụng cho MỌI phương pháp

> **Hiểu lầm phổ biến: quản lý yêu cầu là thứ chỉ dự án waterfall mới cần.**
>
> **Sai.** Đội agile cũng cần biết **backlog hiện tại là gì**, **story nào đã hoàn thành**, **ai đã đồng ý điều gì**, và **acceptance criteria của story này đã thay đổi chưa**. Họ chỉ dùng **cơ chế nhẹ hơn** — một công cụ backlog thay vì change control board trang trọng.
>
> **Điều KHÔNG thay đổi giữa các phương pháp là nhu cầu biết trạng thái hiện tại và lịch sử thay đổi.**

---

## 2. Baseline & kiểm soát phiên bản cho yêu cầu

### Baseline là gì

**Baseline là một tập yêu cầu đã được review và thoả thuận, được đóng băng làm điểm tham chiếu cho công việc tiếp theo.**

> **Baseline KHÔNG có nghĩa là yêu cầu bị đóng băng vĩnh viễn.** Nó có nghĩa là **thay đổi từ điểm này trở đi phải đi qua một quy trình có ý thức** thay vì lặng lẽ trượt vào.

**Vì sao baseline quan trọng:**

- Nó cho **một điểm tham chiếu chung** — khi ai đó nói *"yêu cầu đã thay đổi"*, mọi người biết là thay đổi từ đâu.
- Nó là **cơ sở cho ước tính** — ước tính không đi kèm baseline là lời hứa không có cơ sở.
- Nó cho phép **đo lường sự bất ổn** — bao nhiêu thay đổi kể từ baseline?
- Nó là **cơ sở cho hợp đồng** trong quan hệ với nhà cung cấp bên ngoài.

**Khi nào thiết lập baseline:**

- Sau khi tập yêu cầu đã được **review và thẩm định**.
- Trước khi **bắt đầu xây dựng** phần đó của sản phẩm.
- **Không đợi tới khi toàn bộ hệ thống được đặc tả** — bạn có thể baseline từng phần, từng bản phát hành, từng iteration.

> **Trong agile, baseline tương ứng với "nội dung của iteration này đã được chốt".** Đội thoả thuận danh sách story cho iteration; thay đổi giữa iteration đòi hỏi một cuộc trò chuyện có ý thức, không phải chỉ là thêm một thẻ vào bảng.

### Kiểm soát phiên bản

**Mọi tài liệu yêu cầu — hay mọi mục trong công cụ quản lý yêu cầu — cần:**

- **Định danh phiên bản duy nhất** để mọi người biết mình đang nói về bản nào.
- **Lịch sử sửa đổi** ghi rõ: **cái gì thay đổi, ai thay đổi, khi nào, và VÌ SAO**.

> **Trường "vì sao" là trường quan trọng nhất và bị bỏ trống nhiều nhất.**
>
> Sáu tháng sau, ai đó sẽ nhìn vào một yêu cầu kỳ lạ và tự hỏi *"vì sao lại thế này?"*. Nếu lịch sử chỉ nói *"cập nhật mục 3.4"*, bạn không học được gì. Nếu nó nói *"đổi từ 30 sang 60 ngày theo yêu cầu của bộ phận pháp chế do quy định X"*, bạn biết ngay yêu cầu này **có thể thương lượng hay không**.

**Quy tắc thực dụng:**

- **Đừng dùng tên tệp làm cơ chế phiên bản.** *"SRS_final_v2_REALLY_final_JohnEdit.docx"* là dấu hiệu của một quy trình đã hỏng.
- **Một nguồn tin cậy duy nhất.** Nếu yêu cầu tồn tại ở ba nơi, chúng sẽ mâu thuẫn nhau trong vòng một tháng.
- **Kiểm soát ai được sửa gì.** Không phải mọi người đều nên có quyền sửa yêu cầu đã baseline.

---

## 3. Thuộc tính của yêu cầu & trạng thái

### Vì sao câu chữ của yêu cầu là chưa đủ

**Một yêu cầu không chỉ là một câu văn.** Xung quanh nó có nhiều thông tin cần thiết để quản lý nó.

**Các thuộc tính hữu ích:**

| Thuộc tính | Vì sao cần |
|-----------|-----------|
| **Định danh duy nhất và bền vững** | Để tham chiếu, truy vết và thảo luận |
| **Nguồn gốc (origin)** | Khi cần làm rõ hoặc khi có mâu thuẫn, bạn biết hỏi ai |
| **Lý do (rationale)** | Cho biết yêu cầu có thể thương lượng hay không |
| **Độ ưu tiên** | Cơ sở để cắt giảm phạm vi một cách có kiểm soát |
| **Trạng thái** | Nó đang ở đâu trong vòng đời |
| **Phiên bản** | Nó đã thay đổi mấy lần |
| **Chủ sở hữu (owner)** | Ai chịu trách nhiệm cho yêu cầu này |
| **Bản phát hành được phân bổ** | Nó thuộc về release hay iteration nào |
| **Ước tính công sức** | Cơ sở lập kế hoạch |
| **Mức rủi ro** | Mức bất định kỹ thuật |
| **Yêu cầu liên quan / phụ thuộc** | Cái gì phải thay đổi cùng nó |

> **Đừng cố ghi mọi thuộc tính cho mọi yêu cầu.** Điều đó tạo ra chi phí bảo trì khổng lồ mà không ai dùng. **Hãy chọn tập thuộc tính nhỏ nhất mà bạn THỰC SỰ dùng để ra quyết định**, và bỏ những cái còn lại.
>
> **Bài kiểm tra: với mỗi thuộc tính, hỏi *"quyết định nào sẽ được đưa ra dựa trên trường này?"*** Nếu không trả lời được, đừng theo dõi nó.

### Vòng đời trạng thái của yêu cầu

**Một tập trạng thái điển hình:**

| Trạng thái | Nghĩa |
|-----------|-------|
| **Proposed (đề xuất)** | Đã được nêu ra nhưng chưa được đánh giá |
| **Approved (đã duyệt)** | Đã được phân tích, chấp nhận và phân bổ cho một bản phát hành |
| **Implemented (đã hiện thực)** | Mã đã được viết và unit test đã pass |
| **Verified (đã xác minh)** | Đã vượt qua kiểm thử; hoạt động đúng trong sản phẩm |
| **Deferred (hoãn lại)** | Đã duyệt nhưng chuyển sang bản phát hành sau |
| **Deleted (đã xoá)** | Đã bị loại bỏ, **nhưng vẫn giữ trong hệ thống với lý do** |
| **Rejected (từ chối)** | Được đề xuất nhưng không được chấp nhận |

> **Vì sao KHÔNG xoá hẳn một yêu cầu bị loại bỏ:** những ý tưởng bị từ chối **có xu hướng quay lại**. Nếu bạn giữ lại nó cùng lý do từ chối, lần sau ai đó đề xuất lại, bạn có ngay câu trả lời và không phải phân tích lại từ đầu.

### Sức mạnh của việc theo dõi trạng thái

**Phân bố trạng thái cho bạn bức tranh tiến độ có ý nghĩa** — thứ mà con số *"hoàn thành 70%"* không bao giờ cho được.

> **Ví dụ minh hoạ:** Hai dự án đều báo cáo *"hoàn thành 70%"*.
>
> **Dự án A:** 70% yêu cầu ở trạng thái **verified**, 30% ở **implemented**. → Dự án đang trong tình trạng tốt.
>
> **Dự án B:** 70% ở trạng thái **implemented** nhưng chỉ 5% **verified**. → **Dự án đang gặp rắc rối nghiêm trọng** — có một khối lượng kiểm thử và sửa lỗi khổng lồ chưa được nhìn thấy phía trước.
>
> **Cùng một con số phần trăm, hai thực tế hoàn toàn khác nhau.**

---

## 4. Đo lường & báo cáo trạng thái yêu cầu

### Các thước đo hữu ích

**1. Phân bố trạng thái theo thời gian.** Vẽ biểu đồ số yêu cầu ở mỗi trạng thái qua từng tuần. **Bạn muốn thấy đường "verified" tăng đều đặn.** Nếu "implemented" tăng nhanh trong khi "verified" đứng yên, bạn đang tích luỹ nợ kiểm thử.

**2. Tốc độ thay đổi yêu cầu.** Bao nhiêu yêu cầu được thêm, sửa, xoá mỗi tuần?

> **Đây là một trong những chỉ báo sức khoẻ dự án mạnh nhất.**
>
> **Tốc độ thay đổi phải GIẢM DẦN theo thời gian.** Nếu ở tuần thứ 20 bạn vẫn thay đổi yêu cầu với tốc độ như tuần thứ 3, một trong ba điều đang xảy ra: **bạn chưa nói chuyện với đúng người**, **tầm nhìn sản phẩm chưa rõ**, hoặc **phạm vi đang mở rộng không kiểm soát**.

**3. Tổng số yêu cầu theo thời gian (scope creep).** Nếu đường này liên tục đi lên, phạm vi đang phình ra.

**4. Số yêu cầu ở trạng thái TBD.** Mỗi TBD là một rủi ro chưa được giải quyết. **Con số này phải tiến về 0 trước khi phần đó được hiện thực.**

**5. Độ ổn định của yêu cầu.** Tỷ lệ yêu cầu thay đổi kể từ baseline. **Yêu cầu bị sửa nhiều lần là dấu hiệu bạn chưa hiểu đúng vấn đề.**

### Cách trình bày cho lãnh đạo

> **Nguyên tắc: đưa ra XU HƯỚNG, không đưa ra ảnh chụp một thời điểm.**

Một con số đơn lẻ (*"chúng ta có 340 yêu cầu"*) không nói lên điều gì. **Một xu hướng (*"chúng ta có 340 yêu cầu, tăng từ 280 tháng trước và 210 hai tháng trước"*) kể một câu chuyện rất rõ ràng.**

**Ba câu hỏi mà báo cáo trạng thái yêu cầu phải trả lời:**

1. **Chúng ta đã hoàn thành và xác minh bao nhiêu?**
2. **Phạm vi có đang ổn định không?**
3. **Còn bao nhiêu bất định chưa được giải quyết?**

---

## 5. Vì sao thay đổi xảy ra & chi phí thực của nó

### Thay đổi là bình thường, không phải thất bại

> **Một quan niệm sai lầm có hại: thay đổi yêu cầu nghĩa là ai đó đã làm sai ở giai đoạn đầu.**
>
> **Thường thì không.** Thay đổi xảy ra vì những lý do hoàn toàn hợp lệ:
>
> - **Nghiệp vụ thay đổi** — thị trường dịch chuyển, đối thủ tung sản phẩm, quy định mới ban hành.
> - **Sự hiểu biết tăng lên** — người dùng nhìn thấy prototype và nhận ra điều họ thực sự cần.
> - **Ràng buộc kỹ thuật lộ ra** — điều tưởng khả thi thì không.
> - **Sai lầm được phát hiện** — và sửa một sai lầm luôn tốt hơn xây nó.
>
> **Mục tiêu KHÔNG phải là ngăn chặn thay đổi. Mục tiêu là bảo đảm mỗi thay đổi được đưa ra một cách CÓ Ý THỨC, với hiểu biết về cái giá của nó.**

### Chi phí thực của một thay đổi

**Người đề xuất thay đổi thường chỉ nhìn thấy phần nổi:** *"chỉ cần thêm một trường vào màn hình này thôi."*

**Phần chìm bao gồm:**

- Phân tích và làm rõ yêu cầu mới.
- Cập nhật tài liệu yêu cầu và mô hình.
- Thay đổi thiết kế, có thể lan sang các thành phần khác.
- Thay đổi cơ sở dữ liệu và có thể cả di trú dữ liệu.
- Viết mã và unit test.
- Cập nhật test case; **chạy lại kiểm thử hồi quy**.
- Cập nhật tài liệu người dùng và tài liệu đào tạo.
- **Chi phí cơ hội** — công việc gì bị đẩy ra để nhường chỗ?
- **Chi phí gián đoạn** — đội phải chuyển ngữ cảnh, mất đà.

> **Chi phí gián đoạn hầu như không bao giờ được tính tới, nhưng nó rất thực.** Một thay đổi nhỏ vào giữa iteration có thể tốn nhiều hơn cùng thay đổi đó được lên kế hoạch cho iteration sau.

### Chi phí tăng theo giai đoạn

**Cùng một thay đổi có chi phí rất khác nhau tuỳ thời điểm:**

- **Trong giai đoạn yêu cầu:** sửa vài dòng văn bản.
- **Sau khi thiết kế:** làm lại thiết kế.
- **Sau khi viết mã:** sửa mã, sửa test, kiểm thử hồi quy.
- **Sau khi giao hàng:** thêm bản vá, thông báo cho khách hàng, đào tạo lại, có thể cả di trú dữ liệu.

> **Đây là lý do phát hiện sớm có giá trị to lớn — và là lập luận kinh tế cho việc review, prototype và bàn giao tăng dần.**

---

## 6. Quy trình kiểm soát thay đổi

### Mục đích thật sự

> **Quy trình kiểm soát thay đổi KHÔNG tồn tại để nói "không". Nó tồn tại để bảo đảm rằng khi bạn nói "có", bạn biết mình đang đồng ý với cái gì.**

**Một quy trình tốt phải:**

- **Đơn giản đủ để mọi người thực sự dùng nó.** Một quy trình nặng nề sẽ bị né tránh, và thay đổi sẽ đi vào hệ thống qua cửa sau.
- **Nhanh đủ để không chặn tiến độ.** Nếu mất ba tuần để phê duyệt một thay đổi nhỏ, đội sẽ tự làm mà không xin phép.
- **Minh bạch** — ai cũng thấy được trạng thái đề xuất của mình.
- **Tương xứng với rủi ro** — thay đổi nhỏ không cần cùng mức xem xét như thay đổi lớn.

### Sáu bước

**1. Gửi đề xuất.** Bất kỳ ai cũng có thể đề xuất. Đề xuất cần: **mô tả thay đổi, lý do, lợi ích mong đợi, mức khẩn cấp, người đề xuất.**

**2. Đánh giá sơ bộ.** Một người — thường là BA — kiểm tra xem đề xuất có **rõ ràng, không trùng lặp, và nằm trong phạm vi xem xét** không.

**3. Phân tích tác động.** Bàn kỹ ở phần sau.

**4. Quyết định.** Phê duyệt, từ chối, hoãn lại, hoặc yêu cầu thêm thông tin. **Mỗi quyết định phải được ghi lại kèm lý do.**

**5. Truyền đạt.** Mọi người bị ảnh hưởng phải được thông báo — bao gồm cả **người đề xuất khi bị từ chối**.

> **Việc không đóng vòng lặp với người đề xuất là lỗi phổ biến giết chết quy trình.** Nếu người ta gửi đề xuất và không bao giờ nghe hồi âm, họ sẽ ngừng dùng quy trình và bắt đầu đi đường vòng.

**6. Hiện thực và cập nhật baseline.** Thay đổi được thực hiện, tài liệu yêu cầu được cập nhật, và trạng thái được theo dõi tới khi xác minh.

### Phân cấp theo mức tác động

**Đừng dùng một quy trình cho mọi loại thay đổi.**

| Mức | Ví dụ | Ai quyết định |
|-----|-------|--------------|
| **Nhỏ** | Sửa lỗi chính tả, làm rõ câu chữ mà không đổi ý nghĩa | BA hoặc trưởng nhóm quyết định ngay |
| **Vừa** | Thêm một trường, đổi một quy tắc kiểm tra | Trưởng dự án cùng đại diện khách hàng |
| **Lớn** | Thêm chức năng mới, thay đổi quy trình nghiệp vụ, ảnh hưởng lịch trình | Change control board đầy đủ |

> **Điểm mấu chốt: dành sự xem xét kỹ lưỡng cho những thay đổi thực sự cần nó.** Bắt cả một hội đồng họp để phê duyệt sửa lỗi chính tả là cách nhanh nhất để làm mọi người ghét và né tránh quy trình.

---

## 7. Change control board: thành phần và vận hành

**Change control board (CCB)** là nhóm người có thẩm quyền quyết định về các đề xuất thay đổi.

### Thành phần

**Ai phải có mặt:**

- **Đại diện khách hàng hoặc product owner** — đánh giá giá trị nghiệp vụ.
- **Quản lý dự án** — đánh giá tác động tới lịch trình và nguồn lực.
- **Đại diện kỹ thuật** — đánh giá tác động kỹ thuật và tính khả thi.
- **Đại diện kiểm thử** — đánh giá tác động tới kiểm thử.
- **BA** — cung cấp phân tích và bối cảnh.

**Nguyên tắc về quy mô:**

> **CCB phải NHỎ đủ để họp được và quyết định được.** Một hội đồng 15 người sẽ họp mỗi tháng một lần và không quyết định được gì. **Con số hiệu quả thường là 3 tới 6 người có thẩm quyền thật.**

**Nguyên tắc về thẩm quyền:**

> **Mọi thành viên phải có thẩm quyền quyết định thay mặt cho tổ chức của mình.** Nếu ai đó phải nói *"để tôi về hỏi sếp"* cho mọi quyết định, họ không phải là thành viên CCB đúng nghĩa — họ là người đưa tin.

### Cách vận hành hiệu quả

- **Họp định kỳ và thường xuyên** — hằng tuần thường tốt hơn hằng tháng, vì nó giữ hàng đợi ngắn.
- **Với thay đổi khẩn cấp, có quy trình nhanh** — nhưng vẫn phải ghi lại quyết định.
- **Xem xét đề xuất theo lô, không từng cái một.** Nhìn 10 đề xuất cùng lúc cho bạn cái nhìn về **tổng tác động** — điều mà xem từng cái không cho thấy.
- **Ghi lại quyết định VÀ lý do.** Sáu tháng sau, ai đó sẽ hỏi *"vì sao chúng ta từ chối cái này?"*

### Vai trò của BA trong CCB

**BA thường KHÔNG phải người quyết định, mà là người:**

- **Chuẩn bị phân tích tác động** để hội đồng có cơ sở quyết định.
- **Làm rõ đề xuất** trước khi đưa ra hội đồng — nhiều đề xuất mơ hồ tới mức không thể đánh giá.
- **Xác định các yêu cầu liên quan** sẽ bị ảnh hưởng.
- **Cập nhật tài liệu** sau khi quyết định.
- **Chỉ ra khi một loạt thay đổi nhỏ đang cộng dồn** thành một sự dịch chuyển phạm vi lớn.

> **Đóng góp giá trị nhất của BA: đưa ra thông tin để hội đồng quyết định TỐT, chứ không phải bảo vệ baseline bằng mọi giá.**

---

## 8. Phân tích tác động của thay đổi

> **Phân tích tác động là hoạt động biến một đề xuất thay đổi từ một ý tưởng mơ hồ thành một quyết định có thông tin.**

### Ba nhóm câu hỏi

**Nhóm 1: Tác động tới yêu cầu**

- Yêu cầu nào bị thay đổi, thêm mới, hoặc loại bỏ?
- **Yêu cầu nào KHÁC bị ảnh hưởng?** Đây là chỗ truy vết phát huy giá trị.
- Có mâu thuẫn với yêu cầu hiện có không?
- Business rule nào bị ảnh hưởng?

**Nhóm 2: Tác động tới sản phẩm**

- Thành phần thiết kế nào phải thay đổi?
- Có ảnh hưởng tới kiến trúc không? **Đây là câu hỏi quan trọng nhất** — thay đổi kiến trúc có chi phí khác hẳn với thay đổi cục bộ.
- Cơ sở dữ liệu có phải đổi không? Có cần di trú dữ liệu không?
- Giao diện với hệ thống khác có bị ảnh hưởng không?
- Test case nào phải thêm hoặc sửa? **Phạm vi kiểm thử hồi quy là bao nhiêu?**
- Tài liệu người dùng và đào tạo có phải cập nhật không?

**Nhóm 3: Tác động tới dự án**

- Công sức ước tính là bao nhiêu — **bao gồm cả kiểm thử và tài liệu**, không chỉ viết mã?
- Lịch trình bị ảnh hưởng thế nào?
- **Công việc nào bị đẩy ra để nhường chỗ?** Đây là câu hỏi mà người đề xuất hiếm khi nghĩ tới.
- Có rủi ro mới nào được đưa vào không?
- Công việc đã hoàn thành có bị lãng phí không?

### Giá trị của truy vết trong phân tích tác động

> **Đây là lúc khoản đầu tư vào truy vết yêu cầu trả cổ tức.**
>
> Không có truy vết, phân tích tác động dựa vào **trí nhớ của con người** — *"tôi nghĩ là nó cũng ảnh hưởng tới module thanh toán, để tôi hỏi Minh."* **Bạn sẽ bỏ sót thứ gì đó**, và bạn sẽ phát hiện ra điều đó trong giai đoạn kiểm thử hoặc sau khi giao hàng.
>
> Với truy vết, bạn **truy vấn** được: yêu cầu này liên kết với thiết kế nào, mã nào, test nào, và yêu cầu nào khác? **Câu trả lời trong vài phút thay vì vài ngày, và đầy đủ thay vì phỏng đoán.**

### Trình bày kết quả

**Phân tích tác động nên đưa ra:**

- **Ước tính công sức dưới dạng khoảng**, không phải con số đơn.
- **Danh sách cụ thể** những gì bị ảnh hưởng.
- **Các phương án** — thường có nhiều cách đáp ứng nhu cầu với chi phí khác nhau.
- **Khuyến nghị** kèm lý do.

> **Cẩn thận với thiên kiến ước tính thấp.** Người phân tích thường chỉ nghĩ tới công việc viết mã và bỏ qua kiểm thử hồi quy, cập nhật tài liệu và chi phí gián đoạn. **Một quy tắc thực dụng: khi ước tính có vẻ quá nhỏ, hãy tự hỏi bạn đã tính kiểm thử hồi quy chưa.**

---

## 9. Đo lường thay đổi & nhận diện scope creep

### Scope creep là gì

> **Scope creep là sự phình ra dần dần và không kiểm soát của phạm vi dự án, xảy ra qua nhiều thay đổi nhỏ mà mỗi cái riêng lẻ đều có vẻ hợp lý.**

**Vì sao nó nguy hiểm hơn một thay đổi lớn:** một thay đổi lớn được nhìn thấy, được đánh giá và được quyết định. **Năm mươi thay đổi nhỏ, mỗi cái "chỉ mất một ngày", không bao giờ được xem xét như một tổng thể — nhưng chúng cộng lại thành mười tuần công việc mà không ai từng phê duyệt.**

### Các thước đo phát hiện scope creep

**1. Tổng số yêu cầu theo thời gian.** Vẽ đường này. **Nếu nó liên tục đi lên sau khi baseline, phạm vi đang phình.**

**2. Tổng công sức của các thay đổi đã phê duyệt.** Cộng dồn ước tính của mọi thay đổi. **Con số này thường gây sốc khi được nhìn thấy lần đầu.**

**3. Tỷ lệ thay đổi so với baseline gốc.** Nếu 40% yêu cầu đã thay đổi kể từ baseline, baseline đó không còn ý nghĩa gì.

**4. Nguồn gốc của thay đổi.** Ai đề xuất chúng?

> **Phân tích nguồn gốc rất tiết lộ.** Nếu 60% thay đổi đến từ một stakeholder duy nhất, có thể **người đó chưa được tham gia đầy đủ trong giai đoạn khai thác yêu cầu ban đầu**. Đó là vấn đề quy trình cần sửa, không phải chỉ là loạt thay đổi cần phê duyệt.

**5. Lý do của thay đổi.** Phân loại chúng:

- **Yêu cầu bị bỏ sót** ban đầu → vấn đề ở khâu khai thác.
- **Yêu cầu bị hiểu sai** → vấn đề ở khâu đặc tả hoặc review.
- **Nghiệp vụ thực sự thay đổi** → hoàn toàn hợp lệ, không phải lỗi của ai.
- **Ý tưởng mới** → cần đánh giá theo giá trị.

> **Phân loại này biến dữ liệu thay đổi thành CẢI TIẾN QUY TRÌNH.** Nếu phần lớn thay đổi thuộc loại "bị bỏ sót", bạn biết chính xác cần cải thiện điều gì cho dự án sau.

### Phân biệt scope creep với thay đổi hợp lệ

| | **Thay đổi hợp lệ** | **Scope creep** |
|---|---------------------|-----------------|
| Được ghi lại và đánh giá | Có | Thường không |
| Có phân tích tác động | Có | Không |
| Được phê duyệt bởi người có thẩm quyền | Có | Thường lặng lẽ trượt vào |
| Lịch trình và nguồn lực được điều chỉnh | Có | Không — đội chỉ được kỳ vọng làm thêm |

> **Dấu hiệu rõ nhất của scope creep: khối lượng công việc tăng nhưng lịch trình và nguồn lực không đổi.**
>
> **Điều này thực chất không phải vấn đề về thay đổi — mà là vấn đề về việc không thừa nhận hệ quả của thay đổi.**

---

## 10. Văn hoá quản lý thay đổi lành mạnh

### Bốn dấu hiệu của văn hoá tốt

**1. Thay đổi được thảo luận công khai, không đi cửa sau.** Nếu người ta phải nhờ vả riêng một lập trình viên để "lén thêm vào", quy trình của bạn quá nặng nề hoặc quá cứng nhắc.

**2. Từ chối một thay đổi là chuyện bình thường.** Nếu mọi đề xuất đều được phê duyệt, hội đồng không thực sự quyết định gì cả — nó chỉ đóng dấu.

**3. Hệ quả được thừa nhận công khai.** Khi phê duyệt một thay đổi, tổ chức **nói rõ điều gì bị đẩy ra hoặc lịch trình dịch chuyển thế nào**. Không có bữa trưa miễn phí, và giả vờ có sẽ phá vỡ lòng tin.

**4. Dữ liệu thay đổi được dùng để cải tiến, không để đổ lỗi.** Phân tích *"vì sao chúng ta bỏ sót yêu cầu này"* phải dẫn tới cải tiến quy trình khai thác, không dẫn tới tìm người chịu trách nhiệm.

### Bốn dấu hiệu của văn hoá xấu

- **Quy trình quá nặng nề** khiến mọi người né tránh nó.
- **Mọi thứ đều "khẩn cấp"** nên quy trình thường xuyên bị bỏ qua.
- **Đội bị kỳ vọng hấp thụ mọi thay đổi** mà không điều chỉnh lịch trình.
- **Người đề xuất không bao giờ nghe hồi âm**, nên họ ngừng dùng quy trình.

### Cân bằng cuối cùng

> **Hai thái cực đều thất bại:**
>
> **Quá cứng nhắc** → dự án giao đúng thứ đã được đặc tả 18 tháng trước, nhưng thứ đó không còn là điều tổ chức cần. **Bạn thành công về mặt thủ tục và thất bại về mặt thực chất.**
>
> **Quá lỏng lẻo** → dự án không bao giờ hoàn thành vì mục tiêu liên tục dịch chuyển. **Đội kiệt sức, lòng tin xói mòn, và không ai còn tin vào bất kỳ cam kết nào.**
>
> **Điểm cân bằng: chào đón thay đổi ĐÚNG, với hiểu biết đầy đủ về cái giá, và với sự điều chỉnh trung thực cho lịch trình và phạm vi.**

### Thông điệp cuối

> **Quản lý yêu cầu tốt không phải là ngăn chặn thay đổi — đó là làm cho thay đổi trở nên MINH BẠCH và CÓ CHỦ ĐÍCH.**
>
> Baseline cho bạn điểm tham chiếu. Thuộc tính và trạng thái cho bạn khả năng nhìn thấy. Truy vết cho bạn khả năng phân tích tác động. Quy trình thay đổi cho bạn quyết định có thông tin. **Tất cả cùng phục vụ một mục đích duy nhất: đội biết mình đã đồng ý xây gì, và tổ chức biết mỗi thay đổi tốn bao nhiêu.**

---

## Điểm cốt lõi

- **Phát triển yêu cầu tạo ra tập yêu cầu đúng; quản lý yêu cầu duy trì nó khi mọi thứ thay đổi.**
- **Phát triển yêu cầu xuất sắc mà không có quản lý yêu cầu sẽ tan rã trong vài tuần.**
- **Quản lý yêu cầu áp dụng cho MỌI phương pháp** — agile chỉ dùng cơ chế nhẹ hơn.
- **Baseline không có nghĩa là đóng băng vĩnh viễn** — nó nghĩa là thay đổi phải đi qua quy trình có ý thức.
- **Trường "vì sao" trong lịch sử sửa đổi là quan trọng nhất và bị bỏ trống nhiều nhất.**
- ***"SRS_final_v2_REALLY_final.docx"* là dấu hiệu của một quy trình đã hỏng.**
- **Chỉ theo dõi những thuộc tính bạn thực sự dùng để ra quyết định** — hãy hỏi *"quyết định nào dựa trên trường này?"*
- **Đừng xoá hẳn yêu cầu bị loại bỏ** — ý tưởng bị từ chối có xu hướng quay lại.
- **70% implemented với 5% verified là dự án gặp rắc rối**, dù cùng báo cáo "hoàn thành 70%" như dự án khoẻ mạnh.
- **Tốc độ thay đổi yêu cầu phải giảm dần theo thời gian** — nếu không, đó là chỉ báo rắc rối mạnh nhất.
- **Đưa ra XU HƯỚNG, không đưa ra ảnh chụp một thời điểm.**
- **Thay đổi là bình thường, không phải thất bại** — mục tiêu là làm nó có ý thức, không phải ngăn chặn nó.
- **Chi phí gián đoạn hầu như không bao giờ được tính nhưng rất thực** — thay đổi giữa iteration đắt hơn thay đổi được lên kế hoạch.
- **Quy trình kiểm soát thay đổi không tồn tại để nói "không"** mà để bảo đảm khi bạn nói "có", bạn biết mình đồng ý với cái gì.
- **Quy trình quá nặng sẽ bị né tránh** và thay đổi sẽ đi vào qua cửa sau.
- **Không đóng vòng lặp với người đề xuất là lỗi giết chết quy trình.**
- **Phân cấp quy trình theo mức tác động** — đừng bắt hội đồng họp để duyệt sửa lỗi chính tả.
- **CCB phải nhỏ (3–6 người) và mọi thành viên phải có thẩm quyền thật**, không phải người đưa tin.
- **Xem xét đề xuất theo lô** để thấy tổng tác động.
- **Truy vết trả cổ tức trong phân tích tác động** — vài phút và đầy đủ, thay vì vài ngày và phỏng đoán.
- **Câu hỏi người đề xuất hiếm khi nghĩ tới: công việc nào bị đẩy ra để nhường chỗ?**
- **Khi ước tính có vẻ quá nhỏ, hãy hỏi bạn đã tính kiểm thử hồi quy chưa.**
- **Scope creep nguy hiểm hơn một thay đổi lớn** vì nó không bao giờ được xem xét như một tổng thể.
- **Phân loại lý do thay đổi biến dữ liệu thành cải tiến quy trình.**
- **Nếu 60% thay đổi đến từ một stakeholder, người đó chưa được tham gia đủ ở giai đoạn khai thác.**
- **Dấu hiệu rõ nhất của scope creep: khối lượng tăng nhưng lịch trình và nguồn lực không đổi.**
- **Nếu mọi đề xuất đều được phê duyệt, hội đồng chỉ đang đóng dấu.**
- **Quá cứng nhắc thì thành công thủ tục và thất bại thực chất; quá lỏng lẻo thì không bao giờ hoàn thành.**

## Tóm tắt

- **Baseline, kiểm soát phiên bản, thuộc tính và trạng thái** là bốn công cụ nền tảng cho phép bạn biết mình đang ở đâu.
- **Theo dõi trạng thái cho bức tranh tiến độ có ý nghĩa** mà phần trăm cảm tính không bao giờ cho được.
- **Tốc độ thay đổi và tổng số yêu cầu theo thời gian là hai chỉ báo sức khoẻ dự án mạnh nhất.**
- **Quy trình kiểm soát thay đổi phải đơn giản, nhanh, minh bạch và tương xứng với rủi ro** — nếu không nó sẽ bị né tránh.
- **Phân tích tác động biến đề xuất mơ hồ thành quyết định có thông tin**, và truy vết là thứ làm nó khả thi.
- **Mục tiêu cuối cùng không phải ngăn thay đổi mà là làm cho thay đổi minh bạch, có chủ đích, và được thừa nhận đầy đủ về hệ quả.**
