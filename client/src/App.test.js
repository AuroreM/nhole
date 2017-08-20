import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from './components/common/Header';
import ClientAddition from './pages/ClientAddition';
import ClientsDisplay from './pages/ClientsDisplay';
import MessageSending from './pages/MessageSending';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';

describe('<App />', () => {
  it('should render a Header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header).length).toEqual(1);
  });

  it('should render a BottomNavigation component', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(BottomNavigation).length).toEqual(1);
  });

  it('should render 3 BottomNavigationItem component', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(BottomNavigationItem).length).toEqual(3);
  });

  it('should render ClientAddition if selectedIndex === 0', () => {
    const renderedComponent = shallow(<App />);
    renderedComponent.setState({ selectedIndex: 0 });
    expect(renderedComponent.find(ClientAddition).length).toEqual(1);
  });

  it('should render ClientsDisplay if selectedIndex === 1', () => {
    const renderedComponent = shallow(<App />);
    renderedComponent.setState({ selectedIndex: 1 });
    expect(renderedComponent.find(ClientsDisplay).length).toEqual(1);
  });

  it('should render MessageSending if selectedIndex === 2', () => {
    const renderedComponent = shallow(<App />);
    renderedComponent.setState({ selectedIndex: 2 });
    expect(renderedComponent.find(MessageSending).length).toEqual(1);
  });

  // @TODO : Tester que lorsqu'on clique on change bien le state (Faire challenger l'utilité par Flo)
});
