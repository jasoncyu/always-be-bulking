import I from 'immutable'
import _ from 'lodash'
import { createSelector } from 'reselect';

/**
 * Direct selector to the workoutList state domain
 */
const selectWorkoutListDomain = () => state => state.get('workoutList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by WorkoutList
 */

const selectWorkoutList = () => createSelector(
  selectWorkoutListDomain(),
  (substate) => substate
);

const selectNewLift = () => createSelector(
  selectWorkoutList(),
  (workoutList) => workoutList.newLift
)

const selectLifts = () => createSelector(
  selectWorkoutList(),
  (workoutList) => workoutList.lifts
)

const selectSelectedLift = () => createSelector(
  selectLifts(),
  (lifts) => {
    return _.pickBy(lifts, (data, liftID) => {
      return data.selected
    })
  }
)

const selectWorkouts = () => createSelector(
  selectWorkoutList(),
  (workoutList) => workoutList.workouts
)

export default selectWorkoutList;
export {
  selectWorkoutListDomain,
  selectSelectedLift,
  selectNewLift,
  selectLifts,
  selectWorkouts
};
