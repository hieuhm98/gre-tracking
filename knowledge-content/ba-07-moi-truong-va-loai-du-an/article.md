# Môi trường phát triển & các loại dự án IT

## 1. Bốn môi trường và vì sao BA cần biết

Phần mềm không chạy ở một chỗ duy nhất. Nó đi qua **một chuỗi môi trường** trước khi tới tay người dùng thật.

| Môi trường | Ai dùng | Dữ liệu | Mục đích |
|-----------|---------|---------|----------|
| **Development (Dev)** | Lập trình viên | Giả, tự tạo | Viết và thử mã ngay khi đang làm |
| **Test / QA** | Tester | Dữ liệu kiểm thử có kiểm soát | Kiểm thử chức năng và hồi quy |
| **Staging / UAT** | Người dùng nghiệp vụ, BA | Bản sao dữ liệu thật (đã che thông tin nhạy cảm) | Nghiệm thu, diễn tập triển khai |
| **Production (Prod)** | Người dùng thật | Dữ liệu thật | Vận hành thật |

> **Vì sao BA phải quan tâm:** khi người dùng báo *"tính năng này không chạy"*, câu hỏi đầu tiên là **họ đang ở môi trường nào**. Rất nhiều báo lỗi hoá ra là do người dùng vào nhầm môi trường, hoặc do dữ liệu ở môi trường đó khác dữ liệu thật.

### Ba điều BA hay bỏ sót về môi trường

**1. Dữ liệu ở Staging phải giống thật tới mức nào.** Kiểm thử với 10 bản ghi không phát hiện được vấn đề hiệu năng khi có 10 triệu bản ghi. **Đây là yêu cầu cần đặc tả rõ.**

**2. Che dữ liệu nhạy cảm.** Sao chép dữ liệu thật xuống Staging mà không che số điện thoại, email, số thẻ là **vi phạm quyền riêng tư**. Yêu cầu này thường không ai nghĩ tới cho tới khi có sự cố.

**3. Tích hợp với hệ thống bên ngoài.** Ở môi trường Test, hệ thống thanh toán là bản giả lập hay bản thật ở chế độ sandbox? **Sự khác biệt này quyết định bạn kiểm thử được tới đâu.**

---

## 2. Vòng đời một thay đổi qua các môi trường

Hiểu chuỗi này giúp BA trả lời được câu hỏi *"bao giờ tôi xem được?"* một cách chính xác.

1. **Lập trình viên viết mã** trên máy mình và ở môi trường Dev.
2. **Tạo Pull Request**, đồng nghiệp review mã.
3. **Merge vào nhánh chính**, hệ thống tự động chạy kiểm thử.
4. **Triển khai lên Test**, tester kiểm thử chức năng và hồi quy.
5. **Triển khai lên Staging**, BA và người dùng nghiệp vụ nghiệm thu (UAT).
6. **Triển khai lên Production**, thường trong cửa sổ thời gian đã lên kế hoạch.

> **Điểm quan trọng với BA: một tính năng đã hoàn thành trên Test KHÔNG có nghĩa là người dùng đã dùng được.** Khi báo cáo tiến độ, hãy nói rõ tính năng đang ở môi trường nào — đó là thông tin chính xác hơn nhiều so với phần trăm hoàn thành.

**Kế hoạch quay lui (rollback).** Nếu triển khai lên Production thất bại giữa chừng, làm sao quay lại trạng thái cũ mà không mất giao dịch? **Đây là câu hỏi BA nên hỏi trước mỗi lần phát hành lớn.**

---

## 3. Các loại dự án IT phổ biến

BA làm việc trong nhiều loại dự án khác nhau, và **mỗi loại đòi hỏi cách tiếp cận riêng**.

**1. Xây mới (greenfield).** Không có hệ thống cũ, tự do thiết kế. Thách thức: mọi thứ đều mơ hồ, không có gì để tham chiếu.

**2. Nâng cấp (enhancement).** Thêm chức năng vào hệ thống đang chạy. Thách thức: phải hiểu hệ thống hiện tại và tránh phá vỡ thứ đang hoạt động.

**3. Thay thế hệ thống cũ (replacement).** Thách thức lớn nhất: **yêu cầu hiện có thường không được ghi lại ở đâu cả**, và việc di trú dữ liệu bị đánh giá thấp nghiêm trọng.

**4. Tích hợp.** Kết nối các hệ thống đã có. Thách thức: hợp đồng dữ liệu, xử lý lỗi khi hệ thống đối tác không phản hồi.

**5. Triển khai gói giải pháp (COTS).** Mua phần mềm thương mại và cấu hình. Thách thức: **phân tích khoảng cách** giữa gói và nhu cầu, và thuyết phục tổ chức thay đổi quy trình thay vì tuỳ biến mã.

**6. Tự động hoá quy trình.** Thách thức: **tự động hoá một quy trình tồi cho bạn một quy trình tồi chạy nhanh hơn**.

