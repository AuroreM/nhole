import React from 'react';
import styled from 'styled-components';
import Client from '../Client';
import Title from '../Title/Title';

const Body = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const Clients = styled.div`
  display: flex;
  flex-direction: column;
`;

class ClientsDisplay extends React.Component {
  componentDidMount() {
    this.props.getClients();
  }

  renderClientList() {
    return (
      <Clients>
        {this.props.clients.map(function(client) {
          return <Client client={client} key={client.id} />;
        })}
      </Clients>
    );
  }

  render() {
    return (
      <Body style={{ height: '70vh' }}>
        <Title>Mes clients</Title>
        {this.props.loading ? <p /> : this.renderClientList()}
      </Body>
    );
  }
}

export default ClientsDisplay;
