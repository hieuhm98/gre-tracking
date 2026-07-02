# AWS Databases – Chọn đúng loại database

Trong kỳ thi SAA-C03, một trong những dạng câu hỏi phổ biến nhất là "một công ty cần lưu trữ dữ liệu kiểu X với access pattern Y, database nào là **phù hợp nhất**?". Bí quyết không phải là thuộc lòng từng dịch vụ, mà là **khớp database với access pattern**: dữ liệu có cấu trúc hay phi cấu trúc, đọc/ghi giao dịch (OLTP) hay phân tích (OLAP), yêu cầu độ trễ, và quy mô.

## 1. Tổng quan – Khung quyết định chọn database

AWS cung cấp **purpose-built databases** (database chuyên dụng): mỗi loại được tối ưu cho một access pattern cụ thể. Không có một database "làm được tất cả". Đề thi luôn có các từ khóa gợi ý (cue words) để bạn chọn đúng dịch vụ.

Các trục quyết định chính:

- **Structured vs unstructured**: Dữ liệu quan hệ có schema cố định (bảng, khóa ngoại, JOIN) → `RDS`/`Aurora`. Dữ liệu linh hoạt, schema thay đổi → NoSQL như `DynamoDB`.
- **OLTP vs OLAP**: OLTP là giao dịch nhỏ, nhiều read/write đồng thời (app, đơn hàng) → `RDS`/`Aurora`/`DynamoDB`. OLAP là truy vấn phân tích tổng hợp trên khối lượng lớn (data warehouse, BI) → `Redshift`.
- **Latency (độ trễ)**: Cần dưới mili-giây, in-memory → `ElastiCache`/`MemoryDB`. Vài mili-giây đơn con số → `DynamoDB`.
- **Scale (quy mô)**: Cần scale ngang gần như vô hạn, serverless → `DynamoDB`. Scale dọc/read replica → `RDS`.
- **Access pattern đặc thù**: Quan hệ đồ thị → `Neptune`. Chuỗi thời gian → `Timestream`. Sổ cái bất biến → `QLDB`.

Nắm chắc khung này giúp bạn loại nhanh 2-3 phương án sai và chọn đáp án đúng trong vài giây.

## 2. Relational – RDS & Aurora (OLTP)

`RDS` (Relational Database Service) là database quan hệ **được quản lý** hỗ trợ nhiều engine: PostgreSQL, MySQL, MariaDB, Oracle, SQL Server. Phù hợp cho workload OLTP truyền thống với schema cố định, transaction ACID, JOIN phức tạp.

- **Multi-AZ**: bản sao đồng bộ ở AZ khác để **high availability** (tự động failover). Đây là giải pháp DR/HA, không phải để scale đọc.
- **Read Replicas**: bản sao bất đồng bộ để **scale đọc** (offload báo cáo, read-heavy).
- `Aurora`: engine tương thích MySQL/PostgreSQL do AWS xây dựng, hiệu năng cao hơn (gấp 3-5 lần), storage tự mở rộng tới 128 TB, 6 bản sao trên 3 AZ. `Aurora Serverless v2` tự scale theo tải. Chọn `Aurora` khi cần hiệu năng và HA cao hơn RDS thường mà vẫn giữ tính quan hệ.

Cue words: "relational", "SQL", "JOIN", "ACID transactions", "MySQL/PostgreSQL/Oracle" → `RDS`/`Aurora`.

## 3. Key-value / NoSQL – DynamoDB

`DynamoDB` là NoSQL key-value / document **fully serverless**, không cần quản lý server. Độ trễ đọc/ghi ở mức mili-giây đơn con số (single-digit ms) ở mọi quy mô.

- Scale ngang tự động, throughput gần như vô hạn; phù hợp workload có traffic bùng nổ hoặc không dự đoán được.
- `DynamoDB Accelerator (DAX)`: cache in-memory tích hợp, đưa độ trễ đọc xuống micro-giây.
- `Global Tables`: multi-region, multi-active replication cho ứng dụng toàn cầu.
- Không hỗ trợ JOIN phức tạp; bạn phải thiết kế theo access pattern (single-table design).

Cue words: "serverless database", "key-value", "single-digit millisecond", "massive scale", "no server management", "flexible schema" → `DynamoDB`.

