import React from 'react'
import { useState, useEffect } from 'react';
import Piechart from '../../components/Piechart'
import api from '../../services/api';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(CategoryScale, ChartDataLabels);

type Data = {
  intent_name: string
  sub_intent_name: string
  point: number
}

export default function Dataanalytics({ dataPie }: { dataPie: Data[] }) {

  const [dataChart, setDatachart] = useState({
    intent: "",
    sub: "",
    point: 0,
  })

  dataPie.map((item, index) => {
    dataChart.intent = item.intent_name
    dataChart.sub = item.sub_intent_name
    dataChart.point = item.point
  })

  const [option, setOption] = useState({
    plugins: {
      datalabels: {
        formatter: (value: any) => {
          let sum = 0
          for(let i=0;i<dataPie.length;i++){
            sum += dataPie[i].point
          }
          return Math.round((value / sum) * 100) + '%'
        },
        color: 'white',
        display: true,
        align: 'bottom',
        borderRadius: 3,
        font: {
          size: 25,
        },
      },
    },
  })
  const [pieData, setPieData] = useState({
    labels: dataPie.map((data) => data.intent_name),
    datasets: [
      {
        label: 'Intents',
        data: dataPie.map((data) => data.point),
        backgroundColor: [
          'rgba(0, 199, 0, 1)',
          'rgba(255, 6, 0, 0.6)',
          'rgba(0, 6, 255, 1)',
          'rgba(172, 141, 153, 1)',
          'rgba(172, 141, 0, 1)',
          'rgba(0, 6, 84, 1)',
        ],
      },
    ],
  });

  return (
    <>
      <title>Data Analytics</title>
      <div className="bg-white m-5 rounded-lg shadow-lg">
        <div className='m-5 pt-4 text-2xl'>
          Overview
        </div>
        <div className='flex flex-wrap justify-center'>
          <div className="w-2/5 p-5">
            <Piechart className='scale-90' chartData={pieData} options={option} />
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await api.get('intents')
  const dataPie = res.data
  return {
    props:
    {
      dataPie,
    }
  };
}

