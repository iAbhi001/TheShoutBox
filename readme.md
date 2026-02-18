# 🚀 Simple WebSocket Shoutbox (Level 2)

A real-time, bidirectional chat application built with Vanilla JavaScript and Node.js. This project demonstrates how to move beyond the traditional Request-Response model of HTTP into persistent, low-latency communication.

## ✨ Features
* **Real-Time Messaging:** Instant message broadcasting to all connected users.
* **Live User Counter:** Tracks active connections in real-time using server-side state.
* **Typing Indicators:** Visual feedback when other users are composing a message.
* **Zero-Refresh UI:** Built with pure Vanilla JS and CSS for a lightweight experience.

## 🛠️ The Tech Stack
* **Backend:** [Node.js](https://nodejs.org/) with the `ws` library (High-performance WebSocket implementation).
* **Frontend:** HTML5, CSS3, and the native [Browser WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).
* **Protocol:** WebSockets (WS) over Port 8080.

## 🧠 How It Works (The Architecture)
Unlike standard web pages that close the connection after loading, this app performs a **Protocol Upgrade**.

1.  **Handshake:** The browser sends an HTTP request to the server asking to "Upgrade" to WebSockets.
2.  **Persistent Connection:** Once accepted, the connection stays open.
3.  **JSON Framing:** All data is sent as JSON objects with a `type` property (e.g., `chat`, `typing`, `userCount`), allowing the client and server to handle different types of logic over the same pipe.



## 🚀 Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
```powershell
# Clone the repository
git clone [https://github.com/iAbhi001/TheShoutBox.git](https://github.com/iAbhi001/TheShoutBox.git)

# Enter the directory
cd simple-shoutbox

# Install dependencies
npm install