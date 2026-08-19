# Quản lý rủi ro dự án

## 1. Rủi ro là gì và vì sao nó bị làm sai

> **Rủi ro là một sự kiện CHƯA xảy ra, có thể xảy ra, và nếu xảy ra thì ảnh hưởng tới mục tiêu dự án.**

**Ba khái niệm hay bị gộp lại, và việc gộp chúng làm mọi cuộc họp rủi ro trở nên vô nghĩa:**

| | Định nghĩa | Cách xử lý |
|---|-----------|-----------|
| **Rủi ro** | Chưa xảy ra, có xác suất | **Phòng ngừa hoặc chuẩn bị phương án** |
| **Vấn đề (issue)** | **Đã xảy ra rồi** | Xử lý ngay, không còn gì để phòng |
| **Ràng buộc** | Một thực tế không đổi được | Lập kế hoạch quanh nó |

**Nếu sổ rủi ro của bạn đầy những dòng như *"đội thiếu người"* thì đó không phải rủi ro — đó là vấn đề hoặc ràng buộc.** Rủi ro tương ứng phải là: *"nếu một lập trình viên senior nghỉ trong tháng Ba, tiến độ module thanh toán chậm ba tuần"*.

**Cách viết một rủi ro cho đúng — công thức nguyên nhân, sự kiện, hệ quả:**

> **"Vì [nguyên nhân], có thể [sự kiện xảy ra], dẫn tới [hệ quả lên mục tiêu]."**

- ❌ *"Rủi ro về nhân sự."* — không làm gì được với câu này.
- ✅ *"Vì chỉ có một người hiểu hệ thống thanh toán cũ, nếu người đó nghỉ việc thì việc di trú dữ liệu sẽ chậm ít nhất bốn tuần."*

**Câu thứ hai cho bạn ba thứ ngay lập tức:** một hành động phòng ngừa rõ ràng (đào tạo người thứ hai), một chỉ báo cần theo dõi (dấu hiệu người đó muốn rời đi), và một con số để so sánh với chi phí phòng ngừa.

> **Điều quan trọng nhất về quản lý rủi ro: mục đích của nó KHÔNG phải là loại bỏ rủi ro.** Dự án không có rủi ro là dự án không tạo ra giá trị mới. **Mục đích là biết mình đang gánh rủi ro gì, một cách có ý thức.**

---

## 2. Nhận diện rủi ro: tìm ở đâu

**Rủi ro không tự xuất hiện trong cuộc họp — bạn phải đi tìm nó có hệ thống.**

**Bảy nguồn rủi ro cần rà soát ở mọi dự án phần mềm:**

**1. Con người.** Người duy nhất biết một thứ, người sắp nghỉ thai sản, đội mới thành lập chưa từng làm việc cùng nhau, phụ thuộc vào một chuyên gia bên ngoài.

**2. Yêu cầu.** Yêu cầu chưa rõ ở vùng phức tạp nhất, stakeholder chưa đồng thuận với nhau, khách hàng chưa từng dùng hệ thống tương tự nên chưa biết mình muốn gì.

**3. Kỹ thuật.** Công nghệ đội chưa từng dùng, tích hợp với hệ thống không có tài liệu, yêu cầu hiệu năng chưa được kiểm chứng, nợ kỹ thuật ở phần sắp phải sửa nhiều.

**4. Bên ngoài.** Đối tác chưa mở API, nhà cung cấp chậm, thay đổi quy định pháp luật, phụ thuộc vào một dự án khác.

**5. Tổ chức.** Nhà tài trợ có thể đổi vai, ưu tiên công ty có thể đổi sau quý, đội bị chia sẻ với dự án khác.

**6. Ước tính và kế hoạch.** Phần công việc chưa từng làm nên ước tính có độ tin cậy thấp, đường găng quá dài không có đệm.

**7. Chất lượng và vận hành.** Không có môi trường thử nghiệm giống production, không có kế hoạch rollback, dữ liệu thật chứa các trường hợp bất thường chưa biết.

**Ba kỹ thuật tìm rủi ro hiệu quả:**

