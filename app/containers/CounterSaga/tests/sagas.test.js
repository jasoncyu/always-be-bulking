/**
 * Test  sagas
 */

import expect from 'expect';
import {
  delay,
} from 'redux-saga'
import {
  incrementAction,
} from '../actions'

import {take, call, put, select} from 'redux-saga/effects';
import { defaultSaga, incrementAsync} from '../sagas';

const generator = defaultSaga();

describe('counterSaga Saga', () => {
  it('should increment after 1 second', () => {
    const gen = incrementAsync()

    expect(gen.next().value).toEqual(call(delay, 1000), 'delays by 1 second')
    expect(gen.next().value).toEqual(put(incrementAction()))
    expect(gen.next()).toEqual({done: true, value: undefined})
  })
});
