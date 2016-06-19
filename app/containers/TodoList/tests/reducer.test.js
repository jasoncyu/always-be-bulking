import expect from 'expect';
import todoListReducer from '../reducer';
import { fromJS } from 'immutable';

describe('todoListReducer', () => {
  it('allows you to add todos', () => {
    const todoText = 'A todo'
    expect(todoListReducer(undefined, {
      type: 'ADD_TODO',
      text: todoText,
    })).toEqual(fromJS({
      todos: [
        {
          text: todoText,
          completed: false,
        },
      ],
    }))
  })
});
