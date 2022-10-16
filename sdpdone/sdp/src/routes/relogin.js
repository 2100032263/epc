import React from 'react'
import Relog from '../components/relog'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

function forgotpassword() {
  return (
    <div>
            <Navbar />
            <HeroImage heading='Reset Password' text='Link is sent to your mail to reset your password' />
            <Relog />
            <Footer/>
    </div>
  )
}

export default forgotpassword