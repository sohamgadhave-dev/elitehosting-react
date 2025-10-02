import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { FaArrowRightLong, FaCloud, FaDatabase, FaServer } from 'react-icons/fa6'
import { assets } from '../assets/assets'

const Hosting = () => {
  return (
    <div className='py-40 bg-white '>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4'>Web Hosting Solution</h1>
          <p className='text-dark/80 '>Find the perfect hosting plan for your website needs</p>
        </div>
        <div className='flex flex-col md:flex-row items-center mb-16'>
          <div className='w-full md:w-1/2 p-8'>
          <FaServer className='text-3xl text-primary mb-6'/>
          <h1 className='text-3xl text-dark font-bold mb-6'>Shared Hosting</h1>
          <p className='text-xl text-dark/80 mb-6'>Perfect for beginners and small websites. Get started with our affordable shared hosting plans.</p>
          <ul className='space-y-4'>
            <li className='flex items-center gap-2'> 
              <FaCheckCircle className='text-primary'/>
              <span>Easy-to-use control panel</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-primary'/>
              <span>One-click WordPress install</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-primary'/>
              <span>Free website migration</span>
            </li>
          </ul>
          <a href="#" className='text-dark font-bold flex items-center gap-2 mt-6 '>
            View Details <FaArrowRightLong/>
          </a>
          </div>
          <div className='w-full md:w-1/2'>
          <img src={assets.sharedDomainImg} alt="" /></div>
          <div></div>
        </div>

        <div className='flex flex-col md:flex-row items-center mb-16'>
          <div className='w-full md:w-1/2'>
          <img src={assets.vpsDomainImg} alt="" srcset="" />
          </div>
          <div className='w-full md:w-1/2 p-8 ml-8'>
                    <FaCloud className='text-3xl text-primary mb-6'/>
          <h1 className='text-3xl text-dark font-bold mb-6'>Vps Hosting</h1>
          <p className='text-xl text-dark/80 mb-6'>Get more power and flexibility with our Virtual Private Server solutions.</p>
          <ul className='space-y-4'>
            <li className='flex items-center gap-2'> 
              <FaCheckCircle className='text-primary'/>
              <span>Dedicated resources</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-primary'/>
              <span>Full root access</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-primary'/>
              <span>Scalable resources</span>
            </li>
          </ul>
          <a href="#" className='text-dark font-bold flex items-center gap-2 mt-6 '>
            View Details <FaArrowRightLong/>
          </a>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center mb-16'>
          <div className='w-full md:w-1/2 p-8'>
          <FaDatabase className='text-3xl text-primary mb-6'/>
          <h1 className='text-3xl text-dark font-bold mb-6'>Dedicated Server</h1>
          <p className='text-xl text-dark/80 mb-6'>Maximum performance and security with your own dedicated server.</p>
          <ul className='space-y-4'>
            <li className='flex items-center gap-2'> 
              <FaCheckCircle className='text-primary'/>
              <span>Entire server resources</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-primary'/>
              <span>Enhanced security</span>
            </li>
            <li className='flex items-center gap-2'>
              <FaCheckCircle className='text-primary'/>
              <span>24/7 monitoring</span>
            </li>
          </ul>
          <a href="#" className='text-dark font-bold flex items-center gap-2 mt-6 '>
            View Details <FaArrowRightLong/>
          </a>
          </div>
          <div className='w-full md:w-1/2'>
          <img src={assets.sharedDomainImg} alt="" /></div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hosting