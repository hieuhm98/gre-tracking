# Security Basics

## 1. Why Does Security Matter?

A security vulnerability can lead to: leaked user data, financial loss, damaged reputation, and legal violations. BAs/PMs need a basic understanding to write correct security requirements and assess risk.

---

## 2. Authentication vs Authorization

These are two concepts that are often confused:

| | Authentication | Authorization |
|--|--------------------------|---------------------------|
| **Question** | Who are you? | What are you allowed to do? |
| **Example** | Logging in with a password | An admin sees everything; a user only sees their own data |
| **When** | First | After authentication |

**Real-world example**: You log in to Shopee (authentication) → you can only view your own orders, not other people's (authorization).

---

## 3. Common Threats

### SQL Injection
An attacker inputs SQL code into a form to tamper with the database:

```sql
-- Login form input: ' OR '1'='1
SELECT * FROM users WHERE username='' OR '1'='1' AND password=''
-- Result: returns ALL users → bypasses the password!
```

**Prevention**: use Prepared Statements; never concatenate strings directly into SQL.

### XSS (Cross-Site Scripting)
An attacker injects malicious JavaScript into a web page, which runs in the victim's browser to steal cookies/sessions.

**Prevention**: escape output, Content Security Policy (CSP).

### CSRF (Cross-Site Request Forgery)
Tricks a user into performing an unwanted action on a website where they are logged in.

**Prevention**: CSRF token, SameSite cookie.

### Phishing
Impersonating a legitimate email/website to trick users into entering their information.

**Prevention**: check the URL, don't click suspicious links, use 2FA.

---

## 4. HTTPS and Encryption

- **HTTPS** encrypts transmitted data — eavesdroppers can't read it.
- A **TLS certificate** confirms the website is genuine (not a fake).
- All websites handling sensitive data **must use HTTPS**.

---

## 5. Password Security

**Never store passwords in plain text** — they must be hashed:

```
Password: "mypassword123"
After bcrypt hashing: "$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/L..."
```

**Best practices for users:**
- Long passwords (≥12 characters), complex.
- Don't reuse the same password across multiple accounts.
- Use a Password Manager (1Password, Bitwarden).
- Enable **2FA (Two-Factor Authentication)**.

---

## 6. 2FA (Two-Factor Authentication)

2FA requires **two pieces of evidence** to log in:
1. Something you **know**: a password.
2. Something you **have**: an OTP from an app (Google Authenticator) or SMS.

Even if the password is leaked, without the OTP → you can't log in.

---

## 7. The Principle of Least Privilege

Grant only the **minimum privileges necessary** to do the job:
- Developers don't need access to the production database.
- Regular users don't need permission to delete other people's data.
- Service A doesn't need permission to read the entire database.

---

## 8. Security in a Project — The BA/PM Perspective

When writing requirements, consider:
- Which data is sensitive? (PII: name, email, national ID, phone number)
- Who can view/edit/delete which data? → clear authorization requirements.
- Do you need an audit log? (who did what, at what time)
- Do you need encryption of data at rest? (data stored in the database)

---

## 9. Summary

- **Authentication** = verifying identity ("Who are you?").
- **Authorization** = granting permissions ("What are you allowed to do?").
- **SQL Injection/XSS/CSRF**: the most common vulnerabilities.
- **HTTPS**: mandatory for every website.
- **2FA**: significantly increases account security.
- **Least Privilege**: grant only the minimum privileges necessary.
