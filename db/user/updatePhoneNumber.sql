UPDATE users 
set phone_number = $1
where user_id = $2
returning *;