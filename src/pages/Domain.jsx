import React from 'react'
import { domainData } from '../assets/assets'
import { FaArrowRightLong } from 'react-icons/fa6'

const Domain = () => {
  return (
    <div className='py-40 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl text-dark font-bold mb-6'>Find Unique Domains Checker!</h1>
          <p className='text-xl text-dark/80 '>Web Hosting, Domain Name and Hosting Center Solutions</p>
        </div>
        <div className='bg-white rounded-xl max-w-3xl mx-auto p-8 mb-16 '>
          <div className='flex flex-col md:flex-row'>
            <input type="text" className='flex-grow px-4 py-3 border border-primary rounded-l-md outline-none'  placeholder='Search for your domain'/>
            <select className='px-4 py-3 border border-primary border-l-0 outline-none'>
              <option>.com</option>
              <option>.in</option>
              <option>.net</option>
              <option>.org</option>
              <option>.co</option>
              <option>.io</option>
            </select>
            <button className='bg-primary text-white px-6 py-3 rounded-r-md font-medium cursor-pointer'>Search</button>
          </div>
        </div>
        <div className='mt-40 text-center'>
        <h1 className='max-w-2xl mx-auto text-4xl md:text-5xl text-dark font-bold'>EliteHost Straight forward Domain Pricing</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 mt-16 gap-8'>
{domainData.map((domain,index)=>(
      <div key={index} className='p-10 border border-primary rounded-2xl'>
        <img src={domain.image} alt="" />
        <p className='text-dark/80 mb-6'>{domain.content}</p>
        <h1 className='text-dark text-xl font-bold mb-6'>{domain.price}</h1>
        <a href="" className='text-primary font-bold flex items-center gap-2 hover:underline'>Get Offer <FaArrowRightLong/></a>
      </div>
))}
        </div>
      </div>
    </div>
  )
}

export default Domain