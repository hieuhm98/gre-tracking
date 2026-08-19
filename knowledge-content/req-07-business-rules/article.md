# Business Rules

## 1. Business rule là gì & vì sao quan trọng

Mọi tổ chức đều vận hành theo một tập hợp đồ sộ các chính sách, luật lệ và tiêu chuẩn ngành. Những nguyên tắc chi phối này được gọi chung là **business rules** hoặc **business logic**.

Hai định nghĩa chính thức từ Business Rules Group:

- **Góc nhìn nghiệp vụ:** *"Business rule là chỉ dẫn cho biết có một nghĩa vụ liên quan tới hành vi, hành động, thực hành hoặc thủ tục trong một hoạt động hay lĩnh vực cụ thể."* (Cần có động cơ rõ ràng, phương pháp thực thi, và hiểu biết về hậu quả nếu rule bị vi phạm.)
- **Góc nhìn hệ thống thông tin:** *"Business rule là phát biểu định nghĩa hoặc ràng buộc một khía cạnh nào đó của doanh nghiệp. Nó nhằm khẳng định cấu trúc nghiệp vụ, hoặc kiểm soát và ảnh hưởng tới hành vi của doanh nghiệp."*

> **Điểm then chốt: hầu hết business rule tồn tại BÊN NGOÀI bối cảnh của bất kỳ ứng dụng phần mềm nào.**

Quy định *"nhân viên phải học lại lớp an toàn hoá chất mỗi năm"* vẫn đúng ngay cả khi công ty mua và cấp phát hoá chất **hoàn toàn thủ công**. Vì vậy **business rule tự thân KHÔNG phải là yêu cầu phần mềm**. Nhưng chúng thường **bắt buộc** hệ thống phải chứa chức năng tuân thủ rule — và **chính chức năng đó** mới là yêu cầu phần mềm.

**Phân biệt ba khái niệm dễ nhầm:**

| Khái niệm | Là gì |
|-----------|-------|
| **Business requirement** | Kết quả mong muốn hoặc mục tiêu cấp cao của tổ chức; lý do biện minh cho việc khởi động dự án |
| **Business process** | Chuỗi hoạt động biến đầu vào thành đầu ra để đạt một kết quả cụ thể |
| **Business rule** | Chính sách, hướng dẫn, tiêu chuẩn, quy định hoặc công thức tính định nghĩa hay ràng buộc nghiệp vụ |

Business rule **ảnh hưởng** business process bằng cách thiết lập từ vựng, áp đặt hạn chế, kích hoạt hành động và chi phối cách thực hiện tính toán. **Cùng một business rule có thể áp dụng cho nhiều quy trình** — thủ công lẫn tự động hoá. Đây chính là lý do nên coi business rule là một **tập thông tin riêng biệt**.

### Cái giá của việc không quản lý business rule

Nhiều công ty không coi business rule là tài sản doanh nghiệp có giá trị. Một số phòng ban ghi lại rule cục bộ của mình, nhưng thiếu nỗ lực thống nhất để lưu chúng vào một kho chung mà tổ chức IT truy cập được.

Hậu quả khi coi business rule như **truyền thuyết dân gian của công ty**:

- Rule chỉ tồn tại **trong đầu vài cá nhân**.
- BA phải biết **gọi cho ai** để tìm hiểu rule ảnh hưởng dự án của mình.
- Các cá nhân có thể **hiểu rule khác nhau**, dẫn tới nhiều ứng dụng **thực thi cùng một rule một cách không nhất quán**, hoặc bỏ sót hoàn toàn.
- Khi các chuyên gia đó **rời tổ chức**, kiến thức biến mất theo họ.

Ngược lại, một kho business rule chung giúp mọi dự án bị ảnh hưởng **biết tới rule và hiện thực chúng nhất quán**.

**Ví dụ dễ hình dung:** tổ chức của bạn gần như chắc chắn có chính sách bảo mật kiểm soát truy cập hệ thống — độ dài tối thiểu và tối đa của mật khẩu, ký tự được phép, tần suất bắt buộc đổi mật khẩu, số lần đăng nhập sai trước khi khoá tài khoản. Mọi ứng dụng tổ chức phát triển **nên áp dụng những chính sách này một cách nhất quán**. Truy vết từng rule tới đoạn mã hiện thực nó giúp việc cập nhật hệ thống khi rule thay đổi trở nên dễ dàng, và **tạo điều kiện tái sử dụng mã** giữa các dự án.

