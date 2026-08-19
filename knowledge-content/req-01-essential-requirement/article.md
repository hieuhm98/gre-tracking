# Yêu cầu phần mềm cốt lõi

## 1. Yêu cầu phần mềm là gì?

Rất nhiều dự án phần mềm thất bại không phải vì lập trình kém, mà vì **không ai thống nhất được sản phẩm cần làm gì**. Nghịch lý là sau nhiều thập kỷ, các bên tham gia dự án vẫn thường không cùng hiểu chữ "yêu cầu" (requirement) nghĩa là gì.

Một vài định nghĩa hữu ích:

- Brian Lawrence: yêu cầu là **"bất cứ thứ gì dẫn dắt các lựa chọn thiết kế"**.
- Cách nói khác: yêu cầu là **một thuộc tính mà sản phẩm phải có để mang lại giá trị cho một stakeholder**.
- Định nghĩa đầy đủ nhất, từ Ian Sommerville & Pete Sawyer:

> Yêu cầu là đặc tả về **những gì cần được hiện thực**. Chúng mô tả **hệ thống nên hành xử như thế nào**, hoặc mô tả một **thuộc tính / đặc tính** của hệ thống. Chúng cũng có thể là một **ràng buộc** lên quá trình phát triển hệ thống.

Định nghĩa này quan trọng vì nó thừa nhận rằng "yêu cầu" là một **tập hợp nhiều loại thông tin khác nhau**: hành vi nhìn thấy được từ phía người dùng, đặc tính nội bộ mà lập trình viên quan tâm, và cả các ràng buộc.

**Yêu cầu có chiều thời gian.** Một yêu cầu có thể mô tả hệ thống hiện tại, nhu cầu sắp tới (ưu tiên cao), nhu cầu trung hạn (ưu tiên trung bình), hay giả định xa (ưu tiên thấp). Đừng tranh cãi xem một mục có phải yêu cầu không chỉ vì bạn biết nó sẽ không được làm trong bản phát hành này — nó **vẫn là** một yêu cầu, chỉ là chưa tới lượt.

> **Bẫy:** Đừng giả định mọi stakeholder cùng hiểu "yêu cầu" giống nhau. Hãy thống nhất định nghĩa ngay từ đầu để tất cả nói cùng một ngôn ngữ.

---

## 2. Ba cấp độ yêu cầu

Yêu cầu phần mềm được chia thành **ba cấp độ** rõ rệt. Đây là mô hình nền tảng của toàn bộ khoá học.

| Cấp độ | Trả lời câu hỏi | Ai cung cấp | Lưu ở đâu |
|--------|-----------------|-------------|-----------|
| **Business requirement** | *Vì sao* tổ chức làm dự án này? | Nhà tài trợ, khách hàng mua, marketing, product visionary | Vision & Scope document |
| **User requirement** | Người dùng *cần làm gì* với sản phẩm? | Đại diện người dùng thực tế | Use case, user story, event-response table |
| **Functional requirement** | Hệ thống *phải làm gì* để người dùng đạt mục tiêu đó? | Business Analyst suy ra từ hai cấp trên | Software Requirements Specification (SRS) |

**Business requirement** mô tả lợi ích kinh doanh mà tổ chức muốn đạt được. Ví dụ: một hãng hàng không muốn *giảm 25% chi phí nhân sự tại quầy sân bay*. Mục tiêu này dẫn tới ý tưởng làm kiosk tự check-in.

**User requirement** mô tả mục tiêu hoặc tác vụ mà người dùng phải thực hiện được. Ví dụ use case *Check in for a flight*, hoặc viết dạng user story: *"Là hành khách, tôi muốn tự check-in để có thể lên máy bay."*

**Functional requirement** mô tả hành vi cụ thể mà lập trình viên phải hiện thực, thường viết dạng câu "shall":

- *"Hệ thống **shall** cho phép hành khách in thẻ lên máy bay cho mọi chặng đã check-in."*
- *"Nếu hồ sơ hành khách không có sở thích chỗ ngồi, hệ thống **shall** tự gán ghế."*

**Sự thẳng hàng (alignment) giữa ba cấp là điều kiện sống còn của dự án.** Mỗi functional requirement phải phục vụ một user requirement, và mỗi user requirement phải phục vụ một business requirement. Nếu không truy ngược được, hãy đặt câu hỏi tại sao nó tồn tại.

