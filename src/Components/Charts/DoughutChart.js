import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App({ datas }) {
  const doughutchart = useRef()
  const [calcData] = useState(Object.entries(datas).map(x => x[1].reduce((acc, cur) => acc + parseFloat(cur), 0)))
  const [data] = useState({
    labels: Object.keys(datas),
    datasets: [
      {
        label: '# of Votes',
        data: [...calcData],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  })
  
  return (
    <Doughnut 
      ref={doughutchart}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }} 
      data={data} 
    />
  )
}
