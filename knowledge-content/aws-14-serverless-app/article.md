# AWS Serverless App – Cognito, Step Functions & SAM

## 1. Tổng quan

Một **ứng dụng serverless** trên AWS được ghép từ nhiều dịch vụ managed, không cần quản lý server: `Lambda` chạy code theo sự kiện, `API Gateway` làm cửa ngõ REST/HTTP, `DynamoDB` lưu dữ liệu, `S3` lưu file, `Cognito` xử lý đăng nhập, `Step Functions` điều phối các bước xử lý, và `SNS`/`SQS`/`EventBridge` giúp tách rời (decouple) các thành phần.

Trong kỳ thi **SAA-C03**, chủ đề này thường xuất hiện dưới dạng câu hỏi kiến trúc: "Chọn dịch vụ phù hợp nhất để...". Ba điểm bị nhầm lẫn nhiều nhất và cần nắm chắc:

- **Cognito User Pool** (đăng nhập cho người dùng app) **≠ Identity Pool** (cấp AWS credentials tạm thời).
- **Step Functions** dùng để **điều phối (orchestration)** nhiều bước, không phải để chạy logic thay Lambda.
- Kiến trúc **event-driven / decoupling** dùng `SQS`, `SNS`, `EventBridge` để các dịch vụ không phụ thuộc trực tiếp lẫn nhau.

## 2. Amazon Cognito – Xác thực và danh tính

`Amazon Cognito` cung cấp xác thực (authentication) và quản lý danh tính cho web/mobile app. Cognito có **hai thành phần tách biệt**, thường bị hỏi để phân biệt:

- **User Pools**: là **thư mục người dùng (user directory)** và cơ chế **đăng nhập (sign-in)**. Người dùng đăng ký/đăng nhập bằng username-password hoặc qua social/enterprise IdP (Google, Facebook, Apple, SAML, OIDC). User Pool phát ra **JWT token** (ID token, access token) để bảo vệ API — ví dụ dùng làm **Cognito authorizer** cho `API Gateway`. Hỗ trợ MFA, xác minh email/SĐT, quên mật khẩu.
- **Identity Pools (Federated Identities)**: đổi một token danh tính (từ User Pool hoặc IdP bên ngoài) lấy **AWS credentials tạm thời** (qua `STS`) để app **gọi trực tiếp dịch vụ AWS** như `S3`, `DynamoDB`. Điều khiển quyền bằng **IAM roles** (authenticated / unauthenticated/guest).

Quy tắc nhớ nhanh: **User Pool = "ai được đăng nhập"**; **Identity Pool = "được truy cập tài nguyên AWS nào"**. Hai cái thường dùng chung: User Pool xác thực người dùng, rồi Identity Pool cấp credentials để truy cập AWS.

| Tiêu chí | Cognito User Pool | Cognito Identity Pool |
|---|---|---|
| Mục đích | Đăng nhập / user directory | Cấp AWS credentials tạm thời |
| Kết quả trả về | JWT token (ID/access) | AWS credentials (qua `STS`) |
| Dùng để | Bảo vệ API (authorizer), quản lý user | Truy cập trực tiếp `S3`, `DynamoDB`... |
| Kiểm soát quyền | Groups, scopes trên token | IAM roles (auth / guest) |
| Federation | Social + SAML/OIDC làm IdP đăng nhập | Đổi token IdP lấy credentials AWS |

## 3. AWS Step Functions – Điều phối workflow

`AWS Step Functions` điều phối nhiều bước thành một **workflow (state machine)** được định nghĩa bằng JSON (Amazon States Language). Nó quản lý trạng thái, thứ tự, retry, error handling và rẽ nhánh — thay vì viết logic điều phối phức tạp bên trong Lambda.

Các loại state hay dùng: `Task` (gọi Lambda hoặc dịch vụ AWS khác), `Choice` (rẽ nhánh), `Parallel` (chạy song song), `Map` (lặp trên danh sách), `Wait`, `Retry`/`Catch`. Có sẵn tích hợp trực tiếp với nhiều dịch vụ AWS, và **giao diện trực quan** để theo dõi từng bước — rất hữu ích để audit và debug.

