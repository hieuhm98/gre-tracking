# Use Case & User Story

## 1. Use case & user story: hai cách nắm bắt user requirement

Có hai cách tiếp cận cơ bản khi khai thác yêu cầu:

- **Product-centric** — tập trung định nghĩa các feature mà bạn kỳ vọng sẽ dẫn tới thành công trên thị trường. Rủi ro: bạn hiện thực những feature **ít ai dùng**, dù lúc đó chúng có vẻ là ý tưởng hay.
- **User-centric / usage-centric** — tập trung hiểu **mục tiêu người dùng** và suy ra chức năng cần thiết từ đó.

Cả **use case** lẫn **user story** đều chuyển trọng tâm sang **người dùng cần hoàn thành việc gì**, thay vì hỏi họ muốn hệ thống làm gì.

**Use case** mô tả một chuỗi tương tác giữa hệ thống và một actor bên ngoài, dẫn tới việc actor đạt được **một kết quả có giá trị**. Tên use case luôn viết dạng **động từ + tân ngữ**: *Request a Chemical*, *Check in for a Flight*, *Create an Invoice*, *Track a Shipped Package*.

**User story** là *"mô tả ngắn gọn, đơn giản về một chức năng, kể từ góc nhìn của người mong muốn năng lực đó — thường là người dùng hoặc khách hàng của hệ thống"*. Mẫu thông dụng:

> **As a** *<loại người dùng>*, **I want** *<mục tiêu>* **so that** *<lý do>*.

User story ngắn hơn use case nhưng có **hai lợi thế so với chỉ một cái tên use case**: nó nêu rõ **user class** (tương ứng primary actor của use case) và **lý do (rationale)** đằng sau yêu cầu.

| | Use case | User story |
|---|----------|------------|
| Bước tiếp theo | BA làm việc với người dùng để hiểu **dialog** giữa họ và hệ thống, điền vào template | Story là **chỗ giữ chỗ cho các cuộc trò chuyện** sẽ diễn ra vừa đúng lúc (just-in-time) |
| Đầu ra chính | **Functional requirements** + tests | **Acceptance tests** mô tả *conditions of satisfaction* |
| Ưu điểm | Có **cấu trúc và ngữ cảnh**; template nhắc bạn khám phá đủ mọi khía cạnh | **Đơn giản và súc tích** |
| Nhược điểm | Nặng nề hơn nếu viết quá chi tiết | Thiếu cấu trúc; **dễ bỏ sót** acceptance test nếu người viết thiếu kinh nghiệm |

Use case cho phép bạn soi từng phần của template — flows, preconditions, postconditions — để tìm yêu cầu chức năng và phi chức năng liên quan. Một tập user story rời rạc **không tái tạo được** sự chặt chẽ đó. Ví dụ, phân tích use case có thể cho thấy **nhiều use case chia sẻ cùng một loại ngoại lệ**, gợi ý một chiến lược xử lý lỗi thống nhất cho toàn ứng dụng — điều rất khó nhận ra từ một đống user story.

> **Quan trọng:** Use case và user story hoạt động tốt cho **ứng dụng nghiệp vụ, website, kiosk** và hệ thống điều khiển thiết bị. Chúng **KHÔNG đủ** cho: tiến trình batch, hệ thống tính toán nặng, business analytics, data warehousing — nơi độ phức tạp nằm ở **tính toán và dữ liệu**, không nằm ở tương tác người–hệ thống.

**Ví dụ kinh điển về giới hạn: máy rửa xe tự động.** Người lái xe chỉ có **một mục tiêu** — rửa xe — cộng vài tuỳ chọn. Nhưng bản thân máy rửa xe thì có rất nhiều việc diễn ra: cơ cấu kéo xe, hàng loạt mô-tơ, bơm, van, công tắc, đèn báo, bộ đếm giờ và cảm biến. Còn phải lo cả chức năng chẩn đoán (báo hết dung dịch), phát hiện lỗi và yêu cầu an toàn: *điều gì xảy ra nếu cơ cấu kéo hỏng khi xe đang trong đường hầm?* Với những hệ thống như vậy, kỹ thuật phù hợp là **liệt kê external event và system response**.

---

## 2. Actor & use case diagram

**Actor** là một **người**, hoặc đôi khi là một hệ thống phần mềm hay thiết bị phần cứng, tương tác với hệ thống để thực hiện use case.

Câu hỏi giúp xác định actor:

- **Ai (hoặc cái gì) được thông báo** khi có sự việc xảy ra trong hệ thống?
- **Ai (hoặc cái gì) cung cấp** thông tin hoặc dịch vụ cho hệ thống?
- **Ai (hoặc cái gì) giúp** hệ thống phản hồi và hoàn tất một tác vụ?

### Phân biệt user và actor

Đây là điểm hay gây nhầm lẫn. Hãy hình dung một người dùng có **một bộ mũ**, mỗi chiếc mũ ghi tên một actor mà hệ thống nhận biết. Khi muốn làm một việc, người dùng **đội chiếc mũ tương ứng**, và hệ thống nhìn nhận anh ta là actor đó.

