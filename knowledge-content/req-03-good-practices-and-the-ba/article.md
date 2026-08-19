# Thực hành tốt & vai trò Business Analyst

## 1. Khung quy trình phát triển yêu cầu

Mỗi chuyên gia phần mềm cần một **bộ công cụ kỹ thuật** để ứng phó với từng thách thức. Người không có bộ công cụ đó buộc phải ứng biến theo cảm tính — và cách làm tuỳ hứng hiếm khi cho kết quả tốt.

Ngược lại, cũng đừng bám cứng vào một **phương pháp luận trọn gói** và làm theo kịch bản như nhau trong mọi tình huống. Cách tiếp cận hiệu quả hơn là nhận diện và áp dụng **các thực hành tốt (good practices)**, rồi chọn đúng thực hành cho đúng vấn đề.

**Requirements development KHÔNG tuyến tính.** Bốn hoạt động của nó đan xen, tăng dần và lặp lại:

Nếu bạn là BA, bạn sẽ hỏi khách hàng, lắng nghe họ nói, quan sát họ làm (**elicitation**). Bạn xử lý thông tin đó để hiểu, phân loại và nối nhu cầu với yêu cầu tiềm năng (**analysis**) — và quá trình này có thể khiến bạn nhận ra cần quay lại khai thác thêm. Bạn cấu trúc thông tin thành câu yêu cầu và sơ đồ (**specification**) — và khi viết, bạn phát hiện lỗ hổng cần phân tích thêm. Cuối cùng bạn nhờ stakeholder xác nhận độ chính xác (**validation**) — việc này có thể dẫn tới viết lại, phân tích lại, thậm chí khai thác lại.

Cụm từ vận hành then chốt là **progressive refinement of detail** — làm mịn dần mức độ chi tiết, đi từ khái niệm ban đầu tới sự chính xác và cụ thể.

Một quy trình tiêu biểu chạy khoảng 17 bước: bảy bước đầu thường làm **một lần** ở đầu dự án (xác định vision & scope, user class, product champion, use case, business rule…), các bước còn lại lặp lại **cho mỗi bản phát hành hoặc iteration**.

**Phân bổ công sức khác nhau theo vòng đời:**

| Vòng đời | Cách phân bổ công sức yêu cầu |
|----------|-------------------------------|
| Waterfall thuần | Phần lớn dồn vào đầu dự án |
| Iterative (ví dụ RUP) | Làm ở mọi vòng lặp, nặng nhất ở vòng đầu |
| Agile / incremental | Nhiều đợt nhỏ, thường xuyên, trải đều toàn dự án |

> **Quan trọng:** Không thực hành nào có tác dụng nếu bạn đang làm việc với **người bất hợp tác**. Nhưng nhiều khi họ không bất hợp tác — họ chỉ **chưa được thông tin**. Hãy giải thích vì sao bạn muốn dùng thực hành đó và nó phục vụ mục tiêu của chính họ ra sao.

---

## 2. Thực hành tốt: Elicitation

- **Xác định vision và project scope.** Vision cho mọi người hiểu chung về kết quả sản phẩm; scope vẽ ranh giới cái gì trong, cái gì ngoài cho một bản phát hành. Vision khá ổn định; mỗi release cần scope riêng.
- **Xác định user class và đặc điểm của họ.** Các nhóm có thể khác nhau về tần suất dùng, tính năng dùng, mức đặc quyền, kinh nghiệm.
- **Chọn product champion cho từng user class.** Người này là *tiếng nói theo nghĩa đen* của user class và ra quyết định thay mặt nhóm đó.
- **Tổ chức focus group với người dùng tiêu biểu.** Đặc biệt hữu ích cho sản phẩm thương mại có tập khách hàng lớn và đa dạng. Khác với product champion, focus group thường **không** có quyền quyết định.
- **Làm việc với đại diện người dùng để xác định user requirement**, dưới dạng use case, user story hoặc scenario.
- **Xác định system event và response.** Ba loại sự kiện: **signal event** (tín hiệu từ thiết bị), **temporal event** (theo thời gian), **business event** (hành động người dùng kích hoạt use case).
- **Phỏng vấn.** Hiệu quả vì bạn chỉ bàn đúng yêu cầu quan trọng với từng người, và dễ sắp lịch hơn workshop.
- **Tổ chức workshop có điều phối.** Còn gọi là JAD (Joint Application Design).
- **Quan sát người dùng làm việc.** Thiết lập bối cảnh sử dụng thực tế; sơ đồ luồng đơn giản thể hiện các bước và quyết định.
- **Phát bảng hỏi.** Hữu ích với nhóm người dùng lớn hoặc phân tán địa lý.
- **Phân tích tài liệu.** Tài liệu hệ thống hiện tại, quy trình nghiệp vụ, đặc tả cũ, nghiên cứu đối thủ, tài liệu COTS.
- **Xem báo cáo lỗi của hệ thống hiện tại** để lấy ý tưởng cho bản sau. Help desk và support là nguồn quý.
- **Tái sử dụng yêu cầu sẵn có.** Yêu cầu bảo mật, tuân thủ quy định, glossary, data model, user class description đều dễ tái dùng.

