import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { theme } from '../UIElements/theme'
import { LockOpen } from '@material-ui/icons'
import "./Navbar.css"
import { useMediaQuery } from '@material-ui/core'
import SideDrawer from './Drawer'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    navbarLg: {
        color:"#000",
        backgroundColor:"#fff",
        boxShadow:"none",
        padding: "10px 80px"
    },
    navbarSm: {color:"#000",
    backgroundColor:"#fff",
    boxShadow:"none",
      padding: "10px 10px",
      padding: "0"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width:"100%"
  },
  buttonWhite: {
    boxShadow: "none",
    '&:hover':{
      backgroundColor: "#000",
      boxShadow: "none",
    }
  },
  buttonBlack: {
    boxShadow: "none",
    '&:hover':{
      border: "1px solid #F52F57",
      boxShadow: "none",
      backgroundColor: "#fff"
    }
  }
    
})

const Navbar = () => {
    const isMobile = useMediaQuery("(max-width: 600px)");
    const classes = useStyles()
    return (
        <AppBar className={`${isMobile ? classes.navbarSm : classes.navbarLg} navbar`} position="static" style={{position: 'fixed'}}>
  <Toolbar className={classes.toolbar}>
    <img src="img/logo.png" className={isMobile ? "logo-sm" : "logo-lg"} alt="" />
    <div className="navLinks">
      <NavLink to = "/" className="nav-links">          <Typography variant= "body1">Home</Typography> </NavLink>
      <NavLink to = "/our-story" className="nav-links"> <Typography variant= "body1">Our Story</Typography> </NavLink>
      <NavLink to = "/product" className="nav-links">   <Typography variant= "body1">Product</Typography> </NavLink>
      <NavLink to = "/pricing" className="nav-links">   <Typography variant= "body1">Pricing</Typography> </NavLink>
      <NavLink to = "/contact" className="nav-links">   <Typography variant= "body1">Contact</Typography> </NavLink>
    </div>
    <div className="authenticate">
    <NavLink  className="nav-links" to = "/login"> <Button size="large" className={classes.buttonBlack}>Login</Button> </NavLink>
     <NavLink  className="nav-links" to = "/signup"> <Button size="large" color="secondary" variant='contained'>Get Stated Now</Button> </NavLink>
    </div>
    <div className="menu">
    <SideDrawer/>
    </div>
  </Toolbar>
</AppBar>
    )
}

export default Navbar
