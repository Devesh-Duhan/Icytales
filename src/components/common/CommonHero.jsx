"use client";

import React from "react";
import { usePathname } from "next/navigation";

const CommonHero = ({ title, breadcrumb }) => {
  const pathname = usePathname();

  // Breadcrumb me active color auto apply karega
  const enhancedBreadcrumb = React.Children.map(breadcrumb, (child) => {
    if (!React.isValidElement(child)) return child;

    // Agar Link hai
    if (child.props?.href) {
      const isActive = pathname === child.props.href;

      return React.cloneElement(child, {
        children: React.cloneElement(child.props.children, {
          className: `
              ${child.props.children.props?.className || ""}
              ${isActive ? "text-500" : ""}
            `,
        }),
      });
    }

    return child;
  });

  return (
    <section className="w-full py-37.5 bg-[linear-gradient(106.17deg,#EFD7EF_8%,#F5F9FC_40%,#F8EAE1_66%,#EAF8F9_91%)] flex flex-col gap-8.75 items-center justify-center">
      {/* Title */}
      <h1 className="text-[80px] md:text-6xl berkshire leading-20 font-semibold text-darkbrown">
        {title}
      </h1>

      {/* Breadcrumb */}
      <div className="px-8.5 py-4.5 rounded-[35px] bg-white shadow-[0px_2px_73px_2px_#0000000D] text-lg flex gap-8.5">
        {enhancedBreadcrumb}
      </div>
    </section>
  );
};

export default CommonHero;
