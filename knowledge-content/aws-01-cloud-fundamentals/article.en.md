# Cloud Computing & AWS Global Infrastructure

## 1. Overview

**Cloud computing** is the on-demand delivery of IT resources (servers, storage, databases, networking, software) over the internet, paid for as you use them (**pay-as-you-go**).

Instead of buying and running your own data center, you "rent" `AWS` resources and scale up or down within minutes.

**Why does it matter for the SAA-C03 exam?** It is the foundation for every other domain. You must have a solid grasp of **Regions**, **Availability Zones (AZs)**, and **Edge Locations**, plus how to choose a Region — because questions about availability, latency, and compliance all revolve around them.

---

## 2. Service models: IaaS / PaaS / SaaS

The three models differ in how much you manage versus what the provider manages:

| Model | You manage | Provider manages | AWS example |
|-------|------------|------------------|-------------|
| **IaaS** (Infrastructure as a Service) | OS, runtime, application, data | Virtualization, physical servers, network, storage | `EC2`, `VPC`, `EBS` |
| **PaaS** (Platform as a Service) | Application, data | OS, runtime, infrastructure | `Elastic Beanstalk`, `RDS` |
| **SaaS** (Software as a Service) | Only user configuration/data | Everything else | `Amazon WorkMail`, Gmail |

Quick rule: moving from **IaaS → PaaS → SaaS**, you manage **less and less**, and the provider handles **more and more**.

There are also deployment models: **Cloud** (fully in the cloud), **On-premises** (self-run), and **Hybrid** (a mix of both).

---

## 3. The six advantages of cloud

AWS highlights 6 key advantages (they frequently appear on the exam):

1. **Trade fixed expense (CapEx) for variable expense (OpEx)** — no upfront server purchase, pay only for what you use.
2. **Benefit from massive economies of scale** — millions of customers share capacity → AWS's input costs are lower → lower prices for you.
3. **Stop guessing capacity** — scale up or down to match real demand, with no excess or shortage.
4. **Increase speed and agility** — provision resources in minutes instead of weeks.
5. **Stop spending money running data centers** — AWS handles hardware, power, cooling, and physical security.
6. **Go global in minutes** — deploy your application in multiple Regions to serve users closer to them.

---

## 4. Region

A **Region** is a separate geographic area in the world (e.g., `us-east-1` — N. Virginia, `ap-southeast-1` — Singapore).

- Each Region contains **multiple Availability Zones** (usually **3**, with a minimum of **3** for most newer Regions).
- Regions are **independent** of each other: data is **not** automatically replicated between Regions (unless you configure it).
- Each Region has a code (`us-east-1`, `eu-west-1`, `ap-northeast-1`, ...).

The Region is the top-level boundary for **data residency (compliance)** and **fault isolation**.

---

## 5. Availability Zone (AZ)

An **Availability Zone (AZ)** is **one or more discrete data centers** with independent power, cooling, and networking, located within a Region.

- One AZ = **1+ physical data center** (a favorite exam fact!).
- AZs within the same Region are far enough apart to avoid being hit by the same disaster, yet close enough for **low-latency** connectivity (single-digit millisecond).
- AZ codes look like `us-east-1a`, `us-east-1b`, `us-east-1c`, ...

**Multi-AZ design** is the standard way to achieve **high availability**: if one AZ fails, the application in another AZ keeps running.

---

## 6. Edge Location & Point of Presence (PoP)

**Edge Locations** are content-delivery points spread across **many more cities** than there are Regions — used to bring content closer to end users.

- They are the foundation of `CloudFront` (CDN) — caching static content and reducing latency.
- They also serve `Route 53` (DNS), `AWS Global Accelerator`, and `AWS WAF`.
- A **Point of Presence (PoP)** = Edge Locations + Regional Edge Caches together.

The number of Edge Locations is **much larger** than the number of Regions and AZs — because the goal is to be "close" to users everywhere.

---

## 7. How to choose a Region

Four main factors when choosing a Region (remember the **4 criteria**):

1. **Compliance / legal** — which country/area the data must reside in (GDPR in the EU, local data laws, ...). This is often the first **mandatory** factor.
2. **Latency** — pick the Region closest to your end users for the fastest response.
3. **Price** — costs differ between Regions; `us-east-1` is usually the cheapest.
4. **Service availability** — not every Region offers every service; new services typically launch in `us-east-1` first.

