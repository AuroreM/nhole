// @flow
import clientsReducer from './Clients';
import { combineReducers } from 'redux';

const reducer = function(
  state = {
    firstname: '',
    lastname: '',
    number: '',
    morning: false,
    lunch: false,
    evening: false,
    afternoon: false,
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
    case 'REGISTER_CLIENT_FAIL':
      return {
        ...state,
        message: "Un problème est survenu lors de l'enregistrement",
      };
    case 'REGISTER_CLIENT_SUCCESS':
      return {
        firstname: '',
        lastname: '',
        number: '',
        morning: false,
        lunch: false,
        afternoon: false,
        evening: false,
        message: 'Client enregistré !',
      };
    case 'SEND_MESSAGE_FAIL':
      break;
    case 'SEND_MESSAGE_SUCCESS':
      return {
        ...state,
        message: 'Message envoyé !',
      };
    case 'UPDATE_CLIENT_INFO':
      return {
        ...state,
        firstname: action.firstname,
        lastname: action.lastname,
        number: action.number,
      };
    case 'UPDATE_SLOT_CHOICES':
      const currentSlot = action.slot;
      return {
        ...state,
        [currentSlot]: !state[currentSlot],
      };
  }
  return state;
};

export default combineReducers({
  clients: clientsReducer,
  other: reducer,
});
