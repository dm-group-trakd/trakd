INSERT INTO nutrition 
(calories, protein, fat, carbs,food, user_id)
values
($1,$2,$3,$4,$5, $6)
returning *;
