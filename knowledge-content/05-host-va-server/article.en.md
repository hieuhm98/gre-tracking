# Host & Server

## 1. What Is a Host?

A **host** is any device connected to a network that has an IP address — a computer, phone, server, router, and so on. The term "host" simply refers to a device participating in the network.

---

## 2. The Client–Server Model

Most Internet applications operate on the **Client–Server** model:

```
Client (User)               Server
─────────────────           ─────────────────
Browser, App          ───►  Receives the request
                      ◄───  Processes it & returns the response
```

- **Client**: the user's device, which sends the request.
- **Server**: a dedicated computer that receives and processes the request, and returns data (the response).

**Examples:**
- You type `facebook.com` → the browser (client) sends a request to Facebook's server → the server returns the web page's HTML.
- You place an order on Shopee → the app (client) sends a request to Shopee's server → the server processes the order.

---

## 3. Types of Servers

| Type | Function | Example |
|------|-----------|-------|
| **Web Server** | Serves web pages (HTML, CSS, JS) | Nginx, Apache |
| **Application Server** | Handles business logic | Node.js, Django, Spring |
| **Database Server** | Stores and queries data | MySQL, PostgreSQL, MongoDB |
| **File Server** | Stores and shares files | Samba, FTP server |
| **Mail Server** | Sends/receives email | Postfix, Gmail SMTP |
| **DNS Server** | Resolves domain names | Cloudflare DNS, Google DNS |

In practice, a single physical machine can run multiple types of server software at once.

---

## 4. Localhost

**Localhost** is a special name that points back to the very computer you are using, equivalent to the IP address `127.0.0.1`.

When developers build web applications, they run a server right on their personal machine and access it via:
```
http://localhost:3000
http://127.0.0.1:3000
```

This lets them test the application without deploying it to the Internet.

---

## 5. IP Addresses

Every host in a network has a unique IP address:

### IPv4
- Format: `192.168.1.100` — 4 groups of numbers, each from 0 to 255.
- Total: ~4.3 billion addresses (nearly exhausted).

### IPv6
- Format: `2001:0db8:85a3:0000:0000:8a2e:0370:7334` — 8 groups of hexadecimal.
- Total: 340 undecillion addresses (effectively unlimited for now).

### Private vs. Public IP
- **Private**: used only within the internal network. Ranges: `192.168.x.x`, `10.x.x.x`, `172.16-31.x.x`.
- **Public**: an address on the Internet, unique worldwide.

---

## 6. Web Hosting

**Hosting** is a service that rents out space on a server to store a website.

| Type | Description | Best for |
|------|-------|---------|
| **Shared Hosting** | Many websites share a single server | Blogs, small sites, cheap |
| **VPS (Virtual Private Server)** | A private virtual server on shared hardware | Medium sites, more flexible |
| **Dedicated Server** | Renting an entire physical machine | Large websites, high performance |
| **Cloud Hosting** | Resources from many servers (AWS, GCP, Azure) | Flexible scaling |
| **Serverless** | No server management, pay per use | Microservices, small APIs |

---

## 7. Static IP vs. Dynamic IP

- **Static IP**: does not change — used for servers that a domain needs to point to.
- **Dynamic IP**: changes on each connection — used for ordinary user devices.

---

## 8. Summary

- **Host**: any device with an IP in the network.
- **Client**: sends the request; **Server**: processes it and returns the response.
- **Localhost / 127.0.0.1**: the address of your own machine.
- **Web Hosting**: a service for storing a website on a server.
- **VPS**: a private virtual server — a balance between cost and flexibility.
