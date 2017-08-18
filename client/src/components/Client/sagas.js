import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { clearMessage } from '../../actions';
import { deleteClientSuccess, deleteClientFail } from './actions';
import { getClients } from '../ClientsDisplay/actions';
import { baseUrl } from '../../config';

export function* deleteClient(action) {
  const requestURL = `${baseUrl()}/api/Clients/${action.clientId}`;
  const response = yield call(request, requestURL, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  yield put(getClients());
  yield delay(2000);
  yield put(clearMessage());
}

export function* ClientSaga() {
  yield takeLatest('DELETE_CLIENT', deleteClient);
}

export default [ClientSaga];
