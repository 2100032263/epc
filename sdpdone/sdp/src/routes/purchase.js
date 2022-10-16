import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import PurchaseItem from '../components/purchaseitem'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='Complete purchase' text='enter billing details to purchase the product' />
            <PurchaseItem />
            <Footer />
        </div>
    )
}

export default Pricing
