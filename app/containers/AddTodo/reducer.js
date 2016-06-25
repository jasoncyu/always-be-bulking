/*
 *
 * AddTodo reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  ADD_TODO,
} from './constants';

const initialState = fromJS({});

function addTodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return fromJS({
        ...state.toJS(),
        todos: [
          ...state.get('todos').toJS(),
          {
            id: action.id,
            text: action.text,
            completed: false,
          },
        ],
      })
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default addTodoReducer;
