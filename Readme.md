# 🎬 Book My Ticket - Movie Booking System

A full-stack movie ticket booking web application built using **Node.js, Express, PostgreSQL, and JavaScript**.

---

## 🚀 Live Application

👉 https://book-my-ticket-7und.onrender.com

---

## ✨ Features

- 🔐 User Authentication (Login/Register with OTP)
- 🎬 Browse Movies
- 🕒 Select Show Timings
- 💺 Seat Booking System (A–E rows)
- 🎟️ Category-based Booking:
  - Premium → Row A
  - Executive → Row B
  - Budget → Rows C, D, E
- 🚫 Strict Seat Validation (Frontend + Backend)
- 📊 My Bookings Section
- 💰 Price Calculation
- 🔒 Middleware-based Authentication

---

## 🛠️ Tech Stack

- **Frontend:** HTML, Tailwind CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (Neon)
- **Deployment:** Render

---

## 📂 Project Structure
book-my-ticket/
│
├── public/ # Frontend files
├── src/ # Middleware & config
├── index.mjs # Main backend server
├── package.json
├── .gitignore
└── README.md


---

## 🔐 Middleware

Custom authentication middleware ensures:
- Only logged-in users can book tickets
- Secure route handling

---

## 📊 Booking Logic

- Premium → Row A
- Executive → Row B
- Budget → Rows C–E
- Backend validates all bookings (no bypass possible)

---

## 🚀 Deployment

- Backend hosted on **Render**
- Database hosted on **Neon PostgreSQL**

---

## 👨‍💻 Author

Developed by **Sushruto Majumdar**

---

## ⭐ Status

✅ Completed  
✅ Fully functional  