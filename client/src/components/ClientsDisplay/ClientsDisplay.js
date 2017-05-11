import React from 'react';
import styled from 'styled-components';
import Client from '../Client/Client'

const Body = styled.div`
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

const Clients = styled.div`
  display: flex;
`;

class ClientsDisplay extends React.Component {
  componentDidMount() {
    this.props.getClients();
  }

  renderClientList() {
    const leftColumn = this.props.clients.splice(0, Math.trunc(this.props.clients.length / 2) + 1);
    const rightColumn = this.props.clients;
    return (
      <Clients>
        <div>
          {
            leftColumn.map(function(client) {
              return <Client client={client} />
            })
          }
        </div>
        <div>
          {
            rightColumn.map(function(client) {
              return <Client client={client} />
            })
          }
        </div>
      </Clients>
    );
  }

  render() {
    return (
        <Body>
          <Title>Vos clients</Title>
          {
            this.props.loading ? <p></p> : this.renderClientList()
          }
        </Body>
    );
  }
};

export default ClientsDisplay;
