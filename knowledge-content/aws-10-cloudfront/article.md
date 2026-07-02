# CloudFront & Global Accelerator

## 1. Tổng quan

Amazon `CloudFront` là dịch vụ **CDN (Content Delivery Network)** của AWS, dùng để phân phối nội dung với độ trễ thấp trên toàn cầu bằng cách cache nội dung tại **edge locations**. AWS `Global Accelerator` cũng hoạt động ở edge nhưng theo hướng khác: nó **không cache** mà chỉ tối ưu định tuyến mạng tới các endpoint của bạn thông qua AWS global backbone.

Đây là hai dịch vụ "edge" thường bị nhầm lẫn trong kỳ thi SAA-C03. Ý nghĩa với kỳ thi:

- Phân biệt **khi nào dùng CloudFront (cache nội dung)** với **khi nào dùng Global Accelerator (tăng tốc/định tuyến, không cache)**.
- Biết cách bảo mật S3 origin bằng `OAC` (thay thế `OAI` legacy).
- Phân biệt **Signed URLs** (1 file) và **Signed Cookies** (nhiều file), Geo Restriction, và yêu cầu chứng chỉ ACM phải ở `us-east-1` cho CloudFront.
- Nắm 2 static anycast IPs của Global Accelerator.

## 2. CloudFront tổng quan & edge locations

`CloudFront` có hơn **400+ edge locations** (points of presence) trên toàn thế giới. Khi người dùng yêu cầu nội dung, họ được phục vụ từ edge location gần nhất, giúp giảm độ trễ.

Lợi ích chính:

- **Low latency & caching**: nội dung được cache tại edge, lần sau phục vụ ngay không cần gọi về origin.
- **DDoS protection**: tích hợp sẵn AWS `Shield` (chống DDoS), và có thể gắn thêm AWS `WAF` để lọc traffic ở tầng ứng dụng (Layer 7).
- **Global distribution**: một distribution phục vụ toàn cầu.

Luồng cơ bản: Viewer → Edge Location (cache) → (nếu miss) → Origin.

## 3. Origins & OAC (S3 vs custom origin)

CloudFront lấy nội dung gốc từ **origin**. Có hai loại chính:

- **S3 bucket origin**: dùng để phân phối file tĩnh. Bảo mật bằng `Origin Access Control` (`OAC`) để **chỉ cho phép CloudFront truy cập bucket**, chặn truy cập trực tiếp vào S3. `OAC` là bản thay thế hiện đại cho `Origin Access Identity` (`OAI`) legacy — AWS khuyến nghị dùng `OAC` vì hỗ trợ SSE-KMS, tất cả region, và các HTTP method như POST/PUT.
- **Custom origin (HTTP)**: bất kỳ HTTP server nào — `ALB`, `EC2` instance, S3 static website endpoint, hoặc HTTP server on-premises. Với ALB/EC2 làm custom origin, endpoint phải cho phép public HTTP truy cập từ CloudFront.

Điểm thi cốt lõi: muốn **giới hạn S3 chỉ truy cập được qua CloudFront** → dùng `OAC` + bucket policy cho phép nguyên tắc CloudFront service principal.

## 4. Caching & Invalidation (Cache Policy, TTL)

CloudFront quyết định cache như thế nào qua **cache behaviors** gắn với từng path pattern (ví dụ `/images/*`).

- **Cache Policy**: định nghĩa **cache key** (các thành phần của request dùng để định danh object trong cache: headers, cookies, query strings) và giá trị **TTL** (`min TTL`, `default TTL`, `max TTL`).
- **Origin Request Policy**: định nghĩa những gì được **chuyển tiếp tới origin** (headers/cookies/query strings), tách biệt với cache key.
- **TTL**: kiểm soát thời gian object được coi là "fresh" trong cache trước khi CloudFront kiểm tra lại với origin.
- **Invalidation**: chủ động **xóa object khỏi cache** trước khi hết TTL để buộc CloudFront lấy phiên bản mới. Có thể invalidate theo path (`/*` để xóa toàn bộ). Lưu ý: invalidation có chi phí; giải pháp thay thế tiết kiệm hơn là dùng **versioned filenames** (ví dụ `app.v2.js`) để bust cache mà không cần invalidate.

