import React from "react";

import { Ri24HoursFill } from "react-icons/ri";

import { GiTeacher } from "react-icons/gi";
import Wrapper from "@/app/shared/Wrapper";
import { FaComputer } from "react-icons/fa6";
import { GiPriceTag } from "react-icons/gi";

const WhyChooseData = [
  {
    id: 1,
    title: "One-on-one Teaching",
    desc: "All of our special education experts have a degree in special education.",
    icon: <GiTeacher />,
    bgColor: "#0063ff",
    delay: 0.3
  },
  {
    id: 2,
    title: "24/7 Tutor Availability",
    desc: "Our tutors are always available to respond as quick as possible for you",
    link: "/",
    icon: <Ri24HoursFill />,
    bgColor: "#73bc00",
    delay: 0.6
  },
  {
    id: 3,
    title: "Interactive Whiteboard",
    desc: "Our digital whiteboard equipped with audio and video chat fetures.",
    link: "/",
    icon: <FaComputer />,
    bgColor: "#fa6400",
    delay: 0.9
  },
  {
    id: 4,
    title: "Affordable Prices",
    desc: "Choose an expert tutor based on your budget and per hour.",
    link: "/",
    icon: <GiPriceTag />,
    bgColor: "#fe6baa",
    delay: 0.9
  }
];
const WhyChooseUs = () => {
  return (
    <div className="bg-[#f9fafc] p-4">
      <Wrapper>
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[500px] mx-auto mb-5">
          <h1 className="uppercase font-semibold text-orange-600">
            Why Choose Us
          </h1>
          <p className="font-semibold text-3xl">
            Benefits of online tutoring services with us
          </p>
        </div>
        {/* cards section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {WhyChooseData.map((item) => {
            return (
              <div
                className="space-y-4 p-6 rounded-xl shadow-[0_0_22px_rgba(0,0,0,0.15)]"
                key={item.id}
              >
                {/* icon section */}
                <div
                  style={{ backgroundColor: item.bgColor }}
                  className="w-10 h-10 rounded-lg flex justify-center items-center text-white"
                >
                  <div className="text-2xl">{item.icon}</div>
                </div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyChooseUs;
