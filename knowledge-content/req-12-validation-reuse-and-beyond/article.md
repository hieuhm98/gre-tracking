# Thẩm định, tái sử dụng & vượt ra ngoài yêu cầu

## 1. Thẩm định là gì & vì sao phải làm

> **Yêu cầu được viết ra không có nghĩa là yêu cầu đúng.**

Bạn có thể có một tài liệu SRS dày dặn, được định dạng đẹp, mọi câu đều bắt đầu bằng *"hệ thống shall"* — và vẫn xây sai sản phẩm. **Thẩm định (validation) là hoạt động bảo đảm rằng những gì bạn ghi lại thực sự mô tả sản phẩm sẽ thoả mãn nhu cầu của khách hàng.**

### Verification khác Validation

| | **Verification** | **Validation** |
|---|-----------------|----------------|
| **Câu hỏi** | *"Chúng ta có đang xây sản phẩm ĐÚNG CÁCH không?"* | *"Chúng ta có đang xây ĐÚNG sản phẩm không?"* |
| **Kiểm tra** | Sản phẩm có khớp với đặc tả không | Đặc tả có mô tả đúng nhu cầu không |
| **Đối chiếu với** | Tài liệu yêu cầu | Nhu cầu thực của người dùng và mục tiêu nghiệp vụ |

> **Cả hai đều cần thiết.** Một hệ thống có thể **verified hoàn hảo** — khớp chính xác với mọi câu trong SRS — mà vẫn **hoàn toàn vô dụng**, nếu SRS mô tả sai thứ cần xây.

### Vì sao thẩm định sớm mang lại lợi ích khổng lồ

**Chi phí sửa một lỗi tăng theo cấp số nhân theo giai đoạn phát hiện.** Một lỗi yêu cầu được phát hiện:

- **Trong giai đoạn yêu cầu:** chi phí gần như bằng không — chỉ sửa vài dòng văn bản.
- **Trong giai đoạn thiết kế:** tốn công thiết kế lại.
- **Trong giai đoạn viết mã:** tốn công viết lại mã đã hoàn thành.
- **Trong giai đoạn kiểm thử:** tốn công sửa mã, sửa test, và làm lại kiểm thử hồi quy.
- **Sau khi giao hàng:** tốn kém nhất — bản vá khẩn cấp, hỗ trợ khách hàng, uy tín bị tổn hại, và đôi khi thiệt hại pháp lý.

> **Đây là lập luận kinh tế đơn giản nhất và mạnh nhất cho việc review yêu cầu: vài giờ trong phòng họp có thể tiết kiệm hàng tháng công sức sau này.**

### Ba kỹ thuật thẩm định chính

**1. Review yêu cầu (peer review, inspection)** — con người đọc và phân tích yêu cầu để tìm lỗi. **Kỹ thuật hiệu quả nhất**, được bàn kỹ ở các phần tiếp theo.

**2. Prototyping** — biến yêu cầu thành thứ hữu hình để người dùng phản ứng. Đặc biệt hiệu quả để phát hiện **yêu cầu thiếu và hiểu lầm**.

**3. Kiểm thử dựa trên yêu cầu** — viết test case từ yêu cầu **trước khi** viết mã. Quá trình viết test **buộc phải làm rõ** những gì yêu cầu chưa nói.

**Bổ sung: định nghĩa acceptance criteria.** Xác định rõ **điều kiện để khách hàng chấp nhận sản phẩm** cũng là một hình thức thẩm định mạnh mẽ, vì nó buộc mọi người phải đồng ý về **thế nào là thành công**.

---

## 2. Review yêu cầu & các mức trang trọng

**Peer review** là hoạt động trong đó **những người khác ngoài tác giả kiểm tra một sản phẩm công việc để tìm lỗi và cơ hội cải thiện**.

> **Nguyên lý nền tảng: tác giả không thể tự tìm hết lỗi của mình.** Bạn đọc những gì bạn **định viết**, không phải những gì bạn **đã viết**. Bạn hiểu ý mình muốn nói, nên câu văn nhập nhằng vẫn có vẻ rõ ràng với bạn. **Chỉ có mắt của người khác mới bắt được điều đó.**

### Phổ các mức trang trọng

Review không phải một thứ duy nhất — nó là **một phổ**, từ rất không trang trọng tới rất trang trọng.

| Loại | Mô tả | Khi nào dùng |
|------|-------|-------------|
| **Peer deskcheck** | Đưa tài liệu cho **một đồng nghiệp** đọc và góp ý | Nhanh, rẻ, phù hợp với tài liệu nhỏ hoặc bản nháp sớm |
| **Passaround** | Gửi tài liệu cho **nhiều người** cùng lúc, mỗi người đọc độc lập rồi gửi lại nhận xét | Khi người review ở nhiều nơi hoặc lịch không khớp |
| **Walkthrough** | **Tác giả dẫn** nhóm đi qua tài liệu, giải thích và nhận phản hồi | Khi cần truyền đạt hiểu biết cũng như tìm lỗi |
| **Team review** | Nhóm chuẩn bị trước rồi họp thảo luận, có kế hoạch nhưng ít nghi thức | Cân bằng giữa chi phí và hiệu quả |
| **Inspection** | Quy trình **trang trọng nhất**: vai trò được phân định, chuẩn bị bắt buộc, tiêu chí vào ra, thu thập số liệu | Với các tài liệu quan trọng, rủi ro cao |

