"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const HeroSection = () => {
  const textRef = useRef();
  const buttonRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    // GSAP animations
    const timeline = gsap.timeline();
    timeline
      .fromTo(
        textRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.6 },
        "-=0.5"
      )
      .fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.5"
      );
  }, []);

  return (
    <section className="  flex items-center w-11/12 mx-auto">
      <div className=" px-4 lg:flex lg:items-center lg:justify-between">
        {/* Text Section */}
        <div ref={textRef} className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            Grow up your skills by online courses with Trapala
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Discover the best study materials, courses, and test series to help
            you excel.
          </p>
          <div ref={buttonRef}>
            <a
              href="#explore"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-gray-100 transition"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center"
        >
          <Image
            width={680}
            height={360}
            src="/banner.png"
            alt="Hero Illustration"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
