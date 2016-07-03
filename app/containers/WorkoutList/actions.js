/*
 *
 * WorkoutList actions
 *
 */

import {
  DEFAULT_ACTION,
  ADD_WORKOUT_ACTION,
  ADD_LIFT_ACTION,
  CHANGE_NEW_LIFT_ACTION,
  SELECTED_LIFT_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function addWorkoutAction() {
  return {
    type: ADD_WORKOUT_ACTION,
  }
}

export const addLiftAction = (lift) => {
  return {
    type: ADD_LIFT_ACTION,
    lift,
  }
}

export const changeNewLiftAction = (currentLift) => {
  return {
    type: CHANGE_NEW_LIFT_ACTION,
    lift: currentLift,
  }
}

export const selectedLiftAction = (lift) => {
  return {
    type: SELECTED_LIFT_ACTION,
    lift,
  }
}
