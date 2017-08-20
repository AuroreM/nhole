import { put, call, select } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { sendClientToAPI } from './sagas';
import { registerClientSuccess } from './actions';
import { getFirstname, getLastname, getNumber, getMorning, getLunch, getAfternoon, getEvening } from './sagas';

describe('sendClientToAPI Saga when message is sent', () => {
  const action = {
    type: 'REGISTER_CLIENT',
  };

  const saga = sendClientToAPI(action);

  it('should get all the usefull information from the store', () => {
    expect(saga.next().value).toEqual(select(getFirstname));
    expect(saga.next('Aurore').value).toEqual(select(getLastname));
    expect(saga.next('Ma').value).toEqual(select(getNumber));
    expect(saga.next('0612345678').value).toEqual(select(getMorning));
    expect(saga.next(false).value).toEqual(select(getLunch));
    expect(saga.next(true).value).toEqual(select(getAfternoon));
    expect(saga.next(false).value).toEqual(select(getEvening));
  });

  it('should call the API with the delete method', () => {
    expect(saga.next(false).value).toEqual(
      call(request, `${baseUrl()}/api/Clients`, {
        method: 'POST',
        body: JSON.stringify({
          firstname: 'Aurore',
          lastname: 'Ma',
          number: '0612345678',
          morning: false,
          lunch: true,
          afternoon: false,
          evening: false,
          // @Todo : Mock new Date()
          id: new Date().getTime(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    );
  });

  it('should dispatch the registerClientSuccess', () => {
    expect(saga.next().value).toEqual(put(registerClientSuccess()));
  });
  // Message is not tested as the behaviour will change
});
