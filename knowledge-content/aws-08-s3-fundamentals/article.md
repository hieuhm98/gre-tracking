# Amazon S3 – Nền tảng lưu trữ đối tượng

## 1. Tổng quan

**Amazon S3** (Simple Storage Service) là dịch vụ lưu trữ **đối tượng (object storage)** — được xem là "xương sống" của rất nhiều kiến trúc trên AWS. S3 lưu file dưới dạng object trong các **bucket** (thùng chứa), thay vì lưu theo dạng ổ đĩa (block) hay hệ thống tập tin (file system).

S3 được thiết kế cho khả năng mở rộng gần như vô hạn và độ bền cực cao: **11 số 9 (99.999999999%) durability**. Các use case điển hình: backup & lưu trữ, data lake, hosting website tĩnh, lưu media, phân phối phần mềm, và làm nơi chứa dữ liệu cho các dịch vụ khác.

---

## 2. Buckets & Objects

### Bucket
- Bucket là thùng chứa object, **tên phải là duy nhất trên toàn cầu (globally unique)** trên tất cả tài khoản AWS — không hai bucket nào được trùng tên.
- Bucket được **định nghĩa ở cấp Region** (dữ liệu nằm trong Region đã chọn), dù namespace của tên là toàn cầu.
- Quy tắc đặt tên: 3–63 ký tự, chữ thường và số, không có dấu gạch dưới, không viết hoa, không giống định dạng địa chỉ IP.

### Object
- Mỗi object có một **key**. Key chính là **đường dẫn đầy đủ**: `prefix (tiền tố) + tên object`. Ví dụ với `s3://my-bucket/folder1/photo.jpg` thì key là `folder1/photo.jpg`.
- S3 **không có thư mục thật sự** — cấu trúc "folder" chỉ là prefix trong key. Dấu `/` chỉ giúp gom nhóm hiển thị.
- **Kích thước tối đa 1 object là 5 TB.**
- Upload nhiều phần (**multipart upload**) là **bắt buộc với object lớn hơn 5 GB**, và **được khuyến nghị khi object lớn hơn 100 MB** để tăng tốc và chịu lỗi tốt hơn.
- Object còn có: **metadata** (cặp key-value), **tags** (dùng để phân loại, phân quyền, lifecycle), và **version ID** (khi bật versioning).

---

## 3. Storage Classes

Tất cả các storage class đều có **11 số 9 durability**; điểm khác nhau nằm ở **availability**, số AZ, chi phí lưu trữ, phí truy xuất và thời gian truy xuất.

| Storage Class | Availability | Số AZ | Min duration | Thời gian truy xuất | Use case điển hình |
|---------------|--------------|-------|--------------|---------------------|--------------------|
| **S3 Standard** | 99.99% | ≥ 3 | Không | Tức thì (ms) | Dữ liệu truy cập thường xuyên |
| **Standard-IA** | 99.9% | ≥ 3 | 30 ngày | Tức thì (ms) + phí retrieval | Ít truy cập, cần lấy nhanh (backup, DR) |
| **One Zone-IA** | 99.5% | **1 AZ** | 30 ngày | Tức thì (ms) + phí retrieval | Dữ liệu tái tạo được, ít truy cập, chấp nhận mất khi AZ hỏng |
| **Intelligent-Tiering** | 99.9% | ≥ 3 | Không | Tức thì (ms), **không phí retrieval** | Access pattern khó đoán; tự động chuyển tier |
| **Glacier Instant Retrieval** | 99.9% | ≥ 3 | 90 ngày | Tức thì (ms) | Lưu trữ, truy cập ~1 lần/quý nhưng cần ngay |
| **Glacier Flexible Retrieval** | 99.99% | ≥ 3 | 90 ngày | Phút → giờ (Expedited/Standard/Bulk) | Archive, truy cập vài lần/năm |
| **Glacier Deep Archive** | 99.99% | ≥ 3 | 180 ngày | 12h (Standard) / 48h (Bulk) | Lưu trữ dài hạn, **rẻ nhất** |

