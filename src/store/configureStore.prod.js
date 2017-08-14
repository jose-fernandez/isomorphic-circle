import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware)
  );
	console.log("CONFIGURE.STORE.PROD")


	store.runSaga = sagaMiddleware.run(rootSaga);
	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers').default; // eslint-disable-line global-require
			store.replaceReducer(nextReducer);
		});
	}
  store.close = () => store.dispatch(END);

  return store;
}
