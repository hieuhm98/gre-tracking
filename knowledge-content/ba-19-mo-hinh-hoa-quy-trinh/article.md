# Bộ sơ đồ quy trình: Context, Functional & Cross-Functional Flow

## 1. Bốn góc nhìn, bốn sơ đồ

Không có **một** sơ đồ nào trả lời được mọi câu hỏi về một quy trình. Cố nhồi tất cả vào một hình là cách nhanh nhất để tạo ra một bức tranh không ai đọc nổi.

Mô hình hoá quy trình cổ điển dùng **bốn sơ đồ ở bốn mức phóng to khác nhau**. Mỗi sơ đồ trả lời đúng một câu hỏi:

| Sơ đồ | Câu hỏi nó trả lời | Mức phóng |
|-------|--------------------|-----------|
| **Context model** | Tổ chức trao đổi những gì với **thế giới bên ngoài**? | Xa nhất — cả tổ chức là một chấm |
| **Functional flow diagram** | **Bộ phận nào trao đổi thông tin gì** với bộ phận nào? | Bên trong tổ chức, chưa có thứ tự |
| **Cross-functional flow diagram** | **Ai làm bước nào**, theo **thứ tự** nào? | Từng bước, có làn trách nhiệm |
| **Process flowchart** | Mọi **bước, quyết định và vòng lặp** bên trong một quy trình? | Gần nhất — chi tiết thao tác |

> **Thứ tự vẽ quan trọng ngang với nội dung vẽ.** Đi từ ngoài vào trong: chốt ranh giới trước, rồi mới chốt bộ phận, rồi mới chốt trình tự, rồi mới chốt chi tiết. Vẽ ngược lại — bắt đầu bằng flowchart chi tiết — là cách phổ biến nhất để phát hiện ở tuần thứ sáu rằng bạn đã bỏ sót cả một bên tham gia.

**Vì sao BA cần cả bốn:** mỗi mức phóng làm lộ ra một loại yêu cầu bị bỏ sót khác nhau. Context model làm lộ **tích hợp bị quên**. Functional flow làm lộ **thông tin không ai chịu trách nhiệm**. Cross-functional làm lộ **chuyển giao gây chậm trễ**. Flowchart làm lộ **nhánh quyết định chưa được phủ**.

---

## 2. Context model — vẽ ranh giới trước khi vẽ quy trình

**Context model đặt tổ chức (hoặc hệ thống) vào giữa, và tất cả các bên bên ngoài xung quanh.** Mỗi mũi tên là một luồng — dữ liệu, tài liệu, hàng hoá hoặc tiền — có nhãn nói rõ nó là gì.

Nó cố tình **không** cho biết bên trong tổ chức làm gì. Đó là điểm mạnh, không phải thiếu sót.

**Ví dụ kinh điển — một tổ chức sản xuất và bán hàng:**

```
                        Assignments,
                        Payments
       Purchase Orders,      ↓        Invoices
       Payments          ┌────────┐      ↑
  [Customer] ──────────→ │        │ ←──────── [Contractor]
      ↑ ─────────────────│  Tổ    │
       Products,         │ chức   │ ── Deposits ────→ [Bank]
       Invoices          │        │ ←── Withdrawals,
                         └────────┘     Statements
        Orders,          ↙        ↘  Shipments,
        Payments        ↙          ↘ Payments
   [Supplier] ─── Materials,    [Shipping Company]
                  Invoices  ──────→ Invoices
```

Đọc thành bảng thì rõ hơn — và **bảng chính là thứ bạn nên đưa vào tài liệu**, vì nó không mất nghĩa khi in đen trắng:

| Bên ngoài | Tổ chức **gửi đi** | Tổ chức **nhận về** |
|-----------|--------------------|---------------------|
| **Customer** | Products, Invoices | Purchase Orders, Payments |
| **Contractor** | Assignments, Payments | Invoices |
| **Supplier** | Orders, Payments | Materials, Invoices |
| **Shipping Company** | Shipments, Payments | Invoices |
| **Bank** | Deposits | Withdrawals, Statements |

**Context model chốt được ba thứ mà dự án hay tranh cãi về sau:**

