import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfoUpdate from './InfoUpdate';
import * as updateClientInfoAction from './actions';

const MapDispatchToProps = dispatch => {
  return bindActionCreators(updateClientInfoAction, dispatch);
};

const mapStateToProps = state => ({
  firstname: state.firstname,
  lastname: state.lastname,
  number: state.number,
});

export default connect(mapStateToProps, MapDispatchToProps)(InfoUpdate);
