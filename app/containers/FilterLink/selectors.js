import { createSelector } from 'reselect';

/**
 * Direct selector to the filterLink state domain
 */
const selectFilterLinkDomain = () => state => state.get('filterLink');

/**
 * Other specific selectors
 */


/**
 * Default selector used by FilterLink
 */

const selectFilterLink = () => createSelector(
  selectFilterLinkDomain(),
  (substate) => substate.toJS()
);

export default selectFilterLink;
export {
  selectFilterLinkDomain,
};
