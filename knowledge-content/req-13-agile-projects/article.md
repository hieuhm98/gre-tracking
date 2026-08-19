# Yêu cầu trong dự án agile

## 1. Yêu cầu trong agile: điều gì giống, điều gì khác

> **Hiểu lầm phổ biến nhất về agile: *"Agile nghĩa là không cần yêu cầu."***

Điều này **sai hoàn toàn**. Agile không loại bỏ yêu cầu — nó thay đổi **cách bạn khám phá, ghi lại và quản lý** chúng.

**Nghĩ về nó theo cách này:** dù bạn làm waterfall hay agile, bạn vẫn phải trả lời cùng những câu hỏi — *ai sẽ dùng hệ thống này, họ cần làm gì, nó phải hoạt động tốt tới mức nào, những quy tắc nào chi phối nó.* **Cái thay đổi là thời điểm bạn trả lời và cách bạn ghi lại câu trả lời.**

### Bốn điều KHÔNG thay đổi

**1. Bạn vẫn phải hiểu vấn đề nghiệp vụ.** Không có phương pháp nào miễn cho bạn việc hiểu **vì sao** dự án tồn tại và **giá trị nào** nó phải tạo ra.

**2. Bạn vẫn phải xác định stakeholder và user class.** Nếu bạn không biết ai sẽ dùng hệ thống, bạn không thể xây đúng nó.

**3. Bạn vẫn phải làm rõ chi tiết trước khi hiện thực.** Agile trì hoãn chi tiết, nhưng **không loại bỏ chúng**. Trước khi lập trình viên viết mã cho một story, ai đó phải biết chính xác story đó phải làm gì.

**4. Bạn vẫn phải xử lý quality attribute, business rule và ràng buộc.** Chúng không biến mất chỉ vì bạn viết yêu cầu lên thẻ.

### Năm điều THAY ĐỔI

| Khía cạnh | Truyền thống | Agile |
|-----------|-------------|-------|
| **Thời điểm chi tiết hoá** | Trước khi bắt đầu xây dựng | **Just-in-time**, ngay trước iteration hiện thực nó |
| **Hình thức lưu trữ** | Tài liệu SRS | **Backlog** gồm user story, kèm acceptance test |
| **Nguồn của chi tiết** | Tài liệu viết ra | **Cuộc trò chuyện** giữa đội và product owner |
| **Xử lý thay đổi** | Quy trình kiểm soát thay đổi trang trọng | **Được kỳ vọng và chào đón**; chỉ cần sắp lại backlog |
| **Đơn vị bàn giao** | Toàn bộ hệ thống ở cuối | **Phần sản phẩm chạy được** ở cuối mỗi iteration |

> **Nguyên tắc bao trùm — và nó áp dụng cho MỌI dự án, không riêng agile: hãy tích luỹ hiểu biết chung ĐỦ TỐT để xây dựng phần tiếp theo của sản phẩm với mức rủi ro chấp nhận được.**
>
> Đây chính là *progressive refinement of detail* — làm mịn chi tiết theo lớp. Agile chỉ áp dụng nó **triệt để và có kỷ luật hơn**.

### Bẫy lớn nhất khi hiểu sai agile

> **Rủi ro thật sự không phải là làm quá ít tài liệu, mà là NHẦM LẪN "ít tài liệu" với "ít suy nghĩ".**
>
> Một đội agile khoẻ mạnh vẫn dành **rất nhiều công sức** cho việc hiểu vấn đề — họ chỉ **không đóng gói hiểu biết đó thành tài liệu 200 trang**. Họ hiểu qua trò chuyện, prototype, và phản hồi từ phần mềm chạy được.
>
> **Một đội agile không khoẻ mạnh bỏ qua cả hai: không tài liệu VÀ không suy nghĩ. Kết quả là xây sai thứ, nhanh hơn.**

---

## 2. Product owner & vai trò của BA trong agile

### Product owner

**Product owner là người có thẩm quyền quyết định nội dung và thứ tự của product backlog.** Đây là **một người duy nhất**, không phải một uỷ ban.

**Trách nhiệm chính:**

- **Sở hữu tầm nhìn sản phẩm** và truyền đạt nó cho đội.
- **Quyết định thứ tự ưu tiên** của backlog — cái gì làm trước, cái gì làm sau.
- **Trả lời câu hỏi của đội** về chi tiết yêu cầu, kịp thời.
- **Chấp nhận hoặc từ chối** công việc đã hoàn thành, dựa trên acceptance criteria.
- **Đại diện cho tiếng nói của mọi stakeholder** — khách hàng, người dùng, kinh doanh, tuân thủ.

> **Ba chế độ thất bại phổ biến của vai trò product owner:**
>
> **1. Product owner vắng mặt.** Đội không lấy được câu trả lời nên **tự đoán**. Đây là chế độ thất bại nghiêm trọng nhất — nó tái tạo lại chính vấn đề mà agile định giải quyết.
>
> **2. Product owner không có thẩm quyền.** Họ phải đi hỏi cấp trên mọi quyết định, khiến đội bị chặn thường xuyên. **Một product owner không quyết định được thì không phải product owner.**
>
> **3. Uỷ ban product owner.** Nhiều người cùng chỉ đạo backlog, mỗi người theo hướng khác nhau. **Đội nhận được yêu cầu mâu thuẫn và không ai chịu trách nhiệm.**

