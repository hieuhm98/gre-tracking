# Tự động hoá quy trình, phân tích dữ liệu & hệ thống nhúng

## 1. Tự động hoá quy trình nghiệp vụ: bản chất và cạm bẫy

**Dự án tự động hoá quy trình nghiệp vụ (business process automation)** thay thế công việc thủ công bằng phần mềm, hoặc kết nối các bước rời rạc thành một luồng liền mạch.

### Cạm bẫy trung tâm

> **Nếu bạn tự động hoá một quy trình tồi, bạn sẽ có một quy trình tồi chạy nhanh hơn.**

Đây là bài học được lặp lại nhiều lần nhất trong lĩnh vực này. Nhiều tổ chức tiếp cận dự án tự động hoá bằng cách hỏi *"làm sao chúng ta viết phần mềm để làm những gì nhân viên đang làm bằng tay?"* — **và đó là câu hỏi sai**.

**Câu hỏi đúng: *"kết quả nghiệp vụ nào chúng ta cần đạt được, và cách tốt nhất để đạt nó với công nghệ hiện có là gì?"***

### Vì sao quy trình hiện tại thường không đáng sao chép

**Quy trình thủ công được hình thành dưới những ràng buộc mà phần mềm không có:**

- **Bước phê duyệt tồn tại vì không có cách nào khác để kiểm soát.** Với phần mềm, quy tắc có thể được thực thi tự động, và phê duyệt chỉ cần cho ngoại lệ.
- **Bước sao chép dữ liệu tồn tại vì các hệ thống không nói chuyện với nhau.** Tích hợp làm cả bước đó biến mất.
- **Bước tổng hợp và đối chiếu thủ công tồn tại vì không có báo cáo tự động.**
- **Trình tự tuần tự tồn tại vì giấy tờ chỉ ở một chỗ một lúc.** Phần mềm cho phép nhiều người làm song song.

> **Mỗi lần bạn thấy một bước trong quy trình hiện tại, hãy hỏi: *bước này tồn tại vì nhu cầu nghiệp vụ, hay vì hạn chế của cách làm cũ?*** Nếu là lý do thứ hai, **đừng tự động hoá nó — hãy loại bỏ nó.**

### Ba mức độ can thiệp

| Mức | Mô tả | Khi nào phù hợp |
|-----|-------|----------------|
| **Tự động hoá** | Giữ nguyên quy trình, thay thao tác thủ công bằng phần mềm | Quy trình đã hợp lý; cần kết quả nhanh; rủi ro tổ chức thấp |
| **Cải tiến (improvement)** | Điều chỉnh quy trình rồi mới tự động hoá | Có những bước rõ ràng là lãng phí; **lựa chọn thực dụng nhất trong đa số trường hợp** |
| **Tái thiết kế (reengineering)** | Thiết kế lại quy trình từ đầu dựa trên kết quả mong muốn | Quy trình hiện tại về căn bản không phù hợp; có sự bảo trợ mạnh từ lãnh đạo |

> **Lựa chọn này phải được đưa ra một cách CÓ Ý THỨC ngay từ đầu dự án**, vì nó quyết định phạm vi, ai cần tham gia, và mức độ thay đổi tổ chức bạn phải quản lý. **Nhiều dự án thất bại vì lãnh đạo nghĩ họ đang làm mức 1 trong khi đội thực sự đang làm mức 3.**

### Khía cạnh bị đánh giá thấp nhất: thay đổi tổ chức

**Tự động hoá quy trình luôn thay đổi công việc của con người.** Một số vai trò biến mất, một số vai trò thay đổi bản chất, một số người mất quyền kiểm soát mà họ từng có.

> **Hệ quả với công việc BA: sự kháng cự bạn gặp trong quá trình khai thác yêu cầu thường KHÔNG phải về phần mềm.** Khi một người quản lý liên tục thêm yêu cầu về báo cáo và phê duyệt, có thể họ đang cố **giữ lại quyền kiểm soát** mà quy trình mới lấy đi.
>
> **Hãy nhận diện điều này và xử lý nó một cách thẳng thắn nhưng tôn trọng.** Đóng gói một vấn đề tổ chức thành một yêu cầu phần mềm sẽ tạo ra phần mềm phức tạp hơn mà không giải quyết được vấn đề thật.

---

## 2. Mô hình hoá quy trình hiện tại và tương lai

### As-is và to-be

**Mô hình as-is** mô tả quy trình **như nó đang diễn ra hôm nay**. **Mô hình to-be** mô tả quy trình **như nó sẽ diễn ra sau khi có hệ thống mới**.

**Vì sao cần mô hình as-is:**

- Nó tạo **hiểu biết chung** — thường lần đầu tiên có ai đó vẽ ra toàn bộ quy trình đầu-cuối.
- Nó **bộc lộ lãng phí**: các bước lặp lại, chờ đợi, chuyển giao không cần thiết.
- Nó cho **cơ sở đo lường** để chứng minh cải tiến sau này.
- Nó **tiết lộ ai thực sự tham gia** — thường nhiều hơn ai cũng nghĩ.

