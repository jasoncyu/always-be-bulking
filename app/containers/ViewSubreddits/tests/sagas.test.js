/**
 * Test  sagas
 */

import expect from 'expect';
import { take, call, put, select } from 'redux-saga/effects';
import { defaultSaga, viewSubreddit } from '../sagas';
import request from 'utils/request';


const generator = defaultSaga();

describe('all iewSubreddits saga', () => {
  it('should .....', () => {
    const gen = defaultSaga()

    expect(gen.next().value).toEqual(take('VIEW_SUBREDDIT_REQUEST'))
  });

  it('viewSubreddits saga', () => {
    const gen = viewSubreddit()

    const subreddit = 'askreddit'
    const subredditURL = `http://www.reddit.com/r/${subreddit}.json`
    expect(gen.next().value).toEqual(call(request, subredditURL))
  })
});
