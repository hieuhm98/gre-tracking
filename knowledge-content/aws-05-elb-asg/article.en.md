# ELB & Auto Scaling – High Availability & Scalability

## 1. Overview

A real-world application must handle **variable load** (few users at times, many at others) and **infrastructure failures** (a server or an entire AZ dying). Two core AWS services solve this:

- **ELB (Elastic Load Balancer)**: distributes traffic to multiple targets (EC2, containers, IPs) across multiple AZs → improves fault tolerance and enables horizontal scaling.
- **Auto Scaling Group (ASG)**: automatically adds/removes instances based on load → elasticity while maintaining availability.

This is one of the **most heavily tested topics in SAA-C03**. Questions are usually scenario-based: "which load balancer type", "how to auto scale", "how to achieve HA across AZs". Quick memory hook: **ALB = HTTP layer 7**, **NLB = TCP layer 4 + static IP**, **ASG = elasticity**.

---

## 2. Vertical vs Horizontal Scaling & High Availability (HA)

- **Vertical scaling**: increase the power of a single instance (e.g. `t2.micro` → `m5.large`). Bounded by hardware limits and usually requires a restart. Suited to non-distributed databases (RDS, ElastiCache).
- **Horizontal scaling (elasticity)**: increase the **number** of instances. Theoretically unbounded, suited to distributed systems / web tiers. This is the model ELB + ASG target.
- **High Availability (HA)**: run across **multiple Availability Zones (AZs)** so that if one AZ dies, another still serves traffic. HA can be active-active or active-passive.

Key idea: **horizontal scaling handles load; multi-AZ handles failure**. ELB + ASG combine both.

---

## 3. ELB Overview

**ELB** is a **managed** service (AWS handles scaling, patching, and HA of the load balancer itself). Core functions:

- Distribute traffic to multiple instances across multiple AZs.
- Perform **health checks** and only send traffic to healthy targets.
- Provide a **single endpoint (DNS name)** for the application.
- Handle **SSL/TLS termination**, separating public and private traffic.

AWS offers 4 types: **ALB, NLB, GWLB** (modern) and **CLB** (legacy, not recommended for new systems). An ELB can be **internet-facing** (public) or **internal** (private, VPC-only).

---

## 4. Application Load Balancer (ALB)

- Operates at **layer 7 (application)** → understands **HTTP/HTTPS/gRPC/WebSocket**.
- Smart routing:
  - **Path-based routing**: `/api` → target group A, `/images` → target group B.
  - **Host-based routing**: `api.example.com` vs `www.example.com`.
  - Routing by **HTTP header, query string, HTTP method, source IP**.
