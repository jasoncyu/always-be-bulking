/*
 *
 * TodoList actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_TODO,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function toggleTodoAction(id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}
