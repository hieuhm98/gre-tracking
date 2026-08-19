# Quản lý phạm vi & thay đổi

## 1. Phạm vi là gì và vì sao nó trượt

> **Phạm vi là ranh giới của dự án: những gì sẽ được làm, và quan trọng không kém, những gì sẽ KHÔNG được làm.**

**Phần thứ hai bị bỏ qua gần như luôn luôn.** Một tài liệu phạm vi chỉ liệt kê những gì sẽ làm thì **mọi thứ không được nhắc tới đều là vùng tranh chấp** — khách hàng cho rằng nó có trong đó, đội cho rằng không.

**Bốn nguồn khiến phạm vi trượt:**

**1. Yêu cầu không rõ từ đầu.** *"Hệ thống phải có báo cáo"* — bao nhiêu báo cáo? Xuất được không? Lọc theo gì? **Mỗi câu chưa rõ là một khoảng trống mà thực tế sẽ tự lấp bằng cách tốn kém nhất.**

**2. Thay đổi không đi qua quy trình.** Một lập trình viên nhận yêu cầu trực tiếp từ người dùng qua chat và cứ thế làm. **Không có ai xấu ở đây, chỉ có một quy trình không được tôn trọng.**

**3. Gold plating.** Đội tự thêm những thứ "hay hay" mà không ai yêu cầu. **Đây là dạng trượt phạm vi do chính đội gây ra, và nó ít được nói tới nhất.**

**4. Tích luỹ những việc nhỏ.** Không ai từ chối được một việc *"chỉ mất hai giờ"*. **Hai mươi việc như thế là một tuần công việc không có trong kế hoạch.**

**Phân biệt hai khái niệm hay bị lẫn:**

| | Scope creep | Scope change |
|---|-------------|--------------|
| **Bản chất** | Phạm vi tăng **không được nhận biết** và không được phê duyệt | Thay đổi **có ý thức**, được đánh giá và phê duyệt |
| **Tác động lên kế hoạch** | Không được điều chỉnh — nên trễ mà không ai hiểu vì sao | Được điều chỉnh cùng với phạm vi |
| **Đánh giá** | **Luôn xấu** | **Bình thường và cần thiết** |

> **Mục tiêu của quản lý phạm vi KHÔNG phải là chặn thay đổi.** Thay đổi là dấu hiệu tổ chức đang học. **Mục tiêu là đảm bảo mọi thay đổi đều được nhìn thấy, được định giá, và được ai đó có thẩm quyền chấp nhận cái giá đó.**

---

## 2. Viết phạm vi cho không thể tranh chấp

**Một tài liệu phạm vi tốt có bốn phần:**

**1. Danh sách sản phẩm bàn giao.** Cụ thể tới mức có thể kiểm tra: *"báo cáo doanh thu theo tháng, xuất được Excel, lọc theo chi nhánh và khoảng thời gian"* — không phải *"chức năng báo cáo"*.

**2. Danh sách LOẠI TRỪ.** Phần quan trọng nhất và bị bỏ nhiều nhất:

- *"Không bao gồm ứng dụng mobile native."*
- *"Không bao gồm di trú dữ liệu từ hệ thống cũ trước năm 2020."*
- *"Không bao gồm đào tạo người dùng cuối tại chi nhánh."*
- *"Không bao gồm tích hợp với hệ thống kế toán."*

**3. Giả định.** *"Giả định khách hàng cung cấp môi trường thử nghiệm trước ngày 1 tháng Tư."* **Mỗi giả định là một rủi ro đã được đặt tên, và nếu nó không đúng thì phạm vi hoặc lịch trình phải đổi.**

**4. Tiêu chí chấp nhận cho từng sản phẩm bàn giao.** Nếu không có, việc nghiệm thu sẽ thành cuộc đàm phán ở đúng lúc tệ nhất — khi ngân sách đã cạn.

> **Bài kiểm tra một tài liệu phạm vi: đưa cho hai người đọc riêng và hỏi *"tính năng X có nằm trong đó không?"*** Nếu họ trả lời khác nhau, tài liệu chưa xong.

