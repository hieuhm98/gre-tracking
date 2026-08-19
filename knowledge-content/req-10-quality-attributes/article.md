# Quality attribute & ràng buộc

## 1. Vì sao quality attribute quan trọng & cách khai thác chúng

> **Khi một người dùng nói *"phần mềm này thật tuyệt vời"*, họ đang nói gì?**

**Bạn không thể biết được** — trừ khi bạn hỏi thêm. Có thể ứng dụng làm đúng những gì họ cần, dễ học, tốc độ tuyệt vời, hoặc chưa bao giờ sập. **Điểm mấu chốt: sự tuyệt vời nằm ở nhiều chiều khác nhau, và hầu hết chúng KHÔNG phải là chức năng.**

**Yêu cầu chức năng mô tả *hệ thống làm gì*. Quality attribute mô tả *hệ thống làm điều đó TỐT tới mức nào*.** Chúng còn được gọi là **quality factor, quality of service requirement, constraint, nonbehavioral requirement**, hoặc gọi chung là **"the -ilities"**.

> **Đây là những đặc tính mà stakeholder RẤT quan tâm nhưng lại HIẾM KHI nói ra.** Người dùng hiếm khi nói *"Tôi cần hệ thống này đáng tin cậy"* — họ **giả định** nó đáng tin cậy. Nhưng nếu bạn không đặc tả và không thiết kế cho chất lượng đó, khả năng cao là bạn sẽ **không đạt được nó**.

### Vì sao chúng dễ bị bỏ sót

- **Người dùng khó diễn đạt.** Họ có kỳ vọng nhưng không có từ vựng để nói ra.
- **Chúng ngầm định.** Nếu không ai hỏi, không ai nói.
- **Chúng khó đo lường.** *"Dễ dùng"*, *"nhanh"*, *"đáng tin"* đều mơ hồ nếu không lượng hoá.
- **Chúng xung đột với nhau.** Tăng bảo mật thường giảm khả năng sử dụng; tăng hiệu năng thường giảm khả năng bảo trì.

> **Cái giá của việc bỏ sót:** **Quality attribute có ảnh hưởng RẤT LỚN tới kiến trúc.** Việc phát hiện muộn rằng hệ thống phải phục vụ 10.000 người dùng đồng thời thay vì 100, hoặc phải chạy được trên thiết bị di động, có thể **buộc phải viết lại phần lớn hệ thống**. **Thêm những đặc tính này vào sau khi đã xây xong thường tốn kém hơn nhiều so với thiết kế chúng từ đầu.**

### Cách khai thác quality attribute

**1. Hỏi các câu hỏi cụ thể, không hỏi chung chung.** Đừng hỏi *"Bạn cần hệ thống nhanh tới mức nào?"* — câu trả lời sẽ luôn là *"nhanh nhất có thể"*. Thay vào đó hãy hỏi về **các kịch bản cụ thể**: *"Khi bạn tìm kiếm một hoá chất, bạn sẵn sàng chờ bao lâu trước khi cảm thấy khó chịu?"*

**2. Dùng danh sách kiểm (checklist) các thuộc tính.** Đi qua một danh sách chuẩn với stakeholder và hỏi từng cái có quan trọng với hệ thống này không. **Đừng cố đặc tả mọi thuộc tính** — hãy chọn ra những cái thực sự quan trọng.

**3. Hỏi về mặt trái.** *"Điều gì sẽ xảy ra nếu hệ thống ngừng hoạt động trong một giờ? Trong một ngày?"* Câu trả lời cho bạn biết availability thực sự cần thiết ở mức nào.

**4. Tìm ra sự khác biệt giữa các user class.** Người dùng thành thạo dùng hệ thống hằng ngày ưu tiên **hiệu quả (efficiency)**; người dùng thỉnh thoảng ưu tiên **dễ học (ease of learning)**. **Đây là hai mục tiêu KHÁC NHAU và thường mâu thuẫn.**

**5. Ưu tiên hoá.** Không thể tối ưu mọi thứ. **Hãy xác định thuộc tính nào quan trọng nhất và stakeholder sẵn sàng đánh đổi cái gì.**

> **Bẫy:** Đừng chỉ nói *"hệ thống phải thân thiện với người dùng"* rồi coi như xong. **Đó không phải yêu cầu — đó là một mong ước.** Hãy dịch nó thành **đặc tính sản phẩm quan sát được và đo lường được**.

---

## 2. Phân loại quality attribute & phân biệt với constraint

### Hai nhóm lớn

| Nhóm | Ai quan tâm | Ví dụ |
|------|-------------|-------|
| **Thuộc tính quan trọng với NGƯỜI DÙNG (external / operational)** | Người dùng, khách hàng, người vận hành | Availability, installability, integrity, interoperability, performance, reliability, robustness, safety, security, usability |
| **Thuộc tính quan trọng với NGƯỜI PHÁT TRIỂN (internal / development)** | Lập trình viên, người bảo trì, tester | Efficiency, modifiability, portability, reusability, scalability, verifiability |

> **Vì sao vẫn phải đặc tả thuộc tính "nội bộ"?** Vì **thuộc tính phát triển tốt sẽ dẫn tới hệ thống dễ bảo trì, dễ mở rộng và dễ chuyển đổi hơn về sau** — điều này cuối cùng phục vụ khách hàng. **Nhưng khách hàng thường không sẵn sàng trả tiền cho chúng**, nên đội phát triển phải **nêu ra và biện luận cho chúng**.

### Quality attribute khác constraint như thế nào

