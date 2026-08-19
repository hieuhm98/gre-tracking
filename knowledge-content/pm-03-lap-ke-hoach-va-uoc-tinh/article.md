# Lập kế hoạch & ước tính

## 1. Kế hoạch dùng để làm gì

> **Giá trị của một kế hoạch không nằm ở việc nó đúng, mà ở việc nó cho bạn biết SỚM khi nào mình đang sai.**

**Đây là điểm mấu chốt bị hiểu sai nhiều nhất.** Người ta chê lập kế hoạch vì *"kế hoạch nào rồi cũng sai"* — điều đó đúng, nhưng **không có kế hoạch thì bạn không có gì để so sánh, nên bạn không biết mình đã lệch bao nhiêu cho tới khi quá muộn.**

**Ba thứ một kế hoạch tốt phải cho bạn:**

| Thứ | Vì sao cần |
|-----|-----------|
| **Một đường tham chiếu (baseline)** | Để đo độ lệch, không phải để khoe |
| **Thứ tự bắt buộc** | Biết việc nào chặn việc nào |
| **Điểm quyết định** | Biết khi nào phải xem lại thay vì cứ chạy tiếp |

**Điều một kế hoạch KHÔNG phải:** một lời hứa. **Kế hoạch là mô hình tốt nhất của hiểu biết hiện tại, và nó phải được cập nhật khi hiểu biết thay đổi.** PM giữ nguyên kế hoạch cũ để "khỏi mất mặt" đang biến công cụ điều hướng thành đồ trang trí.

---

## 2. WBS: phân rã công việc

**Work Breakdown Structure là cách chia toàn bộ phạm vi thành các phần nhỏ có thể ước tính, gán người và theo dõi được.**

**Ba nguyên tắc:**

**1. Phân rã theo SẢN PHẨM BÀN GIAO, không theo hoạt động.** Nút của WBS nên là *"module thanh toán đã kiểm thử"* chứ không phải *"lập trình"*. Sản phẩm bàn giao có thể kiểm tra được là đã xong hay chưa; hoạt động thì không.

**2. Quy tắc 100 phần trăm.** Tổng các nút con phải bằng đúng nút cha — **không thiếu và không thêm**. Đây là cơ chế duy nhất giúp bạn phát hiện phạm vi bị bỏ sót.

**3. Mức thấp nhất phải đủ nhỏ.** Một quy tắc thực dụng: **mỗi gói công việc nên nằm trong khoảng 8 tới 80 giờ**. Nhỏ hơn thì quản lý tốn hơn giá trị; lớn hơn thì bạn không biết nó đang trôi.

**Những thứ thường bị bỏ sót khỏi WBS — và chúng chiếm phần đáng kể ngân sách:**

- **Di trú dữ liệu** từ hệ thống cũ.
- **Tích hợp** với hệ thống của bên thứ ba.
- **Kiểm thử hiệu năng và bảo mật.**
- **Đào tạo người dùng** và viết tài liệu hướng dẫn.
- **Hỗ trợ sau phát hành** trong vài tuần đầu.
- **Thời gian chờ phê duyệt** của khách hàng.

> **Một mẹo kiểm tra WBS: đưa nó cho người sẽ thực hiện và hỏi *"thiếu gì không?"*** Câu trả lời gần như luôn có, và mỗi hạng mục thiếu tìm được ở giai đoạn này rẻ hơn hàng chục lần so với khi phát hiện giữa thực thi.

---

## 3. Phụ thuộc và đường găng

**Bốn loại phụ thuộc:**

| Loại | Ý nghĩa | Ví dụ |
|------|---------|-------|
| **Finish-to-Start** | B chỉ bắt đầu khi A xong | Không kiểm thử trước khi có bản build |
| **Start-to-Start** | B bắt đầu sau khi A bắt đầu | Viết tài liệu song song với lập trình |
| **Finish-to-Finish** | B chỉ xong khi A xong | Kiểm thử xong khi lập trình xong |
| **Start-to-Finish** | Hiếm dùng | Hệ thống cũ chỉ tắt khi hệ thống mới đã chạy |

**Cũng cần phân biệt hai nguồn phụ thuộc:**

- **Phụ thuộc bắt buộc** — do bản chất công việc, không thể phá vỡ.
- **Phụ thuộc do lựa chọn** — do cách ta quyết định làm. **Loại thứ hai này thường có thể tháo ra để chạy song song, và đó là cách rút ngắn lịch trình rẻ nhất.**

**Đường găng là chuỗi phụ thuộc dài nhất từ đầu tới cuối dự án.**

**Ba điều PM phải biết về đường găng:**

**1. Chỉ công việc trên đường găng ảnh hưởng trực tiếp tới ngày kết thúc.** Công việc ngoài đường găng có **thời gian nổi (float)** — chậm trong khoảng đó thì không ảnh hưởng.

**2. Đường găng có thể ĐỔI.** Khi một công việc ngoài đường găng chậm quá thời gian nổi, nó trở thành đường găng mới. **PM chỉ nhìn đường găng ban đầu sẽ bị bất ngờ.**

