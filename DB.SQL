CREATE TABLE ratings (
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  film_id VARCHAR(255),
  title VARCHAR(255),
  rating INT,
  user_id VARCHAR(255)
);

INSERT INTO ratings (film_id, title, rating, user_id)
VALUES ('1222', 'The Holiday', 5, '3444d');

SELECT * FROM ratings;