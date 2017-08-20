export default function(state = {}, action) {
  switch (action.type) {
    default:
      break;
    case 'CLEAR_MESSAGE':
      return {
        ...state,
        message: '',
      };
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
        clients: action.clients,
      };
    case 'REGISTER_CLIENT_FAIL':
      return {
        ...state,
        message: "Un problème est survenu lors de l'enregistrement",
      };
    case 'REGISTER_CLIENT_SUCCESS':
      return {
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
      };
    case 'SET_STATE':
      return action.state;
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
}
