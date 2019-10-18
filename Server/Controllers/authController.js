const bcrypt = require ('bcryptjs')

module.exports = {
    registerUser: function(req, res) {
        const {first_name, last_name, username, password, email, phone_number, avatar, weight} = req.body;
        const db = req.app.get("db");
        db.checkForUsername(username, email).then(count => {
            if(+count[0].count === 0) {
                bcrypt.hash(password, 12).then(hash => {
                    db.register(first_name, last_name, username, hash, email, phone_number, avatar, weight).then(() => {
                        req.session.user = {
                            userid:userid[0].user_id,
                            first_name,
                            last_name,
                            username,
                            email,
                            avatar,
                        }
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
        db.getPasswordViaUsername(username).then(user => {
            let hash = user[0].hash;
            console.log(user[0]);
            bcrypt.compare(password, hash).then(areSame => {
                if(areSame) {
                    req.session.user = {
                        id:user[0].id,
                        firsname:user[0].first_name,
                        lastname:user[0].last_name,
                        username,
                        email: user[0].email,
                        phoneNumber:user[0].phone_number,
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
