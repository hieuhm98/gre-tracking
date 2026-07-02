# AWS IAM – Identity & Access Management

## 1. Overview

**IAM** (Identity and Access Management) is the service that manages **who is allowed to do what** in an AWS account. It is the security foundation of every system on AWS: every request to an AWS API is checked for permissions by IAM before it runs.

An extremely important point for the exam: **IAM is a GLOBAL service** — it is not tied to a specific region. The users, groups, roles, and policies you create are shared across the entire account in every region.

Why IAM is needed:

- Grant granular permissions instead of sharing one high-privilege account.
- Apply the principle of **least privilege**.
- Audit who accessed which resources.

IAM appears in almost every domain of the SAA-C03 exam, especially questions about "the most secure way for service X to access service Y".

---

## 2. Users & Groups

An **IAM User** represents a person or an application that needs long-term access to AWS. Each user has its own identity and its own set of credentials.

An **IAM Group** is a collection of users. You attach policies to the group, and every user in the group automatically inherits those permissions.

| Attribute | IAM User | IAM Group |
|-----------|----------|-----------|
| Represents | A person / application | A collection of users |
| Has credentials | Yes (password, access key) | No |
| Purpose | Individual identity | Assign permissions per group |
| Can contain | (nothing) | Only users, not other groups |

Notes:

- A user can belong to **multiple groups**.
- A group **cannot contain** another group (no nesting).
- A group is only for assigning permissions — a group is **not** an identity you can sign in as.

---

## 3. Policies & JSON structure

A **policy** is a JSON document that describes permissions. You attach a policy to a user, group, or role. There are **AWS managed policies** (created by AWS) and **customer managed policies** (written by you).

The main elements of a policy JSON:

| Element | Meaning |
|---------|---------|
| `Version` | The policy language version, always `"2012-10-17"` |
| `Statement` | The list of permission statements |
| `Effect` | `Allow` or `Deny` |
| `Action` | The API action allowed/denied, e.g. `s3:GetObject` |
| `Resource` | The resource it applies to, written as an ARN |
| `Principal` | Who is allowed (used in resource-based / trust policies) |
| `Condition` | Conditions that must hold (e.g. IP restriction, require MFA) |

