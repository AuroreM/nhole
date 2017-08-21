import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { sendClient } from './sagas';
import { registerClientSuccess } from './actions';
import { displayToastr, clearToastr } from '../Toastr/actions';
import { getFirstname, getLastname, getNumber, getMorning, getLunch, getAfternoon, getEvening } from './sagas';

describe('sendClient Saga when message is sent', () => {
  const action = {
    type: 'REGISTER_CLIENT',
  };

  const saga = sendClient(action);

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

  it('should display a success toastr', () => {
    expect(saga.next().value).toEqual(put(displayToastr('Client enregistré !')));
  });

  it('should wait 2 seconds', () => {
    expect(saga.next().value).toEqual(call(delay, 2000));
  });

  it('should clear the toastr', () => {
    expect(saga.next().value).toEqual(put(clearToastr("Un problème est survenu lors de l'enregistrement")));
  });
});
