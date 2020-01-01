import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findAttribute } from '../utils';
import ListItem from '../src/components/listItem';

describe('List item component', () => {

  describe('Checking Proptypes', () => {

    it('Shoud NOT throw a warning', () => {
      const expectedProps = {
        title: 'Example title',
        desc: 'Example desc'
      }

      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });

  });

  describe('Component Renders', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: 'Example title',
        desc: 'Example desc'
      }
      wrapper = shallow(<ListItem {...props} />)
    })

    it('Should renders without error', () => {
      const component = findAttribute(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    it('Should render title', () => {
      const component = findAttribute(wrapper, 'componentTitle');
      expect(component.length).toBe(1);
    });

    it('Should render desc', () => {
      const component = findAttribute(wrapper, 'componentDesc');
      expect(component.length).toBe(1);
    });

  })

  describe('Should NOT render', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: 'Example desc'
      }
      wrapper = shallow(<ListItem {...props} />);
    })
    it('Should render without title', () => {
      const component = findAttribute(wrapper, 'componentDesc');
      expect(component.length).toBe(0);
    });
  });

});