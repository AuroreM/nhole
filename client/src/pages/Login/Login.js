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

class Login extends React.Component {
  styles = {
    underlineFocusStyle: {
      borderColor: 'rgb(30,144,255)',
    },
  };

  renderEmailField = field => (
    <TextField {...field.input} type="email" underlineFocusStyle={this.styles.underlineFocusStyle} hintText="Email" />
  );
  renderPasswordField = field => (
    <TextField
      {...field.input}
      type="password"
      underlineFocusStyle={this.styles.underlineFocusStyle}
      hintText="Mot de passe"
    />
  );

  render() {
    return (
      <Body>
        <Field name="email" component={this.renderEmailField} />
        <Field name="password" component={this.renderPasswordField} />
        <Button label="Login" onClick={this.props.handleSubmit} />
      </Body>
    );
  }
}

export default Login;
