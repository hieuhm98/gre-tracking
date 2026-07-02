# RDS, Aurora & ElastiCache – Cơ sở dữ liệu quản lý

## 1. Tổng quan

AWS cung cấp các dịch vụ **cơ sở dữ liệu được quản lý (managed database)** để bạn không phải tự cài đặt, vá lỗi hay backup thủ công như khi tự chạy database trên EC2.

- **Amazon RDS**: cơ sở dữ liệu quan hệ (relational) được quản lý — MySQL, PostgreSQL, MariaDB, Oracle, SQL Server.
- **Amazon Aurora**: database quan hệ do AWS thiết kế riêng, tương thích MySQL/PostgreSQL, hiệu năng và độ bền cao hơn.
- **Amazon ElastiCache**: bộ nhớ đệm (cache) in-memory — Redis hoặc Memcached — để giảm tải và tăng tốc đọc.

Ý tưởng cốt lõi cho kỳ thi: **Multi-AZ = độ sẵn sàng cao (HA, đồng bộ)**, **Read Replica = mở rộng đọc (bất đồng bộ)**, **ElastiCache = giảm tải database bằng cache**.

---

## 2. Amazon RDS tổng quan & lợi ích

`RDS` (Relational Database Service) chạy database engine trên hạ tầng do AWS quản lý.

**Các engine hỗ trợ**: `MySQL`, `PostgreSQL`, `MariaDB`, `Oracle`, `SQL Server` (và Aurora — xem mục riêng).

**Lợi ích được quản lý**:

- Tự động **vá lỗi (patching)** hệ điều hành và database.
- Tự động **backup** liên tục và cho phép khôi phục về thời điểm bất kỳ (point-in-time recovery).
- **Monitoring** và metric qua CloudWatch, Performance Insights.
- **Multi-AZ** và **Read Replica** chỉ bằng vài cú click.
- **Storage autoscaling**: RDS tự động tăng dung lượng lưu trữ khi gần đầy (theo ngưỡng cấu hình) mà không gián đoạn.

**Đánh đổi quan trọng**: bạn **KHÔNG có quyền SSH** vào máy chủ database — vì AWS quản lý OS. Nếu cần truy cập hệ điều hành, dùng `RDS Custom` (chỉ Oracle và SQL Server) hoặc tự cài database trên EC2.

---

## 3. RDS Read Replicas

**Read Replica** là bản sao chỉ-đọc để **mở rộng khả năng đọc (scale reads)**.

- Dùng cơ chế **sao chép bất đồng bộ (asynchronous)** → dữ liệu trên replica có thể trễ một chút (**replica lag**), tức là **eventually consistent**.
- Hỗ trợ **tối đa 15 Read Replica** cho một database RDS.
- Có thể đặt **cùng AZ, khác AZ, hoặc khác region (cross-region)**.
- Mỗi replica có **connection string riêng** — ứng dụng phải chủ động trỏ truy vấn đọc vào replica.
- Có thể **promote (thăng cấp)** một replica thành database độc lập có khả năng ghi (dùng khi phục hồi hoặc tách hệ thống).

**Chi phí mạng**: replicate **trong cùng AZ là miễn phí**; replicate **cross-AZ hoặc cross-region sẽ phát sinh chi phí** truyền dữ liệu.

> Lưu ý thi: Read Replica dùng để **giảm tải đọc** cho database chính (ví dụ báo cáo, analytics), **KHÔNG** phải cơ chế HA/failover tự động.

---

## 4. RDS Multi-AZ

**Multi-AZ** là cơ chế **độ sẵn sàng cao (High Availability) và khôi phục sau thảm họa (DR)** trong cùng region.

- Duy trì một **standby đồng bộ (synchronous)** ở một AZ khác — mọi ghi được sao chép đồng bộ.
- **Tự động failover (automatic failover)** sang standby khi database chính lỗi, mất AZ, hoặc bảo trì.
- Ứng dụng chỉ dùng **một DNS name duy nhất** — khi failover, DNS tự trỏ sang standby, không cần đổi connection string.
- Standby **KHÔNG phục vụ truy vấn đọc** — nó chỉ chờ để thay thế. Vì vậy Multi-AZ **KHÔNG dùng để scale reads**.

### Read Replica vs Multi-AZ

