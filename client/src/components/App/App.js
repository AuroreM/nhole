import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ClientAdditionContainer from '../../containers/ClientAdditionContainer';
import ClientsDisplayContainer from '../../containers/ClientsDisplayContainer';
import MessageSendingContainer from '../../containers/MessageSendingContainer';

const App = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
`;

class AppContainer extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <Tabs>
          <TabList>
            <Tab>Ajouter un client</Tab>
            <Tab>Voir mes clients</Tab>
            <Tab>Envoyer un message</Tab>
          </TabList>
          <TabPanel>
            <ClientAdditionContainer />
          </TabPanel>
          <TabPanel>
            <ClientsDisplayContainer />
          </TabPanel>
          <TabPanel>
            <MessageSendingContainer />
          </TabPanel>
        </Tabs>
        <Footer />
      </App>
    );
  }
};

export default AppContainer;
