# Disaster Recovery & Migration trên AWS

## 1. Tổng quan

**Disaster Recovery (DR)** là khả năng khôi phục hệ thống và dữ liệu sau một sự cố nghiêm trọng: mất một Availability Zone, hỏng cả một Region, lỗi phần cứng, tấn công mạng hoặc lỗi con người. Mục tiêu là đưa dịch vụ trở lại hoạt động với mức mất mát dữ liệu và thời gian gián đoạn nằm trong ngưỡng doanh nghiệp chấp nhận được.

**Migration** là quá trình chuyển ứng dụng, máy chủ và dữ liệu từ trung tâm dữ liệu on-premises (hoặc từ cloud khác) lên AWS. AWS cung cấp một bộ công cụ chuyên biệt cho từng loại dữ liệu và tình huống.

Trong kỳ thi **SAA-C03**, hai chủ đề này thường xuất hiện dưới dạng câu hỏi tình huống: đề bài đưa ra một yêu cầu về RTO/RPO hoặc ngân sách, và bạn phải chọn đúng **chiến lược DR** hoặc đúng **công cụ migration**. Hiểu rõ thứ tự chi phí/tốc độ của 4 chiến lược DR và vai trò của từng công cụ là chìa khóa để trả lời chính xác.

---

## 2. RPO vs RTO — hai chỉ số cốt lõi

Mọi quyết định về DR đều xoay quanh hai chỉ số này. Đề thi hay cố tình đảo lộn định nghĩa để đánh lừa.

- **RPO (Recovery Point Objective)** — *mức mất mát dữ liệu tối đa chấp nhận được*, đo bằng **thời gian lùi về quá khứ**. Nếu RPO = 1 giờ, hệ thống phải sao lưu/nhân bản sao cho khi thảm họa xảy ra, bạn mất tối đa 1 giờ dữ liệu gần nhất. RPO nhỏ → cần backup/nhân bản thường xuyên hơn.
- **RTO (Recovery Time Objective)** — *thời gian gián đoạn tối đa chấp nhận được*, đo bằng **thời gian khôi phục**. Nếu RTO = 30 phút, hệ thống phải hoạt động trở lại trong vòng 30 phút kể từ khi sự cố xảy ra. RTO nhỏ → cần hạ tầng luôn sẵn sàng hơn.

Cách nhớ nhanh:

- **RPO = Point (điểm dữ liệu)** → nhìn về **quá khứ**, đo **data loss**.
- **RTO = Time (thời gian dừng)** → nhìn về **tương lai**, đo **downtime**.

Ví dụ: Ngân hàng đặt RPO = 0 (không được mất giao dịch nào) và RTO = vài giây → buộc phải chọn kiến trúc Active-Active đắt tiền. Một blog cá nhân có thể chấp nhận RPO = 24 giờ và RTO = vài giờ → chỉ cần Backup & Restore.

---

## 3. Bốn chiến lược Disaster Recovery

AWS định nghĩa 4 chiến lược DR, xếp theo thứ tự **chi phí tăng dần** và **RTO/RPO giảm dần** (càng đắt càng nhanh).

### 3.1. Backup & Restore

- Rẻ nhất, RPO và RTO **cao nhất** (thường tính bằng giờ).
- Không có gì chạy sẵn ở site dự phòng. Khi thảm họa xảy ra mới khôi phục từ backup: `AMI`, `EBS snapshot`, `RDS snapshot`, dữ liệu trong `S3`/`S3 Glacier`.
- Phù hợp hệ thống ít quan trọng, chấp nhận downtime dài để tiết kiệm chi phí.
- Công cụ: `AWS Backup`, snapshot tự động, sao chép dữ liệu định kỳ.

### 3.2. Pilot Light

- Chỉ giữ **các thành phần lõi tối thiểu** luôn chạy — điển hình là **database đang được nhân bản** liên tục sang Region dự phòng. Phần compute (EC2/app) tắt hoặc chưa tạo.
- Khi thảm họa: bật/scale up phần compute và định tuyến lưu lượng sang.
- RTO thấp hơn Backup & Restore vì dữ liệu đã sẵn sàng, chỉ cần khởi động ứng dụng.
- Ẩn dụ: "ngọn lửa mồi" luôn cháy nhỏ, chờ bùng lên khi cần.

### 3.3. Warm Standby