> **Bẫy:** Business rule chỉ nằm trong đầu vài chuyên gia sẽ tạo ra một **khoảng trống tri thức** khi họ rời tổ chức.

---

## 2. Taxonomy: Facts

Nhiều lược đồ phân loại business rule đã được đề xuất. Một taxonomy đơn giản gồm **năm loại** đủ dùng cho hầu hết tình huống: **facts, constraints, action enablers, inferences, computations**. Loại thứ sáu là **terms** — các từ, cụm từ và viết tắt quan trọng với nghiệp vụ; bạn có thể gộp terms vào nhóm facts, hoặc định nghĩa chúng trong **glossary**.

> Ghi lại business rule **một cách nhất quán** quan trọng hơn việc tranh cãi gay gắt về cách phân loại chính xác từng rule. Tuy nhiên taxonomy vẫn hữu ích: nó giúp bạn **nhận ra những rule mà lẽ ra bạn đã không nghĩ tới**, và cho bạn ý tưởng về **cách áp dụng rule** trong ứng dụng.

**Facts** đơn giản là các phát biểu **đúng về nghiệp vụ tại một thời điểm xác định**. Một fact mô tả **mối liên hệ hoặc quan hệ** giữa các thuật ngữ nghiệp vụ quan trọng. Fact về các thực thể dữ liệu quan trọng thường xuất hiện trong **data model**.

Ví dụ:

- Mỗi bình hoá chất có một **mã vạch định danh duy nhất**.
- Mỗi đơn hàng đều có **phí vận chuyển**.
- **Không tính thuế bán hàng** trên phí vận chuyển.
- Vé máy bay **không hoàn tiền** sẽ chịu phí khi người mua đổi lịch trình.
- Sách cao hơn **16 inch** được xếp ở khu **Oversize** của thư viện.

> **Cảnh báo về phạm vi:** Có **vô số** fact trôi nổi quanh một doanh nghiệp. Việc thu thập những fact không liên quan sẽ **làm sa lầy** quá trình phân tích nghiệp vụ. Dù chúng đúng, không ai rõ đội phát triển sẽ dùng chúng làm gì.
>
> Hãy tập trung vào những fact **nằm trong phạm vi dự án**. Cố gắng nối mỗi fact với: đầu vào và đầu ra trên **context diagram**, các **system event**, các **đối tượng dữ liệu** đã biết, hoặc các **user requirement** cụ thể.

---

## 3. Constraints

**Constraint** là phát biểu **hạn chế các hành động** mà hệ thống hoặc người dùng được phép thực hiện.

Dấu hiệu nhận biết trong lời người nói: một hành động **phải (must)**, **không được (must not / may not)** được thực hiện, hoặc **chỉ (only)** một số người hay vai trò nhất định mới được thực hiện hành động đó.

Constraint đến từ nhiều nguồn khác nhau:

**Chính sách của tổ chức:**

- Người vay dưới 18 tuổi **phải có** cha mẹ hoặc người giám hộ hợp pháp đồng ký.
- Bạn đọc thư viện **chỉ được** giữ tối đa 10 tài liệu ở trạng thái chờ tại một thời điểm.
- Thư từ bảo hiểm **không được** hiển thị quá bốn chữ số cuối của số an sinh xã hội của chủ hợp đồng.

**Quy định của nhà nước:**

- Mọi ứng dụng phần mềm **phải tuân thủ** quy định về khả năng sử dụng cho người khiếm thị.
- Phi công hàng không **phải được nghỉ ít nhất 8 giờ liên tục** trong mỗi chu kỳ 24 giờ.
- Tờ khai thuế thu nhập cá nhân liên bang **phải được đóng dấu bưu điện** trước nửa đêm ngày làm việc đầu tiên sau 14 tháng 4, trừ khi được gia hạn.

**Tiêu chuẩn ngành:**

- Người xin vay thế chấp **phải thoả mãn** tiêu chuẩn đủ điều kiện của Federal Housing Authority.
- Ứng dụng web **không được chứa** thẻ hoặc thuộc tính HTML đã bị loại bỏ theo chuẩn HTML 5.

### Roles and permissions matrix

Vì rất nhiều constraint xoay quanh việc **loại người dùng nào được thực hiện chức năng nào**, một cách ghi lại súc tích là dùng **roles and permissions matrix**:

