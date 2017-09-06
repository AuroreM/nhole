export function login(email, password) {
  return {
    type: 'LOGIN',
    payload: {
      email,
      password,
    },
  };
}

export function loginSuccess(token) {
  return {
    type: 'LOGIN_SUCCESS',
    payload: {
      token,
    },
  };
}
