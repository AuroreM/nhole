import { fromJS, Map } from 'immutable';
import { expect } from 'chai';
import reducer from './reducer';

describe('reducer', () => {

  const initialState = fromJS({
    firstname: '',
    lastname: '',
    number: '',
    morning: false,
    lunch: false,
    afternoon: false,
    evening: false,
  });

  it('handles SET_STATE', () => {
    const initialEmptyState = Map();
    const action = {
      type: 'SET_STATE',
      state: Map(initialState),
    };

    const nextState = reducer(initialEmptyState, action);
    expect(nextState).to.deep.equal(initialState);
  });

  it('handles UPDATE_CLIENT_INFO by changing the only the firstname', () => {
    const action = {
      type: 'UPDATE_CLIENT_INFO',
      firstname: 'Aurore',
      lastname: '',
      number: '',
    }
    const nextState = reducer(initialState, action);
    expect(nextState.get('firstname')).to.equal('Aurore');
    expect(nextState.get('lastname')).to.equal(initialState.get('lastname'));
    expect(nextState.get('number')).to.equal(initialState.get('number'));
  });

  it('handles UPDATE_CLIENT_INFO by changing the only the lastname', () => {
    const action = {
      type: 'UPDATE_CLIENT_INFO',
      firstname: '',
      lastname: 'Ma',
      number: '',
    }
    const nextState = reducer(initialState, action);
    expect(nextState.get('firstname')).to.equal(initialState.get('firstname'));
    expect(nextState.get('lastname')).to.equal('Ma');
    expect(nextState.get('number')).to.equal(initialState.get('number'));
  });

  it('handles UPDATE_CLIENT_INFO by changing the only the number', () => {
    const action = {
      type: 'UPDATE_CLIENT_INFO',
      firstname: '',
      lastname: '',
      number: '0612345678',
    }
    const nextState = reducer(initialState, action);
    expect(nextState.get('firstname')).to.equal(initialState.get('lastname'));
    expect(nextState.get('lastname')).to.equal(initialState.get('lastname'));
    expect(nextState.get('number')).to.equal('0612345678');
  });

  it('handles UPDATE_SLOT_CHOICES by changing the morning slot to true', () => {
    const action = {
      type: 'UPDATE_SLOT_CHOICES',
      slot: 'morning',
    }
    const nextState = reducer(initialState, action);
    expect(nextState.get('morning')).to.equal(!initialState.get('morning'));
    expect(nextState.get('morning')).to.equal(true);
  });

  it('handles UPDATE_SLOT_CHOICES by changing the morning slot to false', () => {
    const initialStateWithTrueMorning = fromJS({
      firstname: '',
      lastname: '',
      number: '',
      morning: true,
      lunch: false,
      afternoon: false,
      evening: false,
    });
    const action = {
      type: 'UPDATE_SLOT_CHOICES',
      slot: 'morning',
    }
    const nextState = reducer(initialStateWithTrueMorning, action);
    expect(nextState.get('morning')).to.equal(!initialStateWithTrueMorning.get('morning'));
    expect(nextState.get('morning')).to.equal(false);
  });
});
