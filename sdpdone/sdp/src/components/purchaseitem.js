import React from 'react'
import "./purchaseitemstyles.css"
import {NavLink} from 'react-router-dom'


function purchaseitem() {
  return (
        <div className='forgot'>
            <form>
                <label>Email</label>
                <input type='email'></input>
                <label>Mobile no</label>
                <input type='mobile no'></input>
                <label>Select billing type</label>
                <select>
                    <option>Debit Card</option>
                    <option>UPI</option>
                    <option>PayPal</option>
                </select>


                <NavLink to="/" className='btn'>Purchase</NavLink>

            </form>
        </div>
  )
}

export default purchaseitem