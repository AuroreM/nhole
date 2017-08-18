import React from 'react';
import Chip from 'material-ui/Chip';
import styled from 'styled-components';

const ChipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 25px;
`;

class SlotUpdate extends React.Component {
  state = {
    morning: false,
    lunch: false,
    afternoon: false,
    evening: false,
  };

  handleTouchTap = slot => {
    this.setState(currentState => ({ [slot]: !currentState[slot] }));
    this.props.updateSlotChoice(slot);
  };

  render() {
    return (
      <ChipContainer>
        <Chip
          onClick={() => this.handleTouchTap('morning')}
          labelColor={'rgb(64,64,64)'}
          backgroundColor={this.state.morning ? 'rgb(30,144,255)' : null}
        >
          Matin
        </Chip>
        <Chip
          onClick={() => this.handleTouchTap('lunch')}
          labelColor={'rgb(64,64,64)'}
          backgroundColor={this.state.lunch ? 'rgb(30,144,255)' : null}
        >
          Midi
        </Chip>
        <Chip
          onClick={() => this.handleTouchTap('afternoon')}
          labelColor={'rgb(64,64,64)'}
          backgroundColor={this.state.afternoon ? 'rgb(30,144,255)' : null}
        >
          Après-midi
        </Chip>
        <Chip
          onClick={() => this.handleTouchTap('evening')}
          labelColor={'rgb(64,64,64)'}
          backgroundColor={this.state.evening ? 'rgb(30,144,255)' : null}
        >
          Soir
        </Chip>
      </ChipContainer>
    );
  }
}

export default SlotUpdate;
