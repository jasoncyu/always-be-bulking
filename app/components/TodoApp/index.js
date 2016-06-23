/**
*
* TodoApp
*
*/

import React from 'react';

import styles from './styles.css';
import TodoList from '../../containers/TodoList'
import TodoFooter from '../TodoFooter'

function TodoApp() {
  return (
    <div className={styles.todoApp}>
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default TodoApp;