---

## 3. Thực hành tốt: Analysis

Phân tích là làm mịn yêu cầu để mọi stakeholder cùng hiểu, và soi chúng để tìm lỗi, thiếu sót và khiếm khuyết.

- **Mô hình hoá môi trường ứng dụng.** **Context diagram** xác định ranh giới và giao diện giữa hệ thống với các thực thể bên ngoài. **Ecosystem map** cho thấy các hệ thống tương tác với nhau và bản chất kết nối.
- **Tạo prototype giao diện và prototype kỹ thuật.** Prototype biến khái niệm thành thứ sờ được, giúp lập trình viên và người dùng hiểu chung về vấn đề.
- **Phân tích tính khả thi.** BA làm việc cùng lập trình viên để đánh giá chi phí, hiệu năng và rủi ro kỹ thuật của từng yêu cầu.
- **Ưu tiên hoá yêu cầu.** Bảo đảm nhóm làm phần giá trị nhất hoặc gấp nhất trước. Ưu tiên phải được **điều chỉnh liên tục** khi điều kiện thị trường và mục tiêu kinh doanh thay đổi.
- **Lập data dictionary.** Định nghĩa dữ liệu dùng chung giúp mọi người dùng cùng một khái niệm.
- **Mô hình hoá yêu cầu.** Sơ đồ bộc lộ yêu cầu sai, mâu thuẫn, thiếu và thừa mà văn bản không cho thấy.
- **Phân tích giao diện giữa hệ thống và thế giới bên ngoài.** Giao diện người dùng, giao diện phần mềm, phần cứng, truyền thông.
- **Phân bổ yêu cầu cho các hệ thống con.** Cần thiết với sản phẩm phức hợp gồm nhiều thành phần phần mềm, phần cứng và cả con người.

> **Nguyên tắc vàng:** Hãy biểu diễn yêu cầu theo **nhiều cách khác nhau** — văn bản và sơ đồ, hoặc yêu cầu và test. Mỗi góc nhìn bộc lộ những vấn đề mà góc nhìn kia không thấy, và giúp mọi người đạt **tầm nhìn chung** về sản phẩm sẽ nhận được.

---

## 4. Thực hành tốt: Specification & Validation

**Specification** là ghi lại yêu cầu một cách nhất quán, dễ truy cập, dễ review và dễ hiểu với người đọc mục tiêu.

- **Áp dụng template tài liệu chuẩn.** Ngay cả khi bạn không lưu yêu cầu ở dạng tài liệu truyền thống, template vẫn nhắc bạn các loại thông tin cần khai thác.
- **Xác định nguồn gốc của yêu cầu.** Truy ngược về use case, đầu vào khách hàng, yêu cầu hệ thống cấp trên, hoặc business rule — để ai cũng biết **vì sao** yêu cầu đó tồn tại.
- **Đặt nhãn duy nhất cho mỗi yêu cầu**, theo quy ước chịu được việc thêm, xoá và di chuyển yêu cầu theo thời gian.
- **Ghi lại business rule TÁCH RIÊNG** khỏi yêu cầu dự án, vì chúng là tài sản cấp doanh nghiệp, không phải cấp dự án.
- **Đặc tả yêu cầu phi chức năng.** Bạn hoàn toàn có thể tạo ra giải pháp làm đúng mọi thứ nó phải làm nhưng không đáp ứng kỳ vọng chất lượng của người dùng.

