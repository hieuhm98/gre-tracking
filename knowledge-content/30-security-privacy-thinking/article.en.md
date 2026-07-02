# Security & Privacy Thinking

## 1. Why does a BA need a security mindset?

A BA doesn't need to know how to hack or how to write secure code. But a BA does need to know how to **ask the right questions** — because most security vulnerabilities don't come from a dev writing insecure code, but from a **requirement that never mentioned security** in the first place.

> *"The requirement said to display order information to the user. Everyone assumed it meant only your own orders, but nobody wrote it down. The dev built it, and every user could see everyone else's orders."*

This is IDOR (Insecure Direct Object Reference) — one of the most common flaws, and it comes from a missing requirement about authorization, not from a weak dev.

---

## 2. Threat Thinking — Ask "What if it gets abused?"

For every feature, a BA should ask one extra question:

> **"If a malicious user has this feature, what harm could they do?"**

```
Feature: Upload profile picture

Threat questions:
→ What if they upload a .exe instead of an image?
→ What if they upload a 10GB image to crash the server?
→ What if they upload an image containing a malicious script?

→ Requirement needs to add:
  ✅ Only accept JPG, PNG, WEBP
  ✅ Maximum size 5MB
  ✅ File must be scanned and validated server-side
  ✅ Store the file with a random name, do not use the original name
```

```
Feature: Coupon code

Threat questions:
→ User brute-forces thousands of codes?
→ Uses one code multiple times?
→ Uses an expired code?
→ Uses someone else's code?

→ Requirement needs to add:
  ✅ Rate limit: max 5 attempts / minute / user
  ✅ Each code can only be used once
  ✅ Check the expiry date on the BE
  ✅ Coupon is tied to an email, cannot be used by another account
```

---

## 3. Classifying sensitive data

Not all data needs the same level of protection. A BA needs to classify it:

### Level 1 — Public
No risk if exposed:
- Product name, price, description
- Public blog posts
- Company contact information

### Level 2 — Internal
Should not leak outside, but not a disaster:
- Internal analytics data
- Employee information (non-sensitive)
- Business plans

### Level 3 — Confidential
Exposure causes serious harm:
- **PII** (Personally Identifiable Information): full name, date of birth, address, email
- Phone number, national ID/Passport
- Financial information: account number, transaction history
- Medical and health data

### Level 4 — Restricted
Exposure is a catastrophe:
- Passwords (even hashed)
- Tokens, secret keys, API keys
- Full credit card number, CVV
- Biometric data

```
Principles:
✅ Collect as little data as possible (data minimization)
✅ Level 3-4 must be encrypted at rest and in transit
✅ Level 4 must not be logged, must not be displayed even to admins
✅ Ask yourself: "Do I really need this data field?"
```

---

## 4. Authentication vs Authorization — Two layers of protection

### Authentication (AuthN) — "Who are you?"

```
Forms:
- Username + Password (the most basic)
- Multi-Factor Authentication: password + OTP/app
- Single Sign-On (SSO): log in once, use many systems
- Social login: Google, Facebook

BA needs to specify:
✅ Password minimum length (8+ chars)
✅ Password complexity (uppercase, number, special char)
✅ Account lockout after N failures (5 times → lock 15 minutes)
✅ Session timeout (idle 30 minutes → logout)
✅ Is 2FA needed? Mandatory or optional?
✅ Forgot password flow (OTP email or link?)
```

### Authorization (AuthZ) — "What are you allowed to do?"

```
Questions a BA must answer for EVERY feature:

1. Who can view? (read permission)
2. Who can create? (create permission)
3. Who can edit? Edit whose? (update permission)
4. Who can delete? (delete permission)
5. Is there a "view only your own" case?

Example — HR system:
- Employee: view their own profile, not others'
- Manager: view their own team's profiles, not other teams'
- HR: view everything
- CEO: view everything + view salaries
- IT Admin: cannot view HR data
```

