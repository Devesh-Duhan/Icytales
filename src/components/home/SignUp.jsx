import React from 'react'
import Button from '../common/Button';
import { AddToWishlist, RightArrow } from '../common/Icons';
import Image from 'next/image';

const SignUp = () => {
  return (
    <section className=" pt-35.5 pb-38 max-lg:py-28 max-md:py-20 max-sm:py-8  ">
      <div className="container relative">
        {/* decorative images */}
        <div className="absolute -right-7 max-lg:opacity-15 max-xl:right-5 top-12">
          <Image
            src="/images/doubleTriangledecorative.png"
            height={55}
            width={52}
            alt="trianglre"
          />
        </div>
        <div className="absolute bottom-12.5 -left-7 max-lg:opacity-15 max-lg:left-7 max-lg:bottom-0">
          <Image
            src="/images/doubleCircledecorative.png"
            height={62}
            width={64}
            alt="triangle"
          />
        </div>
        <div className="flex justify-center flex-col  items-center">
          <h2 className="heading text-center max-w-177.75 w-full">
            Sign up For <span className="text-pink"> Exclusive Deals</span> and
            Updates
          </h2>
          <p className="text-lightbrown leading-6.5  text-xl text-center max-md:leading-4 max-lg:text-lg max-md:text-base max-sm:text-sm max-lg:pt-5 max-md:pt-5 max-sm:pt-3 pt-7">
            Get 10% off your next order and stay updated with our latest offers.
          </p>
          <div className=" max-w-182.5 w-full pt-13.75 max-lg:pt-12 max-md:pt-9 max-sm:pt-7 flex max-sm:flex-col justify-center items-center gap-2.5">
            <input
              type="text"
              className="shadow-[0px_2px_73px_2px_#0000000D] max-sm:border max-sm:border-pink outline-none px-7 max-sm:max-w-150 max-w-130 w-full rounded-[30px] h-15.5 placeholder:text-[#757575] max-md:placeholder:text-xs max-lg:h-12.5"
              placeholder="Enter Your Email Address"
            />
            <Button
              theme="primary"
              height="h-[62px] max-lg:h-[50px]"
              width="w-[200px] max-lg:min-w-[160px] max-md:min-w-[140px] max-sm:w-full "
              icons={<RightArrow />}
              className="uppercase tracking-wide "
              type="button"
            >
              Get Started
            </Button>
          </div>
          <div className="flex justify-center pt-9.25 max-lg:pt-8 max-md:pt-7 items-center gap-3">
            <input
              type="radio"
              id="policy"
              className="accent-pink cursor-pointer"
            />
            <label htmlFor="policy">
              I agree to the{" "}
              <span className="text-pink-500 cursor-pointer underline">
                privacy policy
              </span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp