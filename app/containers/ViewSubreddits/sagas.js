import { takeEvery } from 'redux-saga'
import { take, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

// All sagas to be loaded
export default [
  defaultSaga,
];

export function* viewSubreddit() {
  const subreddit = 'askreddit'
  const subredditURL = `http://www.reddit.com/r/${subreddit}.json`
  try {
    const results = yield call(request, subredditURL)
    const subredditTitles = results.data.data.children.map(o => o.data.title)
    yield put({ type: 'VIEW_SUBREDDIT_SUCCESS', subredditTitles })
  } catch (err) {
    yield put({ type: 'VIEW_SUBREDDIT_ERROR', err })
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield* takeEvery('VIEW_SUBREDDIT_REQUEST', viewSubreddit)
}
