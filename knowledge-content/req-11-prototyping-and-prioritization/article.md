# Prototype & ưu tiên hoá yêu cầu

## 1. Prototype là gì & vì sao dùng nó

> **Người dùng thường không biết chính xác họ muốn gì cho tới khi họ nhìn thấy một thứ gì đó.**

Đây là thực tế cơ bản của phát triển phần mềm. Bạn có thể phỏng vấn hàng giờ, viết hàng trăm câu yêu cầu, và người dùng vẫn gật đầu đồng ý — rồi khi nhìn thấy sản phẩm hoàn thiện họ nói *"Không, không phải cái này."*

**Prototype phần mềm là một hiện thực từng phần, có thể là sơ khai, của một hệ thống dự kiến.** Nó biến những yêu cầu trừu tượng thành **thứ hữu hình mà người dùng có thể nhìn, chạm và phản ứng**.

### Bốn mục đích chính của prototype

**1. Làm rõ và hoàn chỉnh yêu cầu.** Prototype giúp phát hiện **yêu cầu thiếu, sai và nhập nhằng** mà cả BA lẫn người dùng đều không nhận ra khi chỉ đọc văn bản.

**2. Khám phá phương án thiết kế.** Bạn có thể thử vài cách tiếp cận giao diện khác nhau nhanh chóng và rẻ, thay vì cam kết với một cách rồi phát hiện nó tệ.

**3. Giảm rủi ro kỹ thuật.** Khi bạn không chắc một cách tiếp cận kỹ thuật có khả thi không, một prototype nhỏ có thể trả lời câu hỏi đó **trước khi bạn xây cả hệ thống dựa trên giả định sai**.

**4. Tạo nền tảng cho sản phẩm cuối.** Một số prototype được phát triển tiếp thành sản phẩm thực sự.

> **Điểm mấu chốt: prototype là công cụ GIẢM RỦI RO.** Nó biến những câu hỏi *"Tôi không chắc"* thành câu trả lời cụ thể, **sớm và rẻ**.

### Prototype giúp giải quyết vấn đề gì

| Vấn đề | Prototype giúp thế nào |
|--------|------------------------|
| Người dùng không diễn đạt được nhu cầu | Cho họ thứ cụ thể để phản ứng thay vì phải tưởng tượng |
| Yêu cầu mơ hồ hoặc nhập nhằng | Buộc phải làm rõ để dựng được prototype |
| Không biết cách tiếp cận nào tốt hơn | So sánh trực tiếp vài phương án |
| Không chắc kỹ thuật có khả thi | Chứng minh hoặc bác bỏ nhanh chóng |
| Người dùng và lập trình viên hiểu khác nhau | Tạo ra một vật thể chung để cùng nhìn vào |

> **Một prototype tốt hơn nghìn lời mô tả — nhưng nó không THAY THẾ được đặc tả yêu cầu.** Prototype cho thấy **hình dạng bên ngoài**; nó không nói cho lập trình viên biết mọi quy tắc nghiệp vụ, mọi điều kiện ngoại lệ, mọi giá trị hợp lệ. **Hãy dùng prototype để KHÁM PHÁ yêu cầu, rồi GHI LẠI những gì bạn học được.**

---

## 2. Prototype ngang & prototype dọc

Có hai chiều để phân loại prototype. Chiều thứ nhất là **phạm vi**: prototype bao phủ bề rộng hay chiều sâu.

### Horizontal prototype (prototype ngang / mock-up / behavioral prototype)

**Prototype ngang thể hiện BỀ MẶT của hệ thống — chủ yếu là giao diện người dùng — mà KHÔNG hiện thực chức năng thực sự bên dưới.**

Đặc điểm:

- Người dùng có thể **điều hướng qua các màn hình**, nhìn thấy bố cục, nhãn, nút bấm.
- Dữ liệu hiển thị là **dữ liệu giả (hard-coded)**, không đến từ cơ sở dữ liệu thật.
- **Không có logic nghiệp vụ thực**, không có tính toán, không có lưu trữ.
- Nó **rộng nhưng nông**.

**Dùng khi nào:** để khám phá và làm rõ **yêu cầu chức năng và luồng tác vụ của người dùng**, và để đánh giá **khả năng sử dụng**.

> **Đây là loại prototype phổ biến nhất trong công việc BA**, vì nó trả lời câu hỏi *"Người dùng có thể làm được những việc họ cần làm không, và làm có dễ không?"*

### Vertical prototype (prototype dọc / structural prototype / proof of concept)

**Prototype dọc hiện thực ĐẦY ĐỦ một lát cắt hẹp của chức năng — từ giao diện xuyên qua mọi tầng tới cơ sở dữ liệu.**

Đặc điểm:

- Nó dùng **dữ liệu thật, thuật toán thật, tương tác thật với hệ thống khác**.
- Nó chỉ bao phủ **một hoặc vài chức năng**, nhưng bao phủ **hoàn chỉnh**.
- Nó **hẹp nhưng sâu**.

**Dùng khi nào:** để trả lời **câu hỏi kỹ thuật** — kiến trúc này có hoạt động không, thuật toán này có đủ nhanh không, có tích hợp được với hệ thống kia không, có đạt được yêu cầu performance không.

