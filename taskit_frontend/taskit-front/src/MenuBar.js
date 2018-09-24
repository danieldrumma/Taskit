import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
}from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import {Equalizer, GroupAdd, Group, PersonAddIcon, Timeline} from '@material-ui/icons';
import InboxIcon from '@material-ui/icons/Inbox';


const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar
  ,
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  primary: {},
  icon: {},

});

class MenuBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    left: false,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = (side, open) => () => {
   this.setState({
     [side]: open,
   });
 };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>

        <AppBar position="static" color ="white">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer('left', true)}/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>

            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />

                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                  <Link to ='./login'>
                    <MenuItem onClick={this.handleClose} background = '#ff1744'>Logout</MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
      <div>
      <List component="nav">

      <ListItem button>
        <ListItemIcon>
          <Timeline/>
        </ListItemIcon>
        <ListItemText primary="Manage Timelines"/>
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <Equalizer/>
        </ListItemIcon>
        <ListItemText primary="Leaderboards"/>
      </ListItem>

    <Divider/>

        <ListItem button>
          <ListItemIcon>
            <GroupAdd/>
          </ListItemIcon>
          <ListItemText primary="Add Group"/>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <Group/>
          </ListItemIcon>
          <ListItemText primary="View Groups"/>
        </ListItem>
      </List>

      </div>
    </Drawer>
  </div>

    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuBar);
