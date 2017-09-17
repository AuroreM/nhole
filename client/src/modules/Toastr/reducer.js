export default function(state = { wording: '' }, action) {
  switch (action.type) {
    default:
      break;
    case 'CLEAR_TOASTR':
      return {
        wording: '',
      };
    case 'DISPLAY_TOASTR':
      return {
        wording: action.wording,
      };
  }
  return state;
}

export const toastrSelector = state => {
  return state.toastr.wording;
};
