import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
        display: false,
      position: 'bottom',
    },
  },
};

const labels = ['04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','08/17 00.00','08/17 00.00','08/17 00.00'];

const dataTest = {
  labels,
  datasets: [
    {
      label: 'Sensor-Device01',
      data: [0.2,0.25,0.2,0.2,0.25,0.25,0.25,0.25,0.2,0.25,0.2,0.2,0.25,0.25,0.25,0.2,0.25,0.2,0.25,0.2,0.2],
      borderColor: 'rgb(0, 255, 0)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    
    },
  ],
};
const GraphCard = ({ title, data }) => {
  
  
  return (
    <div className='bg-slate-900 shadow-lg px-2 h-48 border-2 border-slate-600 overflow-auto'>
        <div className='mb-2'>
            <a className='text-white text-xs font-semibold mb-4'>{`Soil_Humidity`}</a>
        </div>
        <div className='flex justify-center items-center max-h-max'>
          <Line  options={options} data={dataTest} />
        </div>
    </div>
  );
};

export default GraphCard;
