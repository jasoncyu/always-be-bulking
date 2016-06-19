/*
 *
 * AddTodo
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { addTodoAction } from './actions'
import selectAddTodo, { selectTodoListDomain } from './selectors';
import styles from './styles.css';
import { createSelector } from 'reselect';

export class AddTodo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let input

    return (
      <div className={styles.addTodo}>
        <form
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            this.props.addTodo(input.value)
            input.value = ''
          }}
        >
          <input
            className="ui input"
            ref={node => {
              input = node
            }}
          />
          <button type="submit ui button">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}
AddTodo.propTypes = {
  addTodo: React.PropTypes.func,
}

const mapStateToProps = selectAddTodo()

/* const mapStateToProps = createSelector(
 *   selectAddTodo(),
 *   selectTodoListDomain(),
 *   (asdf, todos) => ({ asdf, todos })
 * )
 * */
const mapDispatchToProps = (dispatch) => ({
  addTodo(text) {
    dispatch(addTodoAction(text))
  },
  dispatch,
})

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
