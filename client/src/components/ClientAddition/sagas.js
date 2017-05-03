import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { registerClientFail, registerClientSuccess } from '../../actions';

const getFirstname = (state) => state.get('firstname');
const getLastname = (state) => state.get('lastname');
const getNumber = (state) => state.get('number');
const getMorning = (state) => state.get('morning');
const getAfternoon = (state) => state.get('afternoon');
const getLunch = (state) => state.get('lunch');
const getEvening = (state) => state.get('evening');

export function* sendClientToAPI() {
  const requestURL = `http://vps395184.ovh.net:43301/api/Clients`;
  const body = JSON.stringify({
    firstname: yield select(getFirstname),
    lastname: yield select(getLastname),
    number: yield select(getNumber),
    morning: yield select(getMorning),
    lunch: yield select(getLunch),
    afternoon: yield select(getAfternoon),
    evening: yield select(getEvening),
  });
  console.log(body)
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
