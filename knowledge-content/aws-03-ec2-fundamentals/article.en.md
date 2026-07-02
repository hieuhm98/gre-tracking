# Amazon EC2 – Fundamentals

## 1. Overview

**Amazon EC2 (Elastic Compute Cloud)** is the service that provides **virtual servers** on AWS. It is an **IaaS (Infrastructure as a Service)** model — you rent compute resources (CPU, RAM, disk, network) and manage the operating system and applications on top yourself.

Why it matters for the SAA-C03 exam:

- EC2 is AWS's **core** compute service — it appears in a large number of questions.
- You need a solid grasp of **Security Groups** (stateful, allow-only), **User Data** (bootstrap), and **purchasing options** (pick the right one per workload to optimize cost).
- The exam loves to ask "given this workload, which do you choose — On-Demand / Reserved / Spot / Savings Plans?".

---

## 2. What Is EC2?

An **EC2 instance** is a virtual machine you configure yourself. When you create an instance, you choose:

- **AMI** — an image of the OS + initial software.
- **Instance type** — the hardware profile (number of vCPUs, RAM, network).
- **Storage** — usually EBS (durable network disk) or Instance Store (temporary disk).
- **Security Group** — a virtual firewall that controls traffic.
- **Key pair** — an SSH key pair to log in.
- **User Data** (optional) — a bootstrap script that runs on first launch.

You are responsible for managing the OS, patching, and software — AWS is responsible only for the underlying physical infrastructure (the **Shared Responsibility** model).

---

## 3. Instance Types & Naming Convention

An instance name has the form: **family + generation + size**.

Example `m5.2xlarge`:

| Component | Value | Meaning |
|-----------|-------|---------|
| Family | `m` | General purpose family |
| Generation | `5` | 5th generation (higher number = newer) |
| Size | `2xlarge` | Size — bigger means more vCPUs/RAM |

Sizes increase in order: `nano` → `micro` → `small` → `medium` → `large` → `xlarge` → `2xlarge` → `4xlarge`... Each step typically **doubles** the resources of the previous one.

Another example: `t3.micro` = family `t` (burstable), generation 3, size micro (very small, part of the Free Tier).

---

## 4. Instance Families

Each family is optimized for a different type of workload:

| Family | Example prefix | Optimized for | Typical use case |
|--------|---------------|---------------|------------------|
| **General Purpose** | `t`, `m` | Balanced CPU/RAM/network | Web server, app server, dev environments |
| **Compute Optimized** | `c` | High CPU | Batch, encoding, HPC, game servers, ML inference |
| **Memory Optimized** | `r`, `x`, `z` | Large RAM | In-memory databases, caching, big-data analytics |
| **Storage Optimized** | `i`, `d`, `h` | High disk I/O, high throughput | Data warehouse, NoSQL databases, log processing |
| **Accelerated Computing** | `p`, `g`, `inf`, `trn` | GPU / accelerator hardware | ML training, graphics, video, scientific computing |

Memory aid: `c` = compute, `r` = RAM, `i` = IOPS/storage, `g`/`p` = GPU.

---

## 5. AMI (Amazon Machine Image)

An **AMI** is an **image (template)** containing the operating system, configuration, and software needed to boot an instance.

- When launching an instance, you **must choose an AMI** as the starting point.
- AMI types: **AWS-provided** (Amazon Linux, Ubuntu, Windows...), **AWS Marketplace** (third-party, may be paid), **Community**, and **Custom AMI** (one you build yourself).
- A **Custom AMI** is very useful: preinstall software + configuration → create an AMI → launch many identical instances **faster** (no need to reinstall from scratch).
- An AMI is **tied to a region** — to use it in another region you must **copy the AMI** there.

---

## 6. User Data (bootstrap script)

**User Data** is a script (usually bash on Linux) you provide when creating an instance to **automatically configure** the machine at startup.

- Runs **only once**, on the **first boot**.
- Runs with **root** privileges (Linux).
- Used to: update the system, install software, download config files, start services.

Example:

```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
```

This is **bootstrapping** — turning a blank AMI into a ready-to-serve server without logging in manually.

---

## 7. Security Groups

A **Security Group (SG)** is a **virtual firewall** operating at the instance level, controlling inbound and outbound traffic.

Key characteristics (frequently tested):

- **Stateful**: if inbound traffic is allowed, the **return traffic is automatically allowed** — and vice versa. You do **not** need a separate rule for the return direction.
- **Allow rules only** — there are **no deny rules**. No matching rule = **denied by default**.
- Each rule defines: protocol, port range, and a **source/destination** — which can be an **IP/CIDR** or **another Security Group** (very handy for internal traffic between instances).
- Scoped to a **region + VPC** — it cannot be reused in another VPC/region.
- An instance can have **multiple SGs**; a single SG can be attached to **multiple instances**.

