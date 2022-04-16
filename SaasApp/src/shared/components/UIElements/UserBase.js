import React from 'react'
import './UserBase.css'

const UserBase = () => {
    return (
        <div className='userBase'>
            <div className="counter">
                <h2>100+</h2>
                <p>Assignments Written</p>
            </div>
            <div className="counter">
                <h2>50+</h2>
                <p>Students</p>
            </div>
            <div className="counter">
                <h2>200+</h2>
                <p>Hours Saved</p>
            </div>
        </div>
    )
}

export default UserBase
