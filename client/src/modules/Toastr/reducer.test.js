import { expect } from 'chai';
import reducer, { toastrSelector } from './reducer';

describe('Toastr modules', () => {
  describe('reducer', () => {
    it('handles CLEAR_TOASTR by emptying message', () => {
      const initialState = {
        wording: 'TOTO',
      };
      const action = {
        type: 'CLEAR_TOASTR',
      };
      const nextState = reducer(initialState, action);
      expect(nextState.wording).to.equal('');
    });

    it('handles DISPLAY_TOASTR by emptying message', () => {
      const initialState = {
        wording: '',
      };
      const action = {
        type: 'DISPLAY_TOASTR',
        wording: 'Foo',
      };
      const nextState = reducer(initialState, action);
      expect(nextState.wording).to.equal('Foo');
    });
  });
});

describe('toastSelector', () => {
  it('should select the toast wording', () => {
    const state = {
      toastr: {
        wording: 'Hello world!',
      },
    };
    expect(toastrSelector(state)).to.equal('Hello world!');
  });
});
