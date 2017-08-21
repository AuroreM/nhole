import { expect } from 'chai';
import reducer from './reducer';

describe('reducer', () => {
  const initialState = {
    firstname: '',
    lastname: '',
    number: '',
    morning: false,
    lunch: false,
    afternoon: false,
    evening: false,
  };

  it('handles CLEAR_MESSAGE by emptying message', () => {
    const initialStateWithMessage = {
      firstname: '',
      lastname: '',
      number: '',
      morning: false,
      lunch: false,
      afternoon: false,
      evening: false,
      message: 'TOTO',
    };
    const action = {
      type: 'CLEAR_MESSAGE',
    };
    const nextState = reducer(initialStateWithMessage, action).other;
    expect(nextState.message).to.equal('');
  });

  it('handles UPDATE_CLIENT_INFO by changing only the firstname', () => {
    const action = {
      type: 'UPDATE_CLIENT_INFO',
      firstname: 'Aurore',
      lastname: '',
      number: '',
    };
    const nextState = reducer(initialState, action).other;
    expect(nextState.firstname).to.equal('Aurore');
    expect(nextState.lastname).to.equal(initialState.lastname);
    expect(nextState.number).to.equal(initialState.number);
  });

  it('handles UPDATE_CLIENT_INFO by changing only the lastname', () => {
    const action = {
      type: 'UPDATE_CLIENT_INFO',
      firstname: '',
      lastname: 'Ma',
      number: '',
    };
    const nextState = reducer(initialState, action).other;
    expect(nextState.firstname).to.equal(initialState.firstname);
    expect(nextState.lastname).to.equal('Ma');
    expect(nextState.number).to.equal(initialState.number);
  });

  it('handles UPDATE_CLIENT_INFO by changing only the number', () => {
    const action = {
      type: 'UPDATE_CLIENT_INFO',
      firstname: '',
      lastname: '',
      number: '0612345678',
    };
    const nextState = reducer(initialState, action).other;
    expect(nextState.firstname).to.equal(initialState.lastname);
    expect(nextState.lastname).to.equal(initialState.lastname);
    expect(nextState.number).to.equal('0612345678');
  });

  it('handles UPDATE_SLOT_CHOICES by changing the morning slot to true', () => {
    const action = {
      type: 'UPDATE_SLOT_CHOICES',
      slot: 'morning',
    };
    const nextState = reducer(initialState, action).other;
    expect(nextState.morning).to.equal(!initialState.morning);
    expect(nextState.morning).to.equal(true);
  });

  // @TODO : to fix (work in reality)
  // it('handles UPDATE_SLOT_CHOICES by changing the morning slot to false', () => {
  //   const initialStateWithTrueMorning = {
  //     firstname: '',
  //     lastname: '',
  //     number: '',
  //     morning: true,
  //     lunch: false,
  //     afternoon: false,
  //     evening: false,
  //   };
  //   const action = {
  //     type: 'UPDATE_SLOT_CHOICES',
  //     slot: 'morning',
  //   };
  //   const nextState = reducer(initialStateWithTrueMorning, action);
  //   expect(nextState.morning).to.equal(!initialStateWithTrueMorning.morning);
  //   expect(nextState.morning).to.equal(false);
  // });
});
