CREATE TABLE users (
user_id SERIAL PRIMARY KEY,
first_name VARCHAR(40) NOT NULL,
last_name VARCHAR (40) NOT NULL,
username VARCHAR (50) NOT NULL,
password TEXT NOT NULL,
email TEXT NOT NULL,
phone_number INTEGER NOT NULL,
avatar TEXT NOT NULL,
weight FLOAT NOT NULL
);

CREATE TABLE nutrition (
nutrition_id SERIAL PRIMARY KEY,
user_id INTEGER, 
calories INTEGER, 
protein INTEGER,
fat INTEGER, 
carbs INTEGER
FOREIGN KEY (user_id) REFERENCES users(user_id);
);
CREATE TABLE food (
food_id SERIAL PRIMARY KEY,
nutrition_id INTEGER,
user_id INTEGER, 
food_name TEXT NOT NULL,
FOREIGN KEY (user_id) REFERENCES users(user_id),
FOREIGN KEY (nutrition_id) REFERENCES nutrition(nutrition_id)
);

CREATE TABLE goals (
goals_id SERIAL PRIMARY KEY,
user_id INTEGER,
weight_goal FLOAT,
calorie_goal INTEGER,
protein_goal INTEGER,
fat_goal INTEGER,
carbs_goal INTEGER,
FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE tips (
tips_id SERIAL PRIMARY KEY,
tips VARCHAR(255) NOT NULL )
