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
  }
  return state;
}
