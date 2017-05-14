import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button'
import MessageArea from '../MessageArea/MessageArea'
import Title from '../Title/Title'
import Toastr from '../Toastr/Toastr'

const MessageTyping = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class MessageSending extends React.Component {
  sendMessageToMorningClient() {
    this.props.sendMessage(document.getElementById('morning').value, 'morning')
  }

  sendMessageToLunchClient() {
    this.props.sendMessage(document.getElementById('lunch').value, 'lunch')
  }

  sendMessageToAfternoonClient() {
    this.props.sendMessage(document.getElementById('afternoon').value, 'afternoon')
  }

  sendMessageToEveningClient() {
    this.props.sendMessage(document.getElementById('evening').value, 'evening')
  }

  render() {
    return (
      <MessageTyping>
        <Title>Message pour les clients du MATIN :</Title>
        <MessageArea id="morning" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToMorningClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
        <Title>Message pour les clients du MIDI :</Title>
        <MessageArea id="lunch" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToLunchClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
        <Title>Message pour les clients de l'APRES MIDI :</Title>
        <MessageArea id="afternoon" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToAfternoonClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
        <Title>Message pour les clients du SOIR :</Title>
        <MessageArea id="evening" autoComplete="off" cols="40" rows="6" />
        <Button onClick={this.sendMessageToEveningClient.bind(this)}>Envoyer</Button>
        <Toastr>{this.props.message}</Toastr>
      </MessageTyping>
    );
  }
};

export default MessageSending;
