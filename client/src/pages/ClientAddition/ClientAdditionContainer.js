import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientAddition from './ClientAddition';
import * as ClientAdditionActions from '../../modules/NewClient/actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(ClientAdditionActions, dispatch);
};

const mapStateToProps = state => ({
  morning: state.newClient.morning,
  lunch: state.newClient.lunch,
  evening: state.newClient.evening,
  afternoon: state.newClient.afternoon,
  message: state.other.message,
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientAddition);
