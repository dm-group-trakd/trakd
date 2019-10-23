INSERT INTO nutrition 
(calories, protein, fat, carbs,food)
values
($1,$2,$3,$4,$5)
returning *
