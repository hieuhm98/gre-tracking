# AWS Storage bổ sung & Truyền dữ liệu

## 1. Tổng quan

Ngoài `S3`, `EBS` và `EFS`, AWS còn một nhóm dịch vụ lưu trữ và di chuyển dữ liệu rất hay xuất hiện trong kỳ thi **SAA-C03**. Nhóm này giải quyết ba nhu cầu chính:

- **File system được quản lý** cho workload đặc thù (Windows, HPC, NetApp, ZFS) → `Amazon FSx`.
- **Hybrid cloud**: kết nối hạ tầng on-premises với AWS → `AWS Storage Gateway`.
- **Di chuyển dữ liệu (data migration)**:
  - **Offline** (đĩa vật lý, số lượng lớn) → `AWS Snow Family`.
  - **Online** (qua mạng, có lịch, giữ metadata) → `AWS DataSync`.
  - **Chuẩn giao thức file** cho đối tác → `AWS Transfer Family` (SFTP/FTPS/FTP).
- **Sao lưu tập trung** nhiều dịch vụ theo chính sách → `AWS Backup`.

Câu hỏi thi thường ở dạng tình huống: "công ty cần… đâu là giải pháp phù hợp / tiết kiệm nhất?". Mấu chốt là **nhận diện đúng từ khóa** (offline/online, SMB/NFS, HPC, hybrid, SFTP…) rồi ánh xạ sang dịch vụ tương ứng.

---

## 2. Amazon FSx – File system được quản lý

`Amazon FSx` cung cấp các file system hiệu năng cao, được AWS quản lý hoàn toàn (patch, backup, HA). Có **4 loại**, mỗi loại cho một hệ sinh thái khác nhau.

| Loại FSx | Giao thức | Dùng khi | Điểm nổi bật |
|----------|-----------|----------|--------------|
| `FSx for Windows File Server` | SMB | Ứng dụng Windows, chia sẻ file doanh nghiệp | Tích hợp **Active Directory**, ACL NTFS, DFS |
| `FSx for Lustre` | Lustre (POSIX) | **HPC**, ML, phân tích, xử lý video | Throughput hàng trăm GB/s, **liên kết trực tiếp S3** |
| `FSx for NetApp ONTAP` | **NFS, SMB, iSCSI** | Di chuyển workload NetApp, đa giao thức | Dedup, compression, snapshot, replication |
| `FSx for OpenZFS` | NFS | Di chuyển từ **ZFS** on-premises | Snapshot, clone tức thì, độ trễ thấp |

**Ghi nhớ nhanh:**
- Thấy **"Windows / SMB / Active Directory"** → `FSx for Windows File Server`.
- Thấy **"HPC / machine learning / high throughput / gắn với S3"** → `FSx for Lustre`.
- Thấy **"multi-protocol / NFS + SMB + iSCSI / dedup"** → `FSx for NetApp ONTAP`.
- Thấy **"migrate từ ZFS"** → `FSx for OpenZFS`.

`FSx for Lustre` có 2 chế độ triển khai: **Scratch** (tạm, hiệu năng cao, không sao chép dữ liệu, rẻ) và **Persistent** (lâu dài, có nhân bản trong 1 AZ, tự phục hồi).

---

## 3. AWS Storage Gateway – Cầu nối Hybrid

`AWS Storage Gateway` là dịch vụ **hybrid**: đặt một gateway (VM hoặc thiết bị vật lý) tại on-premises, ứng dụng nội bộ truy cập như storage cục bộ, nhưng dữ liệu thực tế được đẩy lên AWS. Có **3 kiểu**:

| Kiểu Gateway | Giao thức phía on-prem | Lưu trên AWS | Dùng cho |
|--------------|------------------------|--------------|----------|
| `File Gateway` | **NFS / SMB** | S3 (+ lifecycle sang Glacier) | Chia sẻ file, lưu trữ tài liệu |
| `Volume Gateway` | **iSCSI (block)** | EBS snapshot trong S3 | Backup ổ đĩa, khôi phục thảm họa |
| `Tape Gateway` | **iSCSI VTL** (băng từ ảo) | S3 / S3 Glacier | Thay thế thư viện băng từ vật lý |

