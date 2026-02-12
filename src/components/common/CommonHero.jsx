import React from 'react'

const CommonHero = ({ title, breadcrumb }) => {
  return (
    <section className="w-full py-20 bg-linear-to-r from-[#d7cdd6] via-[#dcdcdc] to-[#cfe3ea] flex flex-col items-center justify-center">
      {/* Title */}
      <h1 className="text-5xl md:text-6xl font-semibold text-[#2b1b17]">
        {title}
      </h1>

      {/* Breadcrumb */}
      <div className="mt-6 px-6 py-2 rounded-full bg-white/60 backdrop-blur-md shadow-md text-sm flex gap-2">
        {breadcrumb}
      </div>
    </section>
  );
};

export default CommonHero