# Computer Networks

## 1. What Is a Computer Network?

A computer network is a collection of multiple devices (computers, phones, printers, etc.) connected together to **share data and resources**.

A network enables you to: send email, browse the web, share files, hold online meetings, print over the network, and more.

---

## 2. Common Types of Networks

### LAN – Local Area Network
Connects devices within **a small area**: an office, a school, a home.

- High speed, low latency.
- Example: the WiFi network in your home is a LAN.

### WAN – Wide Area Network
Connects LANs across **large geographic distances**: cities, countries, the whole world.

- **The Internet** is the largest WAN in the world.

### MAN – Metropolitan Area Network
Covers the scope of a single city. Example: the internal network of a university with multiple campuses.

---

## 3. Important Network Devices

### Router
A router connects your LAN to the Internet (WAN). It **routes** data packets to their correct destination.

- Each router has a public IP address assigned by the Internet Service Provider (ISP).
- Home routers often double as a WiFi access point.

### Switch
A switch connects multiple devices within the same LAN. It transfers data **directly** between two devices that need to communicate.

- Unlike a router: a switch works within the local network and does not connect out to the Internet.

### Access Point (WiFi Access Point)
Broadcasts WiFi so devices can connect wirelessly. Home routers usually have a built-in access point.

### Modem
A device that converts the signal from the ISP (copper cable, fiber optic, etc.) into a digital signal the router can understand.

---

## 4. Packets

Data transmitted over a network is broken into small **packets**. Each packet contains:

- The source address (source IP)
- The destination address (destination IP)
- A portion of the actual data
- Error-checking information

Packets travel through many different routers before reaching their destination, and are then **reassembled** in order.

---

## 5. Bandwidth and Network Speed

**Bandwidth**: the maximum amount of data that can be transmitted in 1 second.
- Units: **Mbps** (Megabit per second), **Gbps** (Gigabit per second).
- 100 Mbps = 100 million bits/second ≈ 12.5 MB/s of actual download speed.

**Latency/Ping**: the time it takes for a packet to travel from A to B and back.
- Unit: millisecond (ms). Low ping = a fast-responding network.

**Note**: High bandwidth does not mean low ping. A satellite link can have high bandwidth but very high ping (>500ms).

---

## 6. Wired vs. WiFi

| | Wired (Ethernet) | WiFi |
|--|---------------------|------|
| Speed | High, stable | Lower, fluctuating |
| Latency | Very low | Higher |
| Convenience | Requires a cable | Wireless |
| Security | Higher | Easier to eavesdrop on |

---

## 7. IP Addresses in a Network

Every device in a network has an **IP address** (Internet Protocol address) for identification.

- **Private IP**: used within the LAN. Example: 192.168.1.x
- **Public IP**: your network's address on the Internet, assigned by the ISP.

When you visit google.com, the packet travels from your private IP → router → public IP → the Internet → Google.

---

## 8. Summary

- **LAN**: a small internal network (home, office).
- **WAN/Internet**: a global network.
- **Router**: connects a LAN to the Internet.
- **Switch**: connects devices within a LAN.
- **Packet**: the unit of data transmitted over a network.
- **Bandwidth**: the maximum speed, measured in Mbps/Gbps.
