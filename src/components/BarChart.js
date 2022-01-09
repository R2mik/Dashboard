import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend,} from 'chart.js'
import {Bar} from 'react-chartjs-2'

import useAxiosFetch from '../hooks/useAxiosFetch'
import { COUNTRY_CODES } from '../utils/utils'


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

const compareCurrency = (a, b) => {
    return b.count - a.count;
}

export const BarChart = () => {
    const {data, isLoading} = useAxiosFetch(COUNTRY_CODES)
    /*filter currency from data */
    const currency = data
        .map(currencyName => currencyName["ISO4217-currency_name"]) //map all currency 
        .filter((currencyName, index, array) => array.indexOf(currencyName) === index)
        .filter(currencyName => currencyName ) //remove null from array
    
    /*counting currency by type*/
    const counts = currency
        .map(currencyName2 => ({
            type: currencyName2,
            count: data.filter(amount => amount["ISO4217-currency_name"] === currencyName2).length
        }))
        .sort(compareCurrency)

    const xAxis = counts.map(x => x.type)
    const yAxis = counts.map(y => y.count)

    return (
        <div>
            {isLoading && "Loading . . ."}
            {!isLoading && 
                <Bar
                    data = {
                        {
                            labels: xAxis,
                            datasets: [
                                {
                                label: 'Number of countries using the currency',
                                data: yAxis,
                                borderWidth: 2,
                                backgroundColor: 'rgb(102, 255, 102)',
                                borderColor: 'rgb(102, 255, 102)',
                                tension: 0.3
                                }
                            ]
                        }
                    }
                    height={2800}
                    
                    options={{
                        indexAxis: 'y',
                        maintainAspectRatio: false,
                        scales: {
                            y:{
                                    title:{
                                        display: true,
                                        text: 'Currency name',
                                        font: {
                                            size: 20
                                        }
                                }
                            },
                    }}}
                />}
        </div>
    )
}