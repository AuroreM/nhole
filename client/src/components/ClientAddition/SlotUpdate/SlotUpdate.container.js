import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SlotUpdate from './SlotUpdate';
// WARNING : all the new client actions are bound ...
import * as SlotUpdateActions from '../../../modules/NewClient/actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(SlotUpdateActions, dispatch);
};

export default connect(null, MapDispatchToProps)(SlotUpdate);
