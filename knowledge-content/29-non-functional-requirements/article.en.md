# Non-Functional Requirements (NFR)

## 1. What is an NFR and why do BAs often miss them?

**Functional Requirements** describe *what* the system does:
> "A user can search for products by name."

**Non-Functional Requirements** describe *how well* the system does it:
> "Search results must return within 1 second across 10,000 products."

BAs often miss NFRs because:
- They don't appear directly on the UI
- Stakeholders don't say them out loud (but they expect them)
- They only surface when the system breaks under real load

The consequence: developers build the right features, but the system is slow, crashes frequently, or is insecure — and nobody realizes this is a missing-requirement defect.

---

## 2. The most important NFR categories

### Performance — Speed

*"How fast does the system respond?"*

```
Key metrics:
- Response time: the time from request to response
- Throughput: the number of requests processed per second
- Latency: delay

Concrete NFR examples:
✅ "The product listing page loads in < 2 seconds on a 4G connection"
✅ "The search API returns results in < 500ms across 1 million records"
✅ "The reporting dashboard loads in < 5 seconds with 12 months of data"

❌ Too vague:
"The system must be fast"
"The page must load in a reasonable time"
```

**Questions the BA needs to ask:**
- How many records will there be after 1 year? After 5 years?
- What is the maximum wait a user will accept for this screen?
- Which feature is on the "critical path" — where users abandon if it's slow?

---

### Scalability — Ability to grow

*"How many users can the system handle at the same time?"*

```
Two types of scaling:
- Vertical scaling: upgrade to a more powerful server (limited and expensive)
- Horizontal scaling: add more servers (more flexible)

NFR examples:
✅ "The system must handle 500 concurrent users at launch"
✅ "It must scale to 5,000 concurrent users within 6 months without a rewrite"
✅ "Database queries must not slow down as data grows from 10k to 1M records"
```

**Questions the BA needs to ask:**
- How many users will be online at the same time during peak time?
- When is peak time? (9 AM? End of the month? Black Friday?)
- What is the projected user growth over the next year?

---

### Availability — Being up and ready

*"What percentage of the time is the system available?"*

```
Uptime SLA:
99%    = 87.6 hours downtime/year  (not acceptable for production)
99.9%  = 8.76 hours downtime/year  (acceptable for many systems)
99.95% = 4.38 hours downtime/year
99.99% = 52.6 minutes downtime/year (high-availability)
99.999%= 5.26 minutes downtime/year (mission-critical: banking, healthcare)

NFR examples:
✅ "The system must achieve 99.9% uptime each month (committed SLA)"
✅ "Planned maintenance must not exceed 2 hours/month, outside business hours"
✅ "The payment system must achieve 99.99% uptime"
```

**Questions the BA needs to ask:**
- If the system is down for 1 hour, what is the business loss?
- Is there any time window where downtime is absolutely unacceptable? (e.g., trading hours)
- Is a maintenance window allowed? When?

---

### Reliability — Trustworthiness

*"Does the system process things correctly, even when errors occur?"*

```
Reliability ≠ Availability:
- Availability: the system is up
- Reliability: the system processes correctly while it is up

Examples:
- A system with 100% uptime that miscalculates money = available but not reliable
- A system that is occasionally down but always correct when running = not always available but reliable

NFR examples:
✅ "No order data may be lost, even if the server crashes mid-operation"
✅ "Payments must be idempotent — calling the API twice must not charge twice"
✅ "Report data must be consistent — same filter, same result"
```

---

### Security — Protection

*"How does the system protect data and access?"*

```
NFR examples:
✅ "Passwords must be hashed with bcrypt, never stored as plaintext"
✅ "The API must authenticate via JWT, with tokens expiring after 24h"
✅ "Data must be transmitted over HTTPS; HTTP is not allowed"
✅ "National ID (CCCD/CMND) data must be encrypted in the database"
✅ "5 failed logins → block the IP for 15 minutes"
```

*(More detail in topic 30 — Security & Privacy Thinking)*

---

### Maintainability — Ease of upkeep

*"How long does it take to fix a bug? How hard is it to onboard a new dev?"*

```
NFR examples:
✅ "Unit test code coverage must be at least 70%"
✅ "Every API must have documentation (Swagger)"
✅ "Logs must be sufficient to debug a production issue in < 30 minutes"
✅ "A new deployment must take under 15 minutes and support automatic rollback"
```

---

### Usability — Ease of use

*"Can users learn to use it quickly?"*

```
NFR examples:
✅ "A new user must complete a basic task in < 5 minutes without training"
✅ "The system must comply with WCAG 2.1 AA (accessibility)"
✅ "On mobile, the minimum touch target is 44x44px"
✅ "Error messages must suggest how to fix the problem, not just report an error"
```

---

## 3. How NFRs shape the architecture

This is exactly why NFRs need to be defined early — changing the architecture later is very expensive.

