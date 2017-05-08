import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ClientAdditionContainer from '../../containers/ClientAdditionContainer';
import ClientsDisplayContainer from '../../containers/ClientsDisplayContainer';

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
            <Tab>Voir</Tab>
          </TabList>
          <TabPanel>
            <ClientAdditionContainer />
          </TabPanel>
          <TabPanel>
            <ClientsDisplayContainer />
          </TabPanel>
        </Tabs>
        <Footer />
      </App>
    );
  }
};

export default AppContainer;