- Các **vai trò** xếp theo cột (có thể tách nhóm nhân viên và không phải nhân viên).
- Các **chức năng hệ thống** xếp theo hàng, nhóm theo loại (thao tác hệ thống, thao tác trên hồ sơ bạn đọc, thao tác trên từng tài liệu).
- Dấu **X** trong ô cho biết vai trò ở cột đó **có quyền** thực hiện thao tác ở hàng đó.

### Constraint hàm ý chức năng

Constraining business rule có thể mang **hàm ý cho việc phát triển** ngay cả khi nó không chuyển trực tiếp thành chức năng.

Ví dụ: chính sách của một cửa hàng bán lẻ quy định **chỉ giám sát viên và quản lý** mới được hoàn tiền mặt trên 50. Nếu bạn đang xây ứng dụng bán hàng tại quầy, rule này hàm ý:

- Mỗi người dùng phải có **mức đặc quyền (privilege level)**.
- Phần mềm phải **kiểm tra** xem người dùng hiện tại có đủ mức đặc quyền để thực hiện một số hành động nhất định hay không — chẳng hạn mở ngăn kéo tiền để thu ngân hoàn tiền cho khách.

> **Chú ý về từ "constraint":** Dự án phần mềm có nhiều loại constraint khác nhau.
>
> - **Project constraint** — giới hạn về lịch, nhân sự, ngân sách → thuộc **project management plan**.
> - **Design và implementation constraint** — điều kiện áp đặt lên lựa chọn của người xây dựng → thuộc **SRS** hoặc tài liệu thiết kế.
> - **Business rule constraint** — hạn chế cách doanh nghiệp vận hành → thuộc **kho business rule**.
>
> Khi các constraint này được phản ánh trong yêu cầu phần mềm, hãy chỉ rõ rule tương ứng là **lý do (rationale)** cho từng yêu cầu suy ra.

---

## 4. Action enablers

**Action enabler** là rule **kích hoạt một hoạt động nào đó nếu các điều kiện cụ thể là đúng**.

Hoạt động đó có thể do **con người thực hiện** trong quy trình thủ công. Hoặc rule có thể dẫn tới việc đặc tả **chức năng phần mềm** khiến ứng dụng thể hiện hành vi đúng khi hệ thống phát hiện sự kiện kích hoạt.

**Dấu hiệu nhận biết:** phát biểu dạng ***"Nếu <điều kiện đúng hoặc sự kiện xảy ra>, thì <điều gì đó xảy ra>"***.

Điều kiện dẫn tới hành động có thể là **tổ hợp phức tạp** của nhiều giá trị đúng/sai. Khi đó, **decision table** là cách súc tích để ghi lại các action-enabling rule có logic phức tạp.

Ví dụ trong Chemical Tracking System:

- **Nếu** kho hoá chất còn bình chứa hoá chất được yêu cầu, **thì** đề nghị các bình sẵn có cho người yêu cầu.
- **Vào ngày cuối cùng của mỗi quý**, sinh các báo cáo OSHA và EPA bắt buộc về việc xử lý và thải bỏ hoá chất trong quý đó.
- **Nếu** đã tới ngày hết hạn của một bình hoá chất, **thì** thông báo cho người đang giữ bình đó.

### Action enabler phục vụ mục tiêu thương mại

Doanh nghiệp thường xây dựng chính sách nhằm **thúc đẩy thành công thương mại**. Hãy xem cách một hiệu sách trực tuyến dùng action enabler để kích thích mua sắm bốc đồng sau khi khách đã yêu cầu mua một sản phẩm:

- **Nếu** khách đặt một cuốn sách của tác giả đã viết nhiều cuốn, **thì** giới thiệu các cuốn khác của tác giả đó **trước khi** hoàn tất đơn hàng.
- **Sau khi** khách bỏ một cuốn sách vào giỏ hàng, hiển thị các cuốn liên quan mà những khách khác cũng đã mua cùng cuốn này.

### Khi hiện thực rule làm hỏng trải nghiệm

