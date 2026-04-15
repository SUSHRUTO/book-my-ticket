import pg from "pg";

export const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "movie_db",
  password: "Postgres@1234",
  port: 5432,
});