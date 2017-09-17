import { takeLatest, put, call } from 'redux-saga/effects';
import request from '../../utils/request';
import { loginSuccess } from './actions';
import { baseUrl } from '../../config';
import { displayToastr } from '../../modules/Toastr/actions';

export function* login(action) {
  const requestURL = `${baseUrl()}/api/Users/login`;
  const body = JSON.stringify({
    email: action.payload.email,
    password: action.payload.password,
  });
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    sessionStorage.setItem('jwtToken', JSON.stringify(response));
    yield put(loginSuccess());
  } catch (e) {
    yield put(displayToastr("L'authentification a échoué, vérifier votre email et votre mot de passe"));
    console.warn(`Login failure ${e}`);
  }
}

export function* signup(action) {
  const requestURL = `${baseUrl()}/api/Users`;
  const body = JSON.stringify({
    email: action.payload.email,
    password: action.payload.password,
  });
  try {
    yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // yield call(login);
  } catch (e) {
    console.warn(`Signup failure ${e}`);
  }
}

export function* UserSaga() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('SIGNUP', signup);
}

export default [UserSaga];