| Tiêu chí | Read Replica | Multi-AZ |
|----------|--------------|----------|
| Mục đích | Mở rộng đọc (scale reads) | Độ sẵn sàng cao / DR |
| Sao chép | Bất đồng bộ (async) | Đồng bộ (sync) |
| Phục vụ đọc? | Có | Không (standby chờ) |
| Failover tự động? | Không (phải promote thủ công) | Có, tự động |
| Số lượng | Tối đa 15 | 1 standby |
| Connection string | Riêng mỗi replica | Một DNS duy nhất |
| Cross-region? | Có | Không (trong 1 region) |

---

## 5. RDS Proxy & RDS Custom

### RDS Proxy

`RDS Proxy` là proxy quản lý **kết nối gộp (connection pooling)** đặt trước database.

- **Gộp và tái sử dụng kết nối** → tránh việc mở quá nhiều kết nối làm quá tải database.
- **Giảm thời gian failover** tới ~66% vì proxy giữ kết nối và tự trỏ lại database mới.
- Có thể **bắt buộc xác thực bằng IAM** (`IAM authentication`) và lưu credential trong Secrets Manager.
- **Rất phù hợp với AWS Lambda**: hàng loạt Lambda khởi tạo đồng thời sẽ tạo bùng nổ kết nối — RDS Proxy gộp lại giúp database không bị quá tải.
- Chỉ truy cập được từ trong VPC (không public).

### RDS Custom

`RDS Custom` dành cho `Oracle` và `SQL Server` khi bạn cần **quyền truy cập hệ điều hành và database** (cài agent, patch tùy chỉnh, cấu hình sâu) — điều RDS thường không cho phép. Với RDS Custom bạn tự chịu trách nhiệm nhiều hơn về OS; RDS thường thì AWS quản lý toàn bộ.

---

## 6. Amazon Aurora (kiến trúc, endpoints, Serverless, Global Database)

`Amazon Aurora` là database quan hệ **do AWS thiết kế riêng**, tương thích với `MySQL` và `PostgreSQL`.

**Hiệu năng & độ bền**:

- Nhanh hơn **~5x so với MySQL** và **~3x so với PostgreSQL** thông thường.
- Lưu trữ **tự động tăng từ 10 GB đến 128 TB**, không cần cấp phát trước.
- Giữ **6 bản sao dữ liệu trên 3 AZ** (2 bản mỗi AZ) → **tự phục hồi (self-healing)** và độ bền rất cao.
- Hỗ trợ **tối đa 15 Aurora Replica** với **failover nhanh** (nhanh hơn RDS Read Replica).

**Endpoints**:

- **Writer endpoint**: luôn trỏ tới instance chính (primary) để ghi; tự trỏ lại sau failover.
- **Reader endpoint**: cân bằng tải các truy vấn đọc trên các Aurora Replica.

**Các tính năng đáng chú ý**:

- **Aurora Serverless v2**: tự động scale năng lực tính toán theo tải — phù hợp workload biến động hoặc khó dự đoán, chỉ trả tiền theo mức dùng.
- **Aurora Global Database**: sao chép **cross-region với độ trễ dưới 1 giây** cho DR và đọc toàn cầu; region phụ có thể được promote nhanh khi thảm họa.
- **Backtrack**: "tua ngược" database về thời điểm trước đó mà không cần khôi phục từ backup.
- **Cloning**: tạo bản sao nhanh của database (copy-on-write) để test mà không tốn nhiều dung lượng.

---

## 7. ElastiCache (Redis vs Memcached)

`Amazon ElastiCache` là dịch vụ **cache in-memory được quản lý**, giúp giảm tải đọc cho database và giảm độ trễ.

**Hai engine**:

- **Redis**: hỗ trợ **HA với Multi-AZ + replication**, **persistence (lưu xuống đĩa)**, **backup/restore**, cấu trúc dữ liệu phong phú (**sorted sets, list, pub/sub**), và **Cluster Mode** để chia shard. Dùng khi cần cache bền vững, có tính sẵn sàng cao.
- **Memcached**: **chia shard trên nhiều node (sharding)**, **đa luồng (multi-threaded)**, **không persistence**, **không replication** — là cache thuần túy, đơn giản, dễ scale ngang.

### Redis vs Memcached

