import React from 'react'
import Navbar from '../../shared/components/Navigation/Navbar'
import NavLink from 'react-router-dom/NavLink'
import { Button } from '@material-ui/core'
import { PlayCircleOutlineRounded } from '@material-ui/icons'
import './home.css'
import UserBase from '../../shared/components/UIElements/UserBase'
import Home_benefits_card from '../components/Home_benefits_card'
import Cta from '../../shared/components/UIElements/Cta'

const Home = () => {
    return (
            <React.Fragment>
            <Navbar />
            <div className="container">
            <div className="hero">
                <div className="hero-content-holder">
                <div className="hero-content">
                    <h1>
                    Handwritten
                    Assignments in seconds!
                    </h1>
                    <p>Write Right Go writes beautiful and realistic assignments for you, so
                        that you don't have to spend hours on it. Feel less burdened, get free
                        time to do things that mater to you.</p>
                        <div className="cta">
                        <NavLink className="nav-links"  to = "login">
                        <Button size="large" color="secondary" variant='contained'>Get Started Now</Button> </NavLink>
                        <NavLink className="nav-links" to = "signup">
                        <Button size="large" className='custom-outline' color="secondary" variant='outlined' startIcon={<PlayCircleOutlineRounded />}>Watch How It Works</Button>
                        </NavLink>
                        </div>
                </div>
                </div>
                <div className="hero-img">
                    <img src="/img/Saly-35@2x.png" alt="write-write-go-hero" />
                </div>
             </div>
             <UserBase />
             <div className="benefits">
                 <h1>Fast, Simple and Effortless!</h1>
                 <div className="benefits-cards">
                 <Home_benefits_card image = "/img/Saly-1@2x.png" title = "Get Work Done Faster" desc = "You get an unbeatable advantage, your assignments are done on the click of a button."/>
                 <Home_benefits_card image = "/img/Saly-19@2x.png" title = "Do Better Things" desc = "While we take care of your assignments, you can focus on doing more productive stuff."/>
                 <Home_benefits_card image = "/img/Saly-11@2x.png" title = "Reduce Burden" desc = "As a student you always have a million thing to do we are here to share some of the burden."/>
                 <Home_benefits_card image = "/img/Saly-3@2x.png" title = "More Time To Chill" desc = "Who doesn't want a break and some time to chill? Don't worry we make sure assignments don't come in the way."/>
                 </div>
             </div>
             <Cta />
        </div>
        </React.Fragment>
    )
}

export default Home
