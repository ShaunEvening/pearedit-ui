import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Dialog from 'material-ui/Dialog';

import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class UsersModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      open: false
    }
  }

  handleToggle() {this.setState({open: !this.state.open})}

  render() {
    return (
      <div>
        <IconButton
          touch={true}
          tooltip="Online Users"
          tooltipPosition="bottom-left"
          onTouchTap={this.handleToggle.bind(this)}
        >
          <FontIcon className="material-icons" color={'#424242'}>people</FontIcon>
        </IconButton>
        <Dialog
          title="Users"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleToggle.bind(this)}
        >
          <List>
            {
              this.props.users.map((user, id) => {
                return(
                  <ListItem
                    key={id}
                    leftAvatar={<Avatar src={user.imageUrl} />}
                    primaryText={user.username}
                    secondaryText={user.username === this.props.username ? 'you' : null}
                   />
                 )
              })
            }
          </List>
        </Dialog>
      </div>
    )
  }
}

UsersModal.proptypes = {}
