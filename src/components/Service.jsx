import React from 'react'
import { serviceData } from '../assets/assets'

const Service = () => {
  return (
    <div className='py-20 bg-white'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h1 className='text-3xl md:text-4xl text-dark font-bold '>Why EliteHost</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                {serviceData.map((service,index)=>(
                    <div key={index} className='border border-primary/80 rounded-2xl shadow-2xl p-10'>
                        <div className='w-20 h-20 rounded-full bg-amber-600/20 flex items-center justify-center mb-6'>
                        <img className='object-cover' src={service.image} alt="" />

                        </div>
                        <h3 className='text-xl text-dark font-bold mb-6'>{service.title}</h3>
                        <p className='text-dark/80'>{service.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Service