**Validation** bảo đảm yêu cầu đúng, có đặc tính chất lượng mong muốn, và sẽ thoả mãn nhu cầu khách hàng.

- **Review yêu cầu.** Peer review — đặc biệt là **inspection** — là một trong những thực hành chất lượng có giá trị cao nhất. Nhóm nhỏ đại diện nhiều góc nhìn (BA, khách hàng, lập trình viên, tester) cùng soi tài liệu.
- **Test yêu cầu.** Viết test buộc bạn nghĩ xem làm sao biết chức năng đã đúng. Test là **góc nhìn thay thế** của yêu cầu.
- **Định nghĩa acceptance criteria.** Người dùng mô tả cách họ xác định giải pháp có đáp ứng nhu cầu và dùng được hay không.
- **Mô phỏng yêu cầu.** Công cụ thương mại cho phép dựng mock-up chạy được để người dùng tương tác, giúp yêu cầu "sống dậy" trước khi bị đúc vào bê tông của mã nguồn.

---

## 5. Thực hành tốt: Requirements management

Sau khi có yêu cầu ban đầu, bạn phải đối mặt với thay đổi tất yếu từ khách hàng, quản lý, marketing và cả đội phát triển.

- **Thiết lập quy trình change control.** Đừng bóp nghẹt thay đổi hay hy vọng nó không xảy ra; hãy có cơ chế ngăn thay đổi tràn lan gây hỗn loạn. Lập một **change control board (CCB)** nhỏ để đánh giá và quyết định.
- **Phân tích tác động của thay đổi.** Dùng requirements traceability matrix để tìm các yêu cầu, thành phần thiết kế, mã nguồn và test có thể phải sửa; ước lượng công sức cho các công việc đó.
- **Thiết lập baseline và quản lý phiên bản.** Mỗi phiên bản đặc tả cần định danh duy nhất để không nhầm bản nháp với bản đã baseline.
- **Lưu lịch sử thay đổi của từng yêu cầu:** ngày, người thay đổi, nội dung và **lý do**.
- **Theo dõi trạng thái từng yêu cầu** (proposed, approved, implemented, verified…) để biết tiến độ thật của dự án.
- **Theo dõi các issue về yêu cầu.** Mỗi issue có **một chủ sở hữu duy nhất** để không rơi vào khoảng trống.
- **Duy trì requirements traceability matrix**, cập nhật **trong quá trình phát triển** chứ không phải ở cuối.
- **Dùng công cụ requirements management** để tự động hoá phần lớn các việc trên.

---

## 6. Thực hành tốt: Knowledge & Project management

**Knowledge — kiến thức và năng lực**

- **Đào tạo business analyst.** Mọi thành viên làm công việc BA nên được đào tạo, kể cả khi chức danh không phải là "business analyst".
- **Đào tạo stakeholder về yêu cầu.** Lớp học hiệu quả nhất là lớp có **nhiều nhóm chức năng cùng tham dự**, không chỉ BA. Đây còn là hoạt động gắn kết đội tốt.
- **Đào tạo lập trình viên về nghiệp vụ.** Trải nghiệm "một ngày làm việc cùng người dùng" là khoản đầu tư đáng giá.
- **Định nghĩa quy trình requirements engineering** để mọi người làm nhất quán và để lập kế hoạch được.
- **Lập glossary** định nghĩa thuật ngữ chuyên ngành, từ viết tắt, và các từ có nhiều nghĩa.

**Project management**

- **Chọn vòng đời phát triển phù hợp** với mức độ bất định của yêu cầu.
- **Lập kế hoạch cho công việc yêu cầu**, gồm cả kế hoạch elicitation.
- **Ước lượng công sức cho yêu cầu.**
- **Lập kế hoạch dựa trên yêu cầu**, làm mịn dần khi hiểu biết tăng lên.
- **Xác định người ra quyết định về yêu cầu** — tốt nhất là trước khi gặp quyết định lớn đầu tiên.
- **Thương lượng lại cam kết khi yêu cầu thay đổi.** Nếu không thể giữ cam kết cũ với nguồn lực hiện có, hãy truyền đạt thực tế và thương lượng lại.
- **Phân tích, ghi nhận và quản lý rủi ro liên quan tới yêu cầu.**
- **Theo dõi công sức bỏ ra cho yêu cầu**, để ước lượng dự án sau tốt hơn.
- **Xem lại bài học kinh nghiệm** từ các dự án trước qua retrospective.

---

## 7. Bắt đầu áp dụng thực hành mới

Đừng cố áp dụng tất cả thực hành cho dự án kế tiếp. Hãy coi chúng là **những món mới trong bộ công cụ** của bạn.

Cách chọn: xếp các thực hành theo hai trục **giá trị mang lại** và **độ khó triển khai**, rồi bắt đầu từ nhóm **giá trị cao, dễ triển khai**.

| Nhóm | Ví dụ thực hành |
|------|-----------------|
| Giá trị cao, dễ triển khai | Đào tạo lập trình viên về nghiệp vụ; áp dụng template tài liệu; xác định user class; mô hình hoá môi trường ứng dụng; xác định nguồn gốc yêu cầu |
| Giá trị cao, khó vừa | Đào tạo BA; lập kế hoạch yêu cầu; chọn product champion; phỏng vấn khai thác; đặc tả yêu cầu phi chức năng |
| Giá trị cao, khó nhất | Định nghĩa quy trình requirements engineering; lập kế hoạch dựa trên yêu cầu; thương lượng lại cam kết |
| Giá trị thấp | Phát bảng hỏi; lưu lịch sử thay đổi; mô phỏng yêu cầu; xem báo cáo lỗi |

Lưu ý: bảng này **không tuyệt đối** — trải nghiệm của bạn có thể khác. Một số thực hành áp dụng được ngay giữa dự án (nhóm change management), một số phải chờ dự án hoặc iteration mới (nhóm elicitation).

> Hãy bảo đảm rằng mỗi đội của bạn **thử một điều gì đó mới và tốt hơn** ở mỗi cơ hội.

---

## 8. Vai trò business analyst

**Business analyst** là người có trách nhiệm chính trong việc **khai thác, phân tích, tài liệu hoá và thẩm định** nhu cầu của các stakeholder. BA là **người phiên dịch chính** để yêu cầu chảy giữa cộng đồng khách hàng và đội phát triển.

**Business analyst là một VAI TRÒ, không nhất thiết là một chức danh.** Các tên gọi khác: requirements analyst, systems analyst, requirements engineer, requirements manager, application analyst, business systems analyst, IT business analyst, hoặc đơn giản là analyst.

Điều quan trọng: khi một người kiêm cả vai trò khác lẫn vai trò BA, họ đang làm **hai công việc khác nhau**. Ví dụ project manager kiêm BA phải lập và quản lý kế hoạch, lịch, nguồn lực dựa trên chính công việc mà BA định nghĩa — hai vai trò đòi hỏi bộ kỹ năng khác nhau, dù cùng một người thực hiện.

Trong công ty làm sản phẩm tiêu dùng, vai trò BA thường thuộc về **product manager** hoặc bộ phận marketing. Nếu dự án có cả product manager lẫn BA, thường product manager tập trung vào thị trường bên ngoài và nhu cầu người dùng, còn BA chuyển chúng thành functional requirement.

> **Bẫy:** Đừng giả định rằng bất kỳ lập trình viên giỏi hay người dùng am hiểu nào cũng **tự động** trở thành BA hiệu quả nếu không được đào tạo, không có tài liệu tham khảo và không có người kèm cặp.

Ảnh hưởng của BA giỏi là rất lớn. Một công ty phát hiện họ inspect được đặc tả do BA giàu kinh nghiệm viết **nhanh gấp đôi** so với đặc tả của người mới, vì ít lỗi hơn. Trong mô hình ước lượng Cocomo II, kinh nghiệm và năng lực của analyst có thể giảm tổng công sức dự án tới **một phần ba**.

---

