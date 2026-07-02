# AWS Extra Storage & Data Transfer

## 1. Overview

Beyond `S3`, `EBS`, and `EFS`, AWS has a group of storage and data-movement services that appear frequently on the **SAA-C03** exam. This group addresses three main needs:

- **Managed file systems** for specialized workloads (Windows, HPC, NetApp, ZFS) → `Amazon FSx`.
- **Hybrid cloud**: connecting on-premises infrastructure to AWS → `AWS Storage Gateway`.
- **Data migration**:
  - **Offline** (physical disks, huge volumes) → `AWS Snow Family`.
  - **Online** (over the network, scheduled, preserves metadata) → `AWS DataSync`.
  - **Standard file protocols** for partners → `AWS Transfer Family` (SFTP/FTPS/FTP).
- **Centralized, policy-based backup** across services → `AWS Backup`.

Exam questions usually take a scenario form: "a company needs… which is the most suitable / most cost-effective solution?". The key is to **recognize the right keywords** (offline/online, SMB/NFS, HPC, hybrid, SFTP…) and map them to the matching service.

---

## 2. Amazon FSx – Managed File Systems

`Amazon FSx` provides high-performance file systems that are fully managed by AWS (patching, backups, HA). There are **4 types**, each targeting a different ecosystem.

| FSx type | Protocol | Use when | Highlights |
|----------|----------|----------|------------|
| `FSx for Windows File Server` | SMB | Windows applications, enterprise file shares | **Active Directory** integration, NTFS ACLs, DFS |
| `FSx for Lustre` | Lustre (POSIX) | **HPC**, ML, analytics, video processing | Hundreds of GB/s throughput, **direct S3 link** |
| `FSx for NetApp ONTAP` | **NFS, SMB, iSCSI** | Migrating NetApp workloads, multi-protocol | Dedup, compression, snapshots, replication |
| `FSx for OpenZFS` | NFS | Migrating from on-premises **ZFS** | Instant snapshots and clones, low latency |

**Quick recall:**
- See **"Windows / SMB / Active Directory"** → `FSx for Windows File Server`.
- See **"HPC / machine learning / high throughput / linked to S3"** → `FSx for Lustre`.
- See **"multi-protocol / NFS + SMB + iSCSI / dedup"** → `FSx for NetApp ONTAP`.
- See **"migrate from ZFS"** → `FSx for OpenZFS`.

`FSx for Lustre` has 2 deployment modes: **Scratch** (temporary, high performance, no data replication, cheap) and **Persistent** (long-lived, replicated within one AZ, self-healing).

---

## 3. AWS Storage Gateway – The Hybrid Bridge

`AWS Storage Gateway` is a **hybrid** service: you place a gateway (a VM or physical appliance) on-premises, local applications access it like local storage, but the actual data is pushed to AWS. There are **3 types**:

| Gateway type | On-prem protocol | Stored on AWS | Used for |
|--------------|------------------|---------------|----------|
| `File Gateway` | **NFS / SMB** | S3 (+ lifecycle to Glacier) | File shares, document storage |
| `Volume Gateway` | **iSCSI (block)** | EBS snapshots in S3 | Disk backup, disaster recovery |
| `Tape Gateway` | **iSCSI VTL** (virtual tape) | S3 / S3 Glacier | Replacing physical tape libraries |

**Volume Gateway** has 2 important modes:
- **Cached mode**: the primary data lives on S3, only **frequently used data is cached** on-premises → saves local capacity.
- **Stored mode**: the **entire dataset** lives on-premises, with an async backup to S3 → low-latency access to the whole dataset.

**Recall:** see **"hybrid / on-premises still needs access but wants to store on AWS"** → `Storage Gateway`. See **"replace tape / tape backup"** → `Tape Gateway`.

---

## 4. AWS Snow Family – Offline Data Migration

`AWS Snow Family` is physical hardware AWS ships to you; you copy data onto it and ship it back — used when the **network is too slow or the data is too large** to transfer online. Many devices also run **edge computing** on site.

| Device | Capacity | Characteristics |
|--------|----------|-----------------|
| `AWS Snowcone` | ~8 TB (HDD) / 14 TB (SSD) | Small, light, edge; can also use `DataSync` |
| `Snowball Edge Storage Optimized` | ~80 TB | Storage-focused, bulk transfer |
| `Snowball Edge Compute Optimized` | ~80 TB + optional GPU | **Compute/edge**-focused, runs EC2 & Lambda on site |
| `AWS Snowmobile` | ~100 PB / container truck | Moves **exabytes**, entire data centers |

**Rule of thumb:** if an online transfer would take **more than ~1 week** or the data is **> 10 TB** over a slow link → choose **Snow Family**. **PB-scale → multiple Snowball devices**; **~100 PB (a whole data center) → Snowmobile**.

Data is **encrypted** with KMS; after being imported into AWS, the destination is typically **S3**, from which it can be forwarded to other services.

---

## 5. AWS Transfer Family – SFTP/FTPS/FTP into AWS

`AWS Transfer Family` is a managed service that lets partners/customers use **traditional file protocols** to push data straight into `S3` or `EFS`, without you operating your own FTP server.

