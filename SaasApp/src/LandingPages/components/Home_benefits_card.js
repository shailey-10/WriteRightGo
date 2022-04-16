import React from 'react'
import './Home_benefits_card.css'

const Home_benefits_card = (props) => {
    return (
        <div className='benefit-card'>
            <img src={props.image} alt="" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
    )
}

export default Home_benefits_card