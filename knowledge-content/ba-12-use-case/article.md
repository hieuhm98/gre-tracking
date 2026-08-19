# Use Case & đặc tả use case

## 1. Use case là gì và khi nào dùng

> **Use case mô tả một chuỗi tương tác giữa người dùng (actor) và hệ thống để đạt được một mục tiêu có giá trị.**

Điểm mấu chốt: use case luôn được viết **từ góc nhìn của actor** và luôn hướng tới **một mục tiêu hoàn chỉnh**, không phải một thao tác lẻ.

- ✅ *"Đặt yêu cầu mua hoá chất"* — một mục tiêu hoàn chỉnh.
- ❌ *"Nhấn nút Lưu"* — một thao tác, không phải mục tiêu.

### Use case và user story — chọn cái nào

| | **User story** | **Use case** |
|---|---------------|--------------|
| **Độ dài** | Một câu trên thẻ | Một tài liệu có cấu trúc |
| **Chi tiết** | Đến từ cuộc trò chuyện | Nằm ngay trong tài liệu |
| **Mạnh ở** | Ưu tiên hoá, làm việc theo iteration | Luồng phức tạp, nhiều nhánh, nhiều ngoại lệ |
| **Yếu ở** | Luồng dài với nhiều rẽ nhánh | Ưu tiên hoá và chia nhỏ theo sprint |
| **Phù hợp khi** | Đội ngồi gần, trao đổi liên tục | Đội phân tán, hợp đồng, hệ thống được quản lý chặt |

> **Đây không phải lựa chọn loại trừ nhau.** Nhiều đội dùng user story để ưu tiên hoá và lên kế hoạch, rồi viết đặc tả use case cho **những luồng phức tạp nhất** — nơi mà một câu trên thẻ không đủ.

**Dùng use case khi:** luồng có nhiều nhánh và ngoại lệ, nhiều actor tham gia, cần tài liệu cho hợp đồng hoặc chứng nhận, hoặc đội ở xa nhau nên không thể dựa vào trò chuyện.

---

## 2. Các thành phần của một đặc tả use case

Không có một mẫu chuẩn duy nhất, nhưng các trường sau xuất hiện trong hầu hết mọi mẫu:

| Trường | Nội dung |
|--------|----------|
| **Mã và tên** | UC-07 — Đặt yêu cầu mua hoá chất |
| **Actor chính** | Người khởi tạo và nhận giá trị từ use case |
| **Actor phụ** | Hệ thống hoặc người khác tham gia hỗ trợ |
| **Mô tả ngắn** | Một tới hai câu về mục tiêu |
| **Điều kiện trước (precondition)** | Điều gì phải đúng trước khi bắt đầu |
| **Điều kiện sau (postcondition)** | Trạng thái hệ thống sau khi kết thúc thành công |
| **Trigger** | Sự kiện khởi động use case |
| **Luồng chính (normal flow)** | Các bước khi mọi thứ diễn ra thuận lợi |
| **Luồng thay thế (alternative flow)** | Cách khác cũng dẫn tới thành công |
| **Luồng ngoại lệ (exception flow)** | Điều gì xảy ra khi có lỗi |
| **Business rule liên quan** | Tham chiếu tới mã quy tắc |
| **Yêu cầu phi chức năng liên quan** | Hiệu năng, bảo mật áp dụng cho use case này |

> **Hai trường bị bỏ qua nhiều nhất là precondition và postcondition.** Thiếu chúng, lập trình viên không biết use case này bắt đầu từ trạng thái nào và kết thúc ở trạng thái nào — nguồn gốc của rất nhiều lỗi tích hợp giữa các màn hình.

---

## 3. Ba loại luồng

### Luồng chính (normal flow)

Chuỗi bước khi **mọi thứ diễn ra thuận lợi**. Viết theo cặp: **hành động của actor → phản hồi của hệ thống**.

> **UC-07 — Luồng chính**
>
> 1. Người yêu cầu chọn chức năng Tạo yêu cầu mới.
> 2. Hệ thống hiển thị biểu mẫu yêu cầu trống.
> 3. Người yêu cầu nhập tên hoá chất và số lượng.
> 4. Hệ thống tìm hoá chất trong kho và trong catalog nhà cung cấp.
> 5. Hệ thống hiển thị các phương án khả dụng kèm thời gian giao dự kiến.
> 6. Người yêu cầu chọn một phương án và xác nhận.
> 7. Hệ thống tạo yêu cầu ở trạng thái Chờ duyệt và thông báo cho người phê duyệt.

