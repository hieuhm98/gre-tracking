# Containers on AWS – ECS, Fargate, ECR & EKS

## 1. Overview

A container packages an application together with all its dependencies (runtime, libraries, config) into a standard unit that runs the same way in every environment. AWS offers an ecosystem of services to **build, store, and run** containers at scale.

Key services to know for SAA-C03:

- **Amazon ECS** – the "AWS-native" container orchestrator, simple and deeply integrated with AWS services.
- **AWS Fargate** – a serverless engine to run containers with **no server management** (shared by both ECS and EKS).
- **Amazon ECR** – a registry to store Docker images, private/public, integrated with IAM.
- **Amazon EKS** – managed Kubernetes (managed control plane) when you want standard open-source Kubernetes.
- **AWS App Runner** – the simplest way to deploy a containerized web app/API.

Core exam takeaways: **Fargate = no server management (serverless containers)**; **ECS = AWS-native orchestration**; **EKS = managed Kubernetes**; **ECR = image registry**; the **ECS Task Role** grants containers permission to call AWS services; use **EFS** for persistent storage with ECS/Fargate; **App Runner** for the simplest web app.

## 2. Docker basics

Docker is the foundation for packaging and running containers.

- **Container vs VM**: A VM virtualizes hardware and runs a full separate OS per machine → heavy, slow to boot. A container shares the host OS kernel and only packages the process + dependencies → lightweight, fast startup, higher density.
- **Image**: an immutable (read-only) package containing code + runtime + libraries. From one image you can spawn many identical containers.
- **Dockerfile**: a text file describing the steps to build an image (base image, copy code, install dependencies, run command `CMD`).
- **Portability**: the same image runs identically on a laptop, on-premises, or in the cloud → consistency across environments.

After building, an image is **pushed** to a registry (e.g. `ECR`), then services like ECS/EKS **pull** it to run.

## 3. Amazon ECS – Task Definition, Task, Service

**Amazon ECS (Elastic Container Service)** is AWS's native container orchestration service.

- **`Task Definition`**: a JSON blueprint describing *how to run* a container: image (from `ECR`), CPU/memory, port mappings, environment variables (env), volumes, and attached IAM roles. It can define one or more containers.
- **`Task`**: a *running instance* of a Task Definition — the actual container(s) instantiated from the blueprint.
- **`Service`**: a controller that maintains **N tasks running in parallel** (desired count), replaces failed tasks, and **integrates with an ALB** to distribute traffic. A Service suits long-running web/API apps.

A cluster is the pool of infrastructure (EC2 instances or Fargate capacity) where tasks are placed and run.

## 4. EC2 launch type vs Fargate launch type

ECS supports two launch types:

- **EC2 launch type**: you provision and manage the **EC2 instances** in the cluster. Each instance runs the **ECS agent** to register with the cluster and receive tasks. You are responsible for patching, scaling, and capacity of the instances.
- **Fargate launch type**: **serverless** — no EC2 to provision or manage. You only declare CPU/RAM per task and AWS handles the underlying infrastructure. You **pay per running task** → drastically lower operational overhead.

| Criterion | `EC2` launch type | `Fargate` launch type |
|---|---|---|
| Server management | You manage EC2 + ECS agent | No servers to manage (serverless) |
| Operations (ops) | High (patch, scale, capacity) | Lowest |
| Pricing model | Pay for EC2 instances (even idle) | Pay per vCPU/RAM per task |
| Infrastructure control | Fine-grained (GPU, instance type…) | Limited (only CPU/RAM) |
| Task placement | Yes (`binpack`, `spread`, `random`) | Not applicable |
| Best when | Need control/cost optimization at steady scale | Want least ops, variable workloads |

Exam tip: questions like "**least operational overhead / no server management**" → choose **`Fargate`**.

## 5. IAM Roles – Instance Role vs Task Role

This is an important exam distinction.

- **EC2 Instance Role** (EC2 launch type only): a role attached to the **EC2 instance** so the **ECS agent** can operate — register with the cluster, pull images from `ECR`, send logs. These are *host-level* permissions.
- **ECS `Task Role`**: a role attached to **each Task Definition**, granting *the container itself* permission to call AWS services (e.g. read/write S3, query DynamoDB, send SQS messages). This is the correct way for a container to access AWS resources, following least privilege per task.

Exam tip: a container needs access to S3/DynamoDB → use the **`Task Role`**, **not** the instance role. Task Role works with **both Fargate and EC2**.

## 6. ECS Service Auto Scaling & ALB integration

- **ECS Service Auto Scaling**: automatically increases/decreases the **number of tasks** in a service. Use **Target Tracking** on metrics such as average CPU, memory, or **ALBRequestCountPerTarget** (requests per target on the ALB). Can combine with scheduled scaling and step scaling.
- **ALB integration**: the Service registers tasks into an Application Load Balancer **target group**. The ALB distributes traffic to tasks and performs health checks.
- **Dynamic port mapping**: with an ALB, ECS lets you run **multiple tasks on the same EC2 instance** using different random host ports; the ALB automatically maps traffic to each task's dynamic port → better resource utilization.

Note: ECS Service Auto Scaling (scaling task count) differs from EC2 Auto Scaling (scaling instance count); with the EC2 launch type you may need both.

## 7. Task placement strategies

