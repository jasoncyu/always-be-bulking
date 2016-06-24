/*
 *
 * TodoList actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_TODO,
  SAVE_TODOS,
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

/**
 * Save current todo list to server.
 */
export function saveTodosAction() {
  return {
    type: SAVE_TODOS,
  }
}
