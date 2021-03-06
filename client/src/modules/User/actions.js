export function login(email, password) {
  return {
    type: 'LOGIN',
    payload: {
      email,
      password,
    },
  };
}

export function signup(email, password, smsGatewayEmail, smsGatewayPassword, smsGatewayDeviceId) {
  return {
    type: 'SIGNUP',
    payload: {
      email,
      password,
      smsGatewayEmail,
      smsGatewayPassword,
      smsGatewayDeviceId,
    },
  };
}

export const redirectToApp = () => ({
  type: 'REDIRECT_TO_APP',
});

export function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS',
  };
}
