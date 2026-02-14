import Image from 'next/image'
import React from 'react'
import { ContactDetails } from '../common/Helper'

const GetInTouch = () => {
  return (
    <div className='max-w-293 mx-auto w-full px-4 pt-35 pb-37.5 flex flex-col items-center'>
        <h2 className='heading'>Get in <span className='text-[#F83D8E] '>Touch</span> With Us</h2>
        <p className='text-[20px] text-lightbrown pt-4.5 '>Reach out and connect with us today for any inquiries or assistance!</p>
        <div className='flex max-w-285 w-full pt-20'>
        <div className='max-w-87.5 w-full flex flex-col gap-7.5'>
          {ContactDetails.map((items,index)=>(
            <div key={index} className='flex gap-7.5 h-39.25 items-center justify-center  w-full border border-white shadow-[0px_2px_73px_2px_rgba(0,0,0,0.05)] rounded-[20px]'>
                <div><Image src={items.image} alt='location' width={75} height={75}/></div>
               <div> <h3 className='text-[20px] text-[#0F0200] pb-2.75 flex font-bold'>{items.heading}</h3>
               {items.subheading.map((items, index) => (
                <p key={index} className='text-lightbrown w-[191.67px] '>{items}</p>
                ))} </div>
            </div>
          ))}
            
        </div>
        <div className='max-w-[686px] w-full'>
          <form action="">
            
          </form>
        </div>
        </div>
    </div>
  )
}

export default GetInTouch