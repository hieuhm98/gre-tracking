# Tài liệu SRS & viết yêu cầu xuất sắc

## 1. Vì sao cần tài liệu & giới hạn của document

> **Nguyên tắc cốt lõi của requirements development là GIAO TIẾP RÕ RÀNG VÀ HIỆU QUẢ** — từ người có nhu cầu tới người hình dung ra giải pháp, rồi tới người hiện thực và kiểm chứng giải pháp đó.

Kết quả của requirements development là một **thoả thuận được ghi lại** giữa các stakeholder về sản phẩm sẽ được xây. Ghi lại yêu cầu một cách có tổ chức, để các stakeholder chính review được, giúp bảo đảm họ **biết mình đang đồng ý với điều gì**.

### Tài liệu truyền thống có nhiều hạn chế

- Khó lưu **thuộc tính mô tả** kèm theo mỗi yêu cầu.
- **Quản lý thay đổi vụng về.**
- Khó **giữ lại các phiên bản lịch sử** của yêu cầu.
- Khó **tách ra tập con** yêu cầu phân bổ cho một iteration cụ thể, hoặc theo dõi những yêu cầu từng được duyệt rồi bị hoãn hay huỷ.
- Khó **truy vết** yêu cầu tới các artifact phát triển khác.
- **Nhân bản** một yêu cầu ở nhiều nơi hợp lý gây ra vấn đề bảo trì.

Các lựa chọn thay thế: **bảng tính** (có nhiều hạn chế tương tự), **wiki**, **cơ sở dữ liệu**, hoặc **requirements management tool**. Hãy coi chúng là những **container** khác nhau chứa cùng loại thông tin. Dù dùng dạng nào, bạn vẫn cần **cùng những loại thông tin** đó — và template SRS là lời nhắc hữu ích về những gì cần thu thập.

### Có nên viết tài liệu không?

Không phải ai cũng đồng ý rằng viết tài liệu yêu cầu là đáng thời gian. Với **dự án thăm dò hoặc biến động cao**, nơi bạn chưa biết sẽ đi tới giải pháp nào, việc chạy theo mọi thay đổi chi tiết mang lại ít giá trị.

Tuy nhiên:

> **Chi phí GHI LẠI tri thức là nhỏ so với chi phí THU THẬP tri thức đó, hoặc tái tạo nó ở một thời điểm nào đó trong tương lai.**

Hành động đặc tả và mô hình hoá **buộc người tham gia suy nghĩ thấu đáo** và phát biểu chính xác những điều mà một cuộc trò chuyện miệng có thể để lại mơ hồ.

**Quy tắc quyết định:** Nếu bạn **100% chắc chắn** rằng không stakeholder nào sẽ cần một mẩu thông tin nào đó vượt quá trí nhớ ngắn hạn của chính họ, thì bạn không cần ghi lại. Nếu không, hãy lưu nó vào một **bộ nhớ nhóm**.

> **Bẫy:** Đừng dùng **thần giao cách cảm** làm phương pháp đặc tả yêu cầu. Nó không hiệu quả, dù đôi khi trông có vẻ là nền tảng kỹ thuật của một số dự án phần mềm.

### Ba cách biểu diễn yêu cầu

| Cách | Mô tả | Đánh giá |
|------|-------|----------|
| **Ngôn ngữ tự nhiên có cấu trúc** | Câu chữ được viết cẩn thận, có tổ chức | Thực dụng nhất cho hầu hết dự án |
| **Mô hình trực quan** | Sơ đồ minh hoạ tiến trình biến đổi, trạng thái hệ thống, quan hệ dữ liệu, luồng logic | Bổ sung, không thay thế văn bản |
| **Formal specification** | Ngôn ngữ đặc tả chính xác về mặt toán học | Chặt chẽ nhất, nhưng **ít lập trình viên và càng ít khách hàng** quen thuộc |

Formal specification phù hợp cho hệ thống rủi ro cao — bạn hẳn hy vọng người thiết kế hệ thống điều khiển nhà máy điện hạt nhân dùng phương pháp này. Nhưng phần lớn dự án không đòi hỏi mức hình thức đó.

> **Quan trọng: Progressive refinement of detail.** Trên hầu hết dự án, việc ghim chặt mọi chi tiết yêu cầu từ sớm là **không thực tế và không cần thiết**. Hãy nghĩ theo **lớp**: học đủ để ưu tiên hoá và phân bổ cho các release, rồi chi tiết hoá từng nhóm yêu cầu theo kiểu **just-in-time**.
>
> Và đừng kỳ vọng tài liệu tốt nhất thay thế được **các cuộc trao đổi liên tục** suốt dự án.

---

## 2. SRS: mục đích và người đọc

**Software requirements specification (SRS)** phát biểu các chức năng và năng lực mà hệ thống phần mềm phải cung cấp, các đặc tính của nó, và các ràng buộc nó phải tôn trọng.

Tài liệu này mang nhiều tên khác nhau ở các tổ chức khác nhau — **business requirements document (BRD), functional specification, product specification, system specification** — và các tổ chức **không dùng những thuật ngữ này theo cùng một nghĩa**. Vì *"software requirements specification"* là thuật ngữ chuẩn của ngành, đây là tên chúng ta dùng.

**SRS nên chứa:** mô tả đầy đủ **tới mức cần thiết** về hành vi hệ thống trong các điều kiện khác nhau, cùng các phẩm chất mong muốn như hiệu năng, bảo mật và khả năng sử dụng.

**SRS KHÔNG nên chứa:** chi tiết thiết kế, xây dựng, kiểm thử hay quản lý dự án — ngoại trừ các **ràng buộc thiết kế và hiện thực đã biết**.

### Ai đọc SRS

| Người đọc | Họ cần gì |
|-----------|-----------|
| Khách hàng, marketing, sales | Biết sản phẩm nào sẽ được giao |
| Project manager | Ước lượng lịch trình, công sức và nguồn lực |
| Đội phát triển | Biết phải xây gì |
| Tester | Xây test dựa trên yêu cầu, test plan, test procedure |
| Bảo trì và hỗ trợ | Hiểu từng phần của sản phẩm được kỳ vọng làm gì |
| Người viết tài liệu | Làm user manual và màn hình trợ giúp |
| Đội đào tạo | Xây tài liệu giáo dục |
| Pháp chế | Bảo đảm yêu cầu tuân thủ luật và quy định |
| Nhà thầu phụ | **Bị ràng buộc pháp lý** bởi yêu cầu đã đặc tả |

> **Nếu một năng lực hay phẩm chất mong muốn KHÔNG xuất hiện ở đâu đó trong thoả thuận yêu cầu, thì không ai nên kỳ vọng nó xuất hiện trong sản phẩm.**

**Một tài liệu duy nhất thường không đáp ứng được mọi đối tượng.** Có người chỉ cần biết business objective; có người chỉ muốn bức tranh tổng thể; có người chỉ cần góc nhìn người dùng; có người cần toàn bộ chi tiết. Đây chính là lý do nên tách thành **vision and scope document**, **user requirements document** và **SRS**. Đừng kỳ vọng mọi đại diện người dùng đọc hết SRS chi tiết, và cũng đừng kỳ vọng lập trình viên học đủ mọi thứ từ một tập use case hay user story.

### Bao nhiêu tài liệu là đủ?

- **Dự án lớn:** thường viết một **system requirements specification**, rồi các **SRS riêng cho phần mềm** (và có thể cả phần cứng). Một dự án điều khiển tiến trình phức tạp với hơn 100 người từng có **khoảng 800 yêu cầu cấp hệ thống**, chia thành **20 dự án con**, mỗi dự án con có SRS riêng với **800 tới 900 yêu cầu** suy ra. Rất nhiều tài liệu — nhưng dự án lớn trở nên **không quản lý nổi** nếu không chia để trị.
- **Thái cực ngược lại:** một công ty gộp mọi thứ vào một tài liệu duy nhất gọi là *"The Spec"* — yêu cầu, ước lượng, kế hoạch dự án, kế hoạch chất lượng, test plan, test. **Quản lý thay đổi và phiên bản trên tài liệu bao trùm như vậy là ác mộng**, và mức thông tin không phù hợp với bất kỳ đối tượng nào.
- **Thái cực thứ ba:** một công ty chuyển sang agile và **ngừng viết mọi tài liệu chính thức**, ghi user story lên giấy nhớ dán tường. Không may, keo dán mất tác dụng dần — vài tháng sau, việc các tờ giấy **rơi lả tả xuống sàn** khi có người đi ngang trở thành chuyện bình thường.
- **Cách trung gian quá đà:** một công ty có dự án chỉ 40–60 trang nhưng vài thành viên muốn chia thành **12 tài liệu riêng biệt** — một SRS cho tiến trình batch, một cho reporting engine, và một cho mỗi báo cáo trong số 10 báo cáo. Bùng nổ tài liệu gây đau đầu vì khó đồng bộ thay đổi và khó bảo đảm đúng người nhận đủ thông tin.

**Giải pháp tốt hơn cho mọi tình huống trên:** lưu yêu cầu trong **requirements management tool**. Khi đó SRS cho bất kỳ phần nào của sản phẩm, hoặc cho một iteration nhất định, chỉ là một **báo cáo sinh ra từ cơ sở dữ liệu** theo tiêu chí truy vấn.

**Về thời điểm:** bạn **không cần** viết SRS cho toàn bộ sản phẩm trước khi bắt đầu phát triển. Nhưng bạn **nên nắm bắt yêu cầu cho mỗi gia số trước khi xây gia số đó**, và mọi dự án nên **baseline một thoả thuận** cho từng tập yêu cầu trước khi hiện thực.

---

## 3. Cấu trúc SRS template

Mọi tổ chức phát triển phần mềm nên **áp dụng một hoặc nhiều template SRS chuẩn**. Nếu tổ chức của bạn làm nhiều loại hoặc kích cỡ dự án khác nhau — ví dụ vừa phát triển hệ thống lớn mới, vừa nâng cấp nhỏ hệ thống hiện có — hãy có **một template cho mỗi lớp dự án chính**.

Cấu trúc một template SRS tiêu biểu:

