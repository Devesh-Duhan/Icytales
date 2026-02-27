/** @format */

"use client";

/** @format */

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { BlogCategories } from "../common/Helper";

const BlogNav = () => {
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("category") || "All";

  return (
    <div className="flex container gap-[28.38px] justify-center mt-33.5">
      {BlogCategories.map((category, index) => {
        const isActive = activeCategory === category.bloglink;
        return (
          <Link
            key={index}
            href={`/blog?category=${category.bloglink}&page=1`}
            className={`p-[16px_34px] text-center items-center text-xl rounded-4xl duration-300 ${
              isActive ? "bg-[#F83D8E] text-white" : ""
            }`}>
            {category.bloglink}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogNav;
