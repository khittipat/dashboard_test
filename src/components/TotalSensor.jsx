// src/components/GraphCard.js
import React from 'react';

const GraphCard = ({ title, data }) => {
  return (
    <div className='bg-slate-900 shadow-lg p-2 h-64 border-2 border-slate-600'>
        <div>
            <a className='text-white text-xs font-semibold mb-4'>{`Total Sensor(s)`}</a>
        </div>
        <div className='h-max text-center'>
            <b className='text-green-400 text-[96px] md:text-[128px] lg:text-[144px]'>8</b>
        </div>
    </div>
  );
};

export default GraphCard;
