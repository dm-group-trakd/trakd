update goals
set carbs_goal =$1
where user_id = $2
returning *;