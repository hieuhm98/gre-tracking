# AWS Serverless App – Cognito, Step Functions & SAM

## 1. Overview

A **serverless application** on AWS is composed of several managed services with no servers to run: `Lambda` runs code on events, `API Gateway` is the REST/HTTP front door, `DynamoDB` stores data, `S3` stores files, `Cognito` handles sign-in, `Step Functions` orchestrates processing steps, and `SNS`/`SQS`/`EventBridge` decouple components.

On the **SAA-C03** exam, this topic shows up as architecture questions: "Pick the MOST suitable service to...". The three most confused points you must nail down:

- **Cognito User Pool** (sign-in for app users) **≠ Identity Pool** (temporary AWS credentials).
- **Step Functions** is for **orchestration** of multiple steps, not for running business logic in place of Lambda.
- **Event-driven / decoupling** architecture uses `SQS`, `SNS`, `EventBridge` so services don't depend on each other directly.

## 2. Amazon Cognito – Authentication and identity

`Amazon Cognito` provides authentication and identity management for web/mobile apps. Cognito has **two separate components** that are commonly tested for distinction:

- **User Pools**: a **user directory** and **sign-in** mechanism. Users sign up/sign in with username-password or via social/enterprise IdPs (Google, Facebook, Apple, SAML, OIDC). The User Pool issues **JWT tokens** (ID token, access token) to protect APIs — for example as a **Cognito authorizer** for `API Gateway`. It supports MFA, email/phone verification, and password recovery.
- **Identity Pools (Federated Identities)**: exchange an identity token (from a User Pool or an external IdP) for **temporary AWS credentials** (via `STS`) so the app can **call AWS services directly**, such as `S3` and `DynamoDB`. Permissions are controlled with **IAM roles** (authenticated / unauthenticated-guest).

Quick rule to remember: **User Pool = "who is allowed to sign in"**; **Identity Pool = "which AWS resources they can access"**. The two are often used together: the User Pool authenticates the user, then the Identity Pool grants credentials to access AWS.

| Criterion | Cognito User Pool | Cognito Identity Pool |
|---|---|---|
| Purpose | Sign-in / user directory | Grant temporary AWS credentials |
| Returns | JWT token (ID/access) | AWS credentials (via `STS`) |
| Used for | Protecting APIs (authorizer), user management | Direct access to `S3`, `DynamoDB`... |
| Permission control | Groups, token scopes | IAM roles (auth / guest) |
| Federation | Social + SAML/OIDC as sign-in IdP | Exchange IdP token for AWS credentials |

## 3. AWS Step Functions – Workflow orchestration

`AWS Step Functions` orchestrates multiple steps into a **workflow (state machine)** defined in JSON (Amazon States Language). It manages state, ordering, retries, error handling, and branching — instead of writing complex orchestration logic inside Lambda.

Common state types: `Task` (invoke Lambda or another AWS service), `Choice` (branching), `Parallel` (run in parallel), `Map` (iterate over a list), `Wait`, `Retry`/`Catch`. It has direct integrations with many AWS services and a **visual interface** to track each step — very useful for audit and debugging.

Step Functions offers **two workflow types**:

| Criterion | Standard Workflow | Express Workflow |
|---|---|---|
| Max run duration | Up to **1 year** | Up to **5 minutes** |
| Execution model | Exactly-once | At-least-once (async) / at-most-once (sync) |
| Rate | Low/medium (up to ~2,000 starts/sec) | Very high (hundreds of thousands/sec) |
| Pricing | Per **state transition** | Per number of runs + duration + memory |
| Execution history | Stored and viewable in console | Written via `CloudWatch Logs` |
| Best for | Long, audit-worthy processes (approvals, ETL, business orchestration) | High-volume, short events (streaming/IoT processing, high-speed API backends) |

Remember: **long-running, needs exactly-once and history → Standard**; **high-volume, short, throughput/cost-focused → Express**.

## 4. AWS SAM – Serverless Application Model

`AWS SAM` (Serverless Application Model) is an **open-source framework** to define and deploy serverless applications. A SAM template is an **extension of CloudFormation** with shorthand syntax for serverless resources: `AWS::Serverless::Function` (Lambda), `AWS::Serverless::Api` (API Gateway), `AWS::Serverless::SimpleTable` (DynamoDB), `AWS::Serverless::StateMachine`.

At deploy time, SAM is **transformed into plain CloudFormation** and then deployed — so it inherits all of CloudFormation's capabilities but is far more concise. The **SAM CLI** lets you build and test **locally** (`sam local invoke`, `sam local start-api` run Lambda/API in Docker) and deploy (`sam build`, `sam deploy --guided`).

