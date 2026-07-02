# Disaster Recovery & Migration on AWS

## 1. Overview

**Disaster Recovery (DR)** is the ability to restore systems and data after a serious incident: losing an Availability Zone, an entire Region going down, hardware failure, a cyberattack, or human error. The goal is to bring the service back online with data loss and downtime kept within limits the business can accept.

**Migration** is the process of moving applications, servers, and data from an on-premises data center (or another cloud) to AWS. AWS provides a purpose-built toolset for each data type and scenario.

On the **SAA-C03** exam, both topics frequently appear as scenario questions: the prompt states an RTO/RPO requirement or a budget, and you must pick the right **DR strategy** or the right **migration tool**. Knowing the cost/speed ordering of the four DR strategies and the role of each tool is the key to answering correctly.

---

## 2. RPO vs RTO — the two core metrics

Every DR decision revolves around these two metrics. Exams often deliberately swap the definitions to trip you up.

- **RPO (Recovery Point Objective)** — *the maximum acceptable data loss*, measured as **how far back in time** you go. If RPO = 1 hour, the system must back up/replicate such that when disaster strikes you lose at most the last 1 hour of data. A smaller RPO → more frequent backups/replication needed.
- **RTO (Recovery Time Objective)** — *the maximum acceptable downtime*, measured as **time to recover**. If RTO = 30 minutes, the system must be back online within 30 minutes of the incident. A smaller RTO → more standby infrastructure needed.

Quick memory aid:

- **RPO = Point (data point)** → looks to the **past**, measures **data loss**.
- **RTO = Time (time down)** → looks to the **future**, measures **downtime**.

Example: A bank sets RPO = 0 (no transaction may be lost) and RTO = a few seconds → it is forced into an expensive Active-Active architecture. A personal blog can accept RPO = 24 hours and RTO = a few hours → simple Backup & Restore is enough.

---

## 3. The four Disaster Recovery strategies

AWS defines four DR strategies, ordered by **increasing cost** and **decreasing RTO/RPO** (the more expensive, the faster).

### 3.1. Backup & Restore

- Cheapest, with the **highest** RPO and RTO (usually measured in hours).
- Nothing runs at the standby site. Only when disaster strikes do you restore from backups: `AMI`, `EBS snapshot`, `RDS snapshot`, and data in `S3`/`S3 Glacier`.
- Suits low-criticality systems that can accept long downtime to save cost.
- Tools: `AWS Backup`, automated snapshots, periodic data copies.

### 3.2. Pilot Light

- Keeps only the **minimal core components** running at all times — typically a **database that is continuously replicated** to the standby Region. Compute (EC2/app) is stopped or not yet created.
- On disaster: start/scale up the compute layer and route traffic over.
- RTO is lower than Backup & Restore because the data is already there; you only need to start the application.
- Metaphor: a "pilot light" always burns small, ready to flare up when needed.

### 3.3. Warm Standby

- A **full but scaled-down copy** of the production environment **runs at all times** in the standby Region — every component exists but at minimal scale.
- On disaster: simply **scale up** (increase size/count) to serve full production.
- RTO is lower than Pilot Light because the application is already running and doesn't need a cold start.

### 3.4. Multi-Site / Hot Site (Active-Active)

- A **full production copy runs in parallel across 2+ Regions**, all serving live traffic (active-active).
- RTO and RPO are **near zero** — if one Region dies, the other takes over instantly.
- **Most expensive**, since you maintain double (or more) of the entire infrastructure.
- Uses `Route 53` (failover/latency routing) and `Global Accelerator` to distribute traffic.

### Comparison of the four DR strategies

| Strategy | Cost | RTO | RPO | What runs already |
|---|---|---|---|---|
| **Backup & Restore** | Lowest | High (hours) | High (hours) | Nothing (backups only) |
| **Pilot Light** | Low–medium | Medium (tens of minutes) | Low | Only replicated database/core |
| **Warm Standby** | Medium–high | Low (minutes) | Low | Full scaled-down copy, always on |
| **Multi-Site (Active-Active)** | Highest | Near 0 | Near 0 | Full production in 2+ Regions |

> Order to memorize: **Backup & Restore < Pilot Light < Warm Standby < Multi-Site** — cost rises, RTO/RPO falls.

---

## 4. AWS Migration tools

### 4.1. `AWS DMS` (Database Migration Service)

- Migrates **databases** with minimal downtime — the **source stays fully operational** during migration.
- Supports **homogeneous** (same engine, e.g. Oracle → Oracle) and **heterogeneous** (different engine, e.g. Oracle → Aurora/PostgreSQL).
- Supports **CDC (Change Data Capture)** — it keeps replicating ongoing changes, enabling cutover with very low RPO.
- When **changing engines** (heterogeneous), pair it with **`AWS SCT` (Schema Conversion Tool)** to convert schema/stored procedures/code first, then DMS moves the data.