### Vai trò của BA trong đội agile

**Câu hỏi thường gặp: agile có còn cần BA không?**

**Câu trả lời: công việc BA vẫn còn đó — câu hỏi chỉ là AI làm nó.** Trên đội nhỏ, product owner có thể tự làm. Trên hệ thống phức tạp, có nhiều stakeholder, nhiều hệ thống tích hợp, nhiều quy định — **một BA chuyên trách tạo ra khác biệt rất lớn**.

**BA trong agile làm gì:**

- **Hỗ trợ product owner** trong việc khai thác, phân tích và làm mịn backlog — thường là vai trò *"proxy product owner"* hoặc đối tác của product owner.
- **Chia epic thành story** ở kích thước có thể hiện thực trong một iteration.
- **Viết và làm rõ acceptance criteria** cùng với tester và lập trình viên.
- **Tạo mô hình phân tích** khi chúng làm rõ được điều mà văn bản không làm rõ nổi.
- **Khai thác quality attribute và business rule** — những thứ dễ bị bỏ sót nhất trong agile.
- **Duy trì cái nhìn tổng thể** khi đội tập trung vào từng story: story này ăn khớp thế nào với luồng công việc toàn cục?
- **Kết nối với stakeholder bên ngoài** mà đội không tiếp xúc hằng ngày.

> **Giá trị lớn nhất của BA trong agile: giữ TẦM NHÌN TỔNG THỂ.** Khi đội làm việc theo từng story nhỏ trong từng iteration, rất dễ **mất dấu bức tranh lớn** — luồng công việc đầu-cuối, các phụ thuộc, các khoảng trống. **Đó chính là chỗ BA đóng góp nhiều nhất.**

---

## 3. Product backlog & backlog grooming

**Product backlog là danh sách được sắp xếp theo thứ tự của mọi thứ đội có thể làm cho sản phẩm.**

### Bốn đặc tính cốt lõi

**1. Nó được SẮP XẾP, không phải danh sách phẳng.** Mục ở trên cùng là mục sẽ được làm tiếp theo. Đây là **thuộc tính quan trọng nhất** của backlog.

**2. Nó tiến hoá liên tục.** Mục được thêm vào, xoá đi, chia nhỏ, gộp lại, sắp xếp lại trong suốt dự án. **Backlog không bao giờ "hoàn thành".**

**3. Nó có độ chi tiết KHÔNG ĐỀU.** Đây là đặc tính bị hiểu nhầm nhiều nhất:

> - **Mục ở ĐẦU backlog:** chi tiết, nhỏ, đã ước tính, sẵn sàng để hiện thực.
> - **Mục ở GIỮA:** vừa phải, có thể vẫn hơi lớn.
> - **Mục ở CUỐI:** thô, lớn, chỉ một dòng mô tả ý tưởng.
>
> **Đây KHÔNG phải sự cẩu thả — đây là hiệu quả.** Chi tiết hoá một mục sẽ thay đổi hoặc bị loại bỏ trước khi đến lượt là **lãng phí thuần tuý**.

**4. Nó chứa nhiều hơn user story.** Backlog cũng chứa **lỗi cần sửa, công việc kỹ thuật, spike nghiên cứu, nợ kỹ thuật cần trả**.

### Backlog grooming (refinement)

**Grooming là hoạt động liên tục chuẩn bị các mục ở đầu backlog để chúng sẵn sàng cho iteration tiếp theo.**

**Các hoạt động trong grooming:**

- **Chia nhỏ** những mục quá lớn để vừa một iteration.
- **Làm rõ** những mục mơ hồ bằng cách hỏi product owner.
- **Thêm acceptance criteria.**
- **Ước tính** các mục chưa có ước tính.
- **Sắp xếp lại** khi ưu tiên thay đổi.
- **Loại bỏ** những mục không còn ý nghĩa.

> **Quy tắc thực dụng: giữ cho khoảng HAI tới BA iteration tiếp theo luôn ở trạng thái "sẵn sàng".** Ít hơn thì đội có nguy cơ bị chặn ở đầu iteration; nhiều hơn thì bạn đang lãng phí công sức vào những thứ sẽ thay đổi.

**Định nghĩa "sẵn sàng" (definition of ready)** — nhiều đội định nghĩa rõ một mục phải thoả mãn gì trước khi được đưa vào iteration:

- Đủ nhỏ để hoàn thành trong một iteration.
- Có acceptance criteria rõ ràng.
- Đã được ước tính.
- Không có phụ thuộc chặn.
- Đội hiểu nó nghĩa là gì.

> **Definition of ready là công cụ bảo vệ đội mạnh mẽ.** Nó cho phép đội nói *"story này chưa sẵn sàng"* một cách khách quan, thay vì nhận vào một story mơ hồ rồi mắc kẹt giữa iteration.

---

## 4. User story: cấu trúc, 3C và INVEST

### Cấu trúc thông dụng

> **Là một &lt;loại người dùng&gt;, tôi muốn &lt;làm gì đó&gt; để &lt;đạt được lợi ích nào đó&gt;.**

Ví dụ: *"Là một Chemist, tôi muốn tìm kiếm catalog nhà cung cấp trực tuyến để tôi biết hoá chất mình cần có sẵn không trước khi đặt yêu cầu."*

