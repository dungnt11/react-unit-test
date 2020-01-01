import App from '../src/App';
import { shallow } from 'enzyme';
import { findAttribute, testStote } from '../utils';
import React from 'react';

const setUp = (initState = {}) => {
  const store = testStote(initState);
  /** https://airbnb.io/enzyme/docs/api/ShallowWrapper/dive.html */
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
}

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    const initState = {
      posts: [{
        title: 'Example title 1',
        body: 'Example body 1',
      }, {
        title: 'Example title 2',
        body: 'Example body 2',
      }, {
        title: 'Example title 3',
        body: 'Example body 3',
      }]
    };

    wrapper = setUp(initState);
  })

  it('Should render without error', () => {
    const component = findAttribute(wrapper, 'appComponent');
    expect(component.length).toBe(1);
  });

})