> **Nguyên tắc chọn mức: mức trang trọng nên tương ứng với RỦI RO.** Đặc tả cho một tính năng nhỏ chỉ cần deskcheck. Đặc tả cho hệ thống điều khiển thiết bị y tế xứng đáng với một inspection đầy đủ.

### Một điểm quan trọng thường bị bỏ qua

> **Việc phát tài liệu cho từng người tự đọc riêng lẻ KHÔNG tương đương với một buổi review nhóm.**
>
> Loại nhập nhằng nguy hiểm nhất là khi **nhiều người đọc hiểu khác nhau mà yêu cầu vẫn có nghĩa với từng người**. Khi mỗi người đọc một mình, **không ai thấy có vấn đề** — mỗi người đều tin mình đã hiểu.
>
> **Chỉ khi họ ngồi cùng nhau và nói ra cách hiểu của mình, sự khác biệt mới lộ ra.** Đây là lý do các buổi review có mặt trực tiếp vẫn có giá trị không thể thay thế.

---

## 3. Formal inspection: vai trò và các bước

**Inspection** là hình thức review trang trọng nhất, do Michael Fagan phát triển tại IBM. Nó là **kỹ thuật đảm bảo chất lượng phần mềm hiệu quả nhất từng được đo lường**.

### Năm vai trò

| Vai trò | Trách nhiệm |
|---------|-------------|
| **Author (tác giả)** | Người viết tài liệu. **KHÔNG được làm moderator hay reader.** Trả lời câu hỏi khi được hỏi nhưng **không bảo vệ hay biện minh** |
| **Moderator (người điều phối)** | Lập kế hoạch, điều hành buổi họp, giữ cho thảo luận đi đúng hướng và **tập trung vào tìm lỗi chứ không sửa lỗi** |
| **Reader (người đọc)** | **Diễn giải lại (paraphrase)** từng phần tài liệu bằng lời của mình. **Đây là kỹ thuật quyền lực nhất của inspection** |
| **Recorder (người ghi)** | Ghi lại mọi vấn đề được nêu, một cách trung lập, không phán xét |
| **Inspector (người kiểm)** | Mọi người tham dự đều đóng vai này — tìm lỗi. Nên gồm **đại diện người dùng, lập trình viên, tester** |

> **Vì sao Reader lại quan trọng tới vậy?** Khi reader diễn giải lại một yêu cầu bằng lời của mình và **cách hiểu đó khác với ý tác giả**, bạn vừa tìm ra một **nhập nhằng thực sự** — loại nhập nhằng nguy hiểm nhất mà không cách nào khác phát hiện được. **Tác giả không thể làm reader**, chính vì lý do này.

### Bảy bước của inspection

**1. Planning (lập kế hoạch)** — Moderator xác định **ai tham dự**, chia tài liệu thành **phần vừa phải**, và kiểm tra **tiêu chí vào (entry criteria)**: tài liệu có đủ hoàn chỉnh và đủ chất lượng để đáng review không?

> **Đừng review một bản nháp cẩu thả.** Bắt cả nhóm ngồi chỉ ra lỗi chính tả là **lãng phí thời gian đắt đỏ của chuyên gia**. Tác giả phải tự làm sạch trước.

**2. Overview (giới thiệu)** — Tác giả trình bày ngắn gọn bối cảnh nếu người tham dự chưa quen với chủ đề. **Bước này có thể bỏ qua** nếu mọi người đã hiểu bối cảnh.

**3. Preparation (chuẩn bị)** — **Bước quan trọng nhất và bị bỏ qua nhiều nhất.** Mỗi người tự đọc tài liệu và ghi lại vấn đề **TRƯỚC** buổi họp.

> **Nghiên cứu cho thấy phần lớn lỗi được tìm thấy trong bước CHUẨN BỊ, không phải trong buổi họp.** Buổi họp chủ yếu để **tổng hợp, phân loại và phát hiện nhập nhằng qua thảo luận**.
>
> **Nếu người tham dự không chuẩn bị, hãy HOÃN buổi họp.** Một buổi inspection không chuẩn bị chỉ là một buổi đọc tài liệu tập thể tốn kém.

**Công cụ hỗ trợ chuẩn bị: checklist lỗi yêu cầu.** Danh sách các loại lỗi thường gặp — thiếu ngoại lệ, dùng từ mơ hồ, thiếu tiêu chí kiểm chứng, mâu thuẫn với yêu cầu khác — giúp người review **tìm có hệ thống** thay vì tìm ngẫu nhiên.