Ví dụ: Chemical Tracking System có actor tên **Requester**. Không có user class nào tên Requester — **cả chemist lẫn nhân viên kho hoá chất đều có thể yêu cầu hoá chất**, nên thành viên của cả hai user class đều có thể đóng vai Requester.

> **Tóm lại: user là con người thật; actor là sự trừu tượng hoá.**

**Primary actor** khởi tạo use case và nhận giá trị chính từ nó. **Secondary actor** tham gia vào việc thực thi thành công use case — thường là các hệ thống phần mềm khác hoạt động ở hậu trường. Ví dụ Training Database là secondary actor khi Requester yêu cầu một hoá chất nguy hiểm cần kiểm tra hồ sơ đào tạo an toàn.

### Use case diagram

**Use case diagram** biểu diễn user requirement ở mức cao, dùng ký hiệu UML:

- **Khung hộp** thể hiện ranh giới hệ thống.
- **Hình que (stick figure)** là actor.
- **Hình bầu dục (oval)** là use case.
- **Mũi tên từ actor tới use case**: actor đó là primary actor.
- **Mũi tên từ use case tới actor**: đó là secondary actor.

**So sánh với context diagram:** cả hai đều xác định ranh giới giữa bên trong và bên ngoài hệ thống. Nhưng:

| | Context diagram | Use case diagram |
|---|-----------------|------------------|
| Bên trong hệ thống | **Không nhìn thấy gì** | Nhìn thấy các **use case** |
| Ý nghĩa mũi tên | **Luồng** dữ liệu, tín hiệu điều khiển hoặc vật chất | Chỉ là **kết nối** giữa actor và use case họ tham gia, **không phải luồng** |

> Mọi người đọc mô hình đều phải hiểu **nhất quán** về ký hiệu bạn dùng — đây là nguyên tắc áp dụng cho mọi hình thức biểu diễn yêu cầu.

---

## 3. Các thành phần của use case & template

Các thành phần **thiết yếu** của một use case:

- **Định danh duy nhất** và **tên súc tích** nêu rõ mục tiêu người dùng.
- **Mô tả ngắn** giải thích mục đích của use case.
- **Trigger** — điều kiện khởi tạo việc thực thi use case.
- **Không hoặc nhiều precondition** phải được thoả mãn trước khi use case bắt đầu.
- **Một hoặc nhiều postcondition** mô tả trạng thái hệ thống sau khi use case hoàn tất thành công.
- **Danh sách bước được đánh số** thể hiện chuỗi tương tác giữa actor và hệ thống — một **dialog** dẫn từ precondition tới postcondition.

Template đầy đủ còn có: primary actor, secondary actor, alternative flows, exceptions, priority, frequency of use, business rules liên quan, other information, và assumptions.

### Quy ước đánh nhãn

Use case chứa nhiều mẩu thông tin nhỏ. Một quy ước đơn giản giúp giữ chúng rành mạch:

- Mỗi use case có số thứ tự và tên có nghĩa: **UC-4 Request a Chemical**.
- **Normal flow** của use case số 4 là **4.0**.
- **Alternative flow** tăng phần sau dấu chấm: **4.1**, **4.2**…
- **Exception** trên normal flow: **4.0.E1**, **4.0.E2**…
- Exception thứ hai trên alternative flow thứ nhất: **4.1.E2**.

### Mức chi tiết: casual vs fully dressed

**Casual use case** chỉ là một đoạn văn tường thuật về mục tiêu người dùng và tương tác — có thể chỉ là phần *Description*. **Fully dressed use case** điền đầy đủ template. Bạn hoàn toàn có thể làm bất cứ mức nào ở giữa, và **không cần** mọi use case đều chi tiết như nhau.

Fully dressed use case có giá trị khi:

- Đại diện người dùng **không gắn bó chặt chẽ** với đội phát triển suốt dự án.
- Ứng dụng **phức tạp** và lỗi hệ thống mang **rủi ro cao**.
- Use case mô tả yêu cầu **mới lạ** mà lập trình viên chưa quen.
- Use case là **mức chi tiết nhất** mà lập trình viên sẽ nhận được.
- Bạn định xây **test case toàn diện** dựa trên user requirement.
- Các đội ở xa nhau cần một **bộ nhớ nhóm chung, chi tiết**.

> **Đừng giáo điều về mức chi tiết.** Hãy nhớ mục tiêu: hiểu mục tiêu người dùng **đủ tốt để lập trình viên tiếp tục ở mức rủi ro phải làm lại thấp**.

---

## 4. Normal flow, alternative flow & exception

Một use case là **tập hợp các usage scenario có liên quan**; một scenario là **một thể hiện cụ thể** của use case.

**Normal flow** (còn gọi main flow, basic flow, primary scenario, main success scenario, sunny-day scenario, happy path) là chuỗi mặc định các bước dẫn tới thành công. Nó được viết dạng **danh sách đánh số**, chỉ rõ thực thể nào — actor hay hệ thống — thực hiện từng bước.

**Alternative flow** (secondary scenario) cũng mang lại **cùng kết quả nghiệp vụ**, nhưng thể hiện một **biến thể ít gặp hơn hoặc ưu tiên thấp hơn** về cách thực hiện tác vụ. Nó **rẽ nhánh** từ normal flow tại một điểm quyết định, và có thể nhập lại normal flow về sau hoặc không.

