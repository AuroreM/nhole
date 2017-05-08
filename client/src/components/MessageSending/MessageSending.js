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
  font-size: 20px;
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
  margin-top: 20px;
  &:hover {
    background-color: rgb(70,70,70);
  }
`;

const Message = styled.div`
  margin-top: 50px;
  color: rgb(220,20,60);
  font-weight: bold;
`;

class MessageSending extends React.Component {
  sendMessageToMorningClient() {
    this.props.sendMessage(document.getElementById('message').value, 'morning')
  }

  sendMessageToLunchClient() {
    this.props.sendMessage(document.getElementById('message').value, 'lunch')
  }

  sendMessageToAfternoonClient() {
    this.props.sendMessage(document.getElementById('message').value, 'afternoon')
  }

  sendMessageToEveningClient() {
    this.props.sendMessage(document.getElementById('message').value, 'evening')
  }

  render() {
    return (
      <MessageTyping>
        <Title>Envoyer un message au client du créneau du MATIN :</Title>
        <TextArea id="message" autoComplete="off" cols="50" rows="10" />
        <Button onClick={this.sendMessageToMorningClient.bind(this)}>Envoyer</Button>
        <Message>{this.props.message}</Message>
        <Title>Envoyer un message au client du créneau du MIDI :</Title>
        <TextArea id="message" autoComplete="off" cols="50" rows="10" />
        <Button onClick={this.sendMessageToLunchClient.bind(this)}>Envoyer</Button>
        <Message>{this.props.message}</Message>
        <Title>Envoyer un message au client du créneau de l'APRES MIDI :</Title>
        <TextArea id="message" autoComplete="off" cols="50" rows="10" />
        <Button onClick={this.sendMessageToAfternoonClient.bind(this)}>Envoyer</Button>
        <Message>{this.props.message}</Message>
        <Title>Envoyer un message au client du créneau du SOIR :</Title>
        <TextArea id="message" autoComplete="off" cols="50" rows="10" />
        <Button onClick={this.sendMessageToEveningClient.bind(this)}>Envoyer</Button>
        <Message>{this.props.message}</Message>
      </MessageTyping>
    );
  }
};

export default MessageSending;
