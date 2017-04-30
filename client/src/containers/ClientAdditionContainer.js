import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientAddition from '../components/ClientAddition/ClientAddition';
import * as ClientAdditionActions from '../actions';

class ClientAdditionContainer extends React.Component {
  render() {
    let { dispatch  } = this.props;
    let boundActionCreators = bindActionCreators(ClientAdditionActions, dispatch);

    return (
      <ClientAddition {...boundActionCreators} />
    );
  }
}

export default connect()(ClientAdditionContainer)
