# Lưu trữ cho EC2 – EBS, EFS, Instance Store & AMI

## 1. Tổng quan

Một máy chủ `EC2` cần nơi để lưu dữ liệu: hệ điều hành, ứng dụng, file người dùng. AWS cung cấp nhiều lựa chọn lưu trữ khác nhau, mỗi loại tối ưu cho một tình huống riêng.

- `EBS` (Elastic Block Store): "ổ cứng mạng" gắn vào EC2, dữ liệu tồn tại lâu dài (persistent).
- `EC2 Instance Store`: ổ đĩa vật lý gắn trực tiếp vào máy chủ vật lý, cực nhanh nhưng **tạm thời** (ephemeral).
- `EFS` (Elastic File System): hệ thống file mạng NFS, nhiều máy dùng chung, đa AZ.
- `AMI` (Amazon Machine Image): bản mẫu (template) để tạo instance mới.
- `FSx`: dịch vụ file system được quản lý cho Windows và HPC.

Đây là chủ đề ra thi rất nhiều trong SAA-C03. Trọng tâm là **chọn đúng loại lưu trữ** dựa trên yêu cầu: một hay nhiều instance, cùng AZ hay đa AZ, cần bền vững hay tạm thời, Linux hay Windows.

---

## 2. EBS là gì?

`EBS` (Elastic Block Store) là một **ổ đĩa mạng** (network drive) gắn vào instance EC2. Vì kết nối qua mạng nên có độ trễ nhỏ, nhưng bù lại có thể tháo ra khỏi một instance và gắn vào instance khác rất nhanh.

Đặc điểm quan trọng nhất cần nhớ:

- `EBS` **bị khóa trong một Availability Zone (AZ) duy nhất**. Một volume tạo ở `us-east-1a` không thể gắn trực tiếp vào instance ở `us-east-1b`.
- Mặc định, một volume **chỉ gắn được vào một instance tại một thời điểm** (trừ tính năng Multi-Attach của `io1`/`io2`).
- Dữ liệu tồn tại **lâu dài**: khi bạn stop hoặc terminate instance, volume có thể được giữ lại (tùy cấu hình `DeleteOnTermination`).
- Để chuyển volume sang AZ khác → tạo **snapshot**, rồi khôi phục snapshot vào AZ mới.
- Có thể thay đổi kích thước (resize) và loại volume khi đang chạy.

---

## 3. Các loại volume EBS

Có hai nhóm chính: **SSD** (tối ưu cho IOPS – số thao tác I/O mỗi giây) và **HDD** (tối ưu cho throughput – lưu lượng MB/s). Chỉ SSD (`gp2`/`gp3`/`io1`/`io2`) mới dùng được làm ổ khởi động (boot volume).

| Loại | Nhóm | Đặc điểm | Trường hợp dùng |
|------|------|----------|-----------------|
| `gp3` | SSD phổ thông | Mới nhất; provision IOPS & throughput **độc lập** với dung lượng | Khối lượng công việc chung, web server, môi trường dev/test |
| `gp2` | SSD phổ thông | Đời cũ; IOPS **gắn liền** với dung lượng volume | Tương tự `gp3` (thường nên nâng lên `gp3`) |
| `io2` / `io1` | SSD Provisioned IOPS | Hiệu năng cao nhất, IOPS cực lớn, hỗ trợ Multi-Attach | Database quan trọng, ứng dụng cần I/O cao, độ trễ thấp |
| `st1` | HDD Throughput-optimized | Throughput cao, giá rẻ; **không** làm boot volume | Big data, data warehouse, xử lý log, streaming |
| `sc1` | HDD Cold | Rẻ nhất, throughput thấp; **không** làm boot volume | Dữ liệu ít truy cập, lưu trữ chi phí thấp |

Điểm khác biệt then chốt của `gp3`: bạn có thể tăng IOPS (tới 16.000) và throughput (tới 1.000 MB/s) **mà không cần tăng dung lượng**. Với `gp2` đời cũ, muốn nhiều IOPS hơn thì buộc phải mua volume lớn hơn.

---

## 4. EBS Snapshots (Ảnh chụp)

`Snapshot` là bản sao lưu (backup) của một volume tại một thời điểm.

