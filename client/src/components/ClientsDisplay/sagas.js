import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { getClientsFail, getClientsSuccess } from './actions';

export function* getClients() {
  const requestURL = `http://vps395184.ovh.net:43301/api/Clients`;
  try {
    const clients = yield call(request, requestURL, { method: 'GET'});
    console.log(clients);
    yield put(getClientsSuccess(clients));
  } catch (err) {
    yield put(getClientsFail());
  }
}

export function* ClientsDisplaySaga() {
  yield takeLatest('GET_CLIENTS', getClients);
}

export default [
  ClientsDisplaySaga,
];