**1. Introduction** — Purpose (sản phẩm nào, phiên bản nào, đối tượng đọc nào); Document conventions (chuẩn và quy ước trình bày, ý nghĩa của kiểu chữ và ký hiệu); Project scope (mô tả ngắn phần mềm và mục đích, liên hệ tới mục tiêu và chiến lược kinh doanh); References (tài liệu và nguồn được tham chiếu, kèm liên kết nếu chúng nằm ở vị trí bền vững).

**2. Overall description** — Product perspective (bối cảnh và nguồn gốc: thành viên mới của dòng sản phẩm, phiên bản kế tiếp, hay sản phẩm hoàn toàn mới); User classes and characteristics; Operating environment (nền tảng phần cứng, hệ điều hành và phiên bản, vị trí địa lý của người dùng và máy chủ); Design and implementation constraints (kèm **lý do** cho từng ràng buộc); Assumptions and dependencies.

**3. System features** — Đây chỉ là **một** cách tổ chức functional requirement. Các cách khác: theo functional area, process flow, use case, mode of operation, user class, stimulus, response, hoặc **tổ hợp phân cấp** như use case bên trong user class. **Không có lựa chọn duy nhất đúng** — hãy chọn cách giúp người đọc dễ hiểu năng lực dự kiến của sản phẩm nhất. Mỗi feature có mô tả ngắn kèm độ ưu tiên, và danh sách functional requirement, bao gồm cả cách sản phẩm phản hồi **điều kiện lỗi dự kiến cùng dữ liệu và hành động không hợp lệ**.

**4. Data requirements** — Logical data model; Data dictionary (thường nên lưu **tách riêng** để tăng khả năng tái sử dụng); Reports; Data acquisition, integrity, retention and disposal.

**5. External interface requirements** — User interfaces; Software interfaces; Hardware interfaces; Communications interfaces.

**6. Quality attributes** — Usability; Performance; Security; Safety; và các thuộc tính khác. Hãy chỉ rõ **độ ưu tiên tương đối** giữa các thuộc tính, ví dụ dễ dùng quan trọng hơn dễ học, hay bảo mật quan trọng hơn hiệu năng.

**7. Internationalization and localization requirements** — Tiền tệ, định dạng ngày và số, ngôn ngữ và bảng mã ký tự, thứ tự tên và họ, múi giờ, quy định pháp luật quốc tế, khổ giấy, đơn vị đo, điện áp và hình dạng phích cắm.

**8. Other requirements** — Tuân thủ pháp lý và tiêu chuẩn; cài đặt, cấu hình, khởi động và tắt; ghi log, giám sát và audit trail. Thay vì gộp tất cả vào *"Other"*, hãy **thêm mục mới phù hợp** với dự án của bạn.

**Appendix A: Glossary** — Định nghĩa thuật ngữ chuyên ngành, viết tắt và từ viết tắt. Hãy cân nhắc xây **glossary cấp doanh nghiệp** dùng chung nhiều dự án. Lưu ý: **định nghĩa dữ liệu thuộc data dictionary, không thuộc glossary**.

**Appendix B: Analysis models** — Thường **hữu ích hơn** nếu bạn nhúng mô hình vào đúng mục liên quan thay vì gom hết ở cuối.

### Nguyên tắc dùng template

> **Đừng điền template từ trên xuống dưới.** Hãy **điền dần các mục khi bạn tích luỹ thông tin** trong suốt dự án.

**Mục trống là dấu hiệu quý giá.** Nếu tới giữa dự án mà mục *"Business risks"* vẫn rỗng, hãy tự hỏi: dự án thực sự không có rủi ro kinh doanh nào? Chúng ta đã xác định rủi ro nhưng lưu ở nơi khác? Hay chúng ta **chưa từng làm việc với đúng stakeholder** để xác định chúng?

**Nguyên tắc "shrink to fit":** bắt đầu với template phong phú nhiều mục, rồi **rút gọn** cho phù hợp từng tình huống. Nếu một mục không áp dụng, đừng chỉ xoá nó và cũng đừng để trống — cả hai đều khiến người đọc băn khoăn. **Giải pháp tốt nhất là ghi thông điệp tường minh:** *"Không xác định được rủi ro kinh doanh nào."*

**Đừng nhân bản thông tin.** Nếu bạn đã ghi thông tin đó ở nơi khác, hãy **trỏ tới nó** thay vì chép lại vào SRS.

**Nâng cao khả năng đọc:**

- Đánh nhãn và định dạng mục, tiểu mục và từng yêu cầu **nhất quán**.
- Dùng nhấn mạnh trực quan (đậm, gạch chân, nghiêng, màu, phông) **nhất quán và tiết chế**. Nhớ rằng **màu có thể không phân biệt được** với người mù màu hoặc khi in đen trắng.
- Tạo **mục lục** và **đánh số, đặt chú thích cho mọi hình và bảng**, rồi tham chiếu chúng theo số.
- Nếu lưu trong tài liệu, dùng **tính năng cross-reference của trình soạn thảo** thay vì số trang hoặc số mục hard-code.
- Nhờ **biên tập viên có kỹ năng** bảo đảm tài liệu mạch lạc, dùng từ vựng và bố cục nhất quán.
- Dùng **version control** và có **revision history** ghi lại thay đổi, người thực hiện, thời điểm và **lý do**.

---

## 4. Đánh nhãn requirement

> **Mỗi yêu cầu cần một định danh DUY NHẤT và BỀN VỮNG.**

Nó cho phép bạn tham chiếu yêu cầu cụ thể trong change request, lịch sử sửa đổi, cross-reference hoặc traceability matrix. Nó cũng cho phép **tái sử dụng yêu cầu** giữa các dự án, và giúp các thành viên **cộng tác khi thảo luận** — chẳng hạn trong một buổi peer review.

**Danh sách đánh số hay gạch đầu dòng đơn giản là KHÔNG đủ.**

> **Câu chuyện minh hoạ:** Trên một chuyến bay dài, hai người trong ngành phần mềm trò chuyện. Một người rút SRS từ cặp ra. Yêu cầu trong tài liệu được tổ chức phân cấp — nhưng **toàn bộ ở dạng gạch đầu dòng**, có chỗ tới **tám cấp** ký hiệu khác nhau. Chúng dùng các ký hiệu khác nhau, nhưng **không có nhãn nào có ý nghĩa hơn một ký hiệu**. Không thể tham chiếu tới một mục, cũng không thể truy vết nó tới thành phần thiết kế, đoạn mã hay test.

### Bốn phương pháp đánh nhãn

**1. Sequence number** — mỗi yêu cầu có một số thứ tự duy nhất: **UC-9**, **FR-26**. Tiền tố cho biết loại yêu cầu.

- ✅ Đơn giản; số **không được tái sử dụng** khi yêu cầu bị xoá, nên không lo nhầm FR-26 cũ với FR-26 mới; **giữ nguyên định danh** khi bạn di chuyển yêu cầu trong tài liệu.
- ❌ Không thể hiện **nhóm logic hay phân cấp**; số **không hàm ý thứ tự**; nhãn **không gợi ý** yêu cầu nói về gì.
- Công cụ requirements management thường tự gán loại định danh này.

**2. Hierarchical numbering** — quy ước phổ biến nhất. Nếu functional requirement nằm ở mục 3.2 của SRS, chúng đều bắt đầu bằng 3.2; nhiều chữ số hơn nghĩa là chi tiết hơn, nên 3.2.4.3 là con của 3.2.4.

- ✅ Đơn giản, gọn, quen thuộc; trình soạn thảo có thể **tự động đánh số**.
- ❌ Nhãn có thể dài tới **rất nhiều chữ số** ngay cả trong SRS cỡ vừa; nhãn số **không nói gì về ý định** của yêu cầu; và nếu dùng trình soạn thảo, nhãn **không bền vững**: chèn một yêu cầu mới sẽ **tăng số của mọi yêu cầu phía sau** trong mục đó; xoá hoặc di chuyển thì giảm; xoá, chèn, gộp hay di chuyển cả mục sẽ làm **rất nhiều nhãn thay đổi** — phá vỡ mọi tham chiếu tới chúng.

> **Bẫy:** Một BA từng nói hoàn toàn nghiêm túc: *"Chúng tôi không cho phép chèn yêu cầu — nó làm rối việc đánh số."* **Đừng để một thực hành kém hiệu quả cản trở khả năng làm việc hợp lý của bạn.**

**3. Cải tiến lai** — đánh số phân cấp cho các mục lớn, rồi định danh từng functional requirement bằng **mã chữ ngắn cộng số thứ tự**. Ví dụ *"Section 3.5 — Editor Functions"* chứa các yêu cầu **ED-1, ED-2**. Cách này cho một phần phân cấp và tổ chức, giữ nhãn ngắn, có phần ý nghĩa, và **ít phụ thuộc vị trí** hơn.

**4. Hierarchical textual tags** — đánh nhãn bằng **chuỗi chữ có cấu trúc phân cấp**. Yêu cầu *"Hệ thống sẽ hỏi người dùng xác nhận nếu yêu cầu in nhiều hơn 10 bản"* có thể mang nhãn **Print.ConfirmCopies**.

- ✅ **Có cấu trúc, có ý nghĩa**, và **không bị ảnh hưởng** bởi việc thêm, xoá hay di chuyển yêu cầu khác. Cũng phù hợp để đánh nhãn business rule khi bạn quản lý chúng thủ công.
- ❌ Nhãn **dài hơn**, và bạn **phải nghĩ ra tên có nghĩa**; khó **giữ tính duy nhất** khi nhiều người cùng làm việc trên một tập yêu cầu.
- **Đơn giản hoá:** kết hợp tên phân cấp với hậu tố số cho các tập nhỏ: **Product.Cart.01**, **Product.Cart.02**.

### Giải quyết vấn đề quan hệ cha–con

Nhãn chữ phân cấp còn giúp giải quyết một vấn đề khác. Trong tổ chức phân cấp luôn có quan hệ **cha–con** giữa các yêu cầu, và nếu yêu cầu cha được **viết như một functional requirement**, quan hệ giữa con và cha trở nên khó hiểu.

> **Quy ước tốt: viết yêu cầu cha sao cho nó trông giống một TIÊU ĐỀ, một heading, hoặc một tên feature — chứ không giống một functional requirement.** Các yêu cầu con của nó, khi gộp lại, sẽ cung cấp năng lực mà cha mô tả.