---

## 3. Các loại yêu cầu khác

Ngoài ba cấp độ trên, bạn sẽ gặp nhiều loại thông tin yêu cầu khác:

| Thuật ngữ | Ý nghĩa |
|-----------|---------|
| **Business rule** | Chính sách, quy định, tiêu chuẩn, công thức tính của doanh nghiệp. **Bản thân nó KHÔNG phải yêu cầu phần mềm**, nhưng là nguồn gốc của nhiều yêu cầu. |
| **System requirement** | Yêu cầu cấp cao cho một sản phẩm gồm nhiều hệ thống con (có thể gồm cả phần cứng và con người). |
| **Constraint** | Ràng buộc lên lựa chọn thiết kế / hiện thực của lập trình viên. |
| **External interface requirement** | Mô tả kết nối giữa hệ thống với người dùng, hệ thống khác, hoặc thiết bị phần cứng. |
| **Quality attribute** | Đặc tính chất lượng: hiệu năng, bảo mật, khả dụng, dễ dùng, khả chuyển. |
| **Nonfunctional requirement** | Mô tả một thuộc tính hệ thống phải có, hoặc một ràng buộc phải tuân thủ. |

**Vì sao business rule không phải là yêu cầu phần mềm?** Vì nó tồn tại **độc lập** với bất kỳ ứng dụng nào. Quy định "nhân viên phải học lại an toàn hoá chất mỗi năm" đúng kể cả khi công ty làm thủ công hoàn toàn. Nhưng quy định đó bắt buộc phần mềm phải có chức năng kiểm tra hồ sơ đào tạo — và **chức năng đó** mới là yêu cầu phần mềm.

### Nonfunctional — không phải chức năng thì là gì?

Thuật ngữ *nonfunctional* bị chê nhiều vì nó nói cái nó **không** phải, chứ không nói nó **là** gì. Trên thực tế nhóm này gồm:

- **Quality attributes** — hệ thống làm việc đó *tốt đến mức nào* (nhanh, an toàn, dễ dùng, ổn định).
- **External interfaces** — hệ thống nối với thế giới bên ngoài ra sao.
- **Constraints** — giới hạn áp lên thiết kế và hiện thực.
- **Compliance / localization** — tuân thủ luật, chứng nhận, đa ngôn ngữ, tiền tệ, múi giờ.

> Bạn hoàn toàn có thể giao một sản phẩm **đủ mọi chức năng** nhưng người dùng vẫn ghét, vì nó không đạt kỳ vọng chất lượng mà họ chưa bao giờ nói ra.

---

## 4. Feature, user requirement và functional requirement

**Feature** là một hoặc nhiều năng lực hệ thống có liên quan logic với nhau, mang lại giá trị cho người dùng, và được mô tả bởi một tập functional requirement.

Quan hệ phân cấp: một **feature** được tách thành nhiều **user requirement**, mỗi user requirement lại dẫn tới nhiều **functional requirement**.

Ví dụ kinh điển — nâng cấp một trình soạn thảo văn bản:

| Cấp | Ví dụ |
|-----|-------|
| Business requirement | Tăng 25% doanh số ngoài Mỹ trong 6 tháng. |
| Feature | Bộ kiểm tra chính tả **đa ngôn ngữ** (đối thủ chỉ có tiếng Anh). |
| User requirement | Chọn ngôn ngữ kiểm tra chính tả; tìm lỗi chính tả; thêm từ vào từ điển. |
| Functional requirement | Bôi đỏ từ sai, tự sửa, hiển thị gợi ý thay thế, thay thế toàn bộ. |
| Nonfunctional | Yêu cầu usability về cách bản địa hoá cho từng bảng mã ký tự. |

Danh sách feature mà khách hàng mong muốn **không tương đương** với mô tả nhu cầu tác vụ của người dùng. Đó là lý do khoá học này liên tục nhấn mạnh: hãy hiểu **mục tiêu người dùng** trước, rồi mới suy ra feature.

---

## 5. Product requirements vs project requirements

Đây là phân biệt hay bị bỏ qua và gây rối tài liệu.

- **Product requirement** — mô tả thuộc tính của *phần mềm* sẽ được xây. Đây là nội dung của SRS.
- **Project requirement** — những thứ *dự án* cần để thành công nhưng **không nằm trong phần mềm**.

