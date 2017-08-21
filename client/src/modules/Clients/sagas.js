import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { clientsListLoading, getClientsFail, getClientsSuccess } from './actions';
import { getClients } from './actions';
import { baseUrl } from '../../config';

export function* getClientsList() {
  const requestURL = `${baseUrl()}/api/Clients`;
  yield put(clientsListLoading());
  try {
    const clients = yield call(request, requestURL, { method: 'GET' });
    yield put(getClientsSuccess(clients));
  } catch (err) {
    // WARNING @TODO : le cas de failure ne fonctionne pas
    yield put(getClientsFail());
  }
}

export function* deleteClient(action) {
  const requestURL = `${baseUrl()}/api/Clients/${action.clientId}`;
  yield call(request, requestURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  // @Todo : Think about a way of not refreshing the list
  yield put(getClients());
}
export function* ClientsSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClient);
  yield takeLatest('GET_CLIENTS', getClientsList);
}

export default [ClientsSaga];