> **Nhưng đừng đầu tư quá nhiều vào as-is.** Rủi ro rất thực: đội dành ba tháng vẽ mô hình as-is hoàn hảo tới từng chi tiết cho một quy trình sắp bị thay thế. **Hãy mô hình hoá as-is đủ để hiểu vấn đề và đo lường được, rồi chuyển sang to-be.**

**Dấu hiệu bạn đã đủ:** bạn có thể chỉ ra **những điểm đau cụ thể** và **định lượng chúng** — bao nhiêu thời gian, bao nhiêu lỗi, bao nhiêu chi phí.

### Đo lường quy trình

**Nếu bạn không đo được quy trình hiện tại, bạn không thể chứng minh cải tiến.**

**Các thước đo hữu ích:**

| Thước đo | Ý nghĩa |
|----------|---------|
| **Cycle time** | Tổng thời gian từ đầu tới cuối quy trình, bao gồm cả thời gian chờ |
| **Processing time** | Thời gian thực sự làm việc — thường chỉ chiếm một phần nhỏ của cycle time |
| **Tỷ lệ lỗi và làm lại** | Bao nhiêu phần trăm trường hợp phải quay lại bước trước |
| **Số lần chuyển giao (handoff)** | Mỗi lần chuyển giao là một cơ hội để chậm trễ và mất thông tin |
| **Chi phí mỗi giao dịch** | Cơ sở cho phân tích lợi ích |
| **Khối lượng và biến động** | Bao nhiêu giao dịch, và biến động theo mùa thế nào |

> **Con số thường gây sốc: trong nhiều quy trình, thời gian LÀM VIỆC thực sự chỉ chiếm một phần rất nhỏ của cycle time — phần còn lại là chờ đợi.**
>
> **Cái nhìn quan trọng: nếu 95% cycle time là chờ đợi, thì việc làm cho từng bước nhanh hơn 20% gần như không cải thiện gì. Loại bỏ việc chờ mới là chỗ có giá trị.** Đây là lý do đo lường trước khi thiết kế là thiết yếu.

### Xây dựng mô hình to-be

**Nguyên tắc thiết kế:**

- **Bắt đầu từ kết quả mong muốn**, rồi đi ngược lại.
- **Giảm số lần chuyển giao** — mỗi chuyển giao thêm độ trễ và rủi ro.
- **Đưa quyết định xuống mức thấp nhất có thể** — chỉ đẩy lên trên khi vượt ngưỡng.
- **Song song hoá những gì có thể** thay vì giữ trình tự tuần tự.
- **Xử lý trường hợp phổ biến một cách trơn tru, xử lý ngoại lệ riêng.** Đừng thiết kế toàn bộ quy trình quanh 5% trường hợp phức tạp.

> **Nguyên tắc cuối cùng đáng nhấn mạnh: rất nhiều quy trình bị làm chậm cho mọi người vì chúng được thiết kế để xử lý những ngoại lệ hiếm gặp.** Hãy tách luồng chính khỏi luồng ngoại lệ.

**Từ mô hình to-be tới yêu cầu:** với mỗi bước trong quy trình mới, hãy hỏi: hệ thống phải cung cấp chức năng gì để hỗ trợ bước này? Dữ liệu nào cần vào và ra? Business rule nào áp dụng? Ai được phép làm bước này? Điều gì xảy ra khi bước này thất bại?

---

## 3. Business rule, quy trình và tự động hoá

### Vì sao business rule là trung tâm của dự án tự động hoá

**Trong quy trình thủ công, business rule sống trong đầu con người.** Người có kinh nghiệm biết khi nào chấp nhận ngoại lệ, khi nào leo thang, khi nào áp dụng chiết khấu.

**Khi bạn tự động hoá, những quy tắc đó phải được làm cho TƯỜNG MINH** — và đây thường là phần khó nhất của dự án.

> **Điều bạn sẽ khám phá ra:**
>
> - **Các quy tắc mâu thuẫn nhau.** Hai phòng ban áp dụng quy tắc khác nhau cho cùng tình huống, và cả hai đều tin mình đúng.
> - **Các quy tắc không ai biết nguồn gốc.** *"Chúng tôi luôn làm thế"* — nhưng không ai biết vì sao, hoặc nó có còn hợp lệ không.
> - **Các quy tắc thực tế khác quy tắc chính thức.** Chính sách nói một đằng; thực tế làm một nẻo. **Bạn phải quyết định tự động hoá cái nào — và đó là quyết định của lãnh đạo, không phải của BA.**
> - **Các ngoại lệ được xử lý bằng phán đoán con người.** Không phải mọi thứ đều tự động hoá được, và một số thứ **không nên** tự động hoá.

### Nguyên tắc tách quy tắc khỏi quy trình

> **Business rule thay đổi thường xuyên hơn quy trình, và quy trình thay đổi thường xuyên hơn kiến trúc.**

**Hệ quả thiết kế: hãy giữ business rule ở nơi có thể thay đổi mà không cần lập trình lại** — bảng cấu hình, rule engine, hoặc ít nhất là một module tập trung.

