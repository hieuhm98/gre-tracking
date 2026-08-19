# Business Requirements: Vision & Scope

## 1. Business requirements là gì?

**Business requirements** là tập thông tin mô tả một **nhu cầu kinh doanh** dẫn tới việc khởi động một hoặc nhiều dự án, cùng với **kết quả kinh doanh mong muốn** cuối cùng. Chúng gồm bốn thành phần:

- **Business opportunity** — bối cảnh và cơ hội / vấn đề kinh doanh.
- **Business objectives** — mục tiêu kinh doanh đo được.
- **Success metrics** — chỉ số đo mức độ tiến tới mục tiêu.
- **Vision statement** — tuyên bố tầm nhìn sản phẩm.

Business requirements đứng ở **đỉnh chuỗi yêu cầu**. Chúng thiết lập bối cảnh và mục tiêu mà user requirement và functional requirement phải thẳng hàng. **Yêu cầu nào không giúp dự án đạt business objective thì không nên được hiện thực.**

Một dự án không có định hướng rõ ràng và được truyền đạt tốt là lời mời gọi thảm hoạ. Các bên có thể vô tình làm việc **ngược mục đích của nhau** nếu họ có mục tiêu và ưu tiên khác nhau. Stakeholder sẽ không bao giờ thống nhất được yêu cầu nếu họ thiếu hiểu biết chung về mục tiêu kinh doanh của dự án.

> **Khuyến nghị thực hành:** Hiển thị business objectives, vision và các điểm chính của scope trong **mọi buổi khai thác yêu cầu**, để cả nhóm nhanh chóng đánh giá một yêu cầu được đề xuất là trong hay ngoài phạm vi.

### Xung đột business requirement

Business requirement thu thập từ nhiều nguồn có thể mâu thuẫn nhau. Ví dụ một kiosk đặt trong cửa hàng bán lẻ:

| Bên liên quan | Lợi ích mong muốn |
|---------------|-------------------|
| Đơn vị làm kiosk | Nhiều loại sản phẩm / dịch vụ bán qua kiosk |
| Nhà bán lẻ | Khách **ở lại lâu hơn** trong cửa hàng và chi nhiều hơn |
| Khách hàng | **Tốn ít thời gian hơn** khi mua hàng |

Mục tiêu của nhà bán lẻ và của khách hàng **trực tiếp xung đột**. Người ra quyết định của dự án phải giải quyết xung đột này **trước khi** BA đi vào chi tiết yêu cầu. Trọng tâm nên đặt vào việc mang lại giá trị lớn nhất cho các stakeholder chính, tránh bị phân tâm bởi những đặc tính bề mặt không giải quyết mục tiêu kinh doanh.

Đừng kỳ vọng đội phần mềm giải quyết xung đột giữa các stakeholder. Càng nhiều nhóm lợi ích lên tàu, phạm vi càng phình. **Scope creep** không kiểm soát có thể khiến dự án sụp đổ dưới sức nặng của chính nó.

> Với dự án dài, người ra quyết định có thể **thay đổi giữa chừng**. Khi đó, hãy lập tức xem lại business requirements đã baseline với người ra quyết định mới.

---

## 2. Business objectives & business objectives model

Không tổ chức nào nên khởi động dự án mà không hiểu rõ **giá trị nó mang lại cho doanh nghiệp**.

Business objective phải **đo được**. Những câu sáo rỗng (*"trở thành nhà cung cấp đẳng cấp thế giới"*) hay cải tiến mơ hồ (*"mang lại trải nghiệm khách hàng tốt hơn"*) đều **vô ích và không kiểm chứng được**.

