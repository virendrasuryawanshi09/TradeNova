# 📈 TradeNova – Zerodha Clone

TradeNova is a full-stack stock trading platform inspired by **Zerodha**, built using the **MERN stack (MongoDB, Express.js, React, Node.js)**.  
This project is designed to replicate the core functionality of a modern trading application while following clean architecture and best development practices.

TradeNova is a **paper-trading** platform created for learning and portfolio purposes only.
---

## ✨ Features

### 🔐 Authentication
- User registration & login
- Secure password hashing using bcrypt
- JWT-based authentication

### 📊 Trading Features
- View available stocks
- Buy and sell stocks (paper trading)
- Track open and closed positions
- Portfolio balance overview

### 📁 Portfolio Management
- View invested amount and returns
- Track holdings in real time (mock data / API-based)
- Order history (buy/sell)

### 🧩 General
- Responsive UI inspired by Zerodha
- RESTful backend APIs
- Clean and modular code structure

---

## 🛠 Tech Stack

### Frontend
- React
- JavaScript (ES6+)
- HTML5 & CSS3
- Tailwind CSS / Bootstrap (if used)
- Axios

### Backend
- Node.js
- Express.js
- JWT (JSON Web Tokens)
- bcrypt

### Database
- MongoDB
- Mongoose

### Tools & Others
- Git & GitHub
- Postman
- VS Code

---

## 📂 Project Structure

```text
TradeNova/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
│
└── README.md
