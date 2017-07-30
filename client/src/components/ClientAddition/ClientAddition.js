import React from 'react';
import styled from 'styled-components';
import InfoUpdateContainer from '../../containers/InfoUpdateContainer';
import SlotUpdate from '../../components/SlotUpdate/SlotUpdate';
import Title from '../Title/Title';
import Toastr from '../Toastr/Toastr';
import RaisedButton from 'material-ui/RaisedButton';

const Body = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y:scroll;
`;

class ClientAddition extends React.Component {
  render() {
    return (
      <Body>
        <Title>Renseignez ses informations</Title>
        <InfoUpdateContainer />
        <Title>Choisissez ses créneaux</Title>
        <SlotUpdate />
        <Toastr>{this.props.message}</Toastr>
        <RaisedButton onClick={this.props.registerClient} style={{margin: '10px'}} label="Enregistrer" backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)"/>
      </Body>
    );
  }
};

export default ClientAddition;
