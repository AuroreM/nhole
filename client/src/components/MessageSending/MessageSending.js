import React from 'react';
import styled from 'styled-components';
import Title from '../Title/Title';
import Toastr from '../Toastr/Toastr';
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
    const styles = {
      underlineFocusStyle: {
        borderColor: 'rgb(30,144,255)',
      },
      floatingLabelFocusStyle: {
        color: 'rgb(30,144,255)',
      },
    }
    return (
      <MessageTyping style={{height: '70vh'}}>
        <Title>Envoyez un message</Title>
        <Toastr>{this.props.message}</Toastr>
        <TextField
          underlineFocusStyle={styles.underlineFocusStyle}
          id="morning"
          hintText="Message pour les clients du matin"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToMorningClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <TextField
          underlineFocusStyle={styles.underlineFocusStyle}
          id="lunch"
          hintText="Message pour les clients du midi"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToLunchClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <TextField
          underlineFocusStyle={styles.underlineFocusStyle}
          id="afternoon"
          hintText="Message pour les clients de l'après-midi"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToAfternoonClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
        <TextField
          underlineFocusStyle={styles.underlineFocusStyle}
          id="evening"
          hintText="Message pour les clients du soir"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          multiLine={true}
          rows={2}
        />
        <RaisedButton onClick={this.sendMessageToEveningClient.bind(this)} label='Envoyer' style={{margin: '10px'}} backgroundColor="rgb(64,64,64)" labelColor="rgb(30,144,255)" />
      </MessageTyping>
    );
  }
};

export default MessageSending;