| Tiêu chí | Redis | Memcached |
|----------|-------|-----------|
| Replication / HA | Có (Multi-AZ, failover) | Không |
| Persistence | Có | Không |
| Backup / restore | Có | Không |
| Cấu trúc dữ liệu | Phong phú (sorted set, pub/sub) | Đơn giản (key-value) |
| Đa luồng | Không | Có |
| Sharding | Có (Cluster Mode) | Có |
| Dùng khi | Cần HA, độ bền, tính năng | Cache thuần, đơn giản, đa luồng |

---

## 8. Caching patterns (Lazy Loading vs Write-Through)

Khi đưa cache vào trước database, có hai chiến lược nạp dữ liệu chính, thường kết hợp với **TTL (Time To Live)** để dữ liệu tự hết hạn.

- **Lazy Loading (Cache-Aside)**: ứng dụng đọc cache trước; nếu **miss** thì đọc từ database rồi ghi vào cache. Chỉ dữ liệu thực sự được yêu cầu mới nằm trong cache → tiết kiệm bộ nhớ, nhưng lần miss đầu chậm và dữ liệu có thể **cũ (stale)**.
- **Write-Through**: mỗi lần ghi vào database thì **ghi luôn vào cache**. Cache luôn mới, nhưng ghi chậm hơn và có thể cache cả dữ liệu không bao giờ được đọc.
- **TTL**: đặt thời gian sống để cache tự động hết hạn, giúp giảm dữ liệu cũ (thường dùng chung với Lazy Loading).

### Lazy Loading vs Write-Through

| Tiêu chí | Lazy Loading (Cache-Aside) | Write-Through |
|----------|----------------------------|---------------|
| Khi nào nạp cache | Khi đọc bị miss | Khi ghi vào database |
| Độ mới của dữ liệu | Có thể cũ (dùng TTL) | Luôn mới |
| Bộ nhớ cache | Chỉ dữ liệu được yêu cầu | Cả dữ liệu ít/không đọc |
| Nhược điểm | Miss đầu chậm, có thể stale | Ghi chậm hơn, phí bộ nhớ |

---

## Điểm thi quan trọng

- **Multi-AZ = HA/DR, đồng bộ, tự failover, một DNS, KHÔNG phục vụ đọc.** **Read Replica = scale đọc, bất đồng bộ, tối đa 15, có thể cross-region, có thể promote.**
- Read Replica **cùng AZ miễn phí** truyền dữ liệu; **cross-AZ / cross-region tính phí**.
- Cần **quyền OS** trên Oracle/SQL Server → dùng `RDS Custom`. RDS thường không cho SSH.
- **RDS Proxy** = connection pooling, giảm thời gian failover, bắt buộc IAM auth — **lựa chọn lý tưởng cho Lambda**.
- **Aurora**: 6 bản sao trên 3 AZ, self-healing, storage auto-grow tới **128 TB**, tối đa 15 Aurora Replica, writer/reader endpoint.
- **Aurora Global Database** = sao chép cross-region **dưới 1 giây** cho DR toàn cầu.
- **Redis** = HA + replication + persistence + backup + cấu trúc dữ liệu; **Memcached** = sharding + đa luồng, **không** persistence/replication (cache thuần).
- **Lazy Loading** nạp khi miss (có thể stale); **Write-Through** nạp khi ghi (luôn mới); dùng **TTL** để hết hạn dữ liệu.

---

## Tóm tắt

- **RDS** = database quan hệ được quản lý (patching, backup, monitoring) nhưng **không có SSH**; hỗ trợ storage autoscaling.
- **Multi-AZ** dành cho **độ sẵn sàng cao** (đồng bộ, tự failover); **Read Replica** dành cho **mở rộng đọc** (bất đồng bộ, tối đa 15, promotable, có thể cross-region).
- **RDS Proxy** gộp kết nối và giảm thời gian failover — tuyệt cho Lambda; **RDS Custom** cho phép truy cập OS trên Oracle/SQL Server.
- **Aurora** giữ 6 bản sao qua 3 AZ, tự phục hồi, lưu trữ tới 128 TB, có Serverless v2 và Global Database (< 1s cross-region).
- **ElastiCache**: chọn **Redis** khi cần HA/persistence, chọn **Memcached** cho cache thuần đa luồng.
- Caching dùng **Lazy Loading** (nạp khi miss) hoặc **Write-Through** (nạp khi ghi), kết hợp **TTL**.