**Vì sao điều này quan trọng với BA:** khi bạn ghi lại một business rule, hãy ghi kèm:

- **Nguồn gốc** — chính sách nào, quy định nào, ai quyết định?
- **Mức độ ổn định** — nó có thay đổi hằng quý không?
- **Ai có thẩm quyền thay đổi nó?**
- **Ngoại lệ được xử lý thế nào?**

**Thông tin này quyết định kiến trúc.** Một quy tắc thay đổi mỗi tháng phải được đưa vào cấu hình; một quy tắc chưa đổi trong 20 năm có thể mã hoá cứng.

### Xử lý ngoại lệ và can thiệp của con người

**Không tự động hoá được 100% — và cố làm vậy thường là sai lầm.**

**Ba câu hỏi thiết kế:**

**1. Trường hợp nào hệ thống tự xử lý được?** Đây phải là đa số áp đảo, nếu không lợi ích tự động hoá bị mất.

**2. Trường hợp nào cần con người quyết định?** Hệ thống phải **đưa chúng ra một cách rõ ràng** cùng đủ ngữ cảnh để người đó quyết định nhanh.

**3. Con người có thể ghi đè quyết định của hệ thống không?** Nếu có, **ai được phép, trong trường hợp nào, và việc đó có được ghi nhật ký không?**

> **Yêu cầu thường bị bỏ sót: khả năng xử lý ngoại lệ và audit trail cho mọi can thiệp thủ công.** Nếu không có, quy trình tự động sẽ **bị bế tắc** ở trường hợp đầu tiên nó không lường trước — và người dùng sẽ quay lại làm thủ công bên ngoài hệ thống.

---

## 4. Business analytics: khác biệt cơ bản với hệ thống giao dịch

**Dự án business analytics** xây dựng khả năng **phân tích dữ liệu để hỗ trợ ra quyết định** — data warehouse, báo cáo, dashboard, mô hình dự báo.

### Khác biệt căn bản

| | Hệ thống giao dịch (OLTP) | Hệ thống phân tích (OLAP) |
|---|--------------------------|---------------------------|
| **Mục đích** | Ghi nhận điều đang xảy ra | Hiểu điều đã xảy ra và dự đoán điều sắp xảy ra |
| **Người dùng** | Nhân viên vận hành | Nhà phân tích, quản lý, lãnh đạo |
| **Thao tác chính** | Nhiều ghi nhỏ, đọc nhỏ | Ít truy vấn nhưng quét khối lượng lớn |
| **Yêu cầu chính** | Tính toàn vẹn giao dịch, đồng thời | Khả năng truy vấn linh hoạt, hiệu năng đọc |
| **Bản chất yêu cầu** | *"Hệ thống phải làm gì"* | *"Người dùng cần trả lời câu hỏi gì"* |

### Vì sao yêu cầu cho analytics khó hơn

> **Trong hệ thống giao dịch, bạn có thể liệt kê chức năng. Trong analytics, người dùng thường KHÔNG BIẾT họ sẽ hỏi câu hỏi gì cho tới khi họ nhìn thấy dữ liệu.**

**Bản chất của công việc phân tích là khám phá.** Một câu trả lời dẫn tới ba câu hỏi mới. **Bạn không thể đặc tả trước toàn bộ tập truy vấn.**

**Hệ quả với cách tiếp cận yêu cầu:**

- **Tập trung vào QUYẾT ĐỊNH, không tập trung vào báo cáo.** Câu hỏi khai thác đúng không phải *"bạn cần báo cáo gì?"* mà ***"bạn phải đưa ra quyết định nào, và thông tin nào giúp bạn quyết định tốt hơn?"***
- **Đặc tả DỮ LIỆU SẴN CÓ và KHẢ NĂNG TRUY VẤN, không chỉ đặc tả báo cáo cụ thể.** Người dùng sẽ cần những truy vấn bạn chưa nghĩ tới.
- **Ưu tiên khả năng tự phục vụ (self-service).** Nếu mỗi câu hỏi mới đòi hỏi một yêu cầu phát triển kéo dài ba tuần, hệ thống analytics đã thất bại.

> **Câu hỏi khai thác mạnh nhất trong dự án analytics: *"Nếu bạn biết được điều X, bạn sẽ LÀM gì khác đi?"***
>
> Nếu câu trả lời là *"tôi cũng không chắc"* hoặc *"cũng không làm gì khác"*, thì **thông tin đó có lẽ không đáng đầu tư để thu thập** — dù nó nghe rất thú vị. **Đây là bộ lọc mạnh nhất chống lại việc xây dựng dashboard đẹp mà không ai dùng.**

---

## 5. Yêu cầu cho dự án phân tích dữ liệu

### Sáu nhóm câu hỏi cần trả lời

**1. Quyết định và người ra quyết định**

- Quyết định nào sẽ được hỗ trợ? Ai đưa ra chúng? Bao lâu một lần?
- Hiện tại họ ra quyết định dựa trên gì? Điều gì còn thiếu?
- **Hành động nào sẽ được thực hiện dựa trên thông tin này?**

**2. Chỉ số và định nghĩa**

