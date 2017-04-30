import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { registerClient } from './actions';

const getFirstname = (state) => state.get('firstname');
const getLastname = (state) => state.get('lastname');
const getNumber = (state) => state.get('number');
const getMorning = (state) => state.get('morning');
const getAfternoon = (state) => state.get('afternoon');
const getLunch = (state) => state.get('lunch');
const getEvening = (state) => state.get('evening');

export function* sendClientToAPI() {
  // const requestURL = `http://localhost:43301/Clients`;

  console.log("questionData");
  try {
    const questionData = yield call(request, requestURL, { method: 'GET' });
    console.log(questionData);
    // yield put(registerClientSuccess());
  } catch (err) {
    // yield put(registerClientFail());
  }
}

export function* questionFlow() {
  console.log('TOTI')
  yield takeLatest('REGISTER_CLIENT', sendClientToAPI);
}

export default [
  questionFlow,
];
