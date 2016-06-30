/*
 *
 * ViewSubreddits reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function viewSubredditsReducer(state = initialState, action) {
  switch (action.type) {
    case 'VIEW_SUBREDDIT_SUCCESS':
      return state.set('subredditTitles', action.subredditTitles)
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default viewSubredditsReducer;
