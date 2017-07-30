import React from 'react';
import styled from 'styled-components';
import FaClose from 'react-icons/lib/fa/close';

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ClientContainer = styled.div`
  margin: 3vh;
`;

const Name = styled.h4`
  font-weight: bold;
  display: inline;
  flex:
`;

const iconStyle = {
  color: 'rgb(220,20,60)',
  position: 'absolute',
  right: 0,
};

class Client extends React.Component {
  render() {
    return (
      <ClientContainer>
        <List>
          <li style={{ position: 'relative' }}>
            <Name>{ this.props.client.firstname } { this.props.client.lastname } </Name>
            <FaClose style={iconStyle} onClick={() => { this.props.deleteClient(this.props.client.id)}} />
          </li>
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
