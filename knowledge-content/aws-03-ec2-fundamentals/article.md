# Amazon EC2 – Kiến thức nền tảng

## 1. Tổng quan

**Amazon EC2 (Elastic Compute Cloud)** là dịch vụ cung cấp **máy chủ ảo** (virtual server) trên AWS. Đây là mô hình **IaaS (Infrastructure as a Service)** — bạn thuê tài nguyên tính toán (CPU, RAM, ổ đĩa, mạng) và tự quản lý hệ điều hành, ứng dụng bên trên.

Vì sao quan trọng trong kỳ thi SAA-C03:

- EC2 là dịch vụ tính toán **cốt lõi** của AWS — xuất hiện trong rất nhiều câu hỏi.
- Bạn cần hiểu rõ **Security Group** (stateful, allow-only), **User Data** (bootstrap), và **các hình thức mua** (chọn đúng theo workload để tối ưu chi phí).
- Đề thi rất hay hỏi "workload mô tả như vậy thì chọn On-Demand / Reserved / Spot / Savings Plans nào?".

---

## 2. EC2 là gì?

Một **EC2 instance** là một máy ảo bạn tự cấu hình. Khi tạo instance, bạn chọn:

- **AMI** — ảnh hệ điều hành + phần mềm khởi tạo.
- **Instance type** — cấu hình phần cứng (số vCPU, RAM, mạng).
- **Storage** — thường là EBS (ổ đĩa mạng bền vững) hoặc Instance Store (ổ tạm).
- **Security Group** — tường lửa ảo kiểm soát traffic.
- **Key pair** — cặp khóa SSH để đăng nhập.
- **User Data** (tùy chọn) — script khởi tạo chạy lần đầu.

Bạn chịu trách nhiệm quản lý OS, patch, phần mềm — AWS chỉ chịu trách nhiệm hạ tầng vật lý bên dưới (mô hình **Shared Responsibility**).

---

## 3. Instance types & quy tắc đặt tên

Tên instance có dạng: **họ (family) + thế hệ (generation) + kích thước (size)**.

Ví dụ `m5.2xlarge`:

| Thành phần | Giá trị | Ý nghĩa |
|-----------|---------|---------|
| Family | `m` | Họ general purpose |
| Generation | `5` | Thế hệ thứ 5 (số càng lớn càng mới) |
| Size | `2xlarge` | Kích thước — càng lớn càng nhiều vCPU/RAM |

Các mức size tăng dần: `nano` → `micro` → `small` → `medium` → `large` → `xlarge` → `2xlarge` → `4xlarge`... Mỗi bậc thường **gấp đôi** tài nguyên bậc trước.

Ví dụ khác: `t3.micro` = họ `t` (burstable), thế hệ 3, size micro (rất nhỏ, thuộc Free Tier).

---

## 4. Các họ instance (instance families)

Mỗi họ được tối ưu cho một loại workload khác nhau:

| Họ | Ví dụ tiền tố | Tối ưu cho | Use case điển hình |
|----|--------------|-----------|--------------------|
| **General Purpose** | `t`, `m` | Cân bằng CPU/RAM/mạng | Web server, app server, môi trường dev |
| **Compute Optimized** | `c` | CPU cao | Batch, mã hóa, HPC, game server, ML inference |
| **Memory Optimized** | `r`, `x`, `z` | RAM lớn | Database in-memory, cache, phân tích dữ liệu lớn |
| **Storage Optimized** | `i`, `d`, `h` | I/O đĩa cao, throughput lớn | Data warehouse, database NoSQL, xử lý log |
| **Accelerated Computing** | `p`, `g`, `inf`, `trn` | GPU / phần cứng tăng tốc | ML training, đồ họa, video, tính toán khoa học |

Mẹo nhớ: `c` = compute, `r` = RAM, `i` = IOPS/storage, `g`/`p` = GPU.

---

## 5. AMI (Amazon Machine Image)

