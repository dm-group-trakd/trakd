update users 
set avatar = $1 
where user_id =$2
returning * 