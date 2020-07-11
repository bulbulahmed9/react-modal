import React from 'react';
import { shallow, mount } from 'enzyme'
import Modal from '../Modal';
import { findByTestAttr, testStore, checkProps } from '../../../../utils/index'


const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<Modal store={store} />).childAt(0).dive();
  return wrapper;
};

describe("Modal component", () => {
  // add a div with #modal id to the global body
  const modalRoot = global.document.createElement('div');
  modalRoot.setAttribute('id', 'modal');
  const body = global.document.querySelector('body');
  body.appendChild(modalRoot);

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
    const modalRoot = global.document.querySelector('#modal');
    expect(modalRoot.hasChildNodes()).toBeFalsy();
    const wrapper = findByTestAttr(component, 'modal')
    expect(wrapper.length).toBe(1)
  })

  test('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'modal-content')
    expect(wrapper.length).toBe(1)
  })

  test('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'close')
    expect(wrapper.length).toBe(1)
  })

  test('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'submit')
    expect(wrapper.length).toBe(1)
  })

  test('should render without errors', () => {
    const wrapper = findByTestAttr(component, 'input-field')
    expect(wrapper.length).toBe(2)
  })

  // check props which is get passed from redux
  describe('Checking propsTypes', () => {
    test("Should not throw a warning", () => {
      const expectedProps = {
        closeModal: () => {

        },
        isOpen: true
      }
      const propsError = checkProps(Modal, expectedProps)
      expect(propsError).toBeUndefined();
    })
  })

})