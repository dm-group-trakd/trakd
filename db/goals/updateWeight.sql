update goals
set weight_goal =$1
where user_id = $2
returning *;