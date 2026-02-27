/** @format */

import React from "react";
// import Hero from "./Hero";
import Journey from "@/components/about-us/Journey";
import Misson from "@/components/about-us/Misson";
import Statics from "@/components/about-us/Statics";
import Team from "@/components/about-us/Team";

const page = () => {
  return (
    <>
      {/* <Hero /> */}
      <Journey />
      <Misson />
      <Statics />
      <Team />
    </>
  );
};

export default page;
