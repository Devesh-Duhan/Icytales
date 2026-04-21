import React from "react";

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F6FB] px-4 py-20">
      <div className="rounded-[30px] border border-[#E9DFEE] bg-white px-8 py-16 text-center shadow-[0_25px_60px_rgba(120,55,141,0.08)]">
        <p className="text-sm text-[#A884B5]">Please wait</p>
        <h1 className="mt-4 text-3xl font-bold text-[#0F0200]">Loading...</h1>
        <p className="mt-3 max-w-md text-sm text-[#6B6B6B]">
          We’re preparing your page. This placeholder ensures the route renders
          cleanly.
        </p>
      </div>
    </div>
  );
};

export default page;
