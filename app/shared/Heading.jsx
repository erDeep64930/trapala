import React from 'react';

const Heading = ({children,heading}) => {
  return (
    <div >

      <h2  className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">{heading}</h2>
      
    </div>
  );
}

export default Heading;