**Nguyên tắc viết luồng chính:**

- **Đánh số từng bước** để tham chiếu được từ các luồng khác.
- **Mỗi bước một hành động**, không gộp.
- **Không mô tả giao diện** — nói *"hệ thống hiển thị các phương án"*, không nói *"hệ thống hiển thị bảng có ba cột"*.
- **Giữ trong khoảng 5 tới 10 bước.** Dài hơn thường nghĩa là bạn đang gộp nhiều mục tiêu.

### Luồng thay thế (alternative flow)

**Cách khác cũng dẫn tới thành công.** Ghi rõ nó rẽ ra từ bước nào và nhập lại ở bước nào.

> **3a. Người yêu cầu chọn hoá chất từ danh sách đã đặt trước đây**
> 3a1. Người yêu cầu chọn Đặt lại từ lịch sử.
> 3a2. Hệ thống hiển thị các hoá chất đã đặt trong 12 tháng qua.
> 3a3. Người yêu cầu chọn một mục. Luồng tiếp tục ở bước 4.

### Luồng ngoại lệ (exception flow)

**Điều gì xảy ra khi có lỗi.** Đây là phần **quan trọng nhất và bị bỏ sót nhiều nhất**.

> **4a. Không tìm thấy hoá chất trong kho lẫn catalog**
> 4a1. Hệ thống thông báo không tìm thấy và đề nghị gửi yêu cầu đặc biệt.
> 4a2. Nếu người yêu cầu đồng ý, hệ thống tạo yêu cầu ở trạng thái Cần tìm nguồn. Use case kết thúc.
>
> **7a. Không kết nối được tới dịch vụ thông báo**
> 7a1. Hệ thống vẫn tạo yêu cầu và ghi lại việc thông báo thất bại.
> 7a2. Hệ thống thử gửi lại thông báo sau 5 phút.

> **Quy ước đánh số rất quan trọng:** `4a` nghĩa là nhánh thứ nhất rẽ ra từ bước 4. Nó cho phép bạn tham chiếu chính xác trong tài liệu, test case và bug report.

---

## 4. Xác định actor

**Actor là bất kỳ ai hoặc bất kỳ hệ thống nào tương tác với hệ thống đang xét từ bên ngoài.**

**Ba loại actor:**

- **Người dùng** — phân theo vai trò, không theo chức danh. *"Người yêu cầu"* và *"Người phê duyệt"* là hai actor, ngay cả khi cùng một người có thể đóng cả hai vai ở các thời điểm khác nhau.
- **Hệ thống bên ngoài** — cổng thanh toán, hệ thống nhân sự, dịch vụ email.
- **Thời gian** — với các use case chạy theo lịch, actor là bộ đếm thời gian.

**Sai lầm phổ biến:**

- **Nhầm actor với người dùng cụ thể.** *"Anh Minh phòng mua hàng"* không phải actor; *"Người yêu cầu"* mới là.
- **Bỏ sót actor là hệ thống.** Rất nhiều use case có một hệ thống bên ngoài tham gia mà không được ghi ra, dẫn tới bỏ sót yêu cầu tích hợp.
- **Tạo quá nhiều actor.** Nếu hai vai trò có cùng tập use case và cùng quyền, chúng nên là một actor.

---

## 5. Sai lầm thường gặp khi viết use case

**1. Viết ở mức thao tác thay vì mục tiêu.** *"Đăng nhập"* thường không phải use case mà là điều kiện trước của nhiều use case khác.

**2. Mô tả giao diện trong luồng.** *"Người dùng nhấp vào nút màu xanh ở góc phải"* khoá chặt thiết kế và làm tài liệu lỗi thời ngay khi giao diện đổi.

**3. Chỉ viết luồng chính.** Đây là sai lầm nghiêm trọng nhất. **Phần lớn độ phức tạp và phần lớn bug nằm ở luồng ngoại lệ.**

**4. Luồng quá dài.** Trên 15 bước thường nghĩa là bạn đang gộp nhiều use case.

**5. Không tham chiếu business rule.** Chép nội dung quy tắc vào luồng khiến khi quy tắc đổi bạn phải sửa nhiều nơi.

**6. Viết use case cho mọi thứ.** Không phải chức năng nào cũng cần đặc tả use case đầy đủ. **Dùng nó cho những luồng phức tạp nhất, nơi mà một câu trên thẻ không đủ.**

