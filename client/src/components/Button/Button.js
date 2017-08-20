import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class Button extends React.Component {
  render() {
    return (
      <RaisedButton
        onClick={this.props.onClick}
        style={{ margin: '10px' }}
        label={this.props.label}
        backgroundColor="rgb(64,64,64)"
        labelColor="rgb(30,144,255)"
        disabled={this.props.disabled}
      />
    );
  }
}

export default Button;
