import { pool } from "../db/index.js";

export async function getRatingsByUser(id) {
  const data = await pool.query(
    `SELECT * FROM ratings
     WHERE profile_id = $1;`, [id]);
  return data.rows;
}

export async function postRating(ratingItem) {
  const data = await pool.query(
    `INSERT INTO ratings (
      film_id,
      title,
      rating,
      profile_id
    ) VALUES ($1,$2,$3,$4) RETURNING *;`,
    [ratingItem.film_id, ratingItem.title, ratingItem.rating, ratingItem.profile_id]
  );
  return data.rows[0];
}