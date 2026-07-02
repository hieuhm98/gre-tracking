# Amazon VPC – Virtual Private Cloud Networking

## 1. Overview

`Amazon VPC` (Virtual Private Cloud) is a **private virtual network** that you define and control inside an AWS Region. It lets you launch resources (EC2, RDS, Lambda...) in an isolated network space, with full control over the IP range, subnets, route tables, gateways, and security layers.

VPC is an **extremely important topic on the SAA-C03 exam**. Many scenario questions revolve around: public vs private subnets, giving private instances Internet access, the difference between `Security Group` (stateful) vs `NACL` (stateless), choosing a `VPC Endpoint` to reach S3 without the Internet, and hybrid connectivity options (VPN vs Direct Connect vs Transit Gateway).

Core things to remember:
- A `VPC` is tied to **one Region**; a `subnet` is tied to **one Availability Zone (AZ)**.
- `Security Group` is **stateful**, `NACL` is **stateless**.
- `NAT Gateway` lets instances in a private subnet reach the Internet outbound without accepting inbound connections.
- `Gateway Endpoint` (S3/DynamoDB) is **free**; `Interface Endpoint` (PrivateLink) is charged.
- `VPC Peering` is **non-transitive**.

---

## 2. VPC, CIDR & Subnets

When you create a VPC, you choose a private IP range using a **CIDR block**, e.g. `10.0.0.0/16` (65,536 IPs). You should use private ranges (RFC 1918): `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`.

A **subnet** divides the VPC into network segments, each with a sub-CIDR (e.g. `10.0.1.0/24` = 256 IPs). Each subnet lives in **exactly one AZ** — which is why we create multiple subnets across multiple AZs to achieve high availability.

> Note: AWS **reserves 5 IPs** in every subnet (the first 2 and 3 special addresses), so a `/24` only gives you 251 usable IPs.

**Public subnet vs Private subnet** — the difference is in the **route table**, not the subnet itself:
- **Public subnet**: the route table has a `0.0.0.0/0` route pointing to an `Internet Gateway (IGW)`. Instances with a Public IP can reach the Internet directly (in and out).
- **Private subnet**: has **no** direct route to an IGW. To reach the Internet it must go through a `NAT Gateway`.

Put web servers / load balancers in public subnets; put databases and application servers in private subnets for protection.

---

## 3. Internet Gateway & Route Tables

An `Internet Gateway (IGW)` is an **AWS-managed, horizontally redundant, horizontally scaled** component that allows communication between the VPC and the Internet. Each VPC attaches **at most 1 IGW**.

For a subnet to be public, **3 conditions** are needed:
1. The VPC has an IGW attached.
2. The subnet's route table has a route `0.0.0.0/0 → igw-xxxx`.
3. The instance has a **Public IP** or **Elastic IP**.

