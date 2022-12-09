import express from "express";
import { getRatingsByUser, postRating } from "../models/ratings.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  console.log('get/:id')
  const id = req.params.id
  const data = await getRatingsByUser(id);
  console.log(data)
  res.json({ success: true, payload: data });
});

router.post("/", async (req, res) => {
  const ratingItem = req.body;
  console.log(ratingItem)
  const result = await postRating(ratingItem);
  res.status(201).json({ success: true, payload: result });
});

export default router;