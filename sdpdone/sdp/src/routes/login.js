import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import Form1 from '../components/Form1'

const login = () => {
  return (
    <div>
            <Navbar />
            <HeroImage heading='Register.' text='Register to Hire Easy' />
            <Form1 />
            <Footer/>
    </div>
  )
}

export default login
