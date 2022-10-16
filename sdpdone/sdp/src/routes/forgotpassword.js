import React from 'react'
import Forgot from '../components/forgot'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

function forgotpassword() {
  return (
    <div>
            <Navbar />
            <HeroImage heading='Forgot Your Password..?' text='Enter Your Mail to reset your password' />
            <Forgot />
            <Footer/>
    </div>
  )
}

export default forgotpassword