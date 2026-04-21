"use client";

import { usePathname } from "next/navigation";
import Form from "@/app/(user)/checkout/Form";
import React from "react";

const page = () => {
  const pathname = usePathname();

  return (
    <div className="bg-[#F8F6FB] min-h-screen">
      <Form />
    </div>
  );
};

export default page;
