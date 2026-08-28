# User story, sản phẩm mô hình hoá, Spike & MVP

Bốn kỹ thuật trong "họ story" có tên gần giống nhau tới mức chúng bị hoán đổi một cách hệ
thống. Cộng thêm ba chữ C, bộ tiêu chí INVEST, job story, personas, Gherkin, ba loại spike
và ba bước MVP — đây là chủ đề nhiều thuật ngữ nhất trong toàn bộ phần phân tích Agile.

Tin tốt: gần như mọi câu hỏi ở đây là câu hỏi **định nghĩa**. Học đúng một câu cho mỗi
thuật ngữ là đủ.

## Họ "story": bốn kỹ thuật dễ lẫn

| Kỹ thuật | Nó thực sự là gì |
|---|---|
| **Story mapping** | Sắp xếp user story của một sản phẩm hoặc release theo **trình tự luồng công việc của người dùng nằm ngang** (trái sang phải), rồi chi tiết hoá và sắp ưu tiên các story bên dưới **theo chiều dọc đi xuống** |
| **Storyboarding** | Một kỹ thuật trực quan phân tích tương tác của người dùng với sản phẩm bằng cách **phác hoạ từng bước** của trải nghiệm người dùng |
| **Story decomposition** | Phân rã công việc từ bức tranh lớn xuống chi tiết, theo thứ tự **goal → feature → story → acceptance criteria** |
| **Story elaboration** | Bổ sung chi tiết cho một story **trước khi iteration bắt đầu**, bao gồm các cuộc bàn về thiết kế chi tiết |

Về **story mapping**, có một câu hỏi riêng về cách dùng đúng: nó được dùng tốt nhất như một
**hoạt động tự điều phối hoặc hoạt động nhóm**. Ba cách dùng sai:

- Không phải thứ BA làm rồi **gửi cho bên liên quan phê duyệt** trước khi release.
- Không phải **kỹ thuật lập roadmap** — story map có trọng tâm khác product roadmap.
- Không phải thứ **đội phát triển dùng để tổ chức task** của họ.

Về **story decomposition**, thứ tự bị hỏi trực tiếp. Hai phương án nhiễu quen thuộc:
*"portfolio, project, release, iteration"* — cũng đi từ lớn tới nhỏ nhưng không phải phân rã
story; và *"user story, story map, storyboard, story split"* — không phải một phép phân rã
nào cả.

## Thế nào là một user story tốt

Một user story nêu rõ **ai là người dùng cuối, họ cần gì, và vì sao**. Ba lỗi kinh điển:

| Ví dụ | Vì sao sai |
|---|---|
| "Là một **developer**, tôi cần tạo ra một báo cáo CDU." | User story không nói về việc developer cần làm gì — trừ khi developer chính là khách hàng cuối của sản phẩm. |
| "Là một **product owner**, tôi muốn có báo cáo cho từng học viên." | Tương tự — user story không nói về việc product owner muốn gì, trừ khi PO là người dùng cuối. |
| "Là một học viên, tôi muốn có **một nút CDU trên màn hình dashboard** để bấm ra báo cáo CDU, để tôi có thể nhận CDU." | Story tập trung vào mục tiêu và hành động của người dùng, **không phải chi tiết màn hình**. Câu này chốt cứng giao diện thay vì mục tiêu. |

Và đây là phiên bản đúng: *"Là một học viên, tôi cần xem chi tiết những khoá học mình đã
hoàn thành, để có thể nhận CDU."* — có người dùng cuối, có nhu cầu, có lý do, không có
giao diện.

## Ba chữ C và INVEST

**Ba chữ C của một user story: Card, Conversation, Confirmation.** (Tấm thẻ, cuộc trò
chuyện, sự xác nhận.) Mọi phương án nhiễu đều thay một trong ba bằng *"customer"* hoặc
*"context"* — hãy đếm cẩn thận, có phương án sai một từ, có phương án sai hai từ.

**Chiến lược tốt nhất để đảm bảo user story chất lượng cao là tuân theo bộ tiêu chí
INVEST**: Independent, Negotiable, Valuable, Estimable, Small, Testable (Độc lập, Có thể
thương lượng, Có giá trị, Ước lượng được, Nhỏ, Kiểm thử được).

Ba cách làm sai bị bác bỏ:

- **Giữ nguyên story đúng như lúc được gửi tới** — sai, vì phần lớn story được gửi tới đội
  đều cần tinh chỉnh thêm.
- **Giao cho developer đánh giá chất lượng** — sai, vì họ có thể chưa được đào tạo về thế
  nào là một story chất lượng cao.
- **Đặc tả chi tiết kỹ thuật và các thành phần cần cập nhật** — sai, vì đó hoàn toàn không
  phải một khía cạnh của story tốt.

## Job story, user story và personas

