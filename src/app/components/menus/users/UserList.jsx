import React from 'react'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class UserList extends React.Component {

  render() {
    return (
      <List>
        this.props.users.map((user, index) => {
          return (
            <ListItem
              leftAvatar={<Avatar src="images/ok-128.jpg" />}
              primaryText={user.username}
            />
          )
        })
      </List>
    )
  }
}

UserList.Proptypes = {
  users: React.PropTypes.array
}
