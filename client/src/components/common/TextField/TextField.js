import React from 'react';
import TextField from 'material-ui/TextField';

const styles = {
  underlineFocus: {
    borderColor: 'rgb(30,144,255)',
  },
};
const renderField = props => (
  <TextField
    {...props.input}
    type={props.type}
    underlineFocusStyle={styles.underlineFocus}
    hintText={props.displayedName}
  />
);

export default renderField;
