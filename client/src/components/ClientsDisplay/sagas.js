import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { clientListLoading, getClientsFail, getClientsSuccess } from './actions';
import { baseUrl } from '../../config';

export function* getClients() {
  const requestURL = `${baseUrl()}/api/Clients`;
  yield put(clientListLoading());
  try {
    const clients = yield call(request, requestURL, { method: 'GET' });
    yield put(getClientsSuccess(clients));
  } catch (err) {
    yield put(getClientsFail());
  }
}

export function* ClientsDisplaySaga() {
  yield takeLatest('GET_CLIENTS', getClients);
}

export default [ClientsDisplaySaga];