**Vì sao mẫu này hiệu quả:**

- **Phần "là một"** buộc bạn nghĩ về **user class cụ thể**, không phải "người dùng" chung chung.
- **Phần "tôi muốn"** mô tả **năng lực cần có**.
- **Phần "để"** — thường bị bỏ qua nhưng **quan trọng nhất** — nêu **giá trị nghiệp vụ**. Nếu bạn không viết được phần này, hãy tự hỏi **vì sao chúng ta lại làm story này**.

> **Mẫu này là công cụ, không phải giáo điều.** Nếu một yêu cầu diễn đạt tự nhiên hơn theo cách khác, **hãy viết theo cách đó**. Mục tiêu là giao tiếp rõ ràng, không phải tuân thủ định dạng.

### Ba chữ C

**User story không phải là câu chữ trên thẻ. Nó gồm ba phần:**

| Chữ C | Ý nghĩa |
|-------|---------|
| **Card (thẻ)** | Câu chữ ngắn gọn trên thẻ. Nó là **lời NHẮC về một cuộc trò chuyện**, không phải đặc tả đầy đủ |
| **Conversation (cuộc trò chuyện)** | **Đây là nơi yêu cầu thực sự sống.** Đội và product owner thảo luận để làm rõ chi tiết trước và trong khi hiện thực |
| **Confirmation (xác nhận)** | **Acceptance criteria** — cách chúng ta biết story đã hoàn thành đúng |

> **Cái nhìn quan trọng nhất về user story: thẻ CỐ Ý không đầy đủ.** Người mới thường thất vọng vì user story *"thiếu chi tiết"*. Nhưng đó chính là **thiết kế có chủ đích** — chi tiết đến từ cuộc trò chuyện, và cuộc trò chuyện diễn ra **just-in-time**.
>
> **Rủi ro: nếu cuộc trò chuyện KHÔNG diễn ra, bạn chỉ còn lại một mẩu giấy vô dụng.** Đây là lý do đội phân tán về địa lý hoặc thiếu product owner sẵn sàng thường gặp khó khăn với user story.

### INVEST — sáu tiêu chí của một story tốt

| Chữ | Nghĩa | Giải thích |
|-----|-------|-----------|
| **I** | **Independent** | Có thể hiện thực **độc lập** với story khác, để bạn tự do sắp thứ tự |
| **N** | **Negotiable** | **Không phải hợp đồng cố định** — chi tiết được thương lượng trong cuộc trò chuyện |
| **V** | **Valuable** | Mang lại **giá trị nhìn thấy được cho người dùng hoặc khách hàng** |
| **E** | **Estimable** | Đội **ước tính được** — nếu không, có nghĩa là chưa hiểu đủ |
| **S** | **Small** | Đủ nhỏ để **hoàn thành trong một iteration** |
| **T** | **Testable** | Có thể **xác minh** rằng nó được hiện thực đúng |

> **Hai chữ hay bị vi phạm nhất:**
>
> **V (Valuable):** đội thường tạo story kiểu *"xây tầng cơ sở dữ liệu"* — điều này **không mang giá trị cho người dùng** và không thể trình diễn. Tốt hơn là xây **một lát cắt dọc mỏng** đi xuyên mọi tầng cho một chức năng thật.
>
> **E (Estimable):** nếu đội không ước tính được một story, **đó không phải vấn đề ước tính — đó là dấu hiệu chưa hiểu đủ**. Câu trả lời là làm rõ hoặc chạy một **spike** (nghiên cứu có giới hạn thời gian) để học đủ.

### Story không phù hợp với mọi thứ

**User story rất tốt cho chức năng hướng người dùng. Nhưng chúng KHÔNG phù hợp cho:**

- **Quality attribute** — *"Là một người dùng, tôi muốn hệ thống có sẵn 99,9% thời gian"* nghe rất gượng và không hiện thực được như một story.
- **Business rule phức tạp** — tốt hơn nên viết riêng và tham chiếu từ nhiều story.
- **Hệ thống thời gian thực có nhiều sự kiện** — event-response table phù hợp hơn.
- **Logic quyết định phức tạp** — decision table rõ ràng hơn nhiều.

> **Đừng ép mọi thứ vào khuôn user story.** Dùng biểu diễn phù hợp nhất với loại thông tin, giống như trên mọi dự án khác.

---

## 5. Story mapping & epic, theme, feature

### Vấn đề mà story mapping giải quyết

> **Product backlog là một danh sách PHẲNG. Nó cho bạn thứ tự, nhưng không cho bạn CẤU TRÚC.**

Khi backlog có 300 mục, bạn không thể nhìn vào nó và trả lời: *"Người dùng có làm được toàn bộ công việc của họ từ đầu tới cuối không? Chúng ta có bỏ sót bước nào không?"*

**Story mapping giải quyết đúng vấn đề này bằng cách sắp xếp story theo HAI chiều.**

### Cấu trúc của story map

**Trục NGANG: xương sống (backbone) — luồng công việc của người dùng theo trình tự thời gian.**

Ví dụ với hệ thống theo dõi hoá chất: *Tìm kiếm hoá chất → Chuẩn bị yêu cầu → Gửi yêu cầu → Theo dõi trạng thái → Nhận hoá chất → Ghi nhận sử dụng → Thải bỏ*

