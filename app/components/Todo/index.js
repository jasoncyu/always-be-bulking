/**
*
* Todo
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

function Todo({ onClick, completed, text }) {
  return (
    <li
      className={styles.done ? completed : styles.todo}
      onClick={onClick}
    >
      {text}
    </li>
  );
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