Ví dụ: dòng **Product** được viết như một heading, không phải một yêu cầu rời rạc. Functional requirement đầu tiên mang nhãn **Product.Cart**; yêu cầu thứ ba có định danh đầy đủ là **Product.Discount.Error** — được tạo bằng cách **nối nhãn của từng dòng với các nhãn cha phía trên nó**.

---

## 5. Xử lý TBD & giao diện người dùng trong SRS

### TBD

Đôi khi bạn biết mình **thiếu một mẩu thông tin** về một yêu cầu cụ thể. Hãy dùng ký hiệu **TBD (to be determined)** để đánh dấu những khoảng trống tri thức này.

> **Kế hoạch bắt buộc: giải quyết mọi TBD TRƯỚC KHI hiện thực tập yêu cầu đó.**

Mọi bất định còn lại đều **làm tăng rủi ro** lập trình viên hoặc tester mắc lỗi và phải làm lại. Khi gặp TBD, lập trình viên có thể **đoán bừa** — và đôi khi đoán sai — thay vì truy tìm người đã nêu yêu cầu để giải quyết.

Nếu bạn **buộc phải tiếp tục** xây gia số tiếp theo trong khi TBD chưa được giải quyết, hãy chọn một trong hai:

- **Hoãn hiện thực** các yêu cầu chưa rõ.
- **Thiết kế các phần đó sao cho dễ sửa đổi** khi vấn đề được giải quyết.

> **Bẫy:** **TBD sẽ không tự giải quyết chính nó.** Hãy đánh số các TBD, ghi lại **ai chịu trách nhiệm** giải quyết từng vấn đề và **hạn chót**, xem xét trạng thái tại các mốc kiểm tra định kỳ, và theo dõi tới khi đóng.

### Giao diện người dùng trong SRS

Việc đưa thiết kế giao diện vào SRS có **cả lợi và hại**.

**Lợi ích:**

- Khám phá giao diện qua **paper prototype, mock-up, wireframe hoặc công cụ mô phỏng** làm yêu cầu trở nên **cụ thể** với cả người dùng lẫn lập trình viên.
- Nếu người dùng **có kỳ vọng** về hình dạng và cảm nhận của một phần sản phẩm — và sẽ thất vọng nếu kỳ vọng không được đáp ứng — thì **những kỳ vọng đó thuộc về địa hạt yêu cầu**.

**Hại:**

- Ảnh chụp màn hình và kiến trúc giao diện mô tả **giải pháp**, có thể **không thực sự là yêu cầu**.
- Làm tài liệu **lớn hơn**, và tài liệu yêu cầu đồ sộ khiến một số người sợ hãi.
- Trì hoãn việc **baseline SRS** cho tới khi thiết kế giao diện xong sẽ **làm chậm phát triển** và thử thách sự kiên nhẫn của những người vốn đã lo ngại việc tốn quá nhiều thời gian cho yêu cầu.
- Đưa thiết kế vào yêu cầu có thể khiến **thiết kế trực quan dẫn dắt yêu cầu**, thường dẫn tới **khoảng trống chức năng**.
- Người viết yêu cầu **không nhất thiết có đủ năng lực** thiết kế giao diện.
- **Sau khi stakeholder nhìn thấy một giao diện, họ sẽ không thể "nhìn ngược lại".** Hình dung sớm có thể làm rõ yêu cầu, nhưng cũng có thể tạo ra **kháng cự với việc cải thiện giao diện** theo thời gian.

> **Câu chuyện cảnh tỉnh:** Một công ty phát triển Internet liên tục gặp rắc rối vì sau khi ký hợp đồng với khách hàng, đội **đi thẳng vào workshop thiết kế trực quan tám giờ**. Họ **không bao giờ hiểu đủ** người dùng sẽ làm được gì trên website, nên tốn rất nhiều thời gian sửa chữa sau khi giao hàng.

**Cách cân bằng hợp lý:**

- **Ảnh chụp màn hình đúng như sẽ hiện thực** phù hợp khi SRS đặc tả **nâng cấp cho hệ thống hiện có** — lập trình viên vốn đã bị ràng buộc bởi thực tại của hệ thống đó.
- Với hệ thống mới, hãy đưa vào **hình ảnh mang tính khái niệm** — gọi là *sketch*, dù được vẽ đẹp tới đâu — và **làm rõ rằng chúng không phải thiết kế cam kết**. Ví dụ, bản phác một hộp thoại phức tạp minh hoạ ý định của một nhóm yêu cầu, nhưng nhà thiết kế trực quan có thể biến nó thành **hộp thoại nhiều tab** để tăng khả năng sử dụng.
- Nếu bạn **thực sự muốn** một chức năng được hiện thực bằng control và bố cục cụ thể, hãy đưa thông tin đó vào SRS như **design constraint** — chỉ cần bảo đảm bạn không áp đặt ràng buộc **không cần thiết, quá sớm, hoặc vì lý do sai**.
- Đội có nhiều màn hình có thể thấy dễ quản lý hơn khi tách thành **user interface specification riêng**, hoặc dùng công cụ thiết kế / prototyping, kết hợp **display-action-response model** để mô tả chi tiết tên phần tử, thuộc tính và hành vi của chúng.

---

## 6. Đặc tả yêu cầu trong agile

Dự án agile tiếp cận đặc tả yêu cầu theo cách khác.

**Điểm khởi đầu:** đội thường bắt đầu bằng cách viết **vừa đủ thông tin cho mỗi user story** để stakeholder hiểu tổng quát nó nói về gì và **ưu tiên hoá nó** so với các story khác. Điều này cho phép bắt đầu lập kế hoạch phân bổ story cho các iteration.

Đội có thể **gộp một nhóm story liên quan** thành một **minimally marketable feature** — phần cần được hiện thực đầy đủ trước khi phát hành để mang lại giá trị khách hàng như kỳ vọng.

**Product backlog:** user story được tích luỹ và ưu tiên hoá vào một backlog **tiến hoá liên tục** suốt dự án. Story lớn không thể hiện thực trong một iteration được **chia nhỏ**, rồi phân bổ cho nhiều iteration.

**Hình thức lưu trữ có thể rất đơn giản:** ghi trên **thẻ index**. Một số đội dùng **story management tool**; số khác **không giữ lại chúng** sau khi hiện thực xong.

**Chi tiết đến từ hội thoại.** Khi vào mỗi iteration, các cuộc trò chuyện giữa product owner, BA, lập trình viên, tester và người dùng sẽ làm rõ chi tiết của từng story được phân bổ. Đây chính là **progressive refinement of detail** — một thực hành tốt cho **mọi** dự án.

**Cách biểu diễn chi tiết:** agile thường thể hiện chúng dưới dạng **user acceptance test** mô tả hệ thống sẽ hành xử ra sao nếu story được hiện thực đúng.

- Test được thực hiện **trong iteration** hiện thực story, và **trong các iteration sau** để kiểm thử hồi quy.
- Test **nên được tự động hoá** để bảo đảm kiểm thử hồi quy nhanh và đầy đủ.
- Test cũng **phải phủ điều kiện ngoại lệ**, không chỉ hành vi mong đợi.

> **Hệ quả cần lưu ý:** Nếu đội **loại bỏ user story gốc** sau khi hiện thực, thì tài liệu bền vững duy nhất của yêu cầu **có khả năng chỉ còn là acceptance test** — nếu chúng được lưu trong một công cụ.

**Yêu cầu phi chức năng trong agile** có thể viết trên thẻ **không phải như user story mà như constraint**. Hoặc đội đặc tả yêu cầu phi chức năng gắn với một story cụ thể dưới dạng **acceptance criteria hoặc test** — ví dụ test bảo mật chứng minh rằng một số người dùng được phép truy cập chức năng trong story đó còn những người khác thì bị chặn.

Đội agile **không bị cấm** dùng các phương pháp biểu diễn khác như **analysis model** hay **data dictionary**. Hãy chọn cách biểu diễn phù hợp và quen thuộc với văn hoá và dự án của bạn.

### Quyết định mức độ hình thức phù hợp

Mỗi đội tự chọn hình thức đặc tả phù hợp nhất. Hãy nhớ **mục tiêu bao trùm**: tích luỹ hiểu biết chung **đủ tốt** để xây phần tiếp theo của sản phẩm ở **mức rủi ro chấp nhận được**.

Mức hình thức và chi tiết phù hợp phụ thuộc năm yếu tố:

- Mức độ mà **giao tiếp trực tiếp, không chính thức, vừa đúng lúc** giữa khách hàng và lập trình viên có thể cung cấp chi tiết cần thiết để hiện thực đúng từng user requirement.
- Mức độ mà các phương pháp giao tiếp không chính thức có thể giữ đội **đồng bộ qua thời gian và không gian**.
- Mức độ **giá trị hoặc bắt buộc** của việc giữ lại tri thức yêu cầu cho **nâng cấp, bảo trì, tái kỹ nghệ, kiểm chứng, yêu cầu pháp lý và kiểm toán, chứng nhận sản phẩm, hoặc thoả mãn hợp đồng** trong tương lai.
- Mức độ mà **acceptance test** có thể thay thế hiệu quả cho các mô tả về năng lực và hành vi hệ thống mong đợi.
- Mức độ mà **trí nhớ con người** có thể thay thế cho biểu diễn viết ra.

> **Kết luận:** Dù bạn xây loại sản phẩm nào, theo vòng đời nào, hay dùng kỹ thuật elicitation nào, **đặc tả yêu cầu hiệu quả vẫn là chìa khoá thiết yếu của thành công**. Có nhiều cách để đạt được điều đó. Chỉ cần nhớ: khi bạn **không đặc tả yêu cầu chất lượng cao**, phần mềm kết quả giống như một hộp sô-cô-la — **bạn không bao giờ biết mình sẽ nhận được gì**.

---

## 7. Đặc tính của một câu yêu cầu xuất sắc

Cách tốt nhất để biết yêu cầu của bạn có những phẩm chất mong muốn hay không là **để nhiều stakeholder review chúng** — mỗi người sẽ phát hiện loại vấn đề khác nhau.

Trong một thế giới lý tưởng, **mỗi** business, user, functional và nonfunctional requirement đều thể hiện bảy đặc tính sau.

**Complete (đầy đủ)** — Mỗi yêu cầu phải chứa **mọi thông tin cần thiết** để người đọc hiểu nó. Với functional requirement, nghĩa là cung cấp đủ thông tin để lập trình viên hiện thực đúng. Nếu bạn biết mình thiếu thông tin, hãy dùng **TBD** hoặc ghi vào issue-tracking system.

