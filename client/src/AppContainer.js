import { connect } from 'react-redux';
import App from './App';
import { authorizationSelector } from './modules/User/reducer';

const mapStateToProps = state => ({
  isUserAuthorized: authorizationSelector(state),
});

export default connect(mapStateToProps)(App);
