import expect from 'expect';
import workoutListReducer, * as reducer from '../reducer';
import { fromJS } from 'immutable';

describe('workoutListReducer', () => {
  it('returns the initial state', () => {
    expect(workoutListReducer(undefined, {})).toEqual(reducer.initialState);
  });
});
