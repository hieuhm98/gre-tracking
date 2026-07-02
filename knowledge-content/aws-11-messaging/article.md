# Decoupling – SQS, SNS, Kinesis & Amazon MQ

Tách rời (decoupling) là nguyên tắc cốt lõi trong kiến trúc AWS: thay vì các thành phần gọi trực tiếp nhau, ta chèn một lớp messaging (hàng đợi, pub/sub, streaming) ở giữa. Nhờ đó hệ thống chịu lỗi tốt hơn, mở rộng độc lập và không sập dây chuyền khi một tầng bị quá tải.

## 1. Tổng quan

**Vì sao phải decouple?**

- **Loose coupling (khớp lỏng)**: producer và consumer không cần biết địa chỉ hay trạng thái của nhau, chỉ giao tiếp qua lớp trung gian.
- **Resilience (chịu lỗi)**: nếu consumer chết, message vẫn nằm trong hàng đợi và được xử lý lại khi consumer hồi phục — không mất dữ liệu.
- **Scaling (mở rộng)**: producer và consumer scale độc lập; khi tải tăng, chỉ cần thêm consumer đọc từ hàng đợi.

**4 dịch vụ chính và định vị thi:**

- **SQS** — hàng đợi để decouple, mỗi message được **một** consumer xử lý rồi xóa.
- **SNS** — pub/sub fan-out, **mỗi** subscriber nhận **một bản sao** của message.
- **Kinesis Data Streams** — streaming real-time, cho phép **replay** và **nhiều consumer** đọc cùng dữ liệu.
- **Kinesis Data Firehose** — nạp dữ liệu streaming vào storage (S3/Redshift/OpenSearch/Splunk), **không replay**.
- **Amazon MQ** — message broker được quản lý (ActiveMQ/RabbitMQ) để **migrate** app cũ dùng chuẩn AMQP/MQTT/JMS/STOMP.

## 2. Amazon SQS: Standard vs FIFO

SQS (Simple Queue Service) là hàng đợi message được quản lý hoàn toàn. **Producer** gửi message vào queue, **consumer** poll message ra để xử lý rồi gọi `DeleteMessage`. Message tối đa `256KB`; muốn lớn hơn dùng S3 + **SQS Extended Client Library** (lưu payload trên S3, chỉ để tham chiếu trong message).

| Tiêu chí | Standard Queue | FIFO Queue |
|---|---|---|
| Throughput | Gần như không giới hạn | Đến 300 msg/s (3000 msg/s khi batching) |
| Thứ tự | Best-effort (không đảm bảo) | Đảm bảo đúng thứ tự (FIFO) |
| Delivery | At-least-once (có thể trùng) | Exactly-once processing |
| Trùng lặp | Có thể có bản sao | Deduplication (khử trùng) |
| Tên queue | Tùy ý | Bắt buộc kết thúc `.fifo` |

Chọn **FIFO** khi cần **đúng thứ tự** và **không trùng** (ví dụ giao dịch tài chính, lệnh phải xử lý theo trình tự). Chọn **Standard** khi cần throughput cực cao và thứ tự không quan trọng.

## 3. SQS: các khái niệm quan trọng

- **`visibility timeout`** (mặc định `30s`): khi một consumer nhận message, message bị ẩn khỏi các consumer khác trong khoảng thời gian này. Nếu consumer xử lý xong và gọi `DeleteMessage` kịp thì message biến mất; nếu **không xóa kịp**, message **hiện lại** và có thể bị xử lý lần hai (double processing). Cần tinh chỉnh timeout đủ dài để tránh xử lý trùng.
- **`DLQ` (Dead Letter Queue)**: message xử lý thất bại nhiều lần (vượt `maxReceiveCount`) được chuyển sang một queue riêng để phân tích, tránh làm nghẽn queue chính. Đây là cách xử lý **poison messages**. Có thể dùng **redrive** để đẩy message từ DLQ trở lại queue gốc sau khi sửa lỗi.
- **`long polling` vs `short polling`**: long polling (`ReceiveMessageWaitTimeSeconds` đến `20s`) chờ đến khi có message hoặc hết thời gian, **giảm empty response và chi phí** API. Short polling trả lời ngay kể cả khi queue rỗng, gây nhiều lời gọi lãng phí.
- **Delay queue**: hoãn hiển thị message cho consumer một khoảng (đến 15 phút) sau khi gửi.
- **Message retention**: mặc định 4 ngày, cấu hình đến `14 ngày`.

## 4. SQS + Auto Scaling

SQS kết hợp với Auto Scaling để tự điều chỉnh số lượng consumer theo **độ sâu hàng đợi**. Dùng CloudWatch metric `ApproximateNumberOfMessagesVisible` (số message đang chờ) làm cơ sở cho một scaling policy:

