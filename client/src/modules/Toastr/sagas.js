import { delay } from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';
import { clearToastr, displayToastr } from '../Toastr/actions';

export function* handleToastr(action) {
  yield put(displayToastr(action.wording));
  yield call(delay, 4000);
  yield put(clearToastr());
}

export function* ToastrSaga() {
  yield takeEvery('HANDLE_TOASTR', handleToastr);
}

export default [ToastrSaga];
