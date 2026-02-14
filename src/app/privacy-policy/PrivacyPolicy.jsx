import { PolicyData, termsData } from '@/components/common/Helper'
import React from 'react'

const PrivacyPolicy = () => {
  return (
    <section className="container py-25">
      {/* Heading */}
      <h2 className="text-[30px] font-semibold text-darkbrown leading-7.5 ">
        Privacy Policy:
      </h2>

      {/* Intro Text */}
      <p className="text-lightbrown  pt-2.75 leading-6">
        Protecting your privacy is important to us. This Privacy Policy outlines
        how we collect, use, and disclose personal information when you use our
        website.
      </p>

      {/* Mapping Terms */}
      <div className="pt-5 space-y-4">
        {PolicyData.map((item) => (
          <div key={item.id}>
            <h3 className="font-bold text-darkbrown leading-5.5 text-[22px]">
              {item.id}. {item.title}
            </h3>

            <p className="text-lightbrown  pt-2 leading-6 max-w-276.25 w-full">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-lightbrown pt-5 leading-6">
        By using our website, you consent to the terms of this Privacy Policy.
        If you have any questions or concerns, please contact us.
      </p>
    </section>
  );
}

export default PrivacyPolicy