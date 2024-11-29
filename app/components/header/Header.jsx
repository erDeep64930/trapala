"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "@/app/shared/Logo";
import { navLinks } from "@/app/constant/navLinks";
import Link from "next/link";


const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto ">
      <div className="flex items-center justify-between">
        {/* logo */}

        <Logo />

        {/* navLinks */}
        <div className="flex space-x-3 text-xs tracking-tighter">
          {navLinks.map((nav, index) => {
            return nav.dropdown ? (
              <div key={index} className="relative">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="block"
                >
                  {nav.name}
                </button>
                {activeDropdown === index && (
                  <div className="absolute bg-gray-300 mt-3">
                    {nav.dropdown.map((subNav) => {
                      return (
                        <Link
                          href={subNav.href}
                          key={subNav.name}
                          className="block"
                        >
                          {subNav.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ) : (
              <Link href={nav.href} key={nav.name} className="block">
                {nav.name}
              </Link>
            );
          })}
        </div>
        {/* button */}
        <div>
          <button className="text-xs tracking-tight px-3 py-1 border-[1px] border-offerColor rounded-lg">Getting Started</button>
        </div>
        {/* hamburger menu */}
        <div
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer "
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Header;