| Sản phẩm | Trọng tâm |
|---|---|
| **User story** | Người dùng, mục tiêu của họ và lý do — một biểu diễn của nhu cầu khách hàng |
| **Job story** | Cùng ý tưởng nhưng soi vào **tình huống của người dùng, động cơ của họ, và kết quả họ mong muốn**. Chọn job story khi câu hỏi nhấn mạnh *tình huống* và *động cơ*. |
| **Personas** | **Nguyên mẫu người dùng (user archetype)** tạo hiểu biết chung về **AI** là khách hàng. Đây là kỹ thuật tầm sáng kiến gắn chặt nhất với nguyên tắc "nghĩ như khách hàng". |
| **Acceptance criteria** | Ranh giới của một story; dùng để kiểm tra và xác nhận giải pháp đã đáp ứng nhu cầu. Cung cấp rất ít thông tin về động cơ người dùng. |

Ranh giới cần nhớ: **personas trả lời AI**, **job story trả lời TRONG TÌNH HUỐNG NÀO VÀ VÌ
ĐỘNG CƠ GÌ**, **storyboarding trả lời TRẢI NGHIỆM DIỄN RA THẾ NÀO**.

## Cú pháp Gherkin

Gherkin diễn đạt acceptance criteria dưới dạng **Given / When / Then**:

| Từ khoá | Nó đại diện cho |
|---|---|
| **GIVEN** | Các điều kiện hoặc tiền điều kiện |
| **WHEN** | **Hành động người dùng thực hiện** trên sản phẩm |
| **THEN** | Phản hồi của hệ thống hoặc sản phẩm |
| *Scenario* | Cả ba phần ghép lại |

Behaviour Driven Development, vốn dùng Gherkin, là ví dụ rõ nhất của nguyên tắc **"cụ thể
hoá bằng ví dụ"**, và nó nằm ở **tầm bàn giao**.

## Spike và MVP

**Spike** là một **nỗ lực có giới hạn thời gian (time-boxed)** dùng để điều tra, nghiên cứu
hoặc làm phần việc cần thiết nhằm **loại bỏ sự mơ hồ** và ước lượng, bàn giao được một hạng
mục backlog. Có **đúng ba loại**:

| Loại spike | Để làm gì |
|---|---|
| **Functional** | Tách một user story lớn thành nhiều story nhỏ, và xác định chỗ nào có rủi ro và độ phức tạp |
| **Technical** | Hiểu tính khả thi và thiết kế kỹ thuật |
| **Exploratory** | Khám phá rủi ro và tác động |

Hai cái tên **không** phải loại spike nhưng luôn xuất hiện làm phương án nhiễu:

- **Research** — nghiên cứu không phải một loại spike; nó là một hoạt động **phổ biến được
  làm bên trong** một spike.
- **Design** — thiết kế cũng không phải một loại spike, dù những gì học được trong spike có
  thể ảnh hưởng mạnh tới các quyết định thiết kế.

**MVP** — tài liệu gốc rất nghiêm ngặt về chính cái tên: đó là **Minimal Viable Product**.
*"Most Valuable Product"*, *"Most Viable Product"* và *"Minimum Value Product"* đều được đưa
ra làm phương án nhiễu và đều sai.

MVP là **lượng chức năng tối thiểu cần có trong sản phẩm để bắt đầu học hỏi và lấy được
phản hồi phục vụ các quyết định tiếp theo** — tức là những năng lực đủ để việc phát hành một
sản phẩm mới trở nên xứng đáng.

**Ba bước của kỹ thuật MVP:**

1. Xác định vấn đề
2. Xác định tập tính năng tối thiểu
3. Phân tích những gì học được từ người dùng

Mọi phương án sai cho câu hỏi này đều là một quy trình **backlog-và-phê-duyệt** (tạo backlog
→ rà soát với bên liên quan → xin phê duyệt), tức đúng cái khung tư duy phi-Agile mà Agile
Extension tránh.

Ở tầm chiến lược, MVP được dùng để **sắp ưu tiên phân bổ nguồn lực và tăng tốc độ học hỏi
của tổ chức**.

## Điểm cốt lõi

- Story mapping = **luồng ngang, ưu tiên dọc**, dùng như hoạt động nhóm — không gửi đi phê
  duyệt, không phải roadmap. Storyboarding = **phác hoạ từng bước** trải nghiệm.
- Story decomposition = **goal → feature → story → acceptance criteria**.
- User story nêu **ai / cần gì / vì sao**, không nêu chi tiết màn hình và không nói về nhu
  cầu của developer hay PO.
- Ba chữ C = **Card, Conversation, Confirmation**. Chất lượng story = **INVEST**.
- **Personas = AI**; **job story = tình huống + động cơ**; **acceptance criteria = ranh giới**.
- Gherkin: GIVEN = điều kiện, **WHEN = hành động người dùng**, THEN = phản hồi hệ thống.
- Ba loại spike: **functional, technical, exploratory**. Research và design **không** phải loại spike.
- **Minimal** Viable Product. Ba bước: **xác định vấn đề → tập tính năng tối thiểu → phân
  tích điều học được**.
