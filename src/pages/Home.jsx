import React from 'react'
import Hero from '../components/Hero'
import Feature from '../components/Feature'
import Pricing from '../components/Pricing'
import Service from '../components/Service'
import Support from '../components/Support'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <Pricing/>
      <Service/>
      <Support/>
    </div>
  )
}

export default Home