/*
 *
 * TodoList
 *
 */

import * as actions from './actions'

import React from 'react';
import { connect } from 'react-redux';
import selectTodoList from './selectors';
import styles from './styles.css';

export class TodoList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const dispatch = this.props.dispatch

    const addTodo = () => {
      dispatch(actions.addTodoAction('Learn more about actions!'))
    }

    return (
      <div className={ styles.todoList }>
        This is TodoList container !
        <button onClick={addTodo}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = selectTodoList();

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
