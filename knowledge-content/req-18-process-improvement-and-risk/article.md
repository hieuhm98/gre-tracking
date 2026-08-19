# Cải tiến quy trình yêu cầu & quản lý rủi ro

## 1. Vì sao cải tiến quy trình yêu cầu

> **Nếu bạn tiếp tục làm những gì bạn vẫn luôn làm, bạn sẽ tiếp tục nhận được những gì bạn vẫn luôn nhận.**

Đọc xong một khoá học về kỹ nghệ yêu cầu là chưa đủ. **Kiến thức không tự chuyển thành thực hành.** Việc chuyển từ hiểu biết sang hành động đòi hỏi một nỗ lực có chủ đích — đó chính là cải tiến quy trình.

### Lập luận kinh tế

**Vấn đề yêu cầu là nguồn gốc phổ biến nhất của lỗi phần mềm tốn kém.** Điều này đã được lặp lại trong nghiên cứu suốt nhiều thập kỷ:

- **Lỗi yêu cầu chiếm một tỷ lệ lớn** trong tổng số lỗi được tìm thấy trong một hệ thống.
- **Chi phí sửa chúng tăng theo cấp số nhân** theo giai đoạn phát hiện.
- **Làm lại (rework) chiếm một phần rất lớn** trong tổng công sức dự án — và **phần lớn việc làm lại đó bắt nguồn từ yêu cầu sai hoặc thiếu**.

> **Hệ quả trực tiếp: cải tiến quy trình yêu cầu có tỷ suất hoàn vốn cao hơn hầu hết các hoạt động cải tiến khác**, đơn giản vì bạn đang tấn công vào nguồn gốc chứ không phải triệu chứng.

### Cải tiến quy trình KHÔNG phải là gì

**Ba hiểu lầm phổ biến:**

**1. *"Cải tiến quy trình nghĩa là thêm nhiều tài liệu và nghi thức."***

> **Sai.** Cải tiến quy trình có thể — và thường nên — nghĩa là **loại bỏ** những thứ không tạo giá trị. Nếu đội của bạn viết một tài liệu mà không ai đọc, **bỏ nó đi cũng là cải tiến quy trình**.

**2. *"Cải tiến quy trình là để đạt chứng chỉ."*** Chứng chỉ có thể là một kết quả phụ, nhưng **mục tiêu là kết quả nghiệp vụ tốt hơn**, không phải một tờ giấy trên tường.

**3. *"Cải tiến quy trình là việc của phòng chất lượng."*** Cải tiến do một nhóm bên ngoài áp đặt xuống đội **gần như luôn thất bại**. Người thực hiện công việc phải là người sở hữu việc cải tiến nó.

### Nguyên tắc nền tảng

> **Cải tiến quy trình phải bắt đầu từ MỘT VẤN ĐỀ ĐANG GÂY ĐAU, không từ một mô hình lý tưởng.**
>
> Nếu bạn bắt đầu bằng *"chúng ta nên áp dụng thực hành X vì sách nói vậy"*, bạn sẽ gặp kháng cự. Nếu bạn bắt đầu bằng *"chúng ta vừa mất sáu tuần làm lại vì hiểu sai yêu cầu — làm sao để điều đó không lặp lại?"*, **mọi người sẽ tham gia**.

---

## 2. Chu trình cải tiến & mô hình trưởng thành

### Chu trình bốn bước

Cải tiến quy trình là một **chu trình lặp lại**, không phải một dự án có điểm kết thúc.

**1. Đánh giá (assess).** Quy trình hiện tại của chúng ta là gì, và vấn đề nằm ở đâu?

**2. Lập kế hoạch (plan).** Chúng ta sẽ thay đổi gì, ai làm, khi nào, và làm sao biết nó có hiệu quả?

**3. Thực hiện (implement).** Triển khai thay đổi, thường bắt đầu bằng một dự án thí điểm.

**4. Đánh giá kết quả (evaluate).** Nó có hiệu quả không? Rồi quay lại bước 1.

> **Sai lầm phổ biến nhất: bỏ qua bước 4.** Đội triển khai một thực hành mới, tuyên bố thành công, rồi chuyển sang thực hành tiếp theo mà **không bao giờ kiểm tra xem cái đầu tiên có thực sự giúp ích không**. Sau ba năm, họ có mười thực hành mới và không biết cái nào có giá trị.

### Mô hình trưởng thành

**Nhiều tổ chức dùng một mô hình trưởng thành để định vị mình.** Một cách phân tầng đơn giản cho quy trình yêu cầu:

| Mức | Đặc điểm |
|-----|---------|
| **1 — Hỗn loạn** | Không có quy trình nhất quán; mỗi dự án làm theo cách riêng; thành công phụ thuộc vào cá nhân xuất sắc |
| **2 — Có kỷ luật cơ bản** | Có quy trình cho từng dự án; yêu cầu được ghi lại và baseline; có quản lý thay đổi |
| **3 — Chuẩn hoá toàn tổ chức** | Có quy trình chuẩn, template, đào tạo; các dự án điều chỉnh từ chuẩn chung |
| **4 — Được đo lường** | Thu thập số liệu định lượng về chất lượng yêu cầu và tác động của chúng |
| **5 — Tối ưu hoá liên tục** | Dùng dữ liệu để cải tiến quy trình một cách có hệ thống |

> **Cảnh báo quan trọng về mô hình trưởng thành: chúng là bản đồ, không phải mục tiêu.**
>
> **Mục tiêu không phải là "đạt mức 3".** Mục tiêu là **giao phần mềm tốt hơn, nhanh hơn, với ít rework hơn**. Nếu một tổ chức nhỏ ở "mức 1" đang giao hàng thành công và khách hàng hài lòng, **việc ép họ lên mức 3 có thể làm hại nhiều hơn giúp**.
>
> **Hãy dùng mô hình trưởng thành để định hướng, không để chấm điểm.**

### Nguyên tắc thực dụng

- **Cải tiến từng bước nhỏ hơn là cải tổ lớn.** Thay đổi một hoặc hai thực hành cùng lúc.
- **Ưu tiên theo mức đau.** Sửa thứ đang gây tổn thất lớn nhất trước.
- **Thời gian là có hạn.** Cải tiến quy trình cạnh tranh với công việc giao hàng. **Nếu không dành thời gian rõ ràng cho nó, nó sẽ không xảy ra.**

---

## 3. Đánh giá thực trạng: dấu hiệu của quy trình yêu cầu yếu

### Mười dấu hiệu cảnh báo

Bạn có thể chẩn đoán khá chính xác sức khoẻ quy trình yêu cầu qua các triệu chứng:

**1. Lập trình viên thường xuyên hỏi *"cái này nghĩa là gì?"*** hoặc tệ hơn, **tự đoán** mà không hỏi.

**2. Tester phát hiện chức năng hoàn toàn bị thiếu** ở giai đoạn kiểm thử hệ thống.

**3. Khách hàng nói *"đây không phải cái tôi muốn"*** khi nhìn thấy sản phẩm hoàn thiện.

**4. Yêu cầu tiếp tục thay đổi với tốc độ cao ở giai đoạn muộn của dự án.**

**5. Ước tính liên tục sai lệch nghiêm trọng** — thường vì chúng dựa trên hiểu biết không đầy đủ.

**6. Không ai biết chắc phiên bản yêu cầu nào là mới nhất.**

**7. Có sự bất đồng thường xuyên về việc *"cái này có nằm trong phạm vi không"*.**

**8. Đội dành nhiều thời gian làm lại (rework) hơn làm mới.**

**9. Các bên liên quan quan trọng chỉ xuất hiện ở cuối dự án** với các yêu cầu mới.

**10. Cùng một loại vấn đề lặp lại ở mọi dự án.**

> **Dấu hiệu số 10 là quan trọng nhất về mặt cải tiến quy trình.** Một vấn đề xảy ra một lần là **sự cố**. Cùng vấn đề đó xảy ra ở năm dự án liên tiếp là **lỗi quy trình** — và đó là thứ đáng đầu tư để sửa.

### Cách thu thập dữ liệu

**1. Retrospective sau dự án.** Hỏi trực tiếp: *điều gì đã hoạt động tốt, điều gì gây khó khăn, chúng ta sẽ làm gì khác đi?*

> **Quan trọng: phải TÁCH KHỎI việc đánh giá cá nhân.** Nếu retrospective được dùng để tìm người chịu trách nhiệm, mọi người sẽ không nói thật và bạn sẽ không học được gì.

**2. Phân tích dữ liệu lỗi.** Với mỗi lỗi được tìm thấy sau khi giao hàng, hãy hỏi: **nguồn gốc của nó là gì?** Nếu một tỷ lệ lớn truy về yêu cầu thiếu hoặc mơ hồ, bạn biết chính xác cần cải thiện điều gì.

**3. Phân tích lý do thay đổi yêu cầu.** Phân loại chúng: yêu cầu bị bỏ sót, yêu cầu bị hiểu sai, nghiệp vụ thực sự thay đổi, hay ý tưởng mới. **Hai loại đầu chỉ ra vấn đề quy trình.**

