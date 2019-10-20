const bcrypt = require ('bcryptjs')

module.exports = {


    getUser: function(req,res) {
        console.log('hit getUser')
        if(req.session.user) {
            res.status(200).json(req.session.user)
        }
    },

    registerUser: async function (req, res) {
        const {first_name, last_name, username, password, email, phone_number, avatar, weight} = req.body;
        const db = req.app.get("db");
        db.auth.checkForUsername(username, email).then(count => {
            if(+count[0].count === 0) {
                bcrypt.hash(password, 12).then(hash => {
                    db.auth.register(first_name, last_name, username, hash, email, phone_number, avatar, weight).then(newUser => {
                        req.session.user = {
                            user_id: newUser[0].user_id,
                            first_name: newUser[0].first_name,
                            last_name: newUser[0].last_name,
                            username: newUser[0].username,
                            email: newUser[0].email,
                            phone_number: newUser[0].phone_number,
                            avatar: newUser[0].avatar
                        }
                        res.status(200).json(req.session.user)
                    })
                })
            }
            else{
                res.status(409).json({Error:"Username or Email already Exists."})
            }
        })
    },
    
    loginUser: function(req, res) {
        const {username, password} = req.body;
        const db = req.app.get("db");
        db.auth.getPasswordViaUsername(username).then(user => {
            let hash = user[0].password;
        
            bcrypt.compare(password, hash).then(areSame => {
                console.log("Hiiit")
                console.log(areSame)
                if(areSame) {
                    req.session.user = {
                        user_id:user[0].user_id,
                        first_name:user[0].first_name,
                        last_name:user[0].last_name,
                        username:user[0].username,
                        email: user[0].email,
                        phone_number:user[0].phone_number,
                        avatar:user[0].avatar,
                        weight:user[0].weight
                    }
                    res.status(200).json(req.session.user);
                    
                } else {
                    res.status(401).json({
                        error: "Username or Password incorrect"
                    })
                }
            })
        })
    },
    logOut:function(req,res){
        req.session.destroy();
        return res.sendStatus(200)
    }
}
