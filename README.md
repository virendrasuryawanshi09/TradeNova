# TradeNova – Zerodha Clone

TradeNova is a full-stack paper trading platform built using the MERN stack, designed to simulate real-world stock trading workflows with a clean, scalable architecture.

Engineered to mirror core functionalities of platforms like Zerodha, TradeNova enables users to analyze stocks, execute trades, and manage portfolios in a realistic trading environment — without financial risk.

This project demonstrates strong capabilities in full-stack development, REST API design, authentication systems, and state management, making it a production-style portfolio project.
TradeNova is a **paper-trading** platform created for learning and portfolio purposes only.
---

## Features

### Authentication
- User registration & login
- Secure password hashing using bcrypt
- JWT-based authentication

### Trading Features
- View available stocks
- Buy and sell stocks (paper trading)
- Track open and closed positions
- Portfolio balance overview

### Portfolio Management
- View invested amount and returns
- Track holdings in real time (mock data / API-based)
- Order history (buy/sell)

### General
- Responsive UI inspired by Zerodha
- RESTful backend APIs
- Clean and modular code structure

---

## Tech Stack

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

## Project Structure

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
