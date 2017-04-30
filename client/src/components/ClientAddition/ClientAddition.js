import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdateContainer from '../../containers/SlotUpdateContainer';

const App = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Courier New", Courier, monospace;
`;

const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  color: rgb(64,64,64);
  font-size: 25px;
  text-transform: uppercase;
  margin: 45px;
`;

class ClientAddition extends React.Component {
  render() {
    return (
      <App>
        <Header />
        <Body>
          <Title>Ajoutez un nouveau client</Title>
          <InfoUpdateContainer />
          <Title>Choisissez ses créneaux</Title>
          <SlotUpdateContainer />
          <button onClick={this.props.registerClient}>Enregistrer</button>
        </Body>
        <Footer />
      </App>
    );
  }
};

export default ClientAddition;
