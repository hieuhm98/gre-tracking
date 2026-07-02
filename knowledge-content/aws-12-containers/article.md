# Containers trên AWS – ECS, Fargate, ECR & EKS

## 1. Tổng quan

Container đóng gói ứng dụng cùng toàn bộ dependency (runtime, thư viện, config) vào một đơn vị chuẩn, chạy giống nhau trên mọi môi trường. Trên AWS có một hệ sinh thái dịch vụ để **build, lưu trữ và chạy** container ở quy mô lớn.

Các dịch vụ chính cần nắm cho SAA-C03:

- **Amazon ECS** – orchestrator container "AWS-native", đơn giản, tích hợp sâu với các dịch vụ AWS.
- **AWS Fargate** – engine serverless để chạy container mà **không cần quản lý server** (dùng chung cho ECS và EKS).
- **Amazon ECR** – registry (kho) lưu trữ Docker image, private/public, tích hợp IAM.
- **Amazon EKS** – Kubernetes được quản lý (managed control plane) khi bạn muốn dùng Kubernetes chuẩn open-source.
- **AWS App Runner** – cách đơn giản nhất để deploy một web app/API dạng container.

Điểm thi cốt lõi: **Fargate = không quản lý server (serverless container)**; **ECS = orchestration AWS-native**; **EKS = managed Kubernetes**; **ECR = image registry**; **ECS Task Role** cấp quyền cho container gọi dịch vụ AWS; dùng **EFS** cho lưu trữ bền vững với ECS/Fargate; **App Runner** cho web app đơn giản nhất.

## 2. Docker cơ bản

Docker là nền tảng để đóng gói và chạy container.

- **Container vs VM**: VM ảo hóa cả phần cứng và chạy một OS đầy đủ riêng cho mỗi máy → nặng, khởi động chậm. Container chia sẻ kernel của host OS, chỉ đóng gói tiến trình + dependency → nhẹ, khởi động nhanh, mật độ cao hơn.
- **Image**: bản đóng gói bất biến (read-only) chứa code + runtime + thư viện. Từ một image có thể tạo ra nhiều container giống nhau.
- **Dockerfile**: file text mô tả các bước build image (base image, copy code, cài dependency, lệnh chạy `CMD`).
- **Tính portable**: cùng một image chạy giống nhau trên laptop, on-premises hay cloud → đảm bảo nhất quán giữa các môi trường.

Image sau khi build được **push** lên một registry (ví dụ `ECR`), rồi các dịch vụ như ECS/EKS **pull** về để chạy.

## 3. Amazon ECS – Task Definition, Task, Service

**Amazon ECS (Elastic Container Service)** là dịch vụ điều phối (orchestration) container native của AWS.

- **`Task Definition`**: bản thiết kế dạng JSON, mô tả *cách chạy* container: image (từ `ECR`), CPU/memory, cổng (port mapping), biến môi trường (env), volume, và các IAM role gắn kèm. Có thể chứa một hoặc nhiều container.
- **`Task`**: một *instance đang chạy* của Task Definition — tức là container thực tế đã được khởi tạo theo bản thiết kế.
- **`Service`**: bộ điều khiển duy trì **N task chạy song song** (desired count), tự thay thế task chết, và **tích hợp với ALB** để phân phối traffic. Service phù hợp cho ứng dụng web/API chạy lâu dài.

Cluster là tập hợp hạ tầng (EC2 instances hoặc capacity Fargate) nơi các task được đặt lên chạy.

## 4. EC2 launch type vs Fargate launch type

ECS hỗ trợ hai kiểu chạy (launch type):

- **EC2 launch type**: bạn tự cung cấp và quản lý các **EC2 instance** trong cluster. Mỗi instance chạy **ECS agent** để đăng ký với cluster và nhận task. Bạn chịu trách nhiệm về patching, scaling, dung lượng của các instance.
- **Fargate launch type**: **serverless** — không cần cung cấp hay quản lý EC2. Bạn chỉ khai báo CPU/RAM cho mỗi task, AWS lo hạ tầng bên dưới. **Trả tiền theo task** đang chạy → giảm mạnh vận hành (operational overhead).

| Tiêu chí | `EC2` launch type | `Fargate` launch type |
|---|---|---|
| Quản lý server | Bạn tự quản EC2 + ECS agent | Không có server để quản (serverless) |
| Vận hành (ops) | Cao (patch, scale, dung lượng) | Thấp nhất |
| Mô hình giá | Trả cho EC2 instance (kể cả idle) | Trả theo vCPU/RAM mỗi task |
| Kiểm soát hạ tầng | Chi tiết (GPU, instance type…) | Hạn chế (chỉ CPU/RAM) |
| Task placement | Có (`binpack`, `spread`, `random`) | Không áp dụng |
| Phù hợp khi | Cần kiểm soát/tối ưu chi phí ở quy mô ổn định | Muốn ít vận hành nhất, workload biến động |

