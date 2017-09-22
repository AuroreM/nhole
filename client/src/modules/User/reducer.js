const initialState = {
  isAuthorized: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthorized: true,
      };
    default:
      break;
  }

  return state;
};

export const authorizationSelector = state => {
  return state.user.isAuthorized;
};