Dấu hiệu nhận biết trong lời người dùng:

- *"Mặc định nên là…"* → đang mô tả **normal flow**.
- *"Người dùng cũng phải có thể yêu cầu hoá chất từ nhà cung cấp"* → gợi ý một **alternative flow**.

**Exception** là điều kiện có khả năng **ngăn use case thành công**. Exception mô tả các điều kiện lỗi được dự đoán trước và cách xử lý chúng. Đôi khi người dùng có thể phục hồi (nhập lại dữ liệu sai); đôi khi use case buộc phải kết thúc mà không đạt được điều kiện thành công.

> **Nếu bạn không đặc tả cách xử lý ngoại lệ, chỉ có hai kết cục:**
> 1. Mỗi lập trình viên **tự đoán** cách xử lý ngoại lệ mình thấy, dẫn tới xử lý lỗi **không nhất quán** khắp ứng dụng và phần mềm kém bền vững.
> 2. Hệ thống **sập** khi người dùng gặp điều kiện lỗi, vì không ai nghĩ tới nó.
>
> Có thể chắc chắn rằng *"hệ thống sập"* không nằm trong danh sách yêu cầu của người dùng.

**Lỗi ảnh hưởng nhiều use case.** Một số điều kiện lỗi ảnh hưởng nhiều use case hoặc nhiều bước: mất kết nối mạng, lỗi cơ sở dữ liệu giữa chừng, kẹt giấy máy in. Hãy xử lý chúng như **functional requirement bổ sung**, thay vì lặp lại thành exception cho mọi use case bị ảnh hưởng. Mục tiêu không phải nhồi mọi chức năng đã biết vào use case.

**Bạn không nhất thiết hiện thực mọi alternative flow** đã xác định — có thể hoãn một số sang release sau. **Nhưng bạn PHẢI hiện thực các exception có thể ngăn những flow bạn đã chọn làm.** Lập trình viên có kinh nghiệm đều biết xử lý ngoại lệ chiếm phần lớn công sức viết mã. **Ngoại lệ bị bỏ sót là nguồn phổ biến của yêu cầu thiếu.**

Với user story, ngoại lệ được xử lý qua **acceptance test**. Ví dụ với story *"là chemist, tôi muốn yêu cầu hoá chất từ nhà cung cấp"*, cuộc trò chuyện có thể nảy ra câu hỏi *"Nếu hoá chất đó không có sẵn thương mại từ bất kỳ nhà cung cấp nào thì sao?"* — dẫn tới acceptance test tương ứng.

Khi use case có logic phức tạp, **flowchart** hoặc **UML activity diagram** là cách trực quan tốt để thể hiện điểm quyết định và điều kiện gây rẽ nhánh.

> **Cạm bẫy: use case quá phức tạp.** Một use case từng có **bốn trang dày đặc** các bước dialog, đầy logic lồng nhau và điều kiện rẽ nhánh — không thể hiểu nổi. Bạn không kiểm soát được độ phức tạp của nghiệp vụ, nhưng **kiểm soát được cách biểu diễn nó**. Hãy chọn **một** đường thành công làm normal flow, dùng alternative flow cho các nhánh khác dẫn tới thành công, và exception cho các nhánh dẫn tới thất bại. Bạn có thể có nhiều nhánh, nhưng mỗi nhánh sẽ ngắn và dễ hiểu. Nếu một flow vượt **10 đến 15 bước**, hãy kiểm tra xem nó có thực sự chỉ mô tả một scenario duy nhất không.

---

## 5. Precondition & postcondition

**Precondition** định nghĩa các điều kiện tiên quyết phải được thoả mãn **trước khi** hệ thống có thể bắt đầu thực thi use case. Hệ thống phải **kiểm tra được** mọi precondition.

Điểm tinh tế: precondition có thể mô tả **trạng thái hệ thống** (để rút tiền từ ATM, máy ATM phải có tiền), nhưng **không** mô tả **ý định của người dùng** (*"tôi cần tiền mặt"*).

**Trigger event KHÔNG phải là một precondition.** Trình tự đúng là: hệ thống phát hiện trigger event cho thấy người dùng muốn thực hiện use case, rồi tự nhủ *"chờ chút để tôi kiểm tra các precondition"*. Nếu mọi precondition được thoả mãn, hệ thống bắt đầu; nếu không, hệ thống không thể bắt đầu.

> Kiểm tra precondition giúp **ngăn lỗi** xảy ra. Nếu ATM hết tiền, nó **không nên** cho phép người dùng bắt đầu giao dịch rút tiền. Đây là cách làm ứng dụng bền vững hơn.

Người dùng **thường không biết** hết mọi precondition của use case, nên BA có thể cần lấy thông tin từ nguồn khác.

**Postcondition** mô tả trạng thái hệ thống sau khi use case thực thi thành công. Nó có thể là:

