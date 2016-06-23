import { createSelector } from 'reselect';

/**
 * Direct selector to the todoList state domain
 */
const selectTodoListDomain = () => state => state.get('todoList');
const getVisibilityFilter = (state) => state.get('todoList').get('visibilityFilter')
const getTodos = state => state.get('todoList').get('todos')

/**
 * Other specific selectors
 */


/**
 * Default selector used by TodoList
 */

const selectTodoList = () => createSelector(
  selectTodoListDomain(),
  (substate) => substate.toJS()
);

const getVisibleTodos = createSelector(
  getTodos,
  getVisibilityFilter,
  (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos.toJS()
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.get('completed')).toJS()
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.get('completed')).toJS()
      default:
        return []
    }
  }
)

export default selectTodoList;
export {
  selectTodoListDomain,
  getVisibleTodos,
};