> **Prototype dọc được xây khi nhóm phát triển cần chứng minh một khái niệm kỹ thuật, không phải để người dùng đánh giá giao diện.**

### So sánh nhanh

| | Horizontal | Vertical |
|---|-----------|----------|
| **Bao phủ** | Rộng, nông | Hẹp, sâu |
| **Trả lời câu hỏi** | *"Đây có phải thứ tôi cần không?"* | *"Chúng ta có xây được thứ này không?"* |
| **Người đánh giá** | Người dùng, khách hàng | Lập trình viên, kiến trúc sư |
| **Dữ liệu** | Giả | Thật |
| **Còn gọi là** | Mock-up, behavioral prototype | Proof of concept, structural prototype |

**Bạn có thể cần cả hai trên cùng một dự án**, cho những mục đích khác nhau và ở những thời điểm khác nhau.

---

## 3. Throwaway prototype (prototype dùng một lần)

Chiều thứ hai để phân loại prototype là **số phận của nó**: bạn giữ lại hay vứt đi.

**Throwaway prototype được xây với MỤC ĐÍCH RÕ RÀNG là vứt bỏ sau khi nó đã hoàn thành nhiệm vụ trả lời câu hỏi.**

### Đặc điểm cốt lõi

- Xây **nhanh và rẻ** bằng bất kỳ công cụ nào tiện lợi nhất — không cần cùng công nghệ với sản phẩm cuối.
- **Bỏ qua** xử lý lỗi, kiểm tra tính hợp lệ, bảo mật, hiệu năng, khả năng bảo trì.
- **Chất lượng mã KHÔNG quan trọng**, vì mã sẽ không tồn tại.
- Mục tiêu duy nhất: **học được điều gì đó càng nhanh càng tốt**.

### Khi nào dùng throwaway prototype

Dùng nó khi bạn đối mặt với **sự bất định về yêu cầu**:

- Yêu cầu còn **mơ hồ, chưa đầy đủ hoặc mâu thuẫn**.
- Người dùng **không chắc họ muốn gì**.
- Bạn cần **phản hồi nhanh** về một ý tưởng.
- Có **nhiều phương án** và bạn muốn so sánh chúng.

> **Câu hỏi quyết định:** *"Chúng ta đang cố học điều gì?"* Nếu câu trả lời rõ ràng và câu hỏi có thể trả lời được bằng một thứ sơ sài, hãy làm throwaway prototype.

### Bẫy lớn nhất: prototype bị đẩy vào sản xuất

> **Đây là rủi ro nghiêm trọng nhất và phổ biến nhất của throwaway prototyping.**
>
> Kịch bản quen thuộc: đội xây một prototype đẹp mắt để trình diễn. Người quản lý hoặc khách hàng nhìn thấy nó và nói **"Trông tuyệt vời! Nó gần như xong rồi mà — cứ hoàn thiện nốt là chúng ta giao hàng."**
>
> Nhưng prototype được xây **không có xử lý lỗi, không kiểm tra dữ liệu, không bảo mật, không cân nhắc hiệu năng, và mã nguồn thì lộn xộn vì được viết vội**. Việc *"hoàn thiện nốt"* thực chất là **xây lại từ đầu, nhưng lần này trên một nền móng tồi**.
>
> **Kết quả: một sản phẩm mong manh mà đội sẽ phải chống đỡ trong nhiều năm.**

**Cách phòng ngừa:**

**1. Làm cho prototype trông RÕ RÀNG là chưa hoàn thiện.** Dùng phông chữ viết tay, màu sắc đơn giản, hoặc nét vẽ nguệch ngoạc. **Một prototype trông đẹp sẽ tạo kỳ vọng rằng nó gần xong.**

**2. Nói rõ ngay từ đầu, bằng văn bản, rằng prototype sẽ bị vứt bỏ.** Ghi điều này vào kế hoạch dự án và nhắc lại trong mỗi buổi trình diễn.

**3. Dùng công nghệ KHÔNG thể đưa vào sản xuất.** Nếu prototype được làm bằng công cụ vẽ hoặc trên giấy, không ai có thể đòi *"hoàn thiện nốt"* nó.

**4. Giải thích cái giá thật.** Cho stakeholder biết rằng ép prototype vào sản xuất sẽ tạo ra **nợ kỹ thuật khổng lồ** mà họ sẽ phải trả lãi trong nhiều năm.

---

## 4. Evolutionary prototype (prototype tiến hoá)

**Evolutionary prototype được xây với mục đích trở thành SẢN PHẨM THỰC SỰ, qua nhiều vòng làm mịn dần.**

### Đặc điểm cốt lõi

- Xây bằng **cùng công nghệ và cùng tiêu chuẩn chất lượng** với sản phẩm cuối.
- **Kiến trúc vững chắc ngay từ đầu**, vì nó sẽ phải mở rộng.
- Có **xử lý lỗi, kiểm tra tính hợp lệ, và các thực hành kỹ thuật tốt**.
- Mỗi vòng lặp **thêm chức năng** dựa trên phản hồi.

> **Đây chính là mô hình mà phát triển agile áp dụng: mỗi iteration tạo ra một phần sản phẩm chạy được, được cải thiện dần dựa trên phản hồi thực tế.**

