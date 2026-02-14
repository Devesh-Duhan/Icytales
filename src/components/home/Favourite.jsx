import React from 'react'
import FavouritesSwiper from '../common/FvouritesSwiper'
import Image from 'next/image'

const Favourite = () => {
  return (
    <div className=' relative bg-[linear-gradient(301.26deg,_#EFD7EF_8%,_#F5F9FC_43%,_#F8EAE1_64%,_#EAF8F9_87%)]  '>
        <div className='absolute left-0 top-[136px]'>
<Image
  src="/images/favouritesLeftImg.png"
  height={437}
  width={283}
  alt="ice-cream"
/>


        </div>
        <div className='max-w-[1134px] w-full px-3 py-[142px_162px] mx-auto '>
            <h2 className=' heading text-center relative z-2 '>
                Our <span className=' text-pink'>Classic</span>  Favorites
            </h2>
            <p  className='text-lightbrown mt-[18px] z-2 relative text-center text-xl leading-[26px]   '>
                Check out our top products that our customers love.
            </p>
            {/* swiper */}
            <div className='mt-[50px]'>
 <FavouritesSwiper/>
            </div>
           

        </div>
        <div className='absolute right-0 bottom-[136px]'>
<Image
  src="/images/favouriteRightImg.png"
  height={500}
  width={212}
  alt="ice-cream"
/>


        </div>
         
    </div>
  )
}

export default Favourite