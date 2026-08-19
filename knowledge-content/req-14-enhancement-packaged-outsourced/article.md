# Dự án nâng cấp, gói giải pháp & thuê ngoài

## 1. Dự án nâng cấp & thay thế: những thách thức riêng

> **Phần lớn công việc phát triển phần mềm trên thế giới KHÔNG phải xây hệ thống mới từ đầu — mà là sửa đổi, mở rộng, hoặc thay thế hệ thống đã tồn tại.**

Điều đó có nghĩa là hầu hết BA sẽ dành phần lớn sự nghiệp làm việc trong bối cảnh **đã có sẵn một hệ thống**. Bối cảnh này mang theo những thách thức mà một dự án greenfield không có.

### Ba loại dự án liên quan tới hệ thống hiện có

| Loại | Mô tả |
|------|-------|
| **Enhancement (nâng cấp)** | Thêm chức năng mới vào hệ thống đang hoạt động |
| **Replacement (thay thế)** | Xây hệ thống mới để thay thế hệ thống cũ, thường giữ phần lớn chức năng |
| **Reengineering / migration** | Chuyển hệ thống sang nền tảng, công nghệ hoặc kiến trúc khác |

### Sáu thách thức đặc trưng

**1. Yêu cầu hiện có không được ghi lại ở đâu cả.**

> **Đây là thực tế phổ biến nhất và gây khó chịu nhất.** Hệ thống đã chạy 15 năm. Tài liệu yêu cầu ban đầu — nếu từng tồn tại — đã lỗi thời từ lâu. **Nguồn duy nhất còn lại là mã nguồn, dữ liệu, và trí nhớ của những người dùng lâu năm.**

**2. Hệ thống hiện tại vừa là ràng buộc vừa là nguồn thông tin.** Bạn không thể bỏ qua nó — nhưng bạn cũng không nên coi mọi thứ nó làm là đúng.

**3. Người dùng mô tả GIẢI PHÁP hiện tại, không mô tả NHU CẦU.**

> Khi bạn hỏi *"bạn cần gì?"*, người dùng lâu năm sẽ trả lời *"tôi cần màn hình F7 hoạt động như hiện tại nhưng thêm một cột"*. **Họ đang mô tả hệ thống họ biết, không phải vấn đề nghiệp vụ họ giải quyết.**
>
> **Kỹ thuật xử lý: hỏi *"vì sao"* nhiều lần.** *"Vì sao bạn cần cột đó?"* → *"Để biết đơn hàng nào cần ưu tiên."* → *"Bạn quyết định ưu tiên như thế nào?"* Đến đây bạn mới chạm tới nhu cầu thật, và có thể có cách tốt hơn nhiều để đáp ứng nó.

**4. Chức năng ẩn và hành vi không ai biết.** Hệ thống cũ chứa vô số quy tắc, ngoại lệ và cách xử lý đặc biệt được thêm vào qua nhiều năm mà **không ai còn nhớ vì sao**.

**5. Kỳ vọng rằng "mọi thứ phải hoạt động y như cũ".** Người dùng thường không chấp nhận mất bất kỳ chức năng nào, kể cả những chức năng họ **không thực sự dùng**.

**6. Không thể tắt hệ thống cũ.** Hệ thống mới phải chạy song song, hoặc chuyển đổi phải diễn ra trong một cửa sổ thời gian ngắn mà không mất dữ liệu.

### Bẫy lớn nhất: sao chép mù quáng

> **Cách tiếp cận sai lầm phổ biến nhất trong dự án thay thế: *"Chúng ta chỉ cần làm cho hệ thống mới giống hệt hệ thống cũ."***
>
> **Vì sao đây là sai lầm:**
>
> - Bạn sẽ **sao chép cả những chức năng không còn ai dùng** — nghiên cứu nhiều lần cho thấy một tỷ lệ đáng kể tính năng trong hệ thống doanh nghiệp **hiếm khi hoặc không bao giờ được dùng**.
> - Bạn sẽ **sao chép cả những cách làm việc vòng vo** mà người dùng đã tạo ra để né tránh hạn chế của hệ thống cũ. **Những hạn chế đó có thể không còn tồn tại.**
> - Bạn **bỏ lỡ cơ hội cải tiến** mà một dự án thay thế mang lại — và cơ hội đó có thể không quay lại trong nhiều năm.
>
> **Cách tiếp cận đúng: dùng hệ thống cũ như một NGUỒN THÔNG TIN, không phải như một BẢN THIẾT KẾ.** Với mỗi chức năng, hãy hỏi: *nhu cầu nghiệp vụ nào nó đang phục vụ, và đó có còn là cách tốt nhất để phục vụ nhu cầu đó không?*

---

## 2. Khai thác yêu cầu khi hệ thống hiện tại là nguồn chính

Khi tài liệu không tồn tại, bạn phải **tái tạo hiểu biết từ nhiều nguồn**, và **đối chiếu chúng với nhau**.

### Sáu nguồn thông tin

