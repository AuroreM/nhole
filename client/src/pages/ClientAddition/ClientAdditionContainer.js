import { connect } from 'react-redux';
import ClientAddition from './ClientAddition';
import { registerClient } from '../../modules/NewClient/actions';
import { toastrSelector } from '../../modules/Toastr/reducer';

const MapDispatchToProps = {
  registerClient,
};

const mapStateToProps = state => ({
  morning: state.newClient.morning,
  lunch: state.newClient.lunch,
  evening: state.newClient.evening,
  afternoon: state.newClient.afternoon,
  toastr: toastrSelector(state),
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientAddition);
