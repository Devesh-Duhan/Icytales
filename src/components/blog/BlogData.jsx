/** @format */

import Image from "next/image";
import React from "react";
import { AdminIcon, CalenderIcon } from "../common/Icons";
import { BlogCards } from "../common/Helper";

const BlogData = ({ cards = BlogCards }) => {
  return (
    <div className="container grid grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.blogcardimage + card.blogcardtitle}
          className=" cursor-pointer max-w-135 w-full rounded-xl shadow-[0_6px_41px_6px_#0000000D] m-[40px_50px] pb-5.75">
          <Image
            className="rounded-t-xl"
            src={card.blogcardimage}
            width={540}
            height={285}
            alt={card.blogcardtitle}
          />
          <div className="p-[0_30px]">
            <div className="flex gap-5 mt-7.5 cursor-pointer">
              <div className="flex items-center gap-[7.41px]">
                <AdminIcon />
                <p className="text-lightbrown text-[12px]">Posted by Admin</p>
              </div>
              <div className="flex items-center gap-[7.41px]">
                <CalenderIcon />
                <p className="text-lightbrown text-[12px]">October 30, 2022</p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-xl leading-6.5 mt-5.75">
                {card.blogcardtitle}
              </h3>
              <p className="text-lightbrown leading-6.5 mt-3.25 max-w-109.25 w-full">
                {card.blogcardtext}
              </p>
            </div>
            <div className="group inline-block">
              <button className="button-underline text-sm font-bold leading-5 mt-8.75 cursor-pointer">
                {card.blogcardbutton}
              </button>
              <div className="button-underline bg-black w-5 group-hover:w-full h-0.75"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogData;
