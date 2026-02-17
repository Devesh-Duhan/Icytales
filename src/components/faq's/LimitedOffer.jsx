import Button from '@/components/common/Button';
import { RightArrow } from '@/components/common/Icons';
import React from 'react'

const LimitedOffer = () => {
  return (
    <div className='bg-[url("/images/limitedOfferbg.png")] bg-cover bg-center bg-no-repeat'>
      <div className=" flex flex-col justify-center items-center gap-6 max-md:gap-4 max-sm:gap-3 pt-31 pb-35 max-lg:py-25 max-md:py-18 max-sm:py-8 px-3">
        <h2 className="berkshire text-white text-[112px] leading-28 max-lg:leading-20 max-md:leading-18 max-sm:leading-12 max-lg:text-6xl max-md:text-5xl max-sm:text-4xl max-xl:text-7xl max-w-158 w-full text-center">
          Limited Time Offer!
        </h2>
        <p className="text-center text-3xl max-lg:text-2xl max-md:text-xl max-sm:textlg text-white pt-3.75 pb-2.75 max-lg:py-2.5 ">
          Get <span className="text-[#FFD800]">20% Off</span> All Vegan Ice
          Creams!{" "}
        </p>
        <Button
          theme="secondary"
          height="h-15.5 max-lg:h-12 max-md:h-10"
          width="w-[211px] max-lg:w-[190px] max-md:w-[140px]"
          icons={<RightArrow />}
          className="uppercase tracking-wide"
          type="button"
        >
          Get This Deal
        </Button>
        <p className='text-white max-sm:text-sm leading-4'>Use code: VEGAN20 at checkout.</p>
      </div>
    </div>
  );
}

export default LimitedOffer

