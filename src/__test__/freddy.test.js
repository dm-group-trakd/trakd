import React from 'react'
import Enzyme, {shallow} from "enzyme"
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import Fat from "../../../trakd/src/components/Fat/Fat"
import Adapter from "enzyme-adapter-react-16"
import Register from "../../../trakd/components/Register/Register"
import About from "../../../trakd/components/About/About"

Enzyme.configure({adapter: new Adapter() })

import {logoutUser, updateUsername, updateEmail, getGoals, deleteUser} from '../redux/reducers/userReducer'
import {deleteFood} from '../redux/reducers/foodReducer'


// UNIT TESTS
describe("Logging out user, should be functional", () => {
    test("Logging out a user should return an empty object", () => {
        expect(logoutUser()).toEqual({"type": "LOGOUT_USER"})
    })
})

describe("Updating username, should be functional", () => {
    test("Updating username should return an new username", () => {
        expect(updateUsername("freddy12").type).toBe("UPDATE_USERNAME")
    })
})

describe("Updating email, should be functional", () => {
    test("Updating email should return an new email", () => {
        expect(updateEmail("freddy12@mfmf.com").type).toBe("UPDATE_EMAIL")
    })
})

describe("Getting all goals, should be functional", () => {
    test("Getting goals should return the users goals", () => {
        expect(getGoals().type).toBe("GET_GOALS")
    })
})
describe("deleting user should return correct reducer type", () => {
    test("deleting user should delete user", () => {
        expect(deleteFood().type).toBe("DELETE_FOOD")
    })
})

// COMPONENT TESTING 

const mockStore = configureMockStore();
const store = mockStore({});


describe("Fat Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Fat />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});
describe("Register Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Register />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});
describe("About Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <About />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});

it('should be possible to activate button with click', () => {
    const component = mount(<ProteinChart.WrappedComponent />);
    component
        .find('button#showCalories')
        .simulate('click', null);
    expect(component).toMatchSnapshot();
    component.unmount();
});

it('should be possible to activate button with click', () => {
    const component = mount(<Login.WrappedComponent />);
    component
        .find('button#login-button')
        .simulate('click', null);
    expect(component).toMatchSnapshot();
    component.unmount();
});

// test("eaten text is updated", () => {
//     const wrapper = shallow(
//         <Provider store={store}>
//         <Fat />
//     </Provider>)

//     wrapper.find("input").simulate("change", {
//         target: {value: "12"}
//     })
//     expect(wrapper.find("input").value).toEqual("12")
// })

// describe('Fat', ()=> {
//     const component = shallow(
//         <Provider store={store}>
//             <Fat />
//         </Provider>)

//         component
//         .find('button#FatButton')
//         .simulate('click')
//         expect(clickFn).toHaveBeenCalled()
// })



