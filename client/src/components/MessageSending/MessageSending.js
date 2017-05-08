import React from 'react';
import styled from 'styled-components';

const MessageTyping = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;
const Title = styled.h1`
  color: rgb(64,64,64);
  font-size: 25px;
  text-transform: uppercase;
  margin: 20px;
`;

const TextArea = styled.textarea`
font-size: 19px;
color: rgb(64,64,64);
font-family: "Courier New", Courier, monospace;
`;

const Button = styled.button`
  background-color: rgb(64,64,64);
  border: 1px solid rgb(64,64,64);
  display: inline-block;
  cursor: pointer;
  color: rgb(30,144,255);
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
  padding:16px 40px;
  margin-top: 50px;
  &:hover {
    background-color: rgb(70,70,70);
  }
`;

class MessageSending extends React.Component {
  sendMessage() {
    this.props.sendMessage(document.getElementById('message').value)
  }
  render() {
    return (
      <MessageTyping>
        <Title>Envoyer un message au client du créneau du matin</Title>
        <TextArea id="message" autoComplete="off" cols="50" rows="15" />
        <Button onClick={this.sendMessage.bind(this)}>Envoyer</Button>
      </MessageTyping>
    );
  }
};

export default MessageSending;
