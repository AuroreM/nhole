// @flow
import clientsReducer from './Clients';
import newClientReducer from './NewClient';
import { combineReducers } from 'redux';

const reducer = function(
  state = {
    message: '',
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
    case 'SEND_MESSAGE_FAIL':
      break;
    case 'SEND_MESSAGE_SUCCESS':
      return {
        ...state,
        message: 'Message envoyé !',
      };
  }
  return state;
};

export default combineReducers({
  clients: clientsReducer,
  newClient: newClientReducer,
  other: reducer,
});
