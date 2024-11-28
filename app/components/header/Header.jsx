"use client"
import { useState } from "react";
import {  FaBars, FaTimes } from "react-icons/fa";
import Logo from '@/app/shared/Logo';




const Header = () => {
  const[open,setOpen]=useState(false);
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto ">
      <div className="flex items-center justify-between">
        {/* logo */}
        <div>
          <Logo />
        </div>
        {/* navLinks */}
        <div>
          
        </div>
        {/* button */}
        <div></div>
        {/* hamburger menu */}
        <div onClick={()=>setOpen((prev)=>!prev)} className="cursor-pointer">
          {
            open?<FaTimes />:<FaBars />
          }
        </div>
      </div>
      
    </div>
  );
}

export default Header;
