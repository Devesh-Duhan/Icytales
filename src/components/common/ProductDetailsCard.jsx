import React from 'react'
import { AddToWishlist } from './Icons'

const ProductDetailsCard = ({image,}) => {
  return (
    <div className=' bg-white py-[11px_18px] px-[11px] '>
        <div className={`${items.title.toLowerCase().includes("venilla")?"bg-[rgba(247,242,247,1)]":items.title.toLowerCase().includes("chocolate")?"bg-[rgba(255,238,238,1)]":items.title.toLowerCase().includes("mint")?"bg-[rgba(246,249,225,1)]":"bg-[rgba(255,250,244,1)]"} relative  `}> 
          <div className=' bg-white   rounded-[40px] max-w-[40px] h-[40px] flex items-center justify-center absolute top-[10px] left-[10px] '>
            <AddToWishlist/>

          </div>

          {image}

            

        </div>


    </div>
  )
}

export default ProductDetailsCard