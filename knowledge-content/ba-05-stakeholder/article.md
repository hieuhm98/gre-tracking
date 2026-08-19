# Stakeholder: xác định & làm việc

## 1. Stakeholder là ai?

> **Stakeholder là bất kỳ ai bị ảnh hưởng bởi dự án, có ảnh hưởng tới dự án, hoặc có quyền lợi liên quan tới kết quả của nó.**

Định nghĩa này rộng hơn nhiều so với những gì người mới thường nghĩ. **Stakeholder không chỉ là khách hàng và người dùng.**

**Bốn nhóm hay bị bỏ sót nhất:**

| Nhóm | Ví dụ | Vì sao quan trọng |
|------|-------|-------------------|
| **Người dùng gián tiếp** | Người nhận báo cáo do hệ thống sinh ra, khách hàng cuối của khách hàng | Họ chịu hậu quả nhưng không bao giờ mở phần mềm |
| **Bộ phận vận hành và hỗ trợ** | IT support, quản trị hệ thống, chăm sóc khách hàng | Họ phải sống với sản phẩm hằng ngày sau khi bàn giao |
| **Bộ phận tuân thủ** | Pháp chế, kiểm toán, an ninh thông tin | Họ có quyền phủ quyết vào phút chót nếu không được hỏi sớm |
| **Hệ thống và đối tác bên ngoài** | Nhà cung cấp thanh toán, đối tác tích hợp | Thay đổi của bạn có thể phá vỡ tích hợp của họ |

> **Bài học kinh điển: bộ phận pháp chế xuất hiện ở tuần cuối trước khi phát hành và nói rằng tính năng này vi phạm quy định.** Chi phí của việc phát hiện muộn đó thường lớn hơn nhiều so với chi phí mời họ dự một buổi họp ở tuần đầu tiên.

---

## 2. Cách tìm ra stakeholder bị bỏ sót

Đừng chờ họ tự xuất hiện. **Hãy chủ động săn tìm.**

**Kỹ thuật 1 — Đi theo dòng chảy.** Vẽ quy trình nghiệp vụ đầu-cuối và hỏi ở mỗi bước: *ai thực hiện bước này, ai cung cấp đầu vào, ai nhận đầu ra?* Mỗi lần chuyển giao là một stakeholder tiềm năng.

**Kỹ thuật 2 — Đi theo dữ liệu.** Với mỗi loại dữ liệu quan trọng, hỏi: *ai tạo ra nó, ai đọc nó, ai sửa nó, ai xoá nó, ai chịu trách nhiệm về chất lượng của nó?*

**Kỹ thuật 3 — Hỏi vòng tròn.** Cuối mỗi buổi phỏng vấn, hỏi câu này: ***"Ngoài anh chị ra, em còn nên nói chuyện với ai nữa về việc này?"*** Đây là câu hỏi hiệu quả nhất và tốn ít công nhất trong toàn bộ quá trình.

**Kỹ thuật 4 — Rà soát ecosystem map.** Vẽ sơ đồ mọi hệ thống mà ứng dụng của bạn trao đổi dữ liệu. Mỗi hệ thống đều có một đội sở hữu nó.

**Kỹ thuật 5 — Hỏi ai sẽ phản đối.** *"Ai có thể không hài lòng khi hệ thống này ra đời?"* Câu hỏi này tìm ra những người có ảnh hưởng mà bạn cần thuyết phục sớm.

---

## 3. Phân loại theo ảnh hưởng và quan tâm

Bạn không thể dành thời gian như nhau cho mọi stakeholder. **Ma trận ảnh hưởng và quan tâm giúp phân bổ công sức giao tiếp.**

| | **Quan tâm thấp** | **Quan tâm cao** |
|---|------------------|------------------|
| **Ảnh hưởng cao** | **Giữ hài lòng** — báo cáo tóm tắt định kỳ, đừng làm phiền bằng chi tiết vận hành | **Quản lý sát sao** — họp thường xuyên, tham gia quyết định, review tài liệu |
| **Ảnh hưởng thấp** | **Theo dõi** — thông báo khi có thay đổi lớn | **Giữ thông tin** — cập nhật đều đặn, lấy ý kiến về chi tiết |

**Cách dùng ma trận đúng:**