Ghi nhớ thi: câu hỏi kiểu "**ít vận hành nhất / no server management**" → chọn **`Fargate`**.

## 5. IAM Roles – Instance Role vs Task Role

Đây là điểm phân biệt quan trọng của kỳ thi.

- **EC2 Instance Role** (chỉ với EC2 launch type): role gắn cho **EC2 instance** để **ECS agent** hoạt động — đăng ký cluster, pull image từ `ECR`, gửi log. Quyền ở cấp *host*.
- **ECS `Task Role`**: role gắn cho **từng Task Definition**, cấp quyền cho *chính container* gọi các dịch vụ AWS (ví dụ đọc/ghi S3, truy vấn DynamoDB, gửi message SQS). Đây là cách đúng để container có quyền truy cập tài nguyên AWS, theo nguyên tắc least privilege cho từng task.

Ghi nhớ thi: container cần quyền truy cập S3/DynamoDB → dùng **`Task Role`**, **không** dùng instance role. Task Role hoạt động với **cả Fargate và EC2**.

## 6. ECS Service Auto Scaling & tích hợp ALB

- **ECS Service Auto Scaling**: tự động tăng/giảm **số lượng task** trong service. Dùng **Target Tracking** theo các chỉ số như CPU trung bình, memory, hoặc **ALBRequestCountPerTarget** (số request/target trên ALB). Có thể kết hợp với scheduled scaling và step scaling.
- **Tích hợp ALB**: Service đăng ký task vào một **target group** của Application Load Balancer. ALB phân phối traffic tới các task và health check.
- **Dynamic port mapping**: với ALB, ECS cho phép chạy **nhiều task trên cùng một EC2 instance** dùng các cổng host ngẫu nhiên khác nhau; ALB tự map traffic tới đúng cổng động của từng task → tận dụng tài nguyên tốt hơn.

Lưu ý: ECS Service Auto Scaling (scale số task) khác với EC2 Auto Scaling (scale số instance); ở EC2 launch type có thể cần cả hai.

## 7. Task placement strategies

Chỉ áp dụng cho **EC2 launch type** (Fargate không cần vì AWS tự lo hạ tầng):

- **`binpack`**: xếp task vào các instance đã có ít CPU/RAM trống nhất trước → dùng **ít instance nhất** → **tiết kiệm chi phí**.
- **`spread`**: rải task đều theo một thuộc tính (ví dụ Availability Zone, instance) → tăng **tính sẵn sàng (HA)**.
- **`random`**: đặt task ngẫu nhiên.

Có thể kết hợp strategy với **task placement constraints** (ví dụ `distinctInstance`, hoặc theo attribute). Ghi nhớ thi: muốn **giảm số EC2 / tối ưu chi phí** → `binpack`; muốn **HA giữa các AZ** → `spread`.

## 8. Lưu trữ dữ liệu (EFS cho persistent storage)

Container theo mặc định là **stateless** — dữ liệu ghi trong task sẽ mất khi task dừng. Với Fargate lại càng không có ổ đĩa bền vững lâu dài.

- **Amazon EFS**: file system dùng chung, có thể **mount vào nhiều task** cùng lúc, dữ liệu **bền vững** qua các lần task khởi động lại. **Hoạt động với cả ECS trên EC2 và Fargate**.
- Dùng EFS khi nhiều task cần **chia sẻ dữ liệu** hoặc cần lưu trạng thái bền vững (shared config, content, dữ liệu người dùng).

Ghi nhớ thi: cần **persistent/shared storage** cho ECS hoặc Fargate → dùng **EFS** (không phải EBS, vì EBS gắn 1 instance/1 AZ và khó dùng đa task với Fargate).

## 9. Amazon ECR

**Amazon ECR (Elastic Container Registry)** là kho lưu trữ Docker image được quản lý.

- Hỗ trợ registry **private** (mặc định) và **public** (ECR Public Gallery).
- Tích hợp **IAM** để kiểm soát quyền push/pull; tích hợp gốc với **ECS và EKS** (và App Runner).
- **Image scanning**: quét lỗ hổng bảo mật (basic và enhanced scanning) trong image.
- Lưu image trên nền S3, mã hóa at-rest, hỗ trợ lifecycle policy để dọn image cũ.

Luồng điển hình: build image → push lên `ECR` → ECS/EKS pull image để chạy task/pod.

## 10. Amazon EKS

**Amazon EKS (Elastic Kubernetes Service)** là **Kubernetes control plane được quản lý** bởi AWS.