**4. Meeting (buổi họp)** — Reader diễn giải từng phần; inspector nêu vấn đề; recorder ghi lại.

**Ba quy tắc sắt của buổi họp:**

- **Tìm lỗi, KHÔNG sửa lỗi.** Ngay khi nhóm bắt đầu thiết kế giải pháp, tốc độ tìm lỗi tụt xuống gần bằng không. Moderator phải cắt ngang: *"Ghi lại vấn đề, tác giả sẽ xử lý sau."*
- **Đánh giá sản phẩm, KHÔNG đánh giá con người.** Không bao giờ nói *"anh viết cái này tệ quá"*. Nói *"yêu cầu này không nêu điều gì xảy ra khi tệp không lưu được"*.
- **Giới hạn thời gian: tối đa 2 giờ.** Sau đó khả năng tập trung sụt giảm nghiêm trọng và tỷ lệ tìm lỗi giảm mạnh. **Chia thành nhiều buổi thay vì kéo dài một buổi.**

**5. Rework (sửa chữa)** — Tác giả sửa các vấn đề đã ghi nhận.

**6. Follow-up (theo dõi)** — Moderator hoặc một người được chỉ định **xác nhận rằng mọi vấn đề đã được xử lý**. Không phải mọi vấn đề đều phải sửa — nhưng mọi vấn đề đều phải được **quyết định một cách có ý thức**.

**7. Kiểm tra tiêu chí ra (exit criteria)** — Tài liệu có đủ chất lượng để chuyển sang bước tiếp theo không, hay cần một vòng inspection nữa?

---

## 4. Bí quyết review thành công & những bẫy thường gặp

### Sáu bí quyết

**1. Mời đúng người.** Một buổi review yêu cầu nên có:

- **Đại diện người dùng** — người duy nhất đánh giá được tính đúng đắn.
- **Lập trình viên** — bắt được yêu cầu bất khả thi hoặc thiếu thông tin cần để hiện thực.
- **Tester** — bắt được yêu cầu không kiểm chứng được. **Đây là nhóm người bị bỏ sót nhiều nhất và có giá trị nhất.**
- **BA khác** — góc nhìn tươi mới về cách viết và cấu trúc.

> **Nhưng đừng mời quá nhiều.** Buổi review với 12 người **chậm chạp, khó điều phối và mọi người đều ỷ lại vào người khác**. Con số hiệu quả thường là **4 tới 7 người**.

**2. Chia nhỏ tài liệu.** **Không ai review được 200 trang một cách hiệu quả.** Tốc độ review hiệu quả với tài liệu yêu cầu thường chỉ khoảng **5 tới 10 trang mỗi giờ**. Chia thành nhiều buổi, mỗi buổi một phần.

**3. Dùng checklist.** Nó biến việc tìm lỗi từ nghệ thuật ngẫu hứng thành **quy trình có hệ thống**.

**4. Ưu tiên review những phần rủi ro nhất.** Nếu bạn không thể review mọi thứ — mà bạn thường không thể — hãy tập trung vào **phần phức tạp nhất, mới nhất, và có hậu quả nghiêm trọng nhất nếu sai**.

**5. Theo dõi số liệu.** Ghi lại **số lỗi tìm được, thời gian bỏ ra, số trang review**. Điều này giúp bạn **chứng minh giá trị của việc review** cho lãnh đạo, và cải thiện quy trình theo thời gian.

**6. Tạo môi trường an toàn.** Nếu tác giả cảm thấy bị tấn công, họ sẽ **phòng thủ** và giá trị của buổi review sụp đổ.

> **Nguyên tắc vàng: kết quả review KHÔNG BAO GIỜ được dùng để đánh giá hiệu suất cá nhân.** Nếu số lỗi tìm được trong tài liệu của ai đó ảnh hưởng tới đánh giá cuối năm của họ, mọi người sẽ **giấu tài liệu khỏi review**. **Điều này giết chết toàn bộ thực hành.**

### Sáu bẫy thường gặp

**1. Không chuẩn bị.** Đã bàn ở trên — **nguyên nhân số một khiến inspection thất bại**.

**2. Biến review thành buổi giải quyết vấn đề.** Nhóm sa vào thiết kế giải pháp cho lỗi đầu tiên và hết giờ trước khi xem hết trang ba.

**3. Người tham dự sai.** Toàn lập trình viên mà không có người dùng: bạn sẽ tìm ra vấn đề kỹ thuật nhưng **bỏ lỡ việc yêu cầu mô tả sai nghiệp vụ**.

**4. Review quá muộn.** Đợi tới khi tài liệu *"hoàn chỉnh"* nghĩa là tác giả đã đầu tư quá nhiều để sẵn sàng thay đổi lớn. **Hãy review sớm và nhiều lần.**

**5. Không ai theo dõi việc sửa chữa.** Vấn đề được ghi vào biên bản rồi nằm đó mãi mãi. **Nếu không có bước follow-up, buổi review chỉ là một buổi trò chuyện.**