> **Câu chuyện cảnh tỉnh.** Một người dùng đổi dặm bay để mua vé cho vợ mình. Khi anh cố hoàn tất giao dịch, website báo rằng đã **gặp lỗi** và yêu cầu **gọi điện ngay cho hãng hàng không**. Nhân viên đặt chỗ giải thích rằng hãng không thể phát hành vé đổi dặm qua thư hay email vì **anh và vợ có họ khác nhau**. Anh phải ra tận quầy sân bay xuất trình giấy tờ.
>
> Sự việc bắt nguồn từ một **constraining business rule** hợp lý: *"Nếu hành khách có họ khác với người đổi dặm, thì người đổi dặm phải nhận vé trực tiếp."* Rule này có lẽ nhằm **chống gian lận**. Nhưng phần mềm đã **hiện thực nó theo cách gây ra khiếm khuyết về khả năng sử dụng** và bất tiện cho khách:
>
> - Nó hiển thị **thông báo lỗi đáng báo động** thay vì đơn giản giải thích vấn đề về họ khác nhau và việc cần làm.
> - Nó **lãng phí thời gian** của cả khách hàng lẫn nhân viên đặt chỗ bằng một cuộc gọi không cần thiết.
>
> **Việc hiện thực business rule thiếu suy nghĩ có thể gây tổn hại cho khách hàng và cho chính doanh nghiệp của bạn.**

---

## 5. Inferences & Computations

### Inferences

**Inference** — còn gọi là **inferred knowledge** hoặc **derived fact** — tạo ra một **fact mới từ các fact khác**.

Inference thường được viết theo mẫu **"if/then"** giống action enabler. **Khác biệt then chốt:** mệnh đề *"then"* của inference chỉ **cung cấp một mẩu tri thức**, chứ **không phải một hành động cần thực hiện**.

Ví dụ:

- **Nếu** một khoản thanh toán không được nhận trong vòng 30 ngày dương lịch sau hạn, **thì** tài khoản **được coi là quá hạn (delinquent)**.
- **Nếu** nhà cung cấp không thể giao một mặt hàng đã đặt trong vòng năm ngày kể từ khi nhận đơn, **thì** mặt hàng đó **được coi là back-ordered**.
- Hoá chất có độc tính **LD50 thấp hơn 5 mg/kg** ở chuột **được coi là nguy hiểm**.

Hãy chú ý cấu trúc: mỗi câu kết thúc bằng việc **gán một trạng thái hoặc phân loại**, không phải bằng việc ra lệnh cho hệ thống làm gì.

### Computations

**Computation** định nghĩa các phép tính biến dữ liệu hiện có thành dữ liệu mới, bằng **công thức toán học hoặc thuật toán cụ thể**.

Nhiều computation tuân theo các rule **bên ngoài doanh nghiệp**, chẳng hạn công thức khấu trừ thuế thu nhập.

Ví dụ viết dạng văn bản:

- Phí vận chuyển nội địa đường bộ cho đơn hàng nặng hơn hai pound là **4,75 cộng 12 cent mỗi ounce hoặc phần lẻ của ounce**.
- Tổng giá đơn hàng là **tổng giá các mặt hàng, trừ chiết khấu theo số lượng, cộng thuế bán hàng của bang và hạt nơi giao hàng, cộng phí vận chuyển, cộng phí bảo hiểm tuỳ chọn**.
- Đơn giá **giảm 10%** cho đơn 6 đến 10 đơn vị, **giảm 20%** cho đơn 11 đến 20 đơn vị, và **giảm 30%** cho đơn trên 20 đơn vị.

**Biểu diễn tốt hơn:** viết chi tiết computation bằng ngôn ngữ tự nhiên thường **dài dòng và gây rối**. Hãy cân nhắc biểu diễn dưới dạng **biểu thức toán học** hoặc **bảng rule** rõ ràng hơn và dễ bảo trì hơn:

| ID | Số đơn vị mua | Phần trăm chiết khấu |
|----|---------------|----------------------|
| DISC-1 | 1 đến 5 | 0 |
| DISC-2 | 6 đến 10 | 10 |
| DISC-3 | 11 đến 20 | 20 |
| DISC-4 | Trên 20 | 30 |

> **Bẫy giá trị biên:** Hãy cẩn thận với **chồng lấn khoảng giá trị** khi viết một tập rule hoặc yêu cầu định nghĩa các khoảng. Rất dễ vô tình định nghĩa các khoảng như **1–5, 5–10, 10–20** — điều này tạo ra **nhập nhằng** về việc giá trị đúng bằng 5 và đúng bằng 10 thuộc khoảng nào.

---

## 6. Atomic business rules

Hãy tưởng tượng bạn hỏi thủ thư: *"Tôi có thể mượn đĩa DVD trong bao lâu?"* Câu trả lời: *"Bạn có thể mượn DVD hoặc Blu-ray một tuần, và có thể gia hạn tối đa hai lần, mỗi lần ba ngày, nhưng chỉ khi không có bạn đọc nào khác đặt giữ nó."*

