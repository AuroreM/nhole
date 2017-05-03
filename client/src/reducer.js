import { Map } from 'immutable';

export default function(state = Map(), action) {
  switch (action.type) {
    default:
      break;
    case 'REGISTER_CLIENT_FAIL':
      break;
    case 'REGISTER_CLIENT_SUCCESS':
      return Map();
    case 'GET_CLIENTS_FAIL':
      break;
    case 'GET_CLIENTS_SUCCESS':
      return state
        .set('clients', action.clients);
    case 'SET_STATE':
      return state.merge(action.state);
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
