/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';
import styles from './styles.css';

import AddTodo from '../../containers/AddTodo'

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.todoList}>
        This is TodoList container !
        {this.props.todos.map(todo => <div>{todo.text}</div>)}
        <AddTodo />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
}

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
