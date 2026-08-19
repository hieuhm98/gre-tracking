# Mô hình phân tích & yêu cầu dữ liệu

## 1. Vì sao mô hình hoá & chọn mô hình phù hợp

> **Không một góc nhìn nào về yêu cầu mang lại hiểu biết trọn vẹn.**

Bạn cần **kết hợp nhiều biểu diễn** — văn bản và trực quan, ở các mức trừu tượng khác nhau — để vẽ nên bức tranh đầy đủ về hệ thống dự định. Các biểu diễn có thể gồm: danh sách functional requirement, bảng, mô hình phân tích trực quan, prototype giao diện, acceptance test, decision tree, decision table, ảnh chụp, công thức toán học.

**Lý tưởng là những người khác nhau tạo ra những biểu diễn khác nhau.** BA viết functional requirement và vẽ vài mô hình; nhà thiết kế giao diện dựng prototype; test lead viết test case. **So sánh các biểu diễn được tạo ra qua những quá trình tư duy và ký hiệu khác nhau sẽ bộc lộ những thiếu nhất quán, nhập nhằng, giả định và thiếu sót mà không góc nhìn đơn lẻ nào cho thấy.**

**Sơ đồ truyền đạt một số loại thông tin hiệu quả hơn văn bản.** Chúng còn giúp **bắc cầu qua rào cản ngôn ngữ và từ vựng** giữa các thành viên. BA có thể cần giải thích mục đích của mô hình và ký hiệu dùng trong đó cho các stakeholder khác.

### Mô hình bổ sung, không thay thế

Một mục tiêu ban đầu của **structured systems analysis** là **thay thế** đặc tả chức năng cổ điển bằng sơ đồ và ký hiệu hình thức hơn văn bản tường thuật. Tuy nhiên, **kinh nghiệm cho thấy mô hình phân tích nên BỔ SUNG chứ không thay thế** một đặc tả viết bằng ngôn ngữ tự nhiên. Lập trình viên và tester vẫn hưởng lợi từ **mức chi tiết và độ chính xác** mà yêu cầu viết ra cung cấp.

**Đừng tìm một sơ đồ duy nhất gói trọn mọi thứ.** Không có sơ đồ nào bao trùm được toàn bộ yêu cầu của một hệ thống. Thực tế, nếu bạn có thể mô hình hoá toàn bộ hệ thống trong một sơ đồ duy nhất, sơ đồ đó sẽ **không dùng được** — hệt như một danh sách một nghìn yêu cầu.

### Giá trị chính: tìm ra lỗi

**Mô hình trực quan giúp bạn phát hiện yêu cầu thiếu, thừa và thiếu nhất quán.** Xét giới hạn của trí nhớ ngắn hạn con người, việc phân tích một danh sách **một nghìn yêu cầu** để tìm thiếu nhất quán, trùng lặp và yêu cầu thừa là **gần như bất khả thi**. Khi bạn đọc tới yêu cầu thứ mười lăm, bạn có lẽ đã quên vài yêu cầu đầu tiên. **Bạn khó có thể tìm ra hết mọi lỗi chỉ bằng cách review yêu cầu dạng văn bản.**

### Phân tích hay thiết kế?

Các ký hiệu mô hình hữu ích cho **cả việc khám phá yêu cầu lẫn thiết kế giải pháp phần mềm**. Việc bạn đang làm phân tích hay thiết kế phụ thuộc vào **thời điểm và ý định**:

| | Dùng cho **phân tích yêu cầu** | Dùng cho **thiết kế** |
|---|---|---|
| Mô hình hoá điều gì | **Miền vấn đề** hoặc biểu diễn khái niệm của hệ thống mới | Cách bạn **dự định hiện thực** hệ thống |
| Nội dung | Khía cạnh **logic** của thành phần dữ liệu, giao dịch, biến đổi, đối tượng thế giới thực, thay đổi trạng thái | Cơ sở dữ liệu thực sự sẽ tạo, object class sẽ khởi tạo, module mã sẽ phát triển |

> **Vì sơ đồ phân tích và sơ đồ thiết kế dùng CÙNG ký hiệu, hãy đánh dấu rõ ràng mỗi sơ đồ bạn vẽ là mô hình PHÂN TÍCH (khái niệm) hay mô hình THIẾT KẾ (thứ bạn định xây).**

### Công cụ

Nhiều công cụ hỗ trợ mô hình hoá: công cụ mô hình hoá thương mại, requirements management tool, và công cụ vẽ chung như Microsoft Visio. **Công cụ mô hình hoá chuyên dụng có nhiều lợi thế** so với công cụ vẽ chung:

- Giúp **cải thiện sơ đồ qua nhiều vòng lặp** dễ dàng — bạn gần như **không bao giờ vẽ đúng ngay lần đầu**, nên khả năng lặp là chìa khoá thành công.
- **Thực thi quy tắc** của từng phương pháp mô hình, phát hiện lỗi cú pháp và thiếu nhất quán mà người review có thể không thấy.
- Một số công cụ **liên kết nhiều sơ đồ với nhau** và với functional requirement, data requirement tương ứng.
- Requirements management tool hỗ trợ mô hình hoá cho phép **truy vết yêu cầu tới mô hình**.
- Dùng công cụ với **ký hiệu chuẩn** giúp giữ các mô hình nhất quán với nhau.

### Phản bác thường gặp

| Phản bác | Câu trả lời |
|----------|-------------|
| *"Hệ thống của chúng tôi quá phức tạp để mô hình hoá"* | **Mô hình đơn giản hơn hệ thống mà nó mô hình hoá.** Nếu bạn không xử lý nổi độ phức tạp của mô hình, làm sao bạn xử lý nổi độ phức tạp của hệ thống? |
| *"Lịch dự án quá gấp, không có thời gian mô hình hoá"* | Tạo phần lớn mô hình **không tốn nhiều thời gian hơn** so với việc viết ra các câu yêu cầu và phân tích chúng để tìm vấn đề. Thời gian thêm sẽ được bù lại **nhiều hơn** nhờ bắt được lỗi yêu cầu trước khi xây hệ thống. |

**Mô hình hoặc một phần mô hình đôi khi có thể tái sử dụng** từ dự án này sang dự án khác, hoặc ít nhất làm **điểm khởi đầu straw-man** cho dự án sau.

### Tập trung vào đâu

**Hiếm khi một đội cần tạo bộ mô hình phân tích đầy đủ cho toàn bộ hệ thống.** Hãy tập trung mô hình hoá vào:

- Phần **phức tạp nhất và rủi ro nhất** của hệ thống.
- Phần **dễ nhập nhằng hoặc còn nhiều bất định** nhất.
- Các thành phần **safety-critical, security-critical và mission-critical**, vì tác động của lỗi ở đó rất nghiêm trọng.

---

## 2. Từ tiếng nói khách hàng tới mô hình

Bằng cách **lắng nghe cẩn thận cách khách hàng trình bày yêu cầu**, BA có thể chọn ra các **từ khoá** chuyển thành thành phần mô hình cụ thể.

| Loại từ | Ví dụ | Thành phần mô hình tương ứng |
|---------|-------|------------------------------|
| **Danh từ** | Người, tổ chức, hệ thống phần mềm, phần tử dữ liệu, đối tượng tồn tại | External entity, data store hoặc data flow (DFD); Actor (use case diagram); Entity hoặc thuộc tính của nó (ERD); Lane (swimlane diagram); Đối tượng có trạng thái (STD) |
| **Động từ** | Hành động, việc người dùng hoặc hệ thống có thể làm, sự kiện có thể xảy ra | Process (DFD); Bước quy trình (swimlane); Use case (use case diagram); Relationship (ERD); Transition (STD); Activity (activity diagram); Event (event-response table) |
| **Điều kiện** | Câu logic có điều kiện, dạng if/then | Decision (decision tree, decision table, activity diagram); Branching (swimlane hoặc activity diagram) |

**Ví dụ thực tế.** Hãy xem đoạn mô tả nhu cầu từ product champion của user class Chemist. Các **danh từ** quan trọng, các **động từ**, và các **câu điều kiện** đều dẫn tới thành phần mô hình:

> *Một chemist hoặc một thành viên của kho hoá chất có thể **đặt** một **yêu cầu** cho một hoặc nhiều **hoá chất** **nếu người dùng là người yêu cầu được uỷ quyền**. Yêu cầu có thể được đáp ứng bằng cách **giao** một **bình chứa** hoá chất đã có trong **kho**, hoặc bằng cách **đặt** một **đơn hàng** mới với **nhà cung cấp** bên ngoài. **Nếu hoá chất là nguy hiểm**, hoá chất chỉ có thể được giao **nếu người dùng đã được đào tạo**. Người đặt yêu cầu phải có thể **tìm kiếm** **catalog nhà cung cấp** trực tuyến trong khi chuẩn bị yêu cầu. Hệ thống cần **theo dõi trạng thái** của mọi yêu cầu hoá chất từ lúc nó được chuẩn bị cho tới khi yêu cầu được **đáp ứng** hoặc bị **huỷ**. Nó cũng cần theo dõi **lịch sử** của mọi bình chứa hoá chất từ lúc nhận tại công ty cho tới khi được **dùng hết** hoặc **thải bỏ**.*

Từ đoạn văn ngắn này, BA có thể rút ra: các **actor** (Chemist, Chemical Stockroom Staff, Requester), các **entity** (Chemical Request, Chemical, Container, Vendor Catalog, Order), các **use case** (Request a Chemical, Search Vendor Catalogs), các **state** của chemical request (prepared, fulfilled, canceled) và của container (received, consumed, disposed), cùng các **decision** (người dùng có được uỷ quyền không, hoá chất có nguy hiểm không, người dùng đã được đào tạo chưa).

> **Bẫy:** Đừng giả định khách hàng đã biết cách đọc mô hình phân tích, nhưng cũng **đừng kết luận rằng họ không thể hiểu chúng**. Hãy đưa **chú giải ký hiệu** cho product champion, **giải thích mục đích và ký hiệu** của từng mô hình, và **cùng đi qua một mô hình mẫu** để giúp họ học cách review từng loại sơ đồ.

### Bảng chọn mô hình theo loại thông tin

