update goals
set carbs_goal =$1
inner join users 
on users.user_id = goals.user_id 
where user_id = $2
returning *