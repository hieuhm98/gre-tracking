# Port & Socket

## 1. What is a Port?

An IP address identifies **which computer** you're talking to. But a single computer can run many network applications at the same time (web browser, email, games, etc.). A **port** helps distinguish which application receives which data.

**Intuitive example:**
- IP = the building's address.
- Port = the room number inside the building.
- You arrive at the building → you only meet the right person by entering the right room.

```
Full address: 192.168.1.100:3000
               IP address    Port
```

A port is an integer from **0 to 65535**.

---

## 2. Port Groups

| Group | Range | Meaning |
|------|-----|---------|
| Well-known Ports | 0 – 1023 | Reserved for standard services |
| Registered Ports | 1024 – 49151 | Registered by specific applications |
| Dynamic/Private Ports | 49152 – 65535 | Used temporarily by clients |

---

## 3. Common Ports You Should Know

| Port | Protocol | Service |
|------|-----------|---------|
| 21 | FTP | File transfer |
| 22 | SSH | Remote server control |
| 25 | SMTP | Sending email |
| 53 | DNS | Domain name resolution |
| 80 | HTTP | Unencrypted web |
| 443 | HTTPS | Encrypted web |
| 3306 | MySQL | MySQL database |
| 5432 | PostgreSQL | PostgreSQL database |
| 6379 | Redis | Cache/Message queue |
| 27017 | MongoDB | MongoDB database |
| 3000 | Dev servers | Convention for Node.js dev |
| 8080 | HTTP alternative | Alternative to port 80 during dev |

---

## 4. Firewall and Ports

A **firewall** controls network traffic by **opening or blocking ports**:

- Block port 22 → nobody can SSH into the server.
- Open only ports 80 and 443 → the server only serves web traffic.

When deploying an application on the cloud (AWS, GCP, etc.), you must configure **Security Group / Firewall rules** to open the right ports.

---

## 5. What is a Socket?

A **socket** is the endpoint of a network connection — a combination of:
```
Socket = IP Address + Port + Protocol
Example: (192.168.1.1, 80, TCP)
```

When you connect to a server, the OS creates a pair of sockets:
- **Server socket**: `server_IP:80` (listening)
- **Client socket**: `client_IP:54321` (random port)

---

## 6. WebSocket

A **WebSocket** is a protocol that allows a **two-way, persistent connection** between client and server — unlike HTTP, which communicates only in a one-way request-response manner.

```
HTTP:      Client ──request──► Server ──response──► (finished)
WebSocket: Client ◄────────────────────────────►  Server
           (real-time communication, connection stays open)
```

**Used for**: chat apps, real-time notifications, online games, live dashboards.

---

## 7. Ports in a URL

When you don't type a port in the URL, the browser uses the default port:
- `http://example.com` = `http://example.com:80`
- `https://example.com` = `https://example.com:443`

When developing locally: `http://localhost:3000` — you must type the port explicitly because there's no default.

---

## 8. Summary

- **Port** = the room number inside the building (IP).
- **Port 80/443**: HTTP/HTTPS (web).
- **Port 22**: SSH (server management).
- **Port 3306/5432**: MySQL/PostgreSQL (database).
- **Firewall**: controls which ports are open.
- **Socket**: the combination of IP + Port + Protocol forming a connection endpoint.
- **WebSocket**: a persistent two-way connection for real-time apps.