| Mục tiêu tài chính | Mục tiêu phi tài chính |
|--------------------|------------------------|
| Chiếm X% thị phần trong Y tháng | Đạt mức hài lòng khách hàng tối thiểu X trong Y tháng sau phát hành |
| Đạt doanh số X đơn vị hoặc doanh thu Y trong Z tháng | Tăng năng suất xử lý giao dịch X% và giảm tỷ lệ lỗi dữ liệu xuống dưới Y% |
| Đạt X% ROI trong Y tháng | Xây nền tảng mở rộng được cho một dòng sản phẩm liên quan |
| Tiết kiệm X mỗi năm đang chi cho hệ thống cũ tốn kém | Tuân thủ các quy định cụ thể của nhà nước |
| Tăng biên lợi nhuận gộp từ X% lên Y% trong 1 năm | Nhận không quá X cuộc gọi hỗ trợ trên mỗi đơn vị trong Z tháng sau khi giao hàng |

**Business objectives model** là mô hình phân cấp thể hiện quan hệ giữa **vấn đề kinh doanh** và **mục tiêu kinh doanh đo được**. Hai thứ này đan xen: hiểu cái này sẽ lộ ra cái kia.

Cách khai thác bằng hai câu hỏi luân phiên:

- Với một **mục tiêu**, hỏi: *"Điều gì đang cản trở chúng ta đạt mục tiêu này?"* → lộ ra **vấn đề** chi tiết hơn.
- Với một **vấn đề**, hỏi: *"Làm sao chúng ta đánh giá được vấn đề đã được giải quyết?"* → lộ ra **mục tiêu đo được**.
- Ngược lên: *"Vì sao chúng ta quan tâm tới mục tiêu đó?"* → lộ ra **vấn đề hoặc cơ hội cấp cao hơn**.

Quá trình lặp qua lại cho tới khi một danh sách **feature** hiện ra — những feature giúp giải quyết vấn đề và đạt mục tiêu.

> **Cảnh báo:** *Gộp hai hệ thống thành một* **không phải** là business objective hợp lệ. Khách hàng không quan tâm họ đang dùng 1, 5 hay 10 hệ thống. Họ quan tâm tăng doanh thu và giảm chi phí. Việc gộp hệ thống có thể là **một phần của giải pháp**, nhưng hiếm khi là mục tiêu kinh doanh thật sự.

Dự án tuân thủ pháp lý cũng có business objective rõ ràng — thường diễn đạt dưới dạng **tránh rủi ro**: tránh bị kiện, tránh bị đình chỉ hoạt động.

---

## 3. Success metrics

**Success metrics** là các chỉ báo cho biết dự án có đang đi đúng hướng để đạt business objectives hay không.

Vì sao cần tách khỏi business objectives? Vì **business objective thường chỉ đo được rất lâu sau khi dự án kết thúc**, và đôi khi việc đạt được nó còn phụ thuộc vào các dự án khác ngoài dự án hiện tại. Success metrics có thể đo **trong quá trình kiểm thử hoặc ngay sau khi phát hành**.

Ví dụ với hệ thống theo dõi hoá chất:

| Loại | Phát biểu |
|------|-----------|
| Business objective | Giảm thời gian đặt hoá chất xuống 10 phút cho 80% đơn hàng |
| Success metric tương ứng | Đo thời gian đặt hàng trung bình trong giai đoạn test hoặc ngay sau phát hành |
| Business objective (dài hạn) | Theo dõi được toàn bộ container hoá chất trong vòng 1 năm |
| Success metric tương ứng | Theo dõi 60% container thương mại và 50% hoá chất nội bộ trong vòng 4 tuần |

> **Quan trọng:** Hãy chọn success metric một cách khôn ngoan. Đo **điều quan trọng với doanh nghiệp**, không phải điều dễ đo. Mục tiêu *"giảm 20% chi phí phát triển sản phẩm"* rất dễ đo — và cũng rất dễ đạt bằng cách sa thải nhân viên hoặc cắt đầu tư đổi mới. Đó chắc chắn không phải kết quả mong muốn.

---

## 4. Vision statement

**Vision statement** tóm tắt ngắn gọn **mục đích và ý định dài hạn** của sản phẩm. Nó phản ánh góc nhìn cân bằng, thoả mãn kỳ vọng của nhiều stakeholder khác nhau. Vision có thể hơi lý tưởng, nhưng phải bám vào thực tế thị trường, kiến trúc doanh nghiệp, định hướng chiến lược và giới hạn nguồn lực.