**Volume Gateway** có 2 chế độ quan trọng:
- **Cached mode**: dữ liệu chính nằm trên S3, chỉ **cache dữ liệu hay dùng** tại on-prem → tiết kiệm dung lượng local.
- **Stored mode**: **toàn bộ dữ liệu** nằm ở on-prem, backup không đồng bộ (async) lên S3 → truy cập độ trễ thấp cho toàn bộ dataset.

**Ghi nhớ:** thấy **"hybrid / on-premises vẫn cần truy cập nhưng muốn lưu trên AWS"** → `Storage Gateway`. Thấy **"thay thế băng từ / tape backup"** → `Tape Gateway`.

---

## 4. AWS Snow Family – Di chuyển dữ liệu offline

`AWS Snow Family` là thiết bị vật lý AWS gửi đến, bạn chép dữ liệu vào rồi gửi trả — dùng khi **mạng quá chậm hoặc dữ liệu quá lớn** để truyền online. Nhiều thiết bị còn chạy **edge computing** tại chỗ.

| Thiết bị | Dung lượng | Đặc điểm |
|----------|-----------|----------|
| `AWS Snowcone` | ~8 TB (HDD) / 14 TB (SSD) | Nhỏ, nhẹ, edge, dùng được cả `DataSync` |
| `Snowball Edge Storage Optimized` | ~80 TB | Thiên về lưu trữ, truyền hàng loạt |
| `Snowball Edge Compute Optimized` | ~80 TB + GPU tùy chọn | Thiên về **compute/edge**, chạy EC2 & Lambda tại chỗ |
| `AWS Snowmobile` | ~100 PB / xe container | Di chuyển **exabyte**, cả trung tâm dữ liệu |

**Quy tắc ngón tay cái (rule of thumb):** nếu truyền online mất **hơn ~1 tuần** hoặc dữ liệu **> 10 TB** với đường truyền chậm → chọn **Snow Family**. Dữ liệu quy mô **PB → Snowball nhiều thiết bị**; quy mô **~100 PB (cả data center) → Snowmobile**.

Dữ liệu được **mã hóa** bằng KMS; sau khi nhập vào AWS thường đích đến là **S3**, rồi có thể chuyển tiếp sang các dịch vụ khác.

---

## 5. AWS Transfer Family – SFTP/FTPS/FTP vào AWS

`AWS Transfer Family` là dịch vụ được quản lý cho phép đối tác/khách hàng dùng **giao thức file truyền thống** để đẩy dữ liệu thẳng vào `S3` hoặc `EFS`, mà không cần bạn tự vận hành server FTP.

| Giao thức | Ý nghĩa |
|-----------|---------|
| **SFTP** | SSH File Transfer Protocol (phổ biến nhất, mã hóa) |
| **FTPS** | FTP over SSL/TLS |
| **FTP** | FTP thường (chỉ trong VPC, không mã hóa) |

Điểm mạnh: giữ nguyên workflow SFTP hiện có của đối tác, nhưng backend là S3/EFS; tích hợp IAM, hỗ trợ xác thực qua Directory Service hoặc custom identity provider.

**Ghi nhớ:** thấy **"đối tác cần upload qua SFTP/FTPS vào S3/EFS"** → `Transfer Family`.

---

## 6. AWS DataSync – Đồng bộ online, giữ metadata

`AWS DataSync` là dịch vụ **di chuyển dữ liệu online** tốc độ cao, có thể **lên lịch (scheduled)**, dùng để:
- Di chuyển từ **on-premises → AWS** (qua một **agent** cài tại on-prem).
- Di chuyển **giữa các dịch vụ AWS** với nhau (S3 ↔ EFS ↔ FSx).

| Đặc điểm | DataSync |
|----------|----------|
| Nguồn on-prem | NFS, SMB, HDFS, object storage (qua agent) |
| Đích trên AWS | **S3, EFS, FSx (Windows/Lustre/ONTAP/OpenZFS)** |
| Metadata/permission | **Giữ nguyên** (owner, timestamp, POSIX/ACL) |
| Lịch chạy | Một lần hoặc theo lịch định kỳ |

**So sánh nhanh Snow vs DataSync:**

| Tiêu chí | Snow Family | DataSync |
|----------|-------------|----------|
| Kênh truyền | **Offline** (đĩa vật lý) | **Online** (qua mạng) |
| Khi nào dùng | Dữ liệu rất lớn, mạng chậm | Có mạng đủ tốt, cần **đồng bộ định kỳ** |
| Giữ metadata | Có | **Có (nhấn mạnh trong đề)** |