### So sánh throwaway và evolutionary

| | Throwaway | Evolutionary |
|---|-----------|--------------|
| **Số phận** | Vứt bỏ | Trở thành sản phẩm |
| **Chất lượng mã** | Không quan trọng | Chất lượng sản xuất |
| **Công nghệ** | Bất kỳ thứ gì nhanh nhất | Cùng với sản phẩm cuối |
| **Tốc độ xây** | Rất nhanh | Chậm hơn nhiều |
| **Xử lý lỗi, bảo mật** | Bỏ qua | Đầy đủ |
| **Mục đích** | Học và trả lời câu hỏi | Giao hàng tăng dần |
| **Rủi ro chính** | Bị ép vào sản xuất | Kiến trúc ban đầu không đủ tốt để mở rộng |

### Ma trận bốn ô

Kết hợp hai chiều phân loại cho bạn bốn tổ hợp, mỗi cái phục vụ mục đích khác nhau:

| | **Horizontal (rộng, nông)** | **Vertical (hẹp, sâu)** |
|---|---|---|
| **Throwaway** | **Phổ biến nhất.** Mock-up giao diện để khám phá yêu cầu và luồng tác vụ, rồi vứt đi | Proof of concept kỹ thuật để trả lời một câu hỏi rồi vứt đi |
| **Evolutionary** | Hiếm và **nguy hiểm** — một bề mặt rộng không có nền tảng thì không thể tiến hoá thành sản phẩm | **Cách tiếp cận agile:** xây một lát cắt hoàn chỉnh, chất lượng sản xuất, rồi mở rộng dần |

> **Lưu ý quan trọng:** Ô **evolutionary + horizontal** hầu như luôn là sai lầm. Xây một giao diện rộng không có gì bên dưới rồi cố *"lấp đầy"* sau đó dẫn tới **kiến trúc bị chi phối bởi giao diện thay vì bởi miền nghiệp vụ**.

---

## 5. Prototype giấy & prototype điện tử

Chiều phân loại thứ ba là **độ trung thực (fidelity)** — prototype trông giống sản phẩm thật tới mức nào.

### Low-fidelity prototype (prototype độ trung thực thấp)

**Prototype giấy** là hình thức đơn giản nhất: **vẽ tay các màn hình lên giấy hoặc thẻ**, rồi *"chạy"* chúng bằng cách để người dùng chỉ vào nơi họ sẽ nhấp, và một người đóng vai *"máy tính"* thay tờ giấy tương ứng.

**Ưu điểm — và chúng lớn hơn nhiều người nghĩ:**

- **Cực kỳ rẻ và nhanh.** Bạn có thể vẽ một màn hình trong 2 phút và vứt đi mà không tiếc.
- **Khuyến khích phản hồi thẳng thắn.** Người dùng ngần ngại chỉ trích thứ trông đã hoàn thiện, nhưng **không ngại chút nào khi phê bình một bản vẽ tay**.
- **Không ai đòi đưa nó vào sản xuất.** Bẫy lớn nhất của throwaway prototyping biến mất hoàn toàn.
- **Tập trung vào cấu trúc và luồng, không vào màu sắc và phông chữ.** Cuộc thảo luận đi vào những gì thực sự quan trọng ở giai đoạn này.
- **Bất kỳ ai cũng tham gia được.** Người dùng có thể cầm bút và tự vẽ ý tưởng của mình.

> **Nghịch lý mạnh mẽ: prototype càng thô sơ, phản hồi bạn nhận được càng có giá trị ở giai đoạn đầu.** Khi bạn cho xem một thiết kế bóng bẩy, người ta bình luận về màu nút bấm. Khi bạn cho xem một bản vẽ tay, người ta nói về việc quy trình có đúng không.

**Nhược điểm:** không thể hiện được **tương tác động, hoạt ảnh, hoặc cảm nhận thực về tốc độ**. Không phù hợp để đánh giá những khía cạnh đó.

### High-fidelity prototype (prototype độ trung thực cao)

**Prototype điện tử** được dựng bằng công cụ thiết kế giao diện, công cụ prototyping chuyên dụng, hoặc mã thật.

**Ưu điểm:**

- Thể hiện được **tương tác động, chuyển cảnh, phản hồi thời gian thực**.
- Có thể **phân phối từ xa** cho người đánh giá ở nhiều nơi.
- Phù hợp cho **kiểm thử khả năng sử dụng chính thức** và trình diễn với lãnh đạo.
- Có thể trở thành **tài liệu đặc tả trực quan** cho lập trình viên.

**Nhược điểm:**

- **Tốn thời gian và chi phí hơn nhiều.**
- **Tạo kỳ vọng rằng sản phẩm gần xong** — quay lại đúng cái bẫy đã nói.
- **Ngăn cản phản hồi mang tính cấu trúc**, vì người xem cho rằng các quyết định lớn đã được chốt.

### Chiến lược thực tế

> **Bắt đầu bằng giấy, kết thúc bằng điện tử.**
>
> Dùng **prototype giấy** ở giai đoạn đầu để khám phá cấu trúc, luồng tác vụ và các phương án lớn — nơi bạn muốn thay đổi nhiều và nhanh. Chuyển sang **prototype điện tử** khi cấu trúc đã ổn định và bạn cần đánh giá tương tác chi tiết hoặc kiểm thử khả năng sử dụng chính thức.
>
> **Mức độ hoàn thiện của prototype nên tương ứng với mức độ chắc chắn của bạn.**

