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
import Todo from '../../components/Todo'

const getVisibleTodos = (todos, filter) => {
}

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.todoList}>
        <ul>
          {this.props.todos.map(todo => {
            return (
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => this.props.onTodoClick(todo.id)}
              />
            )
          })}
        </ul>
        <AddTodo />
      </div>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  onTodoClick: React.PropTypes.func.isRequired,
}

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch({
        type: 'TOGGLE_TODO',
        id,
      })
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
