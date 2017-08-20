import React from 'react';
import { mount, shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import MessageSending from './MessageSending';
import Button from '../../components/common/Button';

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

  it('should contains 1 Button', () => {
    const renderedComponent = shallow(<MessageSending {...props} />);
    expect(renderedComponent.find(Button).length).toEqual(1);
  });
});
