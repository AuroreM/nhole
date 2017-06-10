import { delay } from 'redux-saga'
import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { registerClientFail, registerClientSuccess } from './actions';
import { clearMessage } from '../../actions';

const getFirstname = (state) => state.get('firstname');
const getLastname = (state) => state.get('lastname');
const getNumber = (state) => state.get('number');
const getMorning = (state) => state.get('morning');
const getAfternoon = (state) => state.get('afternoon');
const getLunch = (state) => state.get('lunch');
const getEvening = (state) => state.get('evening');

export function* sendClientToAPI() {
  const requestURL = `http://nhole.ovh/api/Clients`;
  const body = JSON.stringify({
    firstname: yield select(getFirstname),
    lastname: yield select(getLastname),
    number: yield select(getNumber),
    morning: yield select(getMorning),
    lunch: yield select(getLunch),
    afternoon: yield select(getAfternoon),
    evening: yield select(getEvening),
    id: new Date().getTime(),
  });
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
    yield put(registerClientSuccess());
    yield delay(2000);
    yield put(clearMessage());
  } catch (err) {
    yield put(registerClientFail());
  }
}

export function* ClientAdditionSaga() {
  yield takeLatest('REGISTER_CLIENT', sendClientToAPI);
}

export default [
  ClientAdditionSaga,
];
