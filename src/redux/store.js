import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import foodReducer from './reducers/foodReducer';

const rootReducer = combineReducers({
    userReducer,
    foodReducer
});

export default createStore(rootReducer, applyMiddleware(promise))