## 9. Nhiệm vụ của Business Analyst

- **Định nghĩa business requirement.** Làm việc với nhà tài trợ, product manager hoặc marketing manager để diễn đạt vision rõ ràng, thường qua vision and scope document.
- **Lập kế hoạch tiếp cận yêu cầu.** Xây kế hoạch khai thác, phân tích, tài liệu hoá, thẩm định và quản lý yêu cầu, đồng bộ với kế hoạch dự án tổng thể.
- **Xác định stakeholder và user class.** Chọn đại diện phù hợp cho từng user class, tranh thủ sự tham gia của họ và **thương lượng trách nhiệm** của họ.
- **Khai thác yêu cầu.** BA chủ động **giúp người dùng diễn đạt** năng lực họ cần, chứ không chỉ ghi chép thụ động.
- **Phân tích yêu cầu.** Tìm **derived requirement** (hệ quả logic của điều khách hàng nói) và **implicit requirement** (điều khách hàng mặc nhiên kỳ vọng mà không nói ra). Dùng mô hình để nhận diện mẫu hình, tìm lỗ hổng, phát hiện mâu thuẫn và xác nhận mọi thứ nằm trong phạm vi.
- **Tài liệu hoá yêu cầu** một cách có tổ chức, mô tả rõ giải pháp cho vấn đề của khách hàng.
- **Truyền đạt yêu cầu.** Không phải là đưa giấy rồi ném qua tường, mà là cộng tác liên tục để bảo đảm đội hiểu đúng. Chọn cách biểu diễn phù hợp: mô hình trực quan, bảng, công thức, prototype.
- **Dẫn dắt thẩm định yêu cầu.** BA là người tham gia trung tâm trong các buổi review, và cũng nên review thiết kế và test để bảo đảm yêu cầu được diễn giải đúng.
- **Hỗ trợ ưu tiên hoá.** BA làm trung gian cho sự cộng tác và thương lượng giữa các stakeholder và đội phát triển.
- **Quản lý yêu cầu.** Sau khi baseline, trọng tâm chuyển sang theo dõi trạng thái, xác minh việc thoả mãn yêu cầu trong sản phẩm, và quản lý thay đổi.

---

## 10. Kỹ năng & kiến thức thiết yếu

Phần lớn công việc BA là **soft skill** hơn là kỹ thuật. Kiên nhẫn và **mong muốn thật sự được làm việc với con người** là yếu tố thành công then chốt.

| Kỹ năng | Vì sao quan trọng |
|---------|-------------------|
| **Lắng nghe** | Lắng nghe chủ động: loại bỏ phân tâm, nhắc lại ý chính để xác nhận. Phải nắm cả điều **không được nói ra** và các giả định ngầm. |
| **Phỏng vấn & đặt câu hỏi** | Người dùng tự nhiên tập trung vào hành vi bình thường; phần lớn mã nguồn lại viết để xử lý ngoại lệ. BA phải đào tìm điều kiện lỗi. |
| **Ứng biến tại chỗ** | Không kịch bản phỏng vấn nào hoàn hảo; phải nghe rồi nghĩ ra câu hỏi tiếp theo ngay. |
| **Phân tích** | Tư duy được ở **cả mức trừu tượng cao lẫn thấp**, và biết khi nào chuyển giữa hai mức. |
| **Tư duy hệ thống** | Vừa chi tiết vừa thấy bức tranh lớn; hiểu tương tác giữa con người, quy trình và công nghệ. |
| **Học nhanh** | Đọc phê phán và hiệu quả. Không cần là chuyên gia nghiệp vụ, nhưng **không được che giấu sự thiếu hiểu biết**. |
| **Điều phối (facilitation)** | Dẫn dắt nhóm đạt mục tiêu chung theo cách khuyến khích tham gia và tạo cảm giác sở hữu. |
| **Lãnh đạo** | Tạo môi trường cộng tác, gây dựng niềm tin giữa các nhóm không hiểu động cơ và ràng buộc của nhau. |
| **Quan sát** | Nhận ra những nhận xét thoáng qua và những chi tiết tinh tế người dùng không nghĩ tới việc nhắc. |
| **Giao tiếp** | Viết và nói rõ ràng cho **nhiều đối tượng**: khách hàng cần thẩm định, lập trình viên cần chính xác. |
| **Tổ chức** | Xử lý khối thông tin hỗn độn, thay đổi nhanh, và dựng kiến trúc thông tin cho dự án. |
| **Mô hình hoá** | Biết chọn mô hình nào thêm giá trị, và **dạy người khác cách đọc** mô hình đó. |
| **Quan hệ liên cá nhân** | Nói ngôn ngữ của người nghe; làm việc được với đội ảo khác múi giờ, khác văn hoá, khác tiếng mẹ đẻ. |
| **Sáng tạo** | BA giỏi nhất **phát minh ra yêu cầu tiềm năng** để khách hàng cân nhắc, tìm cách thoả mãn nhu cầu mà người dùng thậm chí chưa biết mình có. |