- Những chỉ số nào cần được tính? **Công thức chính xác là gì?**

> **Đây là nơi các dự án analytics thất bại nhiều nhất.** Ba phòng ban đều báo cáo *"doanh thu"* và cho ba con số khác nhau, vì mỗi bên định nghĩa nó khác nhau: có tính hàng trả lại không? Có tính thuế không? Ghi nhận khi đặt hàng hay khi giao hàng?
>
> **Việc thống nhất định nghĩa chỉ số là công việc phân tích nghiệp vụ THUẦN TUÝ và thường là phần giá trị nhất mà BA mang lại cho dự án analytics.**

**3. Chiều phân tích (dimension)**

- Người dùng cần **cắt lát dữ liệu** theo những chiều nào — thời gian, khu vực, sản phẩm, kênh, phân khúc khách hàng?
- Mỗi chiều có **cấp bậc phân cấp** nào — ngày → tuần → tháng → quý → năm?

**4. Nguồn dữ liệu và tính khả dụng**

- Dữ liệu đến từ hệ thống nào? Ai sở hữu nó?
- **Dữ liệu cần thiết có thực sự TỒN TẠI không?** Đôi khi câu trả lời là không — và đó là phát hiện thay đổi phạm vi dự án.
- Chất lượng dữ liệu nguồn thế nào?

**5. Độ tươi và độ trễ (latency)**

- Dữ liệu cần được cập nhật bao lâu một lần — thời gian thực, hằng giờ, hằng đêm, hằng tuần?

> **Đây là một trong những đòn bẩy chi phí lớn nhất trong dự án analytics.** Người dùng theo bản năng sẽ nói *"thời gian thực"*. Nhưng chuyển từ cập nhật hằng đêm sang thời gian thực có thể **nhân chi phí kiến trúc lên nhiều lần**.
>
> **Cách hỏi đúng: *"Nếu dữ liệu cũ 24 giờ, bạn sẽ ra quyết định sai như thế nào?"*** Câu trả lời thường tiết lộ rằng hằng đêm là hoàn toàn đủ.

**6. Lịch sử và lưu giữ**

- Cần bao nhiêu năm dữ liệu lịch sử để phân tích xu hướng?
- Điều gì xảy ra khi **định nghĩa thay đổi theo thời gian** — chẳng hạn khi cấu trúc phòng ban được tổ chức lại? **Dữ liệu cũ có được tính lại theo cấu trúc mới không?** Đây là câu hỏi khó và thường bị bỏ qua cho tới khi quá muộn.

---

## 6. Data warehouse, chất lượng dữ liệu & quản trị

### Vì sao chất lượng dữ liệu là rủi ro số một

> **Trong dự án analytics, chất lượng dữ liệu nguồn quyết định thành công nhiều hơn bất kỳ yếu tố kỹ thuật nào.**

**Vì sao vấn đề chỉ lộ ra khi làm analytics:**

Hệ thống giao dịch có thể vận hành hoàn toàn ổn với dữ liệu không nhất quán, vì mỗi giao dịch được xử lý riêng lẻ. **Chỉ khi bạn tổng hợp hàng triệu bản ghi thì sự không nhất quán mới trở nên rõ ràng và gây ra con số sai.**

**Các vấn đề điển hình:**

- **Trường tuỳ chọn không được điền** ở phần lớn bản ghi → phân tích theo chiều đó vô nghĩa.
- **Cùng thực thể xuất hiện nhiều lần** với tên khác nhau → đếm khách hàng bị sai.
- **Đơn vị và định dạng không nhất quán** giữa các hệ thống nguồn.
- **Thay đổi ý nghĩa theo thời gian** — một mã trạng thái được tái sử dụng cho mục đích khác từ năm 2018.

> **Yêu cầu thiết yếu nhưng thường bị bỏ sót: hệ thống phải cho biết dữ liệu nào KHÔNG đáng tin.** Một báo cáo hiển thị con số mà không cho biết nó dựa trên 40% bản ghi thiếu dữ liệu thì **tệ hơn là không có báo cáo** — vì nó tạo ra sự tự tin sai lầm.

### Quản trị dữ liệu (data governance)

**Dự án analytics thường bộc lộ rằng tổ chức không có quản trị dữ liệu — và không thể tiến xa nếu không xây dựng nó.**

**Các yếu tố cần thiết:**

- **Data owner** — ai chịu trách nhiệm về chất lượng và định nghĩa của mỗi tập dữ liệu?
- **Định nghĩa chuẩn cấp doanh nghiệp** — một *"khách hàng"* nghĩa là gì trên toàn công ty?
- **Quy trình thay đổi định nghĩa** — khi cách tính một chỉ số thay đổi, ai phê duyệt và ai được thông báo?
- **Nguồn tin cậy duy nhất (single source of truth)** — khi hai hệ thống bất đồng, cái nào thắng?

