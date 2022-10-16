import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content' >
                <h1>Want to get Hired?</h1>
                <p>World's first advanced platform to secure job</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>    
                    <Link to='/login' className='btn btn-light'>Get Started</Link>
                </div>
            </div>
        </div>
    )
}

export default Video
