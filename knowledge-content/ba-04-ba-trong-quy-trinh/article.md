# Vai trò BA trong Scrum & Waterfall

## 1. Cùng một nghề, hai nhịp làm việc

> **Công việc phân tích không thay đổi giữa Waterfall và Scrum. Cái thay đổi là NHỊP: bạn làm bao nhiêu, vào lúc nào, và ghi lại ở đâu.**

Dù ở mô hình nào, bạn vẫn phải hiểu vấn đề nghiệp vụ, xác định stakeholder, khai thác nhu cầu, làm rõ chi tiết trước khi lập trình viên viết mã, và xác nhận thứ giao ra đúng như thoả thuận.

**Khác biệt cốt lõi:**

| | **Waterfall** | **Scrum** |
|---|--------------|-----------|
| **Khi nào phân tích** | Tập trung ở giai đoạn đầu | Liên tục, chia nhỏ theo sprint |
| **Mức chi tiết** | Chi tiết toàn bộ trước khi xây | Vừa đủ cho phần sắp làm |
| **Lưu ở đâu** | Tài liệu SRS/BRD | Backlog + acceptance criteria + cuộc trò chuyện |
| **Xử lý thay đổi** | Quy trình kiểm soát thay đổi | Sắp lại thứ tự backlog |
| **BA làm việc với ai nhiều nhất** | Khách hàng, quản lý dự án | Đội phát triển, Product Owner |

> **Sai lầm thường gặp khi chuyển đổi mô hình: mang nguyên cách làm cũ sang.** BA từ Waterfall sang Scrum thường vẫn cố viết đặc tả đầy đủ cho cả sản phẩm trước sprint 1 — tốn công vô ích vì phần lớn sẽ thay đổi. BA từ Scrum sang Waterfall lại thường ghi quá ít, khiến đội ở xa không đủ thông tin để xây.

---

## 2. BA trong Waterfall — theo từng giai đoạn

**Giai đoạn 1 — Khởi tạo (Initiation).** Tham gia phân tích cơ hội và tính khả thi. Giúp xác định **mục tiêu nghiệp vụ**, phạm vi sơ bộ và các bên liên quan. Đầu ra thường là **tài liệu tầm nhìn và phạm vi**.

**Giai đoạn 2 — Phân tích yêu cầu.** Đây là giai đoạn nặng nhất của BA trong Waterfall:

- Phỏng vấn, workshop, quan sát để khai thác yêu cầu.
- Mô hình hoá quy trình hiện tại (as-is) và tương lai (to-be).
- Viết **BRD** rồi **SRS** với yêu cầu chức năng, phi chức năng và business rule.
- Tổ chức review và lấy phê duyệt, sau đó **baseline** tài liệu.

**Giai đoạn 3 — Thiết kế.** BA hỗ trợ làm rõ khi kiến trúc sư và nhà thiết kế đặt câu hỏi. Rà soát xem thiết kế có phủ hết yêu cầu không.

**Giai đoạn 4 — Phát triển.** Trả lời câu hỏi của lập trình viên, xử lý các yêu cầu thay đổi qua quy trình kiểm soát thay đổi, cập nhật tài liệu và ma trận truy vết.

**Giai đoạn 5 — Kiểm thử.** Rà soát test case xem có phủ hết yêu cầu không, hỗ trợ phân loại bug là lỗi mã hay yêu cầu thiếu.

**Giai đoạn 6 — Triển khai và nghiệm thu.** Tổ chức UAT, chuẩn bị tài liệu hướng dẫn, đào tạo người dùng, hỗ trợ nghiệm thu.

> **Rủi ro lớn nhất của BA trong Waterfall: cố chốt mọi thứ quá sớm.** Nếu yêu cầu còn nhiều bất định, hãy dùng prototype và bàn giao tăng dần để giảm rủi ro, thay vì viết một SRS 200 trang dựa trên phỏng đoán.

---

## 3. BA trong Scrum — theo từng sự kiện

Scrum không định nghĩa vai trò BA. **Thực tế là công việc BA vẫn tồn tại, và ai đó phải làm.** Thường là chính BA với tư cách thành viên đội phát triển, hoặc BA đóng vai trò hỗ trợ Product Owner.

**Backlog refinement (grooming)** — đây là sự kiện quan trọng nhất với BA:

- Chia epic thành story vừa một sprint.
- Làm rõ story mơ hồ bằng cách hỏi Product Owner và người dùng.
- Bổ sung acceptance criteria.
- Chỉ ra công việc ẩn: trạng thái rỗng, trạng thái lỗi, phân quyền, di trú dữ liệu.

