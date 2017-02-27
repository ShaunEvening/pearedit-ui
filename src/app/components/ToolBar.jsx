import React from 'react';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import ChatDock from './menus/ChatDock.jsx';
import SettingsDock from './menus/SettingsDock.jsx';
import UsersModal from './menus/UsersModal.jsx';

const ToolBar = props => {
    return (
      <Toolbar
        style={{
          backgroundColor: '#FAFAFA',
          borderBottom: '1px solid #BDBDBD'
        }}
      >
        <ToolbarGroup firstChild={true}>
          <Avatar src={props.imageUrl} style={{marginRight: '15px', marginLeft: '15px'}}/>
          <ToolbarTitle
            text={props.username}
            style={{color: '#424242'}}
          />
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>

          <ToolbarTitle
            text={!props.file ? 'untitled' : props.file.filename}
            style={{color: '#424242'}}
          />
          <ToolbarSeparator style={{marginLeft: '10px', marginRight: '10px'}} />

          {
            !props.isOwner ?
            <IconButton touch={true}>
              <FontIcon className="material-icons" color={'#424242'}>home</FontIcon>
            </IconButton>
            : null
          }

          <ChatDock
            username={props.username}
            imageUrl={props.imageUrl}
          />

        {
          props.isOwner ?
          <div>
            <IconButton touch={true}>
              <FontIcon className="material-icons" color={'#424242'}>folder</FontIcon>
            </IconButton>
          </div>
          : null
        }
          <UsersModal users={props.users} username={props.username}/>
          <SettingsDock/>

        </ToolbarGroup>
      </Toolbar>
    );

}

ToolBar.propTypes = {
  userName: React.PropTypes.string,
  imageUrl: React.PropTypes.string,
  isOwner: React.PropTypes.bool,
  activeFile: React.PropTypes.object,
  file: React.PropTypes.object
}

export default ToolBar;
