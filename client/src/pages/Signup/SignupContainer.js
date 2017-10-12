import { reduxForm } from 'redux-form';
import Signup from './Signup';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signup } from '../../modules/User/actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password, smsGatewayEmail, smsGatewayPassword, smsGatewayDeviceId }) => {
    dispatch(signup(email, password, smsGatewayEmail, smsGatewayPassword, smsGatewayDeviceId));
  },
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'signup' }));
export default enhance(Signup);
