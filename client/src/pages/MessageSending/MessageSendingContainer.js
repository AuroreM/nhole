import { connect } from 'react-redux';
import MessageSending from './MessageSending';
import { sendMessage } from '../../modules/Message/actions';

const mapStateToProps = state => ({
  toast: state.toastr.wording,
});

const MapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, MapDispatchToProps)(MessageSending);
