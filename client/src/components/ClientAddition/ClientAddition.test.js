import React from 'react';
import { shallow } from 'enzyme';
import ClientAddition from './ClientAddition';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdate from '../SlotUpdate/SlotUpdate';
import Button from '../Button/Button';

describe('<ClientAddition />', () => {
  const props = {
    addClient: (client) => {},
  };

  it('should render an InfoUpdateContainer', () => {
    const renderedComponent = shallow(
      <ClientAddition {...props} />
    );
    expect(renderedComponent.find(InfoUpdateContainer).length).toEqual(1);
  });

  it('should render an SlotUpdateContainer', () => {
    const renderedComponent = shallow(
      <ClientAddition {...props} />
    );
    expect(renderedComponent.find(SlotUpdate).length).toEqual(1);
  });

  it('should render a Button', () => {
    const renderedComponent = shallow(
      <ClientAddition {...props} />
    );
    expect(renderedComponent.find(SlotUpdate).length).toEqual(1);
  });

  // it('should dispatch REGISTER_CLIENT action when clicking on register button', () => {
  // });

  it('should render a message if any', () => {
    const renderedComponent = shallow(
      <ClientAddition {...props} message={'Client ajouté'} />
    );
    expect(renderedComponent.contains('Client ajouté')).toBe(true);
  });
});