| Thông tin cần thể hiện | Kỹ thuật biểu diễn phù hợp |
|------------------------|----------------------------|
| **Giao diện ngoài của hệ thống** | Context diagram và use case diagram xác định đối tượng bên ngoài kết nối tới hệ thống; DFD minh hoạ đầu vào và đầu ra ở mức trừu tượng cao; ecosystem map xác định hệ thống tương tác kể cả không có giao diện trực tiếp; swimlane diagram thể hiện điều gì xảy ra trong tương tác giữa các hệ thống |
| **Luồng quy trình nghiệp vụ** | DFD mức đỉnh cho mức trừu tượng cao; swimlane diagram thể hiện vai trò tham gia; DFD mức chi tiết, flowchart và activity diagram cho chi tiết |
| **Định nghĩa dữ liệu & quan hệ đối tượng dữ liệu** | ERD thể hiện quan hệ logic giữa các entity; class diagram thể hiện kết nối logic giữa object class; data dictionary chứa định nghĩa chi tiết |
| **Trạng thái hệ thống & đối tượng** | State-transition diagram và state table; event-response table |
| **Logic phức tạp** | Decision tree thể hiện kết quả có thể từ một tập quyết định; decision table xác định yêu cầu ứng với mọi tổ hợp đúng/sai |
| **Giao diện người dùng** | Dialog map cho góc nhìn cấp cao; storyboard và low-fidelity prototype; detailed screen layout và high-fidelity prototype cho chi tiết |
| **Mô tả tác vụ người dùng** | User story, scenario, use case specification; swimlane, flowchart, activity diagram; functional requirement và test case cho mức chi tiết nhất |
| **Yêu cầu phi chức năng** | Thường viết bằng ngôn ngữ tự nhiên, nhưng **Planguage** cho phép đặc tả chính xác hơn nhiều |

---

## 3. Data flow diagram

**Data flow diagram (DFD)** là công cụ cơ bản của structured analysis. Nó xác định:

- Các **tiến trình biến đổi (process)** của hệ thống — vẽ bằng **hình tròn (bubble)**.
- Các **kho dữ liệu hoặc vật liệu (data store)** mà hệ thống thao tác — vẽ bằng **hai đường ngang song song**.
- Các **luồng dữ liệu hoặc vật chất** giữa process, store và thế giới bên ngoài — vẽ bằng **mũi tên**.
- Các **external entity (terminator)** — vẽ bằng **hình chữ nhật**.

DFD dùng cách tiếp cận **phân rã chức năng**, chia vấn đề phức tạp thành các mức chi tiết tăng dần. Cách này hoạt động tốt cho **hệ thống xử lý giao dịch** và các ứng dụng nặng về chức năng. Bằng cách bổ sung phần tử **control flow**, kỹ thuật DFD được mở rộng để mô hình hoá **hệ thống thời gian thực**.

### Giá trị đặc biệt của DFD

> **DFD cho cái nhìn tổng thể về cách dữ liệu di chuyển qua hệ thống — điều mà các mô hình khác KHÔNG thể hiện tốt.**

Không use case hay swimlane diagram đơn lẻ nào cho bạn thấy **toàn bộ vòng đời của một mẩu dữ liệu**, vì nhiều người và hệ thống khác nhau thực thi các process sử dụng, thao tác và tạo ra dữ liệu.

Ngoài ra, **nhiều mẩu dữ liệu có thể được gộp lại và biến đổi bởi một process** — ví dụ nội dung giỏ hàng cộng thông tin giao hàng cộng thông tin thanh toán được biến đổi thành một đối tượng đơn hàng. Điều này cũng **khó thể hiện trong các mô hình khác**.

**Nhưng DFD không đủ dùng một mình:** chi tiết về cách dữ liệu được biến đổi được thể hiện tốt hơn bằng **các bước trong một process, dùng use case hoặc swimlane diagram**.

### Các mức của DFD

- **Context diagram** là **mức trừu tượng cao nhất** của mô hình DFD: toàn bộ hệ thống là **một process black-box duy nhất**. Luồng trên context diagram thường biểu diễn **cấu trúc dữ liệu phức hợp** được định nghĩa trong data dictionary.
- **Level 0 DFD** phân chia hệ thống thành các **process chính**. Mọi luồng dữ liệu từ context diagram **đều xuất hiện** trên level 0. Ngoài ra level 0 chứa các **data store nội bộ** — thứ **không xuất hiện** trên context diagram.
- Mỗi process trên level 0 có thể **mở rộng thành một DFD riêng** để lộ thêm chi tiết. BA tiếp tục **làm mịn dần** cho tới khi sơ đồ mức thấp nhất chỉ còn các **thao tác nguyên thuỷ**, có thể biểu diễn rõ bằng văn bản, pseudocode, swimlane diagram hoặc activity diagram. **Functional requirement sẽ định nghĩa chính xác điều gì xảy ra bên trong mỗi primitive process.**

**Ý nghĩa hướng mũi tên với data store:**

- Luồng **từ bubble VÀO store** = thao tác **ghi**.
- Luồng **từ store RA bubble** = thao tác **đọc**.
- Mũi tên **hai chiều** giữa store và bubble = thao tác **cập nhật**.

### Quy ước vẽ DFD

Không phải ai cũng theo cùng quy ước, nhưng những nguyên tắc sau rất hữu ích. **Việc dùng mô hình để tăng cường giao tiếp quan trọng hơn việc tuân thủ giáo điều các nguyên tắc này.**

- **Process giao tiếp với nhau QUA data store**, không qua luồng trực tiếp từ process này sang process kia.
- **Dữ liệu không thể chảy trực tiếp từ store này sang store khác**, cũng không chảy trực tiếp giữa external entity và data store — nó **phải đi qua một process bubble**.
- **Đừng cố hàm ý thứ tự xử lý** bằng DFD.
- Đặt tên process bằng **hành động súc tích: động từ cộng tân ngữ** (ví dụ *generate reports*). Dùng tên **có ý nghĩa với khách hàng** và phù hợp với miền nghiệp vụ.
- **Đánh số process duy nhất và theo phân cấp.** Trên level 0 dùng số nguyên; DFD con của process 3 sẽ đánh số 3.1, 3.2…
- **Đừng vẽ quá 8 tới 10 process trên một sơ đồ**, nếu không nó sẽ khó vẽ, khó sửa và khó hiểu. Nếu có nhiều hơn, hãy **nhóm các process liên quan** thành một process cấp cao hơn.
- **Bubble chỉ có luồng vào hoặc chỉ có luồng ra là đáng ngờ.** Việc xử lý mà một bubble biểu diễn thường cần **cả luồng vào lẫn luồng ra**.
- Mỗi mức DFD phải **cân bằng và nhất quán** với mức trên: mọi luồng vào ra trên sơ đồ con phải khớp với luồng trên sơ đồ cha. Cấu trúc dữ liệu phức hợp ở mức cao có thể **được tách thành các phần tử con** ở mức thấp hơn.

**Khi khách hàng review DFD**, hãy đề nghị họ bảo đảm mọi tiến trình thao tác dữ liệu đã biết và liên quan đều được biểu diễn, và các process **không thiếu hoặc thừa** luồng vào ra. **Review DFD thường bộc lộ user class, quy trình nghiệp vụ và kết nối tới hệ thống khác mà trước đó chưa được nhận ra.**

> **Câu chuyện: mô hình hoá vấn đề, không phải phần mềm.** Một đội tái thiết kế quy trình nghiệp vụ đặt mục tiêu **giảm 10 lần** thời gian đưa một hoá chất mới vào sản phẩm. Đội gồm nhà hoá học tổng hợp, nhà hoá học mở rộng quy mô, nhà hoá học phân tích, luật sư sáng chế và đại diện an toàn sức khoẻ.
>
> Sau khi thiết kế quy trình mới và mô hình hoá bằng swimlane diagram, một thành viên **phỏng vấn từng người chịu trách nhiệm mỗi bước** với **hai câu hỏi**: *"Bạn cần thông tin gì để thực hiện bước này?"* và *"Bước này tạo ra thông tin gì mà chúng ta nên lưu lại?"*
>
> Khi đối chiếu câu trả lời cho toàn bộ các bước, họ tìm thấy **những bước cần dữ liệu mà không ai có**, và **những bước tạo ra dữ liệu mà không ai cần**. Họ đã sửa hết. Sau đó họ vẽ **DFD** minh hoạ quy trình mới và **ERD** mô hình hoá quan hệ dữ liệu, cùng một **data dictionary** định nghĩa mọi mục dữ liệu. Các mô hình này trở thành **công cụ giao tiếp** giúp cả đội đạt hiểu biết chung, và là **điểm khởi đầu quý giá** để xác định phạm vi và đặc tả yêu cầu cho phần mềm hỗ trợ quy trình đó.

---

## 4. Swimlane diagram & process flow

**Swimlane diagram** biểu diễn các bước trong một quy trình nghiệp vụ hoặc các thao tác của hệ thống phần mềm. Chúng là **biến thể của flowchart**, được chia thành các **thành phần trực quan gọi là lane**. Chúng còn được gọi là **cross-functional diagram**, và tương tự **UML activity diagram**.

Swimlane diagram thường dùng nhất để thể hiện **quy trình nghiệp vụ, luồng công việc, hoặc tương tác giữa hệ thống và người dùng**.

**Quan hệ với các mô hình khác:**

- Swimlane có thể **thể hiện điều gì xảy ra BÊN TRONG các process bubble** của DFD.
- Chúng giúp **liên kết các functional requirement** cho phép người dùng thực hiện tác vụ cụ thể.
- Chúng dùng để **phân tích chi tiết nhằm xác định yêu cầu hỗ trợ từng bước quy trình**.

> **Swimlane là một trong những mô hình DỄ HIỂU NHẤT với stakeholder**, vì ký hiệu đơn giản và phổ biến. Vẽ nháp quy trình nghiệp vụ bằng swimlane là **điểm khởi đầu tốt cho các cuộc trò chuyện elicitation**.

**Các phần tử thường dùng nhất:**

