# More Solutions Architecture & Other Services

## 1. Overview

This section pulls together the **solution patterns** that show up most often in the SAA-C03 exam, plus a set of **other AWS services** for which you only need to remember a "one-line purpose" to pick the right answer.

The exam rarely asks about detailed configuration. Instead it describes a scenario and asks you to choose the **most appropriate** service/pattern. So the study strategy is:

- Learn the **architecture patterns**: event-driven, caching, decoupling, IP blocking, HPC, metadata.
- Memorize **one line** per remaining service.
- Remember a few **classic exam traps**: only `NACL` can block an IP (a Security Group cannot deny), `Session Manager` gives a shell without SSH, `CloudFormation` = IaC...

---

## 2. Event-driven architecture

Event-driven architecture lets components **communicate asynchronously** without depending directly on each other (loose coupling).

| Service | Role in event-driven |
|---------|----------------------|
| `SNS` | Pub/Sub — one message delivered to many subscribers (fan-out) |
| `SQS` | Queue — buffers messages, async processing, decouples producer/consumer |
| `EventBridge` | Event bus — routes events by rule, integrates SaaS & AWS services, supports schedules |
| `Lambda` | Serverless event processing, triggered by SNS/SQS/EventBridge |

**Classic fan-out pattern:** `SNS` → multiple `SQS` queues → each queue has its own consumer. One event is processed in parallel by many systems without the producer knowing.

**When to choose which?**
- Need **content/rule-based routing** across many sources → `EventBridge`.
- Need to **fan-out** one message to many targets → `SNS`.
- Need **buffering, retries, no message loss** → `SQS`.

---

## 3. Caching strategies

Caching reduces latency and offloads the backend/database. AWS offers caching at several layers:

| Service | Caches what |
|---------|-------------|
| `CloudFront` | Caches static/dynamic content at edge locations (CDN), close to end users |
| `ElastiCache` (Redis/Memcached) | Caches application data, sessions, DB query results |
| `DynamoDB Accelerator (DAX)` | In-memory cache dedicated to `DynamoDB`, cuts reads to microseconds |
| `API Gateway cache` | Caches API endpoint responses to reduce backend calls |

**Exam rule:** "reduce relational database load / store sessions" → `ElastiCache`; "accelerate DynamoDB reads" → `DAX`; "distribute content globally, reduce user latency" → `CloudFront`.

---

## 4. Decoupling

Decoupling makes systems **more fault-tolerant** and lets them **scale independently**.

- `SQS`: an intermediary queue. If the consumer dies, messages stay in the queue → no data loss. Producer and consumer scale independently.
- `SNS`: separates a producer from many consumers via pub/sub.
- Combining `SNS + SQS` (fan-out) is the most common decoupling pattern in the exam.

**Exam trap:** if a scenario says "handle traffic spikes, avoid losing requests when the backend is overloaded" → use `SQS` as a buffer in front of the backend/Auto Scaling.

---

## 5. Blocking IPs: `Security Group` vs `NACL` vs `WAF` vs `Shield`

This is a **heavily trapped** topic. Each tool operates at a different layer:

| Tool | Layer | Block a specific IP? | Characteristics |
|------|-------|----------------------|-----------------|
| `Security Group` | Instance (ENI) | CANNOT deny | **ALLOW rules only**, stateful, no "deny" |
| `Network ACL (NACL)` | Subnet | YES | **Has both allow & DENY**, stateless, numbered rule order |
| `AWS WAF` | Layer 7 (HTTP) | YES | IP rules, rate-limiting, blocks SQLi/XSS, attaches to ALB/CloudFront/API GW |
| `AWS Shield` | DDoS (L3/L4, L7 with Advanced) | Automatic | DDoS protection; Standard free, Advanced paid |

**Classic trap:** "Block a specific malicious IP address at the subnet level" → **`NACL`** (because Security Groups have no deny rule). "Block IPs by request rate / layer-7 web attacks" → **`WAF`**. "Protect against large-scale DDoS attacks" → **`Shield`** (Advanced).

---

## 6. High Performance Computing (HPC)

HPC needs **low-latency, high-bandwidth networking** between nodes. AWS combines several services:

- `Placement Group` of type **Cluster**: places EC2 instances close together in the same AZ for the lowest network latency and highest bandwidth.
- `EFA (Elastic Fabric Adapter)`: a special network adapter for HPC node-to-node communication (MPI), bypassing the kernel to reduce latency.
- `FSx for Lustre`: a high-performance parallel file system for large data volumes (HPC, ML).
- `Enhanced Networking` (ENA): increases bandwidth and reduces network latency for an instance.

**Exam pattern:** "HPC workload needs the fastest node-to-node communication" → **`Cluster Placement Group` + `EFA`**; "high-performance parallel storage for HPC" → **`FSx for Lustre`**.

