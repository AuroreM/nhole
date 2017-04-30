import React from 'react';
import { shallow } from 'enzyme';
import ClientAddition from './ClientAddition';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdateContainer from '../../containers/SlotUpdateContainer';

describe('<ClientAddition />', () => {
  const props = {
    addClient: (client) => {},
  };

  it('should render a Header', () => {
    const renderedComponent = shallow(
      <ClientAddition {...props} />
    );
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

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
    expect(renderedComponent.find(SlotUpdateContainer).length).toEqual(1);
  });

  it('should render a Footer', () => {
    const renderedComponent = shallow(
      <ClientAddition {...props} />
    );
    expect(renderedComponent.find(Footer).length).toEqual(1);
  });
});
