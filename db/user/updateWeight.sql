UPDATE users
set weight = $1
where user_id = $2
returning *;