Project requirement gồm:

- Tài nguyên vật lý: máy trạm, thiết bị test, phòng lab, phòng họp nhóm.
- Nhu cầu đào tạo nhân sự.
- Tài liệu người dùng: hướng dẫn, tutorial, release notes.
- Tài liệu hỗ trợ: tài nguyên help desk, thông tin bảo trì thiết bị.
- Thay đổi hạ tầng trong môi trường vận hành.
- Quy trình phát hành, cài đặt, cấu hình, kiểm thử cài đặt.
- **Transition requirement**: chuyển đổi dữ liệu, thiết lập bảo mật, cutover, đào tạo lấp khoảng trống kỹ năng.
- Chứng nhận và tuân thủ sản phẩm.
- Mua sắm và cấp phép thành phần bên thứ ba.
- Beta test, đóng gói, marketing, phân phối.
- Thoả thuận mức dịch vụ (SLA) với khách hàng.
- Bảo hộ sở hữu trí tuệ (bằng sáng chế, nhãn hiệu, bản quyền).

**Project requirement thuộc về project management plan, không thuộc SRS.** Việc tách bạch giúp SRS tập trung vào đúng câu hỏi: chúng ta định xây cái gì?

---

## 6. Requirements development

Kỹ nghệ yêu cầu (requirements engineering) chia làm hai nửa. Nửa thứ nhất là **requirements development**, gồm bốn hoạt động đan xen nhau — **không** phải bốn giai đoạn tuần tự:

**Elicitation (khai thác)** — mọi hoạt động khám phá yêu cầu:

- Xác định các user class và stakeholder khác.
- Hiểu tác vụ, mục tiêu của người dùng và business objective mà chúng phục vụ.
- Tìm hiểu môi trường mà sản phẩm sẽ được dùng.
- Làm việc với đại diện từng user class để nắm nhu cầu chức năng và kỳ vọng chất lượng.

**Analysis (phân tích)** — hiểu sâu và biểu diễn yêu cầu theo nhiều cách:

- Phân loại thông tin nhận được (đâu là mục tiêu, đâu là business rule, đâu là giải pháp gợi ý).
- Phân rã yêu cầu cấp cao xuống mức chi tiết phù hợp.
- Suy ra functional requirement từ các nguồn khác.
- Xác định độ quan trọng tương đối của các quality attribute.
- Phân bổ yêu cầu cho các thành phần kiến trúc.
- Thương lượng độ ưu tiên; tìm khoảng trống và yêu cầu thừa.

**Specification (đặc tả)** — chuyển nhu cầu thu thập được thành yêu cầu viết và sơ đồ, lưu trữ bền vững, có tổ chức, phù hợp với người đọc mục tiêu.

**Validation (thẩm định)** — xác nhận rằng bạn có **đúng bộ yêu cầu**: review tài liệu để sửa lỗi trước khi nhóm phát triển nhận, và xây dựng acceptance test / acceptance criteria.

> **Quan trọng:** Bạn sẽ **không bao giờ** có bộ yêu cầu hoàn hảo. Mục tiêu thực dụng của requirements development là tích luỹ **hiểu biết chung đủ tốt** để xây phần tiếp theo của sản phẩm ở **mức rủi ro chấp nhận được**.

---

## 7. Requirements management

Nửa thứ hai là **requirements management** — mọi việc bạn làm *sau khi* đã có bộ yêu cầu trong tay:

- Định nghĩa **requirements baseline**: ảnh chụp tại một thời điểm của tập yêu cầu đã được review và duyệt, thường cho một bản phát hành hoặc một iteration.
- Đánh giá **tác động** của thay đổi được đề xuất và đưa thay đổi đã duyệt vào dự án một cách có kiểm soát.
- Giữ **kế hoạch dự án** đồng bộ với yêu cầu khi chúng tiến hoá.
- Thương lượng lại cam kết dựa trên tác động ước lượng của thay đổi.
- Xác định **quan hệ và phụ thuộc** giữa các yêu cầu.
- **Truy vết (trace)** từng yêu cầu tới thiết kế, mã nguồn và test tương ứng.
- Theo dõi **trạng thái** yêu cầu và hoạt động thay đổi suốt dự án.