```
NFR: "The system must process 10,000 orders/minute on Black Friday"

→ You can't just "write better code"
→ You need:
   - A message queue (RabbitMQ, Kafka) to buffer requests
   - Async processing (order placed → email sent later)
   - Database sharding or read replicas
   - A CDN for static assets
   - Auto-scaling infrastructure

If the BA doesn't specify this NFR → devs build synchronous, single-server
→ Black Friday: the system crashes
→ Fix: the architecture must be rewritten, taking several months
```

---

## 4. NFR questions the BA should ask for each screen

For every important screen / feature, the BA should ask:

### Scale questions:
- *"What is the maximum number of concurrent users this feature serves?"*
- *"How will the data grow over time?"*
- *"Is there a specific peak time? (Flash sale, deadline, end of month)"*

### Performance questions:
- *"How long will a user wait before abandoning?"*
- *"Which feature is on the critical path and must be fast?"*

### Reliability questions:
- *"If this feature is wrong 1% of the time, what are the consequences?"*
- *"Is there any transaction that must not fail midway?"* (payments, reservations)

### Availability questions:
- *"If the system is down for 1 hour at 3 AM, is that a problem?"*
- *"How much downtime per month can the business accept?"*

---

## 5. NFRs and the Database — key decisions

NFRs directly influence database design:

### When do you need an Index?
```
Without an index:
  SELECT * FROM orders WHERE customer_id = 123
  → Scans the whole table: 1 million rows = slow

With an index on customer_id:
  → Direct lookup: milliseconds

The NFR the BA needs to specify:
"A single customer's order list must load in < 1s
for a customer with 10,000 orders"
→ The dev knows an index is needed
```

### When do you need Caching?
```
Without caching:
  The dashboard hits the DB on every load → slow with many users

With a cache (Redis):
  First time: query the DB → store in cache for 5 minutes
  Subsequent times: read from cache → 100x faster

The NFR the BA needs to specify:
"The overview reporting dashboard may be up to 5 minutes behind the real data"
→ The dev knows a 5-minute cache is acceptable
"The account balance must be real-time and must not be cached"
→ The dev knows caching is not allowed
```

### When do you need Soft Delete?
```
Hard delete: permanently removes the record from the database
Soft delete: marks deleted_at, the record stays in the DB

Related NFRs:
✅ "Order data must be retained for at least 5 years for accounting purposes"
✅ "A user can restore deleted data within 30 days"
✅ "Comply with Decree X on retention of transaction data"
→ All of these require soft delete
```

---

## 6. NFRs in Acceptance Criteria

NFRs are not just a separate document — they should be built into each story's AC when relevant:

```
Story: A user can search for products

AC (Functional):
□ Search by product name
□ Results show name, image, price
□ Empty state when there are no results

AC (Non-Functional):
□ Results return in < 500ms across a catalog of 100,000 products
□ Search still works when 200 users search simultaneously
□ Typo tolerance: "aplle" still finds "apple"
□ Results must not be cached for more than 1 minute (to reflect price updates)
```

---

## 7. Real-world examples: NFRs for different systems

### Internal system (50 users, 8 AM–5 PM):
```
Performance:  Response < 3s is acceptable
Availability: 99% (maintenance can be done at night/on weekends)
Scalability:  Not a concern, the user count is fixed
Security:     Basic — auth, HTTPS, role-based access
```

### E-commerce (10,000 users, 24/7):
```
Performance:  Product page < 2s, checkout < 1s
Availability: 99.9% (< 9 hours downtime/year)
Scalability:  Handle a 5x spike during a Flash Sale
Security:     PCI DSS if card payments are involved
```

### Banking/Fintech (any user, real money):
```
Performance:  Transaction < 3s
Availability: 99.99% (< 1 hour downtime/year)
Scalability:  Audit log for every transaction
Security:     Encryption at rest and in transit, mandatory 2FA, audit trail
Reliability:  Zero data loss, idempotent transactions
```

---

## 8. NFR Checklist for the BA

Use this checklist when starting a project or a large feature:

```
PERFORMANCE:
☐ Response time SLA for critical screens
☐ Maximum data size to handle (records, file size)
☐ Is an offline mode needed?

SCALABILITY:
☐ Maximum concurrent users (average and peak)
☐ Expected data growth rate
☐ Peak time pattern (hour, day, season)

AVAILABILITY:
☐ Uptime SLA (99%? 99.9%? 99.99%?)
☐ Is a maintenance window allowed? When?
☐ Disaster recovery: if the primary server fails, what is the recovery time?

RELIABILITY:
☐ Is there any transaction that must not fail midway?
☐ How much data loss is acceptable? (RPO)
☐ What is the maximum time to recover after an incident? (RTO)

SECURITY:
☐ Which data is sensitive and needs encryption?
☐ Compliance requirements (GDPR, PCI DSS, Vietnamese decrees)?
☐ Is an audit trail needed?

MAINTAINABILITY:
☐ Logging and monitoring requirements
☐ Documentation requirements
☐ Deployment and rollback requirements
```