- **Bước quy trình** — vẽ bằng **hình chữ nhật**.
- **Chuyển tiếp** giữa các bước — vẽ bằng **mũi tên** nối các hình chữ nhật.
- **Quyết định** — vẽ bằng **hình thoi** có nhiều nhánh đi ra; lựa chọn được ghi làm **nhãn văn bản trên mỗi mũi tên** rời khỏi hình thoi.
- **Swimlane** — các **đường ngang hoặc dọc** chia quy trình. Lane thường là **vai trò, phòng ban hoặc hệ thống**, cho biết **ai hoặc cái gì** thực thi các bước trong lane đó.

**Cách dùng để tìm functional requirement:** bắt đầu từ hộp đầu tiên và suy nghĩ hệ thống phải có chức năng gì để hỗ trợ bước đó, cùng **yêu cầu dữ liệu** cho các đối tượng liên quan. Với một bước như *"Nhận và duyệt hoá đơn"*, hãy hỏi: **Hoá đơn được nhận thế nào? Định dạng của nó là gì? Việc xử lý là thủ công hay hệ thống tự động hoá một phần hoặc toàn bộ? Dữ liệu từ hoá đơn có được đẩy sang hệ thống khác không?**

> **Lưu ý quan trọng về phạm vi:** Một quy trình nghiệp vụ hoàn chỉnh **có thể không nằm trọn trong phạm vi một hệ thống phần mềm**. Ví dụ phòng Receiving có thể xuất hiện trong swimlane như một phần của quy trình, nhưng **không xuất hiện trên context diagram hay DFD** vì nó không bao giờ tương tác trực tiếp với hệ thống. **Việc review ecosystem map có thể giúp đội nhận ra một phòng ban như vậy có vị trí trong quy trình.**

Hãy đối chiếu swimlane với **luồng dữ liệu vào ra của process bubble tương ứng trong DFD** để bảo đảm hai mô hình **tiêu thụ và tạo ra cùng dữ liệu**, và sửa mọi lỗi tìm thấy. Đây chính là **sức mạnh của mô hình hoá**: tạo nhiều biểu diễn qua những quá trình tư duy khác nhau để đạt hiểu biết phong phú hơn về hệ thống bạn đang xây.

---

## 5. State-transition diagram & state table

Hệ thống phần mềm gồm tổ hợp của **hành vi chức năng, thao tác dữ liệu và thay đổi trạng thái**.

**Hệ thống thời gian thực và ứng dụng điều khiển tiến trình** tại bất kỳ thời điểm nào cũng chỉ tồn tại ở **một trong số hữu hạn các trạng thái**. Thay đổi trạng thái chỉ diễn ra khi **tiêu chí được định nghĩa rõ** được thoả mãn — chẳng hạn nhận một tín hiệu đầu vào cụ thể dưới điều kiện nhất định. Ví dụ điển hình: **giao lộ đường cao tốc** tích hợp cảm biến xe, làn rẽ được bảo vệ, nút bấm và đèn báo cho người đi bộ.

**Nhiều hệ thống thông tin cũng có trạng thái**: đơn hàng, hoá đơn, mặt hàng tồn kho — những **đối tượng nghiệp vụ có vòng đời** gồm một chuỗi trạng thái (status) có thể có.

> **Vấn đề khi chỉ dùng văn bản:** Mô tả một tập thay đổi trạng thái phức tạp bằng ngôn ngữ tự nhiên tạo ra **xác suất cao là bạn sẽ bỏ sót một thay đổi được phép hoặc đưa vào một thay đổi bị cấm**. Tuỳ cách tổ chức SRS, các yêu cầu liên quan tới hành vi theo trạng thái có thể **nằm rải rác khắp tài liệu**, khiến việc đạt hiểu biết tổng thể về hành vi hệ thống trở nên khó khăn.

### State-transition diagram (STD)

STD chứa **ba loại phần tử**:

- **Trạng thái có thể có** — vẽ bằng **hình chữ nhật** (một số ký hiệu dùng hình tròn; cả hai đều được, chỉ cần **nhất quán**).
- **Thay đổi trạng thái được phép (transition)** — vẽ bằng **mũi tên** nối các cặp hình chữ nhật.
- **Sự kiện hoặc điều kiện** gây ra mỗi transition — ghi làm **nhãn văn bản trên mỗi mũi tên**. Nhãn có thể nêu cả sự kiện lẫn phản hồi hệ thống.

**Termination state** là trạng thái cuối cùng mà một đối tượng có thể mang: chúng có **mũi tên đi vào nhưng không có mũi tên đi ra**.

> **Khách hàng có thể học đọc STD chỉ với một chút hướng dẫn về ký hiệu — nó chỉ gồm hộp và mũi tên.**

**Ví dụ: bảy trạng thái của một chemical request:**

| Trạng thái | Ý nghĩa |
|-----------|---------|
| **In Preparation** | Requester đang tạo yêu cầu mới, khởi động từ một phần khác của hệ thống |
| **Postponed** | Requester lưu một yêu cầu dở dang để hoàn tất sau, **không** gửi đi và **không** huỷ |
| **Accepted** | Requester đã gửi yêu cầu hoàn chỉnh và hệ thống chấp nhận xử lý |
| **Placed** | Yêu cầu phải do nhà cung cấp bên ngoài đáp ứng và buyer đã đặt đơn hàng |
| **Fulfilled** | Yêu cầu đã được thoả mãn, bằng cách giao bình chứa từ kho hoặc nhận hoá chất từ nhà cung cấp |
| **Back-ordered** | Nhà cung cấp không có sẵn hoá chất và báo cho buyer rằng nó đang chờ giao |
| **Canceled** | Requester huỷ yêu cầu đã chấp nhận trước khi được đáp ứng, hoặc buyer huỷ đơn hàng |

Hai **termination state** ở đây là **Fulfilled** và **Canceled**.

### State table

**State table** thể hiện mọi transition có thể dưới dạng **ma trận**. Mọi trạng thái được liệt kê ở **cột đầu tiên** và **lặp lại trên hàng đầu tiên**. Các ô cho biết transition từ trạng thái bên trái sang trạng thái ở trên có **hợp lệ** hay không, và xác định **sự kiện gây transition**.

**STD và state table thể hiện CÙNG một thông tin nhưng phục vụ mục đích khác nhau:**

- **State table** giúp bảo đảm **không transition nào bị bỏ sót**, vì BA phân tích **từng ô** của ma trận.
- **STD** giúp stakeholder **hình dung các chuỗi transition có thể**.

Bạn có thể **không cần tạo cả hai**. Nhưng nếu đã tạo một cái, cái kia rất dễ tạo — hữu ích khi bạn muốn phân tích thay đổi trạng thái từ hai góc nhìn. Trong state table, **hàng nào có mọi ô đều là "không"** chính là một **termination state**.

> **Bằng chứng về giá trị:** Khi đại diện người dùng của Chemical Tracking System review STD ban đầu cho chemical request, họ **xác định một trạng thái không cần thiết**, thấy rằng **một trạng thái thiết yếu bị thiếu**, và chỉ ra **hai transition sai**. **Không ai nhìn thấy những lỗi đó khi review các functional requirement tương ứng.**
>
> Điều này nhấn mạnh giá trị của việc biểu diễn thông tin yêu cầu ở **nhiều mức trừu tượng khác nhau**. Thường dễ phát hiện vấn đề hơn khi bạn **lùi khỏi mức chi tiết** và nhìn bức tranh lớn mà mô hình phân tích cung cấp.

**Tuy nhiên STD không cung cấp đủ chi tiết** để lập trình viên biết phải xây gì. Vì vậy SRS vẫn phải chứa **functional requirement** gắn với việc xử lý chemical request và các thay đổi trạng thái có thể của nó.

**Mô hình trạng thái cho một góc nhìn cấp cao trải rộng nhiều use case hoặc user story**, mỗi cái có thể thực hiện một transition. Chúng giúp lập trình viên hiểu hành vi dự kiến, **tạo điều kiện kiểm thử sớm** vì tester có thể suy ra test phủ mọi đường transition được phép, và hữu ích để bảo đảm **mọi trạng thái và transition cần thiết đã được mô tả đúng và đủ** trong functional requirement.

---

## 6. Dialog map

**Dialog map** biểu diễn thiết kế giao diện người dùng ở **mức trừu tượng cao**. Nó thể hiện **các phần tử dialog** trong hệ thống và **liên kết điều hướng** giữa chúng, nhưng **không thể hiện thiết kế màn hình chi tiết**.

**Nền tảng khái niệm:** một giao diện người dùng có thể được coi là **một chuỗi thay đổi trạng thái**. Tại bất kỳ thời điểm nào, **chỉ MỘT phần tử dialog** — menu, workspace, hộp thoại, dòng lệnh, màn hình cảm ứng — sẵn sàng nhận đầu vào từ người dùng. Người dùng có thể điều hướng tới một số phần tử dialog khác **tuỳ vào hành động họ thực hiện** tại vị trí nhập liệu đang hoạt động. Số lượng đường điều hướng có thể lớn, nhưng nó **hữu hạn và thường đã biết**.

> **Dialog map thực chất chỉ là một giao diện người dùng được mô hình hoá dưới dạng state-transition diagram.**

**Ký hiệu** giống STD thông thường: mỗi **phần tử dialog** là một **trạng thái (hình chữ nhật)**, mỗi **tuỳ chọn điều hướng được phép** là một **transition (mũi tên)**, và **điều kiện kích hoạt** được ghi làm nhãn văn bản trên mũi tên.

**Bốn loại điều kiện kích hoạt:**

- **Hành động người dùng** — nhấn phím chức năng, nhấp vào siêu liên kết, thao tác trên màn hình cảm ứng.
- **Giá trị dữ liệu** — ví dụ giá trị nhập không hợp lệ kích hoạt hiển thị thông báo lỗi.
- **Điều kiện hệ thống** — ví dụ phát hiện máy in hết giấy.
- **Tổ hợp** của các loại trên — ví dụ gõ số tuỳ chọn menu rồi nhấn Enter.

### Dialog map khác flowchart

Dialog map **trông giống flowchart nhưng phục vụ mục đích khác**:

