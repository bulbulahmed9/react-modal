import React from 'react';
import { shallow } from 'enzyme'
import App from './App';
import { findByTestAttr } from '../utils/index'

describe("App component", () => {

  const setUp = (props = {}) => {
    const component = shallow(<App {...props} />)
    return component;
  }

  let component;
  beforeEach(() => {
    component = setUp()
  })


  test('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'app')
    expect(wrapper.length).toBe(1)
  })

})