| Criterion | AWS SAM | AWS CloudFormation |
|---|---|---|
| Scope | Serverless-focused | Any AWS resource |
| Syntax | Shorthand (`Transform: AWS::Serverless-2016-10-31`) | Full, more verbose |
| Local testing | Yes (`sam local` via Docker) | Not available |
| Nature | Transforms into CloudFormation | Is the deploy engine itself |

## 5. Messaging & decoupling in serverless

A good serverless architecture is **event-driven** and **loosely coupled** — components communicate via messages/events instead of direct calls, helping absorb traffic spikes and prevent cascading failures.

- **`Amazon SQS`** – a queue, **pull** model. Producers push messages into the queue; consumers (Lambda) pull them at their own pace → **buffers load** and **decouples** producer/consumer. It has Standard (high throughput, at-least-once) and FIFO (strict ordering, exactly-once). Use when **one** system needs to process messages and absorb spikes.
- **`Amazon SNS`** – pub/sub, **push** model. A message is **fanned out** to many subscribers (Lambda, SQS, HTTP, email). Use when **many** systems must receive the same event. A common pattern is **SNS + SQS fan-out**: SNS pushes to multiple SQS queues so each consumer has its own buffer.
- **`Amazon EventBridge`** – an event bus that routes events by **rule/pattern** to many targets, with built-in integrations for many SaaS and AWS services. Ideal for **event-driven** architectures needing content-based filtering/routing and a schema registry.

## 6. Common serverless reference architectures

These architecture patterns frequently appear on the exam:

- **Mobile/Serverless backend**: `Cognito` (sign-in + credentials) → `API Gateway` → `Lambda` → `DynamoDB`. The mobile app authenticates through the Cognito User Pool, uses the Identity Pool to get credentials, calls the API through API Gateway (Cognito authorizer), and Lambda processes and reads/writes DynamoDB.
- **Thumbnail generation on S3 upload**: A user uploads an image to `S3` → an **S3 Event Notification** triggers `Lambda` → Lambda creates the thumbnail and writes the smaller image back to S3 (usually a different bucket/prefix). Metadata can be stored in `DynamoDB`. This is the classic **event-driven-on-S3** pattern — fully serverless.
- **Serverless REST API**: `API Gateway` (+ Cognito authorizer) → `Lambda` → `DynamoDB`, optionally with caching at API Gateway. It auto-scales and you pay per request.
- **Static website with CloudFront + S3**: Host a static site (HTML/CSS/JS) on `S3`, put `CloudFront` in front for global CDN/cache, HTTPS, and protect the bucket with **Origin Access Control (OAC)**. Dynamic parts call a serverless API (API Gateway + Lambda).

## Key exam points

- **Cognito User Pool = sign-in/user directory (returns JWT)**; **Identity Pool = temporary AWS credentials via `STS` to access AWS services**. The exam often asks you to distinguish these or pick the right one for a scenario.
- Need **sign-in for app users + protect `API Gateway`** → **User Pool** (Cognito authorizer).
- Need to **let users access `S3`/`DynamoDB` directly with temporary credentials** → **Identity Pool**.
- **Federation** (Google/Facebook/SAML): social login goes into the **User Pool**; exchanging an external token for AWS credentials goes through the **Identity Pool**.
- **Step Functions** = **orchestrate** multiple steps with state/retries/branching; not for running business logic in place of Lambda.
- **Standard workflow**: runs up to **1 year**, exactly-once, auditable → long business processes. **Express**: up to **5 minutes**, very high throughput, cheap → high-volume short events.
- **SAM** is a **superset of CloudFormation** for serverless, with `sam local` for local testing; at deploy it **transforms into CloudFormation**.
- **Decoupling**: **`SQS`** = queue (one consumer, buffer, pull); **`SNS`** = pub/sub fan-out (many subscribers, push); **`EventBridge`** = rule-based event routing.
- **S3 upload → S3 Event → Lambda** is the standard pattern for image/thumbnail processing, no server needed.

## Summary

- **Cognito** provides authentication: **User Pool** for sign-in (JWT), **Identity Pool** for temporary AWS credentials — don't confuse the two.
- **Step Functions** orchestrates workflows via a state machine; choose **Standard** for long, audit-worthy processes and **Express** for high-volume/short ones.
- **SAM** is a shorthand framework over CloudFormation for serverless, supporting local testing and transforming into CloudFormation at deploy.
- **SQS / SNS / EventBridge** enable an **event-driven, loosely coupled** architecture: queue vs pub/sub vs event routing.
- Know the reference patterns: mobile backend, thumbnail from S3 event, serverless REST API, and static site with CloudFront + S3.
