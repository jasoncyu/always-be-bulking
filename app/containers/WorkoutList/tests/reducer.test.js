import expect from 'expect';
import workoutListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('workoutListReducer', () => {
  it('returns the initial state', () => {
    expect(workoutListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
