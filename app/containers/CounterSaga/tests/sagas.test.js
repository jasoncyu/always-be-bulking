/**
 * Test  sagas
 */

import expect from 'expect';
import {
  delay,
} from 'redux-saga'

import {take, call, put, select} from 'redux-saga/effects';
import { defaultSaga, incrementAsync} from '../sagas';

const generator = defaultSaga();

describe('counterSaga Saga', () => {
  it('should increment after 1 second', () => {
    const gen = incrementAsync()

    expect(gen.next().value).toEqual(call(delay, 1000))
  })
});
