import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import 'font-awesome/css/font-awesome.min.css';

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class AppHome extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedIndex:0};
    this.handleListItemClick = this.handleListItemClick.bind(this);
  }

  handleListItemClick(e, index){
    this.setState({
        selectedIndex:index
    });
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Party Store
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>
            <ListItem selected={this.state.selectedIndex === 0} onClick = {event => this.handleListItemClick(event, 0)} button key="CAKE">
              <ListItemIcon><i className="fa fa-birthday-cake fa-lg"></i></ListItemIcon>
              <ListItemText primary="Cake" />
            </ListItem>
            <ListItem selected={this.state.selectedIndex === 1} onClick = {event => this.handleListItemClick(event, 1)} button key="TSHIRT">
              <ListItemIcon><i className="fa fa-snowflake-o fa-lg"></i></ListItemIcon>
              <ListItemText primary="T Shirt" />
            </ListItem>
            <ListItem button key="DRINK" selected={this.state.selectedIndex === 2} onClick = {event => this.handleListItemClick(event, 2)}>
              <ListItemIcon><i className="fa fa-glass fa-lg"></i></ListItemIcon>
              <ListItemText primary="Drinks" />
            </ListItem>
            <ListItem button key="OTHER_STUFF" selected={this.state.selectedIndex === 3} onClick = {event => this.handleListItemClick(event, 3)}>
              <ListItemIcon><i className="fa fa-cube fa-lg"></i></ListItemIcon>
              <ListItemText primary="Other Stuff" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="CART" selected={this.state.selectedIndex === 5} onClick = {event => this.handleListItemClick(event, 5)}>
              <ListItemIcon><i className="fa fa-shopping-cart fa-lg"></i></ListItemIcon>
              <ListItemText primary="CART" />
            </ListItem>
            <ListItem button key="ORDER_HISTORY" selected={this.state.selectedIndex === 4} onClick = {event => this.handleListItemClick(event, 4)}>
              <ListItemIcon><i className="fa fa-shopping-bag fa-lg"></i></ListItemIcon>
              <ListItemText primary="Order History" />
            </ListItem>
            <ListItem button key="PROFILE" selected={this.state.selectedIndex === 6} onClick = {event => this.handleListItemClick(event, 6)}>
              <ListItemIcon><i className="fa fa-user-o fa-lg"></i></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key="ABOUT_US" selected={this.state.selectedIndex === 7} onClick = {event => this.handleListItemClick(event, 7)}>
              <ListItemIcon><i className="fa fa-info fa-lg"></i></ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem button key="CONTACT_US" selected={this.state.selectedIndex === 8} onClick = {event => this.handleListItemClick(event, 8)}>
              <ListItemIcon><i className="fa fa-phone fa-lg"></i></ListItemIcon>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Typography paragraph>
            This is the main home page
          </Typography>
        </main>
      </div>
    );
  }
}

AppHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppHome);
