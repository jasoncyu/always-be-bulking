/**
*
* FilterFooter - The footer of the todo list that allows you to choose a filter
*
*/

import React from 'react';
import FilterLink from '../containers/FilterLink'

import styles from './styles.css';

function FilterFooter() {
  return (
    <p className={styles.filterFooter}>
      Show:
      {' '}
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      {', '}
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
    </p>
  );
}

export default FilterFooter;
