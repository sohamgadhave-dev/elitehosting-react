import React from 'react'
import { FaEnvelope, FaLocationDot, FaMessage, FaPhone, FaVoicemail } from 'react-icons/fa6'

const Contact = () => {
  return (
    <div className='py-40 bg-white'>
      <div className='container mx-auto px-6 '>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-4  '>Get in Touch</h1>
          <p className='text-xl text-dark/80'>Have questions? Our team is here to help you with any inquiries</p>
        </div>
        <div className='flex flex-col md:flex-row items-start gap-6'>

          <div className='w-full md:w-1/2 shadow p-12'>
          <div className='mb-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block text-dark/80 mb-2 font-semibold' htmlFor="">First Name</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50' placeholder='Enter first name' type="text" />
            </div>

            <div>
              <label className='block text-dark/80 mb-2 font-semibold' htmlFor="">Last Name</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50' placeholder='Enter last name' type="text" />
            </div>
          </div>
          <div>
            <div className='mb-4'>
              <label className='block text-dark/80 mb-2 font-semibold' htmlFor="">Email Address</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50' placeholder='Enter email address ' type="text" />
            </div>
            <div className='mb-4'>
              <label className='block text-dark/80 mb-2 font-semibold' htmlFor="">Subject</label>
              <input className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50' placeholder='Enter subject' type="text" />
            </div>

             <div className='mb-4'>
              <label className='block text-dark/80 mb-2 font-semibold' htmlFor="">Message</label>
              <textarea className='w-full px-6 py-2 rounded border border-dark/20 outline-none placeholder:text-dark/50 ' placeholder='Enter message' type="textarea" />
            </div>

            <button className='w-full text-center bg-primary text-white font-semibold rounded cursor-pointer py-3'>Send Message</button>
          </div>
          </div>
          {/* contact info */}
          <div className='w-full md:w-1/2'>
          <div className='mb-6 shadow p-12'>
            <h3 className='text-3xl text-dark font-bold'>Contact Information</h3>
            <div className='mt-6 flex items-center gap-4 '>
              <div className='w-12 h-12 bg-primary/30 rounded-full items-center justify-center flex'>
                <FaLocationDot className='text-xl text-primary cursor-pointer'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold mb-0 text-dark'>Address</h1>
                <p className='text-dark/80'>123 Cloud Street, San Francisco, CA 94103</p>
              </div>
            </div>

             <div className='mt-6 flex items-center gap-4 '>
              <div className='w-12 h-12 bg-primary/30 rounded-full items-center justify-center flex'>
                <FaPhone className='text-xl text-primary cursor-pointer'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold mb-0 text-dark'>Phone</h1>
                <p className='text-dark/80'>+5469875</p>
              </div>   
            </div>
             <div className='mt-6 flex items-center gap-4 '>
              <div className='w-12 h-12 bg-primary/30 rounded-full items-center justify-center flex'>
                <FaEnvelope className='text-xl text-primary cursor-pointer'/>
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-xl font-bold mb-0 text-dark'>Email</h1>
                <p className='text-dark/80'>elithosting@gmail.com</p>
              </div>  
            </div>

          </div>
          <div className='shadow px-12 pt-12 py-4 '>
            <h3 className='text-xl text-dark font-bold mb-6'>Support Hours</h3>
            <ul className='space-y-4'>
              <li className='flex items-center justify-between'>
                <span className='text-dark/80'>Monday-Friday</span>
                <span className='text-dark font-bold'>24/7</span>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-dark/80'>Saturday</span>
                <span className='text-dark font-bold'>24/7</span>
              </li>

              <li className='flex items-center justify-between'>
                <span className='text-dark/80'>Sunday</span>
                <span className='text-dark font-bold'>24/7</span>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact