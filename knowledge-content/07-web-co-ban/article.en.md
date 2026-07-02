# How Does the Web Work?

## 1. Overview

When you type a web address into the browser and press Enter, a series of steps happen within a few hundred milliseconds to display the web page. Understanding this flow helps you communicate better with the technical team.

---

## 2. URL Structure

A URL (Uniform Resource Locator) is the full address of a resource on the web:

```
https://shop.example.com:443/products/detail?id=123&lang=vi#reviews
│       │                │   │               │               │
│       │                │   │               query string    fragment
│       │                │   path
│       │                port (hidden if the default port is used)
│       subdomain.domain
scheme (protocol)
```

- **Scheme**: `http` or `https` — the protocol used.
- **Host**: `shop.example.com` — the destination server.
- **Path**: `/products/detail` — the path to the resource.
- **Query String**: `?id=123&lang=vi` — filter/search parameters.
- **Fragment**: `#reviews` — a position within the page (handled by the browser).

---

## 3. The Flow When Visiting a Website

```
1. You type the URL and press Enter
2. The browser resolves DNS: domain → IP
3. The browser establishes a TCP connection (3-way handshake)
4. If HTTPS: add a TLS handshake step (encryption)
5. The browser sends an HTTP GET request to the server
6. The server receives the request, processes it, and returns an HTTP response
7. The browser receives the HTML
8. The browser parses the HTML → loads additional CSS, JS, images
9. The browser renders the page (draws it on the screen)
```

---

## 4. Frontend vs Backend

| | Frontend | Backend |
|--|----------|---------|
| **Where it runs** | The user's browser | The server |
| **Languages** | HTML, CSS, JavaScript | Python, Node.js, Java, PHP... |
| **What it does** | Displays the UI, handles user interaction | Business logic, database, security |
| **Visible?** | Yes (source code) | No (on the server) |

**Full-stack developer**: knows both frontend and backend.

---

## 5. Static vs Dynamic Website

### Static
The HTML is prebuilt and sent directly to the browser. Fast, simple, no database needed.
- Example: a company introduction page, a simple blog.

### Dynamic
The HTML is generated **when a request comes in** — the server runs code, queries the database, and builds HTML tailored to each user.
- Example: Facebook (each user sees a different newsfeed).

---

## 6. CDN (Content Delivery Network)

A CDN is a network of servers distributed around the world that store copies of static content (images, CSS, JS) on the **server closest to the user**.

```
User in Hanoi → CDN server in Hanoi (fast)
Instead of:
User in Hanoi → server in California (slow)
```

**Benefits**: reduced latency, faster load times, less load on the origin server.

---

## 7. Browser Dev Tools

In Chrome/Firefox, press `F12` to open Dev Tools:
- **Network tab**: view all requests/responses.
- **Console**: view JavaScript errors.
- **Elements**: inspect HTML/CSS.

This is the basic tool for understanding what a website is doing.

---

## 8. What's in an HTTP Response?

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1256

<!DOCTYPE html>
<html>...web page content...</html>
```

- **Status line**: the status code.
- **Headers**: metadata (content type, size...).
- **Body**: the actual content (HTML, JSON, images...).

---

## 9. Summary

- **URL** = the full address including scheme, host, path, query.
- **Frontend**: runs in the browser (HTML/CSS/JS).
- **Backend**: runs on the server (logic + database).
- **CDN**: a distributed network of servers to increase speed.
- **Dev Tools (F12)**: tools for debugging and exploring a website.
