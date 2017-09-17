import { takeLatest, put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import request from '../../utils/request';
import { loginSuccess } from './actions';
import { baseUrl } from '../../config';
import { displayToastr, clearToastr } from '../../modules/Toastr/actions';

export function* loginCall(params) {
  const requestURL = `${baseUrl()}/api/Users/login`;
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body: JSON.stringify(params),
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

export function* login(action) {
  yield call(loginCall, {
    email: action.payload.email,
    password: action.payload.password,
  });
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
    yield call(loginCall, {
      email: action.payload.email,
      password: action.payload.password,
    });
    yield put(displayToastr('Votre compte a bien été créé.'));
    yield call(delay, 2000);
    yield put(clearToastr());
  } catch (e) {
    console.warn(`Signup failure ${e}`);
  }
}

export function* UserSaga() {
  yield takeLatest('LOGIN', login);
  yield takeLatest('SIGNUP', signup);
}

export default [UserSaga];