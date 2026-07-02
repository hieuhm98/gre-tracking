# CloudFront & Global Accelerator

## 1. Overview

Amazon `CloudFront` is AWS's **CDN (Content Delivery Network)** service, used to deliver content with low latency worldwide by caching content at **edge locations**. AWS `Global Accelerator` also operates at the edge but works differently: it does **not cache**; instead it optimizes network routing to your endpoints over the AWS global backbone.

These two "edge" services are commonly confused on the SAA-C03 exam. Exam relevance:

- Distinguish **when to use CloudFront (caches content)** from **when to use Global Accelerator (accelerates/routes, no cache)**.
- Know how to secure an S3 origin with `OAC` (the modern replacement for legacy `OAI`).
- Distinguish **Signed URLs** (1 file) from **Signed Cookies** (multiple files), Geo Restriction, and the requirement that the ACM certificate be in `us-east-1` for CloudFront.
- Remember Global Accelerator's 2 static anycast IPs.

## 2. CloudFront overview & edge locations

`CloudFront` has more than **400+ edge locations** (points of presence) worldwide. When a user requests content, it is served from the nearest edge location, reducing latency.

Key benefits:

- **Low latency & caching**: content is cached at the edge and served instantly on subsequent requests without calling back to the origin.
- **DDoS protection**: built-in AWS `Shield` (DDoS mitigation), and you can attach AWS `WAF` to filter traffic at the application layer (Layer 7).
- **Global distribution**: a single distribution serves globally.

Basic flow: Viewer → Edge Location (cache) → (on miss) → Origin.

## 3. Origins & OAC (S3 vs custom origin)

CloudFront fetches original content from an **origin**. There are two main types:

- **S3 bucket origin**: used to distribute static files. Secure it with `Origin Access Control` (`OAC`) to **allow only CloudFront to access the bucket**, blocking direct S3 access. `OAC` is the modern replacement for legacy `Origin Access Identity` (`OAI`) — AWS recommends `OAC` because it supports SSE-KMS, all regions, and HTTP methods like POST/PUT.
- **Custom origin (HTTP)**: any HTTP server — `ALB`, an `EC2` instance, an S3 static website endpoint, or an on-premises HTTP server. With ALB/EC2 as a custom origin, the endpoint must allow public HTTP access from CloudFront.

Core exam point: to **restrict S3 access to CloudFront only** → use `OAC` + a bucket policy allowing the CloudFront service principal.

## 4. Caching & Invalidation (Cache Policy, TTL)

CloudFront decides how to cache via **cache behaviors** attached to each path pattern (e.g., `/images/*`).

- **Cache Policy**: defines the **cache key** (the request components used to identify an object in cache: headers, cookies, query strings) and the **TTL** values (`min TTL`, `default TTL`, `max TTL`).
- **Origin Request Policy**: defines what gets **forwarded to the origin** (headers/cookies/query strings), separate from the cache key.
- **TTL**: controls how long an object is considered "fresh" in cache before CloudFront revalidates with the origin.
- **Invalidation**: proactively **removes an object from cache** before its TTL expires to force CloudFront to fetch a new version. You can invalidate by path (`/*` to clear everything). Note: invalidation has a cost; a more cost-effective alternative is to use **versioned filenames** (e.g., `app.v2.js`) to bust cache without invalidating.

## 5. Restricting content (Signed URLs vs Signed Cookies)

To deliver private content (e.g., paid video), CloudFront provides:

- **Signed URLs**: grant access to **a single file**; each file needs its own URL.
- **Signed Cookies**: grant access to **multiple files / entire content** without generating a URL per file.

| Criteria | Signed URL | Signed Cookie |
|---|---|---|
| Scope | 1 file | Multiple files / whole content |
| Use case | Downloading a specific object | Streaming many files, content libraries |
| Cookie-capable client | Not required | Required |
| Original URL changes | Yes (URL is re-signed) | No (URL stays the same) |

Both use a policy (expiration time, IP range, etc.) to restrict access.

## 6. Geo Restriction

`Geo Restriction` lets you **allow (allowlist)** or **deny (blocklist)** access by the user's **country** (based on IP → geo-IP database). Used for regional copyright/legal compliance. This is a control at the CloudFront distribution layer, independent of the origin.

## 7. HTTPS/TLS (ACM us-east-1)

CloudFront supports end-to-end HTTPS across two hops:

- **Viewer protocol policy**: between viewer and CloudFront (can be `Redirect HTTP to HTTPS` or `HTTPS Only` to enforce encryption).
- **Origin protocol policy**: between CloudFront and origin.

To use a custom domain with HTTPS, you need a TLS certificate in AWS `Certificate Manager` (`ACM`). **Important for the exam**: the ACM certificate used for CloudFront **must be in the `us-east-1` (N. Virginia) region**, regardless of where the origin lives.

## 8. CloudFront Functions vs Lambda@Edge

Both let you run code at the edge to customize requests/responses:

- **CloudFront Functions**: lightweight JavaScript, extremely low latency (sub-millisecond), runs at edge locations, used for simple operations like header manipulation, URL rewrite/redirect, simple token validation. Cheap and massively scalable.
- **Lambda@Edge**: runs Lambda (Node.js/Python) at Regional Edge Caches, more powerful, supports network calls and longer execution — used for more complex logic.

## 9. CloudFront vs S3 Cross-Region Replication (CRR)

Both reduce latency for distant users but via different mechanisms:

| Criteria | CloudFront | S3 Cross-Region Replication (CRR) |
|---|---|---|
| Mechanism | Cache at edge (400+ locations) with TTL | Replicate objects to a bucket in another region |
| Scope | Global | A few pre-configured regions |
| Data freshness | May be stale until TTL expires | Always current (near real-time) |
| Use case | Static/dynamic content, read-heavy, global distribution | Low latency for a few specific regions, compliance, backup |

In short: CloudFront for **global cached delivery**; CRR for **always-fresh data in a few specific regions / compliance**.

## 10. AWS Global Accelerator

`Global Accelerator` improves application **performance and availability** by routing traffic over the AWS global backbone instead of the public Internet.

- Provides you with **2 static anycast IPs** at the edge; traffic to these IPs enters the AWS backbone at the nearest edge location.
- Routes to the **nearest healthy endpoint**: `ALB`, `NLB`, `EC2`, or `Elastic IP`.
- Supports both **TCP and UDP**.
- **Fast failover** when a region/endpoint fails (health checks), within seconds.
- Does **NOT cache** content.

Good for: **non-HTTP** applications (gaming, IoT, VoIP), or HTTP that needs a **static IP** to allowlist or needs **fast regional failover**.

## 11. CloudFront vs Global Accelerator (comparison)

| Criteria | CloudFront | Global Accelerator |
|---|---|---|
| Purpose | Content delivery (CDN) | Acceleration & routing to endpoints |
| Cache | Yes, caches at edge | No cache |
| Protocol | Mainly HTTP/HTTPS | TCP/UDP (any) |
| IP | Distribution domain (no static IP) | 2 static anycast IPs |
| Use case | Web, video, static/dynamic files | Gaming, IoT, VoIP, static IP, fast regional failover |
| Edge behavior | Serves cached content | Forwards traffic onto backbone to endpoint |

## Key exam points

- `OAC` (replacing legacy `OAI`) is used to **restrict an S3 bucket to CloudFront access only**.
- **Signed URL = 1 file**; **Signed Cookie = multiple files / whole content**.
- **Global Accelerator = 2 static anycast IPs + NO cache + routes to nearest healthy endpoint** over the AWS backbone.
- **CloudFront caches content at the edge**; **Global Accelerator does NOT cache**, it only improves routing/availability.
- The **ACM certificate for CloudFront must be in `us-east-1`**.
- Non-HTTP (gaming/IoT/VoIP) or needing a static IP → **Global Accelerator**; global cached web content → **CloudFront**.
- Enforce HTTPS with the viewer protocol policy (`Redirect HTTP to HTTPS` / `HTTPS Only`).
- CloudFront vs CRR: CloudFront cache has a TTL (may be stale); CRR is always current for a few specific regions/compliance.

## Summary

- `CloudFront` is a CDN that caches content at 400+ edge locations, integrates `Shield`/`WAF`, and reduces global latency.
- Secure an S3 origin with `OAC`; a custom origin can be an `ALB`/`EC2`/HTTP server; control caching via `Cache Policy`, `TTL`, and `invalidation`.
- Protect private content with **Signed URLs** (1 file) or **Signed Cookies** (multiple files); restrict by country with Geo Restriction; the ACM certificate must be in `us-east-1`.
- `Global Accelerator` provides **2 static anycast IPs**, routes over the AWS backbone to the nearest healthy endpoint, supports TCP/UDP, fails over fast, and does **not cache**.
- Selection rule: cache web content → CloudFront; accelerate/route non-HTTP or need static IP/fast regional failover → Global Accelerator.
