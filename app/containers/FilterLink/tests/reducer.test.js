import expect from 'expect';
import filterLinkReducer from '../reducer';
import { fromJS } from 'immutable';

describe('filterLinkReducer', () => {
  it('returns the initial state', () => {
    expect(filterLinkReducer(undefined, {})).toEqual(fromJS({}));
  });
});
