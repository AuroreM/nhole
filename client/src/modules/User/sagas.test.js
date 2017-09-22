import { put, call } from 'redux-saga/effects';
import { baseUrl } from '../../config';
import request from '../../utils/request';
import { loginSuccess } from './actions';
import { loginCall, login, signup } from './sagas';
import { handleToastr } from '../Toastr/actions';

const params = {
  email: 'aurore@a.com',
  password: 'toto',
};
describe('loginCall successfull', () => {
  const saga = loginCall(params);

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

describe('login Saga successfull', () => {
  const action = {
    type: 'LOGIN',
    payload: params,
  };
  const saga = login(action);

  it('should call loginCall', () => {
    expect(saga.next().value).toEqual(call(loginCall, params));
  });
});

describe('signup Saga', () => {
  const action = {
    type: 'SIGNUP',
    payload: params,
  };
  const saga = signup(action);

  it('should call the API to create the user', () => {
    expect(saga.next().value).toEqual(
      call(request, `${baseUrl()}/api/Users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      })
    );
  });

  it('should authenticate the user', () => {
    expect(saga.next().value).toEqual(call(loginCall, params));
  });

  it('should display a success toastr', () => {
    expect(saga.next().value).toEqual(put(handleToastr('Votre compte a bien été créé.')));
  });
});
