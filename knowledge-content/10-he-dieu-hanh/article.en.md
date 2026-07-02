# Operating Systems

## 1. What is an Operating System?

An **operating system (OS)** is the foundational software that manages all hardware resources and provides the environment for running other software.

Without an OS → software cannot run.

---

## 2. Common Operating Systems

| OS | Developer | Popular on |
|----|---------------|-----------|
| Windows 11/10 | Microsoft | Personal and enterprise PCs |
| macOS | Apple | MacBook, iMac |
| Linux (Ubuntu, CentOS) | Open-source community | Servers, developers |
| Android | Google | Android phones |
| iOS | Apple | iPhone, iPad |
| Windows Server | Microsoft | Enterprise servers |

---

## 3. Functions of an OS

### Process Management
A process is a running program. The OS allocates CPU time to each process:
- **Multi-tasking**: running many processes at once (Chrome, Word, Spotify simultaneously).
- **Scheduling**: the CPU switches quickly between processes, creating the feeling of parallel execution.
- **Process isolation**: one process cannot interfere with the memory of another.

### Memory Management
- Allocates RAM to each process as needed.
- Reclaims RAM when a process ends.
- **Virtual Memory**: uses the disk as virtual RAM when real RAM is full.

### File System Management
The OS organizes data on disk in a directory structure (folders/directories):

```
Windows:          Unix/Linux/macOS:
C:\               /
├── Windows\      ├── home/
├── Program Files\│   └── user/
└── Users\        ├── etc/
    └── Harry\    ├── var/
        └── Desktop\ └── usr/
```

### Device Management
The OS uses **drivers** to communicate with hardware: graphics cards, keyboards, printers, etc.

### Security
- Manages user accounts and access permissions.
- Isolates applications from one another.
- Built-in firewall.

---

## 4. CLI vs GUI

### GUI (Graphical User Interface)
A graphical interface — click, drag, drop. Easy to use, intuitive.
- Example: Windows Explorer, Finder on macOS.

### CLI (Command Line Interface)
A command-line interface — you type commands as text.

```bash
ls -la          # list files (Linux/macOS)
dir             # list files (Windows)
cd /home/user   # move into a directory
mkdir project   # create a new directory
rm -rf folder/  # delete a directory (be careful!)
```

**Why is the CLI important?**
- Servers often have no GUI (to save resources).
- Automation via scripts.
- Faster than a GUI for many technical tasks.

---

## 5. Process and Thread

- **Process**: a running program with its own memory.
- **Thread**: a smaller unit of execution within a process.

Example — Chrome: one Chrome process, but each tab is a thread (or a separate child process for isolation).

---

## 6. Kernel

The **kernel** is the core of the OS — the part that runs with the highest privilege and interacts directly with the hardware:
- User apps don't call hardware directly → they call through the kernel (system call).
- The kernel manages memory, CPU, and I/O at the lowest level.

---

## 7. Summary

- **OS** = the foundational software that manages resources.
- **Process** = a running program.
- **File System** = how the OS organizes files.
- **CLI** = the command-line interface — important for servers.
- **Driver** = software that lets the OS communicate with hardware.
- **Kernel** = the core of the OS, with the highest privilege.