---

## 7. EC2 Instance Metadata Service (IMDS)

`IMDS` lets an EC2 instance **query information about itself** (metadata) from a special internal URL:

```
http://169.254.169.254/latest/meta-data/
```

- You can retrieve: instance-id, IP, AZ, temporary IAM role credentials, user-data...
- **IMDSv1**: direct query (less secure — vulnerable to exploitation via SSRF).
- **IMDSv2** (recommended): requires a session token, defending against SSRF. AWS recommends **enforcing IMDSv2**.

**Exam trap:** "a more secure way to access metadata / defend against SSRF" → **IMDSv2**.

---

## 8. Other AWS services (remember one line)

| Service | Purpose (one line) |
|---------|--------------------|
| `CloudFormation` | IaC: declarative templates that create infrastructure as stacks; has drift detection, change sets, StackSets (multi-account/region) |
| `AWS CDK` | Define infrastructure in a programming language (TypeScript, Python...), synthesizes to CloudFormation |
| `Elastic Beanstalk` | PaaS: deploy apps quickly, AWS manages the platform underneath; developer-focused |
| `Amazon SES` | Send email (transactional & marketing) at scale |
| `Amazon Pinpoint` | Customer engagement: SMS/email/push campaigns, segmentation & analytics |
| `AWS Amplify` | Fullstack web/mobile hosting + backend (auth, API, storage) |
| `AWS Batch` | Run large-scale batch computing on ECS/EC2/Fargate/Spot |
| `AWS AppSync` | Managed GraphQL API |
| `Amazon SWF` | Legacy workflow orchestration — prefer `Step Functions` for new projects |
| `AWS Systems Manager (SSM)` | Fleet management: Session Manager, Patch Manager, Parameter Store, Run Command — no SSH needed |
| `CodeCommit` | Managed Git repository |
| `CodeBuild` | Build & test source code |
| `CodeDeploy` | Deploy to EC2 / Lambda / ECS |
| `CodePipeline` | Orchestrate the whole CI/CD pipeline |
| `CodeArtifact` | Manage packages/artifacts (npm, Maven, PyPI...) |
| `CodeGuru` | ML-based code review & performance profiling |
| `AWS SAM` | IaC dedicated to serverless (an extension of CloudFormation) |
| `Amazon WorkSpaces` | Managed virtual desktops (VDI) in the cloud |
| `AppStream 2.0` | Stream desktop applications through a browser |

**Details on a few commonly asked services:**

- `SSM Session Manager`: open a shell into EC2 **without opening SSH ports, without a bastion host, without a key pair** — every session is logged. This is the answer to "securely access an instance without using SSH".
- `CloudFormation` vs `Elastic Beanstalk`: CloudFormation = general **infrastructure as code (IaC)**; Beanstalk = **easy application deployment** with a managed platform.
- The **Code\*** family: CodeCommit (holds code) → CodeBuild (build/test) → CodeDeploy (deploy) → CodePipeline (ties it all into automated CI/CD).

---

## Key exam points

- `NACL` is the only tool that can **block (deny) a specific IP** at the subnet level; a `Security Group` **only allows** and cannot deny.
- `CloudFormation` = declarative IaC (stacks, drift, change sets, StackSets); `CDK` writes in a programming language then synthesizes to CloudFormation.
- `Elastic Beanstalk` = fast app deployment, AWS manages the platform (developer-focused PaaS).
- `SSM Session Manager` = shell into EC2 **without SSH / bastion / key pair**, with logging.
- HPC: **`Cluster Placement Group` + `EFA`** for fast node-to-node; **`FSx for Lustre`** for high-performance storage.
- **IMDSv2** is more secure than IMDSv1 (defends against SSRF); metadata lives at `169.254.169.254`.
- Caching: `CloudFront` (CDN edge), `ElastiCache` (session/DB cache), `DAX` (DynamoDB), `API Gateway cache`.
- Event-driven & decoupling: `SNS` (fan-out), `SQS` (buffer/retry), `EventBridge` (rule-based routing).
- `WAF` = IP/rate rules at layer-7; `Shield` = DDoS protection.

## Summary

- This SAA-C03 section is about **choosing the right service for the scenario** rather than detailed configuration.
- Memorizing **one line** per service in the "other services" table is enough to eliminate wrong answers.
- The three most common traps: **`NACL` to block an IP**, **`Session Manager` instead of SSH**, **`CloudFormation` is IaC**.
- For HPC, always think **Cluster Placement Group + EFA + FSx for Lustre**.
- The **Code\*** family forms a CI/CD pipeline; `CodePipeline` is the "conductor" that orchestrates it.
- Prefer **IMDSv2** and **loose coupling** (SNS/SQS/EventBridge) when the scenario is about security and system durability.
