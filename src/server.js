import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";
import { auth } from "./middleware/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ Sample route (for structure demo)
app.get("/test", (req, res) => {
  res.send("Server structure working");
});

// ✅ Example protected route using middleware
app.get("/secure", auth, (req, res) => {
  res.json({ message: "Protected route accessed", user: req.user });
});

// 🚀 START
app.listen(process.env.PORT || 8080, () => {
  console.log("Structured server running");
});