- Điều gì đó **quan sát được với người dùng** (hệ thống hiển thị số dư tài khoản).
- **Kết quả vật lý** (ATM đã nhả tiền và in biên lai).
- **Thay đổi trạng thái nội bộ** (tài khoản đã bị trừ đúng số tiền rút, cộng phí giao dịch).

Nhiều postcondition hiển nhiên với người dùng vì chúng phản ánh kết quả mang lại giá trị. Nhưng **không người dùng nào nói với BA rằng hệ thống nên giảm lượng tiền mặt còn lại trong ATM** đúng bằng số vừa rút. Người dùng không biết và không quan tâm tới các chi tiết nội bộ đó — nhưng **lập trình viên và tester cần biết**. BA phải khám phá chúng, có thể qua subject matter expert, và ghi lại như postcondition bổ sung.

### Nối chuỗi use case

Trong nhiều ứng dụng, người dùng có thể **nối nhiều use case** thành một tác vụ lớn hơn. Với website thương mại điện tử: *Search Catalog*, *Add Item to Shopping Cart*, *Pay for Items in Shopping Cart*. Nếu mỗi hoạt động có thể thực hiện **độc lập**, chúng là các use case riêng. Nhưng bạn cũng có thể thực hiện cả ba tuần tự thành một use case lớn gọi là *Buy Product*.

> **Để chuỗi này hoạt động: postcondition của use case này phải THOẢ MÃN precondition của use case kế tiếp.**

Tương tự, trong ứng dụng xử lý giao dịch như ATM, mỗi use case phải để hệ thống ở trạng thái cho phép **giao dịch tiếp theo bắt đầu**.

### Kiểm tra ranh giới

Khi review một use case flow, hãy kiểm tra rằng precondition và postcondition **đóng khung nó đúng cách**. Một reviewer từng phát hiện một use case có normal flow **tám bước**, nhưng postcondition đã được thoả mãn ngay sau **bước 5** — nghĩa là bước 6, 7, 8 là **không cần thiết**, nằm ngoài ranh giới của use case. Tương tự, precondition phải được thoả mãn **trước khi** bắt đầu bước 1.

---

## 6. Extend, include & mối quan hệ giữa các use case

Use case diagram có thể thể hiện hai loại quan hệ giữa các use case.

### Extend

Quan hệ **extend** cho thấy một use case độc lập **mở rộng** normal flow thành một alternative flow.

Ví dụ: normal flow của *Request a Chemical* là yêu cầu hoá chất từ kho; alternative flow là yêu cầu từ nhà cung cấp. Buyer đã có sẵn use case độc lập *Search Vendor Catalogs*. Nếu bạn muốn Requester cũng chạy được use case đó như một tuỳ chọn trong quá trình xử lý alternative flow, use case diagram thể hiện điều này bằng quan hệ **extend**.

### Include

Đôi khi nhiều use case **chia sẻ một tập bước chung**. Để tránh lặp lại các bước đó trong từng use case, bạn định nghĩa một use case riêng chứa phần chức năng chung, và các use case khác **include** use case con đó. Cơ chế này tương tự **gọi một subroutine dùng chung** trong lập trình.

Ví dụ trong phần mềm kế toán: hai use case *Pay a Bill* và *Reconcile Credit Card* đều có thể liên quan tới việc viết séc. Bạn tạo use case riêng *Write a Check* chứa các bước chung, và hai use case giao dịch kia **include** nó. *Write a Check* vẫn là **use case độc lập**, vì đó cũng là một tác vụ người ta có thể thực hiện trực tiếp với phần mềm kế toán.

> **Cạm bẫy:** Đừng tranh cãi kéo dài với đồng nghiệp về việc **khi nào, như thế nào và có nên** dùng extend và include. Một tác giả sách về use case từng nói: extend và include là chủ đề **nên bàn giữa bạn bè bên ly bia**.

---

## 7. Use case & business rules

Use case và business rule **quyện vào nhau**.

**Business rule ảnh hưởng use case theo nhiều cách:**

- Một số rule **giới hạn vai trò nào** được thực hiện toàn bộ hoặc một phần use case. Có thể chỉ người dùng có mức đặc quyền nhất định mới chạy được một alternative flow cụ thể — tức rule **áp đặt precondition** mà hệ thống phải kiểm tra.
- Rule ảnh hưởng các bước cụ thể trong normal flow bằng cách **định nghĩa giá trị đầu vào hợp lệ** hoặc **quy định cách thực hiện tính toán**.

Ví dụ: một hãng hàng không tính thêm phí cho hành khách chọn một số ghế ưu tiên. Khi hành khách chạy use case chọn ghế mới trên website, **business rule liên quan sẽ thay đổi giá vé** nếu anh ta chọn một trong các ghế đó.

**Cách ghi trong use case:** đừng chép nội dung rule vào specification. Hãy **ghi định danh** của các business rule ảnh hưởng use case, và chỉ rõ chúng ảnh hưởng **phần nào** của use case. Như vậy use case không bị lỗi thời khi rule thay đổi.

**Chiều ngược lại: use case giúp phát hiện business rule.** Khi khai thác use case xem một đơn hàng đã lưu, một chemist nói: *"Fred không được xem đơn hàng của tôi, và tôi cũng không muốn xem đơn của Fred."* Đó chính là một business rule: **người dùng chỉ được xem các đơn hàng do chính mình đặt**.

