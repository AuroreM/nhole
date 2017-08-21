import { expect } from 'chai';
import reducer from './reducer';

describe('Clients reducer', () => {
  const initialState = {
    list: [],
    loading: false,
  };

  it('handles CLIENT_LIST_LOADING by setting loading to true', () => {
    const action = {
      type: 'CLIENT_LIST_LOADING',
    };
    const nextState = reducer(initialState, action);
    expect(nextState.loading).to.equal(!initialState.loading);
    expect(nextState.loading).to.equal(true);
  });

  const clients = [
    ('client': {
      firstname: 'Aurore',
      lastname: 'Ma',
      number: '01',
      morning: false,
      lunch: true,
      afternoon: false,
      evening: true,
    }),
    ('client': {
      firstname: 'Christine',
      lastname: 'Ma',
      number: '02',
      morning: true,
      lunch: false,
      afternoon: false,
      evening: true,
    }),
  ];

  it('handles GET_CLIENTS_SUCCESS by setting loading to false', () => {
    const initialStateWithTrueLoading = {
      firstname: '',
      lastname: '',
      number: '',
      morning: false,
      lunch: false,
      afternoon: false,
      evening: false,
      loading: true,
    };
    const action = {
      type: 'GET_CLIENTS_SUCCESS',
      clients,
    };
    const nextState = reducer(initialStateWithTrueLoading, action);
    expect(nextState.loading).to.equal(!initialStateWithTrueLoading.loading);
    expect(nextState.loading).to.equal(false);
  });

  it('handles GET_CLIENTS_SUCCESS by setting clients', () => {
    const action = {
      type: 'GET_CLIENTS_SUCCESS',
      clients,
    };
    const nextState = reducer(initialState, action);
    expect(nextState.list).to.equal(clients);
  });
});
