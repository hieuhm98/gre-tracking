# Hỗ trợ kiểm thử & UAT

## 1. Vai trò của BA trong kiểm thử

**BA không phải tester, nhưng BA đóng vai trò quyết định trong việc bảo đảm sản phẩm đúng.**

**Bốn đóng góp cụ thể:**

**1. Làm cho yêu cầu kiểm chứng được.** Nếu tester không viết được test case từ yêu cầu của bạn, thì lập trình viên cũng không xây đúng được.

**2. Rà soát độ phủ.** Đối chiếu bộ test case với danh sách yêu cầu để tìm khoảng trống: yêu cầu nào chưa có test nào?

**3. Phân loại vấn đề.** Khi tester báo lỗi, giúp xác định đó là **lỗi mã** hay **yêu cầu chưa nói tới trường hợp này**.

**4. Tổ chức UAT.** Chuẩn bị kịch bản, hỗ trợ người dùng thật thực hiện, ghi nhận và phân loại kết quả.

> **Nguyên tắc nền tảng: test hệ thống phải được suy ra từ YÊU CẦU, không phải từ mã.** Nếu bạn viết test bằng cách đọc mã, bạn chỉ kiểm tra được rằng mã làm những gì nó làm — bạn không thể phát hiện **chức năng bị bỏ sót hoàn toàn**.

---

## 2. Viết test case từ acceptance criteria

**Mỗi acceptance criterion nên sinh ra ít nhất một test case, và thường là nhiều hơn.**

**Từ một AC, hãy sinh ra bốn nhóm test:**

| Nhóm | Ví dụ với AC về đặt hàng |
|------|--------------------------|
| **Đường đi thuận lợi** | Đặt hàng với giỏ hợp lệ và thông tin giao hàng đầy đủ |
| **Trường hợp biên** | Giỏ có đúng 1 sản phẩm; giỏ có số lượng tối đa cho phép; giá trị đơn đúng bằng ngưỡng phê duyệt |
| **Trường hợp lỗi** | Sản phẩm hết hàng giữa chừng; mất kết nối tới cổng thanh toán; thông tin giao hàng thiếu |
| **Phân quyền** | Người dùng không có quyền đặt hàng; người dùng chỉ được đặt cho chi nhánh của mình |

> **Trường hợp biên là nhóm bị bỏ sót nhiều nhất sau trường hợp lỗi.** Rất nhiều bug nằm đúng ở ranh giới: giá trị bằng ngưỡng, danh sách rỗng, danh sách có đúng một phần tử, ký tự tối đa cho phép.

**Cấu trúc một test case cơ bản:**

| Trường | Nội dung |
|--------|----------|
| **Mã** | TC-042 |
| **Yêu cầu liên quan** | UC-07 / AC2 |
| **Điều kiện trước** | Người dùng đã đăng nhập với vai trò Người yêu cầu, giỏ có 2 sản phẩm |
| **Các bước** | 1. Mở giỏ hàng. 2. Bấm Xác nhận đặt hàng. 3. Nhập địa chỉ giao. 4. Bấm Hoàn tất |
| **Kết quả mong đợi** | Đơn được tạo ở trạng thái Chờ xác nhận; tồn kho giảm; email xác nhận gửi trong 1 phút |
| **Dữ liệu kiểm thử** | Sản phẩm A (tồn 10), sản phẩm B (tồn 3) |

> **Trường "yêu cầu liên quan" là trường quan trọng nhất mà nhiều đội bỏ qua.** Nó cho phép trả lời hai câu hỏi ngay lập tức: yêu cầu nào chưa được kiểm thử, và test nào không truy vết về yêu cầu nào.

---

## 3. Checklist — khi test case đầy đủ là quá nặng

**Không phải mọi thứ đều cần một test case đầy đủ.** Với những phần lặp lại hoặc kiểm tra nhanh, **checklist hiệu quả hơn nhiều**.

**Checklist phù hợp cho:**

- **Kiểm tra hồi quy nhanh** trước mỗi lần phát hành.
- **Kiểm tra tính nhất quán giao diện** trên nhiều màn hình.
- **Kiểm tra khả năng tiếp cận** — mọi ảnh có alt, mọi trường có nhãn, điều hướng được bằng bàn phím.
- **Kiểm tra một loại yêu cầu lặp lại** — ví dụ mọi màn hình danh sách phải có trạng thái rỗng, trạng thái tải, trạng thái lỗi.

**Ví dụ checklist mà BA nên có cho mỗi màn hình mới:**