Câu trả lời đó **đúng**, nhưng nó **gộp nhiều rule vào một phát biểu**. Composite rule như vậy:

- **Khó hiểu và khó bảo trì.**
- **Khó xác nhận** rằng mọi điều kiện có thể xảy ra đã được phủ hết.
- Nếu nhiều đoạn chức năng cùng truy vết ngược về rule phức hợp này, việc **tìm và sửa đúng đoạn mã** sẽ tốn thời gian khi chỉ **một phần** của rule thay đổi trong tương lai.

**Chiến lược tốt hơn: viết business rule ở mức NGUYÊN TỬ (atomic)**, không gộp nhiều chi tiết vào một rule. Cách này giữ rule ngắn gọn, đơn giản, và tạo điều kiện **tái sử dụng, sửa đổi và kết hợp** chúng theo nhiều cách.

**Quy tắc viết nguyên tử** cho inference và action enabler:

- **Không dùng logic OR** ở vế trái của cấu trúc if/then.
- **Tránh logic AND** ở vế phải.

Tách rule phức hợp của thư viện thành các rule nguyên tử:

| ID | Rule |
|----|------|
| **Video.Media.Types** | Đĩa DVD và Blu-ray là video item. |
| **Video.Checkout.Duration** | Video item được mượn một tuần mỗi lần. |
| **Renewal.Video.Times** | Video item được gia hạn tối đa hai lần. |
| **Renewal.Video.Duration** | Gia hạn một video item đang mượn kéo dài hạn trả thêm ba ngày. |
| **Renewal.HeldItem** | Bạn đọc không được gia hạn tài liệu mà bạn đọc khác đang đặt giữ. |

Chúng được gọi là **atomic** vì **không thể phân rã thêm nữa**. Bạn sẽ có **nhiều** rule nguyên tử, và functional requirement của bạn sẽ phụ thuộc vào **các tổ hợp khác nhau** của chúng.

**Lợi ích bảo trì cụ thể:** khi công nghệ video thế hệ mới xuất hiện, hoặc khi thư viện loại bỏ toàn bộ đĩa DVD, thư viện **chỉ cần cập nhật rule Video.Media.Types** — **không rule nào khác bị ảnh hưởng**.

---

## 7. Tài liệu hoá business rules

Vì business rule có thể ảnh hưởng **nhiều ứng dụng**, tổ chức nên quản lý chúng như **tài sản cấp doanh nghiệp**.

**Lộ trình tăng dần theo quy mô:**

1. **Business rules catalog đơn giản** là đủ để bắt đầu.
2. Nếu dùng **requirements management tool**, bạn có thể lưu business rule như một **loại requirement** — miễn là chúng **truy cập được từ mọi dự án**.
3. Tổ chức lớn, hoặc tổ chức có hoạt động và hệ thống thông tin bị chi phối mạnh bởi business rule, nên xây **cơ sở dữ liệu business rule**.
4. **Công cụ quản lý rule thương mại** trở nên có giá trị khi catalog vượt quá khả năng của trình soạn thảo văn bản, bảng tính, wiki hay công cụ cộng tác. Một số **business rule management system** chứa **rule engine** có thể **tự động hoá việc hiện thực** rule trong ứng dụng của bạn.

> **Nguyên tắc quan trọng:** Khi bạn phát hiện rule mới trong lúc làm một ứng dụng, hãy **thêm nó vào catalog** — thay vì nhúng nó vào tài liệu của riêng ứng dụng đó, hoặc **tệ hơn nữa**, chỉ nhúng vào mã nguồn.

Rule liên quan tới **an toàn, bảo mật, tài chính hoặc tuân thủ quy định** mang **rủi ro lớn nhất** nếu không được quản lý và thực thi đúng cách.

### Cấu trúc một mục trong catalog

Bắt đầu bằng định dạng đơn giản với các cột sau:

| Cột | Ý nghĩa và giá trị |
|-----|--------------------|
| **ID** | Định danh duy nhất, cho phép yêu cầu tham chiếu ngược tới rule cụ thể |
| **Rule definition** | Nội dung rule, viết ở mức nguyên tử |
| **Type of rule** | Fact, constraint, action enabler, inference, hay computation |
| **Static or dynamic** | Rule có khả năng thay đổi theo thời gian hay không |
| **Source** | Nguồn gốc: chính sách quản lý, quy định nhà nước, chuyên gia nghiệp vụ, tài liệu |

