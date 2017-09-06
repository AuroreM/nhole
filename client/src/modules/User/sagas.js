import { takeLatest, put } from 'redux-saga/effects';
// import request from '../../utils/request';
import { loginSuccess } from './actions';
// import { baseUrl } from '../../config';

export function* login() {
  // const requestURL = `${baseUrl()}/api/Clients`;
  // try {
  // yield call(request, requestURL, {
  //   method: 'POST',
  //   body,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // });
  sessionStorage.setItem('jwt', '1234');
  yield put(loginSuccess('1234'));
  // } catch (err) {
  //   yield put(loginFailure("Un problème est survenu lors de l'authentification"));
  // }
}

export function* UserSaga() {
  yield takeLatest('LOGIN', login);
}

export default [UserSaga];
