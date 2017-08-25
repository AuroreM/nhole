import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { sendMessage } from './sagas';
import { displayToastr, clearToastr } from '../Toastr/actions';

describe('sendMessage Saga - Success case', () => {
  const action = {
    type: 'SEND_MESSAGE',
    message: 'The message',
    slot: 'morning',
  };

  const saga = sendMessage(action);

  it('should call the API with the delete method', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Clients/sendMessage`, {
        method: 'POST',
        body: JSON.stringify({
          message: 'The message',
          slot: 'morning',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  });

  it('should display a successful toastr', () => {
    expect(saga.next().value).toEqual(put(displayToastr('Message envoyé !')));
  });

  it('should wait 2 seconds', () => {
    expect(saga.next().value).toEqual(call(delay, 2000));
  });

  it('should clear the toastr', () => {
    expect(saga.next().value).toEqual(put(clearToastr()));
  });
});
