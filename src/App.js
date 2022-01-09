import React from 'react'

import { LineChart } from './components/LineChart'
import { BarChart } from './components/BarChart';
import { CountryMeter } from './components/CountryMeter'
import { MultiLineChart } from './components/MultiLineChart';

import './App.css';

const App = () => {
   
  return (
    <div>
      <LineChart/>
      <BarChart/>
      <CountryMeter/>
      <MultiLineChart/>
    </div>
  )
}

export default App;