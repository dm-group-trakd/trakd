update goals
set weight_goal =$1
inner join users
on users.users_id = goals.users_id
where user_id = $2
returning *;