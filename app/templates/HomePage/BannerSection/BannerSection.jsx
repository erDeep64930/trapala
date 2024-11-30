
import Wrapper from "@/app/shared/Wrapper";
import WrapperSection from "@/app/shared/WrapperSection";
import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const BannerSection = () => {

  
  return (
    <Wrapper>
      <WrapperSection>
        {/* left */}
        <div className="flex-1 p-6 space-y-4 ">
          <div className="flex-col p-2">
            <p
              
              className="bg-white items-center text-deepPink inline-block px-5 py-3 rounded-lg font-semibold text-red-400 hover:text-red-500 shadow-md border border-red-100"
            >
              Never Stop Learning
            </p>
            <h1
             
              className="font-bold text-slate-950 text-lg md:text-5xl py-3 md:leading-[75px]"
            >
              Grow up your skills by online courses with Trapala.{" "}
            </h1>
            <p  className="font-semibold text-gray-500 leading-9">
              Find your perfect tutor. Watch and Learn lessons from 200+ of the
              world leading thinkers and experts.{" "}
            </p>
            {/* this is for search course form */}
            <div className="flex flex-col md:flex-row md:bg-white md:border md:border-gray-500 rounded-lg  items-center md:space-x-2 space-y-4 md:space-y-0 mt-6 w-full px-5 py-1">
              <select className="md:border-r md:border-gray-600 pr-4 bg-pink-100 lg:bg-transparent md:bg-none px-5 md:px-0 py-2 md:py-0 rounded-lg mr-4 ">
                <option>UPSC</option>
                <option>SSC</option>
                <option>RAILWAY</option>
                <option>BANKING</option>
              </select>
              <input
                type="text"
                placeholder="type subject name.."
                className="pl-4 ml-4 px-3 py-1 flex-1 border border-gray-100 rounded-md"
              />

              <button className="flex items-center space-x-2 hover:bg-slate-800 bg-slate-950 text-white px-5 py-3 rounded-md flex-1 text-center">
                <FaSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 relative ">
          <Image
            
            src="/bird.png"
            width="1800"
            height="980"
            alt="bird"
            className="rounded-3xl shadow-2xl bg-cover bg-center"
          />
          <h1
            
            className="absolute bottom-4 md:bottom-16 text-lg italic md:text-4xl bg-gradient-to-r from-slate-500 to-slate-900 bg-clip-text left-0 right-0 text-center font-bold text-transparent"
          >
            The best view always comes from the top.
          </h1>
        </div>
      </WrapperSection>
    </Wrapper>
  );
};

export default BannerSection;