**7. Dự án dữ liệu và báo cáo.** Thách thức: thống nhất định nghĩa chỉ số, và chất lượng dữ liệu nguồn.

> **Câu hỏi đầu tiên khi nhận một dự án mới: đây là loại nào?** Câu trả lời quyết định bạn dành công sức vào đâu — khai thác từ đầu, hay khai thác từ hệ thống cũ, hay phân tích khoảng cách với một gói phần mềm.

---

## 4. Product company và Outsourcing

Đây là hai môi trường làm việc rất khác nhau, và **lựa chọn giữa chúng ảnh hưởng lớn tới sự nghiệp BA**.

| | **Product company** | **Outsourcing** |
|---|--------------------|-----------------|
| **Bạn làm cho ai** | Một sản phẩm của chính công ty | Nhiều khách hàng khác nhau |
| **Thời gian gắn bó** | Dài, nhiều năm với cùng sản phẩm | Ngắn, theo từng dự án |
| **Domain knowledge** | Rất sâu về một lĩnh vực | Rộng nhưng nông hơn |
| **Quan hệ với người dùng** | Trực tiếp, liên tục | Qua trung gian, hạn chế |
| **Tài liệu** | Vừa đủ, nhiều trao đổi trực tiếp | Nhiều hơn, vì là cơ sở hợp đồng |
| **Quyền quyết định** | BA ảnh hưởng tới hướng sản phẩm | BA thực thi theo yêu cầu khách hàng |
| **Áp lực chính** | Sản phẩm có được thị trường đón nhận không | Giao đúng phạm vi, đúng hạn, đúng hợp đồng |

**Product company phù hợp nếu bạn muốn:** hiểu sâu một lĩnh vực, thấy sản phẩm tiến hoá qua nhiều năm, tham gia vào quyết định sản phẩm.

**Outsourcing phù hợp nếu bạn muốn:** tiếp xúc nhiều ngành, học nhanh nhiều loại dự án, rèn kỹ năng làm việc với khách hàng và tài liệu chặt chẽ.

> **Lời khuyên thực tế cho người mới: outsourcing thường là nơi học nhanh hơn** vì bạn đi qua nhiều dự án trong thời gian ngắn. Sau vài năm, nhiều người chuyển sang product company để đi sâu.

---

## 5. Các vị trí trong một đội phát triển

BA làm việc với rất nhiều vai trò. Hiểu họ làm gì giúp bạn **hỏi đúng người**.

**Nhóm xây dựng sản phẩm:**

| Vị trí | Họ làm gì | BA hỏi họ về |
|--------|-----------|--------------|
| **Frontend Developer (FE)** | Xây giao diện người dùng | Khả thi của tương tác, trạng thái hiển thị, hành vi trên các kích thước màn hình |
| **Backend Developer (BE)** | Xây logic nghiệp vụ, API, xử lý dữ liệu | Quy tắc nghiệp vụ hiện thực ra sao, hợp đồng API, ảnh hưởng tới dữ liệu |
| **Fullstack Developer** | Cả hai | Bức tranh đầu-cuối của một tính năng |
| **Mobile Developer** | Ứng dụng iOS/Android | Ràng buộc nền tảng, quy trình duyệt của cửa hàng ứng dụng |

**Nhóm chất lượng và vận hành:**

| Vị trí | Họ làm gì | BA hỏi họ về |
|--------|-----------|--------------|
| **QC / Tester** | Kiểm thử chức năng, tìm lỗi | Tính kiểm chứng được của yêu cầu, trường hợp ngoại lệ |
| **QA Engineer** | Xây quy trình và tự động hoá kiểm thử | Chiến lược kiểm thử, phạm vi hồi quy |
| **DevOps Engineer** | Hạ tầng, triển khai, giám sát | Môi trường, quy trình phát hành, khả năng mở rộng |
| **Tech Lead** | Định hướng kỹ thuật, review mã, ra quyết định kiến trúc | Tác động kiến trúc, nợ kỹ thuật, tính khả thi |

**Nhóm thiết kế và sản phẩm:**

| Vị trí | Họ làm gì | BA hỏi họ về |
|--------|-----------|--------------|
| **UI/UX Designer** | Trải nghiệm và giao diện | Luồng người dùng, wireframe, khả năng sử dụng |
| **Product Owner** | Giá trị và thứ tự ưu tiên | Mục tiêu nghiệp vụ, ưu tiên, chấp nhận công việc |
| **Project Manager** | Kế hoạch, nguồn lực, rủi ro | Lịch trình, phụ thuộc, tình trạng dự án |
| **Solution Architect** | Kiến trúc tổng thể, tích hợp | Ràng buộc hệ thống, chiến lược tích hợp |

