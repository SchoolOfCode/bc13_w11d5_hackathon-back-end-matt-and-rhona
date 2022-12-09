import { pool } from "../db/index.js";

export async function getRatingsByUser(id) {
  const data = await pool.query(
    `SELECT * FROM film_ratings
     WHERE user_id = $1;`, [id]);
  return data.rows;
}

export async function postRating(ratingItem) {
  const data = await pool.query(
    `INSERT INTO film_ratings (
      film_id,
      film_title,
      rating,
      user_id
    ) VALUES ($1,$2,$3,$4) RETURNING *;`,
    [ratingItem.film_id, ratingItem.film_title, ratingItem.rating, ratingItem.rating, ratingItem.user_id]
  );
  return data.rows[0];
}