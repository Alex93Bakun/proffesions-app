import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import apiReducer from 'modules/api/reducer';
import appReducer from 'modules/app/reducer';
import { apiRootSaga } from 'modules/api/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const reducers = combineReducers({
    api: apiReducer,
    app: appReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(apiRootSaga);

export default store;
