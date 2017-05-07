import { Map } from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { ClientAdditionSaga } from './components/ClientAddition/sagas'
import { ClientsDisplaySaga } from './components/ClientsDisplay/sagas'
import AppContainer from './components/App/App';
import reducer from './reducer';

const sagaMiddleWare = createSagaMiddleware()
const enhancers = []
let composeEnhancers = compose
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension
}
const store = createStore(
  reducer,
  Map(),
  composeEnhancers(
    applyMiddleware(sagaMiddleWare),
    ...enhancers
  )
)
sagaMiddleWare.run(ClientAdditionSaga);
sagaMiddleWare.run(ClientsDisplaySaga);

store.dispatch({
  type: 'SET_STATE',
  state: {
    clients: [],
    firstname: '',
    lastname: '',
    number: '',
    morning: false,
    lunch: false,
    afternoon: false,
    evening: false,
    message: '',
    loading: true,
  }
});


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app')
);
