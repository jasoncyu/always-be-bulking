/**
 * Create the store with asynchronously loaded reducers
 */

import { isStatePlainEnough, createStore, applyMiddleware, compose } from 'redux';
console.log('isStatePlainEnough: ', isStatePlainEnough);
import { createTransform, persistStore, autoRehydrate } from 'redux-persist'
import immutableTransform from 'redux-persist-transform-immutable'
import { fromJS, toJS } from 'immutable';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
    devtools(),
    autoRehydrate({config: true}),
  ];

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    compose(...enhancers)
  );

  window.store = store

  const immutableJSTransform = createTransform(
    // Inbound into the persistent storage
    (inboundState) => {
      console.log('inboundState: ', inboundState);
      const serializableState = toJS(inboundState)
      console.log('serializableState: ', serializableState);
      /* return serializableState*/
      return {}
    },
    (outboundState) => {
      console.log('outboundState: ', outboundState);
      const immutableState = fromJS(outboundState)
      console.log('immutableState: ', immutableState);
      /* return immutableState*/
      return {}
    },
    {whitelist: ['todoList']},
  )

  const dummyTransform = createTransform(
    (inboundState) => {
      console.log('dummy inbound');
    },
    (outboundState) => {
      console.log('dummy outbound');
    },
  )
  persistStore(
    store,
    {
      transforms: [immutableJSTransform],
      whitelist: ['todoList'],
    },
  )

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
