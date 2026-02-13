import React from 'react'
import Button from '../common/Button';
import { AddToWishlist, RightArrow } from '../common/Icons';
import Image from 'next/image';

const SignUp = () => {
  return (
    <section className=" pt-35.5 pb-38 ">
      <div className="container relative">
        {/* decorative images */}
        <div className="absolute -right-7 top-12">
          <Image
            src="/images/doubleTriangledecorative.png"
            height={55}
            width={52}
            alt="trianglre"
          />
        </div>
        <div className="absolute bottom-12.5 -left-7">
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
          <p className="text-lightbrown leading-6.5 text-xl pt-7">
            Get 10% off your next order and stay updated with our latest offers.
          </p>
          <div className=" max-w-182.5 w-full pt-13.75 flex justify-center items-center gap-2.5">
            <input
              type="text"
              className="shadow-[0px_2px_73px_2px_#0000000D] outline-none px-7 max-w-130 w-full rounded-[30px] h-15.5 placeholder:text-[#757575]"
              placeholder="Enter Your Email Address"
            />
            <Button
              theme="primary"
              height="h-12"
              width="w-44"
              leading="leading-5"
              icons={<RightArrow />}
              className="uppercase tracking-wide"
              type="button"
            >
              Get Started
            </Button>
          </div>
          <div className="flex justify-center pt-9.25 items-center gap-3">
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