**1. Quan sát người dùng thực làm việc.** Đây là **nguồn có giá trị cao nhất**. Bạn sẽ thấy:

- Những gì họ **thực sự làm**, khác với những gì họ nói.
- Các **cách làm vòng vo (workaround)** — mỗi cách vòng vo là một **yêu cầu chưa được đáp ứng** đang chờ được phát hiện.
- Các bước họ làm **bên ngoài hệ thống** — bảng tính riêng, ghi chú giấy, email. **Đây là mỏ vàng của yêu cầu bị thiếu.**

> **Nguyên tắc: mỗi bảng tính Excel mà người dùng duy trì song song với hệ thống chính thức là một lời tố cáo về chức năng còn thiếu.** Hãy tìm chúng và hỏi vì sao chúng tồn tại.

**2. Bản thân hệ thống hiện tại.** Đi qua từng màn hình, từng báo cáo, từng chức năng cùng một người dùng thành thạo. Ghi lại **những gì nó làm**, rồi tách riêng **những gì cần giữ**.

**3. Dữ liệu thực trong cơ sở dữ liệu.** Dữ liệu tiết lộ rất nhiều:

- **Trường nào thực sự được điền** và trường nào luôn rỗng — trường luôn rỗng có thể không cần thiết.
- **Giá trị nào thực sự xuất hiện** — đôi khi khác hẳn với danh sách giá trị hợp lệ trên lý thuyết.
- **Khối lượng và tốc độ tăng trưởng** — thông tin thiết yếu cho yêu cầu về hiệu năng và khả năng mở rộng.

**4. Mã nguồn.** Nguồn cuối cùng khi mọi thứ khác thất bại. **Tốn kém và chậm**, nhưng đôi khi là cách duy nhất để tìm ra một business rule bị chôn vùi.

> **Cảnh báo: đừng nhầm mã nguồn với yêu cầu.** Mã cho bạn biết hệ thống **làm gì**, không cho biết nó **nên làm gì**. Trong đó có cả lỗi, cả giải pháp tạm, cả những thứ không ai muốn.

**5. Nhật ký hỗ trợ và yêu cầu thay đổi.** Kho lưu trữ ticket hỗ trợ là **danh sách sẵn có của những điểm đau** — và các yêu cầu thay đổi tồn đọng chính là danh sách mong muốn đã được người dùng thật nêu ra.

**6. Người dùng lâu năm và người bảo trì hệ thống.** Họ mang **kiến thức bộ lạc** không được ghi ở đâu cả.

> **Rủi ro nhân sự nghiêm trọng: nếu chỉ còn MỘT người hiểu hệ thống cũ và người đó sắp nghỉ hưu, đó là rủi ro dự án hàng đầu.** Hãy ưu tiên khai thác kiến thức từ họ ngay lập tức.

### Kỹ thuật đối chiếu

**Đừng tin bất kỳ nguồn đơn lẻ nào.** Hãy đối chiếu:

- Người dùng nói họ dùng chức năng X → **kiểm tra nhật ký sử dụng** xem có đúng không.
- Tài liệu nói quy tắc là Y → **kiểm tra dữ liệu** xem có ngoại lệ không.
- Mã nguồn cho thấy hành vi Z → **hỏi người dùng** xem đó có phải là điều họ muốn không.

> **Chỗ nào các nguồn không khớp, chỗ đó có điều đáng học.**

---

## 3. Xử lý dữ liệu kế thừa & di trú

> **Trong dự án thay thế, việc di trú dữ liệu thường bị đánh giá thấp một cách nghiêm trọng — và nó thường là thứ khiến dự án trượt tiến độ.**

### Vì sao di trú dữ liệu khó hơn tưởng

**1. Dữ liệu cũ luôn bẩn hơn bạn nghĩ.** Sau nhiều năm, cơ sở dữ liệu chứa:

- Bản ghi trùng lặp.
- Trường bị dùng sai mục đích — trường *"ghi chú"* chứa dữ liệu có cấu trúc mà ai đó nhét vào vì không có chỗ khác.
- Giá trị không hợp lệ do quy tắc kiểm tra được thêm vào **sau khi** dữ liệu đã tồn tại.
- Bản ghi mồ côi tham chiếu tới thứ không còn tồn tại.
- Nhiều định dạng khác nhau cho cùng một loại thông tin, do quy ước thay đổi qua các năm.

**2. Mô hình dữ liệu mới hiếm khi khớp hoàn hảo với mô hình cũ.** Một trường cũ có thể tách thành ba trường mới, hoặc ba trường cũ gộp thành một.

**3. Không có nơi nào để đặt một số dữ liệu.** Hệ thống mới có thể không có khái niệm tương ứng.

### Bảy câu hỏi yêu cầu về di trú dữ liệu

**1. Dữ liệu nào phải được di trú?** Tất cả, hay chỉ dữ liệu hoạt động trong N năm gần nhất? **Dữ liệu lịch sử cũ có thể được lưu trữ thay vì di trú.**