Ngoài kỹ năng, BA cần **kiến thức**: thực hành requirements engineering hiện đại, quản lý dự án, các vòng đời phát triển, quản lý rủi ro, kỹ nghệ chất lượng, và đặc biệt là **nghiệp vụ, ngành và tổ chức** mà mình phục vụ.

> Có một cái bẫy với sáng tạo: BA phải cẩn thận **không gold-plate** giải pháp — đừng thêm yêu cầu mới vào đặc tả mà không có sự chấp thuận của khách hàng.

### Thực hành điều mình dạy

Một tác giả từng nhờ đồng nghiệp giúp viết script chặn và bóc tách thông tin từ email. Người đồng nghiệp đáp: *"Xin lỗi, nhưng tôi không nghĩ đó là yêu cầu thật của anh. Yêu cầu thật của anh là **lấy được thông tin đó theo cách nào đó khác** thay vì tự đọc email thủ công."*

Đúng vậy — ngay cả người viết sách về yêu cầu cũng rơi vào cái bẫy phổ biến: **trình bày một giải pháp như thể nó là yêu cầu**. Khi bạn lùi lại và tìm vấn đề nền tảng, gần như luôn có nhiều cách giải quyết, và một số tốt hơn cách đầu tiên bật ra trong đầu.

---

## 11. Con đường trở thành BA & vai trò BA trong agile

BA đến từ nhiều xuất phát điểm, mỗi xuất phát điểm có **lợi thế và rủi ro riêng**:

| Xuất phát điểm | Lợi thế | Rủi ro cần cảnh giác |
|----------------|---------|----------------------|
| **Người dùng cũ** | Hiểu nghiệp vụ, nói ngôn ngữ người dùng, dễ được tin tưởng | Ít kiến thức kỹ thuật; tin rằng mình hiểu rõ hơn người dùng hiện tại; mắc kẹt trong cách làm cũ; nghĩ theo giao diện thay vì theo nhu cầu |
| **Lập trình viên / tester cũ** | Tư duy phân tích, quen tìm ngoại lệ và lỗ hổng | Dễ rơi vào tư duy và thuật ngữ kỹ thuật; tập trung vào phần mềm thay vì nhu cầu khách hàng; cần bổ sung kiến thức nghiệp vụ |
| **Project manager** | Kỹ năng giao tiếp, thương lượng, điều phối, tổ chức tốt | Phải chuyển trọng tâm từ lịch – nguồn lực – ngân sách sang **hiểu nhu cầu nghiệp vụ**; cần rèn kỹ năng phân tích, mô hình hoá, phỏng vấn |
| **Chuyên gia nghiệp vụ (SME)** | Kiến thức miền sâu, đánh giá được tính hợp lý của yêu cầu | Dễ đặc tả theo **sở thích cá nhân** thay vì nhu cầu của các user class; giỏi hệ thống *as-is* nhưng khó hình dung *to-be* |
| **Người mới ra trường** | Không có định kiến về cách làm yêu cầu; được tuyển vì có sẵn kỹ năng mềm | Thiếu kinh nghiệm và kiến thức; cần được kèm cặp để hình thành thói quen tốt từ đầu |

