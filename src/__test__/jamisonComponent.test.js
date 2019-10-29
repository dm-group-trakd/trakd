import React from 'react';
import Enzyme, {shallow, mount, unmount} from "enzyme";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import ProteinChart from "../components/ProteinChart/ProteinChart";
import Settings from "../components/Settings/Settings";
import Nav from "../components/Nav/Nav";
// import Register from "../components/Register/Register";
import Adapter from "enzyme-adapter-react-16";
import ReactDOM from 'react-dom';
import {act, Simulate} from 'react-dom/test-utils';

let container = null;

Enzyme.configure({adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({
    userReducer: {}
});
// const clickFn = jest.fn()

beforeEach(()=> {
    container = document.createElement('div');
    document.body.appendChild(container);
})

afterEach(()=> {
    ReactDOM.unmountComponentAtNode(container);
    document.body.removeChild(container);
    container = null;
})

describe("ProteinChart Component", () => {
    test("should render without throwing an error", () => {
        expect(
            shallow(
              <Provider store={store}>
                  <ProteinChart /> 
              </Provider>
          ).exists()
          ).toBe(true);
        });
        test("should render without throwing an error", () => {
            expect(
            shallow(
                <Provider store={store}>
                    <Settings /> 
                </Provider>
            ).exists()
            ).toBe(true);
        });
    
    
        test("should render without throwing an error", () => {
            expect(
                shallow(
                    <Provider store={store}>
                    <Nav /> 
                </Provider>
            ).exists()
            ).toBe(true);
        });
    });

test(`Settings should render properly`, () => {
    act(() => {
        ReactDOM.render(
        <Provider store={store}>
            <Settings/>
        </Provider>
        , container)
    })

    const firstH2 = document.querySelector('h2:nth-child(1)');
    expect(firstH2.textContent).toBe('Settings');

})

test(`Goals should render properly`, () => {
    act(() => {
        ReactDOM.render(
        <Provider store={store}>
            <Settings/>
        </Provider>
        , container)
    })

    const secondH2 = document.getElementById('goals-text-settings');
    expect(secondH2.textContent).toBe('Goals');

})