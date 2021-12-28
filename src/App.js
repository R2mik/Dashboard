import React from 'react'

import {BarChart} from './components/BarChart'
import {LineChart} from './components/LineChart'
import useAxiosFetch from './hooks/useAxiosFetch'

import './App.css';


const App = () => {
  
  const {data, fetchError, isLoading} = useAxiosFetch('http://localhost:8000/posts')
  
  return (
    <div>
      <BarChart/>
      <LineChart/>

    </div>
  )
}

export default App;