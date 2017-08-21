import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';
import Title from '../../components/common/Title';
import Toastr from '../../components/common/Toastr';
import Button from '../../components/common/Button';

const MessageTyping = styled.div`
  display: flex;
  height: 80vh;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80vw;
  margin: 25px;
`;

class MessageSending extends React.Component {
  state = {
    slot: '',
  };
  handleTouchTap = slot => {
    this.setState({ slot });
  };
  sendMessageToClient = () => {
    this.props.sendMessage(document.getElementById('message').value, this.state.slot);
  };

  render() {
    const styles = {
      underlineFocusStyle: {
        borderColor: 'rgb(30,144,255)',
      },
      floatingLabelFocusStyle: {
        color: 'rgb(30,144,255)',
      },
    };
    return (
      <MessageTyping style={{ height: '70vh' }}>
        <Title>Envoyez un message</Title>
        <Toastr>
          {this.props.toast}
        </Toastr>
        <TextField
          underlineFocusStyle={styles.underlineFocusStyle}
          id="message"
          hintText="Message"
          floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
          multiLine={true}
          rows={2}
        />
        <ChipContainer>
          <Chip
            onClick={() => this.handleTouchTap('morning')}
            labelColor={'rgb(64,64,64)'}
            backgroundColor={this.state.slot === 'morning' ? 'rgb(30,144,255)' : null}
          >
            Matin
          </Chip>
          <Chip
            onClick={() => this.handleTouchTap('lunch')}
            labelColor={'rgb(64,64,64)'}
            backgroundColor={this.state.slot === 'lunch' ? 'rgb(30,144,255)' : null}
          >
            Midi
          </Chip>
          <Chip
            onClick={() => this.handleTouchTap('afternoon')}
            labelColor={'rgb(64,64,64)'}
            backgroundColor={this.state.slot === 'afternoon' ? 'rgb(30,144,255)' : null}
          >
            Après-midi
          </Chip>
          <Chip
            onClick={() => this.handleTouchTap('evening')}
            labelColor={'rgb(64,64,64)'}
            backgroundColor={this.state.slot === 'evening' ? 'rgb(30,144,255)' : null}
          >
            Soir
          </Chip>
        </ChipContainer>
        <Button onClick={this.sendMessageToClient} label="Envoyer" disabled={!this.state.slot} />
      </MessageTyping>
    );
  }
}

export default MessageSending;
