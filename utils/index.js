/**
 * Find data-test in component
 * @param {Component} component 
 * @param {String} attr 
 */
export const findAttribute = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
}