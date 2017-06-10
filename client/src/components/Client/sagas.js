import { delay } from 'redux-saga'
import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';

export function* deleteClient(action) {
  const requestURL = `http://localhost:43301/api/Clients/${action.clientId}`;
  try {
    const response = yield call(
      request,
      requestURL,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response);
    // yield put(registerClientSuccess());
    // yield delay(2000);
    // yield put(clearMessage());
  } catch (err) {
    // yield put(registerClientFail());
  }
}

export function* ClientSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClient);
}

export default [
  ClientSaga,
];
