import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { sendMessageFail, sendMessageSuccess } from './actions';

export function* sendMessageToAPI({ message, slot }) {
  // Send message only to morning client
  const requestURL = `http://vps395184.ovh.net:43301/api/Clients/${slot}`;
  const body = JSON.stringify({message: message})
  try {
    const response = yield call(
      request,
      requestURL,
      {
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log(response);
    yield put(sendMessageSuccess());
  } catch (err) {
    yield put(sendMessageFail());
  }
}

export function* MessageSendingSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessageToAPI);
}

export default [
  MessageSendingSaga,
];