**Một lưu ý về hợp đồng ở môi trường outsourcing:** phần loại trừ trong tài liệu phạm vi **là công cụ bảo vệ cả hai bên**, không phải mẹo để từ chối khách hàng. **Khách hàng biết rõ mình không mua gì cũng có lợi như biết mình mua gì.**

---

## 3. Quy trình kiểm soát thay đổi

**Sáu bước, và cả sáu đều cần thiết:**

**1. Ghi nhận yêu cầu bằng văn bản.** Ai yêu cầu, yêu cầu gì, vì sao. **Yêu cầu chỉ tồn tại bằng lời trong cuộc họp sẽ được nhớ khác đi bởi mỗi người dự.**

**2. Phân tích tác động.** Không chỉ số ngày lập trình. Phải gồm:

| Loại tác động | Ví dụ dễ bị bỏ qua |
|---------------|-------------------|
| **Công sức phát triển** | Con số dễ nhớ nhất, nhưng thường là phần nhỏ |
| **Kiểm thử** | Cả hồi quy, không chỉ tính năng mới |
| **Tài liệu và đào tạo** | Hướng dẫn người dùng phải cập nhật |
| **Kiến trúc** | Thay đổi nhỏ ở giao diện có thể đòi đổi mô hình dữ liệu |
| **Lịch trình** | Nó có nằm trên đường găng không |
| **Rủi ro mới** | Thay đổi này mở ra rủi ro nào chưa có trong sổ |

**3. Đưa ra phương án, không chỉ đưa ra con số.** *"Thêm được, và đây là ba cách: dời hạn hai tuần, bỏ tính năng Y, hoặc thêm một người từ tuần sau."*

**4. Người có thẩm quyền quyết định.** Phải xác định trước ai được duyệt ở mức nào. Thay đổi dưới ba ngày công thì PM duyệt; lớn hơn thì nhà tài trợ; ảnh hưởng hợp đồng thì cần cả hai bên.

**5. Cập nhật MỌI thứ liên quan.** Kế hoạch, ngân sách, WBS, sổ rủi ro, tài liệu phạm vi. **Thay đổi được duyệt nhưng kế hoạch không đổi là cách chắc chắn nhất để trễ mà không hiểu vì sao.**

**6. Thông báo cho những người bị ảnh hưởng.** Bao gồm cả người không tham gia quyết định nhưng sẽ chịu hệ quả.

> **Nguyên tắc quan trọng nhất: PM KHÔNG phải là người nói không.** PM là người **làm rõ cái giá** và đưa quyết định tới người có thẩm quyền chi trả cái giá đó. **Cách nói đúng không phải *"không được"* mà là *"được, và đây là cái giá — anh chị chọn phương án nào?"***

---

## 4. Nhận diện scope creep sớm

**Scope creep nguy hiểm vì nó không có một thời điểm nào để phát hiện — nó tích luỹ.**

**Sáu dấu hiệu cảnh báo:**

| Dấu hiệu | Ý nghĩa |
|----------|---------|
| **Đội làm việc không có trong kế hoạch mà không ai thấy lạ** | Quy trình thay đổi đã bị bỏ qua từ lâu |
| **Số lượng ticket tăng nhưng tiến độ phạm vi không nhích** | Đang làm những việc ngoài phạm vi gốc |
| **Câu *"cái này nhỏ thôi"* xuất hiện thường xuyên** | Tích luỹ việc nhỏ đang diễn ra |
| **Ước tính đúng nhưng vẫn trễ đều đặn** | Việc phát sinh đang chiếm thời gian, không phải ước tính sai |
| **Người dùng liên hệ trực tiếp lập trình viên** | Kênh yêu cầu chính thức đã bị vòng qua |
| **Không ai nhớ tài liệu phạm vi nằm ở đâu** | Không còn đường tham chiếu để tranh luận |

**Bốn cách phòng ngừa, theo mức độ hiệu quả:**

**1. Đường tham chiếu (baseline) được ký và mọi người biết nó ở đâu.** Không có baseline thì không có gì để so, nên không có creep — chỉ có sự nhầm lẫn.

**2. Một kênh yêu cầu duy nhất.** Mọi yêu cầu đi qua một chỗ, kể cả yêu cầu nhỏ. **Không phải để làm chậm, mà để nhìn thấy.**

