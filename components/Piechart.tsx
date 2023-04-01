import React from 'react'
import { Pie } from 'react-chartjs-2';
type Props = {}

export default function Piechart({chartData}: any) {
  return (
    <Pie data={chartData}/>
  )
}