INSERT INTO users
(first_name, last_name, username, password, email, phone_number, avatar, weight)
VALUES
($1, $2, $3, $4, $5, $6, 'https://res.cloudinary.com/kevin14/image/upload/v1569979794/dccchxqmmykzic3ltdcp.png', 0)
RETURNING*;