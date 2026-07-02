# AWS Security & Encryption – KMS, Secrets Manager, Shield, WAF, GuardDuty

## 1. Overview

**Encryption** is the process of turning readable data (plaintext) into an unreadable form (ciphertext) using a **key**. In AWS there are two encryption contexts you must clearly distinguish for the exam:

- **Encryption at rest:** protects data sitting on disks, databases, backups, and snapshots. Examples: encrypting an `EBS` volume, objects in `S3`, an `RDS` database. Keys are usually managed by `KMS`.
- **Encryption in transit:** protects data moving across the network using **TLS/SSL** (HTTPS). Prevents eavesdropping and man-in-the-middle attacks. Certificates are issued by `ACM`.

Two families of encryption algorithms:

| Type | Key | Characteristics | Typical use |
|---|---|---|---|
| **Symmetric** | A single key encrypts & decrypts | Fast, used for large volumes of data | Encrypting data at rest (AES-256) |
| **Asymmetric** | Public/private key pair | Slower, no need to share the private key | TLS handshake, digital signatures, sign/verify |

**Why it matters for the SAA-C03 exam:** security is AWS's "Job Zero". The exam repeatedly asks which service fits key management, secret rotation, DDoS protection, application-layer filtering, threat detection, or vulnerability scanning. Knowing exactly "what each service does" is the key to scoring.

## 2. AWS KMS (Key Management Service)

`KMS` is a centralized **encryption key management** service, deeply integrated with most AWS services. Keys are called **KMS Keys** (formerly CMK – Customer Master Key).

**Key types:**

| Key type | Who creates/manages | Rotation | Policy visibility/control |
|---|---|---|---|
| **AWS-owned** | Owned by AWS, shared across accounts | AWS handles it | Not visible, no control |
| **AWS-managed** (`aws/service`) | Created by AWS for a service | Automatic, mandatory | Visible, policy not editable |
| **Customer-managed (CMK)** | You create & manage | **Can enable/disable, automatic yearly** | Full key policy control |

- **Symmetric vs asymmetric:** `KMS` supports both **symmetric** (default, used to encrypt data) and **asymmetric** keys (public/private pair for digital signatures or encryption outside AWS where the KMS API cannot be called).
- **Access control:** combines a **key policy** (mandatory, attached directly to the key) + **IAM policy** + **grants** (temporary delegation). If the key policy does not allow it, IAM alone cannot grant access.
- **Key rotation:** for a **customer-managed key**, you can enable **automatic rotation** – KMS generates new key material **once per year**, transparently to the application.
- **Per-region:** `KMS` keys are **scoped to a region** – you cannot use a key from one region in another. **Multi-Region Keys** are replicas of a key (same key ID) copied across regions, used for DR / global tables / cross-region data replication.
- **4KB limit:** the direct `Encrypt`/`Decrypt` API can only encrypt data up to **4KB**.

**Envelope Encryption – data larger than 4KB:**

Because of the 4KB limit, to encrypt large data you use **envelope encryption** via the **`GenerateDataKey`** API:

1. Call `GenerateDataKey` → KMS returns a **plaintext data key** plus an encrypted version (encrypted data key).
2. Use the **plaintext data key** to encrypt the large data client-side (locally), then **wipe** the plaintext data key from memory.
3. Store the **encrypted data key** alongside the encrypted data.
4. To decrypt: call `Decrypt` so KMS unwraps the data key, then decrypt the data locally.

This way large data never passes through KMS – only the small data key does – which is both fast and bypasses the 4KB limit.

**Integrations:** `KMS` is used by `EBS`, `S3` (SSE-KMS), `RDS`, `EFS`, `Secrets Manager`, `DynamoDB`, and more to encrypt data at rest.

## 3. AWS Certificate Manager (ACM)

`ACM` provisions and manages **SSL/TLS certificates** to enable HTTPS (encryption in transit).

