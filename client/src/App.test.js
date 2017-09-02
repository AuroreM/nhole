import React from 'react';
import { shallow } from 'enzyme';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import App from './App';
import Header from './components/common/Header';
import ClientAddition from './pages/ClientAddition';
import ClientsDisplay from './pages/ClientsDisplay';
import MessageSending from './pages/MessageSending';
import Login from './pages/Login';

describe('<App />', () => {
  describe('With an authorized user', () => {
    it('should render a Header', () => {
      const renderedComponent = shallow(<App isUserAuthorized />);
      expect(renderedComponent.find(Header).length).toEqual(1);
    });

    it('should render a BottomNavigation component', () => {
      const renderedComponent = shallow(<App isUserAuthorized />);
      expect(renderedComponent.find(BottomNavigation).length).toEqual(1);
    });

    it('should render 3 BottomNavigationItem component', () => {
      const renderedComponent = shallow(<App isUserAuthorized />);
      expect(renderedComponent.find(BottomNavigationItem).length).toEqual(3);
    });

    it('should render ClientAddition if selectedIndex === 0', () => {
      const renderedComponent = shallow(<App isUserAuthorized />);
      renderedComponent.setState({ selectedIndex: 0 });
      expect(renderedComponent.find(ClientAddition).length).toEqual(1);
    });

    it('should render ClientsDisplay if selectedIndex === 1', () => {
      const renderedComponent = shallow(<App isUserAuthorized />);
      renderedComponent.setState({ selectedIndex: 1 });
      expect(renderedComponent.find(ClientsDisplay).length).toEqual(1);
    });

    it('should render MessageSending if selectedIndex === 2', () => {
      const renderedComponent = shallow(<App isUserAuthorized />);
      renderedComponent.setState({ selectedIndex: 2 });
      expect(renderedComponent.find(MessageSending).length).toEqual(1);
    });

    // @TODO : Tester que lorsqu'on clique on change bien le state (Faire challenger l'utilité par Flo)
  });

  describe('With an unauthorized user', () => {
    it('should render a Header', () => {
      const renderedComponent = shallow(<App isUserAuthorized={false} />);
      expect(renderedComponent.find(Header).length).toEqual(1);
    });

    it('should render the Login component', () => {
      const renderedComponent = shallow(<App isUserAuthorized={false} />);
      expect(renderedComponent.find(Login).length).toEqual(1);
    });
  });
});
