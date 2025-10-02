import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { assets, serviceProvider } from '../assets/assets';


const Feature = () => {
  return (
    <div className='py-20 bg-gray-50'>
        <div className="container mx-auto px-6">
            <div className='text-center'>
                <h1 className='text-3xl md:text-4xl text-dark font-bold mb-4 '>We Provide Hosting Solution</h1>
                <p className='text-dark/80 max-w-xl mx-auto'>elect your solution and we will help you narrow down our best high-speed options to fit your needs.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 '>
                {serviceProvider.map((service,index)=>(

                    <div key={index} className='bg-white p-12 rounded-2xl border border-primary '>
                    <img className='mb-6' src={service.image}alt="" />
                    <h1 className='text-xl text-dark font-bold mb-4 '>{service.title}</h1>
                    <p className='text-dark/80 mb-6'>
                        {service.content}
                    </p>
                    <a className='flex items-center gap-2' href="#"> View Details
                     <FaArrowRightLong/> </a>

                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

export default Feature