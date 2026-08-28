# Kỹ thuật tầm chiến lược & tầm sáng kiến

Hai tầm trên cùng có một tập kỹ thuật riêng, và chúng bị nhầm lẫn nhiều hơn hẳn các kỹ
thuật ở tầm bàn giao — vì tài liệu gốc mô tả chúng bằng thứ ngôn ngữ doanh nghiệp gần như
hoán đổi được cho nhau. "Tối ưu phân bổ nguồn lực", "hỗ trợ ra quyết định và sắp ưu tiên",
"cải thiện cộng tác giữa các đội" xuất hiện trong định nghĩa của nhiều kỹ thuật khác nhau.

Cách duy nhất để tách chúng ra là học **đúng cụm từ đặc trưng** của từng kỹ thuật.

## Kỹ thuật tầm chiến lược — bảng định nghĩa

| Kỹ thuật | Dùng để làm gì ở tầm chiến lược |
|---|---|
| **Purpose alignment model** | Sắp ưu tiên các sáng kiến tiềm năng và hiểu **cơ cấu nguồn lực tối ưu** cùng trọng tâm chung của các sáng kiến trên toàn tổ chức |
| **Portfolio Kanban** | Cung cấp **khả năng nhìn thấy tiến độ theo thời gian thực** của các sáng kiến trên toàn danh mục; thường dùng kèm balanced scorecard và value stream map để tối ưu phân bổ nguồn lực |
| **Product roadmap** | Truyền đạt **hướng đi tương lai dự kiến của sản phẩm** và cải thiện cộng tác giữa các đội ở những sáng kiến khác nhau; cũng hỗ trợ ra quyết định và sắp ưu tiên |
| **Value stream mapping** | Hiểu việc **tạo ra giá trị xuyên suốt toàn bộ trải nghiệm khách hàng**, để sắp ưu tiên, lập kế hoạch và tích hợp việc tạo giá trị cùng giảm lãng phí giữa các sáng kiến |
| **Real options** | Hiểu **khung thời gian phù hợp để ra quyết định** — tức một quyết định có thể trì hoãn có trách nhiệm được bao lâu |
| **Planning workshop** | Lập kế hoạch phân bổ nguồn lực trên nhiều sáng kiến và tạo hiểu biết chung về mục đích của một sáng kiến mới |
| **Minimal Viable Product** | Sắp ưu tiên phân bổ nguồn lực và **tăng tốc độ học hỏi của tổ chức** |
| **Value modeling** | Cung cấp thông tin cho R&D, marketing và bán hàng, nhìn khách hàng của toàn tổ chức |

## Bốn kỹ thuật dễ lẫn nhất

Nếu bạn chỉ nhớ được bốn cụm từ, hãy nhớ bốn cụm này — chúng là thứ tách bốn kỹ thuật hay
bị hoán đổi nhất:

- Purpose alignment model → **cơ cấu nguồn lực tối ưu** cho các sáng kiến
- Portfolio Kanban → **tiến độ theo thời gian thực** trên toàn danh mục
- Product roadmap → **hướng đi tương lai dự kiến của sản phẩm**
- Value stream mapping → **toàn bộ trải nghiệm khách hàng**

Và một cụm thứ năm nữa, cho kỹ thuật duy nhất trả lời câu hỏi về *thời điểm*:

- Real options → **quyết định này còn có thể chờ bao lâu**

Real options là kỹ thuật duy nhất trong bảng nói về **khi nào**, không nói về **cái gì**.
Nếu câu hỏi hỏi về thời điểm ra quyết định, không cần đọc ba phương án còn lại.

## Vision statement và chỉ số tác động

**Vision statement** trong bối cảnh Agile là **một tuyên bố ngắn gọn về mục tiêu, phạm vi
và lợi ích kỳ vọng** — ít chữ, thường kèm hình ảnh. Hai phương án nhiễu quen thuộc bị bác
bỏ thẳng:

- *"Một tài liệu chính thức mô tả đầy đủ, chi tiết mục tiêu, phạm vi và lợi ích"* — tài
  liệu chính thức dày đặc không phải cách làm việc Agile.
- *"Một project charter để khởi động dự án"* — nghe hợp lý, nhưng charter là **di sản của
  cách làm việc cũ**; không cần cả một charter ở đây.

**Chỉ số tác động (impact metric)** trong buổi visioning phải **hướng khách hàng và hướng
giá trị**, và phải có **giá trị nền (baseline) và giá trị mục tiêu**. So sánh:

| Ví dụ | Có phải chỉ số tác động tốt? |
|---|---|
| Tăng số lượt mua trên mỗi khách hàng | ✔ Tốt — mô tả thay đổi hành vi khách hàng |
| Giảm thời gian hoàn tất một đơn đăng ký | ✔ Tốt — mô tả thay đổi trải nghiệm khách hàng |
| Tạo được sự trung thành và khách quay lại | ✔ Tốt — mô tả thay đổi hành vi khách hàng |
| Triển khai một bản nâng cấp phần mềm | ✘ Không — đây là **đầu ra đội sẽ tạo ra**, không phải tác động lên khách hàng |