**6. Xem review là dấu hiệu không tin tưởng.** Ở tổ chức có văn hoá kém, người ta coi việc bị review là bị nghi ngờ năng lực.

> **Cách khắc phục văn hoá: bắt đầu từ trên xuống.** Khi một kiến trúc sư trưởng hoặc BA kỳ cựu **chủ động đưa tài liệu của mình ra review và cảm ơn người tìm được lỗi**, thông điệp trở nên rõ ràng: **review là dấu hiệu của sự chuyên nghiệp, không phải của sự yếu kém.**

---

## 5. Kiểm thử yêu cầu & acceptance criteria

> **Bạn không thể kiểm thử phần mềm chưa tồn tại — nhưng bạn HOÀN TOÀN có thể kiểm thử yêu cầu.**

### Viết test case từ yêu cầu

**Ý tưởng: với mỗi yêu cầu, hãy nghĩ ra các test case sẽ chứng minh nó được hiện thực đúng — TRƯỚC khi viết một dòng mã nào.**

**Việc này bộc lộ vấn đề ngay lập tức:**

- **Không nghĩ ra được test nào** → yêu cầu **không kiểm chứng được**.
- **Cần rất nhiều test đa dạng** → có lẽ **nhiều yêu cầu đang bị gộp lại**.
- **Không biết kết quả mong đợi là gì** → yêu cầu **thiếu thông tin**.
- **Không biết hệ thống làm gì trong trường hợp X** → **thiếu một yêu cầu ngoại lệ**.

> **Đây là lý do tester nên tham gia sớm vào quá trình phát triển yêu cầu, không phải chỉ nhận tài liệu ở cuối.** Tư duy kiểm thử là **bộ lọc lỗi cực kỳ hiệu quả** áp dụng lên yêu cầu.

### Đối chiếu chéo test với yêu cầu và mô hình

**Một kỹ thuật mạnh: đi qua các test case của bạn trên một mô hình phân tích.**

- Đi qua **dialog map** theo các bước của một test case: bạn có tới được nơi cần tới không? Có transition nào bị thiếu không?
- Đi qua **state-transition diagram**: mọi đường đi trong test có được mô hình cho phép không?
- So test case với **decision table**: có tổ hợp điều kiện nào chưa có test không, hoặc test nào không khớp với yêu cầu nào?

> **Ba biểu diễn — yêu cầu văn bản, mô hình, và test case — kiểm tra chéo lẫn nhau.** Chỗ nào chúng không khớp, chỗ đó có lỗi.

### Acceptance criteria

**Acceptance criteria xác định điều kiện mà theo đó khách hàng sẽ CHẤP NHẬN sản phẩm.**

**Vì sao chúng quan trọng tới vậy:**

- Chúng buộc mọi người phải **đồng ý trước về thế nào là thành công**, thay vì tranh cãi sau khi giao hàng.
- Chúng **cụ thể và kiểm chứng được**, khác với yêu cầu chung chung.
- Chúng thường **bộc lộ kỳ vọng ngầm** mà không ai từng nói ra.

**Trong agile, acceptance criteria là hình thức đặc tả chi tiết chính.** Với mỗi user story, đội cùng nhau xác định **các điều kiện phải đúng để story được coi là hoàn thành**, thường viết dưới dạng test.

> **Một điểm then chốt: acceptance criteria phải phủ CẢ điều kiện ngoại lệ, không chỉ đường đi hạnh phúc.** Một story được coi là hoàn thành chỉ khi hệ thống xử lý đúng cả những gì có thể sai.

**Ai viết acceptance criteria?** Đây phải là hoạt động **cộng tác**: khách hàng hoặc product owner nêu điều gì quan trọng với họ; tester giúp làm cho nó cụ thể và đo lường được; lập trình viên xác nhận nó khả thi.

---

## 6. Tái sử dụng yêu cầu: cơ hội và mức độ

> **Nếu tổ chức của bạn đã xây năm hệ thống có chức năng đăng nhập, bạn đã viết yêu cầu đăng nhập năm lần — và có lẽ viết khác nhau cả năm lần.**

**Tái sử dụng yêu cầu là việc dùng lại yêu cầu đã được viết, đã được review, đã được chứng minh từ dự án trước thay vì viết lại từ đầu.**

### Lợi ích

- **Tiết kiệm thời gian.** Không phải phát minh lại điều đã biết.
- **Chất lượng cao hơn.** Yêu cầu tái sử dụng đã trải qua review, hiện thực và kiểm thử thực tế — **chúng đã được thử lửa**.
- **Tính nhất quán.** Nhiều sản phẩm trong cùng một dòng sản phẩm hành xử giống nhau ở những chức năng chung.
- **Ít lỗi tích hợp hơn.** Đặc biệt khi tái sử dụng **định nghĩa dữ liệu** — cùng một định nghĩa nghĩa là cùng một cách hiểu.

### Bốn mức độ tái sử dụng

