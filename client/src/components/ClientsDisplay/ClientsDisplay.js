import React from 'react';
import styled from 'styled-components';
import Client from '../Client/Client'

const Title = styled.h1`
  color: rgb(64,64,64);
  font-size: 25px;
  text-transform: uppercase;
  margin: 20px;
`;

class ClientsDisplay extends React.Component {
  componentDidMount() {
    this.props.getClients();
  }

  renderClientList() {
    return (
      <div>
        {
          this.props.clients.map(function(client) {
            return <Client client={client} />
          })
        }
      </div>
    );
  }

  render() {
    return (
        <div>
          <Title>Vos clients</Title>
          {
            this.props.loading ? <p>LOADING</p> : this.renderClientList()
          }
        </div>
    );
  }
};

export default ClientsDisplay;