Exam tip: if the question says "data must stay within the country" → choose based on **compliance**; if it says "reduce latency for users" → choose based on **latency**.

---

## 8. Global vs Region-scoped services

Some AWS services are **global**, while others are **tied to a Region**:

| Global (not tied to a Region) | Region-scoped (tied to a Region) |
|-------------------------------|----------------------------------|
| `IAM` (users, roles, policies) | `EC2`, `EBS` |
| `Route 53` (DNS) | `S3` (bucket name is global but data lives in 1 Region) |
| `CloudFront` (CDN) | `VPC`, subnets |
| `AWS WAF` (with CloudFront) | `RDS`, `DynamoDB` (per Region) |
| `AWS Organizations` | `Lambda`, `SQS`, `SNS` |

Note: an `S3` bucket is created **in a Region** (data is stored there), but the **bucket name is globally unique**.

---

## 9. Shared Responsibility Model

AWS splits security responsibility into two parts:

- **AWS is responsible for security *of* the cloud** — physical infrastructure, hardware, the underlying network, virtualization, and the physical facilities of Regions/AZs.
- **The customer is responsible for security *in* the cloud** — data, OS configuration, patching, `IAM` management, encryption, security group configuration, and firewalls.

The principle: **AWS handles the "of the cloud" part, you handle the "in the cloud" part.** The split shifts by service (with `S3` or `Lambda`, AWS handles more than with `EC2`).

---

## 10. Console, CLI & SDK

There are three main ways to interact with AWS:

- **Management Console** — a web interface you operate with a mouse, good for learning and exploring.
- **CLI (Command Line Interface)** — a command-line tool; configured with `aws configure` (enter Access Key, Secret Key, Region, output format). Example: `aws s3 ls`.
- **SDK (Software Development Kit)** — programming libraries for Python (`boto3`), JavaScript, Java, Go, ... to call AWS APIs from inside your application.

All three call the same underlying set of **AWS APIs**. The CLI and SDK authenticate using **Access Keys** (not the console password).

---

## 11. AWS Free Tier

The **Free Tier** lets you try many services for free within limits, split into 3 types:

- **12-month free** — free for the first 12 months after sign-up (e.g., `EC2` t2.micro 750 hours/month, `S3` 5GB).
- **Always Free** — always free within a limit (e.g., `Lambda` 1 million requests/month, `DynamoDB` 25GB).
- **Trials** — free for a short period after first activation.

The Free Tier lets you learn and experiment at no cost — but you must **monitor your usage** so you are not billed once you exceed the limits.

---

## Key exam points

- **AZ = one or more discrete data centers**; a **Region has ≥ 3 AZs** (usually exactly 3). This is a commonly tested fact.
- AZs in a Region are connected with **low latency** (single-digit ms) but are physically **fault-isolated** → use **Multi-AZ** for high availability.
- **Regions are independent**: data is not auto-replicated between Regions → you must configure cross-Region replication if needed.
- Choose a Region by **compliance → latency → price → service availability**; compliance is usually the mandatory deciding factor.
- **Edge Locations** outnumber Regions/AZs; they serve `CloudFront`, `Route 53`, and `Global Accelerator` to reduce latency.
- **Global** services: `IAM`, `Route 53`, `CloudFront`, `AWS Organizations`. Meanwhile `EC2`, `VPC`, and `RDS` are **Region-scoped**.
- Shared Responsibility: **AWS handles "of the cloud", the customer handles "in the cloud"** (data, IAM, OS patching, configuration).
- `S3` bucket: **globally unique name** but **data resides in 1 Region**.

---

## Summary

- The cloud delivers IT resources on demand with pay-as-you-go pricing; the three models **IaaS / PaaS / SaaS** differ in how much you self-manage.
- AWS infrastructure consists of **Regions** (geographic areas) → each containing **≥ 3 AZs** (each AZ is 1+ data center) → plus widely spread **Edge Locations** to reduce latency.
- **Multi-AZ** is the standard for high availability; **Multi-Region** is for disaster recovery and global reach.
- Choose a Region based on **compliance, latency, price, and service availability**.
- **Shared Responsibility Model**: AWS secures the infrastructure ("of the cloud"), the customer secures data and configuration ("in the cloud").
- Interact via **Console / CLI (`aws configure`) / SDK**; the **Free Tier** lets you learn for free within limits.
