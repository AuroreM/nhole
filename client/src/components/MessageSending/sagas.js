import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { sendMessageFail, sendMessageSuccess } from './actions';
import { clearMessage } from '../../actions';
import { baseUrl } from '../../config';

export function* sendMessageToAPI({ message, slot }) {
  const requestURL = `${baseUrl()}/api/Clients/${slot}`;
  const body = JSON.stringify({ message: message });
  try {
    const response = yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(sendMessageSuccess());
    yield delay(2000);
    yield put(clearMessage());
  } catch (err) {
    yield put(sendMessageFail());
  }
}

export function* MessageSendingSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessageToAPI);
}

export default [MessageSendingSaga];
