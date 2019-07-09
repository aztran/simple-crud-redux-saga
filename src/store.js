import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const initialState = {};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;

// import { createStore, applyMiddleware, compose } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './reducers';

// import rootSaga from './saga';


// const configureStore = () => {
//   const sagaMiddleware = createSagaMiddleware()
//   const store = createStore(
//     rootReducer,
//     compose(
//       applyMiddleware(sagaMiddleware),
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//       window.__REDUX_DEVTOOLS_EXTENSION__()
//     )
//   )
//   sagaMiddleware.run(rootSaga);
//   // store.dispatch({ type: 'DANG' });
//   return store;
// }

// export default configureStore;