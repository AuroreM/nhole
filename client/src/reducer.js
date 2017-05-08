import { Map } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    default:
      break;
    case 'CLIENT_LIST_LOADING':
      return state
      .set('loading', true);
    case 'GET_CLIENTS_FAIL':
      break;
    case 'GET_CLIENTS_SUCCESS':
      return state
      .set('clients', action.clients)
      .set('loading', false);
    case 'REGISTER_CLIENT_FAIL':
      return state
        .set('message', 'Un problème est survenu lors de l\'enregistrement');
    case 'REGISTER_CLIENT_SUCCESS':
      const expectedState = {
        clients: [],
        firstname: '',
        lastname: '',
        number: '',
        morning: false,
        lunch: false,
        afternoon: false,
        evening: false,
        message: 'Client enregistré !',
        loading: true,
      }
      return state.merge(expectedState);
    case 'SET_STATE':
      return state.merge(action.state);
    case 'SEND_MESSAGE_FAIL':
      break;
    case 'SEND_MESSAGE_SUCCESS':
      return state
        .set('message', 'Message envoyé !');
    case 'UPDATE_CLIENT_INFO':
      return state
        .set('firstname', action.firstname)
        .set('lastname', action.lastname)
        .set('number', action.number);
    case 'UPDATE_SLOT_CHOICES':
      return state
        .set(action.slot, !state.get(action.slot));
  }
  return state;
}
