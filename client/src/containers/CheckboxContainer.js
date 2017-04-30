import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Checkbox from '../components/Checkbox/Checkbox';
import * as updateClientSlotAction from '../components/SlotUpdate/actions';

class CheckboxContainer extends React.Component {
  render() {
    let { dispatch  } = this.props;
    let boundActionCreators = bindActionCreators(updateClientSlotAction, dispatch);

    return (
      <Checkbox slot={this.props.slot} label={this.props.label} {...boundActionCreators} />
    );
  }
}

export default connect()(CheckboxContainer)
