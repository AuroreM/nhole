import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SlotUpdate from './SlotUpdate';
import * as SlotUpdateActions from './actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(SlotUpdateActions, dispatch);
};

export default connect(null, MapDispatchToProps)(SlotUpdate);