---

## 6. Đánh giá prototype & những rủi ro của prototyping

### Cách tổ chức đánh giá prototype

**1. Chọn đúng người đánh giá.** Phải là **đại diện của các user class thực sự** sẽ dùng hệ thống — không phải quản lý của họ, không phải người mua ngân sách. **Hãy bao gồm cả người dùng thành thạo lẫn người dùng thỉnh thoảng**, vì họ sẽ phản ứng rất khác nhau.

**2. Cho họ TÁC VỤ, không cho họ tour du lịch.** Đừng dẫn người dùng đi qua từng màn hình và giải thích. Thay vào đó hãy nói: *"Hãy đặt một yêu cầu cho 2 lít axeton"* rồi **im lặng quan sát**. Nơi họ lúng túng chính là nơi thiết kế có vấn đề.

**3. Ghi lại vấn đề, không ghi lại giải pháp.** Khi người dùng nói *"nên có một nút ở đây"*, hãy ghi lại **vấn đề đằng sau** — *"người dùng không tìm được cách quay lại bước trước"* — chứ không phải giải pháp họ đề xuất. **Giải pháp là việc của nhà thiết kế; vấn đề là dữ liệu quý giá.**

**4. Chuyển những gì học được thành YÊU CẦU ĐƯỢC GHI LẠI.** Đây là bước bị bỏ qua nhiều nhất. **Prototype tự nó không phải đặc tả** — nó là công cụ khám phá. Sau mỗi vòng đánh giá, hãy cập nhật yêu cầu với những gì bạn học được.

**5. Đặt kỳ vọng rõ ràng ngay từ đầu mỗi buổi.** Nói rõ **prototype này là gì và không là gì**, phần nào hoạt động và phần nào chỉ là mặt tiền, và điều gì sẽ xảy ra với nó sau đó.

### Sáu rủi ro của prototyping

**1. Prototype bị ép vào sản xuất.** Đã bàn ở trên — **rủi ro nghiêm trọng nhất**.

**2. Người dùng tập trung vào chi tiết bề mặt.** Họ tranh luận về màu sắc và vị trí nút trong khi bạn đang cố xác nhận luồng công việc. **Cách khắc phục: dùng prototype độ trung thực thấp và nêu rõ mục tiêu của buổi đánh giá.**

**3. Kỳ vọng phi thực tế về tiến độ.** Nhìn thấy màn hình hoạt động khiến stakeholder nghĩ dự án đã hoàn thành 80% trong khi thực tế là 10%. **Cách khắc phục: truyền đạt rõ prototype thể hiện bao nhiêu phần trăm công việc thực.**

**4. Prototype hiển thị hiệu năng không thực tế.** Một mock-up với dữ liệu giả phản hồi tức thì; hệ thống thật với một triệu bản ghi thì không. **Người dùng sẽ thất vọng nếu bạn không nói trước.**

**5. Đầu tư quá nhiều vào prototype.** Prototype là **phương tiện, không phải mục đích**. Nếu bạn dành ba tháng để hoàn thiện một prototype, bạn đã đánh mất lợi thế chính của nó là **nhanh và rẻ**.

**6. Ngừng lại quá sớm hoặc quá muộn.** **Ngừng quá sớm** nghĩa là bạn chưa học được đủ. **Tiếp tục quá lâu** — vòng lặp thứ mười mà vẫn còn thay đổi lớn — thường là dấu hiệu bạn **chưa xác định được người ra quyết định** hoặc **chưa hiểu vấn đề nghiệp vụ thực sự**.

> **Tiêu chí dừng: hãy quyết định TRƯỚC KHI bắt đầu rằng prototype này cần trả lời câu hỏi gì.** Khi câu hỏi đã được trả lời, hãy dừng lại — kể cả khi prototype vẫn có thể đẹp hơn.

---

## 7. Vì sao phải ưu tiên hoá & những trở ngại

> **Không dự án nào có đủ thời gian, tiền bạc và nhân lực để làm mọi thứ mọi người muốn.**

Đây không phải bi quan — đây là **thực tế toán học**. Danh sách mong muốn luôn dài hơn khả năng cung cấp. **Câu hỏi không phải là *"chúng ta có phải cắt bớt không"* mà là *"chúng ta cắt cái gì, và ai quyết định"*.**

### Điều gì xảy ra khi bạn KHÔNG ưu tiên hoá

**Nếu mọi yêu cầu đều quan trọng như nhau, thì quản lý dự án KHÔNG BIẾT phải phản ứng thế nào khi:**

- Lịch trình bị trễ.
- Một thành viên chủ chốt rời đi.
- Một yêu cầu mới quan trọng xuất hiện giữa dự án.
- Ước tính ban đầu hoá ra quá lạc quan.

**Không có ưu tiên, mọi quyết định cắt giảm đều trở thành khủng hoảng chính trị.** Với ưu tiên rõ ràng, đó chỉ là **thực thi một kế hoạch đã được thoả thuận từ trước**.