**Correct (đúng)** — Mỗi yêu cầu phải mô tả **chính xác một năng lực đáp ứng nhu cầu** của stakeholder nào đó. Để kiểm tra, bạn phải **đi tới nguồn gốc** của yêu cầu: người dùng đã cung cấp nó, một system requirement cấp trên, một use case, một business rule, hay tài liệu khác. **Một yêu cầu cấp thấp mâu thuẫn với yêu cầu cha của nó là KHÔNG đúng.** Để đánh giá tính đúng đắn của user requirement, **đại diện người dùng hoặc người thay thế gần gũi** phải review chúng.

**Feasible (khả thi)** — Phải có thể hiện thực mỗi yêu cầu **trong phạm vi năng lực và giới hạn đã biết** của hệ thống và môi trường vận hành, đồng thời **trong ràng buộc về thời gian, ngân sách và nhân sự**. Có một lập trình viên tham gia trong quá trình elicitation sẽ cung cấp **kiểm tra thực tế**. Prototype proof-of-concept và phát triển gia tăng là hai cách đánh giá tính khả thi. **Nếu một yêu cầu phải bị cắt vì không khả thi, hãy hiểu tác động của nó lên vision và scope.**

**Necessary (cần thiết)** — Mỗi yêu cầu phải mô tả một năng lực **mang lại giá trị kinh doanh dự kiến**, tạo khác biệt trên thị trường, hoặc **bắt buộc để tuân thủ** tiêu chuẩn, chính sách hay quy định bên ngoài. Mỗi yêu cầu phải **bắt nguồn từ một nguồn có thẩm quyền**. Bạn phải liên hệ được mỗi yêu cầu với **một business objective** cho thấy rõ vì sao nó cần thiết. **Nếu ai đó hỏi vì sao một yêu cầu được đưa vào, phải có câu trả lời tốt.**

**Prioritized (có ưu tiên)** — Gán độ ưu tiên hiện thực cho mỗi functional requirement, user requirement, use case flow hoặc feature. **Nếu mọi yêu cầu đều quan trọng như nhau, project manager không biết cách phản ứng tốt nhất** khi lịch trượt, mất nhân sự, hoặc có yêu cầu mới. Ưu tiên hoá nên là **hoạt động cộng tác** với nhiều góc nhìn stakeholder.

**Unambiguous (không nhập nhằng)** — Ngôn ngữ tự nhiên dễ mắc **hai loại nhập nhằng**:

- Loại **tôi tự phát hiện được**: khi tôi nghĩ ra nhiều hơn một cách diễn giải một yêu cầu.
- Loại **khó bắt hơn nhiều**: khi nhiều người đọc và đưa ra những cách hiểu **khác nhau**, nhưng yêu cầu **có ý nghĩa với từng người**.

**Inspection là cách tốt để phát hiện loại thứ hai.** Một peer review chính thức — khác với việc phát tài liệu cho từng cá nhân tự xem — cho mỗi người cơ hội **so sánh cách hiểu của mình với người khác**. *Comprehensible* (dễ hiểu) liên quan chặt chẽ với *unambiguous*: người đọc phải hiểu được yêu cầu đang nói gì.

> Bạn sẽ **không bao giờ loại bỏ hết** nhập nhằng khỏi yêu cầu — đó là bản chất ngôn ngữ con người. Phần lớn thời gian, người hợp lý vẫn rút ra kết luận đúng từ một yêu cầu hơi mờ. **Nhờ đồng nghiệp review sẽ dọn sạch phần lớn các vấn đề nghiêm trọng.**

**Verifiable (kiểm chứng được)** — Tester có thể nghĩ ra test hoặc cách kiểm chứng để xác định mỗi yêu cầu đã được hiện thực đúng hay chưa? Nếu không, việc quyết định nó có đúng hay không trở thành **vấn đề ý kiến, không phải phân tích khách quan**. Yêu cầu **không đầy đủ, không nhất quán, không khả thi hoặc nhập nhằng cũng đồng thời không kiểm chứng được**. **Hãy mời tester vào các buổi review yêu cầu** để bắt vấn đề sớm.

---

## 8. Đặc tính của một TẬP yêu cầu xuất sắc

Có những câu yêu cầu xuất sắc **là chưa đủ**. Các tập yêu cầu được nhóm thành baseline cho một release hoặc iteration cũng phải thể hiện bốn đặc tính sau — dù chúng được lưu trong SRS, trong công cụ, hay dưới dạng user story và acceptance test.

**Complete** — Không được thiếu yêu cầu hay thông tin cần thiết nào. Thực tế bạn sẽ **không bao giờ ghi lại từng yêu cầu một** cho bất kỳ hệ thống nào; luôn có yêu cầu **được giả định hoặc hàm ý** — nhưng chúng **mang nhiều rủi ro hơn** yêu cầu được phát biểu tường minh. **Yêu cầu thiếu rất khó phát hiện vì chúng không có ở đó!** Bất kỳ đặc tả nào còn chứa **TBD đều là chưa đầy đủ**.

**Consistent (nhất quán)** — Yêu cầu nhất quán **không mâu thuẫn** với yêu cầu khác cùng loại, cũng không mâu thuẫn với business, user hay system requirement cấp cao hơn. **Nếu bạn không giải quyết mâu thuẫn trước khi lao vào xây dựng, lập trình viên sẽ phải tự xử lý chúng.** Ghi lại **người khởi xướng** mỗi yêu cầu giúp bạn biết nói chuyện với ai khi phát hiện xung đột. Lưu ý: **rất khó phát hiện thiếu nhất quán khi thông tin liên quan nằm ở nhiều nơi khác nhau**, chẳng hạn một phần trong vision and scope document và một phần trong requirements management tool.

**Modifiable (sửa đổi được)** — Bạn luôn có thể viết lại một yêu cầu, nhưng bạn cần **duy trì lịch sử thay đổi** của từng yêu cầu, đặc biệt sau khi baseline. Bạn cũng cần biết về **các kết nối và phụ thuộc** giữa yêu cầu để tìm ra tất cả những cái phải thay đổi cùng nhau.

- Tính sửa đổi được đòi hỏi mỗi yêu cầu **có nhãn duy nhất** và **được diễn đạt tách biệt** với các yêu cầu khác, để bạn tham chiếu tới nó không nhập nhằng.
- **Tránh phát biểu yêu cầu dư thừa.** Lặp lại một yêu cầu ở nhiều nơi mà nó hợp lý về mặt logic khiến **tài liệu dễ đọc hơn nhưng khó bảo trì hơn** — mọi bản sao phải được sửa **cùng lúc** để tránh sinh ra thiếu nhất quán.
- **Cross-reference** các mục liên quan để giữ chúng đồng bộ khi thay đổi.
- **Lưu mỗi yêu cầu MỘT LẦN DUY NHẤT** trong requirements management tool giải quyết được vấn đề dư thừa, đồng thời tạo điều kiện **tái sử dụng yêu cầu chung** giữa nhiều dự án.

**Traceable (truy vết được)** — Một yêu cầu truy vết được có thể liên kết **cả ngược về nguồn gốc lẫn xuôi tới** yêu cầu suy ra, thành phần thiết kế, mã hiện thực nó, và test kiểm chứng nó.

> **Lưu ý quan trọng: bạn KHÔNG cần thực sự định nghĩa hết mọi liên kết truy vết** để một yêu cầu **có được tính chất** khiến nó truy vết được.

Yêu cầu truy vết được có **nhãn định danh duy nhất và bền vững**, và được **viết theo cách có cấu trúc, hạt mịn** — **không phải** dưới dạng đoạn văn tường thuật dài. **Tránh gộp nhiều yêu cầu vào một phát biểu**, vì các yêu cầu khác nhau có thể truy vết tới **những thành phần phát triển khác nhau**.

> Bạn sẽ **không bao giờ tạo ra một đặc tả hoàn hảo** trong đó mọi yêu cầu thể hiện đủ mọi thuộc tính lý tưởng. Nhưng nếu bạn **ghi nhớ những đặc tính này** khi viết và review, bạn sẽ tạo ra **đặc tả tốt hơn và phần mềm tốt hơn**.

---

## 9. Phong cách viết

Cách học tốt nhất là **kinh nghiệm** và **phản hồi từ người nhận yêu cầu của bạn**. Nhận phản hồi mang tính xây dựng từ đồng nghiệp tinh mắt là **sự trợ giúp lớn** — đây chính là lý do peer review quan trọng đến vậy. Để bắt đầu, hãy **kết đôi với một BA khác** và trao đổi yêu cầu để review lẫn nhau.

> Khi nói *"viết yêu cầu"*, người ta lập tức nghĩ tới việc viết bằng ngôn ngữ tự nhiên. Hãy **dịch cụm từ đó trong đầu thành "biểu diễn tri thức yêu cầu"**. Trong nhiều trường hợp, **kỹ thuật biểu diễn thay thế trình bày thông tin hiệu quả hơn văn bản thuần**.

**Hai mục tiêu quan trọng của việc viết yêu cầu:**

1. **Bất kỳ ai đọc yêu cầu cũng đi tới cùng một cách hiểu** như mọi người đọc khác.
2. **Cách hiểu của mỗi người đọc khớp với điều tác giả muốn truyền đạt.**

Hai kết quả này **quan trọng hơn** sự thuần khiết về văn phong hay việc tuân thủ giáo điều một quy tắc tuỳ ý nào đó.

### Góc nhìn hệ thống hay góc nhìn người dùng

Bạn có thể viết functional requirement từ **góc nhìn hệ thống làm gì** hoặc **góc nhìn người dùng làm được gì**. Vì giao tiếp hiệu quả là mục tiêu bao trùm, **hoàn toàn ổn khi trộn lẫn hai phong cách** — hãy diễn đạt mỗi yêu cầu theo cách nào rõ ràng hơn.

**Mẫu theo góc nhìn hệ thống** (từ Easy Approach to Requirements Syntax — EARS):

> *[điều kiện tiên quyết tuỳ chọn] [sự kiện kích hoạt tuỳ chọn]* **the system shall** *[phản hồi hệ thống mong đợi]*

