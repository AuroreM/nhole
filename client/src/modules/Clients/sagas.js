import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { clientsListLoading, getClientsFail, getClientsSuccess } from './actions';
import { baseUrl } from '../../config';

export function* getClientsList() {
  const requestURL = `${baseUrl()}/api/Clients/byAuth`;
  yield put(clientsListLoading());
  try {
    const clients = yield call(
      request,
      `${requestURL}?access_token=${JSON.parse(sessionStorage.getItem('jwtToken')).id}`,
      {
        method: 'GET',
      }
    );
    yield put(getClientsSuccess(clients));
  } catch (err) {
    // WARNING @TODO : le cas de failure ne fonctionne pas
    yield put(getClientsFail());
  }
}

export function* deleteClient(action) {
  const requestBaseUrl = `${baseUrl()}/api/Clients`;
  const requestURL = `${requestBaseUrl}/${action.clientId}?access_token=${JSON.parse(sessionStorage.getItem('jwtToken'))
    .id}`;
  yield call(request, requestURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
export function* ClientsSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClient);
  yield takeLatest('GET_CLIENTS', getClientsList);
}

export default [ClientsSaga];
