# RDS, Aurora & ElastiCache – Managed Databases

## 1. Overview

AWS offers **managed database** services so you do not have to install, patch, or back up databases manually the way you would when running a database yourself on EC2.

- **Amazon RDS**: a managed relational database — MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.
- **Amazon Aurora**: a relational database designed by AWS, compatible with MySQL/PostgreSQL, with higher performance and durability.
- **Amazon ElastiCache**: an in-memory cache — Redis or Memcached — to offload the database and speed up reads.

The core idea for the exam: **Multi-AZ = high availability (HA, synchronous)**, **Read Replica = read scaling (asynchronous)**, **ElastiCache = offload the database with a cache**.

---

## 2. Amazon RDS Overview & Benefits

`RDS` (Relational Database Service) runs a database engine on infrastructure that AWS manages.

**Supported engines**: `MySQL`, `PostgreSQL`, `MariaDB`, `Oracle`, `SQL Server` (plus Aurora — see its own section).

**Managed benefits**:

- Automatic **patching** of the operating system and database.
- Continuous automatic **backups** with point-in-time recovery.
- **Monitoring** and metrics via CloudWatch and Performance Insights.
- **Multi-AZ** and **Read Replicas** with just a few clicks.
- **Storage autoscaling**: RDS automatically grows storage as it nears capacity (per your configured threshold) without downtime.

**Important trade-off**: you do **NOT get SSH access** to the database host — because AWS manages the OS. If you need OS access, use `RDS Custom` (Oracle and SQL Server only) or run the database yourself on EC2.

---

## 3. RDS Read Replicas

A **Read Replica** is a read-only copy used to **scale reads**.

- It uses **asynchronous replication** → data on the replica may lag slightly (**replica lag**), meaning it is **eventually consistent**.
- Supports **up to 15 Read Replicas** for one RDS database.
- Can be placed in the **same AZ, a different AZ, or a different region (cross-region)**.
- Each replica has its **own connection string** — the application must actively point read queries at the replica.
- A replica can be **promoted** into a standalone writable database (used for recovery or splitting off a system).

**Network cost**: replication **within the same AZ is free**; **cross-AZ or cross-region replication incurs** data transfer charges.

> Exam note: Read Replicas are for **offloading reads** from the primary database (e.g., reporting, analytics), **NOT** an automatic HA/failover mechanism.

---

## 4. RDS Multi-AZ

**Multi-AZ** is a mechanism for **High Availability (HA) and disaster recovery (DR)** within the same region.

- It maintains a **synchronous standby** in another AZ — every write is replicated synchronously.
- **Automatic failover** to the standby when the primary fails, an AZ is lost, or during maintenance.
- The application uses a **single DNS name** — on failover, DNS automatically points to the standby, so no connection string change is needed.
- The standby does **NOT serve read queries** — it only waits to take over. Therefore Multi-AZ **does NOT scale reads**.

### Read Replica vs Multi-AZ

| Criteria | Read Replica | Multi-AZ |
|----------|--------------|----------|
| Purpose | Scale reads | High availability / DR |
| Replication | Asynchronous (async) | Synchronous (sync) |
| Serves reads? | Yes | No (standby waits) |
| Automatic failover? | No (manual promotion) | Yes, automatic |
| Count | Up to 15 | 1 standby |
| Connection string | Separate per replica | A single DNS name |
| Cross-region? | Yes | No (within 1 region) |

---

## 5. RDS Proxy & RDS Custom

### RDS Proxy

`RDS Proxy` is a managed proxy that provides **connection pooling** in front of the database.

- **Pools and reuses connections** → avoids opening too many connections and overloading the database.
- **Reduces failover time** by up to ~66% because the proxy holds connections and automatically re-points to the new database.
- Can **enforce IAM authentication** (`IAM authentication`) and store credentials in Secrets Manager.
- **Ideal for AWS Lambda**: many Lambdas starting concurrently create a burst of connections — RDS Proxy pools them so the database is not overwhelmed.
- Accessible only from within the VPC (not public).

### RDS Custom

`RDS Custom` is for `Oracle` and `SQL Server` when you need **operating system and database access** (installing agents, custom patching, deep configuration) — which standard RDS does not allow. With RDS Custom you take on more responsibility for the OS; with standard RDS, AWS manages everything.

---

## 6. Amazon Aurora (architecture, endpoints, Serverless, Global Database)

`Amazon Aurora` is a relational database **designed by AWS**, compatible with `MySQL` and `PostgreSQL`.

**Performance & durability**:

- Roughly **5x faster than standard MySQL** and **3x faster than standard PostgreSQL**.
- Storage **auto-grows from 10 GB up to 128 TB**, with no need to pre-provision.
- Keeps **6 copies of data across 3 AZs** (2 per AZ) → **self-healing** and very high durability.
- Supports **up to 15 Aurora Replicas** with **fast failover** (faster than RDS Read Replicas).

