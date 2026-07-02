# AWS Data & Analytics – Athena, Redshift, Glue, EMR

## 1. Tổng quan

Nhóm dịch vụ **Data & Analytics** trên AWS giúp bạn **lưu trữ, xử lý (ETL), truy vấn và trực quan hóa** dữ liệu ở quy mô lớn — từ vài GB tới hàng petabyte. Trung tâm của bức tranh này thường là một **data lake trên `S3`**, xung quanh là các dịch vụ truy vấn (`Athena`), kho dữ liệu (`Redshift`), ETL (`Glue`), big data (`EMR`), BI (`QuickSight`) và phân tích streaming (`Kinesis Data Analytics`, `MSK`).

**Vì sao quan trọng với kỳ thi SAA-C03?** Đề thi rất hay ra dạng câu hỏi "chọn dịch vụ phù hợp / rẻ nhất" cho một tình huống phân tích. Điểm mấu chốt là phân biệt đúng **khi nào dùng Athena vs Redshift**, **khi nào Glue vs EMR**, vai trò của **Glue Data Catalog** làm metadata trung tâm, và cách **tối ưu chi phí Athena** (Parquet + partition). Nắm chắc các mẫu này là ăn điểm gần như chắc chắn.

---

## 2. Amazon Athena

`Athena` là dịch vụ **truy vấn SQL serverless** chạy trực tiếp trên dữ liệu nằm trong `S3` — không cần dựng server hay load dữ liệu vào database.

- **Không có hạ tầng để quản lý** (serverless), dựa trên engine **Presto/Trino**.
- **Tính tiền theo lượng dữ liệu QUÉT (data scanned)** — khoảng **$5 / TB** quét. Đây là ý cực kỳ quan trọng cho câu hỏi tối ưu chi phí.
- Cách **giảm chi phí và tăng tốc** truy vấn:
  - Dùng **định dạng cột (columnar)** như **Parquet** hoặc **ORC** thay cho CSV/JSON → chỉ đọc cột cần thiết.
  - **Nén (compression)** dữ liệu (Snappy, GZIP) → ít byte phải quét hơn.
  - **Partition** dữ liệu (theo ngày, region...) → chỉ quét phân vùng liên quan.
- **Athena Federated Query**: truy vấn cả nguồn ngoài `S3` (RDS, DynamoDB, on-premises...) qua Lambda connector.
- Kết hợp chặt với `QuickSight` để làm dashboard, và dùng chung **Glue Data Catalog** làm schema.

Use case điển hình: truy vấn **thi thoảng / ad-hoc** trên log, dữ liệu trong data lake mà không muốn dựng hạ tầng.

---

## 3. Amazon Redshift

`Redshift` là **kho dữ liệu (data warehouse) quy mô petabyte**, tối ưu cho phân tích **OLAP** (Online Analytical Processing).

- Dựa trên **PostgreSQL** nhưng **KHÔNG dùng cho OLTP** (giao dịch); nó lưu trữ theo **cột (columnar)** và **song song hóa** truy vấn (MPP).
- Nhanh hơn Athena **10x cho truy vấn phức tạp lặp lại** vì dữ liệu đã được load & index sẵn trong cluster.
- Các thành phần / tính năng thi hay hỏi:
  - **Cluster nodes / RA3**: RA3 tách rời compute và storage (managed storage trên S3).
  - **Redshift Spectrum**: truy vấn dữ liệu **trực tiếp trong `S3`** mà **không cần load** vào cluster — mở rộng warehouse ra data lake.
  - **Redshift Serverless**: chạy warehouse không cần quản lý cluster, trả theo mức dùng.
  - **Snapshots**: backup vào `S3`, có thể copy cross-Region cho DR.
  - **Concurrency Scaling**: tự thêm capacity tạm thời khi nhiều truy vấn đồng thời.

Use case điển hình: **phân tích phức tạp, lặp lại thường xuyên** trên khối lượng lớn (BI dashboards, báo cáo doanh nghiệp).

### Athena vs Redshift

| Tiêu chí | `Athena` | `Redshift` |
|----------|----------|------------|
| Kiểu | Serverless query trên S3 | Data warehouse (cluster/serverless) |
| Load dữ liệu | Không cần (query tại chỗ) | Thường load vào cluster (trừ Spectrum) |
| Tính tiền | Theo dữ liệu **quét** | Theo **giờ node** / capacity |
| Phù hợp | Truy vấn **thi thoảng / ad-hoc** | Phân tích **phức tạp, lặp lại** |
| Hiệu năng truy vấn phức tạp | Trung bình | Rất cao (MPP, đã index) |

Mẹo thi: "occasional / serverless / không muốn dựng hạ tầng" → **Athena**; "warehouse / báo cáo phức tạp thường xuyên / hiệu năng cao" → **Redshift**.

