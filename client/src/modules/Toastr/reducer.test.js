import { expect } from 'chai';
import reducer from './reducer';

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
