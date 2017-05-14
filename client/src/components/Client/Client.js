import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style-type: none;
`;

const ClientContainer = styled.div`
  margin: 1vh;
`;

const Name = styled.h4`
  font-weight: bold;
  display: inline;
`;

class Client extends React.Component {
  render() {
    return (
      <ClientContainer>
        <List>
          <li><Name>{ this.props.client.firstname } { this.props.client.lastname } </Name></li>
          <li>N° de téléphone : { this.props.client.number }</li>
          <li>Créneaux : {this.props.client.morning ? 'Matin, ' : ''}
                          {this.props.client.lunch ? 'Midi, ' : ''}
                          {this.props.client.afternoon ? 'Après-midi, ' : ''}
                          {this.props.client.evening ? 'Soirée, ' : ''} </li>
        </List>
      </ClientContainer>
    );
  }
};

export default Client;
