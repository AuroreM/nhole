import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfoUpdate from '../components/InfoUpdate/InfoUpdate';
import * as updateClientInfoAction from '../components/InfoUpdate/actions';

class InfoUpdateContainer extends React.Component {
  render() {
    let { dispatch  } = this.props;
    let boundActionCreators = bindActionCreators(updateClientInfoAction, dispatch);

    return (
      <InfoUpdate {...boundActionCreators} />
    );
  }
}

export default connect()(InfoUpdateContainer)
