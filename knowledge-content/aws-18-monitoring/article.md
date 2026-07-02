# AWS Monitoring – CloudWatch, CloudTrail, Config, X-Ray

## 1. Tổng quan

Trong kỳ thi **SAA-C03**, nhóm dịch vụ giám sát (monitoring) và quan sát (observability) xuất hiện rất thường xuyên, đặc biệt ở dạng câu hỏi "chọn đúng dịch vụ cho tình huống". Bốn dịch vụ cốt lõi cần phân biệt rõ:

- `CloudWatch` — giám sát **hiệu năng**: metrics, logs, alarms, dashboards.
- `CloudTrail` — kiểm toán **AI đã làm GÌ** (audit các API call).
- `Config` — theo dõi **cấu hình tài nguyên** và kiểm tra **tuân thủ** (compliance).
- `X-Ray` — **truy vết** (tracing) request đi qua các microservices.

Ngoài ra `EventBridge` (tên cũ là CloudWatch Events) đóng vai trò xương sống cho kiến trúc event-driven và lập lịch (scheduling).

Điểm mấu chốt: đề thi hay đưa một tình huống rồi hỏi "dùng dịch vụ nào?" — bạn phải phân biệt được ranh giới giữa CloudWatch / CloudTrail / Config / X-Ray.

---

## 2. Amazon CloudWatch Metrics

`CloudWatch` thu thập **metrics** (số liệu hiệu năng) theo thời gian.

- **Namespace**: nhóm chứa metrics, ví dụ `AWS/EC2`, `AWS/RDS`. Metric tùy chỉnh (custom) đặt trong namespace riêng.
- **Dimension**: thuộc tính định danh một metric (ví dụ `InstanceId`, `AutoScalingGroupName`). Tối đa 30 dimension mỗi metric.
- **Standard vs Detailed monitoring**:

| Loại | Tần suất | Chi phí |
|------|----------|---------|
| Standard monitoring | 5 phút / lần | Miễn phí (mặc định EC2) |
| Detailed monitoring | 1 phút / lần | Có phí, phải bật thủ công |

- **Custom metrics**: đẩy qua API `PutMetricData` hoặc qua CloudWatch Agent.
- **Metric resolution**: standard resolution = 60 giây; high resolution = tới 1 giây (dùng cho custom metrics cần độ chi tiết cao).
- **RẤT QUAN TRỌNG**: CloudWatch **KHÔNG** thu thập mặc định metrics về **bộ nhớ (memory) và dung lượng đĩa (disk)** của EC2 — vì đó là dữ liệu bên trong hệ điều hành (guest OS). Muốn có, phải cài **CloudWatch Agent** (unified agent). CPU, network, disk I/O ở mức hypervisor thì có sẵn.

---

## 3. Amazon CloudWatch Logs

`CloudWatch Logs` lưu và truy vấn log tập trung.

- **Log group**: nhóm log của một ứng dụng/dịch vụ. **Log stream**: chuỗi log từ một nguồn (một instance, một container).
- **Retention**: mặc định giữ **vô thời hạn** (never expire) — nên cấu hình thời gian giữ (1 ngày → 10 năm) để tiết kiệm chi phí.
- **CloudWatch Logs Insights**: ngôn ngữ truy vấn tương tác để phân tích log (lọc, thống kê, tìm lỗi) mà không cần export sang công cụ ngoài.
- **Subscription filters**: stream log gần thời gian thực tới `Kinesis Data Streams`, `Kinesis Data Firehose`, hoặc `Lambda` để xử lý/chuyển tiếp.
- **Unified CloudWatch Agent**: đẩy cả **logs và metrics** (kể cả memory/disk) từ EC2 hoặc máy chủ **on-premises** lên CloudWatch. Đây là cách chuẩn để tập trung log từ hạ tầng lai (hybrid).

Nguồn log phổ biến: SDK, Lambda, VPC Flow Logs, API Gateway, ECS, ElasticBeanstalk.

---

## 4. Amazon CloudWatch Alarms

`CloudWatch Alarm` theo dõi một metric và kích hoạt hành động khi vượt ngưỡng.

- **Ba trạng thái**: `OK` (bình thường), `ALARM` (vượt ngưỡng), `INSUFFICIENT_DATA` (thiếu dữ liệu).
- **Period**: khoảng thời gian đánh giá metric (ví dụ 60s, 300s). **Evaluation periods**: số chu kỳ liên tiếp cần thỏa điều kiện trước khi báo động.
- **Hành động (actions)** khi vào ALARM:
  - **SNS notification** — gửi thông báo (email, SMS, kích hoạt Lambda...).
  - **EC2 action** — dừng, chấm dứt (terminate), khởi động lại, hoặc **recover** (khôi phục) instance khi lỗi phần cứng vật lý.
  - **Auto Scaling action** — scale in/out nhóm ASG.
