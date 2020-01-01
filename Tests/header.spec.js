import React from 'react';
import { shallow } from 'enzyme';
import { findAttribute } from '../utils';

import Header from '../src/components/headers';

const setUp = (props = {}) => {
  const header = shallow(<Header { ...props } />);
  // console.log(header.debug()); // hàm này để debug 
  return header;
}



describe('Header component', () => {

  let component;
  
  beforeEach(() => {
    component = setUp();
  })

  it('Should render without error', () => {
    const wrapper = findAttribute(component, 'component-header');
    expect(wrapper.length).toBe(1);
  })

  it('Should render logo', () => {
    const logo = findAttribute(component, 'header-logo');
    expect(logo.length).toBe(1); 
  })



})
