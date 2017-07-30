import React from 'react';
import styled from 'styled-components';
import TextField from 'material-ui/TextField';

const Info = styled.div`
  justify-content: center;
  display: flex;
  width: 90vw;
`;

class InfoUpdate extends React.Component {
  onTypeChange(e) {
    this.props.updateClientInfo(
      document.getElementById('firstname').value,
      document.getElementById('lastname').value,
      document.getElementById('number').value,
    )
  }

  render() {
    return (
      <div>
        <Info>
          <TextField 
            hintText="Prénom"
            floatingLabelText="Prénom"
            id="firstname"
            ref="firstname"
            autoComplete="off"
            value={this.props.firstname}
            onChange={this.onTypeChange.bind(this)}/>
        </Info>
        <Info>
          <TextField id="lastname"
            hintText="Nom"
            floatingLabelText="Nom"
             autoComplete="off"
             value={this.props.lastname}
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
        <Info>
          <TextField id="number"
             hintText="Numéro de téléphone"
             floatingLabelText="Numéro de téléphone"
             autoComplete="off"
             value={this.props.number}
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
      </div>
    );
  }
};

InfoUpdate.propTypes = {
  firstname: React.PropTypes.string.isRequired,
  lastname: React.PropTypes.string.isRequired,
  number: React.PropTypes.string.isRequired,
};

export default InfoUpdate;