- **Quality attribute** mô tả **mức độ chất lượng mong muốn** — thường có thể đạt được ở nhiều mức khác nhau, và bạn chọn mức phù hợp.
- **Constraint (ràng buộc)** **giới hạn các lựa chọn của nhà thiết kế và lập trình viên**. Nó không phải là thứ bạn tối ưu — nó là thứ bạn **phải tuân theo**.

**Ví dụ:** *"Hệ thống phải phản hồi truy vấn trong vòng 2 giây"* là **quality attribute (performance)**. *"Hệ thống phải được viết bằng Java 8"* là **constraint (implementation)**.

### Bốn nguồn của constraint

**1. Ràng buộc thiết kế (design constraint)** — giới hạn phương án thiết kế: *"Giao diện phải tuân theo hướng dẫn phong cách của công ty"*, *"Dữ liệu phải được lưu trong cơ sở dữ liệu Oracle hiện có"*.

**2. Ràng buộc hiện thực (implementation constraint)** — giới hạn cách viết mã: ngôn ngữ lập trình bắt buộc, thư viện được phép dùng, tiêu chuẩn mã hoá.

**3. Ràng buộc từ môi trường vận hành** — nền tảng phần cứng, hệ điều hành, trình duyệt phải hỗ trợ, băng thông mạng khả dụng.

**4. Ràng buộc từ bên ngoài** — luật pháp, quy định của cơ quan quản lý, tiêu chuẩn ngành, chính sách công ty, điều khoản hợp đồng.

> **Nguyên tắc quan trọng: mỗi constraint nên đi kèm LÝ DO (rationale).** Nếu không, lập trình viên sẽ không biết constraint đó có còn hiệu lực khi hoàn cảnh thay đổi hay không. **Ràng buộc thiết kế áp đặt không cần thiết, quá sớm, hoặc vì lý do sai sẽ làm bực bội lập trình viên và có thể dẫn tới thiết kế sản phẩm dưới mức tối ưu.**

---

## 3. Availability, installability & integrity

### Availability (tính sẵn sàng)

**Availability** là thước đo **tỷ lệ thời gian hệ thống thực sự khả dụng để sử dụng**. Nó là hàm của **reliability** và **maintainability**.

Cách đặc tả: *"Hệ thống phải khả dụng ít nhất 99,5% thời gian trong giờ làm việc từ 8:00 tới 18:00 các ngày trong tuần."*

> **Cần làm rõ: 99% availability nghe rất tốt, nhưng đó là 3,65 ngày ngừng hoạt động mỗi năm. 99,9% là khoảng 8,8 giờ. 99,99% là chưa tới 1 giờ. Mỗi chữ số 9 thêm vào làm CHI PHÍ TĂNG VỌT.** Hãy hỏi stakeholder **thiệt hại thực tế** của mỗi giờ ngừng hoạt động để chọn mức hợp lý.

Các câu hỏi cần đặt:

- **Downtime theo kế hoạch** (bảo trì) có tính vào không?
- Hệ thống có phải sẵn sàng **24/7** hay chỉ trong giờ làm việc?
- Thời gian **phục hồi tối đa cho phép** sau sự cố là bao lâu?
- Có cần **chế độ suy giảm (degraded mode)** cho phép một số chức năng vẫn hoạt động khi phần khác hỏng không?

### Installability (khả năng cài đặt)

**Installability** mô tả việc **cài đặt, gỡ bỏ và cài đặt lại** ứng dụng dễ dàng tới mức nào. Thường bị bỏ quên cho tới phút cuối.

Các khía cạnh cần đặc tả:

- **Thời gian tối đa** để hoàn tất cài đặt.
- Cần **bao nhiêu tương tác của người dùng**, và người cài đặt cần **trình độ kỹ thuật** nào.
- Cài đặt có thể **quay lui (rollback)** nếu thất bại không?
- Ứng dụng có cần cài đặt được **không cần quyền quản trị** không?
- Việc **nâng cấp** có bảo toàn dữ liệu và thiết lập của người dùng không?
- Việc **gỡ bỏ** có xoá sạch mọi thứ hay để lại dữ liệu người dùng?

### Integrity (tính toàn vẹn)

**Integrity** liên quan tới việc **ngăn ngừa mất mát và làm hỏng dữ liệu**. Nó đề cập tới **tính chính xác và đúng đắn** của dữ liệu trong hệ thống.

> **Integrity KHÁC với security.** Security tập trung vào **ngăn truy cập trái phép**; integrity tập trung vào **bảo đảm dữ liệu không bị hỏng, mất hoặc sai lệch** — dù bởi lỗi phần mềm, lỗi phần cứng, hay thao tác sai của người dùng hợp lệ.

Cách đặc tả: *"Hệ thống phải phát hiện được mọi hỏng hóc dữ liệu do lỗi truyền tải và yêu cầu gửi lại"*, hoặc *"Không được mất quá 1 phút dữ liệu giao dịch khi hệ thống sập."*

Các cơ chế liên quan: **checksum, transaction rollback, sao lưu và phục hồi, audit trail, kiểm tra tính hợp lệ dữ liệu đầu vào**.

---

## 4. Interoperability, performance & reliability

### Interoperability (khả năng liên tác)

**Interoperability** chỉ ra hệ thống **trao đổi dữ liệu và dịch vụ với các hệ thống khác dễ dàng tới mức nào**.

Để đặc tả, bạn cần biết:

- **Hệ thống nào khác** mà ứng dụng phải trao đổi thông tin.
- **Định dạng dữ liệu, giao thức và tiêu chuẩn** nào phải được hỗ trợ.
- Việc trao đổi là **đồng bộ hay bất đồng bộ**, **thời gian thực hay theo lô**.
- Điều gì xảy ra khi hệ thống đối tác **không khả dụng**.

