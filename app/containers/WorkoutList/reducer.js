/*
 *
 * WorkoutList reducer
 *
 */

import * as I from 'immutable';
import {
  ADD_LIFT_ACTION_SUCCESS,
  ADD_WORKOUT_ACTION,
  DEFAULT_ACTION,
  FIREBASE_LIFT_CHANGED,
  CHANGE_NEW_LIFT_ACTION,
} from './constants';

const initialState = I.fromJS({
  lifts: [],
});

function workoutListReducer(state = initialState, action) {
  switch (action.type) {
    case FIREBASE_LIFT_CHANGED: {
      const allLifts = action.payload
      return state.set('lifts', I.fromJS(allLifts))
    }
    case CHANGE_NEW_LIFT_ACTION: {
      const lift = action.lift
      return state.updateIn(['newLift'], new I.Map(), (prevNewLift) => prevNewLift.merge(I.fromJS(lift)))
    }
    case ADD_WORKOUT_ACTION: {
      /* const newWorkout = {}*/
      return state
    }
    case ADD_LIFT_ACTION_SUCCESS:
      return state
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default workoutListReducer;