**2. Quy tắc biến đổi là gì?** Với mỗi trường: nó đến từ đâu, được biến đổi thế nào, và điều gì xảy ra khi không có nguồn tương ứng?

**3. Xử lý dữ liệu bẩn ra sao?** Ba lựa chọn: **làm sạch trước khi di trú**, **di trú nguyên trạng rồi làm sạch sau**, hoặc **từ chối và báo cáo**. **Mỗi lựa chọn có hệ quả về thời gian và chất lượng khác nhau — đây là quyết định của nghiệp vụ, không phải của kỹ thuật.**

**4. Làm sao xác minh việc di trú thành công?** Cần **tiêu chí đối chiếu** cụ thể: tổng số bản ghi, tổng giá trị tài chính, kiểm tra mẫu ngẫu nhiên.

**5. Kế hoạch quay lui là gì?** Nếu việc chuyển đổi thất bại giữa chừng, làm sao quay lại hệ thống cũ mà không mất giao dịch?

**6. Có cần chạy song song không?** Chạy cả hai hệ thống cùng lúc trong một thời gian **tốn kém nhưng an toàn** — và đôi khi là cách duy nhất chấp nhận được với hệ thống trọng yếu.

**7. Dữ liệu lịch sử được truy cập thế nào sau khi chuyển đổi?** Nếu không di trú, người dùng vẫn cần xem lại nó. **Đây là một yêu cầu chức năng thực sự, thường bị bỏ quên.**

> **Bài học thực tiễn: hãy đưa việc phân tích chất lượng dữ liệu vào GIAI ĐOẠN YÊU CẦU, không đợi tới giai đoạn hiện thực.** Chạy truy vấn thăm dò trên dữ liệu thật để biết bạn đang đối mặt với điều gì. **Điều bạn phát hiện có thể thay đổi cả phạm vi dự án.**

---

## 4. Giải pháp đóng gói: khi nào mua thay vì xây

**Giải pháp đóng gói (COTS — commercial off-the-shelf)** là phần mềm thương mại được mua và cấu hình thay vì tự phát triển.

### Quyết định mua hay xây

| Nghiêng về **MUA** khi | Nghiêng về **XÂY** khi |
|------------------------|------------------------|
| Chức năng là **phổ biến trong ngành** — kế toán, nhân sự, CRM | Chức năng là **lợi thế cạnh tranh khác biệt** của bạn |
| Có **giải pháp trưởng thành** với nhiều khách hàng tham chiếu | Không có gói nào phù hợp gần |
| Quy trình của bạn **có thể điều chỉnh** theo phần mềm | Quy trình của bạn là **cốt lõi và không thể thay đổi** |
| Bạn cần triển khai **nhanh** | Bạn có thời gian và năng lực nội bộ |
| **Tuân thủ quy định** được nhà cung cấp duy trì | Yêu cầu quá đặc thù |

> **Cái nhìn quan trọng nhất về quyết định này: đừng mua gói cho thứ TẠO RA lợi thế cạnh tranh của bạn.** Nếu bạn mua cùng phần mềm mà đối thủ mua, bạn có cùng năng lực với họ. **Hãy mua cho những gì mọi công ty đều làm giống nhau, và xây cho những gì làm bạn khác biệt.**

### Yêu cầu vẫn CẦN THIẾT khi mua gói

> **Hiểu lầm nguy hiểm: *"Chúng ta mua gói nên không cần làm yêu cầu."***
>
> **Hoàn toàn ngược lại.** Không có yêu cầu, bạn **không có cơ sở nào để chọn giữa các gói**, và bạn sẽ chọn dựa trên buổi trình diễn bán hàng ấn tượng nhất — điều này gần như luôn dẫn tới quyết định tồi.

**Cái thay đổi là CÁCH bạn dùng yêu cầu:**

| | Xây tự phát triển | Mua gói |
|---|------------------|---------|
| **Vai trò của yêu cầu** | Chỉ dẫn cho lập trình viên | **Tiêu chí đánh giá** để chọn và cấu hình |
| **Mức chi tiết** | Rất chi tiết | Đủ để phân biệt giữa các phương án |
| **Trọng tâm** | *"Hệ thống phải làm gì"* | *"Nhu cầu nào phải được đáp ứng, và ai đáp ứng tốt nhất"* |
| **Kết quả nếu thiếu** | Xây sai thứ | **Mua sai thứ** — tệ hơn nhiều vì khó đảo ngược |

**Hai loại yêu cầu đặc biệt quan trọng khi mua gói:**

- **Business rule** — chúng quyết định gói có phù hợp với cách bạn vận hành không.
- **Yêu cầu tích hợp** — gói phải trao đổi dữ liệu với những hệ thống nào, theo định dạng nào?

---

## 5. Lựa chọn gói & đánh giá nhà cung cấp

### Quy trình lựa chọn có cấu trúc

