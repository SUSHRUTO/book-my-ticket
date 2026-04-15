import { pool } from "../config/db.js";

export const bookSeat = async (req, res) => {
  const { seatId, name } = req.body;

  const conn = await pool.connect();
  await conn.query("BEGIN");

  const result = await conn.query(
    "SELECT * FROM seats WHERE id = $1 AND is_booked = false FOR UPDATE",
    [seatId]
  );

  if (result.rowCount === 0) {
    await conn.query("ROLLBACK");
    return res.send({ error: "Seat already booked" });
  }

  await conn.query(
    "UPDATE seats SET is_booked = true, booked_by = $2 WHERE id = $1",
    [seatId, name]
  );

  await conn.query("COMMIT");
  conn.release();

  res.send({ message: "Booked successfully" });
};