- Snapshot được lưu trong `S3` (nhưng bạn không thấy trực tiếp trong console S3).
- Snapshot mang tính **incremental** (gia tăng): chỉ lưu các block đã thay đổi so với snapshot trước → tiết kiệm chi phí.
- Có thể **copy snapshot sang region khác** hoặc dùng để tạo volume ở **AZ khác** → đây là cách chính để di chuyển/nhân bản `EBS` giữa các AZ và region.
- **EBS Snapshot Archive**: chuyển snapshot sang tầng lưu trữ archive, rẻ hơn ~75%, nhưng khôi phục mất 24–72 giờ.
- **Recycle Bin (Thùng rác)**: cấu hình quy tắc giữ lại snapshot đã xóa (từ 1 ngày đến 1 năm) để **khôi phục khi lỡ xóa nhầm**.

---

## 5. EBS Multi-Attach

`Multi-Attach` cho phép **một volume EBS gắn vào nhiều instance cùng lúc**.

- Chỉ hỗ trợ với `io1` và `io2`.
- Tất cả instance phải nằm **trong cùng một AZ**.
- Tối đa **16 instance** cùng gắn một volume tại một thời điểm.
- Mỗi instance có toàn quyền đọc/ghi (read/write).
- Chỉ dùng cho **ứng dụng nhận biết cụm (cluster-aware)** có cơ chế quản lý ghi đồng thời (ví dụ hệ thống file cụm như GFS2). Nếu ứng dụng không được thiết kế cho việc này, dữ liệu sẽ hỏng.

---

## 6. EBS Encryption (Mã hóa)

Khi bật mã hóa cho một volume `EBS` (dùng `KMS` – Key Management Service):

- Dữ liệu **at rest** (đang lưu) bên trong volume được mã hóa.
- Dữ liệu di chuyển giữa instance và volume được mã hóa.
- **Mọi snapshot** tạo từ volume đó đều được mã hóa.
- **Mọi volume tạo ra từ snapshot** đó cũng được mã hóa.

Việc mã hóa/giải mã diễn ra **tự động, gần như không ảnh hưởng độ trễ**. Để mã hóa một volume chưa mã hóa: tạo snapshot → copy snapshot và bật encryption → tạo volume mới từ snapshot đã mã hóa.

---

## 7. AMI (Amazon Machine Image)

`AMI` là **bản mẫu (template)** để khởi tạo instance EC2. Nó chứa hệ điều hành, cấu hình, phần mềm và dữ liệu đã cài sẵn.

- Bạn có thể tạo `AMI` tùy chỉnh từ một instance đã cấu hình sẵn (cài đặt phần mềm, patch, cấu hình) → khi launch instance mới, mọi thứ đã sẵn sàng, **thời gian khởi động nhanh hơn** (pre-baking).
- `AMI` mang tính **region-scoped** (gắn với một region): AMI tạo ở `us-east-1` chỉ dùng được trong `us-east-1`.
- Có thể **copy AMI sang region khác** để triển khai đa vùng.
- Nguồn AMI: Public AMI (AWS cung cấp), AMI của bạn tự tạo, hoặc AMI mua trên AWS Marketplace.

---

## 8. EC2 Instance Store

`Instance Store` là ổ đĩa **gắn vật lý trực tiếp** vào máy chủ vật lý host của instance (không phải ổ mạng như EBS).

- Hiệu năng **cực cao**: IOPS rất lớn vì gắn trực tiếp phần cứng.
- **Ephemeral (tạm thời)**: dữ liệu **mất khi instance stop hoặc terminate**. Nếu phần cứng host lỗi cũng mất dữ liệu.
- Không dùng cho dữ liệu quan trọng cần lưu lâu dài.
- Phù hợp với: **buffer, cache, dữ liệu scratch (tạm), dữ liệu có thể tái tạo**, hoặc dữ liệu được nhân bản qua nhiều instance.

Bạn tự chịu trách nhiệm sao lưu và nhân bản dữ liệu nếu dùng Instance Store.

---

## 9. Amazon EFS

`EFS` (Elastic File System) là **hệ thống file mạng NFS được quản lý**, cho phép nhiều instance EC2 **cùng gắn và dùng chung** một file system.

- **Đa AZ (multi-AZ)**: có thể mount từ nhiều AZ trong cùng một region → tính sẵn sàng cao.
- **Nhiều instance dùng đồng thời**: hàng trăm, hàng nghìn instance có thể đọc/ghi cùng lúc.
- Chỉ dùng cho **Linux** (giao thức NFS, tuân thủ POSIX). **Không** dùng cho Windows.
- **Tự động mở rộng** dung lượng theo nhu cầu — không cần cấp phát trước; **trả tiền theo lượng dùng** (pay-per-use).
- Giá **đắt hơn** `EBS gp2` (tính trên mỗi GB), nhưng bù lại linh hoạt và dùng chung được.
- **Storage Classes**: `Standard` (truy cập thường xuyên) và `Infrequent Access – IA` (rẻ hơn, cho file ít truy cập). **Lifecycle policy** tự động chuyển file sang IA sau N ngày không truy cập.

