import { reduxForm } from 'redux-form';
import Signup from './Signup';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { signup } from '../../modules/User/actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => {
    dispatch(signup(email, password));
  },
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'signup' }));
export default enhance(Signup);
