import { checkPropTypes } from "prop-types";

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