Applies only to the **EC2 launch type** (Fargate doesn't need it since AWS handles infrastructure):

- **`binpack`**: packs tasks onto instances with the least available CPU/RAM first → uses the **fewest instances** → **saves cost**.
- **`spread`**: distributes tasks evenly across an attribute (e.g. Availability Zone, instance) → increases **availability (HA)**.
- **`random`**: places tasks randomly.

You can combine strategies with **task placement constraints** (e.g. `distinctInstance`, or by attribute). Exam tip: want to **reduce EC2 count / optimize cost** → `binpack`; want **HA across AZs** → `spread`.

## 8. Data storage (EFS for persistent storage)

By default a container is **stateless** — data written inside a task is lost when the task stops. With Fargate especially, there is no long-lived persistent disk.

- **Amazon EFS**: a shared file system that can be **mounted into multiple tasks** simultaneously, with data that **persists** across task restarts. **Works with both ECS on EC2 and Fargate.**
- Use EFS when multiple tasks need to **share data** or require durable state (shared config, content, user data).

Exam tip: need **persistent/shared storage** for ECS or Fargate → use **EFS** (not EBS, since EBS attaches to a single instance/AZ and is hard to use across multiple tasks with Fargate).

## 9. Amazon ECR

**Amazon ECR (Elastic Container Registry)** is a managed Docker image repository.

- Supports **private** registries (default) and **public** ones (ECR Public Gallery).
- Integrates with **IAM** to control push/pull permissions; natively integrates with **ECS and EKS** (and App Runner).
- **Image scanning**: scans images for security vulnerabilities (basic and enhanced scanning).
- Stores images on S3 under the hood, encrypts at-rest, supports lifecycle policies to clean up old images.

Typical flow: build image → push to `ECR` → ECS/EKS pull the image to run tasks/pods.

## 10. Amazon EKS

**Amazon EKS (Elastic Kubernetes Service)** is a **managed Kubernetes control plane** run by AWS.

- AWS operates and scales the control plane (API server, etcd) with multi-AZ HA.
- Run worker nodes via **managed node groups**, **self-managed nodes** (EC2), or on **Fargate** (no nodes to manage).
- **When to choose EKS**: when you want **standard open-source Kubernetes**, need **portability/multi-cloud**, or already have **Kubernetes tooling/expertise** (Helm, kubectl, operators). The tradeoff is higher operational complexity than ECS.

Exam tip: a requirement mentioning **Kubernetes / multi-cloud / existing k8s tooling** → choose **EKS**. If you only need simple orchestration on AWS → ECS.

## 11. AWS App Runner

**AWS App Runner** is a **fully managed** service to quickly deploy containerized **web apps and APIs**.

- Deploy directly from a **container image (ECR)** or from **source code** (automatic build).
- Automatically handles **auto scaling, load balancing, TLS/HTTPS, health checks** with minimal configuration — no need to build ECS/cluster/ALB manually.
- Ideal for simple microservices/web services when you want the **fastest deployment with the least configuration**.

Exam tip: "**the simplest way to run a containerized web app, low ops, don't want to manage orchestration**" → choose **App Runner**.

## 12. ECS vs EKS vs Fargate vs App Runner

| Service | Nature | Server management | When to use |
|---|---|---|---|
| **ECS** | AWS-native orchestrator | EC2 (self-managed) or Fargate | Containers on AWS, simple, deep AWS integration |
| **EKS** | Managed Kubernetes | EC2 nodes or Fargate | Need standard Kubernetes, multi-cloud, k8s tooling |
| **Fargate** | Serverless compute engine (for ECS/EKS) | None (serverless) | Run tasks/pods without managing infrastructure |
| **App Runner** | Fully managed container PaaS | None (fully hidden) | Simple web app/API, fastest deployment |

Note: **Fargate is not an orchestrator** — it is a *launch type / compute engine* used underneath ECS or EKS.

## Key exam points

- **`Fargate` = serverless containers, no server management → the least operational overhead.** Choose Fargate for "no server management / least ops" questions.
- **`EC2` launch type** when you need instance control (GPU, cost optimization at steady load) and accept managing patching/scaling.
- **ECS `Task Role`** grants a container permission to call AWS services (S3/DynamoDB…) — do **not** use the EC2 Instance Role for this. Task Role works with both Fargate and EC2.
- **EC2 Instance Role** is for the ECS agent on the host to operate (pull images, register with cluster).
- **EKS = managed Kubernetes**; choose it when you need open-source Kubernetes, multi-cloud, or existing k8s tooling.
- **ECR = image registry** private/public, with IAM integration + image scanning, serving ECS/EKS.
- **EFS = persistent/shared storage** for ECS and **also Fargate**; containers are stateless by default.
- **ECS Service Auto Scaling** uses **Target Tracking** on CPU/memory/**ALBRequestCountPerTarget**.
- **ALB + dynamic port mapping** lets multiple tasks run per instance; the ALB maps dynamic ports automatically.
- **Task placement `binpack`** → fewest instances → **cost savings**; `spread` → HA across AZs (EC2 launch type only).
- **App Runner** = the **simplest** way to deploy a containerized web app/API (auto scaling + LB built in).

## Summary

- Containers are lighter and more portable than VMs; images live in a registry (`ECR`) and ECS/EKS pull them to run.
- **ECS** is the AWS-native orchestrator with `Task Definition` (blueprint), `Task` (instance), and `Service` (maintains N tasks + ALB).
- Two launch types: **EC2** (self-managed instances) and **`Fargate`** (serverless, least ops, pay per task).
- Use the **`Task Role`** to grant AWS permissions to a container; use **EFS** for persistent/shared storage with ECS and Fargate.
- **EKS** for managed Kubernetes; **App Runner** for the simplest containerized web app; **ECR** is the image registry with IAM and scanning.
- Auto scaling uses Target Tracking (CPU/memory/ALB requests); `binpack` optimizes cost, `spread` increases HA.