**Endpoints**:

- **Writer endpoint**: always points to the primary instance for writes; re-points after a failover.
- **Reader endpoint**: load-balances read queries across the Aurora Replicas.

**Notable features**:

- **Aurora Serverless v2**: automatically scales compute capacity with load — ideal for variable or unpredictable workloads, paying only for what you use.
- **Aurora Global Database**: replicates **cross-region with under 1 second of latency** for DR and global reads; a secondary region can be promoted quickly during a disaster.
- **Backtrack**: "rewind" the database to an earlier point in time without restoring from a backup.
- **Cloning**: quickly create a copy of the database (copy-on-write) for testing without consuming much storage.

---

## 7. ElastiCache (Redis vs Memcached)

`Amazon ElastiCache` is a **managed in-memory cache** service that offloads reads from the database and lowers latency.

**Two engines**:

- **Redis**: supports **HA with Multi-AZ + replication**, **persistence (writing to disk)**, **backup/restore**, rich data structures (**sorted sets, lists, pub/sub**), and **Cluster Mode** for sharding. Use it when you need a durable, highly available cache.
- **Memcached**: **shards across multiple nodes (sharding)**, is **multi-threaded**, has **no persistence** and **no replication** — a pure, simple cache that is easy to scale horizontally.

### Redis vs Memcached

| Criteria | Redis | Memcached |
|----------|-------|-----------|
| Replication / HA | Yes (Multi-AZ, failover) | No |
| Persistence | Yes | No |
| Backup / restore | Yes | No |
| Data structures | Rich (sorted set, pub/sub) | Simple (key-value) |
| Multi-threaded | No | Yes |
| Sharding | Yes (Cluster Mode) | Yes |
| Use when | You need HA, durability, features | Pure, simple, multi-threaded cache |

---

## 8. Caching Patterns (Lazy Loading vs Write-Through)

When placing a cache in front of the database, there are two main strategies for loading data, usually combined with a **TTL (Time To Live)** so data expires on its own.

- **Lazy Loading (Cache-Aside)**: the application reads the cache first; on a **miss** it reads from the database and then writes to the cache. Only data that is actually requested ends up in the cache → saves memory, but the first miss is slow and data can become **stale**.
- **Write-Through**: every write to the database **also writes to the cache**. The cache is always fresh, but writes are slower and you may cache data that is never read.
- **TTL**: set a lifetime so cache entries expire automatically, reducing stale data (commonly paired with Lazy Loading).

### Lazy Loading vs Write-Through

| Criteria | Lazy Loading (Cache-Aside) | Write-Through |
|----------|----------------------------|---------------|
| When cache is loaded | On a read miss | On a write to the database |
| Data freshness | Can be stale (use TTL) | Always fresh |
| Cache memory | Only requested data | Even rarely/never-read data |
| Downside | First miss is slow, can be stale | Slower writes, wasted memory |

---

## Key exam points

- **Multi-AZ = HA/DR, synchronous, automatic failover, one DNS, does NOT serve reads.** **Read Replica = read scaling, asynchronous, up to 15, can be cross-region, can be promoted.**
- Read Replicas are **free within the same AZ** for data transfer; **cross-AZ / cross-region is charged**.
- Need **OS access** on Oracle/SQL Server → use `RDS Custom`. Standard RDS does not allow SSH.
- **RDS Proxy** = connection pooling, reduced failover time, enforced IAM auth — the **ideal choice for Lambda**.
- **Aurora**: 6 copies across 3 AZs, self-healing, storage auto-grows to **128 TB**, up to 15 Aurora Replicas, writer/reader endpoints.
- **Aurora Global Database** = **sub-second** cross-region replication for global DR.
- **Redis** = HA + replication + persistence + backup + data structures; **Memcached** = sharding + multi-threaded, with **no** persistence/replication (pure cache).
- **Lazy Loading** loads on a miss (can be stale); **Write-Through** loads on a write (always fresh); use **TTL** to expire data.

---

## Summary

- **RDS** = a managed relational database (patching, backups, monitoring) but with **no SSH**; supports storage autoscaling.
- **Multi-AZ** is for **high availability** (synchronous, automatic failover); **Read Replicas** are for **read scaling** (asynchronous, up to 15, promotable, can be cross-region).
- **RDS Proxy** pools connections and reduces failover time — great for Lambda; **RDS Custom** allows OS access on Oracle/SQL Server.
- **Aurora** keeps 6 copies across 3 AZs, self-heals, stores up to 128 TB, and offers Serverless v2 and Global Database (< 1s cross-region).
- **ElastiCache**: choose **Redis** when you need HA/persistence, choose **Memcached** for a pure, multi-threaded cache.
- Caching uses **Lazy Loading** (load on miss) or **Write-Through** (load on write), combined with **TTL**.