**Trục DỌC: mức chi tiết và độ ưu tiên trong mỗi bước.**

Dưới mỗi hoạt động ở xương sống, bạn xếp các story hiện thực nó — **story thiết yếu nhất ở trên, story tuỳ chọn ở dưới**.

### Ba lợi ích lớn

**1. Nó bộc lộ khoảng trống.** Khi bạn nhìn vào toàn bộ luồng công việc, **những bước bị thiếu trở nên hiển nhiên** — điều mà một danh sách phẳng không bao giờ cho thấy.

**2. Nó giúp lát cắt bản phát hành có ý nghĩa.** Bạn vẽ **một đường ngang** qua bản đồ. Mọi thứ phía trên đường là bản phát hành đầu tiên.

> **Đây chính là điểm sáng của story mapping: lát cắt ngang bảo đảm bản phát hành đầu tiên là một luồng công việc HOÀN CHỈNH nhưng tối giản, thay vì một vài tính năng hoàn hảo mà người dùng không thể dùng để làm xong việc.**
>
> Người dùng thà có **một cách cơ bản để hoàn thành toàn bộ công việc** còn hơn có **một bước được đánh bóng hoàn hảo và các bước còn lại thì thiếu**.

**3. Nó tạo hiểu biết chung.** Cả đội cùng nhìn vào một bức tranh và thấy sản phẩm là một tổng thể, không phải một đống thẻ rời rạc.

### Epic, theme và feature

**Đây là các mức trừu tượng khác nhau trên cùng một phổ:**

| Thuật ngữ | Nghĩa |
|-----------|-------|
| **Epic** | Một story **quá lớn** để hoàn thành trong một iteration; phải được chia nhỏ |
| **Theme** | Một **nhóm story liên quan** với nhau, thường phục vụ cùng mục tiêu nghiệp vụ |
| **Feature** | Một **năng lực của sản phẩm** mà người dùng hoặc thị trường nhận biết được; thường gồm nhiều story |
| **Story** | Đơn vị **hiện thực được trong một iteration** |
| **Task** | Việc kỹ thuật cụ thể mà một thành viên làm để hoàn thành story |

> **Đừng sa vào tranh cãi thuật ngữ.** Các tổ chức dùng những từ này khác nhau. **Điều quan trọng là bạn có một cách nhất quán để đi từ "ý tưởng lớn" xuống "việc làm được trong tuần này".**

### Chia epic như thế nào

**Cách chia TỆ: theo tầng kỹ thuật** — *"xây giao diện", "xây API", "xây cơ sở dữ liệu"*. Không cái nào mang giá trị riêng lẻ và không cái nào trình diễn được.

**Cách chia TỐT:**

- **Theo bước quy trình** — mỗi bước trong luồng công việc là một story.
- **Theo loại dữ liệu** — hỗ trợ một loại trước, các loại khác sau.
- **Theo user class** — phục vụ user class quan trọng nhất trước.
- **Theo quy tắc nghiệp vụ** — trường hợp đơn giản trước, trường hợp ngoại lệ sau.
- **Theo mức độ hoàn thiện** — phiên bản cơ bản trước, tinh chỉnh sau.

---

## 6. Ước tính, velocity & lập kế hoạch phát hành

### Story point

**Story point là đơn vị ước tính TƯƠNG ĐỐI cho kích thước của một story** — nó gộp cả **công sức, độ phức tạp và mức bất định**.

> **Vì sao dùng đơn vị tương đối thay vì giờ?**
>
> **Con người ước tính kích thước tương đối tốt hơn nhiều so với ước tính thời gian tuyệt đối.** Bạn có thể nhìn hai công việc và nói tự tin *"cái này lớn gấp đôi cái kia"* — trong khi nói *"cái này mất 14 giờ"* thì gần như luôn sai.
>
> **Ngoài ra, story point tách kích thước khỏi tốc độ.** Một story 5 điểm luôn là 5 điểm, dù đội mới hay đội có kinh nghiệm làm nó. **Tốc độ được nắm bắt riêng bằng velocity.**

**Thang đo thường dùng: dãy Fibonacci** (1, 2, 3, 5, 8, 13, 21). Khoảng cách tăng dần **phản ánh đúng thực tế rằng bất định tăng theo kích thước** — bạn có thể phân biệt 1 và 2 điểm, nhưng không thể phân biệt 20 và 21 điểm.

> **Story lớn hơn 13 điểm thường là dấu hiệu cần chia nhỏ.** Ước tính ở kích thước đó quá bất định để dùng cho việc lập kế hoạch.

### Planning poker

**Kỹ thuật ước tính đồng thuận trong đó mỗi thành viên chọn một con số một cách BÍ MẬT, rồi tất cả lật bài cùng lúc.**

**Vì sao bí mật rồi lật cùng lúc lại quan trọng:** nó **ngăn hiệu ứng neo (anchoring)**. Nếu người có tiếng nói nhất nói *"tôi nghĩ là 3"* trước, mọi người sẽ hội tụ về 3 dù họ nghĩ khác.

**Giá trị thật sự KHÔNG nằm ở con số:**

> **Khi hai người ước tính cùng một story là 2 và 13, đó là cuộc thảo luận giá trị nhất trong cả buổi.** Họ đang hiểu story theo hai cách hoàn toàn khác nhau — và **việc phát hiện ra điều đó ở giai đoạn ước tính rẻ hơn nhiều so với phát hiện ở giữa iteration.**