**Ghi nhớ:** thấy **"online / scheduled sync / giữ metadata & permission"** → `DataSync`. Thấy **"offline / mạng quá chậm / hàng chục TB trở lên"** → `Snow Family`.

---

## 7. AWS Backup – Sao lưu tập trung theo chính sách

`AWS Backup` là dịch vụ **quản lý backup tập trung** cho nhiều dịch vụ AWS từ một nơi, thay vì script thủ công cho từng dịch vụ.

Thành phần chính:
- **Backup plan**: chính sách gồm tần suất, thời gian giữ (retention), và **lifecycle** (chuyển sang cold storage).
- **Backup vault**: nơi lưu backup, có thể **khóa (Vault Lock)** theo mô hình WORM để chống xóa.
- **Cross-Region & Cross-Account backup**: sao chép sang vùng/tài khoản khác cho **DR** và tuân thủ.

Hỗ trợ nhiều dịch vụ: `EC2`, `EBS`, `RDS`, `Aurora`, `DynamoDB`, `EFS`, `FSx`, `Storage Gateway`… Dùng **tag** để gán tài nguyên vào backup plan tự động.

**Ghi nhớ:** thấy **"backup tập trung nhiều dịch vụ / theo chính sách / cross-region / tuân thủ"** → `AWS Backup`.

---

## Điểm thi quan trọng

- **`FSx for Lustre` = HPC / ML / high-throughput** và có thể **liên kết trực tiếp với S3**; `FSx for Windows` = **SMB + Active Directory**.
- **`FSx for NetApp ONTAP`** là lựa chọn **đa giao thức** (NFS + SMB + iSCSI) và có dedup; **`FSx for OpenZFS`** dành cho **migrate từ ZFS**.
- **`Storage Gateway` = hybrid**. `File Gateway` (NFS/SMB→S3), `Volume Gateway` (iSCSI, cached vs stored), `Tape Gateway` (thay băng từ, →S3/Glacier).
- **Volume Gateway cached** = dữ liệu chính ở S3; **stored** = dữ liệu chính ở on-prem, async backup lên S3.
- **`Snow Family` cho truyền OFFLINE lớn**: quy tắc **> 10 TB hoặc mạng chậm** → dùng Snow. Snowmobile ~100 PB cho cả data center.
- **`DataSync` cho ONLINE, có lịch, GIỮ metadata/permission**; có thể ghi vào **S3, EFS, FSx** và đồng bộ giữa các storage AWS.
- **`Transfer Family` = SFTP/FTPS/FTP vào S3 hoặc EFS** (dịch vụ được quản lý cho đối tác).
- **`AWS Backup` = backup tập trung theo chính sách**, hỗ trợ cross-region/cross-account và **Vault Lock (WORM)**.
- Bẫy hay gặp: đề nói **"online + định kỳ"** → chọn DataSync, KHÔNG chọn Snowball; đề nói **"mạng quá chậm / hàng petabyte"** → chọn Snow, KHÔNG chọn DataSync.

---

## Tóm tắt

- **`Amazon FSx`** cung cấp 4 file system được quản lý: **Windows (SMB/AD)**, **Lustre (HPC, gắn S3)**, **NetApp ONTAP (đa giao thức)**, **OpenZFS (migrate ZFS)**.
- **`Storage Gateway`** là cầu nối **hybrid** với 3 kiểu: File (NFS/SMB→S3), Volume (iSCSI, cached/stored), Tape (VTL→S3/Glacier).
- **`Snow Family`** dùng để truyền dữ liệu **offline** khối lượng lớn (Snowcone → Snowball Edge → Snowmobile) và chạy edge compute.
- **`DataSync`** di chuyển dữ liệu **online, có lịch, giữ metadata**; **`Transfer Family`** đưa dữ liệu qua **SFTP/FTPS/FTP** vào S3/EFS.
- **`AWS Backup`** quản lý backup **tập trung, theo chính sách**, hỗ trợ cross-region/cross-account và Vault Lock.
- Chìa khóa làm bài: đọc từ khóa **offline vs online, giao thức file, HPC, hybrid, SFTP** để chọn đúng dịch vụ **phù hợp / tiết kiệm nhất**.