Ví dụ: *"Nếu hoá chất được yêu cầu có trong kho, hệ thống shall hiển thị danh sách mọi bình chứa hoá chất đó hiện có trong kho."*

**Có nên giữ cụm "the system shall"?** Một số người viết bỏ nó đi, lập luận rằng vì yêu cầu vốn mô tả hành vi hệ thống nên không cần lặp lại. Trong ví dụ trên, việc bỏ đi không gây nhầm lẫn. **Nhưng đôi khi diễn đạt tự nhiên hơn khi viết theo hành động của người dùng.** Giữ lại *"shall"* và viết ở **thể chủ động** làm rõ **thực thể nào đang thực hiện** hành động được mô tả.

**Mẫu theo góc nhìn người dùng:**

> *The [tên user class hoặc actor]* **shall be able to** *[làm gì] [với đối tượng nào] [điều kiện, thời gian phản hồi, hoặc phát biểu chất lượng]*

Ví dụ: *"Chemist shall be able to đặt lại bất kỳ hoá chất nào anh ta đã đặt trong quá khứ bằng cách truy xuất và chỉnh sửa chi tiết đơn hàng."*

> **Chú ý:** Yêu cầu này dùng **tên user class cụ thể — Chemist —** thay cho từ *"người dùng"* chung chung. **Làm yêu cầu càng tường minh càng giảm khả năng bị hiểu sai.**

### Bốn nguyên tắc phong cách

**1. Đừng viết như văn học hay như bài luận.** Phong cách bạn học ở trường — trình bày ý chính, rồi dữ kiện hỗ trợ, rồi kết luận — **không hiệu quả**. Hãy **điều chỉnh để đặt câu chốt lên TRƯỚC**: phát biểu về nhu cầu hoặc chức năng, theo sau là chi tiết hỗ trợ (rationale, origin, priority, các thuộc tính khác). Cấu trúc này **giúp người chỉ lướt qua tài liệu**, đồng thời vẫn hữu ích cho người đọc kỹ.

**2. Đừng luyện kỹ năng viết sáng tạo trong tài liệu yêu cầu.**

- **Đừng đan xen thể chủ động và bị động** để làm tài liệu thú vị hơn.
- **Đừng dùng nhiều thuật ngữ cho cùng một khái niệm** chỉ để đa dạng: *customer, account, patron, user, client*.
- **Dễ đọc và dễ hiểu là yếu tố thiết yếu; thú vị thì ít quan trọng hơn nhiều.** Nếu bạn không phải người viết có kỹ năng, hãy dự đoán rằng người đọc **có thể không hiểu** điều bạn định truyền đạt.

**3. Rõ ràng và súc tích.**

- Viết **câu hoàn chỉnh**, đúng ngữ pháp, chính tả và dấu câu.
- Giữ **câu và đoạn ngắn gọn, trực tiếp**.
- Dùng **ngôn ngữ đơn giản phù hợp với miền người dùng**, tránh biệt ngữ; định nghĩa thuật ngữ chuyên môn trong **glossary**.
- **Viết súc tích:** cụm *"cần cung cấp cho người dùng khả năng để"* có thể rút gọn thành *"shall"*.
- Với mỗi mẩu thông tin, hãy tự hỏi: ***"Người đọc sẽ làm gì với thông tin này?"*** Nếu bạn không chắc stakeholder nào thấy nó có giá trị, có lẽ bạn không cần nó.
- **Rõ ràng quan trọng hơn súc tích.** Yêu cầu được phát biểu chính xác tăng khả năng người ta nhận được đúng điều họ kỳ vọng; yêu cầu ít cụ thể cho lập trình viên nhiều không gian diễn giải hơn. Đôi khi sự thiếu cụ thể đó không sao, nhưng đôi khi nó dẫn tới **biến thiên quá lớn trong kết quả**. Nếu lập trình viên review SRS mà không rõ ý định khách hàng, hãy cân nhắc **bổ sung thông tin**.

**4. Từ khoá "shall".** Quy ước truyền thống là dùng **shall** để mô tả năng lực hệ thống. Một số người phản đối: *"Người ta đâu nói chuyện như thế."* **Thì đã sao?** Câu *"shall"* thể hiện rõ ràng chức năng mong muốn, nhất quán với mục tiêu bao trùm là giao tiếp rõ ràng.

Bạn có thể thích *must*, *needs to* hay từ tương tự — **nhưng hãy NHẤT QUÁN**.

> **Vấn đề nghiêm trọng:** Một số đặc tả chứa **hỗn hợp ngẫu nhiên và gây bối rối** các động từ yêu cầu: *shall, must, may, might, will, would, should, could, needs to, has to, should provide*. Người đọc **không bao giờ biết** liệu có khác biệt ý nghĩa giữa chúng hay không. Sắc thái khác nhau giữa các động từ còn khiến **đội đa văn hoá** cực kỳ khó diễn giải nhất quán.

**Hai quy ước NGUY HIỂM cần tránh:**

- Dùng từ khoá khác nhau để hàm ý **độ ưu tiên**: *shall* = bắt buộc, *should* = mong muốn, *may* = tuỳ chọn. **Rõ ràng hơn là luôn nói *shall* hoặc *must* và gán độ ưu tiên cao/trung/thấp một cách tường minh.** Ngoài ra **độ ưu tiên sẽ thay đổi** khi các iteration tiến triển — đừng gắn chúng vào cách diễn đạt của yêu cầu. Cái *"must"* hôm nay có thể thành cái *"should"* ngày mai.
- Dùng *shall* để chỉ yêu cầu và *will* để chỉ kỳ vọng thiết kế. Quy ước như vậy **có rủi ro là một số người đọc không nắm được sự phân biệt** giữa những từ mà đời thường ta dùng thay thế cho nhau. **Tốt nhất là tránh.**

> **Mẹo hài hước nhưng hữu ích:** Một tư vấn viên đề nghị bạn **thay thế trong đầu mỗi chữ *should* bằng *probably won't***. Yêu cầu kết quả có chấp nhận được không? Nếu không, hãy thay *should* bằng từ chính xác hơn.

**5. Thể chủ động.** Nhiều văn bản kinh doanh và khoa học dùng thể bị động, nhưng **nó không bao giờ rõ ràng và trực tiếp bằng thể chủ động**.

Ví dụ bị động: *"Khi giao hàng nâng cấp sản phẩm, số sê-ri **sẽ được cập nhật** trên dòng hợp đồng."*

Cụm *"sẽ được cập nhật"* cho biết **đối tượng nhận hành động** (số sê-ri) nhưng **không cho biết ai thực hiện** hành động. **Hệ thống tự động cập nhật, hay người dùng phải làm?**

Viết lại ở thể chủ động làm rõ **cả actor lẫn sự kiện kích hoạt**: *"Khi bộ phận Fulfillment xác nhận đã giao hàng nâng cấp sản phẩm, hệ thống shall cập nhật hợp đồng của khách hàng với số sê-ri sản phẩm mới."*

**6. Yêu cầu riêng lẻ.** **Tránh viết đoạn văn tường thuật dài chứa nhiều yêu cầu.** Người đọc không nên phải **mò ra** các yêu cầu riêng lẻ ẩn trong một khối văn bản trôi chảy. Hãy **phân biệt rõ ràng** giữa yêu cầu riêng lẻ và thông tin nền hoặc bối cảnh — thông tin nền có giá trị, nhưng người đọc phải **nhận ra không nhập nhằng** đâu là câu yêu cầu thực sự.

> **Câu chuyện minh hoạ:** Một người từng review một đặc tả yêu cầu lớn viết dưới dạng các đoạn văn dài. Anh có thể đọc hết một trang và hiểu nó, **nhưng phải làm việc rất vất vả để bóc tách ra các yêu cầu riêng lẻ**. Những người đọc khác **rất có thể đi tới kết luận khác nhau** về chính xác những yêu cầu nào đang ẩn trong khối văn bản đó.

**Dấu hiệu nhiều yêu cầu bị gộp:**

- Các từ **and, additionally, also** — không có nghĩa là bạn không được dùng *and*; chỉ cần bảo đảm liên từ đang nối **hai phần của MỘT yêu cầu**, chứ không nối hai yêu cầu riêng biệt. **Nếu bạn sẽ dùng test khác nhau để kiểm chứng hai phần, hãy tách chúng.**
- **Tránh "and/or"** — nó để việc diễn giải cho người đọc. Ví dụ *"Hệ thống phải cho phép tìm theo số đơn hàng, số hoá đơn, và/hoặc số đơn mua của khách hàng"* cho phép người dùng nhập một, hai hoặc ba số cùng lúc trong một lần tìm — **có thể đó không phải điều bạn muốn**.
- Các từ **unless, except, but** cũng cho thấy nhiều yêu cầu. Ví dụ: *"Thẻ tín dụng đã lưu của Buyer sẽ bị tính tiền, **trừ khi** thẻ đã hết hạn."* **Việc không đặc tả điều gì xảy ra khi mệnh đề "trừ khi" là đúng chính là nguồn phổ biến của yêu cầu thiếu.** Hãy tách thành hai yêu cầu mô tả hành vi cho **cả hai điều kiện**: thẻ còn hiệu lực và thẻ đã hết hạn.

---

## 10. Mức chi tiết & kỹ thuật biểu diễn

### Mức chi tiết phù hợp

Một phần quan trọng của phân tích yêu cầu là **phân rã yêu cầu cấp cao thành đủ chi tiết** để làm rõ và hoàn thiện nó. **Không có câu trả lời duy nhất đúng** cho câu hỏi thường gặp *"Yêu cầu nên chi tiết tới mức nào?"*

**Nguyên tắc:** cung cấp đủ cụ thể để **giảm thiểu rủi ro hiểu lầm**, dựa trên kiến thức và kinh nghiệm của đội phát triển. **Càng ít cơ hội thảo luận tiếp diễn về các vấn đề yêu cầu, bạn càng cần ghi lại nhiều chi tiết hơn.**

> **Bài kiểm tra thực dụng:** Nếu lập trình viên có thể nghĩ ra **vài cách khác nhau** để thoả mãn một yêu cầu và **tất cả đều chấp nhận được**, thì mức cụ thể và chi tiết là **vừa đúng**.

