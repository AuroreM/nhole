import { connect } from 'react-redux';
import MessageSending from './MessageSending';
import { sendMessage } from '../../modules/Message/actions';
import { toastrSelector } from '../../modules/Toastr/reducer';

const mapStateToProps = state => ({
  toastr: toastrSelector(state),
});

const MapDispatchToProps = {
  sendMessage,
};

export default connect(mapStateToProps, MapDispatchToProps)(MessageSending);
