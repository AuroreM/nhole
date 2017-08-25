import { connect } from 'react-redux';
import _ from 'lodash';
import ClientsDisplay from './ClientsDisplay';
import { getClients, deleteClient, updateClientsListAfterOneDeleted } from '../../modules/Clients/actions';

const MapDispatchToProps = dispatch => ({
  deleteClient: clientId => {
    dispatch(updateClientsListAfterOneDeleted(clientId));
    dispatch(deleteClient(clientId));
  },
  getClients: () => dispatch(getClients()),
});

const mapStateToProps = state => ({
  loading: state.loading,
  clients: state.clients,
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientsDisplay);