Ba tình huống thường gặp:

- Đôi khi bạn **phát minh** business rule trong lúc khai thác và phân tích.
- Đôi khi thảo luận **bộc lộ** những rule đã tồn tại sẵn trong tổ chức.
- Đôi khi bạn **đã biết** rule và biết hệ thống phải tôn trọng nó.

---

## 8. Xác định use case

Có nhiều cách để tìm ra use case:

- **Xác định actor trước**, rồi trải ra các quy trình nghiệp vụ được hệ thống hỗ trợ, và định nghĩa use case tại những chỗ actor và hệ thống tương tác.
- **Tạo scenario cụ thể** minh hoạ từng quy trình nghiệp vụ, rồi **khái quát hoá** scenario thành use case và xác định actor tham gia.
- Từ mô tả quy trình nghiệp vụ, hỏi: *"Hệ thống phải thực hiện những tác vụ nào để hoàn tất quy trình này, hoặc để biến đầu vào thành đầu ra?"*
- **Xác định external event** mà hệ thống phải phản hồi, rồi nối chúng với actor và use case tương ứng.
- Dùng **CRUD analysis** để tìm các thực thể dữ liệu cần use case để tạo, đọc, cập nhật, xoá.
- Nhìn **context diagram** và hỏi: *"Mỗi thực thể bên ngoài này muốn đạt được mục tiêu gì với sự trợ giúp của hệ thống?"*

### Kết hợp top-down và bottom-up

Đội Chemical Tracking System đã yêu cầu người dùng, **trước khi bắt đầu workshop**, nghĩ về các tác vụ họ cần thực hiện với hệ thống mới. Mỗi tác vụ trở thành một **use case ứng viên**. Đây là cách tiếp cận **bottom-up**, bổ trợ cho chiến lược **top-down** là xác định mọi quy trình nghiệp vụ hệ thống sẽ hỗ trợ rồi rút use case từ đó. So sánh danh sách sinh ra từ hai lối tư duy này **giảm khả năng bỏ sót**.

Trong quá trình khám phá, nhóm phát hiện: một số ứng viên **ngoài phạm vi** nên bị loại; một số là **scenario liên quan có thể gộp** thành một use case tổng quát hơn; và có thêm **use case mới** ngoài tập ban đầu. Hãy kỳ vọng những điều chỉnh như vậy.

### Sửa các use case đặt tên sai

- **Không phải dạng tác vụ.** Người dùng đề xuất *"Material Safety Data Sheet"* — đó là một danh từ, không phải mục tiêu. Tên use case phải **bắt đầu bằng động từ**: người dùng muốn **yêu cầu, xem, in, tải về, đặt mua, sửa, xoá hay tạo** bảng dữ liệu an toàn đó?
- **Chỉ là một bước, không phải mục tiêu.** Người dùng đề xuất *"Scan Bar Code"*. BA cần hỏi: *"Khi quét mã vạch trên bình hoá chất, anh đang cố đạt được điều gì?"* Câu trả lời có thể là: *"Là chemist, tôi cần quét mã vạch để ghi nhận hoá chất vào phòng thí nghiệm của mình."* Use case thật là **Log Chemical into Lab**; quét mã vạch chỉ là **một bước** trong đó.

> **Đừng đào sâu vào use case đầu tiên ai đó đề xuất.** Hãy học **vừa đủ** về mỗi use case để nhóm có thể ưu tiên hoá và phân bổ chúng cho các release hoặc iteration sắp tới. Sau đó mới khám phá chi tiết các use case ưu tiên cao nhất. Use case ưu tiên thấp có thể chờ tới ngay trước khi được lên lịch hiện thực.

> **Cạm bẫy:** Đừng cố ép **mọi** yêu cầu vào một use case. Use case bộc lộ **phần lớn — nhưng có lẽ không phải toàn bộ** — functional requirement. Nếu BA đã biết chắc một chức năng phải được hiện thực, việc tạo ra một use case chỉ để chứa nó mang lại rất ít giá trị.

---

## 9. Khám phá & thẩm định use case

### Quy trình khám phá

Đội Chemical Tracking System dùng **workshop hai giờ, hai lần mỗi tuần**, với ba BA điều phối các nhóm song song cho các user class khác nhau. Mỗi workshop gồm product champion của user class, vài đại diện người dùng khác, và **một lập trình viên**. Việc có lập trình viên tham gia giúp họ hiểu sớm sản phẩm sẽ phải xây, và họ đóng vai **tiếng nói của thực tế** khi có yêu cầu bất khả thi.

Trình tự trong mỗi buổi:

1. Xác định **actor** hưởng lợi và viết **mô tả ngắn**.
2. **Ước lượng tần suất sử dụng** — chỉ báo sớm về yêu cầu đồng thời và dung lượng.
3. Xác định **precondition và postcondition** — ranh giới của use case. Chúng được điều chỉnh dần khi có thêm thông tin.
4. Hỏi người dùng hình dung mình **tương tác thế nào** với hệ thống để thực hiện tác vụ → chuỗi bước trở thành **normal flow**.
5. Xây dựng tương tự cho **alternative flow** và **exception**. Nhiều exception được phát hiện nhờ câu hỏi kiểu *"Điều gì xảy ra nếu cơ sở dữ liệu không hoạt động lúc đó?"* hoặc *"Nếu hoá chất không có sẵn thương mại thì sao?"*
6. Thảo luận **kỳ vọng chất lượng**: thời gian phản hồi, yêu cầu bảo mật, ràng buộc thiết kế giao diện.

