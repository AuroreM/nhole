import { expect } from 'chai';
import reducer, { authorizationSelector } from './reducer';

describe('User module', () => {
  describe('reducer', () => {
    it('should authorize the user when dispatching login action', () => {
      const action = {
        type: 'LOGIN_SUCCESS',
      };
      const initialState = {};
      expect(reducer(initialState, action).isAuthorized).to.equal(true);
    });
  });

  describe('authorizationSelector', () => {
    it('should return false if the user is not authorized', () => {
      const initialState = {
        user: {
          isAuthorized: false,
        },
      };

      expect(authorizationSelector(initialState)).to.equal(false);
    });
  });
});
