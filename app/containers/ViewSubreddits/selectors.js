import { createSelector } from 'reselect';

/**
 * Direct selector to the viewSubreddits state domain
 */
const selectViewSubredditsDomain = () => state => state.get('viewSubreddits');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ViewSubreddits
 */

const selectViewSubreddits = () => createSelector(
  selectViewSubredditsDomain(),
  (substate) => substate.toJS()
);

export default selectViewSubreddits;
export {
  selectViewSubredditsDomain,
};
