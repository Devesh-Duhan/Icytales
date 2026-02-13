import Button from '@/components/common/Button';
import { RightArrow } from '@/components/common/Icons';
import Image from 'next/image';
import React from 'react'

const Misson = () => {
  return (
    <section className="relative flex justify-end max-w-480 px-3 w-full bg-darkpurple">
      {/* Container */}
      <div className="max-w-381.25 w-full flex items-center justify-between gap-4 ">
        
    
          {/* Small Shape
          <div className="absolute -left-6 top-10 text-pink-400 text-2xl">
            ✦
          </div> */}
          <article className="max-w-130 w-full flex flex-col gap-10">
            {/* Heading */}
            <h2 className="heading text-white">
              Our Mission is to <br />
              Create Moments
            </h2>

            {/* Paragraph */}
            <p className="leading-8 text-lg text-white ">
              We strive to foster a welcoming and joyful environment where
              customers of all ages can gather, celebrate, and make lasting
              memories. Our commitment extends beyond serving great ice cream.
            </p>

            {/* Button */}
            <Button
              theme="primary"
              height="h-15.5 mt-2"
              width="w-[192px]"
              leading="leading-5"
              icons={<RightArrow />}
              className="uppercase tracking-wide"
              type="button"
            >
              Read More
            </Button>
          </article>
        

        

        <aside className="relative flex justify-center ">
         

          {/* Image */}
          <div className="relative w-230.25 h-180.75 ">
            <Image
              src="/images/GirlsgroupMissonSec.png" 
              alt="Mission"
              fill
              className="object-cover"
            />
          </div>
        </aside>
      </div>

     
    </section>
  );
}

export default Misson