import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientAddition from './ClientAddition';
import * as ClientAdditionActions from '../../modules/NewClient/actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(ClientAdditionActions, dispatch);
};

const mapStateToProps = state => ({
  morning: state.morning,
  lunch: state.lunch,
  evening: state.evening,
  afternoon: state.afternoon,
  message: state.message,
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientAddition);
