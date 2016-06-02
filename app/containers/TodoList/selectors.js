import { createSelector } from 'reselect';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from './constants'

/**
 * Direct selector to the todoList state domain
 */
const selectTodoListDomain = () => state => state.get('todoList');

/**
 * Other specific selectors
 */
const selectVisibleTodos = createSelector(
  selectTodoListDomain(),
  (substate) => {
    const allTodos = substate.get('todos')
    switch (substate.get('visibilityFilter')) {
      case SHOW_ALL:
        return allTodos.toJS()
      case SHOW_COMPLETED:
        return allTodos.filter(t => t.completed).toJS()
      case SHOW_ACTIVE:
        return allTodos.filter(t => !t.completed).toJS()
      default:
        return allTodos.toJS()
    }
  }
)


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
  selectVisibleTodos,
};
