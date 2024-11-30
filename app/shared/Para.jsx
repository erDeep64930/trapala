import React from 'react';

const Para = ({children,para}) => {
  return (
    <div>
      <p className="text-gray-400 mt-2 mb-2 p-2">{para}</p>
    </div>
  );
}

export default Para;
