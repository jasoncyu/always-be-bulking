/*
 *
 * CounterSaga reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  INCREMENT,
} from './constants';

const initialState = fromJS({
  // Counter value
  value: 0,
});

function counterSagaReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('value', state.get('value') + 1)
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default counterSagaReducer;