**Ghi nhớ quan trọng:**
- **One Zone-IA** chỉ lưu trong **một AZ duy nhất** → rẻ hơn Standard-IA ~20% nhưng mất dữ liệu nếu AZ đó bị phá hủy. Chỉ dùng cho dữ liệu có thể tái tạo.
- **Intelligent-Tiering** tự động di chuyển object giữa các tier theo access pattern, **không có phí retrieval**, chỉ mất một phí giám sát nhỏ trên mỗi object.
- **Glacier Deep Archive** là lớp **rẻ nhất**, dùng cho compliance/lưu trữ 7–10 năm; thời gian lấy 12 giờ (Standard) hoặc 48 giờ (Bulk).
- **Glacier Flexible Retrieval** có 3 mức lấy: **Expedited** (1–5 phút), **Standard** (3–5 giờ), **Bulk** (5–12 giờ, miễn phí).

---

## 4. Versioning

**Versioning** được bật **ở cấp bucket**, giúp lưu nhiều phiên bản của cùng một object → bảo vệ khỏi xóa nhầm và ghi đè.

- Khi bật versioning, mỗi lần ghi đè object tạo ra một **version ID** mới; phiên bản cũ vẫn được giữ.
- **Xóa** một object không xóa thật mà chỉ thêm một **delete marker** — có thể khôi phục bằng cách xóa delete marker đó.
- Version có trước khi bật versioning sẽ có version ID là `null`.
- Đã bật thì **chỉ có thể suspend (tạm dừng)**, **không thể disable (tắt hẳn)** versioning. Suspend chỉ dừng tạo version mới; các version cũ vẫn còn.

---

## 5. Lifecycle Rules

**Lifecycle rules** tự động hóa việc quản lý object theo thời gian, gồm hai loại hành động:

- **Transition actions**: chuyển object sang storage class rẻ hơn sau N ngày. Ví dụ: sau 30 ngày chuyển sang Standard-IA, sau 90 ngày chuyển sang Glacier, sau 180 ngày chuyển Deep Archive.
- **Expiration actions**: **xóa** object sau N ngày. Có thể dùng để:
  - Xóa các phiên bản cũ (noncurrent versions) sau một khoảng thời gian.
  - Xóa các **incomplete multipart uploads** (phần upload dở dang) để không tốn phí lưu trữ.

Rules có thể áp dụng cho toàn bucket hoặc lọc theo **prefix** và **tags**. Dùng **Storage Class Analysis** để xác định thời điểm hợp lý để chuyển tier.

---

## 6. S3 Replication (CRR / SRR)

**Replication** sao chép object **bất đồng bộ (async)** giữa các bucket. Điều kiện tiên quyết: **phải bật versioning trên CẢ bucket nguồn VÀ bucket đích**.

| Đặc điểm | CRR (Cross-Region) | SRR (Same-Region) |
|----------|--------------------|--------------------|
| Phạm vi | Hai bucket ở **Region khác nhau** | Hai bucket **cùng Region** |
| Use case | Giảm độ trễ, tuân thủ pháp lý, DR | Gom log, đồng bộ giữa các account, sandbox |
| Yêu cầu versioning | Bắt buộc cả hai | Bắt buộc cả hai |
| Kiểu | Bất đồng bộ | Bất đồng bộ |

**Điểm cần nhớ:**
- Chỉ những object **sau khi bật** replication mới được sao chép; để sao chép object **đã có sẵn**, dùng **S3 Batch Replication**.
- Replication **không dây chuyền (no chaining)**: nếu bucket 1 → bucket 2 và bucket 2 → bucket 3, thì object của bucket 1 **không** tự động tới bucket 3.
- Có thể replicate giữa các tài khoản AWS khác nhau; delete marker có thể được replicate tùy cấu hình (xóa vĩnh viễn theo version ID thì không).

---

## 7. Static Website Hosting

S3 có thể host **website tĩnh** (HTML, CSS, JS, ảnh) và phục vụ trực tiếp qua HTTP.