| Mức | Mô tả | Ví dụ |
|-----|-------|-------|
| **Tái sử dụng nguyên vẹn (as-is)** | Dùng lại **không thay đổi gì** | Yêu cầu tuân thủ tiêu chuẩn, quy định pháp luật, chính sách công ty |
| **Tái sử dụng có chỉnh sửa (with modification)** | Dùng làm điểm khởi đầu rồi **điều chỉnh cho phù hợp** | Chức năng đăng nhập cần chính sách mật khẩu khác nhau giữa các sản phẩm |
| **Tái sử dụng có tham số (parameterized)** | Một mẫu với **chỗ trống điền vào** | *"Hệ thống phải khoá tài khoản sau &lt;N&gt; lần đăng nhập thất bại"* |
| **Tái sử dụng ở mức PATTERN** | Không tái sử dụng câu chữ mà tái sử dụng **cấu trúc và danh sách câu hỏi** | Mẫu chung cho mọi yêu cầu về báo cáo, về audit trail, về thông báo |

### Loại thông tin nào đáng tái sử dụng nhất

- **Định nghĩa dữ liệu (data dictionary entries)** — có giá trị tái sử dụng cao nhất, vì sự nhất quán ở đây ngăn ngừa lỗi tích hợp trên toàn doanh nghiệp.
- **Business rule** — quy tắc của tổ chức áp dụng cho nhiều hệ thống. **Đây chính là lý do business rule nên được lưu ở kho cấp doanh nghiệp, không phải chôn trong SRS của từng dự án.**
- **Thuật ngữ trong glossary** — một glossary doanh nghiệp loại bỏ tình trạng mỗi dự án định nghĩa lại cùng một từ.
- **Yêu cầu phi chức năng và constraint** — tiêu chuẩn bảo mật, quy định tuân thủ, yêu cầu về khả năng tiếp cận thường giống nhau trên mọi sản phẩm.
- **Yêu cầu chức năng cho các chức năng phổ biến** — xác thực, phân quyền, tìm kiếm, xuất dữ liệu, in ấn, sao lưu.

---

## 7. Rào cản của tái sử dụng & requirements pattern

### Sáu rào cản

**1. Không tìm được.** **Đây là rào cản lớn nhất.** Yêu cầu tồn tại ở đâu đó trong hàng trăm tài liệu Word trên ổ đĩa chung, nhưng **không ai biết cách tìm chúng**.

> **Điều kiện tiên quyết cho tái sử dụng: một kho lưu trữ có thể TÌM KIẾM được, với siêu dữ liệu và phân loại.** Đây chính là lý do requirements management tool tạo ra khác biệt lớn — không phải vì nó lưu trữ tốt hơn, mà vì nó **cho phép tìm lại**.

**2. Không tin tưởng.** *"Tôi không biết yêu cầu đó có đúng không, có còn hiệu lực không, hay dự án kia có thành công không."* **Cần siêu dữ liệu về xuất xứ và trạng thái** để tạo niềm tin.

**3. Hội chứng không phải do tôi phát minh.** BA thích viết yêu cầu của riêng mình. **Cần một chút văn hoá và một chút khuyến khích.**

**4. Không có ai sở hữu.** Tài sản tái sử dụng cần **người bảo trì**. Nếu không, chúng dần lỗi thời và niềm tin sụp đổ.

**5. Áp dụng máy móc.** **Rủi ro nghiêm trọng.** Sao chép một yêu cầu vào dự án mới mà không kiểm tra nó có phù hợp không sẽ đưa vào **yêu cầu sai một cách tinh vi** — tệ hơn là không có yêu cầu, vì nó **trông có vẻ đúng**.

> **Quy tắc: mọi yêu cầu tái sử dụng phải được REVIEW trong bối cảnh mới, không phải chỉ sao chép.** Câu hỏi cần đặt: *"Điều này có thực sự đúng với hệ thống NÀY, với những người dùng NÀY không?"*

**6. Chi phí ban đầu.** Xây kho tái sử dụng tốn công trước khi mang lại lợi ích. **Cần cam kết ở mức tổ chức, không chỉ ở mức dự án.**

### Requirements pattern

**Requirements pattern là một mẫu có cấu trúc mô tả CÁCH đặc tả một loại yêu cầu thường gặp — không phải bản thân câu yêu cầu.**

> **Khác biệt then chốt:** Tái sử dụng câu yêu cầu cho bạn **nội dung**. Requirements pattern cho bạn **danh sách những gì cần hỏi và cần bao phủ**.

**Một pattern điển hình bao gồm:**

- **Tên và mô tả** loại yêu cầu.
- **Các câu hỏi phải trả lời** khi đặc tả loại này.
- **Các cân nhắc thường bị bỏ sót** — ngoại lệ, giới hạn, tương tác.
- **Yêu cầu phi chức năng liên quan** thường đi kèm.
- **Ví dụ mẫu** để tham khảo.