**3. Ghi lại cả những việc nhỏ đã đồng ý làm.** Ngay cả khi bạn quyết định làm miễn phí một việc hai giờ, **hãy ghi nó lại**. Cuối tháng, tổng của những việc miễn phí đó là dữ liệu bạn cần để đàm phán.

**4. Xem lại phạm vi định kỳ với nhà tài trợ.** Mỗi hai tới bốn tuần, mười lăm phút: *"đây là những gì đã đổi, đây là tác động tích luỹ"*.

> **Về việc làm miễn phí những việc nhỏ:** đôi khi đó là quyết định đúng để giữ quan hệ. **Nhưng nó phải là một QUYẾT ĐỊNH có ghi nhận, không phải một thói quen vô hình.** Đội gánh mười việc nhỏ miễn phí mỗi tháng và bị đánh giá là trễ tiến độ là một tình huống bất công có thể phòng được hoàn toàn bằng cách ghi chép.

---

## 5. Đàm phán thay đổi trong thực tế

**Ba tình huống hay gặp và cách xử lý:**

**Tình huống 1: khách hàng nói *"đây không phải thay đổi, nó vốn phải như vậy".***

- **Đừng tranh luận về ý định.** Quay về tài liệu: *"trong tài liệu phạm vi ký ngày 3 tháng Ba, phần này được mô tả thế này. Tôi hiểu điều anh chị cần bây giờ khác đi — chúng ta xử lý nó như một thay đổi và tôi đưa phương án."*
- **Nếu tài liệu thật sự mơ hồ, hãy thừa nhận.** Cãi để thắng một điểm mơ hồ sẽ mất nhiều hơn được. **Nhưng hãy làm rõ nó ngay để không lặp lại.**

**Tình huống 2: nhà tài trợ nội bộ ép thêm phạm vi mà không cho thêm gì.**

- **Đưa dữ liệu, không đưa cảm xúc.** *"Đội đang có 6 tuần công việc còn lại và 5 tuần thời gian. Đây là ba hạng mục tôi đề xuất bỏ."*
- **Buộc sự đánh đổi trở nên hiển thị.** Người ép thêm phạm vi thường không hình dung được cái gì sẽ mất. **Cho họ thấy danh sách cụ thể sẽ đổi cuộc trò chuyện.**

**Tình huống 3: thay đổi đến từ chính đội — *"cần refactor phần này trước đã".***

- **Đây là thay đổi hợp lệ và cần được đối xử như mọi thay đổi khác:** phân tích tác động, và quyết định dựa trên giá trị.
- **Câu hỏi đúng là *"nếu không làm bây giờ thì cái giá sau này là bao nhiêu?"*** Nếu không trả lời được thì đó là mong muốn kỹ thuật, chưa phải nhu cầu.

**Một điều PM phải chuẩn bị tinh thần:** **bạn sẽ phải nói không với người trả tiền cho dự án.** Cách duy nhất làm được điều đó mà không mất quan hệ là **luôn đi kèm phương án thay thế và dữ liệu**, và **không bao giờ để lần nói không đầu tiên xảy ra vào lúc đã quá muộn để chọn cách khác.**

---

## 6. Phạm vi trong môi trường agile

**Agile không loại bỏ quản lý phạm vi — nó thay cơ chế.**

| | Truyền thống | Agile |
|---|--------------|-------|
| **Phạm vi** | Cố định trong baseline, đổi qua change control | **Biến số**, đổi tự do ở phần chưa vào sprint |
| **Cơ chế bảo vệ** | Quy trình phê duyệt thay đổi | **Sprint là bất khả xâm phạm** và backlog có thứ tự |
| **Đơn vị đàm phán** | Yêu cầu thay đổi | Thứ tự backlog |
| **Cái được cố định** | Phạm vi | **Thời gian và chi phí** |

> **Điểm cần hiểu: trong agile, việc đổi phạm vi ở phần chưa vào sprint là MIỄN PHÍ và được hoan nghênh.** Cái không miễn phí là **đổi phạm vi của sprint đang chạy** — và đó là lý do sprint được bảo vệ.

