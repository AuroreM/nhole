import React from 'react';
import styled from 'styled-components';
import { Field } from 'redux-form';

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
        <form onSubmit={this.props.handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="email" />
          </div>
          <div>
            <label htmlFor="password">Mot de Passe</label>
            <Field name="password" component="input" type="password" />
          </div>
          <button type="submit">Signup</button>
        </form>
      </Body>
    );
  }
}

export default Signup;