- Khi số message tồn đọng tăng → scale out (thêm EC2 instance/consumer để xử lý nhanh hơn).
- Khi hàng đợi vơi → scale in (giảm instance để tiết kiệm chi phí).

Đây là pattern kinh điển để decouple tầng ứng dụng: web tier đẩy job vào SQS, worker tier (trong Auto Scaling Group) tự co giãn theo tải thực tế.

## 5. Amazon SNS: pub/sub

SNS (Simple Notification Service) là dịch vụ **pub/sub**. Producer publish message vào một **topic**; SNS đẩy (push) message tới **tất cả subscriber** của topic đó. Message tối đa `256KB`.

**Các loại subscriber được hỗ trợ:**

- SQS queue
- AWS Lambda
- HTTP/HTTPS endpoint
- Email / Email-JSON
- SMS (tin nhắn điện thoại)
- Kinesis Data Firehose

**Message filtering**: gán **filter policy** (JSON) cho từng subscription để subscriber chỉ nhận message có thuộc tính khớp — ví dụ chỉ nhận đơn hàng ở "region": "us-east-1". Nhờ đó phân luồng message mà không cần nhiều topic.

**SNS FIFO**: kết hợp với **SQS FIFO** để giữ thứ tự và khử trùng trong mô hình fan-out có yêu cầu ordering.

## 6. Fan-out pattern (SNS → nhiều SQS)

Fan-out là pattern gửi **một** message tới SNS topic, rồi topic đẩy **một bản sao** tới **nhiều** SQS queue subscribe cùng lúc — mỗi queue nhận đủ bản sao của mình.

Ưu điểm:

- Thêm consumer mới chỉ cần tạo thêm SQS queue subscribe vào topic, không sửa producer.
- Mỗi queue có thể có tốc độ xử lý, retention, DLQ riêng.
- Đảm bảo delivery bền vững (message nằm trong SQS chờ xử lý).

**Use case điển hình**: sự kiện S3 (`S3 event`) → SNS topic → nhiều SQS queue (một queue tạo thumbnail, một queue đánh index, một queue ghi log...). Một lần upload ảnh kích hoạt song song nhiều pipeline xử lý độc lập.

## 7. Kinesis Data Streams

Kinesis Data Streams là dịch vụ **streaming real-time** cho dữ liệu lớn, liên tục (clickstream, IoT, log, metric).

- **Shard**: đơn vị throughput; stream gồm nhiều shard, mỗi shard có giới hạn ghi/đọc riêng. Tăng shard để tăng throughput.
- **Ordering**: đảm bảo thứ tự **theo từng `partition key`** (các record cùng partition key vào cùng shard, giữ thứ tự).
- **Retention**: mặc định `1 ngày`, cấu hình đến `365 ngày` — cho phép **replay** dữ liệu.
- **Nhiều consumer**: nhiều ứng dụng có thể đọc **cùng** dữ liệu độc lập (khác với SQS — message bị một consumer tiêu thụ).
- **Replay**: consumer có thể đọc lại dữ liệu cũ trong khoảng retention.
- **Capacity mode**: **Provisioned** (tự khai báo số shard, kiểm soát chi phí) hoặc **On-demand** (tự động scale theo tải).

## 8. Kinesis Data Firehose

Firehose là dịch vụ **near-real-time** (đệm theo buffer), **fully managed**, dùng để **nạp dữ liệu streaming vào nơi lưu trữ**.

- Đích đến: **S3, Redshift, OpenSearch, Splunk** (và một số đích HTTP của bên thứ ba).
- Có thể **transform** dữ liệu bằng **Lambda** trước khi ghi (đổi định dạng, làm giàu).
- **Không có shard**, không cần quản lý capacity — hoàn toàn tự động.
- **Không replay**: dữ liệu chỉ được đẩy tới đích rồi thôi, không giữ lại để đọc lại.
- Đệm theo kích thước hoặc thời gian (buffer size/interval) nên có độ trễ nhẹ (near-real-time).

## 9. Kinesis Data Streams vs Firehose

| Tiêu chí | Kinesis Data Streams | Kinesis Data Firehose |
|---|---|---|
| Độ trễ | Real-time (~200ms) | Near-real-time (buffer) |
| Quản lý | Tự quản shard | Fully managed, không shard |
| Replay | Có (đến 365 ngày) | Không |
| Nhiều consumer | Có | Không (chỉ đẩy tới đích) |
| Đích đến | Tùy consumer tự xử lý | S3 / Redshift / OpenSearch / Splunk |
| Transform | Do consumer tự làm | Lambda tích hợp sẵn |
| Use case | Xử lý stream, phân tích real-time | Nạp stream vào storage/DW |