- **Public certificates are FREE** and **auto-renew** when issued by ACM.
- Integrates directly with **`ELB` (ALB/NLB), `CloudFront`, `API Gateway`** – no manual certificate installation needed.
- **Does NOT attach directly to `EC2`:** ACM cannot expose the private key to EC2. For HTTPS on EC2 you typically front it with an ELB/CloudFront or use a self-installed certificate.
- **Imported certificates** (bought elsewhere then imported): ACM stores them but does **NOT auto-renew** – you must re-import before expiry.

## 4. SSM Parameter Store vs AWS Secrets Manager

Both store configuration/secrets, but the biggest differences are **rotation** and **cost**.

| Criteria | SSM Parameter Store | AWS Secrets Manager |
|---|---|---|
| Purpose | Config + secrets | Dedicated to sensitive secrets |
| Encryption | `SecureString` encrypted via `KMS` | Always encrypted via `KMS` |
| **Automatic rotation** | **Not built in** (do it yourself) | **Yes – automatic via Lambda** |
| DB integration | Not native | **Native `RDS`, `Redshift`, `DocumentDB`** |
| Cost | **Cheaper** (standard tier free) | **More expensive** (per secret + API calls) |
| Best for | App config, environment parameters | DB passwords needing periodic rotation |

**Exam rule of thumb:** need **automatic database password rotation** (especially RDS) → choose **`Secrets Manager`**. Just need cheap config storage with no rotation → **`Parameter Store`**.

## 5. AWS CloudHSM

`CloudHSM` provides a **dedicated, single-tenant Hardware Security Module (HSM)** on physical hardware just for you.

| Criteria | AWS KMS | AWS CloudHSM |
|---|---|---|
| Model | Multi-tenant, managed | **Single-tenant, dedicated hardware** |
| Who holds the keys | AWS-managed (you configure) | **You fully control the keys** |
| Compliance | FIPS 140-2 Level 2 (Level 3 for some) | **FIPS 140-2 Level 3** |
| Use when | Ordinary encryption needs | Strict compliance, self-managed keys |

Choose `CloudHSM` when you have a compliance mandate for a dedicated HSM or you must be the sole controller of the keys.

## 6. AWS Shield – DDoS Protection

`Shield` protects against **DDoS** (Distributed Denial of Service) attacks.

| Tier | Cost | Protection | Characteristics |
|---|---|---|---|
| **Shield Standard** | **Free, automatic** | **L3/L4** (SYN flood, UDP reflection) | Enabled for every account |
| **Shield Advanced** | **Paid** (~$3000/month) | Adds **L7** | 24/7 **DRT team**, **cost protection** (refunds scaling costs from DDoS), advanced reporting |

## 7. AWS WAF – Web Application Firewall (Layer 7)

`WAF` filters traffic at the **application layer (Layer 7 / HTTP)**. You create a **Web ACL** containing **rules**.

**Common rule types:**

- **SQL injection** and **Cross-Site Scripting (XSS)** – block common web attacks.
- **Geo-match** – block/allow by country.
- **Rate-based rules** – limit requests per IP over a time window (defends against brute-force, L7 floods).
- **IP sets** – whitelist/blacklist by IP address.

**Attaches to:** `ALB`, `API Gateway`, `CloudFront`, `AppSync`.

**Exam note:** `WAF` is **NOT** for L3/L4 (that's `Shield`'s job). WAF only filters HTTP/HTTPS. WAF does **not** attach directly to an NLB (L4).

## 8. AWS Firewall Manager

`Firewall Manager` **centrally manages** security rules across **multiple accounts** in **AWS Organizations**:

- Applies `WAF` rules, `Shield Advanced`, **Security Groups**, AWS Network Firewall, and Route 53 Resolver DNS Firewall consistently.
- Automatically applies policies to newly created resources. Use it when you need organization-wide security standardization.

## 9. Amazon GuardDuty – Threat Detection