## 4. In-memory – ElastiCache vs MemoryDB (durable Redis)

`ElastiCache` là cache **in-memory được quản lý** (Redis hoặc Memcached), dùng để giảm tải database và tăng tốc đọc. Điển hình: cache kết quả truy vấn, session store, leaderboard.

`MemoryDB for Redis` cũng là in-memory tương thích Redis, nhưng **bền vững (durable)**: dữ liệu được ghi bền qua Multi-AZ transaction log, có thể dùng làm **primary database** chứ không chỉ là cache. Cho độ trễ đọc micro-giây và ghi single-digit ms.

| Tiêu chí | `ElastiCache` | `MemoryDB for Redis` |
|---|---|---|
| Vai trò | Cache (bên cạnh DB chính) | Primary database bền vững |
| Độ bền dữ liệu | Không bền (cache) | Bền qua Multi-AZ transaction log |
| Độ trễ đọc | Micro-giây | Micro-giây |
| Độ trễ ghi | Micro-giây | Single-digit mili-giây |
| Khi nào dùng | Tăng tốc DB có sẵn, giảm tải | Cần tốc độ Redis + độ bền như DB chính |

Cue words: "in-memory cache", "reduce database load", "session store", "leaderboard" → `ElastiCache`. "in-memory + durable", "Redis as primary database" → `MemoryDB`.

## 5. Data warehouse – Redshift (OLAP)

`Redshift` là **data warehouse** columnar cho phân tích OLAP quy mô petabyte. Tối ưu cho các truy vấn tổng hợp phức tạp (SUM, GROUP BY, JOIN nhiều bảng lớn) phục vụ BI và reporting — **không** dùng cho OLTP giao dịch.

- Lưu trữ dạng cột (columnar) + nén dữ liệu → truy vấn phân tích cực nhanh.
- Tích hợp `Redshift Spectrum` để truy vấn trực tiếp dữ liệu trong S3.
- Chuẩn SQL, tích hợp công cụ BI (QuickSight, Tableau).

Cue words: "OLAP", "data warehouse", "analytics over petabytes", "business intelligence", "complex aggregation queries" → `Redshift`.

## 6. Specialized databases – Neptune, DocumentDB, Keyspaces, QLDB, Timestream

Nhóm database chuyên dụng, mỗi cái giải một bài toán rất cụ thể:

- `Neptune` – **Graph database**. Lưu và truy vấn quan hệ phức tạp (social network, recommendation engine, fraud detection, knowledge graph). Hỗ trợ Gremlin, SPARQL, openCypher. Cue: "relationships between entities", "social graph".
- `DocumentDB` – **tương thích MongoDB**. Database document được quản lý cho workload JSON kiểu MongoDB. Cue: "MongoDB-compatible", "migrate MongoDB".
- `Keyspaces` – **tương thích Apache Cassandra**. Serverless, wide-column. Cue: "Cassandra-compatible", "CQL".
- `QLDB` (Quantum Ledger Database) – **sổ cái bất biến**, có thể xác minh bằng mật mã (cryptographically verifiable). Lịch sử thay đổi không thể sửa. Cue: "immutable", "ledger", "cryptographically verifiable", "complete history of changes".
- `Timestream` – **time-series database**. Tối ưu cho dữ liệu chuỗi thời gian từ IoT, metrics, telemetry. Cue: "time-series", "IoT sensor data", "metrics over time".

## 7. Tham chiếu nhanh – Một dòng cho mỗi dịch vụ

- `RDS` – relational OLTP được quản lý, nhiều engine SQL.
- `Aurora` – relational hiệu năng cao, tương thích MySQL/PostgreSQL.
- `DynamoDB` – NoSQL key-value serverless, độ trễ mili-giây, scale lớn.
- `ElastiCache` – cache in-memory (Redis/Memcached) để giảm tải DB.
- `MemoryDB` – in-memory tương thích Redis nhưng bền, làm primary DB.
- `Redshift` – data warehouse OLAP quy mô petabyte cho analytics.
- `Neptune` – graph database cho quan hệ phức tạp.
- `DocumentDB` – document DB tương thích MongoDB.
- `Keyspaces` – wide-column tương thích Cassandra, serverless.
- `QLDB` – sổ cái bất biến, xác minh bằng mật mã.
- `Timestream` – database chuỗi thời gian cho IoT/metrics.

