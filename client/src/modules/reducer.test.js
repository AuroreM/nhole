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
});
