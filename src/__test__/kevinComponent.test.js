import React from 'react'
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
import Register from '../components/Register/Register'

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
describe('AddNutrition', () => {   
    it('setState of searchedFood when value ', () => {
        const component = mount(<Register.WrappedComponent />);
        component
            .find('input#outlined-email-input')
            .simulate('change', {target: {value: 'Test'}});
        expect.setState({email: 'Test'});
        component.unmount();
    });
});