**Vì sao cột "static or dynamic" lại quan trọng đến vậy?** Thông tin này **giúp ích trực tiếp cho lập trình viên**. Nếu họ biết một số rule sẽ **thay đổi định kỳ**, họ có thể **cấu trúc phần mềm sao cho chức năng hoặc dữ liệu bị ảnh hưởng dễ cập nhật**.

Ví dụ điển hình: **cách tính thuế thu nhập thay đổi ít nhất mỗi năm**. Nếu lập trình viên đưa thông tin thuế vào **bảng hoặc cơ sở dữ liệu**, việc cập nhật giá trị khi cần sẽ dễ dàng hơn nhiều so với **hard-code** chúng vào phần mềm.

> **Nguyên tắc ghi nhớ:** **Định luật của tự nhiên** — như các phép tính dựa trên định luật nhiệt động lực học — có thể hard-code an toàn. **Luật lệ của con người thì biến động hơn nhiều.**

**Cột "source" giúp** mọi người biết tìm ai khi cần thêm thông tin về rule hoặc cần biết về thay đổi.

> **Bẫy:** Đừng làm catalog business rule **phức tạp hơn mức cần thiết**. Hãy dùng hình thức đơn giản nhất bảo đảm đội phát triển thực sự **sử dụng** chúng hiệu quả. **Doanh nghiệp nên sở hữu kho rule, không phải phòng IT hay đội dự án.**

Khi bạn có kinh nghiệm hơn, có thể áp dụng các **template có cấu trúc** để định nghĩa từng loại rule — mô tả các mẫu từ khoá và mệnh đề giúp cấu trúc rule nhất quán, đồng thời **tạo điều kiện lưu chúng vào cơ sở dữ liệu** hoặc rule engine. Các tập rule liên quan cũng có thể biểu diễn bằng **decision tree, decision table** (đặc biệt khi có logic phức tạp) và **roles and permissions matrix**.

---

## 8. Khám phá business rules

Cũng như việc hỏi *"yêu cầu của anh là gì?"* không giúp ích nhiều khi khai thác user requirement, việc hỏi người dùng *"business rule của anh là gì?"* cũng **không đưa bạn đi xa**.

Sáu nguồn khám phá business rule:

- **Tri thức chung của tổ chức** — thường thu thập từ những cá nhân đã làm việc lâu năm và **biết chi tiết cách doanh nghiệp vận hành**.
- **Hệ thống cũ (legacy system)** — nơi business rule bị **nhúng trong yêu cầu và mã nguồn**. Việc này đòi hỏi **reverse-engineer lý do** đằng sau yêu cầu hoặc mã để hiểu rule liên quan. Cách này đôi khi chỉ cho **tri thức không đầy đủ**.
- **Mô hình hoá quy trình nghiệp vụ** — dẫn dắt analyst tìm rule có thể ảnh hưởng **từng bước quy trình**: constraint, sự kiện kích hoạt, rule tính toán và fact liên quan.
- **Phân tích tài liệu hiện có** — đặc tả yêu cầu từ dự án trước, quy định, tiêu chuẩn ngành, tài liệu chính sách công ty, hợp đồng, kế hoạch kinh doanh.
- **Phân tích dữ liệu** — chẳng hạn các **trạng thái** khác nhau mà một đối tượng dữ liệu có thể mang, và **điều kiện** để người dùng hoặc sự kiện hệ thống thay đổi trạng thái đó. Các quyền này cũng có thể biểu diễn bằng **roles and permissions matrix** để cung cấp thông tin về rule liên quan tới mức đặc quyền và bảo mật.
- **Phòng ban tuân thủ (compliance)** trong các công ty xây hệ thống chịu sự điều tiết.

> **Cảnh báo quan trọng:** Việc bạn tìm thấy business rule trong các nguồn này **không có nghĩa** chúng nhất thiết áp dụng cho dự án hiện tại, hoặc thậm chí **vẫn còn hiệu lực**. Công thức tính được hiện thực trong mã của ứng dụng cũ **có thể đã lỗi thời**. Hãy **xác nhận** xem rule lấy từ tài liệu và ứng dụng cũ có cần cập nhật hay không.

Cũng hãy **đánh giá phạm vi áp dụng** của rule bạn phát hiện: nó là rule **cục bộ của dự án**, hay trải rộng trên **một miền nghiệp vụ**, hay toàn **doanh nghiệp**?

### Câu hỏi khai thác theo từng góc nhìn

