import Image from 'next/image'
import React from 'react'
import { ContactDetails } from '../common/Helper'
import Button from '../common/Button'
import { ButtonLeftArrow, RightArrow } from '../common/Icons'

const GetInTouch = () => {
  return (
    <div className='max-w-293  mx-auto w-full px-4 pt-15 lg:pt-35 pb-20 lg:pb-37.5 flex flex-col items-center'>
        <h2 className='heading text-center max-sm:text-[45px]! max-md:text-[50px]!' >Get in <span className='text-[#F83D8E] '>Touch</span> With Us</h2>
        <p className='text-[16px] sm:text-[18px] text-center md:text-[20px] text-lightbrown pt-4.5 '>Reach out and connect with us today for any inquiries or assistance!</p>
        <div className='flex max-sm:flex-col max-w-285 gap-12.5 lg:gap-18.75 w-full pt-10 md:pt-20'>
        <div className='max-w-75 lg:max-w-87.5 w-full grid max-sm:mx-auto grid-cols-1 gap-7.5'>
          {ContactDetails.map((items,index)=>(
            <div key={index} className='flex gap-4 lg:gap-7.5 h-25 sm:h-39.25 items-center justify-center w-full border border-white shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)] rounded-[20px]'>
                <div>
                  <Image src={items.image} alt='location' width={75} height={75} className='w-[75px] h-[75]  max-lg:w-15 max-lg:h-15 max-sm:w-12 max-sm:h-12'/>
                  </div>
               <div> <h3 className='text-[14px] md:text-[18px] lg:text-[20px] text-[#0F0200] pb-2.75 flex font-bold'>{items.heading}</h3>
               {items.subheading.map((items, index) => (
                <p key={index} className='text-lightbrown w-[191.67px] max-md:text-[12px] max-lg:text-[14px] '>{items}</p>
                ))} </div>
            </div>
          ))}
            
        </div>
        <div className='max-w-171.5 w-full'>
          <form className="w-full rounded-2xl bg-white">
      {/* Grid */}
      <div className="grid grid-cols-1 gap-x-4 lg:gap-x-6.5 gap-y-4 lg:gap-y-5.5 md:grid-cols-2">
        {/* First Name */}
        <div>
          <label className="mb-1 lg:mb-4.5 block text-[14px] text-lg:text-[16px] font-medium text-lightbrown">
            First Name
          </label>
          <input
            type="text"
            placeholder=""
            className="h-12 w-full rounded-full border border-[#E3E4E5] px-5 outline-none focus:border-purple-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="mb-1 lg:mb-4.5 block text-[14px] text-lg:text-[16px] font-medium text-lightbrown">
            Last Name
          </label>
          <input
            type="text"
            className="h-12 w-full rounded-full border border-[#E3E4E5] px-5 outline-none focus:border-purple-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 lg:mb-4.5 block text-[14px] text-lg:text-[16px] font-medium text-lightbrown">
            Email address
          </label>
          <input
            type="email"
            className="h-12 w-full rounded-full border border-[#E3E4E5] px-5 outline-none focus:border-purple-500"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1 lg:mb-4.5 block text-[14px] text-lg:text-[16px] font-medium text-lightbrown">
            Phone
          </label>
          <input
            type="tel"
            className="h-12 w-full rounded-full border border-[#E3E4E5] px-5 outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Message */}
      <div className="mt-6">
        <label className="mb-1 lg:mb-4.5 block text-[14px] text-lg:text-[16px] font-medium text-lightbrown">
          Message
        </label>
        <textarea
          rows={6}
          className="w-full resize-none rounded-[15px] border border-[#E3E4E5] px-5  outline-none focus:border-purple-500"
        ></textarea>
      </div>
      <Button theme="primary" height="h-[62px]" width="w-[207.42px]" iconposition="flex gap-[21.66px]" icons={<RightArrow/>} className='mt-6.25 md:mt-9.75 max-md:w-[200px] max-md:text-[14px] max-md:h-[55px]'>Submit Now</Button>
    </form>
        </div>
        </div>
    </div>
  )
}

export default GetInTouch