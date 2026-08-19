# Tài liệu BA: BRD, SRS, Meeting Minutes

## 1. Các loại tài liệu BA thường tạo

Danh sách tài liệu có thể rất dài, nhưng chúng phục vụ **ba mục đích khác nhau**: định hướng, đặc tả, và ghi nhận.

| Tài liệu | Trả lời câu hỏi | Người đọc chính |
|----------|-----------------|-----------------|
| **Vision & Scope** | Vì sao làm dự án này, phạm vi tới đâu | Lãnh đạo, toàn đội |
| **BRD (Business Requirements Document)** | Nghiệp vụ cần gì và vì sao | Khách hàng, lãnh đạo |
| **SRS (Software Requirements Specification)** | Hệ thống phải làm gì, chính xác tới mức nào | Lập trình viên, tester |
| **User Story + Acceptance Criteria** | Người dùng cần làm được gì trong iteration này | Đội phát triển |
| **Use Case Specification** | Luồng tương tác chi tiết cho tình huống phức tạp | Lập trình viên, tester |
| **Business Rules Catalog** | Quy tắc nào của tổ chức chi phối hệ thống | Nghiệp vụ, đội phát triển |
| **Data Dictionary** | Mỗi trường dữ liệu nghĩa là gì, định dạng ra sao | Lập trình viên, tester, đội tích hợp |
| **Meeting Minutes** | Đã bàn gì, quyết định gì, ai làm gì tiếp theo | Người tham dự và người vắng mặt |
| **Traceability Matrix** | Yêu cầu nào liên kết với thiết kế, mã, test nào | Đội, kiểm toán |

> **Điểm quan trọng nhất: KHÔNG dự án nào cần tất cả các tài liệu này.** Chọn theo bối cảnh, không theo danh sách.

---

## 2. BRD và SRS khác nhau thế nào

Đây là hai tài liệu hay bị nhầm lẫn nhất, và **các tổ chức dùng hai thuật ngữ này rất khác nhau**.

| | **BRD** | **SRS** |
|---|--------|---------|
| **Góc nhìn** | Nghiệp vụ | Hệ thống |
| **Trả lời** | *"Chúng ta cần đạt được điều gì và vì sao?"* | *"Hệ thống phải làm gì để đạt điều đó?"* |
| **Ngôn ngữ** | Ngôn ngữ nghiệp vụ, không thuật ngữ kỹ thuật | Chính xác, có cấu trúc, kiểm chứng được |
| **Ví dụ nội dung** | Mục tiêu kinh doanh, quy trình hiện tại và mong muốn, phạm vi, ràng buộc, tiêu chí thành công | Yêu cầu chức năng, yêu cầu phi chức năng, giao diện ngoài, business rule, mô hình phân tích |
| **Ai ký duyệt** | Lãnh đạo nghiệp vụ | Đại diện nghiệp vụ và đội kỹ thuật |

> **Vì các tổ chức dùng thuật ngữ khác nhau, khi nhận việc ở nơi mới hãy hỏi thẳng: *tài liệu này ở đây gồm những gì và ai là người đọc chính?*** Đừng giả định dựa trên tên gọi.

**Trong dự án agile**, hai tài liệu này thường thu gọn lại: **vision & scope** giữ nguyên vai trò định hướng, còn nội dung SRS phân rã thành **backlog + acceptance criteria + business rules catalog + data dictionary**.

---

## 3. Chọn tài liệu theo bối cảnh

**Năm câu hỏi quyết định có nên viết một tài liệu hay không:**

1. **Ai sẽ đọc nó, và họ dùng nó làm gì?**
2. **Kiến thức này có cần sống lâu hơn trí nhớ của đội không?**
3. **Có yêu cầu tuân thủ, kiểm toán, chứng nhận hay hợp đồng nào không?**
4. **Đội có phân tán về địa lý hoặc múi giờ không?**
5. **Chi phí ghi lại có nhỏ hơn chi phí khám phá lại không?**

**Ba tình huống điển hình:**

| Bối cảnh | Bộ tài liệu hợp lý |
|----------|-------------------|
| **Sản phẩm nội bộ, đội nhỏ ngồi cùng chỗ** | Vision & scope, backlog + AC, business rules, data dictionary |
| **Dự án outsourcing có hợp đồng** | Đầy đủ BRD, SRS, ma trận truy vết, biên bản họp chính thức |
| **Hệ thống được quản lý chặt (y tế, tài chính)** | Như trên, cộng thêm truy vết đầy đủ và bằng chứng cho chứng nhận |