- **Danh sách kiểm tra từ dự án trước.** Rẻ nhất và hiệu quả nhất. **Rủi ro làm bạn trượt lần trước rất có thể sẽ quay lại.**
- **Phỏng vấn riêng từng người.** Người ta nói thật hơn khi không có mặt cả phòng, đặc biệt về những rủi ro liên quan tới con người và tổ chức.
- **Pre-mortem.** Hỏi cả đội: *"giả sử sáu tháng sau dự án này thất bại thảm hại — hãy viết ra vì sao"*. **Kỹ thuật này cho ra nhiều rủi ro hơn hẳn câu hỏi *"chúng ta có rủi ro gì?"*, vì nó cho phép người ta bi quan mà không bị coi là tiêu cực.**

---

## 3. Đánh giá và ưu tiên hoá rủi ro

**Hai chiều cơ bản: xác suất và tác động.** Nhân hai chiều lại được **mức độ ưu tiên (risk exposure)**.

**Thang đơn giản đủ dùng cho phần lớn dự án:**

| | Tác động thấp | Tác động trung bình | Tác động cao |
|---|---------------|---------------------|--------------|
| **Xác suất cao** | Theo dõi | **Xử lý** | **Xử lý ngay** |
| **Xác suất trung bình** | Chấp nhận | Theo dõi | **Xử lý** |
| **Xác suất thấp** | Chấp nhận | Chấp nhận | **Chuẩn bị phương án** |

> **Ô đáng chú ý nhất là xác suất thấp, tác động cao.** Đây là loại bị bỏ qua nhiều nhất vì *"khó xảy ra mà"* — nhưng đó chính là loại đánh chìm dự án. **Với ô này, bạn không cần phòng ngừa tốn kém, bạn cần một phương án đã viết ra.**

**Ba yếu tố nên thêm vào ngoài xác suất và tác động:**

**1. Khả năng phát hiện.** Rủi ro bạn sẽ thấy trước ba tuần khác hoàn toàn rủi ro nổ ra không báo trước. **Rủi ro khó phát hiện đáng được ưu tiên cao hơn cùng mức xác suất và tác động.**

**2. Thời điểm.** Rủi ro có thể xảy ra tuần sau cần chú ý hơn rủi ro của tháng thứ tám.

**3. Chi phí phòng ngừa.** Một rủi ro trung bình mà chi phí phòng ngừa gần bằng không thì cứ phòng, đừng bàn thêm.

**Về xác suất: đừng cố tỏ ra chính xác.** *"Xác suất 35 phần trăm"* nghe khoa học nhưng thường là con số bịa. **Ba mức cao, trung bình, thấp là đủ, và điều quan trọng là cả đội hiểu giống nhau về ba mức đó.**

---

## 4. Bốn chiến lược xử lý rủi ro

**1. Tránh (avoid) — thay đổi kế hoạch để rủi ro không còn tồn tại.**

- *Rủi ro:* công nghệ mới đội chưa từng dùng có thể không đáp ứng hiệu năng.
- *Tránh:* dùng công nghệ đội đã thành thạo.
- **Đây là chiến lược mạnh nhất nhưng thường tốn nhất, vì bạn từ bỏ lợi ích đi kèm rủi ro đó.**

**2. Giảm (mitigate) — giảm xác suất hoặc giảm tác động.**

- *Giảm xác suất:* làm một spike kỹ thuật hai tuần để kiểm chứng công nghệ trước khi cam kết.
- *Giảm tác động:* thiết kế sao cho có thể thay thế thành phần đó nếu nó không đạt.
- **Đây là chiến lược dùng nhiều nhất trong thực tế.**

**3. Chuyển giao (transfer) — đưa rủi ro sang bên có khả năng gánh tốt hơn.**

- Mua bảo hiểm, thuê bên thứ ba chịu trách nhiệm hợp đồng, dùng dịch vụ quản lý thay vì tự vận hành.
- **Lưu ý: chuyển giao không làm rủi ro biến mất, và bạn vẫn chịu hệ quả nghiệp vụ nếu nó xảy ra.**

**4. Chấp nhận (accept) — quyết định gánh nó.**

- **Chấp nhận thụ động:** không làm gì, chỉ ghi nhận.
- **Chấp nhận chủ động:** ghi nhận và **chuẩn bị một kế hoạch dự phòng** kèm **điều kiện kích hoạt** rõ ràng.

