import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import ClientAddition from '../../pages/ClientAddition';
import ClientsDisplay from '../../pages/ClientsDisplay';
import MessageSending from '../../pages/MessageSending';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import FontIcon from 'material-ui/FontIcon';

const App = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
`;

class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = { selectedIndex: 0 };
  }

  renderTab() {
    const mapStateToComponent = {
      0: <ClientAddition />,
      1: <ClientsDisplay />,
      2: <MessageSending />,
    };

    return mapStateToComponent[this.state.selectedIndex];
  }

  renderClientAddition = () => this.setState({ selectedIndex: 0 });
  renderClientsDisplay = () => this.setState({ selectedIndex: 1 });
  renderMessageSending = () => this.setState({ selectedIndex: 2 });

  render() {
    const addClient = (
      <FontIcon
        className="material-icons"
        style={{ fontSize: '36px' }}
        color={this.state.selectedIndex === 0 ? 'rgb(30,144,255)' : 'rgb(64,64,64)'}
      >
        add_circle
      </FontIcon>
    );
    const seeList = (
      <FontIcon
        className="material-icons"
        style={{ fontSize: '36px' }}
        color={this.state.selectedIndex === 1 ? 'rgb(30,144,255)' : 'rgb(64,64,64)'}
      >
        list
      </FontIcon>
    );
    const sendMessage = (
      <FontIcon
        className="material-icons"
        style={{ fontSize: '34px' }}
        color={this.state.selectedIndex === 2 ? 'rgb(30,144,255)' : 'rgb(64,64,64)'}
      >
        message
      </FontIcon>
    );
    return (
      <App>
        <Header />
        {this.renderTab()}
        <BottomNavigation
          selectedIndex={this.state.selectedIndex}
          style={{ position: 'fixed', left: '0px', bottom: '0px' }}
        >
          <BottomNavigationItem icon={addClient} onClick={this.renderClientAddition} />
          <BottomNavigationItem icon={seeList} onClick={this.renderClientsDisplay} />
          <BottomNavigationItem icon={sendMessage} onClick={this.renderMessageSending} />
        </BottomNavigation>
      </App>
    );
  }
}

export default AppContainer;
