import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientsDisplay from './ClientsDisplay';
import * as ClientsDisplayActions from './actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(ClientsDisplayActions, dispatch);
};

const mapStateToProps = state => ({
  loading: state.get('loading'),
  clients: state.get('clients'),
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientsDisplay);