### Velocity

**Velocity là số story point đội thực sự hoàn thành trong một iteration.**

**Cách dùng đúng:**

- **Là công cụ DỰ BÁO cho chính đội đó.** Nếu velocity trung bình là 30 điểm và còn 300 điểm trong backlog, bạn còn khoảng 10 iteration.
- **Đo trung bình qua nhiều iteration**, không dùng một iteration đơn lẻ.
- **Chỉ tính story hoàn thành hoàn toàn** theo definition of done — story làm 90% tính là 0 điểm.

> **Ba cách dùng SAI velocity — và chúng đều gây hại nghiêm trọng:**
>
> **1. So sánh velocity giữa các đội.** Story point là đơn vị **tương đối, do đội tự định nghĩa**. Đội A với velocity 40 không "tốt hơn" đội B với velocity 20. **So sánh chúng là vô nghĩa về mặt toán học.**
>
> **2. Dùng velocity làm mục tiêu hiệu suất.** Nếu quản lý yêu cầu *"tăng velocity lên 20%"*, đội sẽ đơn giản **thổi phồng ước tính**. Velocity tăng, sản lượng thực không đổi. **Bạn vừa phá hỏng công cụ dự báo duy nhất của mình.**
>
> **3. Ép velocity vào giai đoạn đầu.** Đội mới cần vài iteration để velocity ổn định. **Đừng lập cam kết dài hạn dựa trên hai iteration đầu.**

### Lập kế hoạch phát hành

**Với velocity và backlog đã ước tính, bạn có thể trả lời hai câu hỏi:**

- **"Với phạm vi cố định, khi nào xong?"** = tổng điểm ÷ velocity = số iteration.
- **"Với thời hạn cố định, chúng ta làm được gì?"** = velocity × số iteration còn lại = số điểm khả thi; lấy từ đầu backlog xuống cho tới khi đủ.

> **Hãy trình bày dự báo dưới dạng KHOẢNG dựa trên velocity thấp nhất và cao nhất đã quan sát**, không phải một con số duy nhất. Đây là cách trung thực nhất để truyền đạt bất định.

---

## 7. Acceptance criteria & definition of done

### Acceptance criteria (thuộc về TỪNG story)

**Acceptance criteria là các điều kiện cụ thể phải đúng để MỘT story cụ thể được coi là hoàn thành đúng.**

**Chúng trả lời câu hỏi *"làm sao chúng ta biết story này đã xong đúng?"***

**Đặc điểm của acceptance criteria tốt:**

- **Cụ thể và kiểm chứng được** — không phải *"tìm kiếm phải nhanh"* mà *"kết quả tìm kiếm hiển thị trong vòng 2 giây với tối đa 1.000 hoá chất"*.
- **Viết bằng ngôn ngữ nghiệp vụ**, không phải thuật ngữ kỹ thuật.
- **Phủ cả điều kiện ngoại lệ**, không chỉ đường đi hạnh phúc.
- **Được thoả thuận TRƯỚC khi bắt đầu hiện thực**, không phải sau.

**Định dạng Given-When-Then** được dùng rộng rãi:

> **Given** người dùng đã đăng nhập với vai trò Chemist
> **When** họ tìm kiếm một hoá chất không có trong bất kỳ catalog nào
> **Then** hệ thống hiển thị thông báo "Không tìm thấy hoá chất" cùng tuỳ chọn gửi yêu cầu đặc biệt

**Vì sao định dạng này hiệu quả:** nó buộc bạn nêu rõ **trạng thái ban đầu, hành động, và kết quả mong đợi** — chính ba thứ mà một yêu cầu thiếu thông tin thường bỏ sót.

### Definition of done (thuộc về MỌI story)

**Definition of done là tập tiêu chuẩn chất lượng áp dụng cho MỌI story, do cả đội thoả thuận.**

**Ví dụ điển hình:**

- Mã đã được viết và **đã qua peer review**.
- **Unit test đã viết và pass**.
- **Test tích hợp và test hồi quy pass**.
- **Acceptance criteria của story đã được xác minh**.
- **Tài liệu người dùng đã cập nhật** nếu cần.
- **Đã triển khai lên môi trường staging**.
- **Không có lỗi nghiêm trọng còn mở**.
- **Đáp ứng các chuẩn phi chức năng chung** — hiệu năng, bảo mật, khả năng tiếp cận.

### Phân biệt hai khái niệm

> **Acceptance criteria trả lời *"story NÀY có đúng không?"*. Definition of done trả lời *"chúng ta có làm việc theo chuẩn chất lượng của mình không?"***
>
> Acceptance criteria **khác nhau ở mỗi story**. Definition of done **giống nhau ở mọi story**.

**Vì sao definition of done quan trọng tới vậy:**

Nếu không có nó, "xong" trở thành khái niệm co giãn. Lập trình viên nói *"xong rồi"* nghĩa là **đã viết mã**. Tester nghĩ nó nghĩa là **đã kiểm thử**. Product owner nghĩ nó nghĩa là **sẵn sàng dùng**.

