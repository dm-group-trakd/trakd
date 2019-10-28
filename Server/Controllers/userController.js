module.exports = {
    updateUsername: (req, res) => {
        const { user_id } = req.session.user
        const { username } = req.body

        const db = req.app.get("db")

        const updatedUsername = db.user.updateUsername(username, user_id)

        res.status(200).json(updatedUsername)

    },

    updateWeight: (req, res) => {
        const { user_id } = req.session.user
        const { weight } = req.body


        const db = req.app.get('db')

        const updatedWeight = db.user.updateWeight(weight, user_id)

        res.status(200).json(updatedWeight)
    },

    updateEmail: (req, res) => {
        const { user_id } = req.session.user
        const { email } = req.body

        const db = req.app.get('db')
        const updatedEmail = db.user.updateEmail(email, user_id)
        res.status(200).json(updatedEmail)
    },

    updatePhoneNumber: (req, res) => {
        const { user_id } = req.session.user
        const { phone_number } = req.body
        const db = req.app.get('db')
        const updatedPhoneNumber = db.user.updatePhoneNumber(phone_number, user_id)
        res.status(200).json(updatedPhoneNumber)

    },

    updateAvatar: async (req, res) => {
        const { user_id } = req.session.user
        const { avatar } = req.body

        const db = req.app.get('db')
        const updatedAvatar = await db.user.updateAvatar(avatar, user_id)
        res.status(200).json(updatedAvatar)
    },


}