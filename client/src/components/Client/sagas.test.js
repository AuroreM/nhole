import { put, call } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { deleteClient } from './sagas';
import { getClients } from '../ClientsDisplay/actions';

describe('deleteClient Saga', () => {
  const action = {
    type: 'DELETE_CLIENT',
    clientId: 1,
  };

  const saga = deleteClient(action);

  it('should call the API with the delete method', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Clients/1`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  });

  it('should call the API to get the updated list of clients', () => {
    expect(saga.next().value).toEqual(put(getClients()));
  });

  // Message is not tested as the behaviour will change
});
