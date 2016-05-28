/*
 *
 * TodoList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_TODO,
  DEFAULT_ACTION,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from './constants';

const initialState = fromJS({});

function todoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false,
          },
        ],
      }
    case DEFAULT_ACTION:
      return state;
    case SET_VISIBILITY_FILTER:
      return {
        ...state,
        visibilityFilter: action.filter,
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.index === action.index) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo
        }),
      }
    default:
      return state;
  }
}

export default todoListReducer;