- **Nhóm ảnh hưởng cao và quan tâm cao** là nơi bạn dành phần lớn thời gian. Đây thường là product champion và người ra quyết định.
- **Nhóm ảnh hưởng cao nhưng quan tâm thấp** rất nguy hiểm nếu bị bỏ quên: họ không tham gia nhưng có quyền phủ quyết. Hãy giữ họ được thông tin đủ để không bất ngờ.
- **Vị trí của một người có thể thay đổi trong dự án.** Một giám đốc ban đầu ít quan tâm có thể trở nên rất quan tâm khi ngân sách bị vượt.

> **Lưu ý quan trọng: đừng nhầm chức vụ với ảnh hưởng.** Một chuyên viên vận hành lâu năm mà mọi người đều hỏi ý kiến có thể có ảnh hưởng thực tế lớn hơn một trưởng phòng mới nhận việc.

---

## 4. Product champion — người đại diện cho user class

**Với mỗi user class quan trọng, hãy tìm một product champion: một người dùng thật, có kinh nghiệm, được đồng nghiệp tin tưởng, sẵn sàng dành thời gian cho dự án.**

**Vì sao cần product champion thay vì cố gặp mọi người dùng:**

- Bạn **không thể phỏng vấn 500 nhân viên kho**, nhưng bạn có thể làm việc sâu với hai người đại diện.
- Product champion **có trách nhiệm thu thập ý kiến từ nhóm của mình** và mang tiếng nói tập thể tới bạn.
- Họ trở thành **người bảo vệ sản phẩm** trong chính bộ phận của họ khi triển khai.

**Tiêu chí chọn product champion tốt:**

- Là **người dùng thật**, không phải quản lý chỉ nghe kể lại.
- **Hiểu công việc sâu**, gồm cả các trường hợp ngoại lệ.
- **Được đồng nghiệp tôn trọng** — tiếng nói của họ đại diện được cho nhóm.
- **Có thời gian và được cấp trên cho phép** dành thời gian đó.

> **Bẫy phổ biến: chọn người rảnh nhất thay vì người hiểu nhất.** Người rảnh thường rảnh vì họ không nắm vai trò quan trọng trong quy trình — và yêu cầu bạn thu thập được sẽ phản ánh điều đó.

---

## 5. Xử lý khi stakeholder bất đồng

Bất đồng giữa các stakeholder là **bình thường và không tránh được**, vì họ có mục tiêu khác nhau.

**Ba loại bất đồng và cách xử lý:**

**1. Bất đồng do hiểu khác nhau.** Hai bên thực ra muốn cùng một thứ nhưng dùng từ khác nhau, hoặc mỗi bên nhìn một phần của vấn đề.

- **Cách xử lý:** làm rõ bằng ví dụ cụ thể và mô hình trực quan. Rất nhiều bất đồng biến mất khi mọi người cùng nhìn vào một sơ đồ.

**2. Bất đồng do ưu tiên khác nhau.** Bộ phận bán hàng muốn tính năng A, bộ phận vận hành muốn tính năng B, nguồn lực chỉ đủ một.

- **Cách xử lý:** đây **không phải việc BA quyết định**. Nhiệm vụ của bạn là làm rõ đánh đổi bằng dữ liệu — giá trị, chi phí, rủi ro của mỗi phương án — rồi đưa lên người có thẩm quyền.

**3. Bất đồng do lợi ích xung đột.** Tự động hoá một quy trình có thể làm giảm vai trò của một bộ phận.

- **Cách xử lý:** nhận diện thẳng thắn nhưng tôn trọng. **Đừng đóng gói vấn đề tổ chức thành yêu cầu phần mềm** — điều đó tạo ra phần mềm phức tạp hơn mà không giải quyết được vấn đề thật.

> **Nguyên tắc quan trọng: BA làm rõ và đưa dữ liệu, người có thẩm quyền quyết định.** Nếu bạn tự quyết định thay họ, bạn sẽ chịu trách nhiệm cho một quyết định mà bạn không có quyền đưa ra — và nó sẽ bị đảo ngược ở giai đoạn muộn.

---

## 6. Duy trì quan hệ trong suốt dự án

Xác định stakeholder ở đầu dự án là chưa đủ. **Quan hệ phải được duy trì.**

**Bốn thực hành:**

**1. Lập kế hoạch giao tiếp.** Với mỗi nhóm stakeholder: họ cần biết gì, bao lâu một lần, qua kênh nào, ở mức chi tiết nào. Viết ra và tuân theo.

**2. Đóng vòng lặp.** Khi ai đó nêu một yêu cầu hoặc một mối lo, **luôn phản hồi lại kết quả** — kể cả khi câu trả lời là không. Người không bao giờ nhận được phản hồi sẽ ngừng đóng góp và bắt đầu đi đường vòng.

**3. Xem lại danh sách stakeholder định kỳ.** Người mới xuất hiện, người cũ đổi vai trò, mức độ quan tâm thay đổi. Danh sách lập ở tuần đầu và không bao giờ nhìn lại sẽ nhanh chóng lỗi thời.

**4. Xây dựng uy tín trước khi cần nó.** Khi bạn phải nói không hoặc phải bảo vệ một quyết định khó, uy tín tích luỹ từ những lần bạn đúng và trung thực trước đó chính là thứ giúp bạn được lắng nghe.

> **Chỉ báo sức khoẻ quan hệ: khi stakeholder chủ động tìm bạn để hỏi ý kiến trước khi quyết định, bạn đã trở thành đối tác thay vì người ghi chép.**

---

## 7. Điểm cốt lõi

- Stakeholder là **bất kỳ ai bị ảnh hưởng bởi, có ảnh hưởng tới, hoặc có quyền lợi liên quan** tới dự án.
- Bốn nhóm hay bị bỏ sót: **người dùng gián tiếp, vận hành và hỗ trợ, bộ phận tuân thủ, hệ thống và đối tác bên ngoài**.
- **Bộ phận pháp chế xuất hiện ở tuần cuối** là bài học kinh điển về cái giá của việc phát hiện muộn.
- Câu hỏi hiệu quả nhất để tìm stakeholder bị bỏ sót: ***"Ngoài anh chị, em còn nên nói chuyện với ai nữa?"***
- Ba kỹ thuật săn tìm khác: **đi theo dòng chảy quy trình, đi theo vòng đời dữ liệu, hỏi ai sẽ phản đối**.
- **Ma trận ảnh hưởng và quan tâm** giúp phân bổ công sức giao tiếp, không phải để xếp hạng con người.
- **Nhóm ảnh hưởng cao nhưng quan tâm thấp rất nguy hiểm nếu bị bỏ quên** — họ có quyền phủ quyết.
- **Đừng nhầm chức vụ với ảnh hưởng** — chuyên viên lâu năm có thể có ảnh hưởng thực tế lớn hơn trưởng phòng mới.
- **Vị trí của một người trên ma trận thay đổi trong dự án**, nên phải xem lại định kỳ.
- **Product champion là người dùng thật, hiểu sâu, được tôn trọng và có thời gian** — không phải người rảnh nhất.
- Ba loại bất đồng: **hiểu khác nhau, ưu tiên khác nhau, lợi ích xung đột** — mỗi loại cần cách xử lý riêng.
- Bất đồng do hiểu khác nhau thường **biến mất khi mọi người cùng nhìn vào một sơ đồ**.
- **BA làm rõ và đưa dữ liệu; người có thẩm quyền quyết định** — tự quyết thay họ sẽ bị đảo ngược ở giai đoạn muộn.
- **Đừng đóng gói vấn đề tổ chức thành yêu cầu phần mềm.**
- **Đóng vòng lặp là bắt buộc** — người không nhận được phản hồi sẽ ngừng đóng góp và đi đường vòng.
- Khi stakeholder **chủ động hỏi ý kiến bạn trước khi quyết định**, bạn đã thành đối tác thay vì người ghi chép.

## 8. Tóm tắt

- Xác định stakeholder là **hoạt động chủ động và lặp lại**, không phải một bước làm xong ở tuần đầu.
- Phân loại theo **ảnh hưởng và quan tâm** để dành công sức đúng chỗ, và cập nhật khi vị trí của họ thay đổi.
- **Product champion** cho phép bạn hiểu sâu một user class mà không cần gặp toàn bộ người dùng.
- Khi có bất đồng, **vai trò của BA là làm rõ đánh đổi bằng dữ liệu**, còn quyết định thuộc về người có thẩm quyền.
