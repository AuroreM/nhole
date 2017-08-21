import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { NewClientSaga } from './modules/NewClient/sagas';
import { ClientsSaga } from './modules/Clients/sagas';
import { MessageSaga } from './modules/Message/sagas';
import AppContainer from './App';
import reducer from './reducer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

const sagaMiddleWare = createSagaMiddleware();
const enhancers = [];
let composeEnhancers = compose;
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
if (typeof composeWithDevToolsExtension === 'function') {
  composeEnhancers = composeWithDevToolsExtension;
}
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(sagaMiddleWare), ...enhancers));
sagaMiddleWare.run(NewClientSaga);
sagaMiddleWare.run(ClientsSaga);
sagaMiddleWare.run(MessageSaga);

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
  },
});

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app')
);
