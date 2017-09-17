import { expect } from 'chai';
import reducer, { authorizationSelector } from './reducer';

describe('User module', () => {
  describe('reducer', () => {
    it('should authorized the user when dispatching login action', () => {
      const action = {
        type: 'LOGIN_SUCCESS',
      };
      const initialState = {};
      expect(reducer(initialState, action).isAuthorized).to.equal(true);
    });
  });

  describe('authorizationSelector', () => {
    it('should false if the user is not authorized', () => {
      const initialState = {
        user: {
          isAuthorized: false,
        },
      };

      expect(authorizationSelector(initialState)).to.equal(false);
    });
  });
});
