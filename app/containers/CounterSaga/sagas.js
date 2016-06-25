import { take, call, put, select } from 'redux-saga/effects';

import { takeEvery, delay } from 'redux-saga'

import {
  INCREMENT_ASYNC,
} from './constants'

import {
  incrementAction,
} from './actions'


// Individual exports for testing
export function* defaultSaga() {

}

export function* helloSaga() {
  console.log('hello saga');
}

export function* incrementAsync() {
  console.log('incrementAsync called');
  yield call(delay, 1000)
  yield put(incrementAction())
}

export function* watchIncrementAsync() {
  yield* takeEvery(INCREMENT_ASYNC, incrementAsync)
}

// All sagas to be loaded
export default [
  helloSaga,
  watchIncrementAsync,
];