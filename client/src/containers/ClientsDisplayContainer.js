import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientsDisplay from '../components/ClientsDisplay/ClientsDisplay';
import * as ClientsDisplayActions from '../components/ClientsDisplay/actions';

class ClientsDisplayContainer extends React.Component {
  render() {
    let { dispatch  } = this.props;
    let boundActionCreators = bindActionCreators(ClientsDisplayActions, dispatch);

    return (
      <ClientsDisplay {...boundActionCreators} />
    );
  }
}

export default connect()(ClientsDisplayContainer)
