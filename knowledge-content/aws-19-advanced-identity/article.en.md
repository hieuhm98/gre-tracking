# AWS Advanced Identity – Organizations, SCP, STS, IAM Identity Center

## 1. Overview

As systems grow, a single AWS account is no longer enough. Enterprises typically run **multiple accounts** (multi-account) to separate environments (prod / dev / test), separate teams, limit the "blast radius" during incidents, and manage costs more clearly. The **advanced identity** service group lets you govern many accounts centrally and grant access securely.

Key components:

- `AWS Organizations` – centrally manage multiple accounts, consolidated billing.
- `Service Control Policies (SCP)` – guardrails that cap the maximum permissions of an account/OU.
- `AWS Control Tower` – automatically stands up a multi-account "landing zone" with built-in guardrails.
- `AWS STS` – issues **temporary credentials**, the foundation of cross-account access.
- `IAM Identity Center` (formerly AWS SSO) – single sign-on (SSO) into multiple accounts and applications.
- `Amazon Cognito` – identity for the **end users** of an application.
- `AWS Directory Service` – integrates Microsoft Active Directory.
- `AWS RAM` – shares resources across accounts.

**Why it matters for the SAA-C03 exam:** the exam often presents a multi-account scenario and asks how to govern centrally, cap permissions, or grant temporary cross-account access. Correctly distinguishing each service's role is the key.

## 2. AWS Organizations

`AWS Organizations` lets you manage multiple AWS accounts under a single hierarchical structure.

**Key components:**

- **Management account** (formerly master/root account): the payer account, has full authority, creates/invites member accounts. Keep few resources in this account.
- **Member accounts**: each account belongs to exactly **one** organization.
- **Organizational Units (OUs)**: group accounts hierarchically (e.g., Prod OU, Dev OU, per-department OU). SCPs can be attached at the OU level to apply to every account inside.
- **Account-creation API**: you can create new member accounts **programmatically** (API/CLI), convenient for automation.

**Standout benefits:**

- **Consolidated Billing**: a single bill for the whole organization. Important for the exam:
  - **Volume discounts**: usage across all accounts is **aggregated** for pricing tiers — e.g., total `S3` storage or data transfer is summed, reaching discount tiers faster.
  - **Reserved Instance (RI) and Savings Plans sharing**: RIs/Savings Plans purchased in one account can apply to other accounts in the organization, optimizing cost.
- **Tag policies**: standardize tagging (format, key/value) across the whole organization for consistent governance and cost allocation.
- **Centralized governance**: enable trusted services such as organization-wide CloudTrail, and apply SCPs.

## 3. Service Control Policies (SCP)

An `SCP` is a policy attached at the **OU or account** level that defines the **maximum permissions** (guardrail) that principals (users, roles) in that account are allowed to have.

**EXTREMELY important principles for the exam:**

- **An SCP does NOT grant permissions.** It only sets a ceiling (guardrail). To actually have permissions, the principal still needs a corresponding **IAM policy** that grants them.
- **Effective permissions = the intersection of SCP and IAM policy.** An action is allowed only when **both** the SCP **and** IAM allow it.
- **Explicit deny always wins.** If an SCP (or IAM) has an explicit deny, the action is blocked even if something else allows it.
- **SCPs do not apply to the management account** (including the root of the management account) — so don't place critical resources there.
- SCPs don't affect service-linked roles.

**Policy styles:** an **allow list** (block everything by default, only open what's listed) or a **deny list** (allow by default, only block what's listed — more common, e.g., "deny all regions except ap-southeast-1").

### SCP vs IAM policy

| Criteria | `SCP` | `IAM policy` |
| --- | --- | --- |
| Grants permissions? | **No** (only caps) | **Yes** (actually grants) |
| Attached to | OU / account (via Organizations) | User / group / role |
| Effect | Maximum guardrail for the whole account | Specific permissions for a principal |
| Management account | **Does not apply** | Applies normally |
| Final result | Effective permissions = SCP ∩ IAM | (one half of the intersection) |

