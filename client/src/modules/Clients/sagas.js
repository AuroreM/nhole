import { takeLatest, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import request from '../../utils/request';
import { clientsListLoading, getClientsFail, getClientsSuccess } from './actions';
import { getClients } from './actions';
import { clearMessage } from '../../actions';
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
  // + The name of the action is unclear : it gets the clients list and displays a message
  yield put(getClients());
  // @Todo : Handle Message globally
  yield delay(2000);
  yield put(clearMessage());
}
export function* ClientsSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClient);
  yield takeLatest('GET_CLIENTS', getClientsList);
}

export default [ClientsSaga];
