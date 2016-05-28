import { createSelector } from 'reselect';

/**
 * Direct selector to the todoList state domain
 */
const selectTodoListDomain = () => state => state.get('todoList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TodoList
 */

const selectTodoList = () => createSelector(
  selectTodoListDomain(),
  (substate) => {
    return substate.toJS()
  }
);

export default selectTodoList;
export {
  selectTodoListDomain,
};
