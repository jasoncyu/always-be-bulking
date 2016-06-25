import { createSelector } from 'reselect';

/**
 * Direct selector to the counterSaga state domain
 */
const selectCounterSagaDomain = () => state => state.get('counterSaga');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CounterSaga
 */

const selectCounterSaga = () => createSelector(
  selectCounterSagaDomain(),
  (substate) => substate.toJS()
);

export default selectCounterSaga;
export {
  selectCounterSagaDomain,
};
