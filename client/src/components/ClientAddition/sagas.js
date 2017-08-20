import { delay } from 'redux-saga';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { registerClientFail, registerClientSuccess } from './actions';
import { clearMessage } from '../../actions';
import { baseUrl } from '../../config';

const getFirstname = state => state.firstname;
const getLastname = state => state.lastname;
const getNumber = state => state.number;
const getMorning = state => state.morning;
const getAfternoon = state => state.afternoon;
const getLunch = state => state.lunch;
const getEvening = state => state.evening;

export function* sendClientToAPI() {
  const requestURL = `${baseUrl()}/api/Clients`;
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
    yield call(request, requestURL, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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

export default [ClientAdditionSaga];
