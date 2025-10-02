import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Pricing = () => {
  return (
    <div className='py-20 bg-gray-50'>
        <div className='container mx-auto px-6'>
            <div className='text-center mb-16'>
                <h1 className='text-3xl md:text-4xl text-dark font-bold mb-6'>Choose Hosting Plan</h1>
                <p className='text-dark/80 max-w-md mx-auto'>Globally incubate next-generation e-services via state of the art technology.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 '>
                {/* first grid  */}
                <div className='bg-white rounded-2xl shadow overflow-hidden p-10 border border-primary/70'>
                <h3 className='text-3xl text-dark font-bold mb-6'>Started</h3>
                <p className='text-dark/80 mb-6 '>Perfect for small websites and blogs</p>
                <p className='text-dark/80 mb-8'>
                    <span className='text-3xl text-dark font-bold'>$2.99</span>
                    <span>/month</span>
                </p>
                <button className='w-full px-6 py-2.5 bg-gray-200 rounded text-center cursor-pointer'>Get Started</button>
                <ul className='mt-8 space-y-4'>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>1 Website</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>10 GB SSD Storage</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Unlimited Bandwidth</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Free SSL Certificate</span>
                    </li>
                </ul>
                </div>

                <div className='relative bg-white rounded-2xl shadow overflow-hidden p-10 border border-primary/70'>
                <div className='absolute py-2 bg-primary text-white px-6 rounded-tr-2xl rounded-bl-2xl top-0 right-0'>
                    <span>
                        Popular
                    </span>
                </div>
                <h3 className='text-3xl text-dark font-bold mb-6'>Business</h3>
                <p className='text-dark/80 mb-6 '>Ideal for business growing</p>
                <p className='text-dark/80 mb-8'>
                    <span className='text-3xl text-dark font-bold'>$5.99</span>
                    <span>/month</span>
                </p>
                <button className='w-full px-6 py-2.5 bg-primary rounded text-center cursor-pointer text-white font-semibold'>Get Started</button>
                <ul className='mt-8 space-y-4'>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Unlimited Website</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>50 GB SSD Storage</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Unlimited Bandwidth</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Free SSL Certificate</span>
                    </li>
                </ul>
                </div>

                <div className='bg-white rounded-2xl shadow overflow-hidden p-10 border border-primary/70'>
                <h3 className='text-3xl text-dark font-bold mb-6'>Enterprise</h3>
                <p className='text-dark/80 mb-6 '>For high-traffic websites</p>
                <p className='text-dark/80 mb-8'>
                    <span className='text-3xl text-dark font-bold'>$12.99</span>
                    <span>/month</span>
                </p>
                <button className='w-full px-6 py-2.5 bg-gray-200 rounded text-center cursor-pointer'>Get Started</button>
                <ul className='mt-8 space-y-4'>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Unlimited Website</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>200 GB SSD Storage</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Unlimited Bandwidth</span>
                    </li>
                    <li className='flex gap-2 items-center'>
                        <FaCheckCircle className='text-primary'/>
                        <span className='text-dark/80'>Free SSL Certificate</span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing