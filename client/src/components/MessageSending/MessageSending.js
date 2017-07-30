import React from 'react';
import styled from 'styled-components';
import Toastr from '../Toastr/Toastr'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const MessageTyping = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
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
        <TextField
          id="morning"
          hintText="Message"
          floatingLabelText="Message pour les clients du matin"
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToMorningClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <Toastr>{this.props.message}</Toastr>
        <TextField
          id="lunch"
          hintText="Message"
          floatingLabelText="Message pour les clients du midi"
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToLunchClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <TextField
          id="afternoon"
          hintText="Message"
          floatingLabelText="Message pour les clients de l'après-midi"
          multiLine={true}
          rows={2}
        />
        <Toastr>{this.props.message}</Toastr>
        <RaisedButton onClick={this.sendMessageToAfternoonClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <Toastr>{this.props.message}</Toastr>
        <TextField
          id="evening"
          hintText="Message"
          floatingLabelText="Message pour les clients du soir"
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToEveningClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <Toastr>{this.props.message}</Toastr>
      </MessageTyping>
    );
  }
};

export default MessageSending;