Step Functions có **hai loại workflow**:

| Tiêu chí | Standard Workflow | Express Workflow |
|---|---|---|
| Thời gian chạy tối đa | Tới **1 năm** | Tới **5 phút** |
| Mô hình thực thi | Exactly-once | At-least-once (async) / at-most-once (sync) |
| Tần suất | Thấp/vừa (đến ~2.000 khởi tạo/giây) | Rất cao (hàng trăm nghìn/giây) |
| Tính giá | Theo số **state transition** | Theo số lần chạy + thời lượng + bộ nhớ |
| Lịch sử thực thi | Lưu và xem trong console | Ghi qua `CloudWatch Logs` |
| Phù hợp | Quy trình dài, cần audit (duyệt đơn, ETL, orchestration nghiệp vụ) | Sự kiện lượng lớn, ngắn (xử lý streaming/IoT, backend API tốc độ cao) |

Ghi nhớ: workflow **chạy lâu, cần đảm bảo exactly-once và lịch sử → Standard**; workflow **lượng lớn, ngắn, ưu tiên throughput/chi phí → Express**.

## 4. AWS SAM – Serverless Application Model

`AWS SAM` (Serverless Application Model) là **framework mã nguồn mở** để định nghĩa và triển khai ứng dụng serverless. SAM template là **phần mở rộng của CloudFormation** với cú pháp rút gọn cho tài nguyên serverless: `AWS::Serverless::Function` (Lambda), `AWS::Serverless::Api` (API Gateway), `AWS::Serverless::SimpleTable` (DynamoDB), `AWS::Serverless::StateMachine`.

Khi triển khai, SAM **được biên dịch (transform) thành CloudFormation** thuần rồi deploy — nên nó thừa hưởng toàn bộ khả năng của CloudFormation nhưng viết gọn hơn nhiều. **SAM CLI** cho phép build, test **cục bộ** (`sam local invoke`, `sam local start-api` chạy Lambda/API trong Docker) và deploy (`sam build`, `sam deploy --guided`).

| Tiêu chí | AWS SAM | AWS CloudFormation |
|---|---|---|
| Phạm vi | Chuyên cho serverless | Mọi tài nguyên AWS |
| Cú pháp | Rút gọn (`Transform: AWS::Serverless-2016-10-31`) | Đầy đủ, dài dòng hơn |
| Test cục bộ | Có (`sam local` qua Docker) | Không sẵn |
| Bản chất | Transform thành CloudFormation | Chính là engine deploy |

## 5. Messaging & decoupling trong serverless

Kiến trúc serverless tốt là **event-driven** và **loosely coupled** — thành phần giao tiếp qua message/event thay vì gọi trực tiếp, giúp chịu tải đột biến và chống lỗi lan truyền.

- **`Amazon SQS`** – hàng đợi (queue), mô hình **pull**. Producer đẩy message vào queue, consumer (Lambda) lấy ra xử lý theo nhịp của mình → **đệm tải (buffer)** và **tách rời** producer/consumer. Có Standard (throughput cao, at-least-once) và FIFO (đúng thứ tự, exactly-once). Dùng khi cần **một** hệ xử lý message và chịu tải spike.
- **`Amazon SNS`** – pub/sub, mô hình **push**. Một message được **fan-out** tới nhiều subscriber (Lambda, SQS, HTTP, email). Dùng khi **nhiều** hệ cần nhận cùng một sự kiện. Mẫu phổ biến **SNS + SQS fan-out**: SNS đẩy tới nhiều queue SQS để mỗi consumer có buffer riêng.
- **`Amazon EventBridge`** – event bus, định tuyến sự kiện theo **rule/pattern** tới nhiều target, tích hợp sẵn nhiều SaaS và dịch vụ AWS. Phù hợp cho kiến trúc **event-driven** cần lọc/định tuyến theo nội dung sự kiện và schema registry.