1. **Phạm vi** — cái gì nằm trong vòng tròn là việc của ta; cái gì nằm ngoài là bên khác.
2. **Danh sách tích hợp** — mỗi mũi tên gần như luôn trở thành một giao diện, một file trao đổi, hoặc một API.
3. **Danh sách stakeholder** — mỗi hộp bên ngoài là một nhóm cần được hỏi ý kiến.

> **Kiểm tra nhanh một context model tốt: mọi mũi tên đều có nhãn, và mọi bên ngoài đều có mũi tên đi cả hai chiều.** Một bên chỉ nhận mà không gửi lại thứ gì thường là dấu hiệu bạn quên một luồng — hoặc bên đó không thực sự nằm trong context.

**Lưu ý khác biệt quan trọng:** context model của **tổ chức** khác context model của **hệ thống**. Với tổ chức, vòng tròn là công ty và bên ngoài là khách hàng, ngân hàng, nhà cung cấp. Với hệ thống, vòng tròn là phần mềm và bên ngoài có thể gồm cả **các phòng ban nội bộ**. Hãy nói rõ bạn đang vẽ cái nào.

---

## 3. Functional flow diagram — chức năng nào trao đổi gì với nhau

Bước vào bên trong ranh giới. **Functional flow diagram cho thấy các chức năng (bộ phận, vai trò) và thông tin chảy giữa chúng — nhưng chưa quan tâm tới thứ tự thời gian.**

**Ví dụ — quy trình thẻ tín dụng:**

```
                    ┌────────────┐
       Bill/        │  Customer  │  Purchases
       Statement ↗  └────────────┘  ↘  Change Receipt
    ┌──────────┐      ↖ Payment      ┌──────────┐
    │ Billing  │                     │ Merchant │
    │Department│                     └──────────┘
    └──────────┘   ↖ Request for Approval ↗
       ↖ Purchase   ┌──────────────────┐  ↘ Decision
         Info       │  Authorizations  │
                    │    Department    │
                    └──────────────────┘
```

| Từ | Đến | Thông tin trao đổi |
|----|-----|--------------------|
| Customer | Merchant | Purchases |
| Merchant | Customer | Change, Receipt |
| Merchant | Authorizations Department | Request for Approval |
| Authorizations Department | Merchant | Decision |
| Authorizations Department | Billing Department | Purchase Info |
| Billing Department | Customer | Bill / Statement |
| Customer | Billing Department | Payment |

**Sơ đồ này trả lời câu hỏi mà context model không trả lời được:** thông tin đi vào tổ chức rồi **được chuyển qua tay ai** trước khi đi ra.

> **Giá trị lớn nhất của functional flow diagram: nó làm lộ ra thông tin “mồ côi”.** Nếu Authorizations Department gửi *Purchase Info* sang Billing nhưng không sơ đồ nào cho thấy Billing dùng nó vào việc gì, thì hoặc là bạn thiếu một luồng, hoặc là dữ liệu đó đang được thu thập mà không ai cần.

**Vì sao cố tình bỏ thứ tự:** khi chưa vẽ thứ tự, cuộc họp tập trung vào **“ai cần biết gì”** thay vì sa vào tranh cãi *“bước này trước hay bước kia trước”*. Thứ tự để dành cho sơ đồ tiếp theo.

---

## 4. Cross-functional flow diagram — ai làm bước nào, theo thứ tự nào

Đây là sơ đồ **hay được dùng nhất trong tài liệu BA**, còn gọi là **swimlane diagram**.

**Cấu trúc:** một hộp lớn mang tên quy trình; bên trong chia thành các **làn (lane)** ngang hoặc dọc, mỗi làn là một vai trò; các bước nằm trong làn của vai trò thực hiện chúng; mũi tên nối các bước theo **đúng thứ tự thời gian**.

**Ví dụ — Credit Card Process, ba làn:**

```
Credit Card Process
─────────────────────────────────────────────────────────────────────
Customer      | ●Make purchase                  [Receive    [Make
              |      │                           statement]→ payment]
              |      ↓                              ↑            │
─────────────────────────────────────────────────────────────────────
Merchant      | [Submit purchase   [Complete        │            │
              |  amount]            sale]           │            │
              |      │                ↑   │         │            │
─────────────────────────────────────────────────────────────────────
Credit Card   |      ↓                │   ↓         │            ↓
Company       | [Authorize purchase]──┘  [Post     [Bill    [Post      ● Account
              |                           purchase  customer] payment]   current
              |                           to acct]──┘
─────────────────────────────────────────────────────────────────────
```

