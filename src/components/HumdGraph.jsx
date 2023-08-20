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
      position: 'bottom',
    },
  },
};

const labels = ['04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00','04/17 12.00','08/17 00.00'];

const dataTest = {
  labels,
  datasets: [
    {
      label: 'Sensor-Device01',
      data: [100,100,100,100,100,100,100,100,98,99,100,100,100,98,100,100,100,100,100,100,],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Sensor-Device02',
      data: [100,50,48,46,52,60,98,87,60,86,50,40,80,98,80,98,60,80,90,98,],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Sensor-Device03',
      data: [28,18,59,65,12,12,26,32,60,12,10,36,49,50,60,30,46,59,50,36,],
      borderColor: 'rgb(142, 162, 112)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Sensor-Device04',
      data : [28,18,59,65,66,12,26,68,60,50,66,36,49,50,66,30,46,66,50,36,],
      borderColor: 'rgb(156, 12, 52)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Sensor-Device05',
      data: [28,33,59,22,70,12,26,68,60,44,10,36,49,50,60,30,46,59,50,11,],
      borderColor: 'rgb(255, 12, 52)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Sensor-Device06',
      data: [50,22,33,22,70,55,26,68,60,44,33,11,49,50,11,30,22,59,50,60,],
      borderColor: 'rgb(255, 252, 52)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};
const GraphCard = ({ title, data }) => {
  
  
  return (
    <div className='bg-slate-900 shadow-lg px-2 h-48 border-2 border-slate-600 overflow-auto'>
        <div className='mb-2'>
            <a className='text-white text-xs font-semibold mb-4'>{`Humidity`}</a>
        </div>
        <div className='flex justify-center items-center max-h-max'>
          <Line  options={options} data={dataTest} />
        </div>
    </div>
  );
};

export default GraphCard;