**4. Phỏng vấn các vai trò khác nhau.** Lập trình viên, tester, khách hàng và BA sẽ mô tả **những vấn đề rất khác nhau** — và bức tranh đầy đủ chỉ hiện ra khi bạn nghe cả bốn.

**5. Đánh giá chính thức (assessment).** Với tổ chức lớn, một cuộc đánh giá có cấu trúc dựa trên checklist hoặc mô hình trưởng thành có thể hữu ích — **nhưng chỉ khi nó dẫn tới hành động, không phải chỉ tạo ra một báo cáo**.

---

## 4. Nguyên nhân gốc rễ & phân tích

> **Nguyên tắc: sửa triệu chứng cho bạn sự nhẹ nhõm tạm thời; sửa nguyên nhân gốc rễ cho bạn cải tiến bền vững.**

### Kỹ thuật "năm lần vì sao"

**Hỏi *"vì sao"* liên tục cho tới khi chạm tới nguyên nhân bạn thực sự kiểm soát được.**

> **Ví dụ:**
>
> **Vấn đề:** Chúng ta phải làm lại module thanh toán, mất bốn tuần.
>
> *Vì sao?* → Vì nó không xử lý được trường hợp thanh toán một phần.
>
> *Vì sao?* → Vì không có yêu cầu nào nói về thanh toán một phần.
>
> *Vì sao?* → Vì không ai hỏi phòng Kế toán về các trường hợp thanh toán ngoại lệ.
>
> *Vì sao?* → Vì phòng Kế toán không được xác định là một user class trong giai đoạn đầu.
>
> *Vì sao?* → Vì chúng ta không có bước xác định stakeholder có hệ thống ở đầu dự án.
>
> **→ NGUYÊN NHÂN GỐC RỄ: thiếu quy trình xác định stakeholder.**
>
> **Cải tiến đúng đắn không phải "kiểm tra kỹ hơn module thanh toán" mà là "thêm bước phân tích stakeholder có cấu trúc vào đầu mỗi dự án".** Sửa cái đó ngăn ngừa **cả một lớp vấn đề**, không chỉ một trường hợp.

### Các nguyên nhân gốc rễ thường gặp

| Triệu chứng | Nguyên nhân gốc rễ thường gặp |
|------------|------------------------------|
| Yêu cầu bị bỏ sót | Không xác định đủ user class; không quan sát người dùng thực; bỏ qua điều kiện ngoại lệ |
| Yêu cầu mơ hồ | Không review; không có tester tham gia sớm; thiếu glossary chung |
| Thay đổi liên tục ở giai đoạn muộn | Stakeholder đúng không tham gia sớm; tầm nhìn sản phẩm chưa rõ |
| Bất đồng về phạm vi | Không có tài liệu vision and scope; không có mục Limitations and Exclusions |
| Ước tính sai | Ước tính trước khi có yêu cầu; không tính rework và kiểm thử |
| Không ai biết phiên bản nào mới nhất | Không có kiểm soát phiên bản; nhiều nguồn sự thật |

> **Lưu ý quan trọng: hầu hết nguyên nhân gốc rễ là VẤN ĐỀ QUY TRÌNH hoặc VẤN ĐỀ CON NGƯỜI, không phải vấn đề công cụ.** Mua một công cụ mới hiếm khi là câu trả lời — dù nó luôn là câu trả lời hấp dẫn nhất vì nó dễ thực hiện.

---

## 5. Xây dựng kế hoạch cải tiến & triển khai thí điểm

### Đặc điểm của một kế hoạch cải tiến tốt

**1. Nhắm vào một vấn đề cụ thể đang gây đau**, không phải một lý tưởng trừu tượng.

**2. Có mục tiêu đo lường được.** Không phải *"cải thiện chất lượng yêu cầu"* mà *"giảm số lỗi truy về yêu cầu thiếu xuống một nửa trong hai dự án tới"*.

**3. Có phạm vi nhỏ.** Một hoặc hai thay đổi, không phải mười.

**4. Có người sở hữu rõ ràng** với thời gian được phân bổ.

**5. Có thời hạn và điểm kiểm tra.**

**6. Nêu rõ điều gì sẽ được BỎ ĐI để nhường chỗ.**

> **Điểm 6 thường bị bỏ qua và là nguyên nhân thất bại phổ biến.** Nếu bạn thêm một thực hành mới mà không bỏ đi thứ gì, bạn đang **thêm gánh nặng** vào một đội đã quá tải. **Họ sẽ làm cho có, hoặc bỏ qua nó khi áp lực tăng lên.**

### Vì sao dự án thí điểm quan trọng

> **Đừng bao giờ triển khai một thực hành mới cho toàn tổ chức mà chưa thử nghiệm nó ở đâu đó.**

