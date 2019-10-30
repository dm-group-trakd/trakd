import React from 'react'
import Enzyme, { shallow, mount } from "enzyme"
import { Provider } from "react-redux"
import configureMockStore from "redux-mock-store"
import Fat from "../../../trakd/src/components/Fat/Fat"
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';
import Adapter from "enzyme-adapter-react-16"
import Register from "../../../trakd/src/components/Register/Register"
import About from "../../../trakd/src/components/About/About"
import { logoutUser, updateUsername, updateEmail, getGoals } from '../redux/reducers/userReducer'
import { deleteFood } from '../redux/reducers/foodReducer'
import Calculator from '../../../trakd/src/components/Calculator/Calculator'
import AddNutrition from '../../../trakd/src/components/AddNutrition/AddNutrition'

Enzyme.configure({ adapter: new Adapter() })

// UNIT TESTS
describe("Logging out user, should be functional", () => {
    test("Logging out a user should return an empty object", () => {
        expect(logoutUser()).toEqual({ "type": "LOGOUT_USER" })
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

describe("Calculator Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Calculator />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});


let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
})
afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
})

test("First H1 in AddNutrition should render properly", () => {
    act(() => {
        ReactDOM.render(<AddNutrition.WrappedComponent />, container)
    })
    const firstH1 = document.querySelector('h1:nth-child(1)');
    expect(firstH1.textContent).toBe('Add Food')
})


