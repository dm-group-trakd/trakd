import axios from 'axios';

const initialState = {
    nutrition_id: 0,
    food: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0
}

//string literals
const GET_FOOD = 'GET_FOOD';
const ADD_FOOD = 'ADD_FOOD';
const DELETE_FOOD = 'DELETE_FOOD';

//functions
export function getFood() {
    return {
        type: GET_FOOD,
        payload: axios.get(`/api/food`)
    };
}

export function addFood(food) {
    return {
        type: ADD_FOOD,
        payload: axios.post(`/api/food`, food)
    };
}

export function deleteFood(nutrition_id) {
    return {
        type: DELETE_FOOD,
        payload: axios.get(`/api/food/${nutrition_id}`)
    };
}


//reducer function
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case `${GET_FOOD}_FULFILLED`:
            return{
                ...state,
                nutrition_id: payload.data.nutrition_id,
                food: payload.data.food,
                calories: payload.data.calories,
                fat: payload.data.fat,
                carbs: payload.data.carbs,
                protein: payload.data.protein
            }
        case `${ADD_FOOD}_FULFILLED`:
            return{
                ...state,
                nutrition_id: payload.data.nutrition_id,
                food: payload.data.food,
                calories: payload.data.calories,
                fat: payload.data.fat,
                carbs: payload.data.carbs,
                protein: payload.data.protein
            }
        case `${DELETE_FOOD}_FULFILLED`:
            return{
                ...state
            }
        default: return state
    }
}

