export function login(email, password) {
  return {
    type: 'LOGIN',
    payload: {
      email,
      password,
    },
  };
}

export function signup(email, password) {
  return {
    type: 'SIGNUP',
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS',
  };
}
