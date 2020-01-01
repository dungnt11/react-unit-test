import React from 'react';
import { shallow } from 'enzyme';

import Headline from '../src/components/headline';

import { findAttribute, checkProps } from '../utils';
import { checkPropTypes } from 'prop-types';

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
}

describe('Headline Component', () => {

  describe('Checking PropTypes', () => {

    it('Should not throw a warning', () => {

      const expectedProps = {
        header: 'test header',
        desc: 'test desc',
        tempArr: [{
          name: 'test name',
          age: 20,
          married: false,
        }]
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });

  });

  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test desc",
      };
      wrapper = setUp(props);
    });

    it('Should render without error', () => {
      const component = findAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(1);
    });

    it('Should render a H1', () => {
      const h1 = findAttribute(wrapper, 'header');
      expect(wrapper.length).toBe(1);
    });

    it('Should render a desc', () => {
      const desc = findAttribute(wrapper, 'descWrapper');
      expect(desc.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it('Should render without props', () => {
      const component = findAttribute(wrapper, 'HeadlineComponent');
      expect(component.length).toBe(0);
    });
  });

});