BA có thể thu thập business rule ngay trong các hoạt động elicitation vốn nhằm định nghĩa những artifact khác. Trong phỏng vấn và workshop, hãy **đặt câu hỏi thăm dò lý do (rationale)** đằng sau yêu cầu và ràng buộc mà người dùng trình bày — những cuộc thảo luận này **thường xuyên bộc lộ business rule** như là lý do nền tảng.

Nếu tổ chức của bạn có những nhân viên chuyên trách **một số loại hoặc lớp rule** nhất định, hãy tìm ra họ và **đưa họ vào cuộc thảo luận**.

---

## 9. Business rules & requirements

Business rule và functional requirement **đôi khi trông rất giống nhau**. Tuy nhiên:

> **Rule là phát biểu chính sách BÊN NGOÀI, phải được thực thi trong phần mềm — và chính điều đó dẫn dắt chức năng hệ thống.**

**Mỗi BA phải quyết định ba điều:** rule nào liên quan tới ứng dụng của mình, rule nào **phải được thực thi trong phần mềm**, và **thực thi chúng như thế nào**.

### Cùng một rule, hai hiện thực khác nhau

Hãy nhớ lại constraint từ Chemical Tracking System: **hồ sơ đào tạo phải còn hiệu lực trước khi người dùng có thể yêu cầu hoá chất nguy hiểm.**

Analyst sẽ suy ra **functional requirement khác nhau** tuỳ theo môi trường:

| Tình huống | Chức năng suy ra |
|-----------|------------------|
| Cơ sở dữ liệu đào tạo **truy cập được** từ hệ thống | Hệ thống tra cứu hồ sơ đào tạo của người dùng và **tự quyết định** chấp nhận hay từ chối yêu cầu |
| Cơ sở dữ liệu đào tạo **không truy cập được** trực tuyến | Hệ thống **lưu tạm** yêu cầu hoá chất và **gửi thông báo** cho điều phối viên đào tạo, người sẽ phê duyệt hoặc từ chối |

**Rule là như nhau trong cả hai trường hợp**, nhưng **chức năng phần mềm — hành động cần thực hiện khi gặp rule lúc chạy — lại khác nhau** tuỳ môi trường vận hành của hệ thống.

### Từ rule tới feature tới requirement

Xem xét hai rule:

- **Rule #1 (action enabler):** *"Nếu đã tới ngày hết hạn của một bình hoá chất, thì thông báo cho người đang giữ bình đó."*
- **Rule #2 (fact):** *"Bình chứa hoá chất có thể tạo sản phẩm phân huỷ gây nổ sẽ hết hạn một năm sau ngày sản xuất."*

Rule #1 là **nguồn gốc** của một feature hệ thống: **"Thông báo cho chủ sở hữu hoá chất về việc hết hạn"**. Các rule bổ sung như #2 giúp hệ thống xác định **bình nào có ngày hết hạn**. Ví dụ, một hộp ether đã mở trở nên **không an toàn** vì có thể tạo sản phẩm phụ gây nổ khi tiếp xúc oxy.

Dựa trên các rule đó, rõ ràng hệ thống phải **theo dõi trạng thái các bình có ngày hết hạn** và **thông báo đúng người vào đúng thời điểm**. BA có thể suy ra một tập functional requirement như: thông báo cho chủ sở hữu **một tuần trước** ngày hết hạn, **đúng ngày** hết hạn, **một tuần sau** ngày hết hạn, và thông báo cho **quản lý của chủ sở hữu hai tuần sau** ngày hết hạn.

> **Mẹo trình bày:** Khi bạn gặp một tập yêu cầu **rất giống nhau** như vậy, hãy cân nhắc trình bày chúng dưới dạng **bảng** thay vì danh sách. Bảng **súc tích hơn, dễ review, dễ hiểu và dễ sửa hơn**, đồng thời cho phép **đánh nhãn gọn hơn** — bảng chỉ cần hiển thị **hậu tố** nối vào nhãn của yêu cầu cha.

### Liên kết rule với requirement

**Để tránh trùng lặp, đừng chép rule từ catalog vào tài liệu yêu cầu.** Thay vào đó, hãy **tham chiếu ngược** tới rule cụ thể như là nguồn gốc của một chức năng hoặc thuật toán. Ba cách định nghĩa liên kết:

