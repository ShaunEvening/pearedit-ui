import React from 'react';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

export default class SettingsDock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <IconButton
          onTouchTap={this.handleToggle.bind(this)}
          tooltip="Settings"
          tooltipPosition="bottom-left"
          touch={true}
        >
          <FontIcon className="material-icons" color={'#424242'}>settings</FontIcon>
        </IconButton>
        <Drawer width={500} openSecondary={true} open={this.state.open} >
          <AppBar
            title="Settings"
            iconElementRight={<IconButton><FontIcon className="material-icons">clear</FontIcon></IconButton>}
            showMenuIconButton={false}
            onRightIconButtonTouchTap={this.handleToggle.bind(this)}
            style={{backgroundColor: '#616161'}}
          />
        </Drawer>
      </div>
    );
  }
}
