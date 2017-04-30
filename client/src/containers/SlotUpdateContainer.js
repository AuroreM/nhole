import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SlotUpdate from '../components/SlotUpdate/SlotUpdate';
import * as updateClientSlotAction from '../components/SlotUpdate/actions';

class SlotUpdateContainer extends React.Component {
  render() {
    let { dispatch  } = this.props;
    let boundActionCreators = bindActionCreators(updateClientSlotAction, dispatch);

    return (
      <SlotUpdate {...boundActionCreators} />
    );
  }
}

export default connect()(SlotUpdateContainer)