**Bước 1: Xác định yêu cầu ở mức đủ để phân biệt.** Bạn không cần đặc tả chi tiết như khi tự xây, nhưng bạn cần đủ để **phân biệt gói này với gói kia**.

**Bước 2: Phân loại yêu cầu theo mức bắt buộc.**

- **Must-have (bắt buộc):** thiếu nó thì loại gói đó ngay.
- **Should-have (nên có):** ảnh hưởng tới điểm đánh giá.
- **Nice-to-have:** dùng để phân định khi các gói ngang nhau.

> **Kỷ luật quan trọng: giữ danh sách must-have NGẮN.** Nếu bạn có 80 must-have, không gói nào đạt hết và bạn không phân biệt được gì. **Must-have thật sự thường chỉ có 5 tới 15 mục.**

**Bước 3: Tạo ma trận đánh giá.** Cho điểm mỗi gói theo mỗi tiêu chí, có trọng số theo tầm quan trọng.

**Bước 4: Yêu cầu trình diễn theo KỊCH BẢN CỦA BẠN.**

> **Đây là bước quan trọng nhất và bị làm sai nhiều nhất.**
>
> **Đừng để nhà cung cấp trình diễn theo kịch bản của họ.** Họ đã tối ưu buổi trình diễn đó qua hàng trăm lần và sẽ chỉ cho bạn xem những gì gói làm tốt nhất.
>
> **Hãy đưa cho họ kịch bản CỦA BẠN, với dữ liệu CỦA BẠN, và yêu cầu họ thực hiện đúng những tác vụ mà người dùng của bạn sẽ làm hằng ngày.** Bạn sẽ học được nhiều hơn trong 30 phút đó so với ba buổi trình diễn tiêu chuẩn.

**Bước 5: Kiểm tra tham chiếu thật.** Nói chuyện với khách hàng hiện tại của nhà cung cấp — **tốt nhất là những khách hàng bạn tự tìm ra**, không chỉ những người nhà cung cấp giới thiệu.

**Câu hỏi hay hỏi người dùng tham chiếu:** *"Nếu được chọn lại, bạn có chọn gói này nữa không? Điều gì bạn ước mình đã biết trước khi mua?"*

**Bước 6: Chạy proof of concept với dữ liệu thật.** Với quyết định lớn, hãy đầu tư vào một thử nghiệm giới hạn trước khi cam kết.

### Các tiêu chí đánh giá ngoài chức năng

**Đừng chỉ đánh giá tính năng.** Hãy đánh giá cả:

- **Sức khoẻ của nhà cung cấp** — họ có tồn tại trong 10 năm tới không?
- **Lộ trình sản phẩm** — họ đang đầu tư vào đâu?
- **Mô hình cấp phép và tổng chi phí sở hữu** — không chỉ giá mua mà cả **phí bảo trì hằng năm, chi phí triển khai, chi phí đào tạo, chi phí tích hợp**.
- **Chất lượng hỗ trợ** — thời gian phản hồi, múi giờ, ngôn ngữ.
- **Cộng đồng và hệ sinh thái đối tác** — có ai khác giúp bạn được không?
- **Khả năng lấy dữ liệu ra** — nếu sau này bạn muốn rời đi, bạn có lấy được dữ liệu của mình không? **Đây là câu hỏi ít ai hỏi và hối tiếc nhất khi bỏ qua.**

---

## 6. Cấu hình, tuỳ biến & xử lý khoảng cách

**Không gói nào khớp 100% với nhu cầu của bạn.** Khoảng chênh giữa những gì gói làm và những gì bạn cần gọi là **gap (khoảng cách)**.

### Năm cách xử lý một gap

| Cách | Mô tả | Đánh giá |
|------|-------|----------|
| **1. Thay đổi quy trình nghiệp vụ** | Điều chỉnh cách làm việc cho khớp với gói | **Thường là lựa chọn TỐT NHẤT** — rẻ nhất về lâu dài |
| **2. Cấu hình (configuration)** | Dùng các tuỳ chọn sẵn có của gói | Tốt; được nhà cung cấp hỗ trợ và bảo toàn khi nâng cấp |
| **3. Mở rộng (extension)** | Thêm chức năng qua điểm mở rộng chính thức, API, plugin | Chấp nhận được; rủi ro vừa phải |
| **4. Tuỳ biến mã nguồn (customization)** | Sửa đổi mã của gói | **Nguy hiểm** — xem giải thích bên dưới |
| **5. Chấp nhận không đáp ứng** | Sống chung với hạn chế, có thể dùng công cụ ngoài | Hợp lệ nếu gap không quan trọng |

### Vì sao tuỳ biến mã nguồn nguy hiểm tới vậy