---

## 4. Amazon OpenSearch Service

`OpenSearch` (trước đây là **Elasticsearch Service**) dùng cho **tìm kiếm (search)** và **phân tích log** theo mô hình **ELK** (Elasticsearch + Logstash + Kibana → nay là OpenSearch + Dashboards).

- Mạnh cho **full-text search**, phân tích log ứng dụng, log clickstream, quan sát vận hành.
- Thường nhận dữ liệu qua `Kinesis Data Firehose`, CloudWatch Logs, hoặc agent.
- **KHÔNG** phải công cụ SQL analytics như Athena/Redshift; nó truy vấn theo index/search chứ không phải SQL warehouse thuần.

Mẹo thi: đề nói "**phân tích log / tìm kiếm gần thời gian thực / dashboard Kibana**" → chọn **OpenSearch**.

---

## 5. Amazon EMR

`EMR` (Elastic MapReduce) là dịch vụ **cluster big data được quản lý** để chạy các framework như **Hadoop, Apache Spark, HBase, Presto, Hive, Flink**.

- Dùng cho **xử lý dữ liệu quy mô lớn**: machine learning, ETL nặng, phân tích petabyte, xử lý dữ liệu khoa học.
- Chạy trên các **EC2 instance** (có thể dùng **Spot Instances** để **giảm chi phí** đáng kể cho phần công việc chịu được gián đoạn).
- **EMR Serverless**: chạy Spark/Hive không cần tự quản lý cluster.
- Tự động cấu hình, cài đặt, tuning cluster — bạn không phải tự dựng Hadoop thủ công.

Use case điển hình: cần **kiểm soát framework big data** (Spark/Hadoop) cho khối lượng xử lý lớn, tùy biến sâu.

---

## 6. Amazon QuickSight

`QuickSight` là dịch vụ **Business Intelligence (BI) serverless** để tạo **dashboard và trực quan hóa** dữ liệu.

- Engine trong bộ nhớ **SPICE** (Super-fast, Parallel, In-memory Calculation Engine) → truy vấn/hiển thị cực nhanh.
- Kết nối nhiều nguồn: `Athena`, `Redshift`, `RDS`, `S3`, và nguồn ngoài.
- **ML Insights**: phát hiện bất thường, dự báo, tóm tắt tự nhiên bằng ML.
- Tính tiền **theo phiên (per-session)** hoặc theo user, không cần server.

Mẹo thi: đề nói "**dashboard / báo cáo trực quan / BI cho business user**" → chọn **QuickSight**.

---

## 7. AWS Glue

`Glue` là dịch vụ **ETL (Extract, Transform, Load) serverless** để chuẩn bị và biến đổi dữ liệu.

- **Không cần quản lý hạ tầng**, chạy job Spark serverless để làm ETL.
- **Glue Data Catalog**: **kho metadata / schema trung tâm** — được dùng chung bởi `Athena`, `Redshift Spectrum` và `EMR`. Đây là ý rất hay thi.
- **Glue Crawlers**: tự động quét dữ liệu trong `S3` để **suy ra schema** và cập nhật Data Catalog.
- **Glue DataBrew**: làm sạch/chuẩn hóa dữ liệu bằng giao diện trực quan (không cần code).
- **Glue Studio**: xây dựng pipeline ETL bằng giao diện kéo-thả.

### Glue vs EMR

| Tiêu chí | `Glue` | `EMR` |
|----------|--------|-------|
| Mô hình | ETL **serverless**, tự quản lý | Cluster big data (EC2), tự cấu hình nhiều |
| Quản lý hạ tầng | Không (fully managed) | Có (quản lý cluster, dù được hỗ trợ) |
| Kiểm soát framework | Hạn chế (Spark serverless) | Cao (Hadoop, Spark, HBase, Presto...) |
| Phù hợp | ETL nhanh, không lo hạ tầng | Big data lớn, cần tùy biến sâu, dùng Spot |

Mẹo thi: "ETL serverless, không muốn quản lý cluster" → **Glue**; "cần Hadoop/Spark tùy biến, khối lượng lớn, giảm giá bằng Spot" → **EMR**.

---

## 8. AWS Lake Formation

`Lake Formation` giúp **xây dựng và bảo mật data lake trên `S3`** nhanh chóng, tập trung.

- Đơn giản hóa việc gom dữ liệu, làm sạch, phân loại và **thiết lập quyền truy cập**.
- Cung cấp **kiểm soát truy cập chi tiết (fine-grained)** tới mức **cột, hàng, bảng** — thay vì chỉ IAM/S3 policy thô.
- **Nằm trên nền `Glue`** (dùng chung Glue Data Catalog), tập trung hóa việc quản trị quyền cho data lake.