**Ví dụ: pattern cho "yêu cầu về báo cáo"** sẽ nhắc bạn hỏi: nguồn dữ liệu, tiêu chí lựa chọn, tham số người dùng chọn được, tính toán, sắp xếp và tổng, hành vi khi không có dữ liệu, hạn chế bảo mật, tần suất và đích đến, kích thước tối đa.

**Ví dụ: pattern cho "yêu cầu về audit trail"** sẽ nhắc: hành động nào được ghi, ghi thông tin gì, giữ bao lâu, ai xem được, có sửa được không, xử lý thế nào khi ổ ghi đầy.

> **Sức mạnh của pattern: nó biến kinh nghiệm của một BA giỏi thành TÀI SẢN CỦA TỔ CHỨC.** Một BA mới dùng pattern sẽ hỏi đúng những câu hỏi mà phải mất nhiều năm mới học được.

---

## 8. Từ yêu cầu tới kế hoạch dự án và ước tính

> **Yêu cầu là NỀN TẢNG của mọi hoạt động quản lý dự án. Bạn không thể lập kế hoạch cho thứ bạn chưa hiểu.**

### Ước tính dựa trên yêu cầu

**Bạn không thể ước tính đáng tin cậy nếu không biết mình sẽ xây gì.** Đây là lý do các ước tính đưa ra **trước khi** có yêu cầu — thứ mà lãnh đạo thường yêu cầu — **luôn sai lệch nghiêm trọng**.

**Cấu trúc ước tính dựa trên yêu cầu:**

1. **Chia yêu cầu thành các đơn vị công việc** đủ nhỏ để ước tính được.
2. **Ước tính từng đơn vị**, tốt nhất là bởi người sẽ làm nó.
3. **Cộng thêm chi phí cho các hoạt động không phải viết mã** — thiết kế, review, kiểm thử, tài liệu, sửa lỗi.
4. **Cộng thêm dự phòng cho bất định**, tỷ lệ với mức độ ổn định của yêu cầu.
5. **Trình bày ước tính dưới dạng KHOẢNG, không phải một con số duy nhất.**

> **Điểm quan trọng nhất về ước tính: hãy nêu rõ ước tính này DỰA TRÊN tập yêu cầu nào.** Khi yêu cầu thay đổi, ước tính phải được xem lại. **Ước tính không đi kèm baseline yêu cầu là lời hứa không có cơ sở.**

### Cone of uncertainty (hình nón bất định)

**Độ chính xác của ước tính cải thiện dần theo tiến trình dự án**, khi bạn biết nhiều hơn:

- **Ở giai đoạn ý tưởng ban đầu:** ước tính có thể sai lệch **4 lần theo cả hai chiều**.
- **Sau khi có vision và scope:** khoảng sai lệch thu hẹp đáng kể.
- **Sau khi yêu cầu được baseline:** thu hẹp thêm nữa.
- **Sau thiết kế chi tiết:** khá chính xác.

> **Bài học: đừng đưa ra cam kết chắc chắn ở đầu hình nón.** Nếu bị buộc phải ước tính sớm, hãy **nêu rõ mức bất định** và **cam kết sẽ ước tính lại** khi biết nhiều hơn.

### Yêu cầu và quản lý phạm vi

**Vision và scope document là công cụ mạnh nhất để quản lý phạm vi**, đặc biệt là mục **Limitations and Exclusions** — nó ghi lại rõ ràng những gì **không** nằm trong phạm vi.

**Khi một yêu cầu mới xuất hiện giữa dự án, câu hỏi đầu tiên không phải "chúng ta có làm được không" mà là "nó có nằm trong tầm nhìn sản phẩm không".** Nếu không, nó thuộc về bản phát hành sau — hoặc tầm nhìn cần được sửa đổi một cách có ý thức, với mọi hệ quả về lịch trình và nguồn lực.

---

## 9. Yêu cầu với thiết kế, mã và kiểm thử

### Yêu cầu → Thiết kế

**Yêu cầu mô tả *cái gì*; thiết kế mô tả *thế nào*.** Nhưng ranh giới không hoàn toàn sắc nét, và điều đó không sao.

**Ba điểm cần nhớ:**

**1. Quality attribute chi phối kiến trúc nhiều hơn yêu cầu chức năng.** Yêu cầu về **performance, scalability, security, portability** quyết định hình dạng kiến trúc, trong khi yêu cầu chức năng thường có thể được hiện thực trong nhiều kiến trúc khác nhau.

**2. Yêu cầu nên tránh áp đặt ràng buộc thiết kế không cần thiết.** Hãy viết yêu cầu ở **mức bản chất** — *cái gì cần đạt được* — và để nhà thiết kế tìm cách tốt nhất. **Chỉ ghi ràng buộc khi có lý do thật, và luôn ghi kèm lý do đó.**

**3. Nhưng đừng giả vờ ranh giới là tuyệt đối.** Đôi khi việc phác một thiết kế giúp làm rõ yêu cầu. Điều quan trọng là **đánh dấu rõ cái nào là cái nào**.

### Yêu cầu → Mã

