module.exports = {
    getFood: async (req, res) => {
        const { user_id } = req.session.user

        const db = req.app.get('db')
        const gotFood = await db.food.getAllFood(user_id)
        res.status(200).json(gotFood)
    },

    addFood: async (req, res) => {
        const { food_name } = req.body
        const { user_id } = req.session.user

        const db = req.app.get('db')
        const addedFood = await db.food.addFood(food_name, user_id)
        res.status(200).json(addedFood)
    },

    deleteFood: async (req, res) => {
        const { food_name } = req.body
        const {nutrition_id} = req.params
        const db = req.app.get('db')
        const deletedFood =  await db.food.deleteFood(food_name, nutrition_id)
        res.status(200).json(deletedFood)
    }
}