**Lợi ích của thí điểm:**

- **Bạn học được điều gì thực sự hoạt động** trong bối cảnh của tổ chức mình, không phải trong sách.
- **Bạn tìm ra các vấn đề thực tế** trước khi nhân rộng chúng ra 20 đội.
- **Bạn tạo ra bằng chứng** — dữ liệu thật từ dự án thật thuyết phục hơn nhiều so với lý thuyết.
- **Bạn tạo ra người ủng hộ** — đội thí điểm thành công trở thành người truyền bá đáng tin cậy hơn bất kỳ bản trình bày nào từ lãnh đạo.

**Cách chọn dự án thí điểm:**

- **Đội sẵn sàng tham gia** — đừng ép một đội miễn cưỡng.
- **Dự án đủ ngắn** để thấy kết quả trong vòng vài tháng.
- **Rủi ro vừa phải** — không phải dự án quan trọng nhất công ty, cũng không phải dự án không ai quan tâm.
- **Có thể quan sát và đo lường được.**

### Từ thí điểm tới nhân rộng

**Sau thí điểm, hãy trung thực:**

- **Nó có hiệu quả không?** Nếu không, **hãy dừng lại** — đó là kết quả hợp lệ, không phải thất bại.
- **Cần điều chỉnh gì** trước khi nhân rộng?
- **Điều gì làm nó hoạt động** trong bối cảnh này, và điều đó có tồn tại ở các đội khác không?

> **Cạm bẫy khi nhân rộng: giả định rằng thứ hiệu quả với đội A sẽ hiệu quả với đội B.** Đội A có thể thành công vì họ có một BA giỏi, không phải vì thực hành mới. **Hãy hiểu CƠ CHẾ tạo ra kết quả trước khi nhân rộng.**

---

## 6. Vượt qua kháng cự thay đổi

> **Kháng cự thay đổi là bình thường và có thể dự đoán được. Nếu bạn không lên kế hoạch cho nó, nó sẽ đánh bại nỗ lực cải tiến của bạn.**

### Sáu nguồn kháng cự và cách xử lý

**1. *"Chúng tôi không có thời gian cho việc này."***

- **Nguyên nhân thật:** đội đang quá tải và mọi thứ thêm vào đều là gánh nặng.
- **Cách xử lý:** cho thấy thực hành mới **tiết kiệm thời gian** ở đâu, và **bỏ đi thứ gì đó** để nhường chỗ. Nếu bạn không thể chỉ ra khoản tiết kiệm, có lẽ thực hành đó không đáng làm.

**2. *"Chúng tôi vẫn luôn làm thế này và nó vẫn ổn."***

- **Nguyên nhân thật:** người ta không thấy vấn đề, hoặc chi phí của vấn đề bị ẩn.
- **Cách xử lý:** **làm cho chi phí trở nên nhìn thấy được** bằng dữ liệu. *"Trong ba dự án gần nhất, chúng ta mất trung bình bảy tuần làm lại vì yêu cầu bị bỏ sót."*

**3. *"Đây chỉ là quan liêu."***

- **Nguyên nhân thật:** kinh nghiệm trước đó với các sáng kiến quy trình nặng nề mà không tạo giá trị.
- **Cách xử lý:** **giữ thực hành nhẹ và tập trung vào kết quả**, không vào việc tuân thủ. Sẵn sàng cắt bỏ mọi thứ không tạo giá trị.

**4. *"Cấp trên áp đặt xuống chúng tôi."***

- **Nguyên nhân thật:** thiếu quyền tự chủ.
- **Cách xử lý:** **để đội tham gia thiết kế giải pháp**, không chỉ nhận nó. Người tham gia tạo ra một thứ sẽ bảo vệ nó.

**5. Sợ bị lộ ra là không giỏi.**

- **Nguyên nhân thật:** nếu review tìm ra lỗi trong tài liệu của tôi, tôi trông kém cỏi.
- **Cách xử lý:** **tách hoàn toàn khỏi đánh giá hiệu suất cá nhân**, và **để người có thâm niên đưa tài liệu của mình ra review trước** để làm gương.

**6. Kháng cự thụ động — đồng ý rồi không làm.**

- **Đây là dạng khó nhất** vì nó vô hình.
- **Cách xử lý:** **theo dõi việc áp dụng thực tế**, không chỉ hỏi mọi người có làm không. Rồi tìm hiểu **vì sao** họ không làm — thường có lý do chính đáng mà bạn chưa biết.

### Nguyên tắc bao trùm