> **Hệ quả: velocity trở nên vô nghĩa và "nợ hoàn thiện" tích tụ âm thầm.** Đội tưởng mình đã làm xong 10 story trong khi thực tế còn hàng tuần công việc kiểm thử và sửa lỗi phía sau. **Đây là một trong những nguyên nhân phổ biến nhất khiến dự án agile trượt tiến độ mà không ai nhận ra cho tới quá muộn.**

---

## 8. Yêu cầu phi chức năng & công việc kiến trúc trong agile

> **Đây là điểm yếu nổi tiếng nhất của agile khi làm không cẩn thận.**

**Vì sao chúng dễ bị bỏ sót:** user story tập trung vào **giá trị nhìn thấy được cho người dùng**. Quality attribute như bảo mật, khả năng mở rộng, khả năng bảo trì thì **không nhìn thấy được** và **không thuộc về một story cụ thể nào** — chúng trải rộng qua toàn bộ sản phẩm.

### Bốn cách xử lý

**1. Constraint card (thẻ ràng buộc).** Viết yêu cầu phi chức năng lên thẻ **không phải như story mà như ràng buộc** áp dụng cho toàn sản phẩm. Dán chúng ở nơi cả đội nhìn thấy trong mọi iteration.

**2. Đưa vào definition of done.** Với những thuộc tính áp dụng cho **mọi** story — *"mọi trang tải trong 2 giây"*, *"mọi đầu vào của người dùng phải được kiểm tra tính hợp lệ"* — đây là chỗ đúng nhất.

**3. Đưa vào acceptance criteria của story liên quan.** Một story về đăng nhập có acceptance test bảo đảm rằng **một số user class truy cập được còn số khác bị chặn** — đó chính là security requirement được đặc tả dưới dạng test.

**4. Tạo story kỹ thuật riêng (enabler story).** Khi một quality attribute đòi hỏi công việc kiến trúc đáng kể — xây tầng caching, thiết lập hạ tầng giám sát — hãy tạo story riêng và đưa vào backlog.

> **Lưu ý về enabler story: chúng vi phạm chữ V trong INVEST** vì không mang giá trị trực tiếp cho người dùng. **Điều đó chấp nhận được và đôi khi cần thiết** — nhưng hãy dùng chúng có chọn lọc, và luôn nêu rõ **story hướng người dùng nào sẽ được hỗ trợ nhờ nó**.

### Rủi ro kiến trúc phát hiện muộn

> **Đây là rủi ro nghiêm trọng nhất của agile được thực hành kém.**
>
> Nếu tới iteration thứ mười bạn mới biết hệ thống phải hỗ trợ 10.000 người dùng đồng thời, hoặc phải chạy trên di động, hoặc phải tuân thủ một quy định về dữ liệu, việc trang bị thêm có thể **buộc phải làm lại phần lớn công việc đã hoàn thành**.

**Cách phòng ngừa:**

- **Khai thác quality attribute có ảnh hưởng kiến trúc SỚM** — trong các iteration đầu tiên, hoặc trong giai đoạn *"iteration zero"* nếu đội có.
- **Xây một lát cắt dọc mỏng đi xuyên mọi tầng ngay từ iteration đầu.** Nó phơi bày các vấn đề kiến trúc khi việc sửa còn rẻ.
- **Dành một tỷ lệ công suất cố định cho công việc kỹ thuật** — nhiều đội dành 15–20% mỗi iteration cho nợ kỹ thuật và công việc kiến trúc.
- **Đưa BA hoặc kiến trúc sư vào quá trình grooming** để đặt những câu hỏi mà story không tự đặt ra.

---

## 9. Bao nhiêu tài liệu là đủ & quản lý thay đổi

### Nguyên tắc "vừa đủ"

> **Tuyên ngôn agile nói *"phần mềm chạy được HƠN tài liệu toàn diện"* — chứ KHÔNG nói *"phần mềm chạy được THAY VÌ tài liệu"*.**
>
> Chính tuyên ngôn ghi rõ: *"Trong khi các mục bên phải có giá trị, chúng tôi coi trọng các mục bên trái hơn."* **Tài liệu vẫn có giá trị.**

**Năm câu hỏi để quyết định có ghi lại một thứ hay không:**

**1. Ai sẽ đọc nó, và họ sẽ dùng nó làm gì?** Nếu không trả lời được, có lẽ bạn không cần nó.

**2. Kiến thức này có cần tồn tại lâu hơn trí nhớ của đội không?** Nếu hệ thống sẽ được bảo trì trong mười năm bởi những người chưa được tuyển, câu trả lời là **có**.

**3. Có yêu cầu tuân thủ, kiểm toán, chứng nhận, hoặc hợp đồng nào không?** Trong các lĩnh vực được quản lý chặt, **tài liệu là bắt buộc về mặt pháp lý**, bất kể phương pháp bạn dùng.

**4. Đội có phân tán về địa lý hoặc múi giờ không?** Giao tiếp trực tiếp không khả dụng thì **tài liệu phải bù vào**.

**5. Chi phí ghi lại có nhỏ hơn chi phí khám phá lại không?** Đây là bài kiểm tra kinh tế cốt lõi.

> **Nhắc lại nguyên tắc từ đầu khoá học: chi phí GHI LẠI tri thức là nhỏ so với chi phí THU THẬP nó hoặc tái tạo nó trong tương lai.**

**Những thứ hầu như luôn đáng ghi lại, kể cả trong agile:**

- **Tầm nhìn và phạm vi sản phẩm** — nếu không, đội mất phương hướng.
- **Business rule** — chúng sống lâu hơn mọi dự án.
- **Định nghĩa dữ liệu và glossary** — chúng ngăn ngừa lỗi tích hợp.
- **Quyết định kiến trúc và lý do đằng sau** — người bảo trì tương lai sẽ cảm ơn bạn.
- **Acceptance test tự động** — chúng là tài liệu **duy nhất không bao giờ lỗi thời**, vì chúng chạy.

> **Điểm cuối cùng đáng suy nghĩ: nếu đội của bạn vứt bỏ user story sau khi hiện thực, thì acceptance test tự động có thể là tài liệu bền vững DUY NHẤT về việc hệ thống làm gì.** Hãy bảo đảm chúng đủ dễ đọc để phục vụ vai trò đó.

### Quản lý thay đổi trong agile

**Agile không loại bỏ quản lý thay đổi — nó làm cho việc đó rẻ hơn nhiều.**

| | Truyền thống | Agile |
|---|-------------|-------|
| **Thái độ với thay đổi** | Cần kiểm soát vì tốn kém | Được kỳ vọng và chào đón |
| **Cơ chế** | Change control board, đánh giá tác động trang trọng | **Sắp xếp lại backlog** |
| **Chi phí thay đổi** | Cao, vì công việc đã dựa trên baseline | Thấp, vì chỉ những gì đã hiện thực mới bị ảnh hưởng |

**Nhưng có ba điều agile KHÔNG miễn cho bạn:**

**1. Thay đổi vẫn có chi phí cơ hội.** Thêm một story vào đầu backlog nghĩa là **đẩy một story khác ra**. **Không có bữa trưa miễn phí** — chỉ có sự minh bạch hơn về việc đánh đổi cái gì.

**2. Thay đổi giữa iteration vẫn gây hại.** Hầu hết đội **bảo vệ phạm vi của iteration đang chạy**. Thay đổi đi vào backlog cho iteration sau, không đi vào công việc đang làm dở.

**3. Thay đổi ảnh hưởng tới thứ đã xây vẫn tốn kém.** Sửa một tính năng đã hiện thực, đã kiểm thử, đã tài liệu hoá **luôn đắt hơn** so với xây nó đúng ngay từ đầu. **Agile giảm chi phí này bằng cách rút ngắn vòng phản hồi, chứ không xoá bỏ nó.**

> **Chỉ số cảnh báo quan trọng: nếu tốc độ thay đổi yêu cầu KHÔNG giảm dần theo thời gian, dự án đang gặp rắc rối.** Điều đó thường nghĩa là tầm nhìn sản phẩm chưa rõ, hoặc bạn chưa nói chuyện với đúng người.

---

## 10. Chuyển từ truyền thống sang agile: bẫy thường gặp

### Bảy bẫy phổ biến

**1. "Agile nghĩa là không cần tài liệu."** Đã bàn ở trên. **Hệ quả: kiến thức bay hơi khi người ta rời đội, và người bảo trì tương lai không hiểu vì sao hệ thống được xây như vậy.**

**2. "Agile nghĩa là không cần lập kế hoạch."** Ngược lại — **agile lập kế hoạch LIÊN TỤC thay vì một lần duy nhất**. Đội agile lập kế hoạch nhiều hơn đội truyền thống, chỉ là với chu kỳ ngắn hơn.

**3. Product owner vắng mặt hoặc không có thẩm quyền.** **Đây là nguyên nhân thất bại số một của agile.** Không có người quyết định sẵn sàng, đội bị chặn hoặc tự đoán.

**4. Coi backlog là danh sách cần làm hết.** Backlog là **danh sách mọi thứ CÓ THỂ làm**, được sắp theo giá trị. **Nhiều mục sẽ không bao giờ được làm — và đó là kết quả đúng đắn**, vì chúng có giá trị thấp hơn những gì đã được làm.

**5. Bỏ qua quality attribute và công việc kiến trúc.** Dẫn tới nợ kỹ thuật chồng chất và khủng hoảng kiến trúc ở giai đoạn muộn.

**6. Dùng velocity làm chỉ số hiệu suất.** Phá hỏng công cụ dự báo và khuyến khích thổi phồng ước tính.

**7. Bỏ definition of done hoặc để nó lỏng lẻo.** Tạo ra "nợ hoàn thiện" ẩn khiến tiến độ báo cáo không phản ánh thực tế.

### Điều gì thực sự quyết định thành công

> **Agile không phải là một tập nghi thức — nó là một tập nguyên tắc về VÒNG PHẢN HỒI NGẮN và ĐIỀU CHỈNH LIÊN TỤC.**

**Bốn điều kiện thực sự quan trọng:**

- **Người ra quyết định sẵn sàng và có thẩm quyền.**
- **Phần mềm chạy được ở cuối mỗi iteration**, không phải phần mềm gần chạy được.
- **Phản hồi thật từ người dùng thật**, không phải từ proxy đoán mò.
- **Đội sẵn sàng thay đổi cách làm việc** dựa trên những gì họ học được ở retrospective.

**Nếu bốn điều này có mặt, hầu hết chi tiết khác sẽ tự điều chỉnh. Nếu thiếu chúng, không nghi thức nào cứu được dự án.**

> **Và cuối cùng: mọi thực hành yêu cầu đã học trong khoá học này vẫn áp dụng trong agile.** Bạn vẫn cần hiểu stakeholder, khai thác nhu cầu, mô hình hoá khi hữu ích, đặc tả rõ ràng, thẩm định bằng review và test, ưu tiên hoá, và quản lý thay đổi. **Chỉ là bạn làm chúng ở quy mô nhỏ hơn, thường xuyên hơn, và với ít nghi thức hơn.**

---

## Điểm cốt lõi

- **Agile không loại bỏ yêu cầu** — nó thay đổi thời điểm bạn chi tiết hoá và cách bạn ghi lại chúng.
- Rủi ro thật không phải làm ít tài liệu mà là **nhầm lẫn "ít tài liệu" với "ít suy nghĩ"**.
- **Product owner là MỘT người có thẩm quyền**, không phải uỷ ban; vắng mặt hoặc không có quyền là nguyên nhân thất bại số một.
- **Công việc BA vẫn còn trong agile** — giá trị lớn nhất là giữ tầm nhìn tổng thể khi đội tập trung vào từng story.
- **Backlog được SẮP XẾP, không phẳng**, và có **độ chi tiết không đều** — chi tiết ở đầu, thô ở cuối.
- **Definition of ready bảo vệ đội** khỏi nhận vào story mơ hồ rồi mắc kẹt giữa iteration.
- **Phần "để" trong user story là phần quan trọng nhất** — nếu không viết được, hãy hỏi vì sao ta làm story này.
- **Ba chữ C: Card là lời nhắc, Conversation là nơi yêu cầu sống, Confirmation là acceptance criteria.**
- **Thẻ story CỐ Ý không đầy đủ** — nhưng nếu cuộc trò chuyện không diễn ra, bạn chỉ còn mẩu giấy vô dụng.
- Trong INVEST, hai chữ hay bị vi phạm nhất là **V (story theo tầng kỹ thuật không có giá trị)** và **E (không ước tính được nghĩa là chưa hiểu đủ)**.
- **Đừng ép mọi thứ vào khuôn user story** — quality attribute, business rule phức tạp và logic quyết định cần biểu diễn khác.
- **Story mapping bộc lộ khoảng trống** mà danh sách phẳng không bao giờ cho thấy.
- **Lát cắt ngang của story map bảo đảm bản phát hành đầu là một luồng công việc hoàn chỉnh nhưng tối giản.**
- **Chia epic theo bước quy trình, loại dữ liệu hoặc user class** — không bao giờ theo tầng kỹ thuật.
- **Story point là đơn vị tương đối** vì con người ước tính kích thước tương đối tốt hơn thời gian tuyệt đối.
- **Planning poker có giá trị ở cuộc thảo luận, không ở con số** — ước tính 2 và 13 báo hiệu hai cách hiểu khác nhau.
- **Không bao giờ so sánh velocity giữa các đội** và **không bao giờ dùng nó làm mục tiêu hiệu suất**.
- **Acceptance criteria khác nhau ở mỗi story; definition of done giống nhau ở mọi story.**
- **Thiếu definition of done tạo ra "nợ hoàn thiện" ẩn** — nguyên nhân phổ biến khiến agile trượt tiến độ âm thầm.
- **Yêu cầu phi chức năng đi vào constraint card, definition of done, acceptance criteria, hoặc enabler story.**
- **Xây một lát cắt dọc mỏng ngay iteration đầu** để phơi bày vấn đề kiến trúc khi sửa còn rẻ.
- Tuyên ngôn agile nói *"phần mềm chạy được HƠN tài liệu"*, **không phải "thay vì tài liệu"**.
- **Acceptance test tự động là tài liệu duy nhất không bao giờ lỗi thời**, vì chúng chạy.
- **Agile làm thay đổi RẺ HƠN, không MIỄN PHÍ** — thêm một story vẫn đẩy một story khác ra.
- **Nhiều mục backlog sẽ không bao giờ được làm — và đó là kết quả đúng đắn.**

## Tóm tắt

- Trong agile, **cùng những câu hỏi yêu cầu vẫn phải được trả lời**; chỉ khác ở thời điểm, hình thức và mức nghi thức.
- **Product backlog được sắp xếp theo giá trị và làm mịn liên tục** qua grooming, với definition of ready bảo vệ đội.
- **User story là lời nhắc về một cuộc trò chuyện**, được xác nhận bằng acceptance criteria và được đánh giá theo INVEST.
- **Story mapping cung cấp cấu trúc** mà backlog phẳng thiếu, giúp cắt bản phát hành theo luồng công việc hoàn chỉnh.
- **Ước tính tương đối cộng velocity cho dự báo trung thực** — miễn là bạn không lạm dụng chúng làm chỉ số hiệu suất.
- **Yêu cầu phi chức năng và công việc kiến trúc phải được đưa vào có chủ đích**, nếu không agile sẽ bỏ sót chúng.
- **Tài liệu vừa đủ nghĩa là ghi lại những gì sống lâu hơn trí nhớ của đội**, và mọi thực hành yêu cầu bạn đã học vẫn áp dụng — chỉ ở quy mô nhỏ hơn và thường xuyên hơn.
