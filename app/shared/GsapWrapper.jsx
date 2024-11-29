"use client"; // Marks this as a client component

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GsapWrapper = ({ children, animations }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    if (wrapperRef.current && animations) {
      // Apply GSAP animations
      const ctx = gsap.context(() => {
        animations(wrapperRef.current);
      });
      return () => ctx.revert(); // Clean up animations on unmount
    }
  }, [animations]);

  return <div ref={wrapperRef}>{children}</div>;
};

export default GsapWrapper;
