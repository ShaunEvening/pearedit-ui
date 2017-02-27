import React from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const MessageForm = props => {
  return (
    <div style={{padding: '10px 20px'}}>
      <form onSubmit={props.messageSubmit}>
        <div style={{width: '80%'}}>
          <TextField
            floatingLabelText={`@${props.username}`}
            multiLine={true}
            rows={2}
            rowsMax={4}
            fullWidth={true}
            onChange={props.contentsChange}
            value={props.contents}
          />
        </div>
        <div style={{width: '20%', textAlign: 'center'}}>
          <FlatButton
            label="Send"
            labelPosition="before"
            primary={true}
            icon={<FontIcon className="material-icons">send</FontIcon>}
            type="submit"
          />
        </div>
      </form>
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
