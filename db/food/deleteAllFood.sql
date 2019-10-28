DELETE FROM nutrition
WHERE user_id = $1;

SELECT * FROM nutrition
WHERE user_id = $1;