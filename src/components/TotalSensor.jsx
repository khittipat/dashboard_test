// src/components/GraphCard.js
import React from 'react';

const GraphCard = ({ title, data }) => {
  return (
    <div className='bg-slate-900 shadow-lg p-2 h-64 border-2 border-slate-600 overflow-auto'>
        <div>
            <a className='text-white text-xs font-semibold mb-4 text-ellipsis'>{`Total Sensor(s)`}</a>
        </div>
        <div className='text-center mt-10 sm:mt-4 md:mt-0'>
            <b className='text-green-400 text-[64px] sm:text-[96px] md:text-[128px] lg:text-[132px]'>8</b>
        </div>
    </div>
  );
};

export default GraphCard;
