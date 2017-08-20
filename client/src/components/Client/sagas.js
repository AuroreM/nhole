import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { clearMessage } from '../../actions';
import { getClients } from '../../pages/ClientsDisplay/actions';
import { baseUrl } from '../../config';

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

export function* ClientSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClient);
}

export default [ClientSaga];
