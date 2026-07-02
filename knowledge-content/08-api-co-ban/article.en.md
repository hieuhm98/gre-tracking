# What is an API?

## 1. What is an API?

An **API** (Application Programming Interface) is an **interface** that allows software systems to communicate with each other.

**Real-world example**: When you book a Grab ride, the Grab app calls the Google Maps API to get the map and calculate the route. Grab doesn't build maps itself — it calls someone else's API.

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

## 3. JSON – The Data Format

**JSON** (JavaScript Object Notation) is the most popular text format for exchanging data via APIs.

```json
{
  "id": 5,
  "name": "Laptop Dell XPS",
  "price": 25000000,
  "inStock": true,
  "tags": ["laptop", "dell", "premium"],
  "specs": {
    "cpu": "Intel i7",
    "ram": "16GB"
  }
}
```

**JSON structure:**
- `{}` = object (key-value pairs)
- `[]` = array (a list)
- Values: string, number, boolean, null, object, array

---

## 4. Request and Response

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

## 5. API Key and Authentication

Most commercial APIs require authentication:

- **API Key**: a secret string sent with each request (in a header or query param).
- **Bearer Token (JWT)**: a short-lived token issued after login.
- **OAuth**: lets you log in via Google/Facebook without sharing your password.

---

## 6. API Documentation

Every API has documentation describing:
- Which endpoints exist.
- What data to send (request body, parameters).
- What data you receive (response format).
- What errors can occur.

**Swagger/OpenAPI** is a popular standard for writing API docs.

---

## 7. Real-World Example: Shopee & Grab

| Situation | API used |
|-----------|--------------|
| Shopee displays a map of the delivery address | Google Maps API |
| The Grab app calculates the fare | Internal pricing API |
| A website allows login with Google | Google OAuth API |
| Payment via VNPAY | VNPAY Payment API |
| Sending SMS OTP | Twilio/VIETGUYS SMS API |

---

## 8. Summary

- **API** = an interface for systems to communicate.
- **REST API** uses HTTP Methods + URL endpoints.
- **JSON** = the most popular data format.
- **Endpoint** = the specific URL of a resource.
- **Authentication** = API Key, Bearer Token, OAuth.
- **API Docs** = documentation describing how to use the API.