> **Hệ quả tệ nhất của việc không ưu tiên hoá: lập trình viên tự quyết định.** Khi thời gian cạn kiệt, ai đó phải chọn xây gì trước. Nếu stakeholder không quyết định, **lập trình viên sẽ quyết định** — dựa trên cái gì thú vị hoặc dễ nhất, chứ không dựa trên giá trị nghiệp vụ.

### Bốn trở ngại khi ưu tiên hoá

**1. *"Mọi thứ đều là ưu tiên cao."*** Đây là phản ứng phổ biến nhất từ khách hàng. Nó thực ra có nghĩa là **"tôi không muốn phải chọn"** hoặc **"tôi sợ nếu tôi nói cái này ưu tiên thấp thì nó sẽ không bao giờ được làm."**

- **Cách xử lý: đảo ngược câu hỏi.** Đừng hỏi *"cái nào quan trọng?"* Hãy hỏi *"nếu chúng ta chỉ giao được một nửa danh sách này vào tháng Sáu, bạn muốn nửa nào?"* **Buộc phải chọn giữa các phương án cụ thể sẽ tạo ra câu trả lời thật.**

**2. Sợ mất cái mình muốn.** Stakeholder gán ưu tiên cao cho mọi thứ vì họ tin **ưu tiên thấp = không bao giờ được làm**.

- **Cách xử lý:** làm rõ rằng ưu tiên thấp nghĩa là **làm sau**, không phải **không bao giờ làm** — và giữ đúng lời hứa đó.

**3. Xung đột giữa các stakeholder.** Điều quan trọng nhất với bộ phận bán hàng có thể vô nghĩa với bộ phận vận hành.

- **Cách xử lý:** cần một **người ra quyết định có thẩm quyền** — product champion hoặc product owner — và một **khung quyết định minh bạch** dựa trên giá trị nghiệp vụ, không dựa trên ai nói to hơn.

**4. Thiếu thông tin để quyết định.** Không ai biết một yêu cầu tốn bao nhiêu công sức thì không thể cân nhắc giá trị so với chi phí.

- **Cách xử lý:** **ưu tiên hoá là hoạt động CỘNG TÁC** — khách hàng cung cấp giá trị, lập trình viên cung cấp chi phí và rủi ro kỹ thuật.

> **Nguyên tắc quan trọng: ưu tiên KHÔNG cố định.** Chúng thay đổi khi hoàn cảnh thị trường thay đổi, khi bạn học được điều mới, khi đối thủ tung sản phẩm. **Hãy xem lại ưu tiên định kỳ, đặc biệt ở đầu mỗi iteration hoặc mỗi giai đoạn.**

---

## 8. Các kỹ thuật ưu tiên hoá cơ bản

### In or out (trong hay ngoài)

**Kỹ thuật đơn giản nhất: với mỗi yêu cầu, nhóm quyết định nó có nằm trong bản phát hành này hay không.** Không có mức trung gian.

- **Ưu điểm:** cực kỳ nhanh, buộc phải quyết định dứt khoát, phù hợp với danh sách ngắn.
- **Nhược điểm:** không cho biết thứ tự thực hiện trong số những cái *"trong"*.
- **Quan trọng:** phải có **tất cả người ra quyết định chủ chốt trong cùng một phòng**, vì quyết định này mang tính ràng buộc.

### Ưu tiên ba mức

Phân loại mọi yêu cầu vào một trong ba nhóm. Cách gọi phổ biến:

| Mức | Ý nghĩa |
|-----|---------|
| **High / Essential** | Phần mềm **không chấp nhận được** nếu thiếu nó |
| **Medium / Conditional** | Làm phần mềm **tốt hơn đáng kể**, nhưng vẫn chấp nhận được nếu thiếu |
| **Low / Optional** | **Tốt nếu có** nhưng không thiết yếu |

> **Bẫy cố hữu: mọi người sẽ đặt phần lớn yêu cầu vào mức High.** Một cách khắc phục hiệu quả là **áp đặt hạn ngạch**: *"Không quá 30% yêu cầu được xếp mức High."* Điều này buộc phải phân biệt thật sự.

### MoSCoW

Một biến thể bốn mức được dùng rộng rãi, đặc biệt trong các phương pháp agile:

| Ký tự | Nghĩa | Giải thích |
|-------|-------|-----------|
| **M** | **Must** | Bắt buộc phải có; **không có nó thì bản phát hành thất bại** |
| **S** | **Should** | Quan trọng và nên có nếu có thể, nhưng **có giải pháp thay thế tạm thời** |
| **C** | **Could** | Mong muốn; sẽ làm **nếu thời gian và tài nguyên cho phép** |
| **W** | **Won't** | **Sẽ không làm trong lần này** — nhưng có thể xem xét ở bản phát hành sau |

> **Chữ W là phần bị đánh giá thấp nhất và cũng hữu ích nhất của MoSCoW.** *"Won't this time"* khác hoàn toàn với *"never"*. **Nó cho stakeholder sự an tâm rằng ý tưởng của họ không bị vứt bỏ, chỉ là chưa đến lượt** — điều này làm giảm mạnh xu hướng gán mọi thứ vào Must.