## 4. AWS Control Tower

`AWS Control Tower` **automatically sets up** a best-practice multi-account landing zone, built **on top of `AWS Organizations`**.

- Creates a secure multi-account environment in a few clicks.
- Applies automatic **guardrails**: **preventive** (uses SCPs to block unwanted actions) and **detective** (uses `AWS Config` to detect drift).
- Provides an **Account Factory** to provision new, standardized accounts.
- A dashboard for centralized compliance monitoring.

In short: if the exam asks "the fastest way to build a multi-account environment with guardrails ready," the answer is `Control Tower`.

## 5. AWS STS (Security Token Service)

`AWS STS` issues **temporary security credentials** with a short lifetime (typically 15 minutes–12 hours). This is the foundation of **assuming roles** and cross-account access.

**Key APIs:**

- **`AssumeRole`**: assume an IAM role — used for **role switching within the same account** and **cross-account access**. Returns a temporary access key id, secret key, and **session token**.
- **`AssumeRoleWithSAML`**: issues temporary credentials for users authenticated via **SAML 2.0** (federated with a corporate IdP).
- **`AssumeRoleWithWebIdentity`**: issues credentials for users authenticated via OpenID Connect (Google, Facebook...). **AWS now recommends `Amazon Cognito`** instead of calling this directly for public apps.
- **`GetSessionToken`**: used for **MFA** — obtains temporary credentials for a user/root authenticated with MFA.
- **`GetFederationToken`**: temporary credentials for a federated user (custom identity broker).

**Cross-account access via AssumeRole (the classic exam pattern):**

1. In **account B** (holding the resources), create an IAM role with a **trust policy** allowing **account A** (the principal) to assume it.
2. Attach an IAM policy to that role granting permissions on B's resources.
3. A principal in account A calls **`sts:AssumeRole`** pointing to B's role → receives temporary credentials → operates on B's resources.

**Additional concepts:**

- **External ID**: a secret string added to the trust policy when granting access to a **third party** (e.g., a SaaS vendor), preventing the "confused deputy" attack.
- **Role chaining**: assume role A, then from there assume role B; note the session is capped at 1 hour when chaining.

## 6. IAM Identity Center (formerly AWS SSO)

`IAM Identity Center` provides **single sign-on (SSO)** for the **workforce** (employees) into **multiple AWS accounts in Organizations** and **business applications** (SAML 2.0) — with just one set of credentials.

**Key points:**

- **Permission sets**: a collection of IAM policies defining a "job role" (e.g., Admin, ReadOnly); assigned to users/groups for each account.
- **Identity source**: choose one of: the Identity Center **built-in directory**, **Active Directory** (via Directory Service), or an **external IdP** (Okta, Azure AD/Entra ID...) via SAML 2.0.
- Provides a single login portal to access all accounts/applications.

If the exam says "centralized SSO for employees into multiple AWS accounts," the answer is `IAM Identity Center`.

## 7. IAM Identity Providers & Federation

`IAM Identity Providers` let you **federate** external identities instead of creating an IAM user for each person:

- **SAML 2.0 federation**: federate with a corporate IdP (ADFS, Okta) so employees log into AWS with their company account.
- **OIDC / Web Identity federation**: federate with OpenID Connect providers.
- **Custom identity broker**: when the IdP doesn't support SAML, write your own broker that calls STS to issue temporary credentials.

Federation means **no long-term credentials** stored in AWS per person — users receive temporary credentials after the IdP authenticates them.

## 8. Amazon Cognito

`Amazon Cognito` serves the **end users of an application** (web/mobile), different from SSO for internal employees.

- **User Pools**: a user directory for **sign-in/sign-up** in an application. Handles passwords, MFA, email/phone verification, and returns **tokens (JWT)**. Can federate social/SAML. Commonly used as an authorizer for `API Gateway`.
- **Identity Pools (Federated Identities)**: exchange an identity (from a User Pool, social login, SAML...) for **temporary AWS credentials** to directly access AWS services (e.g., upload straight to `S3`, read `DynamoDB`).

