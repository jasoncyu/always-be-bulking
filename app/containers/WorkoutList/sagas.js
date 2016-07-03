import { fork, take, call, put, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'

import firebase, * as fb from '../../firebase'

import {
  ADD_LIFT_ACTION,
  ADD_LIFT_ACTION_SUCCESS,
  ADD_LIFT_ACTION_ERROR,
  FIREBASE_LIFT_CHANGED,
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

/**
 * Will yield actions that we can just dispatch
 */
const firebaseEvent = () => {
  return eventChannel(emitter => {
    fb.getCurrentUser().then((user) => {
      const db = firebase.database()
      const liftsRef = db.ref('/lifts')
      liftsRef.on('value', (liftsSnapshot) => {
        emitter({
          type: FIREBASE_LIFT_CHANGED,
          payload: liftsSnapshot.val() || {},
        })
      })
    })

    return () => {
      firebase.database().ref().off()
    }
  })
}

export function* watchFirebase() {
  const chan = yield call(firebaseEvent)

  while (true) {
    const action = yield take(chan)
    yield put(action)
  }
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
  while (true) {
    const liftAction = yield take(ADD_LIFT_ACTION)

    const lift = liftAction.lift
    try {
      const liftRes = yield fb.addLift(lift)
      console.log('liftRes: ', liftRes);
      yield put({type: ADD_LIFT_ACTION_SUCCESS, liftRes})
    } catch (err) {
      yield put({type: ADD_LIFT_ACTION_ERROR, err})
    }
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield [
    fork(watchAddLift),
    /* fork(watchCountdown),*/
    fork(watchFirebase),
  ]
}
