import React from 'react'
import Button from '../common/Button';
import { AddToWishlist, RightArrow } from '../common/Icons';

const SignUp = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-center flex-col  items-center">
          <h2 className="heading text-center max-w-177.75 w-full">
            Sign up For <span className="text-pink"> Exclusive Deals</span> and
            Updates
          </h2>
          <p className="text-lightbrown leading-6.5 text-xl">
            Get 10% off your next order and stay updated with our latest offers.
          </p>
          <div className=" max-w-182.5 w-full flex justify-center items-center gap-2.5">
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
          <div className="flex justify-center items-center gap-3">
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