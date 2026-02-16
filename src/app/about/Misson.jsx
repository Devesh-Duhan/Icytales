import Button from '@/components/common/Button';
import { RightArrow } from '@/components/common/Icons';
import Image from 'next/image';
import React from 'react'

const Misson = () => {
  return (
    <section className="relative flex justify-end max-w-480  w-full bg-darkpurple">
      <div className="absolute top-53.75 left-42.5 ">
        <Image
          src="/images/triangleDecoration.png"
          height={52}
          width={47}
          alt="triangle"
        />
      </div>
      <div className="absolute left-33.75 bottom-63">
        <Image
          src="/images/crossDecoration.png"
          height={46}
          width={44}
          alt="triangle"
        />
      </div>

      {/* Container */}
      <div className="max-w-381.25 w-full relative flex items-center justify-between gap-4 ">
        <div className="absolute left-125  bottom-33">
          <Image
            src="/images/waveDecoration.png"
            height={70}
            width={78}
            alt="triangle"
          />
        </div>

        <article className="max-w-130 w-full flex flex-col gap-10">
          {/* Heading */}
          <h2 className="heading text-white">
            Our Mission is to <br />
            Create Moments
          </h2>

          {/* Paragraph */}
          <p className="leading-8 text-xl text-white ">
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
              src="/images/girlsGroupMissonSec.png"
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