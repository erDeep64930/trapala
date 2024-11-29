"use client"
import { navLinks } from "@/app/constant/navLinks";
import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState(false); // New state for link visibility
  const navRef = useRef();

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setLinksVisible(!linksVisible); // Toggle link visibility
  };

  // Close the menu when clicked outside
  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false);
      setLinksVisible(false); // Close the links when clicking outside
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white fixed w-full z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">Trapala</div>

        {/* Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Nav Links */}
        <div
          ref={navRef}
          className={`lg:flex lg:items-center lg:static absolute bg-red-600 top-full left-0 w-full lg:w-auto transition-all duration-300 ease-in-out border  ${
            isOpen || linksVisible ? "max-h-screen " : "lg:max-h-6 max-h-0 overflow-hidden "
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6 p-4 lg:p-0">
            {navLinks.map((link) => (
              <li key={link.id} className="hover:text-gray-300">
                <a href={link.href} className="block py-2 lg:py-0">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
