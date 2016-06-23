/**
*
* TodoFooter
*
*/

import React from 'react';

import styles from './styles.css';
import FilterLink from '../../containers/FilterLink'

function TodoFooter() {
  return (
    <div className={styles.todoFooter}>
      Show:
      {" "}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {", "}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </div>
  );
}

export default TodoFooter;
