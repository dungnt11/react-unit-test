import moxios from 'moxios';
import { testStote } from '../utils';

import { fetchPost } from '../src/actions';

describe('fetch Post action', () => {

  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  })

  test('Store is updated correctly', () => {
    const expectedState = [{
      title: 'Example title 1',
      body: 'Example body 1',
    }, {
      title: 'Example title 2',
      body: 'Example body 2',
    }, {
      title: 'Example title 3',
      body: 'Example body 3',
    }]

    const store = testStote();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      })
    })
    return store.dispatch(fetchPost()).then(() => {
      const newState = store.getState();
      expect(newState.posts).toBe(expectedState);
    })

  })

});