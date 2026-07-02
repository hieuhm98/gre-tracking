# Amazon S3 – Object Storage Fundamentals

## 1. Overview

**Amazon S3** (Simple Storage Service) is an **object storage** service — considered the "backbone" of many architectures on AWS. S3 stores files as objects inside **buckets**, rather than as disks (block storage) or a file system.

S3 is designed for near-infinite scalability and extreme durability: **11 nines (99.999999999%) durability**. Typical use cases: backup & archival, data lakes, static website hosting, media storage, software distribution, and as a data store for other services.

---

## 2. Buckets & Objects

### Bucket
- A bucket is a container for objects, and its **name must be globally unique** across all AWS accounts — no two buckets can share a name.
- A bucket is **defined at the Region level** (data resides in the chosen Region), even though the name's namespace is global.
- Naming rules: 3–63 characters, lowercase letters and numbers, no underscores, no uppercase, and it must not look like an IP address.

### Object
- Each object has a **key**. The key is the **full path**: `prefix + object name`. For example, in `s3://my-bucket/folder1/photo.jpg` the key is `folder1/photo.jpg`.
- S3 has **no real folders** — the "folder" structure is just a prefix within the key. The `/` character only helps group items visually.
- **The maximum size of a single object is 5 TB.**
- **Multipart upload** is **required for objects larger than 5 GB**, and is **recommended when an object is larger than 100 MB** for better speed and fault tolerance.
- An object also has: **metadata** (key-value pairs), **tags** (used for classification, permissions, lifecycle), and a **version ID** (when versioning is enabled).

---

## 3. Storage Classes

All storage classes have **11 nines of durability**; the differences lie in **availability**, number of AZs, storage cost, retrieval fees, and retrieval time.

| Storage Class | Availability | AZs | Min duration | Retrieval time | Typical use case |
|---------------|--------------|-----|--------------|----------------|------------------|
| **S3 Standard** | 99.99% | ≥ 3 | None | Instant (ms) | Frequently accessed data |
| **Standard-IA** | 99.9% | ≥ 3 | 30 days | Instant (ms) + retrieval fee | Infrequent access, fast retrieval (backups, DR) |
| **One Zone-IA** | 99.5% | **1 AZ** | 30 days | Instant (ms) + retrieval fee | Re-creatable data, infrequent access, tolerant of AZ loss |
| **Intelligent-Tiering** | 99.9% | ≥ 3 | None | Instant (ms), **no retrieval fee** | Unpredictable access patterns; auto-tiers |
| **Glacier Instant Retrieval** | 99.9% | ≥ 3 | 90 days | Instant (ms) | Archive, accessed ~once/quarter but needed instantly |
| **Glacier Flexible Retrieval** | 99.99% | ≥ 3 | 90 days | Minutes → hours (Expedited/Standard/Bulk) | Archive, accessed a few times/year |
| **Glacier Deep Archive** | 99.99% | ≥ 3 | 180 days | 12h (Standard) / 48h (Bulk) | Long-term retention, **cheapest** |

**Key points to remember:**
- **One Zone-IA** stores data in a **single AZ only** → ~20% cheaper than Standard-IA but data is lost if that AZ is destroyed. Use only for re-creatable data.
- **Intelligent-Tiering** automatically moves objects between tiers based on access patterns, with **no retrieval fees**, incurring only a small per-object monitoring fee.
- **Glacier Deep Archive** is the **cheapest** class, used for compliance / 7–10 year retention; retrieval takes 12 hours (Standard) or 48 hours (Bulk).
- **Glacier Flexible Retrieval** offers 3 retrieval tiers: **Expedited** (1–5 minutes), **Standard** (3–5 hours), **Bulk** (5–12 hours, free).

---

## 4. Versioning

**Versioning** is enabled **at the bucket level** and keeps multiple versions of the same object → protecting against accidental deletes and overwrites.

- When versioning is on, each overwrite creates a new **version ID**; the old version is retained.
- **Deleting** an object does not truly remove it but adds a **delete marker** — you can restore the object by removing that delete marker.
- Versions that existed before versioning was enabled have a version ID of `null`.
- Once enabled, versioning can **only be suspended**, **not disabled**. Suspending only stops creating new versions; existing versions remain.

---

## 5. Lifecycle Rules

**Lifecycle rules** automate managing objects over time, with two kinds of actions:

- **Transition actions**: move an object to a cheaper storage class after N days. For example: after 30 days move to Standard-IA, after 90 days to Glacier, after 180 days to Deep Archive.
- **Expiration actions**: **delete** an object after N days. This can be used to:
  - Delete old (noncurrent) versions after a period.
  - Delete **incomplete multipart uploads** (unfinished upload parts) so they don't incur storage cost.

