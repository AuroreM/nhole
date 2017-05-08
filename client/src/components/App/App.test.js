import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import ClientAdditionContainer from '../../containers/ClientAdditionContainer';
import ClientsDisplayContainer from '../../containers/ClientsDisplayContainer';

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

  it('should render two Tab components', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Tab).length).toEqual(2);
  });

  it('should render two TabPanel components', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Tab).length).toEqual(2);
  });

  it('should render a Footer', () => {
    const renderedComponent = shallow(
      <App />
    );
    expect(renderedComponent.find(Footer).length).toEqual(1);
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
});
