import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='py-40 relative'>
        <div className='container px-6 mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            {/* left side */}
            <div className='w-full md:w-1/2 '>
                <div className='flex flex-col '>
                    <div className='px-4 py-2.5 w-[300px] bg-primary/40 text-white shadow rounded-full mb-6 '>
                        <span className='text-dark font-semibold'>Supercharge your website today</span>
                    </div>
                    <h1 className='text-4xl md:text-5xl text-dark font-bold mb-8'>
                        <span>Premium Web Hosting</span>
                        <span>Solution for your Business</span>
                    </h1>
                    <p className='text-xl text-dark/80 mb-8'>
                        Lightning-fast hosting with 99.9% uptime, top-notch security, and 24/7 expert support to keep your website running. 
                    </p>
                    <div className='relative flex items-center gap-4 '>
                        <button className='px-8 py-3 bg-primary text-white font-semibold rounded cursor-pointer shadow-xl'>Get Started</button>
                        <button className='px-8 py-3 border-2 border-dark rounded cursor-pointer text-dark font-semibold shadow-xl'>View Plan</button>
                    </div>

                </div>
            </div>
            {/* right side  */}
            <div className='w-full md:w-1/2'>
            <img className='w-full h-full rounded object-cover object-center' src={assets.HeroImg} alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Hero