| Cần NHIỀU chi tiết hơn khi | Có thể ít chi tiết hơn khi |
|----------------------------|----------------------------|
| Công việc làm cho khách hàng bên ngoài | Công việc làm nội bộ cho chính công ty bạn |
| Phát triển hoặc kiểm thử được thuê ngoài | Khách hàng tham gia sâu rộng |
| Thành viên đội phân tán về địa lý | Lập trình viên có nhiều kinh nghiệm miền |
| System testing sẽ dựa trên yêu cầu | Có tiền lệ sẵn, ví dụ thay thế một ứng dụng cũ |
| Cần ước lượng chính xác | Sẽ dùng giải pháp đóng gói sẵn |
| Cần truy vết yêu cầu | |

### Độ hạt nhất quán

Người viết thường vật lộn để tìm **đúng độ hạt (granularity)**. Bạn **không nhất thiết** phải đặc tả mọi yêu cầu ở cùng mức chi tiết — ví dụ bạn có thể đi sâu hơn ở vùng rủi ro cao. Tuy nhiên, **trong một tập yêu cầu liên quan, nên viết ở độ hạt nhất quán**.

**Hướng dẫn hữu ích: viết các yêu cầu KIỂM CHỨNG ĐƯỢC RIÊNG LẺ.** Số lượng yêu cầu kiểm chứng được thậm chí từng được đề xuất làm **thước đo kích thước sản phẩm phần mềm**. Nếu bạn nghĩ ra được **một số ít test liên quan** để kiểm chứng một yêu cầu, độ hạt của nó có lẽ phù hợp. Nếu bạn hình dung ra **rất nhiều test đa dạng**, có lẽ nhiều yêu cầu đang bị gộp và cần tách ra.

> **Ví dụ về sự chênh lệch nghiêm trọng.** Một SRS chứa hai yêu cầu tách riêng:
>
> 1. *"Hệ thống shall diễn giải tổ hợp phím Ctrl+S là File Save."*
> 2. *"Hệ thống shall diễn giải tổ hợp phím Ctrl+P là File Print."*
>
> Đây là những yêu cầu **rất mịn**, cần rất ít test để kiểm chứng. Bạn có thể hình dung một danh sách dài lê thê những yêu cầu tương tự — tốt hơn nên **biểu diễn dưới dạng BẢNG** liệt kê mọi phím tắt và cách hệ thống diễn giải chúng.
>
> Nhưng cùng SRS đó cũng chứa yêu cầu: *"Sản phẩm shall phản hồi các chỉ thị chỉnh sửa nhập bằng giọng nói."*
>
> Yêu cầu duy nhất này — **trông không lớn hơn hay nhỏ hơn** mọi yêu cầu khác trong SRS — thực chất **bắt buộc phải có cả một hệ thống con nhận dạng giọng nói phức tạp**, gần như một sản phẩm riêng! Kiểm chứng nó trong hệ thống hoạt động có thể cần **hàng trăm test**. Phát biểu như vậy có thể phù hợp ở mức trừu tượng cao của một vision statement hay market requirements document, nhưng **yêu cầu nhận dạng giọng nói rõ ràng đòi hỏi nhiều chi tiết chức năng hơn rất nhiều**.

### Kỹ thuật biểu diễn

**Mắt người đọc sẽ mờ đi** khi đối diện một khối văn bản dày đặc hoặc một danh sách dài các yêu cầu trông giống hệt nhau. Hãy cân nhắc **cách hiệu quả nhất** để truyền đạt từng yêu cầu tới đối tượng dự kiến.

Các lựa chọn thay thế cho ngôn ngữ tự nhiên: **danh sách, bảng, mô hình phân tích trực quan, biểu đồ, công thức toán học, ảnh chụp, đoạn âm thanh, đoạn video**. Chúng thường không thay thế được hoàn toàn yêu cầu viết ra, nhưng là **thông tin bổ sung tuyệt vời** giúp người đọc hiểu sâu hơn.

> **Câu chuyện về sức mạnh của bảng.** Một tập yêu cầu theo mẫu: *"Text Editor shall có khả năng phân tích tài liệu định dạng <format> định nghĩa luật <jurisdiction>."* Có **3 giá trị** cho *format* và **4 giá trị** cho *jurisdiction*, tổng cộng **12 yêu cầu tương tự**.
>
> SRS đó **đúng là có 12 yêu cầu** — nhưng **một tổ hợp bị thiếu và một tổ hợp bị lặp lại**.
>
> Bạn có thể **ngăn loại lỗi này** bằng cách biểu diễn chúng trong một bảng: **gọn hơn và ít nhàm chán hơn** một danh sách yêu cầu. Ô trong bảng chỉ chứa **hậu tố** nối vào định danh của yêu cầu gốc.
>
> Nếu một tổ hợp **không có yêu cầu tương ứng** vì lý do logic nào đó, hãy ghi **N/A (not applicable)** vào ô đó. Cách này **rõ ràng hơn nhiều** so với việc bỏ hẳn tổ hợp không liên quan khỏi danh sách dài rồi để người đọc **băn khoăn** vì sao không có yêu cầu nào cho việc phân tích tài liệu chứa luật lãnh thổ ở định dạng untagged.
>
> **Kỹ thuật này cũng bảo đảm tính đầy đủ** — nếu mọi ô đều có nội dung, bạn biết mình không bỏ sót tổ hợp nào.

---

## 11. Tránh nhập nhằng

> **Chất lượng yêu cầu nằm ở mắt NGƯỜI ĐỌC, không phải ở mắt tác giả.**

BA có thể tin rằng yêu cầu mình viết trong sáng như pha lê, không nhập nhằng. Nhưng **nếu người đọc có câu hỏi, yêu cầu đó cần được làm việc thêm**. **Peer review là cách tốt nhất** để tìm ra những chỗ mà yêu cầu không được mọi đối tượng hiểu rõ.

### Từ ngữ mơ hồ

- **Dùng thuật ngữ nhất quán** và đúng như định nghĩa trong glossary. Cảnh giác với **từ đồng nghĩa và gần đồng nghĩa**. Một dự án từng dùng **bốn thuật ngữ khác nhau** để chỉ **cùng một thứ** trong **cùng một tài liệu**. Hãy chọn một thuật ngữ và dùng nhất quán, đặt các từ đồng nghĩa vào glossary để người quen gọi cách khác vẫn thấy được liên hệ.
- Nếu dùng **đại từ** để chỉ thứ đã nhắc trước đó, hãy bảo đảm **tiền ngữ rõ ràng như pha lê**.
- **Trạng từ đưa vào tính chủ quan và do đó là nhập nhằng.** Tránh các từ như *hợp lý, phù hợp, nói chung, xấp xỉ, thường thì, một cách hệ thống, nhanh chóng* — người đọc sẽ không chắc phải diễn giải chúng thế nào.

**Bài kiểm tra tuyệt vời cho tính nhập nhằng:** hãy nghĩ ra một cách diễn giải **lố bịch nhưng hợp lệ** về mặt câu chữ. Nếu cách diễn giải đó **không ổn với người dùng**, yêu cầu cần được viết lại.

> **Ví dụ kinh điển:** *"Background Task Manager shall cung cấp thông báo trạng thái ở các khoảng thời gian đều đặn không ít hơn mỗi 60 giây."*
>
> - Thông báo trạng thái là gì? Chúng được cung cấp cho người dùng **trong điều kiện nào và theo cách nào**? Nếu hiển thị trên màn hình, chúng **tồn tại bao lâu**? Có ổn không nếu chúng chỉ **loé lên nửa giây**?
> - Khoảng thời gian **hoàn toàn không rõ**, và từ *"mỗi"* càng làm rối vấn đề. Nếu ý là khoảng cách giữa các thông báo **ít nhất 60 giây**, thì việc cung cấp một thông báo mới **mỗi năm một lần** có ổn không? Ngược lại, nếu ý là **tối đa 60 giây** trôi qua giữa các thông báo, thì **một mili-giây** có quá ngắn không?
>
> **Những cách diễn giải cực đoan này có thể nhất quán với yêu cầu gốc, nhưng chắc chắn không phải điều người dùng nghĩ trong đầu.** Vì những vấn đề này, **yêu cầu trên là KHÔNG kiểm chứng được**.

Sau khi lấy thêm thông tin từ khách hàng, yêu cầu có thể được viết lại thành một yêu cầu cha kiểu heading (*"BTM shall hiển thị thông báo trạng thái ở một vùng được chỉ định của giao diện"*) với các yêu cầu con: cập nhật thông báo **mỗi 60 giây cộng trừ 5 giây** sau khi tiến trình nền bắt đầu; thông báo **hiển thị liên tục** trong suốt quá trình xử lý; hiển thị **phần trăm hoàn thành**; hiển thị thông báo **Done** khi xong; và hiển thị thông báo khi tác vụ **bị treo**.

> **Lưu ý quan trọng:** Viết lại một yêu cầu có khiếm khuyết **thường làm nó DÀI HƠN**, vì thông tin vốn đang bị thiếu. Việc tách thành nhiều yêu cầu con là hợp lý vì mỗi cái cần **test riêng** và có thể **truy vết riêng**.

Bản viết lại **không đặc tả cách hiển thị** thông báo, chỉ nói *"ở một vùng được chỉ định của giao diện"*. Cách diễn đạt này **hoãn việc bố trí thông báo sang giai đoạn thiết kế** — điều phù hợp trong nhiều trường hợp. **Nếu bạn chỉ định vị trí hiển thị trong yêu cầu, nó trở thành một design constraint áp lên lập trình viên.** Ràng buộc thiết kế không cần thiết **gây bực bội cho lập trình viên** và có thể dẫn tới thiết kế **không tối ưu**.

**Nhưng đôi khi ràng buộc là hoàn toàn hợp lý.** Nếu bạn đang thêm chức năng này vào một ứng dụng có sẵn vốn đã có thanh trạng thái nơi người dùng quen nhìn thấy thông báo quan trọng, thì việc quy định thông báo phải xuất hiện ở thanh trạng thái là **hợp lý vì tính nhất quán** — bạn cố ý áp đặt ràng buộc thiết kế **vì một lý do rất tốt**.

### Bảng từ ngữ cần tránh

