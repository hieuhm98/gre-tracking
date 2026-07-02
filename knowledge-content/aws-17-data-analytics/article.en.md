# AWS Data & Analytics – Athena, Redshift, Glue, EMR

## 1. Overview

The AWS **Data & Analytics** service group lets you **store, process (ETL), query, and visualize** data at scale — from a few GB to petabytes. The center of this picture is usually a **data lake on `S3`**, surrounded by query services (`Athena`), a data warehouse (`Redshift`), ETL (`Glue`), big data (`EMR`), BI (`QuickSight`), and streaming analytics (`Kinesis Data Analytics`, `MSK`).

**Why does it matter for the SAA-C03 exam?** The exam loves "pick the right / cheapest service" questions for an analytics scenario. The key is telling apart **when to use Athena vs Redshift**, **when Glue vs EMR**, the role of the **Glue Data Catalog** as central metadata, and how to **optimize Athena cost** (Parquet + partitions). Mastering these patterns is nearly guaranteed points.

---

## 2. Amazon Athena

`Athena` is a **serverless SQL query** service that runs directly on data sitting in `S3` — no servers to provision and no loading data into a database.

- **No infrastructure to manage** (serverless), built on the **Presto/Trino** engine.
- **Charged by the amount of data SCANNED** — about **$5 / TB** scanned. This is a crucial point for cost-optimization questions.
- How to **cut cost and speed up** queries:
  - Use **columnar formats** like **Parquet** or **ORC** instead of CSV/JSON → only read the needed columns.
  - **Compress** data (Snappy, GZIP) → fewer bytes to scan.
  - **Partition** data (by date, region...) → only scan relevant partitions.
- **Athena Federated Query**: query sources beyond `S3` (RDS, DynamoDB, on-premises...) via Lambda connectors.
- Integrates tightly with `QuickSight` for dashboards, and shares the **Glue Data Catalog** as its schema.

Typical use case: **occasional / ad-hoc** queries over logs or data-lake data without standing up infrastructure.

---

## 3. Amazon Redshift

`Redshift` is a **petabyte-scale data warehouse**, optimized for **OLAP** (Online Analytical Processing).

- Based on **PostgreSQL** but **NOT used for OLTP** (transactions); it stores data in **columnar** form and **parallelizes** queries (MPP).
- Up to **10x faster than Athena for repeated complex queries** because data is already loaded and indexed in the cluster.
- Components / features often tested:
  - **Cluster nodes / RA3**: RA3 separates compute and storage (managed storage on S3).
  - **Redshift Spectrum**: query data **directly in `S3`** **without loading** it into the cluster — extends the warehouse to the data lake.
  - **Redshift Serverless**: run the warehouse without managing a cluster, pay per usage.
  - **Snapshots**: backups into `S3`, can be copied cross-Region for DR.
  - **Concurrency Scaling**: automatically adds temporary capacity when many queries run concurrently.

Typical use case: **complex, frequently repeated analytics** over large volumes (BI dashboards, enterprise reporting).

### Athena vs Redshift

| Criterion | `Athena` | `Redshift` |
|-----------|----------|------------|
| Type | Serverless query on S3 | Data warehouse (cluster/serverless) |
| Data loading | Not needed (query in place) | Usually load into cluster (except Spectrum) |
| Pricing | By data **scanned** | By **node hours** / capacity |
| Best for | **Occasional / ad-hoc** queries | **Complex, repeated** analytics |
| Complex-query performance | Moderate | Very high (MPP, indexed) |

Exam tip: "occasional / serverless / no infrastructure to run" → **Athena**; "warehouse / frequent complex reporting / high performance" → **Redshift**.

---

## 4. Amazon OpenSearch Service

`OpenSearch` (formerly **Elasticsearch Service**) is used for **search** and **log analytics** following the **ELK** model (Elasticsearch + Logstash + Kibana → now OpenSearch + Dashboards).

- Strong for **full-text search**, application log analytics, clickstream logs, operational observability.
- Typically ingests data via `Kinesis Data Firehose`, CloudWatch Logs, or agents.
- **NOT** a SQL analytics tool like Athena/Redshift; it queries by index/search rather than a pure SQL warehouse.

Exam tip: if the question says "**log analytics / near-real-time search / Kibana dashboards**" → choose **OpenSearch**.

---

## 5. Amazon EMR

`EMR` (Elastic MapReduce) is a **managed big data cluster** service for running frameworks like **Hadoop, Apache Spark, HBase, Presto, Hive, Flink**.

- Used for **large-scale data processing**: machine learning, heavy ETL, petabyte analytics, scientific data processing.
- Runs on **EC2 instances** (you can use **Spot Instances** to **cut cost** significantly for interruption-tolerant work).
- **EMR Serverless**: run Spark/Hive without managing a cluster yourself.
- Automatically provisions, installs, and tunes the cluster — you don't build Hadoop by hand.

Typical use case: needing **control over big data frameworks** (Spark/Hadoop) for large processing workloads with deep customization.

---

## 6. Amazon QuickSight

`QuickSight` is a **serverless Business Intelligence (BI)** service for building **dashboards and visualizations**.

- In-memory engine **SPICE** (Super-fast, Parallel, In-memory Calculation Engine) → extremely fast querying/rendering.
- Connects to many sources: `Athena`, `Redshift`, `RDS`, `S3`, and external sources.
- **ML Insights**: anomaly detection, forecasting, and natural-language summaries powered by ML.
- Billed **per-session** or per user, with no servers to run.

