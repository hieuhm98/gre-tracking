# Góc nhìn khách hàng & thoả thuận yêu cầu

## 1. Khoảng cách kỳ vọng (expectation gap)

Hãy hình dung một cuộc đối thoại quen thuộc. Một quản lý cấp cao nói: *"Chúng tôi cần một hệ thống theo dõi hoá chất. Anh xây xong trong năm tháng được không?"* Trưởng phòng IT đáp: *"Trước khi cam kết lịch, chúng tôi cần hiểu yêu cầu đã."* Vị quản lý ngạc nhiên: *"Tôi vừa nói yêu cầu của tôi rồi đấy thôi."*

Ông ấy không hề nói yêu cầu. Ông ấy nói **business objective**. Đó chưa đủ để biết phải xây phần mềm gì, hay mất bao lâu.

Khi không có sự tham gia đầy đủ của khách hàng, kết cục gần như không tránh khỏi là **khoảng cách kỳ vọng** — vực ngăn giữa thứ khách hàng thực sự cần và thứ đội phát triển giao ra dựa trên những gì họ nghe được lúc đầu.

Cách duy nhất để thu hẹp khoảng cách này là **các điểm tiếp xúc thường xuyên** với đại diện khách hàng phù hợp:

- Phỏng vấn và trò chuyện.
- Review yêu cầu.
- Walkthrough thiết kế giao diện.
- Đánh giá prototype.
- Với agile: phản hồi trên từng gia số phần mềm chạy được.

Mỗi điểm tiếp xúc là một cơ hội **kéo hai đường lại gần nhau**. Ngay sau mỗi lần tiếp xúc, khoảng cách lại bắt đầu nới ra khi việc phát triển tiếp diễn — nên càng nhiều điểm tiếp xúc, đường đi càng bám sát nhu cầu thật.

> Một câu chuyện có thật: đội phát triển xây xong hệ thống nội bộ với gần như không có input người dùng. Ngày ra mắt, người dùng **từ chối hoàn toàn**. Đội phải làm lại, dự án tiếp theo trong hàng đợi bị đẩy lùi. Lập trình viên bẽ bàng, người dùng bực bội, ban lãnh đạo mất tiền và mất cả cơ hội. Công ty **luôn** phải sửa khi yêu cầu sai — và luôn đắt hơn nhiều so với việc mời người dùng tham gia từ đầu.

---

## 2. Ai là khách hàng?

**Stakeholder** là cá nhân, nhóm hoặc tổ chức **tham gia tích cực** vào dự án, **bị ảnh hưởng** bởi quá trình hay kết quả của nó, hoặc **có thể tác động** tới quá trình / kết quả đó.

Quan hệ bao hàm rất quan trọng:

**Stakeholder ⊃ Customer ⊃ User**

- **Customer** là cá nhân hoặc tổ chức **hưởng lợi trực tiếp hay gián tiếp** từ sản phẩm. Họ có thể yêu cầu, trả tiền, lựa chọn, đặc tả, sử dụng, hoặc nhận đầu ra từ sản phẩm.
- **User** (end user) là tập con của customer — những người **thực sự vận hành** sản phẩm.
  - **Direct user** trực tiếp thao tác với sản phẩm.
  - **Indirect user** nhận đầu ra mà không chạm vào hệ thống, ví dụ quản lý kho nhận báo cáo tự động qua email.

Không phải stakeholder nào cũng là customer: bộ phận pháp chế, kiểm toán tuân thủ, nhà cung cấp, nhà thầu, nhà đầu tư đều là stakeholder nhưng không hưởng lợi trực tiếp từ sản phẩm.

**Ai cung cấp cấp yêu cầu nào:**

| Nguồn | Cung cấp |
|-------|----------|
| Nhà tài trợ / quản lý cấp cao | Business requirement |
| Người thực sự dùng sản phẩm | User requirement |
| Marketing / product manager (khi không tiếp cận được user) | Customer surrogate cho user requirement |

> **Bẫy:** Khách hàng cấp cao thường tin rằng họ nói thay được cho người dùng thật. Họ thường ở quá xa công việc hằng ngày để làm điều đó chính xác. Nếu có khoảng cách lớn giữa bên trả tiền và bên sử dụng, rắc rối là điều chắc chắn.

### Bỏ sót một nhóm stakeholder

Một dự án gần xong phần khai thác yêu cầu thì BA hỏi: *"Anh chắc các bước tính thuế trong luồng này đúng chứ?"* Câu trả lời: *"Ồ tôi không biết. Cái đó thuộc phòng thuế."* Suốt nhiều tháng, chưa ai nói chuyện với phòng thuế — cả đội thậm chí không biết phòng thuế tồn tại. Khi cuối cùng gặp họ, một danh sách dài yêu cầu bị bỏ sót xuất hiện, và dự án trễ vài tháng.

