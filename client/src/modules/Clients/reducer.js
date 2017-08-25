import _ from 'lodash';

export default function(state = { loading: false, list: [] }, action) {
  switch (action.type) {
    default:
      break;
    case 'CLIENT_LIST_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_CLIENTS_FAIL':
      break;
    case 'GET_CLIENTS_SUCCESS':
      return {
        ...state,
        loading: false,
        list: action.clients,
      };
    case 'UPDATE_CLIENTS_LIST_AFTER_ONE_DELETED':
      return {
        ...state,
        list: _.remove(state.list, client => action.clientId !== client.id),
      };
  }
  return state;
}