**The most common flaw: IDOR (Insecure Direct Object Reference)**

```
URL: /api/orders/12345

❌ Missing requirement:
  "Return the details of order 12345"
  → User A changes 12345 to 12346 → sees User B's order

✅ Correct requirement:
  "Return the details of order 12345 IF that order belongs to the logged-in user.
  If not: return 403 Forbidden"
```

---

## 5. Things you MUST NOT do — Red Lines

These are things that are never allowed, not even "temporarily":

### ❌ Store passwords in plaintext
```
Right: hash the password with bcrypt/argon2 before storing
Wrong: store "password123" directly in the database
Consequence: the database gets hacked → all passwords are exposed
```

### ❌ Log sensitive data
```
Right: log request/response but mask sensitive data
Wrong: log the entire request body containing passwords, card numbers
Consequence: anyone with log access has everything

BA needs to specify:
✅ "Do not log passwords, OTPs, card numbers in the application log"
✅ "Mask email in logs: an***@example.com"
```

### ❌ Pass sensitive data through the URL
```
Right: POST with body { "password": "..." }
Wrong: GET /reset-password?token=abc&email=user@example.com
Consequence: the URL is stored in browser history, server logs, proxies
```

### ❌ Trust input from the client
```
All data from the user must be validated on the BE:
- Frontend validation: good UX
- Backend validation: mandatory
Consequence if missing: SQL injection, XSS, business logic bypass
```

### ❌ Expose system information in error messages
```
Right: "An error occurred, please try again"
Wrong: "Error: MySQL syntax error near 'ORDER' at line 1"
Consequence: the hacker learns the database type and can launch a targeted attack
```

---

## 6. Privacy by Design — Collect little, protect a lot

**Privacy by Design** is the principle of building privacy into the system from the start, not adding it later.

### The 7 core principles:

**1. Proactive, not reactive:**
> Think about privacy before problems arise, not after

**2. Privacy as default:**
> Default: collect the least, share the least, retain for the shortest time

**3. Privacy embedded into design:**
> Privacy is not an add-on — it is part of the architecture

**4. Full functionality:**
> Privacy is not a trade-off against features — you can have both

**5. End-to-end security:**
> Protect data from collection all the way to deletion

**6. Visibility and transparency:**
> Users know what their data is used for

**7. Respect for user privacy:**
> Users have the right to control their own data

### Practical application for a BA:

```
When adding a data field to a form, ask:
□ Do I really need this field?
□ If yes: what exactly is it used for?
□ Can I use a less sensitive alternative?
   (Instead of date of birth → ask for age; instead of full address → ask for city)
□ How long is it retained? When is it deleted?
□ Who in the company can view this data?
```

---

## 7. Security questions a BA should ask by feature type

### For an input form:
- What are the input validation rules? (length, format, allowed characters)
- Which fields are PII? Do they need encryption?
- Is there rate limiting? (to prevent brute force, spam)

### For file upload:
- Which file types are allowed? (whitelist, not blacklist)
- Maximum size?
- Where is the file stored? (not in the webroot)
- Is virus/malware scanning done?

### For an API endpoint:
- Does this endpoint require authentication?
- Permission check: who is allowed to call it?
- Rate limiting: max how many requests/minute?
- Does it return other people's data? (IDOR risk)

