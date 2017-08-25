import { connect } from 'react-redux';
import InfoUpdate from './InfoUpdate';
import { updateClientInfo } from '../../../modules/NewClient/actions';

const MapDispatchToProps = {
  updateClientInfo,
};

const mapStateToProps = state => ({
  firstname: state.newClient.firstname,
  lastname: state.newClient.lastname,
  number: state.newClient.number,
});

export default connect(mapStateToProps, MapDispatchToProps)(InfoUpdate);