| | Flowchart | Dialog map |
|---|-----------|------------|
| Thể hiện | Các bước xử lý và điểm quyết định **một cách tường minh** | Các phần tử hiển thị giao diện |
| Không thể hiện | Màn hình giao diện | **Việc xử lý** diễn ra trên các đường transition |
| Điểm rẽ nhánh | Hiện rõ trên sơ đồ | **Ẩn sau các màn hình** được vẽ là hình chữ nhật; điều kiện dẫn tới màn hình này hay màn hình kia xuất hiện trong **nhãn trên transition** |

### Cách đơn giản hoá dialog map

- **Bỏ qua chức năng toàn cục** như nhấn F1 để mở trợ giúp từ mọi phần tử dialog. SRS nên đặc tả rằng chức năng này sẽ có, nhưng **vẽ nhiều hộp màn hình trợ giúp sẽ làm rối mô hình mà thêm rất ít giá trị**.
- Khi mô hình hoá website, **bỏ qua các liên kết điều hướng chuẩn** xuất hiện trên mọi trang.
- Cũng có thể **bỏ qua transition đảo ngược** một chuỗi điều hướng, vì **nút Back của trình duyệt** xử lý việc đó.

### Giá trị thực tiễn

**Dialog map cho phép bạn khám phá các khái niệm giao diện giả định** dựa trên hiểu biết về yêu cầu. Người dùng và lập trình viên có thể nghiên cứu nó để **đạt tầm nhìn chung** về cách người dùng tương tác với hệ thống để thực hiện tác vụ.

**Nó cũng hữu ích để mô hình hoá kiến trúc trực quan của website** — các liên kết điều hướng bạn xây vào site xuất hiện thành transition trên dialog map. (Người dùng có thêm lựa chọn qua nút Back, Forward và ô URL, nhưng dialog map không thể hiện những cái đó.)

> **Dialog map nắm bắt được BẢN CHẤT của tương tác người dùng – hệ thống và luồng tác vụ mà KHÔNG làm đội sa lầy vào bố cục màn hình chi tiết.**

**Người dùng có thể lần theo dialog map để tìm điều hướng thiếu, sai hoặc không cần thiết** — và do đó tìm ra **yêu cầu thiếu, sai hoặc không cần thiết**.

**Dialog map là cách tuyệt vời để biểu diễn tương tác mà một use case mô tả.** Nó có thể thể hiện alternative flow như các nhánh rẽ khỏi normal flow. Vẽ **mảnh dialog map trên bảng trắng** rất hữu ích trong workshop khai thác use case, khi cả nhóm khám phá chuỗi hành động của actor và phản hồi của hệ thống.

**Một lợi ích thiết kế quan trọng:** một số transition trên dialog map cho phép người dùng **rút lui khỏi thao tác đang thực hiện**. **Người dùng khó chịu nếu bị buộc phải hoàn tất một tác vụ dù họ đã đổi ý giữa chừng.** Dialog map cho phép bạn **tối đa hoá khả năng sử dụng bằng cách thiết kế sẵn các tuỳ chọn back-out và cancel tại những điểm chiến lược**.

Người dùng review dialog map có thể phát hiện yêu cầu thiếu. Ví dụ, một người dùng cẩn thận có thể muốn **xác nhận thao tác dẫn tới việc huỷ toàn bộ một yêu cầu** để tránh mất dữ liệu ngoài ý muốn. **Thêm chức năng này ở giai đoạn phân tích rẻ hơn nhiều so với xây nó vào một sản phẩm đã hoàn thành.**

> **Vì dialog map chỉ biểu diễn góc nhìn khái niệm về các phần tử tham gia tương tác, ĐỪNG cố ghim mọi chi tiết thiết kế giao diện ở giai đoạn yêu cầu.** Hãy dùng những mô hình này để giúp stakeholder đạt hiểu biết chung về chức năng dự định của hệ thống.

---

## 7. Decision table & decision tree

Phần mềm thường bị chi phối bởi **logic phức tạp**, với nhiều tổ hợp điều kiện dẫn tới các hành vi khác nhau. Ví dụ: nếu người lái nhấn nút tăng tốc trên hệ thống cruise control **và** xe đang ở chế độ cruise, hệ thống tăng tốc độ; nhưng nếu xe **không** đang cruise, đầu vào bị bỏ qua.

> **Lập trình viên cần functional requirement mô tả hệ thống phải làm gì dưới MỌI tổ hợp điều kiện có thể. Tuy nhiên rất dễ bỏ sót một điều kiện, dẫn tới yêu cầu thiếu — và những khoảng trống này rất khó phát hiện khi review một đặc tả dạng văn bản.**

**Decision table** liệt kê các giá trị khác nhau cho mọi yếu tố ảnh hưởng hành vi và chỉ ra **hành động hệ thống mong đợi ứng với mỗi tổ hợp**. Các yếu tố có thể được thể hiện bằng:

- Câu phát biểu với điều kiện **đúng/sai**.
- Câu hỏi với câu trả lời **có/không**.
- Câu hỏi với **nhiều hơn hai giá trị** có thể.

**Ví dụ: quyết định chấp nhận hay từ chối yêu cầu hoá chất mới.** Bốn yếu tố ảnh hưởng:

1. Người tạo yêu cầu **có được uỷ quyền** yêu cầu hoá chất không?
2. Hoá chất **có sẵn** trong kho hoặc từ nhà cung cấp không?
3. Hoá chất **có nằm trong danh sách nguy hiểm** đòi hỏi đào tạo đặc biệt không?
4. Người tạo yêu cầu **đã được đào tạo** xử lý loại hoá chất nguy hiểm này chưa?

Mỗi yếu tố có hai điều kiện, về nguyên tắc cho **2⁴ = 16 tổ hợp** đúng/sai, tức tối đa 16 functional requirement riêng biệt.

> **Nhưng trên thực tế, nhiều tổ hợp dẫn tới CÙNG một phản hồi hệ thống.** Nếu người dùng **không được uỷ quyền** yêu cầu hoá chất, hệ thống sẽ không chấp nhận yêu cầu, nên **các điều kiện còn lại trở nên không liên quan** — được thể hiện bằng **dấu gạch ngang** trong ô của decision table. Bảng cho thấy chỉ có **năm functional requirement riêng biệt** phát sinh từ mọi tổ hợp điều kiện.

**Decision tree** biểu diễn **cùng logic đó** dưới dạng cây phân nhánh. Với ví dụ trên, cây sẽ có **năm hộp lá** tương ứng năm kết quả có thể: chấp nhận hoặc từ chối yêu cầu.

> **Cả decision table lẫn decision tree đều là cách hữu ích để tài liệu hoá yêu cầu — hoặc business rule — mà KHÔNG bỏ sót tổ hợp điều kiện nào. Ngay cả một decision table hay decision tree phức tạp cũng DỄ ĐỌC HƠN một khối yêu cầu văn bản lặp đi lặp lại.**

---

## 8. Event-response table

**Use case và user story không phải lúc nào cũng hữu ích hoặc đủ để khám phá chức năng mà lập trình viên phải hiện thực.** Điều này đặc biệt đúng với **hệ thống thời gian thực**.

> **Ví dụ: một giao lộ đường cao tốc phức tạp** với nhiều đèn giao thông và tín hiệu cho người đi bộ. **Không có nhiều use case** cho hệ thống như vậy: người lái muốn đi thẳng, rẽ trái hoặc rẽ phải; người đi bộ muốn qua đường; xe cấp cứu muốn chuyển đèn sang xanh theo hướng của mình; lực lượng chức năng có thể đặt camera chụp biển số xe vượt đèn đỏ. **Chỉ riêng thông tin này KHÔNG đủ để lập trình viên xây đúng chức năng.**

**Cách tiếp cận thay thế: xác định các external event mà hệ thống phải phản hồi.**

**Event** là một thay đổi hoặc hoạt động diễn ra trong môi trường của người dùng, **kích thích một phản hồi** từ hệ thống phần mềm. **Event-response table** liệt kê mọi sự kiện như vậy cùng hành vi mà hệ thống được kỳ vọng thể hiện để phản ứng với từng cái.

**Ba loại sự kiện hệ thống:**

| Loại | Định nghĩa | Ví dụ |
|------|-----------|-------|
| **Business event** | Hành động của người dùng kích thích một cuộc đối thoại với phần mềm, như khi người dùng khởi động một use case | Chuỗi event-response tương ứng với các bước trong use case hoặc swimlane diagram |
| **Signal event** | Hệ thống nhận tín hiệu điều khiển, giá trị đọc dữ liệu, hoặc ngắt từ thiết bị phần cứng bên ngoài hay hệ thống phần mềm khác | Công tắc đóng, điện áp thay đổi, ứng dụng khác yêu cầu dịch vụ, người dùng vuốt ngón tay trên màn hình tablet |
| **Temporal event** | Được kích hoạt theo thời gian | Đồng hồ máy tính đạt tới một thời điểm xác định (khởi chạy export dữ liệu tự động lúc nửa đêm), hoặc một khoảng thời gian đã trôi qua kể từ sự kiện trước (ghi nhiệt độ mỗi 10 giây) |

**Điểm then chốt về event-response table:**

> **Phản hồi mong đợi phụ thuộc KHÔNG CHỈ vào sự kiện mà còn vào TRẠNG THÁI của hệ thống tại thời điểm sự kiện xảy ra.**

Ví dụ với hệ thống gạt nước ô tô: việc người lái đặt công tắc sang chế độ gián đoạn dẫn tới hành vi **hơi khác nhau** tuỳ theo gạt nước **đang bật hay đang tắt** tại thời điểm đó. Phản hồi có thể chỉ **thay đổi thông tin nội bộ** của hệ thống, hoặc tạo ra **kết quả nhìn thấy được từ bên ngoài**.

**Thông tin khác có thể thêm vào bảng:**

- **Tần suất sự kiện** — sự kiện xảy ra bao nhiêu lần trong một khoảng thời gian, hoặc giới hạn số lần có thể xảy ra.
- **Phần tử dữ liệu** cần thiết để xử lý sự kiện.
- **Trạng thái hệ thống sau khi** các phản hồi được thực thi.

**Hai công dụng:**

