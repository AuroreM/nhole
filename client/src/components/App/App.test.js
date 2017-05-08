import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ClientAdditionContainer from '../../containers/ClientAdditionContainer';
import ClientsDisplayContainer from '../../containers/ClientsDisplayContainer';
import MessageSendingContainer from '../../containers/MessageSendingContainer';

describe('<App />', () => {

  it('should render a Header', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should render a Tabs component', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Tabs).length).toEqual(1);
  });

  it('should render a TabList component', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(TabList).length).toEqual(1);
  });

  it('should render three Tab components', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Tab).length).toEqual(3);
  });

  it('should contains "Ajouter un client"', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.contains('Ajouter un client')).toBe(true);
  });

  it('should contains "Voir mes clients"', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.contains('Voir mes clients')).toBe(true);
  });

  it('should contains "Envoyer un message"', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.contains('Envoyer un message')).toBe(true);
  });

  it('should render three TabPanel components', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Tab).length).toEqual(3);
  });

  it('should render a ClientAdditionContainer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(ClientAdditionContainer).length).toEqual(1);
  });

  it('should render a ClientsDisplayContainer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(ClientsDisplayContainer).length).toEqual(1);
  });

  it('should render a MessageSendingContainer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(MessageSendingContainer).length).toEqual(1);
  });

  it('should render a Footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Footer).length).toEqual(1);
  });
});
