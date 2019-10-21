
module.exports = {

    getGoals: async (req, res) => {
        const {user_id} = req.session.user
        const db = req.app.get('db')

        const allGoals = await db.goals.getGoals(user_id)
        res.status(200).json(allGoals)
    }, 


    updateWeightGoal: (req, res) => {
        const { user_id } = req.session.user
        const { weight_goal } = req.body
        const db = req.app.get('db')
        const updatedWeight = db.goals.updateWeight(weight_goal, user_id)
        res.status(200).json(updatedWeight)

    },

    updateCalorieGoal: (req, res) => {
        const { user_id } = req.session.user
        const { calorie_goal } = req.body
        const db = req.app.get('db')
        const updatedCalorie = db.goals.updateCalorie(calorie_goal, user_id)
        res.status(200).json(updatedCalorie)
    },

    updateProteinGoal: (req, res) => {
        const { user_id } = req.session.user
        const { protein_goal } = req.body
        const db = req.app.get('db')
        const updatedProtein = db.goals.updateProtein(protein_goal, user_id)
        res.status(200).json(updatedProtein)
    },

    updateFatGoal: (req, res) => {
        const { user_id } = req.session.user
        const { fat_goal } = req.body
        const db = req.app.get('db')
        const updatedFat = db.goals.updateFat(fat_goal, user_id)
        res.status(200).json(updatedFat)
    },

    updateCarbsGoal: (req, res) => {
        const { user_id } = req.session.user
        const { carbs_goal } = req.body
        const db = req.app.get('db')
        const updatedCarbs = db.goals.updateCarbs(carbs_goal, user_id)
        res.status(200).json(updatedCarbs)
    }
}