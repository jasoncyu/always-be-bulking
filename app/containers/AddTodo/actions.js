/*
 *
 * AddTodo actions
 *
 */

import {
  ADD_TODO,
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

let nextTodoID = 0
export function addTodoAction(text) {
  return {
    id: nextTodoID++,
    type: ADD_TODO,
    text,
  }
}
