import React from 'react';
import styled from 'styled-components';
import Client from '../../components/ClientsDisplay/Client';
import Title from '../../components/common/Title';

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
  componentWillMount() {
    this.props.getClients();
  }

  renderClientList() {
    return (
      <Clients>
        {this.props.clients.list.map(function(client) {
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
