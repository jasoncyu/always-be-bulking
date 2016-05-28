import { createSelector } from 'reselect';

/**
 * Direct selector to the addWorkoutPage state domain
 */
const selectAddWorkoutPageDomain = () => state => state.get('addWorkoutPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AddWorkoutPage
 */

const selectAddWorkoutPage = () => createSelector(
  selectAddWorkoutPageDomain(),
  (substate) => substate.toJS()
);

export default selectAddWorkoutPage;
export {
  selectAddWorkoutPageDomain,
};