**AMI** là một **ảnh (template)** chứa hệ điều hành, cấu hình và phần mềm cần thiết để khởi động instance.

- Khi launch instance, bạn **phải chọn một AMI** làm điểm khởi đầu.
- Loại AMI: **AWS cung cấp** (Amazon Linux, Ubuntu, Windows...), **AWS Marketplace** (bên thứ ba, có thể tính phí), **Community**, và **Custom AMI** (bạn tự tạo).
- **Custom AMI** rất hữu ích: cài sẵn phần mềm + cấu hình → tạo AMI → launch nhiều instance giống hệt nhau **nhanh hơn** (không phải cài lại từ đầu).
- AMI **gắn với một region** — muốn dùng ở region khác phải **copy AMI** sang region đó.

---

## 6. User Data (bootstrap script)

**User Data** là một script (thường là bash trên Linux) bạn cung cấp khi tạo instance để **tự động cấu hình** máy khi khởi động.

- Chạy **một lần duy nhất** ở **lần boot đầu tiên** (first boot).
- Chạy với quyền **root** (Linux).
- Dùng để: cập nhật hệ thống, cài phần mềm, tải file cấu hình, khởi động dịch vụ.

Ví dụ:

```bash
#!/bin/bash
yum update -y
yum install -y httpd
systemctl start httpd
```

Đây là cách **bootstrap** — biến một AMI trống thành một server sẵn sàng phục vụ mà không cần đăng nhập thủ công.

---

## 7. Security Groups

**Security Group (SG)** là **tường lửa ảo** hoạt động ở cấp instance, kiểm soát traffic vào (inbound) và ra (outbound).

Đặc điểm quan trọng (đề thi hay hỏi):

- **Stateful (có trạng thái)**: nếu traffic đi vào được cho phép, thì traffic **trả về tự động được phép** — và ngược lại. Bạn **không cần** tạo rule riêng cho chiều trả về.
- **Chỉ có rule cho phép (allow)** — **không có rule deny**. Không có rule khớp = **mặc định chặn**.
- Mỗi rule định nghĩa: protocol, port range, và **nguồn/đích** — có thể là **IP/CIDR** hoặc **một Security Group khác** (rất tiện cho traffic nội bộ giữa các instance).
- Gắn với **region + VPC** — không dùng lại được ở VPC/region khác.
- Một instance có thể gắn **nhiều SG**; một SG có thể gắn cho **nhiều instance**.

Mẹo gỡ lỗi: nếu SSH (port 22) hoặc HTTP (port 80) timeout → thường là do Security Group chưa mở port đó.

---

## 8. Key pairs / SSH

Để đăng nhập vào EC2 Linux, AWS dùng **key pair** (cặp khóa bất đối xứng):

- **Public key** được AWS lưu trên instance; **private key** (file `.pem`) do **bạn giữ**.
- Đăng nhập bằng SSH: `ssh -i key.pem ec2-user@<public-ip>` (port **22**).
- AWS **không giữ bản sao** private key — mất file `.pem` là mất cách SSH mặc định vào máy.
- Trên Windows, thường dùng RDP (port **3389**) với mật khẩu được giải mã bằng private key.

---

## 9. Các hình thức mua EC2 (purchasing options)

Chọn đúng hình thức mua giúp **tiết kiệm chi phí** theo mức độ cam kết và tính dự đoán của workload:

| Hình thức | Cam kết | Giảm giá | Use case |
|-----------|---------|----------|----------|
| **On-Demand** | Không | Không (giá gốc, trả theo giây/giờ) | Workload ngắn hạn, không đoán trước, dev/test |
| **Reserved Instances (RI)** | 1 hoặc 3 năm | ~ tới 72% | Workload ổn định, chạy liên tục, dự đoán được |
| **Savings Plans** | 1 hoặc 3 năm (cam kết $/giờ) | ~ tới 72% | Như RI nhưng **linh hoạt** hơn về loại instance/region |
| **Spot Instances** | Không | ~ tới 90% | Workload chịu được gián đoạn: batch, xử lý dữ liệu, CI |
| **Dedicated Hosts** | Có thể On-Demand hoặc đặt trước | Cao nhất | Tuân thủ giấy phép "per-socket/per-core", cần server vật lý riêng |
| **Dedicated Instances** | Không / RI | Trung bình | Cách ly phần cứng ở cấp tài khoản (không share với tenant khác) |
| **Capacity Reservations** | Không (trả full dù dùng hay không) | Không | Đảm bảo **có sẵn capacity** trong một AZ khi cần |

Chi tiết một số loại:

- **Reserved Instances**: hai kiểu — **Standard** (giảm giá cao nhất, khóa cấu hình) và **Convertible** (giảm ít hơn nhưng cho phép **đổi** family/OS/tenancy). Trả trước càng nhiều (All Upfront > Partial > No Upfront) → giảm càng sâu.
- **Spot Instances**: rẻ nhất nhưng AWS có thể **thu hồi** khi cần capacity, chỉ báo trước **2 phút**. **Spot Fleet** = tập hợp Spot + (tùy chọn) On-Demand để đạt dung lượng mục tiêu với giá tối ưu.
- **Dedicated Hosts vs Dedicated Instances**: cả hai đều chạy trên phần cứng riêng, nhưng Dedicated Hosts cho bạn **thấy và kiểm soát** sockets/cores vật lý (phục vụ giấy phép BYOL), còn Dedicated Instances chỉ đảm bảo cách ly tenant.

---

## 10. Điểm thi quan trọng

- **Security Group là STATEFUL**: traffic trả về được tự động cho phép — không cần rule riêng chiều về.
- **Security Group chỉ có allow rule**, không có deny; không match = chặn. (Ngược lại, Network ACL là stateless và có cả allow lẫn deny.)
- SG có thể tham chiếu **một SG khác** làm nguồn — rất tiện cho traffic tier-to-tier (ví dụ web → app).
- **User Data** chạy **một lần** ở **first boot** với quyền root — dùng để bootstrap.
- **Spot** rẻ nhất (tới ~90%) nhưng bị gián đoạn với thông báo **2 phút** → chỉ dùng cho workload chịu được gián đoạn.
- Chọn purchasing option theo workload: **ổn định/dự đoán được → Reserved hoặc Savings Plans**; **spiky/chịu gián đoạn → Spot**; **ngắn hạn/không đoán trước → On-Demand**.
- **Savings Plans linh hoạt hơn Reserved Instances** (cam kết theo $/giờ thay vì cấu hình cụ thể).
- **Dedicated Hosts** cho nhu cầu **giấy phép per-core/per-socket** (BYOL); **Dedicated Instances** chỉ cách ly phần cứng.
- Tên instance `m5.2xlarge` = family `m` + generation `5` + size `2xlarge`.
- **AMI gắn với region** — muốn dùng ở region khác phải copy.

---

## 11. Tóm tắt

- **EC2** = máy chủ ảo (IaaS); bạn quản OS + app, AWS quản hạ tầng.
- **Instance type** đọc theo `family + generation + size`; chọn **họ** theo workload (compute/memory/storage/GPU).
- **AMI** = template để launch; **User Data** = script bootstrap chạy một lần khi boot.
- **Security Group** = tường lửa **stateful**, chỉ allow, scoped theo region+VPC, tham chiếu được IP/CIDR hoặc SG khác.
- **Purchasing options**: On-Demand (linh hoạt), Reserved/Savings Plans (cam kết dài hạn, giảm sâu), Spot (rẻ nhất nhưng gián đoạn), Dedicated Hosts/Instances (phần cứng riêng).
- Kỹ năng thi cốt lõi: **map một workload → đúng hình thức mua** để tối ưu chi phí.