Trình tự đầy đủ, đọc theo bảng:

| # | Làn | Bước |
|---|-----|------|
| 1 | Customer | Make purchase *(điểm bắt đầu)* |
| 2 | Merchant | Submit purchase amount |
| 3 | Credit Card Company | Authorize purchase |
| 4 | Merchant | Complete sale |
| 5 | Credit Card Company | Post purchase to customer account |
| 6 | Credit Card Company | Bill customer |
| 7 | Customer | Receive statement |
| 8 | Customer | Make payment |
| 9 | Credit Card Company | Post payment |
| 10 | Credit Card Company | Account current *(điểm kết thúc)* |

**Điều đáng đọc nhất trên sơ đồ này không phải các bước, mà là các lần mũi tên cắt ngang làn.** Ở ví dụ trên có **sáu lần chuyển giao**: 1→2, 2→3, 3→4, 4→5, 6→7, 8→9.

> **Mỗi lần cắt làn là một điểm rủi ro.** Ở đó quy trình chờ một người khác, thông tin phải được truyền đi đầy đủ, và trách nhiệm đổi chủ. Đó cũng chính là nơi bạn nên hỏi: *chuyển giao này mất bao lâu? truyền đi những dữ liệu gì? nếu bên nhận không phản hồi thì sao?*

**Quy tắc vẽ:**

- **Làn là vai trò, không phải con người.** “Kế toán viên”, không phải “chị Lan”.
- **Mỗi bước chỉ nằm trong đúng một làn.** Một bước nằm vắt giữa hai làn nghĩa là bạn chưa quyết được ai chịu trách nhiệm — hãy quyết, hoặc tách thành hai bước.
- **Đọc một chiều.** Nếu là làn ngang thì thời gian chạy từ trái sang phải; mũi tên đi ngược lại chỉ nên là vòng lặp có chủ ý.
- **Số làn hợp lý là 3–5.** Quá nhiều làn nghĩa là bạn đang gộp nhiều quy trình vào một sơ đồ.

---

## 5. Process flowchart — mọi bước, mọi quyết định, mọi vòng lặp

Khi cần **chi tiết thao tác đầy đủ trong một quy trình**, dùng process flowchart. Đây là sơ đồ duy nhất trong bốn loại buộc bạn phải phủ **mọi kết quả có thể** của mọi quyết định.

**Ba ký hiệu là đủ cho phần lớn trường hợp:**

| Hình | Ý nghĩa |
|------|---------|
| **Hình bo tròn (stadium)** | Điểm bắt đầu hoặc kết thúc — *terminator* |
| **Hình chữ nhật** | Một bước xử lý |
| **Hình thoi** | Một quyết định — mỗi nhánh ra phải có nhãn |

**Ví dụ — quy trình tiếp nhận yêu cầu của một công ty tư vấn:**

```
( Customer calls )
        ↓
[Get customer information]
        ↓
[Determine type of service required]
        ↓
   ◆ Do we perform the service? ──No──→ [Recommend another firm] ──→ ( Done )
        │ Yes
        ↓
[Confirm type of service needed] ←──────────────┐
        ↓                                       │ No
   ◆ Is a qualified consultant available? ──────┘
        │ Yes
        ↓
[Determine cost of service]
        ↓
   ◆ Confirm customer agrees to the cost ──Yes──→ [Create JOB form]
        │ No                                             ↓
        ↓                                    [Give JOB form to office assistant]
[Recalculate the cost]                                   ↓
        ↓                                       ( JOB form to assistant )
   ◆ Does customer agree to new cost? ──Yes──→ [Create JOB form]
        │ No
        ↓
    ( Done )
```

**Ba chi tiết trong ví dụ này đáng học thuộc:**

1. **Vòng lặp có lối ra.** Khi không có consultant phù hợp, luồng quay lại *Confirm type of service needed* — nhưng nó quay lại một bước **có thể thay đổi kết quả** (xác nhận lại loại dịch vụ), chứ không quay thẳng về chính câu hỏi vừa trả lời. Một vòng lặp quay về đúng điểm cũ mà không đổi gì là vòng lặp vô hạn.