Mục tiêu của requirements management **không phải** để chặn đứng thay đổi hay làm thay đổi trở nên khó khăn. Nó tồn tại để **dự đoán và hấp thụ** những thay đổi chắc chắn sẽ đến, sao cho tác động phá vỡ lên dự án là nhỏ nhất.

---

## 8. Khi yêu cầu tồi xảy ra với người tốt

Đây là các rủi ro yêu cầu phổ biến nhất và cách phòng tránh.

**Người dùng tham gia không đủ.** Khách hàng thường không hiểu vì sao phải bỏ công khai thác yêu cầu; lập trình viên đôi khi nghĩ mình đã hiểu nhu cầu rồi. Hệ quả: yêu cầu xuất hiện muộn, sinh ra rework và trễ hạn. Nguy hiểm hơn: BA đặc tả bộ yêu cầu trông có vẻ hoàn hảo, đội phát triển làm đúng, nhưng **không ai dùng** vì bài toán bị hiểu sai từ đầu.

**Lập kế hoạch thiếu chính xác.** Câu hỏi "đây là ý tưởng sản phẩm của tôi, bao giờ xong?" thường nhận một câu trả lời vội vàng — và người nghe hiểu đó là cam kết. Nguyên nhân hàng đầu gây ước lượng sai: yêu cầu thay đổi thường xuyên, yêu cầu thiếu, giao tiếp với người dùng không đủ, đặc tả kém, và phân tích yêu cầu sơ sài.

**Yêu cầu người dùng phình ra (creeping requirements).** Yêu cầu sẽ thay đổi và lớn lên — điều đó bình thường. Vấn đề là khi phạm vi tăng mà lịch, người và ngân sách không đổi. Hãy bắt đầu bằng tuyên bố rõ ràng về business objective, vision, scope và success criteria, rồi đánh giá mọi đề xuất mới dựa trên chúng.

**Yêu cầu nhập nhằng (ambiguous).** Dấu hiệu: một người đọc hiểu được theo nhiều cách; hoặc nhiều người đọc hiểu theo những cách khác nhau **mà ai cũng thấy hợp lý** — đây là loại nguy hiểm hơn vì review cá nhân sẽ không phát hiện ra. Cách trị: cho nhiều góc nhìn khác nhau cùng inspect yêu cầu, viết test từ yêu cầu, và làm prototype.

**Gold plating.** Lập trình viên (hoặc BA) thêm chức năng ngoài đặc tả vì tin rằng người dùng sẽ rất thích. Nếu người dùng không cần, toàn bộ công sức đó là lãng phí. Cách trị: truy vết mỗi mẩu chức năng ngược về nguồn gốc và lý do kinh doanh của nó.

**Bỏ sót stakeholder.** Đa số sản phẩm có nhiều nhóm người dùng khác nhau. Đừng quên cả nhân viên bảo trì, hỗ trợ hiện trường, người chuyển đổi dữ liệu từ hệ thống cũ, và cả các cơ quan quản lý — những bên có thể **không biết dự án tồn tại** nhưng lại áp đặt tiêu chuẩn lên nó.

---

## 9. Cái giá của lỗi yêu cầu

Con số làm nên sức thuyết phục khi bạn cần bảo vệ ngân sách cho hoạt động yêu cầu:

- Lỗi sinh ra trong giai đoạn yêu cầu chiếm **40–50% tổng số lỗi** của một sản phẩm phần mềm.
- **Rework** — làm lại thứ tưởng đã xong — chiếm **30–50% tổng chi phí phát triển**.
- Lỗi yêu cầu chiếm **70–85% chi phí rework** đó.

Chi phí sửa một lỗi tăng rất nhanh theo thời điểm phát hiện:

| Phát hiện ở giai đoạn | Chi phí tương đối |
|-----------------------|-------------------|
| Đang làm yêu cầu | 1 |
| Thiết kế | 1 (sửa yêu cầu) + 2–3 (làm lại thiết kế) |
| Khi hệ thống đã vận hành | **100 hoặc hơn** |

Một ví dụ thực tế: một công ty đo được chi phí trung bình **200 USD** để tìm và sửa một lỗi bằng **software inspection**, so với **4.200 USD** cho một lỗi do người dùng báo về — **hệ số khuếch đại 21 lần**.