**Ecosystem map** rất hữu ích ở đây: nó cho thấy mọi hệ thống mà ứng dụng của bạn tương tác.

### Performance (hiệu năng)

**Performance** là **khả năng đáp ứng của hệ thống** — thời gian cần để phản hồi các sự kiện, hoặc số sự kiện xử lý được trong một khoảng thời gian.

Vì performance là thuộc tính **rất dễ nhìn thấy với người dùng**, nó thường nằm trong số các quality attribute quan trọng nhất.

**Các loại yêu cầu performance:**

| Loại | Ví dụ đặc tả |
|------|--------------|
| **Response time** | *"95% các truy vấn tìm kiếm phải trả về kết quả trong vòng 2 giây khi có tối đa 500 người dùng đồng thời."* |
| **Throughput** | *"Hệ thống phải xử lý được tối thiểu 1.000 giao dịch mỗi phút vào giờ cao điểm."* |
| **Capacity** | *"Hệ thống phải hỗ trợ tối đa 2.000 người dùng đồng thời."* |
| **Latency & timing** | *"Hệ thống điều khiển phải lấy mẫu cảm biến mỗi 100 mili-giây, sai số không quá 5 mili-giây."* |
| **Degradation** | *"Khi vượt quá 2.000 người dùng, hệ thống phải xếp hàng các yêu cầu mới thay vì từ chối chúng."* |

> **Yêu cầu performance mơ hồ là vô dụng.** *"Hệ thống phải nhanh"* không kiểm chứng được. Hãy luôn nêu rõ: **đo cái gì, dưới điều kiện tải nào, và ngưỡng chấp nhận là bao nhiêu.**

**Performance có ảnh hưởng rất lớn tới kiến trúc.** Nếu yêu cầu performance khắt khe, kiến trúc sư phải biết **ngay từ đầu** để chọn chiến lược caching, phân mảnh dữ liệu, xử lý bất đồng bộ phù hợp.

### Reliability (độ tin cậy)

**Reliability** là **xác suất phần mềm chạy mà không lỗi trong một khoảng thời gian xác định**. Nó liên quan chặt chẽ tới availability và robustness.

**Các cách đo lường:**

- **MTBF (mean time between failures)** — thời gian trung bình giữa hai lần hỏng.
- **MTTF (mean time to failure)** — thời gian trung bình tới lần hỏng đầu tiên.
- **MTTR (mean time to repair)** — thời gian trung bình để sửa chữa, ảnh hưởng trực tiếp tới availability.
- **Tỷ lệ lỗi (defect density)** — số lỗi trên một nghìn dòng mã hoặc trên một đơn vị chức năng.

Cách đặc tả: *"Không quá 1 lỗi nghiêm trọng cho mỗi 1.000 giờ vận hành"*, hoặc *"MTBF phải ít nhất 720 giờ."*

> **Mức reliability cần thiết phụ thuộc vào hậu quả của lỗi.** Trò chơi trên điện thoại và phần mềm điều khiển máy trợ tim **rõ ràng có yêu cầu reliability rất khác nhau**. Hãy hỏi: **hậu quả của một lần hỏng là gì?**

---

## 5. Robustness, safety & security

### Robustness (tính bền bỉ)

**Robustness** là mức độ hệ thống **tiếp tục hoạt động đúng khi đối mặt với đầu vào không hợp lệ, lỗi từ hệ thống kết nối, hoặc điều kiện vận hành bất ngờ**.

**Ba thành phần thường gặp:**

- **Error tolerance** — hệ thống xử lý đầu vào sai như thế nào? Nó có **từ chối một cách lịch sự** với thông báo hữu ích, hay sập?
- **Fault tolerance** — hệ thống có tiếp tục hoạt động khi một thành phần hỏng không? Có **chuyển sang chế độ suy giảm** không?
- **Recovery** — sau sự cố, hệ thống **tự phục hồi** hay cần can thiệp thủ công? Mất bao lâu?

Cách đặc tả: *"Nếu kết nối tới máy chủ hoá chất bị mất, hệ thống phải cho phép người dùng tiếp tục chuẩn bị yêu cầu ở chế độ ngoại tuyến và tự động gửi khi kết nối được khôi phục."*

> **Nguyên tắc: mỗi yêu cầu chức năng mô tả hành vi khi mọi thứ đúng nên đi kèm yêu cầu mô tả hành vi khi có ngoại lệ.** Đây chính là nơi robustness gặp gỡ tính đầy đủ của yêu cầu.

### Safety (an toàn)

**Safety requirement** liên quan tới việc **ngăn ngừa tổn hại tới con người, tài sản hoặc môi trường**. Chúng đặc biệt quan trọng với **hệ thống nhúng, thiết bị y tế, ô tô, hàng không, điều khiển công nghiệp**.

Safety requirement thường được viết dưới dạng **những gì hệ thống KHÔNG được để xảy ra**, cùng với **cơ chế bảo vệ**:

- *"Hệ thống phải ngăn máy bơm hoạt động khi cảm biến mức phát hiện bể chứa rỗng."*
- *"Nếu nhiệt độ vượt quá 90°C, hệ thống phải ngắt nguồn gia nhiệt trong vòng 500 mili-giây và kích hoạt cảnh báo âm thanh."*

**Safety requirement thường xuất phát từ:**

- **Phân tích rủi ro (hazard analysis)** — xác định điều gì có thể sai và hậu quả.
- **Quy định pháp luật và tiêu chuẩn ngành** — FDA cho thiết bị y tế, ISO 26262 cho ô tô, DO-178C cho hàng không.
- **Chứng nhận sản phẩm** — sản phẩm phải vượt qua kiểm định trước khi bán.