> **Nguyên tắc bao trùm: chi phí GHI LẠI tri thức là nhỏ so với chi phí THU THẬP nó hoặc tái tạo nó trong tương lai.** Nhưng chi phí **duy trì** một tài liệu không ai đọc thì lại rất lớn — cả về thời gian lẫn về niềm tin, vì tài liệu lỗi thời gây hại hơn không có tài liệu.

---

## 4. Viết biên bản họp hữu ích

**Biên bản họp là tài liệu bị làm ẩu nhiều nhất và có tỷ lệ hoàn vốn cao nhất nếu làm đúng.**

**Cấu trúc bốn phần thay vì ghi liền mạch:**

**1. Quyết định đã chốt.** *"Thống nhất ngưỡng phê duyệt là 50 triệu, áp dụng từ bản phát hành tháng Sáu."*

**2. Việc cần làm.** Mỗi việc phải có **người chịu trách nhiệm cụ thể** và **thời hạn**. *"Anh Minh xác nhận với phòng Pháp chế về thời hạn lưu trữ, trước thứ Sáu."*

**3. Câu hỏi còn mở.** Những gì chưa giải quyết được và ai sẽ tìm câu trả lời.

**4. Giả định cần kiểm chứng.** *"Giả định rằng mọi khách hàng đều có mã số thuế — cần kiểm tra dữ liệu thật."*

> **Tách riêng bốn phần này biến biên bản từ một bản ghi thụ động thành công cụ làm việc.** Người đọc tìm được ngay điều họ cần, và những gì chưa xong không bị chìm trong đoạn văn dài.

**Ba quy tắc thực tế:**

- **Gửi trong vòng 24 giờ**, khi trí nhớ mọi người còn tươi và còn sửa được.
- **Ghi quyết định chứ không ghi diễn biến tranh luận** — trừ khi lý do đằng sau quyết định quan trọng cho tương lai.
- **Gửi cho cả người vắng mặt**, vì họ là nhóm cần biên bản nhất.

---

## 5. Quản lý phiên bản và nguồn sự thật duy nhất

**Ba nguyên tắc không thể thương lượng:**

**1. Một nguồn sự thật duy nhất.** Nếu cùng một yêu cầu tồn tại ở ba nơi, chúng sẽ mâu thuẫn nhau trong vòng một tháng.

**2. Định danh phiên bản rõ ràng.** Mọi người phải biết mình đang nói về bản nào.

**3. Lịch sử sửa đổi ghi rõ cái gì thay đổi, ai thay đổi, khi nào, và VÌ SAO.**

> **Trường *"vì sao"* là trường quan trọng nhất và bị bỏ trống nhiều nhất.**
>
> Sáu tháng sau, ai đó nhìn vào một yêu cầu kỳ lạ và tự hỏi *"vì sao lại thế này?"*. Nếu lịch sử chỉ ghi *"cập nhật mục 3.4"*, bạn không học được gì. Nếu nó ghi *"đổi từ 30 sang 60 ngày theo yêu cầu Pháp chế do quy định X"*, bạn biết ngay yêu cầu này **có thương lượng được hay không**.

**Dấu hiệu của một quy trình đã hỏng:**

- Tên tệp kiểu **`SRS_final_v2_REALLY_final_MinhEdit.docx`**.
- Yêu cầu tồn tại đồng thời trong tài liệu Word, bảng tính và công cụ quản lý — và không ai biết bản nào đúng.
- Không ai chắc phiên bản nào là mới nhất.

**Tránh dư thừa.** Lặp lại một yêu cầu ở nhiều nơi làm tài liệu **dễ đọc hơn nhưng khó bảo trì hơn nhiều** — mọi bản sao phải được sửa cùng lúc. Hãy dùng **tham chiếu chéo** thay vì chép nội dung.

---

## 6. Viết cho người đọc, không viết cho đầy đủ

**Mỗi tài liệu phục vụ một nhóm người đọc, và nhóm đó quyết định cách viết.**

