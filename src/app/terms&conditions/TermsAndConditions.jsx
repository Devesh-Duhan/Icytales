import { termsData } from '@/components/common/Helper';
import React from 'react'

const TermsAndConditions = () => {
  return (
    <section className="container py-25">
      {/* Heading */}
      <h2 className="text-[30px] font-semibold text-darkbrown leading-7.5 ">
        Terms and Conditions:
      </h2>

      {/* Intro Text */}
      <p className="text-lightbrown  pt-2.75 leading-6">
        Welcome to [Your Online Education Platform]! Before accessing or using
        our website, please read these Terms and Conditions carefully. By
        accessing or using any part of the site, you agree to be bound by these
        Terms and Conditions.
      </p>

      {/* Mapping Terms */}
      <div className="pt-5 space-y-4">
        {termsData.map((item) => (
          <div key={item.id}>
            <h3 className="font-bold text-darkbrown leading-5.5 text-[22px]">
              {item.id}. {item.title}
            </h3>

            <p className="text-lightbrown  pt-2 leading-6">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-lightbrown pt-5 leading-6">
        Please review our full Terms and Conditions for more detailed
        information.
      </p>
    </section>
  );
}

export default TermsAndConditions