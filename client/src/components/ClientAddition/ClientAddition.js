import React from 'react';
import styled from 'styled-components';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdate from '../../components/SlotUpdate/SlotUpdate';

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

const Message = styled.div`
  margin-top: 50px;
  color: rgb(220,20,60);
  font-weight: bold;
`;

class ClientAddition extends React.Component {
  render() {
    return (
      <Body>
        <Title>Renseignez ses informations</Title>
        <InfoUpdateContainer />
        <Title>Choisissez ses créneaux</Title>
        <SlotUpdate />
        <Button onClick={this.props.registerClient}>Enregistrer</Button>
        <Message>{this.props.message}</Message>
      </Body>
    );
  }
};

export default ClientAddition;