Mẫu từ khoá rất hiệu quả để soạn vision statement:

- **For** *(khách hàng mục tiêu)*
- **Who** *(phát biểu về nhu cầu hoặc cơ hội)*
- **The** *(tên sản phẩm)*
- **Is** *(loại sản phẩm)*
- **That** *(năng lực chính, lợi ích then chốt, lý do thuyết phục để mua / dùng)*
- **Unlike** *(phương án cạnh tranh chính, hệ thống hiện tại, quy trình hiện tại)*
- **Our product** *(khác biệt và lợi thế chính của sản phẩm mới)*

**Phân biệt vision và scope:**

| | Vision | Scope |
|---|--------|-------|
| Áp dụng cho | Toàn bộ sản phẩm | Một dự án / iteration cụ thể |
| Tốc độ thay đổi | Chậm, theo định hướng chiến lược | Động, điều chỉnh theo lịch, ngân sách, nguồn lực |
| Độ rõ ràng | Ổn định | Rõ cho bản phát hành hiện tại, mờ dần cho các bản xa hơn |

> **Mẹo hay:** Hãy để **nhiều stakeholder chính viết vision statement RIÊNG RẼ**, thay vì làm chung nhóm. So sánh kết quả là cách tuyệt vời để phát hiện những hiểu biết khác nhau về mục tiêu dự án. Và không bao giờ là quá muộn — kể cả khi dự án đang chạy, viết vision statement vẫn giúp giữ phần việc còn lại đúng hướng.

---

## 5. Business risks, assumptions & dependencies

**Business risks** là các rủi ro lớn liên quan tới việc phát triển — **hoặc không phát triển** — sản phẩm này. Các nhóm rủi ro: cạnh tranh thị trường, vấn đề thời điểm, mức chấp nhận của người dùng, khó khăn triển khai, tác động tiêu cực tới doanh nghiệp.

Với mỗi rủi ro, ước lượng **tổn thất tiềm năng**, **khả năng xảy ra**, và **hành động giảm thiểu**.

**Business risk KHÁC project risk.** Project risk thường xoay quanh nguồn lực sẵn có và yếu tố công nghệ.

**Assumption** (giả định) là phát biểu được tin là đúng khi không có bằng chứng hoặc hiểu biết dứt khoát. Giả định sai có thể khiến bạn **không đạt được business objective**.

Ví dụ: một nhà tài trợ đặt mục tiêu website mới tăng doanh thu 100.000 mỗi tháng. Để có con số đó, ông giả định rằng site sẽ thu hút thêm **200 khách truy cập duy nhất mỗi ngày**, và mỗi khách chi trung bình **17**. Nếu site không đạt lượng truy cập hoặc mức chi trung bình đó, dự án sẽ **không đạt mục tiêu** dù phần mềm chạy hoàn hảo.

**Dependency** (phụ thuộc) là sự lệ thuộc vào yếu tố bên ngoài: tiêu chuẩn ngành đang chờ ban hành, quy định nhà nước, sản phẩm bàn giao từ dự án khác, nhà cung cấp bên thứ ba, đối tác phát triển.

Hãy ghi lại **tác động** khi một giả định sai hoặc một phụ thuộc bị gãy, để stakeholder hiểu vì sao nó quan trọng. **Phụ thuộc bị gãy là nguồn gốc phổ biến của chậm tiến độ.**

---

## 6. Phạm vi & giới hạn

Khi một nhà hoá học phát minh phản ứng mới, bài báo của anh ta luôn có mục *"Scope and limitations"* — mô tả phản ứng **làm được gì** và **không làm được gì**. Dự án phần mềm cũng cần đúng như vậy: bạn phải nêu cả **sản phẩm là gì** lẫn **sản phẩm không phải là gì**.

**Scope** mô tả khái niệm và phạm vi của giải pháp đề xuất. **Limitations** liệt kê những năng lực mà sản phẩm **sẽ không có**, dù một số người có thể mặc định là sẽ có. Cả hai giúp thiết lập **kỳ vọng thực tế**.