> **Với hệ thống safety-critical, việc truy vết yêu cầu là BẮT BUỘC, không phải tuỳ chọn.** Bạn phải chứng minh được rằng mỗi yêu cầu an toàn đã được hiện thực và kiểm thử.

### Security (bảo mật)

**Security requirement** liên quan tới **bảo vệ khỏi truy cập, sử dụng, sửa đổi, tiết lộ hoặc phá huỷ trái phép**.

**Các khía cạnh chính:**

| Khía cạnh | Câu hỏi cần trả lời |
|-----------|---------------------|
| **Authentication** | Người dùng chứng minh danh tính bằng cách nào? Cần xác thực nhiều yếu tố không? |
| **Authorization** | Ai được phép làm gì? Quyền được cấp theo vai trò hay theo cá nhân? |
| **Confidentiality** | Dữ liệu nào phải được mã hoá, khi lưu trữ và khi truyền tải? |
| **Audit** | Hành động nào phải được ghi nhật ký? Nhật ký được giữ bao lâu và ai xem được? |
| **Privacy** | Dữ liệu cá nhân nào được thu thập, dùng vào việc gì, giữ bao lâu, và ai truy cập được? |
| **Non-repudiation** | Có cần bằng chứng không thể chối bỏ rằng một giao dịch đã xảy ra không? |

**Nhiều security requirement thực chất bắt nguồn từ business rule.** Ví dụ business rule *"Chỉ trưởng phòng mới được phê duyệt chi phí trên 5.000 đô la"* dẫn tới yêu cầu chức năng và yêu cầu bảo mật cụ thể.

> **Security requirement cũng thường bắt nguồn từ quy định pháp lý** — HIPAA cho dữ liệu y tế, GDPR cho dữ liệu cá nhân, PCI DSS cho dữ liệu thẻ thanh toán. **Hãy xác định rõ quy định nào áp dụng, vì chúng thường đặt ra các yêu cầu không thể thương lượng.**

---

## 6. Usability & các thuộc tính vận hành khác

### Usability (khả năng sử dụng)

**Usability** — đôi khi gọi là **human engineering** hay **ease of use** — chiếm một mảng lớn các đặc tính khiến phần mềm **dễ tiếp cận, dễ học và dễ dùng**.

> **Vấn đề lớn nhất: usability là thuộc tính bị đặc tả tệ nhất.** Người ta viết *"hệ thống phải thân thiện với người dùng"* rồi coi như đã đặc tả. **Đó không phải yêu cầu.**

**Các chiều đo của usability — mỗi cái cần được đặc tả riêng vì chúng thường mâu thuẫn:**

| Chiều | Định nghĩa | Cách đặc tả |
|-------|-----------|-------------|
| **Ease of learning** | Người mới học dùng nhanh tới mức nào | *"Người dùng mới chưa từng đào tạo phải hoàn thành được việc đặt một yêu cầu hoá chất trong vòng 15 phút kể từ lần đầu mở ứng dụng."* |
| **Efficiency of use** | Người thành thạo làm việc nhanh tới mức nào | *"Người dùng có kinh nghiệm phải hoàn tất một yêu cầu chuẩn trong không quá 6 lần nhấp chuột và 60 giây."* |
| **Memorability** | Sau một thời gian không dùng, nhớ lại dễ tới mức nào | *"Người dùng không dùng hệ thống trong 3 tháng phải thực hiện lại được tác vụ chính mà không cần tài liệu."* |
| **Error prevention & recovery** | Ngăn lỗi và cho phép sửa lỗi | *"Mọi thao tác phá huỷ dữ liệu phải yêu cầu xác nhận và phải hoàn tác được trong vòng phiên làm việc."* |
| **Satisfaction** | Người dùng cảm thấy thế nào | Đo bằng khảo sát chuẩn hoá như **SUS (System Usability Scale)** với ngưỡng điểm cụ thể |
| **Accessibility** | Người khuyết tật dùng được không | *"Ứng dụng phải tuân thủ WCAG 2.1 mức AA."* |

> **Ease of learning và efficiency of use là hai mục tiêu KHÁC NHAU và thường MÂU THUẪN.** Giao diện có nhiều wizard dẫn dắt từng bước rất dễ học nhưng làm chậm người thành thạo. Giao diện có nhiều phím tắt rất hiệu quả nhưng khó học. **Bạn phải biết user class nào quan trọng hơn.**

**Usability requirement thường được xác định tốt nhất qua:**

- **Quan sát người dùng thực** làm việc (observation, ethnographic study).
- **Kiểm thử khả năng sử dụng (usability testing)** trên prototype.
- **Chuẩn đối sánh (benchmark)** với hệ thống hiện có hoặc đối thủ.

### Các thuộc tính vận hành khác cần cân nhắc

- **Localizability** — sản phẩm thích ứng với ngôn ngữ, tiền tệ, định dạng ngày, bảng chữ cái và quy ước văn hoá khác nhau dễ tới mức nào.
- **Maintainability** — sửa lỗi và thay đổi dễ tới mức nào **sau khi giao hàng**. Rất quan trọng vì phần lớn chi phí vòng đời phần mềm nằm ở bảo trì.
- **Supportability** — bộ phận hỗ trợ chẩn đoán và giải quyết vấn đề của người dùng dễ tới mức nào. Liên quan tới nhật ký chẩn đoán, thông báo lỗi có mã tra cứu, công cụ hỗ trợ từ xa.

---

## 7. Thuộc tính quan trọng với người phát triển

