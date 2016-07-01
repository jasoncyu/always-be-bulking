import { fork, take, call, put, select } from 'redux-saga/effects';

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
  ]
}