Nội dung cần có:

- **Major features** — các feature chính, mỗi feature có nhãn duy nhất và bền vững để truy vết.
- **Scope of initial release** — năng lực dự kiến cho bản phát hành đầu tiên.
- **Scope of subsequent releases** — lộ trình các bản sau; càng xa càng mờ, và chắc chắn sẽ thay đổi.
- **Limitations and exclusions** — ghi rõ cả những thứ **đã bị cắt khỏi phạm vi**, để quyết định đó không bị quên.

**Cạm bẫy blue-sky.** Một công ty từng bị scope creep gần như thảm hoạ. Quản lý của họ nói buồn bã: *"Chúng tôi đã blue-sky yêu cầu quá nhiều"* — nghĩa là bất kỳ ý tưởng nào của bất kỳ ai cũng được đưa vào yêu cầu. Họ có vision sản phẩm vững, nhưng **không quản lý phạm vi** bằng cách lập chuỗi bản phát hành và hoãn một số feature lại. Sau **bốn năm** họ phát hành một sản phẩm phình to.

Về bản phát hành đầu tiên, một đội đã quyết định rất tỉnh táo: người dùng phải **vận hành được nghiệp vụ giao hàng** với bản 1. Bản 1 **không cần nhanh, không cần đẹp, không cần dễ dùng** — nhưng phải **đáng tin cậy**. Trọng tâm đó dẫn dắt mọi việc họ làm.

> **Cảnh báo:** Đừng bỏ quên yêu cầu phi chức năng ở bản đầu. Những thuộc tính **ảnh hưởng trực tiếp tới kiến trúc** là tối quan trọng ngay từ đầu — việc tái kiến trúc để sửa thiếu sót chất lượng có thể tốn gần bằng viết lại toàn bộ.

---

## 7. Context diagram & ecosystem map

**Context diagram** minh hoạ trực quan ranh giới giữa hệ thống bạn đang xây và mọi thứ còn lại. Nó xác định các **external entity** (còn gọi là terminator) bên ngoài hệ thống, cùng các luồng **dữ liệu, điều khiển và vật chất** giữa chúng và hệ thống.

Quy ước ký hiệu:

- Toàn bộ hệ thống được vẽ là **một vòng tròn duy nhất** — context diagram **cố ý không cho thấy** bất cứ gì bên trong.
- External entity vẽ trong **hình chữ nhật**: user class, tổ chức, hệ thống khác, thiết bị phần cứng.
- **Mũi tên** thể hiện luồng dữ liệu hoặc vật thể vật lý giữa hệ thống và external entity.

"Hệ thống" bên trong vòng tròn có thể gồm bất kỳ tổ hợp nào của phần mềm, phần cứng và **thao tác thủ công của con người**. Điều gì không nằm trong phạm vi thì **không xuất hiện** — sự vắng mặt đó chính là thông tin.

**Ecosystem map** cho thấy tất cả hệ thống có liên quan tương tác với nhau và **bản chất của các tương tác** đó.

**Khác biệt then chốt so với context diagram:** ecosystem map thể hiện cả những hệ thống **có quan hệ nhưng KHÔNG có giao diện trực tiếp** với hệ thống của bạn.

Cách xác định phạm vi bằng ecosystem map: tìm những hệ thống **tiêu thụ dữ liệu** từ hệ thống của bạn. Khi tới điểm mà dự án không còn ảnh hưởng tới dữ liệu nào nữa, bạn đã tìm ra **ranh giới phạm vi** của các hệ thống tham gia giải pháp.

Đây là điều rất giá trị: một hệ thống có thể **không kết nối trực tiếp** với hệ thống của bạn, nhưng vẫn nhận dữ liệu qua một hệ thống trung gian — và bạn vẫn phải cân nhắc yêu cầu phát sinh từ đó.

---

## 8. Feature tree & event list

**Feature tree** là biểu diễn trực quan các feature của sản phẩm, nhóm theo logic và phân cấp tới ba mức:

- **L1** — feature chính, vẽ như nhánh chính toả ra từ thân cây.
- **L2** — feature con của L1.
- **L3** — feature con của L2.

Feature tree cho cái nhìn **cô đọng về toàn bộ phạm vi**, nên là mô hình lý tưởng để trình bày với lãnh đạo muốn nắm nhanh bức tranh tổng thể.

**Dùng để lập kế hoạch phát hành:** bạn định nghĩa phạm vi một bản phát hành bằng cách chọn một tập L1 / L2 / L3 cụ thể. Bạn có thể hiện thực **một phần feature** ở bản đầu (chỉ vài subfeature), rồi làm giàu dần ở các bản sau cho tới khi feature hoàn chỉnh. Có thể đánh dấu phân bổ này bằng màu sắc trên chính sơ đồ, hoặc lập **feature roadmap table**.

**Event list** liệt kê các sự kiện bên ngoài có thể kích hoạt hành vi của hệ thống. Nó chỉ **nêu tên** sự kiện; cách hệ thống phản ứng sẽ được chi tiết hoá sau bằng **event-response table** trong SRS. Event list là công cụ xác định phạm vi hữu ích vì bạn có thể **phân bổ từng sự kiện** cho bản phát hành hoặc iteration cụ thể.

**Ba mô hình này bổ trợ cho nhau và kiểm tra chéo lẫn nhau:**

- Context diagram và ecosystem map cho biết **có những actor và hệ thống nào**.
- Event list cho biết **những actor / hệ thống đó có thể làm gì** để kích hoạt hành vi.
- Với mỗi external entity trên context diagram, hãy hỏi: *"Hành động nào của thực thể này kích hoạt hành vi trong hệ thống?"*
- Với mỗi sự kiện trong event list, hãy hỏi: *"Thực thể tương ứng đã có mặt trên context diagram hoặc ecosystem map chưa?"*

Nếu thấy lệch, hãy xem mô hình nào đang thiếu phần tử. Đôi khi lệch là hợp lý: ví dụ **Vendor** không xuất hiện trên context diagram vì hệ thống không giao tiếp trực tiếp với nhà cung cấp, nhưng vẫn có mặt trên ecosystem map.

---

## 9. Stakeholder profiles & project priorities

**Stakeholder profiles** mô tả các nhóm khách hàng và stakeholder chính. Không cần mô tả mọi nhóm — hãy tập trung vào các loại khách hàng, phân khúc thị trường mục tiêu, và các user class bên trong chúng.

Mỗi profile nên có:

- **Giá trị hoặc lợi ích chính** stakeholder nhận được: tăng năng suất, giảm rework và lãng phí, tiết kiệm chi phí, tinh gọn quy trình, tự động hoá việc thủ công, làm được việc hoàn toàn mới, tuân thủ quy định, hoặc dễ dùng hơn sản phẩm hiện tại.
- **Thái độ dự kiến** của họ đối với sản phẩm.
- **Feature và đặc tính họ quan tâm.**
- **Ràng buộc đã biết** cần đáp ứng.

**Project priorities.** Để ra quyết định hiệu quả, stakeholder phải thống nhất ưu tiên dự án trên **năm chiều**: **features, quality, schedule, cost, staff**. Mỗi chiều rơi vào một trong ba loại:

| Loại | Ý nghĩa |
|------|---------|
| **Constraint** | Yếu tố giới hạn mà project manager phải hoạt động bên trong |
| **Driver** | Mục tiêu thành công quan trọng, ít linh hoạt để điều chỉnh |
| **Degree of freedom** | Yếu tố PM có quyền điều chỉnh và cân đối với các chiều khác |

> **Quan trọng:** **Không thể** để cả năm chiều đều là constraint, và cũng không thể để tất cả đều là driver. Project manager **cần ít nhất vài degree of freedom** để phản ứng khi yêu cầu hoặc thực tế dự án thay đổi.