> **Phạm vi cần được thoả thuận rõ ngay từ đầu: dự án analytics của bạn có bao gồm việc THIẾT LẬP quản trị dữ liệu, hay chỉ TIÊU THỤ dữ liệu như nó đang có?**
>
> **Nhiều dự án analytics vượt ngân sách nghiêm trọng vì câu hỏi này không được trả lời từ đầu**, và đội phát hiện giữa chừng rằng họ phải giải quyết các vấn đề dữ liệu tồn tại từ mười năm trước.

### Yêu cầu về bảo mật và quyền riêng tư

**Analytics tập trung dữ liệu từ nhiều nguồn — điều này tạo ra rủi ro bảo mật mới.**

- **Ai được xem dữ liệu nào?** Một quản lý khu vực có được xem dữ liệu của khu vực khác không?
- **Có cần ẩn danh hoá hoặc giả danh hoá dữ liệu cá nhân không?**
- **Việc kết hợp nhiều nguồn có tạo ra rủi ro nhận dạng lại không?** Dữ liệu ẩn danh trong từng nguồn có thể **không còn ẩn danh** khi kết hợp.
- **Quy định nào áp dụng** — GDPR, quy định ngành, chính sách nội bộ?

---

## 7. Hệ thống nhúng & thời gian thực: đặc điểm

**Hệ thống nhúng** là phần mềm chạy bên trong một thiết bị — ô tô, thiết bị y tế, máy công nghiệp, thiết bị gia dụng, thiết bị mạng.

### Năm đặc điểm khiến chúng khác biệt

**1. Phần mềm chỉ là một phần của sản phẩm.** Yêu cầu phải được **phân bổ giữa phần cứng, phần mềm và cơ khí** — và quyết định đó có hệ quả lớn về chi phí và tính linh hoạt.

> **Nguyên tắc phân bổ: những gì có thể thay đổi sau khi xuất xưởng nên nằm ở phần mềm; những gì đòi hỏi hiệu năng hoặc độ tin cậy cực cao thường nằm ở phần cứng.** Nhưng lưu ý: **quyết định này thường phải đưa ra rất sớm**, trước khi bạn hiểu đầy đủ vấn đề — đây là một trong những thách thức lớn nhất của phát triển nhúng.

**2. Ràng buộc tài nguyên nghiêm ngặt.** Bộ nhớ, bộ xử lý, năng lượng đều bị giới hạn và **không thể mở rộng sau khi sản phẩm xuất xưởng**.

**3. Ràng buộc thời gian thực.** Hệ thống phải phản hồi **trong một khoảng thời gian xác định**.

> **Phân biệt quan trọng:**
> - **Hard real-time:** trễ hạn = **thất bại hệ thống**. Túi khí bung sau 200 mili-giây thay vì 20 là vô dụng — hoặc nguy hiểm.
> - **Soft real-time:** trễ hạn = **suy giảm chất lượng** nhưng vẫn chấp nhận được. Video bị giật một khung hình.
>
> **Bạn phải xác định rõ mỗi ràng buộc thời gian thuộc loại nào**, vì chúng dẫn tới kiến trúc hoàn toàn khác nhau.

**4. Không thể vá dễ dàng.** Với phần mềm web, bạn sửa lỗi và triển khai trong ngày. Với thiết bị đã bán ra thị trường, việc cập nhật có thể **cực kỳ tốn kém, chậm chạp, hoặc bất khả thi**.

> **Hệ quả trực tiếp: chi phí của một lỗi yêu cầu trong hệ thống nhúng cao hơn NHIỀU BẬC so với phần mềm doanh nghiệp.** Điều này biện minh cho mức đầu tư lớn hơn nhiều vào kỹ thuật yêu cầu — đặc tả kỹ hơn, review chặt hơn, mô hình hoá nhiều hơn.

**5. Tương tác với thế giới vật lý.** Cảm biến, cơ cấu chấp hành, nhiệt độ, rung động, nhiễu điện từ. **Thế giới vật lý không lịch sự và không tuân theo giả định của bạn.**

---

## 8. Khai thác yêu cầu cho hệ thống nhúng

### Vì sao use case thường không đủ

> **Với nhiều hệ thống nhúng, "người dùng" chính không phải con người mà là các THIẾT BỊ và TÍN HIỆU khác.**

Một bộ điều khiển động cơ không có use case theo nghĩa thông thường. Nó phản ứng với **cảm biến, tín hiệu điều khiển, và điều kiện môi trường** — hàng nghìn lần mỗi giây.

**Các kỹ thuật phù hợp hơn:**

| Kỹ thuật | Vì sao phù hợp |
|----------|---------------|
| **Event-response table** | Nắm bắt trực tiếp *"khi sự kiện X xảy ra ở trạng thái Y, hệ thống làm Z"* |
| **State-transition diagram** | Hệ thống nhúng thường là máy trạng thái theo đúng nghĩa đen |
| **Decision table** | Logic điều khiển phức tạp với nhiều tổ hợp điều kiện |
| **Biểu đồ thời gian (timing diagram)** | Thể hiện ràng buộc thời gian giữa các sự kiện |
| **Context diagram** | Xác định mọi tín hiệu và giao diện vượt qua ranh giới hệ thống |

### Các loại yêu cầu đặc thù

