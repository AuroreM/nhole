import { takeLatest, call, put } from 'redux-saga/effects';
import request from '../../utils/request';
import { handleToastr } from '../Toastr/actions';
import { baseUrl } from '../../config';

export function* sendMessage({ message, slot }) {
  const requestURL = `${baseUrl()}/api/Clients/sendMessage?access_token=${JSON.parse(sessionStorage.getItem('jwtToken'))
    .id}`;
  const body = JSON.stringify({ message, slot });
  try {
    yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    yield put(handleToastr('Message envoyé !'));
  } catch (err) {
    yield put(handleToastr("Un problème est survenu, le message n'a pas été envoyé"));
  }
}

export function* MessageSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessage);
}

export default [MessageSaga];
