# Tiếng nói người dùng & khai thác yêu cầu

## 1. User class là gì & cách phân loại

Người ta hay nói về **"người dùng"** như thể đó là một khối đồng nhất. Thực tế, hầu hết sản phẩm có kích thước đáng kể đều phục vụ **nhiều nhóm người dùng khác nhau**, với kỳ vọng và mục tiêu khác nhau.

Một **user class** là tập con của người dùng sản phẩm. Người dùng có thể được nhóm lại dựa trên khác biệt về:

- **Mức đặc quyền / bảo mật** (người dùng thường, khách, quản trị viên).
- **Tác vụ** họ thực hiện trong nghiệp vụ.
- **Feature** họ sử dụng.
- **Tần suất** sử dụng sản phẩm.
- **Kinh nghiệm** về miền ứng dụng và về máy tính.
- **Nền tảng** họ dùng (PC, laptop, tablet, smartphone, thiết bị chuyên dụng).
- **Ngôn ngữ mẹ đẻ.**
- Việc họ tương tác **trực tiếp hay gián tiếp** với hệ thống.

Một cá nhân có thể thuộc **nhiều user class**. Quản trị viên của ứng dụng đôi khi cũng dùng nó như người dùng thường.

> **Sai lầm thường gặp:** nhóm người dùng theo **vị trí địa lý** hoặc **loại hình công ty**. Một công ty phần mềm ngân hàng ban đầu định phân biệt người dùng theo ngân hàng thương mại lớn, ngân hàng thương mại nhỏ, quỹ tiết kiệm, và quỹ tín dụng. Nhưng đó là **phân khúc thị trường**, không phải user class.

**Cách phân loại đúng: theo TÁC VỤ họ thực hiện.** Mọi loại tổ chức tài chính đó đều có **giao dịch viên**, **nhân viên xử lý hồ sơ vay**, **chuyên viên khách hàng doanh nghiệp** và **giám đốc chi nhánh**. Những người làm cùng một loại công việc sẽ có **nhu cầu chức năng tương tự** trên toàn bộ các tổ chức. Vì vậy tên user class hợp lý hơn là: *teller, loan officer, business banker, branch manager*.

**User class không nhất thiết là con người.** Nó có thể là một **software agent** hoạt động thay mặt người dùng: bot quét mạng tìm thông tin, phần mềm giám sát hệ thống, hoặc chương trình khai phá dữ liệu.

---

## 2. Favored, disfavored, ignored user class & persona

Không phải mọi user class đều quan trọng như nhau với một dự án cụ thể.

| Loại | Ý nghĩa | Cách xử lý |
|------|---------|-----------|
| **Favored** | Nhóm mà sự hài lòng của họ **gắn chặt nhất với việc đạt business objectives** | Được ưu tiên khi giải quyết xung đột yêu cầu và khi quyết định độ ưu tiên |
| **Disfavored** | Nhóm **không được phép** dùng sản phẩm vì lý do pháp lý, bảo mật hoặc an toàn | Chủ động xây tính năng **gây khó** cho họ |
| **Ignored** | Nhóm sẽ dùng sản phẩm, nhưng bạn **không thiết kế riêng** cho họ | Không đầu tư đặc biệt |
| Còn lại | Các nhóm không thuộc ba loại trên | **Quan trọng ngang nhau** khi định nghĩa yêu cầu |

> **Quan trọng:** Favored **không** có nghĩa là nhóm trả tiền hay nhóm có quyền lực chính trị lớn nhất. Nó là vấn đề **thẳng hàng với business objectives**.

**Ví dụ disfavored user class:** khoá tài khoản sau bốn lần đăng nhập sai bảo vệ khỏi nhóm *"người giả mạo danh tính"*, dù có thể gây phiền cho người dùng hợp pháp hay quên. Ngân hàng gửi mã truy cập một lần khi không nhận ra máy tính bạn dùng — tính năng đó tồn tại vì nhóm disfavored *"người có thể đã trộm thông tin ngân hàng của bạn"*. CAPTCHA tồn tại để chặn bot phá hoại.

> **Bẫy:** Đừng bỏ qua **indirect user class**. Họ không tự dùng ứng dụng mà truy cập dữ liệu hoặc dịch vụ của nó qua ứng dụng khác hoặc qua báo cáo. **Khách hàng cách một lớp vẫn là khách hàng.**

### Xác định user class

Dùng mẫu cộng tác **"expand then contract"**: hỏi nhà tài trợ ai sẽ dùng hệ thống, rồi brainstorm càng nhiều user class càng tốt — đừng lo nếu ban đầu có hàng chục. Sau đó tìm các nhóm có nhu cầu tương tự để **gộp lại** hoặc coi là một user class lớn có vài phân lớp. Mục tiêu: rút xuống khoảng **15 user class hoặc ít hơn**.

Một công ty phục vụ khoảng 65 khách hàng doanh nghiệp ban đầu coi **mỗi công ty là một user riêng biệt**. Việc gộp lại thành **sáu user class** đã đơn giản hoá rất nhiều thách thức về yêu cầu.

Công cụ hỗ trợ: **external entity trên context diagram** là ứng viên user class; **sơ đồ tổ chức** giúp phát hiện phòng ban tham gia hoặc bị ảnh hưởng bởi quy trình nghiệp vụ.

### User persona

**Persona** là mô tả một **con người giả định, mang tính đại diện** cho một user class. Persona giúp việc suy nghĩ về yêu cầu trở nên **cụ thể** thay vì mơ hồ về một nhóm vô danh.

Persona có thể làm **chỗ giữ vị trí** khi BA không có sẵn đại diện người dùng thật: thay vì dừng lại, BA hình dung persona thực hiện tác vụ, phác thảo yêu cầu, rồi xác nhận khi có người dùng thật.

Ví dụ persona cho user class *Chemist*:

> **Fred, 41 tuổi**, làm nhà hoá học tại Contoso 14 năm kể từ khi lấy bằng tiến sĩ. Anh **không kiên nhẫn với máy tính**. Fred thường làm hai dự án cùng lúc. Phòng thí nghiệm của anh có khoảng **300 chai hoá chất** và bình khí. Một ngày trung bình anh cần **bốn hoá chất mới**: hai loại thương mại có sẵn trong kho, một phải đặt mua, một lấy từ kho mẫu nội bộ. Đôi khi Fred cần hoá chất nguy hiểm đòi hỏi đào tạo an toàn đặc biệt. Khi mua một hoá chất lần đầu, Fred muốn **bảng dữ liệu an toàn được gửi email tự động**. Mỗi năm Fred tổng hợp khoảng 20 hoá chất mới. Fred muốn nhận **báo cáo phơi nhiễm hoá chất hằng tháng qua email**.

Khi làm việc, BA có thể tự hỏi: ***"Fred sẽ cần làm gì?"*** — cụ thể và hữu ích hơn nhiều so với việc suy đoán về một nhóm vô danh. Hãy bảo đảm persona **thực sự đại diện** cho user class, dựa trên nghiên cứu thị trường và nhân khẩu học chứ không phải tưởng tượng.

---

## 3. Product champion: vai trò, kỳ vọng & cạm bẫy

**Product champion** là đại diện chính giữa các thành viên của **một user class** và BA của dự án. Đây là mô hình hiệu quả để cấu trúc quan hệ đối tác khách hàng – nhà phát triển.

Product champion lý tưởng là **người dùng thật**, không phải người thay thế như nhà tài trợ, marketing, quản lý người dùng hay lập trình viên đang tưởng tượng mình là người dùng. Họ thu thập yêu cầu từ các thành viên khác trong user class mình đại diện và **hoà giải mâu thuẫn** bên trong nhóm đó.

