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
  (substate) => substate.toJS()
);

export default selectWorkoutList;
export {
  selectWorkoutListDomain,
};
