import React from 'react'

import { LineChart } from './components/LineChart'
import { BarChart } from './components/BarChart';

import './App.css';

const App = () => {
   
  return (
    <div>
      <LineChart/>
      <BarChart/>
    </div>
  )
}

export default App;