> **Bài kiểm tra chất lượng: đưa đặc tả use case cho tester và hỏi họ có viết được test case đầy đủ không.** Nếu họ phải quay lại hỏi nhiều câu, đặc tả chưa đủ.

---

## 6. Use case diagram và đặc tả use case

**Hai thứ này phục vụ mục đích khác nhau và không thay thế được nhau.**

**Use case diagram** cho **bức tranh phạm vi ở mức cao**: actor nào dùng chức năng nào. Nó trả lời câu hỏi *"hệ thống này phục vụ những ai và làm được những gì?"*

**Nó KHÔNG thể hiện:** thứ tự các bước, điều kiện, ngoại lệ, dữ liệu.

**Đặc tả use case** cho **chi tiết luồng**. Đây mới là thứ lập trình viên và tester dùng để làm việc.

> **Sai lầm phổ biến: vẽ use case diagram rồi coi như đã đặc tả xong.** Sơ đồ chỉ là mục lục; nội dung nằm trong đặc tả.

**Ba quan hệ trên use case diagram:**

- **Association** — actor tham gia use case (đường thẳng).
- **Include** — use case A luôn gọi use case B như một phần bắt buộc.
- **Extend** — use case B bổ sung hành vi cho A trong một điều kiện nhất định.

> **Lời khuyên thực tế: đừng lạm dụng include và extend.** Chúng dễ gây tranh cãi và ít mang lại giá trị cho người đọc không chuyên. Nếu sơ đồ trở nên khó hiểu vì các quan hệ này, hãy đơn giản hoá nó.

---

## 7. Điểm cốt lõi

- **Use case mô tả chuỗi tương tác giữa actor và hệ thống để đạt một mục tiêu có giá trị**, không phải một thao tác lẻ.
- **User story mạnh ở ưu tiên hoá; use case mạnh ở luồng phức tạp nhiều nhánh và ngoại lệ.**
- **Đây không phải lựa chọn loại trừ nhau** — dùng story để lập kế hoạch, use case cho luồng phức tạp nhất.
- Dùng use case khi **nhiều nhánh, nhiều actor, cần tài liệu hợp đồng, hoặc đội ở xa nhau**.
- **Precondition và postcondition là hai trường bị bỏ qua nhiều nhất**, gây lỗi tích hợp giữa các màn hình.
- Luồng chính viết theo cặp **hành động của actor → phản hồi của hệ thống**, giữ trong 5 tới 10 bước.
- **Không mô tả giao diện trong luồng** — điều đó khoá chặt thiết kế và làm tài liệu lỗi thời ngay khi giao diện đổi.
- **Luồng ngoại lệ là phần quan trọng nhất và bị bỏ sót nhiều nhất** — phần lớn bug nằm ở đó.
- Quy ước đánh số **4a** nghĩa là nhánh thứ nhất rẽ ra từ bước 4, cho phép tham chiếu chính xác.
- **Actor phân theo vai trò, không theo chức danh hay tên người cụ thể.**
- **Bỏ sót actor là hệ thống bên ngoài** dẫn tới bỏ sót yêu cầu tích hợp.
- **Nếu hai vai trò có cùng tập use case và cùng quyền, chúng nên là một actor.**
- ***"Đăng nhập"* thường không phải use case** mà là điều kiện trước của nhiều use case khác.
- **Luồng trên 15 bước thường nghĩa là bạn đang gộp nhiều use case.**
- **Tham chiếu business rule thay vì chép nội dung**, để khi quy tắc đổi chỉ sửa một nơi.
- **Đừng viết use case cho mọi thứ** — chỉ cho những luồng phức tạp nhất.
- Bài kiểm tra: **tester có viết được test case đầy đủ từ đặc tả không**.
- **Use case diagram là mục lục; đặc tả use case mới là nội dung** — vẽ sơ đồ không phải là đặc tả xong.
- **Đừng lạm dụng include và extend** — chúng dễ gây tranh cãi và ít giá trị cho người đọc không chuyên.

## 8. Tóm tắt

- Use case là công cụ mạnh cho **luồng phức tạp có nhiều nhánh và ngoại lệ**, nơi một câu trên thẻ không đủ.
- Ba loại luồng — **chính, thay thế, ngoại lệ** — và luồng ngoại lệ mới là nơi chứa phần lớn giá trị.
- **Xác định actor theo vai trò** và đừng quên các hệ thống bên ngoài cũng là actor.
- **Diagram cho phạm vi, đặc tả cho chi tiết** — hai thứ bổ sung nhau chứ không thay thế nhau.
