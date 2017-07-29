import styled from 'styled-components';

// TODO : overrider le RaisedButton de material-ui
const Button = styled.button`
  background-color: rgb(64,64,64);
  border: 1px solid rgb(64,64,64);
  display: inline-block;
  cursor: pointer;
  color: rgb(30,144,255);
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding:16px 40px;
  margin-top: 20px;
  &:hover {
    background-color: rgb(70,70,70);
  }
`;

export default Button;