- Một **bản sao đầy đủ nhưng thu nhỏ (scaled-down)** của môi trường production **luôn chạy** ở Region dự phòng — mọi thành phần đều tồn tại nhưng ở quy mô nhỏ nhất.
- Khi thảm họa: chỉ cần **scale up** (tăng kích thước/số lượng) là phục vụ được production đầy đủ.
- RTO thấp hơn Pilot Light vì ứng dụng đã chạy sẵn, không cần khởi động từ đầu.

### 3.4. Multi-Site / Hot Site (Active-Active)

- **Bản production đầy đủ chạy song song ở 2+ Region** cùng phục vụ lưu lượng thật (active-active).
- RTO và RPO **gần bằng 0** — nếu một Region chết, Region còn lại tiếp nhận ngay.
- **Đắt nhất** vì phải duy trì gấp đôi (hoặc hơn) toàn bộ hạ tầng.
- Dùng `Route 53` (failover/latency routing) và `Global Accelerator` để phân phối lưu lượng.

### Bảng so sánh 4 chiến lược DR

| Chiến lược | Chi phí | RTO | RPO | Cái gì chạy sẵn |
|---|---|---|---|---|
| **Backup & Restore** | Thấp nhất | Cao (giờ) | Cao (giờ) | Không có gì (chỉ có backup) |
| **Pilot Light** | Thấp–trung bình | Trung bình (chục phút) | Thấp | Chỉ database/lõi nhân bản |
| **Warm Standby** | Trung bình–cao | Thấp (phút) | Thấp | Bản đầy đủ thu nhỏ, luôn chạy |
| **Multi-Site (Active-Active)** | Cao nhất | Gần 0 | Gần 0 | Bản production đầy đủ ở 2+ Region |

> Thứ tự cần nhớ: **Backup & Restore < Pilot Light < Warm Standby < Multi-Site** — chi phí tăng dần, RTO/RPO giảm dần.

---

## 4. Công cụ Migration của AWS

### 4.1. `AWS DMS` (Database Migration Service)

- Di trú **database** với thời gian gián đoạn tối thiểu — **nguồn vẫn hoạt động bình thường** trong khi di trú.
- Hỗ trợ **homogeneous** (cùng engine, ví dụ Oracle → Oracle) và **heterogeneous** (khác engine, ví dụ Oracle → Aurora/PostgreSQL).
- Hỗ trợ **CDC (Change Data Capture)** — tiếp tục sao chép các thay đổi phát sinh, cho phép cutover với RPO rất thấp.
- Khi **đổi engine** (heterogeneous), dùng kèm **`AWS SCT` (Schema Conversion Tool)** để chuyển đổi schema/stored procedure/code trước, rồi DMS chuyển dữ liệu.

### 4.2. `AWS Application Migration Service` (MGN)

- Công cụ **lift-and-shift (rehost)** chuẩn hiện nay: chuyển nguyên máy chủ vật lý/ảo lên **EC2** mà không cần viết lại ứng dụng.
- Dùng **nhân bản mức block (block-level replication)** liên tục, giúp cutover nhanh và ít downtime.
- **Thay thế** cho `AWS SMS` (Server Migration Service) và `CloudEndure` đã cũ.

### 4.3. Các công cụ khác

- **`AWS DataSync`** — chuyển và **đồng bộ dữ liệu trực tuyến (online)** giữa on-premises (NFS/SMB/HDFS) và các dịch vụ lưu trữ AWS (`S3`, `EFS`, `FSx`); tự động, có mã hóa và kiểm tra toàn vẹn.
- **`AWS Snow Family`** (Snowcone, Snowball, Snowmobile) — di trú **hàng loạt ngoại tuyến (offline)** bằng thiết bị vật lý; dùng khi dữ liệu quá lớn/đường truyền quá chậm để chuyển qua mạng.
- **`AWS Storage Gateway`** — kết nối **hybrid**, cho phép ứng dụng on-premises dùng lưu trữ AWS như thể lưu trữ cục bộ (File/Volume/Tape Gateway).
- **`AWS Backup`** — quản lý **backup tập trung** theo chính sách cho nhiều dịch vụ (`EBS`, `RDS`, `DynamoDB`, `EFS`, `S3`…), hỗ trợ sao chép cross-Region/cross-account phục vụ DR.

### Bảng công cụ Migration

