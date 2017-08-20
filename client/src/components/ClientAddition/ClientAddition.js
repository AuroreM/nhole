import React from 'react';
import styled from 'styled-components';
import InfoUpdate from '../InfoUpdate';
import SlotUpdate from '../../components/SlotUpdate/';
import Title from '../Title/Title';
import Toastr from '../Toastr/Toastr';
import Button from '../Button';

const Body = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

class ClientAddition extends React.Component {
  render() {
    return (
      <Body style={{ height: '70vh' }}>
        <Title>Renseignez ses informations</Title>
        <InfoUpdate />
        <Title>Choisissez ses créneaux</Title>
        <SlotUpdate />
        <Toastr>
          {this.props.message}
        </Toastr>
        <Button onClick={this.props.registerClient} label="Enregistrer" />
      </Body>
    );
  }
}

export default ClientAddition;
