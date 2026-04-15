import express from "express";
import {
  getMovies,
  getShows,
  getSeats,
} from "../controllers/movieController.js";

const router = express.Router();

router.get("/", getMovies);
router.get("/shows/:id", getShows);
router.get("/seats/:id", getSeats);

export default router;