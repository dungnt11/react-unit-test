import { types } from '../src/actions/types';
import postReducer from '../src/reducers/posts/reducer';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if receiving type', () => {

    const posts = [{ title: 'Test title' }, { title: 'Test title1' }];
    const newState = postReducer(undefined, {
      type: types.GET_POSTS,
      payload: posts
    });

    expect(newState).toEqual(posts);
  });
});