import React from 'react';

const Heading = ({children,heading}) => {
  return (
    <div >

      <h2 className='text:2xl md:text-4xl text-slate-900 font-bold leading-10 text-center mt-3 mb-3'>{heading}</h2>
      
    </div>
  );
}

export default Heading;
