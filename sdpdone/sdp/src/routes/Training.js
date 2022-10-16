import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'
import Pricing from './Pricing'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='TRAINING.' text='Pre-Job Recruitment & In-Job Training.' />
            <TrainingSection />
            <Footer />
        </div>
    )  
}

export default Training
