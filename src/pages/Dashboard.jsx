// src/Dashboard.js
import React from 'react';
import TotalSensor from '../components/TotalSensor'
import LastTemp from '../components/LastTemp'
import LastHumd from '../components/LastHumd'
import Temp from '../components/Temp'
import TempGraph from '../components/TempGraph'
import HumdGraph from '../components/HumdGraph'
import SoilTemp from '../components/SoilTemp'
import SoilHumd from '../components/SoilHumd'
import {dataTemp , lastTemp} from '../utils/data'


const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Sample Data',
        data: [12, 19, 3, 5, 2],
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
    <div className='grid grid-cols-12 gap-2 p-2'>
      <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2"><TotalSensor title='Graph 2' data={chartData} /></div>
      <div className="col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-3"><LastTemp  data={lastTemp} /></div>
      <div className="col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-3"><LastHumd  data={lastTemp} /></div>
      <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4"><Temp data={dataTemp} /></div>
    </div>
    <div className='grid grid-cols-12 gap-2 p-2 pt-0'>
      <div className="col-span-12 lg:col-span-6"><TempGraph title='Graph 2' data={chartData} /></div>
      <div className="col-span-12 lg:col-span-6"><HumdGraph title='Graph 2' data={chartData} /></div>
    </div>
    <div className='grid grid-cols-12 gap-2 p-2 pt-0'>
      <div className="col-span-12 lg:col-span-6"><SoilTemp title='Graph 2' data={chartData} /></div>
      <div className="col-span-12 lg:col-span-6"><SoilHumd title='Graph 2' data={chartData} /></div>
    </div>
      </>
  );
};

export default Dashboard;