## 8. Bảng so sánh tổng hợp

| Database | Loại | Use case tốt nhất | Access pattern |
|---|---|---|---|
| `RDS` | Relational (OLTP) | App truyền thống, schema cố định, SQL | Read/write giao dịch, JOIN, ACID |
| `Aurora` | Relational (OLTP) | Như RDS nhưng cần hiệu năng & HA cao | Read/write giao dịch quy mô lớn |
| `DynamoDB` | NoSQL key-value | App serverless, scale lớn, độ trễ thấp | Key-based, single-digit ms |
| `ElastiCache` | In-memory cache | Tăng tốc đọc, session, leaderboard | Read cực nhanh, dữ liệu tạm |
| `MemoryDB` | In-memory bền | Redis làm primary DB có độ bền | Read micro-giây, ghi bền |
| `Redshift` | Data warehouse (OLAP) | Analytics/BI trên petabyte | Truy vấn tổng hợp, columnar |
| `Neptune` | Graph | Social graph, recommendation, fraud | Duyệt quan hệ (traversal) |
| `DocumentDB` | Document | Workload MongoDB (JSON) | Truy vấn document linh hoạt |
| `Keyspaces` | Wide-column | Workload Cassandra (CQL) | Wide-column, high write |
| `QLDB` | Ledger | Sổ cái bất biến, audit trail | Append-only, verifiable |
| `Timestream` | Time-series | IoT, metrics, telemetry | Ghi theo thời gian, truy vấn theo khoảng |

### Bảng RDS vs DynamoDB vs Redshift

| Tiêu chí | `RDS`/`Aurora` | `DynamoDB` | `Redshift` |
|---|---|---|---|
| Mô hình dữ liệu | Relational (SQL) | NoSQL key-value | Relational columnar |
| Loại workload | OLTP | OLTP / key-value | OLAP (analytics) |
| Schema | Cố định | Linh hoạt | Cố định |
| Scale | Vertical + read replica | Horizontal, serverless | Cluster petabyte |
| Độ trễ | Mili-giây | Single-digit ms | Giây (truy vấn phân tích) |
| Ví dụ | App đặt hàng | App di động scale lớn | Dashboard BI |

## Điểm thi quan trọng

- "Relational / SQL / JOIN / ACID transactions" → chọn `RDS`; cần hiệu năng & HA cao hơn → `Aurora`.
- "Serverless NoSQL / key-value / single-digit millisecond / massive scale" → chọn `DynamoDB`.
- "Reduce read load on database / cache / session store" → `ElastiCache`. "In-memory nhưng cần durable, làm primary DB" → `MemoryDB`.
- "OLAP / data warehouse / analytics over petabytes / BI" → chọn `Redshift` (KHÔNG dùng cho OLTP).
- "Relationships between entities / social graph / recommendation / fraud detection" → `Neptune`.
- "MongoDB-compatible" → `DocumentDB`; "Cassandra-compatible / CQL" → `Keyspaces`.
- "Immutable / cryptographically verifiable ledger / complete change history" → `QLDB`.
- "Time-series / IoT sensor data / metrics over time" → `Timestream`.
- "Sub-millisecond / micro-second in-memory" → `ElastiCache` hoặc `MemoryDB` (durable → `MemoryDB`).
- Multi-AZ = HA/failover; Read Replica = scale đọc — đừng nhầm hai cái này trong câu hỏi RDS.

## Tóm tắt

- AWS dùng **purpose-built databases**: chọn theo access pattern, không có DB "làm tất cả".
- Trục quyết định: structured vs unstructured, OLTP vs OLAP, latency, scale.
- Relational OLTP → `RDS`/`Aurora`; NoSQL scale lớn → `DynamoDB`; analytics → `Redshift`.
- In-memory: `ElastiCache` (cache) vs `MemoryDB` (in-memory nhưng durable, làm primary DB).
- Database chuyên dụng: `Neptune` (graph), `DocumentDB` (MongoDB), `Keyspaces` (Cassandra), `QLDB` (ledger), `Timestream` (time-series).
- Học thuộc các **cue words** để loại nhanh phương án sai và chọn đúng trong đề thi.
