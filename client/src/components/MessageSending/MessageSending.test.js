import React from 'react';
import { mount } from 'enzyme';
import MessageSending from './MessageSending';

describe('<MessageSending />', () => {
  const props = {
  };

  it('should contains envoyer un message', () => {
    const renderedComponent = mount(
      <MessageSending {...props} />
    );
    expect(renderedComponent.text()).toContain('Envoyer un message');
  });
});
