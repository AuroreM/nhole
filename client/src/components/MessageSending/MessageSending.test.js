import React from 'react';
import { mount, shallow } from 'enzyme';
import MessageSending from './MessageSending';
import Button from '../Button/Button';
import MessageArea from '../MessageArea/MessageArea';

describe('<MessageSending />', () => {
  const props = {
  };

  it('should contains 4 text inputs', () => {
    const renderedComponent = shallow(
      <MessageSending {...props} />
    );
    expect(renderedComponent.find(MessageArea).length).toEqual(4);
  });

  it('should contains 4 buttons', () => {
    const renderedComponent = shallow(
      <MessageSending {...props} />
    );
    expect(renderedComponent.find(Button).length).toEqual(4);
  });

  it('should contains Envoyer', () => {
    const renderedComponent = mount(
      <MessageSending {...props} />
    );
    expect(renderedComponent.text()).toContain('Envoyer');
  });

  it('should render a message if any', () => {
    const renderedComponent = mount(
      <MessageSending {...props} message={'Message envoyé'} />
    );
    expect(renderedComponent.text()).toContain('Message envoyé');
  });
});
