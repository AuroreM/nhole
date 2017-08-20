import React from 'react';
import { mount, shallow } from 'enzyme';
import MessageSending from './MessageSending';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

// @TODO fix tests
describe('<MessageSending />', () => {
  const props = {};

  it('should contains 1 text input', () => {
    const renderedComponent = shallow(<MessageSending {...props} />);
    expect(renderedComponent.find(TextField).length).toEqual(1);
  });

  it('should contains 4 Chip', () => {
    const renderedComponent = shallow(<MessageSending {...props} />);
    expect(renderedComponent.find(Chip).length).toEqual(4);
  });
});
