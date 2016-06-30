import expect from 'expect';
import viewSubredditsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('viewSubredditsReducer', () => {
  it('returns the initial state', () => {
    expect(viewSubredditsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
