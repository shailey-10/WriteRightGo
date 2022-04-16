import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './drawer.css'
import { ListItemIcon } from '@material-ui/core';
import { Assessment, AttachMoney, Contacts, Home, ImportContacts, Menu, LockOpen } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function SideDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  
    left: false,
 
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        
          <NavLink to = "/" className="nav-links"><ListItem button key={"Home"}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NavLink>
         <NavLink to = "/" className="nav-links"> <ListItem button key={"Our Story"}>
            <ListItemIcon><ImportContacts /></ListItemIcon>
            <ListItemText primary={"Our Story"} />
          </ListItem>
          </NavLink>
         <NavLink to = "/" className="nav-links"> <ListItem button key={"Product"}>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText primary={"Product"} />
          </ListItem>
          </NavLink>
         <NavLink to = "/pricing" className="nav-links"> <ListItem button key={"Pricing"}>
            <ListItemIcon><AttachMoney /></ListItemIcon>
            <ListItemText primary={"Pricing"} />
          </ListItem>
          </NavLink>
         <NavLink to = "/" className="nav-links"> <ListItem button key={"Contact"}>
            <ListItemIcon><Contacts /></ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>
          </NavLink>
          <ListItem button key={"Signup"}>
          <NavLink  className="nav-links" to = "/login"> <Button size="large" className={classes.buttonBlack}>Login</Button> </NavLink>
          </ListItem>
         <ListItem button key={"Login"}>
         <NavLink  className="nav-links" to = "/signup"> <Button size="large" color="secondary" variant='contained'>Get Stated Now</Button> </NavLink>
          </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><Menu /></Button>
          <Drawer className="drawer" anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}