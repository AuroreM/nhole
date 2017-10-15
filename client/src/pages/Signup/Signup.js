import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import TextField from '../../components/common/TextField';
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
  render() {
    return (
      <Body>
        <Field name="email" displayedName="Email" component={TextField} type="email" />
        <Field name="password" displayedName="Mot de passe" component={TextField} type="password" />
        <Field name="smsGatewayEmail" displayedName="Email de SMS Gateway Me" component={TextField} type="email" />
        <Field
          name="smsGatewayPassword"
          displayedName="Mot de passe de SMS Gateway Me"
          component={TextField}
          type="password"
        />
        <Field
          name="smsGatewayDeviceId"
          displayedName="Device ID de SMS Gateway Me"
          component={TextField}
          type="string"
        />
        <Button label="Signup" onClick={this.props.handleSubmit} />
      </Body>
    );
  }
}

export default Signup;
