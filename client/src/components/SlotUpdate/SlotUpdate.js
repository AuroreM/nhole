import React from 'react';
import CheckboxContainer from '../../containers/CheckboxContainer';

// @TODO : Add  Chip from material ui
class SlotUpdate extends React.Component {
  render() {
    return (
      <div>
        <CheckboxContainer slot={'morning'} label={'Cours du matin'} />
        <CheckboxContainer slot={'lunch'} label={'Cours du midi'} />
        <CheckboxContainer slot={'afternoon'} label={'Cours de l\'après-midi'} />
        <CheckboxContainer slot={'evening'} label={'Cours du soir'} />
      </div>
    );
  }
};

export default SlotUpdate;