Những thuộc tính này **ít nhìn thấy với khách hàng nhưng ảnh hưởng lớn tới chi phí vòng đời**. Đội phát triển thường phải **chủ động nêu ra và biện luận** cho chúng.

### Efficiency (hiệu suất)

**Efficiency** đo mức độ hệ thống **sử dụng tài nguyên** — bộ xử lý, bộ nhớ, ổ đĩa, băng thông mạng, pin.

> **Đừng nhầm efficiency với performance.** Performance là **hệ thống phản hồi nhanh tới mức nào**; efficiency là **nó tiêu tốn bao nhiêu tài nguyên để làm điều đó**. Một hệ thống có thể nhanh nhưng ngốn tài nguyên (kém efficiency), hoặc tiết kiệm nhưng chậm.

Cách đặc tả: *"Ứng dụng không được chiếm quá 40% CPU trong hơn 5 giây liên tục"*, *"Không được dùng quá 512 MB RAM khi xử lý tệp 100 MB"*, *"Ứng dụng di động không được tiêu thụ quá 5% pin mỗi giờ khi chạy nền."*

**Efficiency đặc biệt quan trọng với hệ thống nhúng**, nơi tài nguyên phần cứng bị giới hạn nghiêm ngặt và không thể mở rộng.

### Modifiability (khả năng sửa đổi)

**Modifiability** đo mức độ dễ dàng **thêm, thay đổi hoặc loại bỏ chức năng** trong hệ thống. Nó phụ thuộc vào **cấu trúc mã, tài liệu, độ khớp nối giữa các module**.

Cách đặc tả: *"Việc thêm một loại báo cáo mới không được đòi hỏi thay đổi mã nguồn của bất kỳ module nào khác"*, *"Một lập trình viên quen thuộc với hệ thống phải thay đổi được quy tắc tính chiết khấu trong vòng 4 giờ."*

**Cách phổ biến để đạt modifiability: đưa business rule ra ngoài mã cứng**, vào bảng cấu hình hoặc rule engine, để thay đổi chúng không cần biên dịch lại.

### Portability (khả năng chuyển đổi)

**Portability** đo công sức cần thiết để **chuyển phần mềm sang môi trường vận hành khác** — hệ điều hành, nền tảng phần cứng, trình duyệt, cơ sở dữ liệu khác.

> **Portability phải được biết SỚM vì nó chi phối kiến trúc.** Nếu bạn biết ứng dụng cuối cùng sẽ phải chạy trên nhiều nền tảng, bạn sẽ **tách biệt mã phụ thuộc nền tảng** ngay từ đầu. Chuyển đổi một hệ thống chưa từng được thiết kế cho việc đó có thể **tốn kém tương đương viết lại**.

Cách đặc tả: *"Không quá 5% mã nguồn được phép phụ thuộc vào hệ điều hành cụ thể"*, *"Ứng dụng web phải hoạt động đầy đủ chức năng trên Chrome, Firefox, Safari và Edge phiên bản hiện tại và một phiên bản trước đó."*

### Reusability (khả năng tái sử dụng)

**Reusability** chỉ ra mức độ các thành phần có thể được **dùng lại trong hệ thống khác**. **Xây dựng thành phần tái sử dụng được tốn công hơn** — thường **tốn gấp hai tới ba lần** so với xây thành phần dùng một lần — nên chỉ đáng làm khi bạn **thực sự có kế hoạch tái sử dụng**.

> **Bẫy:** Đừng đặc tả reusability chỉ vì nó nghe hay. Hãy hỏi: **thành phần nào sẽ được dùng lại, ở đâu, và ai chịu trách nhiệm bảo trì nó như một tài sản dùng chung?**

### Scalability (khả năng mở rộng)

**Scalability** đo khả năng hệ thống **phát triển để đáp ứng nhu cầu tăng lên** — nhiều người dùng hơn, nhiều dữ liệu hơn, nhiều giao dịch hơn — **mà không suy giảm hiệu năng và không phải thiết kế lại**.

Cách đặc tả: *"Hệ thống phải hỗ trợ tăng từ 500 lên 5.000 người dùng đồng thời chỉ bằng cách bổ sung máy chủ ứng dụng, không thay đổi mã nguồn."*

**Hai hình thức:** **scale up (dọc)** — thêm tài nguyên vào một máy; **scale out (ngang)** — thêm nhiều máy. **Chúng đòi hỏi kiến trúc rất khác nhau**, nên hãy làm rõ bạn cần loại nào.

### Verifiability (khả năng kiểm chứng)

**Verifiability** — còn gọi là **testability** — chỉ ra mức độ dễ dàng **kiểm tra xem phần mềm có được hiện thực đúng hay không**.

Yếu tố ảnh hưởng: mức độ **logic phức tạp và lồng nhau**, khả năng **cô lập từng thành phần để kiểm thử**, sự tồn tại của **giao diện chẩn đoán và điểm kiểm tra (hooks)**.

Cách đặc tả: *"Mọi thành phần nghiệp vụ phải kiểm thử được độc lập với cơ sở dữ liệu thông qua giao diện được định nghĩa rõ"*, *"Hệ thống phải cung cấp chế độ mô phỏng cho phép tester đưa vào dữ liệu cảm biến giả lập."*

---

## 8. Đánh đổi giữa các quality attribute

> **Không thể tối ưu mọi quality attribute cùng lúc. Cải thiện một cái thường làm xấu đi cái khác.**

**Bảng đánh đổi thường gặp:**

