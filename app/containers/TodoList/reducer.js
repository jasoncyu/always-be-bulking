/*
 *
 * TodoList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';
import {
  SET_VISIBILITY_FILTER,
} from '../FilterLink/constants'

const initialState = fromJS({
  todos: [],
  visibilityFilter: 'SHOW_ALL',
});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return fromJS({
        ...state.toJS(),
        todos: [
          ...state.get('todos').toJS(),
          {
            text: action.text,
            completed: false,
          },
        ],
      })
    case 'TOGGLE_TODO':
      return fromJS({
        ...state.toJS(),
        todos: state.get('todos').toJS().map(todo => {
          if (todo.id !== action.id) {
            return todo
          }

          return {
            ...todo,
            completed: !todo.completed,
          }
        }),
      })
    case SET_VISIBILITY_FILTER:
      return state.set(
        'visibilityFilter',
        action.filter,
      )
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default todoListReducer;
