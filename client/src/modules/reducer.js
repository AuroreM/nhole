// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import clientsReducer from './Clients';
import newClientReducer from './NewClient';
import toastrReducer from './Toastr';
import userReducer from './User';

export default combineReducers({
  clients: clientsReducer,
  newClient: newClientReducer,
  toastr: toastrReducer,
  user: userReducer,
  form: formReducer,
});
