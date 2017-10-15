import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';
import Button from '../../components/common/Button';
import TextField from '../../components/common/TextField';

const Body = styled.div`
  display: flex;
  height: 40vh;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  justify-content: center;
`;

class Login extends React.Component {
  render() {
    return (
      <Body>
        <Field name="email" displayedName="Email" component={TextField} type="email" />
        <Field name="password" displayedName="Mot de passe" component={TextField} type="password" />
        <Button label="Login" onClick={this.props.handleSubmit} />
      </Body>
    );
  }
}

export default Login;