| Protocol | Meaning |
|----------|---------|
| **SFTP** | SSH File Transfer Protocol (most common, encrypted) |
| **FTPS** | FTP over SSL/TLS |
| **FTP** | Plain FTP (VPC-only, unencrypted) |

Strength: it keeps your partners' existing SFTP workflow while the backend is S3/EFS; it integrates with IAM and supports authentication via Directory Service or a custom identity provider.

**Recall:** see **"partner needs to upload via SFTP/FTPS into S3/EFS"** → `Transfer Family`.

---

## 6. AWS DataSync – Online Sync That Preserves Metadata

`AWS DataSync` is a high-speed **online data-migration** service that can be **scheduled**, used to:
- Move data from **on-premises → AWS** (via an **agent** installed on-premises).
- Move data **between AWS services** (S3 ↔ EFS ↔ FSx).

| Characteristic | DataSync |
|----------------|----------|
| On-prem source | NFS, SMB, HDFS, object storage (via agent) |
| AWS destination | **S3, EFS, FSx (Windows/Lustre/ONTAP/OpenZFS)** |
| Metadata/permissions | **Preserved** (owner, timestamps, POSIX/ACL) |
| Schedule | One-time or recurring on a schedule |

**Quick Snow vs DataSync comparison:**

| Criterion | Snow Family | DataSync |
|-----------|-------------|----------|
| Transfer channel | **Offline** (physical disk) | **Online** (over the network) |
| When to use | Very large data, slow network | Adequate network, need **periodic sync** |
| Preserves metadata | Yes | **Yes (emphasized on the exam)** |

**Recall:** see **"online / scheduled sync / preserves metadata & permissions"** → `DataSync`. See **"offline / network too slow / tens of TB and up"** → `Snow Family`.

---

## 7. AWS Backup – Centralized, Policy-Based Backup

`AWS Backup` is a service for **centralized backup management** across many AWS services from one place, instead of hand-rolled scripts per service.

Key components:
- **Backup plan**: a policy covering frequency, retention, and **lifecycle** (transition to cold storage).
- **Backup vault**: where backups are stored; can be **locked (Vault Lock)** in a WORM model to prevent deletion.
- **Cross-Region & Cross-Account backup**: copies to another region/account for **DR** and compliance.

Supports many services: `EC2`, `EBS`, `RDS`, `Aurora`, `DynamoDB`, `EFS`, `FSx`, `Storage Gateway`, and more. Uses **tags** to assign resources to a backup plan automatically.

**Recall:** see **"centralized backup across services / policy-based / cross-region / compliance"** → `AWS Backup`.

---

## Key exam points

- **`FSx for Lustre` = HPC / ML / high-throughput** and can be **directly linked to S3**; `FSx for Windows` = **SMB + Active Directory**.
- **`FSx for NetApp ONTAP`** is the **multi-protocol** choice (NFS + SMB + iSCSI) with dedup; **`FSx for OpenZFS`** is for **migrating from ZFS**.
- **`Storage Gateway` = hybrid**. `File Gateway` (NFS/SMB→S3), `Volume Gateway` (iSCSI, cached vs stored), `Tape Gateway` (replaces tape, →S3/Glacier).
- **Volume Gateway cached** = primary data on S3; **stored** = primary data on-prem, async backup to S3.
- **`Snow Family` is for large OFFLINE transfers**: rule of thumb **> 10 TB or slow network** → use Snow. Snowmobile ~100 PB for a whole data center.
- **`DataSync` is for ONLINE, scheduled transfers that PRESERVE metadata/permissions**; it can write to **S3, EFS, FSx** and sync between AWS storages.
- **`Transfer Family` = SFTP/FTPS/FTP into S3 or EFS** (managed service for partners).
- **`AWS Backup` = centralized, policy-based backup**, supporting cross-region/cross-account and **Vault Lock (WORM)**.
- Common trap: if the question says **"online + recurring"** → choose DataSync, NOT Snowball; if it says **"network too slow / petabytes"** → choose Snow, NOT DataSync.

---

## Summary

- **`Amazon FSx`** offers 4 managed file systems: **Windows (SMB/AD)**, **Lustre (HPC, S3-linked)**, **NetApp ONTAP (multi-protocol)**, **OpenZFS (ZFS migration)**.
- **`Storage Gateway`** is the **hybrid** bridge with 3 types: File (NFS/SMB→S3), Volume (iSCSI, cached/stored), Tape (VTL→S3/Glacier).
- **`Snow Family`** is for large **offline** data transfer (Snowcone → Snowball Edge → Snowmobile) and edge compute.
- **`DataSync`** moves data **online, on a schedule, preserving metadata**; **`Transfer Family`** brings data in over **SFTP/FTPS/FTP** into S3/EFS.
- **`AWS Backup`** manages **centralized, policy-based** backups, supporting cross-region/cross-account and Vault Lock.
- The key to answering: read the keywords — **offline vs online, file protocol, HPC, hybrid, SFTP** — to pick the **most suitable / most cost-effective** service.
