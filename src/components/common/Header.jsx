"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./Helper";
import { Clipboard, Dropdown } from "./Icons";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm py-3">
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0">
            <Image
              src="/images/logo.png"
              alt="IcyTales"
              width={154}
              height={50}
              className="h-[50px] w-auto"
            />
          </Link>

          
          <div className="flex gap-[57.86px] items-center">
            <div>
            <ul className="flex gap-10">
            {NavLinks.map((link, index) => (
              <li key={index} className="relative">
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className={`flex items-center text-[#0F0200] gap-1 text-[16px] font-medium cursor-pointer transition-colors ${
                        link.isActive
                          ? "text-pink"
                          : "text-darkbrown hover:text-pink"
                      }`}
                    >
                      {link.label}
                      <Dropdown/>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                        {link.dropdownItems.map((item, i) => (
                          <Link
                            key={i}
                            href={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink/10 hover:text-pink transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.path}
                    className={`text-[15px] font-medium transition-colors ${
                      link.isActive
                        ? "text-pink"
                        : "text-darkbrown hover:text-pink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          </div>

          {/* Right Section - Search, Notification & Contact grouped together */}
          <div className="flex items-center gap-[52px]">
            <div className="flex gap-[32px]">
              {/* Search Icon */}
            <button className="text-darkbrown hover:text-pink transition-colors cursor-pointer">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Notification Bell */}
            <button className="relative text-darkbrown hover:text-pink transition-colors cursor-pointer">
              <Clipboard/>
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink rounded-full flex items-center justify-center">
                <span className="text-white text-[9px] font-bold">0</span>
              </span>
            </button>

            </div>
            {/* Contact Us Button */}
            <div>
              <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#f83d8e] to-[#f9825c] text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-pink/30 transition-all duration-300 hover:scale-105"
            >
              Contact Us
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            </div>
          </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;