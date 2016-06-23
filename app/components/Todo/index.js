/**
*
* Todo
*
*/

import React, { PropTypes } from 'react';

import styles from './styles.css';

class Todo extends React.Component {
  render() {
    return (
      <li
        className={this.props.completed ? styles.done : styles.todo}
        onClick={this.props.onClick}
      >
        {this.props.text}
      </li>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo;