**Mỗi dòng mã nên truy vết được ngược về một yêu cầu.** Nếu không:

- **Mã không có yêu cầu tương ứng** = có thể là **gold plating** (lập trình viên thêm tính năng không ai yêu cầu), hoặc là **yêu cầu ngầm chưa được ghi lại**. Cả hai đều đáng điều tra.
- **Yêu cầu không có mã tương ứng** = **chức năng bị bỏ sót**.

> **Gold plating là vấn đề nghiêm trọng hơn nhiều người nghĩ.** Tính năng không ai yêu cầu vẫn phải được **thiết kế, kiểm thử, tài liệu hoá, bảo trì và hỗ trợ** — vĩnh viễn. **Nó tiêu tốn tài nguyên đáng lẽ dành cho những gì khách hàng thực sự cần.**

### Yêu cầu → Kiểm thử

**Kiểm thử hệ thống nên được thiết kế từ YÊU CẦU, không phải từ mã.**

> **Vì sao điều này quan trọng:** Nếu bạn viết test bằng cách đọc mã, bạn chỉ kiểm tra được rằng **mã làm những gì nó làm** — bạn không thể phát hiện **chức năng bị bỏ sót hoàn toàn**. Chỉ test được suy ra từ yêu cầu mới bắt được điều đó.

**Ma trận truy vết yêu cầu tới test** cho bạn thấy ngay:

- **Yêu cầu nào chưa có test nào** → khoảng trống kiểm thử.
- **Test nào không truy vết về yêu cầu nào** → hoặc là test thừa, hoặc là yêu cầu chưa được ghi lại.

**Đây là cách đo độ phủ kiểm thử ở mức yêu cầu**, hữu ích hơn nhiều so với chỉ đo độ phủ dòng mã.

---

## 10. Yêu cầu và quản lý dự án hằng ngày

### Bảng chỉ dẫn: yêu cầu ảnh hưởng tới mọi hoạt động

| Hoạt động dự án | Yêu cầu cung cấp gì |
|-----------------|---------------------|
| **Lập kế hoạch** | Cơ sở để chia nhỏ công việc, sắp thứ tự, xác định phụ thuộc |
| **Ước tính** | Nền tảng duy nhất cho ước tính đáng tin cậy |
| **Phân bổ nguồn lực** | Biết cần kỹ năng gì và bao nhiêu |
| **Theo dõi tiến độ** | Đo bằng **số yêu cầu đã hoàn thành và được xác nhận**, không phải bằng phần trăm cảm tính |
| **Quản lý rủi ro** | Yêu cầu không ổn định, mơ hồ, hoặc bất khả thi là **nguồn rủi ro dự án lớn nhất** |
| **Quản lý thay đổi** | Baseline yêu cầu là điểm tham chiếu để đánh giá tác động của mọi thay đổi |
| **Đàm phán phạm vi** | Danh sách ưu tiên cho phép cắt giảm có kiểm soát thay vì khủng hoảng |
| **Nghiệm thu** | Acceptance criteria xác định khi nào thì xong |

### Đo tiến độ bằng yêu cầu

> **Câu hỏi *"dự án hoàn thành bao nhiêu phần trăm rồi?"* gần như luôn nhận được câu trả lời vô nghĩa nếu không neo vào yêu cầu.**

**Cách đo có ý nghĩa:**

- **Bao nhiêu yêu cầu đã được hiện thực VÀ kiểm thử VÀ chấp nhận?** (Không phải *"đã viết mã xong"* — mã chưa kiểm thử là công việc chưa hoàn thành.)
- **Bao nhiêu yêu cầu còn ở trạng thái TBD hoặc đang tranh cãi?**
- **Tốc độ thay đổi yêu cầu** — bao nhiêu thay đổi mỗi tuần? **Nếu tốc độ này không giảm dần, dự án đang gặp rắc rối nghiêm trọng.**

### Rủi ro liên quan tới yêu cầu

**Những vấn đề yêu cầu tạo ra các rủi ro dự án hàng đầu:**

- **Yêu cầu không đầy đủ** → phát hiện chức năng thiếu ở giai đoạn muộn.
- **Yêu cầu không ổn định (scope creep)** → không bao giờ hoàn thành được.
- **Stakeholder không sẵn sàng tham gia** → yêu cầu dựa trên phỏng đoán.
- **Yêu cầu mơ hồ** → lập trình viên xây sai thứ.
- **Thiếu ưu tiên** → không thể cắt giảm khi cần.
- **Không có quy trình quản lý thay đổi** → thay đổi tràn vào không kiểm soát.

> **Mỗi rủi ro này có thể được giảm nhẹ bằng chính những thực hành đã bàn trong toàn bộ khoá học: elicitation có cấu trúc, mô hình phân tích, đặc tả rõ ràng, review, ưu tiên hoá, và quản lý thay đổi.**

### Thông điệp cuối

