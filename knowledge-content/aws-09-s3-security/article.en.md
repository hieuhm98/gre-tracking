# Amazon S3 – Security & Encryption

## 1. Overview

Amazon S3 is AWS's core object storage service, and securing data on S3 is one of the most heavily tested topics in the SAA-C03 exam. S3 security revolves around two main axes: **data encryption** (at rest and in transit) and **access control** (who is allowed to do what with a bucket/object).

Why it matters: S3 data leaks (accidentally public buckets) are a leading cause of cloud security incidents. AWS has changed many defaults to be "secure by default": **Block Public Access is on by default**, **`SSE-S3` encryption is default since January 2023**, and **ACLs are disabled by default**.

On the exam you'll see questions phrased "the MOST cost-effective way to…", "MOST secure…", "LEAST operational overhead…" related to choosing an encryption type, enforcing HTTPS, cross-account sharing, or preventing data deletion.

## 2. At-rest data encryption types

S3 supports server-side encryption (SSE) and client-side encryption. With SSE, data is encrypted **after** S3 receives it and before writing to disk.

| Type | Key management | Rotation | Audit | Primary use case |
|------|----------------|----------|-------|------------------|
| `SSE-S3` | Fully AWS-managed (AES-256) | Automatic, transparent | No separate audit | Default, simple, no key control needed |
| `SSE-KMS` | AWS KMS (CMK keys) | Yes, auto/manual | Yes – via `CloudTrail` | Need to audit who decrypts, control key permissions |
| `DSSE-KMS` | KMS, dual-layer | Yes | Yes | Strict compliance (two encryption layers) |
| `SSE-C` | Customer-provided key | Customer-managed | No (S3 doesn't store key) | Customer wants to hold keys, no KMS |
| Client-side | Customer encrypts before upload | Customer-managed | No | End-to-end encryption, S3 only sees ciphertext |

Key points:
- `SSE-S3`: uses header `x-amz-server-side-encryption: AES256`. AWS manages everything; decryption operations aren't visible.
- `SSE-KMS`: uses header `aws:kms`. Enables **auditing via `CloudTrail`** and **permission control** over decryption via the key policy. Downside: each operation calls a KMS API (`GenerateDataKey`, `Decrypt`) → subject to **KMS API limits/throttling** and cost.
- `DSSE-KMS`: dual-layer encryption with KMS, for special compliance needs (e.g. government standards).
- `SSE-C`: the customer sends the key in each request over HTTPS; S3 uses it to encrypt/decrypt then **discards the key from memory**, never storing it. HTTPS is mandatory.
- Client-side: fully encrypted on the application side before sending; AWS never sees plaintext.

## 3. Encryption in transit, Default encryption & S3 Bucket Keys

**Encryption in transit**: S3 supports both HTTP and HTTPS, but to enforce HTTPS you add the `aws:SecureTransport` condition to a bucket policy (Deny when `aws:SecureTransport = false`). This is how you force transport encryption (TLS).

**Default encryption**: since January 2023, every new object is **automatically encrypted with `SSE-S3`** even if the client doesn't request it. You can raise the default to `SSE-KMS`/`DSSE-KMS` at the bucket level.

**S3 Bucket Keys**: when using `SSE-KMS` at scale, calling KMS per object is costly and causes throttling. **S3 Bucket Keys** creates a bucket-level key, drastically reducing calls to KMS (up to ~99% KMS cost reduction). This is the "MOST cost-effective" answer when a question uses `SSE-KMS` but worries about KMS cost/limits.

```text
Bucket policy Deny when not using TLS:
"Condition": { "Bool": { "aws:SecureTransport": "false" } }
```

## 4. Bucket Policy vs IAM Policy vs ACL

Three access-control mechanisms, differing in "what they attach to".

| Mechanism | Type | Attaches to | Use when |
|-----------|------|-------------|----------|
| IAM Policy | Identity-based | User/Group/Role | Control an identity's permissions within the same account |
| Bucket Policy | Resource-based (JSON) | Bucket | Cross-account access, enforce HTTPS, public/anonymous |
| ACL | Legacy | Bucket/Object | Mostly avoid, disabled by default |

- **IAM policy**: answers "what can this identity do on which resources".
- **Bucket policy**: resource-based JSON attached directly to a bucket. The standard way to **share cross-account** (`Principal` is an external account/role) and to enforce conditions like `aws:SecureTransport`, IP restrictions, or VPC endpoint.
- **ACL**: legacy mechanism; with **Object Ownership = Bucket owner enforced** (the new default), ACLs are **disabled** and all access is managed via policy. AWS recommends turning ACLs off.

## 5. Block Public Access (BPA)

**Block Public Access is on by default (ON)** at both **account** and **bucket** level. It has 4 blocking settings: block new public ACLs, ignore existing public ACLs, block new public policies, and restrict public access via existing policies.

Even if a bucket policy or ACL grants public access, BPA will **override and block** public access. To host a public static website you must deliberately disable the appropriate BPA settings. On the exam: if asked "how to prevent data from becoming public due to misconfiguration", the answer is usually **enable BPA at the account level**.

## 6. Pre-signed URLs

A **pre-signed URL** is a signed URL granting temporary (time-limited) access to an object without AWS credentials. The URL creator "lends" their own permissions.

Key exam point: a pre-signed URL **inherits the permissions of the user/role that created it** – if the creator has `s3:GetObject`, whoever holds the URL can download that object until it expires. Used for: letting anonymous users download/upload a private file for a short time (e.g. a temporary "Download" button), without making the bucket public.

## 7. S3 Access Points & S3 Object Lambda

**S3 Access Points**: each access point has its own name (its own hostname) and its own **policy**, helping manage access for many applications/teams without bloating a single giant bucket policy. An access point can be restricted to use only within a VPC.

**S3 Object Lambda**: lets you run a `Lambda` function to **transform data as an object is retrieved** (GET) – e.g. redact sensitive info, resize images, change format – without storing many copies. The original data is unchanged; only the returned view is processed.

## 8. CORS (Cross-Origin Resource Sharing)

**CORS** controls whether a browser on one domain (origin) can access S3 resources on another domain. You configure CORS on the bucket (JSON/XML) declaring `AllowedOrigins`, `AllowedMethods`, `AllowedHeaders`. Common when a web frontend calls S3 directly to load/display resources; without proper CORS the request is blocked by the browser.

## 9. MFA Delete

**MFA Delete** requires multi-factor authentication (MFA) for sensitive operations: **permanently deleting an object version** or **disabling versioning** on a bucket. It can only be **enabled by the root account** and the bucket must have versioning enabled. This is a protection layer against accidental/malicious deletion.

## 10. S3 Object Lock (WORM) & Glacier Vault Lock

**S3 Object Lock** applies the **WORM (Write Once Read Many)** model – an object cannot be deleted/overwritten during its retention period. Requires bucket versioning.

| Mode | Who can overwrite/delete | Characteristics |
|------|--------------------------|-----------------|
| Governance mode | Users with special permission (`s3:BypassGovernanceRetention`) | Protective but admins can bypass |
| Compliance mode | **No one** – including root | Cannot shorten/delete retention, cannot disable |
| Legal Hold | Held indefinitely until removed | Independent of retention period |

- **Compliance mode** cannot be disabled or shortened even by **root** – used for strict legal compliance.
- **Governance mode** allows users with `s3:BypassGovernanceRetention` to bypass.
- **Legal Hold** locks the object until manually removed, not tied to a duration.

**Glacier Vault Lock**: applies a similar WORM policy to a Glacier vault; once locked, the policy becomes **immutable**.

## 11. Access Logging & CloudTrail Data Events

- **S3 Server Access Logs**: records detailed logs of every request to a bucket (written to a separate target bucket), for access analysis and security investigation.
- **CloudTrail data events**: records object-level operations (`GetObject`, `PutObject`, `DeleteObject`) – must be enabled separately since CloudTrail logs only management events by default. With `SSE-KMS`, CloudTrail also logs KMS calls to audit who decrypts.

## 12. VPC Gateway Endpoint for S3

A **VPC Gateway Endpoint** lets resources inside a VPC (e.g. EC2 in a private subnet) access S3 **over AWS's private network**, not the internet, **without a NAT Gateway/Internet Gateway**. Key characteristic: it is **free** (Gateway Endpoints have no charge, unlike Interface Endpoints using PrivateLink which are charged). Typical answer for "private, MOST cost-effective S3 access" from a private subnet.

## Key exam points

- `SSE-KMS` is the choice when you need **audit (CloudTrail)** and **key control/rotation**; but watch **KMS API limits/throttling** → use **S3 Bucket Keys** to reduce KMS calls and cost (MOST cost-effective).
- **Default `SSE-S3` encryption is on since Jan 2023**; **Block Public Access is on by default** at account and bucket level.
- Enforce HTTPS with a bucket policy Deny using the `aws:SecureTransport = false` condition.
- **Pre-signed URLs inherit the creator's permissions** and are time-limited.
- **Cross-account access** uses a **bucket policy** (resource-based) with `Principal` being the external account.
- **Object Lock Compliance mode cannot be disabled/shortened even by root**; Governance mode can be bypassed with special permission.
- **MFA Delete** can only be enabled by root and needs versioning.
- **VPC Gateway Endpoint for S3 is free**, giving private VPC access without internet.
- `SSE-C`: customer holds the key, HTTPS mandatory, S3 doesn't store the key.

## Summary

- S3 has 5 encryption approaches: `SSE-S3` (default), `SSE-KMS` (audit + rotation), `DSSE-KMS` (dual-layer), `SSE-C` (customer key), and client-side (encrypt before upload).
- Access control includes IAM policy (identity), bucket policy (resource, used for cross-account & enforcing HTTPS), and ACL (legacy, disabled by default).
- AWS is secure by default: Block Public Access ON, `SSE-S3` encryption default, ACLs disabled.
- Protect data from deletion: Object Lock (WORM, governance/compliance/legal hold), MFA Delete, Glacier Vault Lock.
- Private access & temporary sharing: VPC Gateway Endpoint (free), Pre-signed URLs (temporary, inherit creator's permissions), Access Points & Object Lambda.
- Monitoring: S3 Server Access Logs and CloudTrail data events to audit object access.
