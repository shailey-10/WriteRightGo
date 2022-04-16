import React from 'react'
import { Button } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { PlayCircleOutlineRounded } from '@material-ui/icons'
import './Cta.css'

const Cta = () => {
    return (
        <div className='cta-section'>
            <h1>Get an advantage, do what you believe in!</h1>
            <div className="cta-buttons">
            <NavLink className="nav-links" to = "pricing"><Button size="large" color="secondary" variant='contained'>Get Started Now</Button> </NavLink>
            <NavLink className="nav-links" to = "signup"><Button size="large" className='custom-outline' color="secondary" variant='outlined' startIcon={<PlayCircleOutlineRounded />}>Watch How It Works</Button></NavLink>
            </div>
        </div>
    )
}

export default Cta