## 6. Các kiến trúc serverless tham chiếu phổ biến

Đây là những mẫu kiến trúc hay xuất hiện trong đề thi:

- **Mobile/Serverless backend**: `Cognito` (đăng nhập + credentials) → `API Gateway` → `Lambda` → `DynamoDB`. Mobile app xác thực qua Cognito User Pool, dùng Identity Pool để lấy credentials, gọi API qua API Gateway (Cognito authorizer), Lambda xử lý và đọc/ghi DynamoDB.
- **Thumbnail generation khi upload S3**: Người dùng upload ảnh lên `S3` → **S3 Event Notification** kích hoạt `Lambda` → Lambda tạo thumbnail và ghi ảnh nhỏ trở lại S3 (thường vào bucket/prefix khác). Metadata có thể lưu vào `DynamoDB`. Đây là mẫu **event-driven trên S3** kinh điển — hoàn toàn không cần server.
- **Serverless REST API**: `API Gateway` (+ Cognito authorizer) → `Lambda` → `DynamoDB`, có thể thêm caching ở API Gateway. Tự động co giãn, trả tiền theo request.
- **Static website với CloudFront + S3**: Host site tĩnh (HTML/CSS/JS) trên `S3`, đặt `CloudFront` phía trước để CDN/cache toàn cầu, HTTPS và bảo vệ bucket bằng **Origin Access Control (OAC)**. Phần động gọi tới API serverless (API Gateway + Lambda).

## Điểm thi quan trọng

- **Cognito User Pool = đăng nhập/user directory (trả JWT)**; **Identity Pool = cấp AWS credentials tạm thời qua `STS` để truy cập dịch vụ AWS**. Đề thường hỏi phân biệt hai cái này hoặc chọn đúng cái cho tình huống.
- Cần **đăng nhập cho người dùng app + bảo vệ `API Gateway`** → **User Pool** (Cognito authorizer).
- Cần **cho user truy cập trực tiếp `S3`/`DynamoDB` bằng credentials tạm thời** → **Identity Pool**.
- **Federation** (Google/Facebook/SAML): social login vào **User Pool**; đổi token bên ngoài lấy credentials AWS thì qua **Identity Pool**.
- **Step Functions** = **điều phối** nhiều bước có trạng thái/retry/rẽ nhánh; không dùng để chạy business logic thay Lambda.
- **Standard workflow**: chạy tới **1 năm**, exactly-once, có audit → quy trình nghiệp vụ dài. **Express**: tới **5 phút**, throughput rất cao, rẻ → sự kiện lượng lớn ngắn.
- **SAM** là **superset của CloudFormation** cho serverless, có `sam local` để test cục bộ; khi deploy nó **transform thành CloudFormation**.
- **Tách rời**: **`SQS`** = queue (một consumer, buffer, pull); **`SNS`** = pub/sub fan-out (nhiều subscriber, push); **`EventBridge`** = định tuyến event theo rule.
- **S3 upload → S3 Event → Lambda** là mẫu chuẩn cho xử lý ảnh/thumbnail, không cần server.

## Tóm tắt

- **Cognito** cung cấp xác thực: **User Pool** để đăng nhập (JWT), **Identity Pool** để cấp AWS credentials tạm thời — đừng nhầm hai cái.
- **Step Functions** điều phối workflow bằng state machine; chọn **Standard** cho quy trình dài cần audit, **Express** cho khối lượng lớn/ngắn.
- **SAM** là framework rút gọn của CloudFormation cho serverless, hỗ trợ test cục bộ và transform thành CloudFormation khi deploy.
- **SQS / SNS / EventBridge** giúp kiến trúc **event-driven, loosely coupled**: queue vs pub/sub vs event routing.
- Nắm các mẫu tham chiếu: mobile backend, thumbnail từ S3 event, serverless REST API, và static site với CloudFront + S3.
