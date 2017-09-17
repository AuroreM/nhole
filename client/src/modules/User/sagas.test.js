import { put, call } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { loginSuccess } from './actions';
import { login, signup } from './sagas';

describe('login Saga successfull', () => {
  const action = {
    type: 'LOGIN',
    payload: {
      email: 'aurore@a.com',
      password: 'toto',
    },
  };
  const saga = login(action);

  it('should call the API to authenticate  the user', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'aurore@a.com', password: 'toto' }),
      })
    );
  });

  it('should call dispatch loginSuccess Action', () => {
    global.sessionStorage = jest.fn();
    global.sessionStorage.setItem = jest.fn();
    expect(saga.next().value).toEqual(put(loginSuccess()));
  });
});

describe('signup Saga', () => {
  const action = {
    type: 'SIGNUP',
    payload: {
      email: 'aurore@a.com',
      password: 'toto',
    },
  };
  const saga = signup(action);

  it('should call the API to authenticate  the user', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'aurore@a.com', password: 'toto' }),
      })
    );
  });
});
