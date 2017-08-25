import { connect } from 'react-redux';
import Client from './Client';
import { deleteClient } from '../../../modules/Clients/actions';

const MapDispatchToProps = {
  deleteClient,
};

export default connect(null, MapDispatchToProps)(Client);