Nhóm ghi các bước lên **sticky note** dán trên giấy khổ lớn — dễ di chuyển, nhóm lại và thay thế khi thảo luận tiến triển. Cách khác: chiếu template use case lên màn hình lớn và điền trực tiếp.

Nhóm **không** cố phủ hết mọi use case trong một workshop marathon, cũng **không** cố ghim mọi chi tiết. Họ khám phá use case **theo lớp**, bắt đầu từ nét lớn cho use case ưu tiên cao, rồi tinh chỉnh dần ngay trước khi hiện thực.

### Viết flow độc lập với giao diện

Khi viết các bước, hãy **tránh ngôn ngữ nhắc tới tương tác giao diện cụ thể**.

- ✅ *"Requester chỉ định hoá chất mong muốn"* — tổng quát, độc lập với UI.
- ❌ *"Hệ thống hiển thị drop-down list"* — ràng buộc sớm.

Cách viết tổng quát cho phép **nhiều cách hiện thực**: nhập mã số hoá chất, import cấu trúc từ file, vẽ cấu trúc bằng chuột hoặc bút cảm ứng, hoặc chọn từ danh sách. Nói *"Hệ thống trình bày các lựa chọn"* thay vì *"Hệ thống hiển thị drop-down list"*. Đi quá nhanh vào chi tiết tương tác sẽ **giới hạn tư duy** của người tham gia workshop.

### Thẩm định

Một hoặc hai ngày sau mỗi workshop, BA gửi use case và functional requirement cho người tham gia review **trước buổi kế tiếp**. Các review không chính thức này bộc lộ nhiều lỗi: **alternative flow chưa từng phát hiện, exception mới, functional requirement sai, bước dialog bị thiếu**.

> **Bài học quan trọng về nhịp độ:** Đội nhanh chóng học được rằng cần **ít nhất một ngày** giữa các workshop liên tiếp. Sự thư giãn tinh thần sau một hai ngày cho phép người ta nhìn lại công việc cũ với **góc nhìn tươi mới**. Một BA tổ chức workshop hằng ngày phát hiện người tham gia **khó tìm ra lỗi** vì thông tin còn quá mới trong đầu — họ **đọc thuộc lòng** cuộc thảo luận vừa rồi và không nhìn thấy lỗi.

**Kiểm thử khái niệm sớm.** Test lead của dự án bắt đầu tạo **conceptual test** từ use case ngay từ đầu — độc lập với chi tiết hiện thực và giao diện. Các test này giúp nhóm đạt hiểu biết chung về hành vi hệ thống trong các kịch bản cụ thể, và cho phép BA **xác minh** rằng họ đã suy ra đủ chức năng để người dùng thực hiện được mỗi use case.

Suy nghĩ về test sớm như vậy **rẻ và nhanh hơn nhiều** so với việc viết mã, xây một phần hệ thống, chạy test rồi mới phát hiện vấn đề về yêu cầu.

---

## 10. Từ use case tới functional requirement

> **Lập trình viên KHÔNG hiện thực business requirement hay user requirement. Họ hiện thực FUNCTIONAL REQUIREMENT.**

Một số người coi use case **chính là** functional requirement. Nhiều tổ chức đã gặp rắc rối khi đơn giản chuyển use case cho lập trình viên để hiện thực.

Lý do: use case mô tả **góc nhìn của người dùng**, nhìn vào hành vi **quan sát được từ bên ngoài**. Chúng **không chứa mọi thông tin** lập trình viên cần. Người dùng ATM **không biết** về việc xử lý ở hậu trường, chẳng hạn giao tiếp với máy tính của ngân hàng — chi tiết này vô hình với người dùng nhưng lập trình viên **cần biết**. Lập trình viên nhận use case dù đã fully dressed vẫn thường có nhiều câu hỏi.

Nhiều functional requirement **rơi thẳng ra** từ các bước dialog giữa actor và hệ thống, ví dụ *"Hệ thống shall gán một số thứ tự duy nhất cho mỗi request"* — không cần lặp lại chúng ở nơi khác nếu đã rõ từ use case.

Nhưng có những functional requirement **không xuất hiện** trong mô tả use case. Ví dụ: cách use case thường được viết **không đặc tả hệ thống nên làm gì khi một precondition KHÔNG được thoả mãn**. BA phải **suy ra** những yêu cầu bị thiếu này và truyền đạt cho lập trình viên và tester. **Chính công việc phân tích này — đi từ góc nhìn người dùng sang góc nhìn lập trình viên — là nơi BA tạo ra giá trị.**

### Bốn cách tổ chức tài liệu