**Hướng dẫn thực tế:** nhiều đội đặt quy tắc rằng **Must không được vượt quá khoảng 60% tổng công sức** của iteration, để lại chỗ cho bất định.

### Kỹ thuật 100 đô la (cumulative voting)

**Mỗi stakeholder được cấp 100 điểm giả định — hãy hình dung đó là tiền — và phân bổ chúng cho các yêu cầu theo mức độ quan trọng với họ.**

- Họ có thể đặt tất cả vào một yêu cầu, hoặc rải đều.
- Tổng điểm của mỗi yêu cầu qua tất cả người bỏ phiếu cho ra **xếp hạng định lượng**.

**Ưu điểm:** buộc phải đánh đổi **thật sự** — cho cái này nhiều hơn nghĩa là cho cái kia ít hơn. Đây chính là điều mà ưu tiên ba mức không làm được.

**Nhược điểm và cách khắc phục:**

- **Thao túng chiến lược:** ai đó có thể dồn hết 100 điểm vào yêu cầu họ muốn để đẩy nó lên đầu. **Cách khắc phục: đặt trần** — không yêu cầu nào được nhận quá 20 điểm từ một người.
- **Không hoạt động tốt với danh sách rất dài.** Với 200 yêu cầu, 100 điểm quá loãng. **Hãy dùng nó cho danh sách 20–40 mục**, hoặc chia thành nhóm rồi ưu tiên trong từng nhóm.
- **Chỉ phản ánh giá trị, không phản ánh chi phí.** Một yêu cầu được 40 điểm nhưng tốn sáu tháng có thể kém hấp dẫn hơn ba yêu cầu 15 điểm tốn hai tuần mỗi cái.

---

## 9. Phân tích ưu tiên theo giá trị, chi phí và rủi ro

Các kỹ thuật ở phần trước chủ yếu dựa vào **cảm nhận**. Khi mức đầu tư lớn và quyết định khó khăn, bạn cần một cách tiếp cận **bán định lượng**.

### Nguyên lý cốt lõi

> **Ưu tiên cao nhất thuộc về những yêu cầu có TỶ LỆ GIÁ TRỊ TRÊN CHI PHÍ cao nhất, sau khi điều chỉnh theo rủi ro.**

Điều này giải quyết vấn đề lớn nhất của ưu tiên hoá thuần cảm tính: **một yêu cầu có giá trị vừa phải nhưng cực rẻ thường đáng làm trước một yêu cầu có giá trị cao nhưng cực đắt.**

### Bốn yếu tố cần đánh giá

Với mỗi yêu cầu hoặc feature, hãy ước tính trên thang điểm tương đối (ví dụ 1–9):

**1. Lợi ích tương đối (relative benefit)** — giá trị nếu có nó. Do **khách hàng** đánh giá.

**2. Tổn thất tương đối (relative penalty)** — thiệt hại nếu **không** có nó. Cũng do **khách hàng** đánh giá.

> **Vì sao cần cả hai?** Chúng khác nhau. Một tính năng tuân thủ pháp luật có thể mang lại **lợi ích thấp** (không ai vui hơn vì nó) nhưng **tổn thất cực cao** (bị phạt hoặc bị cấm bán). Nếu chỉ hỏi về lợi ích, bạn sẽ **xếp sai nó xuống đáy danh sách**.

**3. Chi phí tương đối (relative cost)** — công sức để hiện thực. Do **lập trình viên** ước tính, dựa trên độ phức tạp, mức tái sử dụng, kiểm thử cần thiết.

**4. Rủi ro kỹ thuật tương đối (relative risk)** — mức độ bất định về việc có làm được không, hoặc làm được đúng không. Cũng do **lập trình viên** ước tính.

### Cách tính

**Giá trị của một yêu cầu** = lợi ích + tổn thất (có thể đánh trọng số nếu tổn thất quan trọng hơn với tổ chức của bạn).

**Ưu tiên** = giá trị ÷ (chi phí + rủi ro)

**Xếp hạng các yêu cầu theo điểm ưu tiên giảm dần.** Những cái ở đầu danh sách cho bạn **nhiều giá trị nhất trên mỗi đơn vị công sức và rủi ro**.

### Cách dùng kết quả một cách khôn ngoan

> **Đừng coi con số là chân lý tuyệt đối.** Đây là **thang đo tương đối dựa trên ước tính**, không phải phép đo chính xác.

**Giá trị thực sự của kỹ thuật này nằm ở chỗ:**

- **Nó buộc phải có cuộc trò chuyện có cấu trúc** giữa khách hàng và lập trình viên, mỗi bên đóng góp thông tin mà bên kia không có.
- **Nó làm lộ ra sự bất đồng.** Khi hai stakeholder chấm cùng một yêu cầu là 9 và 2, **đó là cuộc thảo luận đáng giá nhất trong cả buổi**.
- **Nó tách bạch giá trị khỏi chi phí.** Rất nhiều tranh cãi về ưu tiên thực chất là do hai bên đang nói về hai chiều khác nhau mà không nhận ra.
- **Nó cho bạn một lý lẽ khách quan** khi phải giải thích vì sao một yêu cầu bị đẩy xuống.