2. **Nhánh “No” không bị bỏ rơi.** Cả hai câu hỏi về giá đều có đường đi rõ ràng cho câu trả lời “không”: một dẫn tới tính lại giá, một dẫn tới kết thúc.

3. **Hai điểm kết thúc khác nhau, có chủ ý.** *Done* là kết thúc không có việc; *JOB form to assistant* là kết thúc có việc. Gộp hai thứ này vào một *End* sẽ xoá mất thông tin quan trọng nhất của quy trình.

> **Kiểm tra một flowchart: đi theo mọi nhánh cho tới khi chạm terminator.** Nếu có nhánh nào cụt giữa chừng, hoặc có hình thoi nào chỉ có một đường ra, sơ đồ chưa xong.

---

## 6. Chọn sơ đồ nào — và BPMN nằm ở đâu

| Bạn cần… | Dùng |
|----------|------|
| Chốt phạm vi và tìm hết các bên liên quan | **Context model** |
| Hiểu thông tin luân chuyển giữa các bộ phận | **Functional flow diagram** |
| Chỉ ra ai làm gì, ở đâu có chuyển giao | **Cross-functional flow diagram** |
| Đặc tả đầy đủ mọi bước và mọi nhánh quyết định | **Process flowchart** |
| Mô hình chính xác, nhiều bên, có thể chạy tự động | **BPMN** |

**Quan hệ với BPMN:** BPMN không thay thế bốn sơ đồ trên — nó là **bản nâng cấp có ký hiệu chuẩn của cross-functional flow diagram**, cộng thêm sự kiện, thông điệp, quy trình con và xử lý lỗi.

| | Cross-functional flow diagram | BPMN |
|---|---|---|
| **Làn** | Lane, do bạn tự đặt quy ước | Pool (tổ chức) và Lane (vai trò), có định nghĩa chuẩn |
| **Nối giữa hai bên ngoài tổ chức** | Cùng một loại mũi tên | Bắt buộc dùng message flow nét đứt |
| **Sự kiện thời gian, timeout** | Không có ký hiệu | Timer event, boundary event |
| **Người đọc** | Ai cũng đọc được ngay | Cần chút đào tạo |

> **Lời khuyên thực dụng: dùng cross-functional flow diagram để *thảo luận* với nghiệp vụ, dùng BPMN để *đặc tả* cho đội phát triển.** Nhiều BA phí thời gian tranh cãi nên dùng loại nào, trong khi câu trả lời phụ thuộc vào **ai sẽ đọc bản vẽ đó**.

**Đừng bỏ qua context model chỉ vì nó trông đơn giản.** Nó là sơ đồ rẻ nhất để vẽ và là sơ đồ hay ngăn được sai lầm đắt nhất — phát hiện muộn rằng một bên tham gia chưa từng được đưa vào phạm vi.

---

## 7. Lỗi thường gặp khi mô hình hoá quy trình

| Lỗi | Vì sao nó nguy hiểm | Cách sửa |
|-----|---------------------|----------|
| **Mũi tên không có nhãn** | “Có trao đổi gì đó” là thông tin vô dụng; sau này không ai biết cần truyền dữ liệu gì | Mọi luồng phải nói rõ **cái gì** được truyền |
| **Trộn lẫn các mức phóng** | Một sơ đồ vừa có “Bán hàng” vừa có “Nhấn nút Lưu” khiến người đọc mất phương hướng | Một sơ đồ, một mức chi tiết |
| **Làn đặt theo tên người** | Sơ đồ hỏng ngay khi người đó đổi việc | Làn là **vai trò** |
| **Hình thoi chỉ có một đường ra** | Nhánh còn lại sẽ không được hiện thực | Mọi quyết định phải phủ hết kết quả có thể |
| **Vòng lặp không có lối thoát** | Quy trình treo trong thực tế, không chỉ trên giấy | Mỗi vòng lặp cần điều kiện dừng hoặc số lần thử tối đa |
| **Thiếu terminator** | Không biết quy trình kết thúc ở trạng thái nào | Mỗi nhánh phải chạm một điểm kết thúc |
| **Vẽ as-is nhưng lén sửa cho “đẹp”** | Bạn mất mất cơ sở đo lường cải tiến, và người vận hành sẽ không nhận ra quy trình của họ | As-is là **thực tế**, kể cả khi thực tế lộn xộn |
| **Không xác nhận lại với người làm thật** | Sơ đồ phản ánh quy trình trong đầu quản lý, không phải quy trình đang chạy | Đi bộ qua sơ đồ cùng người trực tiếp thực hiện |