| Cách | Mô tả | Ưu điểm | Nhược điểm |
|------|-------|---------|-----------|
| **Chỉ use case** | Kèm functional requirement ngay trong từng use case | Gọn, mọi thứ ở một chỗ | Vẫn cần tài liệu riêng cho yêu cầu phi chức năng và chức năng không gắn use case; **nhiều use case có thể cần cùng một requirement** — hãy cross-reference thay vì lặp lại |
| **Use case + functional requirement** | Use case khá đơn giản; functional requirement suy ra để trong SRS hoặc repository | Tách bạch rõ ràng | Cần thiết lập **traceability** giữa hai bên; tốt nhất dùng công cụ requirements management |
| **Chỉ functional requirement** | Tổ chức functional requirement theo use case hoặc theo feature; cả use case lẫn requirement đều nằm trong SRS | Không cần tài liệu user requirement riêng | Cách đội Chemical Tracking System đã dùng |
| **Use case + test** | Viết use case specification khá đầy đủ, rồi viết **acceptance test** thay cho functional requirement | Tránh trùng lặp giữa flow và requirement | Cần kỷ luật để test phủ hết ngoại lệ |

> Nếu bạn viết **cả** use case chi tiết **và** functional requirement, bạn sẽ thấy có **trùng lặp**, đặc biệt quanh normal flow. Viết cùng một yêu cầu hai lần mang lại rất ít giá trị.

### Nhiều góc nhìn giúp tìm lỗi

Đội Chemical Tracking System tạo **nhiều biểu diễn** của cùng yêu cầu: danh sách functional requirement, tập test tương ứng, và các analysis model — tất cả dựa trên use case. Họ dùng test để **xác minh** functional requirement, tìm test **không thể thực thi** với tập requirement hiện có, và tìm requirement **không được test nào phủ**. Việc đối chiếu bộc lộ lỗi ở cả hai phía **trước khi viết một dòng mã**.

> **Nguyên tắc then chốt:** Nếu bạn chỉ tạo **một** biểu diễn duy nhất của yêu cầu, bạn **buộc phải tin nó**, vì không có gì để đối chiếu.
>
> - Đội agile thường **không** viết functional requirement mà chỉ tạo acceptance test — vẫn chỉ có **một** biểu diễn.
> - Đội truyền thống chỉ tạo functional requirement và để việc test tới sau — cũng chỉ có **một** biểu diễn.
> - Kết quả tốt nhất đến từ **kết hợp hợp lý** giữa yêu cầu viết ra, test, analysis model và prototype.

---

## 11. Cạm bẫy & lợi ích của cách tiếp cận usage-centric

### Cạm bẫy khi dùng use case

- **Quá nhiều use case.** Nếu use case bùng nổ về số lượng, có thể bạn đang viết ở **mức trừu tượng sai**. Đừng tạo use case riêng cho mọi scenario có thể. Thường bạn sẽ có **nhiều use case hơn business requirement và feature**, nhưng **nhiều functional requirement hơn use case** rất nhiều.
- **Use case quá phức tạp.** Xem lại nguyên tắc tách normal flow / alternative flow / exception ở mục 4.
- **Đưa thiết kế vào use case.** Use case nên tập trung vào điều người dùng cần đạt được, không phải màn hình trông thế nào. Dùng **screen sketch và dialog map** để hình dung tương tác, **không phải** như đặc tả thiết kế cứng. Đừng để thiết kế giao diện dẫn dắt việc khám phá yêu cầu.
- **Đưa định nghĩa dữ liệu vào use case.** Thảo luận use case tự nhiên kích thích thảo luận về dữ liệu. Một số tác giả đưa luôn định nghĩa các phần tử dữ liệu vào use case specification. Điều này khiến **khó tìm thông tin** (không rõ use case nào chứa định nghĩa nào) và dễ tạo **bản sao bị lệch nhau** khi một bản được sửa còn bản khác thì không. Hãy lưu định nghĩa dữ liệu trong **data dictionary và data model** dùng chung toàn dự án.
- **Use case người dùng không hiểu.** Nếu người dùng không liên hệ được use case với quy trình hoặc mục tiêu nghiệp vụ của họ, đó là vấn đề. Hãy viết use case **từ góc nhìn người dùng**, không phải góc nhìn hệ thống, và nhờ người dùng review.

### Lợi ích

**Sức mạnh của cả use case lẫn user story đến từ góc nhìn lấy người dùng và cách sử dụng làm trung tâm.**

- Người dùng có **kỳ vọng rõ ràng hơn** về những gì hệ thống mới cho phép họ làm, so với cách tiếp cận lấy feature làm trung tâm.
- Giúp BA và lập trình viên **hiểu nghiệp vụ của người dùng**.
- Suy nghĩ kỹ qua các dialog actor–hệ thống **bộc lộ sự nhập nhằng và mơ hồ sớm**, cũng như việc sinh test từ use case.
- **Tránh "orphan functionality"** — chức năng có vẻ là ý tưởng hay nhưng không ai dùng vì nó không liên hệ trực tiếp với mục tiêu người dùng. Đặc tả quá mức từ đầu và cố nhồi mọi chức năng có thể nghĩ ra sẽ dẫn tới hiện thực những yêu cầu không cần thiết.
- **Hỗ trợ ưu tiên hoá.** Functional requirement ưu tiên cao nhất là những cái bắt nguồn từ user requirement ưu tiên cao nhất.