- [ ] Trạng thái rỗng hiển thị đúng và có hướng dẫn hành động tiếp theo
- [ ] Trạng thái đang tải hiển thị và không bị treo vô hạn khi lỗi
- [ ] Trạng thái lỗi hiển thị thông báo hữu ích, không phải mã lỗi kỹ thuật
- [ ] Người dùng không đủ quyền thấy phản hồi rõ ràng
- [ ] Dữ liệu lớn (một nghìn dòng) vẫn dùng được — có phân trang hoặc lọc
- [ ] Thao tác phá huỷ dữ liệu có xác nhận
- [ ] Bấm hai lần liên tiếp không tạo hai bản ghi
- [ ] Quay lại giữa chừng không mất dữ liệu đã nhập ngoài ý muốn

> **Checklist này áp dụng cho MỌI màn hình, nên nó thuộc về definition of done chứ không phải acceptance criteria của từng story.**

---

## 4. UAT là gì và khác gì kiểm thử hệ thống

**UAT (User Acceptance Testing) là bước người dùng thật xác nhận hệ thống đáp ứng nhu cầu nghiệp vụ của họ.**

| | **System testing** | **UAT** |
|---|-------------------|---------|
| **Ai thực hiện** | Tester chuyên nghiệp | Người dùng nghiệp vụ thật |
| **Câu hỏi** | *"Hệ thống có làm đúng đặc tả không?"* | *"Hệ thống có giúp tôi làm được việc của mình không?"* |
| **Môi trường** | Test | Staging với dữ liệu giống thật |
| **Dữ liệu** | Dữ liệu kiểm thử có kiểm soát | Bản sao dữ liệu thật đã che thông tin nhạy cảm |
| **Tìm ra** | Lỗi so với đặc tả | Khoảng cách giữa đặc tả và nhu cầu thật |

> **Điểm mấu chốt: UAT không phải để tìm bug kỹ thuật — đó là việc của system testing.** UAT tìm ra những gì **đặc tả đã bỏ sót**: quy trình thực tế khác với mô tả, trường hợp ngoại lệ chưa ai nghĩ tới, thao tác đúng nhưng bất tiện tới mức không dùng được.
>
> **Nếu UAT phát hiện toàn bug kỹ thuật cơ bản, điều đó nghĩa là system testing chưa làm tốt** — và bạn đang lãng phí thời gian quý giá của người dùng nghiệp vụ.

---

## 5. Tổ chức một buổi UAT hiệu quả

**Chuẩn bị:**

**1. Chọn đúng người.** Người dùng **thật**, không phải quản lý của họ. Bao gồm cả người thành thạo lẫn người mới, vì họ gặp vấn đề khác nhau.

**2. Chuẩn bị kịch bản theo TÁC VỤ NGHIỆP VỤ, không theo màn hình.**

- ❌ *"Mở màn hình A, nhập trường B, bấm nút C"*
- ✅ *"Xử lý đơn hàng của khách hàng Công ty ABC cho 50 thùng giấy, giao tới kho Bình Dương trước thứ Sáu"*

**3. Chuẩn bị dữ liệu thật.** Dữ liệu giả làm người dùng không nhận ra vấn đề. Tên sản phẩm dài thật, mã thật, số lượng thật.

**4. Bảo đảm môi trường ổn định.** Không có gì làm hỏng UAT nhanh hơn việc hệ thống sập giữa buổi.

**Trong buổi:**

- **Giao tác vụ rồi im lặng quan sát.** Chỗ họ dừng lại hoặc làm sai chính là chỗ có vấn đề.
- **Đừng giải thích khi họ mắc kẹt.** Nếu bạn phải giải thích, sản phẩm thật cũng sẽ cần bạn ngồi cạnh mỗi người dùng.
- **Ghi lại VẤN ĐỀ chứ không ghi lại giải pháp** họ đề xuất.
- **Ghi cả những gì họ nói và những gì họ làm** — hai thứ này thường khác nhau.

**Sau buổi:**

- **Phân loại kết quả**: lỗi mã / yêu cầu bị bỏ sót / yêu cầu mới / hiểu lầm cần đào tạo.
- **Đóng vòng lặp**: báo lại cho người tham gia biết vấn đề nào được xử lý và vấn đề nào không, kèm lý do.

> **Việc không báo lại kết quả cho người tham gia UAT là lỗi giết chết sự hợp tác.** Lần sau bạn mời họ, họ sẽ không đến — vì họ tin rằng ý kiến của mình không dẫn tới điều gì.

---

## 6. Phân loại kết quả UAT

**Không phải mọi thứ người dùng nêu trong UAT đều là bug cần sửa ngay.** Phân loại đúng quyết định điều gì xảy ra tiếp theo.

