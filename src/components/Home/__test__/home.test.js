import React from 'react';
import { shallow } from 'enzyme'
import Home from '../Home';
import { findByTestAttr, testStore, checkProps } from '../../../../utils/index'
import Modal from '../../Modal/Modal';


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<Home store={store} />).dive();
    return wrapper;
};

describe('Home Component', () => {

    let component;
    beforeEach(() => {
        const initialState = {
            modalReducer: true
        }
        component = setUp(initialState);
    });

    afterEach(() => {
        component.unmount();
    });

    test('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'home')
        expect(wrapper.length).toBe(1)
    })

    test('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'open')
        expect(wrapper.length).toBe(1)
    })

    test('should render without errors', () => {
        const wrapper = findByTestAttr(component, 'modal')
        expect(wrapper.length).toBe(1)
    })

    // check props which is get passed from redux
  describe('Checking propsTypes', () => {
    test("Should not throw a warning", () => {
      const expectedProps = {
        openModal: () => {

        }
      }
      const propsError = checkProps(Modal, expectedProps)
      expect(propsError).toBeUndefined();
    })
  })

})