Một use case hoặc user story có thể có ưu tiên cao vì:

- Nó mô tả **một phần của quy trình nghiệp vụ cốt lõi** mà hệ thống hỗ trợ.
- **Nhiều người dùng** sẽ dùng nó **thường xuyên**.
- Một **favored user class** yêu cầu nó.
- Nó **bắt buộc để tuân thủ quy định**.
- **Các chức năng khác phụ thuộc** vào sự hiện diện của nó.

**Lợi ích kỹ thuật:** use case bộc lộ một số **đối tượng miền quan trọng** và trách nhiệm của chúng với nhau. Lập trình viên dùng phương pháp thiết kế hướng đối tượng có thể biến use case thành **class diagram và sequence diagram**.

**Lợi ích bảo trì:** khi quy trình nghiệp vụ thay đổi theo thời gian, các tác vụ được thể hiện trong user requirement cũng thay đổi. Nếu bạn đã truy vết functional requirement, thiết kế, mã nguồn và test **ngược về user requirement cha** — tức tiếng nói của người dùng — thì việc lan truyền thay đổi đó qua toàn hệ thống sẽ **dễ dàng hơn nhiều**.

> **Cạm bẫy cuối:** Đừng dành nhiều thời gian chi tiết hoá use case sẽ **không được hiện thực trong nhiều tháng hoặc nhiều năm**. Chúng rất có khả năng **thay đổi hoặc biến mất** trước khi việc xây dựng bắt đầu.

---

## Điểm cốt lõi

- **Product-centric** tập trung vào feature và có rủi ro tạo ra chức năng ít ai dùng; **usage-centric** bắt đầu từ mục tiêu người dùng.
- Tên use case luôn là **động từ + tân ngữ**; user story nêu thêm **user class** và **lý do**.
- Use case cho **cấu trúc và ngữ cảnh**; user story cho **sự đơn giản** nhưng dễ bỏ sót acceptance test.
- Use case **KHÔNG đủ** cho hệ thống batch, tính toán nặng, analytics, data warehouse, hay nhiều hệ thống thời gian thực — hãy dùng **event-response**.
- **User là con người thật; actor là sự trừu tượng hoá.** Một người có thể đội nhiều chiếc mũ actor.
- Trên **use case diagram**, mũi tên là **kết nối**, không phải luồng — khác hẳn context diagram.
- **Trigger event không phải là precondition.** Hệ thống phát hiện trigger rồi mới kiểm tra precondition.
- **Postcondition phải thoả mãn precondition của use case kế tiếp** thì mới nối chuỗi được.
- Không đặc tả ngoại lệ dẫn tới **xử lý lỗi không nhất quán** hoặc **hệ thống sập**.
- Bạn có thể hoãn alternative flow, nhưng **phải hiện thực exception** của các flow đã chọn làm.
- Flow vượt **10–15 bước** là dấu hiệu use case đang gộp nhiều scenario.
- Ghi **định danh business rule** trong use case, **không chép nội dung rule**.
- Tên use case phải bắt đầu bằng **động từ**; *"Scan Bar Code"* là một **bước**, không phải mục tiêu.
- Cần **ít nhất một ngày** giữa các workshop liên tiếp để người review nhìn bằng mắt tươi mới.
- Viết flow **độc lập với giao diện**: *"Hệ thống trình bày các lựa chọn"*, không phải *"hiển thị drop-down list"*.
- Use case **không chứa mọi thông tin** lập trình viên cần — BA phải suy ra requirement còn thiếu.
- **Lưu định nghĩa dữ liệu trong data dictionary**, không nhúng vào use case.
- Chỉ một biểu diễn duy nhất nghĩa là **bạn buộc phải tin nó**; hãy kết hợp requirement, test, model và prototype.
- Truy vết ngược về user requirement giúp **lan truyền thay đổi** dễ hơn khi nghiệp vụ tiến hoá.

## Tóm tắt

- Use case và user story đều dịch chuyển câu hỏi từ *"bạn muốn hệ thống làm gì"* sang ***"bạn cần hoàn thành việc gì"***.
- Cấu trúc use case — **precondition, normal flow, alternative flow, exception, postcondition** — là một danh sách kiểm tra buộc bạn khám phá đủ mọi khía cạnh.
- **Ngoại lệ bị bỏ sót là nguồn phổ biến nhất của yêu cầu thiếu**; hãy chủ động đào tìm chúng.
- Khám phá use case **theo lớp**: đủ để ưu tiên hoá trước, chi tiết hoá sau, ngay trước khi hiện thực.
- **BA phải suy ra functional requirement** từ use case; đây là nơi BA tạo giá trị lớn nhất.
- Chọn **một trong bốn cách tổ chức tài liệu** và áp dụng nhất quán, tránh viết cùng một yêu cầu hai lần.
- Cách tiếp cận usage-centric giúp **tránh chức năng mồ côi**, hỗ trợ ưu tiên hoá và làm cho bảo trì dễ hơn.
