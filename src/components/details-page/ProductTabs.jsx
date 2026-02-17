"use client";
import { useState } from "react";

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "info", label: "Additional Information" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <section className="container  pt-17.5 max-md:pt-14 max-sm:pt-8">
      {/* Tabs Header */}
      <div className="border-b border-[#E3E4E5]">
        <div className="flex gap-10.5 max-md:gap-7 max-sm:gap-5">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-5.5 max-md:pb-3 max-sm:pb-2 max-md:text-base cursor-pointer max-md:font-semibold font-bold relative text-lg transition-all duration-300
                ${
                  activeTab === tab.id
                    ? "text-pink"
                    : "text-darkbrown hover:text-pink-400"
                }`}
            >
              {tab.label}

              {/* Pink underline */}
              {activeTab === tab.id && (
                <span className="absolute left-0 bottom-0 w-full h-0.75 bg-pink-500 "></span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Content */}
      <div className="pt-8.75 pb-11.75 max-md:py-6 max-sm:py-4 text-lightgray border-b border-[#E3E4E5] leading-7 max-md:leading-5 max-md:text-sm max-sm:text-xs max-sm:leading-4  max-w-274.5 w-full">
        {/* DESCRIPTION */}
        {activeTab === "description" && (
          <div className="space-y-6.5 max-md:space-y-4 max-sm:space-y-2">
            <p>
              Ratione volurtatem serui nesciunt neaue porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
              sed quia non numquam eius modi tempora incidunt ut labore et
              dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </p>

            <p>
              Quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt porro quisquam est, qui dolore ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptate ruis aute irure dolor in reprehenderit.
            </p>
          </div>
        )}

        {/* ADDITIONAL INFO */}
        {activeTab === "info" && (
          <div className="space-y-3">
            <p>
              <span className="font-semibold text-gray-700">Weight:</span> 250g
            </p>
            <p>
              <span className="font-semibold text-gray-700">Shelf Life:</span>{" "}
              12 Months
            </p>
            <p>
              <span className="font-semibold text-gray-700">Storage:</span> Keep
              Frozen (-18°C)
            </p>
            <p>
              <span className="font-semibold text-gray-700">Ingredients:</span>{" "}
              Milk, Cream, Sugar, Vanilla Extract
            </p>
          </div>
        )}

        {/* REVIEWS */}
        {activeTab === "reviews" && (
          <div className="space-y-6 max-md:space-y-4 max-sm:space-y-2">
            <div className="border-b pb-4">
              <p className="font-semibold text-gray-800">Rahul ⭐⭐⭐⭐⭐</p>
              <p className="text-sm max-sm:text-xs mt-1">
                Best vanilla ice cream I have ever tasted. Super creamy!
              </p>
            </div>

            <div className="border-b pb-4">
              <p className="font-semibold text-gray-800">Priya ⭐⭐⭐⭐</p>
              <p className="text-sm max-sm:text-xs mt-1">
                Very good quality. Packaging was also nice.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800">Amit ⭐⭐⭐⭐⭐</p>
              <p className="text-sm max-sm:text-xs mt-1">
                Perfect dessert after dinner. Will buy again.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
