import expect from 'expect';
import todoListReducer from '../reducer';
import { fromJS } from 'immutable';

import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants'

import {
  SET_VISIBILITY_FILTER,
} from '../../FilterLink/constants'

describe('todoListReducer', () => {
  it('allows you to add todos', () => {
    const todoText = 'A todo'
    const action = {
      type: ADD_TODO,
      text: todoText,
    }

    const actualState = todoListReducer(undefined, action)
    const actualTodo = actualState.get('todos').get(0)
    const expectedTodo = fromJS({
      text: todoText,
      completed: false,
    })

    expect(actualTodo.isSuperset(expectedTodo))
  })

  it('allows you to adjust visible todos', () => {
    expect(todoListReducer(undefined, {
      type: SET_VISIBILITY_FILTER,
      filter: 'SHOW_ALL',
    }).get('visibilityFilter')).toEqual('SHOW_ALL')
  })

  it('allows you to toggle todos', () => {
    const stateBefore = fromJS({
      todos: [
        {
          id: 0,
          text: 'Wash dishes',
          completed: false,
        },
        {
          id: 1,
          text: 'Take out garbage',
          completed: false,
        },
      ],
    })

    const action = {
      type: TOGGLE_TODO,
      id: 1,
    }

    const stateAfter = fromJS({
      todos: [
        {
          id: 0,
          text: 'Wash dishes',
          completed: false,
        },
        {
          id: 1,
          text: 'Take out garbage',
          completed: true,
        },
      ],
    })

    expect(todoListReducer(stateBefore, action).get('todos')).toEqual(stateAfter.get('todos'))
  });
});