Trường hợp dùng điển hình: chia sẻ nội dung giữa nhiều web server, hệ quản trị nội dung (CMS), thư mục dữ liệu dùng chung, workflow xử lý dữ liệu.

---

## 10. So sánh EBS vs EFS vs Instance Store

| Tiêu chí | `EBS` | `EFS` | `Instance Store` |
|----------|-------|-------|------------------|
| Loại | Ổ block (network) | File system (NFS) | Ổ block (vật lý, cục bộ) |
| Phạm vi | Một AZ | Đa AZ (một region) | Gắn với host vật lý |
| Nhiều instance | Không (trừ Multi-Attach `io1`/`io2`) | Có, hàng trăm/nghìn đồng thời | Không |
| Hệ điều hành | Linux & Windows | Chỉ Linux (POSIX/NFS) | Linux & Windows |
| Tính bền vững | Lâu dài (persistent) | Lâu dài (persistent) | **Tạm thời (ephemeral)** |
| Hiệu năng | Cao (io2 rất cao) | Cao, mở rộng tự động | **Cao nhất** (IOPS lớn) |
| Trường hợp dùng | Boot volume, database | File dùng chung đa AZ | Cache, buffer, scratch |

---

## 11. FSx (nói ngắn gọn)

`FSx` là dịch vụ file system **được quản lý** cho các nhu cầu không phù hợp với EFS:

- **FSx for Windows File Server**: file system dùng chung cho **Windows**, hỗ trợ giao thức `SMB` và Active Directory. Đây là lựa chọn khi cần file share cho ứng dụng Windows (EFS chỉ hỗ trợ Linux).
- **FSx for Lustre**: file system hiệu năng cực cao cho **HPC** (High Performance Computing), machine learning, xử lý dữ liệu lớn.

---

## Điểm thi quan trọng

- `EBS` = **một AZ**, mặc định **một instance** tại một thời điểm. Muốn chuyển sang AZ khác → snapshot.
- **Multi-Attach** chỉ dành cho `io1`/`io2`, tối đa **16 instance**, **cùng AZ**, và chỉ cho ứng dụng cluster-aware.
- `gp3` cho phép provision **IOPS và throughput độc lập** với dung lượng; `gp2` thì IOPS gắn với dung lượng.
- `st1`/`sc1` là HDD, **không dùng làm boot volume**. `st1` cho throughput, `sc1` cho dữ liệu lạnh (cold).
- Snapshot: lưu ở `S3`, **incremental**, copy được **cross-region/cross-AZ**; có **Archive tier** (rẻ) và **Recycle Bin** (chống xóa nhầm).
- Mã hóa `EBS` (qua `KMS`) tự động mã hóa volume, snapshot và mọi volume tạo từ snapshot đó.
- `AMI` **region-scoped**, copy được sang region khác; dùng để pre-bake instance cho khởi động nhanh.
- `Instance Store` = **ephemeral** (mất khi stop/terminate) nhưng **hiệu năng cao nhất** → cache/buffer/scratch.
- `EFS` = **đa AZ**, **nhiều instance đồng thời**, **chỉ Linux (NFS/POSIX)**, tự mở rộng, trả theo lượng dùng.
- Cần file share cho **Windows** → dùng **FSx for Windows**; cần HPC → **FSx for Lustre**.

---

## Tóm tắt

- `EBS` = ổ đĩa mạng persistent, khóa trong **một AZ**, một instance (trừ Multi-Attach `io1`/`io2`).
- Loại volume: `gp3`/`gp2` (SSD phổ thông), `io1`/`io2` (Provisioned IOPS, database), `st1` (HDD throughput), `sc1` (HDD cold).
- Snapshot lưu ở S3, incremental, copy cross-region; có Archive tier và Recycle Bin. Mã hóa qua `KMS`.
- `Instance Store` = **ephemeral**, hiệu năng cao nhất → cache/buffer/scratch.
- `EFS` = NFS đa AZ, nhiều instance dùng chung, **chỉ Linux**, tự mở rộng, đắt hơn EBS gp2.
- Cần file share Windows → `FSx for Windows`; cần HPC → `FSx for Lustre`.
