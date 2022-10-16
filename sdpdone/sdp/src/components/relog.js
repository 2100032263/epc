import React from 'react'
import './relogstyles.css'
import { NavLink } from 'react-router-dom'

const Form = () => {
    return (
        <div className='form'>
            <form>
                <p>
                    Proceed to login
                </p>
                <NavLink to="/contact" className='btn'>Login</NavLink>
            </form>
        </div>
    )
}

export default Form