A `Route Table` holds the rules (routes) that decide where traffic goes. Each subnet is associated with exactly one route table (if not explicitly assigned, it uses the VPC's **main route table**). The `local` route (covering the VPC CIDR) always exists and cannot be deleted — it lets every subnet in the VPC talk to each other.

---

## 4. NAT Gateway vs NAT Instance

Instances in a private subnet sometimes need to **reach the Internet** to download updates, patches, or call external APIs — but must **not accept inbound connections initiated from the Internet**. That is the role of NAT (Network Address Translation).

- `NAT Gateway`: a **fully AWS-managed** service, placed in a **public subnet**, attached to an Elastic IP, auto-scales bandwidth, highly available within one AZ. To be fault-tolerant you deploy a **NAT Gateway in each AZ**.
- `NAT Instance`: an EC2 that **you manage yourself** running NAT software — cheaper but you must patch, scale, and handle HA yourself; it is the **legacy** option.

| Criterion | NAT Gateway | NAT Instance |
|-----------|-------------|--------------|
| Management | Fully AWS-managed | You manage it (EC2) |
| Bandwidth | Auto-scales up to ~100 Gbps | Limited by instance type |
| Availability | High within one AZ (one per AZ) | You configure HA yourself |
| Security Group | Not applicable | Can attach an SG |
| Bastion / port forwarding | No | Possible |
| Recommendation | **Default choice** | Only for special customization |

> Exam memory: private instances need to **reach the Internet for updates** → choose `NAT Gateway`.

---

## 5. Security Groups vs NACL (Stateful vs Stateless)

This is the **most frequently tested comparison** on the exam.

A `Security Group (SG)` operates at the **ENI/instance** level and is **stateful**: if you allow **inbound** traffic, the **outbound response** is automatically allowed (and vice versa). An SG has **Allow rules only** (no Deny).

A `Network ACL (NACL)` operates at the **subnet** level and is **stateless**: inbound and outbound are evaluated **independently** — you must explicitly open **both inbound and outbound** (including the ephemeral port range for response traffic). A NACL has **both Allow and Deny rules** and processes them **in rule-number order** from lowest to highest.

| Criterion | Security Group | NACL |
|-----------|----------------|------|
| Scope | Instance / ENI | Entire Subnet |
| State | **Stateful** (remembers connections) | **Stateless** (does not) |
| Rules | Allow only | Allow **and** Deny |
| Rule evaluation | Evaluates all rules | In rule-number order, stops at first match |
| Return traffic | Allowed automatically | Must open ephemeral ports explicitly |
| Used for | Instance-level security | Filtering/blocking at subnet level (e.g. block one IP) |

> Exam tip: to **block a specific IP address** → use a `NACL` (SGs have no Deny rule). For ordinary instance security → use a `Security Group`.

---

## 6. VPC Peering (Non-transitive)

`VPC Peering` creates a **private 1-to-1 network connection** between two VPCs (same or different Region, same or different account), letting them communicate over private IPs as if in one network. You must update the **route tables** on both sides and the CIDRs **must not overlap**.

The most important exam fact: **peering is NON-transitive**. If A peers with B and B peers with C, then A **cannot** automatically talk to C — you must create a separate A–C peering. As the number of VPCs grows, the full-mesh model becomes complex → use a `Transit Gateway` instead.

---

## 7. VPC Endpoints (Gateway vs Interface / PrivateLink)

A `VPC Endpoint` lets resources in a VPC access **AWS services privately**, without going over the Internet, IGW, or NAT — traffic stays inside the AWS network (more secure, often cheaper). There are **2 types**:

- **Gateway Endpoint**: only for **`S3` and `DynamoDB`**. It works by adding a route to the **route table**. **Free**.
- **Interface Endpoint** (based on **`AWS PrivateLink`**): creates an **ENI with a private IP** in the subnet, used for **most other AWS services** (SQS, SNS, Kinesis, API Gateway, Systems Manager...) and third-party services too. **Charged per hour + data**.

| Criterion | Gateway Endpoint | Interface Endpoint (PrivateLink) |
|-----------|------------------|----------------------------------|
| Supported services | Only `S3` & `DynamoDB` | Most AWS services + third-party |
| Mechanism | Adds a route to the route table | ENI + private IP in the subnet |
| Cost | **Free** | Charged per hour + data |
| Security Group | Not applicable | Yes (controlled by SG) |
| DNS | Uses the service's public DNS | Has a private DNS name |

> Exam memory: private instances need to reach `S3` **without the Internet** and **with no endpoint charge** → use a `Gateway Endpoint`.

---

## 8. Hybrid Connectivity (VPN, Direct Connect, Transit Gateway)

When you need to connect **on-premises (your own data center)** to AWS:

- `Site-to-Site VPN`: an **IPsec encrypted tunnel over the public Internet**. **Fast and cheap** to set up, but bandwidth and latency depend on the Internet.
- `Direct Connect (DX)`: a **dedicated, private physical connection** from on-premises to AWS. Stable bandwidth, low latency, **does not traverse the public Internet** — but takes **weeks to provision** and costs more.

| Criterion | Site-to-Site VPN | Direct Connect (DX) |
|-----------|------------------|---------------------|
| Path | Over the public Internet | Dedicated physical link |
| Encryption | Yes (IPsec built in) | Not by default (add VPN over DX) |
| Bandwidth/latency | Varies with the Internet | Stable, low, consistent latency |
| Setup time | Minutes–hours | Weeks |
| Cost | Low | Higher |

`Transit Gateway (TGW)` is a **central hub** connecting **many VPCs and on-premises networks** in a hub-and-spoke model, supporting **transitive routing** — solving exactly the non-transitive limitation of VPC Peering. Use it when connecting dozens/hundreds of VPCs.

> Exam tip: need **high, stable, private bandwidth** → `Direct Connect`. Need **fast & cheap** → `Site-to-Site VPN`. Need to **connect many VPCs at scale** → `Transit Gateway`.

---

## 9. VPC Flow Logs & Bastion Host

`VPC Flow Logs` capture **IP traffic metadata** (source/destination IP, ports, protocol, ACCEPT/REJECT) flowing through the VPC. They can be enabled at the **VPC, subnet, or ENI** level and exported to `CloudWatch Logs` or `S3`. Used for **monitoring, troubleshooting connectivity (why something is blocked), and security investigation**. Note: Flow Logs **do not capture packet contents (payload)**, only metadata.

A `Bastion Host` (a.k.a. jump box) is an EC2 placed in a **public subnet** that acts as an **intermediary** for administrators to SSH/RDP safely into instances in **private subnets**. Only the bastion is exposed to the Internet (and its source IP should be restricted); the private instances have no Public IP.

> Modern alternative: `AWS Systems Manager Session Manager` allows access to private instances **without a bastion and without opening SSH ports** — this is often the "most secure" answer on newer exams.

---

## 10. A Typical 3-tier Architecture

A standard 3-tier web architecture on a VPC (spread across multiple AZs for HA):

- **Web tier (public subnet)**: an `Application Load Balancer` and/or web servers receive Internet traffic through the IGW.
- **Application tier (private subnet)**: application servers / EC2 handle logic; reach the Internet for updates via a `NAT Gateway`.
- **Data tier (private subnet)**: `RDS`/databases, with **no** Internet access, accepting connections only from the application tier.

Layered security: the web SG opens only 443 from the Internet; the app SG accepts only from the web SG; the DB SG accepts only the database port from the app SG (nested SG references). Access `S3` from the private subnet via a `Gateway Endpoint`.

---

## Key exam points

- `VPC` = one Region; `Subnet` = one AZ. Multiple AZs = high availability.
- **Public vs Private subnet** is distinguished by **whether the route table has a route to an IGW**, not by a subnet attribute.
- `Security Group` = **stateful**, Allow only, instance level. `NACL` = **stateless**, Allow+Deny, subnet level. To **Deny a specific IP → NACL**.
- To give **private instances Internet access for updates** → `NAT Gateway` (placed in a public subnet).
- To reach `S3`/`DynamoDB` privately and **for free** → `Gateway Endpoint`. Other AWS services privately → `Interface Endpoint (PrivateLink)`.
- `VPC Peering` is **non-transitive**; CIDRs must not overlap. Many VPCs at scale → `Transit Gateway` (transitive).
- On-prem connectivity: `VPN` (fast/cheap, over Internet, encrypted) vs `Direct Connect` (private, stable, high bandwidth, slow to provision).
- `VPC Flow Logs` = traffic metadata (no payload) for debugging/auditing.
- Secure access to private instances: `Bastion Host` or, better, `SSM Session Manager` (no open SSH needed).

## Summary

- A `VPC` is an isolated virtual network in one Region; it is split into `subnets` tied to each AZ, routed by route tables and gateways.
- Public instances reach the Internet via an `IGW`; private instances reach the Internet via a `NAT Gateway`.
- Two security layers: `Security Group` **stateful** at the instance, `NACL` **stateless** at the subnet (only NACLs have Deny rules).
- Reach AWS services privately with `VPC Endpoints`: Gateway (S3/DynamoDB, free) or Interface/PrivateLink (other services, charged).
- Connect many VPCs with `Peering` (non-transitive) or `Transit Gateway` (transitive, at scale); connect on-prem with `VPN` or `Direct Connect`.
- Use `VPC Flow Logs` for monitoring; `Bastion Host`/`SSM` for secure private-instance access; a 3-tier architecture places the DB in a private subnet.