Nhớ nhanh: cần **replay / nhiều consumer / xử lý real-time** → **Data Streams**; cần **đưa dữ liệu streaming vào S3/Redshift** một cách đơn giản, không cần đọc lại → **Firehose**.

## 10. Amazon MQ

Amazon MQ là **message broker được quản lý** cho **ActiveMQ** và **RabbitMQ**. Nó nói các giao thức chuẩn công nghiệp: **AMQP, MQTT, STOMP, JMS, OpenWire, WebSocket**.

- **Dành cho lift-and-shift**: khi migrate ứng dụng on-premises đang dùng các giao thức messaging chuẩn lên AWS mà **không muốn viết lại code** để dùng API của SQS/SNS.
- **Không phải cho app cloud-native mới**: nếu xây mới trên AWS, nên chọn **SQS/SNS** (scale tốt hơn, serverless, không quản lý broker).
- Chạy trên broker instance (có thể multi-AZ để HA), nên cần quản lý dung lượng hơn so với SQS/SNS serverless.

## 11. So sánh SQS vs SNS vs Kinesis vs MQ

| Tiêu chí | SQS | SNS | Kinesis Data Streams | Amazon MQ |
|---|---|---|---|---|
| Mô hình | Queue (point-to-point) | Pub/sub (fan-out) | Streaming | Broker (chuẩn giao thức) |
| Ai nhận message | Một consumer/message | Mỗi subscriber một bản sao | Nhiều consumer đọc cùng data | Theo cấu hình broker |
| Replay | Không | Không | Có (retention đến 365 ngày) | Không (theo broker) |
| Thứ tự | FIFO queue | SNS FIFO | Theo partition key | Theo broker |
| Use case chính | Decouple, buffer job | Thông báo, fan-out | Real-time analytics, streaming | Migrate app AMQP/MQTT cũ |
| Serverless | Có | Có | Có (managed) | Không (broker instance) |

## Điểm thi quan trọng

- **SQS = queue/decouple**, mỗi message **một** consumer xử lý rồi xóa; **SNS = pub/sub fan-out**, **mỗi** subscriber nhận **một bản sao**.
- **Kinesis Data Streams** = real-time + **replay** + **nhiều consumer** đọc cùng data; **Firehose** = nạp streaming vào **S3/Redshift/OpenSearch/Splunk**, **không replay**, **không shard**.
- **FIFO queue** (tên kết thúc `.fifo`) khi cần **đúng thứ tự** + **exactly-once/dedup**; Standard cho throughput cao, best-effort ordering.
- **`visibility timeout`**: nếu không `DeleteMessage` kịp, message hiện lại → **xử lý trùng**; tinh chỉnh để tránh double processing.
- **`DLQ`** để cô lập **poison messages** (thất bại nhiều lần); **redrive** đẩy lại sau khi sửa.
- **`long polling`** (`ReceiveMessageWaitTimeSeconds` đến `20s`) giảm empty receive và chi phí so với short polling.
- **Fan-out**: SNS → nhiều SQS queue, mỗi queue nhận một bản sao (kinh điển: S3 event → SNS → nhiều SQS).
- **SNS message filtering** (filter policy) để mỗi subscriber chỉ nhận message khớp thuộc tính.
- **Auto Scaling** consumer theo `ApproximateNumberOfMessagesVisible` (độ sâu hàng đợi).
- **Amazon MQ** để **migrate** app cũ dùng **AMQP/MQTT/JMS/STOMP**; app cloud-native mới dùng SQS/SNS.
- Message **> `256KB`** → dùng **S3 + SQS Extended Client**.

## Tóm tắt

- Decouple để có loose coupling, resilience và scaling độc lập giữa producer và consumer.
- SQS là hàng đợi (một consumer/message); Standard = throughput cao best-effort, FIFO = đúng thứ tự + dedup, tên phải kết thúc `.fifo`.
- Nắm chắc `visibility timeout` (tránh xử lý trùng), `DLQ` (poison message), `long polling` (giảm chi phí) và Auto Scaling theo độ sâu hàng đợi.
- SNS là pub/sub fan-out với message filtering; kết hợp SNS → nhiều SQS là pattern fan-out kinh điển (S3 event).
- Kinesis Data Streams cho real-time + replay + nhiều consumer; Firehose nạp streaming vào storage, không replay, không shard.
- Amazon MQ chỉ dùng khi migrate app cũ theo chuẩn AMQP/MQTT/JMS; hệ thống mới trên AWS ưu tiên SQS/SNS.
