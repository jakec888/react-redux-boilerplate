import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import {rootReducer} from './redux/rootReducers';
import rootSagas from './redux/rootSaga';

export default ({children, initialState = {}}) => {
  const saga = createSagaMiddleware();

  const middlewares = [thunk, saga];

  const composeEnhancers = composeWithDevTools(applyMiddleware(...middlewares));

  const store = createStore(rootReducer, initialState, composeEnhancers);

  saga.run(rootSagas);

  return <Provider store={store}>{children}</Provider>;
};