## 5. Bảo vệ nội dung (Signed URLs vs Signed Cookies)

Để phân phối nội dung riêng tư (ví dụ video trả phí), CloudFront cung cấp:

- **Signed URLs**: cấp quyền truy cập **một file duy nhất**, mỗi file cần một URL riêng.
- **Signed Cookies**: cấp quyền truy cập **nhiều file / toàn bộ nội dung** mà không cần tạo URL cho từng file.

| Tiêu chí | Signed URL | Signed Cookie |
|---|---|---|
| Phạm vi | 1 file | Nhiều file / toàn bộ nội dung |
| Trường hợp dùng | Tải một object cụ thể | Streaming nhiều file, thư viện nội dung |
| Client hỗ trợ cookie | Không bắt buộc | Bắt buộc |
| Thay đổi URL gốc | Có (URL bị ký lại) | Không (URL giữ nguyên) |

Cả hai đều dùng policy (thời hạn hết hạn, IP range...) để giới hạn truy cập.

## 6. Geo Restriction

`Geo Restriction` cho phép **allow (allowlist)** hoặc **deny (blocklist)** truy cập theo **quốc gia** của người dùng (dựa trên IP → geo-IP database). Dùng cho tuân thủ bản quyền/pháp lý theo khu vực. Đây là kiểm soát ở tầng CloudFront distribution, không phụ thuộc origin.

## 7. HTTPS/TLS (ACM us-east-1)

CloudFront hỗ trợ HTTPS end-to-end với hai chặng:

- **Viewer protocol policy**: giữa viewer và CloudFront (có thể `Redirect HTTP to HTTPS` hoặc `HTTPS Only` để bắt buộc mã hóa).
- **Origin protocol policy**: giữa CloudFront và origin.

Để dùng custom domain với HTTPS, cần chứng chỉ TLS trong AWS `Certificate Manager` (`ACM`). **Quan trọng cho kỳ thi**: chứng chỉ ACM dùng cho CloudFront **bắt buộc phải nằm ở region `us-east-1` (N. Virginia)**, bất kể origin ở region nào.

## 8. CloudFront Functions vs Lambda@Edge

Cả hai cho phép chạy code tại edge để tùy biến request/response:

- **CloudFront Functions**: JavaScript nhẹ, độ trễ cực thấp (sub-millisecond), chạy ở edge locations, dùng cho các thao tác đơn giản như header manipulation, URL rewrite/redirect, xác thực token đơn giản. Rẻ và scale cực cao.
- **Lambda@Edge**: chạy Lambda (Node.js/Python) tại Regional Edge Caches, mạnh hơn, hỗ trợ network calls, thời gian chạy dài hơn — dùng cho logic phức tạp hơn.

## 9. CloudFront vs S3 Cross-Region Replication (CRR)

Cả hai cùng giảm độ trễ cho người dùng ở xa nhưng theo cơ chế khác nhau:

| Tiêu chí | CloudFront | S3 Cross-Region Replication (CRR) |
|---|---|---|
| Cơ chế | Cache tại edge (400+ locations) với TTL | Sao chép object sang bucket ở region khác |
| Phạm vi | Toàn cầu | Một vài region cấu hình sẵn |
| Độ tươi dữ liệu | Có thể cũ tới hết TTL | Luôn cập nhật (near real-time) |
| Trường hợp dùng | Nội dung tĩnh/động, đọc nhiều, phân phối toàn cầu | Độ trễ thấp cho vài region cụ thể, tuân thủ, backup |