| Công cụ | Mục đích | Điểm mấu chốt |
|---|---|---|
| `AWS DMS` | Di trú database | Nguồn vẫn chạy; homogeneous & heterogeneous; hỗ trợ CDC |
| `AWS SCT` | Chuyển đổi schema | Dùng khi **đổi engine** (heterogeneous) trước khi chạy DMS |
| `AWS Application Migration Service` (MGN) | Lift-and-shift server lên EC2 | Nhân bản mức block; thay thế SMS/CloudEndure |
| `AWS DataSync` | Chuyển/đồng bộ dữ liệu online | On-prem ⇄ S3/EFS/FSx, tự động, có mã hóa |
| `AWS Snow Family` | Di trú hàng loạt offline | Thiết bị vật lý cho dữ liệu rất lớn / mạng yếu |
| `AWS Storage Gateway` | Lưu trữ hybrid | On-prem dùng lưu trữ AWS như local |
| `AWS Backup` | Backup tập trung | Chính sách, cross-Region/account cho DR |

---

## 5. 7 chiến lược migration (7 Rs)

Khi lập kế hoạch chuyển từng ứng dụng lên cloud, AWS phân loại thành 7 hướng tiếp cận:

- **Rehost** — "lift-and-shift", bê nguyên lên cloud (thường bằng MGN), không đổi kiến trúc.
- **Replatform** — "lift-tinker-and-shift", tối ưu nhẹ (ví dụ chuyển DB tự quản sang `RDS`) mà không viết lại lõi.
- **Repurchase** — bỏ hệ thống cũ, mua giải pháp SaaS thay thế (ví dụ chuyển sang một CRM SaaS).
- **Refactor / Re-architect** — viết lại theo kiến trúc cloud-native (serverless, microservices) để tận dụng tối đa cloud.
- **Retire** — loại bỏ ứng dụng không còn cần thiết.
- **Retain** — giữ nguyên tại on-premises (chưa/không di trú, ví dụ do ràng buộc tuân thủ).
- **Relocate** — chuyển nguyên cụm hạ tầng (ví dụ VMware) lên cloud mà không mua lại, không viết lại.

---

## Điểm thi quan trọng

- **RPO = data loss** (nhìn về quá khứ), **RTO = downtime** (thời gian khôi phục). Đừng để đề đảo hai định nghĩa này.
- Thứ tự DR theo **chi phí và RTO/RPO**: **Backup & Restore < Pilot Light < Warm Standby < Multi-Site (Active-Active)**. Đề cho RTO/RPO càng nhỏ và ngân sách càng cao → chọn chiến lược càng về bên phải.
- **Pilot Light**: chỉ **database/lõi** chạy sẵn. **Warm Standby**: bản đầy đủ **thu nhỏ** luôn chạy. Đây là điểm dễ nhầm nhất.
- **Multi-Site / Active-Active** cho RTO & RPO gần 0 nhưng đắt nhất; thường dùng `Route 53` failover.
- **`AWS DMS`** để di trú database mà **nguồn vẫn chạy**; khi **đổi engine** phải dùng thêm **`AWS SCT`**; DMS hỗ trợ **CDC**.
- **`MGN` (Application Migration Service)** là lựa chọn chuẩn cho **lift-and-shift server lên EC2**, đã thay thế SMS/CloudEndure.
- **`DataSync`** = chuyển dữ liệu **online**; **`Snow Family`** = di trú **offline** hàng loạt khi mạng không đủ.

---

## Tóm tắt

- DR đảm bảo hệ thống khôi phục sau thảm họa trong ngưỡng **RPO** (mất dữ liệu tối đa) và **RTO** (downtime tối đa) chấp nhận được.
- Bốn chiến lược DR tăng dần chi phí & giảm dần RTO/RPO: **Backup & Restore → Pilot Light → Warm Standby → Multi-Site**.
- **Pilot Light** giữ lõi (DB) chạy; **Warm Standby** giữ bản đầy đủ thu nhỏ; **Multi-Site** chạy production song song đa Region.
- **`AWS DMS`** (kèm **`SCT`** khi khác engine) để di trú database không gián đoạn; **`MGN`** để lift-and-shift server lên EC2.
- **`DataSync`** (online), **`Snow Family`** (offline), **`Storage Gateway`** (hybrid), **`AWS Backup`** (backup tập trung) phục vụ các nhu cầu chuyển và bảo vệ dữ liệu khác nhau.
- **7 Rs** (Rehost, Replatform, Repurchase, Refactor, Retire, Retain, Relocate) là khung phân loại chiến lược di trú từng ứng dụng.