Đặc điểm của product champion tốt:

- Có **tầm nhìn rõ ràng** về hệ thống mới và **nhiệt tình** vì thấy lợi ích cho mình và đồng nghiệp.
- **Giao tiếp hiệu quả** và **được đồng nghiệp tôn trọng**.
- Hiểu sâu **miền ứng dụng** và môi trường vận hành của giải pháp.

> **Lưu ý phân công:** Phát triển yêu cầu là **trách nhiệm chung** của BA và người dùng được chọn — nhưng **BA vẫn là người viết tài liệu yêu cầu**. Viết yêu cầu tốt đã khó với người làm nghề; không thực tế khi kỳ vọng người dùng chưa từng viết yêu cầu làm tốt việc đó.

**Lợi ích phụ ít ai nghĩ tới:** khi đồng nghiệp thắc mắc vì sao phần mềm chưa xong, product champion tốt sẽ **lên tiếng bênh vực đội phát triển**: *"Đừng lo. Tôi hiểu và đồng ý với cách tiếp cận của họ. Thời gian dành cho yêu cầu sẽ giúp chúng ta có đúng hệ thống mình cần và tiết kiệm thời gian về lâu dài."*

### Hoạt động của product champion

| Nhóm | Hoạt động |
|------|-----------|
| **Lập kế hoạch** | Tinh chỉnh phạm vi và giới hạn; xác định hệ thống cần tích hợp; đánh giá tác động lên nghiệp vụ; xác định tiêu chuẩn và chứng nhận liên quan |
| **Yêu cầu** | Thu thập ý kiến từ người dùng khác; xây usage scenario, use case, user story; **giải quyết xung đột trong user class**; xác định độ ưu tiên; góp ý về hiệu năng và chất lượng; đánh giá prototype |
| **Thẩm định** | Review đặc tả yêu cầu; định nghĩa acceptance criteria; xây user acceptance test; cung cấp dữ liệu test từ nghiệp vụ |
| **Hỗ trợ người dùng** | Viết một phần tài liệu và help text; đóng góp tài liệu đào tạo; demo hệ thống cho đồng nghiệp |
| **Quản lý thay đổi** | Đánh giá và ưu tiên hoá yêu cầu sửa lỗi và nâng cấp; điều chỉnh phạm vi các bản sau; đánh giá tác động của thay đổi lên người dùng |

### Nhiều product champion cho nhiều user class

Một người hiếm khi mô tả được nhu cầu của **mọi** người dùng. Với hệ thống có bốn user class chính, dự án cần **bốn product champion**, không nhất thiết toàn thời gian.

Với user class rất lớn, product champion có thể lập **nhóm hỗ trợ** gồm vài người đại diện các phân lớp khác nhau. Cách tiếp cận phân cấp này thu hút thêm người dùng vào quá trình mà **không cần workshop khổng lồ hay hàng chục buổi phỏng vấn riêng**. Product champion luôn cố gắng đạt đồng thuận, nhưng **sẵn sàng tự quyết** khi không đạt được, để dự án không bị đình trệ.

### Cạm bẫy cần tránh

- **Quản lý phủ quyết quyết định** của product champion đã được trao quyền hợp lệ — dẫn tới người dùng thất vọng và champion nản lòng.
- Product champion **quên mình đại diện cho người khác** và chỉ trình bày yêu cầu của riêng mình.
- Product champion **thiếu tầm nhìn rõ ràng**, đẩy hết quyết định cho BA. Nếu mọi ý tưởng của BA đều được chấp nhận không phản biện, champion không đóng góp gì.
- Người dùng cấp cao **cử người ít kinh nghiệm hơn** làm champion vì bận, rồi vẫn *"lái từ ghế sau"*.
- Có người **tự nhận nói thay** cho một user class mà họ không thuộc về.

### Product champion bên ngoài

Với sản phẩm thương mại, khó tìm champion từ ngoài công ty. Các cách xử lý:

- Xây dựng quan hệ với **khách hàng doanh nghiệp lớn** hoặc **site beta test**.
- Cho **ưu đãi kinh tế**: giảm giá sản phẩm, hoặc trả tiền cho thời gian họ tham gia.
- **Tuyển người có nền tảng phù hợp** vào công ty. Một công ty bán lẻ đã tuyển **ba quản lý cửa hàng** làm product champion toàn thời gian. Một công ty phần mềm y tế đã tuyển một **bác sĩ** để giúp họ xây phần mềm mà bác sĩ khác chấp nhận.
- **Gửi BA tới chỗ khách hàng** thay vì mời champion tới chỗ mình.

> **Cảnh giác:** Khi product champion là người dùng **cũ** hoặc người dùng **mô phỏng**, hãy đề phòng khoảng cách giữa nhận thức của họ và nhu cầu **hiện tại** của người dùng thật.

---

## 4. Đại diện người dùng trong agile & giải quyết xung đột

Nhiều phương pháp agile có vai trò **product owner** làm tiếng nói của khách hàng. Product owner định nghĩa vision sản phẩm và chịu trách nhiệm xây dựng, ưu tiên hoá **product backlog**. Anh ta trải rộng trên **cả ba cấp yêu cầu** — business, user, functional — về cơ bản kiêm cả vai trò product champion lẫn business analyst.

Trạng thái lý tưởng *một product owner duy nhất* **không phải lúc nào cũng khả thi**. Một công ty bảo hiểm triển khai gói phần mềm cho toàn bộ nghiệp vụ nhận thấy tổ chức của họ **quá lớn và phức tạp** để một người hiểu đủ chi tiết mọi thứ. Giải pháp: chọn **một product owner cho mỗi phòng ban**, và **CIO làm product owner trưởng** — người hiểu toàn bộ vision sản phẩm và ra quyết định khi các phòng ban xung đột.

**Hai mô hình không loại trừ nhau.** Nếu product owner hoạt động như một BA thay vì đại diện stakeholder, anh ta có thể thiết lập cấu trúc product champion. Hoặc product owner cộng tác với một hoặc nhiều BA, rồi đóng vai trò **người ra quyết định cuối cùng**.

### On-site và "on-sight"

Một lập trình viên kể lại: ông từng viết chương trình cho một nhà khoa học ngồi cách mình khoảng 3 mét. Khi John chuyển sang phòng khác — vẫn **cùng tầng, cách khoảng 30 mét** — năng suất lập trình **giảm ngay lập tức**, vì độ trễ khi cần hỏi. Đôi khi ông đi sai hướng trước khi kịp được chỉnh.

Tuy nhiên, **on-site không bảo đảm kết quả**. Một project manager kể: *"Chúng tôi có hai product champion. Một người ngồi giữa chúng tôi mà vẫn tránh được tất cả mọi người. Người mới thì tương tác rất tốt và thực sự giúp phát triển phần mềm nhanh chóng."* **Không có gì thay thế được đúng người, đúng vai trò, đúng chỗ, với đúng thái độ.**

Cũng cần cân bằng: gián đoạn quá thường xuyên khiến người ta khó tập trung trở lại — có thể mất tới **15 phút** để quay lại trạng thái tập trung sâu.

### Giải quyết xung đột yêu cầu

| Xung đột giữa | Cách giải quyết |
|---------------|-----------------|
| Các cá nhân người dùng | Product champion hoặc product owner quyết định |
| Các user class | **User class được ưu tiên (favored) thắng** |
| Các phân khúc thị trường | Phân khúc có ảnh hưởng lớn nhất tới thành công kinh doanh thắng |
| Các khách hàng doanh nghiệp | **Business objectives quyết định hướng đi** |
| Người dùng và quản lý người dùng | Product owner hoặc product champion của user class đó quyết định |
| Đội phát triển và khách hàng | Khách hàng được ưu tiên, **nhưng phải thẳng hàng với business objectives** |
| Đội phát triển và marketing | Marketing được ưu tiên |

