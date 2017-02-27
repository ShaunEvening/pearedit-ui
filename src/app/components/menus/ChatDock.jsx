import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MessageForm from './chat/MessageForm.jsx';

import './chat/chat.css';


export default class ChatDock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      messages: [],
      users: []
    };
  }

  componentDidMount() {
    // add websocket for chat
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleEnterKey(ev) {
    if (ev.charCode === 13 && !ev.shiftKey) {
      this.handleMessageSubmit();
    }
  }

  handleMessageSubmit () {
    if (this.state.contents !== '') {
      const message = {
        username: this.props.username,
        imageUrl: this.props.imageUrl,
        contents: this.state.contents
      }
      this.setState({
        contents: ``,
        messages: [...this.state.messages, message],
      })
    }
  }

  handleContentsChange (ev) {
    this.setState({contents: ev.target.value});
  }

  messageReceived(message) {
    this.setState({messages: [...this.state.messages, message]});
  }

  userJoined(user, users){
    this.setState({users});
  }

  userLeft(user, users){
    this.setState({users});
  }

  render() {
    return (
      <div>
        <IconButton
          onTouchTap={this.handleToggle.bind(this)}
          tooltip="Chat"
          tooltipPosition="bottom-left"
          touch={true}
        >
          <FontIcon className="material-icons" color={'#424242'}>chat</FontIcon>
        </IconButton>
        <Drawer width={500} openSecondary={true} open={this.state.open} >
          <AppBar
            title="Chat"
            showMenuIconButton={false}
            iconElementRight={
              <IconButton
                onTouchTap={this.handleToggle.bind(this)}
              >
                <FontIcon className="material-icons">clear</FontIcon>
              </IconButton>
            }
            style={{backgroundColor: '#616161'}}
          />
          <div className="container">
            <List className="message-list">
              {
                this.state.messages.map((message, index) => {
                  return (
                    <ListItem
                      key={index}
                      leftAvatar={<Avatar src={message.imageUrl} />}
                      style={{margin: '0 0.6rem 0.8rem 0.6rem', backgroundColor: '#FFF'}}
                      primaryText={message.username}
                      secondaryText={
                        <p className="message-content">
                          {message.contents}
                        </p>
                      }
                    />
                 );
                })
              }
            </List>
            <MessageForm
              className="message-form"
              username={this.props.username}
              contents={this.state.contents}
              contentsChange={this.handleContentsChange.bind(this)}
              handleEnter={this.handleEnterKey.bind(this)}
            />
          </div>
        </Drawer>
      </div>
    );
  }
}

ChatDock.propTypes = {
  username: React.PropTypes.string,
  imageUrl: React.PropTypes.string
}
