# Frontend & Backend Architecture

## 1. Overview

Every modern web application is divided into two main parts:

```
Người dùng → [FRONTEND] ←→ [BACKEND] ←→ [DATABASE]
              Trình duyệt    Server        Dữ liệu
```

- **Frontend (FE)**: What the user sees and interacts with
- **Backend (BE)**: Processing logic, security, data storage
- **Database**: Where data is stored long-term

---

## 2. What does the Frontend do?

The frontend is the interface layer — it runs **in the user's browser**.

**FE responsibilities:**
- Displaying the interface (HTML, CSS)
- Handling user interactions (click, input, scroll)
- Client-side form validation
- Calling APIs to fetch / send data
- Managing screen states (loading, error, empty)
- Routing (switching pages without a reload)
- Handling caching, optimizing load speed

**Typical FE technologies:**
- HTML, CSS, JavaScript
- React / Vue / Angular
- Next.js, Nuxt.js
- Tailwind CSS, Bootstrap

**What the FE does NOT do:**
- Handle critical business logic (easily bypassed by users)
- Store sensitive data
- Perform final access authorization

---

## 3. What does the Backend do?

The backend runs **on the server** — users do not see it and do not interact with it directly.

**BE responsibilities:**
- Handling business logic
- Authentication & authorization
- Connecting to and querying the database
- Sending emails and notifications
- Integrating with third parties (payment gateway, SMS, AI...)
- Handling file uploads
- Server-side caching
- Logging, monitoring

**Typical BE technologies:**
- Node.js, Python, Java, Go, .NET
- Express, FastAPI, Spring Boot, Laravel
- PostgreSQL, MySQL, MongoDB (database)
- Redis (cache)
- AWS, Google Cloud, Azure (cloud)

---

## 4. FE ↔ BE communication via API

The FE and BE talk to each other through an **API** (Application Programming Interface). The most common type is the **REST API**.

```
FE gửi HTTP Request:
GET  /api/products          → lấy danh sách sản phẩm
POST /api/orders            → tạo đơn hàng mới
PUT  /api/orders/123        → cập nhật đơn hàng 123
DELETE /api/orders/123      → xóa đơn hàng 123

BE trả về HTTP Response:
{
  "status": "success",
  "data": { "id": 123, "total": 500000 }
}
```

**A complete request:**
1. The user clicks "Place Order"
2. The FE validates the form (is the email formatted correctly? is the quantity > 0?)
3. The FE sends `POST /api/orders` with the JSON data
4. The BE receives the request and checks the authentication token
5. The BE re-validates the data (never trust the FE)
6. The BE checks the inventory in the database
7. The BE creates the order, deducts inventory, and sends a confirmation email
8. The BE returns `{ "orderId": 456, "status": "confirmed" }`
9. The FE receives the response and shows the "Order placed successfully" screen

---

## 5. Authentication & Authorization

| Concept | Meaning | Example |
|---|---|---|
| **Authentication** | Verifies *who you are* | Logging in with email/password |
| **Authorization** | Determines *what you are allowed to do* | Only an admin can delete a user |

**Login flow:**
1. The user enters their email + password → the FE sends it to the BE
2. The BE checks the database → correct → creates a **JWT token**
3. The BE returns the token to the FE
4. The FE stores the token (localStorage or cookie)
5. On every subsequent request, the FE includes the token in the header
6. The BE verifies the token before processing each request

---

## 6. Common architecture layers

### Monolith
The FE and BE are in the same project. Common for small startups.

```
[Browser] → [Monolith App: FE + BE + DB]
```

### Separated FE/BE
The FE is its own app (React), the BE is a separate API. The most common approach today.

```
[React App]  →  [REST API Server]  →  [Database]
```

### Microservices
The BE is split into many small services. More complex, meant for large systems.

```
[FE] → [API Gateway] → [User Service]
                     → [Order Service]
                     → [Payment Service]
```

---

## 7. Development environments

| Environment | Purpose |
|---|---|
| **Local / Dev** | Developers write code and test freely |
| **Staging / UAT** | Acceptance testing, QA and BA testing |
| **Production** | The real environment used by users |

Things a BA should keep in mind:
- Never test a new feature directly on Production
- UAT (User Acceptance Testing) always takes place on Staging
- Data on Staging is usually fake data — do not use real customer data

---

## 8. What does a BA need to understand about FE/BE to work effectively?

### When writing User Stories:
- **FE concerns**: loading state, empty state, error message, responsive breakpoint, form validation message
- **BE concerns**: business rules, permissions, performance SLA, data retention

### When splitting tasks:
- FE tasks: UI components, form validation, routing, displaying data
- BE tasks: API endpoints, database schema, business logic, authentication
- Shared tasks: the API contract (define the request/response format first)

### Questions a BA should ask developers:
- "Is this handled by the FE or BE?" → understand who is responsible
- "Does this API already exist or does it need to be created?" → affects the estimate
- "Does this affect other systems?" → dependencies
- "How long does deployment take? Is there downtime?" → affects the release plan
