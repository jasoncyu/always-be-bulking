// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getAsyncInjectors } from './utils/asyncInjectors';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // create reusable async injectors using getAsyncInjectors factory
  const { injectReducer, injectSagas } = getAsyncInjectors(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/HomePage/reducer'),
          System.import('containers/HomePage/sagas'),
          System.import('containers/HomePage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);

          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/features',
      name: 'features',
      getComponent(nextState, cb) {
        System.import('containers/FeaturePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/add-workout',
      getComponent(location, cb) {
        System.import('containers/AddWorkoutPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/todos',
      name: 'todoList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/TodoList/reducer'),
          System.import('containers/TodoList/sagas'),
          System.import('containers/TodoList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('todoList', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/todos-app',
      getComponent(location, cb) {
        System.import('components/TodoApp')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },    {
      path: '/workouts',
      name: 'workoutList',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/WorkoutList/reducer'),
          System.import('containers/WorkoutList/sagas'),
          System.import('containers/WorkoutList'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('workoutList', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/counter',
      name: 'counterSaga',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/CounterSaga/reducer'),
          System.import('containers/CounterSaga/sagas'),
          System.import('containers/CounterSaga'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('counterSaga', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    },    {
      path: '/subreddits',
      name: 'viewSubreddits',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/ViewSubreddits/reducer'),
          System.import('containers/ViewSubreddits/sagas'),
          System.import('containers/ViewSubreddits'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('viewSubreddits', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '*',





      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