> **Đây là bài học đắt giá nhất trong các dự án COTS.**
>
> Khi bạn sửa mã của gói, bạn tạo ra một **phiên bản riêng** mà nhà cung cấp không biết tới. Hệ quả:
>
> - **Mỗi lần nhà cung cấp phát hành bản nâng cấp, bạn phải làm lại tuỳ biến của mình.** Chi phí này lặp lại mãi mãi.
> - **Bạn dần không dám nâng cấp** vì quá tốn kém — rồi bị kẹt ở phiên bản cũ không còn được hỗ trợ, không có bản vá bảo mật.
> - **Hỗ trợ từ nhà cung cấp trở nên khó khăn** vì họ không tái tạo được vấn đề trên phiên bản chuẩn.
>
> **Nhiều tổ chức đã tuỳ biến gói nặng tới mức tổng chi phí VƯỢT QUA chi phí tự xây từ đầu — mà vẫn không có được sự linh hoạt của hệ thống tự xây.**

**Quy tắc thực dụng: mỗi lần định tuỳ biến, hãy hỏi *"chúng ta có thể thay đổi quy trình thay vì thay đổi phần mềm không?"*** Câu trả lời thường là có, và nó thường là câu trả lời đúng — **đặc biệt khi quy trình hiện tại chỉ tồn tại vì hệ thống cũ ép nó phải như vậy.**

### Vai trò của BA trong dự án COTS

Vai trò **thay đổi rõ rệt** so với dự án tự phát triển:

- **Ít viết đặc tả chi tiết hơn**, nhiều **phân tích khoảng cách** hơn.
- **Nhiều công việc quản lý thay đổi tổ chức hơn** — vì bạn đang yêu cầu người ta thay đổi cách làm việc.
- **Nhiều công việc cấu hình và mô hình hoá quy trình hơn.**
- **Nhiều công việc về tích hợp và di trú dữ liệu hơn.**

> **Kỹ năng quan trọng nhất trở thành: giúp tổ chức phân biệt giữa *"chúng ta cần điều này"* và *"chúng ta quen làm theo cách này"*.** Khả năng đặt câu hỏi đó một cách khéo léo quyết định thành bại của dự án COTS.

---

## 7. Dự án thuê ngoài: đặc điểm và rủi ro

**Trong dự án thuê ngoài, việc phát triển được thực hiện bởi một tổ chức bên ngoài** — có thể trong nước hoặc ở quốc gia khác.

### Vì sao yêu cầu quan trọng hơn nhiều trong bối cảnh này

> **Nguyên tắc nền tảng: khoảng cách càng lớn — về tổ chức, địa lý, ngôn ngữ, văn hoá, múi giờ — thì yêu cầu càng phải RÕ RÀNG VÀ ĐẦY ĐỦ.**

**Trong đội nội bộ ngồi cùng phòng**, một yêu cầu mơ hồ được giải quyết bằng cách quay ghế lại và hỏi. Chi phí gần bằng không.

**Trong dự án thuê ngoài xuyên múi giờ**, cùng câu hỏi đó có thể mất **hai ngày** để có câu trả lời. Và nếu nhà cung cấp không hỏi mà **tự đoán**, bạn sẽ nhận được thứ sai — có khi vài tháng sau mới phát hiện.

### Sáu rủi ro đặc trưng

**1. Yêu cầu ngầm định không được truyền đạt.** Đội nội bộ **tự động biết** những điều mà nhà cung cấp bên ngoài không thể biết: quy ước công ty, quy định ngành, cách hệ thống khác hoạt động, người dùng thực sự làm việc thế nào.

> **Đây là nguồn thất bại phổ biến nhất trong thuê ngoài.** Những gì *"ai cũng biết"* trong tổ chức của bạn thì **không ai bên ngoài biết cả**.

**2. Nhà cung cấp không có động lực hỏi.** Trong hợp đồng giá cố định, mỗi câu hỏi làm chậm tiến độ của họ. **Có khi im lặng và tự đoán là lựa chọn hợp lý về mặt kinh tế cho họ — nhưng thảm hoạ cho bạn.**

**3. Khác biệt văn hoá trong giao tiếp.** Ở một số văn hoá làm việc, nói *"tôi không hiểu"* hoặc *"yêu cầu này không rõ"* với khách hàng bị coi là không lịch sự.

> **Cách xử lý: đừng hỏi *"các bạn đã hiểu chưa?"* — câu trả lời sẽ luôn là *"rồi"*.** Thay vào đó hãy hỏi ***"hãy giải thích lại cho tôi nghe các bạn sẽ hiện thực điều này thế nào."*** **Bạn sẽ lập tức biết họ có thực sự hiểu không.**

**4. Yêu cầu trở thành tài liệu pháp lý.** Trong quan hệ hợp đồng, yêu cầu **có thể được dùng làm bằng chứng pháp lý**. Điều này khiến độ chính xác trở nên quan trọng hơn nhiều, và làm cho việc thay đổi trở nên tốn kém về mặt thủ tục.

**5. Vòng phản hồi dài.** Bạn phát hiện vấn đề muộn hơn nhiều, khi việc sửa đã tốn kém hơn nhiều.

**6. Mất kiến thức sau khi dự án kết thúc.** Khi nhà cung cấp rời đi, **kiến thức về hệ thống rời đi cùng họ** — trừ khi bạn chủ động yêu cầu chuyển giao.