> **Chấp nhận là một quyết định hợp lệ và thường là đúng.** Vấn đề chỉ xảy ra khi rủi ro bị chấp nhận **mà không ai biết là đã chấp nhận** — lúc đó nó không phải quyết định, nó là sự lãng quên.

**Về khoản dự phòng — hai loại khác nhau, và trộn lẫn chúng gây tranh cãi:**

| Loại | Dùng cho | Ai quản lý |
|------|---------|-----------|
| **Contingency reserve** | Rủi ro **đã biết** trong sổ rủi ro | **PM** — dùng khi rủi ro đã ghi nhận xảy ra |
| **Management reserve** | Rủi ro **chưa biết**, những thứ không ai lường được | **Nhà tài trợ** — PM phải xin |

**Một cách xác định mức dự phòng cần thiết:** cộng lại tác động dự kiến của các rủi ro trong sổ, có tính xác suất. Rủi ro chậm bốn tuần với xác suất 25 phần trăm góp một tuần vào khoản dự phòng.

---

## 5. Chỉ báo cảnh báo sớm

**Phần bị bỏ qua nhiều nhất của quản lý rủi ro: mỗi rủi ro cần một CHỈ BÁO mà bạn thật sự theo dõi được.**

**Không có chỉ báo, sổ rủi ro chỉ là một danh sách lo lắng.** Có chỉ báo, nó thành một hệ thống cảnh báo.

**Ví dụ ghép rủi ro với chỉ báo:**

| Rủi ro | Chỉ báo cảnh báo sớm |
|--------|---------------------|
| Đối tác chậm mở API | Không có bản đặc tả API vào cuối tháng Hai |
| Người chủ chốt rời đi | Người đó bắt đầu từ chối nhận việc dài hạn, hoặc nghỉ phép bất thường |
| Yêu cầu chưa đủ rõ | Số câu hỏi từ đội về cùng một module vẫn tăng sau hai sprint |
| Ước tính lạc quan quá | Hai sprint liền hoàn thành dưới 80 phần trăm cam kết |
| Chất lượng đang xuống | Số lỗi hồi quy tăng qua ba lần phát hành liên tiếp |
| Đội quá tải | Số việc đang làm song song mỗi người tăng đều |

**Mỗi rủi ro trong sổ nên có bốn thứ:**

**1. Người sở hữu** — một người cụ thể, không phải *"cả đội"*.
**2. Chỉ báo** — điều gì cho thấy nó đang tiến gần.
**3. Điều kiện kích hoạt** — mốc nào thì chuyển sang phương án dự phòng.
**4. Ngày xem lại** — không có ngày thì nó sẽ không được xem lại.

> **Về điều kiện kích hoạt: hãy quyết định TRƯỚC.** *"Nếu tới ngày 10 tháng Ba mà chưa có API của đối tác, chúng ta chuyển sang dùng dữ liệu giả và tách phần tích hợp sang phát hành sau."* **Quyết định trước khi bị áp lực luôn tốt hơn quyết định trong lúc đang cháy.**

---

## 6. Theo dõi liên tục và văn hoá nói thật

**Sổ rủi ro là tài liệu SỐNG, và dấu hiệu chắc chắn nhất của quản lý rủi ro hình thức là một sổ rủi ro không đổi trong ba tháng.**

**Nhịp làm việc thực dụng:**

- **Hàng tuần, mười lăm phút:** rủi ro nào có chỉ báo đã động? Rủi ro nào đã hết? Có rủi ro mới?
- **Mỗi mốc lớn:** rà soát toàn bộ, vì bối cảnh đã đổi đủ nhiều.
- **Khi có thay đổi phạm vi:** mọi thay đổi mở ra rủi ro mới, và đó là một phần của phân tích tác động.

**Ba việc phải làm mà đội hay quên:**

**1. Đóng rủi ro đã hết.** Rủi ro về công nghệ mới không còn ý nghĩa sau khi đội đã dùng nó ba tháng. **Sổ rủi ro đầy những dòng chết sẽ không được ai đọc.**

**2. Ghi lại rủi ro đã xảy ra và cách xử lý.** Đây là nguyên liệu cho danh sách kiểm tra ở dự án tới.

**3. Ghi lại cả những rủi ro KHÔNG xảy ra.** Vì nếu không, năm sau sẽ có người nói *"lo hão"* và cắt hết chi phí phòng ngừa.