Khi marketing đột ngột đòi phát hành sớm một tháng, chính bảng ưu tiên này quyết định phản ứng: hoãn một số yêu cầu sang bản sau, rút ngắn chu kỳ system test, yêu cầu làm thêm giờ hoặc thuê ngoài, hay điều người từ dự án khác sang.

**Deployment considerations** cũng thuộc phần business context: người dùng cần quyền truy cập gì, họ phân bố ở những múi giờ nào, khi nào cần dùng hệ thống, và cần thay đổi hạ tầng gì về dung lượng, mạng, lưu trữ hay di chuyển dữ liệu.

---

## 10. Giữ scope trong tầm kiểm soát

> **Định nghĩa scope là một CẤU TRÚC, không phải một chiếc áo bó.**

Thay đổi phạm vi **không xấu** nếu nó giúp lái dự án tới chỗ đáp ứng nhu cầu khách hàng đang tiến hoá. Vấn đề chỉ nảy sinh khi thay đổi diễn ra **vô thức và không kiểm soát**.

Khi ai đó đề xuất một yêu cầu mới, BA phải hỏi: ***"Cái này có trong phạm vi không?"*** — và có đúng **ba** câu trả lời:

1. **Rõ ràng ngoài phạm vi.** Có thể thú vị, nhưng thuộc bản phát hành sau hoặc dự án khác.
2. **Rõ ràng trong phạm vi.** Có thể đưa vào nếu độ ưu tiên cao so với các yêu cầu đã cam kết — thường kéo theo việc **hoãn hoặc huỷ** yêu cầu khác, trừ khi bạn sẵn sàng kéo dài dự án.
3. **Ngoài phạm vi, nhưng nó phục vụ business objective nên đáng lẽ phải nằm trong.** Đây là **vòng phản hồi ngược** từ user requirement lên business requirement: bạn cập nhật vision and scope document (đã được đặt dưới change control khi baseline) và điều chỉnh ngân sách, lịch, nhân sự tương ứng.

**Dùng business objectives để quyết định.** Hãy xác định feature nào đóng góp nhiều giá trị nhất cho business objectives và xếp chúng vào các bản phát hành sớm. Nếu có thể, hãy **định lượng** đóng góp: feature này góp khoảng 1.000, 100.000 hay 1.000.000 vào mục tiêu? Khi một lãnh đạo đề xuất feature nghĩ ra cuối tuần, phân tích định lượng giúp quyết định dựa trên **sự kiện thay vì cảm xúc**.

**Luôn ghi lại lý do một yêu cầu bị từ chối.** Yêu cầu bị từ chối có thói quen **quay trở lại**, và bạn sẽ cần biết vì sao lần trước đã nói không.

**Đánh giá tác động.** Khi phạm vi tăng, PM thường phải thương lượng lại ngân sách, nguồn lực, lịch trình hoặc nhân sự. Lý tưởng là lịch trình ban đầu đã có **contingency buffer**. Hậu quả phổ biến của scope change là **công việc đã hoàn thành phải làm lại**, và **chất lượng bị hy sinh** nếu không tăng thêm nguồn lực hay thời gian.

---

## 11. Vision & scope trong agile; dùng business objectives để xác định hoàn thành

**Quản lý phạm vi trong agile** đi theo hướng khác. Phạm vi mỗi iteration gồm các user story chọn từ **product backlog động**, dựa trên độ ưu tiên và **năng lực giao hàng ước lượng** của đội cho mỗi timebox.

Thay vì chống lại scope creep, đội **ưu tiên hoá yêu cầu mới so với các mục đã có trong backlog** và phân bổ chúng cho iteration tương lai. Số lượng iteration — và do đó tổng thời gian dự án — vẫn phụ thuộc vào tổng lượng chức năng, nhưng **phạm vi mỗi iteration được kiểm soát chặt** để bảo đảm hoàn thành đúng hạn.

Một biến thể: cố định **tổng thời gian dự án** và chấp nhận thay đổi phạm vi. Số iteration giữ nguyên, còn nội dung các iteration còn lại được điều chỉnh theo ưu tiên mới.

