import React from 'react'
import Button from '../common/Button';

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
              content="Explore Our Menu"
              icons="<RightArrowIcon  />"
              height="h-[62px] "
              width="w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp