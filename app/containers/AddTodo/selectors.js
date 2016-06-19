import { createSelector } from 'reselect';

/**
 * Direct selector to the todoList state domain
 */
const selectAddTodoDomain = () => state => state.get('addTodo');

/**
 * Other specific selectors
 */
const selectTodoListDomain = () => state => state.get('todoList');

/**
 * Default selector used by AddTodo
 */

const selectAddTodo = () => createSelector(
  selectAddTodoDomain(),
  (substate) => substate.toJS()
);

export default selectAddTodo;
export {
  selectAddTodoDomain,
  selectTodoListDomain,
};
