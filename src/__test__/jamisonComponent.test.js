// import React from 'react'
// import Enzyme, {shallow} from "enzyme"
// import {Provider} from "react-redux"
// import configureMockStore from "redux-mock-store"
// import ProteinChart from '../components/ProteinChart/ProteinChart'
// import Settings from "../components/Settings/Settings"
// import Nav from "../components/Nav/Nav"
// import Adapter from "enzyme-adapter-react-16"

// Enzyme.configure({adapter: new Adapter() })

// const mockStore = configureMockStore();
// const store = mockStore({});
// const clickFn = jest.fn()
// describe("ProteinChart Component", () => {
//     test("should render without throwing an error", () => {
//         expect(
//             shallow(
//               <Provider store={store}>
//                   <ProteinChart /> 
//               </Provider>
//           ).exists()
//           ).toBe(true);
//         });
//     });
    
//     it('should be possible to activate button with click', () => {
//         const component = mount(<ProteinChart.WrappedComponent />);
//         component
//             .find('button#handle-search')
//             .simulate('click', null);
//         expect(component).toMatchSnapshot();
//         component.unmount();
//     });

// describe("Settings Component", () => {
//     test("should render without throwing an error", () => {
//         expect(
//             shallow(
//                 <Provider store={store}>
//                     <Settings /> 
//                 </Provider>
//             ).exists()
//             ).toBe(true);
//         });
//     });
    
//     describe("Nav Component", () => {
//         test("should render without throwing an error", () => {
//             expect(
//                 shallow(
//                     <Provider store={store}>
//                     <Nav /> 
//                 </Provider>
//             ).exists()
//             ).toBe(true);
//         });
//     });

    