### For payment/transaction:
- Is there idempotency? (calling twice doesn't charge twice)
- Audit log: record who did what, when, from which IP
- Is PCI DSS compliance required?
- Does the refund flow need double-confirmation?

### For notification/email:
- Does the email contain a link? After how long must the link expire?
- Can the token in the link be reused?
- Does the unsubscribe flow bypass authentication?

---

## 8. Audit Trail — Who did what, when

An audit trail logs every important action. A BA needs to determine which actions to track:

```
Actions that ALWAYS need an audit:
✅ Login (both success and failure)
✅ Change of password / permissions
✅ Viewing / exporting sensitive data
✅ Create / edit / delete important data (orders, payments)
✅ Changing system configuration
✅ Admin action on user data

Information to store in the audit log:
- WHO: user_id, role
- WHAT: action, resource type, resource id
- WHEN: timestamp (UTC)
- WHERE: IP address, device
- RESULT: success / failure
- BEFORE/AFTER: values before and after the change

Example:
{
  "user_id": "uuid-123",
  "action": "UPDATE_PRICE",
  "resource": "product:456",
  "before": { "price": 299000 },
  "after": { "price": 199000 },
  "ip": "192.168.1.1",
  "timestamp": "2025-04-09T10:30:00Z"
}
```

---

## 9. GDPR and Privacy Law — What a BA needs to know

**GDPR** (General Data Protection Regulation) of the EU affects any product that has EU users. Vietnam also now has **Decree 13/2023** on the protection of personal data.

### User rights a BA needs to implement:

```
Right to Access:
→ Users can request to see all of their data
→ Feature: "Download my data" — export all data to a file

Right to Erasure (the "Right to be forgotten"):
→ Users can request deletion of all their data
→ Not just deactivating the account — it must be truly deleted
→ Exception: data related to financial transactions (kept as required by law)

Right to Rectification:
→ Users can correct wrong data about themselves

Right to Portability:
→ Users can export their data in a standard format (JSON, CSV)
   to move to another service

Right to Object:
→ Users can opt out of marketing email, analytics tracking
```

### Consent:

```
BA needs to determine:
□ What data is collected? For what purpose?
□ Is explicit consent required? (for sensitive data: yes)
□ Where is consent stored? (to be able to prove the user agreed)
□ Can users withdraw consent? What is the flow?
□ Cookies: are they classified as "necessary" vs "analytics" vs "marketing"?
```

---

## 10. Security Checklist for a BA

Use this when reviewing requirements or before writing ACs:

```
AUTHENTICATION:
☐ Is the password policy clearly defined?
☐ Account lockout rule?
☐ Session timeout?
☐ Is 2FA needed?
☐ Is the forgot-password flow safe? (after how long does the link expire?)

AUTHORIZATION:
☐ For every API: who is allowed to call it?
☐ Can a user view/edit other people's data? (IDOR check)
☐ Is the role hierarchy clearly defined?

DATA PROTECTION:
☐ Which fields are PII/sensitive?
☐ Encrypt at rest and in transit?
☐ No logging of sensitive data?
☐ Data retention: how long to keep, when to delete?

INPUT & OUTPUT:
☐ Validation rules for every input?
☐ Rate limiting for public APIs and form submissions?
☐ Upload: whitelist file types, maximum size?
☐ Error messages don't expose system info?

AUDIT:
☐ Which actions need an audit trail?
☐ Does the log format include WHO/WHAT/WHEN/WHERE?

PRIVACY:
☐ Collect exactly the data needed, nothing extra?
☐ Can users view/edit/delete their own data?
☐ Is consent obtained in the right place?
```

---

## 11. The final mindset: Assume Breach

The best security mindset is **"Assume breach"** — assume the system will be attacked, and design to minimize damage when that happens.

**Questions a BA should ask:**
> *"If the database is exposed, what is the worst damage?"*

- Password hash (bcrypt) exposed → unreadable → OK
- Plaintext password exposed → the hacker has everything → catastrophe
- Credit card numbers exposed → PCI violation, lawsuits → catastrophe
- Emails and names exposed → spam, phishing → bad but manageable

> *"If one account is compromised, what can the attacker do?"*

- Sees only their own data → OK
- Sees the data of all users → catastrophe (IDOR bug)
- Can escalate to admin → catastrophe (privilege escalation)

Designing with this mindset helps a BA ask the right security questions right from the requirement stage, instead of discovering vulnerabilities after launch.
