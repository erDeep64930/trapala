import React from 'react';
import { navLinks } from "@/app/constant/navLinks";
import Image from "next/image";
import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 border-b-2 border-t-[1px] border-pri items-center">
        {/* logo  */}
        <div className="flex flex-col items-center justify-center space-y-10 my-4">
          <Image src="/trapala.png" alt="logo" width="80" height="80" className="rounded-full"/>
          <p className="text-sec">© <span className="text-pri">All Right Reserved 2025</span></p>

        </div>
        {/* link */}
        <div className="my-4">
          <p className="text-2xl font-bold text-center mb-4">Pages</p>
          <ul className="text-center space-y-8 ">
            {navLinks.map((link,i)=>{
              return (
                <Link href={link.href} key={i}>
                  <li  className=" font-semibold hover:text-gray-500  cursor-pointer">{link.name}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        {/* contact */}
        <div className="flex flex-col space-y-2 my-4 md:my-0 lg:-my-4 ">
          <p className="text-2xl font-semibold  ">Contact Me</p>

          <div className="flex items-center p-2 space-x-4">
            <FaPhone />
            <p>+91-6545358725</p>

          </div>

          {/*  */}

          <div className="flex space-x-4  items-center p-2 ">
          <SiGmail />
            <p>info@trapala.com</p>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
