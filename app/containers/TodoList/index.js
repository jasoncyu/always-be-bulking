/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';
import styles from './styles.css';
import shouldPureComponentUpdate from 'react-pure-render/function';

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    return (
      <div className={styles.todoList}>
        This is TodoList container !
        {this.props.todos.map(todo => <div>{todo.text}</div>)}
        <button
          className={`${styles.addTodo} ui button`}
          onClick={() => this.props.addTodo('new todo')}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  addTodo: React.PropTypes.func.isRequired,
}

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (text) => {
      dispatch({
        type: 'ADD_TODO',
        text,
      })
    },

    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
