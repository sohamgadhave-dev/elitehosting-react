import React from 'react'
import { assets, teamData } from '../assets/assets'

const About = () => {
  return (
    <div className='py-40 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>About EliteHosting</h1>
          <p className='text-xl text-dark/80'>Learn about our story and mission to provide the best hosting experience</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-12 md-8'>
          <div className='w-full md:w-1/2'>
          <h1 className='text-3xl text-dark font-bold mb-6'>Our Story</h1>
          <p className='text-xl text-dark/80 mb-6'>Founded in 2010, Elithost started with a simple mission: to make web hosting accessible, reliable, and affordable for everyone.

What began as a small startup with a single server has grown into a global hosting provider with data centers around the world and thousands of satisfied customers.

Today, we continue to innovate and expand our services while maintaining the personal touch that sets us apart from larger corporations.</p>
          </div>
          <div className='w-full md:w-1/2'>
          <img className='h-96 w-full object-cover' src={assets.aboutImg} alt="" /></div>
        </div>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Part of our team</h1>
          <p className='text-xl text-dark/80 max-w-2xl mx-auto' >
          Over the last 19 years,  Site Ground has grown to more than A 
          considerable number of our people started working</p>
        </div>

        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3  gap-6'>
          {teamData.map((team,index)=>(
              <div key={index} className='w-70 shadow rounded-2xl'>
                <img className='object-cover w-full h-60' src={team.image} alt="" />
                <div className='text-center p-8'>
                  <h1 className='text-2xl font-bold text-dark'>{team.name}</h1>
                  <p className='text-dark/60 '>{team.designation}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About