Quyết định nên được đưa ra **ở mức thấp nhất có thể** trong tổ chức, bởi những người **hiểu rõ vấn đề và gần vấn đề nhất**.

> **Bẫy:** Đừng biện minh cho việc làm mọi thứ khách hàng đòi bằng câu *"khách hàng luôn đúng"*. Ai cũng biết khách hàng **không phải lúc nào cũng đúng** — đôi khi họ vô lý, thiếu thông tin, hoặc đang có tâm trạng xấu. Nhưng khách hàng **luôn có lý do**, và đội phần mềm phải hiểu và tôn trọng lý do đó.

Nếu không rõ ai chịu trách nhiệm quyết định, quyết định sẽ **mặc định rơi vào tay lập trình viên hoặc BA** — những người thường không có đủ kiến thức và góc nhìn để đưa ra quyết định kinh doanh tốt nhất. Analyst đôi khi nhượng bộ **giọng nói to nhất** hoặc **người cao nhất trong chuỗi thức ăn**. Dễ hiểu, nhưng đó không phải chiến lược tốt nhất.

---

## 5. Elicitation: bản chất & bức tranh tổng thể

**Elicitation** là quá trình xác định nhu cầu và ràng buộc của các stakeholder — **trái tim của requirements development**.

> **Elicitation KHÔNG phải là "thu thập yêu cầu" (gathering requirements).** Nó cũng không phải là việc chép lại đúng những gì người dùng nói. Elicitation là quá trình **cộng tác và phân tích**, gồm các hoạt động để thu thập, khám phá, bóc tách và định nghĩa yêu cầu.

Đây có lẽ là khía cạnh **thách thức nhất, then chốt nhất, dễ sai nhất và đòi hỏi giao tiếp nhiều nhất** của phát triển phần mềm.

Nguyên tắc thực hành:

- **Hiểu quá trình tư duy** đằng sau yêu cầu người dùng nêu ra. Đi qua các bước họ dùng để ra quyết định, và bóc tách logic nền tảng.
- Bảo đảm mọi người hiểu **vì sao** hệ thống phải thực hiện một chức năng nào đó.
- Tìm những yêu cầu phản ánh **quy trình hoặc quy tắc nghiệp vụ đã lỗi thời**, đừng đưa chúng vào hệ thống mới.
- Dùng **từ vựng của miền nghiệp vụ**, đừng bắt khách hàng hiểu thuật ngữ kỹ thuật.
- Ghi thuật ngữ quan trọng vào **glossary** thay vì giả định mọi người hiểu giống nhau.
- Làm rõ rằng **thảo luận về một chức năng không phải là cam kết** đưa nó vào sản phẩm.

**Kỹ thuật elicitation chia hai loại:**

- **Hoạt động có điều phối (facilitated)** — bạn tương tác trực tiếp với stakeholder: phỏng vấn, workshop, focus group, quan sát.
- **Hoạt động độc lập (independent)** — bạn tự làm việc để khám phá thông tin: phân tích tài liệu, phân tích giao diện hệ thống, phân tích giao diện người dùng.

**Không dự án nào nên dùng chỉ một kỹ thuật.** Luôn có nhiều loại thông tin cần khám phá, và các stakeholder khác nhau thích cách tiếp cận khác nhau. Một người có thể diễn đạt rõ cách họ dùng hệ thống; với người khác bạn phải **quan sát họ làm việc** mới hiểu được điều tương tự.

Hoạt động độc lập **bổ sung** cho những gì người dùng trình bày và bộc lộ chức năng cần thiết mà **người dùng cuối có thể không biết**.

Elicitation có **bản chất chu kỳ**: khai thác → nghiên cứu điều đã học → viết một số yêu cầu → phát hiện thiếu thông tin → khai thác thêm. Đừng kỳ vọng chỉ tổ chức vài workshop rồi tuyên bố thắng lợi.

---

## 6. Phỏng vấn & workshop

### Phỏng vấn (interviews)

Cách hiển nhiên nhất để biết người dùng cần gì là **hỏi họ**. Phỏng vấn có thể một-một hoặc với nhóm nhỏ, và là nguồn yêu cầu truyền thống cho mọi loại sản phẩm và mọi phương pháp phát triển.

Ưu điểm:

- **Dễ sắp lịch và dễ dẫn dắt** hơn workshop lớn.
- **Ít tốn thời gian stakeholder** vì bạn chỉ bàn đúng những yêu cầu quan trọng với họ.
- Giúp bạn **lên trình nhanh** trong một miền ứng dụng mới, để chuẩn bị bản nháp yêu cầu dùng cho workshop.
- Tạo được **sự tin cậy**: người tham gia thấy an toàn hơn khi chia sẻ suy nghĩ một-một, đặc biệt về **chủ đề nhạy cảm**.
- Dễ đạt được **cam kết tham gia** dự án hơn so với trong nhóm lớn.
- Phù hợp để khai thác business requirement từ **lãnh đạo bận rộn**.

Kỹ thuật phỏng vấn:

- **Tạo quan hệ (rapport)** ngay từ đầu: giới thiệu, nêu agenda, nhắc lại mục tiêu, giải quyết thắc mắc ban đầu.
- **Giữ trong phạm vi.** Ngay cả khi chỉ có một người, cuộc trò chuyện vẫn dễ đi lạc đề.
- **Chuẩn bị trước câu hỏi và straw man model.** Người ta **phê bình dễ hơn sáng tạo** — một bản nháp cho họ điểm khởi đầu để suy nghĩ.
- **Đề xuất ý tưởng.** BA sáng tạo không chỉ chép lại lời khách hàng mà đề xuất ý tưởng và phương án. Đôi khi người dùng không biết lập trình viên có thể làm được gì.
- **Lắng nghe chủ động**: nghiêng người về phía trước, kiên nhẫn, phản hồi bằng lời, hỏi lại khi chưa rõ, và **diễn giải lại (paraphrase)** ý chính để thể hiện mình đã hiểu.

### Workshop có điều phối

**Requirements workshop** là *cuộc họp có cấu trúc, trong đó một nhóm stakeholder và chuyên gia nội dung được lựa chọn cẩn thận cùng làm việc để định nghĩa, tạo ra, tinh chỉnh và chốt các sản phẩm bàn giao thể hiện yêu cầu người dùng.*

Workshop có **vai trò chính thức**: người điều phối (facilitator) và người ghi chép (scribe). Chúng phù hợp khi cần khai thác từ **nhiều stakeholder cùng lúc**, khi cần **giải quyết bất đồng** (làm việc nhóm hiệu quả hơn nói chuyện riêng lẻ), và khi cần **quay vòng nhanh** vì áp lực lịch trình.

> **Cảnh báo:** Workshop **tốn nhiều nguồn lực**, đôi khi cần nhiều người trong nhiều ngày. Hãy vào workshop với **bản nháp đã chuẩn bị sẵn** — ví dụ use case đã phác — để cả nhóm review thay vì cùng nhau tạo từ đầu. **Hiếm khi hợp lý khi bắt đầu workshop với tờ giấy trắng.**

Nguyên tắc điều phối workshop:

- **Thiết lập và thực thi ground rules**: bắt đầu và kết thúc đúng giờ, quay lại đúng giờ sau giải lao, tắt thiết bị điện tử, mỗi lúc chỉ một cuộc hội thoại, ai cũng phải đóng góp, phê bình nhắm vào vấn đề chứ không nhắm vào cá nhân.
- **Lấp đầy mọi vai trò**: ghi chép, canh giờ, quản lý phạm vi, quản lý ground rules, bảo đảm ai cũng được lắng nghe.
- **Có agenda** gửi trước để người tham gia chuẩn bị.
- **Giữ trong phạm vi** và **đúng mức trừu tượng**. Nhóm rất dễ lao vào chi tiết gây phân tâm.
- **Dùng parking lot** — bảng lật ghi lại thông tin quan trọng nhưng lạc chủ đề (quality attribute, business rule, ý tưởng giao diện). Việc này vừa không mất thông tin, vừa **thể hiện sự tôn trọng** với người nêu ra.
- **Timebox từng chủ đề.** Trước khi đóng một chủ đề bị hết giờ, hãy tóm tắt trạng thái và bước tiếp theo.
- **Giữ nhóm nhỏ nhưng đúng người.** Workshop **quá 5–6 người tham gia tích cực** dễ sa lầy vào lạc đề, hội thoại song song và tranh cãi. Hãy cân nhắc chạy **nhiều workshop song song** cho các user class khác nhau.

> **Câu chuyện thật:** Một workshop use case cho dự án website có **12 người tham gia** và tiến triển chậm chạp đầy tranh cãi. Khi giảm xuống khoảng **sáu người** đại diện các vai trò then chốt, tiến độ tăng vọt. Workshop mất đi một chút đầu vào, nhưng **tốc độ bù lại nhiều hơn thế**.

- **Giữ mọi người tham gia.** Khi ai đó ngừng đóng góp, hãy đọc ngôn ngữ cơ thể (tránh giao tiếp mắt, bồn chồn, thở dài, nhìn đồng hồ) và tìm hiểu vì sao. Có thể họ thấy ý kiến của mình không được coi trọng, ngại làm hỏng công sức nhóm, hoặc đang nhường một người quá áp đảo. Khi họp trực tuyến, không có tín hiệu hình ảnh — hãy **lắng nghe kỹ xem ai đang im lặng**.

**Khi xung đột bùng nổ:** hãy xử lý ngay. Tìm hiểu nguyên nhân; khi nhóm hiểu rõ lý do, thường sẽ tìm được giải pháp. Nếu một cá nhân nhất quyết không hợp tác, hãy nói chuyện riêng để xác định liệu sự có mặt của họ có ngăn nhóm tiến lên hay không.

---

## 7. Focus group & quan sát

### Focus group

**Focus group** là một nhóm người dùng đại diện, hội tụ trong một hoạt động có điều phối để tạo ra ý kiến và ý tưởng về yêu cầu chức năng và chất lượng của sản phẩm.

- Phải **tương tác**, cho mọi người cơ hội nói lên suy nghĩ.
- Đặc biệt giá trị khi làm **sản phẩm thương mại** và bạn không có sẵn người dùng cuối trong công ty.
- Hữu ích để khám phá **thái độ, ấn tượng, sở thích và nhu cầu** của người dùng.
- Chọn thành viên cẩn thận: bao gồm người đã dùng phiên bản trước hoặc sản phẩm tương tự. Hoặc lập nhiều focus group đồng nhất theo user class, hoặc một nhóm đại diện đủ phổ.
- **Không kỳ vọng phân tích định lượng** từ focus group — kết quả là nhiều phản hồi chủ quan cần được đánh giá và ưu tiên hoá thêm.
- Thành viên focus group **thường không có quyền quyết định** về yêu cầu.

> **Cảnh báo:** Hãy bảo đảm focus group đại diện đúng loại người dùng mà nhu cầu của họ nên dẫn dắt sản phẩm. Nếu nhóm chỉ gồm **early adopter** hoặc người thích nghĩ viển vông, bạn có thể kết thúc với nhiều yêu cầu tinh vi, khó làm mà **ít khách hàng thấy hữu ích**.

**Ví dụ thực tế:** một công ty nhờ focus group thực hiện các tác vụ với nhiều máy ảnh số và máy tính khác nhau. Kết quả cho thấy phần mềm của họ **mất quá lâu** cho thao tác phổ biến nhất, do một quyết định thiết kế nhằm phục vụ cả các kịch bản ít gặp. Công ty đã thay đổi máy ảnh thế hệ sau để giảm phàn nàn về tốc độ.

### Quan sát (observations)

Khi bạn yêu cầu người dùng mô tả cách họ làm việc, mô tả đó thường **thiếu chi tiết hoặc không chính xác**. Lý do: tác vụ phức tạp khó nhớ hết, người dùng quá quen tới mức **không diễn đạt nổi**, hoặc thao tác đã thành thói quen tới mức họ không còn ý thức về nó.

> **Ví dụ kinh điển:** Hãy thử mô tả cho bạn bè các bước làm bánh từ bột trộn sẵn. Bạn sẽ nhớ bật lò, lấy dụng cụ, thêm nguyên liệu, trộn, chuẩn bị khuôn, nướng. Nhưng khi nói *"thêm từng nguyên liệu"*, bạn có nhớ nói **mở túi bột** không? Có nhớ nói **đập vỏ trứng, chỉ cho phần bên trong vào, và bỏ vỏ đi** không? Những bước tưởng như hiển nhiên **không hề hiển nhiên** với người chưa từng làm bánh.

Nguyên tắc thực hành:

- **Giới hạn mỗi buổi quan sát dưới hai giờ** để không làm gián đoạn công việc thường ngày của người dùng.
- Chọn **tác vụ quan trọng hoặc rủi ro cao** và nhiều user class khác nhau.
- Trong dự án agile, chỉ để người dùng minh hoạ các tác vụ liên quan tới **iteration sắp tới**.
- **Quan sát im lặng** khi người dùng bận không thể bị ngắt; **quan sát tương tác** khi bạn cần hỏi ngay vì sao họ chọn cách đó.
- Ghi lại những gì quan sát được; cân nhắc quay video nếu chính sách cho phép.

Quan sát giúp **xác nhận thông tin** thu được từ nguồn khác, phát hiện chủ đề mới cho phỏng vấn, thấy vấn đề của hệ thống hiện tại, và tìm cách hệ thống mới hỗ trợ luồng công việc tốt hơn. **BA phải trừu tượng hoá và khái quát** vượt ra ngoài hoạt động của một cá nhân, để yêu cầu áp dụng được cho cả user class.

**Ví dụ thực tế:** một đội xây ứng dụng call-center cho nhân viên chăm sóc khách hàng vốn phải lật giở catalog giấy. Nhân viên nào cũng nói việc lật nhiều catalog thật khó khăn. Nhưng chỉ khi **ngồi cạnh họ trong lúc nhận đơn hàng thật**, đội mới thấy rõ mức độ khó: đầu tiên phải tìm đúng catalog theo ngày, rồi mới tìm đúng sản phẩm. Buổi quan sát giúp họ hiểu cần feature gì trong catalog trực tuyến.

---

## 8. Bảng hỏi & các kỹ thuật phân tích độc lập

### Questionnaires

**Bảng hỏi** là cách khảo sát nhóm người dùng lớn. Chúng **rẻ**, là lựa chọn hợp lý cho tập người dùng đông, và **dễ triển khai xuyên biên giới địa lý**. Kết quả phân tích có thể làm đầu vào cho kỹ thuật khác — ví dụ dùng bảng hỏi để xác định điểm đau lớn nhất với hệ thống hiện tại, rồi dùng kết quả để thảo luận ưu tiên trong workshop.

**Thách thức lớn nhất là viết câu hỏi tốt:**

- Cung cấp phương án trả lời **bao phủ toàn bộ** khả năng.
- Các lựa chọn phải **loại trừ lẫn nhau** (không chồng lấn khoảng số) **và vét cạn** (liệt kê mọi khả năng, hoặc có chỗ điền tự do).
- **Đừng đặt câu hỏi ngụ ý sẵn câu trả lời "đúng".**
- Dùng **thang đo nhất quán** trong toàn bộ bảng hỏi.
- Dùng **câu hỏi đóng** với hai lựa chọn trở lên nếu muốn phân tích thống kê. Câu hỏi mở khiến việc tìm điểm chung trở nên khó.
- **Luôn thử nghiệm bảng hỏi trước khi phát.** Rất bực khi phát hiện quá muộn rằng một câu hỏi bị hiểu nước đôi, hoặc bạn quên mất một câu quan trọng.
- **Đừng hỏi quá nhiều** — người ta sẽ không trả lời.
- Cân nhắc nhờ **chuyên gia thiết kế bảng hỏi** để bảo đảm bạn hỏi đúng câu, đúng người.

### System interface analysis

**Phân tích giao diện hệ thống** là kỹ thuật độc lập: khảo sát các hệ thống mà hệ thống của bạn kết nối tới. Nó bộc lộ yêu cầu chức năng về **trao đổi dữ liệu và dịch vụ** giữa các hệ thống.

**Context diagram** và **ecosystem map** là điểm khởi đầu hiển nhiên. Thực tế, nếu bạn tìm thấy một giao diện có yêu cầu liên quan mà **không xuất hiện** trên hai sơ đồ đó, thì hai sơ đồ đó **chưa đầy đủ**.

Với mỗi hệ thống kết nối, hãy xác định chức năng bên đó có thể sinh ra yêu cầu cho bên bạn: dữ liệu nào gửi đi, dữ liệu nào nhận về, và **quy tắc về dữ liệu đó** như tiêu chí kiểm tra tính hợp lệ.

> **Giá trị lớn nhất là phát hiện chức năng bạn KHÔNG cần xây.** Ví dụ: bạn tưởng cần hiện thực quy tắc kiểm tra đơn hàng trong website thương mại điện tử trước khi đẩy sang hệ thống quản lý đơn hàng. Qua phân tích, bạn phát hiện **nhiều hệ thống cùng đẩy đơn hàng sang đó và hệ thống kia đã tự kiểm tra** — nên bạn không cần xây chức năng này.

### User interface analysis

**Phân tích giao diện người dùng** là nghiên cứu hệ thống hiện có để khám phá user requirement và functional requirement. Tốt nhất là **tương tác trực tiếp** với hệ thống; nếu không, dùng ảnh chụp màn hình. Với gói phần mềm mua sẵn, tài liệu người dùng của nhà cung cấp thường có sẵn ảnh chụp màn hình dùng làm điểm khởi đầu. Nếu chưa có hệ thống nào, hãy xem giao diện của **sản phẩm tương tự**.

Lợi ích: xác định danh sách **đầy đủ các màn hình** để khám phá feature tiềm năng; học được các bước phổ biến người dùng thực hiện để phác thảo use case; phát hiện các mẩu dữ liệu người dùng cần thấy; và **lên trình nhanh** về cách hệ thống hiện tại hoạt động.

> **Hai cảnh báo:** (1) **Đừng giả định** một chức năng là cần thiết cho hệ thống mới chỉ vì bạn tìm thấy nó trong hệ thống cũ. (2) **Đừng giả định** giao diện phải trông hoặc chảy theo cách cũ.

### Document analysis

**Phân tích tài liệu** là khảo sát mọi tài liệu hiện có để tìm yêu cầu tiềm năng: đặc tả yêu cầu cũ, mô tả quy trình nghiệp vụ, bộ sưu tập bài học kinh nghiệm, tài liệu người dùng của ứng dụng hiện tại hoặc tương tự, tiêu chuẩn doanh nghiệp và ngành, quy định pháp luật, đánh giá so sánh sản phẩm cạnh tranh, và báo cáo lỗi cùng đề nghị nâng cấp từ help desk.

Với hệ thống thay thế, tài liệu cũ có thể bộc lộ **chức năng cần giữ lại** cũng như **chức năng đã lỗi thời**. Với gói phần mềm mua sẵn, tài liệu nhà cung cấp nêu chức năng người dùng của bạn có thể cần, dù bạn vẫn phải khám phá cách triển khai trong môi trường đích.

**Điểm mạnh đặc biệt:** phân tích tài liệu bộc lộ **thông tin mà người ta không nói cho bạn biết** — vì họ không nghĩ tới, hoặc vì chính họ cũng không biết. Ví dụ khi xây ứng dụng call-center mới, bạn có thể tìm thấy **logic nghiệp vụ phức tạp** mô tả trong tài liệu hướng dẫn của ứng dụng hiện tại mà người dùng thậm chí không biết là nó tồn tại.

> **Rủi ro:** Tài liệu có thể **không được cập nhật**. Yêu cầu có thể đã thay đổi mà đặc tả không được sửa, hoặc tài liệu mô tả chức năng không còn cần trong hệ thống mới.

---

## 9. Lập kế hoạch elicitation

Ngay từ đầu dự án, BA nên lập kế hoạch cho cách tiếp cận elicitation. Ngay cả một kế hoạch đơn giản cũng tăng cơ hội thành công và **đặt kỳ vọng thực tế** cho stakeholder. Chỉ khi có **cam kết rõ ràng** về nguồn lực, lịch trình và sản phẩm bàn giao, bạn mới tránh được việc người tham gia bị kéo đi làm việc khác.

Kế hoạch nên bao gồm:

- **Mục tiêu elicitation** — cho toàn dự án và cho từng buổi cụ thể.
- **Chiến lược và kỹ thuật dự kiến** — kỹ thuật nào dùng với nhóm stakeholder nào, tuỳ theo mức tiếp cận được stakeholder, ràng buộc thời gian và hiểu biết của bạn về hệ thống hiện tại.
- **Ước lượng lịch trình và nguồn lực** — cả người tham gia phía khách hàng lẫn phía phát triển, cùng ước lượng công sức và thời gian. Ban đầu bạn có thể chỉ xác định được **user class** chứ chưa phải cá nhân cụ thể, nhưng điều đó đã đủ để quản lý bắt đầu chuẩn bị nguồn lực. Nhớ ước lượng cả **thời gian chuẩn bị và thời gian phân tích sau buổi**.
- **Tài liệu và hệ thống cần cho hoạt động độc lập** — bảo đảm bạn có chúng khi cần.
- **Sản phẩm mong đợi từ elicitation** — biết trước bạn sẽ tạo danh sách use case, SRS, kết quả phân tích bảng hỏi hay đặc tả quality attribute sẽ giúp bạn nhắm đúng stakeholder, đúng chủ đề và đúng mức chi tiết.
- **Rủi ro elicitation** — yếu tố có thể cản trở, mức nghiêm trọng, và cách giảm thiểu.

> **Sai lầm phổ biến:** Nhiều BA có **kỹ thuật tủ** — thường là phỏng vấn và workshop — và không nghĩ tới các kỹ thuật khác có thể giảm nhu cầu nguồn lực hoặc tăng chất lượng thông tin. **Hiếm khi một kỹ thuật duy nhất cho kết quả tốt nhất.**

Gợi ý chọn kỹ thuật theo đặc điểm dự án:

