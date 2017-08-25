import { delay } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { clearToastr, displayToastr } from '../Toastr/actions';
import { baseUrl } from '../../config';

export function* sendMessage({ message, slot }) {
  const requestURL = `${baseUrl()}/api/Clients/sendMessage`;
  const body = JSON.stringify({ message, slot });
  try {
    yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(displayToastr('Message envoyé !'));
    yield call(delay, 2000);
    yield put(clearToastr());
  } catch (err) {
    yield put(displayToastr("Un problème est survenu, le message n'a pas été envoyé"));
  }
}

export function* MessageSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessage);
}

export default [MessageSaga];