**1. Yêu cầu về giao diện phần cứng.** Mỗi cảm biến và cơ cấu chấp hành cần được đặc tả: **dải giá trị, độ phân giải, tần suất lấy mẫu, đơn vị, độ chính xác, hành vi khi vượt dải, hành vi khi thiết bị hỏng.**

**2. Yêu cầu về thời gian.** Không chỉ *"phải nhanh"* mà: **thời gian phản hồi tối đa, độ trễ, jitter cho phép, tần suất lấy mẫu, thứ tự bắt buộc giữa các thao tác.**

**3. Yêu cầu về chế độ vận hành.** Hầu hết hệ thống nhúng có nhiều chế độ: **khởi động, vận hành bình thường, hiệu chuẩn, bảo trì, chế độ suy giảm, tắt máy, khẩn cấp.** Mỗi chế độ có tập hành vi riêng, và **các chuyển đổi giữa chúng phải được đặc tả đầy đủ**.

**4. Yêu cầu về xử lý lỗi và chế độ suy giảm.**

> **Đây là chỗ hệ thống nhúng đòi hỏi nhiều hơn phần mềm doanh nghiệp một cách đáng kể.** Câu hỏi bắt buộc phải trả lời cho **mọi** thành phần: *điều gì xảy ra khi cảm biến này hỏng, khi giá trị này nằm ngoài dải, khi mất nguồn giữa chừng, khi bộ nhớ bị lỗi?*
>
> **Trong ứng dụng doanh nghiệp bạn có thể hiện thông báo lỗi và để người dùng thử lại. Trong hệ thống nhúng, có thể không có ai để thông báo — hệ thống phải TỰ quyết định phải làm gì.**

**5. Yêu cầu về khởi động và tắt máy.** Bao lâu để sẵn sàng? Trạng thái an toàn khi mất điện đột ngột là gì? Dữ liệu nào phải được bảo toàn?

**6. Yêu cầu về chẩn đoán và bảo trì.** Kỹ thuật viên hiện trường cần gì để chẩn đoán sự cố? Nhật ký nào được lưu và lấy ra thế nào?

### Ai là stakeholder

**Danh sách stakeholder rộng hơn nhiều so với phần mềm doanh nghiệp:**

- Kỹ sư phần cứng, cơ khí, điện tử.
- Kỹ sư sản xuất — sản phẩm phải **chế tạo được và kiểm tra được trên dây chuyền**.
- Kỹ thuật viên bảo trì hiện trường.
- Chuyên gia tuân thủ quy định và chứng nhận.
- Bộ phận an toàn.
- Người dùng cuối và người vận hành.

> **Yêu cầu về khả năng kiểm tra trong sản xuất là loại yêu cầu bị bỏ sót thường xuyên nhất trong dự án nhúng.** Nếu không có chế độ tự kiểm tra hoặc giao diện kiểm tra, **mỗi thiết bị trên dây chuyền không thể được xác minh** — phát hiện điều này sau khi thiết kế đã hoàn tất là cực kỳ tốn kém.

---

## 9. An toàn, chứng nhận và ràng buộc phần cứng

### Yêu cầu an toàn

**Với hệ thống có thể gây hại cho con người, tài sản hoặc môi trường, an toàn không phải một quality attribute trong số nhiều cái — nó là ràng buộc chi phối tất cả.**

**Quy trình chuẩn:**

**1. Phân tích rủi ro (hazard analysis).** Xác định **điều gì có thể sai** và **hậu quả**. Các kỹ thuật gồm FMEA (phân tích chế độ hỏng hóc và tác động) và fault tree analysis.

**2. Đánh giá mức độ nghiêm trọng và xác suất** của mỗi hazard.

**3. Xác định biện pháp giảm nhẹ**, và **mỗi biện pháp trở thành một yêu cầu an toàn**.

**4. Truy vết mỗi yêu cầu an toàn** tới thiết kế, mã và test chứng minh nó được hiện thực.

> **Với hệ thống safety-critical, truy vết yêu cầu là BẮT BUỘC VỀ MẶT PHÁP LÝ, không phải một thực hành tốt tuỳ chọn.** Bạn phải **chứng minh** với cơ quan chứng nhận rằng mỗi yêu cầu an toàn được hiện thực và kiểm chứng.

**Đặc điểm của yêu cầu an toàn:**

- Chúng thường mô tả những gì hệ thống **KHÔNG được để xảy ra**.
- Chúng thường yêu cầu **dự phòng (redundancy)** hoặc **cơ chế độc lập** — hai cảm biến độc lập, một mạch khoá phần cứng.
- Chúng định nghĩa **trạng thái an toàn (fail-safe state)** mà hệ thống chuyển sang khi có sự cố.
- Chúng thường có **ràng buộc thời gian cứng** — *"trong vòng 500 mili-giây"*.

### Chứng nhận và tuân thủ quy định

**Nhiều hệ thống nhúng phải được chứng nhận trước khi bán:** thiết bị y tế (FDA, MDR), ô tô (ISO 26262), hàng không (DO-178C), thiết bị công nghiệp (IEC 61508), thiết bị điện (CE, UL).

