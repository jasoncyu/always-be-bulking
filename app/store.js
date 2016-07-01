/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import firebase, * as fb from './firebase'
import _ from 'lodash'

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
  /**
   * Saves redux state to firebase
   */
  const saveToFirebase = store => next => action => {
    let result = next(action)
    const db = firebase.database()

    const serializableState = store.getState().filter((value, key) => {
      if (_.includes(['todoList', 'workouts', 'workoutList'], key)) {
        return true
      }
    }).toJS()
    console.log('serializableState: ', serializableState);
    /* fb.getCurrentUser().then((user) => {
     *   firebase.database().ref(`users/${user.uid}/`).set(
     *     serializableState
     *   )
     * })*/

    return result
  }

  /**
   * Logs all actions and states after they are dispatched.
   */
  const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState().toJS())
    console.groupEnd(action.type)
    return result
  }

  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    saveToFirebase,
    logger,
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );
  window.store = store

  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      System.import('./reducers').then((reducerModule) => {
        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);

        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