- URL có dạng `http://<bucket-name>.s3-website-<region>.amazonaws.com` (hoặc dạng có dấu `.`).
- Cần **bật public read** qua bucket policy (nếu để nội dung công khai) và tắt Block Public Access phù hợp.
- Nếu bị lỗi **403 Forbidden**, thường do bucket policy chưa cho phép public read.
- Kết hợp với **CloudFront** để có HTTPS, cache và tăng tốc toàn cầu.

---

## 8. Tối ưu hiệu năng & truyền tải

- **Multipart Upload**: chia object thành nhiều phần upload song song → nhanh hơn, chịu lỗi tốt (chỉ upload lại phần lỗi). Bắt buộc với object > 5 GB, khuyến nghị > 100 MB.
- **Byte-Range Fetch**: tải song song **một phần cụ thể** của object bằng cách yêu cầu theo dải byte → tăng tốc, hoặc chỉ lấy phần đầu (ví dụ đọc header file).
- **S3 Transfer Acceleration**: tăng tốc upload/download bằng cách đi qua **CloudFront edge locations** rồi truyền nội bộ qua mạng lưới AWS → hữu ích khi upload từ xa về Region đích. Tương thích với multipart upload.
- **Requester Pays**: người **tải dữ liệu (requester)** chịu phí request và data transfer thay vì chủ bucket → dùng khi chia sẻ dataset lớn cho bên thứ ba (requester phải đã xác thực, không ẩn danh).

---

## 9. Công cụ phân tích & vận hành

- **Storage Class Analysis**: phân tích access pattern để gợi ý **khi nào nên chuyển** object từ Standard sang Standard-IA (không dùng cho lớp Glacier).
- **S3 Inventory**: xuất báo cáo (CSV/ORC/Parquet) danh sách object và metadata (kích thước, storage class, trạng thái mã hóa, version) theo lịch — dùng để audit và tuân thủ.
- **S3 Batch Operations**: thực thi hành động hàng loạt trên hàng triệu object (đổi metadata/tags, copy, thay ACL, khôi phục từ Glacier, gọi Lambda...). Thường dùng chung với báo cáo S3 Inventory làm danh sách đầu vào.

---

## Điểm thi quan trọng

- **Tên bucket là duy nhất toàn cầu**; bucket được định nghĩa ở **cấp Region**.
- **Tất cả storage class có 11 số 9 durability**; chỉ khác **availability và số AZ**. **One Zone-IA = 1 AZ, availability 99.5%**.
- Chọn storage class theo **tần suất truy cập + thời gian truy xuất chấp nhận được**. Cần **rẻ nhất** cho archive dài hạn → **Glacier Deep Archive** (lấy 12h/48h).
- Truy cập **~1 lần/năm nhưng phải lấy tức thì (ms)** → **Glacier Instant Retrieval**.
- Access pattern **khó đoán** → **Intelligent-Tiering** (không phí retrieval, tự tier).
- **Replication yêu cầu versioning bật ở cả nguồn và đích**, là **async**, **không chaining**; object cũ cần **S3 Batch Replication**.
- **Versioning** đã bật chỉ có thể **suspend**, không disable.
- **Multipart** bắt buộc > 5 GB (khuyến nghị > 100 MB); object tối đa **5 TB**.
- **Transfer Acceleration** dùng **CloudFront edge locations** để tăng tốc truyền tải.

---

## Tóm tắt

- **S3** là object storage với độ bền 11 số 9, tổ chức theo **bucket + object (key)**.
- **Storage classes** khác nhau về chi phí/availability/thời gian truy xuất: Standard → IA → Intelligent-Tiering → Glacier (Instant/Flexible/Deep Archive). Deep Archive rẻ nhất.
- **Versioning + Lifecycle** giúp bảo vệ dữ liệu và tự động tối ưu chi phí theo vòng đời.
- **Replication (CRR/SRR)** cần versioning hai đầu, chạy async, không dây chuyền.
- **Transfer Acceleration, Multipart, Byte-range Fetch** tối ưu tốc độ truyền tải; **Requester Pays** chuyển phí sang bên tải.
- Công cụ **Storage Class Analysis, S3 Inventory, Batch Operations** hỗ trợ phân tích và vận hành ở quy mô lớn.
