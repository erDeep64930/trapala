import React from "react";

const Para = ({ children, para }) => {
  return (
    <div>
      <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
        {para}
      </p>
    </div>
  );
};

export default Para;
