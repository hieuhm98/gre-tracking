# Hệ điều hành

## 1. Hệ điều hành là gì?

**Hệ điều hành (OS - Operating System)** là phần mềm nền tảng quản lý toàn bộ tài nguyên phần cứng và cung cấp môi trường để chạy các phần mềm khác.

Không có OS → phần mềm không chạy được.

---

## 2. Các OS phổ biến

| OS | Nhà phát triển | Phổ biến ở |
|----|---------------|-----------|
| Windows 11/10 | Microsoft | PC cá nhân, doanh nghiệp |
| macOS | Apple | MacBook, iMac |
| Linux (Ubuntu, CentOS) | Cộng đồng mã nguồn mở | Server, developer |
| Android | Google | Điện thoại Android |
| iOS | Apple | iPhone, iPad |
| Windows Server | Microsoft | Server doanh nghiệp |

---

## 3. Chức năng của OS

### Quản lý Process (tiến trình)
Process là một chương trình đang chạy. OS phân phối CPU time cho từng process:
- **Multi-tasking**: chạy nhiều process đồng thời (Chrome, Word, Spotify cùng lúc).
- **Scheduling**: CPU chuyển nhanh giữa các process tạo cảm giác chạy song song.
- **Process isolation**: process này không can thiệp vào bộ nhớ của process khác.

### Quản lý bộ nhớ (Memory Management)
- Cấp phát RAM cho từng process khi cần.
- Thu hồi RAM khi process kết thúc.
- **Virtual Memory**: dùng ổ cứng làm RAM ảo khi RAM thật đầy.

### Quản lý File System
OS tổ chức dữ liệu trên ổ cứng theo cấu trúc thư mục (folder/directory):

```
Windows:          Unix/Linux/macOS:
C:\               /
├── Windows\      ├── home/
├── Program Files\│   └── user/
└── Users\        ├── etc/
    └── Harry\    ├── var/
        └── Desktop\ └── usr/
```

### Quản lý thiết bị (Device Management)
OS dùng **driver** để giao tiếp với phần cứng: card màn hình, bàn phím, printer...

### Bảo mật
- Quản lý user account và quyền truy cập.
- Cách ly các ứng dụng khỏi nhau.
- Firewall tích hợp.

---

## 4. CLI vs GUI

### GUI (Graphical User Interface)
Giao diện đồ họa — click, drag, drop. Dễ dùng, trực quan.
- Ví dụ: Windows Explorer, Finder trên macOS.

### CLI (Command Line Interface)
Giao diện dòng lệnh — gõ lệnh bằng text.

```bash
ls -la          # liệt kê file (Linux/macOS)
dir             # liệt kê file (Windows)
cd /home/user   # di chuyển vào thư mục
mkdir project   # tạo thư mục mới
rm -rf folder/  # xóa thư mục (cẩn thận!)
```

**Tại sao CLI quan trọng?**
- Server thường không có GUI (tiết kiệm tài nguyên).
- Tự động hóa qua script.
- Nhanh hơn GUI cho nhiều tác vụ kỹ thuật.

---

## 5. Process và Thread

- **Process**: chương trình đang chạy, có bộ nhớ riêng.
- **Thread**: đơn vị thực thi nhỏ hơn trong process.

Ví dụ Chrome: một process Chrome, nhưng mỗi tab là một thread (hoặc process con riêng để cách ly).

---

## 6. Kernel

**Kernel** là lõi của OS — phần chạy với đặc quyền cao nhất, trực tiếp tương tác với phần cứng:
- User apps không gọi phần cứng trực tiếp → gọi qua kernel (system call).
- Kernel quản lý bộ nhớ, CPU, I/O ở mức thấp nhất.

---

## 7. Tóm tắt

- **OS** = phần mềm nền quản lý tài nguyên.
- **Process** = chương trình đang chạy.
- **File System** = cách OS tổ chức file.
- **CLI** = giao diện dòng lệnh — quan trọng với server.
- **Driver** = phần mềm để OS giao tiếp với phần cứng.
- **Kernel** = lõi OS, đặc quyền cao nhất.