- AWS vận hành và scale control plane (API server, etcd) đảm bảo HA đa AZ.
- Chạy worker node bằng **managed node groups**, **self-managed nodes** (EC2), hoặc trên **Fargate** (không cần quản node).
- **Khi nào chọn EKS**: khi muốn dùng **Kubernetes open-source chuẩn**, cần tính **di động/multi-cloud**, hoặc đã có sẵn **tooling/kiến thức Kubernetes** (Helm, kubectl, operators). Đổi lại, độ phức tạp vận hành cao hơn ECS.

Ghi nhớ thi: yêu cầu nhắc tới **Kubernetes / multi-cloud / công cụ k8s hiện có** → chọn **EKS**. Nếu chỉ cần orchestration đơn giản trên AWS → ECS.

## 11. AWS App Runner

**AWS App Runner** là dịch vụ **fully managed** để deploy nhanh **web app và API** dạng container.

- Deploy trực tiếp từ **container image (ECR)** hoặc từ **source code** (build tự động).
- Tự động lo **auto scaling, load balancing, TLS/HTTPS, health check** với cấu hình tối thiểu — không cần dựng ECS/cluster/ALB thủ công.
- Phù hợp cho microservice/web service đơn giản khi muốn **triển khai nhanh, ít cấu hình nhất**.

Ghi nhớ thi: "**cách đơn giản nhất để chạy một web app container, ít vận hành, không muốn quản orchestration**" → chọn **App Runner**.

## 12. So sánh ECS vs EKS vs Fargate vs App Runner

| Dịch vụ | Bản chất | Quản lý server | Khi nào dùng |
|---|---|---|---|
| **ECS** | Orchestrator AWS-native | EC2 (tự quản) hoặc Fargate | Container trên AWS, đơn giản, tích hợp AWS sâu |
| **EKS** | Managed Kubernetes | EC2 node hoặc Fargate | Cần Kubernetes chuẩn, multi-cloud, tooling k8s |
| **Fargate** | Compute engine serverless (cho ECS/EKS) | Không (serverless) | Muốn chạy task/pod không quản hạ tầng |
| **App Runner** | PaaS container fully managed | Không (ẩn hoàn toàn) | Web app/API đơn giản, deploy nhanh nhất |

Lưu ý: **Fargate không phải orchestrator** — nó là *launch type / compute engine* dùng bên dưới ECS hoặc EKS.

## Điểm thi quan trọng

- **`Fargate` = serverless container, không quản server → ít operational overhead nhất.** Chọn Fargate cho câu "no server management / least ops".
- **`EC2` launch type** khi cần kiểm soát instance (GPU, tối ưu chi phí ở tải ổn định) và chấp nhận tự quản patch/scale.
- **ECS `Task Role`** cấp quyền cho container gọi dịch vụ AWS (S3/DynamoDB…) — **không** dùng EC2 Instance Role cho việc này. Task Role dùng được cả Fargate lẫn EC2.
- **EC2 Instance Role** là để ECS agent trên host hoạt động (pull image, đăng ký cluster).
- **EKS = managed Kubernetes**; chọn khi cần Kubernetes open-source, multi-cloud, hoặc tooling k8s có sẵn.
- **ECR = image registry** private/public, tích hợp IAM + image scanning, phục vụ ECS/EKS.
- **EFS = persistent/shared storage** cho ECS và **cả Fargate**; container mặc định stateless.
- **ECS Service Auto Scaling** dùng **Target Tracking** trên CPU/memory/**ALBRequestCountPerTarget**.
- **ALB + dynamic port mapping** cho phép nhiều task/1 instance; ALB map cổng động tự động.
- **Task placement `binpack`** → dùng ít instance nhất → **tiết kiệm chi phí**; `spread` → HA theo AZ (chỉ EC2 launch type).
- **App Runner** = cách **đơn giản nhất** deploy web app/API container (auto scaling + LB sẵn).

## Tóm tắt

- Container nhẹ và portable hơn VM; image được lưu ở registry (`ECR`) rồi ECS/EKS pull về chạy.
- **ECS** là orchestrator AWS-native với `Task Definition` (blueprint), `Task` (instance), `Service` (duy trì N task + ALB).
- Hai launch type: **EC2** (tự quản instance) và **`Fargate`** (serverless, ít vận hành nhất, trả theo task).
- Dùng **`Task Role`** để cấp quyền AWS cho container; dùng **EFS** cho lưu trữ bền vững/chia sẻ với ECS và Fargate.
- **EKS** cho Kubernetes được quản lý; **App Runner** cho web app container đơn giản nhất; **ECR** là kho image tích hợp IAM và scanning.
- Auto scaling theo Target Tracking (CPU/memory/ALB request); `binpack` tối ưu chi phí, `spread` tăng HA.
