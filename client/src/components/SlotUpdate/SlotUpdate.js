import React from 'react';
import Checkbox from '../../components/Checkbox';

// @TODO : Add  Chip from material ui
class SlotUpdate extends React.Component {
  render() {
    return (
      <div>
        <Checkbox slot={'morning'} label={'Cours du matin'} />
        <Checkbox slot={'lunch'} label={'Cours du midi'} />
        <Checkbox slot={'afternoon'} label={'Cours de l\'après-midi'} />
        <Checkbox slot={'evening'} label={'Cours du soir'} />
      </div>
    );
  }
};

export default SlotUpdate;
