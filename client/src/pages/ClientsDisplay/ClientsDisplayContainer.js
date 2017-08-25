import { connect } from 'react-redux';
import ClientsDisplay from './ClientsDisplay';
import { getClients } from '../../modules/Clients/actions';

const MapDispatchToProps = {
  getClients,
};

const mapStateToProps = state => ({
  loading: state.loading,
  clients: state.clients,
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientsDisplay);
