import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientsDisplay from './ClientsDisplay';
import * as ClientsDisplayActions from '../../modules/Clients/actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(ClientsDisplayActions, dispatch);
};

const mapStateToProps = state => ({
  loading: state.loading,
  clients: state.clients,
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientsDisplay);
