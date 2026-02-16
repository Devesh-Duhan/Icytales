import React from "react";
import Team from "./Team";
import SignUp from "@/components/home/SignUp";
import CommonHero from "@/components/common/CommonHero";
import Journey from "./Journey";
import Misson from "./Misson";
import Statics from "./Statics";

const page = () => {
  return (
    <div>
      <CommonHero title="About Us" />
      <Journey />
      <Misson/>
      <Statics/>
      <Team/>
      <SignUp />
    </div>
  );
};

export default page;