---

## 8. Yêu cầu trong hợp đồng thuê ngoài

### Ba điều phải làm cực kỳ rõ

**1. Định nghĩa "hoàn thành" (acceptance criteria).**

> **Không có tiêu chí nghiệm thu rõ ràng, tranh chấp là không thể tránh khỏi.** Nhà cung cấp nói *"chúng tôi đã giao đúng yêu cầu"*; bạn nói *"nó không hoạt động như chúng tôi cần"*. **Cả hai đều có thể đúng theo cách hiểu của mình.**
>
> **Acceptance criteria phải cụ thể, đo lường được, và được thoả thuận TRƯỚC khi ký hợp đồng.**

**2. Quy trình thay đổi yêu cầu.** Hợp đồng phải nêu rõ:

- **Ai được phép** yêu cầu thay đổi.
- **Thay đổi được định giá thế nào** — theo tỷ lệ đã thoả thuận trước, hay đàm phán từng lần?
- **Thời gian phản hồi** cho việc đánh giá tác động.
- **Điều gì được coi là làm rõ (miễn phí)** so với **thay đổi phạm vi (tính phí)**.

> **Ranh giới giữa "làm rõ" và "thay đổi" là nguồn tranh chấp lớn nhất trong dự án thuê ngoài.** Hãy định nghĩa nó **trước**, không phải khi tranh chấp đã nổ ra.

**3. Quyền sở hữu và chuyển giao.** Ai sở hữu mã nguồn, tài liệu, thiết kế? **Những gì phải được bàn giao khi hợp đồng kết thúc?** Hãy liệt kê cụ thể.

### Mô hình hợp đồng và hệ quả với yêu cầu

| Mô hình | Yêu cầu phải thế nào | Rủi ro |
|---------|---------------------|--------|
| **Giá cố định (fixed price)** | **Rất chi tiết và ổn định** trước khi ký | Thay đổi tốn kém; nhà cung cấp có động lực diễn giải hẹp; **phù hợp khi yêu cầu đã rõ và ổn định** |
| **Thời gian và vật liệu (T&M)** | Có thể tiến hoá | Bạn chịu rủi ro chi phí; cần giám sát chặt; **phù hợp khi yêu cầu còn bất định** |
| **Agile / capacity-based** | Backlog tiến hoá, ưu tiên liên tục | Cần product owner sẵn sàng ở phía bạn; **phù hợp khi bạn muốn linh hoạt và có năng lực quản lý** |

> **Nghịch lý quan trọng của hợp đồng giá cố định:** nó **hứa hẹn** loại bỏ rủi ro chi phí cho bạn, nhưng nó **đòi hỏi** bạn phải biết chính xác mình muốn gì trước khi bắt đầu — **điều mà hầu hết dự án phần mềm không thể làm được**.
>
> **Kết quả thực tế thường thấy:** hợp đồng giá cố định với yêu cầu chưa chín dẫn tới **một chuỗi dài các change order tốn kém**, và cuối cùng chi phí vượt xa dự tính ban đầu — cộng thêm mối quan hệ đối kháng với nhà cung cấp.

### Ba thực hành giảm rủi ro

**1. Yêu cầu bàn giao TĂNG DẦN, không phải một lần ở cuối.** Nhận phần mềm chạy được thường xuyên cho phép bạn **phát hiện hiểu lầm sớm**, khi việc sửa còn rẻ.

**2. Duy trì năng lực BA ở PHÍA BẠN.** Đừng thuê ngoài cả việc phân tích yêu cầu.

> **Lý do: nhà cung cấp không thể biết nghiệp vụ của bạn tốt hơn bạn.** Nếu bạn giao cả việc hiểu vấn đề cho họ, bạn đang giao đi thứ duy nhất mà chỉ bạn mới có. **Bạn cần một người phía mình đủ hiểu để biết khi nào nhà cung cấp đang đi sai hướng.**

**3. Đầu tư vào mô hình trực quan và ví dụ cụ thể.** Sơ đồ, wireframe, dữ liệu mẫu và acceptance test **vượt qua rào cản ngôn ngữ tốt hơn nhiều so với văn bản**. Một swimlane diagram được hiểu giống nhau ở hai châu lục; một đoạn văn dài thì không.

---

## 9. Quản lý mối quan hệ với nhà cung cấp & thay đổi

### Xây dựng vòng phản hồi ngắn

**Nguyên tắc: khoảng cách càng lớn thì vòng phản hồi càng phải ngắn** — điều này nghe có vẻ nghịch lý nhưng chính xác là điều cần làm.

**Các cơ chế thực tiễn:**