**Sprint Planning** — giải thích story, trả lời câu hỏi để đội ước tính chính xác, xác nhận definition of ready.

**Daily Scrum** — nghe xem ai đang bị chặn; nhiều điểm chặn hoá ra là yêu cầu chưa rõ, và BA gỡ được ngay trong ngày.

**Trong sprint** — đây là phần chiếm nhiều thời gian nhất mà ít ai nói tới: trả lời câu hỏi liên tục, làm rõ khi tester phát hiện điểm mơ hồ, chuẩn bị story cho sprint sau.

**Sprint Review** — trình bày hoặc hỗ trợ trình bày kết quả với stakeholder, ghi nhận phản hồi thành mục backlog mới.

**Sprint Retrospective** — tham gia với tư cách thành viên đội; nếu nhiều bug đến từ yêu cầu mơ hồ, đó là vấn đề quy trình cần cải tiến.

> **Nguyên tắc vàng cho BA trong Scrum: luôn giữ khoảng HAI tới BA sprint tiếp theo ở trạng thái sẵn sàng.** Ít hơn thì đội có nguy cơ bị chặn ở đầu sprint; nhiều hơn thì bạn đang lãng phí công sức vào những thứ sẽ thay đổi.

---

## 4. BA và Product Owner — phân chia thế nào

Đây là câu hỏi gây bối rối nhất khi tổ chức áp dụng Scrum.

| Việc | Thường thuộc về |
|------|-----------------|
| Quyết định **thứ tự** backlog | Product Owner |
| Quyết định **giá trị nghiệp vụ** của một mục | Product Owner |
| **Chấp nhận hoặc từ chối** công việc đã hoàn thành | Product Owner |
| **Khai thác chi tiết** yêu cầu từ người dùng | BA |
| **Mô hình hoá quy trình**, vẽ sơ đồ, phân tích dữ liệu | BA |
| **Viết acceptance criteria** chi tiết | BA cùng tester |
| **Trả lời câu hỏi chi tiết** của đội trong sprint | BA |

**Ba mô hình phổ biến trong thực tế:**

**1. PO kiêm luôn BA.** Phù hợp với sản phẩm đơn giản, đội nhỏ. Rủi ro: PO quá tải, không đủ thời gian cho cả chiến lược lẫn chi tiết.

**2. BA hỗ trợ PO.** PO lo giá trị và thứ tự; BA lo chi tiết và mô hình hoá. **Đây là mô hình hiệu quả nhất cho sản phẩm phức tạp.**

**3. BA làm proxy PO.** BA thay mặt PO trong công việc hằng ngày với đội. Rủi ro: nếu BA không có thẩm quyền quyết định, đội vẫn bị chặn.

> **Điều quan trọng không phải chức danh mà là: phải có MỘT người quyết định được thứ tự và giá trị, và người đó phải sẵn sàng khi đội cần.**

---

## 5. Tài liệu: nhiều bao nhiêu là đủ?

Đây là điểm gây tranh cãi nhất khi chuyển từ Waterfall sang Scrum.

**Tuyên ngôn Agile nói *"phần mềm chạy được HƠN tài liệu toàn diện"* — chứ không nói *"thay vì tài liệu"*.**

**Năm câu hỏi quyết định có nên ghi lại một thứ hay không:**

1. **Ai sẽ đọc nó, và họ dùng nó làm gì?**
2. **Kiến thức này có cần sống lâu hơn trí nhớ của đội không?**
3. **Có yêu cầu tuân thủ, kiểm toán hay hợp đồng nào không?**
4. **Đội có phân tán về địa lý hoặc múi giờ không?**
5. **Chi phí ghi lại có nhỏ hơn chi phí khám phá lại không?**

**Những thứ hầu như luôn đáng ghi lại, kể cả trong Scrum:**

- **Tầm nhìn và phạm vi sản phẩm** — không có nó, đội mất phương hướng.
- **Business rule** — chúng sống lâu hơn mọi dự án.
- **Định nghĩa dữ liệu và glossary** — chúng ngăn ngừa lỗi tích hợp.
- **Quyết định kiến trúc kèm lý do** — người bảo trì tương lai sẽ cần.
- **Acceptance test tự động** — tài liệu duy nhất không bao giờ lỗi thời, vì chúng chạy.

