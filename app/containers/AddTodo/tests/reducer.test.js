import expect from 'expect';
import addTodoReducer from '../reducer';
import { fromJS } from 'immutable';

describe('addTodoReducer', () => {
  it('returns the initial state', () => {
    expect(addTodoReducer(undefined, {})).toEqual(fromJS({}));
  });
});