> **Một cách kiểm tra rất hiệu quả: đưa sơ đồ cho một người chưa từng dự buổi họp và nhờ họ kể lại quy trình.** Chỗ nào họ ngập ngừng là chỗ sơ đồ chưa nói rõ — và đó thường đúng là chỗ đội phát triển sẽ hiểu sai.

---

## 8. Điểm cốt lõi

- **Không có một sơ đồ nào trả lời mọi câu hỏi.** Bốn sơ đồ ở bốn mức phóng: context → functional flow → cross-functional flow → flowchart.
- **Vẽ từ ngoài vào trong.** Chốt ranh giới trước, chi tiết sau; vẽ ngược lại dễ khiến bạn phát hiện muộn rằng đã bỏ sót một bên tham gia.
- **Context model đặt tổ chức vào giữa và mọi bên ngoài xung quanh**, với mọi luồng đều có nhãn — và cố tình không cho biết bên trong làm gì.
- **Mỗi mũi tên trên context model gần như luôn trở thành một tích hợp**, và mỗi hộp bên ngoài là một stakeholder cần được hỏi.
- **Functional flow diagram cho thấy bộ phận nào trao đổi thông tin gì**, cố tình bỏ qua thứ tự để cuộc họp tập trung vào “ai cần biết gì”.
- **Functional flow diagram làm lộ ra thông tin “mồ côi”** — dữ liệu được gửi đi mà không ai dùng.
- **Cross-functional flow diagram (swimlane) là sơ đồ hay dùng nhất trong tài liệu BA**: làn là vai trò, bước nằm trong đúng một làn, thời gian chạy một chiều.
- **Thứ đáng đọc nhất trên swimlane là các lần mũi tên cắt ngang làn** — mỗi lần chuyển giao là một điểm chờ đợi, mất thông tin và đổi trách nhiệm.
- **Process flowchart buộc phải phủ mọi kết quả của mọi quyết định**; hình thoi chỉ có một đường ra là sơ đồ chưa xong.
- **Vòng lặp phải quay về một bước có thể đổi kết quả**, nếu không nó là vòng lặp vô hạn.
- **Nhiều điểm kết thúc khác nhau là hợp lệ và thường cần thiết** — “kết thúc không có việc” khác “kết thúc có việc”.
- **BPMN không thay thế bốn sơ đồ trên**; nó là bản chuẩn hoá của cross-functional flow diagram, thêm sự kiện, thông điệp và xử lý lỗi.
- **Chọn sơ đồ theo người đọc:** swimlane để thảo luận với nghiệp vụ, BPMN để đặc tả cho đội phát triển.
- **Mũi tên không nhãn, làn đặt theo tên người, và as-is bị “làm đẹp”** là ba lỗi phá hỏng giá trị của mô hình nhanh nhất.
- **Kiểm tra sơ đồ bằng người ngoài cuộc họp:** chỗ họ ngập ngừng là chỗ đội phát triển sẽ hiểu sai.

## 9. Tóm tắt

- Mô hình hoá quy trình là **một bộ sơ đồ, không phải một sơ đồ** — mỗi loại có đúng một câu hỏi để trả lời và một mức chi tiết để giữ.
- **Context model chốt phạm vi, functional flow chốt luồng thông tin, cross-functional chốt trách nhiệm và trình tự, flowchart chốt mọi nhánh.**
- Giá trị của mô hình không nằm ở bức vẽ mà ở **những câu hỏi nó buộc bạn phải hỏi**: luồng này chứa dữ liệu gì, chuyển giao này mất bao lâu, nhánh còn lại đi đâu.
- **BPMN là bước tiếp theo, không phải bước thay thế** — hãy dùng nó khi người đọc cần độ chính xác, và giữ sơ đồ đơn giản khi người đọc cần hiểu nhanh.
