delete from nutrition
where nutrition_id = $1;

SELECT * from nutrition 
WHERE user_id = $2;