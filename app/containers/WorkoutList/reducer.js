/*
 *
 * WorkoutList reducer
 *
 */

import _ from 'lodash'
import {
  ADD_LIFT_ACTION_SUCCESS,
  ADD_WORKOUT_ACTION,
  DEFAULT_ACTION,
  FIREBASE_LIFT_CHANGED,
  FIREBASE_WORKOUT_CHANGED,
  CHANGE_NEW_LIFT_ACTION,
  SELECTED_LIFT_ACTION,
} from './constants';

/* const Lift = I.Record({
 *   // Name of the lift
 *   name: ''
 * })
 * */
/* export const Workout = I.Record({
 *   startTS: null,
 *   endTS: null,
 * })
 * */
const initialState = {
  // Workouts
  workouts: {},
  // List of lifts that we can select from
  lifts: {},
  newLift: {
    name: ''
  }
};

function workoutListReducer(state = initialState, action) {
  switch (action.type) {
    case FIREBASE_LIFT_CHANGED: {
      const allLifts = action.payload
      return {
        ...state,
        lifts: allLifts
      }
    }
    case FIREBASE_WORKOUT_CHANGED: {
      const allWorkouts = action.payload
      return {
        ...state,
        workouts: allWorkouts
      }
    }
    case CHANGE_NEW_LIFT_ACTION: {
      const lift = action.lift
      return {
        ...state,
        newLift: lift
      }
    }
    case ADD_LIFT_ACTION_SUCCESS:
      // Clear newlift since it's been added successfully
      return state.set('newLift', new Lift())
    case SELECTED_LIFT_ACTION: {
      const selectedLift = action.lift
      const selectedLiftID = Object.keys(action.lift)[0]

      const newLifts = state.lifts.map((data, id) => {
        if (id === selectedLiftID) {
          data.selected = true
        } else {
          data.selected = false
        }

        return data
      })

      return {
        ...state,
        lifts: newLifts
      }
    }
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default workoutListReducer;
