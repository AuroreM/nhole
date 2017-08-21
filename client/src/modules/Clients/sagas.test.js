import { put, call } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { deleteClient, getClientsList } from './sagas';
import { getClients, getClientsSuccess, clientsListLoading } from './actions';

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

describe('getClientsList Saga', () => {
  const action = {
    type: 'GET_CLIENTS',
  };

  const saga = getClientsList(action);
  it('should display a loader on the client list page with the clientsListLoading page', () => {
    expect(saga.next().value).toEqual(put(clientsListLoading()));
  });

  it('should call the API', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Clients`, {
        method: 'GET',
      })
    );
  });

  it('should call the API to get the updated list of clients', () => {
    expect(saga.next().value).toEqual(put(getClientsSuccess()));
  });
});
