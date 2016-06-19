/*
 *
 * TodoList reducer
 *
 */

import Immutable, { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.set(
        'todos',
        state.get('todos').concat(
          Immutable.List.of(Immutable.Map({
            text: action.text,
            completed: false,
          }))
        ))
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default todoListReducer;
