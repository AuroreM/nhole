import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { handleToastr } from './sagas';
import { displayToastr, clearToastr } from './actions';

describe('toastr Saga', () => {
  const action = {
    type: 'HANDLE_TOASTR',
    wording: 'Message envoyé !',
  };
  const saga = handleToastr(action);

  it('should clear the toastr', () => {
    expect(saga.next().value).toEqual(put(displayToastr('Message envoyé !')));
  });

  it('should wait 4 seconds', () => {
    expect(saga.next().value).toEqual(call(delay, 4000));
  });

  it('should clear the toastr', () => {
    expect(saga.next().value).toEqual(put(clearToastr()));
  });
});
