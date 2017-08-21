import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MessageSending from './MessageSending';
import * as MessageSendingActions from '../../modules/Message/actions';

const mapStateToProps = state => ({
  message: state.other.message,
});

const MapDispatchToProps = dispatch => {
  return bindActionCreators(MessageSendingActions, dispatch);
};

export default connect(mapStateToProps, MapDispatchToProps)(MessageSending);
