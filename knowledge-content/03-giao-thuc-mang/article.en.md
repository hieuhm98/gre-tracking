# Network Protocols

## 1. What Is a Protocol?

A **protocol** is a set of rules and conventions that devices must follow in order to communicate with one another. It is like a shared language — two people must speak the same language to understand each other.

---

## 2. The TCP/IP Model

TCP/IP is the foundational protocol suite of the Internet, consisting of 4 layers:

| Layer | Function | Example Protocols |
|------|-----------|-----------------|
| Application | Interfaces with user software | HTTP, HTTPS, FTP, SMTP, DNS |
| Transport | End-to-end data delivery, error control | TCP, UDP |
| Internet | Addressing and routing | IP |
| Link | Data transmission over physical media | Ethernet, WiFi |

---

## 3. TCP vs. UDP

### TCP (Transmission Control Protocol)
TCP guarantees that data **arrives completely and in the correct order**:
- Establishes a connection first (3-way handshake).
- Checks for errors and retransmits if a packet is lost.
- Slower than UDP but **reliable**.
- Used for: web (HTTP), email, file downloads.

**3-Way Handshake:**
```
Client → Server: SYN (request to connect)
Server → Client: SYN-ACK (agreement)
Client → Server: ACK (confirmation)
→ The connection is established
```

### UDP (User Datagram Protocol)
UDP sends data **without requiring acknowledgment**:
- Does not establish a connection first.
- Faster, but packets can be lost.
- Used for: video streaming, online gaming, DNS, VoIP (calls).

---

## 4. HTTP and HTTPS

### HTTP (HyperText Transfer Protocol)
The protocol for transferring web pages. It works on a **Request – Response** model:

```
Browser sends: GET /index.html HTTP/1.1
Server returns: HTTP/1.1 200 OK + the web page content
```

**Common HTTP Methods:**
- `GET`: retrieve data.
- `POST`: send data to the server.
- `PUT/PATCH`: update data.
- `DELETE`: delete data.

**HTTP Status Codes:**
- `200 OK`: success.
- `404 Not Found`: not found.
- `500 Internal Server Error`: server error.
- `401 Unauthorized`: not authenticated.
- `403 Forbidden`: no permission.

### HTTPS (HTTP Secure)
HTTPS = HTTP + **TLS/SSL encryption**. Data is encrypted before transmission, protecting it from eavesdropping.

- Recognizable by the padlock icon 🔒 in the browser.
- Required for any website handling sensitive information.

---

## 5. DNS (Domain Name System)

DNS is the system that converts easy-to-remember domain names into IP addresses:

```
google.com → 142.250.186.46
```

**The DNS Resolution Process:**
1. You type `google.com`.
2. The browser checks its local DNS cache.
3. If not found → it asks the ISP's DNS server.
4. The DNS server finds and returns the IP: `142.250.186.46`.
5. The browser connects to that IP.

---

## 6. FTP, SMTP, SSH

| Protocol | Function | Default Port |
|-----------|-----------|---------------|
| FTP | File transfer | 21 |
| SMTP | Sending email | 25, 587 |
| IMAP/POP3 | Receiving email | 143, 110 |
| SSH | Secure remote server control | 22 |

---

## 7. Summary

- **Protocol** = the shared rules of communication between devices.
- **TCP**: reliable, guarantees order → used for web, email.
- **UDP**: fast, no guarantees → used for video, gaming.
- **HTTP/HTTPS**: the protocols of the web. HTTPS encrypts data.
- **DNS**: converts domain names into IP addresses.