**Bài học:** dùng **sơ đồ tổ chức** để rà soát mọi bộ phận bị ảnh hưởng bởi hệ thống mới.

---

## 3. Quan hệ đối tác khách hàng – nhà phát triển

Sản phẩm xuất sắc là kết quả của thiết kế tốt, dựa trên yêu cầu xuất sắc. Yêu cầu xuất sắc là kết quả của **sự cộng tác hiệu quả** giữa nhà phát triển và khách hàng — một **quan hệ đối tác**, không phải quan hệ mua bán một chiều.

Cộng tác chỉ hoạt động khi mọi bên biết **mình cần gì để thành công**, đồng thời **hiểu và tôn trọng** điều mà bên kia cần để thành công. Khi áp lực dự án tăng, người ta dễ quên rằng tất cả đều chung một mục tiêu: tạo ra sản phẩm mang lại giá trị kinh doanh thoả đáng cho mọi bên.

**Business analyst thường là người phải kiến tạo quan hệ đối tác này.**

Để làm cho quan hệ đó cụ thể chứ không chỉ là khẩu hiệu, Wiegers đề xuất hai danh sách đối xứng: **Bill of Rights** (10 quyền của khách hàng) và **Bill of Responsibilities** (10 trách nhiệm của khách hàng). Mặt trái của một quyền luôn là một trách nhiệm.

> Đầu dự án, hãy để các stakeholder chính cùng đọc hai danh sách này và **thương lượng để thống nhất**. Ghi lại cách các bên sẽ làm việc với nhau. Điều này giảm ma sát về sau, khi một bên kỳ vọng thứ mà bên kia không sẵn sàng cung cấp.

---

## 4. Requirements Bill of Rights — 10 quyền của khách hàng

Khách hàng có quyền:

1. **Kỳ vọng BA nói ngôn ngữ của bạn.** Thảo luận yêu cầu phải xoay quanh nhu cầu và tác vụ nghiệp vụ, dùng từ vựng nghiệp vụ. Bạn không phải lội qua thuật ngữ kỹ thuật.
2. **Kỳ vọng BA tìm hiểu nghiệp vụ và mục tiêu của bạn.** Mời BA và lập trình viên quan sát công việc thực tế; nếu hệ thống mới thay thế hệ thống cũ, hãy để họ dùng thử hệ thống cũ như bạn dùng.
3. **Kỳ vọng BA ghi lại yêu cầu ở dạng phù hợp.** BA phân loại thông tin thành user requirement, business rule, functional requirement, mục tiêu chất lượng, rồi lưu chúng ở dạng dễ hiểu với bạn.
4. **Được giải thích về các thực hành và sản phẩm bàn giao.** Nếu BA vẽ sơ đồ, họ phải giải thích mục đích, ký hiệu và cách soi lỗi trên sơ đồ đó.
5. **Được thay đổi yêu cầu.** Không thực tế khi kỳ vọng bạn nghĩ ra hết mọi thứ ngay từ đầu. Nhưng **thay đổi luôn có giá** — đôi khi phải đánh đổi với chức năng khác hoặc với lịch và ngân sách.
6. **Kỳ vọng một môi trường tôn trọng lẫn nhau.** Cả hai phía cùng ở một bên chiến tuyến.
7. **Được nghe ý tưởng và phương án thay thế.** BA giỏi đề xuất cải tiến quy trình nghiệp vụ và cả những năng lực bạn chưa từng nghĩ tới — thay vì chỉ *"lát đường cho lối mòn cũ"*.
8. **Được mô tả các đặc tính làm sản phẩm dễ dùng.** Đừng chỉ nói *user-friendly* hay *robust*; hãy chỉ ra cụ thể điều gì trong hệ thống hiện tại khiến bạn thấy dễ dùng và điều gì thì không.
9. **Được nghe về cách điều chỉnh yêu cầu để tăng tốc nhờ tái sử dụng.** BA có thể biết một thành phần sẵn có gần khớp nhu cầu của bạn; điều chỉnh nhỏ có thể tiết kiệm rất nhiều thời gian và tiền.
10. **Được nhận hệ thống đáp ứng nhu cầu chức năng và kỳ vọng chất lượng.** Đây là quyền tối thượng — nhưng nó chỉ xảy ra nếu bạn nói rõ **mọi giả định và kỳ vọng** của mình.

---

## 5. Requirements Bill of Responsibilities — 10 trách nhiệm của khách hàng

