# Sự kiện & kỹ thuật ở tầm bàn giao

Tầm bàn giao là nơi bốn sự kiện Agile quen thuộc diễn ra. Chúng dễ nhớ tên nhưng dễ lẫn mục
đích, và bài kiểm tra khai thác đúng điểm đó: mô tả một hoạt động **thật sự có xảy ra** trong
đội Agile, rồi hỏi nó thuộc sự kiện nào. Phương án sai luôn là **một sự kiện có thật khác**.

Cách vượt qua là học mỗi sự kiện theo hai vế: **nó để làm gì** và **nó KHÔNG để làm gì**.

## Bốn sự kiện, phân tách rõ

| Sự kiện | Để làm gì | KHÔNG để làm gì |
|---|---|---|
| **Backlog refinement** | Phân tích, sắp ưu tiên và chuẩn bị các hạng mục backlog; rà soát lại ưu tiên và loại bỏ hạng mục; story elaboration và story decomposition | Xác định các **task chi tiết** cần làm để hoàn thành từng hạng mục — việc đó thuộc planning workshop |
| **Planning workshop** | Lập kế hoạch các **task** cần thiết để hoàn thành iteration sắp tới (ở tầm bàn giao); thứ tự feature và kế hoạch release (ở tầm sáng kiến); mục tiêu và chỉ số (ở tầm chiến lược) | Bàn **phương án thiết kế chi tiết** — đội lẽ ra đã bàn những thứ đó rồi, trong story elaboration |
| **Review** | Trình diễn một **bản tăng trưởng của giải pháp đã hoàn thành, chạy được** cho người dùng và bên liên quan, để lấy phản hồi về mức độ phù hợp với nhu cầu người dùng | Lấy **phê duyệt**; rà soát code; rà soát kế hoạch cho phần tiếp theo |
| **Retrospective** | **Bàn một cách tường minh** về các cơ hội cải tiến liên tục cho quy trình và cách làm việc | Tạo ra danh sách story đã hoàn thành, một bảng Kanban đã cập nhật, hay danh sách task cho từng người |

Một mẹo đọc: nếu câu hỏi mô tả việc **nhìn về phía trước** (chuẩn bị, lập kế hoạch) thì đó
là refinement hoặc planning; nếu mô tả **nhìn lại** thì đó là review (nhìn lại sản phẩm) hoặc
retrospective (nhìn lại cách làm việc).

## Backlog refinement so với Planning workshop

Đây là cặp bị hoán đổi nhiều nhất trong bốn sự kiện, và ranh giới rất sắc:

- **Backlog refinement** trả lời: *hạng mục này là gì, có đáng làm không, lớn cỡ nào, đứng
  ở đâu trong hàng đợi?* Đây là nơi story được làm rõ và phân rã.
- **Planning workshop** trả lời: *để hoàn thành hạng mục đã chọn, đội cần làm những task
  nào trong iteration này?*

Vì thế câu hỏi *"BA cần giúp đội TRÁNH làm gì trong backlog refinement?"* có đáp án là
**xác định các task chi tiết cần thiết để hoàn thành từng hạng mục** — task được xác định
trong planning workshop.

Và chiều ngược lại cũng đúng: **backlog refinement là đầu vào then chốt của planning
workshop**. Không có backlog đã được tinh chỉnh thì buổi lập kế hoạch không có gì để lập
kế hoạch.

Ba việc **thực sự** thuộc backlog refinement, hay bị đưa ra làm phương án nhiễu: phân tích/
sắp ưu tiên/chuẩn bị hạng mục; rà soát ưu tiên và loại bỏ hạng mục; story elaboration và
story decomposition.

## Review: cái gì được trình diễn, và để làm gì

Trong một buổi review, thứ được trình diễn là **một bản tăng trưởng của giải pháp đã hoàn
thành** — sản phẩm chạy được. Ba thứ *không* phải:

- **UI mockup** — không chứng minh được cái gì đang chạy.
- **Code** — là một mảnh phía sau hậu trường, không phải sản phẩm chạy được.
- **Bảng cấu hình** — cũng là mảnh hậu trường, không phải sản phẩm chạy được.

Và **vì sao** đội tổ chức review: để **lấy phản hồi từ bên liên quan về mức độ bản tăng
trưởng phù hợp với nhu cầu người dùng**. Ba mục đích *không* phải:

