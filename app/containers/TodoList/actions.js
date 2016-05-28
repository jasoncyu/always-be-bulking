/*
 *
 * TodoList actions
 *
 */

import {
  ADD_TODO,
  DEFAULT_ACTION,
  SET_VISIBILITY_FILTER,
  TOGGLE_TODO,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addTodoAction(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function toggleTodoAction(index) {
  return {
    type: TOGGLE_TODO,
    index,
  };
}

export function setVisibilityFilterAction(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  };
}