- Traffic is sent to a **target group** — which can contain **EC2, ECS tasks, Lambda, or private IPs**.
- Supports **redirects** (HTTP → HTTPS) and **fixed responses**.
- Passes client info via the **`X-Forwarded-For`** header (since the ALB acts as a proxy, the backend sees the ALB's IP as the source).

**Use when**: web apps / HTTP microservices needing content-based routing, or container/Lambda backends.

---

## 5. Network Load Balancer (NLB)

- Operates at **layer 4 (transport)** → handles **TCP, UDP, TLS**.
- **Extremely high performance, ultra-low latency** — millions of requests per second.
- Has a **static IP per AZ** and supports assigning an **Elastic IP** → ideal when you need **IP whitelisting** or a fixed IP requirement.
- NLB target groups point to **EC2, private IPs, or an ALB** (you can place an ALB behind an NLB).
- **Preserves the client's source IP** by default.

**Use when**: you need extreme throughput/low latency, non-HTTP protocols (gaming, IoT, raw TCP), or a **static IP / Elastic IP**.

---

## 6. Gateway Load Balancer (GWLB) & Classic Load Balancer (CLB)

**Gateway Load Balancer (GWLB)**:
- Operates at **layer 3 (network)** using the **GENEVE** protocol on port 6081.
- Used to deploy and scale third-party **virtual appliances**: firewalls, IDS/IPS, deep packet inspection.
- Acts as both a **transparent bridge** (traffic passes through it) and a load balancer for the appliance fleet.

**Classic Load Balancer (CLB)** — *legacy*:
- Old generation, operates at both layer 4 and layer 7 but lacks features (no path/host routing, one CLB serves one app).
- AWS recommends **against using it for new designs**; on the exam CLB is usually the "wrong answer" when a more suitable ALB/NLB exists.

---

## 7. Health Checks, Cross-zone LB & Stickiness

**Health checks**:
- ELB periodically probes targets and only routes to **healthy** ones. If a target fails → it stops receiving traffic.
- Configured by protocol + port + path (for HTTP), healthy/unhealthy thresholds, interval, and timeout.

**Cross-zone load balancing** (evenly distributes across targets in all AZs, not just within the node's own AZ):

| Type | Cross-zone by default | Inter-AZ data transfer charge |
|------|-----------------------|-------------------------------|
| ALB  | **Always on, free** (cannot be disabled at the LB level) | Not charged |
| NLB  | **Off** by default (can enable) | **Charged** when enabled |
| CLB  | **Off** by default (can enable, free) | Not charged |

**Stickiness (session affinity)**: forces a client to always reach the same target using a **cookie**. ALB/CLB support it (application-based or duration-based cookies); useful when the session is stored locally on the instance. NLB also offers stickiness based on source IP.

---

## 8. SSL/TLS, SNI & Connection Draining

- **SSL/TLS termination**: the LB decrypts HTTPS, offloading CPU from the backend. Certificates are managed via **ACM (AWS Certificate Manager)**.
- **SNI (Server Name Indication)**: allows **multiple certificates for multiple domains** on the same listener. **ALB and NLB support SNI; CLB does not** (CLB allows only 1 cert per LB).
- **Connection draining / Deregistration delay**: when an instance is removed or unhealthy, the LB **stops sending new requests** but **lets in-flight requests complete** for a period (default 300 seconds). Named **Connection Draining** (CLB) and **Deregistration Delay** (ALB/NLB).

---

## 9. Auto Scaling Group (ASG)

**ASG** ensures the desired number of instances is always running, automatically replaces dead instances, and scales with load.

- **Launch Template** (preferred; **launch configuration is deprecated**) defines: AMI, instance type, key pair, security group, user data, versioning, and support for mixing instance types / spot.
- Three capacity settings:
  - **Minimum**: the minimum number of instances always maintained.
  - **Desired**: the current target count (ASG tries to hold this number).
  - **Maximum**: the ceiling when scaling out.
- **Spans multiple AZs** → if one AZ dies, ASG launches instances in the remaining AZ (requires subnets in multiple AZs).
- **Health checks**: **EC2** type (based on instance status) and **ELB** type (based on the load balancer's health check — enable this to detect app failures even when the OS is still up).
- **Cooldown period**: after a scaling action, ASG **pauses** further actions (default 300s) to let metrics settle and avoid continuous scaling.
- **Termination policy**: the default prioritizes AZ balancing, then instances using the oldest launch template/config, then those closest to the next billing hour; it is customizable.
- ELB integration: new instances **automatically register into the target group**.

---

## 10. Scaling Policies

| Policy type | How it works | Example |
|-------------|--------------|---------|
| **Target Tracking** | Keep a metric at a target value; AWS computes the rest | Keep average CPU ~50% |
| **Simple / Step Scaling** | Triggered by a CloudWatch alarm; step scaling adds/removes based on how far the threshold is breached | CPU > 70% → +2 instances |
| **Scheduled** | Scale on a predefined schedule (time-predictable load) | Monday 9 AM raise desired to 10 |
| **Predictive** | ML forecasts future load from history and scales ahead | Provision capacity before peak hours |

- **Target Tracking** is the easiest to configure and the most common.
- **Scheduled** fits when you know peak times in advance (e.g. business hours).
- **Predictive** fits cyclic-but-variable load, scaling **proactively** rather than reactively.
- You can combine policies; ASG scales to whichever policy demands the most capacity at that moment.

---

## Key exam points

- **ALB = layer 7 (HTTP/HTTPS)** with **path-based & host-based routing** and target groups (EC2/ECS/Lambda/IP).
- **NLB = layer 4 (TCP/UDP)**, ultra-low latency, **static IP / Elastic IP** → choose it when you need a fixed IP or extreme throughput.
- **GWLB = layer 3, GENEVE**, for **virtual appliances** (firewall/IDS/IPS). **CLB = legacy**, avoid for new designs.
- **Cross-zone**: ALB is **always on & free**; NLB is **off by default** and **charges inter-AZ data** when enabled.
- **SNI** (multiple certs/multiple domains) only on **ALB and NLB**, not CLB.
- **Connection Draining (CLB) / Deregistration Delay (ALB/NLB)**: let in-flight requests finish before removing an instance.
- **Launch Template is preferred**, **launch configuration is deprecated**.
- ASG: remember **min / desired / max**, use **ELB health checks** to detect app failures, and **cooldown** to avoid rapid-fire scaling.
- **Target Tracking** = simplest; **Predictive** = proactive ML-based scaling; **Scheduled** = time-predictable load.
- ASG **spans multiple AZs** for HA and **automatically replaces** unhealthy instances.

---

## Summary

- **ELB** distributes traffic + health checks + a single endpoint; **ASG** scales the instance count and maintains HA — these two services usually go together.
- Pick a LB by layer: **ALB (HTTP/L7, content routing)**, **NLB (TCP/L4, static IP, high performance)**, **GWLB (security appliances)**, **CLB (legacy only)**.
- **Cross-zone** differs by LB type (ALB always on/free; NLB off by default and charged); **SNI** enables multiple domains on ALB/NLB.
- **ASG** uses a **launch template**, configures **min/desired/max**, **EC2/ELB health checks**, and **cooldown**.
- **Scaling policies**: Target Tracking (easiest), Simple/Step (alarm-driven), Scheduled (schedule-driven), Predictive (ML forecast).
- HA principle: **scale horizontally for load + multi-AZ for fault tolerance**.
