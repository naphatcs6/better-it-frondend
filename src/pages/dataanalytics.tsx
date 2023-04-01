import React from 'react'
import { useState, useEffect } from 'react';
import Piechart from '../../components/Piechart'
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from 'chart.js';
import api from '../../services/api';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);

type Data = {
  intent_name: string
  sub_intent_name: string
  point: number
}

export default function Dataanalytics({ data }: { data: Data[] }) {

  const [dataChart, setDatachart] = useState({
    intent: "",
    sub: "",
    point: 0,

  })
  data.map((item, index) => {
    dataChart.intent = item.intent_name
    dataChart.sub = item.sub_intent_name
    dataChart.point = item.point
  })

  const [pieData, setPieData] = useState({
    labels: ['Green', 'Orange', 'Purple'],
    datasets: [{
      label: "New Visit",
      data: [15, 25, 35],
      backgroundColor: [
        'green',
        'orange',
        'purple'
      ]
    }]
  });


  return (
    <>
      <div>
        <Piechart data={pieData} />
      </div>
    </>

  )
}

export async function getServerSideProps() {
  const res = await api.get('intents')
  const data = res.data
  return {
    props:
    {
      data,
    }
  };
}