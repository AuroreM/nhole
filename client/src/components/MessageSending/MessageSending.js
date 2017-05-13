import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button'
import MessageArea from '../MessageArea/MessageArea'
import Toastr from '../Toastr/Toastr'

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
        <MessageArea id="message" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToMorningClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
        <Title>Envoyer un message au client du créneau du MIDI :</Title>
        <MessageArea id="message" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToLunchClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
        <Title>Envoyer un message au client du créneau de l'APRES MIDI :</Title>
        <MessageArea id="message" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToAfternoonClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
        <Title>Envoyer un message au client du créneau du SOIR :</Title>
        <MessageArea id="message" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToEveningClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
      </MessageTyping>
    );
  }
};

export default MessageSending;