> **Con người không kháng cự sự thay đổi. Họ kháng cự việc BỊ thay đổi.**
>
> Nếu bạn muốn một thực hành được áp dụng, hãy làm cho nó **giải quyết một vấn đề mà chính người áp dụng đang gặp phải**, hãy để họ **tham gia định hình nó**, và hãy làm cho **lợi ích trở nên nhìn thấy được nhanh chóng**.
>
> **Cải tiến quy trình bền vững nhất là loại mà đội tự yêu cầu vì họ đã thấy nó hiệu quả ở nơi khác.**

---

## 7. Đo lường hiệu quả cải tiến

### Vì sao phải đo

**Không đo lường thì bạn không biết cải tiến có hiệu quả không** — và bạn cũng không thể biện minh cho việc tiếp tục đầu tư vào nó.

> **Một cảnh báo về việc đo lường: hãy đo KẾT QUẢ, không đo hoạt động.**
>
> *"Chúng ta đã tổ chức 12 buổi review yêu cầu"* là **hoạt động**. *"Số lỗi truy về yêu cầu giảm 40%"* là **kết quả**. **Chỉ kết quả mới chứng minh giá trị.**

### Các thước đo hữu ích

| Thước đo | Nó nói lên điều gì |
|----------|-------------------|
| **Số lỗi truy về yêu cầu** (thiếu, sai, mơ hồ) | Chỉ báo trực tiếp nhất về chất lượng yêu cầu |
| **Tỷ lệ công sức dành cho rework** | Rework giảm là dấu hiệu mạnh nhất của cải tiến |
| **Độ chính xác của ước tính** | Ước tính chính xác hơn nghĩa là hiểu biết tốt hơn |
| **Tốc độ thay đổi yêu cầu theo thời gian** | Giảm nhanh hơn nghĩa là khai thác tốt hơn từ đầu |
| **Thời gian từ khi phát hiện tới khi giải quyết một vấn đề yêu cầu** | Vòng phản hồi ngắn hơn |
| **Số lỗi được tìm thấy trong review** so với sau khi giao hàng | Dịch chuyển việc phát hiện lỗi về phía trước |
| **Sự hài lòng của các bên liên quan** | Đo bằng khảo sát ngắn, định kỳ |

### Nguyên tắc đo lường thực dụng

**1. Đo ít thứ nhưng đo nhất quán.** Ba thước đo được thu thập đều đặn giá trị hơn hai mươi thước đo thu thập một lần.

**2. Cần đường cơ sở (baseline).** Bạn không thể chứng minh cải tiến nếu không biết điểm xuất phát. **Hãy đo TRƯỚC khi thay đổi.**

**3. Cẩn thận với tác dụng phụ.**

> **Mọi thước đo đều có thể bị lợi dụng.** Nếu bạn thưởng cho việc *"ít thay đổi yêu cầu"*, đội sẽ **đơn giản không ghi lại các thay đổi**. Nếu bạn thưởng cho *"nhiều lỗi được tìm thấy trong review"*, mọi người sẽ ghi cả lỗi chính tả để làm đẹp số liệu.
>
> **Hãy dùng số liệu để hiểu, không để thưởng phạt cá nhân.**

**4. Chấp nhận rằng một số giá trị không đo được.** Cải thiện trong giao tiếp và lòng tin giữa đội và khách hàng là rất thực nhưng khó lượng hoá. **Đừng bỏ qua một cải tiến chỉ vì bạn không đo được nó.**

---

## 8. Quản lý rủi ro liên quan tới yêu cầu

### Rủi ro là gì

**Rủi ro là một điều kiện hoặc sự kiện có thể xảy ra trong tương lai và gây tác động tiêu cực tới dự án.**

**Ba đặc điểm phân biệt rủi ro với vấn đề:**

- **Rủi ro chưa xảy ra** — nó có xác suất. Một vấn đề đã xảy ra rồi.
- **Rủi ro có thể được giảm nhẹ trước** — đây chính là giá trị của việc quản lý nó.
- **Rủi ro có mức tác động** — không phải mọi rủi ro đều đáng đầu tư để phòng ngừa.

### Vì sao rủi ro yêu cầu quan trọng đặc biệt

> **Vấn đề yêu cầu nằm trong số những rủi ro dự án hàng đầu, gần như trong mọi khảo sát về nguyên nhân thất bại dự án phần mềm.**

**Lý do: chúng có tác động khuếch đại.** Một rủi ro kỹ thuật thường ảnh hưởng tới một thành phần. **Một rủi ro yêu cầu — chẳng hạn stakeholder chính không tham gia — ảnh hưởng tới TOÀN BỘ dự án** và thường chỉ lộ ra khi đã quá muộn để sửa rẻ.

### Bốn cách xử lý một rủi ro

