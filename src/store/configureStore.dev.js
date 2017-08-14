import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';
import DevTools from '../components/DevTools/DevTools';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware,
      ),
      DevTools.instrument()
    )
  );
  // store.runSaga = sagaMiddleware.run(rootSaga);
  store.runSaga = sagaMiddleware.run;

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      //eslint-disable-next-line
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.close = () => store.dispatch(END);
  return store;
}
