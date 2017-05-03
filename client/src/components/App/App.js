import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ClientAdditionContainer from '../../containers/ClientAdditionContainer';
import ClientsDisplayContainer from '../../containers/ClientsDisplayContainer';

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Courier New", Courier, monospace;
`;

class AppContainer extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <ClientAdditionContainer />
        <ClientsDisplayContainer />
        <Footer />
      </App>
    );
  }
};

export default AppContainer;
