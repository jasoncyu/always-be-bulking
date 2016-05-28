import expect from 'expect';
import addWorkoutPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('addWorkoutPageReducer', () => {
  it('returns the initial state', () => {
    expect(addWorkoutPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