- **Lấy phê duyệt** — review không phải cửa phê duyệt; có phản hồi nhưng là để học và đối
  thoại, không phải để ký duyệt.
- **Peer review code** — không phải một phần của review theo định nghĩa Agile Extension v2.
- **Rà soát kế hoạch cho phần tiếp theo** — cũng không phải một phần của review.

Hai câu hỏi này — *cái gì được trình diễn* và *để làm gì* — xuất hiện tách rời nhau, nên
hãy nhớ cả hai vế.

## Retrospective: đầu ra là gì

Retrospective là kỹ thuật ở tầm bàn giao dùng để **bàn một cách tường minh về các cơ hội
cải tiến liên tục**. Cụm "bàn một cách tường minh về cải tiến liên tục" là dấu hiệu nhận
diện; nếu nó xuất hiện trong đề bài, ba phương án còn lại không cần đọc.

**Đầu ra then chốt của một retrospective là một danh sách action item.** Cải tiến liên tục
nghĩa là hành động. Ba thứ *không* phải đầu ra:

- **Danh sách story đã hoàn thành** — có thể là **đầu vào** của retrospective, nhưng không
  bao giờ là đầu ra.
- **Bảng Kanban đã cập nhật** — không phải đầu ra của retrospective.
- **Danh sách task cho từng người** — có thể phát sinh vài task, nhưng đó không phải đầu ra
  chính và không phải thứ làm nên một retrospective tốt.

Retrospective cũng là nơi nguyên tắc **Thúc đẩy cộng tác và cải tiến liên tục** thể hiện rõ
nhất. Nếu một câu hỏi ghép sự kiện với nguyên tắc, cặp đúng là *Retrospective + Thúc đẩy
cộng tác và cải tiến liên tục*.

## Story elaboration và các cuộc bàn về thiết kế

**Phương án thiết kế chi tiết được bàn trong story elaboration, TRƯỚC khi iteration bắt
đầu** — không phải trong planning workshop, không phải trong review, không phải trong
retrospective. Khi đội bước vào buổi lập kế hoạch, những lựa chọn thiết kế đó lẽ ra đã được
bàn xong; buổi lập kế hoạch chỉ còn chia task.

Story elaboration chủ yếu sống ở **tầm bàn giao**, dù backlog refinement ở tầm sáng kiến
cũng có một phần làm rõ feature và tạo story.

## Quan sát (Observation)

**Observation** là kỹ thuật ở tầm bàn giao dùng để **hiểu người dùng thực sự thực hiện một
công việc hoặc sử dụng giải pháp như thế nào**. Ba kỹ thuật hay bị đưa ra so sánh:

| Kỹ thuật | Nó làm gì — và vì sao không phải đáp án |
|---|---|
| **User story** | Giúp truyền đạt và phân tích công việc của người dùng, nhưng không giúp ta *hiểu* công việc đó tốt bằng việc quan sát trực tiếp |
| **Acceptance criteria** | Định nghĩa ranh giới của một story, giúp kiểm tra và xác nhận giải pháp đã đáp ứng nhu cầu — không phải công cụ tìm hiểu |
| **Purpose alignment model** | Đánh giá ý tưởng trong bối cảnh giá trị khách hàng và giá trị nghiệp vụ — một kỹ thuật tầm chiến lược |

Nói gọn: khi câu hỏi có động từ **"hiểu người dùng làm việc thế nào"**, đáp án là quan sát.
Khi câu hỏi có động từ **"truyền đạt"** hoặc **"xác nhận"**, đáp án là story hoặc acceptance
criteria.

## Điểm cốt lõi

- Bốn sự kiện có mục đích tách bạch; phương án sai luôn là một sự kiện có thật khác.
- **Task chi tiết → planning workshop**, không phải backlog refinement. **Thiết kế chi tiết
  → story elaboration**, trước iteration.
- Backlog refinement là **đầu vào** của planning workshop, và nó **liên tục**.
- Review trình diễn **bản tăng trưởng đã hoàn thành, chạy được**, để **lấy phản hồi** —
  không phải mockup, không phải code, không phải để phê duyệt.
- Đầu ra của retrospective là **danh sách action item**. Danh sách story đã xong là đầu vào,
  không phải đầu ra.
- **Observation** là kỹ thuật để hiểu người dùng thực sự làm việc thế nào.