**3. Muốn rút ngắn lịch trình, chỉ có hai cách hợp lệ:** **crashing** (thêm nguồn lực vào công việc trên đường găng, tốn tiền) và **fast tracking** (chạy song song những việc lẽ ra nối tiếp, tăng rủi ro). **Không có cách thứ ba, và đặc biệt không có cách nào tên là "yêu cầu đội cố gắng hơn".**

---

## 4. Các kỹ thuật ước tính

**Bốn kỹ thuật, dùng cho các mức độ thông tin khác nhau:**

**1. Ước tính tương tự (analogous).** So với một dự án tương tự đã làm. **Nhanh nhất, kém chính xác nhất, nhưng là kỹ thuật duy nhất dùng được khi bạn gần như chưa biết gì.**

**2. Ước tính tham số (parametric).** Dùng một hệ số từ dữ liệu quá khứ: *"mỗi màn hình CRUD trung bình 3 ngày"*. **Chính xác hơn nếu bạn có dữ liệu quá khứ đáng tin.**

**3. Ước tính từ dưới lên (bottom-up).** Ước tính từng gói công việc trong WBS rồi cộng lên. **Chính xác nhất, tốn thời gian nhất, và chỉ làm được sau khi có WBS.**

**4. Ước tính ba điểm (PERT).** Lấy ba con số: lạc quan (O), khả năng cao nhất (M), bi quan (P).

> **Công thức: `Ước tính = (O + 4M + P) ÷ 6`**
>
> **Giá trị thật của kỹ thuật này không phải con số cuối cùng, mà là khoảng cách giữa O và P.** Khoảng cách đó **chính là mức độ bất định của bạn** — và nó là thông tin quan trọng hơn con số trung bình.

**Về ước tính theo story point trong agile:** point đo **kích cỡ tương đối** chứ không đo giờ. Chúng hoạt động vì **con người so sánh giỏi hơn là đo tuyệt đối**. Point chỉ có ý nghĩa khi đi kèm velocity của chính đội đó, và **so sánh point giữa hai đội là vô nghĩa**.

**Planning poker** hữu ích không phải vì nó cho số chính xác, mà vì **khi hai người ước tính lệch nhau ba bậc, cuộc thảo luận sau đó luôn phát hiện ra một hiểu lầm về phạm vi.**

---

## 5. Hình nón bất định và cách trình bày trung thực

**Hình nón bất định (cone of uncertainty) nói rằng độ chính xác của ước tính tăng dần theo lượng thông tin bạn có.**

| Thời điểm | Sai số điển hình |
|-----------|-----------------|
| **Trước khi có yêu cầu rõ** | Có thể lệch **nhiều lần** so với thực tế |
| **Sau khi phạm vi đã rõ** | Lệch cỡ **±50 phần trăm** |
| **Sau khi thiết kế xong** | Lệch cỡ **±25 phần trăm** |
| **Khi đang thực thi** | Ngày càng hẹp lại |

> **Hệ quả thực tế quan trọng nhất: một ước tính đưa ra ở ngày đầu KHÔNG THỂ chính xác, dù bạn cố gắng thế nào.** Cách xử lý không phải là cố ước tính giỏi hơn, mà là **ước tính theo khoảng và cam kết lại khi biết thêm.**

**Cách trình bày ước tính trung thực:**

- **Đưa khoảng, không đưa một số:** *"12 tới 16 tuần"* thay vì *"14 tuần"*.
- **Nói rõ mức tin cậy:** *"tôi tin 80 phần trăm rằng nó nằm trong 12 tới 16 tuần"*.
- **Liệt kê giả định:** *"giả định API của đối tác sẵn sàng trước ngày 1 tháng Ba"*.
- **Nêu điều kiện làm ước tính hẹp lại:** *"sau khi xong thiết kế, tôi sẽ cập nhật với sai số ±10 phần trăm"*.

**Hai cái bẫy phải tránh:**

**1. Ước tính bị đàm phán.** Khách hàng nói *"14 tuần là quá dài, làm trong 10 tuần được không?"* — **thời gian cần để làm một việc không thay đổi vì người ta muốn nó ngắn hơn.** Chỉ phạm vi, nguồn lực hoặc chất lượng thay đổi được. **Chấp nhận rút ước tính mà không đổi gì khác là hứa một điều bạn biết là không thật.**

**2. Đệm ẩn.** Mỗi người tự cộng thêm 30 phần trăm cho an toàn, PM cộng thêm 20 phần trăm nữa, và không ai biết tổng đệm là bao nhiêu. **Cách đúng: ước tính trung thực, rồi để khoản dự phòng ở một chỗ CÔNG KHAI do PM quản lý.** Đệm minh bạch có thể được quản lý; đệm ẩn thì bị tiêu hết mà không ai nhận ra.

---

## 6. Theo dõi kế hoạch khi thực tế lệch đi

**Kế hoạch chỉ hữu ích nếu được so với thực tế đủ đều.**

