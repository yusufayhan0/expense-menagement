import React, { useRef, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function App({ datas }) {
  const plararea = useRef()
  const [calcData] = useState(Object.entries(datas).map(x => x[1].length))

  const [data] = useState({
    labels: Object.keys(datas),
    datasets: [
      {
        data: [...calcData],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  })

  return (
    <PolarArea ref={plararea} data={data} />
  )
}
