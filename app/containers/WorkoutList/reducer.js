/*
 *
 * WorkoutList reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  ADD_LIFT_ACTION_SUCCESS,
  ADD_WORKOUT_ACTION,
  DEFAULT_ACTION,
  CHANGE_NEW_LIFT_ACTION,
} from './constants';

const initialState = fromJS({});

function workoutListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEW_LIFT_ACTION:
      const lift = action.lift
      return state.set('currentLift',
                       state.get('currentLift', new Map()).set('name', lift.name))
    case ADD_WORKOUT_ACTION:
      const newWorkout = {}
      return state
    case ADD_LIFT_ACTION_SUCCESS:
      return state.set('lifts',
                       state.get('lifts', new List()).push(action.lift))
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default workoutListReducer;
