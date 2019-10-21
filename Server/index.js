require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const massive = require('massive')
const session = require('express-session')
const {registerUser, loginUser, logOut, getUser} = require('./Controllers/authController')

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



app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`)
})