import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Client from './Client';
import * as ClientActions from './actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(ClientActions , dispatch)
}

export default connect(null, MapDispatchToProps)(Client)
