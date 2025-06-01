# Java 开发环境搭建教程（适合初学者）

本教程适用于 Java 初学者，帮助你在 Windows 或 macOS 上搭建开发环境，并运行第一个 Java 程序。

## 🧰 准备工作

你需要准备：

- 一台电脑（Windows 或 macOS）
- 稳定的网络

## 🧱 第一步：安装 Java JDK（Java Development Kit）

### ✅ 推荐版本：JDK 17（长期支持）

### 🔗 下载地址：

Oracle 官方下载页面：https://www.oracle.com/java/technologies/javase-downloads.html

1. 打开上面的链接，点击 `JDK Downloads`
2. 找到 JDK 17，选择对应你系统的版本（例如 Windows x64 Installer）
3. 下载并安装

### 📌 Windows 安装完成后配置环境变量：

1. 右键“此电脑” > “属性” > “高级系统设置” > “环境变量”
2. 新建系统变量：
   - 变量名：`JAVA_HOME`
   - 变量值：JDK 安装目录（如：`C:\Program Files\Java\jdk-17`）
3. 在系统变量中的 `Path` 项里添加一行：
