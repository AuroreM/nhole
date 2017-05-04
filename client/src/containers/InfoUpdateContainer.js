import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import InfoUpdate from '../components/InfoUpdate/InfoUpdate';
import * as updateClientInfoAction from '../components/InfoUpdate/actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(updateClientInfoAction , dispatch)
}

const mapStateToProps = (state) => ({
  firstname: state.get('firstname'),
  lastname: state.get('lastname'),
  number: state.get('number'),
});

export default connect(mapStateToProps, MapDispatchToProps)(InfoUpdate)