> **Rủi ro thật không phải làm ít tài liệu, mà là nhầm lẫn ít tài liệu với ít suy nghĩ.** Đội agile khoẻ mạnh vẫn dành rất nhiều công sức hiểu vấn đề — họ chỉ không đóng gói nó thành 200 trang.

---

## 6. Khi tổ chức chuyển từ Waterfall sang Agile

Rất nhiều BA Việt Nam đang ở giữa quá trình chuyển đổi này. Đây là những điều chỉnh thực tế:

**Việc cần bỏ:**

- Cố viết đặc tả đầy đủ cho cả sản phẩm trước khi bắt đầu.
- Chờ tài liệu được ký duyệt xong mới cho đội bắt đầu.
- Coi thay đổi yêu cầu là thất bại của giai đoạn phân tích.

**Việc cần giữ:**

- Mô hình hoá quy trình khi nó làm rõ được điều mà văn bản không làm rõ nổi.
- Ghi lại business rule, định nghĩa dữ liệu và quyết định kiến trúc.
- Khai thác yêu cầu phi chức năng sớm — chúng chi phối kiến trúc và phát hiện muộn rất tốn kém.

**Việc cần học thêm:**

- Chia epic thành story theo lát cắt dọc, không theo tầng kỹ thuật.
- Viết acceptance criteria dạng Given-When-Then.
- Làm việc theo nhịp sprint: luôn có sẵn story cho hai sprint tới.

> **Mô hình lai (hybrid) rất phổ biến ở Việt Nam:** hợp đồng và phạm vi tổng thể theo Waterfall để khách hàng ký, còn thực thi bên trong theo Scrum. BA trong mô hình này phải làm cả hai: duy trì tài liệu cấp cao cho hợp đồng và backlog chi tiết cho đội.

---

## 7. Điểm cốt lõi

- **Công việc phân tích không đổi giữa hai mô hình; cái đổi là nhịp, mức chi tiết và nơi lưu trữ.**
- Sai lầm khi chuyển đổi: **mang nguyên cách làm cũ sang mô hình mới**.
- Trong Waterfall, **giai đoạn phân tích yêu cầu là nặng nhất**, kết thúc bằng review và baseline tài liệu.
- **Rủi ro lớn nhất của Waterfall là cố chốt mọi thứ quá sớm** khi yêu cầu còn nhiều bất định.
- **Scrum không định nghĩa vai trò BA**, nhưng công việc BA vẫn tồn tại và ai đó phải làm.
- **Backlog refinement là sự kiện quan trọng nhất với BA trong Scrum.**
- Trong grooming, BA chỉ ra **công việc ẩn: trạng thái rỗng, trạng thái lỗi, phân quyền, di trú dữ liệu**.
- **Luôn giữ hai tới ba sprint tiếp theo ở trạng thái sẵn sàng** — ít hơn thì đội bị chặn, nhiều hơn thì lãng phí.
- PO quyết định **thứ tự và giá trị**; BA lo **chi tiết và mô hình hoá**.
- Mô hình **BA hỗ trợ PO hiệu quả nhất cho sản phẩm phức tạp**.
- Phải có **một người quyết định được thứ tự, và người đó phải sẵn sàng khi đội cần**.
- Tuyên ngôn Agile nói *"phần mềm chạy được HƠN tài liệu"*, **không phải "thay vì tài liệu"**.
- **Rủi ro thật là nhầm lẫn ít tài liệu với ít suy nghĩ.**
- Luôn đáng ghi lại: **tầm nhìn, business rule, định nghĩa dữ liệu, quyết định kiến trúc, acceptance test tự động**.
- Khi chuyển sang Agile, **giữ lại việc mô hình hoá và khai thác NFR sớm**, bỏ việc chờ ký duyệt mới cho đội bắt đầu.
- **Mô hình lai rất phổ biến**: hợp đồng theo Waterfall, thực thi theo Scrum.

## 8. Tóm tắt

- BA làm **cùng một loại công việc** ở cả hai mô hình, chỉ khác cách phân bổ theo thời gian.
- Trong Waterfall, giá trị của BA tập trung ở **giai đoạn phân tích và ở việc duy trì tài liệu qua thay đổi**.
- Trong Scrum, giá trị của BA nằm ở **grooming, làm rõ liên tục và giữ tầm nhìn tổng thể** khi đội tập trung vào từng story.
- **Mức tài liệu nên được quyết định bằng năm câu hỏi thực dụng**, không bằng giáo điều của mô hình nào.
