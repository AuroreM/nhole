import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { sendMessage } from './actions';

export function* sendMessageToAPI({ message }) {
  console.log(message);
}

export function* MessageSendingSaga() {
  yield takeLatest('SEND_MESSAGE', sendMessageToAPI);
}

export default [
  MessageSendingSaga,
];
