import { connect } from 'react-redux';
import ClientAddition from './ClientAddition';
import { registerClient } from '../../modules/NewClient/actions';

const MapDispatchToProps = {
  registerClient,
};

const mapStateToProps = state => ({
  morning: state.newClient.morning,
  lunch: state.newClient.lunch,
  evening: state.newClient.evening,
  afternoon: state.newClient.afternoon,
  toast: state.toastr.wording,
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientAddition);
