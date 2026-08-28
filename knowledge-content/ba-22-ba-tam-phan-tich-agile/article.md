# Ba tầm phân tích Agile: chiến lược, sáng kiến, bàn giao

Nếu bạn chỉ có thời gian học một chủ đề trong *Agile Extension to the BABOK Guide v2*, hãy
học chủ đề này. Ba **tầm phân tích** (analysis horizons) là khung tổ chức toàn bộ công việc
của một BA Agile, và cũng là phần được hỏi nhiều nhất — khoảng một phần năm số câu.

Điểm dễ chịu: các phương án sai ở đây phần lớn rất máy móc. Một tỷ lệ lớn phương án nhiễu
đơn giản là **những cái tên không phải tầm nào cả**.

## Ba tầm — và chỉ ba

Có **đúng ba** tầm phân tích:

1. **Strategy horizon — Tầm chiến lược.** Doanh nghiệp nên đầu tư vào sáng kiến nào, và vì sao?
2. **Initiative horizon — Tầm sáng kiến.** Sáng kiến này nên được định hình và sắp thứ tự ra
   sao để đạt kết quả mong muốn?
3. **Delivery horizon — Tầm bàn giao.** Chính xác thì ta xây gì tiếp theo, và nó có hiệu quả không?

Ba tầm không phải ba giai đoạn nối tiếp. Chúng chạy **đồng thời**: trong khi đội đang bàn
giao iteration này, sáng kiến vẫn đang được sắp lại thứ tự, và danh mục đầu tư vẫn đang được
đánh giá. Một BA có thể qua lại giữa ba tầm trong cùng một tuần.

## Bảng so sánh tổng hợp

|  | Tầm chiến lược | Tầm sáng kiến | Tầm bàn giao |
|---|---|---|---|
| **Khung thời gian** | 6–12 tháng trở lên | Khoảng 3 tháng | 1–4 tuần |
| **Câu hỏi cần trả lời** | Doanh nghiệp nên đầu tư vào sáng kiến nào, và vì sao? | Sáng kiến này nên định hình và sắp thứ tự thế nào để đạt kết quả? | Chính xác ta xây gì tiếp theo, và nó có hiệu quả không? |
| **Mức chi tiết** | Mục tiêu, chỉ số, danh mục đầu tư | Feature, epic, thứ tự release | User story, acceptance criteria, task |
| **Trọng tâm của BA** | Quan sát thay đổi trên phổ rộng, giảm độ phức tạp cho việc ra quyết định, tác động toàn doanh nghiệp | Các thành phần giải pháp có gắn với kết quả thật không; mỗi feature cần chắc chắn tới đâu và theo thứ tự nào; khám phá phương án thay thế | Chuẩn bị story cho triển khai, hỗ trợ bàn giao, tham gia retrospective |
| **BA làm việc cùng ai** | Lãnh đạo và người ra quyết định danh mục đầu tư | Product Owner, các đội sáng kiến khác | Đội bàn giao, khách hàng và bên liên quan trực tiếp |
| **Dùng phản hồi thế nào** | Dùng phản hồi từ **cả ba tầm** để nuôi chiến lược | Dùng phản hồi để sắp lại thứ tự feature và đánh giá lại tiến trình tới kết quả | Dùng phản hồi từ review và từ việc sử dụng thật để tinh chỉnh story kế tiếp |
| **KHÔNG phải việc của BA ở tầm này** | Ánh xạ user story nào thuộc feature nào | Đảm bảo phạm vi đã định là khả thi với ngân sách và lịch đã định | Quyết định có nên huỷ sáng kiến hay không |

Ba con số thời gian là thứ nên thuộc lòng: **1–4 tuần / 3 tháng / 6–12 tháng**. Chúng xuất
hiện trực tiếp trong câu hỏi, và "hằng ngày" (daily) không ứng với tầm nào cả.

## Những cái tên KHÔNG phải là tầm

Đề bài liên tục đưa ra một phương án thứ tư nghe rất chính thức nhưng không tồn tại. Học
thuộc danh sách này và bạn loại được ngay một phương án ở rất nhiều câu:

- ~~Project horizon~~ — không tồn tại
- ~~Iteration horizon~~ — iteration không phải một tầm
- ~~Portfolio horizon~~ — portfolio không phải một tầm
- ~~Epic horizon~~ — epic không phải một tầm
- ~~Release horizon~~ — không phải một tầm
- ~~User story horizon~~ — không phải một tầm

Quy tắc chung mạnh hơn: nếu một phương án dùng thuật ngữ **không xuất hiện trong Agile
Extension v2**, nó gần như chắc chắn sai. Điều này đúng cả ngoài chủ đề tầm — ví dụ
"business value map" và "design spike" cũng là những cái tên bịa ra tương tự.

## Hoạt động này thuộc tầm nào?

