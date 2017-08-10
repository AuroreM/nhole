import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageSending from './MessageSending';
import * as MessageSendingActions from './actions';

const mapStateToProps = (state) => ({
  message: state.get('message'),
});

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(MessageSendingActions , dispatch)
}

export default connect(mapStateToProps, MapDispatchToProps)(MessageSending)