**Ba chỉ báo đơn giản mà hiệu quả:**

**1. Xu hướng thay vì ảnh chụp.** Một tuần chậm không nói gì; **ba tuần liền chậm 10 phần trăm là một xu hướng, và tuần thứ tư sẽ không tự nhanh lên.**

**2. Tốc độ tiêu ngân sách so với tốc độ hoàn thành phạm vi.** Đã chi 60 phần trăm ngân sách nhưng chỉ xong 40 phần trăm phạm vi là **tín hiệu đỏ**, dù lịch trình vẫn đang đúng hạn.

**3. Khoảng cách tới mốc gần nhất.** Mốc xa ba tháng thì mọi người sẽ trì hoãn; **mốc mỗi hai tới bốn tuần buộc sự thật lộ ra sớm.**

**Khi phát hiện đã lệch, bốn phương án — theo thứ tự nên xét:**

| Phương án | Khi nào phù hợp |
|-----------|-----------------|
| **Cắt phạm vi** | Gần như luôn là lựa chọn ít thiệt hại nhất, nếu backlog có thứ tự |
| **Fast tracking** | Khi có việc nối tiếp không thật sự bắt buộc phải nối tiếp |
| **Crashing** | Khi có tiền và có người sẵn sàng, và còn đủ thời gian để họ hoà nhập |
| **Dời hạn** | Khi ba cách trên không đủ, và phải nói sớm |

> **Điều tệ nhất PM có thể làm là im lặng và hy vọng.** **Một mốc bị trễ được báo trước sáu tuần là một vấn đề cần quản lý; cùng mốc đó được báo trước ba ngày là một cuộc khủng hoảng và là một sự mất lòng tin.**

---

## 7. Điểm cốt lõi

- **Giá trị của kế hoạch là cho bạn biết sớm khi nào mình đang sai**, không phải ở việc nó đúng.
- Kế hoạch cho bạn **đường tham chiếu, thứ tự bắt buộc, và điểm quyết định**.
- **Kế hoạch không phải lời hứa** — nó phải được cập nhật khi hiểu biết thay đổi.
- WBS phải **phân rã theo sản phẩm bàn giao, không theo hoạt động**.
- **Quy tắc 100 phần trăm** là cơ chế duy nhất giúp phát hiện phạm vi bị bỏ sót.
- **Mỗi gói công việc nên nằm trong 8 tới 80 giờ.**
- Thứ hay bị bỏ sót khỏi WBS: **di trú dữ liệu, tích hợp, kiểm thử hiệu năng và bảo mật, đào tạo, hỗ trợ sau phát hành, thời gian chờ phê duyệt**.
- **Phụ thuộc do lựa chọn thường tháo được để chạy song song** — cách rút ngắn lịch trình rẻ nhất.
- **Chỉ công việc trên đường găng ảnh hưởng trực tiếp tới ngày kết thúc.**
- **Đường găng có thể đổi** khi một việc ngoài nó chậm quá thời gian nổi.
- Chỉ có hai cách rút ngắn hợp lệ: **crashing (tốn tiền) và fast tracking (tăng rủi ro)**.
- Bốn kỹ thuật ước tính: **tương tự, tham số, từ dưới lên, ba điểm PERT**.
- PERT: `(O + 4M + P) ÷ 6`, và **khoảng cách O tới P quan trọng hơn con số trung bình**.
- **Story point đo kích cỡ tương đối**, và **so sánh point giữa hai đội là vô nghĩa**.
- **Planning poker giá trị vì lệch ba bậc luôn phát hiện một hiểu lầm về phạm vi.**
- **Hình nón bất định:** ước tính ngày đầu không thể chính xác dù bạn cố thế nào.
- Trình bày trung thực: **đưa khoảng, nói mức tin cậy, liệt kê giả định, nêu điều kiện hẹp lại**.
- **Thời gian cần để làm một việc không thay đổi vì người ta muốn nó ngắn hơn.**
- **Đệm minh bạch quản lý được; đệm ẩn bị tiêu hết mà không ai nhận ra.**
- **Đã chi 60 phần trăm ngân sách mà chỉ xong 40 phần trăm phạm vi là tín hiệu đỏ.**
- **Mốc mỗi hai tới bốn tuần buộc sự thật lộ ra sớm.**
- **Mốc trễ báo trước sáu tuần là vấn đề; báo trước ba ngày là khủng hoảng và mất lòng tin.**

## 8. Tóm tắt

- Lập kế hoạch tồn tại để **phát hiện độ lệch sớm**, nên nó phải được cập nhật liên tục thay vì bảo vệ.
- **WBS theo sản phẩm bàn giao cùng quy tắc 100 phần trăm** là cách rẻ nhất để không bỏ sót phạm vi.
- **Ước tính phải được trình bày theo khoảng kèm giả định**, vì hình nón bất định là quy luật chứ không phải sự yếu kém.
- **Khi đã lệch, cắt phạm vi thường là lựa chọn ít thiệt hại nhất**, và im lặng luôn là lựa chọn tệ nhất.