1. **Requirement attribute.** Nếu dùng requirements management tool, tạo attribute tên **"Origin"** và chỉ định rule là nguồn gốc của các functional requirement suy ra.
2. **Traceability matrix.** Định nghĩa liên kết truy vết giữa functional requirement và business rule liên quan trong **requirements traceability matrix** hoặc **requirements mapping matrix**. Cách này **dễ nhất khi business rule được lưu cùng repository với requirement**.
3. **Hyperlink.** Nếu rule và requirement được lưu trong file văn bản hoặc bảng tính, định nghĩa **hyperlink** từ tham chiếu ID rule trong requirement tới mô tả rule. **Lưu ý: hyperlink dễ bị gãy** nếu vị trí lưu trữ tập rule thay đổi.

**Lợi ích của việc dùng liên kết:**

- Yêu cầu **luôn cập nhật** theo thay đổi của rule, vì chúng chỉ **trỏ tới bản gốc duy nhất** của rule.
- Khi rule thay đổi, bạn có thể **tìm kiếm theo ID rule** để định vị mọi yêu cầu — hoặc chức năng đã hiện thực — cần sửa.
- **Tạo điều kiện tái sử dụng** cùng một rule ở nhiều nơi và nhiều dự án, vì rule không bị chôn trong tài liệu của một ứng dụng đơn lẻ.

**Đánh đổi:** lập trình viên đọc SRS sẽ phải **theo liên kết chéo** để truy cập chi tiết rule. Đây là cái giá phải trả khi bạn chọn **không nhân bản thông tin**.

---

## Điểm cốt lõi

- **Business rule tồn tại bên ngoài mọi ứng dụng**, nên **tự thân không phải yêu cầu phần mềm** — nhưng là **nguồn gốc** của nhiều yêu cầu.
- Business rule khác **business requirement** (mục tiêu) và **business process** (chuỗi hoạt động).
- Taxonomy năm loại: **facts, constraints, action enablers, inferences, computations** (cộng **terms**).
- **Fact** mô tả quan hệ; đừng thu thập fact ngoài phạm vi dự án.
- **Constraint** dùng các từ *phải, không được, chỉ*; **roles and permissions matrix** là cách ghi súc tích.
- Phân biệt ba loại constraint: **project** (vào project plan), **design/implementation** (vào SRS), **business rule** (vào kho rule).
- **Action enabler** dạng if/then dẫn tới **hành động**; **inference** dạng if/then chỉ tạo ra **tri thức mới**.
- **Computation** nên biểu diễn bằng **bảng hoặc biểu thức**, tránh văn xuôi dài dòng.
- Cẩn thận với **chồng lấn giá trị biên** khi định nghĩa khoảng (1–5, 5–10, 10–20).
- Viết rule **nguyên tử**: không OR ở vế trái, tránh AND ở vế phải của if/then.
- Thuộc tính **static hay dynamic** giúp lập trình viên biết nên **đưa ra bảng/CSDL** thay vì hard-code.
- **Định luật tự nhiên có thể hard-code; luật lệ của con người thì không.**
- Rule tìm thấy trong hệ thống cũ **có thể đã lỗi thời** — luôn xác nhận lại.
- **Cùng một rule dẫn tới functional requirement khác nhau** tuỳ môi trường vận hành.
- **Đừng chép nội dung rule vào SRS** — hãy liên kết qua attribute, traceability matrix hoặc hyperlink.
- **Doanh nghiệp sở hữu kho business rule**, không phải phòng IT.

## Tóm tắt

- Coi business rule là **tài sản cấp doanh nghiệp**, lưu trong kho chung mà mọi dự án truy cập được.
- Dùng **taxonomy năm loại** không phải để tranh cãi phân loại, mà để **nhắc bạn nhớ tới những rule đã bị bỏ sót**.
- Viết rule ở **mức nguyên tử** để dễ hiểu, dễ tái sử dụng và dễ bảo trì khi chỉ một phần thay đổi.
- Ghi lại **loại rule, tính biến động và nguồn gốc** — ba thông tin trực tiếp giúp lập trình viên và người bảo trì.
- **Khám phá rule** từ tri thức tổ chức, hệ thống cũ, mô hình quy trình, tài liệu, phân tích dữ liệu và phòng tuân thủ.
- **Nối rule với requirement bằng liên kết**, không bằng sao chép, để mọi thứ luôn đồng bộ khi rule thay đổi.
- Nhớ rằng **hiện thực rule thiếu suy nghĩ** có thể phá hỏng trải nghiệm khách hàng dù rule hoàn toàn hợp lý.