| Chiến lược | Nghĩa là | Ví dụ |
|-----------|---------|-------|
| **Tránh (avoid)** | Thay đổi kế hoạch để rủi ro không còn áp dụng | Không dùng công nghệ chưa được kiểm chứng cho phần trọng yếu |
| **Giảm nhẹ (mitigate)** | Giảm xác suất hoặc tác động | Tổ chức workshop sớm với stakeholder khó tiếp cận |
| **Chuyển giao (transfer)** | Chuyển rủi ro sang bên khác | Đưa điều khoản vào hợp đồng với nhà cung cấp |
| **Chấp nhận (accept)** | Không làm gì, nhưng **có ý thức** và có kế hoạch dự phòng | Chấp nhận rằng một quy định có thể thay đổi, và chuẩn bị phản ứng |

> **Điểm quan trọng: "chấp nhận" là một chiến lược HỢP LỆ — nhưng chỉ khi nó là một quyết định có ý thức, được ghi lại.** Sự khác biệt giữa "chấp nhận rủi ro" và "phớt lờ rủi ro" nằm ở chỗ **bạn có biết mình đang chấp nhận cái gì hay không**.

---

## 9. Các rủi ro yêu cầu điển hình & biện pháp giảm nhẹ

### Bảng rủi ro và biện pháp

**1. Stakeholder quan trọng không tham gia hoặc không sẵn sàng.**

- **Tác động:** yêu cầu dựa trên phỏng đoán; yêu cầu mới xuất hiện muộn.
- **Giảm nhẹ:** xác định stakeholder có hệ thống ở đầu dự án; **thoả thuận trước về mức độ cam kết thời gian**; leo thang sớm khi không có mặt; dùng product champion thay vì cố gặp mọi người dùng.

**2. Yêu cầu không đầy đủ.**

- **Tác động:** chức năng bị bỏ sót, phát hiện ở giai đoạn kiểm thử hoặc sau khi giao hàng.
- **Giảm nhẹ:** dùng **nhiều kỹ thuật khai thác**; **mô hình phân tích** để bộc lộ khoảng trống; **checklist ngoại lệ**; **CRUD matrix**; review với sự tham gia của tester.

**3. Yêu cầu mơ hồ.**

- **Tác động:** lập trình viên xây sai thứ; tranh chấp khi nghiệm thu.
- **Giảm nhẹ:** **peer review chính thức với kỹ thuật diễn giải lại**; viết acceptance test trước; dùng bảng từ ngữ cần tránh; đưa tester vào sớm.

**4. Yêu cầu thay đổi liên tục (scope creep).**

- **Tác động:** dự án không bao giờ hoàn thành; đội kiệt sức.
- **Giảm nhẹ:** **tài liệu vision and scope với mục Limitations and Exclusions**; quy trình kiểm soát thay đổi; **đo lường và trình bày tổng công sức tích luỹ của các thay đổi**.

**5. Ưu tiên không được xác định.**

- **Tác động:** không thể cắt giảm phạm vi khi cần; lập trình viên tự quyết định.
- **Giảm nhẹ:** ưu tiên hoá cộng tác; backlog được sắp xếp; **áp đặt hạn ngạch cho mức ưu tiên cao**.

**6. Quality attribute có ảnh hưởng kiến trúc được phát hiện muộn.**

- **Tác động:** phải làm lại phần lớn công việc đã hoàn thành.
- **Giảm nhẹ:** **khai thác quality attribute sớm**; xây lát cắt dọc mỏng ở iteration đầu; đưa kiến trúc sư vào quá trình khai thác.

**7. Không có người ra quyết định có thẩm quyền.**

- **Tác động:** đội bị chặn hoặc tự đoán; quyết định bị đảo ngược muộn.
- **Giảm nhẹ:** **xác định rõ ai quyết định điều gì ngay từ đầu**; một product owner duy nhất; leo thang khi bế tắc.

**8. Khoảng cách giao tiếp với nhà cung cấp bên ngoài.**

- **Tác động:** nhà cung cấp xây sai thứ; phát hiện muộn.
- **Giảm nhẹ:** yêu cầu chi tiết hơn; **xác minh hiểu biết bằng cách yêu cầu diễn giải lại**; bàn giao tăng dần; mô hình trực quan.

**9. Yêu cầu không kiểm chứng được.**

- **Tác động:** không biết khi nào thì xong; tranh chấp nghiệm thu.
- **Giảm nhẹ:** **viết test case từ yêu cầu trước khi viết mã**; acceptance criteria cụ thể; dùng Planguage cho quality attribute.

**10. Kiến thức yêu cầu tập trung ở một người.**