Khách hàng có trách nhiệm:

1. **Đào tạo BA và lập trình viên về nghiệp vụ của bạn.** Mục tiêu không phải biến BA thành chuyên gia nghiệp vụ, mà giúp họ hiểu vấn đề và mục tiêu của bạn.
2. **Dành thời gian cần thiết để cung cấp và làm rõ yêu cầu.** Vài giờ tập trung hiệu quả hơn nhiều so với thời gian vụn vặt rải rác nhiều tuần.
3. **Cụ thể và chính xác khi cung cấp thông tin.** Để yêu cầu mơ hồ thì rồi cũng có người phải quyết — và bạn là người phù hợp nhất, thay vì để lập trình viên đoán.
4. **Ra quyết định kịp thời khi được hỏi.** Lập trình viên thường không thể tiến tiếp cho tới khi có câu trả lời.
5. **Tôn trọng đánh giá của lập trình viên về chi phí và tính khả thi.** Một số yêu cầu bất khả thi về kỹ thuật hoặc đắt bất ngờ. Đôi khi chỉ cần viết lại yêu cầu là nó trở nên khả thi — ví dụ *"ngay lập tức"* đổi thành *"trong vòng 50 mili-giây"*.
6. **Đặt độ ưu tiên thực tế, cùng với lập trình viên.** Tuyên bố **mọi** yêu cầu đều ưu tiên cao là không thực tế và không mang tính hợp tác.
7. **Review yêu cầu và đánh giá prototype.** Yêu cầu nên được đưa cho bạn xem theo từng phần nhỏ trong suốt quá trình, chứ không phải một tập dày cộp ném lên bàn khi đã *"xong"*.
8. **Thiết lập acceptance criteria.** Bạn định nghĩa điều kiện để sản phẩm được coi là chấp nhận được. Tester biết một yêu cầu có được hiện thực đúng không, nhưng không phải lúc nào cũng biết kết quả nào là **chấp nhận được với bạn**.
9. **Thông báo thay đổi yêu cầu kịp thời.** Thay đổi càng đến muộn, tác động càng lớn. Hãy đi qua quy trình change control để không mất dấu và để tác động được phân tích.
10. **Tôn trọng quy trình phát triển yêu cầu.** Cứ hỏi vì sao BA cần thông tin đó — nhưng hãy tin rằng có lý do đằng sau cách tiếp cận của họ.

---

## 6. Xây dựng văn hoá tôn trọng yêu cầu

Bạn sẽ gặp kháng cự. Có người cho rằng yêu cầu là thủ tục quan liêu; có người từng khổ sở vì một tài liệu yêu cầu đồ sộ, thiếu sót và rốt cuộc bị bỏ xó.

Hiểu **vì sao** họ kháng cự là bước đầu tiên để xử lý:

- Họ **chưa từng trải nghiệm** thực hành yêu cầu tốt.
- Họ từng chịu **một triển khai tồi** của thực hành yêu cầu.
- Họ **không nhận ra cái giá** đã trả cho lối làm việc tuỳ hứng trước đây — vì rework bị chôn trong công việc hằng ngày nên không ai gọi tên nó là lãng phí.

Chiến lược hiệu quả:

- Chỉ ra **nỗi đau cụ thể** mà tổ chức đã hứng chịu vì vấn đề yêu cầu, quy ra đơn vị có ý nghĩa với người nghe: tiền, thời gian, khách hàng bỏ đi, cơ hội kinh doanh đã mất.
- Cho **lập trình viên review yêu cầu khi chúng đang hình thành**. Họ biết trước điều gì sắp tới, chỉ ra chỗ cần rõ hơn, đề xuất cách làm rẻ hơn, và phát hiện yêu cầu thiếu như xử lý ngoại lệ.
- Mời **QA và tester tham gia sớm**. Họ có mắt tinh và sẽ tìm ra mơ hồ, xung đột trong lúc dựng test case.
- Nhắc rằng lãnh đạo cần coi năng lực phân tích nghiệp vụ là **năng lực cốt lõi chiến lược**, nếu không cải tiến sẽ tan biến sau khi dự án kết thúc hoặc sau một đợt tái cơ cấu.

---

## 7. Xác định người ra quyết định

Một dự án phần mềm có hàng trăm quyết định, và nhiều quyết định nằm trên đường găng. Ngay từ đầu, hãy xác định **ai là người ra quyết định về yêu cầu** và **họ ra quyết định bằng cách nào**.

Thường có một người ra quyết định chính, hay là nhà tài trợ chính. Một nhóm nhỏ đại diện cho quản lý, khách hàng, phân tích nghiệp vụ, phát triển và marketing thường hoạt động tốt nhất.

