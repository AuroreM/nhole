// @flow
import clientsReducer from './Clients';
import newClientReducer from './NewClient';
import toastrReducer from './Toastr';
import { combineReducers } from 'redux';

export default combineReducers({
  clients: clientsReducer,
  newClient: newClientReducer,
  toastr: toastrReducer,
});
