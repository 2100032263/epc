import React from 'react'
import { NavLink } from 'react-router-dom'

function forgot() {
  return (
        <div className='forgot'>
            <form>
                <label>Email</label>
                <input type='email'></input>

                <NavLink to="/relogin" className='btn'>Reset Password</NavLink>

            </form>
        </div>
  )
}

export default forgot