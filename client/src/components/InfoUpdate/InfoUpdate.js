import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
  justify-content: center;
  margin: 20px;
  display: flex;
  width: 90vw;
`;

const Label = styled.label`
  font-size: 16px;
  width: 30vw;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 5px;
  height: 25px;
  flex: 1;
  font-size: 16px;
  text-align: center;
  color: rgb(64,64,64);
  font-family: "Courier New", Courier, monospace;
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
             ref="firstname"
             autoComplete="off"
             value={this.props.firstname}
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
        <Info>
          <Label>Nom :</Label>
          <Input id="lastname"
             autoComplete="off"
             value={this.props.lastname}
             onChange={this.onTypeChange.bind(this)}/>
        </Info>
        <Info>
          <Label>Numéro de téléphone :</Label>
          <Input id="number"
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
