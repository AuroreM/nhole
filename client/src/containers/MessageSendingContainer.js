import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageSending from '../components/MessageSending/MessageSending';
import * as MessageSendingActions from '../components/MessageSending/actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(MessageSendingActions , dispatch)
}

export default connect(null, MapDispatchToProps)(MessageSending)
