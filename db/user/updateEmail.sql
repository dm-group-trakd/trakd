UPDATE users 
set email = $1
where user_id = $2
returning *