import {updateWeightGoal, updateCarbGoal, updateCalorieGoal} from '../redux/reducers/userReducer';
import {deleteAllFood} from '../redux/reducers/foodReducer';


//unit tests

test('Test to see type of updateWeightGoal == "UPDATE_WEIGHT_GOAL" ', () => {
    expect(updateWeightGoal().type).toBe("UPDATE_WEIGHT_GOAL")
})

test('Test to see type of updateCarbGoal == "UPDATE_CARB_GOAL" ', () => {
    expect(updateCarbGoal().type).toBe("UPDATE_CARB_GOAL")
})

test('Test to see type of updateCalorieGoal == "UPDATE_CALORIE_GOAL" ', () => {
    expect(updateCalorieGoal().type).toBe("UPDATE_CALORIE_GOAL")
})

test('Test to see type of deleteAllFood == "DELETE_ALL_FOOD" ', () => {
    expect(deleteAllFood().type).toBe("DELETE_ALL_FOOD")
})