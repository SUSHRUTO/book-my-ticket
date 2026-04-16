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

```plaintext
book-my-ticket/
│
├── public/ # Frontend files
│ ├── index.html # Home (movies page)
│ ├── shows.html # Show selection
│ ├── seats.html # Seat booking UI
│ ├── login.html # Login page
│ ├── register.html # Registration page
│ ├── verify.html # OTP verification
│ ├── my-bookings.html # User bookings
│ └── images/ # Movie posters
│
├── src/ # Backend structure
│ ├── config/
│ │ └── db.js # Database connection (Neon/PostgreSQL)
│ ├── middleware/
│ │ └── auth.js # Authentication middleware
│ └── server.js # Modular server (structure purpose)
│
├── controllers/ # Route logic (if used)
├── routes/ # API routes (if used)
│
├── index.mjs # Main backend server
├── package.json # Dependencies & scripts
├── .gitignore # Ignore node_modules & .env
├── .env # Environment variables (not pushed)
└── README.md # Project documentation
```

---

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