Nhóm này cần chọn một **decision rule** — quy tắc quyết định:

- Người dẫn dắt tự quyết, có hoặc không thảo luận trước.
- Bỏ phiếu, đa số thắng.
- Bỏ phiếu, phải **nhất trí tuyệt đối**.
- Thảo luận và thương lượng tới **đồng thuận** (ai cũng chấp nhận được và cam kết ủng hộ).
- Người dẫn dắt **uỷ quyền** cho một cá nhân.
- Nhóm quyết định nhưng một cá nhân có **quyền phủ quyết**.

Không có decision rule nào đúng cho mọi tình huống. Hãy đặt hướng dẫn để biết khi nào bỏ phiếu, khi nào tìm đồng thuận, khi nào uỷ quyền — và **chọn trước khi gặp quyết định lớn đầu tiên**.

---

## 8. Đạt thoả thuận: sign-off và requirements baseline

Thoả thuận về yêu cầu là cốt lõi của quan hệ đối tác. Nhiều bên cùng tham gia:

- **Khách hàng** đồng ý rằng yêu cầu đáp ứng nhu cầu của họ.
- **Lập trình viên** đồng ý rằng họ hiểu yêu cầu và chúng khả thi.
- **Tester** đồng ý rằng yêu cầu **kiểm chứng được**.
- **Quản lý** đồng ý rằng yêu cầu sẽ đạt được business objective.

Nhiều tổ chức dùng nghi thức **sign-off**. Nghi thức này nguy hiểm nếu các bên hiểu khác nhau về ý nghĩa của nó:

- Khách hàng ký cho xong: *"Tôi ký để lập trình viên bắt đầu code"* — rồi sau này ngạc nhiên với sản phẩm và nói *"tôi có đọc hết đâu, tôi tin các anh mà!"*
- Quản lý phát triển coi sign-off là cách **đóng băng** yêu cầu: *"Anh đã ký rồi, giờ chúng tôi chỉ làm đúng thế thôi."*

Cả hai thái độ đều phủ nhận thực tế: không thể biết hết yêu cầu từ sớm, và yêu cầu chắc chắn sẽ thay đổi.

**Điều quan trọng hơn nghi thức ký là khái niệm requirements baseline** — ảnh chụp tại một thời điểm của tập yêu cầu đã được review và đồng thuận, làm nền cho công việc tiếp theo. Ý nghĩa thực sự của chữ ký nên là:

> *Tôi đồng ý rằng tập yêu cầu này thể hiện hiểu biết tốt nhất hiện có của chúng ta cho phần tiếp theo của dự án, và giải pháp mô tả ở đây sẽ đáp ứng nhu cầu như chúng ta hiểu hôm nay. Tôi đồng ý mọi thay đổi sau này sẽ đi qua quy trình change control đã định. Tôi hiểu rằng thay đổi có thể buộc chúng ta thương lượng lại chi phí, nguồn lực và lịch trình.*

Nhiều tổ chức in đúng đoạn văn này ngay trên trang chữ ký.

> **Quan trọng:** Đừng dùng sign-off như một **vũ khí**. Hãy coi nó là một cột mốc, với hiểu biết chung, rõ ràng về những hoạt động dẫn tới nó và hệ quả của nó đối với thay đổi trong tương lai.

---

## 9. Khi không đạt được thoả thuận

Có lúc bạn không lấy được chữ ký từ mọi stakeholder liên quan: lịch bận, khoảng cách địa lý, hoặc có người ngại cam kết vì sợ bị quy trách nhiệm sau này. Nếu stakeholder sợ rằng ký xong sẽ không được thay đổi nữa, họ sẽ trì hoãn — và dự án rơi vào bẫy **analysis paralysis**.

Nhiều đội gửi email kiểu *"nếu đến thứ Sáu không phản hồi, tôi coi như anh đồng ý"*. Đó là một lựa chọn, nhưng thực chất là **không đạt thoả thuận**, và nó còn làm sứt mẻ quan hệ với chính người bạn vừa mặc định đồng ý.

Cách tốt hơn:

- Tìm hiểu **vì sao** họ chưa thoải mái ký và xử lý trực tiếp nguyên nhân đó.
- **Tiến lên một cách thận trọng** với giả định rằng bạn **chưa** có phê duyệt từ những người đó.
- Ghi việc thiếu phê duyệt vào **danh sách rủi ro**, kèm tác động nếu yêu cầu bị thiếu hoặc sai.
- Theo dõi họ như một phần của quản lý rủi ro, và thông báo tích cực rằng dự án vẫn tiến với baseline hiện tại, đồng thời có sẵn quy trình để họ đề xuất thay đổi.