| Hoạt động hoặc dấu hiệu trong câu hỏi | Tầm |
|---|---|
| Story elaboration (làm rõ chi tiết story) | Bàn giao |
| Lập kế hoạch chi tiết cho iteration sắp tới trong một planning workshop | Bàn giao |
| Phân tích trực tiếp cùng khách hàng và bên liên quan trong khung thời gian ngắn | Bàn giao |
| Quyết định thứ tự các feature sẽ làm tiếp, dựa trên thông tin sử dụng mới | Sáng kiến |
| Kiểm tra các thành phần giải pháp có gắn với kết quả thật không | Sáng kiến |
| Backlog refinement — sắp ưu tiên và sắp thứ tự feature, liên tục và lặp lại | Sáng kiến |
| Suy nghĩ xem một thay đổi nhỏ có thể ảnh hưởng thế nào tới toàn doanh nghiệp | Chiến lược |
| Đặt mục tiêu tổ chức và các chỉ số đo mục tiêu đó | Chiến lược |
| Quyết định đầu tư vào sáng kiến nào | Chiến lược |

Mẹo đọc nhanh: tìm **đơn vị công việc** trong câu. Nói tới *story và task* → bàn giao. Nói
tới *feature, epic, release* → sáng kiến. Nói tới *sáng kiến, mục tiêu, danh mục đầu tư* →
chiến lược.

## Kỹ thuật xuất hiện ở nhiều tầm

Hai kỹ thuật cố tình bị khai thác vì chúng sống ở nhiều tầm cùng lúc.

**Planning workshop có ở cả ba tầm**, chỉ khác mức chi tiết:

| Tầm | Planning workshop tập trung vào |
|---|---|
| Chiến lược | Mục tiêu tổ chức, chỉ số đo các mục tiêu đó, và sáng kiến nào có thể tạo giá trị hướng tới chúng |
| Sáng kiến | Thứ tự các feature và kế hoạch release; tạo hiểu biết chung về cách tiếp cận xây dựng giải pháp |
| Bàn giao | Chi tiết của iteration sắp tới — những task cần làm để hoàn thành nó |

**Value modeling** thì tuỳ mục đích sử dụng:

- Dùng để soi giá trị khách hàng **bên trong một sáng kiến cụ thể** → tầm **sáng kiến và bàn giao**.
- Dùng để cung cấp thông tin cho R&D, marketing, bán hàng và nhìn khách hàng của **toàn tổ
  chức** → tầm **chiến lược**.

**Impact mapping** thì khác cả hai: nó nối hoạt động hằng ngày ngược về mục tiêu tổ chức,
nên nó tăng cường vòng phản hồi giữa **cả ba tầm**.

Bài học chung: đọc kỹ workshop hay mô hình đó đang được dùng **ĐỂ LÀM GÌ**, đừng chỉ đọc tên.

## Điều BA KHÔNG làm ở mỗi tầm

Một dạng câu hỏi riêng hỏi ngược: *hoạt động nào KHÔNG thuộc tầm này?* Ba câu trả lời đáng
nhớ nằm ở dòng cuối bảng so sánh, và mỗi câu sai vì nó thuộc về một tầm khác:

- **Ở tầm chiến lược, BA không** ánh xạ user story nào thuộc feature nào — đó là tầm sáng kiến.
- **Ở tầm sáng kiến, BA không** đảm bảo phạm vi đã định là khả thi với ngân sách và lịch đã
  định — đó là khung tư duy dự án kiểu cũ, không phải trọng tâm của tầm sáng kiến.
- **Ở tầm bàn giao, BA không** quyết định sáng kiến có nên bị huỷ hay không — đó là quyết
  định của tầm chiến lược.

Ngược lại, ở tầm bàn giao BA **có** chuẩn bị story sẵn sàng cho triển khai, **có** hỗ trợ
bàn giao thành công, và **có** tham gia retrospective.

Còn một câu hỏi ở góc nhìn lãnh đạo: ở mức chiến lược, người sở hữu sản phẩm giúp đội bàn
giao bằng cách **định nghĩa product roadmap, xác định giá trị nghiệp vụ mong muốn và xác
định các nguyên tắc dùng để sắp ưu tiên** — chứ không phải bằng cách chốt ngân sách giai
đoạn đầu, chốt bối cảnh kỹ thuật hay chốt kế hoạch release.

## Điểm cốt lõi

- Ba tầm: **chiến lược (6–12 tháng+) · sáng kiến (~3 tháng) · bàn giao (1–4 tuần)**.
  "Hằng ngày" không phải một tầm.
- Project / iteration / portfolio / epic / release / user story **không phải là tầm** — thấy
  là loại.
- Đọc **đơn vị công việc**: story/task → bàn giao; feature/epic/release → sáng kiến;
  sáng kiến/mục tiêu/danh mục → chiến lược.
- **Planning workshop có ở cả ba tầm**; **value modeling** ở chiến lược khi nhìn toàn tổ
  chức, ở sáng kiến + bàn giao khi nhìn giá trị bên trong một sáng kiến; **impact mapping**
  nối cả ba tầm.
- Tầm chiến lược dùng phản hồi từ **tất cả** các tầm để nuôi chiến lược.
