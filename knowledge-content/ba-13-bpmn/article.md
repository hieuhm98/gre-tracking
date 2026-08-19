# BPMN & mô hình hoá quy trình nghiệp vụ

## 1. BPMN là gì và vì sao nó tồn tại

**BPMN (Business Process Model and Notation)** là **chuẩn quốc tế** để mô hình hoá quy trình nghiệp vụ, do OMG duy trì.

**Vấn đề mà nó giải quyết:** flowchart rất dễ đọc nhưng **thiếu ký hiệu cho những thứ quan trọng trong nghiệp vụ thật** — sự kiện thời gian, thông điệp giữa các bên, quy trình con, xử lý lỗi, luồng chạy song song. Khi bạn cố vẽ những thứ đó bằng flowchart, mỗi người vẽ một kiểu và không ai chắc mình hiểu đúng.

| | **Flowchart** | **BPMN** |
|---|--------------|----------|
| **Bộ ký hiệu** | Đơn giản, vài hình cơ bản | Phong phú và chuẩn hoá |
| **Ai đọc được** | Gần như ai cũng đọc được ngay | Cần một chút đào tạo về ký hiệu |
| **Thể hiện được** | Bước, quyết định, luồng | Thêm: sự kiện, thông điệp, quy trình con, luồng song song, xử lý lỗi |
| **Phù hợp** | Quy trình đơn giản, phác nhanh | Quy trình phức tạp, nhiều bên, cần chuẩn xác |
| **Tự động hoá được** | Không | Có — nhiều công cụ chạy được BPMN trực tiếp |

> **Chọn công cụ theo người đọc, không theo độ oai của ký hiệu.** Nếu bạn vẽ BPMN cho một nhóm chưa từng thấy nó, hãy chuẩn bị chú giải ký hiệu và cùng đi qua một ví dụ trước.

---

## 2. Bốn nhóm ký hiệu cốt lõi

Bạn không cần thuộc hết BPMN. **Khoảng 20% ký hiệu đủ để vẽ 80% quy trình thực tế.**

### Flow object — thứ xảy ra

| Ký hiệu | Hình | Ý nghĩa |
|---------|------|---------|
| **Event** | Hình tròn | Điều gì đó xảy ra: bắt đầu, kết thúc, hoặc giữa chừng |
| **Activity** | Hình chữ nhật bo góc | Công việc được thực hiện |
| **Gateway** | Hình thoi | Điểm rẽ nhánh hoặc hợp nhánh |

### Connecting object — cách nối

- **Sequence flow** (mũi tên nét liền) — thứ tự thực hiện **trong cùng một pool**.
- **Message flow** (mũi tên nét đứt) — thông điệp trao đổi **giữa hai pool khác nhau**.
- **Association** (nét chấm) — nối một chú thích hoặc tài liệu với một phần tử.

> **Lỗi ký hiệu phổ biến nhất: dùng mũi tên nét liền để nối hai pool khác nhau.** Giữa các pool chỉ có thông điệp, không có luồng điều khiển — vì mỗi pool là một tổ chức độc lập, bạn không điều khiển được quy trình của họ.

### Swimlane — ai làm

- **Pool** — một bên tham gia độc lập: công ty bạn, khách hàng, ngân hàng, nhà cung cấp.
- **Lane** — một vai trò hoặc bộ phận **bên trong** một pool.

### Artifact — thông tin bổ sung

- **Data object** — tài liệu hoặc dữ liệu được tạo ra hoặc sử dụng.
- **Annotation** — ghi chú giải thích.

---

## 3. Event — nhiều hơn bạn nghĩ

Event là nơi BPMN vượt xa flowchart. **Ba vị trí và nhiều loại.**

**Ba vị trí:**

- **Start event** (viền mảnh) — khởi động quy trình.
- **Intermediate event** (viền đôi) — xảy ra giữa chừng.
- **End event** (viền đậm) — kết thúc quy trình.

**Các loại thường dùng nhất:**

| Loại | Ký hiệu bên trong | Ví dụ |
|------|------------------|-------|
| **None** | Trống | Bắt đầu hoặc kết thúc thông thường |
| **Message** | Phong bì | Nhận đơn hàng từ khách; gửi email xác nhận |
| **Timer** | Đồng hồ | Chạy vào 0h mỗi ngày; chờ 3 ngày rồi nhắc |
| **Error** | Tia sét | Xử lý thất bại, chuyển sang luồng khắc phục |
| **Conditional** | Danh sách | Khi tồn kho xuống dưới ngưỡng |

> **Timer event là ký hiệu mà BA hay bỏ sót nhất trong đặc tả.** Rất nhiều quy trình có bước *"nếu sau 3 ngày chưa phản hồi thì..."* — và nếu bạn không vẽ nó ra, nó sẽ không được hiện thực.

**Boundary event** — event gắn vào **viền của một activity**, thể hiện điều gì xảy ra nếu có gì đó xảy đến **trong lúc** activity đang chạy.

