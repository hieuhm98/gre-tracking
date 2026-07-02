# AWS Serverless – Lambda, DynamoDB & API Gateway

## 1. Overview

**Serverless** doesn't mean "no servers" — it means you **don't manage the servers**. AWS handles provisioning, patching, scaling, and availability; you focus on writing code and modeling data. You **pay for actual usage** (invocations, storage, execution time), not for servers running 24/7.

The core serverless trio on AWS:

- `AWS Lambda` – event-driven compute.
- `Amazon DynamoDB` – serverless NoSQL database with millisecond latency.
- `Amazon API Gateway` – the front door for REST/HTTP/WebSocket APIs.

**Why it matters for the SAA-C03 exam:** this is the preferred "well-architected" pattern for scalable, low-cost applications with no infrastructure to manage. The exam frequently asks when to choose serverless over `EC2`, and how to wire these services together.

## 2. AWS Lambda

`Lambda` runs your code in response to an **event** without you provisioning servers. You upload code as a function; Lambda automatically scales with the number of incoming events.

**Key limits and characteristics (exam-worthy):**

- **Maximum execution time: 15 minutes** per invocation. Longer tasks must move to `Step Functions`, `ECS`/`Fargate`, or `EC2`.
- **Memory: 128 MB – 10 GB.** CPU is allocated proportionally to memory (more RAM = more CPU).
- **Languages:** Node.js, Python, Java, Go, Ruby, .NET; or a custom runtime via container image / Lambda.
- **Triggers:** `API Gateway`, `S3`, `DynamoDB Streams`, `SQS`, `SNS`, `EventBridge`, `Kinesis`, `ALB`, and more.
- **`/tmp`:** local scratch storage, 512 MB by default, configurable up to 10 GB. Data is **not durable** across invocations.
- **Environment variables (env vars):** function configuration; can be encrypted with `KMS`.
- **Layers:** package shared libraries/dependencies for reuse across functions, reducing deployment package size.
- **Concurrency:** the number of simultaneous executions. `Reserved concurrency` caps/guarantees capacity for a function; `Provisioned concurrency` keeps pre-initialized instances warm to **eliminate cold starts**.
- **Pricing:** billed by **number of invocations + execution time × memory** (GB-seconds). No usage, no cost.

## 3. Amazon DynamoDB

`DynamoDB` is a **NoSQL key-value and document** database, fully managed and serverless, delivering **single-digit millisecond** latency at any scale.

**Primary key:**

- **Partition key:** determines the physical partition where an item is stored. Choose a high-cardinality key to avoid "hot partitions".
- **Partition key + Sort key** (composite key): allows multiple items per partition, ordered, and supports range queries on the sort key.

**Capacity modes:**

| Criteria | Provisioned (RCU/WCU) | On-Demand |
|---|---|---|
| Configuration | Pre-set RCU/WCU, with auto-scaling | No configuration needed |
| Pricing | Cheaper for steady/predictable traffic | Pay per actual request |
| Best for | Even, known workloads | Unpredictable, spiky traffic |
| Risk | Throttled if capacity is exceeded | Higher cost under sustained heavy load |

Remember: **1 RCU** = 1 strongly-consistent read/second for items up to 4 KB (or 2 eventually-consistent). **1 WCU** = 1 write/second for items up to 1 KB.

**Secondary indexes – LSI vs GSI:**

| Criteria | LSI (Local) | GSI (Global) |
|---|---|---|
| Partition key | Same as base table | Can differ |
| Sort key | Different | Can differ |
| Creation time | Only at table creation | Any time |
| Capacity | Shared with the table | Its own RCU/WCU |
| Consistency | Supports strong consistency | Eventually consistent only |

**Other important features:**

- **DAX (DynamoDB Accelerator):** an in-memory cache for DynamoDB that drops read latency from milliseconds to **microseconds**. Use it for read-heavy, repetitive workloads.
- **DynamoDB Streams:** captures item changes (insert/update/delete) in time order; commonly triggers `Lambda` for event-driven processing.
- **Global Tables:** **multi-region, active-active** replicas synced automatically; used for global, low-latency, region-fault-tolerant applications.
- **TTL (Time To Live):** automatically deletes expired items based on a timestamp — free, ideal for cleaning up stale data (sessions, logs).
- **Backups:** `PITR` (Point-In-Time Recovery) restores to any second within 35 days; plus manual on-demand backups.

