import { connect } from 'react-redux';
import SlotUpdate from './SlotUpdate';
import { updateSlotChoice } from '../../../modules/NewClient/actions';

const MapDispatchToProps = {
  updateSlotChoice,
};

export default connect(null, MapDispatchToProps)(SlotUpdate);
