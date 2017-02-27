import React from 'react';
import TextField from 'material-ui/TextField';
import './chat.css';

const MessageForm = props => {
  return (
    <div className="message-form-container">
      <TextField
        id="message-field"
        multiLine={true}
        rows={1}
        rowsMax={4}
        fullWidth={true}
        value={props.contents}
        onChange={props.contentsChange}
        onKeyPress={props.handleEnter}
      />
    </div>
  )
}

MessageForm.propTypes = {
  username: React.PropTypes.string,
  contents: React.PropTypes.string,
  messageSubmit: React.PropTypes.func,
  contentsChange: React.PropTypes.func
}

export default MessageForm;
