"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "./Helper";
import { homeProducts } from "./Helper";
import { Clipboard, ContactArrow, Dropdown, CartIcon } from "./Icons";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="py-3 relative z-50">
      <div className=" max-w-362.5 w-full mx-auto px-4">
        <nav className="flex items-center justify-between" ref={menuRef}>
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 outline-none shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="IcyTales"
              width={154}
              height={50}
              className="h-10 lg:h-12.5 w-auto"
            />
          </Link>

          {/* ========== DESKTOP NAV (lg and up) ========== */}
          <div className="hidden lg:flex gap-[57.86px] items-center">
            <div className="px-2">
              <ul className="flex gap-10">
                {NavLinks.map((link, index) => (
                  <li key={index} className="relative">
                    {link.hasDropdown ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(link.label)}
                          className="flex items-center gap-1 text-[16px] font-medium cursor-pointer transition-colors text-darkbrown hover:text-pink"
                        >
                          {link.label}
                          <Dropdown />
                        </button>
                        {openDropdown === link.label && (
                          <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                            {link.dropdownItems.map((item, i) => (
                              <Link
                                key={i}
                                href={item.path}
                                onClick={() => setOpenDropdown(null)}
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
                        className="text-[15px] font-medium transition-colors text-darkbrown hover:text-pink"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section - Search, Notification & Contact */}
            <div className="flex items-center gap-13">
              <div className="flex gap-8 pl-[17.86px]">
                {/* Search Icon */}
                <div className="relative" ref={searchRef}>
                  <button
                    onClick={() => setSearchOpen(!searchOpen)}
                    className="text-darkbrown hover:text-pink transition-colors cursor-pointer"
                  >
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
                  {searchOpen && (
                    <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-50">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
                            setSearchOpen(false);
                          }
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink"
                      />
                      {searchTerm && (
                        <div className="mt-2 max-h-40 overflow-y-auto">
                          {homeProducts
                            .filter((product) =>
                              product.heading
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase()),
                            )
                            .slice(0, 5)
                            .map((product, index) => (
                              <div
                                key={index}
                                onClick={() => {
                                  window.location.href = `/products?search=${encodeURIComponent(product.heading)}`;
                                  setSearchOpen(false);
                                }}
                                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                              >
                                {product.heading}
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Cart Icon */}
                <Link
                  href="/cart"
                  className="relative text-darkbrown hover:text-pink transition-colors"
                >
                  <CartIcon />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink rounded-full flex items-center justify-center">
                      <span className="text-white text-[9px] font-bold">
                        {cartItems.length}
                      </span>
                    </span>
                  )}
                </Link>
              </div>

              {/* Contact Us Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex gap-[19.67px] items-center px-[26.47px] py-4.25 bg-linear-to-r from-[#f83d8e] to-[#f9825c] text-white text-[16px] font-bold rounded-full hover:shadow-lg hover:shadow-pink/30 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                  <ContactArrow />
                </Link>
              </div>
              <div className="flex items-center gap-4">
                {user ? (
                  <>
                    <span className="text-sm text-slate-700">
                      Hi, {user.name}
                    </span>
                    <button
                      type="button"
                      onClick={logout}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-sm font-medium text-slate-700 hover:text-pink"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="text-sm font-medium text-slate-700 hover:text-pink"
                    >
                      Register
                    </Link>
                    <Link
                      href="/admin/login"
                      className="text-sm font-medium text-pink"
                    >
                      Admin
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* ========== MOBILE/TABLET RIGHT ICONS ========== */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-darkbrown hover:text-pink transition-colors cursor-pointer"
              >
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
              {searchOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-50">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        window.location.href = `/products?search=${encodeURIComponent(searchTerm)}`;
                      }
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink"
                  />
                </div>
              )}
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative text-darkbrown hover:text-pink transition-colors"
            >
              <CartIcon />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-pink rounded-full flex items-center justify-center">
                  <span className="text-white text-[9px] font-bold">
                    {cartItems.length}
                  </span>
                </span>
              )}
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex flex-col items-center justify-center w-10 h-10 rounded-lg cursor-pointer transition-colors hover:bg-pink/10"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-darkbrown rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-darkbrown rounded-full mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-darkbrown rounded-full mt-1 transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </div>

      {/* ========== MOBILE/TABLET OVERLAY ========== */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* ========== MOBILE/TABLET SLIDE-IN MENU ========== */}
      <div
        className={`fixed top-0 right-0 h-full w-75 sm:w-90 bg-white z-50 lg:hidden transform transition-transform duration-300 ease-in-out shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link
            href="/"
            className="outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/logo.png"
              alt="IcyTales"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-pink/10 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-darkbrown"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <div className="overflow-y-auto h-[calc(100%-80px)] px-6 py-4">
          <div className="flex items-center justify-between mb-6">
            {user ? (
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-800">
                  Welcome, {user.name}
                </p>
                <button
                  type="button"
                  onClick={logout}
                  className="text-sm text-slate-700 hover:text-pink"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <Link
                  href="/login"
                  className="text-sm font-medium text-slate-700 hover:text-pink"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-sm font-medium text-slate-700 hover:text-pink"
                >
                  Register
                </Link>
                <Link
                  href="/admin/login"
                  className="text-sm font-medium text-pink"
                >
                  Admin login
                </Link>
              </div>
            )}
          </div>
          <ul className="flex flex-col gap-1">
            {NavLinks.map((link, index) => (
              <li key={index}>
                {link.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(link.label)}
                      className="flex items-center justify-between w-full py-3 px-3 rounded-lg text-[16px] font-medium cursor-pointer transition-all text-darkbrown hover:text-pink hover:bg-pink/5"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === link.label
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 py-1 flex flex-col gap-1">
                        {link.dropdownItems.map((item, i) => (
                          <Link
                            key={i}
                            href={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2.5 px-3 text-sm text-gray-600 hover:text-pink hover:bg-pink/5 rounded-lg transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 px-3 rounded-lg text-[16px] font-medium transition-all text-darkbrown hover:text-pink hover:bg-pink/5"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Contact Button */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 w-full py-4 bg-linear-to-r from-[#f83d8e] to-[#f9825c] text-white text-[16px] font-bold rounded-full hover:shadow-lg hover:shadow-pink/30 transition-all duration-300"
            >
              Contact Us
              <ContactArrow />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