| Đặc điểm dự án | Kỹ thuật thường hiệu quả nhất |
|----------------|-------------------------------|
| Phát triển ứng dụng mới | Phỏng vấn, workshop, phân tích giao diện hệ thống |
| Phần mềm đại chúng (mass-market) | **Focus group** thay cho workshop, vì tập người dùng lớn nhưng khó tiếp cận đại diện |
| Thay thế / nâng cấp hệ thống cũ | Phân tích tài liệu, phân tích giao diện người dùng, quan sát |
| Nhóm người dùng lớn, phân tán | Bảng hỏi, rồi tập trung khai thác sâu theo kết quả |

---

## 10. Chuẩn bị & thực hiện buổi elicitation

### Chuẩn bị

Nhóm càng lớn, chuẩn bị càng quan trọng.

- **Lập phạm vi và agenda buổi làm việc.** Quyết định phạm vi dựa trên thời gian có sẵn; thẳng hàng với phạm vi dự án tổng thể để giữ cuộc trò chuyện đúng chủ đề. Agenda nêu chủ đề, thời gian cho mỗi chủ đề và mục tiêu — **gửi trước** cho stakeholder.
- **Chuẩn bị nguồn lực**: phòng họp, máy chiếu, số điện thoại hội nghị, thiết bị hội nghị truyền hình; sắp lịch người tham gia có tính tới **chênh lệch múi giờ**; thu thập tài liệu; xin quyền truy cập hệ thống.
- **Tìm hiểu về stakeholder.** Nắm sở thích văn hoá và vùng miền về cách họp. Nếu có người không dùng tiếng mẹ đẻ là ngôn ngữ của buổi làm việc, hãy **gửi tài liệu hỗ trợ trước** để họ đọc trước hoặc theo dõi. **Tránh tạo cảm giác "chúng ta" đối đầu "họ".**
- **Chuẩn bị câu hỏi.** Luôn vào buổi làm việc với một bộ câu hỏi đã soạn.
- **Chuẩn bị straw man model** — bản nháp giúp bạn học về chủ đề và **kích thích ý tưởng** cho người dùng. Sửa một mô hình nháp dễ hơn tạo mới từ đầu. Nếu bạn mới với miền này, hãy dùng kỹ thuật khác trước (đọc tài liệu, xem hệ thống hiện có, phỏng vấn một SME) để có đủ hiểu biết mà bắt đầu. Rồi nói với nhóm: *"Mô hình này chắc chắn có chỗ sai. Xin hãy xé nó ra và chỉ cho tôi nó phải trông thế nào. Bạn sẽ không làm tôi tổn thương đâu."*

**Nghệ thuật đặt câu hỏi:**

- Đừng hỏi *"Bạn muốn gì?"* — nó tạo ra một mớ thông tin ngẫu nhiên. Hỏi ***"Bạn cần LÀM gì?"*** tốt hơn nhiều.
- Hỏi **"tại sao"** nhiều lần để chuyển từ giải pháp được trình bày sang hiểu biết vững chắc về vấn đề cần giải quyết.
- Dùng **câu hỏi mở** để hiểu quy trình nghiệp vụ hiện tại và cách hệ thống mới cải thiện hiệu quả.
- **Hình dung bạn đang học việc của người dùng** — bạn sẽ làm những tác vụ nào, sẽ có thắc mắc gì? Hoặc đóng vai **người học việc** để chính người dùng dẫn dắt cuộc thảo luận.
- **Đào quanh các ngoại lệ.** Điều gì có thể ngăn người dùng hoàn thành tác vụ? Hệ thống nên phản ứng thế nào với từng điều kiện lỗi? Dùng các mở đầu: *"Còn điều gì khác có thể…"*, *"Điều gì xảy ra khi…"*, *"Bạn có bao giờ cần…"*, *"Bạn lấy … từ đâu"*, *"Vì sao bạn (không) …"*, *"Có ai từng…"*.
- Với dự án thay thế hệ thống cũ, hãy hỏi: ***"Ba điều gì làm bạn khó chịu nhất ở hệ thống hiện tại?"*** — câu hỏi này bộc lộ kỳ vọng dành cho hệ thống kế nhiệm.
- **Đừng cứng nhắc theo kịch bản.** Năm phút sau khi bắt đầu, bạn có thể nhận ra mình bỏ sót một mảng quan trọng. Hãy sẵn sàng bỏ kịch bản.
- Kết thúc bằng câu hỏi: ***"Có điều gì bạn nghĩ tôi nên hỏi mà tôi chưa hỏi không?"***

### Thực hiện

- **Giáo dục stakeholder** về cách tiếp cận, kỹ thuật khám phá (use case, process flow) và cách kết quả sẽ được ghi lại và gửi lại để review.
- **Ghi chép tốt.** Giao vai trò scribe cho người **không tham gia tích cực** vào thảo luận. Ghi chép cần có: danh sách người tham dự, người được mời nhưng vắng, quyết định đã đưa ra, hành động cần làm và ai chịu trách nhiệm, vấn đề còn tồn đọng, và điểm chính của các thảo luận then chốt.
- Nếu bạn buộc phải vừa điều phối vừa ghi chép, hãy dùng ký hiệu viết tắt, thiết bị ghi âm (nếu được đồng ý), bút ghi âm kết hợp chữ viết, hoặc chụp ảnh bảng trắng.
- **Khai thác không gian vật lý.** Dùng bảng trắng và giấy khổ lớn dán tường để vẽ sơ đồ và lập danh sách; chuẩn bị sticky note và bút màu. **Mời người khác lên bảng** — việc đứng dậy di chuyển giúp mọi người tập trung. Kỹ thuật này gọi là *"Wall of Wonder"*.
- Với đội phân tán, dùng công cụ hội nghị trực tuyến để chia sẻ slide, và **video** để người ở xa thấy được nội dung trên tường và bảng.
- Nếu phù hợp văn hoá, dùng **đồ chơi** để kích thích tư duy và cho người ta thứ để cầm nắm.

> **Câu chuyện thật:** Trong một workshop với **12 kỹ sư** của nhà máy bán dẫn, người điều phối bắt đầu vẽ process flow trên bảng trắng. Nửa ngày sau, một kỹ sư xin cầm bút. Anh đã học được ký hiệu flowchart, và vì đã là chuyên gia hệ thống nên vẽ rất nhanh, rồi tự dẫn cả nhóm qua từng bước để đồng nghiệp xác nhận hoặc sửa. Chẳng bao lâu **tất cả kỹ sư đều chuyền bút cho nhau**, còn người điều phối được rảnh tay để đặt câu hỏi sâu và ghi chép.

---

## 11. Theo sau buổi khai thác & phân loại đầu vào khách hàng

### Theo sau

- **Hợp nhất và tổ chức ghi chép** từ nhiều nguồn. Xem lại và cập nhật **ngay sau buổi làm việc**, khi nội dung còn tươi trong trí nhớ.
- **Giữ lại bản ghi chép thô.** Việc biên tập tiềm ẩn rủi ro: bạn có thể nhớ sai ý nghĩa và **vô tình thay đổi nội dung**.
- **Chia sẻ ghi chép đã hợp nhất với người tham gia** và đề nghị họ review. Chỉ những người cung cấp yêu cầu mới có thể đánh giá chúng đã được ghi đúng hay chưa. Cân nhắc chia sẻ cả với stakeholder vắng mặt để họ nêu vấn đề ngay.
- **Ghi lại vấn đề còn mở** vào công cụ theo dõi issue, kèm ghi chú liên quan, tiến độ, **chủ sở hữu** và hạn xử lý. Nên dùng chung công cụ với đội phát triển và kiểm thử.

### Phân loại đầu vào khách hàng

