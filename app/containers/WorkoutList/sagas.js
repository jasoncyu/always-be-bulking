import { fork, take, call, put, select } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga'

import firebase, * as fb from '../../firebase'

import {
  ADD_LIFT_ACTION,
  ADD_LIFT_ACTION_SUCCESS,
  ADD_LIFT_ACTION_ERROR,
  ADD_WORKOUT_ACTION,
  ADD_WORKOUT_ACTION_SUCCESS,
  ADD_WORKOUT_ACTION_ERROR,
  FIREBASE_WORKOUT_CHANGED,
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

      // Push lifts db changes to client
      const liftsRef = db.ref('/lifts')
      liftsRef.on('value', (liftsSnapshot) => {
        emitter({
          type: FIREBASE_LIFT_CHANGED,
          payload: liftsSnapshot.val() || {},
        })
      })

      // Push workouts db changes to client
      const workoutsRef = db.ref('/workouts')
      workoutsRef.on('value', (workoutsSnapshot) => {
        emitter({
          type: FIREBASE_WORKOUT_CHANGED,
          payload: workoutsSnapshot.val() || {},
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
      yield put({type: ADD_LIFT_ACTION_SUCCESS, liftRes})
    } catch (err) {
      yield put({type: ADD_LIFT_ACTION_ERROR, err})
    }
  }
}

export function* watchAddWorkout() {
  while (true) {
    const workoutAction = yield take(ADD_WORKOUT_ACTION)

    const workout = workoutAction.workout
    try {
      const workoutRes = yield fb.addWorkout(workout)
      console.log('workoutRes: ', workoutRes);
      yield put({type: ADD_WORKOUT_ACTION_SUCCESS, workoutRes})
    } catch (err) {
      yield put({type: ADD_WORKOUT_ACTION_ERROR, err})
    }
  }
}

// Individual exports for testing
export function* defaultSaga() {
  yield [
    fork(watchAddLift),
    /* fork(watchCountdown),*/
    fork(watchFirebase),
    fork(watchAddWorkout),
  ]
}