**Hãy dùng kết quả làm ĐIỂM KHỞI ĐẦU cho thảo luận, rồi điều chỉnh bằng phán đoán con người** cho những yếu tố mà công thức không nắm bắt được — ràng buộc pháp lý, phụ thuộc kỹ thuật, cam kết với khách hàng, thời điểm thị trường.

### Đừng quên phụ thuộc

**Một số yêu cầu ưu tiên thấp phải được làm sớm vì những yêu cầu ưu tiên cao phụ thuộc vào chúng.** Cơ chế xác thực người dùng có thể không mang lại giá trị trực tiếp nào, nhưng mọi thứ khác đều cần nó.

> **Hãy xem ưu tiên như đầu vào cho việc lập kế hoạch, không phải như kế hoạch.** Kế hoạch cuối cùng phải tính tới **thứ tự kỹ thuật bắt buộc**, không chỉ giá trị nghiệp vụ.

---

## 10. Mô hình Kano & ưu tiên hoá trong agile

### Mô hình Kano

**Mô hình Kano phân loại tính năng theo cách chúng ảnh hưởng tới SỰ HÀI LÒNG của khách hàng** — và cái nhìn của nó bổ sung một chiều mà phân tích giá trị-chi phí bỏ sót.

**Ba loại chính:**

**1. Must-be (yêu cầu cơ bản / thuộc tính bắt buộc)**

- Khách hàng **coi chúng là hiển nhiên**. Có chúng không làm ai vui; **thiếu chúng làm mọi người tức giận**.
- Ví dụ: ứng dụng ngân hàng hiển thị đúng số dư; email gửi đi thực sự đến nơi.
- **Quan hệ phi tuyến:** đầu tư thêm vào chúng **không tăng sự hài lòng**, nhưng thiếu sót thì gây thiệt hại nghiêm trọng.
- **Chiến lược: phải đạt mức đủ, không cần xuất sắc.**

**2. Performance (một chiều / tuyến tính)**

- **Càng nhiều càng tốt** — sự hài lòng tăng tỷ lệ thuận với mức độ.
- Ví dụ: tốc độ tải trang, dung lượng lưu trữ, thời lượng pin.
- **Đây là nơi khách hàng so sánh bạn với đối thủ.**
- **Chiến lược: đầu tư có cân nhắc, dựa trên vị thế cạnh tranh mong muốn.**

**3. Delighter (thuộc tính hấp dẫn / gây thích thú)**

- Khách hàng **không mong đợi và không yêu cầu**. Thiếu chúng không ai phàn nàn; **có chúng tạo ra sự yêu thích**.
- Ví dụ: một tính năng nhỏ tiết kiệm cho người dùng hàng giờ mà họ chưa từng nghĩ tới.
- **Chiến lược: một vài delighter được chọn kỹ tạo ra khác biệt lớn — nhưng đừng đầu tư vào chúng trước khi các must-be đã vững.**

> **Cái nhìn quan trọng nhất của Kano: các loại này DI CHUYỂN theo thời gian.** Điều từng là delighter trở thành performance, rồi trở thành must-be. Camera trên điện thoại từng gây kinh ngạc; giờ điện thoại không có camera là không bán được. **Đây là lý do sản phẩm phải liên tục đổi mới chỉ để giữ nguyên vị trí.**

**Cách dùng Kano trong ưu tiên hoá:**

- **Bảo đảm mọi must-be đều nằm trong bản phát hành đầu tiên** — chúng là điều kiện tiên quyết, không phải lựa chọn.
- **Phân bổ phần lớn công sức còn lại cho performance** ở những chiều mà khách hàng của bạn thực sự quan tâm.
- **Dành một phần nhỏ cho một hoặc hai delighter** để tạo khác biệt.
- **Đừng đánh đổi must-be lấy delighter.** Một sản phẩm có tính năng gây thích thú nhưng thiếu điều cơ bản sẽ bị từ chối.

### Ưu tiên hoá trong dự án agile

Agile đưa ưu tiên hoá vào **trung tâm của quy trình** thay vì coi nó là một hoạt động một lần.

**Bốn nguyên tắc:**

**1. Backlog LUÔN được sắp xếp.** Product backlog không phải danh sách phẳng — nó được **sắp thứ tự từ trên xuống**, và mục ở đầu là mục sẽ được làm tiếp theo. **Việc sắp xếp này được xem lại liên tục.**

**2. Product owner là người quyết định cuối cùng.** Đội cung cấp **ước tính công sức**; product owner quyết định **thứ tự**. **Một người chịu trách nhiệm** giải quyết vấn đề xung đột giữa stakeholder.

**3. Ưu tiên chỉ cần chính xác ở phần ĐẦU danh sách.** Không cần sắp xếp hoàn hảo 300 mục cuối backlog — chúng sẽ thay đổi trước khi đến lượt. **Hãy đầu tư công sức ưu tiên hoá vào 20–30 mục tiếp theo.**

**4. Giao hàng theo giá trị giảm dần.** Vì mục giá trị cao nhất được làm trước, **mỗi bản phát hành đều mang lại nhiều giá trị nhất có thể tại thời điểm đó**. Nếu dự án bị dừng đột ngột, bạn vẫn đã giao được phần quan trọng nhất.

