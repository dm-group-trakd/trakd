SELECT *
from users
INNER JOIN nutrition
on users.user_id =nutrition.user_id
where users.user_id = $1
order by nutrition_id desc