Dự án agile thường có **iteration zero** — vòng lập kế hoạch đầu tiên để xác định product vision và các business requirement khác. Dù không tạo vision and scope document chính thức, **nội dung của nó vẫn thiết yếu**.

### Dùng business objectives để biết khi nào xong

Project manager lái dự án tới đích, nhưng **BA là người hiểu rõ business objectives nhất** và có thể xác định khi nào giá trị mong muốn đã được giao — nghĩa là công việc đã xong.

- Nếu bạn bắt đầu với **vision rõ ràng** và mỗi bản phát hành được scope để giao một phần chức năng, bạn xong khi hoàn tất các iteration đã lập kế hoạch.
- Trong cách tiếp cận lặp, điểm kết thúc có thể **mờ hơn**. Không phải lúc nào cũng cần hiện thực toàn bộ chức năng còn lại. Dự án hoàn thành khi **success metrics cho thấy bạn có cơ hội tốt để đạt business objectives**.

> **Hệ quả nghiêm trọng:** Business objective mơ hồ **bảo đảm** một dự án mở vô hạn, không có cách nào biết khi nào xong. Nhà tài trợ không thích vì không biết lập ngân sách, lập lịch hay lập kế hoạch. Khách hàng không thích vì có thể nhận giải pháp đúng hạn, đúng ngân sách — nhưng **không mang lại giá trị họ cần**.

---

## Điểm cốt lõi

- Business requirements gồm bốn phần: **business opportunity, business objectives, success metrics, vision statement**.
- Business objective phải **đo được**; phát biểu sáo rỗng không kiểm chứng được là vô ích.
- *Gộp hai hệ thống thành một* **không phải** business objective — đó là một phần của giải pháp.
- **Success metrics đo được sớm**, còn business objectives thường chỉ đo được rất lâu sau khi dự án kết thúc.
- Chọn success metric đo **điều quan trọng**, không phải điều dễ đo.
- **Vision ổn định và áp dụng cho toàn sản phẩm; scope động và áp dụng cho một release / iteration.**
- Hãy để nhiều stakeholder viết vision statement **riêng rẽ** rồi so sánh — cách nhanh nhất để lộ ra hiểu biết lệch nhau.
- **Giả định sai có thể phá hỏng business objective** dù phần mềm chạy hoàn hảo.
- **Context diagram** vẽ hệ thống là một vòng tròn duy nhất và cố ý **không cho thấy nội bộ**.
- **Ecosystem map** khác context diagram ở chỗ nó thể hiện cả hệ thống **có quan hệ nhưng không có giao diện trực tiếp**.
- **Feature tree** phân cấp tới **ba mức** và là công cụ tuyệt vời để lập kế hoạch phát hành.
- Trong năm chiều ưu tiên, **không thể để tất cả đều là constraint hoặc đều là driver**.
- Khi có yêu cầu mới, luôn hỏi ***có trong phạm vi không*** — và ghi lại lý do nếu từ chối.
- Agile không chống scope creep mà **ưu tiên hoá yêu cầu mới vào backlog**, giữ chặt phạm vi trong từng iteration.
- **Business objective mơ hồ = dự án không có điểm kết thúc.**

## Tóm tắt

- Business requirements đặt bối cảnh và cho phép **đo lường** lợi ích mà doanh nghiệp kỳ vọng.
- Hãy giải quyết **xung đột giữa các business requirement** trước khi đi vào chi tiết yêu cầu — và đừng bắt đội phần mềm gánh việc đó.
- **Vision and scope document** là nơi chứa business requirements; hiển thị nó trong mọi buổi khai thác yêu cầu.
- Bốn mô hình biểu diễn phạm vi — **context diagram, ecosystem map, feature tree, event list** — bổ trợ và kiểm tra chéo lẫn nhau.
- Ghi rõ cả **những gì sản phẩm sẽ không làm**, kể cả những thứ đã bị cắt khỏi phạm vi.
- Dùng **business objectives** làm thước đo cho mọi quyết định scope, và dùng **success metrics** để biết khi nào dự án đã xong.
