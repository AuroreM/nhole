import { put, call } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { sendMessage } from './sagas';
import { sendMessageSuccess } from './actions';

describe('sendMessage Saga', () => {
  const action = {
    type: 'SEND_MESSAGE',
    message: 'The message',
    slot: 'morning',
  };

  const saga = sendMessage(action);

  it('should call the API with the delete method', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Clients/morning`, {
        method: 'POST',
        body: JSON.stringify({
          message: 'The message',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  });

  it('should call the API to get the updated list of clients', () => {
    expect(saga.next().value).toEqual(put(sendMessageSuccess()));
  });

  // Message is not tested as the behaviour will change
});