Quy tắc gọn: **chỉ số mô tả thứ đội sẽ XÂY thì không bao giờ là chỉ số tác động.** Chỉ số
tác động mô tả thay đổi trong hành vi của khách hàng hoặc của doanh nghiệp.

## Phân tích Kano và Impact mapping

**Kano analysis** xem xét những đặc tính sản phẩm nào sẽ trở thành **yếu tố khác biệt** và
**thúc đẩy sự hài lòng của khách hàng**, để không lãng phí công sức vào các tính năng không
làm dịch chuyển sự hài lòng. Nếu câu hỏi có đủ ba dấu hiệu — *yếu tố khác biệt* + *sự hài
lòng của khách hàng* + *tránh lãng phí công vào tính năng* — thì đáp án là Kano, không phải
impact mapping, không phải value modeling, không phải portfolio Kanban.

**Impact map** là một hình trực quan nhẹ, phân rã mục tiêu tổ chức thành các sản phẩm bàn
giao cụ thể, giữ mọi bên liên quan tập trung vào **VÌ SAO** thay vì chỉ vào tính năng. Bốn
thành phần của nó, đúng thứ tự:

> **Goal → Actors → Impacts → Deliverables**
> (Mục tiêu → Các tác nhân → Các tác động → Các sản phẩm bàn giao)

Các phương án nhiễu quen thuộc là những danh từ Agile ghép sai tổ hợp: *"epic, theme,
feature và story"*, *"impact, component, feature và story"*, *"kế hoạch chiến lược, release,
sprint và story"*. Chúng đều là từ vựng thật, nhưng không phải thành phần của impact map.

Cùng nhóm này còn một cái tên **hoàn toàn bịa**: *"business value map"* — không phải kỹ
thuật nào trong Agile Extension to the BABOK. Thấy là loại.

## Ước lượng tương đối

**Relative estimating** là một **kỹ thuật mang tính cộng tác**, trong đó cuộc đối thoại về
kiến thức, kinh nghiệm lịch sử và các giả định là điều then chốt. Về mặt thực hành, nó dùng
**bậc độ lớn (order of magnitude)** và **so sánh một hạng mục với những hạng mục đã bàn giao
trước đó** để phán đoán hạng mục này sẽ mất bao lâu.

Bốn hiểu sai bị bác bỏ rõ ràng:

- Nó **không phải công thức** — không có phép tính nào cho ra con số.
- Nó **không phải công cụ** sinh ra một số Fibonacci từ user story.
- Nó **không phải việc BA và Scrum Master làm thay** để trình lên lãnh đạo.
- Nó **không phải việc BA và Product Owner làm thay** đội. **Đội** mới là người ước lượng.

Dữ liệu lịch sử *có thể* được cân nhắc trong một ước lượng tương đối, nhưng nó không phải
thành phần chính. Và "phán đoán tốt nhất của đội dựa trên kinh nghiệm" thì quá mỏng — nó
thiếu mất phần so sánh và phần bậc độ lớn.

## Backlog refinement và đo lường value stream

**Backlog refinement ở tầm sáng kiến** là việc sắp ưu tiên và sắp thứ tự các feature, và nó
diễn ra **liên tục, nhiều lần trong suốt sáng kiến** — không phải một lần lúc khởi động,
không phải bên trong buổi planning workshop của iteration, và không phải trong một strategy
workshop trước khi sáng kiến bắt đầu. Backlog refinement cũng chính là **đầu vào then chốt**
cho một planning workshop.

**Làm sao biết một phần thay đổi value stream đã có hiệu quả?** Bằng cách **đo xem từng
phần đã thay đổi đang cải thiện value stream tổng thể ra sao**. Ba cách đo sai:

- Đếm số feature đã bàn giao — đó là đo **đầu ra**, không đo giá trị.
- Báo cáo số cột mốc đã đạt — cũng là đo đầu ra.
- Hỏi khách hàng nghĩ gì — ý kiến khách hàng quan trọng, nhưng chỉ khi đi kèm các thước đo
  gắn với giá trị, không đứng một mình.

## Điểm cốt lõi

- Học **cụm từ đặc trưng**: purpose alignment = *cơ cấu nguồn lực*; portfolio Kanban =
  *thời gian thực trên danh mục*; product roadmap = *hướng đi tương lai*; value stream
  mapping = *toàn bộ trải nghiệm khách hàng*; real options = *quyết định chờ được bao lâu*.
- Vision statement = **ngắn gọn** về mục tiêu, phạm vi, lợi ích. Project charter là di sản
  của cách làm cũ.
- Chỉ số tác động phải là **thay đổi hành vi khách hàng**, có baseline và mục tiêu. Thứ đội
  sẽ xây không bao giờ là chỉ số tác động.
- Kano = **yếu tố khác biệt + sự hài lòng**. Impact map = **goal → actors → impacts →
  deliverables**. "Business value map" là tên bịa.
- Ước lượng tương đối = **cộng tác + bậc độ lớn + so sánh với hạng mục đã làm**, do **đội**
  thực hiện.
- Backlog refinement ở tầm sáng kiến là **liên tục**, và là đầu vào của planning workshop.