`GuardDuty` is an intelligent **threat detection** service using **Machine Learning** + threat intelligence.

- Analyzes **VPC Flow Logs, DNS logs, CloudTrail events** (and optionally EKS/S3).
- **No agent to install**, enabled in one click.
- Produces **findings** (e.g. communication with malicious IPs, crypto-mining, anomalous access) that can trigger `EventBridge` → Lambda for automated response.

## 10. Amazon Inspector – Vulnerability Scanning

`Inspector` performs **automated vulnerability scanning**:

- Targets: **`EC2` instances, container images in `ECR`, `Lambda` functions**.
- Finds **CVEs** (known software vulnerabilities) and **network exposure** (ports unintentionally open to the Internet).
- Scores risk to prioritize patching. Difference from GuardDuty: Inspector finds **vulnerabilities**, GuardDuty detects **active attack behavior**.

## 11. Amazon Macie – Sensitive Data Protection

`Macie` uses **Machine Learning** to **discover and classify sensitive data / PII** (personally identifiable information) in **`S3`**.

- Automatically recognizes credit card numbers, ID/passport numbers, personal information, and alerts you.
- Helps with GDPR/HIPAA compliance and avoids exposing sensitive data.

## 12. Summary table – "which service does what"

| Service | Main function | Quick recall |
|---|---|---|
| **`Shield`** | **DDoS** protection (L3/L4, +L7 Advanced) | Standard is free |
| **`WAF`** | **Layer 7** filtering (SQLi, XSS, rate, geo) | Web ACL on ALB/CF/API GW |
| **`GuardDuty`** | **Threat detection** (ML on logs) | No agent, produces findings |
| **`Inspector`** | **Vulnerability scanning** EC2/ECR/Lambda | Finds CVEs + network exposure |
| **`Macie`** | Detects **PII/sensitive data** in `S3` | ML data classification |

## Key exam points

- **`KMS`** manages keys; the direct API encrypts only up to **4KB** → large data must use **envelope encryption** via **`GenerateDataKey`**.
- **Customer-managed keys** support **automatic yearly rotation**; `KMS` keys are **per-region**, use **Multi-Region Keys** for cross-region needs.
- Need **automatic DB password rotation** (especially RDS) → **`Secrets Manager`**. Just need cheap config storage with no rotation → **`Parameter Store`** (SecureString).
- **`ACM`** issues **free + auto-renewing** certificates for **`ELB`/`CloudFront`/`API Gateway`**, but **does not attach directly to EC2**; imported certificates do **not** auto-renew.
- **`Shield`** = DDoS (Standard free, L3/L4); **`WAF`** = L7 filtering (SQLi/XSS/rate-based/geo). Don't confuse the two.
- **`GuardDuty`** = threat detection; **`Inspector`** = vulnerability scanning (CVEs); **`Macie`** = PII discovery in `S3`.
- **`CloudHSM`** = dedicated **single-tenant** HSM, FIPS 140-2 **Level 3**, you fully control the keys (unlike multi-tenant `KMS`).

## Summary

- `KMS` is the central key management service; **envelope encryption** (`GenerateDataKey`) is how you encrypt data larger than 4KB.
- Choose **`Secrets Manager`** when you need **automatic rotation** (native RDS); choose **`Parameter Store`** when you only need cheap config/secret storage.
- **In transit**: `ACM` issues free, auto-renewing TLS certificates for ELB/CloudFront/API Gateway (not directly for EC2).
- Attack defense: **`Shield`** for DDoS (L3/L4), **`WAF`** for Layer 7 filtering (SQLi, XSS, rate, geo), **`Firewall Manager`** for centralized multi-account management.
- Security monitoring: **`GuardDuty`** detects threats, **`Inspector`** scans for vulnerabilities, **`Macie`** discovers PII in S3.
- **`CloudHSM`** is for dedicated, single-tenant HSM requirements where you fully control the keys.
