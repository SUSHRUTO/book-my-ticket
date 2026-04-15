import { pool } from "../config/db.js";

export const getMovies = async (req, res) => {
  const result = await pool.query("SELECT * FROM movies");
  res.send(result.rows);
};

export const getShows = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM shows WHERE movie_id = $1",
    [req.params.id]
  );
  res.send(result.rows);
};

export const getSeats = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM seats WHERE show_id = $1",
    [req.params.id]
  );
  res.send(result.rows);
};