### 4.2. `AWS Application Migration Service` (MGN)

- The current standard **lift-and-shift (rehost)** tool: move whole physical/virtual servers to **EC2** without rewriting the application.
- Uses continuous **block-level replication**, enabling fast cutover with little downtime.
- **Replaces** the older `AWS SMS` (Server Migration Service) and `CloudEndure`.

### 4.3. Other tools

- **`AWS DataSync`** — transfers and **synchronizes data online** between on-premises (NFS/SMB/HDFS) and AWS storage services (`S3`, `EFS`, `FSx`); automated, with encryption and integrity checks.
- **`AWS Snow Family`** (Snowcone, Snowball, Snowmobile) — **offline bulk migration** via physical devices; used when data is too large / the link too slow to transfer over the network.
- **`AWS Storage Gateway`** — **hybrid** connectivity that lets on-premises applications use AWS storage as if it were local (File/Volume/Tape Gateway).
- **`AWS Backup`** — **centralized, policy-based backup** across many services (`EBS`, `RDS`, `DynamoDB`, `EFS`, `S3`…), supporting cross-Region/cross-account copies for DR.

### Migration tools table

| Tool | Purpose | Key point |
|---|---|---|
| `AWS DMS` | Database migration | Source stays up; homogeneous & heterogeneous; supports CDC |
| `AWS SCT` | Schema conversion | Used when **changing engines** (heterogeneous) before running DMS |
| `AWS Application Migration Service` (MGN) | Lift-and-shift servers to EC2 | Block-level replication; replaces SMS/CloudEndure |
| `AWS DataSync` | Transfer/sync data online | On-prem ⇄ S3/EFS/FSx, automated, encrypted |
| `AWS Snow Family` | Offline bulk migration | Physical devices for very large data / weak network |
| `AWS Storage Gateway` | Hybrid storage | On-prem uses AWS storage as if local |
| `AWS Backup` | Centralized backup | Policies, cross-Region/account for DR |

---

## 5. The 7 migration strategies (7 Rs)

When planning how to move each application to the cloud, AWS classifies the approach into seven options:

- **Rehost** — "lift-and-shift", move as-is to the cloud (usually via MGN), no architecture change.
- **Replatform** — "lift-tinker-and-shift", light optimization (e.g. move a self-managed DB to `RDS`) without rewriting the core.
- **Repurchase** — drop the old system and buy a replacement SaaS solution (e.g. move to a SaaS CRM).
- **Refactor / Re-architect** — rewrite in a cloud-native architecture (serverless, microservices) to fully exploit the cloud.
- **Retire** — decommission applications that are no longer needed.
- **Retain** — keep it on-premises (not migrated yet/at all, e.g. due to compliance constraints).
- **Relocate** — move a whole infrastructure cluster (e.g. VMware) to the cloud without repurchasing or rewriting.

---

## Key exam points

- **RPO = data loss** (looks to the past), **RTO = downtime** (time to recover). Don't let the question swap these two definitions.
- DR order by **cost and RTO/RPO**: **Backup & Restore < Pilot Light < Warm Standby < Multi-Site (Active-Active)**. The smaller the required RTO/RPO and the larger the budget → the further right the strategy you pick.
- **Pilot Light**: only the **database/core** runs already. **Warm Standby**: a full but **scaled-down** copy runs already. This is the most commonly confused pair.
- **Multi-Site / Active-Active** gives near-zero RTO & RPO but is the most expensive; typically uses `Route 53` failover.
- **`AWS DMS`** for database migration while the **source stays up**; when **changing engines** you must also use **`AWS SCT`**; DMS supports **CDC**.
- **`MGN` (Application Migration Service)** is the standard choice for **lift-and-shift of servers to EC2**, having replaced SMS/CloudEndure.
- **`DataSync`** = **online** data transfer; **`Snow Family`** = **offline** bulk migration when the network isn't enough.

---

## Summary

- DR ensures systems recover from disaster within acceptable **RPO** (max data loss) and **RTO** (max downtime).
- The four DR strategies rise in cost and fall in RTO/RPO: **Backup & Restore → Pilot Light → Warm Standby → Multi-Site**.
- **Pilot Light** keeps the core (DB) running; **Warm Standby** keeps a full scaled-down copy; **Multi-Site** runs production in parallel across Regions.
- **`AWS DMS`** (with **`SCT`** when engines differ) migrates databases with no interruption; **`MGN`** lift-and-shifts servers to EC2.
- **`DataSync`** (online), **`Snow Family`** (offline), **`Storage Gateway`** (hybrid), and **`AWS Backup`** (centralized backup) serve different data transfer and protection needs.
- The **7 Rs** (Rehost, Replatform, Repurchase, Refactor, Retire, Retain, Relocate) are the framework for classifying per-application migration strategies.
