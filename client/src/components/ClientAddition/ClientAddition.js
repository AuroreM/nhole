import React from 'react';
import styled from 'styled-components';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdate from '../../components/SlotUpdate/SlotUpdate';
import Button from '../Button/Button'
import Toastr from '../Toastr/Toastr'

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

class ClientAddition extends React.Component {
  render() {
    return (
      <Body>
        <Title>Renseignez ses informations</Title>
        <InfoUpdateContainer />
        <Title>Choisissez ses créneaux</Title>
        <SlotUpdate />
        <Button onClick={this.props.registerClient}>Enregistrer</Button>
        <Toastr>{this.props.message}</Toastr>
      </Body>
    );
  }
};

export default ClientAddition;