Exam tip: if the question says "**dashboards / visual reporting / BI for business users**" → choose **QuickSight**.

---

## 7. AWS Glue

`Glue` is a **serverless ETL (Extract, Transform, Load)** service for preparing and transforming data.

- **No infrastructure to manage**, runs serverless Spark jobs to do ETL.
- **Glue Data Catalog**: a **central metadata / schema store** — shared by `Athena`, `Redshift Spectrum`, and `EMR`. This is very commonly tested.
- **Glue Crawlers**: automatically scan data in `S3` to **infer schema** and update the Data Catalog.
- **Glue DataBrew**: clean/normalize data with a visual interface (no code required).
- **Glue Studio**: build ETL pipelines with a drag-and-drop interface.

### Glue vs EMR

| Criterion | `Glue` | `EMR` |
|-----------|--------|-------|
| Model | **Serverless** ETL, self-managed | Big data cluster (EC2), more config |
| Infrastructure management | None (fully managed) | Yes (manage cluster, though assisted) |
| Framework control | Limited (serverless Spark) | High (Hadoop, Spark, HBase, Presto...) |
| Best for | Quick ETL, no infra worries | Large big data, deep customization, use Spot |

Exam tip: "serverless ETL, don't want to manage a cluster" → **Glue**; "need customizable Hadoop/Spark, large volume, cut price with Spot" → **EMR**.

---

## 8. AWS Lake Formation

`Lake Formation` helps you **build and secure a data lake on `S3`** quickly and centrally.

- Simplifies collecting, cleaning, cataloging, and **setting up access control** for data.
- Provides **fine-grained access control** down to the **column, row, and table** level — instead of just coarse IAM/S3 policies.
- **Sits on top of `Glue`** (shares the Glue Data Catalog), centralizing permission governance for the data lake.

Exam tip: if the question says "**fine-grained access control for a data lake / centralized data-lake security**" → choose **Lake Formation** (not hand-writing many S3 bucket policies).

---

## 9. Amazon Kinesis Data Analytics

`Kinesis Data Analytics` lets you **analyze streaming data in real time** using **SQL** or **Apache Flink**.

- Now renamed **Amazon Managed Service for Apache Flink** (the Flink portion).
- Reads data from `Kinesis Data Streams` / `Kinesis Data Firehose`, processes in real time (aggregation, time windows, anomaly detection), then pushes results to another destination.
- No servers to manage; scales automatically with throughput.

Typical use case: **real-time analytics** over event streams (IoT, clickstream, metrics) without batching.

---

## 10. Amazon MSK

`MSK` (Managed Streaming for Apache Kafka) is a **managed Apache Kafka** service — used to ingest and transport large-scale data streams.

- Compatible with **native Kafka** → ideal when an organization **already uses Kafka** or needs the Kafka ecosystem.
- AWS manages brokers, ZooKeeper/KRaft, patching, and HA.

### Kinesis vs MSK

| Criterion | `Kinesis Data Streams` | `MSK` (Kafka) |
|-----------|------------------------|----------------|
| Nature | AWS-proprietary streaming service | Managed Apache Kafka |
| Operations | More serverless, less config | Manage a Kafka cluster |
| Message size | Limited to ~1 MB | Can be larger (configurable) |
| When to choose | New start, deep AWS integration | Already on Kafka / need Kafka API |

Exam tip: "already using Kafka / need Kafka compatibility" → **MSK**; "new streaming, AWS integration, simplicity" → **Kinesis**.

---

## Key exam points

- **Athena = serverless SQL query on `S3`, charged by data SCANNED** (~$5/TB). Cut cost with **Parquet/ORC + compression + partitioning**.
- **Athena for occasional/ad-hoc queries**; **Redshift for complex, frequently repeated analytics** with high performance.
- **Redshift = columnar OLAP data warehouse**, based on PostgreSQL but **not OLTP**.
- **Redshift Spectrum = query data in `S3` WITHOUT loading** it into the cluster.
- **Glue = serverless ETL**; **Glue Data Catalog = central metadata/schema** shared by Athena, Redshift Spectrum, and EMR. **Glue Crawler** auto-infers schema.
- **QuickSight = serverless BI dashboards**, using the in-memory **SPICE** engine, billed **per-session**.
- **EMR = managed Hadoop/Spark cluster**; use **Spot Instances** to cut cost; also **EMR Serverless**.
- **Lake Formation = build & secure a data lake on `S3`** with **fine-grained access control** (column/row), sitting on top of `Glue`.
- **OpenSearch = search + log analytics** (ELK-like), **not** SQL analytics.
- **Kinesis Data Analytics (now Managed Service for Apache Flink) = real-time streaming analytics**; **MSK = managed Kafka** (choose when already on Kafka).

---

## Summary

- Most AWS analytics pipelines revolve around a **data lake on `S3`** with the **Glue Data Catalog** as the central schema.
- **Athena** (serverless query, pay-per-scan) suits ad-hoc queries; **Redshift** (OLAP warehouse) suits complex repeated analytics; **Redshift Spectrum** queries S3 directly.
- **Glue** is serverless ETL while **EMR** is a big data cluster (Hadoop/Spark, use Spot to save) — choose by how much customization and infrastructure management you want.
- **QuickSight** (SPICE) handles BI/dashboards; **OpenSearch** handles search & log analytics.
- **Lake Formation** centralizes **security & fine-grained permissions** for the data lake on top of Glue.
- Streaming analytics: **Kinesis Data Analytics / Managed Service for Apache Flink** for real time; **MSK** when you need Apache Kafka.
