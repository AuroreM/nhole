import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  justify-content: center;
  margin: 25px;
  display: flex;
  width: 60vw;
`;

const Label = styled.label`
  font-size: 22px;
  width: 30vw;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  height: 25px;
  flex: 1;
  font-size: 20px;
  text-align: center;
  color: rgb(64,64,64);
  autoFocus: none;
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
          <Label>Prénom :</Label>
          <Input id="firstname"
             autoComplete="off"
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
        <Info>
          <Label>Nom :</Label>
          <Input id="lastname"
             autoComplete="off"
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
        <Info>
          <Label>Numéro de téléphone :</Label>
          <Input id="number"
             autoComplete="off"
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
      </div>
    );
  }
};

export default InfoUpdate;