- **Bàn giao thường xuyên** — hằng tuần hoặc mỗi hai tuần, không phải hằng quý.
- **Có giờ trùng nhau giữa các múi giờ** — dù chỉ 2 giờ mỗi ngày, đó là cửa sổ để giải quyết vấn đề nhanh.
- **Kênh giao tiếp trực tiếp giữa lập trình viên và BA**, không phải mọi thứ đều qua quản lý dự án.
- **Chuyến thăm trực tiếp định kỳ** — dù tốn kém, chúng xây dựng lòng tin mà không cuộc gọi video nào thay thế được.
- **Một người liên lạc rõ ràng ở mỗi phía** để tránh thông tin mâu thuẫn.

### Kỹ thuật xác minh hiểu biết

**Đừng bao giờ giả định hiểu biết được chia sẻ.** Hãy xác minh nó:

| Kỹ thuật | Cách làm |
|----------|---------|
| **Diễn giải lại** | Yêu cầu nhà cung cấp giải thích lại yêu cầu bằng lời của họ |
| **Ví dụ cụ thể** | *"Với đầu vào này, kết quả mong đợi là gì?"* — cực kỳ hiệu quả để lộ hiểu lầm |
| **Acceptance test viết trước** | Nhà cung cấp và bạn cùng thoả thuận test trước khi hiện thực |
| **Prototype sớm** | Nhìn thấy thứ sai sau hai tuần rẻ hơn nhiều so với sau sáu tháng |

### Quản lý thay đổi trong quan hệ hợp đồng

**Thay đổi là không tránh khỏi — kể cả trong hợp đồng giá cố định.** Điều quan trọng là **quản lý nó một cách chuyên nghiệp thay vì để nó trở thành nguồn xung đột**.

**Bốn thực hành:**

- **Ghi lại mọi thay đổi bằng văn bản**, kể cả những thay đổi có vẻ nhỏ. *"Chỉ là một thay đổi nhỏ"* nhân với năm mươi lần trở thành một dự án khác.
- **Đánh giá tác động trước khi phê duyệt** — thời gian, chi phí, rủi ro, ảnh hưởng tới các phần khác.
- **Duy trì một baseline yêu cầu rõ ràng** để mọi người biết đang thay đổi từ đâu.
- **Xem lại định kỳ tổng khối lượng thay đổi tích luỹ** — không chỉ từng thay đổi riêng lẻ.

> **Chỉ báo sức khoẻ quan hệ: nếu mọi cuộc trò chuyện đều xoay quanh điều khoản hợp đồng thay vì xoay quanh sản phẩm, mối quan hệ đã hỏng.** Hợp đồng tốt nhất là hợp đồng bạn không phải mở ra xem.

---

## 10. Ba loại dự án: điểm chung và bài học

### Điểm chung xuyên suốt

Dù bạn nâng cấp hệ thống cũ, cấu hình một gói, hay quản lý nhà cung cấp bên ngoài, **bốn nguyên tắc giống nhau đều áp dụng**:

**1. Bạn vẫn phải hiểu nhu cầu nghiệp vụ THẬT.** Ba bối cảnh này đều có xu hướng đẩy bạn về phía **mô tả giải pháp thay vì hiểu vấn đề** — hệ thống cũ, tính năng của gói, hay đặc tả hợp đồng. **Hãy chống lại xu hướng đó.**

**2. Bạn phải phân biệt "cần" với "quen".**

> Trong dự án thay thế, người dùng nói *"nó phải hoạt động như hệ thống cũ"*. Trong dự án COTS, họ nói *"gói này không làm được điều chúng ta cần"*. **Trong cả hai trường hợp, câu hỏi thật là: đây là nhu cầu nghiệp vụ, hay chỉ là thói quen?**

**3. Kiến thức ngầm là kẻ thù chính.**

> Trong dự án kế thừa, kiến thức ngầm nằm trong đầu người dùng lâu năm và trong mã nguồn. Trong dự án COTS, nó nằm trong giả định của nhà cung cấp về cách bạn vận hành. Trong dự án thuê ngoài, nó nằm trong tất cả những gì *"ai cũng biết"* trong tổ chức bạn. **Công việc của BA là làm cho kiến thức ngầm trở nên tường minh.**

**4. Vòng phản hồi ngắn cứu bạn khỏi những sai lầm đắt giá.** Bàn giao tăng dần, prototype sớm, chạy thử với dữ liệu thật — **tất cả đều phục vụ cùng mục đích: phát hiện hiểu lầm khi việc sửa còn rẻ.**

### Bài học riêng cho từng loại

| Loại dự án | Bài học quan trọng nhất |
|-----------|------------------------|
| **Nâng cấp / thay thế** | **Dùng hệ thống cũ như nguồn thông tin, không phải bản thiết kế**; và đừng đánh giá thấp việc di trú dữ liệu |
| **Giải pháp đóng gói** | **Thay đổi quy trình rẻ hơn tuỳ biến mã nguồn** — và đừng mua gói cho thứ tạo ra lợi thế cạnh tranh của bạn |
| **Thuê ngoài** | **Khoảng cách càng lớn, yêu cầu càng phải rõ**; giữ năng lực BA ở phía bạn và xác minh hiểu biết thay vì giả định nó |

---

## Điểm cốt lõi