---

## 10. Thoả thuận yêu cầu trong dự án agile

Dự án agile **không** có nghi thức sign-off chính thức. Yêu cầu tồn tại dưới dạng **user story trong product backlog**. Product owner và đội thống nhất trong buổi lập kế hoạch xem story nào vào iteration kế tiếp, dựa trên **độ ưu tiên** và **velocity** của đội. Sau khi chốt, các story trong iteration được **đóng băng**; đề xuất mới được cân nhắc cho iteration sau.

Agile không cố gắng đạt phê duyệt cho **toàn bộ** phạm vi ngay từ đầu — tuy nhiên **vision và các business requirement khác vẫn phải được thiết lập từ đầu**.

Một khách hàng từng yêu cầu sign-off dù đang chạy agile. Đội xử lý sáng tạo: họ đề nghị người dùng ký xác nhận rằng **tại thời điểm đó**, theo hiểu biết của họ, không có yêu cầu lớn nào bị thiếu và không có vấn đề lớn nào trong những gì đã ghi. Cách này giữ được tinh thần agile: không ai bị dồn vào chân tường vì một tài liệu dày mà họ chưa hiểu hết, và người dùng vẫn giữ quyền nhận ra sau này rằng họ cần thứ khác.

Như tư vấn viên Nanette Brown nói:

> Ngay cả trong môi trường agile, khái niệm sign-off vẫn có chức năng hợp lệ. Agile bảo ta *hãy đón nhận thay đổi*, nhưng khái niệm **thay đổi** chỉ tồn tại khi có một **mốc tham chiếu**. Nếu bạn định vị sign-off như một nghi thức nhẹ nhàng ghi nhận rằng *chúng ta đang ở đây*, thì nó hoàn toàn ổn.

Trong agile, **sign-off tối thượng** chính là việc product owner chấp nhận phần mềm chạy được, đã kiểm thử, giao ra từ iteration.

---

## Điểm cốt lõi

- **Expectation gap** là khoảng cách giữa nhu cầu thật của khách hàng và thứ được giao. Thu hẹp nó bằng **nhiều điểm tiếp xúc thường xuyên**, không phải bằng một lần lấy yêu cầu.
- Quan hệ bao hàm: **stakeholder ⊃ customer ⊃ user**. Không phải stakeholder nào cũng là customer.
- **Business requirement** đến từ nhà tài trợ; **user requirement** phải đến từ người **thực sự dùng** sản phẩm.
- **Bill of Rights** và **Bill of Responsibilities** là hai mặt của cùng một quan hệ đối tác — hãy thương lượng và thống nhất chúng từ đầu dự án.
- Quyền số 5 (được thay đổi yêu cầu) luôn đi kèm sự thật: **thay đổi luôn có giá**.
- Trách nhiệm số 6: tuyên bố mọi yêu cầu đều ưu tiên cao là **không thực tế và không hợp tác**.
- Chọn **người ra quyết định** và **decision rule** trước khi gặp quyết định lớn đầu tiên.
- **Requirements baseline** quan trọng hơn nghi thức sign-off; chữ ký phải có ý nghĩa được thống nhất rõ ràng.
- Đừng dùng sign-off như vũ khí để **đóng băng** yêu cầu hay để **đổ lỗi**.
- Không đạt thoả thuận thì ghi vào **risk list** và tiến lên thận trọng, thay vì mặc định coi im lặng là đồng ý.
- Agile không sign-off toàn bộ phạm vi, nhưng **vẫn cần vision** và vẫn đóng băng phạm vi **trong** mỗi iteration.

## Tóm tắt

- Yêu cầu tốt là sản phẩm của **quan hệ đối tác**, không phải của một cuộc bàn giao một chiều.
- Xác định đầy đủ stakeholder — dùng **sơ đồ tổ chức** để không bỏ sót phòng ban nào bị ảnh hưởng.
- Làm cho kỳ vọng hai chiều trở nên tường minh bằng **Bill of Rights** và **Bill of Responsibilities**.
- Kháng cự với quy trình yêu cầu thường bắt nguồn từ **sợ hãi, thiếu hiểu biết hoặc trải nghiệm tồi** — hãy trị bằng dữ liệu về nỗi đau đã có và bằng sự tham gia sớm của developer và tester.
- **Baseline** là mốc tham chiếu để đo thay đổi; sign-off chỉ có giá trị khi mọi người hiểu giống nhau nó nghĩa là gì.
- Khi thiếu phê duyệt, hãy **quản lý nó như một rủi ro** thay vì giả vờ rằng nó không tồn tại.
