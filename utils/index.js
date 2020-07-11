import { createStore, applyMiddleware } from "redux";
import rootReducer from "../src/services/reducers";
import { middleWare } from '../src/services/store'

import checkPropTypes from 'check-prop-types';

// find test attribute to render it when test
export let findByTestAttr = (component, attr) => {
    const wrapper = component.find(`[data-test="${attr}"]`)
    return wrapper;
}

// check props
export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

// create test store for testing
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}