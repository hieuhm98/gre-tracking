# AWS Monitoring – CloudWatch, CloudTrail, Config, X-Ray

## 1. Overview

On the **SAA-C03** exam, the monitoring and observability service family shows up very frequently, especially as "pick the right service for this scenario" questions. Four core services you must clearly distinguish:

- `CloudWatch` — monitors **performance**: metrics, logs, alarms, dashboards.
- `CloudTrail` — audits **WHO did WHAT** (audits API calls).
- `Config` — tracks **resource configuration** and checks **compliance**.
- `X-Ray` — **traces** requests as they flow through microservices.

In addition, `EventBridge` (formerly CloudWatch Events) is the backbone for event-driven architecture and scheduling.

Key point: the exam often presents a scenario and asks "which service do you use?" — you must know the boundaries between CloudWatch / CloudTrail / Config / X-Ray.

---

## 2. Amazon CloudWatch Metrics

`CloudWatch` collects **metrics** (performance data) over time.

- **Namespace**: a container for metrics, e.g. `AWS/EC2`, `AWS/RDS`. Custom metrics go in their own namespace.
- **Dimension**: an attribute that identifies a metric (e.g. `InstanceId`, `AutoScalingGroupName`). Up to 30 dimensions per metric.
- **Standard vs Detailed monitoring**:

| Type | Frequency | Cost |
|------|-----------|------|
| Standard monitoring | every 5 minutes | Free (EC2 default) |
| Detailed monitoring | every 1 minute | Paid, must be enabled |

- **Custom metrics**: pushed via the `PutMetricData` API or via the CloudWatch Agent.
- **Metric resolution**: standard resolution = 60 seconds; high resolution = down to 1 second (for custom metrics that need fine granularity).
- **VERY IMPORTANT**: CloudWatch does **NOT** collect EC2 **memory** and **disk** metrics by default — that data lives inside the guest OS. To get it you must install the **CloudWatch Agent** (unified agent). CPU, network, and hypervisor-level disk I/O are available out of the box.

---

## 3. Amazon CloudWatch Logs

`CloudWatch Logs` stores and queries logs centrally.

- **Log group**: the log container for an application/service. **Log stream**: a sequence of logs from a single source (one instance, one container).
- **Retention**: by default logs are kept **forever** (never expire) — you should set a retention period (1 day to 10 years) to save cost.
- **CloudWatch Logs Insights**: an interactive query language to analyze logs (filter, aggregate, find errors) without exporting to an external tool.
- **Subscription filters**: stream logs in near real time to `Kinesis Data Streams`, `Kinesis Data Firehose`, or `Lambda` for processing/forwarding.
- **Unified CloudWatch Agent**: pushes both **logs and metrics** (including memory/disk) from EC2 or **on-premises** servers to CloudWatch. This is the standard way to centralize logs from hybrid infrastructure.

Common log sources: SDKs, Lambda, VPC Flow Logs, API Gateway, ECS, Elastic Beanstalk.

---

## 4. Amazon CloudWatch Alarms

A `CloudWatch Alarm` watches a metric and triggers actions when a threshold is breached.

- **Three states**: `OK` (normal), `ALARM` (threshold breached), `INSUFFICIENT_DATA` (not enough data).
- **Period**: the evaluation window for the metric (e.g. 60s, 300s). **Evaluation periods**: the number of consecutive periods that must meet the condition before the alarm fires.
- **Actions** on entering ALARM:
  - **SNS notification** — send a notification (email, SMS, trigger Lambda...).
  - **EC2 action** — stop, terminate, reboot, or **recover** the instance when underlying physical hardware fails.
  - **Auto Scaling action** — scale the ASG in/out.
- **Composite alarm**: combines multiple alarms with AND/OR logic to reduce noise (fewer false alarms).
- You can also alarm on **metric math** (the result of an expression computed across multiple metrics).

---

## 5. Amazon CloudWatch Dashboards

`CloudWatch Dashboards` are customizable control panels that display metrics and alarms.

- Support **cross-region** and **cross-account** views on a single screen — ideal for centralized operations.
- A dashboard is a global resource and can be shared.

---

## 6. Amazon EventBridge (formerly CloudWatch Events)

`EventBridge` is a serverless event bus, the backbone for **event-driven** architecture and **scheduling**.

- **Event bus**: `default` (AWS events), `custom` (your applications), `partner` (third-party SaaS such as Zendesk, Datadog).
- **Rules**: match events by pattern or by **schedule**:
  - **cron** — fixed schedule (e.g. 8 AM every day).
  - **rate** — recurring schedule (e.g. every 5 minutes).
- **Targets**: `Lambda`, `SQS`, `SNS`, `Step Functions`, Kinesis... A single rule can fan out to many targets.
- **Schema registry**: discovers and stores event schemas and generates code bindings.
- Used to **decouple** components: service A emits an event, EventBridge routes it to service B without A needing to know about B.

Remember: need a **recurring scheduled job** (serverless cron) or want to **react to events** → think EventBridge.

---

## 7. AWS CloudTrail

`CloudTrail` serves **governance, compliance, and auditing** — it records **WHO called WHAT API, when, and from where**.

- **Enabled by default**: an **Event history** keeps the last 90 days of management events. To keep them longer/continuously, create a **Trail** that delivers logs to `S3` (and optionally CloudWatch Logs).
- **Event types**:

| Type | Contents | Default |
|------|----------|---------|
| Management events | Management operations (create/modify/delete resources, sign-in) | Logged |
| Data events | Data-plane operations (S3 object-level GetObject/PutObject, Lambda Invoke) | **NOT** logged (must enable, paid, high volume) |
| Insights events | Detect unusual API activity | Must be enabled |

- **Log file integrity validation**: verifies logs were not tampered with after being written (uses hashing/digital signatures).
- **Multi-region trail**: aggregates events across all regions. **Organization trail**: aggregates all accounts in AWS Organizations into one place.
- Classic question: "Who deleted this security group / made this API call?" → **CloudTrail**.

---

## 8. AWS Config

`Config` records the **configuration history** of resources and the **relationships** between them, used for **compliance checking**.

- Answers: "How is my resource currently configured? **What changed** over time? Is it **compliant** with policy?"
- **Config Rules**: managed (built-in) or custom (written with Lambda) to evaluate compliant/non-compliant. Example: "EBS volumes must be encrypted", "S3 buckets must not be public".
- **Remediation**: automatically fix non-compliant resources via **SSM Automation** (e.g. auto-enable encryption, auto-close a port).
- **Conformance packs**: bundle many rules + remediation to deploy at once (aligned to standards like PCI, HIPAA).
- **Per-region** — to cover an entire account you must enable it in each region (you can aggregate via an aggregator).
- **IMPORTANT**: Config does **NOT prevent** actions — it only **records and evaluates** after the fact (it is not a preventive guardrail like IAM/SCP).

---

## 9. AWS X-Ray

`X-Ray` provides **distributed tracing** for microservices applications.

- **Service map**: a visual diagram of request flow across services, helping you find **bottlenecks** and errors.
- A **trace** consists of multiple **segments** (one service) and **subsegments** (a small operation such as a DB query or API call).
- **Sampling**: only a fraction of requests is sampled to reduce cost and load while staying representative.
- **Integrations**: `Lambda`, `API Gateway`, `ECS`, `EC2`, Elastic Beanstalk (typically via the X-Ray SDK and/or the X-Ray daemon).
- Use it to analyze **end-to-end latency** and find which service is slowing a request.

---

## 10. Quick comparison: CloudWatch vs CloudTrail vs Config vs X-Ray

This is the classic differentiation table that the exam loves to ask:

| Service | Answers the question | Used for |
|---------|----------------------|----------|
| `CloudWatch` | "How is performance? CPU/RAM/errors?" | Metrics, logs, alarms, dashboards |
| `CloudTrail` | "**Who** called **what** API, and when?" | API activity auditing |
| `Config` | "Is the resource **compliant**? **What changed**?" | Configuration history & compliance |
| `X-Ray` | "**Where** is the request **slow** across microservices?" | Distributed tracing |

Quick mnemonics:
- "**Who did what**" → **CloudTrail**.
- "Compliant / what changed" (compliance / config change) → **Config**.
- "Performance / metrics / logs / alarm" → **CloudWatch**.
- "Trace / bottleneck across microservices" → **X-Ray**.

---

## Key exam points

- **EC2 memory and disk usage are NOT available** in CloudWatch by default — you must install the **CloudWatch Agent** (unified agent) to collect them (heavily tested).
- **CloudTrail** answers "**who called this API**" (audit). **Data events** (S3 object-level, Lambda Invoke) are **NOT logged by default** — you must enable them manually.
- **Config** is for "**is my resource compliant / what changed**", and can auto-fix violations via **SSM Automation remediation**. Config does **not prevent** actions.
- **EventBridge** = **scheduling (cron/rate)** and **event-driven / fan-out** architecture to Lambda, SQS, SNS, Step Functions.
- **CloudWatch Alarms** can trigger **Auto Scaling**, **SNS**, and **EC2 recovery** (recover an instance on hardware failure).
- **X-Ray** is for **tracing and finding bottlenecks** across microservices; **CloudWatch Logs Insights** is for querying/analyzing logs.
- Distinguish **CloudWatch (performance) vs CloudTrail (API audit) vs Config (compliance/config) vs X-Ray (tracing)** — the classic scenario question.

---

## Summary

- `CloudWatch` is the performance monitoring hub: **metrics, logs, alarms, dashboards**; remember you need the **agent** for memory/disk.
- `CloudTrail` records **every API call** for auditing — "who did what"; data events must be enabled manually.
- `Config` tracks resource **configuration + compliance** over time and can auto-remediate, but it does **not prevent** actions.
- `EventBridge` is the event bus for **scheduling** and **event-driven decoupling / fan-out**.
- `X-Ray` provides **distributed tracing** to find bottlenecks in microservices.
- Core exam skill: **read the scenario → pick the right one of the four services** based on keywords (who/compliance/performance/trace).
