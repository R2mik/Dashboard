import React from 'react'
import {Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale} from 'chart.js'
import {Line} from 'react-chartjs-2'
import useAxiosFetch from '../hooks/useAxiosFetch'
import {dataChart, options} from './LineChartOptions'

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement
    )
    
    export const LineChart = () => {
    const {data, fetchError, isLoading} = useAxiosFetch('https://datahub.io/core/population')

    return (
        <div>
            <Line
                data = {dataChart}
                height={400}
                width={600}
                options={options}
            />
        </div>
    )
}