Example of a policy that allows reading an S3 bucket:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::my-bucket",
        "arn:aws:s3:::my-bucket/*"
      ]
    }
  ]
}
```

`Principal` and `Condition` are optional. `Principal` only appears in a **resource-based policy** (such as a bucket policy) and in a role's **trust policy** — it does not appear in an identity-based policy attached to a user.

---

## 4. Roles (for AWS services like EC2)

An **IAM Role** is an identity with permissions like a user, but it **does not belong to a person** and has **no fixed credentials**. Instead, a role is **assumed temporarily** and grants temporary credentials through the **STS** (Security Token Service) with the `sts:AssumeRole` API.

Roles are used when an **AWS service** (such as EC2, Lambda) needs to call other AWS services on your behalf.

| Attribute | IAM User | IAM Role |
|-----------|----------|----------|
| Attached to | A fixed person / application | Assumed temporarily |
| Credentials | Long-term (access key, password) | Temporary (issued by STS, auto-expiring) |
| Used for | Humans, applications outside AWS | AWS services (EC2, Lambda), cross-account |
| Security | Keys must be rotated manually | Safer, keys rotate automatically |

Each role has a **trust policy** (who is allowed to assume this role) and a **permission policy** (what this role can do).

---

## 5. Policy evaluation logic / explicit deny

When a request arrives, IAM evaluates all applicable policies using these rules:

1. **Implicit deny by default** — if nothing allows it, the request is denied.
2. If a matching `Allow` statement exists → it is allowed.
3. **An explicit `Deny` always wins** — if any policy has a matching `Deny`, the request is denied, even if another `Allow` exists.

Order of precedence: **Explicit Deny > Allow > Implicit Deny (default)**.

Example: a user has `Allow s3:*` but is also subject to another policy with `Deny s3:DeleteObject` → the user can do everything with S3 **except** delete objects. This is a classic exam question.

---

## 6. Least privilege

**Least privilege** means granting only the exact permissions needed to do the job — no more.

- Do not grant `AdministratorAccess` to every user.
- Start with minimal permissions and expand as needed.
- Use the **Access Advisor** tool (see section 9) to detect and revoke unused permissions.

Least privilege reduces risk: if credentials leak, an attacker can only do very little.

---

## 7. MFA & password policy

**MFA** (Multi-Factor Authentication) requires a second factor in addition to the password (a code from an app like Google Authenticator, a hardware key, or a virtual MFA device). Even if the password leaks, an attacker still cannot sign in.

A **password policy** lets an admin enforce password rules across the account:

- Minimum length.
- Require uppercase, lowercase, numbers, special characters.
- Allow/disallow users to change their own password.
- Require periodic password changes (password expiration).
- Prevent reuse of old passwords.

Best practice: **enable MFA for the root account and every important IAM user**.

---

## 8. Access keys vs Console / CLI / SDK

There are two ways to access AWS:

| Access method | What you use | For |
|---------------|--------------|-----|
| **AWS Management Console** | Username + Password (+ MFA) | Humans, working through the web UI |
| **AWS CLI / SDK** | Access Key ID + Secret Access Key | Programs, scripts, automation |

- An **access key** consists of an `Access Key ID` (like a username) and a `Secret Access Key` (like a password) — **never share it**.
- The **AWS CLI** is a command-line tool (`aws iam ...`, `aws s3 ...`) to control AWS from a terminal.
- The **AWS SDK** is a programming library (Python/boto3, JavaScript, Java...) to call AWS from application code.
- Access keys are for programmatic access; the console is for humans. Do not use the root account's access key.

---

## 9. IAM Roles for EC2 (instance profile)

When an application running on **EC2** needs to access another service (for example, read from **S3**), you must **NOT** embed access keys in the code or in a config file on the machine — that is the least secure approach.

The correct way: create an **IAM Role** with the required permissions and **attach the role to the EC2 instance** (through an **instance profile**). EC2 automatically receives temporary credentials from STS, which are automatically rotated and auto-expiring — no secret sits permanently on the machine.

This is the "MOST secure" answer to any question like "EC2 needs to access S3 / DynamoDB — what is the safest way?": **use an IAM Role attached to the instance**, not access keys.

---

## 10. IAM security tools: Credentials Report & Access Advisor

IAM provides two important audit tools:

| Tool | Scope | Tells you |
|------|-------|-----------|
| **Credentials Report** | Whole account (account-level) | A list of all users and the state of their credentials: whether MFA is enabled, when access keys were last used, passwords... |
| **Access Advisor** (Last Accessed) | Per user/role (user-level) | The services a user/role is granted access to and the **last time** each service was accessed |

- The **Credentials Report** helps review the whole account: who has not enabled MFA, which keys are old and need rotating.
- **Access Advisor** helps enforce least privilege: if a permission has never been used → revoke it.

---

## 11. Root account protection

The **root account** (the account created with the email when you sign up for AWS) has **absolute full permissions** and cannot be restricted. If it is compromised, an attacker controls the entire account.

Rules to protect root:

- **Enable MFA on root** immediately.
- **Do not use root for daily tasks** — create a dedicated IAM user for admin work and use it.
- **Do not create access keys for root**; if you already have them, **lock away (delete) the root access keys**.
- Only use root for the few required tasks (changing billing information, closing the account...).

---

## 12. IAM best practices

- Do not use root for daily work; enable MFA for root.
- One dedicated IAM user per person — **do not share users**.
- Assign permissions through **groups**, not directly to each user.
- Apply **least privilege**.
- Enable **MFA** and a strong **password policy**.
- Use an **IAM Role** for AWS services (like EC2), do not embed access keys.
- Rotate access keys regularly; delete unused keys.
- Audit with the **Credentials Report** and **Access Advisor**.

---

## Key exam points

- **IAM is a GLOBAL service**, not tied to a region.
- **An explicit Deny always wins** over any `Allow`; the default is **implicit deny**.
- Evaluation order: **Explicit Deny > Allow > Implicit Deny**.
- For **EC2 needing to access S3/DynamoDB → use an IAM Role attached to the instance**, do NOT embed access keys (this is the "most secure" answer).
- **Use a Role for AWS services, not an IAM user** for services.
- **Do not use root for daily tasks**; enable MFA on root and lock away the root access keys.
- A policy JSON needs `Effect`, `Action`, `Resource`; `Principal`/`Condition` are optional.
- Roles grant **temporary credentials** via **STS** (`sts:AssumeRole`).
- **Credentials Report** = account-level; **Access Advisor** = shows when permissions were last used, to enforce least privilege.
- Assign permissions through **groups**; apply **least privilege**.

## Summary

- **IAM** manages who can do what on AWS and is a **global** service.
- **User** = a person/app; **Group** = a collection of users for assigning permissions; **Role** = a temporary identity for AWS services.
- A **policy** is JSON with `Effect` / `Action` / `Resource`; an **explicit Deny** always wins.
- The most secure way for EC2 to access another AWS service is an **IAM Role attached to the instance**, not access keys.
- Enable **MFA**, apply **least privilege**, and **protect the root account** (do not use it daily, lock away access keys).
- Audit with the **Credentials Report** and **Access Advisor**.
