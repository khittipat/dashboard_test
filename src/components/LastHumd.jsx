// src/components/GraphCard.js
import React from 'react';

const GraphCard = ({ data }) => {
  return (
    <div className='bg-slate-900 shadow-lg p-2 h-64 border-2 border-slate-600 overflow-auto'>
        <div className='sticky mb-2'>
            <a className='text-white text-xs font-semibold mb-4'>{`Last Humidity`}</a>
        </div>
       <div>
         <table className="table-auto w-full ">
        <thead>
          <tr>
            <th className="text-start py-1 text-xs text-white ">device_name</th>
            <th className="text-end py-1 text-xs text-white">last_humidity</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index) => (
          <tr>
          <td className="border-2 border-l-0 border-slate-600 py-1 text-xs text-white">{item.name}</td>
          <td className="border-2 border-r-0 border-slate-600 py-1 text-xs text-white text-end">{item.value}</td>
        </tr>
        ))}

        
        </tbody>
      </table>
      </div>
        </div>
   
  );
};

export default GraphCard;
