# Mạng máy tính

## 1. Mạng máy tính là gì?

Mạng máy tính (computer network) là tập hợp nhiều thiết bị (máy tính, điện thoại, máy in...) được kết nối với nhau để **chia sẻ dữ liệu và tài nguyên**.

Mạng cho phép: gửi email, duyệt web, chia sẻ file, họp online, in qua mạng...

---

## 2. Các loại mạng phổ biến

### LAN – Mạng cục bộ (Local Area Network)
Kết nối các thiết bị trong **một khu vực nhỏ**: văn phòng, trường học, nhà ở.

- Tốc độ cao, độ trễ thấp.
- Ví dụ: mạng WiFi tại nhà bạn là một LAN.

### WAN – Mạng diện rộng (Wide Area Network)
Kết nối các mạng LAN qua khoảng cách **địa lý lớn**: thành phố, quốc gia, toàn cầu.

- **Internet** chính là WAN lớn nhất thế giới.

### MAN – Mạng đô thị (Metropolitan Area Network)
Phạm vi một thành phố. Ví dụ: mạng nội bộ của một trường đại học nhiều campus.

---

## 3. Các thiết bị mạng quan trọng

### Router (Bộ định tuyến)
Router kết nối mạng LAN của bạn với Internet (WAN). Nó **định tuyến** các gói dữ liệu đến đúng đích.

- Mỗi router có một địa chỉ IP công khai (public IP) từ nhà cung cấp dịch vụ (ISP).
- Router tại nhà thường kiêm luôn chức năng WiFi access point.

### Switch (Bộ chuyển mạch)
Switch kết nối nhiều thiết bị trong cùng một mạng LAN. Nó chuyển dữ liệu **trực tiếp** giữa hai thiết bị cần giao tiếp.

- Khác router: Switch làm việc trong nội bộ mạng, không kết nối ra Internet.

### Access Point (Điểm truy cập WiFi)
Phát sóng WiFi để thiết bị kết nối không dây. Router gia đình thường tích hợp sẵn access point.

### Modem
Thiết bị chuyển đổi tín hiệu từ ISP (cáp đồng, cáp quang...) thành tín hiệu số mà router hiểu được.

---

## 4. Gói tin (Packet)

Dữ liệu truyền qua mạng được chia nhỏ thành các **gói tin (packet)**. Mỗi gói tin chứa:

- Địa chỉ nguồn (source IP)
- Địa chỉ đích (destination IP)
- Một phần dữ liệu thực sự
- Thông tin kiểm tra lỗi

Gói tin đi qua nhiều router khác nhau trước khi đến đích, rồi được **lắp ráp lại** theo thứ tự.

---

## 5. Băng thông và tốc độ mạng

**Băng thông (Bandwidth)**: lượng dữ liệu tối đa có thể truyền trong 1 giây.
- Đơn vị: **Mbps** (Megabit per second), **Gbps** (Gigabit per second).
- 100 Mbps = 100 triệu bit/giây ≈ 12.5 MB/s tốc độ tải thực tế.

**Độ trễ (Latency/Ping)**: thời gian để một gói tin đi từ A đến B và quay lại.
- Đơn vị: millisecond (ms). Ping thấp = mạng phản hồi nhanh.

**Lưu ý**: Băng thông cao không đồng nghĩa với ping thấp. Một đường truyền vệ tinh có thể có băng thông cao nhưng ping rất cao (>500ms).

---

## 6. Dây mạng và WiFi

| | Dây mạng (Ethernet) | WiFi |
|--|---------------------|------|
| Tốc độ | Cao, ổn định | Thấp hơn, dao động |
| Độ trễ | Rất thấp | Cao hơn |
| Tiện lợi | Cần dây | Không dây |
| Bảo mật | Cao hơn | Dễ bị nghe lén hơn |

---

## 7. Địa chỉ IP trong mạng

Mỗi thiết bị trong mạng có một **địa chỉ IP** (Internet Protocol address) để nhận dạng.

- **IP nội bộ (Private IP)**: dùng trong mạng LAN. Ví dụ: 192.168.1.x
- **IP công khai (Public IP)**: địa chỉ mạng của bạn trên Internet, do ISP cấp.

Khi bạn truy cập google.com, gói tin đi từ IP nội bộ → router → IP công khai → Internet → Google.

---

## 8. Tóm tắt

- **LAN**: mạng nội bộ nhỏ (nhà, văn phòng).
- **WAN/Internet**: mạng toàn cầu.
- **Router**: kết nối LAN với Internet.
- **Switch**: kết nối thiết bị trong LAN.
- **Packet**: đơn vị dữ liệu truyền qua mạng.
- **Bandwidth**: tốc độ tối đa, đo bằng Mbps/Gbps.