| Tăng cường… | Thường làm giảm… | Vì sao |
|-------------|------------------|--------|
| **Security** | Usability, performance | Thêm bước xác thực, mã hoá tốn thời gian và làm phiền người dùng |
| **Performance** | Modifiability, portability, reusability | Tối ưu hoá thường gắn chặt mã với nền tảng cụ thể và làm mã khó hiểu |
| **Reusability** | Performance, efficiency | Thành phần tổng quát mang theo chi phí trừu tượng hoá |
| **Robustness** | Efficiency, performance | Kiểm tra lỗi và cơ chế phục hồi tiêu tốn tài nguyên |
| **Ease of learning** | Efficiency of use | Wizard dẫn dắt từng bước làm chậm người thành thạo |
| **Portability** | Performance, efficiency | Lớp trừu tượng nền tảng thêm chi phí và ngăn tối ưu hoá riêng cho từng nền tảng |
| **Verifiability** | Efficiency | Điểm kiểm tra và giao diện chẩn đoán thêm mã và chi phí |
| **Modifiability** | Performance | Cấu hình động và gián tiếp hoá chậm hơn mã cứng |

**Cách xử lý đánh đổi:**

**1. Xác định ưu tiên tương đối một cách tường minh.** SRS nên nêu rõ **thuộc tính nào quan trọng hơn thuộc tính nào** — chẳng hạn *"dễ dùng quan trọng hơn dễ học"*, hoặc *"bảo mật ưu tiên hơn hiệu năng"*.

**2. Đưa đánh đổi ra thảo luận với stakeholder.** Đừng để lập trình viên tự quyết định. **Người quyết định phải là người chịu hậu quả của quyết định đó.**

**3. Đặc tả ngưỡng, không đặc tả cực đại.** Thay vì *"nhanh nhất có thể"*, hãy nêu **mức tối thiểu chấp nhận được** và **mức mong muốn**. Điều này cho phép kiến trúc sư tìm điểm cân bằng.

**4. Nhận diện xung đột sớm.** Khi hai quality attribute mâu thuẫn trực tiếp, **hãy nêu vấn đề ngay ở giai đoạn yêu cầu** thay vì để nó nổ ra ở giai đoạn kiểm thử.

> **Ví dụ thực tế về đánh đổi phải đưa ra thảo luận:** Một hệ thống ngân hàng yêu cầu **đăng xuất tự động sau 3 phút không hoạt động** (bảo mật) trong khi bộ phận dịch vụ khách hàng phàn nàn rằng nhân viên **liên tục bị đăng xuất giữa cuộc gọi với khách** (khả năng sử dụng). **Giải pháp không nằm ở kỹ thuật mà ở việc stakeholder cùng quyết định mức rủi ro chấp nhận được** — cuối cùng họ chọn 15 phút cho máy trạm trong khu vực an toàn và 3 phút cho máy truy cập từ xa.

---

## 9. Planguage: đặc tả quality attribute một cách chính xác

Ngôn ngữ tự nhiên rất khó dùng để đặc tả quality attribute một cách chính xác. **Tom Gilb đã phát triển Planguage** — một **ngôn ngữ có từ khoá (keyword-driven language)** cho phép đặc tả quality attribute với **độ chính xác cao hơn nhiều**.

### Các từ khoá chính của Planguage

| Từ khoá | Ý nghĩa |
|---------|---------|
| **Tag** | Tên định danh ngắn, duy nhất cho yêu cầu |
| **Gist** | Mô tả ngắn gọn về yêu cầu |
| **Stakeholder** | Ai quan tâm tới yêu cầu này |
| **Scale** | **Đơn vị đo lường** dùng để lượng hoá thuộc tính |
| **Meter** | **Cách đo** — phương pháp hoặc công cụ dùng để lấy giá trị theo Scale |
| **Must** | **Mức tối thiểu bắt buộc phải đạt** — thất bại nếu không đạt |
| **Plan** | **Mức mục tiêu** mà đội hướng tới |
| **Wish** | **Mức lý tưởng** trong thế giới hoàn hảo — không cam kết |
| **Past** | Mức đạt được trong hệ thống hiện tại hoặc sản phẩm trước |
| **Trend** | Dự báo mức cần thiết trong tương lai |
| **Defined** | Định nghĩa các thuật ngữ dùng trong yêu cầu |

### Ví dụ đầy đủ

> **Tag:** Performance.SearchResponse
>
> **Gist:** Tốc độ trả về kết quả tìm kiếm hoá chất.
>
> **Stakeholder:** Chemist, Chemical Stockroom Staff.
>
> **Scale:** Số giây trôi qua từ khi người dùng gửi truy vấn tới khi kết quả đầu tiên hiển thị đầy đủ trên màn hình.
>
> **Meter:** Đo bằng công cụ giám sát hiệu năng trên 1.000 truy vấn ngẫu nhiên trong môi trường kiểm thử với 500 người dùng đồng thời mô phỏng; lấy phân vị thứ 95.
>
> **Must:** 5 giây.
>
> **Plan:** 2 giây.
>
> **Wish:** 0,5 giây.
>
> **Past:** 12 giây (hệ thống kế thừa hiện tại).

**Sức mạnh của cách này:**

- **Scale và Meter loại bỏ nhập nhằng** về việc đo cái gì và đo như thế nào. Không còn tranh cãi *"2 giây tính từ lúc nào tới lúc nào?"*
- **Must / Plan / Wish làm rõ ba mức khác nhau**, thay vì gộp tất cả vào một con số duy nhất mà không ai biết là bắt buộc hay mong muốn.
- **Past cho bối cảnh** — biết hệ thống cũ đạt 12 giây giúp đánh giá mức 2 giây có thực tế không.

> **Bạn không cần dùng Planguage cho mọi yêu cầu.** Hãy dùng nó cho **những quality attribute quan trọng nhất, rủi ro nhất và dễ gây tranh cãi nhất** — nơi mà sự chính xác thực sự tạo ra khác biệt.

