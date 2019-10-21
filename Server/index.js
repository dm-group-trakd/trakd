require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require('massive')
const session = require('express-session')
const {registerUser, loginUser, logOut, getUser} = require('./Controllers/authController')
const {updateAvatar, updatePhoneNumber, updateUsername, updateEmail, updateWeight} = require('./Controllers/userController')
const {updateWeightGoal, updateFatGoal, updateCarbsGoal, updateProteinGoal, updateCalorieGoal, getGoals} = require('./Controllers/goalController')

app.use(express.json())

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log(`Db is listening`)
})

//Auth Controller
app.post('/auth/login', loginUser)
app.post('/auth/register', registerUser)
app.post('/auth/logout', logOut)
app.get('/auth/user', getUser)

//USER SETTINGS
app.put('/api/user/email', updateEmail)
app.put('/api/user/phonenumber', updatePhoneNumber)
app.put('/api/user/avatar', updateAvatar)
app.put('/api/user/username', updateUsername)
app.put('/api/user/weight', updateWeight)

// GOAL SETTINGS
app.get('/api/goals', getGoals)
app.put('/api/goal/weight', updateWeightGoal)
app.put('/api/goal/calorie', updateCalorieGoal)
app.put('/api/goal/carbs', updateCarbsGoal)
app.put('/api/goal/fat', updateFatGoal)
app.put('/api/goal/protein', updateProteinGoal)


app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})