Mẹo thi: đề nói "**quản lý quyền truy cập chi tiết cho data lake / bảo mật data lake tập trung**" → chọn **Lake Formation** (không phải tự viết hàng loạt S3 bucket policy).

---

## 9. Amazon Kinesis Data Analytics

`Kinesis Data Analytics` cho phép **phân tích dữ liệu streaming theo thời gian thực** bằng **SQL** hoặc **Apache Flink**.

- Nay được đổi tên thành **Amazon Managed Service for Apache Flink** (phần Flink).
- Đọc dữ liệu từ `Kinesis Data Streams` / `Kinesis Data Firehose`, xử lý real-time (aggregation, cửa sổ thời gian, phát hiện bất thường), rồi đẩy kết quả sang đích khác.
- Không cần quản lý server; tự động scale theo throughput.

Use case điển hình: **phân tích real-time** trên luồng sự kiện (IoT, clickstream, metrics) mà không cần batch.

---

## 10. Amazon MSK

`MSK` (Managed Streaming for Apache Kafka) là dịch vụ **Apache Kafka được quản lý** — dùng để nạp và truyền tải luồng dữ liệu (streaming) quy mô lớn.

- Tương thích **Kafka gốc** → phù hợp khi tổ chức **đã dùng Kafka** hoặc cần hệ sinh thái Kafka.
- AWS quản lý broker, ZooKeeper/KRaft, patch, HA.

### Kinesis vs MSK

| Tiêu chí | `Kinesis Data Streams` | `MSK` (Kafka) |
|----------|------------------------|----------------|
| Bản chất | Dịch vụ streaming độc quyền AWS | Apache Kafka được quản lý |
| Vận hành | Serverless hơn, ít cấu hình | Quản lý cluster Kafka |
| Kích thước message | Giới hạn ~1 MB | Có thể lớn hơn (cấu hình được) |
| Khi nào chọn | Bắt đầu mới, tích hợp sâu AWS | Đã có Kafka / cần API Kafka |

Mẹo thi: "đã dùng Kafka / cần tương thích Kafka" → **MSK**; "streaming mới, tích hợp AWS, đơn giản" → **Kinesis**.

---

## Điểm thi quan trọng

- **Athena = truy vấn SQL serverless trên `S3`, tính tiền theo dữ liệu QUÉT** (~$5/TB). Giảm chi phí bằng **Parquet/ORC + nén + partition**.
- **Athena cho truy vấn thi thoảng/ad-hoc**; **Redshift cho phân tích phức tạp, lặp lại thường xuyên** với hiệu năng cao.
- **Redshift = data warehouse OLAP columnar**, dựa trên PostgreSQL nhưng **không phải OLTP**.
- **Redshift Spectrum = truy vấn dữ liệu trong `S3` mà KHÔNG cần load** vào cluster.
- **Glue = ETL serverless**; **Glue Data Catalog = metadata/schema trung tâm** dùng chung bởi Athena, Redshift Spectrum, EMR. **Glue Crawler** tự suy ra schema.
- **QuickSight = BI dashboard serverless**, dùng engine trong bộ nhớ **SPICE**, tính tiền **per-session**.
- **EMR = cluster Hadoop/Spark được quản lý**; dùng **Spot Instances** để giảm chi phí; có **EMR Serverless**.
- **Lake Formation = xây & bảo mật data lake trên `S3`** với **quyền truy cập chi tiết** (cột/hàng), nằm trên `Glue`.
- **OpenSearch = search + phân tích log** (ELK-like), **không** phải SQL analytics.
- **Kinesis Data Analytics (nay là Managed Service for Apache Flink) = phân tích streaming real-time**; **MSK = Kafka được quản lý** (chọn khi đã có Kafka).

---

## Tóm tắt

- Hầu hết pipeline analytics của AWS xoay quanh **data lake trên `S3`** với **Glue Data Catalog** làm schema trung tâm.
- **Athena** (query serverless, pay-per-scan) hợp truy vấn ad-hoc; **Redshift** (warehouse OLAP) hợp phân tích phức tạp lặp lại; **Redshift Spectrum** query thẳng S3.
- **Glue** là ETL serverless còn **EMR** là big data cluster (Hadoop/Spark, dùng Spot để rẻ) — chọn theo mức tùy biến và quản lý hạ tầng mong muốn.
- **QuickSight** (SPICE) làm BI/dashboard; **OpenSearch** làm search & phân tích log.
- **Lake Formation** tập trung hóa **bảo mật & quyền chi tiết** cho data lake trên nền Glue.
- Streaming analytics: **Kinesis Data Analytics / Managed Service for Apache Flink** cho real-time; **MSK** khi cần Apache Kafka.
