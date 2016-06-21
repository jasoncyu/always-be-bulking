/*
 *
 * FilterLink actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_VISIBILITY_FILTER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const setVisibilityFilter = (filter) => ({
  type: SET_VISIBILITY_FILTER,
  filter,
})
