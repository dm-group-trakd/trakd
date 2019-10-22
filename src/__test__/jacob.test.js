import React from 'react';
import ReactDOM from 'react-dom';
import {updateWeightGoal, updateCarbGoal, updateCalorieGoal} from '../redux/reducers/userReducer';
import Settings from '../components/Settings/Settings.js'
import {act, Simulate} from 'react-dom/test-utils';


//unit tests

test('Test to see type of updateWeightGoal == "UPDATE_WEIGHT_GOAL" ', () => {
    expect(updateWeightGoal(123).type).toBe("UPDATE_WEIGHT_GOAL")
})

test('Test to see type of updateCarbGoal == "UPDATE_CARB_GOAL" ', () => {
    expect(updateCarbGoal(123).type).toBe("UPDATE_CARB_GOAL")
})

test('Test to see type of updateCalorieGoal == "UPDATE_CALORIE_GOAL" ', () => {
    expect(updateCalorieGoal(123).type).toBe("UPDATE_CALORIE_GOAL")
})

// test('Testing axios', () => {
//     expect(updateCalorieGoal(123).type).toBe("UPDATE_CALORIE_GOAL")
//     expect(updateCalorieGoal(123).payload).rejects.toEqual({})
// })



//component tests
let container = null;

beforeEach(()=> {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(()=> {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
})

test('Testing handleInput to successfully update the state with the string input', () => {
    act(() => {
        ReactDOM.render(<Settings />, container)
    })

    const input = container.getElementById("#outlined-Phone_Number-input");
    input.value = 1234;
    Simulate.change(input);
    Simulate.click(container.getElementById("#update_phone_number"));
    const state_phone_number = this.state.phone_number;
    expect(state_phone_number.textContent).toBe(1234);
})

