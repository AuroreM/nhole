import { connect } from 'react-redux';
import App from './App';
import { redirectToApp } from './modules/User/actions';
import { authorizationSelector } from './modules/User/reducer';
import { toastrSelector } from './modules/Toastr/reducer';

const mapStateToProps = state => ({
  isUserAuthorized: authorizationSelector(state),
  toast: toastrSelector(state),
});

const mapDispatchToProps = {
  redirectToApp,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