### Cognito User Pool vs Identity Pool

| Criteria | User Pool | Identity Pool |
| --- | --- | --- |
| Purpose | Authentication, sign-in/sign-up | Authorization into AWS |
| Returns | JWT tokens (id/access token) | **Temporary AWS credentials** (via STS) |
| Use when | You need user sign-in, or an API Gateway authorizer | You need to let an app access `S3`/`DynamoDB`... directly |

**Contrast with workforce SSO:** `Cognito` = external users of an **application**; `IAM Identity Center` = **employees** accessing AWS accounts.

## 9. AWS Directory Service

`AWS Directory Service` integrates **Microsoft Active Directory (AD)** with AWS.

### Comparing Directory Service types

| Type | Description | Use when |
| --- | --- | --- |
| **AWS Managed Microsoft AD** | A real AD managed by AWS, running in the cloud; supports two-way **trust** with on-prem AD | You need a full-featured AD on AWS, possibly federated with on-prem |
| **AD Connector** | A **proxy/gateway** that forwards authentication requests to **on-prem AD** (no data stored on AWS) | You want to reuse existing on-prem AD without replicating users to the cloud |
| **Simple AD** | A **standalone, cheap** AD, Samba-compatible, limited features | Basic needs, small user counts, no trust with on-prem required |

Key takeaway: **AD Connector = proxy to on-prem AD**; **Managed Microsoft AD = real AD on AWS**; **Simple AD = cheap, standalone**.

## 10. AWS Resource Access Manager (RAM)

`AWS RAM` lets you **share AWS resources across accounts** (inside or outside Organizations) **without duplicating** the resources.

- Shareable resources: **VPC subnets** (multiple accounts share one VPC), **Transit Gateway**, **Route 53 Resolver rules**, **License Manager**, **Aurora**, etc.
- Classic example: a central networking account creates a VPC and **shares subnets** via RAM so other application accounts launch resources into the same VPC → lower cost, centralized network governance.

If the exam asks "share a subnet / Transit Gateway across accounts without recreating it," the answer is `AWS RAM`.

## Key exam points

- **`SCP` does not grant permissions** — it only sets a ceiling (guardrail). Effective permissions = **SCP ∩ IAM**; **explicit deny always wins**; SCPs **do not apply to the management account**.
- **Consolidated billing** delivers **volume discounts** and **RI/Savings Plans sharing** across the organization.
- **Cross-account** access uses **`STS AssumeRole`** + a **trust policy** on the role in the target account; it returns **temporary credentials**.
- **`IAM Identity Center`** provides **employee SSO** into multiple AWS accounts and apps; permissions are defined with **permission sets**.
- **Cognito User Pool** = authentication/sign-in (returns JWT); **Identity Pool** = exchanges it for **temporary AWS credentials**. Don't confuse the two.
- **AD Connector = proxy to on-prem AD**; **Managed Microsoft AD = real AD on AWS**; **Simple AD = cheap, standalone**.
- **`AWS RAM`** shares **resources** (subnets, Transit Gateway...) across accounts without duplication.
- **`Control Tower`** **automatically builds** a multi-account landing zone with guardrails (based on Organizations).

## Summary

- `AWS Organizations` centrally governs multi-account setups: OUs, consolidated billing (volume discounts + RI/Savings Plans sharing), tag policies, account-creation API.
- `SCP` is a guardrail that sets the **maximum permissions** for an OU/account — it never grants; real permissions are the intersection of SCP and IAM.
- `STS AssumeRole` + a trust policy is the standard mechanism for temporary and cross-account access; `Control Tower` automatically builds a landing zone.
- `IAM Identity Center` for employee SSO; `Cognito` for end users (User Pool authenticates, Identity Pool grants AWS credentials).
- `Directory Service` (Managed Microsoft AD / AD Connector / Simple AD) integrates AD; `AWS RAM` shares resources across accounts.