**Hệ quả với công việc yêu cầu:**

- **Bản thân tiêu chuẩn tạo ra yêu cầu**, cả về sản phẩm lẫn về quy trình bạn phải tuân theo.
- **Bằng chứng phải được tạo ra trong suốt dự án**, không phải lắp ghép ở cuối. **Cố tái tạo tài liệu truy vết sau khi hoàn thành là cực kỳ tốn kém và thường thất bại.**
- **Thay đổi sau khi chứng nhận có thể đòi hỏi chứng nhận lại** — điều này ảnh hưởng mạnh tới cách bạn lập kế hoạch phát hành.

> **Bài học lập kế hoạch: hãy xác định yêu cầu chứng nhận NGAY TỪ ĐẦU dự án.** Chúng ảnh hưởng tới quy trình, tài liệu, kiến trúc và lịch trình. **Phát hiện muộn rằng bạn cần chứng nhận là một trong những cú sốc phạm vi đắt giá nhất có thể xảy ra.**

### Ràng buộc phần cứng và sự đồng phát triển

**Trong dự án nhúng, phần cứng và phần mềm thường được phát triển song song** — điều này tạo ra thách thức riêng:

- **Phần mềm phải được viết trước khi phần cứng tồn tại**, dùng mô phỏng hoặc bo mạch phát triển.
- **Đặc tả phần cứng thay đổi** trong quá trình phát triển, ảnh hưởng tới giả định của phần mềm.
- **Giao diện giữa phần cứng và phần mềm phải được đặc tả cực kỳ rõ** và được quản lý như một baseline chính thức.

> **Yêu cầu về giao diện phần cứng - phần mềm (HSI) xứng đáng có tài liệu riêng và quy trình kiểm soát thay đổi riêng**, vì mỗi thay đổi ở đó ảnh hưởng tới cả hai đội và thường tới cả nhà cung cấp bên ngoài.

**Ràng buộc chi phí đơn vị:** trong sản phẩm sản xuất hàng loạt, **thêm một con chip 50 xu nhân với một triệu đơn vị là 500.000 đô la**. Điều này tạo áp lực khổng lồ lên việc dùng phần cứng tối thiểu — và **đẩy độ phức tạp sang phần mềm**, nơi chi phí biên bằng không.

---

## 10. Bài học chung cho ba loại dự án chuyên biệt

### Điểm chung

**1. Yêu cầu chức năng không phải phần khó.** Trong cả ba bối cảnh, **phần khó nằm ở chỗ khác**:

- Trong tự động hoá quy trình: **business rule ngầm và thay đổi tổ chức**.
- Trong analytics: **định nghĩa chỉ số và chất lượng dữ liệu**.
- Trong hệ thống nhúng: **ràng buộc thời gian, xử lý lỗi và an toàn**.

**2. Kỹ thuật biểu diễn phải khớp với loại vấn đề.**

> Use case và user story phục vụ tốt cho phần mềm hướng người dùng. **Nhưng swimlane diagram tốt hơn cho quy trình, mô hình chiều tốt hơn cho analytics, và event-response table cùng state diagram tốt hơn cho hệ thống nhúng.** Đây là ứng dụng trực tiếp của nguyên tắc **chọn biểu diễn theo loại thông tin**.

**3. Điều bị bỏ sót nhiều nhất là hành vi ngoại lệ.** Trong cả ba loại dự án, câu hỏi *"điều gì xảy ra khi mọi thứ không diễn ra như mong đợi"* là câu hỏi phân biệt đặc tả tốt với đặc tả tồi.

**4. Chi phí của một lỗi yêu cầu thay đổi rất nhiều theo bối cảnh** — và **mức đầu tư vào kỹ thuật yêu cầu phải tương xứng**.

> Một lỗi yêu cầu trong dashboard nội bộ có thể được sửa trong một tuần. Cùng lỗi đó trong thiết bị y tế đã bán ra có thể nghĩa là **thu hồi sản phẩm, phạt của cơ quan quản lý, và tổn hại tới con người**.
>
> **Đây là nguyên tắc bao trùm: hãy điều chỉnh mức độ nghiêm ngặt của công việc yêu cầu theo HẬU QUẢ CỦA VIỆC SAI, không theo sở thích cá nhân hay quy định cứng nhắc của tổ chức.**

### Bài học riêng

| Loại dự án | Bài học quan trọng nhất |
|-----------|------------------------|
| **Tự động hoá quy trình** | **Tự động hoá quy trình tồi cho bạn quy trình tồi chạy nhanh hơn** — hãy hỏi mỗi bước tồn tại vì nhu cầu hay vì hạn chế cũ |
| **Business analytics** | **Hỏi "nếu biết điều X, bạn sẽ làm gì khác đi"** — và thống nhất định nghĩa chỉ số trước khi xây bất cứ thứ gì |
| **Hệ thống nhúng** | **Chi phí của lỗi cao hơn nhiều bậc**, nên hãy đầu tư tương ứng vào đặc tả trạng thái, thời gian, ngoại lệ và an toàn |

---