- **Phần lớn công việc phần mềm không phải xây mới** mà là nâng cấp, thay thế hoặc di trú hệ thống đã tồn tại.
- Trong dự án kế thừa, **yêu cầu hiện có thường không được ghi lại ở đâu cả** — bạn phải tái tạo từ nhiều nguồn.
- Người dùng lâu năm **mô tả giải pháp hiện tại, không mô tả nhu cầu** — hãy hỏi *"vì sao"* nhiều lần.
- **Đừng sao chép mù quáng hệ thống cũ**: bạn sẽ sao chép cả tính năng không ai dùng và cả cách làm vòng vo.
- **Dùng hệ thống cũ như NGUỒN THÔNG TIN, không phải BẢN THIẾT KẾ.**
- **Quan sát người dùng thực là nguồn giá trị cao nhất** — mỗi workaround là một yêu cầu chưa được đáp ứng.
- **Mỗi bảng tính Excel chạy song song với hệ thống chính thức là một lời tố cáo về chức năng còn thiếu.**
- **Mã nguồn cho biết hệ thống LÀM GÌ, không cho biết nó NÊN làm gì** — trong đó có cả lỗi và giải pháp tạm.
- **Nếu chỉ còn một người hiểu hệ thống cũ và họ sắp nghỉ hưu, đó là rủi ro dự án hàng đầu.**
- **Di trú dữ liệu thường bị đánh giá thấp nghiêm trọng** — hãy phân tích chất lượng dữ liệu ngay ở giai đoạn yêu cầu.
- **Cách xử lý dữ liệu bẩn là quyết định của nghiệp vụ, không phải của kỹ thuật.**
- **Truy cập dữ liệu lịch sử sau chuyển đổi là một yêu cầu chức năng thật**, thường bị bỏ quên.
- **Đừng mua gói cho thứ TẠO RA lợi thế cạnh tranh của bạn** — mua cho những gì mọi công ty làm giống nhau.
- **Mua gói không loại bỏ nhu cầu về yêu cầu** — thiếu chúng bạn sẽ chọn dựa trên buổi trình diễn ấn tượng nhất.
- **Giữ danh sách must-have NGẮN** — 5 tới 15 mục, nếu không bạn không phân biệt được gì.
- **Đừng để nhà cung cấp trình diễn theo kịch bản của họ** — dùng kịch bản và dữ liệu của bạn.
- **Hỏi liệu bạn có lấy được dữ liệu ra không** — câu hỏi ít ai hỏi và hối tiếc nhất khi bỏ qua.
- **Thay đổi quy trình thường là cách xử lý gap tốt nhất**; tuỳ biến mã nguồn là nguy hiểm nhất.
- **Tuỳ biến nặng có thể khiến tổng chi phí vượt qua tự xây từ đầu** — mà vẫn không có sự linh hoạt.
- Trong COTS, kỹ năng then chốt là **phân biệt "chúng ta cần điều này" với "chúng ta quen làm theo cách này"**.
- **Khoảng cách càng lớn thì yêu cầu càng phải rõ ràng và đầy đủ.**
- **Đừng hỏi "các bạn đã hiểu chưa"** — hãy hỏi *"hãy giải thích lại các bạn sẽ hiện thực thế nào"*.
- **Ranh giới giữa "làm rõ" và "thay đổi" là nguồn tranh chấp lớn nhất** — định nghĩa nó trước.
- **Hợp đồng giá cố định đòi hỏi bạn biết chính xác mình muốn gì trước khi bắt đầu** — điều hầu hết dự án không làm được.
- **Đừng thuê ngoài cả việc phân tích yêu cầu** — nhà cung cấp không thể biết nghiệp vụ của bạn tốt hơn bạn.
- **Mô hình trực quan vượt qua rào cản ngôn ngữ tốt hơn văn bản.**
- **Nếu mọi cuộc trò chuyện xoay quanh điều khoản hợp đồng thay vì sản phẩm, mối quan hệ đã hỏng.**

## Tóm tắt

- Ba bối cảnh này — **nâng cấp, gói giải pháp, thuê ngoài** — chiếm phần lớn công việc thực tế của BA và mỗi cái có rủi ro riêng.
- Trong **dự án kế thừa**, hãy tái tạo yêu cầu từ nhiều nguồn và đối chiếu chúng, đồng thời đưa phân tích dữ liệu vào sớm.
- Trong **dự án COTS**, yêu cầu trở thành tiêu chí đánh giá; hãy giữ must-have ngắn, trình diễn theo kịch bản của bạn, và ưu tiên thay đổi quy trình hơn tuỳ biến mã.
- Trong **dự án thuê ngoài**, hãy đầu tư vào sự rõ ràng, xác minh hiểu biết một cách chủ động, và giữ năng lực phân tích ở phía mình.
- Xuyên suốt cả ba: **làm cho kiến thức ngầm trở nên tường minh, phân biệt nhu cầu với thói quen, và rút ngắn vòng phản hồi.**
