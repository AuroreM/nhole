import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { NewClientSaga } from './modules/NewClient/sagas';
import { ClientsSaga } from './modules/Clients/sagas';
import { MessageSaga } from './modules/Message/sagas';
import { UserSaga } from './modules/User/sagas';
import { ToastrSaga } from './modules/Toastr/sagas';
import AppContainer from './AppContainer';
import reducer from './modules/reducer';
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
sagaMiddleWare.run(UserSaga);
sagaMiddleWare.run(ToastrSaga);

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
