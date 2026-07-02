# AWS Databases – Choosing the Right Database

On the SAA-C03 exam, one of the most common question types is "a company needs to store data of type X with access pattern Y — which database is **MOST suitable**?". The trick is not memorizing every service, but **matching the database to the access pattern**: structured vs unstructured data, transactional read/write (OLTP) vs analytical (OLAP), latency requirements, and scale.

## 1. Overview – The database decision framework

AWS offers **purpose-built databases**: each type is optimized for a specific access pattern. There is no single "do-everything" database. The exam always includes cue words that tell you which service to pick.

Key decision axes:

- **Structured vs unstructured**: Relational data with a fixed schema (tables, foreign keys, JOINs) → `RDS`/`Aurora`. Flexible, evolving-schema data → NoSQL like `DynamoDB`.
- **OLTP vs OLAP**: OLTP is small transactions with many concurrent reads/writes (apps, orders) → `RDS`/`Aurora`/`DynamoDB`. OLAP is complex aggregate analytical queries over large volumes (data warehouse, BI) → `Redshift`.
- **Latency**: Need sub-millisecond, in-memory → `ElastiCache`/`MemoryDB`. Single-digit milliseconds → `DynamoDB`.
- **Scale**: Need near-infinite horizontal scale, serverless → `DynamoDB`. Vertical scaling / read replicas → `RDS`.
- **Specialized access pattern**: Graph relationships → `Neptune`. Time series → `Timestream`. Immutable ledger → `QLDB`.

Mastering this framework lets you quickly eliminate 2-3 wrong options and pick the right answer in seconds.

## 2. Relational – RDS & Aurora (OLTP)

`RDS` (Relational Database Service) is a **managed** relational database supporting multiple engines: PostgreSQL, MySQL, MariaDB, Oracle, SQL Server. It suits traditional OLTP workloads with a fixed schema, ACID transactions, and complex JOINs.

- **Multi-AZ**: a synchronous replica in another AZ for **high availability** (automatic failover). This is a DR/HA feature, not a read-scaling one.
- **Read Replicas**: asynchronous replicas to **scale reads** (offload reporting, read-heavy traffic).
- `Aurora`: an AWS-built MySQL/PostgreSQL-compatible engine with higher performance (3-5x), storage that auto-grows to 128 TB, and 6 copies across 3 AZs. `Aurora Serverless v2` auto-scales with load. Choose `Aurora` when you need higher performance and HA than standard RDS while staying relational.

Cue words: "relational", "SQL", "JOIN", "ACID transactions", "MySQL/PostgreSQL/Oracle" → `RDS`/`Aurora`.

## 3. Key-value / NoSQL – DynamoDB

`DynamoDB` is a **fully serverless** NoSQL key-value / document database — no servers to manage. Read/write latency is single-digit milliseconds at any scale.

- Automatic horizontal scaling with near-infinite throughput; ideal for bursty or unpredictable traffic.
- `DynamoDB Accelerator (DAX)`: an integrated in-memory cache that brings read latency down to microseconds.
- `Global Tables`: multi-region, multi-active replication for global applications.
- No complex JOINs; you must design around your access pattern (single-table design).

Cue words: "serverless database", "key-value", "single-digit millisecond", "massive scale", "no server management", "flexible schema" → `DynamoDB`.

## 4. In-memory – ElastiCache vs MemoryDB (durable Redis)

`ElastiCache` is a **managed in-memory cache** (Redis or Memcached) used to offload databases and speed up reads. Typical uses: caching query results, session store, leaderboard.

`MemoryDB for Redis` is also Redis-compatible and in-memory, but **durable**: data is persisted via a Multi-AZ transaction log, so it can serve as a **primary database**, not just a cache. It offers microsecond read latency and single-digit-ms write latency.

| Criteria | `ElastiCache` | `MemoryDB for Redis` |
|---|---|---|
| Role | Cache (alongside a main DB) | Durable primary database |
| Durability | Not durable (cache) | Durable via Multi-AZ transaction log |
| Read latency | Microseconds | Microseconds |
| Write latency | Microseconds | Single-digit milliseconds |
| When to use | Speed up an existing DB, offload load | Need Redis speed + durability of a main DB |

Cue words: "in-memory cache", "reduce database load", "session store", "leaderboard" → `ElastiCache`. "in-memory + durable", "Redis as primary database" → `MemoryDB`.

## 5. Data warehouse – Redshift (OLAP)

`Redshift` is a columnar **data warehouse** for petabyte-scale OLAP analytics. It is optimized for complex aggregate queries (SUM, GROUP BY, JOINs across large tables) serving BI and reporting — **not** for transactional OLTP.

- Columnar storage + data compression → extremely fast analytical queries.
- `Redshift Spectrum` lets you query data directly in S3.
- Standard SQL, integrates with BI tools (QuickSight, Tableau).

Cue words: "OLAP", "data warehouse", "analytics over petabytes", "business intelligence", "complex aggregation queries" → `Redshift`.

## 6. Specialized databases – Neptune, DocumentDB, Keyspaces, QLDB, Timestream

A group of purpose-built databases, each solving a very specific problem:

- `Neptune` – **Graph database**. Stores and queries complex relationships (social network, recommendation engine, fraud detection, knowledge graph). Supports Gremlin, SPARQL, openCypher. Cue: "relationships between entities", "social graph".
- `DocumentDB` – **MongoDB-compatible**. Managed document database for MongoDB-style JSON workloads. Cue: "MongoDB-compatible", "migrate MongoDB".
- `Keyspaces` – **Apache Cassandra-compatible**. Serverless, wide-column. Cue: "Cassandra-compatible", "CQL".
- `QLDB` (Quantum Ledger Database) – **immutable ledger**, cryptographically verifiable. Change history cannot be altered. Cue: "immutable", "ledger", "cryptographically verifiable", "complete history of changes".
- `Timestream` – **time-series database**. Optimized for time-series data from IoT, metrics, telemetry. Cue: "time-series", "IoT sensor data", "metrics over time".

## 7. Quick reference – One line per service

- `RDS` – managed relational OLTP, multiple SQL engines.
- `Aurora` – high-performance relational, MySQL/PostgreSQL-compatible.
- `DynamoDB` – serverless NoSQL key-value, millisecond latency, huge scale.
- `ElastiCache` – in-memory cache (Redis/Memcached) to offload a DB.
- `MemoryDB` – Redis-compatible in-memory but durable, as a primary DB.
- `Redshift` – petabyte-scale OLAP data warehouse for analytics.
- `Neptune` – graph database for complex relationships.
- `DocumentDB` – MongoDB-compatible document database.
- `Keyspaces` – Cassandra-compatible wide-column, serverless.
- `QLDB` – immutable, cryptographically verifiable ledger.
- `Timestream` – time-series database for IoT/metrics.

## 8. Consolidated comparison table

| Database | Type | Best use case | Access pattern |
|---|---|---|---|
| `RDS` | Relational (OLTP) | Traditional apps, fixed schema, SQL | Transactional read/write, JOIN, ACID |
| `Aurora` | Relational (OLTP) | Like RDS but higher performance & HA | Large-scale transactional read/write |
| `DynamoDB` | NoSQL key-value | Serverless apps, huge scale, low latency | Key-based, single-digit ms |
| `ElastiCache` | In-memory cache | Speed up reads, session, leaderboard | Ultra-fast reads, transient data |
| `MemoryDB` | Durable in-memory | Redis as a primary DB with durability | Microsecond reads, durable writes |
| `Redshift` | Data warehouse (OLAP) | Analytics/BI over petabytes | Aggregate queries, columnar |
| `Neptune` | Graph | Social graph, recommendation, fraud | Relationship traversal |
| `DocumentDB` | Document | MongoDB workloads (JSON) | Flexible document queries |
| `Keyspaces` | Wide-column | Cassandra workloads (CQL) | Wide-column, high write |
| `QLDB` | Ledger | Immutable ledger, audit trail | Append-only, verifiable |
| `Timestream` | Time-series | IoT, metrics, telemetry | Time-ordered writes, range queries |

### RDS vs DynamoDB vs Redshift table

| Criteria | `RDS`/`Aurora` | `DynamoDB` | `Redshift` |
|---|---|---|---|
| Data model | Relational (SQL) | NoSQL key-value | Relational columnar |
| Workload type | OLTP | OLTP / key-value | OLAP (analytics) |
| Schema | Fixed | Flexible | Fixed |
| Scale | Vertical + read replicas | Horizontal, serverless | Petabyte cluster |
| Latency | Milliseconds | Single-digit ms | Seconds (analytical queries) |
| Example | Order-taking app | Large-scale mobile app | BI dashboard |

## Key exam points

- "Relational / SQL / JOIN / ACID transactions" → pick `RDS`; need higher performance & HA → `Aurora`.
- "Serverless NoSQL / key-value / single-digit millisecond / massive scale" → pick `DynamoDB`.
- "Reduce read load on database / cache / session store" → `ElastiCache`. "In-memory but durable, as primary DB" → `MemoryDB`.
- "OLAP / data warehouse / analytics over petabytes / BI" → pick `Redshift` (NOT for OLTP).
- "Relationships between entities / social graph / recommendation / fraud detection" → `Neptune`.
- "MongoDB-compatible" → `DocumentDB`; "Cassandra-compatible / CQL" → `Keyspaces`.
- "Immutable / cryptographically verifiable ledger / complete change history" → `QLDB`.
- "Time-series / IoT sensor data / metrics over time" → `Timestream`.
- "Sub-millisecond / microsecond in-memory" → `ElastiCache` or `MemoryDB` (durable → `MemoryDB`).
- Multi-AZ = HA/failover; Read Replica = read scaling — don't confuse these two on RDS questions.

## Summary

- AWS uses **purpose-built databases**: choose by access pattern; there is no "do-everything" DB.
- Decision axes: structured vs unstructured, OLTP vs OLAP, latency, scale.
- Relational OLTP → `RDS`/`Aurora`; large-scale NoSQL → `DynamoDB`; analytics → `Redshift`.
- In-memory: `ElastiCache` (cache) vs `MemoryDB` (in-memory but durable, as a primary DB).
- Specialized databases: `Neptune` (graph), `DocumentDB` (MongoDB), `Keyspaces` (Cassandra), `QLDB` (ledger), `Timestream` (time-series).
- Memorize the **cue words** to quickly eliminate wrong options and pick the right one on the exam.