**Đừng kỳ vọng khách hàng đưa cho bạn một danh sách nhu cầu súc tích, đầy đủ và có tổ chức.** BA phải phân loại vô số mẩu thông tin thành các nhóm để dùng đúng cách. Trong lúc nghe, hãy ghi ký hiệu nhanh khi nhận ra loại thông tin.

| Loại | Dấu hiệu nhận biết |
|------|--------------------|
| **Business requirement** | Nói về giá trị mà bên mua hoặc bên dùng nhận được: *"Tăng thị phần khu vực X lên Y% trong Z tháng"* |
| **User requirement** | *"Tôi cần <làm gì đó>"*, *"Là <vai trò>, tôi cần…"* |
| **Business rule** | *"Phải tuân thủ…"*, *"Nếu <điều kiện> thì <hệ quả>"*, *"Phải được tính theo…"* |
| **Functional requirement** | Mô tả hành vi quan sát được dưới điều kiện cụ thể |
| **Quality attribute** | Từ mô tả đặc tính mong muốn: *nhanh, dễ, thân thiện, tin cậy, an toàn* — cần đào sâu vì quá chủ quan |
| **External interface** | *"Phải đọc tín hiệu từ…"*, *"Phải gửi thông điệp tới…"*, *"Phải đọc file định dạng…"* |
| **Constraint** | *"Phải viết bằng <ngôn ngữ>"*, *"Không được vượt quá <giới hạn>"*, *"Phải dùng <control cụ thể>"* |
| **Data requirement** | Mô tả định dạng, kiểu dữ liệu, giá trị cho phép, giá trị mặc định, cấu trúc dữ liệu, hoặc báo cáo |
| **Solution idea** | Mô tả một **cách tương tác cụ thể** để thực hiện hành động |

**Nhận diện solution idea là kỹ năng quan trọng nhất trong bảng này.** Ví dụ: *"Rồi tôi chọn bang muốn gửi hàng tới **từ một drop-down list**."* Cụm *từ một drop-down list* cho thấy đây là solution idea, vì nó mô tả một control giao diện cụ thể. BA thận trọng sẽ hỏi **"vì sao lại là drop-down list?"**:

- Nếu câu trả lời là *"tôi thấy cách đó có vẻ hay"*, thì yêu cầu thật chỉ là: *"Hệ thống phải cho phép người dùng chỉ định bang muốn gửi hàng tới."*
- Nếu câu trả lời là *"chúng tôi làm y hệt ở vài chỗ khác và tôi muốn nhất quán; ngoài ra drop-down ngăn nhập dữ liệu sai"* — thì đây là **lý do chính đáng** để chỉ định giải pháp cụ thể.

Nhúng giải pháp vào yêu cầu tạo ra một **design constraint**: nó giới hạn yêu cầu chỉ được hiện thực theo **một cách duy nhất**. Điều này **không sai** — chỉ cần bảo đảm ràng buộc đó có **lý do chính đáng**.

Một số thông tin sẽ **không rơi vào chín nhóm trên**: yêu cầu dự án (đào tạo người dùng), ràng buộc dự án (chi phí, lịch), giả định và phụ thuộc, thông tin bối cảnh lịch sử, hoặc thông tin **không mang lại giá trị nào**.

---

## 12. Khi nào xong, cạm bẫy & tìm yêu cầu thiếu

### Khi nào thì xong?

Không có tín hiệu đơn giản nào báo elicitation đã hoàn tất. Thực tế bạn **không bao giờ hoàn toàn xong**, đặc biệt khi hiện thực hệ thống theo từng gia số. Các dấu hiệu cho thấy bạn đang tới **điểm lợi ích giảm dần**:

- Người dùng **không nghĩ ra thêm** use case hoặc user story nào nữa. (Người dùng thường nêu yêu cầu theo thứ tự **quan trọng giảm dần**.)
- Người dùng đề xuất kịch bản mới nhưng chúng **không dẫn tới functional requirement mới**. Một use case "mới" có thể thực chất chỉ là **alternative flow** của use case đã có.
- Người dùng **lặp lại** những vấn đề đã bàn ở buổi trước.
- Feature hoặc yêu cầu mới đề xuất đều bị đánh giá là **ngoài phạm vi**.
- Yêu cầu mới đề xuất đều có **độ ưu tiên thấp**.
- Người dùng đang đề xuất năng lực thuộc loại *"đâu đó trong vòng đời sản phẩm"* thay vì *"trong sản phẩm cụ thể chúng ta đang bàn"*.
- Lập trình viên và tester review yêu cầu mà **ít đặt câu hỏi**.

### Cạm bẫy

- **Mất cân bằng đại diện stakeholder.** Thu thập từ quá ít người, hoặc chỉ nghe khách hàng **to tiếng nhất, cứng quan điểm nhất**. Cân bằng tốt nhất: vài product champion, mỗi người được hỗ trợ bởi các đại diện khác cùng user class.
- **Xác định phạm vi không phù hợp.** Phạm vi **quá lớn** khiến bạn tích luỹ nhiều yêu cầu hơn mức cần và elicitation kéo dài lê thê. Phạm vi **quá nhỏ** khiến người dùng liên tục nêu nhu cầu rõ ràng quan trọng nhưng nằm ngoài giới hạn hiện tại — dấu hiệu cho thấy phạm vi cần được mở rộng.
- **Tranh cãi requirements-versus-design.** Câu nói *"yêu cầu là cái gì, thiết kế là như thế nào"* là một **sự đơn giản hoá thái quá**. Giữa phân tích và thiết kế là một **vùng xám**, không phải một đường sắc nét. Những cái *"như thế nào"* giả định giúp làm rõ và tinh chỉnh hiểu biết về cái *"cái gì"*. Chỉ cần nói rõ với người dùng rằng màn hình và prototype **chỉ mang tính minh hoạ**, không nhất thiết là giải pháp cuối cùng.
- **Nghiên cứu quá đà.** Khi một ý tưởng đòi hỏi nghiên cứu sâu để đánh giá, hãy coi việc khám phá đó là **một công việc riêng của dự án**, không để nó làm gián đoạn elicitation.

### Assumed & implied requirements

Bạn sẽ **không bao giờ đặc tả 100% yêu cầu**. Phần không đặc tả tạo ra rủi ro giao sai thứ khách hàng kỳ vọng. Hai thủ phạm chính:

- **Assumed requirement** — điều người ta **kỳ vọng mà không nói ra**.
- **Implied requirement** — điều **cần thiết vì một yêu cầu khác** nhưng không được nêu tường minh. Lập trình viên không thể hiện thực chức năng họ không biết.

Cách giảm rủi ro: hỏi ***"Chúng ta đang giả định điều gì?"*** trong buổi khai thác. Khi gặp một giả định, hãy **ghi lại và xác nhận tính đúng đắn** của nó. Người ta thường giả định mọi thứ phải như cũ chỉ vì họ quá quen với hệ thống hiện tại — với dự án thay thế, hãy rà soát feature cũ để xác định cái nào **thật sự cần** trong hệ thống mới.

Để tìm implied requirement, hãy nghiên cứu kết quả buổi khai thác đầu tiên để xác định vùng chưa đầy đủ. Một yêu cầu mơ hồ, cấp cao có cần chi tiết hoá để mọi người hiểu giống nhau không? Một yêu cầu thuộc **cặp logic** (ví dụ *lưu* biểu mẫu web dở dang) có thiếu vế đối ứng (*truy xuất lại* biểu mẫu đã lưu) không? Có thể bạn cần **phỏng vấn lại chính những stakeholder đó** để họ tìm yêu cầu thiếu, hoặc **mời stakeholder mới** am hiểu chủ đề và có thể nhìn ra khoảng trống.

