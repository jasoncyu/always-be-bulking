/*
 *
 * TodoList
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList, { getVisibleTodos } from './selectors';
import styles from './styles.css';
import { saveTodosAction, toggleTodoAction } from './actions'

import AddTodo from '../../containers/AddTodo'
import Todo from '../../components/Todo'

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.todoList}>
        <div
          className={`ui button ${styles.saveTodos}`}
          onClick={() => this.props.onSaveTodos()}
        >
          Save Todos
        </div>
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
  onSaveTodos: React.PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const visibleTodos = getVisibleTodos(state)
  return {
    todos: visibleTodos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onTodoClick(id) {
      dispatch(toggleTodoAction(id))
    },
    onSaveTodos() {
      dispatch(saveTodosAction())
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
