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
import Settings from '../components/Settings/Settings'

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

const clickFn = jest.fn()
it('activate button with click for handle-updateUsername button', () => {
    const component = shallow(<Provider store = {store}><Settings onClick ={clickFn}/></Provider>);
    component
        .find('button#updateUsername')
        .simulate('click');
        expect(clickFn).toHaveBeenCalled();
})

    it('setState of searchedFood when value ', () => {
        const component = mount(<Provider store ={store}><Settings/></Provider>);  
        component
            .find('input#outlined-Username-input')
            .simulate('change', {target: {value: 'Test'}});
        expect.setState({username: 'Test'});
        component.unmount();
    });