- **Tác động:** người đó rời đi và kiến thức biến mất.
- **Giảm nhẹ:** **ghi lại những gì sống lâu hơn trí nhớ của đội**; chia sẻ kiến thức qua review; luân phiên vai trò.

---

## 10. Tài liệu rủi ro & theo dõi liên tục

### Cách ghi lại một rủi ro

**Một mục rủi ro tốt gồm:**

- **Định danh và tiêu đề ngắn.**
- **Mô tả điều kiện và hậu quả** — mẫu hữu ích: *"Nếu &lt;điều kiện&gt; thì &lt;hậu quả&gt;."*
- **Xác suất** — cao, trung bình, thấp, hoặc phần trăm ước tính.
- **Tác động** — mức nghiêm trọng nếu nó xảy ra.
- **Mức phơi nhiễm (exposure)** = xác suất × tác động, dùng để xếp hạng.
- **Chiến lược xử lý** và **hành động cụ thể**.
- **Người chịu trách nhiệm** và **thời hạn**.
- **Chỉ báo cảnh báo sớm** — dấu hiệu nào cho thấy rủi ro đang trở thành hiện thực?
- **Kế hoạch dự phòng** — nếu nó xảy ra dù đã giảm nhẹ, chúng ta làm gì?

> **Trường bị bỏ qua nhiều nhất và giá trị nhất là CHỈ BÁO CẢNH BÁO SỚM.**
>
> Một rủi ro không có chỉ báo cảnh báo chỉ được phát hiện khi nó **đã trở thành vấn đề**. Với chỉ báo — chẳng hạn *"nếu product owner bỏ lỡ hai buổi grooming liên tiếp"* — bạn có cơ hội hành động **trước khi** tác động xảy ra.

### Theo dõi rủi ro như một hoạt động liên tục

**Ba nguyên tắc:**

**1. Xem lại danh sách rủi ro định kỳ**, không phải chỉ một lần ở đầu dự án.

> **Đây là chế độ thất bại phổ biến nhất của quản lý rủi ro: danh sách rủi ro được lập ở tuần đầu, đưa vào tài liệu kế hoạch dự án, và không bao giờ được nhìn lại.** Rủi ro thay đổi khi dự án tiến triển — một số biến mất, một số mới xuất hiện, một số trở nên khẩn cấp hơn.

**2. Rủi ro phải hiển thị.** Nếu danh sách rủi ro nằm trong một tệp mà không ai mở, nó không tồn tại về mặt chức năng. **Hãy đưa vài rủi ro hàng đầu vào chỗ đội nhìn thấy hằng ngày.**

**3. Đóng rủi ro một cách tường minh.** Khi một rủi ro không còn áp dụng, hãy **ghi rõ điều đó và lý do**. Điều này vừa dọn dẹp danh sách vừa tạo ra bài học.

### Quản lý rủi ro trong agile

**Agile giảm nhẹ nhiều rủi ro một cách tự nhiên:**

- **Vòng phản hồi ngắn** phát hiện hiểu lầm sớm.
- **Giao hàng tăng dần** giảm rủi ro "phát hiện mọi thứ ở cuối".
- **Ưu tiên hoá liên tục** giảm rủi ro giao sai thứ.

**Nhưng agile KHÔNG tự động giải quyết:**

- Stakeholder không tham gia.
- Quality attribute có ảnh hưởng kiến trúc bị phát hiện muộn.
- Kiến thức tập trung ở một người.
- Vấn đề tuân thủ và chứng nhận.

> **Vì vậy đội agile vẫn cần quản lý rủi ro có chủ đích** — chỉ là ở dạng nhẹ hơn, thường được xem lại trong retrospective và phiên lập kế hoạch.

### Thông điệp cuối cùng của khoá học

> **Kỹ nghệ yêu cầu không phải là việc viết tài liệu hoàn hảo. Đó là việc XÂY DỰNG HIỂU BIẾT CHUNG giữa những người có nhu cầu và những người xây dựng giải pháp — đủ tốt để tiến lên với mức rủi ro chấp nhận được.**
>
> Mọi thực hành trong khoá học này — xác định stakeholder, khai thác, mô hình hoá, đặc tả, ưu tiên hoá, thẩm định, quản lý thay đổi, truy vết — đều phục vụ mục đích duy nhất đó.
>
> **Bạn không cần áp dụng tất cả. Bạn cần chọn những thực hành giải quyết vấn đề THẬT mà dự án của bạn đang gặp, áp dụng chúng ở mức tương xứng với rủi ro, và liên tục học hỏi từ kết quả.**
>
> **Đó chính là cải tiến quy trình — và đó là điều biến kiến thức trong khoá học này thành giá trị thực.**

---

## Điểm cốt lõi

