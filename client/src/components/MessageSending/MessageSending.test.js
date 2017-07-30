import React from 'react';
import { mount, shallow } from 'enzyme';
import MessageSending from './MessageSending';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

// @TODO fix tests
describe('<MessageSending />', () => {
  const props = {
  };

  it('should contains 4 text inputs', () => {
    const renderedComponent = shallow(
      <MessageSending {...props} />
    );
    expect(renderedComponent.find(TextField).length).toEqual(4);
  });

  it('should contains 4 buttons', () => {
    const renderedComponent = shallow(
      <MessageSending {...props} />
    );
    expect(renderedComponent.find(RaisedButton).length).toEqual(4);
  });
});
