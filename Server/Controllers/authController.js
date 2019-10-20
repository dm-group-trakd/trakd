const bcrypt = require ('bcryptjs')

module.exports = {

    getUser: function(req,res) {
        console.log('hit getUser')
        if(req.session.user) {
            res.status(200).json(req.session.user)
        }
    },
    registerUser: async (req, res) => {
        const {first_name, last_name, username, password, email, phone_number, avatar, weight} = req.body;
        const db = req.app.get("db");

        const foundUser = await db.auth.checkForUsername(username);

        if (foundUser[0]) {
            res.status(409).json("Username Taken");
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            const newUser = await db.auth.register(first_name, last_name, username, hash, email, phone_number, avatar, weight);

            req.session.user = {
                user_id: newUser[0].user_id,
                username: newUser[0].username,
                first_name: newUser[0].first_name,
                last_name: newUser[0].last_name,
                phone_number: newUser[0].phone_number,
                email: newUser[0].email,
                avatar: newUser[0].avatar,
                weight: newUser[0].weight
            };
            console.log(req.session.user)
            res.status(200).json(req.session.user);
        };
    },
    loginUser: async (req, res) => {
        const {username, password} = req.body;
        console.log(username)
        const db = req.app.get("db");
        const foundUser = await db.auth.getPasswordViaUsername(username);

        if(!foundUser[0]){
            res.status(403).json('Username or Password incorrect')
        }else{
            const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)
            if(!isAuthenticated){
                res.status(403).json('Username or Password Incorrect')
            }else {
                req.session.user = {
                    first_name: foundUser[0].first_name,
                    last_name: foundUser[0].last_name,
                    email: foundUser[0].email,
                    user_id: foundUser[0].user_id,
                    username: foundUser[0].username,
                    phone_number: foundUser[0].phone_number,
                    avatar: foundUser[0].avatar,
                    weight: foundUser[0].weight

                }
                console.log(req.session.user)
                res.status(200).json(req.session.user);
            }
        }
    },
    logOut:function(req,res){
        req.session.destroy();
        return res.sendStatus(200)
    }
}
