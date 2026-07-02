# Domain, URL & DNS

## 1. What Is a Domain?

A **domain** is an easy-to-remember name that represents an IP address on the Internet. Instead of having to remember `142.250.186.46`, you just type `google.com`.

A domain is a digital asset — you must **register** it and **pay an annual fee** to own it.

---

## 2. The Structure of a Domain

```
blog.example.com.vn
 │      │      │  └─ ccTLD (country code TLD)
 │      │      └──── TLD (Top Level Domain)
 │      └─────────── Second Level Domain
 └────────────────── Subdomain
```

### TLD (Top Level Domain)
The final part of a domain:
- **gTLD** (generic): `.com`, `.org`, `.net`, `.edu`, `.gov`
- **ccTLD** (country code): `.vn` (Vietnam), `.jp` (Japan), `.uk` (United Kingdom)
- **New**: `.io`, `.app`, `.dev`, `.tech`

### Second Level Domain
The main name you register: `google` in `google.com`, `facebook` in `facebook.com`.

### Subdomain
A self-created prefix used to divide up services:
- `www.example.com` — the main website.
- `mail.example.com` — the email server.
- `api.example.com` — the API server.
- `docs.example.com` — documentation.
- `dev.example.com` — the development environment.

---

## 3. URI vs. URL vs. URN

These three concepts are often confused — but they have a **containment** relationship:

```
            URI (resource identifier)
           /                          \
        URL                          URN
   (location + how to fetch)      (name only)
```

- **URI** (Uniform Resource Identifier) — a string that identifies **any** resource. This is the broadest concept.
- **URL** (Uniform Resource Locator) — a type of URI that tells you **where the resource is** and **how to access it** (the protocol). This is the type you encounter every day.
- **URN** (Uniform Resource Name) — a type of URI that only **names** the resource, without saying where it is. Example: `urn:isbn:0451450523` (a book identifier).

| Type | Example | Tells you "where"? |
|------|-------|---|
| URL | `https://example.com/blog/post-1` | Yes (https + host + path) |
| URN | `urn:isbn:0451450523` | No — it is only a name |
| URI | Both examples above are URIs | Depends on the type |

**Rule of thumb**: Every URL is a URI, but not every URI is a URL.

---

## 4. The Full Structure of a URL

```
https://shop.example.com:443/products/detail?id=123&lang=vi#reviews
│        │                │   │               │              │
│        │                │   │               │              fragment
│        │                │   │               query string
│        │                │   path
│        │                port (443 = HTTPS default, can be hidden)
│        host = subdomain + domain + TLD
scheme (protocol)
```

| Component | Role |
|-----------|---------|
| **Scheme** | The access protocol: `http`, `https`, `ftp`, `mailto`, `file` |
| **Host** | The server address (domain or IP) |
| **Port** | The service port — `80` for http, `443` for https; can be omitted if default |
| **Path** | The path to the resource on the server |
| **Query** | Parameters `?key=value&key2=value2` — filtering, searching, pagination |
| **Fragment** | An anchor `#section` — points to a location within the page, **not sent to the server** |

---

## 5. Path — the Path of a URL

The **path** is the part after the host, starting with `/`. It describes the specific resource you want to access.

### The Path Is a Hierarchical Tree

A path mimics a **directory structure**:

```
example.com/                 ← root
example.com/blog             ← list of posts
example.com/blog/seo         ← the SEO category
example.com/blog/seo/sitemap-la-gi  ← a specific post
example.com/products
example.com/products/laptop
example.com/products/laptop/macbook-pro
```

The "parent–child" relationship in the path forms the **information architecture** of the website.

### Distinguishing It from the Query

| | Path | Query |
|--|------|-------|
| Role | Locates a **unique resource** | Additional parameters: filter, sort |
| What if it changes | An entirely different resource | The same resource, a different view |
| SEO | Important — Google indexes by path | Often ignored or canonicalized |
| Example | `/products/laptop` | `?sort=price&page=2` |

### Common Path Types

- **Static**: `/about`, `/contact` — always fixed.
- **Dynamic (slug)**: `/blog/cach-toi-uu-seo` — the slug part represents a single post.
- **Dynamic param**: `/users/123` — `123` is the user id, and the server returns different data accordingly.
- **Nested**: `/shop/category/laptop/asus` — reflects the category hierarchy.

### Trailing Slash
`/blog/` and `/blog` can technically **be two different URLs**. Most websites pick one standard and 301-redirect the other to avoid duplicate content.

---

## 6. Sitemap — the URL Map of a Website

A **sitemap** is a list of all the important URLs of a website, helping **search engines** (Google, Bing) discover and index content faster.

### Why Do You Need a Sitemap?

- Large websites have thousands of URLs — bots cannot crawl them all on their own.
- New pages or pages with few internal links → bots have trouble finding them.
- The sitemap tells the bot clearly: "Here are all the pages I want indexed, their priorities, and when they were last modified."

### The Structure of sitemap.xml

The sitemap is usually located at `https://example.com/sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://example.com/</loc>
    <lastmod>2026-05-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://example.com/blog/sitemap-la-gi</loc>
    <lastmod>2026-04-20</lastmod>
    <priority>0.8</priority>
  </url>
</urlset>
```

| Tag | Meaning |
|-----|---------|
| `<loc>` | The full URL (required) |
| `<lastmod>` | The date of the last modification |
| `<changefreq>` | Change frequency: `daily`, `weekly`, `monthly`, etc. |
| `<priority>` | Priority level 0.0 — 1.0 (relative within the same site) |

### Sitemap Index — When the Site Is Too Large

A single sitemap file can contain at most **50,000 URLs** or **50MB**. Large sites split it into several smaller sitemaps and gather them into a **sitemap index**:

```xml
<sitemapindex>
  <sitemap><loc>https://example.com/sitemap-posts.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-products.xml</loc></sitemap>
  <sitemap><loc>https://example.com/sitemap-pages.xml</loc></sitemap>
</sitemapindex>
```

### The Relationship Between Sitemap and Path

A sitemap is essentially a **list of valid URLs**, where each URL = `scheme + host + path`. Therefore:

- A **clear, tree-structured** path → a naturally understandable sitemap.
- A messy, long path with many parameters → a sitemap that is hard to maintain, with weak SEO.
- A good path is both human-friendly (readable, guessable) and bot-friendly.

### What robots.txt Says About the Sitemap

The `robots.txt` file at the site root usually declares the sitemap's location:

```
User-agent: *
Disallow: /admin/
Sitemap: https://example.com/sitemap.xml
```

This is the **official** way to tell bots where the sitemap is.

---

## 7. How Does DNS Work?

DNS (Domain Name System) is a global hierarchical system for resolving domains into IPs.

### The Complete DNS Resolution Process:

```
1. You type: www.example.com
2. Browser → checks its local cache
3. If a miss → asks the Recursive Resolver (the ISP's DNS)
4. Resolver → asks the Root DNS Server (.)
5. Root → "Ask the .com TLD server"
6. Resolver → asks the .com TLD server
7. TLD → "Ask the Authoritative server for example.com"
8. Resolver → asks the Authoritative DNS for example.com
9. Authoritative → returns the IP: 93.184.216.34
10. Resolver caches the result and returns it to the Browser
11. Browser connects to 93.184.216.34
```

### DNS Record Types

| Type | Meaning | Example |
|------|---------|-------|
| **A** | Domain → IPv4 | `example.com → 93.184.216.34` |
| **AAAA** | Domain → IPv6 | `example.com → 2606:2800::68c6...` |
| **CNAME** | Domain → another domain (alias) | `www → example.com` |
| **MX** | Email server | `mail → smtp.google.com` |
| **TXT** | Text information | Domain verification, email SPF, etc. |
| **NS** | The domain's nameserver | `ns1.cloudflare.com` |

---

## 8. TTL (Time To Live)

Every DNS record has a **TTL** — the time (in seconds) the result is cached.

- TTL 3600 = cached for 1 hour.
- Low TTL: DNS changes take effect quickly (within minutes) but consume more server resources.
- High TTL: saves resources but changes take longer to propagate.

**Practical note**: When switching hosting, DNS changes can take 24–48 hours to "propagate" globally because of the old TTL.

---

## 9. Registering a Domain

You register a domain through a **Registrar**:
- International: GoDaddy, Namecheap, Google Domains, Cloudflare.
- Vietnam: VNPT, Inet, Mắt Bão.

After registering, you edit the DNS records at the **Nameserver** (usually with the registrar itself or a separate DNS service such as Cloudflare).

---

## 10. Summary

- **Domain** = an easy-to-remember name in place of an IP; it consists of subdomain + second-level + TLD.
- **URI** is the general concept; **URL** = a URI with a location; **URN** = a URI that is just a name.
- **URL** = scheme + host + port + **path** + query + fragment.
- **Path** describes a resource in a tree structure — important for SEO and UX.
- **Sitemap.xml** = the list of a site's URLs, helping Google index it; declared in `robots.txt`.
- **DNS** resolves a domain → IP; the **A record** is the most important; **TTL** determines how fast DNS updates take effect.