| Người đọc | Họ cần | Cách viết |
|-----------|--------|-----------|
| **Lãnh đạo** | Giá trị, chi phí, rủi ro | Ngắn, dẫn bằng kết luận, có số liệu, một trang tóm tắt ở đầu |
| **Người dùng nghiệp vụ** | Công việc hằng ngày của họ | Ngôn ngữ nghiệp vụ, ví dụ cụ thể, sơ đồ trực quan |
| **Lập trình viên** | Chi tiết, ngoại lệ, ràng buộc | Chính xác, có cấu trúc, kèm ví dụ dữ liệu và payload mẫu |
| **Tester** | Tiêu chí kiểm chứng | Acceptance criteria rõ ràng, đủ trường hợp lỗi |

**Bốn nguyên tắc viết chung:**

- **Thể chủ động, nêu rõ ai làm gì.**
- **Tránh từ mơ hồ** — nhanh, dễ dùng, phù hợp, ổn định.
- **Một câu, một yêu cầu** — các từ *và, trừ khi, ngoại trừ* thường báo hiệu bạn đang gộp hai yêu cầu.
- **Đưa ví dụ cụ thể** — một payload mẫu loại bỏ nhập nhằng nhanh hơn mọi đoạn mô tả.

> **Đừng điền cho đầy mẫu.** Nếu một mục không áp dụng, hãy ghi thông điệp tường minh như *"Không xác định được rủi ro pháp lý nào"* — đừng để trống và cũng đừng xoá hẳn, vì cả hai đều khiến người đọc băn khoăn.

---

## 7. Điểm cốt lõi

- Tài liệu BA phục vụ **ba mục đích: định hướng, đặc tả, ghi nhận** — chọn theo bối cảnh chứ không theo danh sách.
- **Không dự án nào cần tất cả các loại tài liệu.**
- **BRD trả lời chúng ta cần đạt gì và vì sao; SRS trả lời hệ thống phải làm gì.**
- Các tổ chức dùng thuật ngữ rất khác nhau — **hãy hỏi thẳng tài liệu này gồm gì và ai đọc**, đừng giả định theo tên.
- Trong agile, nội dung SRS phân rã thành **backlog, acceptance criteria, business rules catalog và data dictionary**.
- Năm câu hỏi quyết định có viết hay không: **ai đọc, có cần sống lâu hơn trí nhớ đội, có yêu cầu tuân thủ, đội có phân tán, chi phí ghi so với chi phí khám phá lại**.
- **Chi phí ghi lại nhỏ hơn chi phí tái tạo, nhưng chi phí duy trì tài liệu không ai đọc thì rất lớn.**
- **Tài liệu lỗi thời gây hại hơn không có tài liệu**, vì nó tạo tự tin sai lầm.
- Biên bản họp nên tách bốn phần: **quyết định, việc cần làm kèm người và hạn, câu hỏi mở, giả định cần kiểm chứng**.
- **Gửi biên bản trong 24 giờ** và gửi cả cho người vắng mặt — họ là nhóm cần nó nhất.
- **Ghi quyết định chứ không ghi diễn biến tranh luận**, trừ khi lý do quan trọng cho tương lai.
- Ba nguyên tắc không thương lượng: **một nguồn sự thật, định danh phiên bản, lịch sử sửa đổi có lý do**.
- **Trường "vì sao" là trường quan trọng nhất và bị bỏ trống nhiều nhất.**
- **`SRS_final_v2_REALLY_final.docx` là dấu hiệu của một quy trình đã hỏng.**
- **Lặp lại yêu cầu ở nhiều nơi làm tài liệu dễ đọc hơn nhưng khó bảo trì hơn nhiều** — hãy tham chiếu chéo.
- **Mỗi nhóm người đọc cần một cách viết khác nhau**; lãnh đạo cần kết luận trước, lập trình viên cần chi tiết.
- **Đừng điền cho đầy mẫu** — mục không áp dụng nên ghi thông điệp tường minh thay vì để trống.

## 8. Tóm tắt

- Bộ tài liệu đúng là bộ **nhỏ nhất mà vẫn trả lời được câu hỏi của những người thực sự cần**.
- **BRD và SRS phục vụ hai góc nhìn khác nhau**, và tên gọi thay đổi theo tổ chức nên phải hỏi rõ.
- **Biên bản họp có cấu trúc bốn phần** biến một bản ghi thụ động thành công cụ làm việc.
- **Một nguồn sự thật duy nhất, phiên bản rõ ràng và lý do thay đổi** là ba thứ giữ cho tài liệu còn đáng tin theo thời gian.
