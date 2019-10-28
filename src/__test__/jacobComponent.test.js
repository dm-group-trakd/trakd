import React from 'react'
// import ReactDOM from 'react-dom';
// import {act, Simulate} from 'react-dom/test-utils';
import Enzyme, {shallow, mount, unmount} from "enzyme"
import {Provider} from "react-redux"
import configureMockStore from "redux-mock-store"
import Carbs from '../components/carbs/Carbs';
import Dashboard from '../components/Dashboard/Dashboard';
import AddNutrition from '../components/AddNutrition/AddNutrition';
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});

describe("Fat Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Carbs />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});

describe("Dashboard Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <Dashboard />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});

describe("AddNutrition Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
                <Provider store={store}>
                    <AddNutrition />
                </Provider>
            ).exists()
        ).toBe(true);
    });
});

describe('AddNutrition', () => {
        it('activate button with click for handle-search button', () => {
            const component = mount(<AddNutrition.WrappedComponent />);
            component
                .find('button#handle-search')
                .simulate('click', null);
            expect(component).toMatchSnapshot();
            component.unmount();
        });
        
        it('setState of searchedFood when value ', () => {
            const component = mount(<AddNutrition.WrappedComponent />);
            component
                .find('input#outlined-Search-Food-input')
                .simulate('change', {target: {value: 'Test'}});
            expect.setState({searchedFood: 'Test'});
            component.unmount();
        });
});

// let container = null;

// beforeEach(()=> {
//     container = document.createElement('div');
//     document.body.appendChild(container);
// })

// afterEach(()=> {
//     ReactDOM.unmountComponentAtNode(container);
//     document.body.removeChild(container);
//     container = null;
// })

// test(`StudentQuestions should render properly`, () => {
//     act(() => {
//         ReactDOM.render(<AddNutrition.WrappedComponent />, container)
//     })

//     const firstH1 = document.querySelector('h1:nth-child(1)');
//     expect(firstH1.textContent).toBe('Add Food')
// })

