# EC2 Storage – EBS, EFS, Instance Store & AMI

## 1. Overview

An `EC2` server needs somewhere to store data: the operating system, applications, and user files. AWS offers several storage options, each optimized for a specific situation.

- `EBS` (Elastic Block Store): a "network drive" attached to EC2; data is persistent.
- `EC2 Instance Store`: a physical disk attached directly to the host machine — extremely fast but **ephemeral**.
- `EFS` (Elastic File System): an NFS network file system, shared by many machines, multi-AZ.
- `AMI` (Amazon Machine Image): a template used to create new instances.
- `FSx`: managed file system services for Windows and HPC.

This topic appears very frequently on the SAA-C03 exam. The focus is on **choosing the right storage type** based on requirements: one instance or many, single-AZ or multi-AZ, persistent or ephemeral, Linux or Windows.

---

## 2. What Is EBS?

`EBS` (Elastic Block Store) is a **network drive** attached to an EC2 instance. Because it connects over the network there is a small latency, but in exchange it can be detached from one instance and attached to another very quickly.

The most important characteristics to remember:

- `EBS` is **locked to a single Availability Zone (AZ)**. A volume created in `us-east-1a` cannot be directly attached to an instance in `us-east-1b`.
- By default, a volume **can only attach to one instance at a time** (except for the Multi-Attach feature of `io1`/`io2`).
- Data is **persistent**: when you stop or terminate an instance, the volume can be kept (depending on the `DeleteOnTermination` setting).
- To move a volume to another AZ → create a **snapshot**, then restore the snapshot into the new AZ.
- You can resize and change the volume type while it is running.

---

## 3. EBS Volume Types

There are two main groups: **SSD** (optimized for IOPS – I/O operations per second) and **HDD** (optimized for throughput – MB/s). Only SSD (`gp2`/`gp3`/`io1`/`io2`) can be used as a boot volume.

| Type | Group | Characteristics | Use case |
|------|-------|-----------------|----------|
| `gp3` | General purpose SSD | Newest; provision IOPS & throughput **independently** of size | General workloads, web servers, dev/test environments |
| `gp2` | General purpose SSD | Older; IOPS is **tied** to volume size | Same as `gp3` (usually worth upgrading to `gp3`) |
| `io2` / `io1` | Provisioned IOPS SSD | Highest performance, very high IOPS, supports Multi-Attach | Mission-critical databases, high-I/O, low-latency apps |
| `st1` | Throughput-optimized HDD | High throughput, low cost; **cannot** be a boot volume | Big data, data warehouses, log processing, streaming |
| `sc1` | Cold HDD | Cheapest, low throughput; **cannot** be a boot volume | Infrequently accessed data, low-cost storage |

The key distinction of `gp3`: you can raise IOPS (up to 16,000) and throughput (up to 1,000 MB/s) **without increasing size**. With the older `gp2`, getting more IOPS forces you to buy a larger volume.

---

## 4. EBS Snapshots

A `snapshot` is a backup of a volume at a point in time.

- Snapshots are stored in `S3` (though you do not see them directly in the S3 console).
- Snapshots are **incremental**: they only store the blocks changed since the previous snapshot → cost savings.
- You can **copy a snapshot to another region** or use it to create a volume in a **different AZ** → this is the primary way to move/replicate `EBS` across AZs and regions.
- **EBS Snapshot Archive**: moves a snapshot to an archive storage tier that is ~75% cheaper, but restoring takes 24–72 hours.
- **Recycle Bin**: configure retention rules for deleted snapshots (from 1 day up to 1 year) to **recover from accidental deletion**.

---

## 5. EBS Multi-Attach

`Multi-Attach` lets **a single EBS volume attach to multiple instances at once**.

- Supported only with `io1` and `io2`.
- All instances must be **in the same AZ**.
- Up to **16 instances** can attach to one volume at a time.
- Each instance has full read/write access.
- Only for **cluster-aware applications** that manage concurrent writes (e.g., a clustered file system like GFS2). If the application is not designed for this, data will be corrupted.

---

## 6. EBS Encryption

When you enable encryption on an `EBS` volume (using `KMS` – Key Management Service):

- Data **at rest** inside the volume is encrypted.
- Data moving between the instance and the volume is encrypted.
- **All snapshots** created from that volume are encrypted.
- **All volumes created from** that snapshot are also encrypted.

Encryption/decryption happens **automatically, with almost no latency impact**. To encrypt an unencrypted volume: create a snapshot → copy the snapshot with encryption enabled → create a new volume from the encrypted snapshot.

---

## 7. AMI (Amazon Machine Image)

An `AMI` is a **template** used to launch EC2 instances. It contains the operating system, configuration, software, and data already installed.

