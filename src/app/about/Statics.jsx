import { statisticsData } from "@/components/common/Helper";
import React from "react";

const Statics = () => {
  return (
    <section className="py-36.25">
      <div className="container flex flex-col justify-center items-center">
        {/* Heading */}
        <h2 className="heading text-center">
          Our <span className="text-pink">Statistics</span>
        </h2>

        {/* Subtitle */}
        <p className="pt-4.5 text-lightbrown text-lg text-center">
          What makes us special through our impressive statistics.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 pt-12.5 gap-7.5">
          {statisticsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[15px] w-63.25  h-45.5 border-b-2 flex justify-center items-center border-pink shadow-[0px_12px_105px_12px_#00000008] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_15px_40px_rgba(236,72,153,0.35)]"
            >
              <div className="flex flex-col gap-7">
                <h3 className="text-[44px] berkshire text-center leading-11 text-darkbrown">
                  {item.value}
                  <sup className="text-pink-500 text-lg ml-1">
                    {item.symbol}
                  </sup>
                </h3>

                <p className="mt-2 text-lightbrown ">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statics;