- **Công cụ xác định phạm vi:** liệt kê các sự kiện vượt qua ranh giới hệ thống là kỹ thuật scoping hữu ích.
- **Đặc tả functional requirement:** một event-response table định nghĩa **mọi tổ hợp có thể của sự kiện, trạng thái và phản hồi, bao gồm cả điều kiện ngoại lệ**, có thể đóng vai trò như **một phần của functional requirement** cho khu vực đó của hệ thống.

> **Nhưng BA vẫn phải cung cấp thêm functional requirement và nonfunctional requirement.** Với ví dụ gạt nước: **gạt nước thực hiện bao nhiêu chu kỳ mỗi phút** ở chế độ chậm và nhanh? Chế độ gián đoạn có **biến thiên liên tục** hay có các nấc rời rạc? **Thời gian trễ tối thiểu và tối đa** giữa các lần gạt gián đoạn là bao nhiêu? Nếu bạn bỏ qua loại thông tin này, **lập trình viên phải tự truy tìm hoặc tự quyết định**.

**Ưu điểm lớn về tính độc lập với thiết kế:** các sự kiện trong bảng mô tả **bản chất của sự kiện, không phải chi tiết hiện thực**. Bảng gạt nước **không nói gì về việc điều khiển gạt nước trông thế nào** hay người dùng thao tác chúng ra sao. Nhà thiết kế có thể thoả mãn các yêu cầu này bằng bất cứ thứ gì từ **cần điều khiển gắn trên trụ lái truyền thống** tới **nhận dạng lệnh nói**: *"bật gạt nước"*, *"gạt nhanh hơn"*, *"gạt một lần"*. **Viết yêu cầu ở mức bản chất như vậy tránh áp đặt ràng buộc thiết kế không cần thiết** — nhưng hãy **ghi lại mọi design constraint đã biết** để hướng dẫn tư duy của nhà thiết kế.

---

## 9. UML & mô hình hoá trong agile

### UML

Nhiều dự án dùng phương pháp **phân tích, thiết kế và phát triển hướng đối tượng**. **Object** thường tương ứng với các mục trong thế giới thực của miền nghiệp vụ hoặc miền vấn đề. Chúng biểu diễn các thể hiện riêng lẻ được tạo ra từ một khuôn mẫu chung gọi là **class**. Mô tả class bao gồm **cả thuộc tính (dữ liệu) lẫn thao tác** có thể thực hiện trên thuộc tính đó.

> **Sản phẩm phát triển bằng phương pháp hướng đối tượng KHÔNG đòi hỏi cách tiếp cận phát triển yêu cầu riêng biệt.** Lý do: phát triển yêu cầu tập trung vào **những gì người dùng cần làm** với hệ thống và chức năng nó phải chứa, **không phải cách nó sẽ được xây**. **Người dùng không quan tâm tới object hay class.**

Tuy nhiên, nếu bạn biết mình sẽ xây hệ thống bằng kỹ thuật hướng đối tượng, việc **bắt đầu xác định class cùng thuộc tính và hành vi của chúng trong giai đoạn phân tích yêu cầu có thể hữu ích**. Nó tạo điều kiện cho **bước chuyển từ phân tích sang thiết kế**, khi nhà thiết kế ánh xạ đối tượng miền vấn đề sang đối tượng của hệ thống và chi tiết hoá thêm thuộc tính, thao tác của từng class.

**UML (Unified Modeling Language)** là ngôn ngữ mô hình hoá hướng đối tượng chuẩn. Nó **chủ yếu được dùng để tạo mô hình thiết kế**. Ở mức trừu tượng phù hợp cho phân tích yêu cầu, **bốn mô hình UML** hữu ích:

- **Class diagram** — thể hiện các object class thuộc miền ứng dụng; thuộc tính, hành vi và tính chất của chúng; và quan hệ giữa các class. Class diagram cũng dùng được cho mô hình hoá dữ liệu, nhưng **cách dùng hạn chế này không khai thác hết khả năng ngữ nghĩa** của nó.
- **Use case diagram** — thể hiện quan hệ giữa actor bên ngoài và use case mà họ tương tác.
- **Activity diagram** — thể hiện cách các flow trong một use case đan xen, hoặc vai trò nào thực hiện hành động nào (như swimlane diagram), hoặc mô hình hoá luồng quy trình nghiệp vụ.
- **State diagram (state machine diagram)** — biểu diễn các trạng thái khác nhau mà hệ thống hoặc một đối tượng dữ liệu có thể mang, cùng các transition được phép.

### Mô hình hoá trong agile

> **MỌI dự án đều nên khai thác mô hình yêu cầu để phân tích yêu cầu từ nhiều góc nhìn, bất kể cách tiếp cận phát triển là gì.**

**Lựa chọn mô hình dùng giữa dự án truyền thống và agile có khả năng GIỐNG NHAU.** Khác biệt nằm ở **THỜI ĐIỂM tạo mô hình** và **mức chi tiết** trong đó.

Ví dụ thực hành trên dự án agile:

- Vẽ nháp một **level 0 DFD sớm** trong dự án.
- **Trong mỗi iteration**, vẽ DFD chi tiết hơn **chỉ phủ phạm vi của iteration đó**.
- Tạo mô hình ở **định dạng ít bền vững hoặc ít hoàn thiện hơn**: phác trên bảng trắng rồi **chụp ảnh**, không nhất thiết lưu vào tài liệu yêu cầu chính thức hay công cụ mô hình hoá.
- Khi user story được hiện thực, **cập nhật mô hình** — có thể dùng **màu sắc để chỉ mức độ hoàn thành**. Việc này vừa cho thấy điều gì đang được hiện thực trong iteration, vừa **bộc lộ các user story còn thiếu** để hoàn chỉnh bức tranh.

> **Điểm mấu chốt khi dùng mô hình phân tích trên dự án agile — và thực ra trên MỌI dự án — là tập trung tạo CHỈ những mô hình bạn cần, CHỈ khi bạn cần, và CHỈ tới mức chi tiết cần thiết để bảo đảm stakeholder hiểu đầy đủ yêu cầu.**

**User story không phải lúc nào cũng đủ** để nắm bắt mức chi tiết và độ chính xác cần thiết cho một dự án agile. **Đừng loại trừ bất kỳ mô hình nào chỉ vì bạn đang làm dự án agile.**

---

## 10. Mô hình hoá quan hệ dữ liệu & data dictionary

**Hệ thống thông tin mang lại giá trị bằng cách thao tác dữ liệu.** Dù dữ liệu biểu diễn pixel trong trò chơi, gói tin trong cuộc gọi điện thoại, số liệu bán hàng hằng quý hay hoạt động tài khoản ngân hàng, **chức năng phần mềm đều được đặc tả để tạo, sửa, hiển thị, xoá, xử lý và sử dụng dữ liệu**.

**Điểm khởi đầu tốt là các luồng vào ra trên context diagram** — chúng biểu diễn các phần tử dữ liệu chính ở mức trừu tượng cao, mà BA có thể làm mịn dần thành chi tiết. **Danh từ** người dùng nhắc tới trong elicitation thường chỉ ra các thực thể dữ liệu quan trọng.

### Entity-relationship diagram

**Data model** cho **góc nhìn cấp cao** về dữ liệu của hệ thống; **data dictionary** cho **góc nhìn chi tiết**.

**ERD** là data model thường dùng. Việc bạn đang phân tích hay thiết kế phụ thuộc vào nội dung:

- ERD biểu diễn **nhóm thông tin logic từ miền vấn đề** và các kết nối giữa chúng → bạn đang dùng ERD làm **công cụ phân tích yêu cầu**. Nó giúp bạn hiểu và truyền đạt thành phần dữ liệu của nghiệp vụ hoặc hệ thống, **mà không hàm ý rằng sản phẩm nhất thiết phải có cơ sở dữ liệu**.
- ERD tạo trong giai đoạn **thiết kế** định nghĩa cấu trúc logic hoặc vật lý của cơ sở dữ liệu.

**Các phần tử:**

- **Entity** — vẽ trong **hình chữ nhật**; có thể biểu diễn vật thể vật lý (kể cả con người) hoặc tập hợp dữ liệu quan trọng với nghiệp vụ. Trong thiết kế cơ sở dữ liệu quan hệ, entity thường trở thành **bảng**.
- **Attribute** — mỗi entity được mô tả bởi một hoặc nhiều thuộc tính; các thể hiện khác nhau của một entity sẽ có giá trị thuộc tính khác nhau. **Định nghĩa chính xác của thuộc tính nằm trong data dictionary**, giúp bảo đảm entity trong ERD và data store tương ứng trong DFD được định nghĩa **giống hệt nhau**.
- **Relationship** — vẽ trong **hình thoi** (ký hiệu Peter Chen); xác định liên kết logic giữa các cặp entity.

> **Mẹo đặt tên relationship:** Đặt tên relationship theo cách mô tả bản chất kết nối. Một số quy ước khuyên đặt tên hình thoi là *"is placed by"*, nhưng điều đó **chỉ hợp lý khi đọc từ trái sang phải**. Nếu bạn vẽ lại sơ đồ và đảo vị trí tương đối của hai entity, tên *"is placed by"* sẽ **sai** khi đọc từ trái sang phải. **Tốt hơn là đặt tên relationship là *"placing"***, rồi diễn đạt lại theo cách nào đúng ngữ pháp — *"places"* hoặc *"is placed by"* — khi bạn đọc câu.

**Cardinality (multiplicity)** — số thể hiện của mỗi relationship, hiển thị trên đường nối entity và relationship. Các ký hiệu ERD khác nhau dùng quy ước khác nhau:

- **Ký hiệu Peter Chen:** ghi **1** và **M** (many) trên các đường nối.
- **Ký hiệu James Martin:** entity vẫn là hình chữ nhật, nhưng relationship được **ghi nhãn trên đường nối**; **đường thẳng đứng** cạnh entity nghĩa là cardinality bằng 1, **chân quạ (crow foot)** nghĩa là many, và **vòng tròn** cạnh chân quạ nghĩa là **không hoặc nhiều**.

Ba loại cardinality: **một-một**, **một-nhiều**, và **nhiều-nhiều**. Nếu bạn biết một cardinality chính xác hơn *"many"* (ví dụ một người có đúng hai cha mẹ ruột), hãy **hiển thị số hoặc khoảng số cụ thể** thay vì M chung chung.