- **Composite alarm**: kết hợp nhiều alarm bằng logic AND/OR để giảm nhiễu (giảm cảnh báo giả).
- Có thể tạo alarm trên **metric math** (kết quả biểu thức tính toán từ nhiều metric).

---

## 5. Amazon CloudWatch Dashboards

`CloudWatch Dashboards` là bảng điều khiển tùy biến, hiển thị metrics và alarms.

- Hỗ trợ xem **cross-region** (nhiều vùng) và **cross-account** (nhiều tài khoản) trên một màn hình — phù hợp cho vận hành tập trung.
- Dashboard là tài nguyên toàn cầu (global), có thể chia sẻ.

---

## 6. Amazon EventBridge (tên cũ: CloudWatch Events)

`EventBridge` là bus sự kiện serverless, xương sống cho kiến trúc **event-driven** và **lập lịch**.

- **Event bus**: `default` (sự kiện AWS), `custom` (ứng dụng của bạn), `partner` (SaaS bên thứ ba như Zendesk, Datadog).
- **Rules**: khớp sự kiện theo mẫu (event pattern) hoặc theo **lịch**:
  - **cron** — lịch cố định (ví dụ 8h sáng mỗi ngày).
  - **rate** — lịch định kỳ (ví dụ mỗi 5 phút).
- **Targets**: `Lambda`, `SQS`, `SNS`, `Step Functions`, Kinesis... Một rule có thể fan-out tới nhiều target.
- **Schema registry**: khám phá và lưu cấu trúc (schema) sự kiện, sinh code binding.
- Dùng để **giải ghép nối** (decouple) các thành phần: dịch vụ A phát sự kiện, EventBridge định tuyến tới dịch vụ B mà A không cần biết B.

Ghi nhớ: cần **lập lịch chạy định kỳ** (cron job serverless) hay **phản ứng theo sự kiện** → nghĩ tới EventBridge.

---

## 7. AWS CloudTrail

`CloudTrail` phục vụ **quản trị (governance), tuân thủ và kiểm toán** — ghi lại **AI đã gọi API GÌ, khi nào, từ đâu**.

- **Bật mặc định**: có sẵn **Event history** lưu 90 ngày các sự kiện quản lý gần nhất. Để lưu lâu hơn/liên tục, phải tạo một **Trail** giao log về `S3` (và tùy chọn CloudWatch Logs).
- **Loại sự kiện**:

| Loại | Nội dung | Mặc định |
|------|----------|----------|
| Management events | Thao tác quản lý (tạo/sửa/xóa tài nguyên, đăng nhập) | Được log |
| Data events | Thao tác trên dữ liệu (S3 object-level GetObject/PutObject, Lambda Invoke) | **KHÔNG** log (phải bật, có phí, khối lượng lớn) |
| Insights events | Phát hiện hoạt động API bất thường | Phải bật |

- **Log file integrity validation**: xác thực log không bị sửa/xóa sau khi ghi (dùng hash/chữ ký số).
- **Multi-region trail**: gom sự kiện của tất cả các vùng. **Organization trail**: gom tất cả tài khoản trong AWS Organizations về một chỗ.
- Câu hỏi kinh điển: "AI đã xóa security group này / gọi API này?" → **CloudTrail**.

---

## 8. AWS Config

`Config` ghi lại **lịch sử cấu hình** của tài nguyên và **quan hệ** giữa chúng, dùng cho **kiểm tra tuân thủ**.

- Trả lời câu hỏi: "Tài nguyên của tôi hiện được cấu hình ra sao? Đã **thay đổi gì** theo thời gian? Có **tuân thủ** chính sách không?"
- **Config Rules**: managed (có sẵn) hoặc custom (viết bằng Lambda) để đánh giá compliant/non-compliant. Ví dụ: "EBS volume phải được mã hóa", "S3 bucket không được public".
- **Remediation**: tự động khắc phục tài nguyên vi phạm qua **SSM Automation** (ví dụ tự bật mã hóa, tự đóng cổng).
- **Conformance packs**: gói nhiều rule + remediation triển khai một lần (theo chuẩn như PCI, HIPAA).
- **Theo từng vùng (per-region)** — nếu muốn phủ toàn tài khoản phải bật ở mỗi region (có thể tổng hợp qua aggregator).
- **QUAN TRỌNG**: Config **KHÔNG ngăn chặn** hành động — nó chỉ **ghi nhận và đánh giá** sau khi việc đã xảy ra (không phải chốt chặn phòng ngừa như IAM/SCP).

