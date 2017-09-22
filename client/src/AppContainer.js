import { connect } from 'react-redux';
import App from './App';
import { authorizationSelector } from './modules/User/reducer';
import { toastrSelector } from './modules/Toastr/reducer';

const mapStateToProps = state => ({
  isUserAuthorized: authorizationSelector(state),
  toast: toastrSelector(state),
});

export default connect(mapStateToProps)(App);