| Từ ngữ mơ hồ | Cách cải thiện |
|--------------|----------------|
| acceptable, adequate | Định nghĩa **điều gì tạo nên tính chấp nhận được** và **hệ thống đánh giá nó ra sao** |
| and/or | Nêu rõ bạn muốn *and*, *or*, hay *bất kỳ tổ hợp nào* |
| as much as practicable | Đừng để lập trình viên tự quyết cái gì khả thi. Hãy đánh dấu **TBD** và **đặt ngày tìm ra câu trả lời** |
| at least, not to exceed | Nêu rõ **giá trị tối thiểu và tối đa** chấp nhận được |
| best, greatest, most | Nêu **mức đạt được mong muốn** và **mức tối thiểu chấp nhận được** |
| between, from X to Y | Định nghĩa **các điểm đầu mút có được bao gồm hay không** |
| depends on | Mô tả **bản chất của sự phụ thuộc** |
| efficient | Định nghĩa hệ thống dùng tài nguyên hiệu quả tới đâu, thực hiện thao tác nhanh tới đâu, hay người dùng hoàn thành tác vụ nhanh tới đâu |
| fast, quick, rapid | Nêu **thời gian tối thiểu chấp nhận được** để hệ thống thực hiện hành động |
| flexible, versatile | Mô tả **những cách cụ thể** hệ thống phải thích ứng với điều kiện thay đổi |
| i.e., e.g. | Nhiều người **không rõ** cái nào nghĩa là *tức là* và cái nào nghĩa là *ví dụ*. **Dùng từ trong ngôn ngữ mẹ đẻ**, không dùng viết tắt Latin gây bối rối |
| improved, better, faster | **Định lượng** mức cải thiện đủ tốt |
| including, and so on, etc., such as | **Liệt kê mọi giá trị hoặc chức năng có thể**, không chỉ ví dụ, hoặc chỉ người đọc tới vị trí danh sách đầy đủ |
| in most cases, usually, almost always | Làm rõ **khi nào điều kiện đó KHÔNG áp dụng** và **điều gì xảy ra khi đó** |
| match, equals, the same | Định nghĩa việc so sánh văn bản có **phân biệt hoa thường** không, và nghĩa là *chứa*, *bắt đầu bằng*, hay *khớp chính xác*. Với số thực, nêu **độ chính xác** |
| maximize, minimize, optimize | Nêu **giá trị tối đa và tối thiểu** chấp nhận được của tham số |
| normally, ideally | Xác định **điều kiện bất thường** và mô tả hệ thống hành xử thế nào trong tình huống đó |
| optionally | Làm rõ đây là **lựa chọn của lập trình viên, của hệ thống, hay của người dùng** |
| probably, ought to, should | **Nó sẽ làm hay không làm?** |
| reasonable, if possible, as applicable | Giải thích **cách lập trình viên hoặc người dùng đưa ra phán đoán này** |
| robust | Định nghĩa hệ thống **xử lý ngoại lệ** và **phản hồi điều kiện vận hành bất ngờ** ra sao |
| seamless, transparent, graceful | *Seamless* hay *graceful* nghĩa là gì **với người dùng**? Dịch kỳ vọng thành **đặc tính sản phẩm quan sát được** |
| several, some, many, multiple | Nêu **bao nhiêu**, hoặc **cận trên và cận dưới** của khoảng |
| shouldn't, won't | Cố gắng **phát biểu yêu cầu ở dạng khẳng định**, mô tả hệ thống **sẽ làm gì** |
| state-of-the-art | Định nghĩa cụm từ này **có nghĩa gì với stakeholder** |
| sufficient | Nêu **bao nhiêu** thì tạo nên sự đầy đủ |
| support, enable | Định nghĩa **chính xác những chức năng nào** hệ thống sẽ thực hiện để tạo nên việc *hỗ trợ* một năng lực |
| user-friendly, simple, easy | Mô tả **đặc tính hệ thống** sẽ thoả mãn nhu cầu sử dụng và kỳ vọng khả dụng của khách hàng |

### Cấu trúc A/B

Nhiều đặc tả chứa biểu thức dạng **"A/B"** — hai thuật ngữ liên quan (hoặc đồng nghĩa, hoặc đối lập) nối bằng dấu gạch chéo. **Chúng thường nhập nhằng.**

> Ví dụ: *"Hệ thống shall cung cấp thu thập thông tin tự động về dữ liệu license key cho một đợt phát hành hàng loạt từ **Delivery/Fulfillment Team**."*
>
> Câu này có thể được diễn giải theo **năm cách khác nhau**:
>
> 1. Tên của đội là **Delivery/Fulfillment**.
> 2. *Delivery* và *fulfillment* là **từ đồng nghĩa**.
> 3. Một số dự án gọi nhóm đó là Delivery Team; số khác gọi là Fulfillment Team.
> 4. **Hoặc** Delivery Team **hoặc** Fulfillment Team có thể thực hiện phát hành hàng loạt — dấu gạch chéo nghĩa là *"hoặc"*.
> 5. Delivery Team **và** Fulfillment Team **cùng nhau** thực hiện — dấu gạch chéo nghĩa là *"và"*.

Đôi khi tác giả dùng cấu trúc A/B **vì chính họ cũng không chắc** mình đang nghĩ gì. Không may, điều đó có nghĩa **mỗi người đọc được quyền diễn giải yêu cầu theo cách họ nghĩ nó nên có nghĩa**. Hãy **quyết định chính xác điều bạn muốn nói và chọn đúng từ**.

### Giá trị biên

Nhiều nhập nhằng xảy ra ở **biên của khoảng số**, cả trong yêu cầu lẫn business rule.

> Ví dụ: *"Đơn xin nghỉ phép **tới 5 ngày** không cần phê duyệt. Đơn **từ 5 tới 10 ngày** cần giám sát viên phê duyệt. Đơn **10 ngày trở lên** cần quản lý phê duyệt."*
>
> Cách diễn đạt này khiến **không rõ đơn đúng 5 ngày và đúng 10 ngày thuộc loại nào**. Nó còn khó hơn nếu có **số lẻ**, chẳng hạn 5,5 ngày.

**Các từ *through*, *inclusive* và *exclusive* làm rõ hoàn toàn** việc điểm đầu mút nằm trong hay ngoài khoảng: *"Đơn **5 ngày trở xuống** không cần phê duyệt. Đơn **dài hơn 5 ngày tới 10 ngày** cần giám sát viên phê duyệt. Đơn **dài hơn 10 ngày** cần quản lý phê duyệt."*

### Yêu cầu phủ định

Người ta đôi khi viết yêu cầu nói hệ thống **sẽ KHÔNG làm gì** thay vì nó sẽ làm gì. **Làm sao bạn hiện thực một yêu cầu kiểu "đừng làm điều này"?**

**Phủ định đôi và phủ định ba đặc biệt khó giải mã.** Ví dụ: *"**Ngăn** người dùng kích hoạt hợp đồng nếu hợp đồng **không** cân bằng."* — chứa hai phủ định (*ngăn* và *không cân bằng*).

Hãy diễn đạt lại theo **nghĩa khẳng định** mô tả rõ hành vi hạn chế: *"Hệ thống shall **chỉ** cho phép người dùng kích hoạt hợp đồng **nếu** hợp đồng đã cân bằng."*

**Đừng dùng yêu cầu phủ định để chỉ ra chức năng nằm ngoài phạm vi.** Hãy đưa hạn chế đó vào mục **Limitations and Exclusions của vision and scope document**. Nếu một yêu cầu cụ thể từng nằm trong phạm vi rồi bị loại bỏ, bạn **không muốn mất dấu nó** — nó có cách quay trở lại. Nếu lưu trong tài liệu, hãy dùng **định dạng gạch ngang** để đánh dấu yêu cầu đã xoá. **Cách tốt nhất là dùng thuộc tính trạng thái yêu cầu** trong requirements management tool.

---

## 12. Tránh thiếu sót & ví dụ trước sau

### Tính đối xứng

**Các thao tác đối xứng là nguồn phổ biến của yêu cầu thiếu.**

> Một reviewer từng tìm thấy yêu cầu: *"Người dùng phải có thể lưu hợp đồng tại bất kỳ điểm nào trong quá trình thiết lập hợp đồng thủ công."*
>
> **Không nơi nào khác** trong đặc tả có yêu cầu cho phép người dùng **truy xuất lại một hợp đồng chưa hoàn tất nhưng đã lưu** để làm tiếp. Có lẽ một yêu cầu đang bị thiếu.
>
> Ngoài ra cũng không rõ hệ thống có nên **kiểm tra tính hợp lệ dữ liệu** trong hợp đồng chưa hoàn tất trước khi lưu hay không. Một yêu cầu hàm ý? **Lập trình viên cần biết.**

### Logic phức tạp

**Biểu thức logic phức hợp thường để lại một số tổ hợp giá trị quyết định không được định nghĩa.**

> Ví dụ: *"Nếu gói Premium **không** được chọn **và** không cung cấp bằng chứng bảo hiểm, khách hàng nên tự động rơi vào gói Basic."*
>
> Yêu cầu này nhắc tới **hai quyết định nhị phân**, và các tổ hợp của chúng dẫn tới **bốn kết quả có thể**. Nhưng đặc tả **chỉ nói về MỘT tổ hợp**. Nó không nói điều gì xảy ra khi:
>
> - Gói Premium **được** chọn và **không** cung cấp bằng chứng bảo hiểm.
> - Gói Premium **được** chọn và **có** cung cấp bằng chứng bảo hiểm.
> - Gói Premium **không** được chọn và **có** cung cấp bằng chứng bảo hiểm.
>
> Người đọc buộc phải kết luận rằng hệ thống **không làm gì cả** với ba điều kiện còn lại. **Điều đó có thể đúng, nhưng tốt hơn là làm cho kết luận đó TƯỜNG MINH thay vì hàm ý.**

**Hãy dùng decision table hoặc decision tree** để biểu diễn logic phức tạp và bảo đảm bạn không bỏ sót biến thể nào.

### Ngoại lệ bị thiếu

**Mỗi yêu cầu mô tả hệ thống hoạt động thế nào khi mọi thứ đều đúng cũng nên có các yêu cầu đi kèm mô tả hệ thống phản hồi ra sao khi ngoại lệ xảy ra.**

> Ví dụ: *"Nếu người dùng đang làm việc trên một file có sẵn và chọn lưu file, hệ thống shall lưu nó với cùng tên."*
>
> Yêu cầu này **một mình không cho biết** hệ thống nên làm gì nếu **không thể lưu file với cùng tên đó**. Yêu cầu thứ hai phù hợp: *"Nếu hệ thống không thể lưu file bằng một tên cụ thể, hệ thống shall cho người dùng lựa chọn lưu nó với tên khác hoặc huỷ thao tác lưu."*

