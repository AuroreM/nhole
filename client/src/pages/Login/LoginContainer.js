import { reduxForm } from 'redux-form';
import Login from './Login';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { login } from '../../modules/User/actions';

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ email, password }) => {
    dispatch(login(email, password));
  },
});

const enhance = compose(connect(null, mapDispatchToProps), reduxForm({ form: 'login' }));
export default enhance(Login);
