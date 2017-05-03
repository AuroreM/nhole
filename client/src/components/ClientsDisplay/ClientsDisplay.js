import React from 'react';
import styled from 'styled-components';

const Clients = styled.div`
`;

const Title = styled.h1`
  color: rgb(64,64,64);
  font-size: 25px;
  text-transform: uppercase;
  margin: 20px;
`;

class ClientsDisplay extends React.Component {
  componentWillMount() {
    this.props.getClients();
  }

  render() {
    return (
        <div>
          <Title>Vos clients</Title>
          <Clients>
          </Clients>
        </div>
    );
  }
};

export default ClientsDisplay;
