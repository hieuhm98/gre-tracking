# What is an API?

## 1. What is an API?

An **API** (Application Programming Interface) is an **interface** that allows software systems to communicate with each other.

**Real-world example**: When you book a Grab ride, the Grab app calls the Google Maps API to get the map and calculate the route. Grab doesn't build maps itself — it calls someone else's API.

Every exchange has two roles:
- **Client** (the caller): the app/website that sends the request, e.g. the Grab app.
- **Server** (the provider): the system running the API that returns data, e.g. Google Maps.

Key rule: **the client always initiates the request**, and the server only responds.

---

## 2. REST API

**REST** (Representational State Transfer) is the most popular API architecture today, operating over HTTP.

### Basic principles
- Each resource has its own **URL** (endpoint).
- Use **HTTP Methods** to express actions.
- Stateless: each request is independent and does not remember previous state.

### Example: a product management API

| HTTP Method | Endpoint | Action |
|-------------|----------|-----------|
| GET | `/api/products` | Get the list of products |
| GET | `/api/products/5` | Get the product with id=5 |
| POST | `/api/products` | Create a new product |
| PUT | `/api/products/5` | Fully update the product with id=5 |
| PATCH | `/api/products/5` | Partially update the product with id=5 |
| DELETE | `/api/products/5` | Delete the product with id=5 |

---

## 3. The Structure of a Request (4 parts)

A complete HTTP request always has 4 parts:

| Part | Role | Example |
|------|------|---------|
| **URL** | The address of the resource to act on | `https://api.shop.com/orders` |
| **Method** | The action to perform | `POST` |
| **Headers** | Accompanying info (format, auth…) | `Content-Type: application/json` |
| **Body** | Data sent up (only for POST/PUT/PATCH) | `{ "productId": 5 }` |

The **response** has a similar structure, but replaces Method + URL with a **Status Code** (section 6).

---

## 4. JSON – The Data Format

**JSON** (JavaScript Object Notation) is the most popular text format for exchanging data via APIs.

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "price": 25000000,
  "inStock": true,
  "tags": ["laptop", "dell", "premium"]
}
```

- `{}` = object (key-value pairs), `[]` = array (a list).
- Values: string, number, boolean, null, object, array.

> 📖 JSON has its own article — see **"What is JSON?"** to understand nested objects, arrays of objects, and how to read data by path.

---

## 5. Request and Response

### HTTP Request
```
POST /api/orders HTTP/1.1
Host: api.shop.com
Content-Type: application/json
Authorization: Bearer eyJhbGci...

{
  "productId": 5,
  "quantity": 2,
  "address": "123 Lê Lợi, HCM"
}
```

### HTTP Response
```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "orderId": "ORD-20240408-001",
  "status": "confirmed",
  "total": 50000000
}
```

---

## 6. HTTP Status Codes

Every response carries a 3-digit **status code** telling you whether the request succeeded or failed. This is what a BA most often sees when reading logs or talking with developers.

| Group | General meaning | Common codes |
|-------|-----------------|--------------|
| **2xx** | Success | `200 OK`, `201 Created`, `204 No Content` |
| **3xx** | Redirection | `301 Moved`, `304 Not Modified` |
| **4xx** | **Client** error (the caller) | `400 Bad Request`, `401 Unauthorized`, `403 Forbidden`, `404 Not Found`, `409 Conflict`, `429 Too Many Requests` |
| **5xx** | **Server** error | `500 Internal Server Error`, `503 Service Unavailable` |

**Memory aid:** `4xx` = "you sent something wrong", `5xx` = "the server is broken".

Two codes people often confuse:
- **401 Unauthorized**: not logged in / missing or wrong token.
- **403 Forbidden**: logged in but **lacks permission** to access.

---

## 7. Pagination & Filtering (Query String)

When data is large (millions of records), an API won't return everything at once. The client uses a **query string** — the part after the `?` in the URL — to filter and paginate.

```
GET /api/products?category=laptop&inStock=true&sort=price&page=2&size=20
```

| Parameter | Meaning |
|-----------|---------|
| `category=laptop` | **Filter**: only laptop products |
| `inStock=true` | An extra in-stock filter |
| `sort=price` | **Sort** by price |
| `page=2&size=20` | **Paginate**: page 2, 20 results per page (records 21–40) |

Multiple parameters are joined with `&`. A BA needs this when specifying a list screen: which filters, what sorting, how "load more"/pagination works.

---

## 8. Webhook vs Polling – Real-time updates

Since **only the client initiates calls**, how does the client learn when data **changes on the server** (e.g. an order moves to "out for delivery")? Two approaches:

- **Polling**: the client asks repeatedly, "done yet? done yet?", every few seconds/minutes. Simple but wasteful and delayed.
- **Webhook**: the client provides a **Callback URL**; when an event happens, **the server calls back** to that URL. Real-time and efficient (only one request per change).

| Criterion | Polling | Webhook |
|-----------|---------|---------|
| Who calls | Client asks continuously | Server calls when an event happens |
| Latency | Yes (based on poll interval) | Nearly instant |
| Efficiency | Many wasted requests | Very efficient |
| Example | An app constantly refreshing status | VNPAY calls a webhook to report "paid" |

When writing integration requirements, a BA should ask: *"Does this system support webhooks, or must we poll?"*

---

## 9. API Key and Authentication

Most commercial APIs require authentication:

- **API Key**: a secret string sent with each request (in a header or query param).
- **Bearer Token (JWT)**: a short-lived token issued after login.
- **OAuth**: lets you log in via Google/Facebook without sharing your password.

If authentication is wrong/missing, the server returns **401** (not authenticated) or **403** (no permission).

---

## 10. API Documentation

Every API has documentation describing:
- Which endpoints exist.
- What data to send (request body, parameters).
- What data you receive (response format).
- What errors can occur.

**Swagger/OpenAPI** is a popular standard for writing API docs. BAs often read these docs to understand what the system returns and to write requirements/tests.

---

## 11. Real-World Example: Shopee & Grab

| Situation | API used |
|-----------|--------------|
| Shopee displays a map of the delivery address | Google Maps API |
| The Grab app calculates the fare | Internal pricing API |
| A website allows login with Google | Google OAuth API |
| Payment via VNPAY | VNPAY Payment API |
| VNPAY reports the payment result back to the shop | Webhook (Callback URL) |
| Sending SMS OTP | Twilio/VIETGUYS SMS API |

---

## 12. Summary

- **API** = an interface for systems to communicate; the **client** calls, the **server** responds.
- **REST API** uses HTTP Methods + URL endpoints.
- A **request** has 4 parts: URL, Method, Headers, Body.
- **Status codes**: 2xx success, 4xx client error, 5xx server error (401 ≠ 403).
- The **query string** (`?key=value`) is used to **filter, sort, and paginate**.
- **Webhooks** let the server push real-time updates instead of the client having to **poll**.
- **JSON** = the most popular data format (see the dedicated JSON article).
- **Authentication** = API Key, Bearer Token, OAuth; **API Docs** (Swagger) describe how to use it.
