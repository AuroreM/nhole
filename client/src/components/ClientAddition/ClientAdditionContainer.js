import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ClientAddition from './ClientAddition';
import * as ClientAdditionActions from './actions';

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(ClientAdditionActions , dispatch)
}

const mapStateToProps = (state) => ({
  morning: state.get('morning'),
  lunch: state.get('lunch'),
  evening: state.get('evening'),
  afternoon: state.get('afternoon'),
  message: state.get('message'),
});

export default connect(mapStateToProps, MapDispatchToProps)(ClientAddition)
