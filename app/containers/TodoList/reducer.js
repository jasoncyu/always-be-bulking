/*
 *
 * TodoList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_TODO,
  DEFAULT_ACTION,
  TOGGLE_TODO,
  SAVE_TODOS,
} from './constants';
import {
  SET_VISIBILITY_FILTER,
} from '../FilterLink/constants'

import firebase from 'firebase'

const initialState = fromJS({
  todos: [],
  visibilityFilter: 'SHOW_ALL',
});

function todoListReducer(state = initialState, action) {
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
    case TOGGLE_TODO:
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
    case SAVE_TODOS:
      firebase.database().ref('/todos').set(state.get('todos').toJS()).then(() => {
        console.log('saving done');
      })
      return state
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default todoListReducer;