> **Yêu cầu KHÔNG phải là một giai đoạn bạn đi qua rồi bỏ lại phía sau. Chúng là nền tảng mà mọi hoạt động khác đứng lên.**
>
> Một tài liệu yêu cầu tuyệt vời nằm im trong ngăn kéo **không có giá trị gì**. Giá trị đến từ việc yêu cầu **được dùng liên tục** — để ước tính, để thiết kế, để viết test, để đo tiến độ, để đàm phán phạm vi, để quyết định điều gì đưa vào bản phát hành tiếp theo.
>
> **Hãy đầu tư vào yêu cầu tương xứng với rủi ro của dự án, rồi THỰC SỰ DÙNG chúng.**

---

## Điểm cốt lõi

- **Verification hỏi *"xây đúng cách không"*; validation hỏi *"xây đúng thứ không"*** — cả hai đều cần thiết.
- **Chi phí sửa lỗi tăng theo cấp số nhân theo giai đoạn phát hiện** — đây là lập luận kinh tế mạnh nhất cho review.
- **Tác giả không thể tự tìm hết lỗi của mình** vì họ đọc những gì họ định viết.
- **Mức trang trọng của review nên tương ứng với rủi ro** — từ deskcheck tới formal inspection.
- **Phát tài liệu cho từng người đọc riêng KHÔNG tương đương một buổi review nhóm** — nhập nhằng chỉ lộ ra khi mọi người nói ra cách hiểu của mình.
- Trong inspection, **tác giả không được làm reader**, vì diễn giải lại của reader chính là thứ bộc lộ nhập nhằng.
- **Phần lớn lỗi được tìm thấy trong bước CHUẨN BỊ, không phải trong buổi họp** — không chuẩn bị thì hoãn họp.
- **Tìm lỗi, không sửa lỗi**; **đánh giá sản phẩm, không đánh giá con người**; **tối đa 2 giờ mỗi buổi**.
- **Tester là nhóm bị bỏ sót nhiều nhất và có giá trị nhất** trong review yêu cầu.
- Tốc độ review hiệu quả chỉ khoảng **5 tới 10 trang mỗi giờ**; nhóm hiệu quả là **4 tới 7 người**.
- **Kết quả review không bao giờ được dùng để đánh giá hiệu suất cá nhân** — làm vậy sẽ giết chết thực hành.
- **Viết test case từ yêu cầu trước khi viết mã** bộc lộ ngay yêu cầu không kiểm chứng được, bị gộp, hoặc thiếu thông tin.
- **Acceptance criteria phải phủ cả điều kiện ngoại lệ**, không chỉ đường đi hạnh phúc.
- **Rào cản lớn nhất của tái sử dụng là không tìm được** — cần kho lưu trữ tìm kiếm được.
- **Định nghĩa dữ liệu và business rule có giá trị tái sử dụng cao nhất**, và nên sống ở cấp doanh nghiệp.
- **Mọi yêu cầu tái sử dụng phải được review trong bối cảnh mới** — sao chép máy móc đưa vào lỗi tinh vi.
- **Requirements pattern cho bạn danh sách câu hỏi cần hỏi**, biến kinh nghiệm cá nhân thành tài sản tổ chức.
- **Ước tính không đi kèm baseline yêu cầu là lời hứa không có cơ sở.**
- Trong **cone of uncertainty**, ước tính ban đầu có thể sai lệch **4 lần theo cả hai chiều**.
- **Gold plating tiêu tốn tài nguyên vĩnh viễn** — tính năng không ai yêu cầu vẫn phải bảo trì mãi mãi.
- **Test hệ thống phải suy ra từ yêu cầu, không phải từ mã** — nếu không bạn không thể phát hiện chức năng bị bỏ sót.
- Đo tiến độ bằng **số yêu cầu đã hiện thực, kiểm thử VÀ chấp nhận** — không phải bằng phần trăm cảm tính.
- **Nếu tốc độ thay đổi yêu cầu không giảm dần theo thời gian, dự án đang gặp rắc rối nghiêm trọng.**

## Tóm tắt

- **Thẩm định bảo đảm yêu cầu mô tả đúng thứ cần xây**, qua ba kỹ thuật chính: review, prototyping và kiểm thử dựa trên yêu cầu.
- **Formal inspection là kỹ thuật đảm bảo chất lượng hiệu quả nhất từng được đo lường**, với điều kiện người tham dự chuẩn bị trước và tập trung vào tìm lỗi.
- **Xây văn hoá an toàn cho review** — tách hoàn toàn khỏi đánh giá hiệu suất cá nhân.
- **Tái sử dụng yêu cầu tiết kiệm thời gian và nâng chất lượng**, nhưng đòi hỏi kho lưu trữ tìm kiếm được, người sở hữu, và kỷ luật review lại trong bối cảnh mới.
- **Requirements pattern tái sử dụng cách tư duy**, không chỉ câu chữ.
- **Yêu cầu là nền tảng của ước tính, thiết kế, viết mã, kiểm thử, đo tiến độ và quản lý phạm vi** — chúng không phải một giai đoạn bạn đi qua rồi bỏ lại.