> **Điều kiện nền tảng cho mọi thứ ở trên: đội phải cảm thấy an toàn khi nêu rủi ro.**
>
> **Nếu người báo rủi ro bị coi là tiêu cực, bị hỏi *"sao lúc nào cũng bi quan"*, hoặc bị giao thêm việc như một hình phạt — thì rủi ro sẽ chỉ được nêu khi nó đã thành vấn đề.** Và lúc đó bạn không còn lựa chọn nào.

**Ba câu nói của PM phá huỷ văn hoá này nhanh nhất:** *"đừng lo, sẽ ổn thôi"*, *"tìm giải pháp đi, đừng mang vấn đề tới"* khi người ta chưa có đủ thẩm quyền để giải quyết, và *"tôi đã nói rồi mà"* khi rủi ro xảy ra.

---

## 7. Điểm cốt lõi

- **Rủi ro là sự kiện chưa xảy ra**; đã xảy ra thì là vấn đề, không đổi được thì là ràng buộc.
- ***"Đội thiếu người"* không phải rủi ro** — đó là vấn đề hoặc ràng buộc.
- Viết rủi ro theo công thức **vì nguyên nhân, có thể sự kiện, dẫn tới hệ quả**.
- Một rủi ro viết đúng cho bạn **hành động phòng ngừa, chỉ báo cần theo dõi, và con số để so với chi phí**.
- **Mục đích không phải loại bỏ rủi ro** mà là biết mình đang gánh rủi ro gì một cách có ý thức.
- Bảy nguồn rủi ro: **con người, yêu cầu, kỹ thuật, bên ngoài, tổ chức, ước tính, chất lượng và vận hành**.
- **Danh sách kiểm tra từ dự án trước là kỹ thuật rẻ nhất và hiệu quả nhất.**
- **Phỏng vấn riêng cho ra nhiều rủi ro con người và tổ chức hơn họp chung.**
- **Pre-mortem hiệu quả vì nó cho phép người ta bi quan mà không bị coi là tiêu cực.**
- **Ô xác suất thấp, tác động cao bị bỏ qua nhiều nhất** — và đó là loại đánh chìm dự án.
- **Rủi ro khó phát hiện đáng ưu tiên cao hơn** cùng mức xác suất và tác động.
- **Ba mức cao, trung bình, thấp là đủ** — con số 35 phần trăm thường là bịa.
- Bốn chiến lược: **tránh, giảm, chuyển giao, chấp nhận** — giảm là chiến lược dùng nhiều nhất.
- **Chuyển giao không làm rủi ro biến mất**, bạn vẫn chịu hệ quả nghiệp vụ.
- **Chấp nhận là hợp lệ; vấn đề là chấp nhận mà không ai biết đã chấp nhận.**
- **Contingency reserve cho rủi ro đã biết do PM quản lý; management reserve cho rủi ro chưa biết do nhà tài trợ quản lý.**
- **Không có chỉ báo, sổ rủi ro chỉ là một danh sách lo lắng.**
- Mỗi rủi ro cần **người sở hữu cụ thể, chỉ báo, điều kiện kích hoạt, và ngày xem lại**.
- **Quyết định điều kiện kích hoạt trước khi bị áp lực** luôn tốt hơn quyết định lúc đang cháy.
- **Sổ rủi ro không đổi trong ba tháng là dấu hiệu quản lý rủi ro hình thức.**
- **Ghi lại cả rủi ro không xảy ra**, nếu không thì chi phí phòng ngừa sẽ bị cắt vì bị coi là lo hão.
- **Nếu người báo rủi ro bị coi là tiêu cực, rủi ro chỉ được nêu khi đã thành vấn đề.**

## 8. Tóm tắt

- Quản lý rủi ro bắt đầu bằng việc **viết rủi ro cho đúng**, vì cách viết quyết định việc có làm được gì với nó hay không.
- **Nhận diện phải có hệ thống**, và pre-mortem là kỹ thuật cho ra nhiều rủi ro thật nhất.
- **Bốn chiến lược xử lý đều hợp lệ**, kể cả chấp nhận, miễn là quyết định được ghi nhận.
- **Chỉ báo cảnh báo sớm và văn hoá an toàn để nói thật** là hai thứ biến một danh sách lo lắng thành hệ thống cảnh báo.
