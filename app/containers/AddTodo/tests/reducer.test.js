import expect from 'expect';
import addTodoReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  ADD_TODO,
} from '../constants'

describe('addTodoReducer', () => {
  it('returns the initial state', () => {
    expect(addTodoReducer(undefined, {})).toEqual(fromJS({}));
  });

  /* it('allows you to add todos', () => {
   *   const todoText = 'A todo'
   *   const action = {
   *     type: ADD_TODO,
   *     text: todoText,
   *   }

   *   const actualState = addTodoReducer(undefined, action)
   *   const actualTodo = actualState.get('todos').get(0)
   *   const expectedTodo = fromJS({
   *     text: todoText,
   *     completed: false,
   *   })

   *   expect(actualTodo.isSuperset(expectedTodo))
   * })*/
});
