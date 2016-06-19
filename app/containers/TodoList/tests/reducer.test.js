import expect from 'expect';
import todoListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('todoListReducer', () => {
  it('allows you to add todos', () => {
    const todoText = 'A todo'
    expect(todoListReducer(undefined, {
      type: 'ADD_TODO',
      text: todoText,
    }).get('todos')).toEqual(
      fromJS([
        {
          text: todoText,
          completed: false,
        },
      ]))
  })

  it('allows you to adjust visible todos', () => {
    expect(todoListReducer(undefined, {
      type: 'SET_VISIBILITY_FILTER',
      filter: 'SHOW_ALL',
    }).get('visibilityFilter')).toEqual('SHOW_ALL')
  })
});
