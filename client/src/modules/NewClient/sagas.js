import { delay } from 'redux-saga';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { registerClientFail, registerClientSuccess } from './actions';
import { clearMessage } from '../../actions';
import { baseUrl } from '../../config';

// @TODO: Use Redux form
export const getFirstname = state => state.firstname;
export const getLastname = state => state.lastname;
export const getNumber = state => state.number;
export const getMorning = state => state.morning;
export const getAfternoon = state => state.afternoon;
export const getLunch = state => state.lunch;
export const getEvening = state => state.evening;

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

export function* NewClientSaga() {
  yield takeLatest('REGISTER_CLIENT', sendClientToAPI);
}

export default [NewClientSaga];