> **Sai lầm phổ biến của BA mới: hỏi mọi câu hỏi cho một người duy nhất.** Hỏi Tech Lead về khả năng sử dụng hoặc hỏi Designer về tác động kiến trúc sẽ nhận được câu trả lời không đáng tin.

---

## 6. Tech Lead, DevOps và những vai trò hay bị hiểu nhầm

**Tech Lead không phải quản lý.** Họ là người có tiếng nói cuối cùng về **quyết định kỹ thuật**, review mã và định hướng kiến trúc — nhưng thường không quản lý con người.

- **BA nên hỏi Tech Lead khi:** cần đánh giá tác động kiến trúc của một thay đổi, cần biết một yêu cầu có khả thi không, cần hiểu vì sao đội nói *"cái này phức tạp"*.

**DevOps không phải người cài phần mềm.** Họ xây dựng và vận hành **hạ tầng, quy trình triển khai tự động và hệ thống giám sát**.

- **BA nên hỏi DevOps khi:** cần biết quy trình phát hành mất bao lâu, hệ thống chịu được bao nhiêu tải, có nhật ký nào để điều tra sự cố, dữ liệu được sao lưu thế nào.
- **Yêu cầu phi chức năng thường phải kiểm chứng với DevOps** — họ biết hạ tầng hiện tại chịu được gì.

**QA khác QC.** QC (quality control) tập trung **tìm lỗi trong sản phẩm**; QA (quality assurance) tập trung **cải thiện quy trình để lỗi ít xuất hiện hơn**. Nhiều công ty dùng lẫn lộn hai từ này.

> **Một quan sát hữu ích: DevOps và Tech Lead là hai vai trò mà BA hay bỏ qua ở giai đoạn phân tích, rồi phải quay lại hỏi ở giai đoạn muộn** — đúng lúc việc thay đổi đã tốn kém.

---

## 7. Điểm cốt lõi

- Bốn môi trường: **Dev, Test, Staging/UAT, Production** — mỗi cái có người dùng, dữ liệu và mục đích riêng.
- Khi có báo lỗi, **câu hỏi đầu tiên là người dùng đang ở môi trường nào**.
- Ba điều BA hay bỏ sót: **độ giống thật của dữ liệu Staging, che dữ liệu nhạy cảm, và bản giả lập hay sandbox cho tích hợp**.
- **Sao chép dữ liệu thật xuống Staging mà không che thông tin nhạy cảm là vi phạm quyền riêng tư.**
- **Tính năng hoàn thành trên Test KHÔNG có nghĩa là người dùng đã dùng được** — hãy báo cáo theo môi trường.
- **Hỏi về kế hoạch quay lui trước mỗi lần phát hành lớn.**
- Bảy loại dự án IT, và **câu hỏi đầu tiên khi nhận dự án mới là đây là loại nào**.
- Trong dự án thay thế, **yêu cầu hiện có thường không được ghi lại ở đâu cả** và di trú dữ liệu bị đánh giá thấp.
- Trong dự án COTS, thách thức là **phân tích khoảng cách và thuyết phục đổi quy trình thay vì tuỳ biến mã**.
- **Tự động hoá một quy trình tồi cho bạn một quy trình tồi chạy nhanh hơn.**
- **Product company cho domain knowledge sâu; outsourcing cho trải nghiệm rộng** và tài liệu chặt chẽ hơn.
- **Outsourcing thường là nơi học nhanh hơn cho người mới** vì đi qua nhiều dự án trong thời gian ngắn.
- **Sai lầm phổ biến: hỏi mọi câu hỏi cho một người duy nhất** thay vì hỏi đúng vai trò.
- **Tech Lead không phải quản lý** — họ có tiếng nói cuối cùng về quyết định kỹ thuật.
- **DevOps không phải người cài phần mềm** — họ xây hạ tầng, triển khai tự động và giám sát.
- **Yêu cầu phi chức năng thường phải kiểm chứng với DevOps**, vì họ biết hạ tầng chịu được gì.
- **QC tìm lỗi trong sản phẩm; QA cải thiện quy trình** để lỗi ít xuất hiện hơn.
- **DevOps và Tech Lead là hai vai trò BA hay bỏ qua ở giai đoạn phân tích** rồi phải quay lại hỏi khi đã muộn.

## 8. Tóm tắt

- Hiểu **chuỗi môi trường và vòng đời một thay đổi** giúp BA báo cáo tiến độ chính xác và trả lời đúng câu hỏi *bao giờ tôi xem được*.
- **Mỗi loại dự án IT đòi hỏi cách tiếp cận phân tích khác nhau**, nên hãy xác định loại dự án ngay từ đầu.
- **Product và outsourcing là hai con đường sự nghiệp khác nhau**, mỗi bên rèn một bộ kỹ năng riêng.
- Biết **ai làm gì trong đội** giúp bạn hỏi đúng người, và tránh việc bỏ sót Tech Lead cùng DevOps cho tới giai đoạn muộn.