**Nhưng agile cũng có dạng scope creep riêng:** **backlog phình ra vô tận trong khi ngày phát hành cam kết vẫn không đổi.** Thứ tự backlog cho phép cắt từ dưới lên, nhưng **nếu không ai theo dõi tổng khối lượng còn lại so với thời gian còn lại, đội sẽ tới sát ngày phát hành mới phát hiện phải cắt một nửa.**

**Với hợp đồng giá cố định làm theo agile — tình huống rất phổ biến ở Việt Nam:** cách xử lý thực dụng là **cố định tổng khối lượng (ví dụ số story point hoặc số sprint), nhưng cho phép đổi nội dung**. Khách hàng được đổi ý về *cái gì*, không được đổi về *bao nhiêu*.

---

## 7. Điểm cốt lõi

- **Phạm vi gồm cả những gì sẽ KHÔNG được làm** — phần này bị bỏ qua gần như luôn luôn.
- **Mọi thứ không được nhắc tới đều là vùng tranh chấp.**
- Bốn nguồn trượt phạm vi: **yêu cầu không rõ, thay đổi không qua quy trình, gold plating, tích luỹ việc nhỏ**.
- **Gold plating là dạng trượt do chính đội gây ra** và ít được nói tới nhất.
- **Hai mươi việc "chỉ mất hai giờ" là một tuần công việc không có trong kế hoạch.**
- **Scope creep luôn xấu; scope change là bình thường và cần thiết.**
- **Mục tiêu không phải chặn thay đổi mà là làm mọi thay đổi được nhìn thấy và được định giá.**
- Tài liệu phạm vi cần **sản phẩm bàn giao, danh sách loại trừ, giả định, tiêu chí chấp nhận**.
- **Mỗi giả định là một rủi ro đã được đặt tên.**
- **Bài kiểm tra: hai người đọc riêng phải trả lời giống nhau về việc tính năng X có trong phạm vi.**
- **Khách hàng biết rõ mình không mua gì cũng có lợi như biết mình mua gì.**
- **Yêu cầu chỉ tồn tại bằng lời sẽ được nhớ khác đi bởi mỗi người dự họp.**
- Phân tích tác động phải gồm **kiểm thử hồi quy, tài liệu, kiến trúc, đường găng và rủi ro mới**, không chỉ ngày lập trình.
- **Thay đổi được duyệt nhưng kế hoạch không đổi là cách chắc chắn nhất để trễ mà không hiểu vì sao.**
- **PM không phải người nói không** — PM làm rõ cái giá và đưa quyết định tới người có thẩm quyền.
- Dấu hiệu creep: **ước tính đúng nhưng vẫn trễ đều đặn**, và **người dùng liên hệ trực tiếp lập trình viên**.
- **Một kênh yêu cầu duy nhất, không phải để làm chậm mà để nhìn thấy.**
- **Ghi lại cả những việc nhỏ làm miễn phí** — tổng của chúng là dữ liệu đàm phán.
- Khi khách hàng nói *"nó vốn phải như vậy"*: **quay về tài liệu, đừng tranh luận về ý định**.
- Với đề nghị refactor: **câu hỏi đúng là nếu không làm bây giờ thì cái giá sau này là bao nhiêu**.
- **Trong agile, đổi phạm vi phần chưa vào sprint là miễn phí; đổi sprint đang chạy thì không.**
- **Scope creep dạng agile là backlog phình ra trong khi ngày phát hành không đổi.**
- Hợp đồng giá cố định làm agile: **cố định tổng khối lượng, cho phép đổi nội dung**.

## 8. Tóm tắt

- Quản lý phạm vi là **làm cho ranh giới nhìn thấy được**, và phần loại trừ quan trọng ngang phần bao gồm.
- **Quy trình kiểm soát thay đổi tồn tại để định giá, không để chặn**, và phân tích tác động phải vượt ra ngoài ngày lập trình.
- **Scope creep tích luỹ nên phải phòng bằng baseline, một kênh yêu cầu, và việc ghi chép cả việc nhỏ.**
- **Agile thay cơ chế bảo vệ phạm vi bằng sprint bất khả xâm phạm và backlog có thứ tự**, nhưng vẫn cần theo dõi tổng khối lượng còn lại.
