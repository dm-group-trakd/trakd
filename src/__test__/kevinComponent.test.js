import React from 'react'
import ReactDOM from 'react-dom'
// import {act, Simulate} from "react-dom/test-utils"
import Calories from "../components/calories/Calories"
import Enzyme, {shallow} from "enzyme"
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import Adapter from 'enzyme-adapter-react-16'
// import Adapter from 'enzyme-adapter-react-15';

// let container = null
const mockStore = configureMockStore();
const store = mockStore({});

// beforeEach(()=>{
//     container = document.createElement("div")
//     document.body.appendChild(container)
// })
// afterEach(()=>{
//     document.body.removeChild(container)
//     container =null
// })
describe("calorie component",()=>{
    test("can render properly", ()=>{
        expect(
            shallow(
                <Provider store = {store}>
                    <Calories/>
                </Provider>
            ).exists()
        ).toBe(true)
    })
})