import express from "express";
import pg from "pg";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Postgres@1234",
  database: "movie_db"
});

const PORT = process.env.PORT || 8080;

// 🔐 AUTH MIDDLEWARE
function auth(req, res, next) {
  const userHeader = req.headers["user"];

  if (!userHeader) {
    return res.status(401).json({ error: "Login required" });
  }

  try {
    req.user = JSON.parse(userHeader);
  } catch {
    return res.status(400).json({ error: "Invalid user" });
  }

  next();
}

// 🎬 MOVIES
app.get("/movies", async (req, res) => {
  const result = await pool.query("SELECT * FROM movies");
  res.json(result.rows);
});

// 🎬 SHOWS
app.get("/movies/shows/:movieId", async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM shows WHERE movie_id=$1",
    [req.params.movieId]
  );
  res.json(result.rows);
});

// 💺 SEATS
app.get("/movies/seats/:showId", async (req, res) => {
  const result = await pool.query(
    `SELECT * FROM seats 
     WHERE show_id=$1
     ORDER BY SUBSTRING(seat_number,1,1),
     CAST(SUBSTRING(seat_number,2) AS INT)`,
    [req.params.showId]
  );

  res.json(result.rows);
});

// 🎟️ BOOKING (STRICT)
app.put("/booking", auth, async (req, res) => {
  const { seatId, type } = req.body;
  const user = req.user;

  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    const seatRes = await client.query(
      "SELECT * FROM seats WHERE id=$1 FOR UPDATE",
      [seatId]
    );

    const seat = seatRes.rows[0];

    if (!seat || seat.is_booked) {
      await client.query("ROLLBACK");
      return res.json({ error: "Seat already booked" });
    }

    const row = seat.seat_number.charAt(0);

    const valid =
      (type === "Premium" && row === "A") ||
      (type === "Executive" && row === "B") ||
      (type === "Budget" && ["C","D","E"].includes(row));

    if (!valid) {
      await client.query("ROLLBACK");
      return res.json({ error: "Invalid seat type" });
    }

    // store: name|email|type
    await client.query(
      "UPDATE seats SET is_booked=true, name=$2 WHERE id=$1",
      [seatId, `${user.name}|${user.email}|${type}`]
    );

    await client.query("COMMIT");

    res.json({ message: "Booked successfully" });

  } catch (err) {
    await client.query("ROLLBACK");
    res.status(500).send("Error");
  } finally {
    client.release();
  }
});

// 📊 MY BOOKINGS (FIXED 🔥)
app.get("/my-bookings", auth, async (req, res) => {
  const user = req.user;

  const result = await pool.query(
    "SELECT * FROM seats WHERE is_booked = true"
  );

  const bookings = result.rows
    .filter(seat => {
      if (!seat.name) return false;

      const parts = seat.name.split("|");

      return parts[1] === user.email; // ✅ FIX
    })
    .map(seat => {
      const [name, email, type] = seat.name.split("|");

      const price =
        type === "Premium" ? 300 :
        type === "Executive" ? 200 :
        100;

      return {
        seat: seat.seat_number,
        type,
        price
      };
    });

  const total = bookings.reduce((sum, b) => sum + b.price, 0);

  res.json({ bookings, total });
});

// 🚀 START SERVER
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