---

## 9. AWS X-Ray

`X-Ray` cung cấp **truy vết phân tán (distributed tracing)** cho ứng dụng microservices.

- **Service map**: sơ đồ trực quan luồng request qua các dịch vụ, giúp tìm **nút thắt cổ chai (bottleneck)** và lỗi.
- **Trace** gồm nhiều **segment** (một dịch vụ) và **subsegment** (một thao tác nhỏ như query DB, gọi API).
- **Sampling**: chỉ lấy mẫu một phần request để giảm chi phí và tải, vẫn đủ đại diện.
- **Tích hợp**: `Lambda`, `API Gateway`, `ECS`, `EC2`, Elastic Beanstalk (thường qua X-Ray SDK và/hoặc X-Ray daemon).
- Dùng khi cần phân tích **độ trễ end-to-end** và tìm dịch vụ nào làm request chậm.

---

## 10. So sánh nhanh: CloudWatch vs CloudTrail vs Config vs X-Ray

Đây là bảng phân biệt kinh điển hay bị hỏi trong đề:

| Dịch vụ | Trả lời câu hỏi | Dùng cho |
|---------|-----------------|----------|
| `CloudWatch` | "Hiệu năng thế nào? CPU/RAM/lỗi ra sao?" | Metrics, logs, alarms, dashboards |
| `CloudTrail` | "**AI** đã gọi API **GÌ**, khi nào?" | Kiểm toán / audit hoạt động API |
| `Config` | "Tài nguyên có **tuân thủ** không? Đã **thay đổi gì**?" | Lịch sử cấu hình & compliance |
| `X-Ray` | "Request **chậm ở đâu** trong hệ microservices?" | Truy vết phân tán |

Mẹo phân biệt nhanh:
- "**Who did what**" (ai làm gì) → **CloudTrail**.
- "Compliant / what changed" (tuân thủ / thay đổi cấu hình) → **Config**.
- "Performance / metrics / logs / alarm" → **CloudWatch**.
- "Trace / bottleneck across microservices" → **X-Ray**.

---

## Điểm thi quan trọng

- **Memory và disk usage của EC2 KHÔNG có sẵn** trong CloudWatch — phải cài **CloudWatch Agent** (unified agent) để thu thập (kiến thức bị hỏi rất nhiều).
- **CloudTrail** trả lời "**ai đã gọi API này**" (audit). **Data events** (S3 object-level, Lambda Invoke) **KHÔNG được log mặc định** — phải bật thủ công.
- **Config** dùng cho "**tài nguyên có tuân thủ không / đã thay đổi gì**", tự khắc phục vi phạm bằng **SSM Automation remediation**. Config **không ngăn** hành động.
- **EventBridge** = **lập lịch (cron/rate)** và kiến trúc **event-driven / fan-out** tới Lambda, SQS, SNS, Step Functions.
- **CloudWatch Alarm** có thể kích hoạt **Auto Scaling**, **SNS**, và **EC2 recovery** (khôi phục instance khi lỗi phần cứng).
- **X-Ray** dùng để **truy vết và tìm bottleneck** across microservices; **CloudWatch Logs Insights** để truy vấn/phân tích log.
- Phân biệt **CloudWatch (hiệu năng) vs CloudTrail (audit API) vs Config (tuân thủ/cấu hình) vs X-Ray (tracing)** — câu hỏi tình huống kinh điển.

---

## Tóm tắt

- `CloudWatch` là trung tâm giám sát hiệu năng: **metrics, logs, alarms, dashboards**; nhớ cần **agent** cho memory/disk.
- `CloudTrail` ghi lại **mọi API call** để kiểm toán — "ai làm gì"; data events phải bật thủ công.
- `Config` theo dõi **cấu hình + tuân thủ** tài nguyên theo thời gian và tự remediation, nhưng **không phòng ngừa**.
- `EventBridge` là bus sự kiện cho **lập lịch** và **event-driven decoupling / fan-out**.
- `X-Ray` cung cấp **distributed tracing** để tìm bottleneck trong microservices.
- Kỹ năng thi cốt lõi: **đọc tình huống → chọn đúng một trong bốn dịch vụ** dựa trên từ khóa (who/compliance/performance/trace).
