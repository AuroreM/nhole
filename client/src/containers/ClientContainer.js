import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Client from '../components/Client/Client';
import * as ClientActions from '../components/Client/actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(ClientActions , dispatch)
}

export default connect(null, MapDispatchToProps)(Client)
