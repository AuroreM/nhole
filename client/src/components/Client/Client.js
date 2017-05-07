import React from 'react';
import styled from 'styled-components';

class Client extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>Nom : { this.props.client.firstname } { this.props.client.lastname }</li>
          <li>Numéro de téléphone : { this.props.client.number }</li>
          <li>Créneaux : {this.props.client.morning ? 'Matin, ' : ''}
                          {this.props.client.lunch ? 'Midi, ' : ''}
                          {this.props.client.afternoon ? 'Après-midi, ' : ''}
                          {this.props.client.evening ? 'Soirée, ' : ''} </li>
        </ul>
      </div>
    );
  }
};

export default Client;
