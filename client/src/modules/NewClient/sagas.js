import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from '../../utils/request';
import { registerClientSuccess } from './actions';
import { handleToastr } from '../Toastr/actions';
import { baseUrl } from '../../config';

// @TODO: Use Redux form
export const getFirstname = state => state.newClient.firstname;
export const getLastname = state => state.newClient.lastname;
export const getNumber = state => state.newClient.number;
export const getMorning = state => state.newClient.morning;
export const getAfternoon = state => state.newClient.afternoon;
export const getLunch = state => state.newClient.lunch;
export const getEvening = state => state.newClient.evening;

export function* sendClient() {
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
    yield put(handleToastr('Client enregistré !'));
  } catch (err) {
    yield put(handleToastr("Un problème est survenu lors de l'enregistrement"));
  }
}

export function* NewClientSaga() {
  yield takeLatest('REGISTER_CLIENT', sendClient);
}

export default [NewClientSaga];