- You can create a custom `AMI` from a pre-configured instance (installed software, patches, configuration) → when you launch a new instance, everything is ready and **boot time is faster** (pre-baking).
- An `AMI` is **region-scoped** (bound to a region): an AMI created in `us-east-1` can only be used in `us-east-1`.
- You can **copy an AMI to another region** for multi-region deployment.
- AMI sources: Public AMIs (provided by AWS), AMIs you create yourself, or AMIs purchased on the AWS Marketplace.

---

## 8. EC2 Instance Store

`Instance Store` is a disk **physically attached** to the physical host of the instance (not a network drive like EBS).

- **Extremely high** performance: very high IOPS because it is attached directly to the hardware.
- **Ephemeral**: data is **lost when the instance stops or terminates**. Data is also lost if the host hardware fails.
- Not for important data that must persist.
- Suitable for: **buffers, caches, scratch (temporary) data, reproducible data**, or data replicated across multiple instances.

You are responsible for backing up and replicating data yourself if you use Instance Store.

---

## 9. Amazon EFS

`EFS` (Elastic File System) is a **managed NFS network file system** that lets multiple EC2 instances **mount and share** the same file system.

- **Multi-AZ**: can be mounted from many AZs within the same region → high availability.
- **Many instances concurrently**: hundreds or thousands of instances can read/write at the same time.
- Linux **only** (NFS protocol, POSIX-compliant). **Not** for Windows.
- **Scales automatically** with demand — no need to provision in advance; **pay-per-use**.
- **More expensive** than `EBS gp2` (per GB), but in exchange it is flexible and shareable.
- **Storage Classes**: `Standard` (frequent access) and `Infrequent Access – IA` (cheaper, for rarely accessed files). A **lifecycle policy** automatically moves files to IA after N days without access.

Typical use cases: sharing content among many web servers, content management systems (CMS), shared data directories, and data-processing workflows.

---

## 10. EBS vs EFS vs Instance Store

| Criteria | `EBS` | `EFS` | `Instance Store` |
|----------|-------|-------|------------------|
| Type | Block storage (network) | File system (NFS) | Block storage (physical, local) |
| Scope | Single AZ | Multi-AZ (one region) | Bound to the physical host |
| Multiple instances | No (except Multi-Attach `io1`/`io2`) | Yes, hundreds/thousands concurrently | No |
| Operating system | Linux & Windows | Linux only (POSIX/NFS) | Linux & Windows |
| Persistence | Persistent | Persistent | **Ephemeral** |
| Performance | High (io2 very high) | High, auto-scaling | **Highest** (very high IOPS) |
| Use case | Boot volume, databases | Shared files across AZs | Cache, buffer, scratch |

---

## 11. FSx (brief mention)

`FSx` is a **managed** file system service for needs that EFS does not fit:

- **FSx for Windows File Server**: a shared file system for **Windows**, supporting the `SMB` protocol and Active Directory. This is the choice when you need a file share for Windows applications (EFS is Linux-only).
- **FSx for Lustre**: an extremely high-performance file system for **HPC** (High Performance Computing), machine learning, and large-scale data processing.

---

## Key exam points

- `EBS` = **one AZ**, by default **one instance** at a time. To move to another AZ → snapshot.
- **Multi-Attach** is only for `io1`/`io2`, up to **16 instances**, **same AZ**, and only for cluster-aware applications.
- `gp3` lets you provision **IOPS and throughput independently** of size; with `gp2`, IOPS is tied to size.
- `st1`/`sc1` are HDDs and **cannot be boot volumes**. `st1` for throughput, `sc1` for cold data.
- Snapshots: stored in `S3`, **incremental**, can be copied **cross-region/cross-AZ**; there is an **Archive tier** (cheap) and a **Recycle Bin** (accidental-deletion protection).
- `EBS` encryption (via `KMS`) automatically encrypts the volume, its snapshots, and any volume created from those snapshots.
- `AMI` is **region-scoped** and can be copied to another region; used to pre-bake instances for faster boot.
- `Instance Store` = **ephemeral** (lost on stop/terminate) but the **highest performance** → cache/buffer/scratch.
- `EFS` = **multi-AZ**, **many instances concurrently**, **Linux only (NFS/POSIX)**, auto-scaling, pay-per-use.
- Need a file share for **Windows** → use **FSx for Windows**; need HPC → **FSx for Lustre**.

---

## Summary

- `EBS` = a persistent network drive, locked to **one AZ**, one instance (except Multi-Attach `io1`/`io2`).
- Volume types: `gp3`/`gp2` (general-purpose SSD), `io1`/`io2` (Provisioned IOPS, databases), `st1` (throughput HDD), `sc1` (cold HDD).
- Snapshots are stored in S3, incremental, copyable cross-region; there is an Archive tier and a Recycle Bin. Encryption via `KMS`.
- `Instance Store` = **ephemeral**, highest performance → cache/buffer/scratch.
- `EFS` = multi-AZ NFS, shared by many instances, **Linux only**, auto-scaling, more expensive than EBS gp2.
- Need a Windows file share → `FSx for Windows`; need HPC → `FSx for Lustre`.
