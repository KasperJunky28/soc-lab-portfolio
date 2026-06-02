# 🔐 End-to-End Security Operations Lab

A full-scale hands-on **Security Operations Center (SOC) lab project** designed to simulate a real enterprise environment, execute controlled attack scenarios, and evaluate detection, visibility, and security posture across the entire attack lifecycle.

---

## 🎯 Project Overview

This project demonstrates a complete **attack → detection → hardening → validation** workflow within a realistic enterprise infrastructure.

The lab was built to replicate real-world systems and security challenges, enabling:

* Simulation of external and internal attacks
* Centralized logging and SIEM analysis
* Detection gap identification
* Security hardening implementation
* Validation through attack replay

---

## 🧱 Environment Architecture

The lab environment includes:

* **Active Directory Domain (corp.local)**
* **Domain Controller (DC01)** – AD DS, DNS, DHCP
* **File Server (FILE01)** – sensitive shares (HR, Finance, Management)
* **Windows Endpoints** – domain-joined workstations
* **SIEM Server (Wazuh)** – log collection, correlation, alerting
* **IDS (Suricata)** – network-level detection
* **Sysmon** – endpoint telemetry
* **Kali Linux** – attack simulation

---

## ⚙️ Technologies Used

* **Wazuh SIEM**
* **Suricata IDS**
* **Sysmon**
* **Active Directory (Windows Server)**
* **DNS / DHCP**
* **Linux (Ubuntu SIEM Server)**
* **Kali Linux**
* **MITRE ATT&CK Framework**

---

## 🧪 Attack Simulation

The lab includes both **external** and **internal** attack scenarios:

### 🌐 External Attacks

* Network scanning (Nmap)
* Brute-force attempts (SSH / authentication)
* Web-based attacks (basic simulation)

### 🏠 Internal Attacks

* Unauthorized file access
* Privilege misuse
* Lateral movement simulation
* Data exfiltration behavior

---

## 🔍 Detection & Monitoring

### Log Sources:

* Windows Event Logs (Security)
* Sysmon events
* Suricata alerts
* Linux system logs

### Key Events:

* **4624** – Successful logon
* **4663** – File access

### Detection Logic:

Custom SIEM correlation rules were implemented to detect suspicious behavior:

> Example:
> Login Event (4624) + File Access (4663)
> → Potential Data Exfiltration

---

## 🛡️ Security Gaps Identified

During the initial assessment, several critical weaknesses were discovered:

* No account lockout policy
* Weak password configurations
* Overly permissive file access controls
* Lack of file access monitoring
* No correlation between authentication and activity
* No intrusion prevention mechanisms

---

## 🔐 Security Hardening

The environment was hardened across three main areas:

### 1. Identity & Authentication

* Strong password policies
* Account lockout configuration
* User and privilege hardening

### 2. Network Hardening

* **Fail2Ban** for brute-force protection
* **iptables** for traffic filtering and rate limiting

### 3. Access Control & Visibility

* File permission restructuring
* File auditing (Event ID 4663)
* SIEM detection improvements

---

## ✅ Validation

All improvements were validated through **attack replay**, confirming:

* Successful detection of malicious behavior
* Improved visibility across endpoints and network
* Reduced attack surface
* Effective alerting via SIEM

---

## 🧠 Key Skills Demonstrated

### 🔐 Security Operations

* SIEM monitoring and rule creation
* Threat detection and analysis
* Incident investigation

### 🧱 Infrastructure & Networking

* Active Directory deployment and management
* DNS / DHCP configuration
* Network segmentation and communication design

### 🖥️ Systems & Endpoint Security

* Sysmon deployment and tuning
* Windows event analysis
* Linux server configuration

### 🎯 Offensive & Defensive Integration

* Attack simulation (Kali Linux)
* Blue Team detection engineering
* MITRE ATT&CK mapping

---

## 🌐 Live Project

👉 [View Full Case Study](https://kasperjunky28.github.io/soc-lab-portfolio/)

---

## 📌 Key Takeaway

This project demonstrates that security is not a single tool or configuration,
but a continuous process of:

**Detection → Analysis → Hardening → Validation**

---

## 👤 Author

**Lahav Kasper**
Cyber Security Analyst (SOC-focused)

---
