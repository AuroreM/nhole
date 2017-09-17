import { put } from 'redux-saga/effects';
import { loginSuccess } from './actions';
import { login } from './sagas';

describe('login Saga', () => {
  const action = {
    type: 'LOGINS',
    payload: {
      email: 'aurore@a.com',
      password: 'toto',
    },
  };
  const saga = login(action);
  it('should call dispatch loginSuccess Action with the action token', () => {
    global.sessionStorage = jest.fn();
    global.sessionStorage.setItem = jest.fn();
    expect(saga.next().value).toEqual(put(loginSuccess()));
  });
});
