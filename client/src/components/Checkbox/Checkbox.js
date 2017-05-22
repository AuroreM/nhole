import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 18px;
  display: flex;
  align-items: center;
  height: 35px;
`;

const Input = styled.input`
  margin-right: 3.5vh;
`;

class Checkbox extends React.Component {
  handleCheckboxChange(changeEvent) {
    this.props.updateSloteChoice(this.props.slot)
  }

  render() {
    return (
      <div>
        <Label>
          <Input
            autoComplete="off"
            type="checkbox"
            checked={this.props[this.props.slot]}
            onChange={this.handleCheckboxChange.bind(this)} />
          {this.props.label}
        </Label>
      </div>
    );
  }
};

Checkbox.propTypes = {
  slot: React.PropTypes.string.isRequired,
};

export default Checkbox;