## Điểm cốt lõi

- **Tự động hoá một quy trình tồi cho bạn một quy trình tồi chạy nhanh hơn.**
- Với mỗi bước hiện có, hãy hỏi **nó tồn tại vì nhu cầu nghiệp vụ hay vì hạn chế của cách làm cũ** — nếu là lý do thứ hai, hãy loại bỏ nó.
- **Chọn mức can thiệp — tự động hoá, cải tiến, hay tái thiết kế — một cách có ý thức ngay từ đầu.**
- **Sự kháng cự trong khai thác yêu cầu thường không phải về phần mềm** mà về quyền kiểm soát bị mất.
- **Đừng đầu tư quá nhiều vào mô hình as-is** cho một quy trình sắp bị thay thế.
- **Nếu 95% cycle time là chờ đợi, làm mỗi bước nhanh hơn 20% gần như không cải thiện gì.**
- **Tách luồng chính khỏi luồng ngoại lệ** — nhiều quy trình chậm cho mọi người vì được thiết kế quanh 5% trường hợp hiếm.
- Khi tự động hoá, **business rule ngầm phải được làm tường minh** — và bạn sẽ phát hiện chúng mâu thuẫn nhau.
- **Quy tắc thực tế thường khác quy tắc chính thức** — chọn tự động hoá cái nào là quyết định của lãnh đạo.
- **Business rule thay đổi thường xuyên hơn quy trình**, nên hãy giữ chúng ở nơi thay đổi được mà không lập trình lại.
- **Yêu cầu về xử lý ngoại lệ và audit trail cho can thiệp thủ công thường bị bỏ sót** — thiếu chúng, người dùng quay lại làm thủ công bên ngoài hệ thống.
- Trong analytics, **người dùng không biết họ sẽ hỏi gì cho tới khi nhìn thấy dữ liệu**.
- Câu hỏi khai thác mạnh nhất: ***"Nếu biết được điều X, bạn sẽ LÀM gì khác đi?"***
- **Thống nhất định nghĩa chỉ số là phần giá trị nhất mà BA mang lại cho dự án analytics.**
- **"Thời gian thực" là đòn bẩy chi phí lớn nhất** — hãy hỏi *"nếu dữ liệu cũ 24 giờ, bạn sẽ quyết định sai thế nào?"*
- **Chất lượng dữ liệu nguồn quyết định thành công analytics hơn bất kỳ yếu tố kỹ thuật nào.**
- **Báo cáo không cho biết dữ liệu nào không đáng tin thì tệ hơn không có báo cáo** — nó tạo tự tin sai lầm.
- **Hãy thoả thuận rõ từ đầu: dự án có bao gồm thiết lập quản trị dữ liệu hay chỉ tiêu thụ dữ liệu như nó đang có?**
- Trong hệ thống nhúng, **phần mềm chỉ là một phần của sản phẩm** — yêu cầu phải được phân bổ giữa phần cứng và phần mềm.
- **Hard real-time nghĩa là trễ hạn là thất bại; soft real-time nghĩa là suy giảm chất lượng** — chúng dẫn tới kiến trúc khác nhau.
- **Chi phí của một lỗi yêu cầu nhúng cao hơn nhiều bậc** so với phần mềm doanh nghiệp, vì không thể vá dễ dàng.
- Với hệ thống nhúng, **use case thường không đủ** — hãy dùng event-response table, state diagram và decision table.
- **Trong hệ thống nhúng có thể không có ai để báo lỗi** — hệ thống phải tự quyết định phải làm gì.
- **Yêu cầu về khả năng kiểm tra trong sản xuất bị bỏ sót thường xuyên nhất** trong dự án nhúng.
- Với hệ thống safety-critical, **truy vết yêu cầu là bắt buộc về mặt pháp lý**, không phải tuỳ chọn.
- **Bằng chứng chứng nhận phải được tạo ra trong suốt dự án**, không lắp ghép ở cuối.
- **Hãy điều chỉnh mức nghiêm ngặt của công việc yêu cầu theo HẬU QUẢ CỦA VIỆC SAI.**

## Tóm tắt

- Ba loại dự án chuyên biệt này đòi hỏi **cùng những nguyên tắc yêu cầu nền tảng nhưng với trọng tâm và kỹ thuật khác nhau**.
- Trong **tự động hoá quy trình**, hãy đo lường trước khi thiết kế, tách nhu cầu khỏi hạn chế cũ, và làm business rule trở nên tường minh.
- Trong **business analytics**, hãy bắt đầu từ quyết định chứ không từ báo cáo, thống nhất định nghĩa chỉ số, và coi chất lượng dữ liệu là rủi ro số một.
- Trong **hệ thống nhúng**, hãy đặc tả trạng thái, thời gian, giao diện phần cứng, hành vi lỗi và yêu cầu an toàn với mức nghiêm ngặt cao hơn nhiều.
- Xuyên suốt cả ba: **chọn kỹ thuật biểu diễn theo loại vấn đề, tập trung vào hành vi ngoại lệ, và đầu tư vào yêu cầu tương xứng với hậu quả của việc sai.**
