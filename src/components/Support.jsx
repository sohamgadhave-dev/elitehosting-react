import React from 'react'
import { assets } from '../assets/assets'
import { FaCheckCircle } from 'react-icons/fa'

const Support = () => {
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='flex flex-col md:flex-row items-center'>
                <div className='w-full md:w-1/2 p-8 rounded-2xl overflow-hidden '>
                    <img src="https://elithosting.vercel.app/assets/support-DJe3HB_Y.webp" alt="" />
                </div>
                <div className='w-full md:w-1/2 p-8 ml-16 '>
                        <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>24/7 support for Your Success</h1>
                        <ul className='space-y-4'>
                            <li className='flex items-center gap-4'>
                                <FaCheckCircle className='text-xl text-primary -mt-3 '/>
                                <span className='block max-w-md'>Ensure support is available 24/7, including weekends and holidays.</span>
                            </li>

                            <li className='flex items-center gap-4'>
                                <FaCheckCircle className='text-xl text-primary -mt-3 '/>
                                <span className='block max-w-md'>Ensure support is available 24/7, including weekends and holidays.</span>
                            </li>

                            <li className='flex items-center gap-4'>
                                <FaCheckCircle className='text-xl text-primary -mt-3 '/>
                                <span className='block max-w-md'>Implement a CDN to deliver content quickly to users worldwide.</span>
                            </li>

                            <li className='flex items-center gap-4'>
                                <FaCheckCircle className='text-xl text-primary -mt-3 '/>
                                <span className='block max-w-md'>Offer various support channels such as live chat, email, phone, and a ticketing system.</span>
                            </li>

                            <li className='flex items-center gap-4'>
                                <FaCheckCircle className='text-xl text-primary -mt-3 '/>
                                <span className='block max-w-md'>Aim for rapid response times to customer inquiries to minimize downtime and frustration.</span>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Support