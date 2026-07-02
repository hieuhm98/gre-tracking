# AWS Serverless – Lambda, DynamoDB & API Gateway

## 1. Tổng quan

**Serverless** không có nghĩa là "không có server", mà là bạn **không phải quản lý server**. AWS lo việc cấp phát, vá lỗi, mở rộng (scaling) và tính sẵn sàng; bạn chỉ tập trung viết code và định nghĩa dữ liệu. Bạn **trả tiền theo mức sử dụng thực tế** (số lần gọi, dung lượng, thời gian chạy), không phải trả cho máy chủ chạy 24/7.

Bộ ba cốt lõi của serverless trên AWS:

- `AWS Lambda` – tính toán chạy theo sự kiện (event-driven compute).
- `Amazon DynamoDB` – cơ sở dữ liệu NoSQL serverless, độ trễ mili-giây.
- `Amazon API Gateway` – cửa ngõ (front door) cho REST/HTTP/WebSocket API.

**Vì sao quan trọng với kỳ thi SAA-C03:** đây là mẫu kiến trúc "well-architected" được ưa chuộng cho ứng dụng co giãn, chi phí thấp, không cần quản lý hạ tầng. Đề thi thường hỏi khi nào chọn serverless thay vì `EC2`, và cách ghép các dịch vụ này lại với nhau.

## 2. AWS Lambda

`Lambda` chạy code của bạn để phản hồi một **sự kiện** (event) mà không cần bạn cấp phát server. Bạn nạp code dạng function; Lambda tự động mở rộng theo số lượng sự kiện đến.

**Giới hạn và đặc điểm chính (nhớ cho thi):**

- **Thời gian chạy tối đa: 15 phút** cho mỗi lần gọi. Tác vụ dài hơn phải chuyển sang `Step Functions`, `ECS`/`Fargate`, hay `EC2`.
- **Bộ nhớ: 128 MB – 10 GB.** CPU được cấp tỉ lệ theo bộ nhớ (tăng RAM = tăng CPU).
- **Ngôn ngữ:** Node.js, Python, Java, Go, Ruby, .NET; hoặc custom runtime qua container image / Lambda.
- **Kích hoạt (triggers):** `API Gateway`, `S3`, `DynamoDB Streams`, `SQS`, `SNS`, `EventBridge`, `Kinesis`, `ALB`...
- **`/tmp`:** bộ nhớ tạm cục bộ, mặc định 512 MB, cấu hình được tới 10 GB. Dữ liệu **không bền vững** giữa các lần gọi.
- **Biến môi trường (env vars):** cấu hình cho function; có thể mã hóa bằng `KMS`.
- **Layers:** đóng gói thư viện/dependency dùng chung để tái sử dụng giữa nhiều function, giảm kích thước gói triển khai.
- **Concurrency:** số lần gọi đồng thời. `Reserved concurrency` giới hạn/đảm bảo dung lượng cho một function; `Provisioned concurrency` giữ sẵn instance đã khởi tạo để **loại bỏ cold start**.
- **Giá:** trả theo **số lần gọi + thời gian chạy × bộ nhớ** (GB-giây). Không dùng thì không tốn tiền.

## 3. Amazon DynamoDB

`DynamoDB` là cơ sở dữ liệu **NoSQL key-value và document**, fully managed và serverless, với độ trễ **single-digit millisecond** ở quy mô bất kỳ.

**Khóa chính (primary key):**

- **Partition key** (khóa phân vùng): quyết định phân vùng vật lý lưu item. Chọn khóa có độ phân tán cao để tránh "hot partition".
- **Partition key + Sort key** (khóa tổng hợp): cho phép nhiều item cùng partition, sắp xếp và truy vấn theo range trên sort key.

**Chế độ dung lượng (capacity modes):**

| Tiêu chí | Provisioned (RCU/WCU) | On-Demand |
|---|---|---|
| Cấu hình | Định trước RCU/WCU, có auto-scaling | Không cần cấu hình |
| Giá | Rẻ hơn khi lưu lượng ổn định/dự đoán được | Trả theo request thực tế |
| Phù hợp | Workload đều, biết trước | Lưu lượng bất định, đột biến (spiky) |
| Rủi ro | Bị throttle nếu vượt capacity | Chi phí cao hơn khi tải cao liên tục |

Ghi nhớ: **1 RCU** = 1 strongly-consistent read/giây item tới 4 KB (hoặc 2 eventually-consistent). **1 WCU** = 1 ghi/giây item tới 1 KB.

**Chỉ mục phụ (secondary indexes) – LSI vs GSI:**

| Tiêu chí | LSI (Local) | GSI (Global) |
|---|---|---|
| Partition key | Giống bảng gốc | Có thể khác |
| Sort key | Khác | Có thể khác |
| Thời điểm tạo | Chỉ khi tạo bảng | Bất kỳ lúc nào |
| Capacity | Dùng chung với bảng | RCU/WCU riêng |
| Tính nhất quán | Hỗ trợ strong consistency | Chỉ eventually consistent |

**Tính năng quan trọng khác:**

- **DAX (DynamoDB Accelerator):** cache in-memory cho DynamoDB, đưa độ trễ đọc từ mili-giây xuống **micro-giây**. Dùng cho workload đọc nhiều, lặp lại.
- **DynamoDB Streams:** ghi lại thay đổi (insert/update/delete) theo thứ tự thời gian; thường kích hoạt `Lambda` để xử lý theo sự kiện.
- **Global Tables:** bản sao **multi-region, active-active**, đồng bộ tự động; dùng cho ứng dụng toàn cầu, độ trễ thấp và khả chịu lỗi vùng.
- **TTL (Time To Live):** tự động xóa item hết hạn dựa trên timestamp — miễn phí, dùng dọn dữ liệu cũ (session, log).
- **Backups:** `PITR` (Point-In-Time Recovery) khôi phục tới bất kỳ giây nào trong 35 ngày; và on-demand backup thủ công.

## 4. Amazon API Gateway

`API Gateway` là **cửa ngõ được quản lý** cho các API, thường đặt trước `Lambda` để tạo backend serverless. Nó lo xác thực, throttling, caching, phiên bản (stages) và giám sát.

**So sánh REST API vs HTTP API vs WebSocket API:**

| Tiêu chí | REST API | HTTP API | WebSocket API |
|---|---|---|---|
| Chi phí | Cao hơn | Rẻ hơn (~70%) | Theo kết nối/tin nhắn |
| Tính năng | Đầy đủ (API keys, WAF, caching) | Tối giản, độ trễ thấp | Hai chiều, real-time |
| Authorizer | IAM, Cognito, Lambda | JWT, Lambda | Lambda |
| Dùng cho | API doanh nghiệp cần đủ tính năng | API đơn giản, nhanh, rẻ | Chat, streaming, notification |

**Khái niệm cần nhớ:**

- **Throttling:** giới hạn tốc độ request (rate + burst) để bảo vệ backend; vượt ngưỡng trả về `429 Too Many Requests`.
- **Caching:** cache phản hồi ở tầng stage để giảm tải backend và độ trễ (chỉ REST API).
- **Stages:** môi trường triển khai riêng (ví dụ `dev`, `prod`) với cấu hình khác nhau.
- **Authorizers:** kiểm soát truy cập — `IAM`, `Cognito user pools`, hoặc `Lambda authorizer` (custom logic, ví dụ kiểm tra token bên thứ ba).

## 5. Mẫu kiến trúc sự kiện: S3 → Lambda

Một mẫu serverless kinh điển: khi có file được upload lên `S3`, một **sự kiện S3** kích hoạt `Lambda` để xử lý.

Luồng ví dụ (xử lý ảnh):

1. Người dùng upload ảnh lên **S3 bucket**.
2. Sự kiện `s3:ObjectCreated:*` kích hoạt một **Lambda function**.
3. Lambda tạo thumbnail, ghi metadata vào **DynamoDB**.
4. Có thể phát thông báo qua `SNS`/`SES`.

Ưu điểm: **không có server để quản lý**, tự mở rộng theo lượng upload, chỉ trả tiền khi có file thật sự được xử lý. Đây là ví dụ điển hình của kiến trúc **event-driven** trong đề thi.

## Điểm thi quan trọng

- `Lambda` chạy **tối đa 15 phút**/lần gọi; tác vụ dài hơn → `Step Functions`, `Fargate`, hoặc `EC2`.
- Bộ nhớ Lambda **128 MB–10 GB**; tăng RAM cũng tăng CPU. `/tmp` mặc định 512 MB (tối đa 10 GB), không bền vững.
- `Provisioned concurrency` để **loại bỏ cold start**; `Reserved concurrency` để giới hạn/đảm bảo dung lượng.
- DynamoDB **On-Demand** cho lưu lượng bất định/đột biến; **Provisioned (RCU/WCU)** rẻ hơn khi tải ổn định, dự đoán được.
- **GSI** partition key có thể khác bảng, tạo bất kỳ lúc nào, chỉ eventually consistent; **LSI** cùng partition key, chỉ tạo lúc tạo bảng, hỗ trợ strong consistency.
- **DAX** cho độ trễ đọc **micro-giây** (không phải ElastiCache khi câu hỏi nói rõ DynamoDB).
- **DynamoDB Streams** → kích hoạt `Lambda`; **Global Tables** cho multi-region active-active; **TTL** tự xóa item hết hạn.
- API Gateway: **HTTP API** rẻ & nhanh cho backend Lambda đơn giản; **REST API** khi cần caching/API keys/WAF; **WebSocket** cho real-time hai chiều.
- `Cognito` và `Lambda authorizer` là cách xác thực phổ biến ở API Gateway; throttling trả `429`.
- Mẫu **S3 → Lambda** là kiến trúc event-driven kinh điển, không cần server.

## Tóm tắt

- Serverless = không quản lý server, tự co giãn, trả theo mức dùng — nền tảng gồm `Lambda`, `DynamoDB`, `API Gateway`.
- `Lambda`: event-driven, tối đa 15 phút, 128 MB–10 GB, có layers, env vars, concurrency và cold start cần lưu ý.
- `DynamoDB`: NoSQL độ trễ mili-giây; chọn capacity mode đúng, dùng GSI/LSI, DAX, Streams, Global Tables, TTL và PITR hợp lý.
- `API Gateway`: chọn REST / HTTP / WebSocket theo nhu cầu; quản lý throttling, caching, stages, authorizers.
- Ghép chúng lại tạo backend co giãn, rẻ, không hạ tầng — ví dụ điển hình là mẫu **S3 → Lambda → DynamoDB**.
