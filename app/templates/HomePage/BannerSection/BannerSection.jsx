"use client";
import { gsap } from "gsap";
import Wrapper from "@/app/shared/Wrapper";
import WrapperSection from "@/app/shared/WrapperSection";
import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useEffect, useRef } from "react";
const BannerSection = () => {
    const textLinesRef = useRef([]);
    const imageRef = useRef(null);
  
    useEffect(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
  
      // Text animations with stagger
      tl.from(
        textLinesRef.current,
        {
          opacity: 0,
          y: 30,
          stagger: 0.2,
        },
        0.5 // Start after a slight delay
      )
        // Image animation
        .from(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "elastic.out(1, 0.75)", // Smooth bounce effect
          },
          "-=1" // Overlap with text animation
        );
    }, []);
  
  return (
    <Wrapper>
      <WrapperSection>
        {/* left */}
        <div className="flex-1">
          <div className="flex-col p-2">
            <p
              ref={(el) => (textLinesRef.current[0] = el)}
              className="bg-white text-deepPink inline-block px-5 py-3 rounded-lg font-semibold text-red-400 hover:text-red-500 shadow-md border border-red-100"
            >
              Never Stop Learning
            </p>
            <h1
              ref={(el) => (textLinesRef.current[1] = el)}
              className="font-bold text-slate-950 text-5xl py-3 leading-[75px]"
            >
              Grow up your skills by online courses with Trapala.{" "}
            </h1>
            <p ref={(el) => (textLinesRef.current[2] = el)} className="font-semibold text-gray-500 leading-9">
              Find your perfect tutor. Watch and Learn lessons from 200+ of the
              world's leading thinkers and experts.{" "}
            </p>
            {/* this is for search course form */}
            <div className="flex bg-white border border-gray-500 rounded-lg flex-row items-center space-x-2 mt-6 w-full px-5 py-1">
              <select className="border-r border-gray-600 pr-4">
                <option>UPSC</option>
                <option>SSC</option>
                <option>RAILWAY</option>
                <option>BANKING</option>
              </select>
              <input
                type="text"
                placeholder="type subject name.."
                className="pl-4 ml-4 px-3 py-1 flex-1"
              />

              <button className="flex items-center space-x-2 hover:bg-slate-800 bg-slate-950 text-white px-5 py-3 rounded-md flex-1 text-center">
                <FaSearch className="mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="flex-1 relative">
          <Image
            ref={imageRef}
            src="/bird.png"
            width="1800"
            height="980"
            alt="bird"
            className="rounded-3xl shadow-2xl bg-cover bg-center"
          />
          <h1
            ref={(el) => (textLinesRef.current[3] = el)}
            className="absolute bottom-16 italic text-4xl bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text left-0 right-0 text-center font-bold text-transparent"
          >
            "The best view always comes from the top."
          </h1>
        </div>
      </WrapperSection>
    </Wrapper>
  );
};

export default BannerSection;
