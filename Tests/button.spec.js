import React from 'react';
import { shallow } from 'enzyme';
import { checkProps, findAttribute } from '../utils';
import Button from '../src/components/button';

describe('Button component', () => {
  describe('Checking proptypes', () => {

    it('Should NOT throw a warning', () => {
      const expectProps = {
        buttonText: 'Example Button Text',
        emitEvent: () => {

        }
      }
      const propsError = checkProps(Button, expectProps);
      expect(propsError).toBeUndefined();

    });

  });

  describe('Renders', () => {
    let wrapper;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn();
      const props = {
        buttonText: 'Example Button Text',
        emitEvent: mockFunc
      }
      wrapper = shallow(<Button {...props} />);
    })

    it('Should Render a button', () => {
      const button = findAttribute(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });

    it('Should emit callback on click element', () => {
      const button = findAttribute(wrapper, 'buttonComponent');
      button.simulate('click');
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
  });
});
