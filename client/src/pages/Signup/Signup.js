import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import TextField from 'material-ui/TextField';
import Button from '../../components/common/Button';

const Body = styled.div`
  display: flex;
  height: 40vh;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  justify-content: center;
`;

class Signup extends React.Component {
  styles = {
    underlineFocusStyle: {
      borderColor: 'rgb(30,144,255)',
    },
  };

  renderField = field => {
    console.log(field);
    return (
      <TextField
        {...field.input}
        type={field.type}
        underlineFocusStyle={this.styles.underlineFocusStyle}
        hintText={field.displayedName}
      />
    );
  };

  render() {
    return (
      <Body>
        <Field name="email" displayedName="Email" component={this.renderField} type="email" />
        <Field name="password" displayedName="Mot de passe" component={this.renderField} type="password" />
        <Field
          name="smsGatewayEmail"
          displayedName="Email de SMS Gateway Me"
          component={this.renderField}
          type="email"
        />
        <Field
          name="smsGatewayPassword"
          displayedName="Mot de passe de SMS Gateway Me"
          component={this.renderField}
          type="password"
        />
        <Field
          name="smsGatewayDeviceId"
          displayedName="Device ID de SMS Gateway Me"
          component={this.renderField}
          type="string"
        />
        <Button label="Signup" onClick={this.props.handleSubmit} />
      </Body>
    );
  }
}

export default Signup;
