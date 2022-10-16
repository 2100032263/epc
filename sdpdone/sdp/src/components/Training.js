import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const Training = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Thorough training is a necessity when you are finding a job. We offer all inclusive training for pre-job and in-job  scenarios.</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
            
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div>
            </div>
            <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>- Neuro Linguistic Programming (NLP) Mind Power Mastery -</h3>
                    <span className='bar'></span>
                    <p className='btc'>₹1999</p>
                    <p>- 30 days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/purchase' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Advanced NLP Practitioner & NLP Mastery Course
 -</h3>
                    <span className='bar'></span>
                    <p className='btc'>₹2999</p>
                    <p>- 45 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/purchase' className='btn'>Book</Link>
                </div>
                <div className='card'>
                    <h3>- Digital Marketing -</h3>
                    <span className='bar'></span>
                    <p className='btc'>₹4999</p>
                    <p>- 90 Days -</p>
                    <p>- Views -</p>
                    <p>- Featured -</p>
                    <p>- Private Quarters -</p>
                    <Link to='/purchase' className='btn'>Book</Link>
                </div>
            </div>
        </div>
        <div className='pricing'>
        <div className='right'>
                <h1>Pricing</h1>
                <p>Select your choice of training</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>
        </div>
        </div>
    )
}

export default Training