Rules can apply to the whole bucket or be filtered by **prefix** and **tags**. Use **Storage Class Analysis** to determine the right time to transition tiers.

---

## 6. S3 Replication (CRR / SRR)

**Replication** copies objects **asynchronously (async)** between buckets. Prerequisite: **versioning must be enabled on BOTH the source AND destination buckets**.

| Attribute | CRR (Cross-Region) | SRR (Same-Region) |
|-----------|--------------------|--------------------|
| Scope | Two buckets in **different Regions** | Two buckets in the **same Region** |
| Use case | Lower latency, legal compliance, DR | Log aggregation, sync across accounts, sandbox |
| Versioning requirement | Required on both | Required on both |
| Type | Asynchronous | Asynchronous |

**Points to remember:**
- Only objects created **after** replication is enabled are copied; to copy **existing** objects, use **S3 Batch Replication**.
- Replication is **not transitive (no chaining)**: if bucket 1 → bucket 2 and bucket 2 → bucket 3, objects from bucket 1 do **not** automatically reach bucket 3.
- You can replicate across different AWS accounts; delete markers can be replicated depending on configuration (permanent deletes by version ID are not).

---

## 7. Static Website Hosting

S3 can host a **static website** (HTML, CSS, JS, images) and serve it directly over HTTP.

- The URL looks like `http://<bucket-name>.s3-website-<region>.amazonaws.com` (or the dot-style variant).
- You must **enable public read** via a bucket policy (if the content is public) and adjust Block Public Access accordingly.
- A **403 Forbidden** error is usually caused by a bucket policy that does not allow public read.
- Combine it with **CloudFront** for HTTPS, caching, and global acceleration.

---

## 8. Performance & Transfer Optimization

- **Multipart Upload**: splits an object into parts uploaded in parallel → faster and fault-tolerant (only failed parts are re-uploaded). Required for objects > 5 GB, recommended > 100 MB.
- **Byte-Range Fetch**: download a **specific portion** of an object in parallel by requesting a byte range → speeds up transfers, or fetch just the beginning (e.g., reading a file header).
- **S3 Transfer Acceleration**: speeds up upload/download by routing through **CloudFront edge locations** and then over the AWS internal network → useful for uploading from far away to a target Region. Compatible with multipart upload.
- **Requester Pays**: the **requester (downloader)** pays for request and data transfer costs instead of the bucket owner → used when sharing large datasets with third parties (the requester must be authenticated, not anonymous).

---

## 9. Analysis & Operations Tools

- **Storage Class Analysis**: analyzes access patterns to recommend **when to transition** objects from Standard to Standard-IA (not for Glacier classes).
- **S3 Inventory**: exports a scheduled report (CSV/ORC/Parquet) listing objects and metadata (size, storage class, encryption status, version) — used for auditing and compliance.
- **S3 Batch Operations**: performs bulk actions on millions of objects (change metadata/tags, copy, modify ACLs, restore from Glacier, invoke Lambda, etc.). It is commonly paired with an S3 Inventory report as the input list.

---

## Key exam points

- **Bucket names are globally unique**; buckets are defined at the **Region level**.
- **All storage classes have 11 nines of durability**; they differ only in **availability and AZ count**. **One Zone-IA = 1 AZ, 99.5% availability**.
- Choose a storage class by **access frequency + acceptable retrieval time**. Need the **cheapest** for long-term archive → **Glacier Deep Archive** (12h/48h retrieval).
- Access **~once/year but must retrieve instantly (ms)** → **Glacier Instant Retrieval**.
- **Unpredictable** access pattern → **Intelligent-Tiering** (no retrieval fee, auto-tiers).
- **Replication requires versioning enabled on both source and destination**, is **async**, and has **no chaining**; existing objects need **S3 Batch Replication**.
- Once enabled, **versioning** can only be **suspended**, not disabled.
- **Multipart** is required > 5 GB (recommended > 100 MB); max object size is **5 TB**.
- **Transfer Acceleration** uses **CloudFront edge locations** to speed up transfers.

---

## Summary

- **S3** is object storage with 11 nines of durability, organized into **buckets + objects (keys)**.
- **Storage classes** differ in cost/availability/retrieval time: Standard → IA → Intelligent-Tiering → Glacier (Instant/Flexible/Deep Archive). Deep Archive is the cheapest.
- **Versioning + Lifecycle** protect data and automatically optimize cost across its lifecycle.
- **Replication (CRR/SRR)** requires versioning on both ends, runs async, and has no chaining.
- **Transfer Acceleration, Multipart, and Byte-range Fetch** optimize transfer speed; **Requester Pays** shifts cost to the downloader.
- **Storage Class Analysis, S3 Inventory, and Batch Operations** support analysis and operations at scale.
