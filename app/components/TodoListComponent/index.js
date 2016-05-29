/**
*
* TodoListComponent
*
*/

import React, { PropTypes } from 'react';
import Todo from '../Todo'

import styles from './styles.css';

function TodoListComponent({ todos, onTodoClick }) {
  return (
    <ul className={styles.todoListComponent}>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  );
}

TodoListComponent.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default TodoListComponent;