**Khi khách hàng review ERD**, hãy đề nghị họ kiểm tra: **mọi relationship hiển thị có đúng và phù hợp không**, có **entity nào bị thiếu** không, và có **relationship khả dĩ nào giữa các entity mà mô hình chưa thể hiện** không.

### Class diagram cho mô hình hoá dữ liệu

Đội áp dụng phương pháp hướng đối tượng sẽ vẽ **UML class diagram**, thể hiện thuộc tính dữ liệu của từng class, liên kết logic giữa các class, và cardinality của liên kết đó. Ký hiệu **`1..*`** nghĩa là *"một hoặc nhiều"*.

**Class diagram cũng liệt kê thuộc tính** của mỗi class ở **phần giữa** hình chữ nhật. Lưu ý: khi class diagram được dùng cho phân tích hoặc thiết kế hướng đối tượng, **phần dưới cùng** của hình chữ nhật thể hiện các **operation (behavior)** mà đối tượng của class có thể thực hiện. **Khi dùng cho mô hình hoá dữ liệu, phần thứ ba này được để trống.**

> **Ký hiệu nào không quan trọng bằng việc mọi người trong dự án — và lý tưởng là trong toàn tổ chức — cùng theo MỘT quy ước ký hiệu, và mọi người phải review hoặc dùng mô hình đều biết cách diễn giải chúng.**

**Quan trọng: hệ thống cũng phải chứa chức năng làm việc gì đó hữu ích với dữ liệu.** **Relationship giữa các entity thường bộc lộ chức năng đó.** Ví dụ, nếu có relationship *"tracking"* giữa entity Chemical Container và Container History, bạn sẽ cần chức năng — thể hiện qua use case, user story hoặc process flow — cho phép người dùng **truy cập lịch sử của một bình chứa cụ thể**. Khi phân tích yêu cầu với sự trợ giúp của data model, bạn thậm chí có thể **phát hiện dữ liệu không cần thiết** đã xuất hiện trong thảo luận nhưng không được dùng ở đâu cả.

### Data dictionary

**Data dictionary** là tập hợp thông tin chi tiết về các thực thể dữ liệu dùng trong ứng dụng: **thành phần, kiểu dữ liệu, độ dài, định dạng, giá trị cho phép**.

> **Câu chuyện có thật về cái giá của việc thiếu data dictionary.** Một đội ba lập trình viên đôi khi vô tình dùng **tên biến, độ dài và tiêu chí kiểm tra khác nhau cho CÙNG một mục dữ liệu**. Thực tế, một lập trình viên đã dùng **hai độ dài khác nhau** cho biến chứa tên người dùng trong **hai chương trình do chính anh viết**.
>
> **Điều tồi tệ có thể xảy ra khi bạn chuyển đổi qua lại giữa các dữ liệu có độ dài khác nhau:** bạn có thể **ghi đè lên dữ liệu khác**, **nhặt phải ký tự đệm rác** ở cuối, có **chuỗi ký tự không được kết thúc đúng**, và thậm chí **ghi đè lên mã chương trình**, cuối cùng gây ra **sập hệ thống**. Ngay khi đội bắt đầu định nghĩa và quản lý dữ liệu một cách kỷ luật hơn, **mọi vấn đề đó biến mất**.

**Lợi ích:**

- Việc gom thông tin về thành phần, kiểu dữ liệu, giá trị cho phép vào **một tài nguyên dùng chung** xác định **tiêu chí kiểm tra hợp lệ dữ liệu**, giúp lập trình viên viết chương trình đúng, và **giảm thiểu vấn đề tích hợp**.
- **Định nghĩa dữ liệu thường tái sử dụng được giữa các ứng dụng**, đặc biệt trong một product line. Dùng định nghĩa nhất quán trên toàn doanh nghiệp **giảm lỗi tích hợp và lỗi giao diện**. Khi có thể, hãy **tham chiếu tới định nghĩa chuẩn** từ kho tri thức doanh nghiệp và chỉ dùng một tập nhỏ riêng cho dự án để lấp khoảng trống.
- **Data dictionary riêng biệt giúp dễ tìm thông tin cần**, đồng thời **tránh dư thừa và thiếu nhất quán**.

> **Câu chuyện cảnh tỉnh:** Một người review vài use case specification có liệt kê các phần tử dữ liệu tạo nên một số cấu trúc dữ liệu. **Không may, các thành phần đó KHÔNG giống nhau ở mọi nơi chúng xuất hiện.** Sự thiếu nhất quán như vậy buộc lập trình viên hoặc tester phải **truy tìm xem định nghĩa nào — nếu có — là đúng**. Việc duy trì tính toàn vẹn của các cấu trúc dữ liệu bị nhân bản khi chúng tiến hoá cũng rất khó. **Biên soạn hoặc hợp nhất thông tin sao cho mỗi định nghĩa chỉ có MỘT thể hiện duy nhất mà mọi stakeholder truy cập được sẽ giải quyết những vấn đề này.**

**Thời điểm và duy trì:** Trong giai đoạn phân tích yêu cầu, thông tin trong data dictionary **biểu diễn phần tử và cấu trúc dữ liệu của MIỀN ỨNG DỤNG**. Thông tin này chảy vào thiết kế dưới dạng **database schema, bảng và thuộc tính**, cuối cùng dẫn tới **tên biến trong chương trình**.

> **Thời gian bạn đầu tư để tạo data dictionary sẽ được hoàn trả nhiều hơn nhờ tránh được những lỗi có thể xảy ra khi các bên hiểu dữ liệu khác nhau. Nếu bạn giữ nó cập nhật, nó sẽ vẫn là công cụ quý giá suốt vòng đời vận hành của hệ thống và cả sau đó.**
>
> **Nếu bạn KHÔNG giữ nó cập nhật**, nó sẽ **gợi ý sai lệch những thông tin đã lỗi thời**, và **các thành viên sẽ không còn tin tưởng nó**. Duy trì data dictionary là **một khoản đầu tư nghiêm túc vào chất lượng**.

**Tổ chức:** sắp xếp các mục **theo thứ tự bảng chữ cái** để người đọc dễ tìm.

### Ba loại phần tử trong data dictionary

**Primitive (phần tử nguyên thuỷ)** — không thể hoặc không cần phân rã thêm. Các cột khác trong data dictionary mô tả **kiểu dữ liệu, độ dài, khoảng giá trị, danh sách giá trị cho phép** và các thuộc tính liên quan khác.

**Structure (cấu trúc / record)** — gồm nhiều phần tử dữ liệu. Cột *"Composition"* liệt kê các phần tử tạo nên cấu trúc, **ngăn cách bằng dấu cộng (+)**. Cấu trúc cũng có thể **chứa cấu trúc khác**. Mọi phần tử xuất hiện trong một cấu trúc **cũng phải có định nghĩa riêng** trong data dictionary.

- Nếu một phần tử trong cấu trúc là **tuỳ chọn** (người dùng hoặc hệ thống không bắt buộc cung cấp giá trị), hãy **đặt nó trong dấu ngoặc đơn**.

**Repeating group (nhóm lặp)** — nếu nhiều thể hiện của một phần tử có thể xuất hiện trong một cấu trúc, hãy **đặt phần tử đó trong dấu ngoặc nhọn `{ }`**. Số lần lặp cho phép ghi ở dạng **`minimum:maximum`** phía trước dấu ngoặc nhọn mở.

- Ví dụ **`1:10{Requested Chemical}`** nghĩa là một chemical request **phải chứa ít nhất một hoá chất** nhưng **không được chứa quá 10 hoá chất**.
- Nếu **số lần lặp tối đa là không giới hạn**, dùng **`n`**: `3:n{something}` nghĩa là cấu trúc phải chứa ít nhất ba thể hiện và **không có giới hạn trên**.

**Hyperlink rất hữu ích** trong bố cục data dictionary — hoặc tốt hơn, lưu thông tin trong một công cụ cho phép định nghĩa liên kết. Người đọc có thể **nhấp vào liên kết để nhảy tới định nghĩa** ở nơi khác trong data dictionary. Liên kết điều hướng **rất hữu ích trong một data dictionary lớn** có thể trải dài nhiều trang, hoặc nhiều tài liệu nếu dự án của bạn tích hợp một số định nghĩa từ data dictionary cấp doanh nghiệp. **Nên đưa hyperlink cho mọi mục xuất hiện trong cột "Composition" đã được định nghĩa trong data dictionary.**

### Định nghĩa dữ liệu chính xác khó hơn tưởng tượng

> **Hãy xét một kiểu dữ liệu đơn giản như "ký tự chữ cái".** Tên có **phân biệt hoa thường** không, tức *"Karl"* khác *"karl"*? Hệ thống nên **chuyển văn bản thành chữ hoa toàn bộ, chữ thường toàn bộ, giữ nguyên** giá trị được tra cứu hoặc nhập vào, hay **từ chối** đầu vào không khớp định dạng mong đợi? Có được dùng **ký tự nào khác ngoài 26 chữ cái tiếng Anh** không, chẳng hạn khoảng trắng, dấu gạch nối, dấu chấm hoặc dấu nháy đơn — tất cả đều có thể xuất hiện trong tên người? **Chỉ bảng chữ cái tiếng Anh** được phép, hay các bảng chữ cái có **dấu phụ** — dấu ngã, hai chấm, sắc, huyền, móc — cũng dùng được?
>
> **Định nghĩa chính xác như vậy là thiết yếu để lập trình viên biết CHÍNH XÁC cách kiểm tra tính hợp lệ của dữ liệu nhập vào.** **Định dạng hiển thị** của phần tử dữ liệu lại thêm một mức biến thiên nữa — chẳng hạn có rất nhiều cách hiển thị dấu thời gian và ngày tháng, với quy ước khác nhau ở các quốc gia khác nhau.

---

## 11. Data analysis & đặc tả báo cáo

### Data analysis và CRUD matrix

Khi thực hiện **phân tích dữ liệu**, bạn có thể **ánh xạ các biểu diễn thông tin khác nhau với nhau** để tìm khoảng trống, lỗi và thiếu nhất quán:

- Các **entity trong ERD** có khả năng đã được định nghĩa trong **data dictionary**.
- Các **data flow và data store trong DFD** có lẽ nằm đâu đó trong **ERD**, cũng như trong **data dictionary**.
- Các **trường hiển thị trong đặc tả báo cáo** cũng nên xuất hiện trong **data dictionary**.

**So sánh những góc nhìn bổ trợ này để xác định lỗi và làm mịn thêm yêu cầu dữ liệu của bạn.**

**CRUD matrix** là kỹ thuật phân tích dữ liệu chặt chẽ để **phát hiện yêu cầu thiếu**. CRUD là viết tắt của **Create, Read, Update, Delete**. Ma trận này **tương quan hành động hệ thống với thực thể dữ liệu**, cho thấy mỗi thực thể dữ liệu quan trọng được tạo, đọc, cập nhật và xoá ở đâu và như thế nào.

**Biến thể mở rộng:** một số người thêm **L** để chỉ thực thể xuất hiện trong một **danh sách lựa chọn (List)**, **M** để chỉ việc **di chuyển (Move)** dữ liệu từ vị trí này sang vị trí khác, và đôi khi một chữ **C thứ hai** để chỉ việc **sao chép (Copy)**.

**Các loại tương quan có thể phân tích:**

- Thực thể dữ liệu và **system event**.
- Thực thể dữ liệu và **user task hoặc use case**.
- **Object class** và use case.

**Cách dùng:** sau khi tạo CRUD matrix, hãy xem **có chữ nào trong bốn chữ KHÔNG xuất hiện ở bất kỳ ô nào trong một cột hay không**.

> **Ví dụ minh hoạ sức mạnh của kỹ thuật.** Trong một CRUD matrix cho Chemical Tracking System, **không ô nào dưới cột Requester chứa chữ D** — nghĩa là **không use case nào có thể xoá một Requester** khỏi danh sách những người đã đặt hoá chất. Có **ba cách diễn giải**:
>
> 1. Việc xoá một Requester **không phải chức năng mong đợi** của hệ thống.
> 2. Chúng ta **đang thiếu một use case** để xoá Requester.
> 3. Use case *"Edit Requesters"* (hoặc một use case khác) **chưa hoàn chỉnh** — nó lẽ ra phải cho phép người dùng xoá Requester, nhưng hiện chức năng đó đang thiếu.
>
> **Chúng ta không biết cách diễn giải nào đúng, nhưng CRUD analysis là một cách rất mạnh để phát hiện yêu cầu thiếu.**

### Đặc tả báo cáo

Nhiều ứng dụng sinh **báo cáo** từ một hoặc nhiều cơ sở dữ liệu, file hay nguồn thông tin khác. Báo cáo có thể là **bảng hàng-cột truyền thống**, **biểu đồ và đồ thị mọi loại**, hoặc **bất kỳ tổ hợp nào**.

> **Đặc tả báo cáo nằm vắt giữa yêu cầu và thiết kế:** *thông tin nào vào báo cáo và nó được tổ chức ra sao* là **yêu cầu**; *báo cáo trông thế nào* là **thiết kế**.

**Câu hỏi khai thác về bối cảnh sử dụng:**

- **Tên** báo cáo là gì?
- **Mục đích hoặc ý định nghiệp vụ** của nó là gì? Người nhận **dùng thông tin đó thế nào**? **Quyết định nào** sẽ được đưa ra từ báo cáo, và **bởi ai**?
- Báo cáo được sinh **thủ công** không? Nếu có, **tần suất** thế nào và **user class nào** sinh nó?
- Báo cáo được sinh **tự động** không? Nếu có, tần suất thế nào và **điều kiện hay sự kiện nào kích hoạt**?
- **Kích thước điển hình và tối đa** của báo cáo là bao nhiêu?
- Có cần một **dashboard** hiển thị nhiều báo cáo và biểu đồ không? Nếu có, người dùng có cần **drill down hoặc roll up** bất kỳ phần tử nào không?
- **Sau khi được sinh ra, báo cáo đi đâu?** Hiển thị trên màn hình, gửi tới người nhận, xuất ra bảng tính, hay in tự động? Nó có được **lưu trữ hoặc archive** để truy xuất sau không?
- Có **hạn chế về bảo mật, quyền riêng tư hay quản lý** nào giới hạn quyền truy cập báo cáo, hoặc **giới hạn dữ liệu được đưa vào tuỳ theo ai đang sinh nó** không? Hãy xác định các **business rule liên quan tới bảo mật**.

**Câu hỏi về chính bản thân báo cáo:**

- **Nguồn dữ liệu** và **tiêu chí lựa chọn** để lấy dữ liệu từ kho là gì?
- **Tham số nào người dùng chọn được?**
- Cần **tính toán hoặc biến đổi dữ liệu** nào?
- Tiêu chí **sắp xếp, ngắt trang và tính tổng** là gì?
- Hệ thống nên phản hồi thế nào nếu truy vấn **không trả về dữ liệu nào**?
- Dữ liệu nền của báo cáo có nên được cung cấp cho người dùng để **làm báo cáo ad hoc** không?
- Báo cáo này có thể dùng làm **khuôn mẫu cho một nhóm báo cáo tương tự** không?

**Câu hỏi khai thác về báo cáo hiện có:**

- Bạn **đang dùng** những báo cáo nào? (Một số báo cáo từ hệ thống hiện có hoặc báo cáo làm thủ công **sẽ cần được tái tạo** trong hệ thống mới.)
- Báo cáo nào **cần được sửa đổi**? (Dự án hệ thống mới là cơ hội cập nhật những báo cáo không còn đáp ứng nhu cầu hiện tại.)
- Báo cáo nào **đang được sinh ra nhưng KHÔNG được dùng**? (Có lẽ bạn không cần xây chúng vào hệ thống mới.)
- Có **tiêu chuẩn nào của phòng ban, tổ chức hay nhà nước** mà báo cáo phải tuân thủ không? (Hãy lấy bản sao các tiêu chuẩn đó và ví dụ báo cáo hiện tại đáp ứng chúng.)

### Bốn cân nhắc khi đặc tả báo cáo

**1. Cân nhắc các biến thể.** Khi người dùng yêu cầu một báo cáo cụ thể, BA có thể **đề xuất biến thể** để xem việc thay đổi hoặc bổ sung có tăng giá trị nghiệp vụ không. Một biến thể đơn giản là **sắp xếp dữ liệu theo thứ tự khác** — cung cấp khả năng order-by trên các phần tử dữ liệu ngoài những cái người dùng ban đầu yêu cầu. Cân nhắc cung cấp cho người dùng công cụ để **tự chỉ định thứ tự cột**. Một loại biến thể khác là **tóm tắt hoặc drill down**: báo cáo tóm tắt gộp kết quả chi tiết thành góc nhìn cô đọng, cấp cao hơn; *"drill down"* nghĩa là sinh báo cáo hiển thị chi tiết nền tảng đã tạo nên dữ liệu tóm tắt.

**2. Tìm dữ liệu.** Bảo đảm **dữ liệu cần thiết để điền vào báo cáo có sẵn cho hệ thống**. Người dùng nghĩ theo hướng **sinh ra đầu ra họ muốn**, điều này hàm ý một số đầu vào và nguồn nhất định. Phân tích này có thể **bộc lộ yêu cầu chưa từng biết** về việc truy cập hoặc sinh dữ liệu cần thiết. Hãy xác định mọi **business rule sẽ được áp dụng để tính toán dữ liệu đầu ra**.

**3. Dự đoán tăng trưởng.** Người dùng yêu cầu báo cáo dựa trên **hình dung ban đầu** về lượng dữ liệu hoặc số tham số liên quan. **Khi hệ thống lớn lên theo thời gian, một bố cục ban đầu hoạt động tốt với lượng dữ liệu nhỏ có thể trở nên bất khả dụng.** Ví dụ, bố cục dạng cột cho một số lượng phòng ban nhất định vừa vặn một trang; nhưng **gấp đôi số phòng ban** có thể dẫn tới ngắt trang vụng về hoặc phải cuộn ngang. Bạn có thể cần **đổi bố cục từ dọc sang ngang**, hoặc **chuyển vị thông tin từ dạng cột sang dạng hàng**.

**4. Tìm điểm tương đồng.** Nhiều người dùng — hoặc thậm chí cùng một người dùng — có thể yêu cầu các báo cáo **tương tự nhưng không giống hệt**. Hãy tìm cơ hội **gộp các biến thể này thành MỘT báo cáo** cung cấp đủ linh hoạt để đáp ứng nhu cầu đa dạng, **mà không đòi hỏi công sức phát triển và bảo trì dư thừa**. Đôi khi các biến thể có thể được xử lý bằng **tham số**.

**5. Phân biệt báo cáo tĩnh và động.**

- **Static report** in ra hoặc hiển thị dữ liệu **tại một thời điểm**.
- **Dynamic report** cung cấp góc nhìn **tương tác, thời gian thực** vào dữ liệu; khi dữ liệu nền thay đổi, hệ thống **tự động cập nhật** hiển thị. Ví dụ: khi đang xem báo cáo chi phí trong phần mềm kế toán và bạn nhập một tấm séc vừa viết, báo cáo chi phí **cập nhật ngay lập tức**.

**6. Prototype báo cáo.** Thường rất giá trị khi tạo **mock-up minh hoạ một cách tiếp cận khả dĩ** để kích thích phản hồi người dùng, hoặc dùng một **báo cáo hiện có tương tự** để minh hoạ bố cục mong muốn. **Hãy dùng dữ liệu hợp lý (plausible) trong mock-up** để trải nghiệm prototype trở nên thực tế với người đánh giá.

**Template đặc tả báo cáo** nên bao gồm: Report ID; Report Title; Report Purpose; Decisions Made from Report; Priority; Report Users; Data Sources; Frequency and Disposition; Latency; Visual Layout; Header and Footer; Report Body (tiêu chí lựa chọn bản ghi, trường đưa vào, tên và định dạng tiêu đề cột và hàng, bố cục, định dạng hiển thị từng trường, cách xử lý tràn số và tràn văn bản, tính toán, tiêu chí sắp xếp, tiêu chí lọc, nhóm và tổng phụ, tiêu chí phân trang); End-of-Report Indicator; Interactivity; Security Access Restrictions.

