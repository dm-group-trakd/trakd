module.exports = {
    getFood: async (req, res) => {
        const { user_id } = req.session.user

        const db = req.app.get('db')
        const gotFood = await db.food.getAllFood(user_id)
        res.status(200).json(gotFood)
    },

    addFood: async (req, res) => {
        const { calories, protein, fat, carbs,food } = req.body
        const { user_id } = req.session.user

        const db = req.app.get('db')
        const addedFood = await db.food.addFood(calories, protein, fat, carbs,food, user_id)
        res.status(200).json(addedFood)
    },

    deleteFood: async (req, res) => {
    
        const {nutrition_id} = req.params
        const db = req.app.get('db')
        const deletedFood =  await db.food.deleteFood(nutrition_id)
        res.status(200).json(deletedFood)
    }
}