Tóm gọn: CloudFront cho **phân phối toàn cầu có cache**; CRR cho **dữ liệu luôn mới ở một số region cụ thể / compliance**.

## 10. AWS Global Accelerator

`Global Accelerator` cải thiện **hiệu năng và tính sẵn sàng** cho ứng dụng bằng cách định tuyến traffic qua AWS global backbone thay vì Internet công cộng.

- Cấp cho bạn **2 static anycast IPs** ở edge; traffic vào IP này sẽ được đưa lên AWS backbone tại edge location gần nhất.
- Định tuyến tới **endpoint healthy gần nhất**: `ALB`, `NLB`, `EC2`, hoặc `Elastic IP`.
- Hỗ trợ cả **TCP và UDP**.
- **Fast failover** khi region/endpoint gặp sự cố (health checks), tính bằng giây.
- **KHÔNG cache** nội dung.

Phù hợp cho: ứng dụng **non-HTTP** (gaming, IoT, VoIP), hoặc HTTP cần **static IP** để allowlist hoặc cần **failover khu vực nhanh**.

## 11. CloudFront vs Global Accelerator (so sánh)

| Tiêu chí | CloudFront | Global Accelerator |
|---|---|---|
| Mục đích | Content delivery (CDN) | Tăng tốc & định tuyến tới endpoint |
| Cache | Có, cache tại edge | Không cache |
| Giao thức | Chủ yếu HTTP/HTTPS | TCP/UDP (bất kỳ) |
| IP | Domain phân phối (không static IP) | 2 static anycast IPs |
| Use case | Web, video, file tĩnh/động | Gaming, IoT, VoIP, static IP, failover khu vực nhanh |
| Xử lý ở edge | Phục vụ nội dung đã cache | Chuyển traffic lên backbone tới endpoint |

## Điểm thi quan trọng

- `OAC` (thay thế `OAI` legacy) dùng để **giới hạn S3 bucket chỉ truy cập được qua CloudFront**.
- **Signed URL = 1 file**; **Signed Cookie = nhiều file / toàn bộ nội dung**.
- **Global Accelerator = 2 static anycast IPs + KHÔNG cache + định tuyến tới endpoint healthy gần nhất** qua AWS backbone.
- **CloudFront cache nội dung tại edge**; **Global Accelerator KHÔNG cache**, chỉ cải thiện định tuyến/độ sẵn sàng.
- Chứng chỉ **ACM cho CloudFront phải ở `us-east-1`**.
- Non-HTTP (gaming/IoT/VoIP) hoặc cần static IP → **Global Accelerator**; nội dung web cần cache toàn cầu → **CloudFront**.
- Buộc HTTPS bằng viewer protocol policy (`Redirect HTTP to HTTPS` / `HTTPS Only`).
- Cache CRR: CloudFront cache có TTL (có thể cũ); CRR luôn cập nhật cho vài region cụ thể/compliance.

## Tóm tắt

- `CloudFront` là CDN cache nội dung tại 400+ edge locations, tích hợp `Shield`/`WAF`, giảm độ trễ toàn cầu.
- Bảo mật S3 origin bằng `OAC`; custom origin có thể là `ALB`/`EC2`/HTTP server; điều khiển cache qua `Cache Policy`, `TTL`, và `invalidation`.
- Bảo vệ nội dung riêng tư bằng **Signed URLs** (1 file) hoặc **Signed Cookies** (nhiều file); giới hạn theo quốc gia bằng Geo Restriction; chứng chỉ ACM phải ở `us-east-1`.
- `Global Accelerator` cấp **2 static anycast IPs**, định tuyến qua AWS backbone tới endpoint healthy gần nhất, hỗ trợ TCP/UDP, failover nhanh, **không cache**.
- Quy tắc chọn: cache nội dung web → CloudFront; tăng tốc/định tuyến non-HTTP hoặc cần static IP/failover khu vực → Global Accelerator.