| Loại | Dấu hiệu | Xử lý |
|------|----------|-------|
| **Lỗi mã** | Yêu cầu nói rõ, hệ thống làm sai | Đội sửa trong đợt hiện tại |
| **Yêu cầu bị bỏ sót** | Yêu cầu không nói tới trường hợp này, nhưng hành vi hiện tại không chấp nhận được | Tạo mục backlog mới và ưu tiên hoá |
| **Yêu cầu mới** | Người dùng muốn thêm điều chưa từng nằm trong phạm vi | Đưa vào backlog, quyết định ở bản sau |
| **Hiểu lầm** | Hệ thống làm đúng, người dùng chưa quen | Bổ sung đào tạo hoặc cải thiện hướng dẫn trong sản phẩm |
| **Sở thích cá nhân** | Không có lý do nghiệp vụ, chỉ là thói quen cũ | Ghi nhận, không hành động ngay |

> **Bài học quan trọng: nếu nhiều vấn đề UAT thuộc loại "yêu cầu bị bỏ sót", đó là TÍN HIỆU QUY TRÌNH.** Nó nghĩa là khâu khai thác yêu cầu và grooming chưa phủ tốt các trường hợp ngoại lệ — và đó là điều đáng cải tiến cho dự án sau, chứ không chỉ là loạt bug cần sửa.

**Về việc "hiểu lầm cần đào tạo":** hãy cẩn thận với phân loại này. **Nếu nhiều người dùng cùng hiểu lầm một cách, đó không phải vấn đề đào tạo — đó là vấn đề thiết kế.**

---

## 7. Điểm cốt lõi

- **BA không phải tester nhưng đóng vai trò quyết định** trong việc bảo đảm sản phẩm đúng.
- **Nếu tester không viết được test case từ yêu cầu, lập trình viên cũng không xây đúng được.**
- **Test hệ thống phải suy ra từ yêu cầu, không phải từ mã** — nếu không bạn không phát hiện được chức năng bị bỏ sót hoàn toàn.
- Mỗi AC nên sinh ra bốn nhóm test: **đường đi thuận lợi, trường hợp biên, trường hợp lỗi, phân quyền**.
- **Trường hợp biên là nhóm bị bỏ sót nhiều thứ hai sau trường hợp lỗi** — rất nhiều bug nằm đúng ở ranh giới.
- **Trường "yêu cầu liên quan" trong test case là trường quan trọng nhất mà nhiều đội bỏ qua.**
- **Checklist hiệu quả hơn test case đầy đủ** cho kiểm tra hồi quy nhanh và các yêu cầu lặp lại.
- Checklist áp dụng cho mọi màn hình **thuộc về definition of done**, không phải AC của từng story.
- **UAT không phải để tìm bug kỹ thuật** — nó tìm ra những gì đặc tả đã bỏ sót.
- **Nếu UAT phát hiện toàn bug cơ bản, system testing chưa làm tốt** và bạn đang lãng phí thời gian người dùng.
- Kịch bản UAT phải viết theo **tác vụ nghiệp vụ, không theo màn hình**.
- **Dữ liệu giả làm người dùng không nhận ra vấn đề** — hãy dùng dữ liệu thật đã che thông tin nhạy cảm.
- **Giao tác vụ rồi im lặng quan sát**; đừng giải thích khi người dùng mắc kẹt.
- **Ghi cả những gì họ nói và những gì họ làm** — hai thứ này thường khác nhau.
- Phân loại kết quả UAT thành **lỗi mã, yêu cầu bị bỏ sót, yêu cầu mới, hiểu lầm, sở thích cá nhân**.
- **Không báo lại kết quả cho người tham gia UAT là lỗi giết chết sự hợp tác.**
- **Nhiều vấn đề thuộc loại yêu cầu bị bỏ sót là tín hiệu quy trình**, không chỉ là loạt bug cần sửa.
- **Nếu nhiều người cùng hiểu lầm một cách, đó là vấn đề thiết kế chứ không phải vấn đề đào tạo.**

## 8. Tóm tắt

- Vai trò của BA trong kiểm thử là **làm cho yêu cầu kiểm chứng được, rà soát độ phủ, phân loại vấn đề và tổ chức UAT**.
- **Test case sinh từ acceptance criteria** và phải phủ đủ bốn nhóm, trong đó biên và lỗi là hai nhóm hay thiếu nhất.
- **UAT trả lời câu hỏi hệ thống có giúp tôi làm được việc không**, khác hẳn với câu hỏi của system testing.
- **Phân loại kết quả UAT đúng** quyết định điều gì được sửa ngay, điều gì vào backlog, và điều gì trở thành bài học quy trình.
