import React from "react";
import {shallow} from "enzyme";
import App from "../client/src/components/app.jsx";
import PhotosTab from '../client/src/components/PhotosTab';

// describe("Hello Word test", () => {
//   const wrapper = shallow(<App/>);
//   test('10 Photos', () => {
//     expect(wrapper.text()).toEqual("10 Photos");
//   })
// });

describe('Photos should exist', () => {
  it('should show photos', () => {
    const wrapper = shallow(<PhotosTab/>);
      expect(wrapper.exists()).toBe(true);
  })
});