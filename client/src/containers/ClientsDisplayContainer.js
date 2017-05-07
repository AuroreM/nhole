import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientsDisplay from '../components/ClientsDisplay/ClientsDisplay';
import * as ClientsDisplayActions from '../components/ClientsDisplay/actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(ClientsDisplayActions , dispatch)
}

const mapStateToProps = (state) => ({
  loading: state.get('loading'),
  clients: state.get('clients'),
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientsDisplay)
