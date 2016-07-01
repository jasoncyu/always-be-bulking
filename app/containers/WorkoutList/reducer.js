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
  CHANGE_NEW_LIFT_ACTION,
} from './constants';

const initialState = I.fromJS({});

function workoutListReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NEW_LIFT_ACTION: {
      const lift = action.lift
      return state.updateIn(['newLift'], new I.Map(), (prevNewLift) => prevNewLift.merge(I.fromJS(lift)))
    }
    case ADD_WORKOUT_ACTION: {
      /* const newWorkout = {}*/
      return state
    }
    case ADD_LIFT_ACTION_SUCCESS:
      return state.set('lifts',
                       state.get('lifts', new I.List()).push(action.lift))
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default workoutListReducer;