## 4. Amazon API Gateway

`API Gateway` is a **managed front door** for APIs, typically placed in front of `Lambda` to form a serverless backend. It handles authentication, throttling, caching, versioning (stages), and monitoring.

**REST API vs HTTP API vs WebSocket API:**

| Criteria | REST API | HTTP API | WebSocket API |
|---|---|---|---|
| Cost | Higher | Cheaper (~70%) | Per connection/message |
| Features | Full (API keys, WAF, caching) | Minimal, low-latency | Bidirectional, real-time |
| Authorizer | IAM, Cognito, Lambda | JWT, Lambda | Lambda |
| Use for | Enterprise APIs needing full features | Simple, fast, cheap APIs | Chat, streaming, notifications |

**Concepts to remember:**

- **Throttling:** limits request rate (rate + burst) to protect the backend; exceeding it returns `429 Too Many Requests`.
- **Caching:** caches responses at the stage layer to reduce backend load and latency (REST API only).
- **Stages:** separate deployment environments (e.g., `dev`, `prod`) with distinct configurations.
- **Authorizers:** control access — `IAM`, `Cognito user pools`, or a `Lambda authorizer` (custom logic, e.g., validating a third-party token).

## 5. Event pattern: S3 → Lambda

A classic serverless pattern: when a file is uploaded to `S3`, an **S3 event** triggers `Lambda` to process it.

Example flow (image processing):

1. A user uploads an image to an **S3 bucket**.
2. An `s3:ObjectCreated:*` event triggers a **Lambda function**.
3. Lambda generates a thumbnail and writes metadata to **DynamoDB**.
4. It may emit a notification via `SNS`/`SES`.

Benefits: **no servers to manage**, automatic scaling with upload volume, and you pay only when a file is actually processed. This is the textbook example of **event-driven** architecture on the exam.

## Key exam points

- `Lambda` runs for a **maximum of 15 minutes** per invocation; longer tasks → `Step Functions`, `Fargate`, or `EC2`.
- Lambda memory is **128 MB–10 GB**; more RAM also means more CPU. `/tmp` defaults to 512 MB (up to 10 GB) and is not durable.
- Use `Provisioned concurrency` to **eliminate cold starts**; `Reserved concurrency` to cap/guarantee capacity.
- DynamoDB **On-Demand** for unpredictable/spiky traffic; **Provisioned (RCU/WCU)** is cheaper for steady, predictable load.
- **GSI** partition key can differ from the table, can be created any time, is eventually consistent only; **LSI** shares the partition key, is created only at table creation, and supports strong consistency.
- **DAX** delivers **microsecond** read latency (not ElastiCache when the question explicitly says DynamoDB).
- **DynamoDB Streams** → trigger `Lambda`; **Global Tables** for multi-region active-active; **TTL** auto-deletes expired items.
- API Gateway: **HTTP API** is cheap and fast for simple Lambda backends; **REST API** when you need caching/API keys/WAF; **WebSocket** for bidirectional real-time.
- `Cognito` and `Lambda authorizer` are common API Gateway authentication methods; throttling returns `429`.
- The **S3 → Lambda** pattern is the classic serverless, server-free event-driven architecture.

## Summary

- Serverless = no server management, automatic scaling, pay-per-use — the foundation is `Lambda`, `DynamoDB`, and `API Gateway`.
- `Lambda`: event-driven, max 15 minutes, 128 MB–10 GB, with layers, env vars, concurrency, and cold starts to watch for.
- `DynamoDB`: millisecond-latency NoSQL; pick the right capacity mode and use GSI/LSI, DAX, Streams, Global Tables, TTL, and PITR appropriately.
- `API Gateway`: choose REST / HTTP / WebSocket per need; manage throttling, caching, stages, and authorizers.
- Combining them yields a scalable, cheap, infrastructure-free backend — the textbook example being the **S3 → Lambda → DynamoDB** pattern.
