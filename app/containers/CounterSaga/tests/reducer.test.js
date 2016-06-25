import expect from 'expect';
import counterSagaReducer from '../reducer';
import { fromJS } from 'immutable';

describe('counterSagaReducer', () => {
  it('returns the initial state', () => {
    expect(counterSagaReducer(undefined, {})).toEqual(fromJS({}));
  });
});