**Lưu ý:** một số phần tử được xác định trong quá trình elicitation; số khác được thiết lập trong thiết kế. **Yêu cầu có thể đặc tả NỘI DUNG báo cáo, trong khi quá trình thiết kế thiết lập bố cục và định dạng chính xác.** Tiêu chuẩn báo cáo hiện có có thể đã bao trùm một số mục. **Không phải mọi phần tử đều áp dụng cho mọi báo cáo.**

### Dashboard

**Dashboard** là màn hình hiển thị hoặc báo cáo in dùng **nhiều biểu diễn dữ liệu dạng văn bản và đồ hoạ** để cung cấp **góc nhìn hợp nhất, đa chiều** về những gì đang diễn ra trong tổ chức hoặc một quy trình.

Công ty thường dùng dashboard để gom thông tin về **doanh số, chi phí, key performance indicator (KPI)**. Ứng dụng giao dịch chứng khoán hiển thị **một mảng biểu đồ và dữ liệu gây choáng ngợp với người mới**, nhưng mắt người có kỹ năng có thể quét và xử lý chúng **trong một cái nhìn**. Một số hiển thị trong dashboard có thể được **cập nhật động theo thời gian thực** khi dữ liệu đầu vào thay đổi.

**Trình tự các hoạt động khai thác và phân tích để đặc tả dashboard** — nhiều bước trong số này cũng hữu ích khi đặc tả báo cáo riêng lẻ:

1. **Xác định thông tin người dùng cần** để đưa ra các quyết định hoặc lựa chọn cụ thể. Hiểu cách dữ liệu sẽ được sử dụng giúp bạn **chọn kỹ thuật hiển thị phù hợp nhất**.
2. **Xác định nguồn của mọi dữ liệu** sẽ được trình bày, để bảo đảm ứng dụng truy cập được các nguồn cấp đó và bạn biết chúng là **tĩnh hay động**.
3. **Chọn loại hiển thị phù hợp nhất** cho mỗi tập dữ liệu liên quan: bảng dữ liệu đơn giản, bảng tính sửa được có công thức, khối văn bản, biểu đồ cột, biểu đồ tròn, biểu đồ đường, hiển thị video, hay một trong nhiều cách khác.
4. **Xác định bố cục tối ưu và kích thước tương đối** của các hiển thị, dựa trên cách người dùng **tiếp thu và áp dụng** thông tin.
5. **Đặc tả chi tiết từng hiển thị** — hãy coi mỗi cái như một **báo cáo thu nhỏ** riêng biệt.

**Các câu hỏi bổ sung cần khám phá cho dashboard:**

- Nếu dữ liệu hiển thị là **động**, nó phải được **làm mới hoặc bổ sung bao lâu một lần**, và **theo cách nào**? Ví dụ dữ liệu hiện có **cuộn sang trái** khi thông tin mới được thêm vào đầu bên phải của một cửa sổ cố định chiều rộng?
- **Tham số nào người dùng nên thay đổi được** để tuỳ chỉnh một hiển thị, chẳng hạn khoảng ngày?
- Người dùng có muốn **định dạng có điều kiện** để các phần của hiển thị thay đổi theo dữ liệu không? Điều này hữu ích khi tạo báo cáo tiến độ hoặc trạng thái: **xanh lá** nếu dữ liệu đáp ứng tiêu chí *"tốt"*, **vàng** cho *"cần chú ý"*, và **đỏ** cho *"có vấn đề nghiêm trọng"*.
  > **Lưu ý về khả năng tiếp cận: khi dùng màu trong hiển thị, hãy đồng thời dùng HOẠ TIẾT (pattern)** để phù hợp với người xem khó phân biệt màu và những người in, phân phối bản đen trắng.
- Hiển thị nào cần **thanh cuộn ngang hoặc dọc**?
- Người dùng có nên **phóng to** một hiển thị để xem chi tiết hơn không? Có nên **thu nhỏ hoặc đóng** hiển thị để giải phóng không gian màn hình không? Các tuỳ chỉnh của người dùng cần **được lưu giữ qua các phiên sử dụng** theo cách nào?
- Người dùng có muốn **thay đổi hình thức** của bất kỳ hiển thị nào, chẳng hạn chuyển đổi giữa **góc nhìn dạng bảng và dạng đồ hoạ** không?
- Người dùng có muốn **drill down** trong bất kỳ hiển thị nào để xem báo cáo chi tiết hơn hoặc dữ liệu nền tảng không?

> **Prototype dashboard là cách tuyệt vời để làm việc với stakeholder** nhằm bảo đảm bố cục và phong cách trình bày đáp ứng nhu cầu của họ. Bạn có thể **phác các thành phần hiển thị lên giấy nhớ** và để stakeholder **di chuyển chúng** cho tới khi tìm được bố cục họ thích. **Lặp lại là chìa khoá** vừa để làm mịn yêu cầu vừa để khám phá phương án thiết kế.

**Nguyên tắc bao trùm:** như thường lệ với đặc tả yêu cầu, **lượng chi tiết cần cung cấp khi đặc tả báo cáo hoặc dashboard phụ thuộc vào AI đưa ra quyết định về hình thức của chúng và KHI NÀO quyết định đó được đưa ra**. **Bạn càng sẵn sàng uỷ thác chi tiết cho nhà thiết kế, bạn càng cần ít thông tin trong yêu cầu.** Và như mọi khi, **sự cộng tác chặt chẽ giữa BA, đại diện người dùng và lập trình viên** sẽ giúp bảo đảm mọi người hài lòng với kết quả.

---

## Điểm cốt lõi

- **Không góc nhìn đơn lẻ nào về yêu cầu là trọn vẹn** — hãy tạo nhiều biểu diễn và đối chiếu chúng để tìm lỗi.
- Mô hình phân tích nên **bổ sung, không thay thế** đặc tả bằng ngôn ngữ tự nhiên.
- **Đánh dấu rõ mỗi sơ đồ là mô hình phân tích hay mô hình thiết kế**, vì chúng dùng cùng ký hiệu.
- *"Hệ thống quá phức tạp để mô hình hoá"* là phản bác tự mâu thuẫn: **mô hình đơn giản hơn hệ thống nó mô hình hoá**.
- **Danh từ → entity/actor/data store; động từ → process/use case/transition; điều kiện → decision.**
- Trên DFD: **process giao tiếp qua data store**, không nối trực tiếp; **đừng vẽ quá 8–10 process** một sơ đồ.
- **Bubble chỉ có luồng vào hoặc chỉ có luồng ra là đáng ngờ.**
- **DFD cho thấy toàn bộ vòng đời dữ liệu** — điều use case và swimlane không làm được.
- **Swimlane là mô hình dễ hiểu nhất với stakeholder**; quy trình nghiệp vụ có thể vượt ra ngoài phạm vi phần mềm.
- **State table bảo đảm không bỏ sót transition; STD giúp hình dung chuỗi transition.**
- Review STD của Chemical Tracking System **phát hiện lỗi mà review functional requirement không thấy**.
- **Dialog map là giao diện được mô hình hoá dưới dạng STD**; nó khác flowchart ở chỗ **ẩn việc xử lý** sau các màn hình.
- Dialog map giúp thiết kế sẵn **tuỳ chọn back-out và cancel** — người dùng ghét bị buộc hoàn tất tác vụ.
- **Decision table thu 16 tổ hợp xuống 5 yêu cầu riêng biệt** nhờ dấu gạch ngang cho điều kiện không liên quan.
- **Event-response table cần thiết cho hệ thống thời gian thực** nơi use case không đủ; phản hồi phụ thuộc **cả sự kiện lẫn trạng thái**.
- **Phát triển hướng đối tượng không đòi hỏi cách tiếp cận yêu cầu riêng** — người dùng không quan tâm tới class.
- Trên dự án agile, **loại mô hình giống nhau; khác ở thời điểm và mức chi tiết**.
- **Đặt tên relationship trong ERD dạng "placing"**, không phải *"is placed by"*, để đọc được theo cả hai chiều.
- Trong class diagram dùng cho **mô hình hoá dữ liệu**, phần **operation để trống**.
- **Data dictionary ngăn được lỗi độ dài biến gây ghi đè dữ liệu và sập hệ thống.**
- Ký hiệu data dictionary: **`+`** cho thành phần, **`( )`** cho tuỳ chọn, **`{ }`** cho nhóm lặp, **`min:max`**, **`n`** cho không giới hạn.
- **CRUD matrix phát hiện yêu cầu thiếu** — một cột không có chữ D nghĩa là có thể thiếu use case xoá.
- **Nội dung báo cáo là yêu cầu; bố cục chính xác là thiết kế.**
- Hỏi báo cáo nào **đang được sinh nhưng không được dùng** — có lẽ bạn không cần xây chúng.
- Khi dùng **màu** trong dashboard, hãy **dùng kèm hoạ tiết** cho người khó phân biệt màu và bản in đen trắng.

## Tóm tắt

- Chọn mô hình dựa trên **loại thông tin bạn cần thể hiện, phân tích hoặc khám phá**, và tập trung vào **phần phức tạp, rủi ro và bất định nhất**.
- **Lắng nghe từ khoá** trong lời khách hàng để chuyển chúng thành thành phần mô hình cụ thể.
- Các mô hình **kiểm tra chéo lẫn nhau**: đối chiếu DFD với swimlane, context diagram với event list, ERD với data dictionary.
- **Mô hình bộc lộ lỗi mà văn bản che giấu**, vì chúng cho bạn thấy khu rừng thay vì từng cái cây.
- **Dữ liệu là trung tâm**: mô hình hoá quan hệ bằng ERD, định nghĩa chính xác bằng data dictionary, và tìm khoảng trống bằng CRUD analysis.
- **Đặc tả báo cáo và dashboard** bằng cách bắt đầu từ **quyết định mà người dùng sẽ đưa ra** với thông tin đó.
- Dù dùng mô hình nào, hãy nhớ mục đích: **đạt mức hiểu biết và giao tiếp vượt ra ngoài những gì văn bản hay bất kỳ góc nhìn đơn lẻ nào có thể mang lại**.