### Ví dụ trước và sau

> **Lưu ý về bối cảnh:** Việc trích các yêu cầu ra khỏi bối cảnh gốc khiến chúng trông **tệ nhất có thể**. Chúng có thể hợp lý hơn nhiều trong môi trường ban đầu. Cũng nên giả định rằng **BA — và mọi thành viên khác — đều tới làm việc mỗi ngày để làm tốt nhất có thể** dựa trên những gì họ biết tại thời điểm đó.

**Ví dụ 1 — thiếu thông tin:**

- ❌ *"Số tài khoản chi phí dự án nên được kiểm tra trực tuyến với danh sách số tài khoản chi phí tổng, **nếu có thể**."*
- **Vấn đề:** Cụm *"nếu có thể"* nhập nhằng. Nó nghĩa là *"nếu khả thi về mặt kỹ thuật"* (câu hỏi cho lập trình viên) hay *"nếu danh sách tổng có thể truy cập lúc chạy"*? Yêu cầu này cũng **không đặc tả điều gì xảy ra** khi việc kiểm tra thành công hoặc thất bại. Ngoài ra nên **tránh từ thiếu chính xác như "should"**.
- **Nguyên tắc:** Nếu bạn không chắc một năng lực được yêu cầu có thể cung cấp hay không, hãy **dùng TBD** để chỉ ra vấn đề chưa được giải quyết. Sau khi điều tra, **hoặc TBD biến mất, hoặc yêu cầu biến mất**.
- ✅ *"Tại thời điểm người yêu cầu nhập số tài khoản chi phí, hệ thống shall hiển thị thông báo lỗi nếu số tài khoản đó không có trong danh sách số tài khoản chi phí tổng của công ty."*

**Ví dụ 2 — usability không đo được:**

- ❌ *"Device tester shall cho phép người dùng **dễ dàng** kết nối thêm các thành phần, **bao gồm** máy phát xung, vôn kế, máy đo điện dung, và thẻ dò tuỳ chỉnh."*
- **Vấn đề:** Từ *"dễ dàng"* hàm ý một yêu cầu khả dụng, nhưng nó **không đo được và không kiểm chứng được**. Từ *"bao gồm"* khiến **không rõ** đây có phải danh sách đầy đủ các thiết bị ngoài cần kết nối hay không — có thể còn nhiều thiết bị khác mà ta không biết.
- ✅ *"Device tester shall tích hợp một cổng USB để cho phép người dùng kết nối bất kỳ thiết bị đo nào có kết nối USB."* và *"Cổng USB shall được lắp ở mặt trước để cho phép một người vận hành đã qua đào tạo kết nối thiết bị đo trong 10 giây hoặc ít hơn."*
- **Lưu ý về vai trò:** Hai yêu cầu này chứa **design constraint có chủ ý**. **BA không nên tự ý viết lại yêu cầu theo cách áp đặt design constraint theo sáng kiến riêng của mình.** Thay vào đó, hãy **phát hiện yêu cầu có khiếm khuyết và thảo luận với stakeholder phù hợp** để làm rõ chúng.

**Ví dụ 3 — đoạn văn chứa nhiều yêu cầu.** Hãy tự luyện tập với đoạn sau, tìm ra các vấn đề:

> *"Hệ thống phải kiểm tra sự thiếu nhất quán trong dữ liệu tài khoản giữa Active Account Log và Account Manager archive. Logic dùng để sinh các so sánh này nên dựa trên logic trong công cụ consistency checker hiện có. Nói cách khác, mã mới không cần được phát triển từ đầu. Lập trình viên nên tận dụng mã consistency checker hiện tại làm nền tảng. Tuy nhiên, phải thêm logic bổ sung để xác định cơ sở dữ liệu nào là nguồn có thẩm quyền. Chức năng mới sẽ bao gồm việc ghi dữ liệu vào bảng tạm để chỉ ra cách/nơi giải quyết sự thiếu nhất quán. Ngoài ra, mã cũng nên kiểm tra các kịch bản ngoại lệ dựa trên cơ sở dữ liệu công cụ bảo mật. Cảnh báo email tự động nên được gửi tới Security Compliance Team bất cứ khi nào phát hiện khác biệt."*

Các vấn đề cần sửa:

- Có **rất nhiều yêu cầu** ở đây, cần được **tách ra riêng lẻ**.
- Nếu logic so sánh **dựa trên** logic của công cụ hiện có, thì **chính xác phần nào của mã có thể tái sử dụng** và nó **cần thay đổi ra sao**? Chức năng nào khác biệt giữa hệ thống mới và công cụ hiện tại? *"Logic bổ sung"* nào phải được thêm vào? Làm sao hệ thống có thể **xác định cơ sở dữ liệu nào là nguồn có thẩm quyền**?
- Chức năng mới *"bao gồm"* việc ghi dữ liệu vào bảng tạm — đó có phải **tất cả**, hay còn chức năng khác được *"bao gồm"* mà không được nêu tường minh?
- Làm rõ *"cách/nơi"* nghĩa là gì khi giải quyết sự thiếu nhất quán — đây chính là **cấu trúc A/B** gây nhập nhằng.
- Từ *"should"* được dùng ở **nhiều chỗ**.
- Quan hệ giữa *"kịch bản ngoại lệ"* và *"khác biệt"* là gì? Nếu chúng đồng nghĩa, **hãy chọn một thuật ngữ và dùng nhất quán**. Một **glossary** có thể làm rõ chúng giống nhau hay liên quan thế nào.
- Hệ thống nên **gửi thông tin gì** cho Security Compliance Team khi phát hiện khác biệt?

> **Bẫy cuối cùng:** Hãy cảnh giác với **analysis paralysis**. Mọi ví dụ *"sau"* ở trên **vẫn có thể được cải thiện thêm**, nhưng bạn **không thể dành vô hạn thời gian** cố hoàn thiện yêu cầu. Hãy nhớ mục tiêu: viết những yêu cầu **đủ tốt để đội của bạn tiếp tục thiết kế và xây dựng ở mức rủi ro chấp nhận được**.

---

## Điểm cốt lõi

- Chi phí **ghi lại** tri thức là nhỏ so với chi phí **thu thập lại** nó sau này.
- **Progressive refinement of detail** — chi tiết hoá theo lớp, just-in-time, thay vì ghim mọi thứ từ sớm.
- SRS **không nên** chứa chi tiết thiết kế, kiểm thử hay quản lý dự án, **ngoại trừ ràng buộc đã biết**.
- **Một tài liệu duy nhất không phục vụ được mọi đối tượng** — đó là lý do tách vision & scope, user requirements và SRS.
- **Đừng điền template từ trên xuống**; **mục trống là dấu hiệu quý** về khoảng trống tri thức.
- Nguyên tắc *"shrink to fit"*: nếu một mục không áp dụng, hãy **ghi thông điệp tường minh**, đừng để trống.
- **Hierarchical numbering không bền vững** khi chèn, xoá hay di chuyển yêu cầu; **textual tags** thì bền.
- **Viết yêu cầu cha như một HEADING**, không như một functional requirement.
- **TBD sẽ không tự giải quyết** — đánh số, gán chủ sở hữu, đặt hạn và theo dõi tới khi đóng.
- Sau khi stakeholder **nhìn thấy** một giao diện, họ **không thể nhìn ngược lại** — hãy cẩn thận khi đưa UI vào SRS.
- Bảy đặc tính của một câu yêu cầu: **complete, correct, feasible, necessary, prioritized, unambiguous, verifiable**.
- Bốn đặc tính của một tập yêu cầu: **complete, consistent, modifiable, traceable**.
- Loại nhập nhằng nguy hiểm nhất là khi **nhiều người hiểu khác nhau mà ai cũng thấy hợp lý** — chỉ inspection mới bắt được.
- **Truy vết được ≠ đã truy vết** — đó là tính chất khiến việc truy vết khả thi.
- Dùng **một** động từ yêu cầu nhất quán; **đừng** dùng shall/should/may để hàm ý độ ưu tiên.
- Thay *should* bằng *probably won't* trong đầu để kiểm tra yêu cầu.
- **Thể chủ động** làm rõ **ai** thực hiện hành động.
- Các từ **unless, except, but** báo hiệu **yêu cầu thiếu** cho điều kiện ngược lại.
- Nếu bạn cần **nhiều test rất đa dạng** để kiểm chứng một yêu cầu, có lẽ nó đang gộp nhiều yêu cầu.
- **Bảng ngăn được lỗi bỏ sót và lặp** trong các tập yêu cầu tương tự; dùng **N/A** cho ô không áp dụng.
- **Chất lượng yêu cầu nằm ở mắt người đọc**, không phải tác giả.
- Cấu trúc **A/B** thường nhập nhằng; **giá trị biên** cần *through, inclusive, exclusive*.
- **Yêu cầu phủ định** nên viết lại thành khẳng định; chức năng ngoài phạm vi thuộc mục **Limitations and Exclusions**.
- **Thao tác đối xứng, logic phức hợp và ngoại lệ** là ba nguồn chính của yêu cầu thiếu.

## Tóm tắt

- Mục tiêu của mọi tài liệu yêu cầu là **giao tiếp rõ ràng và hiệu quả** với nhiều đối tượng khác nhau.
- Chọn **container** phù hợp — tài liệu, bảng tính, wiki hay công cụ — nhưng **loại thông tin cần thu thập là như nhau**.
- **Áp dụng template chuẩn** và điều chỉnh chúng theo loại và kích cỡ dự án của tổ chức bạn.
- **Đánh nhãn duy nhất và bền vững** cho mọi yêu cầu để hỗ trợ truy vết, tái sử dụng và cộng tác.
- Kiểm tra mỗi yêu cầu theo **bảy đặc tính** và mỗi tập yêu cầu theo **bốn đặc tính**.
- Viết **rõ ràng, súc tích, chủ động, riêng lẻ**, ở **độ hạt nhất quán** và **mức chi tiết phù hợp bối cảnh**.
- Chủ động **săn tìm nhập nhằng và thiếu sót** bằng peer review, bảng từ ngữ cần tránh, decision table và kiểm tra tính đối xứng.
