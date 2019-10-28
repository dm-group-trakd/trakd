import axios from 'axios';

const initialState = {
    food:[]
}

//string literals
const GET_FOOD = 'GET_FOOD';
const ADD_FOOD = 'ADD_FOOD';
const DELETE_FOOD = 'DELETE_FOOD';
const DELETE_ALL_FOOD = 'DELETE_ALL_FOOD';

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
        payload: axios.delete(`/api/food/${nutrition_id}`)
    };
}

export function deleteAllFood() {
    return {
        type: DELETE_FOOD,
        payload: axios.delete(`/api/food`)
    };
}


//reducer function
export default function reducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case `${GET_FOOD}_FULFILLED`:
            return{
                ...state,
                food: payload.data
            }
        case `${ADD_FOOD}_FULFILLED`:
            return{
                ...state,
                food: payload.data
            }
        case `${DELETE_FOOD}_FULFILLED`:
            return{
                ...state,
                food: payload.data
            }
        case `${DELETE_ALL_FOOD}_FULFILLED`:
            return{
                ...state,
                food: payload.data
            }
        default: return state
    }
}