- **Kiến thức không tự chuyển thành thực hành** — cần một nỗ lực cải tiến có chủ đích.
- **Cải tiến quy trình yêu cầu có tỷ suất hoàn vốn cao** vì nó tấn công vào nguồn gốc chứ không phải triệu chứng.
- **Cải tiến quy trình có thể nghĩa là LOẠI BỎ** — bỏ một tài liệu không ai đọc cũng là cải tiến.
- **Bắt đầu từ một vấn đề đang gây đau, không từ một mô hình lý tưởng.**
- **Sai lầm phổ biến nhất trong chu trình cải tiến là bỏ qua bước đánh giá kết quả.**
- **Mô hình trưởng thành là bản đồ, không phải mục tiêu** — mục tiêu là giao phần mềm tốt hơn.
- **Vấn đề lặp lại ở nhiều dự án là lỗi QUY TRÌNH**, không phải sự cố đơn lẻ.
- **Retrospective phải tách hoàn toàn khỏi đánh giá cá nhân**, nếu không sẽ không ai nói thật.
- **Hỏi "vì sao" năm lần** cho tới khi chạm nguyên nhân bạn thực sự kiểm soát được.
- **Hầu hết nguyên nhân gốc rễ là vấn đề quy trình hoặc con người, không phải công cụ.**
- **Kế hoạch cải tiến phải nêu rõ điều gì sẽ được BỎ ĐI để nhường chỗ.**
- **Đừng bao giờ triển khai toàn tổ chức mà chưa thí điểm** — và nếu thí điểm không hiệu quả, dừng lại là kết quả hợp lệ.
- **Hãy hiểu CƠ CHẾ tạo ra kết quả trước khi nhân rộng** — đội A có thể thành công vì có BA giỏi, không vì thực hành mới.
- ***"Chúng tôi không có thời gian"* thường có nghĩa là bạn chưa chỉ ra được khoản tiết kiệm.**
- **Làm cho chi phí của vấn đề trở nên nhìn thấy được bằng dữ liệu** để vượt qua *"vẫn luôn làm thế và vẫn ổn"*.
- **Con người không kháng cự sự thay đổi; họ kháng cự việc BỊ thay đổi.**
- **Đo KẾT QUẢ, không đo hoạt động** — 12 buổi review là hoạt động; giảm 40% lỗi là kết quả.
- **Cần đường cơ sở trước khi thay đổi** — không thì bạn không chứng minh được gì.
- **Mọi thước đo đều có thể bị lợi dụng** — dùng số liệu để hiểu, không để thưởng phạt cá nhân.
- **Rủi ro chưa xảy ra và có thể giảm nhẹ trước; vấn đề thì đã xảy ra rồi.**
- **Rủi ro yêu cầu có tác động khuếch đại** — nó ảnh hưởng toàn bộ dự án chứ không một thành phần.
- ***"Chấp nhận rủi ro"* hợp lệ khi nó là quyết định có ý thức; khác hoàn toàn với phớt lờ nó.**
- **Chỉ báo cảnh báo sớm là trường bị bỏ qua nhiều nhất và giá trị nhất** trong tài liệu rủi ro.
- **Chế độ thất bại phổ biến nhất của quản lý rủi ro: lập danh sách ở tuần đầu rồi không bao giờ nhìn lại.**
- **Agile giảm nhẹ nhiều rủi ro tự nhiên nhưng không tự động giải quyết** stakeholder vắng mặt hay quality attribute phát hiện muộn.
- **Kỹ nghệ yêu cầu là xây dựng hiểu biết chung đủ tốt để tiến lên với rủi ro chấp nhận được** — không phải viết tài liệu hoàn hảo.

## Tóm tắt

- **Cải tiến quy trình là chu trình đánh giá, lập kế hoạch, thực hiện và đánh giá kết quả** — và bước cuối là bước hay bị bỏ nhất.
- **Chẩn đoán bằng triệu chứng, rồi đào tới nguyên nhân gốc rễ** thay vì sửa từng sự cố riêng lẻ.
- **Thí điểm trước khi nhân rộng**, và trung thực khi kết quả không như mong đợi.
- **Lên kế hoạch cho kháng cự** — nó là bình thường, có thể dự đoán, và có thể xử lý bằng cách để người ta tham gia định hình giải pháp.
- **Đo kết quả với đường cơ sở rõ ràng**, và cẩn thận với việc số liệu bị lợi dụng.
- **Quản lý rủi ro yêu cầu bằng cách nhận diện sớm, ghi lại kèm chỉ báo cảnh báo, và xem lại liên tục** — vì rủi ro yêu cầu ảnh hưởng tới toàn bộ dự án chứ không chỉ một phần.