**Vai trò BA trong dự án agile.** Các nhiệm vụ BA **vẫn phải được làm**, nhưng người làm có thể không mang chức danh BA. Nhiều phương pháp agile có vai trò **product owner** đảm nhận một phần công việc BA, cộng thêm việc đưa ra vision, truyền đạt ràng buộc, ưu tiên hoá product backlog và ra quyết định cuối cùng về sản phẩm.

BA trong môi trường agile nên:

- Định nghĩa quy trình yêu cầu **nhẹ và linh hoạt**, điều chỉnh theo nhu cầu dự án.
- Giữ mức tài liệu **vừa đủ** — không quá ít, không quá nhiều. Cả hai thái cực (đặc tả mọi thứ tới từng chi tiết, hoặc không có tài liệu nào) đều không lý tưởng.
- Giúp xác định cách tài liệu hoá backlog phù hợp nhất.
- Dùng kỹ năng điều phối và lãnh đạo để các stakeholder **nói chuyện với nhau thường xuyên**.
- Thẩm định rằng nhu cầu khách hàng được phản ánh chính xác trong backlog, và hỗ trợ ưu tiên hoá.
- Làm việc với khách hàng khi họ đổi ý, ghi lại thay đổi và cùng đội xác định tác động lên nội dung iteration và kế hoạch release.

Vai trò product owner rất giá trị, nhưng người đảm nhận nó **không phải lúc nào cũng có đủ kỹ năng phân tích nghiệp vụ hoặc đủ thời gian** để làm hết. Một BA mang đúng những năng lực đó vào đội.

---

## Điểm cốt lõi

- **Requirements development là lặp**, với **progressive refinement of detail**; bốn hoạt động đan xen chứ không nối tiếp.
- Phân bổ công sức yêu cầu theo vòng đời: waterfall dồn đầu, iterative rải theo vòng lặp, agile rải đều thành nhiều đợt nhỏ.
- **Product champion** ra quyết định thay mặt một user class; **focus group** chỉ cho ý kiến, không có quyền quyết định.
- Ba loại sự kiện hệ thống: **signal, temporal, business**.
- **Business rule phải lưu tách riêng** khỏi yêu cầu dự án vì là tài sản cấp doanh nghiệp.
- **Peer review, đặc biệt là inspection**, là một trong những thực hành chất lượng giá trị nhất.
- Hãy biểu diễn yêu cầu bằng **nhiều góc nhìn khác nhau** để lộ ra lỗi mà một góc nhìn không thấy.
- Mỗi **issue về yêu cầu cần một chủ sở hữu duy nhất**; traceability matrix phải cập nhật **trong** quá trình phát triển.
- Bắt đầu cải tiến từ nhóm thực hành **giá trị cao, dễ triển khai**.
- **BA là vai trò, không phải chức danh.** Người kiêm nhiệm đang làm hai công việc với hai bộ kỹ năng.
- BA giỏi **phát minh yêu cầu tiềm năng**, nhưng phải tránh **gold-plating** không được khách hàng chấp thuận.
- Cạm bẫy phổ biến nhất: khách hàng **trình bày giải pháp như thể đó là yêu cầu**. Hãy đào xuống nhu cầu nền tảng.
- Trong agile, nhiệm vụ BA vẫn còn; **product owner** thường gánh một phần, nhưng hiếm khi gánh hết.

## Tóm tắt

- Hãy tích luỹ một **bộ công cụ thực hành tốt** thay vì bám cứng vào một phương pháp luận duy nhất.
- Chọn thực hành theo bối cảnh dự án; không thực hành nào phù hợp với mọi tình huống, và mỗi phần của dự án có thể cần thực hành khác nhau.
- Năm nhóm thực hành ứng với năm phân môn: **elicitation, analysis, specification, validation, management**, cộng thêm **knowledge** và **project management**.
- BA là **cầu nối giao tiếp** giữa khách hàng và đội phát triển, và là người kiến tạo quan hệ đối tác đó.
- Kỹ năng quan trọng nhất của BA là **soft skill**: lắng nghe, đặt câu hỏi, điều phối, giao tiếp, tổ chức.
- Mọi xuất phát điểm nghề nghiệp đều mang theo **điểm mù riêng** — hãy nhận diện và chủ động lấp đầy khoảng trống của mình.
