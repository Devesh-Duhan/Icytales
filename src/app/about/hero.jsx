import CommonHero from '@/components/common/CommonHero';
import React from 'react'

const Hero = () => {
  return (
    <div>
      <CommonHero
        title="About Us"
        breadcrumb={
          <>
            <span className="text-pink-500">Home</span>
            <span>/</span>
            <span>About Us</span>
          </>
        }
      />
    </div>
  );
}

export default Hero