> Ví dụ: gắn một timer event vào viền của activity *"Chờ khách xác nhận"* để thể hiện *"nếu sau 48 giờ chưa xác nhận thì tự động huỷ"*. **Đây là cách BPMN thể hiện timeout — thứ mà flowchart rất khó diễn đạt.**

---

## 4. Gateway — rẽ nhánh cho đúng

Đây là nơi người mới hay nhầm nhất. **Ba loại gateway phổ biến:**

**1. Exclusive gateway (XOR) — hình thoi có dấu X.**

Chọn **đúng MỘT nhánh**. Các điều kiện phải loại trừ nhau.

> *"Đơn trên 50 triệu → luồng phê duyệt; đơn từ 50 triệu trở xuống → luồng xử lý thẳng."*

**2. Parallel gateway (AND) — hình thoi có dấu cộng.**

**Tất cả các nhánh cùng chạy.** Gateway hợp nhánh chờ tất cả hoàn thành.

> *"Sau khi nhận đơn: đồng thời kiểm tra tín dụng VÀ kiểm tra tồn kho. Chỉ khi cả hai xong mới xác nhận đơn."*

**3. Inclusive gateway (OR) — hình thoi có hình tròn.**

**Một hoặc nhiều nhánh cùng chạy**, tuỳ điều kiện nào đúng.

> *"Nếu đơn có hàng đông lạnh → chuẩn bị xe lạnh. Nếu đơn có hàng dễ vỡ → đóng gói đặc biệt. Một đơn có thể cần cả hai."*

> **Ba lỗi gateway phổ biến nhất:**
>
> **1. Dùng XOR khi thực ra các nhánh có thể cùng xảy ra.** Kết quả: hệ thống bỏ sót một xử lý cần thiết.
>
> **2. Quên nhánh mặc định của XOR.** Mọi gateway XOR phải có đủ nhánh cho **mọi kết quả có thể**, kể cả trường hợp không khớp điều kiện nào.
>
> **3. Mở nhánh song song mà không hợp lại.** Nếu bạn tách bằng AND, bạn phải hợp bằng AND, nếu không quy trình sẽ chạy tiếp trước khi mọi nhánh xong.

---

## 5. Pool, lane và ranh giới tổ chức

**Pool đại diện cho một bên tham gia độc lập — một tổ chức mà bạn không điều khiển được quy trình bên trong.**

**Hai cách vẽ pool của bên ngoài:**

- **Black box pool** (pool rỗng, không vẽ gì bên trong) — khi bạn chỉ quan tâm tới **thông điệp trao đổi** với họ, không quan tâm họ làm gì bên trong. **Đây là cách dùng phổ biến và đúng nhất cho khách hàng, ngân hàng, nhà cung cấp.**
- **Pool đầy đủ** — khi bạn thực sự cần mô tả quy trình bên trong họ.

**Lane chia pool theo vai trò hoặc bộ phận bên trong tổ chức của bạn.**

> **Giá trị lớn nhất của lane: nó làm lộ ra các lần chuyển giao giữa vai trò — nơi hay xảy ra chậm trễ và mất thông tin nhất trong quy trình nghiệp vụ.**

**Quy tắc quan trọng:**

- **Trong cùng pool:** dùng sequence flow (nét liền).
- **Giữa hai pool:** chỉ dùng message flow (nét đứt).
- **Một quy trình con không được vượt qua ranh giới pool.**

---

## 6. Mô hình as-is và to-be

**As-is** mô tả quy trình **đang chạy hôm nay**. **To-be** mô tả quy trình **sau khi có hệ thống mới**.

**Vì sao cần as-is:**

- Tạo **hiểu biết chung** — thường lần đầu tiên có ai đó vẽ ra toàn bộ quy trình đầu-cuối.
- **Bộc lộ lãng phí**: bước lặp, chờ đợi, chuyển giao không cần thiết.
- Cho **cơ sở đo lường** để chứng minh cải tiến sau này.
- **Tiết lộ ai thực sự tham gia** — thường nhiều hơn ai cũng nghĩ.

> **Nhưng đừng đầu tư quá nhiều vào as-is.** Rủi ro rất thực: đội dành ba tháng vẽ mô hình hoàn hảo tới từng chi tiết cho một quy trình sắp bị thay thế. **Hãy vẽ đủ để hiểu vấn đề và đo lường được, rồi chuyển sang to-be.**

**Nguyên tắc thiết kế to-be:**

- **Bắt đầu từ kết quả mong muốn** rồi đi ngược lại.
- **Giảm số lần chuyển giao** — mỗi lần thêm độ trễ và rủi ro mất thông tin.
- **Đưa quyết định xuống mức thấp nhất có thể**, chỉ đẩy lên khi vượt ngưỡng.
- **Song song hoá những gì có thể** thay vì giữ trình tự tuần tự.
- **Tách luồng chính khỏi luồng ngoại lệ** — rất nhiều quy trình chậm cho mọi người vì được thiết kế quanh 5% trường hợp hiếm.

> **Câu hỏi quan trọng nhất khi chuyển từ as-is sang to-be: bước này tồn tại vì nhu cầu nghiệp vụ, hay vì hạn chế của cách làm cũ?** Nếu là lý do thứ hai, đừng tự động hoá nó — hãy loại bỏ nó.

---

## 7. Từ mô hình quy trình tới yêu cầu

Mô hình chỉ có giá trị khi nó dẫn tới yêu cầu cụ thể. **Với mỗi phần tử trong mô hình to-be, hãy hỏi:**

| Phần tử | Câu hỏi dẫn tới yêu cầu |
|---------|------------------------|
| **Activity** | Hệ thống cung cấp chức năng gì để hỗ trợ bước này? Dữ liệu nào vào và ra? Ai được phép làm? |
| **Gateway** | Điều kiện chính xác là gì? Đây là business rule nào? Có nhánh nào chưa được phủ? |
| **Timer event** | Thời hạn cụ thể là bao lâu? Tính từ mốc nào? Điều gì xảy ra khi hết hạn? |
| **Message flow** | Định dạng dữ liệu là gì? Đồng bộ hay bất đồng bộ? Điều gì xảy ra khi bên kia không phản hồi? |
| **Error event** | Lỗi nào được xử lý? Ai được thông báo? Dữ liệu dở dang xử lý thế nào? |
| **Lane** | Ai thuộc vai trò này? Họ cần quyền gì? |

> **Đây là nơi mô hình trả cổ tức: mỗi ký hiệu bạn vẽ ra đều sinh ra một hoặc nhiều câu hỏi cụ thể, và mỗi câu hỏi được trả lời là một yêu cầu không bị bỏ sót.**

---

## 8. Điểm cốt lõi

- **BPMN là chuẩn quốc tế** giải quyết điểm yếu của flowchart: thiếu ký hiệu cho sự kiện, thông điệp, quy trình con và luồng song song.
- **Khoảng 20% ký hiệu đủ để vẽ 80% quy trình thực tế** — không cần thuộc hết.
- **Chọn công cụ theo người đọc**, và chuẩn bị chú giải nếu nhóm chưa quen ký hiệu.
- **Sequence flow nét liền dùng trong cùng pool; message flow nét đứt dùng giữa hai pool.**
- **Lỗi ký hiệu phổ biến nhất là nối hai pool bằng mũi tên nét liền** — bạn không điều khiển được quy trình của tổ chức khác.
- **Timer event là ký hiệu BA hay bỏ sót nhất**; nếu không vẽ ra, quy tắc *"sau 3 ngày thì..."* sẽ không được hiện thực.
- **Boundary event là cách BPMN thể hiện timeout** — thứ mà flowchart rất khó diễn đạt.
- **XOR chọn đúng một nhánh; AND chạy tất cả; OR chạy một hoặc nhiều tuỳ điều kiện.**
- Ba lỗi gateway: **dùng XOR khi các nhánh có thể cùng xảy ra, quên nhánh mặc định, mở AND mà không hợp lại**.
- **Black box pool là cách đúng nhất cho khách hàng, ngân hàng và nhà cung cấp** khi bạn chỉ quan tâm thông điệp trao đổi.
- **Lane làm lộ ra các lần chuyển giao giữa vai trò** — nơi hay xảy ra chậm trễ và mất thông tin nhất.
- **Đừng đầu tư quá nhiều vào mô hình as-is** cho một quy trình sắp bị thay thế.
- Thiết kế to-be: **bắt đầu từ kết quả, giảm chuyển giao, hạ thấp điểm quyết định, song song hoá, tách luồng ngoại lệ**.
- Câu hỏi quan trọng nhất: **bước này tồn tại vì nhu cầu nghiệp vụ hay vì hạn chế của cách làm cũ?**
- **Mỗi ký hiệu trong mô hình to-be sinh ra một hoặc nhiều câu hỏi cụ thể**, và mỗi câu trả lời là một yêu cầu không bị bỏ sót.
- **Message flow luôn kéo theo câu hỏi về định dạng dữ liệu và hành vi khi bên kia không phản hồi.**

## 9. Tóm tắt

- BPMN mạnh hơn flowchart ở **sự kiện, thông điệp giữa các bên, luồng song song và xử lý lỗi** — đúng những thứ quan trọng trong nghiệp vụ thật.
- **Pool cho ranh giới tổ chức, lane cho vai trò bên trong**, và quy tắc nối giữa chúng phải được tôn trọng.
- **As-is để hiểu và đo lường; to-be để thiết kế** — và đừng sa lầy ở as-is.
- Giá trị cuối cùng của mô hình nằm ở chỗ nó **biến thành các câu hỏi cụ thể dẫn tới yêu cầu đầy đủ hơn**.
