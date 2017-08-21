export default function(
  state = {
    firstname: '',
    lastname: '',
    number: '',
    morning: false,
    lunch: false,
    evening: false,
    afternoon: false,
  },
  action
) {
  switch (action.type) {
    default:
      break;
    case 'REGISTER_CLIENT_SUCCESS':
      return {
        firstname: '',
        lastname: '',
        number: '',
        morning: false,
        lunch: false,
        afternoon: false,
        evening: false,
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
