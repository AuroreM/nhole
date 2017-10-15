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

  renderField = field => {
    return (
      <TextField
        {...field.input}
        type={field.type}
        underlineFocusStyle={this.styles.underlineFocusStyle}
        hintText={field.input.name}
      />
    );
  };

  render() {
    return (
      <Body>
        <Field name="Email" component={this.renderField} type="email" />
        <Field name="Password" component={this.renderField} type="password" />
        <Button label="Login" onClick={this.props.handleSubmit} />
      </Body>
    );
  }
}

export default Login;
