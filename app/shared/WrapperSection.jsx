import React from 'react';

const WrapperSection = ({children}) => {
  return (
    <div className="flex flex-col items-center py-5 md:py-12 md:flex-row px-6 md:px-2">
      {children}
    </div>
  );
}

export default WrapperSection;
