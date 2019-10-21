
module.exports = {
    updateWeightGoal: (req, res) => {
        const { user_id } = req.session.user
        const { weight_goal } = req.body
        const db = req.app.get('db')
        const updatedWeight = db.goal.updateWeight(weight_goal, user_id)
        res.status(200).json(updatedWeight)

    },

    updateCalorieGoal: (req, res) => {
        const { user_id } = req.session.user
        const { calorie_goal } = req.body
        const db = req.app.get('db')
        const updatedCalorie = db.goal.updateCalorie(calorie_goal, user_id)
        res.status(200).json(updatedCalorie)
    },

    updateProteinGoal: (req, res) => {
        const { user_id } = req.session.user
        const { protein_goal } = req.body
        const db = req.app.get('db')
        const updatedProtein = db.goal.updateProtein(protein_goal, user_id)
        res.status(200).json(updatedProtein)
    },

    updateFatGoal: (req, res) => {
        const { user_id } = req.session.user
        const { fat_goal } = req.body
        const db = req.app.get('db')
        const updatedFat = db.goal.updateFat(fat_goal, user_id)
        res.status(200).json(updatedFat)
    },

    updateCarbsGoal: (req, res) => {
        const { user_id } = req.session.user
        const { carbs_goal } = req.body
        const db = req.app.get('db')
        const updatedCarbs = db.goal.updateCarbs(carbs_goal, user_id)
        res.status(200).json(updatedCarbs)
    }
}