> **Lợi ích sâu xa của việc ưu tiên hoá liên tục: nó biến "cắt giảm phạm vi" từ một thất bại thành một quyết định bình thường.** Khi backlog được sắp xếp theo giá trị, việc dừng ở mục thứ 40 thay vì mục thứ 60 **không phải khủng hoảng — đó là kết quả đã được lường trước của việc giao hàng theo thứ tự giá trị**.

---

## Điểm cốt lõi

- **Người dùng thường không biết chính xác họ muốn gì cho tới khi nhìn thấy thứ gì đó** — đó là lý do prototype tồn tại.
- **Prototype là công cụ giảm rủi ro**, biến câu hỏi *"tôi không chắc"* thành câu trả lời cụ thể, sớm và rẻ.
- **Prototype KHÔNG thay thế đặc tả yêu cầu** — hãy dùng nó để khám phá, rồi ghi lại những gì học được.
- **Horizontal prototype rộng và nông** (giao diện, dữ liệu giả) trả lời *"đây có phải thứ tôi cần không"*.
- **Vertical prototype hẹp và sâu** (proof of concept) trả lời *"chúng ta có xây được không"*.
- **Throwaway prototype được xây để vứt đi** — bỏ qua xử lý lỗi, bảo mật, hiệu năng.
- **Rủi ro nghiêm trọng nhất: prototype bị ép vào sản xuất**, tạo ra sản phẩm mong manh trên nền móng tồi.
- Phòng ngừa bằng cách **làm prototype trông rõ ràng là chưa hoàn thiện** và dùng công nghệ không thể đưa vào sản xuất.
- **Evolutionary prototype trở thành sản phẩm** — chất lượng sản xuất ngay từ đầu; đây là mô hình agile.
- **Evolutionary + horizontal hầu như luôn là sai lầm** — bề mặt rộng không có nền tảng thì không tiến hoá được.
- **Prototype càng thô sơ, phản hồi giai đoạn đầu càng giá trị** — người ta không ngại phê bình bản vẽ tay.
- Khi đánh giá, **cho người dùng TÁC VỤ chứ không phải tour du lịch**, rồi im lặng quan sát.
- **Ghi lại vấn đề, không ghi lại giải pháp** người dùng đề xuất.
- **Quyết định trước khi bắt đầu prototype cần trả lời câu hỏi gì** — đó là tiêu chí dừng.
- Nếu mọi yêu cầu quan trọng như nhau, **quản lý dự án không biết phản ứng thế nào** khi có sự cố.
- Không có ưu tiên rõ ràng, **lập trình viên sẽ tự quyết định** dựa trên cái gì dễ hoặc thú vị.
- Với *"mọi thứ đều ưu tiên cao"*, hãy **đảo ngược câu hỏi**: *"nếu chỉ giao được một nửa, bạn muốn nửa nào?"*
- **Ưu tiên thấp nghĩa là làm sau, không phải không bao giờ làm** — và phải giữ đúng lời hứa đó.
- **Chữ W trong MoSCoW là phần hữu ích nhất**: *"won't this time"* khác hoàn toàn với *"never"*.
- Kỹ thuật **100 đô la buộc phải đánh đổi thật**, nhưng cần đặt trần để chống thao túng.
- **Cần hỏi CẢ lợi ích khi có VÀ tổn thất khi không có** — tính năng tuân thủ pháp luật có lợi ích thấp nhưng tổn thất cực cao.
- **Ưu tiên = giá trị ÷ (chi phí + rủi ro)**, với khách hàng cung cấp giá trị và lập trình viên cung cấp chi phí, rủi ro.
- Giá trị lớn nhất của phân tích bán định lượng là **làm lộ ra sự bất đồng** giữa các stakeholder.
- **Một số yêu cầu ưu tiên thấp phải làm sớm** vì yêu cầu ưu tiên cao phụ thuộc vào chúng.
- **Kano: must-be phải đủ, performance đầu tư có cân nhắc, delighter chọn lọc** — và các loại này di chuyển theo thời gian.
- Trong agile, **ưu tiên chỉ cần chính xác ở phần đầu backlog**; phần cuối sẽ thay đổi trước khi đến lượt.

## Tóm tắt

- **Prototype biến yêu cầu trừu tượng thành thứ hữu hình** để người dùng phản ứng, và nên được chọn theo ba chiều: **ngang hay dọc, dùng một lần hay tiến hoá, độ trung thực thấp hay cao**.
- **Xác định rõ prototype cần trả lời câu hỏi gì trước khi xây**, và bảo vệ nó khỏi bị ép vào sản xuất.
- **Ưu tiên hoá là điều bắt buộc**, không phải tuỳ chọn, vì không dự án nào làm được mọi thứ.
- Chọn kỹ thuật theo hoàn cảnh: **MoSCoW cho tốc độ, 100 đô la cho đánh đổi thật, phân tích giá trị-chi phí-rủi ro cho quyết định lớn**.
- **Ưu tiên hoá là hoạt động cộng tác**: khách hàng biết giá trị, lập trình viên biết chi phí và rủi ro.
- **Xem lại ưu tiên định kỳ**, vì hoàn cảnh thay đổi và mô hình Kano cho thấy kỳ vọng của khách hàng cũng dịch chuyển theo thời gian.