> Hãy nghĩ về yêu cầu tốt như một **khoản đầu tư**, không phải một khoản chi phí. Đừng ngần ngại thời gian bỏ ra cho yêu cầu — hãy ngần ngại số tiền lãng phí khi dự án bỏ qua nó.

---

## 10. Lợi ích của quy trình yêu cầu chất lượng cao

Nhiều người lầm tưởng thời gian bàn về yêu cầu chỉ làm trễ ngày giao hàng đúng bằng khoảng thời gian đó — tức giả định lợi tức đầu tư bằng không. Thực tế, đầu tư vào yêu cầu tốt gần như luôn trả lại nhiều hơn chi phí bỏ ra.

Chi phí bạn bỏ ra: xây quy trình và template mới, đào tạo đội, mua công cụ, và lớn nhất là **thời gian đội dự án thực sự dành cho hoạt động yêu cầu**.

Lợi ích tiềm năng:

- Ít lỗi hơn trong yêu cầu và trong sản phẩm bàn giao.
- Giảm rework khi phát triển.
- Phát triển và bàn giao nhanh hơn.
- Ít chức năng thừa, không ai dùng.
- Chi phí nâng cấp và bảo trì thấp hơn.
- Ít hiểu lầm giữa các bên.
- Giảm scope creep và giảm hỗn loạn dự án.
- Khách hàng **và** thành viên nhóm hài lòng hơn.
- Sản phẩm làm đúng việc nó phải làm.

Frederick Brooks đã tóm gọn tất cả trong tiểu luận kinh điển *No Silver Bullet* (1987):

> Phần khó nhất khi xây một hệ thống phần mềm là **quyết định chính xác cần xây cái gì**. Không phần nào khác của công việc khái niệm lại khó bằng việc thiết lập các yêu cầu kỹ thuật chi tiết. Không phần nào khác làm hỏng hệ thống nặng nề bằng khi nó bị làm sai. Không phần nào khác khó sửa chữa về sau hơn.

---

## Điểm cốt lõi

- Yêu cầu là **đặc tả về những gì cần được hiện thực** — hành vi, thuộc tính, hoặc ràng buộc.
- Ba cấp độ: **business (vì sao) → user (người dùng cần làm gì) → functional (hệ thống phải làm gì)**. Chúng phải **thẳng hàng** với nhau.
- **Business rule không phải yêu cầu phần mềm**, nhưng là nguồn gốc của nhiều yêu cầu.
- **Nonfunctional requirement** = quality attributes + external interfaces + constraints. Bỏ qua chúng là cách chắc chắn để có sản phẩm đủ chức năng nhưng bị ghét.
- **Product requirement** (vào SRS) khác **project requirement** (vào project management plan).
- **Requirements development** = elicitation + analysis + specification + validation, thực hiện **lặp**, không tuần tự.
- **Requirements management** = baseline, kiểm soát thay đổi, truy vết, theo dõi trạng thái.
- Lỗi yêu cầu chiếm **40–50% tổng lỗi**; rework chiếm **30–50% chi phí**; lỗi yêu cầu gây ra **70–85%** rework đó.
- Chi phí sửa lỗi tăng từ **1 lên 100 hoặc hơn** khi phát hiện muộn tới lúc vận hành.
- Mục tiêu không phải yêu cầu hoàn hảo, mà là **đủ tốt để tiếp tục ở mức rủi ro chấp nhận được**.

## Tóm tắt

- Yêu cầu là nền móng chung của cả phát triển phần mềm lẫn quản lý dự án; đây là nơi lợi ích của **mọi** stakeholder giao nhau.
- Hãy phân biệt rành mạch **ba cấp độ yêu cầu** và luôn truy được functional requirement ngược về business objective.
- Ngoài chức năng, hãy chủ động khai thác **quality attributes, interfaces và constraints** — người dùng hiếm khi tự nói ra chúng.
- Sáu rủi ro kinh điển: **thiếu người dùng tham gia, kế hoạch sai, yêu cầu phình ra, nhập nhằng, gold plating, bỏ sót stakeholder**.
- Tách **requirements development** (tạo ra hiểu biết chung) khỏi **requirements management** (bảo vệ và tiến hoá hiểu biết đó).
- Đầu tư vào yêu cầu **rút ngắn** lịch trình thay vì kéo dài nó, vì nó cắt bỏ phần rework đắt đỏ nhất.
