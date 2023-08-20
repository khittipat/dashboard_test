import React from 'react';

const GradientBar = ({ data }) => {

  const calculateGradient = (value) => {
    const red = Math.min(255, Math.floor((100 - value) * 5.1));
    const green = Math.min(255, Math.floor(value * 5.1));
    return `linear-gradient(to right, rgb(255, ${green}, 0), rgb(${red}, ${green}, 0), rgb(0, ${green}, 0))`;
  };

  const getColorClass = (value) => {
    if (value < 33) {
      return 'red';
    } else if (value < 66) {
      return 'yellow';
    } else {
      return 'green';
    }
  };

  return (
    <div className='bg-slate-900 shadow-lg p-2 h-64 border-2 border-slate-600 overflow-auto'>
        <div className='mb-2'>
            <a className='text-white text-xs font-semibold mb-4'>{`Temperature`}</a>
        </div>
        {data.map((item,index) => (
            <div key={index} className='flex'>
            <a className='text-[10px] text-white my-auto w-4/12'>{item.name}</a>
            <div className='w-full'>
            <div
            key={index}
                className="h-4 m-1"
                style={{
                    background: calculateGradient(item.value),
                    width: `${item.value / 1.2}%`,
                }}
                />
                </div>
                <b className='text-xs my-auto w-1/12 font-blod' style={{color : getColorClass(item.value)}}>{item.value}</b>
                </div>
        ))}
    
    </div>
  );
};

export default GradientBar;