**Nếu Planguage quá nặng nề với dự án của bạn, tối thiểu hãy luôn nêu ba điều:** **đo cái gì**, **dưới điều kiện nào**, và **ngưỡng chấp nhận là bao nhiêu**.

---

## 10. Quality attribute trong agile & quan hệ với business rule

### Trong dự án agile

Quality attribute đặt ra thách thức riêng cho agile, vì chúng **thường trải rộng qua nhiều user story** thay vì thuộc về một story cụ thể.

**Bốn cách xử lý thường gặp:**

**1. Viết thành constraint trên thẻ.** Nhiều đội ghi yêu cầu phi chức năng lên thẻ **không phải dưới dạng user story mà dưới dạng ràng buộc** áp dụng cho toàn bộ sản phẩm. Những thẻ này được dán ở nơi cả đội nhìn thấy trong mọi iteration.

**2. Đưa vào acceptance criteria của story liên quan.** Ví dụ, story về đăng nhập sẽ có acceptance test bảo đảm rằng **một số user class truy cập được chức năng còn số khác bị chặn** — đó chính là security requirement được đặc tả dưới dạng test.

**3. Đưa vào "definition of done".** Các thuộc tính áp dụng cho **mọi** story — như *"mọi trang phải tải trong 2 giây"* hoặc *"mọi mã mới phải đạt độ phủ kiểm thử 80%"* — thuộc về định nghĩa hoàn thành chung của đội.

**4. Viết story riêng cho công việc kiến trúc.** Khi một quality attribute đòi hỏi công việc kiến trúc đáng kể (chẳng hạn xây tầng caching để đạt yêu cầu performance), đội có thể tạo **story kỹ thuật riêng** và đưa vào backlog.

> **Rủi ro lớn nhất trong agile: quality attribute có ảnh hưởng kiến trúc bị phát hiện MUỘN.** Nếu tới iteration thứ mười bạn mới biết hệ thống phải hỗ trợ 10.000 người dùng đồng thời, việc trang bị thêm có thể **buộc phải làm lại phần lớn công việc đã hoàn thành**. **Hãy khai thác các quality attribute có ảnh hưởng kiến trúc SỚM**, ngay cả trên dự án agile.

### Quan hệ với business rule

**Nhiều quality attribute bắt nguồn trực tiếp từ business rule**, đặc biệt là:

- **Chính sách công ty** → yêu cầu bảo mật và quyền truy cập.
- **Quy định pháp luật** → yêu cầu bảo mật, quyền riêng tư, lưu trữ dữ liệu, khả năng kiểm toán.
- **Tiêu chuẩn ngành** → yêu cầu về khả năng liên tác và định dạng dữ liệu.
- **Thoả thuận mức dịch vụ (SLA)** với khách hàng → yêu cầu về availability và performance.

> **Lợi ích của việc truy về business rule: bạn có được LÝ DO cho yêu cầu.** Khi ai đó hỏi *"Vì sao hệ thống phải giữ nhật ký kiểm toán trong 7 năm?"*, câu trả lời **"vì quy định X yêu cầu"** mạnh hơn nhiều so với **"vì ai đó nghĩ vậy là tốt"**. Nó cũng cho bạn biết yêu cầu đó **có thể thương lượng hay không**.

---

## 11. Constraint: loại và cách đặc tả

**Constraint giới hạn các lựa chọn của nhà thiết kế và lập trình viên.** Không giống quality attribute — thứ bạn có thể đạt ở nhiều mức — **constraint là điều bạn phải tuân theo**.

### Bốn loại constraint

**1. Design constraint (ràng buộc thiết kế)**

- *"Giao diện phải tuân theo hướng dẫn phong cách thương hiệu của công ty."*
- *"Dữ liệu khách hàng phải được lưu trong cơ sở dữ liệu Oracle hiện có của doanh nghiệp."*
- *"Thông báo trạng thái phải hiển thị trên thanh trạng thái ở cuối cửa sổ, vì đó là nơi người dùng của ứng dụng hiện có đã quen nhìn."*

**2. Implementation constraint (ràng buộc hiện thực)**

- *"Hệ thống phải được phát triển bằng Java, phiên bản 8 trở lên."*
- *"Chỉ được dùng thư viện mã nguồn mở có giấy phép MIT hoặc Apache 2.0."*
- *"Mã nguồn phải tuân thủ tiêu chuẩn mã hoá nội bộ, tài liệu ENG-STD-042."*

**3. Ràng buộc từ môi trường vận hành**

- *"Ứng dụng phải chạy trên máy trạm Windows 10 hiện có với 8 GB RAM, không yêu cầu nâng cấp phần cứng."*
- *"Ứng dụng di động phải hoạt động trên kết nối 3G với băng thông tối thiểu 384 kbps."*

**4. Ràng buộc từ bên ngoài**

- *"Hệ thống phải tuân thủ quy định GDPR về xử lý dữ liệu cá nhân của công dân EU."*
- *"Sản phẩm phải đạt chứng nhận FDA Class II trước khi ra thị trường."*
- *"Việc lưu trữ dữ liệu tài chính phải tuân thủ chuẩn PCI DSS phiên bản 3.2.1."*

### Quy tắc vàng khi đặc tả constraint

> **Mỗi constraint PHẢI đi kèm lý do (rationale).**

Vì sao điều này quan trọng:

- **Lập trình viên cần biết constraint có còn hiệu lực không** khi hoàn cảnh thay đổi. Một ràng buộc *"phải dùng cơ sở dữ liệu Oracle"* vì lý do **giấy phép doanh nghiệp** có thể được xem lại khi giấy phép hết hạn; nhưng nếu lý do là **tích hợp với hệ thống kế thừa**, nó sẽ tồn tại lâu hơn.
- **Nó ngăn ràng buộc "ma"** — những hạn chế mà không ai nhớ vì sao lại có, nhưng cả đội vẫn tuân theo hàng năm trời.
- **Nó giúp phân biệt ràng buộc thật với sở thích cá nhân.** Nếu không ai nêu được lý do, có lẽ đó **không phải constraint**.

### Bẫy: ràng buộc thiết kế nguỵ trang thành yêu cầu

> **Người viết yêu cầu thường vô tình đưa quyết định thiết kế vào yêu cầu.** *"Hệ thống phải có nút Lưu ở góc trên bên phải"* trông giống một yêu cầu nhưng thực chất là **quyết định thiết kế**.
>
> **Ràng buộc thiết kế áp đặt không cần thiết, quá sớm, hoặc vì lý do sai sẽ làm bực bội lập trình viên và có thể dẫn tới thiết kế sản phẩm dưới mức tối ưu.**
>
> **Bài kiểm tra:** Hãy hỏi *"Vì sao?"* Nếu câu trả lời là một **lý do nghiệp vụ thật** — tính nhất quán với ứng dụng hiện có, tuân thủ tiêu chuẩn, kỳ vọng của người dùng — thì đó là **constraint hợp lệ, hãy ghi lại kèm lý do**. Nếu câu trả lời là *"vì tôi nghĩ vậy đẹp hơn"*, thì đó là **sở thích, hãy để nhà thiết kế quyết định**.

---

## Điểm cốt lõi

- **Yêu cầu chức năng mô tả hệ thống làm gì; quality attribute mô tả nó làm điều đó TỐT tới mức nào.**
- Quality attribute là thứ stakeholder **rất quan tâm nhưng hiếm khi nói ra** — bạn phải chủ động khai thác.
- Đừng hỏi *"cần nhanh tới mức nào"* — hãy hỏi về **kịch bản cụ thể** và **hậu quả khi không đạt**.
- **Quality attribute có ảnh hưởng rất lớn tới kiến trúc**; phát hiện muộn có thể buộc phải viết lại.
- Thuộc tính chia hai nhóm: **quan trọng với người dùng** (availability, performance, security, usability…) và **quan trọng với người phát triển** (modifiability, portability, verifiability…).
- **Mỗi chữ số 9 thêm vào availability làm chi phí tăng vọt** — 99% là 3,65 ngày ngừng hoạt động mỗi năm.
- **Integrity khác security:** integrity chống mất và hỏng dữ liệu; security chống truy cập trái phép.
- **Performance là hệ thống phản hồi nhanh tới mức nào; efficiency là nó tốn bao nhiêu tài nguyên.**
- Mức **reliability cần thiết phụ thuộc vào hậu quả của lỗi** — trò chơi và máy trợ tim rất khác nhau.
- **Safety requirement thường được viết dưới dạng những gì hệ thống KHÔNG được để xảy ra.**
- Với hệ thống **safety-critical, truy vết yêu cầu là bắt buộc**, không phải tuỳ chọn.
- *"Thân thiện với người dùng"* **không phải yêu cầu** — hãy dịch thành đặc tính quan sát và đo lường được.
- **Ease of learning và efficiency of use là hai mục tiêu khác nhau và thường mâu thuẫn.**
- **Portability phải được biết sớm** vì nó chi phối kiến trúc; trang bị thêm sau có thể tốn như viết lại.
- Xây thành phần **tái sử dụng được tốn gấp hai tới ba lần** — chỉ làm khi thực sự có kế hoạch dùng lại.
- **Scale up và scale out đòi hỏi kiến trúc rất khác nhau** — hãy làm rõ bạn cần loại nào.
- **Không thể tối ưu mọi thuộc tính cùng lúc**; SRS nên nêu rõ **ưu tiên tương đối**.
- **Đặc tả ngưỡng, không đặc tả cực đại** — nêu mức tối thiểu chấp nhận được và mức mong muốn.
- **Planguage** dùng **Scale** (đơn vị đo) và **Meter** (cách đo) để loại bỏ nhập nhằng, cùng **Must / Plan / Wish** cho ba mức.
- Trong agile, quality attribute thường thành **constraint trên thẻ, acceptance criteria, hoặc definition of done**.
- **Rủi ro lớn nhất trong agile là phát hiện muộn quality attribute có ảnh hưởng kiến trúc.**
- **Mỗi constraint phải đi kèm lý do** — nếu không ai nêu được lý do, có lẽ đó không phải constraint.

## Tóm tắt

- Quality attribute quyết định phần lớn **cảm nhận về chất lượng sản phẩm**, nhưng chúng ngầm định nên phải được **chủ động khai thác bằng câu hỏi cụ thể và danh sách kiểm**.
- Chọn ra **một số ít thuộc tính thực sự quan trọng** cho hệ thống này thay vì cố đặc tả tất cả.
- Với mỗi thuộc tính đã chọn, hãy nêu **đo cái gì, đo thế nào, dưới điều kiện nào, và ngưỡng chấp nhận là bao nhiêu** — Planguage cung cấp khung sẵn cho việc này.
- **Đưa các đánh đổi ra thảo luận với stakeholder**, vì người chịu hậu quả phải là người quyết định.
- **Khai thác sớm những thuộc tính có ảnh hưởng kiến trúc** trên mọi loại dự án, kể cả agile.
- **Phân biệt rõ quality attribute với constraint**, và luôn ghi lại **lý do** cho mỗi constraint.
