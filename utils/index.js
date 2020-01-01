export const findAttribute = (component, attr) => {
  return component.find(`[data-test='${attr}']`);
}