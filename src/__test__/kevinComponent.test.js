import React from 'react'
import ReactDOM from "react-dom";
import Calories from "../components/calories/Calories"
import Food from "../components/Food/Food"
import Login from "../components/Login/Login"
import Enzyme, {shallow, mount, unmount} from "enzyme"
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import Adapter from 'enzyme-adapter-react-16'
import {getFood} from '../redux/reducers/foodReducer';
import {getGoals, updateUsername} from '../redux/reducers/userReducer';
import {deleteFood} from '../redux/reducers/foodReducer';
import {loginUser, getSession} from '../redux/reducers/userReducer';
import { act, Simulate } from "react-dom/test-utils"
import About from "../components/About/About"

Enzyme.configure({adapter: new Adapter() })


const mockStore = configureMockStore();
const store = mockStore({
    userReducer:{},
    foodReducer:{}
});


let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
})

afterEach(() => {
  document.body.removeChild(container);
  container = null;
})


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
describe('calories', () => {   
    test(`calories should render properly`, () => {
        act(() => {
            ReactDOM.render(
                <About/>
            , container)
        })
        const firsth1 = document.querySelector('h1:nth-child(1)');
        expect(firsth1.textContent).toBe('Trakd Developers');
    
    })
    test(`calories should render properly`, () => {
        act(() => {
            ReactDOM.render(
                <About/>
            , container)
        })
        const secondh1 = document.getElementById('kevin-hernandez');
        expect(secondh1.textContent).toBe('Kevin Hernandez');
    })
});
