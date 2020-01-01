import { checkPropTypes } from "prop-types";
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../src/reducers';
import { middlewares } from '../src/createStore';

/**
 * Find data-test in component
 * @param {Component} component 
 * @param {String} attr 
 */
export const findAttribute = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
}

/**
 * Check props of component
 * @param {Component} component 
 * @param {Object} expectedProps - object of props
 */
export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
  return propsErr;
}

export const testStote = (initState) => {
  const createStoreWithMidderware = applyMiddleware(...middlewares)(createStore);
  return createStoreWithMidderware(rootReducer, initState);
}