Dùng **câu hỏi context-free** — câu hỏi cấp cao, mở, khai thác đặc tính tổng quát của cả vấn đề lẫn giải pháp tiềm năng. Ví dụ *"Sản phẩm cần độ chính xác ở mức nào?"* hoặc *"Bạn giúp tôi hiểu vì sao bạn không đồng ý với ý kiến của Miguel được không?"* — chúng dẫn tới hiểu biết mà câu hỏi có/không hoặc A/B/C không tạo ra được.

> **Câu chuyện thật:** Một đội xây content portal có khoảng **1.000 mẩu nội dung** tổ chức theo cây phân cấp. Đội quản lý nội dung **giả định** người dùng sẽ duyệt cây phân cấp để tìm nhanh một mẩu nội dung — nhưng **không đặc tả** yêu cầu nào về điều hướng. Lập trình viên hiện thực giao diện với **tất cả nội dung trên một mức duy nhất**, hiển thị **20 mục mỗi màn hình**. Để tìm một mẩu nội dung cụ thể, người dùng có thể phải lật qua **50 màn hình**. Chỉ cần một chút đặc tả và đối thoại là đã tránh được lượng rework khổng lồ.

### Tìm yêu cầu thiếu

Yêu cầu thiếu là loại lỗi phổ biến và **khó phát hiện vì chúng vô hình**. Các kỹ thuật:

- **Phân rã yêu cầu cấp cao** xuống đủ chi tiết để lộ ra chính xác điều gì đang được đề nghị.
- Bảo đảm **mọi user class đã đóng góp**, và mỗi user requirement có **ít nhất một user class** nhận giá trị từ nó.
- **Truy vết** system requirement, user requirement, event-response list và business rule tới functional requirement tương ứng.
- **Kiểm tra giá trị biên.** Nếu một yêu cầu nói *"dưới 100 thì phí ship là 5,95"* và yêu cầu khác nói *"trên 100 thì phí ship là 6% giá trị đơn"* — vậy **đúng 100** thì sao? Yêu cầu đang thiếu.
- **Biểu diễn yêu cầu theo nhiều cách.** Rất khó đọc một khối văn bản dày và nhận ra thứ **vắng mặt**. Mô hình phân tích cho bạn thấy **khu rừng thay vì từng cái cây** — bạn nhìn mô hình và nhận ra *đáng lẽ phải có một mũi tên từ hộp này sang hộp kia*; mũi tên thiếu đó chính là yêu cầu thiếu.
- Tập yêu cầu có **logic Boolean phức tạp** (AND, OR, NOT) thường không đầy đủ. Điều kiện **else bị bỏ sót** rất thường xuyên. Hãy dùng **decision table** hoặc **decision tree** để phủ mọi tình huống.
- Lập **checklist các vùng chức năng phổ biến**: ghi log lỗi, sao lưu và phục hồi, bảo mật truy cập, báo cáo, in ấn, xem trước, cấu hình tuỳ chọn người dùng. Định kỳ so sánh với chức năng đã đặc tả để tìm khoảng trống.
- **Data model** có thể lộ ra chức năng thiếu. Mọi thực thể dữ liệu hệ thống thao tác đều cần chức năng tương ứng để **tạo, đọc, cập nhật và xoá** — viết tắt là **CRUD**.

> **Bẫy:** Hãy cẩn thận với **analysis paralysis** — dành quá nhiều thời gian cho elicitation vì cố không bỏ sót yêu cầu nào. Bạn sẽ không bao giờ khám phá hết mọi yêu cầu, nhưng gần như mọi đội đều có thể làm tốt hơn hiện tại.

---

## Điểm cốt lõi

- Phân loại user class theo **TÁC VỤ họ thực hiện**, không theo vị trí địa lý hay loại hình công ty (đó là phân khúc thị trường).
- **Favored user class** là nhóm gắn chặt nhất với business objectives — **không phải** nhóm trả tiền hay nhóm có quyền lực nhất.
- **Disfavored user class** dẫn tới các tính năng cố ý **gây khó** cho họ, như khoá tài khoản hay CAPTCHA.
- **Đừng bỏ qua indirect user** — khách hàng cách một lớp vẫn là khách hàng.
- Dùng **expand then contract** để rút danh sách user class xuống khoảng **15 hoặc ít hơn**.
- **Persona** biến nhóm vô danh thành con người cụ thể và có thể làm chỗ giữ vị trí khi thiếu người dùng thật.
- **Product champion là người dùng thật**, ra quyết định thay mặt user class — nhưng **BA vẫn là người viết tài liệu yêu cầu**.
- Với user class lớn, product champion có thể lập **nhóm hỗ trợ** theo mô hình phân cấp.
- **Product owner** trong agile trải rộng cả ba cấp yêu cầu; nhiều tổ chức lớn cần **product owner theo phòng ban** cộng một product owner trưởng.
- Xung đột giữa **user class** thì favored thắng; giữa **khách hàng doanh nghiệp** thì **business objectives** quyết định.
- **Elicitation không phải "thu thập"**, mà là quá trình cộng tác và phân tích, có **bản chất chu kỳ**.
- **Không dự án nào nên dùng chỉ một kỹ thuật elicitation.**
- Workshop **quá 5–6 người tham gia tích cực** thường sa lầy; hãy chạy nhiều workshop song song.
- **Đừng bắt đầu workshop với tờ giấy trắng** — hãy mang theo straw man model.
- **Focus group không có quyền quyết định** và không cho phân tích định lượng.
- **Quan sát bộc lộ những bước người dùng quá quen tới mức không diễn đạt nổi** (ví dụ đập vỏ trứng).
- Phân tích giao diện hệ thống có thể cho thấy chức năng bạn **KHÔNG cần xây**.
- **Đừng giả định** chức năng trong hệ thống cũ là cần thiết cho hệ thống mới.
- Cụm từ như *"từ một drop-down list"* là dấu hiệu của **solution idea** — hãy hỏi **"vì sao"**.
- Người dùng thường nêu yêu cầu theo thứ tự **quan trọng giảm dần**.
- Ranh giới requirements–design là **vùng xám**, không phải đường sắc nét.
- **Điều kiện else bị bỏ sót** là nguồn yêu cầu thiếu rất phổ biến; dùng decision table để phủ hết.
- **CRUD analysis** trên data model là cách hệ thống để tìm chức năng thiếu.

## Tóm tắt

- Xác định **user class** trước, rồi tìm **đại diện phù hợp** cho từng nhóm — đây là bước quyết định chất lượng của mọi yêu cầu sau đó.
- **Product champion** (hoặc product owner) là cấu trúc hiệu quả để đưa tiếng nói người dùng vào dự án một cách bền vững.
- Xác định **người ra quyết định và cách giải quyết xung đột** trước khi xung đột xảy ra.
- Elicitation cần **nhiều kỹ thuật kết hợp**: hoạt động có điều phối để hiểu con người, hoạt động độc lập để khám phá điều họ không nói.
- **Lập kế hoạch elicitation** và **chuẩn bị trước mỗi buổi** — câu hỏi soạn sẵn và straw man model.
- **Theo sau nghiêm túc**: hợp nhất ghi chép, gửi review, và theo dõi mọi issue tới khi đóng.
- **Phân loại đầu vào khách hàng** vào đúng nhóm, và luôn cảnh giác với **solution idea** đội lốt yêu cầu.
- Chủ động **săn tìm yêu cầu thiếu** bằng traceability, giá trị biên, nhiều góc nhìn biểu diễn, decision table và CRUD analysis.
