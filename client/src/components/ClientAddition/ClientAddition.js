import React from 'react';
import styled from 'styled-components';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdateContainer from '../../containers/SlotUpdateContainer';

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
  margin: 20px;
`;

const Button = styled.button`
  background-color: rgb(64,64,64);
  border: 1px solid rgb(64,64,64);
  display: inline-block;
  cursor: pointer;
  color: rgb(30,144,255);
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding:16px 40px;
  margin-top: 50px;
  &:hover {
    background-color: rgb(70,70,70);
  }
`;

class ClientAddition extends React.Component {
  render() {
    return (
      <Body>
        <Title>Ajoutez un nouveau client</Title>
        <InfoUpdateContainer />
        <Title>Choisissez ses créneaux</Title>
        <SlotUpdateContainer />
        <Button onClick={this.props.registerClient}>Enregistrer</Button>
      </Body>
    );
  }
};

export default ClientAddition;
