import React from "react";
import ReactDOM from "react-dom";

import App from "../App";

import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import renderer from "react-test-renderer";

Enzyme.configure({ adapter: new Adapter() });


//testing state manipulation within App component
describe("App", () => {

    //test render entire app
    test("renders", () => {
        const wrapper = mount(<App />);
        expect(wrapper.exists()).toBe(true);
    });

    //test large portfolio card button click
    test("renders '<ExampleProject />' component when a LARGE portfolio card is clicked", () => {
        const wrapper = shallow(<App />);
        const LargeCard1 = wrapper.find("LargeCard").at(0);
        let ExampleProject = wrapper.find("ExampleProject");

        expect(LargeCard1.exists()).toBe(true);
        expect(ExampleProject.exists()).toBe(false);

        LargeCard1.simulate("click");
        ExampleProject = wrapper.find("ExampleProject");
        expect(ExampleProject.exists()).toBe(true);
    });

    //test small portfolio card button click
    test("renders '<ExampleProject />' component when a SMALL portfolio card is clicked", () => {
        const wrapper = shallow(<App />);
        const SmallCard1 = wrapper.find("SmallCard").at(0);
        let ExampleProject = wrapper.find("ExampleProject");

        expect(SmallCard1.exists()).toBe(true);
        expect(ExampleProject.exists()).toBe(false);

        SmallCard1.simulate("click");
        ExampleProject = wrapper.find("ExampleProject");
        expect(ExampleProject.exists()).toBe(true);
    });

});

