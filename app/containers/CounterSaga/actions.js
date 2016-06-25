/*
 *
 * CounterSaga actions
 *
 */

import {
  DEFAULT_ACTION,
  INCREMENT_ASYNC,
  INCREMENT,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function incrementAsyncAction() {
  return {
    type: INCREMENT_ASYNC,
  }
}

export function incrementAction() {
  return {
    type: INCREMENT,
  }
}
