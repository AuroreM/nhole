import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import ClientAdditionContainer from './containers/ClientAdditionContainer';
import reducer from './reducer';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// eslint-disable-next-line
const store = createStoreDevTools(reducer);

store.dispatch({
  type: 'SET_STATE',
  state: {
    firstname: '',
    lastname: '',
    number: '',
    morning: false,
    lunch: false,
    afternoon: false,
    evening: false,
  }
});


ReactDOM.render(
  <Provider store={store}>
    <ClientAdditionContainer />
  </Provider>,
  document.getElementById('app')
);
