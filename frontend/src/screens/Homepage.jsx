import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import FeatureCards from '../components/FeatureCards.jsx'
import HowItWorks from '../components/HowItWorks.jsx'
import CTASection from '../components/CTASection.jsx'
import Footer from '../components/Footer.jsx'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureCards />
      <HowItWorks />
      <CTASection />#
      <Footer />
    </div>
  )
}

export default Homepage
