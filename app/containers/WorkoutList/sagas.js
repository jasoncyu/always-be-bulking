import { fork, take, call, put, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'

import firebase, * as fb from '../../firebase'

import {
  ADD_LIFT_ACTION,
  ADD_LIFT_ACTION_SUCCESS,
  ADD_LIFT_ACTION_ERROR,
} from './constants'

// All sagas to be loaded
export default [
  defaultSaga,
];

const countdown = (secs) => {
  return eventChannel(emitter => {
    const iv = setInterval(() => {
      secs -= 1
      if (secs > 0) {
        emitter(secs)
      } else {
        emitter(END)
        clearInterval(iv)
      }
    }, 1000)
    return () => {
      clearInterval(iv)
    }
  })
}

export function* watchCountdown() {
  const chan = yield call(countdown, 10)
  try {
    while (true) {
      const seconds = yield take(chan)
      console.log(`countdown: ${seconds}`);
    }
  } finally {
    console.log('countdown terminated');
  }
}

export function* watchAddLift() {
  const liftAction = yield take(ADD_LIFT_ACTION)

  const lift = {name: liftAction.name}
  try {
    const liftRes = yield fb.addLift(lift)
    console.log('liftRes: ', liftRes);
    yield put({type: ADD_LIFT_ACTION_SUCCESS, liftRes})
  } catch (err) {
    yield put({type: ADD_LIFT_ACTION_ERROR, err})
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield [
    fork(watchAddLift),
    fork(watchCountdown),
  ]
}
