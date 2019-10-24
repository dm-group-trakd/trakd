INSERT INTO nutrition 
(calories, protein, fat, carbs,food, user_id)
values
($1,$2,$3,$4,$5, $6);

SELECT * FROM nutrition
WHERE user_id = $6;
