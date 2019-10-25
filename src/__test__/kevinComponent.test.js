import React from 'react'
import Calories from "../components/calories/Calories"
import Food from "../components/Food/Food"
import Login from "../components/Login/Login"
import Enzyme, {shallow} from "enzyme"
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import Adapter from 'enzyme-adapter-react-16'
import {getFood} from '../redux/reducers/foodReducer';
import {getGoals} from '../redux/reducers/userReducer';
import {deleteFood} from '../redux/reducers/foodReducer';
import {loginUser, getSession} from '../redux/reducers/userReducer';

Enzyme.configure({adapter: new Adapter() })


const mockStore = configureMockStore();
const store = mockStore({});



describe("component",()=>{
    test("can render properly", ()=>{
        expect(
            shallow(
                <Provider store = {store}>
                    <Calories/>
                </Provider>
            ).exists()
        ).toBe(true)
    })
    test("can render properly", ()=>{
        expect(
            shallow(
                <Provider store ={store}>
                    <Food/>
                </Provider>
            )
        )
    })
    test("can render ",()=>{
        expect(
            shallow(
                <Provider store ={store}>
                    <Login/>
                </Provider>
            )
        )
    })
})