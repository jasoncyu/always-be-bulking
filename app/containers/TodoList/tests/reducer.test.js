import expect from 'expect';
import todoListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('todoListReducer', () => {
  it('returns the initial state', () => {
    expect(todoListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
