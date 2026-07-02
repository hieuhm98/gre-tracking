# Amazon Route 53 – DNS Service

## 1. Overview (DNS + Route 53)

**DNS** (Domain Name System) is the "phone book" of the Internet: it resolves human-friendly names (`example.com`) into the IP addresses machines need in order to connect (`93.184.216.34`). Without DNS, we'd have to memorize IPs instead of names.

**Amazon Route 53** is AWS's managed DNS service. The number "53" is the port used by the DNS protocol. Route 53 is simultaneously:

- **Authoritative DNS** — you fully control the records, and Route 53 is the official source of truth answering queries for your domain.
- **Domain Registrar** — you can buy/register domain names directly in Route 53.
- Provider of **health checks** to monitor endpoints.

An often-tested highlight: Route 53 is the **only AWS service that offers a 100% availability SLA**.

---

## 2. DNS fundamentals & record types

A DNS query passes through several tiers: the client asks a **DNS Resolver** (usually the ISP's), the resolver asks a **Root server** → **TLD server** (`.com`, `.vn`...) → **Authoritative server** (Route 53) to get the final IP, then caches it according to the TTL.

Record types important for SAA-C03:

| Record | Meaning | Example |
|--------|---------|---------|
| `A` | Maps a hostname → `IPv4` address | `example.com → 93.184.216.34` |
| `AAAA` | Maps a hostname → `IPv6` address | `example.com → 2606:2800::...` |
| `CNAME` | Maps a hostname → another hostname | `www.example.com → example.com` |
| `NS` | Nameservers of the hosted zone (which servers answer for the domain) | `ns-123.awsdns-45.com` |

There are also `MX` (mail server), `TXT` (domain verification, `SPF`, `DKIM`)... but the four above are the focus.

---

## 3. Route 53 & Hosted Zones (public vs private)

A **hosted zone** is a "container" holding the records that describe how to route traffic for a domain and its subdomains.

- **Public Hosted Zone** — answers queries coming from the **public Internet**. Use it when you want Internet users to reach `app.example.com`.
- **Private Hosted Zone** — answers queries only **inside one or more VPCs** you associate. Use it for internal names like `db.internal.company` that must not be exposed to the Internet.

When you create a public hosted zone, Route 53 gives you a set of **`NS` records**; you declare these nameservers at your registrar to "point" the domain at Route 53.

Cost: each hosted zone is billed monthly, plus a per-query charge.

---

## 4. TTL (Time To Live)

**TTL** is the number of seconds a DNS record is **cached** on the client/resolver side before it must ask Route 53 again.

- **High TTL** (e.g. 24 hours): fewer queries to Route 53 → cheaper, but when you change a record the change propagates slowly (clients keep using the old value in cache until the TTL expires).
- **Low TTL** (e.g. 60 seconds): more traffic to Route 53 (more expensive) but changes take effect quickly — useful before a migration.

Practical tip: **lower the TTL before a big change**, apply the change, let it stabilize, then raise the TTL again.

Important note: with an **Alias record** you **cannot set the TTL** — Route 53 manages the TTL for you.

---

## 5. CNAME vs Alias

This topic is almost guaranteed to appear on the exam.

- **CNAME**: points a hostname to **another hostname** (any hostname, even outside AWS). Major limitation: it **CANNOT be used at the zone apex / root domain** (i.e. the "bare" `example.com` with no subdomain). Only for subdomains like `www.example.com`.
- **Alias**: a Route 53-specific extension. It maps a hostname to an **AWS resource** (ELB, CloudFront, S3 static website, API Gateway, or even another record in the same zone). Alias is **FREE**, **works at the zone apex**, is always type `A`/`AAAA`, and has **no settable TTL** (Route 53 handles it).

| Criterion | `CNAME` | `Alias` |
|-----------|---------|---------|
| Points to | Any hostname (AWS or not) | Only **AWS** resources (ELB, CloudFront, S3, API GW...) |
| Zone apex (root domain) | **NOT** allowed | **Yes** — works fine at apex |
| Record type | `CNAME` | `A` or `AAAA` |
| TTL | You set it | Managed by AWS (not settable) |
| Query cost | Billed | **Free** |

Memory rule: **need to point the root domain (`example.com`) to an ELB/CloudFront/S3 → you must use Alias, CNAME won't work.**

---

## 6. Routing Policies — overview

The routing policy decides how Route 53 answers a query. Note: a routing policy here does **not** route real network traffic like a load balancer — it only decides **which value (IP/hostname) to return** for a DNS query.

### Simple

Returns one record. It may contain **multiple values** in the same record — Route 53 returns all of them and the **client picks one at random**. Simple routing **does not support health checks**.

### Weighted

Splits traffic by **weight** across multiple resources. For example 90/10 for **canary** deployments or testing a new version. Set a weight to 0 to temporarily stop sending traffic to a resource. Supports health checks.

### Latency-based

Routes to the **Region with the lowest latency** for the user. Note: it's the **lowest latency**, NOT necessarily the geographically nearest Region.

### Failover (active-passive)

There is a **primary** resource and a **secondary (standby)**. Route 53 **REQUIRES** a **health check attached to the primary**; when the primary becomes unhealthy, Route 53 automatically shifts traffic to the secondary.

### Geolocation

Routes based on the **user's physical location** (by continent, country, or US state). Used for content/language localization or regulatory compliance. You should configure a **default record** for locations that don't match.

### Geoproximity (distance + bias)

Routes based on the geographic location of **users and resources**, but lets you set a **bias** to **expand/shrink** a resource's serving area, deliberately shifting traffic. Requires **Route 53 Traffic Flow** to be enabled.

### Multi-Value Answer

Returns **up to 8 healthy records** per query; the client picks. It uses health checks so it only returns healthy records. This is a basic form of client-side load balancing — it is **NOT a substitute for a real load balancer (ELB)**.

### Routing policies comparison

| Policy | Core idea | Health check | When to use |
|--------|-----------|--------------|-------------|
| **Simple** | 1 record (may hold multiple values), client picks at random | Not supported | Simple pointer to 1 resource |
| **Weighted** | Split traffic by weight | Yes | Canary, A/B, gradual shift |
| **Latency** | Region with lowest latency | Yes | Speed optimization across Regions |
| **Failover** | Active-passive; primary + secondary | **Required** on primary | Standby, disaster recovery |
| **Geolocation** | Based on the user's real location | Yes | Localization, legal compliance |
| **Geoproximity** | Distance + bias to shift traffic | Yes | Shift traffic between Regions |
| **Multi-Value** | Up to 8 healthy records, client picks | Yes | Simple client-side LB |

---

## 7. Health Checks

Health checks monitor the "health" of resources and let Route 53 automatically drop broken endpoints from the answers it returns. There are 3 types:

- **Endpoint health check** — monitors a **public endpoint** (by IP or domain, over `HTTP`/`HTTPS`/`TCP`). About **15 global AWS health checkers** send requests; the endpoint is considered healthy/unhealthy based on a **threshold**. The endpoint must be **reachable from the public Internet**.
- **Calculated health check** — **combines multiple child health checks** using AND/OR/NOT logic; healthy when the number of healthy children meets a threshold. Used to assess the aggregate health of a whole system.
- **CloudWatch Alarm health check** — based on the state of a **CloudWatch Alarm**. This is the way to monitor **private resources** not exposed to the Internet: you create a metric/alarm in CloudWatch and let the health check track that alarm.

| Health check type | What it monitors | Use case |
|-------------------|------------------|----------|
| **Endpoint** | Public endpoint over HTTP/HTTPS/TCP, ~15 global checkers | Public app/endpoint |
| **Calculated** | Combines several child health checks (AND/OR/NOT) | Overall system health |
| **CloudWatch Alarm** | State of a CloudWatch Alarm | **Private** resources / metric-based |

---

## Key exam points

- **To point the zone apex / root domain (`example.com`) to an AWS resource like ELB, CloudFront, S3 website, or API Gateway → you must use `Alias`, `CNAME` will NOT work.**
- `Alias` is **free**, points only to **AWS resources**, is always type `A`/`AAAA`, and has **no settable TTL**.
- `CNAME` points to any hostname but **cannot be used at the zone apex**.
- **Latency-based** = the Region with the **lowest latency** (not the geographically nearest). **Geolocation** = based on the **user's real location** and should have a **default record**.
- **Failover** routing **REQUIRES** a **health check attached to the primary**.
- **Multi-Value Answer** returns up to **8 healthy records**, works client-side, and does **not replace an ELB**.
- Health checks for **private resources** → use a **CloudWatch Alarm health check**.
- Route 53 offers a **100% availability SLA**.

## Summary

- **Route 53** = AWS managed DNS + registrar + health checks, with a **100% SLA**.
- **Hosted zones** hold records: **public** (Internet) or **private** (inside a VPC).
- **CNAME vs Alias**: use `Alias` (free, type `A`/`AAAA`, no TTL) when you need to point the **root domain** to an **AWS resource**; `CNAME` is only for subdomains.
- **Routing policies**: Simple, Weighted (canary), Latency (fastest Region), Failover (needs a health check), Geolocation (by location + default), Geoproximity (bias), Multi-Value (≤8 healthy records).
- **Health checks**: Endpoint (public), Calculated (combined), CloudWatch Alarm (for private resources).