Debugging tip: if SSH (port 22) or HTTP (port 80) times out → it is usually because the Security Group has not opened that port.

---

## 8. Key Pairs / SSH

To log in to an EC2 Linux instance, AWS uses a **key pair** (an asymmetric key pair):

- The **public key** is stored by AWS on the instance; the **private key** (the `.pem` file) is **kept by you**.
- Log in via SSH: `ssh -i key.pem ec2-user@<public-ip>` (port **22**).
- AWS does **not keep a copy** of the private key — losing the `.pem` file means losing the default way to SSH into the machine.
- On Windows, you typically use RDP (port **3389**) with a password decrypted using the private key.

---

## 9. EC2 Purchasing Options

Choosing the right purchasing option **saves cost** based on the commitment level and predictability of the workload:

| Option | Commitment | Discount | Use case |
|--------|-----------|----------|----------|
| **On-Demand** | None | None (list price, pay per second/hour) | Short-term, unpredictable workloads, dev/test |
| **Reserved Instances (RI)** | 1 or 3 years | ~ up to 72% | Steady, always-on, predictable workloads |
| **Savings Plans** | 1 or 3 years (commit $/hour) | ~ up to 72% | Like RIs but **more flexible** across instance type/region |
| **Spot Instances** | None | ~ up to 90% | Interruption-tolerant workloads: batch, data processing, CI |
| **Dedicated Hosts** | On-Demand or reserved | Highest | "Per-socket/per-core" license compliance, need a dedicated physical server |
| **Dedicated Instances** | None / RI | Moderate | Hardware isolation at the account level (not shared with other tenants) |
| **Capacity Reservations** | None (pay in full whether used or not) | None | Guarantee that **capacity is available** in an AZ when needed |

Details on some options:

- **Reserved Instances**: two flavors — **Standard** (highest discount, locks the configuration) and **Convertible** (lower discount but lets you **change** family/OS/tenancy). The more you pay up front (All Upfront > Partial > No Upfront), the deeper the discount.
- **Spot Instances**: the cheapest, but AWS can **reclaim** them when it needs capacity, with only a **2-minute** notice. A **Spot Fleet** = a collection of Spot + (optionally) On-Demand instances to reach a target capacity at an optimal price.
- **Dedicated Hosts vs Dedicated Instances**: both run on dedicated hardware, but Dedicated Hosts let you **see and control** the physical sockets/cores (for BYOL licensing), while Dedicated Instances only guarantee tenant isolation.

---

## 10. Key Exam Points

- **Security Groups are STATEFUL**: return traffic is automatically allowed — no separate rule needed for the return direction.
- **Security Groups have allow rules only**, no deny; no match = blocked. (By contrast, a Network ACL is stateless and has both allow and deny.)
- An SG can reference **another SG** as a source — very handy for tier-to-tier traffic (e.g., web → app).
- **User Data** runs **once** on **first boot** with root privileges — used for bootstrapping.
- **Spot** is cheapest (up to ~90%) but can be interrupted with a **2-minute** notice → only for interruption-tolerant workloads.
- Choose the purchasing option by workload: **steady/predictable → Reserved or Savings Plans**; **spiky/interruptible → Spot**; **short-term/unpredictable → On-Demand**.
- **Savings Plans are more flexible than Reserved Instances** (commit by $/hour instead of a specific configuration).
- **Dedicated Hosts** for **per-core/per-socket licensing** needs (BYOL); **Dedicated Instances** only isolate the hardware.
- The instance name `m5.2xlarge` = family `m` + generation `5` + size `2xlarge`.
- **AMIs are region-scoped** — to use one in another region you must copy it.

---

## 11. Summary

- **EC2** = a virtual server (IaaS); you manage the OS + app, AWS manages the infrastructure.
- Read an **instance type** as `family + generation + size`; pick the **family** by workload (compute/memory/storage/GPU).
- **AMI** = the template to launch from; **User Data** = a bootstrap script that runs once at boot.
- **Security Group** = a **stateful**, allow-only firewall, scoped to region+VPC, able to reference an IP/CIDR or another SG.
- **Purchasing options**: On-Demand (flexible), Reserved/Savings Plans (long-term commitment, deep discount), Spot (cheapest but interruptible), Dedicated Hosts/Instances (dedicated hardware).
- The core exam skill: **map a workload → the right purchasing option** to optimize cost.
